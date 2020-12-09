import { DeleteResult, EntityRepository, getCustomRepository, Repository } from 'typeorm'
import { Product } from '../models/Product'
@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
	public async getProducts(): Promise<Product[] | undefined> {
		const arrProduct = await getCustomRepository(ProductRepository)
			.createQueryBuilder('product')
			.leftJoinAndSelect('product.productCategoryId', 'productCategory')
			.where('productCategory.id =3')
			.getMany()
		return arrProduct
	}

	public async getProductsByStoreId(storeId: number): Promise<Product[] | undefined> {
		const arrProduct = await getCustomRepository(ProductRepository)
			.createQueryBuilder('product')
			.leftJoinAndSelect('product.storeId', 'store')
			.where('store.id =:storeId', { storeId: storeId })
			.getMany()
		return arrProduct
	}

	public async getProductById(productId: number): Promise<Product | undefined> {
		const objProduct = await getCustomRepository(ProductRepository)
			.createQueryBuilder('product')
			.where('product.id = :productId', { productId: productId })
			.getOne()
		return objProduct
	}

	public async createProduct(product: Product): Promise<Product | undefined> {
		return await getCustomRepository(ProductRepository).save(product)
	}

	public async editProduct(product: Product): Promise<Product | undefined> {
		return await getCustomRepository(ProductRepository).save(product)
	}

	public async deleteProduct(productId: number): Promise<Product | undefined | DeleteResult> {
		return await getCustomRepository(ProductRepository).delete({ id: productId })
	}
}
