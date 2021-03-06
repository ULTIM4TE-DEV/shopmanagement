import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class createProductTable1607447661833 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createTable(
			new Table({
				name: 'product',
				columns: [
					{
						name: 'id',
						type: 'integer',
						isGenerated: true,
						isPrimary: true,
					},
					{
						name: 'productName',
						type: 'varchar',
					},
					{
						name: 'productDetail',
						type: 'varchar',
					},
					{
						name: 'productPrice',
						type: 'varchar',
					},
					{
						name: 'productUnit',
						type: 'varchar',
					},
					{
						name: 'productCategoryId',
						type: 'integer',
					},
					{
						name: 'storeId',
						type: 'integer',
					},
				],
			})
		)

		await queryRunner.createForeignKey(
			'product',
			new TableForeignKey({
				columnNames: ['productCategoryId'],
				referencedColumnNames: ['id'],
				referencedTableName: 'productCategory',
				onDelete: 'CASCADE',
			})
		)

		await queryRunner.createForeignKey(
			'product',
			new TableForeignKey({
				columnNames: ['storeId'],
				referencedColumnNames: ['id'],
				referencedTableName: 'store',
				onDelete: 'CASCADE',
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropTable('product')
	}
}
