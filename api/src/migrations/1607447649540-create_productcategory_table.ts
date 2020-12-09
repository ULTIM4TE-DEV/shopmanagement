import { MigrationInterface, QueryRunner, Table } from 'typeorm'

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
				],
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropTable('productCategory')
	}
}
