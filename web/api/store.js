import axios from './instance'

export default {
	getStores: () => {
		return axios.api
			.get('/stores')
			.then((response) => response.data)
			.catch((error) => error)
	},
	getStoreById: (id) => {
		return axios.api
			.get(`/store/${id}`)
			.then((response) => response.data)
			.catch((error) => error)
	},
	createStore: (store) => {
		return axios.api
			.post('/store/create', store)
			.then((response) => response)
			.catch((error) => error)
	},
	editStore: (store) => {
		return axios.api
			.put('/store/update', store)
			.then((response) => response)
			.catch((error) => error)
	},
}
