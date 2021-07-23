<!--
 * @Description: 语言选择
 * @Author: ZY
 * @Date: 2020-12-23 20:06:29
 * @LastEditors: SCY
 * @LastEditTime: 2021-04-02 14:33:32
-->
<template>
  <div>
    <el-dropdown
        trigger="click"
    >
      <svg-icon
          class-name="icon-class"
          icon-class="switch-langue"
      />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
              v-for="item in allLanguage"
              :key="item.value"
              :disabled="language.value===item.value"
          >
            <span @click="handleSetLanguage(item)">{{ item.name }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import {useI18n} from 'vue-i18n'
import {ElMessage} from 'element-plus'
import {allLanguage} from '@/config/modules/setting.config'
import {Language} from '@/types/common.d'
import {SettingStore} from "@/store/modules/setting";

export default defineComponent({
  props: {
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const {locale, t} = useI18n()

    const handleSetLanguage = (lang: Language) => {
      SettingStore.ChangeSetting({key: "language", value: lang})
      locale.value = SettingStore.language.value
      ElMessage({
        message: t('common.switchLanguage'),
        type: 'success'
      })
    }
    const language = computed(() => {
      return SettingStore.language
    })
    return {
      handleSetLanguage,
      language,
      allLanguage
    }
  }
})
</script>

<style lang="scss" scoped>
.svg-color {
  fill: white;
}
</style>
