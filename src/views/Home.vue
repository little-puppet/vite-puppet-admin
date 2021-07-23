<template>
  <div>Home</div>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
  name: '',
  setup() {
    const data = reactive({})
    onBeforeMount(() => {})
    onMounted(() => {})
    return {
      ...toRefs(data),
    }
  },
}
</script>
<style scoped lang='scss'>
</style>