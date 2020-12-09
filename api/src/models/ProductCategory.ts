import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from './Product'

@Entity({ name: 'productCategory' })
export class ProductCategory {
	@PrimaryGeneratedColumn({ name: 'id' })
	public id: number

	@Column({ name: 'productCategoryName', type: 'varchar' })
	public productCategoryName: string

	@Column({ name: 'productCategoryDetail', type: 'varchar' })
	public productCategoryDetail: string

	@OneToMany((_type) => Product, (product) => product.id, {
		cascade: ['insert', 'remove', 'update'],
	})
	public product: Product[]
}
