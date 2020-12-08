import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ProductCategory } from './ProductCategory'
@Entity({ name: 'store' })
export class Store {
	@PrimaryGeneratedColumn({ name: 'storeId' })
	public storeId: number

	@Column({ name: 'storeName', type: 'varchar' })
	public storeName: string

	@Column({ name: 'storeDetail', type: 'varchar' })
	public storeDetail: string

	@Column({ name: 'storePhoneNumber', type: 'varchar' })
	public storePhoneNumber: string

	@Column({ name: 'storeAddress', type: 'varchar' })
	public storeAddress: string

	@OneToMany((_type) => ProductCategory, (productCategory) => productCategory.productCategoryId, {
		cascade: ['insert', 'remove', 'update'],
	})
	public productCategory: ProductCategory[]
}
