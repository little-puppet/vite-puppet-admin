<template>
  <div>
hello11  dasdasdf d
  </div>
</template>

<script lang='ts'>
import {reactive, toRefs, onBeforeMount, onMounted, defineComponent} from 'vue'
export default defineComponent({
  components: {
  },
  name: '',
  setup() {
    const data = reactive({})
    onBeforeMount(() => {})
    onMounted(() => {})
    return {
      ...toRefs(data),
    }
  },
})
</script>
<style scoped lang='scss'>
</style>
