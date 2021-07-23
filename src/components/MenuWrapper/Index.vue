<template>
  <div class="">
    <el-menu :active-text-color="themeVariables.menu_active_text"
             :background-color="themeVariables.menu_bg"
             :default-active="activeMenu"
             :text-color="themeVariables.menu_text"
             :unique-opened="false"
             class="menu-wrapper"
             :collapse="!isCollapse"
             :mode="menuMode"
             :collapse-transition="false"
             @select="selectMenu">
      <menu-item
        v-for="route in routes"
        :key="route.path"
        :base-path="route.path"
        :is-collapse="isCollapse"
        :item="route"
        is-first-level/>
    </el-menu>
  </div>
</template>

<script lang='ts'>
import {computed, defineComponent, PropType} from 'vue'
import {PermissionStore} from "@/store/modules/permission";
import MenuItem from "./MenuItem.vue";
import {useRoute} from "vue-router";
import {AppStatusStore, DeviceType} from "@/store/modules/app-status";
import {SettingStore} from "@/store/modules/setting";
import {isValidURL} from "@/utils/validate";
import router from "@/router";

export default defineComponent({
  components: {
    MenuItem
  },
  props:{
    menuMode:{
      type: String,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const sidebar = computed(() => {
      return AppStatusStore.sidebar
    })
    const routes = computed(() => {
      return PermissionStore.routes
    })
    const themeVariables = computed(() => {
      return SettingStore.themeVariables
    })
    const showLogo = computed(() => {
      return SettingStore.showSidebarLogo
    })

    const activeMenu = computed(() => {
      const {meta, path} = route
      if (meta !== undefined || meta !== null) {
        if (meta.activeMenu) {
          return meta.activeMenu
        }
      }
      return path
    })
    const selectMenu = function (index: string, indexPath: string) {
      if (isValidURL(index)){
        window.open(index,'_blank')
      } else {
        router.push(index).catch((err) => {
          console.log(err)
        })
      }
      console.log(index)
      console.log(indexPath)
    }

    const isCollapse = computed(() => {
      if (props.menuMode === "horizontal"){
        return true
      }
      return sidebar.value.opened
    })

    return {
      selectMenu,
      sidebar,
      themeVariables,
      routes,
      showLogo,
      activeMenu,
      isCollapse
    }
  }
})

</script>
<style lang='scss'>

.menu-wrapper {
  :not(.first-level){
    >.el-submenu__title,.el-menu-item{
      &:hover{
        background: $subMenuHover !important;
      }
      background: $subMenuBg !important;
    }
  }
  svg {
    margin-right: 16px;
  }
  .is-active.first-level {
    & > .el-submenu__title {
      color: $menuActiveText !important;
    }
  }
  .is-active:not(.first-level) {
    & > .el-submenu__title {
      color: red !important;
    }
  }
  .is-active.el-menu-item:not(.first-level) {
    color: red !important;
  }
  .first-level {
    &.el-menu-item,
    & > .el-submenu__title {
      &:hover {
        background: $menuHover !important;
      }
    }
  }
}

.menu-item-wrapper,
.menu-item-wrapper.el-menu--horizontal {
  & > .el-menu--popup {
    background: $subMenuBg !important;
    min-width: 150px;

    .is-active {
      & > .el-submenu__title {
        color: red !important;
      }
    }

    .el-submenu__title,
    .el-menu-item {
      &.is-active {
        color: red !important;
      }

      &:hover {
        background: $subMenuHover !important;
      }

      min-width: 150px;
      background: inherit !important;
    }
  }
}

</style>
