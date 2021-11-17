import {createStore} from 'vuex'
import VuexPersistence from 'vuex-persist'
import user from 'module/user'

const vuexPersistence = new VuexPersistence({
    storage: window.localStorage,
    modules: ['user']
})

const store = createStore({
    modules: {
        user
    },
    plugins: [vuexPersistence.plugin]
})

export default store