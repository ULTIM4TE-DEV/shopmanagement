import { EntityRepository, Repository } from 'typeorm'
import { ProductCategory } from '../models/ProductCategory'
@EntityRepository(ProductCategory)
export class ProductCategoryRepository extends Repository<ProductCategory> {}
