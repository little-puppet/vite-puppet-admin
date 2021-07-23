import * as Cookies from 'js-cookie';
import config from '@/config'

export const localVuex = (save: boolean = false) => {
    if (save) {
        console.log(Cookies.get(config.app.vuexName) !== null)
        return Cookies.get(config.app.vuexName) !== null && Cookies.get(config.app.vuexName) !== undefined
    } else {
        return process.env.NODE_ENV !== 'production' && Cookies.get(config.app.vuexName) !== null && Cookies.get(config.app.vuexName) !== undefined
    }
}