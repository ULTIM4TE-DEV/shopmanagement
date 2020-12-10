<template>
	<div class="shadow">
		<a-table bordered :columns="columns" :data-source="data" :pagination="{ pageSize: 5 }">
		</a-table>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Array,
			default: [],
		},
	},
	data() {
		return {
			columns: [
				{
					title: 'Product ID',
					dataIndex: 'key',
					key: 'key',
				},
				{
					title: 'Product Name',
					dataIndex: 'name',
					key: 'name',
				},
				{
					title: 'Description',
					dataIndex: 'description',
					key: 'description',
				},
				{
					title: 'Price',
					dataIndex: 'price',
					key: 'price',
				},
				{
					title: 'Unit',
					dataIndex: 'unit',
					key: 'unit',
				},
				{
					title: 'CategoryId',
					dataIndex: 'categoryId',
					key: 'categoryId',
				},
				{
					title: 'StoreId',
					dataIndex: 'storeId',
					key: 'storeId',
				},
			],
		}
	},
	methods: {
		openModalEdit(rcord) {
			this.$emit('openModalEdit', record)
		},
		openModalDelete(record) {
			this.$emit('openModalDelete', record)
		},
	},
}
</script>

<style></style>
