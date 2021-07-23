/*
 * @Description: 根绝大小变化重新布局
 * @Author: ZY
 * @Date: 2020-12-17 15:37:56
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-28 16:29:49
 */
// refer to Bootstrap's responsive design

import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import {AppStatusStore, DeviceType} from "@/store/modules/app-status";

const WIDTH = 992 // refer to Bootstrap's responsive design

export default function() {
  const device = computed(() => {
    return AppStatusStore.device
  })

  const sidebar = computed(() => {
    return AppStatusStore.sidebar
  })

  const currentRoute = useRoute()
  const watchRouter = watch(() => currentRoute.name, () => {
    if (AppStatusStore.device === DeviceType.Mobile && AppStatusStore.sidebar.opened) {
      AppStatusStore.CloseSideBar(false)
    }
  })

  const isMobile = () => {
    const rect = document.body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
  }

  const resizeMounted = () => {
    if (isMobile()) {
      AppStatusStore.ToggleDevice(DeviceType.Mobile)
      AppStatusStore.CloseSideBar(true)
    }
  }

  const resizeHandler = () => {
    if (!document.hidden) {
      AppStatusStore.ToggleDevice(isMobile() ? DeviceType.Mobile : DeviceType.Desktop)
      if (isMobile()) {
        AppStatusStore.CloseSideBar(true)
      }
    }
  }
  const addEventListenerOnResize = () => {
    window.addEventListener('resize', resizeHandler)
  }

  const removeEventListenerResize = () => {
    window.removeEventListener('resize', resizeHandler)
  }

  // 首次进入执行一次
  resizeHandler()

  return {
    device,
    sidebar,
    resizeMounted,
    addEventListenerOnResize,
    removeEventListenerResize,
    watchRouter
  }
}


