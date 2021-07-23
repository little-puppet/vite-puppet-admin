import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import {loginRequest, userInfoRequest} from '@/apis/user'
import router, {resetRouter} from '@/router'
import {PermissionStore} from './permission'
import {TagsViewStore} from './tags-view'
import store from '@/store'
import config from '@/config'
import {localVuex} from "@/utils/vuexLocal";
import {showAppTip} from "@/utils/tipUtil";

export interface IUserState {
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
}

@Module({dynamic: true, store, namespaced: true, name: 'user',preserveState:localVuex(true)})
class User extends VuexModule implements IUserState {
  public token = ''
  public name = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []
  public email = ''

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }

  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email
  }

  @Action
  public async Login(userInfo: { account: string, password: string }) {
    let {account, password} = userInfo
    account = account.trim()

    await loginRequest({account, password})
      .then(async (res) => {
        if (res?.code === 0 && res.data.token) {
          // setToken(res.data.accessToken)
          this.SET_TOKEN(res.data.token)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  @Action
  public ResetToken() {
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }

  @Action
  public ClearRoles() {
    this.SET_ROLES([])
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }

    await userInfoRequest().then((res) => {
      if (res?.code === 0) {
        showAppTip({content: "尊敬的"+res.data.nickName + ",欢迎您使用本系统", type:"success",title:"欢迎使用"})
        if (!config.router.rolesControl && !res.data.roles) {
          this.SET_ROLES(['role'])
        } else {
          this.SET_ROLES(res.data.roles)
        }
        this.SET_NAME(res.data.nickName)
        this.SET_AVATAR(res.data.avatar)
        this.SET_INTRODUCTION(res.data.introduction)
        this.SET_EMAIL(res.data.email)
        return res
      } else {
        throw Error('Verification failed, please Login again.')
      }
    })
  }

  @Action
  public async ChangeRoles(role: string) {
    // Dynamically modify permissions
    const token = role + '-token'
    this.SET_TOKEN(token)
    await this.GetUserInfo()
    resetRouter()
    // Generate dynamic accessible routes based on roles
    PermissionStore.GenerateRoutes(this.roles)
    // Add generated routes
    PermissionStore.dynamicRoutes.forEach(route => {
      router.addRoute(route)
    })
    // Reset visited views and cached views
    TagsViewStore.delAllViews()
  }

  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    resetRouter()

    // Reset visited views and cached views
    TagsViewStore.delAllViews()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }
}

export const UserStore = getModule(User)
