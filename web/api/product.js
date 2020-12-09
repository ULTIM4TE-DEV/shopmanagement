import axios from './instance'

export default {
	getProductsByStoreId: (id) => {
		return axios.api.get(`/products/${id}`).then((response) => response.data)
	},
}
