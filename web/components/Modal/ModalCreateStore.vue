<template>
	<a-modal
		:title="`${editDataUse ? 'Edit Store' : 'Create Store'}`"
		:closable="false"
		centered
		:visible="visible"
		:footer="null"
	>
		<a-form labelAlign="left" :form="form" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
			<a-form-item label="Store Name">
				<a-input
					v-decorator="[
						'storeName',
						{
							initialValue: editDataUse ? editDataUse.name : undefined,
							rules: [{ required: true, message: 'Please input your Store Name!' }],
						},
					]"
				/>
			</a-form-item>
			<a-form-item label="Description">
				<a-input
					v-decorator="[
						'storeDetail',
						{
							initialValue: editDataUse ? editDataUse.description : undefined,
							rules: [{ required: true, message: 'Please input your Description!' }],
						},
					]"
				/>
			</a-form-item>
			<a-form-item label="Phone">
				<a-input
					v-decorator="[
						'storePhoneNumber',
						{
							initialValue: editDataUse ? editDataUse.phone : undefined,
							rules: [{ required: true, message: 'Please input your Phone!' }],
						},
					]"
				/>
			</a-form-item>
			<a-form-item label="Address">
				<a-input
					v-decorator="[
						'storeAddress',
						{
							initialValue: editDataUse ? editDataUse.address : undefined,
							rules: [{ required: true, message: 'Please input your Address!' }],
						},
					]"
				/>
			</a-form-item>
			<a-form-item :wrapper-col="{ span: 24 }">
				<a-row type="flex" justify="center" :gutter="[8, 8]">
					<a-col>
						<a-button @click="closeModal"> Close </a-button>
					</a-col>
					<a-col v-if="editDataUse">
						<a-button type="primary" @click="handleEdit"> Update </a-button>
					</a-col>
					<a-col v-else>
						<a-button type="primary" @click="handleCreate"> Submit </a-button>
					</a-col>
				</a-row>
			</a-form-item>
		</a-form>
	</a-modal>
</template>

<script>
export default {
	props: {
		visible: Boolean,
		closeModal: Function,
		editData: Object,
	},
	watch: {
		editData() {
			this.editDataUse = this.editData
		},
		closeModal() {
			this.editDataUse = null
		},
	},
	data() {
		return {
			form: this.$form.createForm(this, { name: 'createStore' }),
			editDataUse: null,
		}
	},
	methods: {
		handleCreate() {
			this.form.validateFields((err, values) => {
				if (!err) {
					console.log('values', values)
					this.$emit('create', values)
				}
			})
		},
		handleEdit() {
			this.form.validateFields((err, values) => {
				const payload = {
					...values,
					id: this.editDataUse.id,
				}
				if (!err) {
					console.log('values', values)
					this.$emit('edit', payload)
				}
			})
		},
	},
}
</script>

<style></style>
