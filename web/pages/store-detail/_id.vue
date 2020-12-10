<template>
	<div class="w-full">
		<a-card
			:title="`Product list Store: ${storeData ? storeData.storeName : ''}, Description: ${
				storeData ? storeData.storeDetail : ''
			}`"
			bordered
		>
			<a-button slot="extra" @click="openModal">Create Product</a-button>
			<a-row>
				<a-col>
					<TableProduct
						:data="productList"
						@openModalEdit="openModalEdit"
						@openModalDelete="openModalDelete"
					></TableProduct>
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
import storeAPI from '~/api/store'
export default {
	data() {
		return {
			productList: [],
			storeData: null,
			visible: false,
			editData: null,
		}
	},
	mounted() {
		this.getProductList()
		this.getStoreData()
	},
	methods: {
		create(form) {
			productAPI.createProduct(form).then((response) => {
				if (response.status === 201) {
					this.$success({
						title: 'Create product success !',
						centered: true,
						onOk: () => {
							this.editData = null
							this.getProductList()
							this.closeModal()
						},
					})
				} else {
					this.$error({
						centered: true,
						title: 'Create product error !',
					})
				}
			})
		},
		edit(form) {
			productAPI.editProduct(form).then((response) => {
				if (response.status === 201) {
					this.$success({
						centered: true,
						title: 'Edit product success !',
						onOk: () => {
							this.editData = null
							this.getProductList()
							this.closeModal()
						},
					})
				} else {
					this.$error({
						centered: true,
						title: 'Edit product error !',
					})
				}
			})
		},
		openModalDelete(record) {
			this.$confirm({
				title: `Are you sure delete ${record.name} ?`,
				okText: 'Yes',
				okType: 'danger',
				cancelText: 'No',
				centered: true,
				onOk: () => {
					productAPI.deleteProduct(record.key).then((response) => {
						this.$success({
							title: 'Delete product success !',
							centered: true,
							onOk: () => {
								this.getProductList()
								this.closeModal()
							},
						})
					})
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
			productAPI.getProductsByStoreId(this.$route.params.id).then((response) => {
				const mapData = response.response.map((item) => {
					return {
						key: item.id,
						name: item.productDetail,
						description: item.productName,
						price: item.productPrice,
						unit: item.productUnit,
						categoryId: item.productCategoryId.id,
						storeId: item.storeId.id,
					}
				})
				this.productList = mapData
			})
		},
		getStoreData() {
			storeAPI.getStoreById(this.$route.params.id).then((response) => {
				this.storeData = response.response
			})
		},
	},
}
</script>

<style></style>
