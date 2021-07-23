<template>
  <div style="padding:30px;">
    <el-alert
      :closable="false"
      title="menu 1"
    >
      <transition
        name="fade-transform"
        mode="out-in"
      >
        <router-view />
      </transition>
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
