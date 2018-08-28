# 树之CRUD
  
  实际需求中经常存在纯树状的数据结构需要做：增、删、改、查

1. 定义菜单项
``` js{9}
// /config/shared/nav_menu.js

        {
            path: '/',
            name: '样例',
            iconCls: 'el-icon-menu',    
            children: [
                { path: '/example/Input', name: '输入大全' },
                { path: '/example/Tree', name: '树之CRUD' }, // 
                { path: '/example/SetThemeColor', name: '设置主题颜色' } // 
            ]
        }

```
2. 定义树的通用元配置文件

``` js{5}
// /src/shared/meta/example/Tree.js

module.exports = {
    pageAdminComponent:'tree-admin',
    entityName:'category',
    columnsDef: [{
        prop: '_id',
        label: '编码',        
        edit: false,
        width: 200,
        input: { type: 'text', required: true },
        add:true
    },
    {
        prop: 'name',
        label: '名称',
        width: 200,
        input: { type: 'text', required: true }        
    }
   ],

   treeProps:{ label: 'name', children: 'sub' }
}

```

成果：


![](/tree.png)