# 基础

## 布局

![](/layout.jpg)

## 操作
- 查询：在查询区的输入框输入查询关键字，无需回车，即可刷新出查询结果
- 新增：点功能区的【新增】按钮弹出输入对话框
- 删除：选中要删除的记录最左边选择框(可选多条)，点击右下角的【删除】按钮，删除选中的所有记录
- 编辑：鼠标双击要编辑的记录，弹出修改对话框

## 目录

  下面是整个项目的目录结构

``` sh
├── bin                        // 启动脚本 
├── build                      // webpack构建
├── config                     // 配置相关
│   ├── client                 // 前端配置文件
│   ├── server                 // 后端配置文件 
│   ├── shared                 // 前后端共享配置文件 
├── src                        // 源代码
│   ├── client                 // 前端源代码
│   │   ├── api                // 前端API请求
│   │   ├── components         // 全局公共组件
│   │   ├── utils              // 前端公用方法
│   │   ├── views              // views所有页面
│   │   ├── vuex               // 前端存储
│   │   ├── App.vue            //入口页面
│   │   └── main.js            //入口文件，加载：组件、路由
│   ├── server                 // 后端源代码
│   │   ├── controllers        // http响应控制器
│   │   ├── db                 // 数据库
│   │   ├── error              // 异常
│   │   ├── meta               // 后端元配置文件
│   │   ├── middlewares        // koa 中间件
│   │   ├── routers            // 路由
│   │   ├── services           // 后端通用业务方法
│   │   └── utils              // 后端通用方法
│   └── shared                 // 前后端通用源代码
│       ├── meta               // 元配置文件
│       └── utils              // 通用方法
├── www                        // www目录，静态资源
│   └── dist                   // webpack bundle file：build.js
├── .babelrc                   // babel配置
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git忽略项
└── package.json               // package.json
```

**下面教程中所指的目录都是相对项目安装目录而言**