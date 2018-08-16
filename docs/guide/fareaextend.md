
# 功能区扩展
   
   前面的章节描述的主要是通过配置来实现功能(hook需要编写少量代码)。

   真实的业务需求是难以预料的，接下来的章节完全需要编写代码来实现功能扩展。

   例如： 在新增记录的时候，有个字段的内容不是简单数据类型而是个对象，这是时候【新增页面】无法满足这种输入要求，这时候我们可以对该字段进行单独输入。

   真实例子：部门需要加一个人数限制（min:最少人数，max：最多人数）

   
- 在功能区新增个按钮[人数限制]
- 点击按钮【人数限制】，弹出一个新对话框用

![](/maxmin.png)

原来部门的数据结构：
```js{5}
{_id:'1',name:'人力资源部',memo:'备注'}
```

增加【人数配置】后：
```js{5}
{_id:'1',name:'人力资源部',memo:'备注',config:{max:10,min:4}}
```

## 具体步骤

- 在 /src/component/extendCompontents目录创建一个目录:department
- 创建按钮组件：index.vue 
- 创建表单组件：MaxMinForm.vue
- 在部门通用元配置文件：/src/shared/meta/company/Department.js
  增加导出变量：extendActionButtons:"department_buttons"
- 在文件 /src/components/extendComponents/index.js 增加内容：
```js{5} 
import department_buttons from './department/index.vue';
let components = {
  "department_buttons": department_buttons,
};
```
并在components变量增加属性：

```js{5} 
let components = {
  "department_buttons": department_buttons,
};
```
## 刷新页面查看结果

- 功能区多出了一个按钮：人数设置
- 选择一行，点击按钮：人数设置
- 弹出一个对话框，这对话和双击弹出的对话框时不同的
