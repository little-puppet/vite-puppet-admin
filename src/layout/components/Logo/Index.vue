<template>
  <router-link class="app-logo" to="/" :class="{'app-logo--Top': layout !== 'Classic'}">
    <img :src="LogoImg">
    <div v-if="show" class="sidebar-title">{{ title }}</div>
  </router-link>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref, watch} from 'vue'
import {Layout} from "@/types/common.d";
import {SettingStore} from "@/store/modules/setting";
import LogoImg from '@/assets/logo.png'
import config from '@/config'
import {AppStatusStore} from "@/store/modules/app-status";

export default defineComponent({
  name: 'Logo',
  setup(props) {
    const show = ref<boolean>(true)
    const title = computed(() => config.app.title)
    const layout = computed(() => SettingStore.layout.toString())

    const isCollapse = computed(() => {
      return !AppStatusStore.sidebar.opened
    })
    watch(
      () => isCollapse.value,
      (collapsed: boolean) => {
        if (layout.value !== Layout.Common) {
          show.value = true
        } else {
          if (!collapsed) {
            setTimeout(() => {
              show.value = !collapsed
            }, 100)
          } else {
            show.value = !collapsed
          }
        }
      }
    )
    return {
      show,
      title,
      isCollapse,
      layout,LogoImg
    }
  }
})
</script>

<style lang="scss" scoped>
.app-logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: $logoHeight;
  width: 100%;
  background-color: $menuBg;

  img {
    width: 37px;
    height: 37px;
    margin-left: 14px;
  }

  .sidebar-title {
    font-size: 14px;
    font-weight: 700;
    transition: .5s;
    margin-left: 12px;
  }

  .sidebar-title {
    color: $menuActiveText;
  }
}

.app-logo--Top {
  width: auto;
  background-color: $menuBg;
  transition: background 0.2s;
  padding: 0 8px;

  &:hover {
    background: #f6f6f6;
  }

  img {
    margin-left: 0;
  }

  .sidebar-title {
    color: $menuText;
    word-break:keep-all;     /* 不换行 */
    white-space:nowrap;      /* 不换行 */
    overflow:hidden;         /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;  /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }
}
</style>
