import * as Cookies from "js-cookie";

export enum Environment {
    Development = 'development',
    Production = 'production'
}

export interface VuexStorage {
    getItem: (key: string) => any;
    setItem: (key: string, value: any) => void;
    removeItem: (key: string) => void;
}

export const Cookie:VuexStorage ={
    getItem: key => Cookies.get(key),
    setItem: (key, value) => Cookies.set(key, value, {expires: 7}),
    removeItem: key => Cookies.remove(key)
}

export interface ThemeVariables {
    bg: string
    top_bg: string
    bg_container: string
    menu_bg: string
    menu_hover: string
    menu_text: string
    menu_active_text: string
    sub_menu_bg: string
    sub_menu_text: string
    sub_menu_hover: string
    sub_menu_active_text: string
    side_bar_width: string
}


export enum ContentType {
    FORM = 'application/x-www-form-urlencoded',
    JSON = 'application/json; charset=utf-8'
}

export enum InfoShowType {
    LOG,
    NOTIFICATION,
    TOAST
}

export enum RouterSource {
    Frontend = 'frontend',
    Backend = 'backend'
}

export enum RouterMode {
    Hash = 'hash',
    HISTORY = 'history'
}

export enum Layout {
    Horizontal = 'Horizontal',
    Vertical = 'Vertical',
    Gallery = 'Gallery',
    Comprehensive = 'Comprehensive',
    Common = 'Common'
}

// 主题分类
export enum ThemeName {
    Default,
    Ocean,
    Green,
    Glory,
    White,
    Dark
}

export interface Language {
    name: string
    value: string
}
