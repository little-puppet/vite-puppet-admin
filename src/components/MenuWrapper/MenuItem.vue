<template>
  <el-menu-item
    v-if="(!item.meta || !item.meta.hidden) && (!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children) && (theOnlyOneChild.meta)  "
:index="resolvePath(theOnlyOneChild.path)"
    :class="[isCollapse ? 'simple-mode' : 'full-mode', {'first-level': isFirstLevel}]">
    <svg-icon
      v-if="theOnlyOneChild.meta.icon"
      class-name="icon-class"
      :icon-class="theOnlyOneChild.meta.icon"
    />
    <span v-if="theOnlyOneChild.meta.title">{{
        t("route." + theOnlyOneChild.meta.title)
      }}</span>
  </el-menu-item>
  <el-submenu
    v-if="(!item.meta || !item.meta.hidden) && !(!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children)"
    popper-class="menu-item-wrapper" :index="resolvePath(item.path)"
    :class="[isCollapse ? 'simple-mode' : 'full-mode', {'first-level': isFirstLevel}]">
    <template #title>
      <svg-icon
        v-if="item.meta && item.meta.icon"
        class-name="icon-class"
        :icon-class="item.meta.icon"
      />
      <span v-if="item.meta && item.meta.title">{{
          t("route." + item.meta.title)
        }}</span>
    </template>
    <template v-if="item.children">
      <menu-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :is-collapse="isCollapse"
        :is-first-level="false"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </template>
  </el-submenu>

</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {RouteRecordRaw} from 'vue-router'
import {isExternal} from '@/utils/validate'
import {useI18n} from 'vue-i18n'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<RouteRecordRaw>,
      required: true
    },
    isCollapse: {
      type: Boolean,
      required: false
    },
    isFirstLevel: {
      type: Boolean,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  components: {},
  setup(props) {
    const alwaysShowRootMenu = computed(() => {
      if (props.item.meta && props.item.meta.alwaysShow) {
        return true
      } else {
        return false
      }
    })

    const showingChildNumber = computed(() => {
      if (props.item.children) {
        const showingChildren = props.item.children.filter((item) => {
          if (item.meta && item.meta.hidden) {
            return false
          } else {
            return true
          }
        })
        return showingChildren.length
      }
      return 0
    })

    const theOnlyOneChild = computed(() => {
      if (showingChildNumber.value > 1) {
        return null
      }
      if (props.item.children) {
        for (const child of props.item.children) {
          if (!child.meta || !child.meta.hidden) {
            return child
          }
        }
      }
      // If there is no children, return itself with path removed,
      // because this.basePath already conatins item's path information
      return {...props.item, path: ''}
    })

    const resolvePath = (routePath: string) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      if (routePath === "") {
        return props.basePath
      }
      return routePath
      // if (props.basePath !== "/") {
      //   return props.basePath + "/" + routePath
      // } else {
      //   return props.basePath + props.basePath + routePath
      // }
    }
    const {t} = useI18n()

    return {
      t,
      alwaysShowRootMenu,
      showingChildNumber,
      theOnlyOneChild,
      resolvePath
    }
  }
})
</script>

<style lang='scss' scoped>
::v-deep(.el-menu--horizontal) {
  .el-menu--popup {
    background-color: $subMenuBg !important;

    .menu-item-wrapper, .el-submenu__title {
      background-color: $subMenuBg !important;
    }
  }
}


</style>
