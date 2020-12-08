import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Store } from '../models/Store'
import { Product } from './Product'

@Entity({ name: 'productCategory' })
export class ProductCategory {
	@PrimaryGeneratedColumn({ name: 'productCategoryId' })
	public productCategoryId: number

	@Column({ name: 'productCategoryName', type: 'varchar' })
	public productCategoryName: string

	@Column({ name: 'productCategoryDetail', type: 'varchar' })
	public productCategoryDetail: string

	@ManyToOne((_type) => Store, (store) => store.storeId, { nullable: true })
	@JoinColumn({ name: 'store' })
	public store: Store

	@OneToMany((_type) => Product, (product) => product.productId, {
		cascade: ['insert', 'remove', 'update'],
	})
	public product: Product[]
}
