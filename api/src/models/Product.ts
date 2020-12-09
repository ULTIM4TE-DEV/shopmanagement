import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ProductCategory } from './ProductCategory'
import { Store } from './Store'

@Entity({ name: 'product' })
export class Product {
	@PrimaryGeneratedColumn({ name: 'id' })
	public id: number

	@Column({ name: 'productName', type: 'varchar' })
	public productName: string

	@Column({ name: 'productDetail', type: 'varchar' })
	public productDetail: string

	@Column({ name: 'productPrice', type: 'int' })
	public productPrice: number

	@Column({ name: 'productUnit', type: 'varchar' })
	public productUnit: string

	@ManyToOne((_type) => ProductCategory, (productCategory) => productCategory.id, {
		nullable: true,
	})
	@JoinColumn({ name: 'productCategoryId' })
	public productCategoryId: ProductCategory

	@ManyToOne((_type) => Store, (store) => store.id, {
		nullable: true,
	})
	@JoinColumn({ name: 'storeId' })
	public storeId: Store
}
