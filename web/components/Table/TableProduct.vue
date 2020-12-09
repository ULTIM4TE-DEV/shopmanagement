<template>
	<div>
		<a-table bordered :columns="columns" :data-source="data" :pagination="{ pageSize: 5 }">
			<span slot="action" slot-scope="text, record">
				<a @click="openModalEdit(record)">Edit</a>
				<a-divider type="vertical" />
				<a @click="openModalDelete(record)">Delete </a>
			</span>
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
				{
					title: 'Action',
					key: 'action',
					scopedSlots: { customRender: 'action' },
				},
			],
		}
	},
	methods: {
		openModalEdit(record) {
			console.log('In table emit', record)
			this.$emit('openModalEdit', record)
		},
		openModalDelete(record) {
			this.$emit('openModalDelete', record)
		},
		click(value) {
			console.log('click')
			console.log('value', value)
		},
	},
}
</script>

<style></style>
