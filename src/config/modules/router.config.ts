import { RouterMode, RouterSource } from '@/types/common.d'

export interface RouterConfig {
  baseUrl: string
  // 缓存路由的最大数量
  keepAliveMaxNum?: number
  // 路由模式，可选值为 history 或 hash
  routerMode?: RouterMode
  routerSource: RouterSource

  // 加载时显示文字
  loadingText?: string
  // 是否开启登录拦截
  loginInterception?: boolean
  // 是否开启登录RSA加密
  loginRSA?: boolean
  // token失效回退到登录页时是否记录本次的路由
  recordRoute: boolean
  // 是否开启roles字段进行角色权限控制（如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段）
  rolesControl?: boolean
  // 不经过token校验的路由
  whiteList: string[]
}

const routerConfig: RouterConfig = {
  baseUrl: '',
  keepAliveMaxNum: 99,
  routerMode: RouterMode.Hash,
  routerSource: RouterSource.Backend,
  loadingText: '加载中...',
  loginInterception: true,
  loginRSA: false,
  // token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  rolesControl: false,
  whiteList: ['/login', '/blank']
}

export default routerConfig
