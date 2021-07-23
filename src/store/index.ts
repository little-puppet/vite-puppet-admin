import type {App} from 'vue'
import {createLogger, createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";
import * as Cookies from 'js-cookie';
import config from '@/config'

const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
plugins.push(createPersistedState({
    key: config.app.vuexName,
    paths: ['user', 'app-status','setting'],
    storage: config.app.storage,
}))

const store = createStore({
    plugins,
    modules: {}
})

export function setupStore(app: App<Element>) {
    app.use(store)
}

export default store
