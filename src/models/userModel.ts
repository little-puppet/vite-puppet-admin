// {
//   "code": 0,
//   "data": {
//     "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
//     "id": 1,
//     "mobile": "17554086317",
//     "nickName": "阿萨德飞",
//     "platformId": 1,
//     "platformUserId": "17554086317",
//     "23": [],
//     "updateTime": "2020-12-18 22:07:24"
//    },
//   "message": "请求成功。"
// }

export interface UserInfoModel {
    avatar: string,
    email:string,
    id: number,
    introduction:string,
    mobile: string,
    nickName: string,
    platformId: number,
    platformUserId: string,
    roles:string[],
    updateTime: string
}

export interface Users {
  items: any
}
