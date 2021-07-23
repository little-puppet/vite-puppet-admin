<template>
  <div
    v-if="external"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
  />
  <svg
    v-else
    :class="svgClass"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { isExternal } from '@/utils/validate'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const external = computed(() => isExternal(props.iconClass))
    const iconName = computed(() => `#icon-${props.iconClass}`)
    const styleExternalIcon = computed(() => {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
      }
    })
    const svgClass = computed(() => {
      if (props.className) {
        return 'svg-icon ' + props.className
      } else {
        return 'svg-icon'
      }
    })
    return { external, iconName, styleExternalIcon, svgClass }
  }
})
</script>

<style scoped>
.svg-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
  vertical-align: middle;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
