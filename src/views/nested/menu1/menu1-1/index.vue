<template>
  <div style="padding:30px;">
    <el-alert
      :closable="false"
      title="menu 1-1"
      type="success"
    >
      <router-view />
    </el-alert>
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
