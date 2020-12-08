import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createStoreTable1607446778078 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createTable(
			new Table({
				name: 'store',
				columns: [
					{
						name: 'id',
						type: 'integer',
						isGenerated: true,
						isPrimary: true,
					},
					{
						name: 'storeName',
						type: 'varchar',
					},
					{
						name: 'storeDetail',
						type: 'varchar',
					},
					{
						name: 'storePhoneNumber',
						type: 'varchar',
					},
					{
						name: 'storeAddress',
						type: 'varchar',
					},
				],
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropTable('store')
	}
}
