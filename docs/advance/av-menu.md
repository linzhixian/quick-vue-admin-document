# 侧边栏菜单
  
  
  通过编辑：项目目录/config/nav_menu.js文件的nav_menu来制定菜单组
  目前只这次二级菜单(未来可能支持多级)

  下面设置了两个菜单组：
  - 功能：员工，审批，文档
  - 设置：部门
```bash
文件：项目目录/config/nav_menu.js

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
        },
        {
            path: '/',
            name: '设置',
            iconCls: 'el-icon-menu', //图标样式class       
            children: [
                { path: '/company/Department', name: '部门' }
            ]
        }
    ]
}
```

通过iconCls 可以定制图标样式，由于ui使用的是element-ui，所以我们可以使用[element-ui Icon图标](http://element-cn.eleme.io/#/zh-CN/component/icon)

设置完菜单后，就是对每个菜单编写对于的配置文件。
