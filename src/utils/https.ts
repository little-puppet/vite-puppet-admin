import config from '@/config'
/*
 * @Description: axios 封装网络请求
 * @Author: ZY
 * @Date: 2020-12-28 14:45:32
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-25 20:01:32
 */
import HttpClient, {HttpClientConfig} from 'axios-mapper'
import {UserStore} from "@/store/modules/user";
import {AxiosResponse} from "axios";
import router from '@/router'
import {RootObject} from "@/models/rootObject";
import {showHttpTip} from "@/utils/tipUtil";

// let loading:{close():void}
const https = (hasToken: Boolean = true) => {
    const httpConfig: HttpClientConfig = {
        baseURL: config.http.baseUrl,
        headers: {}
    }
    if (hasToken && UserStore.token !== '') {
        httpConfig.headers.token = UserStore.token
    }
    const https = new HttpClient(httpConfig);
// Add a request interceptor
    https.httpClient.interceptors.request.use(config => {
        return config;
    }, (error) => {
        // Do something with request error
        return Promise.reject(error);
    });

    https.httpClient.interceptors.response.use((response: AxiosResponse<RootObject<any>>) => {
        const {data} = response
        // loading.close()
        if (data.code !== 0) {
            if (data.code === 401) {
                showHttpTip({type: "warning", title: "访问受限", content: data.msg})
                UserStore.ResetToken()
                router.push(`/login?redirect=${router.currentRoute.value.path}`).catch((err) => {
                    console.warn(err)
                })
            } else if (data.code === 403) {
                showHttpTip({type: "warning", title: "访问受限", content: data.msg})
            }
            return Promise.reject(new Error(data.msg || 'Error'))
        }
        return response
    });
    return https
}


export default https
