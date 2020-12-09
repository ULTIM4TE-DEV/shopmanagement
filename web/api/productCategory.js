import axios from './instance'

export default {
	getProductCategories: () => {
		return axios.api
			.get(`/productCategories/`)
			.then((response) => response.data)
			.catch((error) => error)
	},
}
