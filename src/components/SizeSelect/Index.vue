<!--
 * @Description: 大小选择
 * @Author: ZY
 * @Date: 2020-12-24 09:59:06
 * @LastEditors: SCY
 * @LastEditTime: 2021-04-02 14:32:50
-->
<template>
  <div>
    <el-dropdown
      id="size-select"
      trigger="click"
      @command="handleSetSize"
    >
      <div>
        <svg-icon
          class-name="icon-class"
          icon-class="size"
        />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item of sizeOptions"
            :key="item.value"
            :disabled="size===item.value"
            :command="item.value"
          >
            {{
              item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, nextTick, toRefs, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import {TagsViewStore} from "@/store/modules/tags-view";
import {AppStatusStore} from "@/store/modules/app-status";

export default defineComponent({
  setup() {
    const { fullPath } = useRoute()
    const router = useRouter()
    function refreshView() {
      TagsViewStore.delAllCachedViews()
      nextTick(() => {
        router.replace({ path: '/redirect' + fullPath }).catch((err) => {
          console.warn(err)
        })
      })
    }
    const state = reactive({
      sizeOptions: [
        { label: 'Default', value: 'default' },
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' },
        { label: 'Mini', value: 'mini' }
      ],
      handleSetSize: (size: string) => {
        AppStatusStore.SetSize(size)
        refreshView()
        ElMessage.success('Switch Size Success')
      }
    })
    const size = computed(() => {
      return AppStatusStore.size
    })
    return {
      ...toRefs(state),
      size
    }
  }
})
</script>
