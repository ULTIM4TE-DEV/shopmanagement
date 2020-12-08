import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class createProductcategoryTable1607447649540 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createTable(
			new Table({
				name: 'productCategory',
				columns: [
					{
						name: 'id',
						type: 'integer',
						isGenerated: true,
						isPrimary: true,
					},
					{
						name: 'productCategoryName',
						type: 'varchar',
					},
					{
						name: 'productCategoryDetail',
						type: 'varchar',
					},
					{
						name: 'storeId',
						type: 'integer',
					},
				],
			})
		)

		await queryRunner.createForeignKey(
			'productCategory',
			new TableForeignKey({
				columnNames: ['storeId'],
				referencedColumnNames: ['id'],
				referencedTableName: 'store',
				onDelete: 'CASCADE',
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropTable('productCategory')
	}
}
