import {Cookie, Environment, InfoShowType, VuexStorage} from '@/types/common.d'

export interface Settings {
    //项目中页面显示的名称
    title: string
    // pro版本copyright可随意修改
    copyright?: string
    // token名称
    tokenName?: string
    // token在localStorage、sessionStorage、cookie存储的key的名称
    vuexName: string
    // token存储位置localStorage sessionStorage cookie
    storage: VuexStorage
    // 在哪些环境下显示高亮错误
    errorLog?: Environment[]
    // vertical gallery comprehensive common布局时是否只保持一个子菜单的展开
    uniqueOpened?: boolean
    // 接口中获取路由信息
    getApiRouter?: boolean
    // vertical布局时默认展开的菜单path，使用逗号隔开建议只展开一个
    defaultOpeneds?: string[]
    // 需要加loading层的请求，防止重复提交
    debounce?: string[]
    // 代码生成机生成在view下的文件夹名称
    templateFolder?: string
    // 画廊布局和综合布局时，是否点击一级菜单默认开启第一个二级菜单
    openFirstMenu?: boolean
    errorShowType: InfoShowType,
    version: string
}

const settings: Settings = {
    //项目中页面显示的名称
    title: 'Puppet-Admin',
    // pro版本copyright可随意修改
    copyright: '©2021 Puppet',
    // 缓存路由的最大数量

    // token名称
    tokenName: 'token',
    // token在localStorage、sessionStorage、cookie存储的key的名称
    vuexName: "vue-store",
    // token存储位置localStorage sessionStorage cookie
    storage: Cookie,
    // 在哪些环境下显示高亮错误
    errorLog: [Environment.Development],
    // vertical gallery comprehensive common布局时是否只保持一个子菜单的展开
    uniqueOpened: false,
    // vertical布局时默认展开的菜单path，使用逗号隔开建议只展开一个
    // 接口中获取路由信息
    getApiRouter: true,
    defaultOpeneds: ['/vab'],
    // 需要加loading层的请求，防止重复提交
    debounce: ['doEdit'],
    // 代码生成机生成在view下的文件夹名称
    templateFolder: 'project',
    // 画廊布局和综合布局时，是否点击一级菜单默认开启第一个二级菜单
    openFirstMenu: true,
    errorShowType: InfoShowType.NOTIFICATION,
    version: '1.0'
}

export default settings
