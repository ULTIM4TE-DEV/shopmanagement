import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ProductCategory } from './ProductCategory'

@Entity({ name: 'product' })
export class Product {
	@PrimaryGeneratedColumn({ name: 'productId' })
	public productId: number

	@Column({ name: 'productName', type: 'varchar' })
	public productName: string

	@Column({ name: 'productDetail', type: 'varchar' })
	public productDetail: string

	@Column({ name: 'productPrice', type: 'int' })
	public productPrice: number

	@Column({ name: 'productUnit', type: 'varchar' })
	public productUnit: string

	@ManyToOne((_type) => ProductCategory, (productCategory) => productCategory.productCategoryId, {
		nullable: true,
	})
	@JoinColumn({ name: 'productCategory' })
	public productCategory: ProductCategory
}
