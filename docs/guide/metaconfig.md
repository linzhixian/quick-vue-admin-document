# 元配置文件
  
  每个菜单都要对应至少一个通用元配置文件
   
   【元配置文件】分为两种：
- 通用元配置文件：必须有，前后端代码通用
- 后端元配置文件：可选，只用于后端，命名是在【通用元配置文件】的命名加后缀"_server"


| 元配置文件种类      | 可选    | 说明|命名|
| --------   | -----   | ---- |-|--|
| 通用元配置文件|必选|前后端通用,用于描述增、删、改、查的|
| 后端元配置文件|可选|只后端用到,用于后端的hook操作|在【通用元配置文件】的命名加后缀"_server|
::: tip
 因为安全性：元配置文件必须要区分两种，否则有可能把后端配置文件build到前端代码里，从而导致数据库账号等机密信息的泄露
:::

## 路径
  
   元配置文件的路径和文件对应着nav_men.js文件里的菜单项的path,放在:项目目录/config/meta 下
   
   例如：nav_men.js文件里的菜单定义
```bash
    // /config/nav_menu.js
    ...
    { path: '/company/Department', name: '部门' }
   ...
```
   则 元配件文件位置和文件名在：
```bash
   项目目录/config/meta/company/Department.js
```
   则 后端元配件文件位置和文件名在：
```bash
   项目目录/config/meta/company/Department_server.js
```

## 导入
  
  nav_menu.js 每个菜单组都对应config/meta下的同名目录
 
例如：
```bash js{5}
module.exports = {
    title: 'HR系统',
    nav_menu: [{
            path: '/',
            name: '功能',
            iconCls: 'el-icon-menu', //图标样式class       
            children: [
                { path: '/company/Employee', name: '员工' },
                { path: '/company/Approve', name: '审批' },
                { path: '/company/Doc', name: '文档' }
            ]
        }
    ]
};
```
步骤：
1.  在config/meta 创建目录 company
2. 在/config/meta/company/下创建三个通用元配置文件：Employee.js,Approve.js,Doc.js
3. 创建文件config/meta/company/index.js

```bash js{5}
import * as Department from "./Employee";
import * as Approve from "./Approve";
import * as Doc from "./Doc";

module.exports = {Department,Approve,Doc};
```
4.  在config/meta/index.js 增一行
```bash js{5}
 load("company", require("./company"));
```