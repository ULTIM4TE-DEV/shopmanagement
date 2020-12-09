import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from './Product'
@Entity({ name: 'store' })
export class Store {
	@PrimaryGeneratedColumn({ name: 'id' })
	public id: number

	@Column({ name: 'storeName', type: 'varchar' })
	public storeName: string

	@Column({ name: 'storeDetail', type: 'varchar' })
	public storeDetail: string

	@Column({ name: 'storePhoneNumber', type: 'varchar' })
	public storePhoneNumber: string

	@Column({ name: 'storeAddress', type: 'varchar' })
	public storeAddress: string

	@OneToMany((_type) => Product, (product) => product.id, {
		cascade: ['insert', 'remove', 'update'],
	})
	public product: Product[]
}
