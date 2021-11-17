import axios from 'axios'
import bus from './bus'
import store from '/src/store/index'

let activeAxios = 0
let timer

const showLoading = () => {
    activeAxios++
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        if (activeAxios > 0) {
            bus.emit('showLoading')
        }
    }, 400)
}

const closeLoading = () => {
    activeAxios--
    if (activeAxios <= 0) {
        clearTimeout(timer)
        bus.emit('closeLoading')
    }
}

const service = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        if (!config.donNotShowLoading) {
            showLoading()
        }
        const  token =store.getters['user/token']
        const userInfo = store.getters['user/userInfo']
    }
)