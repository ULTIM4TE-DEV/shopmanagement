import axios from './instance'

export default {
	getProductsByStoreId: (id) => {
		return axios.api
			.get(`/products/${id}`)
			.then((response) => response.data)
			.catch((error) => error)
	},
	createProduct: (product) => {
		return axios.api
			.post('/product/create', product)
			.then((response) => response)
			.catch((error) => error)
	},
	editProduct: (store) => {
		return axios.api
			.put('/product/update', store)
			.then((response) => response)
			.catch((error) => error)
	},
	deleteProduct: (productId) => {
		return axios.api
			.delete(`/product/delete/${productId}`)
			.then((response) => response.data)
			.catch((error) => error)
	},
}
