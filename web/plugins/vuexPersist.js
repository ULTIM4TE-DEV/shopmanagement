import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
	createPersistedState({
		key: 'shop-localstorage',
		paths: ['loading'],
	})(store)
}
