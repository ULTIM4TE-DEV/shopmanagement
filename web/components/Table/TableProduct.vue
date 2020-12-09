<template>
	<div>
		<a-table bordered :columns="columns" :data-source="data" :pagination="{ pageSize: 5 }">
			<span slot="action" slot-scope="text, record">
				<a @click="openModalEdit(record)">Edit {{ record }}</a>
				<a-divider type="vertical" />
				<a>Delete {{ record.key }}</a>
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
		click(value) {
			console.log('click')
			console.log('value', value)
		},
	},
}
</script>

<style></style>
