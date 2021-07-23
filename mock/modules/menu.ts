export default [
  {
    url: '/puppet-auth/menu/user/menu',
    method: 'get',
    response: ({query, body}) => {
      return {
        "code": 0,
        "data": [
          {
            "children": [
              {
                "component": "/user/list",
                "createTime": "2020-12-15 12:00:02",
                "icon": "",
                "id": 2,
                "name": "user_list",
                "path": "list",
                "pid": 1,
                "sortNo": 2000,
                "status": 1,
                "updateTime": "2021-07-10 15:44:59"
              },
              {
                "component": "/dashboard/index",
                "createTime": "2020-12-15 12:01:24",
                "icon": "",
                "id": 3,
                "name": "user_white",
                "path": "white",
                "pid": 1,
                "sortNo": 3000,
                "status": 1,
                "updateTime": "2021-07-10 15:45:04"
              },
              {
                "component": "",
                "createTime": "2020-12-15 12:02:12",
                "icon": "",
                "id": 4,
                "name": "user_black",
                "path": "black",
                "pid": 1,
                "sortNo": 4000,
                "status": 1,
                "updateTime": "2021-07-10 15:45:12"
              }
            ],
            "createTime": "2020-12-15 11:59:09",
            "icon": "user",
            "id": 1,
            "name": "user",
            "path": "user",
            "sortNo": 1000,
            "status": 1,
            "updateTime": "2021-07-04 16:13:11"
          },
          {
            "children": [
              {
                "component": "auth/role",
                "createTime": "2020-12-15 12:06:16",
                "icon": "",
                "id": 6,
                "name": "auth_role",
                "path": "role",
                "pid": 5,
                "sortNo": 6000,
                "status": 1,
                "updateTime": "2021-07-10 15:45:22"
              },
              {
                "component": "",
                "createTime": "2020-12-15 12:06:41",
                "icon": "",
                "id": 7,
                "name": "auth_menu",
                "path": "menu",
                "pid": 5,
                "sortNo": 7000,
                "status": 1,
                "updateTime": "2021-07-10 15:45:25"
              },
              {
                "component": "auth/resource",
                "createTime": "2020-12-15 12:08:10",
                "icon": "",
                "id": 8,
                "name": "auth_resource",
                "path": "resource",
                "pid": 5,
                "sortNo": 8000,
                "status": 1,
                "updateTime": "2021-07-10 15:45:28"
              }
            ],
            "createTime": "2020-12-15 12:04:18",
            "icon": "auth",
            "id": 5,
            "name": "auth",
            "path": "auth",
            "sortNo": 5000,
            "status": 1,
            "updateTime": "2021-07-04 16:13:28"
          },
          {
            "createTime": "2020-12-16 11:02:02",
            "icon": "baidu",
            "id": 9,
            "name": "baidu",
            "path": "http://www.baidu.com",
            "updateTime": "2021-07-10 15:44:26"
          }
        ],
        "message": "请求成功。"
      };
    },
  }
];
