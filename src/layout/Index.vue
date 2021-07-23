<!--
 * @Description: app 布局入口
 * @Author: ZY
 * @Date: 2020-12-17 15:32:33
 * @LastEditors: SCY
 * @LastEditTime: 2021-04-06 14:47:00
-->
<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <div
      v-if="classObj.mobile && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <div class="sidebar-container">
      <Logo></Logo>
      <Sidebar menu-mode="vertical" />

    </div>
    <div
      :class="{hasTagsView: showTagsView}"
      class="main-container"
    >
      <div :class="{'fixed-header': fixedHeader}">
        <Navbar />
        <TagsView v-if="showTagsView" />
      </div>
      <AppMain />
      <RightPanel v-if="showSettings">
        <Setting />
      </RightPanel>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onBeforeMount, onBeforeUnmount, onMounted, reactive, toRefs} from 'vue'
import {useI18n} from 'vue-i18n'
import {AppMain, Logo, Navbar, Setting, Sidebar, TagsView} from './components'
import RightPanel from '@/components/RightPanel/Index.vue'
import resize from './resize'
import {AppStatusStore, DeviceType} from "@/store/modules/app-status";
import {SettingStore} from "@/store/modules/setting";

export default defineComponent({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Setting,
    Sidebar,
    TagsView,
    Logo
  },
  setup() {
    const { t } = useI18n()
    const { sidebar, device, addEventListenerOnResize, resizeMounted, removeEventListenerResize, watchRouter } = resize()
    const state = reactive({
      handleClickOutside: () => {
        AppStatusStore.CloseSideBar(false)
      }
    })

    const classObj = computed(() => {
      return {
        hideSidebar: !sidebar.value.opened,
        openSidebar: sidebar.value.opened,
        withoutAnimation: sidebar.value.withoutAnimation,
        mobile: device.value === DeviceType.Mobile
      }
    })

    const showSettings = computed(() => {
      return SettingStore.showSettings
    })
    const showTagsView = computed(() => {
      return SettingStore.showTagsView
    })
    const fixedHeader = computed(() => {
      return SettingStore.fixedHeader
    })

    watchRouter()
    onBeforeMount(() => {
      addEventListenerOnResize()
    })

    onMounted(() => {
      resizeMounted()
    })

    onBeforeUnmount(() => {
      removeEventListenerResize()
    })
    return {
      t,
      classObj,
      sidebar,
      showSettings,
      showTagsView,
      fixedHeader,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.main-container {
  min-height: 100%;
  transition: margin-left .28s;
  margin-left: $sideBarWidth;
  position: relative;
}

.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar {
  .main-container {
    margin-left: 54px;
  }

  .sidebar-container {
    width: 54px !important;
  }

  .fixed-header {
    width: calc(100% - 54px)
  }
}

/* for mobile response 适配移动端 */
.mobile {
  .main-container {
    margin-left: 0px;
  }

  .sidebar-container {
    transition: transform .28s;
    width: $sideBarWidth !important;
  }

  &.openSidebar {
    position: fixed;
    top: 0;
  }

  &.hideSidebar {
    .sidebar-container {
      pointer-events: none;
      transition-duration: 0.3s;
      transform: translate3d(calc(#{$sideBarWidth} * -1), 0, 0);
    }
  }

  .fixed-header {
    width: 100%;
  }
}

.withoutAnimation {
  .main-container,
  .sidebar-container {
    transition: none;
  }
}
</style>
