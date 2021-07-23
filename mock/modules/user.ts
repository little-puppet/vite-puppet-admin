export default [
  {
    url: '/puppet-user/user/login',
    method: 'post',
    response: ({query, body}) => {
      console.log('query>>>>>>>>', query);
      console.log('body>>>>>>>>', body);
      return {
        "code": 0,
        "data": {
          "token": "9c4e66e8-b03e-43a3-8a4b-174cfb78b25c"
        },
        "message": "请求成功。"
      };
    },
  }, {
    url: '/puppet-user/user/info',
    method: 'get',
    response: ({query, body}) => {
      console.log('query>>>>>>>>', query);
      console.log('body>>>>>>>>', body);
      return {
        "code": 0,
        "message": "请求成功。",
        "data": {
          "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
          "id": 1,
          "mobile": "17554086317",
          "nickName": "阿萨德飞",
          "platformId": 1,
          "platformUserId": "17554086317",
          "updateTime": "2020-12-18 22:07:24"
        }
      };
    },
  }, {
    url: '/puppet-user/user/page',
    method: 'get',
    response: ({query, body}) => {
      console.log('query>>>>>>>>', query);
      console.log('body>>>>>>>>', body);
      return {
        "code": 0,
        "data": {
          "current": 1,
          "list": [
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 1,
              "mobile": "17554086317",
              "name": "张大坑",
              "nickName": "阿萨德飞",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086317",
              "type": 0,
              "updateTime": "2021-07-19 18:14:50"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 2,
              "mobile": "17554086318",
              "nickName": "阿萨德飞胜多负少",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086318",
              "type": 1,
              "updateTime": "2021-07-19 18:14:52"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 3,
              "mobile": "17554086318",
              "nickName": "大是大非",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086320",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 4,
              "mobile": "17554086318",
              "nickName": " 但是",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086312",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 5,
              "mobile": "17554086318",
              "nickName": "阿萨德飞是",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086311",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 6,
              "mobile": "17554086318",
              "nickName": "爱迪生",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086312",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 7,
              "mobile": "17554086318",
              "nickName": "阿萨德飞",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086332",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 8,
              "mobile": "17554086318",
              "nickName": "阿萨德",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086333",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 9,
              "mobile": "17554086318",
              "nickName": "按时",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 10,
              "mobile": "17554086318",
              "nickName": "按时",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 11,
              "mobile": "17554086318",
              "nickName": "大多数",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 12,
              "mobile": "17554086318",
              "nickName": "士大夫",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 13,
              "mobile": "17554086318",
              "nickName": "玩儿",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 14,
              "mobile": "17554086318",
              "nickName": "玩儿",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 15,
              "mobile": "17554086318",
              "nickName": "二恶",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 16,
              "mobile": "17554086318",
              "nickName": "我二等分",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 17,
              "mobile": "17554086318",
              "nickName": "胜多负少",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 18,
              "mobile": "17554086318",
              "nickName": "玩儿",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 19,
              "mobile": "17554086318",
              "nickName": "玩儿玩儿",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 20,
              "mobile": "17554086318",
              "nickName": "玩儿玩儿额",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 21,
              "mobile": "17554086318",
              "nickName": "我认为",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 22,
              "mobile": "17554086318",
              "nickName": "我二哥",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 23,
              "mobile": "17554086318",
              "nickName": "沃尔沃额",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 24,
              "mobile": "17554086318",
              "nickName": "水电费让",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 25,
              "mobile": "17554086318",
              "nickName": "胜多负少的",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 26,
              "mobile": "17554086318",
              "nickName": "大是大非",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 27,
              "mobile": "17554086318",
              "nickName": "但是的",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            },
            {
              "avatar": "https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-152.png",
              "id": 28,
              "mobile": "17554086318",
              "nickName": "阿萨德飞",
              "password": "$2a$10$NF4OQ7QTTNd3fT.dD/.0F.xTXs5ktr9Hb2ygLHkAjGcuJsIJ/11cS",
              "platformId": 1,
              "platformUserId": "17554086322",
              "type": 1,
              "updateTime": "2021-07-19 18:14:58"
            }
          ],
          "size": 100,
          "total": 28
        },
        "message": "请求成功。"
      };
    },
  },
];
