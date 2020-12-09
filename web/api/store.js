import axios from './instance'

export default {
	getStores: () => {
		return axios.api.get('/stores').then((response) => response.data)
	},
	createStore: (store) => {
		return axios.api.post('/store/create', store).then((response) => response.data)
	},
	editStore: (store) => {
		return axios.api.put('/store/update', store).then((response) => response.data)
	},
	// userData: (id) => {
	//     return axios.api.get(`/users/${id}`).then(response => response.data)
	// },
	// CurrentUser: () => {
	//     return axios.api
	//         .get("/users/me")
	//         .then(response => response.data)
	// },
	// getUserActivity: params => {
	//     return axios.api
	//         .get("/activities", { params })
	//         .then(response => response.data)
	// },
	// getEditData: () => {
	//     return axios.api
	//         .get("/users/me/edit")
	//         .then(response => response.data)
	// },
	// editUserData: (form) => {
	//     return axios.api
	//         .put("/users/me/edit", form)
	//         .then(response => response.data)
	// }
}
