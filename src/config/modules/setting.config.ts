import {Language, Layout, ThemeVariables} from '@/types/common.d'

export const allLanguage: Language[] = [
  { name: 'English', value: 'en' },
  { name: '中文', value: 'zh-cn' }
]

export const defaultThemeVariables: ThemeVariables = {
  bg: "#C7EDCD",
  top_bg: '#304156',
  bg_container: "#ffffff",
  menu_bg: "#eeeeee",
  menu_hover:"#ffffff",
  menu_text: "#222222",
  menu_active_text: "#8CB6C0",
  sub_menu_bg: "#aaaaaa",
  sub_menu_hover: "#999999",
  sub_menu_text: "#162B64",
  sub_menu_active_text:"#ffff00",
  side_bar_width: "220px",
}

export interface SettingConfig {
  themeVariables: ThemeVariables
  language: Language
  // 布局种类 horizontal vertical gallery comprehensive common
  layout: Layout
  // 是否固定头部
  fixedHeader?: boolean
  // 是否显示设置
  showSettings: boolean
  // 是否显示顶部进度条
  showProgressBar?: boolean
  // 显示菜单logo
  showSidebarLogo: boolean
  // 是否显示多标签页
  showTagsView?: boolean
  // 是否显示语言选择组件
  showLanguage?: boolean
  // 是否显示刷新组件
  showRefresh?: boolean
  // 是否显示搜索组件
  showSearch?: boolean
  // 是否显示主题组件
  showTheme?: boolean
  // 是否显示通知组件
  showNotice?: boolean
  // 是否显示全屏组件
  showFullScreen?: boolean
}

const settingConfig: SettingConfig = {
  themeVariables: defaultThemeVariables,
  language: allLanguage[1],
  // 布局种类 horizontal vertical gallery comprehensive common
  layout: Layout.Common,
  // 是否固定头部
  fixedHeader: true,
  // 是否显示设置
  showSettings: true,
  // 是否显示顶部进度条
  showProgressBar: true,
  // 显示菜单logo
  showSidebarLogo: true,
  // 是否显示多标签页
  showTagsView: true,
  // 是否显示语言选择组件
  showLanguage: true,
  // 是否显示刷新组件
  showRefresh: true,
  // 是否显示搜索组件
  showSearch: true,
  // 是否显示主题组件
  showTheme: true,
  // 是否显示通知组件
  showNotice: true,
  // 是否显示全屏组件
  showFullScreen: true
}

export default settingConfig
