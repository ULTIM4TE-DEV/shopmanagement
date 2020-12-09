export const state = () => ({
    state: false
})

export const mutations = {
    start(state) {
        state.state = true
    },
    end(state) {
        state.state = false
    }
}
