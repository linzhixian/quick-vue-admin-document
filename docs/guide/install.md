# 安装

  quick-vue-admin不是一个模块，不可以通过npm install 来安装，它是一个集成开发框架，需要从GitHub下载
  目前还不支持数据库Mock，必须和MongoDB集成使用，所以要安装MongoDB。


 ## 本地安装MongoDB
 - [Install on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
 - [Install on Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)
 - [Install on macOS](https://docs.mongodb.com/manual/administration/install-on-linux/)
 ## 安装node和git环境

 ## 安装quick-vue-admin
```bash
# clone the projice
git clone https://github.com/linzhixian/quick-vue-admin.git

# install dependency
npm install

# develop
npm run dev
```
注：如果MongoDB不是安装在本机的默认端口，需要修改配置文件:
 - 打开文件：项目目录/config/development.js
 - 修改 mongod.host 为MongoDB的ip
 - 修改 mongod.port 为MongoDB的端口
 
```bash
 mongodb: { //数据库地址
        "host": "192.168.1.20",
        "port": 27017,
        "dbname": "quickVueAdmin",
        "poolSize": 1
    },
``` 
启动完成后会自动打开浏览器访问 http://localhost:9001， 你看到下面的页面就代表操作成功了。
![](/login.png)

系统默认初始化管理员账号为：用户名：admin,密码：admin。

登录后进入下面页面代表登陆成功
![](/home.png)