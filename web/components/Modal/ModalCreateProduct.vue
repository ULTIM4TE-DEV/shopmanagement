<template>
	<a-modal
		:title="`${editDataUse ? 'Edit Product' : 'Create Product'}`"
		:closable="false"
		centered
		:visible="visible"
		:footer="null"
	>
		<a-form labelAlign="left" :form="form" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
			<a-form-item label="Product Name">
				<a-input
					v-decorator="[
						'productName',
						{
							initialValue: editDataUse ? editDataUse.name : undefined,
							rules: [{ required: true, message: 'Please input your Product name!' }],
						},
					]"
				/>
			</a-form-item>
			<a-form-item label="Description">
				<a-input
					v-decorator="[
						'productDetail',
						{
							initialValue: editDataUse ? editDataUse.description : undefined,
							rules: [{ required: true, message: 'Please input your Description!' }],
						},
					]"
				/>
			</a-form-item>
			<a-form-item label="Price">
				<a-input
					type="number"
					v-decorator="[
						'productPrice',
						{
							initialValue: editDataUse ? editDataUse.price : undefined,
							rules: [{ required: true, message: 'Please input your Price!' }],
						},
					]"
				/>
			</a-form-item>
			<a-form-item label="Unit">
				<a-input
					v-decorator="[
						'productUnit',
						{
							initialValue: editDataUse ? editDataUse.unit : undefined,
							rules: [{ required: true, message: 'Please input your Unit!' }],
						},
					]"
				/>
			</a-form-item>
			<a-form-item label="Category">
				<a-select
					v-decorator="[
						'productCategoryId',
						{
							initialValue: editDataUse ? editDataUse.categoryId : undefined,
							rules: [{ required: true, message: 'Please input your Category!' }],
						},
					]"
				>
					<a-select-option v-for="item in category" :key="item.id" :value="item.id">
						{{ item.productCategoryName }}
					</a-select-option>
				</a-select>
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
import productCategoryAPI from '~/api/productCategory'
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
		visible() {
			if (this.visible === false) {
				this.editDataUse = null
				this.form.resetFields()
			}
		},
	},
	mounted() {
		this.getProductCategories()
	},
	data() {
		return {
			form: this.$form.createForm(this, { name: 'createProduct' }),
			editDataUse: null,
			category: [],
		}
	},
	methods: {
		getProductCategories() {
			productCategoryAPI.getProductCategories().then((response) => {
				this.category = response.response
			})
		},
		handleCreate() {
			this.form.validateFields((err, values) => {
				if (!err) {
					const payload = {
						...values,
						storeId: this.$route.params,
					}
					this.$emit('create', payload)
				}
			})
		},
		handleEdit() {
			this.form.validateFields((err, values) => {
				if (!err) {
					const payload = {
						...values,
						id: this.editDataUse.key,
					}
					this.$emit('edit', payload)
				}
			})
		},
	},
}
</script>

<style></style>
