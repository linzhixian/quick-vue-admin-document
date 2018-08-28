# 自定义组件
  
  总有特定的需求是需要完全自己定制页面，这个时候就可以使用自定义组件，就像编写一个Vue组件完全一样
  
  例如：我们需要一个：设置主题颜色 功能

 1. 增加菜单：设置主题颜色
  
``` js{8}
//  /config/shared/nav_menu.js
        {
            path: '/',
            name: '样例',
            iconCls: 'el-icon-menu',        
            children: [
                { path: '/example/Input', name: '输入大全' },
                { path: '/example/SetThemeColor', name: '设置主题颜色' } 
            ]
        }
   
```
 2. 增加元配置文件：SetThemeColor.js
 
    这个元配置非常简单，就是定义一个组件名:set-theme-color
``` js{4} 
// /src/shared/meta/example/SetThemeColor.js

module.exports ={
	pageAdminComponent:'set-theme-color'
}
```
 3. 创建需要自定义的Vue组件：ThemeColor.vue

    这就是一个普通的Vue组件，内容完全由你自己定制

    
``` js
// /src/client/components/custom/ThemeColor.vue

<template>            
    <section>
         选择颜色:<el-color-picker v-model="color1"></el-color-picker>
    </section>
</template>
<script> 
export default {
      props: ['init','api','value'],
    data() {
        return {
          color1:'#409EFF'
        }
    },
}
</script>
```



 4. 注册自定义组件
 
``` js{4} 
import ThemeColor from './ThemeColor.vue'

exports.load = function(Vue) {	
    Vue.component('set-theme-color', ThemeColor)  
}
```