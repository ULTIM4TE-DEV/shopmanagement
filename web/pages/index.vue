<template>
	<div class="w-full flex flex-col justify-center">
		<a-card title="Store list" bordered>
			<a-button slot="extra" @click="openModal">Create Store</a-button>
			<a-row>
				<a-col>
					<TableStore :data="storeList" @openModalEdit="openModalEdit"></TableStore>
				</a-col>
			</a-row>
		</a-card>
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
export default {
	data() {
		return {
			storeList: [],
			visible: false,
			editData: null,
		}
	},
	mounted() {
		this.getStoreList()
	},
	methods: {
		create(form) {
			storeAPI.createStore(form).then((response) => {
				console.log('response', response.status)
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
	},
}
</script>

<style></style>
