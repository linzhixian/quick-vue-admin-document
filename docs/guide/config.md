# 项目后端配置文件
  
  项目后端配置文件是：整个项目后端都会用到的变量设置
  
``` js{5}
// /config/development.js
module.exports = {
    serverId: '0',
    env: 'development', //环境名称
    port: 9001, //http监听端口    
    mongodb: { //数据库地址
        "host": "192.168.1.20",
        "port": 27017,
        "dbname": "quickVueAdmin",
        "poolSize": 1
    },
    dataDir: "/data"
}
```

## 路径
   
   项目目录/config/
   
 - 开发环境配置文件：development.js
 - 生产环境配置文件：product.js
 

## 格式

| 变量名      | 说明    | 类型  | 可选 | 默认值|
| --------   | -----   | ---- |----  |---   |
|serverId  | 进程ID（当启动多个进程用以区分） |string|可选|-|-|
|env|      该配置文件的运行环境|string|必填|development/product|product|
|mongodb|  MongoDB数据的连接参数|object|必填|-|
|dataDir| 项目数据保存目录(上传文件等用到)|string|可选|-|

::: tip
dataDir 目前是相对路径，相对项目目录，以后考虑改为绝对路径，便于项目数据另外保存
:::
## mongodb格式

| 变量名      | 说明    | 类型  | 可选 | 默认值|
| --------   | -----   | ---- |----  |---   |
|host  | MongoDB ip |string|必填|-|-|
|port|    MongoDB port|int|必填|-|-|
|dbname|  数据库名|string|必填|-|
|poolSize| 开启的连接池大小|int|必填|-|
|user| 用户名|string|可选|-|
|pass| 密码|string|可选|-|

::: tip
如果Mongodb开启了密码验证，就必须填：user和pass  
验证机制采用：SCRAM-SHA-1
:::
  
