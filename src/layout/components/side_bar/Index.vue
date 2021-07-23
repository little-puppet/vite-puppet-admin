<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <menu-wrapper menu-mode="vertical"/>
  </el-scrollbar>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import MenuWrapper from '@/components/MenuWrapper/Index.vue'

export default defineComponent({
  components: {
    MenuWrapper
  }
})

</script>
<style lang='scss' scoped>
.el-scrollbar {
  height: calc(100% - #{$logoHeight});
  background: $menuBg !important;
}

</style>
