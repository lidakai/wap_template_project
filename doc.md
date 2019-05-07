### 错误码


* Success      0      成功
* ServiceErr   400    服务端错误
* AuthErr      500    认证错误
* ParamErr     501    参数错误
* CodeErr      502    验证码错误
* MobileErr    503    手机号错误
* MySQLErr     601    mysql 错误
* RedisErr     602    redis 错误
* OssErr       603    oss 错误

### 请求验证码

* post /api/v1/user/auth/code
* params

```json
{
    "mobile": "12312341234"
}
```

* return

```json
{
    "code": 0
}
```

### 登录（首次登陆时为注册）

* post /api/v1/user/auth/login
* params

```json
{
    "mobile": "12312341234",
    "code": "123456"
}
```

* return 

```json
{
    "code": 0,
    "data": "ODY2YmE3YWY4MjM1MzFlO.YmE3YW3YWY4MODY2jM1MzFl"
}
```

### 刷新认证
* get /api/v1/user/auth/refresh

* return
```json
{
    "code": 0,
    "data": "eyJ1aWQiOjEyNTE4NDY3MjQsInR5cGUiOiJkYXRhIn0=.NTYyNTNkZGJmZmI0NmFhYTlmOTdhYzlmMmZmZjU1YTBiNzE1NjkzY2U4MTNiOGJmOTVlZGQ5YzY0ODliYTk1ZQ=="
}
```

### 获取用户信息

* get /api/v1/user/info/get
* return

```json
{
    "code": 0,
    "data": {
        "nickname": "15158161535",
        "gender": -1,
        "province": "",
        "city": ""
    }
}
```

### 修改用户信息

* post /api/v1/user/info/modify
* params

```json
{
	"nickname": "xiaozhe",
	"province": "浙江",
	"city": "杭州",
	"gender": 1,
	"avatar": "http://zhibobao.com/1.png"
}
```

* return

```json
{
    "code": 0
}
```

### 修改头像

* post /api/v1/user/avatar/modify
* params

```json
{
    "avatar": "http://xxxx.com/dddd.png"
}
```

* return

```json
{
    "code": 0
}
```

### 验证旧手机号

* post /api/v1/user/mobile/check
* params

```json
{
    "mobile": "12312341234",
    "code": "123456"
}
```

* return

```json
{
    "code": 0
}
```

### 绑定、修改手机号

* post /api/v1/user/mobile/bind
* params

```json
{
    "mobile": "12312341234",
    "code": "123456"
}
```

* return

```json
{
    "code": 0,
    "data": "ODY2YmE3YWY4MjM1MzFlO.YmE3YW3YWY4MODY2jM1MzFl"
}
```