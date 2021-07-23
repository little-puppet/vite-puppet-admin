<!--
 * @Description: 折叠边栏按钮
 * @Author: ZY
 * @Date: 2020-12-23 16:25:41
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-23 17:55:52
-->

<template>
  <div
    :class="[{'is-active': !isActive}]"
    @click="toggleClick"
  >
    <svg-icon
      class-name="icon-class"
      icon-class="hamburger"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-click'],
  setup(_, context) {
    const toggleClick = () => {
      context.emit('toggle-click')
    }
    return {
      toggleClick
    }
  }
})
</script>

<style lang="scss" scoped>


.is-active {
  transform: rotate(180deg);
}
</style>
