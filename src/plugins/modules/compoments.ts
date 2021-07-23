/**
 * 注册全局组件
 */
import SvgIcon from '@/components/SvgIcon/index.vue'
export default function loadComponent(app: any) {
  app.component('svg-icon', SvgIcon)
}
