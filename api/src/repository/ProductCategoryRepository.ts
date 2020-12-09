import { EntityRepository, getCustomRepository, Repository } from 'typeorm'
import { ProductCategory } from '../models/ProductCategory'
@EntityRepository(ProductCategory)
export class ProductCategoryRepository extends Repository<ProductCategory> {
	public async getProductCategories(): Promise<ProductCategory[] | undefined> {
		const arrProductCategory = await getCustomRepository(ProductCategoryRepository)
			.createQueryBuilder('productCategory')
			.getMany()
		return arrProductCategory
	}

	public async getProductCategoryById(
		productCategoryId: number
	): Promise<ProductCategory | undefined> {
		const objStore = await getCustomRepository(ProductCategoryRepository)
			.createQueryBuilder('productCategory')
			.where('productCategory.productCategoryId = :productCategoryId', {
				productCategoryId: productCategoryId,
			})
			.getOne()
		return objStore
	}
}
