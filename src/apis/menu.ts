import {ContentType, Method, RequestParams} from "axios-mapper";
import https from "@/utils/https";
import {RootObject} from "@/models/rootObject";
import {MenuModel} from "@/models/menuModel";

export  const  userMenuRequest = () => {
  return https().request<RootObject<MenuModel[]>>(
    '/puppet-auth/menu/user/menu',
    Method.GET
  )
}
