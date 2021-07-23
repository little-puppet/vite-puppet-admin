/*
 * @Description: 用户相关接口
 * @Author: ZY
 * @Date: 2020-12-28 14:40:50
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-20 10:17:09
 */
import {PageRootObject, RootObject} from '@/models/rootObject'
import { UserInfoModel, Users } from '@/models/userModel'
import https from '@/utils/https'
import { RequestParams, ContentType, Method } from 'axios-mapper'
import {TokenModel} from "@/models/tokenModel";

export const loginRequest = (userInfo: RequestParams) => {
  return https(false).request<RootObject<TokenModel>>(
    '/puppet-user/user/login',
    Method.POST,
    userInfo,
    ContentType.form
  )
}

export const userInfoRequest = () => {
  return https().request<RootObject<UserInfoModel>>(
    '/puppet-user/user/info',
    Method.GET,
    undefined,
    ContentType.form
  )
}

export const userListRequest = (params: any) => {
  return https().request<PageRootObject<UserInfoModel>>('/puppet-user/user/page', Method.GET, params)
}

export const getUsers = (user: any) => {
  return https().request<RootObject<Users>>('user/getUsers', Method.GET, user, ContentType.form)
}
