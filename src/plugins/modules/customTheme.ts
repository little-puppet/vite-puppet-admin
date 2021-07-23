/**
 * 设置全局主题
 */
import {changeTheme} from "@/utils/themeSetter";
import {SettingStore} from "@/store/modules/setting";


export default function loadComponent(app: any) {
  changeTheme(SettingStore.themeVariables)
}
