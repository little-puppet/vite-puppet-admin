import {VuexModule, Module, Mutation, Action, getModule,config as c} from 'vuex-module-decorators'
import store from '@/store'

import config from '@/config'
import {SettingConfig} from "@/config/modules/setting.config";
import {localVuex} from "@/utils/vuexLocal";
c.rawError = true

export type ISettingsState = SettingConfig

@Module({dynamic: true, store, namespaced: true, name: 'setting',preserveState:localVuex(true)})
class Setting extends VuexModule implements ISettingsState {
  fixedHeader = config.setting.fixedHeader
  language = config.setting.language;
  layout = config.setting.layout;
  showFullScreen = config.setting.showFullScreen;
  showLanguage = config.setting.showLanguage;
  showNotice = config.setting.showNotice;
  showProgressBar = config.setting.showProgressBar;
  showRefresh = config.setting.showRefresh;
  showSearch = config.setting.showSearch;
  showSettings = config.setting.showSettings;
  showSidebarLogo = config.setting.showSidebarLogo;
  showTagsView = config.setting.showTagsView;
  showTheme = config.setting.showTheme;
  themeVariables = {...config.setting.themeVariables};

  @Mutation
  private CHANGE_SETTING(payload: { key: string, value: any }) {
    const {key, value} = payload
    console.log(Object.prototype.hasOwnProperty.call(this, key))
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      (this as any)[key] = value
    }
  }

  @Action
  public ChangeSetting(payload: { key: string, value: any }) {
    this.CHANGE_SETTING(payload)
  }
}

export const SettingStore = getModule(Setting)
