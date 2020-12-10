<template>
	<div class="w-full">
		<a-row :gutter="[16, 16]">
			<a-col :span="24">
				<a-card title="List All Store" bordered>
					<a-button slot="extra" @click="openModal">Create Store</a-button>
					<a-row>
						<a-col>
							<TableStore :data="storeList" @openModalEdit="openModalEdit"></TableStore>
						</a-col>
					</a-row>
				</a-card>
			</a-col>
			<a-col :span="24">
				<a-card title="List All Product" bordered>
					<a-row>
						<a-col>
							<TableAllProduct :data="productList" @openModalEdit="openModalEdit"></TableAllProduct>
						</a-col>
					</a-row>
				</a-card>
			</a-col>
		</a-row>
		<ModalCreateStore
			:visible="visible"
			:closeModal="closeModal"
			:editData="editData"
			@create="create"
			@edit="edit"
		></ModalCreateStore>
	</div>
</template>

<script>
import storeAPI from '~/api/store'
import productAPI from '~/api/product'
export default {
	data() {
		return {
			storeList: [],
			productList: [],
			visible: false,
			editData: null,
		}
	},
	mounted() {
		this.getStoreList()
		this.getProductList()
	},
	methods: {
		create(form) {
			storeAPI.createStore(form).then((response) => {
				if (response.status === 201) {
					this.$success({
						title: 'Create store success !',
						centered: true,
						onOk: () => {
							this.editData = null
							this.getStoreList()
							this.closeModal()
						},
					})
				} else {
					this.$error({
						centered: true,
						title: 'Create store error !',
					})
				}
			})
		},
		edit(form) {
			storeAPI.editStore(form).then((response) => {
				if (response.status === 201) {
					this.$success({
						centered: true,
						title: 'Edit store success !',
						onOk: () => {
							this.editData = null
							this.getStoreList()
							this.closeModal()
						},
					})
				} else {
					this.$error({
						centered: true,
						title: 'Edit store error !',
					})
				}
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
		getStoreList() {
			storeAPI.getStores().then((response) => {
				const mapData = response.response.map((item) => {
					return {
						key: item.id,
						name: item.storeName,
						description: item.storeDetail,
						phone: item.storePhoneNumber,
						address: item.storeAddress,
					}
				})
				this.storeList = mapData
			})
		},
		getProductList() {
			productAPI.getProducts().then((response) => {
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
	},
}
</script>

<style></style>
