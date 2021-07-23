<!--
 * @Description: 设置页面
 * @Author: ZY
 * @Date: 2020-12-17 16:05:05
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 13:48:18
-->
<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">
        {{ t('settings.title') }}
      </h3>

      <div class="drawer-item">
        <span>{{ t('settings.theme') }}</span>
        <ThemePicker
          style="float: right;height: 26px;margin: -3px 8px 0 0;"
          @change="themeChange"
        />
      </div>

      <div class="drawer-item">
        <span>{{ t('settings.showTagsView') }}</span>
        <el-switch
          v-model="showTagsView"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ t('settings.showSidebarLogo') }}</span>
        <el-switch
          v-model="showSidebarLogo"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ t('settings.fixedHeader') }}</span>
        <el-switch
          v-model="fixedHeader"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ t('settings.sidebarTextTheme') }}</span>
        <el-switch
          v-model="sidebarTextTheme"
          class="drawer-switch"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import ThemePicker from '@/components/ThemePicker/Index.vue'
import { useI18n } from 'vue-i18n'
import {SettingStore} from "@/store/modules/setting";

export default defineComponent({
  components: {
    ThemePicker
  },
  setup() {
    const { t } = useI18n()
    const state = reactive({
      fixedHeader: SettingStore.fixedHeader,
      showTagsView: SettingStore.showTagsView,
      showSidebarLogo: SettingStore.showSidebarLogo,
      sidebarTextTheme: "",
      themeChange: (value: string) => {
        SettingStore.ChangeSetting({ key: 'theme', value })
      }
    })

    watch(() => state.fixedHeader, (value) => {
      SettingStore.ChangeSetting({ key: 'fixedHeader', value })
    })

    watch(() => state.showTagsView, (value) => {
      SettingStore.ChangeSetting({ key: 'showTagsView', value })
    })

    watch(() => state.showSidebarLogo, (value) => {
      SettingStore.ChangeSetting({ key: 'showSidebarLogo', value })
    })

    watch(() => state.sidebarTextTheme, (value) => {
      SettingStore.ChangeSetting({ key: 'sidebarTextTheme', value })
    })

    return {
      t,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right
  }
}
</style>
