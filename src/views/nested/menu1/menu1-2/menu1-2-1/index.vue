<template>
  <div style="padding:30px;">
    <el-alert
      :closable="false"
      title="menu 1-2-1"
      type="warning"
    />    <el-alert
      :closable="false"
      title="menu 1-2-1"
      type="warning"
    />
    <i class="el-icon-share"></i>111
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
  name: '',
  setup() {
    const data = reactive({})
    onBeforeMount(() => {})
    onMounted(() => {})
    return {
      ...toRefs(data)
    }
  }
}
</script>
