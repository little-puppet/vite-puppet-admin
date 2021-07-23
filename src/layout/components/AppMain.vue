<!--
 * @Description: 主视图
 * @Author: ZY
 * @Date: 2020-12-24 10:36:58
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-11 10:27:35
-->
<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useRoute} from 'vue-router'
import {TagsViewStore} from "@/store/modules/tags-view";

export default defineComponent({
  setup() {
    const route = useRoute()
    const cachedViews = (): string[] => {
      return <string[]>TagsViewStore.cachedViews.filter(item => item !== undefined)
    }


    const key = () => {
      return route.path
    }
    return {
      cachedViews,
      key
    }
  }
})
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>
