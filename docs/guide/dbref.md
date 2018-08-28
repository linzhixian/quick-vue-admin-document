# 数据关联


  mongodb是NoSql数据库，在处理数据关联上天生缺陷,所以在设计就不应该有太多的关联，但是基本的两表关联还是经常存在。

 
  例如：一个员工表有个字段：department,其值存放的是部门表的_id，当需要列出员工，同时也要列出所在部门的名称，
  原来的解决方案是loadDatas结合formatter来解决，具体看前面章节：[loadDatas && data](/guide/cmetaconfig.html#loaddatas-data)

  这种解决方按复制繁琐，性能低下，好的解决方案是在后端就已经把关联数据一次性查出来,该解决方案是默认开启：
  
  - 启用条件：
     1. columnsDef里：该列没被隐藏
     2. 含有input,且input含有ajax
     3. 该列保存的值必须是：string 或number，或者array
 
  - 关联原理：后端自动关联数数据input.ajax的表，并取出该表的input.ajax.label定义的属性值，并把数据值放入字段:@prop
  
  - 关闭关联：在columnsDef里增加：autoRef:false
 
例如：Epmolyee.js 只需要把原来的loadDatas，data，和columnsDef里的formatter，autoRef 都去掉
     

```js{28}
//  /src/shared/company/Employee.js

let methods = {
    
    formatSex: function (row, column,cellValue) {
        return cellValue? "男" : "女"
    }
};

module.exports = {
    entityName: 'employee',   
    columnsDef: [{
            prop: 'name',
            label: '姓名',
            width: 240,
            filter: true,
            input: { type: 'text', rule: 'required' },
            index:true
        },
        {
            prop: 'sex',
            label: '性别',
            width: 150,
            input:{type:'radioGroup',options:[{label:'男',value:true},{label:'女',value:false}]},
            formatter:methods.formatSex
        },   
        {
            prop: 'department',
            label: '部门',
            width: 150,
            input:{type:'select',ajax:{path:'/company/Department',label:'name',value:'_id'}}            
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
 这样查询后端返回的实际数据是：
```js{28}
 [
  {"_id":"1","name":"林大力","sex":false,"department":"7",@department:"人力资源部","memo":""},
  {"_id":"2","name":"陈思雨","sex":false,"department":"7",@department:"人力资源部","memo":""}
 ]
 ```