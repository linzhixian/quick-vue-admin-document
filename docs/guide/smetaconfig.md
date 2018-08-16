# 后端元配置文件
-  所有函数都是在后端执行
-  所有变量都是可选的
- 由于web框架使用的[Koa](https://koa.bootcss.com/)，下面的ctx就是Koa的ctx
- 文件名是在通用元配置文件名加后缀_server

| 变量名      | hook说明     |  类型   | 返回|
| --------   | -----   | ----   |----|
|beforeFilter| 生成查询条件前 | Function(query,ctx) |query|
|beforeUpdate| 编辑保存前 | Function(doc,ctx) |doc|
|beforeAdd| 新增保存前 | Function(doc,ctx) |doc|
|beforeRemove| 删除保存前 | Function(query,ctx,metaData) |query|
|beforeBatchRemove| 批量删除保存前 | Function(query,ctx,metaData) |query|
|beforeList| 不分页、提交查询前 | Function(query,ctx) |-|
|afterList| 不分页、查询到数据后和返回查询数据前 | Function(records,query,ctx) |records|
|beforeListPage| 分页、提交查询前 | Function(query,ctx) |-|
|afterListPage| 分页、查询到数据后和返回查询数据前 | Function(records,query,ctx) |records|

query格式：{key1:value1,key2:value2}

使用举例

例子一：需要在所有新增的记录里增加一个人读字段：addTime，记录增加时间

``` js{5}
beforeAdd:function(doc){
  doc.addTime=utility.YYYYMMDDHHmmss()  // '2018-07-17 14:43:02'
  return doc
 }
}
```

例子二：使用时间戳作为_id

``` js{5}
beforeAdd:function(doc){
  doc._id=new Date().getTime()
  return doc
 }
}
```

完整文件:

项目目录/config/meta/company/Department_server.js

``` js{5}
var utility = require('utility');

module.exports = {
	beforeAdd(doc,ctx) {
		doc.addTime=utility.YYYYMMDDHHmmss()  // '2018-07-17 14:43:02'
		doc._id=new Date().getTime()
		return doc 
	}
}

```