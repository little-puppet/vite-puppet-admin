import { createLogger } from 'vuex'
/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-18 15:23:57
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-20 11:12:08
 */
import { createI18n } from 'vue-i18n' // import from runtime only

import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'

// User defined lang
import enLocale from './modules/en'
import zhLocale from './modules/zh-cn'
import {AppStatusStore} from "@/store/modules/app-status";
import {SettingStore} from "@/store/modules/setting";

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  'zh-cn': {
    ...zhLocale,
    ...elementZhLocale
  }
}

export const getLocale = () => {
  const language = SettingStore.language.value
  if (language) {
    return language
  }
}

const i18n = createI18n({
  locale: getLocale(),
  messages: messages
})

export default i18n
