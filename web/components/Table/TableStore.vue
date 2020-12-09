<template>
	<div>
		<a-table bordered :columns="columns" :data-source="data" :pagination="{ pageSize: 5 }">
			<a
				slot="name"
				slot-scope="text, record"
				@click="() => $router.push(`/store-detail/${record.key}`)"
			>
				{{ text }}
			</a>
			<span slot="action" slot-scope="text, record">
				<a @click="openModalEdit(record)">Edit</a>
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
					title: 'Store ID',
					dataIndex: 'key',
					key: 'key',
				},
				{
					title: 'Store Name',
					dataIndex: 'name',
					key: 'name',
					scopedSlots: { customRender: 'name' },
				},
				{
					title: 'Description',
					dataIndex: 'description',
					key: 'description',
				},
				{
					title: 'Phone',
					dataIndex: 'phone',
					key: 'phone',
				},
				{
					title: 'Address',
					dataIndex: 'address',
					key: 'address',
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
