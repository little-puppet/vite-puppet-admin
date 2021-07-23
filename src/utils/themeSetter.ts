import {ThemeVariables} from "@/types/common.d";

export const changeTheme = (themeVariables: ThemeVariables) => {
    const keys: any[] = Object.keys(themeVariables)
    const values: any[] = Object.values(themeVariables)
    for (var i = 0; i < keys.length; i++) {
        const key = "--" + keys[i].replace(/_/g, "-");
        const value = values[i]
        document.documentElement.style.setProperty(key, value)
    }
}
