export const user = {
    namespaced: true,
    state: {
        userInfo: {
            nickname: '',
            avatar: ''
        },
        token: ''
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
        },
        setToken(state, token) {
            state.token = token
        },
        LoginOut(state) {
            state.userInfo = {}
            state.toekn = ''
            sessionStorage.clear()
            window.location.reload()
        },
        ResetUserInfo(state, userInfo = {}) {
            state.userInfo = {...state.userInfo, ...userInfo}
        }
    },
    actions: {
        async GetUserInfo({commit}) {
            const res = await getUser
        }
    },
    getters: {
        userInfo(state) {
            return state.userInfo
        },
        token(state) {
            return state.token
        }
    }
}