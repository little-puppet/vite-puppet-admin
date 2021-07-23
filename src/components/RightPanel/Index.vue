<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-24 10:44:01
 * @LastEditors: ZY
 * @LastEditTime: 2021-03-25 08:27:00
-->

<template>
  <div
    class="handle-button"
    :style="{'top': buttonTop+'px','backgroundColor': theme}"
    @click="show= true"
  >
    <i class="el-icon-setting" />
  </div>
  <el-drawer
    title="设置"
    v-model="show"
    size="300px"
    destroy-on-close
  >
    <slot />
  </el-drawer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import {SettingStore} from "@/store/modules/setting";
export default defineComponent({
  props: {
    buttonTop: {
      type: Number,
      default: 250
    }
  },
  setup() {
    const show = ref(false)
    const theme = computed(() => {
      return SettingStore.themeVariables.top_bg
    })
    return {
      show,
      theme
    }
  }
})
</script>

<style lang="scss" scoped>

.handle-button {
  width: 48px;
  height: 48px;
  position: absolute;
  right: 0px;
  text-align: center;
  font-size: 24px;
  border-radius: 6px 0 0 6px !important;
  z-index: 99;
  cursor: pointer;
  pointer-events: auto;
  color: #fff;
  line-height: 48px;

  i {
    font-size: 24px;
    line-height: 48px;
  }
}
</style>
