# 快速上手

  我们从一个基本的"增、删、改、查,分页"功能，开始我们的quick-vue-admin之旅。

  假设我们要建立一个HR系统：第一步，要建立部门表：
  
 
  ## 第一步：创建侧边栏菜单组

   - 打开文件：/config/shared/nav_menu.js
   - 为左测边栏增加一个菜单组：功能，包含子菜单：部门

   最后结果：
```bash
module.exports = {
    title: 'HR系统',
    nav_menu: [{
        id: 200,
        path: '/',
        name: '功能',
        iconCls: 'el-icon-menu', //图标样式class       
        children: [
            { id: 301, path: '/company/Department', name: '部门' },
        ]
    }]
};
```
刷新浏览器：
左边侧边栏多了个菜单组：功能，点开功能，点部门，则出现：
![](/dep.png)
页面内容显示：404 page not found ,这是因为我们还没定义部门的配置文件
## 第二步：创建部门配置文件
 在第一步里配置的菜单：部门 的path是：'/company/Department'
 - 对应这个path，在:项目目录/src/shared/meta/ 下新建一个目录：company
 - 在新目录下：新建一个文件:Department.js
 - 在新目录下：创建文件index.js键入如下内容：
```js{5}
import * as Department from "./Department";
module.exports = {Department};
```
 - 在新文件：Department.js，键入如下内容：
```js{5}
module.exports = {
    entityName: 'department',
    columnsDef: [{
            prop: 'name',
            label: '部门名称',
            width: 240,
            filter: true,
            input: { type: 'text', rule: 'required' }
        },
        {
            prop: 'memo',
            label: '备注',
            width: 150,
            input: 'text'
        }
    ]
}
```
## 第三步：导入
1.在目录：/src/shared/meta/company/ 下创建文件index.js

```js{5}
import * as Department from "./Department"

module.exports = {Department}
```
2.在目录:/src/shared/meta/index.js增加一行

```js{5}
let map = {};

load("company", require("./company"));
load("sys",require("./sys"));
load("example", require("./example"));
...
```
## 完成
- 刷新浏览器，部门菜单现在有内容了。
![](/depok.png)
- 新增：点【新增】 按钮，增加一个部门
- 双击：表格的任一行记录，可以打开编辑对话框
- 删除：勾选多条记录，点【删除】按钮
- 查询：在新增上的输入框输入内容可以按部门名称查询记录

重复以上的两个步骤就可以完成大量的类似功能。


## 额外
 实际业务需求是复杂多变的，还有很多复杂功能如何做到呢？ 

例如：
- 新增要支持各种不同的输入框，包括：checkbox、select、date-picker、fileUpload、tree ...
- 按指定字段排序
- 查询字段需要在数据创建索引
- 新增的select数据来自数据库
- 表格某个字段的显示内容是关联到另一个表格
- 数据提交和保存到数据库之前要做些特殊处理
- 需要使用完全自定义的组件
- 等等

这些需求都可以在配置文件里实现，具体实现请进入下一步课程：→[指南](/guide/title.md)