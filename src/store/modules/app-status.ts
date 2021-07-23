import {Action, config, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import store from '@/store'
import {localVuex} from "@/utils/vuexLocal";

config.rawError = true

export enum DeviceType {
    Mobile,
    Desktop,
}

export interface IAppState {
    device: DeviceType
    sidebar: {
        opened: boolean
        withoutAnimation: boolean
    }
    size: string
}

@Module({dynamic: true, store, namespaced: true, name: 'app-status'})
class AppStatus extends VuexModule implements IAppState {
    public sidebar = {
        opened: true,
        withoutAnimation: false
    }

    public device = DeviceType.Desktop
    public size = 'medium'

    @Mutation
    private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
        var aaa = this.sidebar.opened;
        this.sidebar.opened = !aaa
        this.sidebar.withoutAnimation = withoutAnimation
    }

    @Mutation
    private CLOSE_SIDEBAR(withoutAnimation: boolean) {
        this.sidebar.opened = false
        this.sidebar.withoutAnimation = withoutAnimation
    }

    @Mutation
    private TOGGLE_DEVICE(device: DeviceType) {
        this.device = device
    }


    @Mutation
    private SET_SIZE(size: string) {
        this.size = size
    }

    @Action
    public ToggleSideBar(withoutAnimation: boolean) {
        this.TOGGLE_SIDEBAR(withoutAnimation)
    }

    @Action
    public CloseSideBar(withoutAnimation: boolean) {
        this.CLOSE_SIDEBAR(withoutAnimation)
    }

    @Action
    public ToggleDevice(device: DeviceType) {
        this.TOGGLE_DEVICE(device)
    }

    @Action
    public SetSize(size: string) {
        this.SET_SIZE(size)
    }
}

export const AppStatusStore = getModule(AppStatus)
