<template>
	<div class="w-full flex flex-col justify-center">
		<a-card title="Product list" bordered>
			<a-button slot="extra" @click="openModal">Create Product</a-button>
			<a-row>
				<a-col>
					<TableProduct :data="productList" @openModalEdit="openModalEdit"></TableProduct>
				</a-col>
			</a-row>
		</a-card>
		<ModalCreateProduct
			:visible="visible"
			:closeModal="closeModal"
			:editData="editData"
			@create="create"
			@edit="edit"
		></ModalCreateProduct>
	</div>
</template>

<script>
import productAPI from '~/api/product'
export default {
	data() {
		return {
			productList: [],
			visible: false,
			editData: null,
		}
	},
	mounted() {
		this.getProductList()
	},
	methods: {
		create(form) {
			console.log('form', form)
			try {
				productAPI.createProduct(form).then((response) => {
					console.log('response', response)
					this.$success({
						title: 'Create store success !',
					})
				})
			} catch (error) {
				this.$error({
					title: error,
				})
			}
		},
		edit(form) {
			console.log('form', form)
			try {
				productAPI.editProduct(form).then((response) => {
					console.log('response', response)
					this.$success({
						title: 'Edit product success !',
					})
				})
			} catch (error) {
				this.$error({
					title: error,
				})
			}
		},
		openModalDelete(record) {
			console.log('detete', record)
			this.$confirm({
				title: `Are you sure delete ${record.name} ?`,
				okText: 'Yes',
				okType: 'danger',
				centered: true,
				cancelText: 'No',
				onOk() {
					try {
						productAPI.deleteProduct(record.key).then((response) => {
							console.log('response', response)
							this.$success({
								title: 'Delete product success !',
							})
						})
					} catch (error) {
						this.$error({
							title: error,
						})
					}
				},
				onCancel() {
					console.log('Cancel')
				},
			})
		},
		openModalEdit(value) {
			this.editData = value
			this.visible = true
		},
		openModal() {
			this.editData = null
			this.visible = true
		},
		closeModal() {
			this.visible = false
		},
		getProductList() {
			console.log('call')
			try {
				productAPI.getProductsByStoreId(this.$route.params.id).then((response) => {
					const mapData = response.response.map((item) => {
						return {
							key: item.id,
							name: item.productDetail,
							description: item.productName,
							price: item.productPrice,
							unit: item.productUnit,
						}
					})
					this.productList = mapData
				})
			} catch (error) {
				console.log('error', error)
			}
		},
	},
}
</script>

<style></style>
