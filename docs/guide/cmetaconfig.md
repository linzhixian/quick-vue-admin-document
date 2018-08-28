# 通用元配置文件

  完整例子：
  
``` js{5}
// /src/shared/meta/company/Department.js
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

## 格式
   元配置文件其就是一个js文件，可导出的变量有：

| 变量名      | 说明    | 类型  | 可选 | 默认值|可选值|
| --------   | -----   | ---- |----  |---   |---   |
| pageAdminComponent| 组件名|string| 可选|table-admin|table-admin<br>tree-admin<br>自定义组件名|
| entityName  | 实体名(MongoDB集合名)      |   string    | 必填|-|-|
| columnsDef | 列定义  |   [array[object]](/guide/cmetaconfig.html#columnsdef)    | 必填|-|-|
| pageSize | 每页记录数  |   int    | 可选|20|-|
| showAdd | 显示新增按钮  |   boolean    | 可选|true|-|
| editable | 是否可编辑(双击)  |   boolean    | 可选|true|-|
| showRemove | 显示删除按钮  |   boolean    | 可选|true|-|
| showPagination | 显示分页栏  |   boolean    | 可选|true|-|
| showIndexCol | 显示索引列  |   boolean    | 可选|true|-|
| showFilter | 显示查询区  |   boolean    | 可选|true|-|
| showSummary | 显示表尾合计行  |   boolean    | 可选|false|-|
| loadDatas | [预加载数据](/guide/cmetaconfig.html#loaddatas-data) |   object    | 可选|-|
| data      | 存放loadDatas加载的数据|object|可选|-|{}|
| filterConditions | 内置数据过滤条件  |   object{k:v}    | 可选|-|-|
| methods.filterCheck | 过滤条件检查(提交前)  |   Function(filterConditions)/Object    | 可选|-|-|
| sorted | 默认排序  |   object{k:v}    | 可选|-|-|
| hook    | [前端hook函数](/guide/cmetaconfig.html#hook)| object{k:f}    | 可选|-|-|



## columnsDef 

   列定义：用来定义数据表格的显示，以及新增，编辑，查询等选项 
   
   列定义：是个数组，每个成员是个对象，对象格式为

| 变量名      | 说明    |  类型   | 可选 | 默认值|
| --------   | -----   | ----   |----  |---   |
|prop        | 属性名   | string | 必须 |-|
|label       | 标签     | string | 必须 |-|
|hiddden     | 是否隐藏 | boolean | 可选 |false| 
|width       | 列宽 | int     | 可选|-|
|filter       | [是否可查询](/guide/cmetaconfig.html#filter) | boolean     | 可选|false|
|index       | [创建索引](/guide/cmetaconfig.html#index) | Boolean/object | 可选|false|
|add         | 可新增  | boolean     | 可选|true|
|edit        | 可编辑  | boolean     | 可选|true|
|input       | [输入方式](/guide/cmetaconfig.html#input) | string 或 object     | 可选|-|
|autoRef     |[自动关联](/guide/dbref.html) | boolean|可选| true|
|formatter   | 内容格式化| Function(row, column, cellValue, index)|可选|-|
|download    | 是否可下载(当input.type=='file'时用到)|boolean |可选|false|
|serverHook  | 后端元配置参数|object|可选|-|

serverHook
- 如果后端元配置文件里面有只有简单函数，不会导入后端的机密配件文件，可以放入此处
- 如果配置了文件形式的后代元配置文件，优先启用文件的，此处配置会无效


### filter
   定义该字段是否可在界面查询
- filter==true，则在页面查询条件区会显示一个文本输入框
- 如果是要显示下拉菜单，则:filter为{type:'select',optins:[{label:'启用',value:true},{label:'禁用',value:false}]}
- 如果下拉菜单的内容来自后台,filter为{type:'select',optins:[],ajax:{[详细说明](/guide/cmetaconfig.html#input-ajax)}}
### index
  在MongoDB下，将在系统每次启动时，自动创建该字段索引，不会重复创建
- 当字段定义了filter,最好也定一下index，否则数据量一大，查询将会很慢
- index ==true ，相当于{sortOrder:1}的简写，定义升序索引
- index=={options:{unique:true}},指明创建降序且唯一索引
- index=={sortOrder：-1，options:{unique:true}},指明创建降序且唯一索引

::: warning
暂时不支持创建多个字段的组合索引
:::

### formatter

格式化单元格的内容
  
 例子：
```bash
    formatEnable: function (row, column,cellValue) {
        return cellValue? "启用" : "禁用"
    }
```
### input

 当input为'text',相当于{type:'text'}的简写

 由于内置的UI组件采用的是[Element-UI](http://element-cn.eleme.ito/#/zh-CN/component/installation)，所以很多具体配置方式将连接到Element-UI文档

 input如果是对象，通用变量如下表：

| 变量名      | 说明    |  类型   | 可选 | 可选值|
| --------   | -----   | ----   |----  |---   |
| type       | 输入组件| string   | 必选 |[详解](/guide/metaconfig.html#input-type可选值) |
|default     | 默认值  | string  | 可选 |-|
|placeholder  | 输入框占位文本  | string  | 可选 |-|
| rule       | 校验规则 | string或object  | 必选 | |
|onChange    | 数据改变 | Function(vue,newValue,oldValue)|可选|-|
|其他    | 根据type的不同值 | -|-|-|


### input.rule

rule 为string ，只有值：required,表示必选

rule 为 object


### input.type可选值

 
::: tip
 input的所有类型都有例子，在：菜单：[样例-输入大全] ,对应配置文件：config/meta/example/Input.js
:::  
已经支持的[Element-UI](http://element-cn.eleme.io/#/zh-CN/component/installation)输入组件
| 可选值      | 说明    | 
| --------   | -----   | 
| text       | 单行文本输入框   |
| textarea       | 多行文本输入框   |
| radioGroup       | 单选框组   |
| select     | 下拉单选框   |
| checkbox       | 多选框   |
| checkboxGroup     | 多选框组   |
| file     | 文件上传   |
| date     | 日期选择   |
| time     | 时间选择   |
| cascader     | 级联选择器   |
| tree     | 树选择器   |

尚不支持的Element-UI组件：
- InputNumber 计数器
- Switch 开关
- Slider 滑块
- Rate 评分
- ColorPicker 颜色选择器
- Transfer 穿梭框



### input.type=='select'

 当input.type=='select' 还有下面额外的变量配置

| 变量名      | 说明    |  类型   | 可选 | 可选值|
| --------   | -----   | ----   |----  |---   |
| multiple | 是否多选| boolean   | 可选 |false |
| filterable | 是否可搜索| boolean   | 可选 |false |
| allowCreate | 是否允许用户创建新条目，需配合 filterable 使用| boolean   | 可选 |false|
| clearable | 单选时是否可以清空选项| boolean   | 可选 |false |
| options|下拉选项|array[{label:'选项名',value:'选项值'}]|可选|-|
| ajax|options动态填充|object [详解](/guide/cmetaconfig.html#input-ajax)|可选|-|

### input.type=='radioGroup'

| 变量名      | 说明    |  类型   | 可选 |
| --------   | -----   | ----   |----  |
| options|选项|array[{label:'选项名',value:'选项值'}]|和ajax选其一|
| ajax|options动态填充|object [详解](/guide/cmetaconfig.html#input-ajax)|和options选其一|

### input.type=='date'

| 变量名      | 说明    |  类型   | 可选 |可选值|默认值
| --------   | -----   | ----   |----  |---|---|
|subType     | 类型    | string | 可选 | year/month/date/dates/ week/datetime/datetimerange/daterange [详解](http://element-cn.eleme.io/#/zh-CN/component/date-picker)|date |
| pickerOptions|快捷选项|object [详解](http://element-cn.eleme.io/#/zh-CN/component/date-picker)|可选|
|rangeSeparator|选择范围时的分隔符|string|可选|-|'-'|
|startPlaceholder|范围选择时开始日期的占位内容|string|可选|
|endPlaceholder|范围选择时结束日期的占位内容|string|可选|
|format|显示在输入框中的格式|string|可选|-|yyyy-MM-dd|
|valueFormat|绑定值的格式,不指定则绑定值为 Date 对象|string|可选|见：[日期格式](http://element-cn.eleme.io/#/zh-CN/component/date-picker#ri-qi-ge-shi)|-|
|defaultValue|默认显示的时间|Date|可选|-|yyyy-MM-dd|
|unlinkPanels|在范围选择器里取消两个日期面板之间的联动|boolean|可选|-|false|

### input.type=='time'

| 变量名      | 说明    |  类型   | 可选 |可选值|默认值
| --------   | -----   | ----   |----  |---|---|
|isRange     | 是否时间范围选择|boolean|可选|-|false
| pickerOptions|快捷选项|object [详解](http://element-cn.eleme.io/#/zh-CN/component/time-picker)|可选|
|rangeSeparator|选择范围时的分隔符|string|可选|-|'-'|
|startPlaceholder|范围选择时开始日期的占位内容|string|可选|
|endPlaceholder|范围选择时结束日期的占位内容|string|可选|
|format|显示在输入框中的格式|string|可选|-|yyyy-MM-dd|
|valueFormat|绑定值的格式,不指定则绑定值为 Date 对象|string|可选|见：[日期格式](http://element-cn.eleme.io/#/zh-CN/component/date-picker#ri-qi-ge-shi)|-|
|defaultValue|默认显示的时间|Date|可选|-|yyyy-MM-dd|

### input.type=='file'

::: tip
 上传文件组件没有用到Element-ui的Upload组件，而是重新编写的、使用H5的FormData的上传组件，FormData的好处是：异步上传、可和其他数据一并提交
:::   
  
- 要使用上传组件，首先要在[项目后端配置文件](/guide/config.md)里设置下数据目录dataDir
- 如果列定义里：定了了：download=true，则在表格会显示srcName链接,单击可下载文件

| 变量名      | 说明    |  类型   | 可选 |可选值|默认值
| --------   | -----   | ----   |----  |---|---|
|savePath     | 文件上传后保存目录(相对dataDir)|string|必填|-|-|
|fileName|生成保存文件名的函数|Funcion(oldName) |必选|-|-|
|ext|文件扩展名要求|string |可选|-|-|

上传的文件会保存在： dataDir/savePath/fileName生成的文件名  
对应字段的数据格式是： {path:'',md5:'',size:2234,name:'',srcName:''}
- path 文件保存路径(包括文件名)，相对dataDir
- md5 文件md5值
- size 文件大小，单位：字节
- name 文件名
- srcName 原文件名(上传时的文件名)

### input.type=='cascader'
| 变量名      | 说明    |  类型   | 可选 |默认值
| --------   | -----   | ----   |----  |---|
|options     | 可选项数据源[请看](http://element-cn.eleme.io/#/zh-CN/component/cascader#attributes)|object|必填|-|
|props     | 配置选项[请看](http://element-cn.eleme.io/#/zh-CN/component/cascader#props)|object|必填|-|


### input.type=='tree'


| 变量名      | 说明    |  类型   | 可选 |默认值
| --------   | -----   | ----   |----  |---|
|data     | 展示数据[请看](http://element-cn.eleme.io/#/zh-CN/component/tree#attributes)|object|必填|-|
|props     | 配置选项[请看](http://element-cn.eleme.io/#/zh-CN/component/tree#props)|object|必填|-|
|renderContent|节点定制渲染[请看](http://element-cn.eleme.io/#/zh-CN/component/tree#attributes)|Function|可选|-|
|nodeKey|唯一标识的属性[请看](http://element-cn.eleme.io/#/zh-CN/component/tree#attributes)|String|必须|-|
|checkChange|选中状态发生变化时的回调[请看](http://element-cn.eleme.io/#/zh-CN/component/tree#events)|Function|必须|-|
|expandAll|是否默认展开所有节点[请看](http://element-cn.eleme.io/#/zh-CN/component/tree#attributes)|boolean|可选|-|




### input.ajax

通过input.ajax或filter.ajax获取的数据会设置到input.options或filer.options


| 变量名      | 说明    |  类型   | 可选 | 
| --------   | -----   | ----   |----  |
| path | 数据路径(配置文件的路径)| string   | 必选 |
| label | 指定option的label为对象的某个属性值| string   | 必选 |
| value | 指定option的value为对象的某个属性值| string   | 必选 |
| params | 过滤参数| object   | 可选 |
| projects | 过滤字段| object   | 可选 |

例子：
```bash
        {
            prop: 'select_ajax',
            label: '选择框(数据库)',
            width: 150,
            input:{type:'select',ajax:{path:'/company/Department',label:'name',value:'_id',projects:{_id:1,name:1}}]}
        }
```
上面的写法，在创建组件时，会自动从：/company/Department 路径的配置文件对应的数据库表里拉取数据，假设拿到数据：
```bash
[
 {_id:'1',name:'人力资源部'}, 
 {_id:'2',name:'财务部'},
 {_id:'3',name:'市场部'}
]
```
会转成如下数组
```bash
[
 {label:'人力资源部',value:'1'},
 {label:'财务部',value:'2'},
 {label:'市场部',value:'3'}
]
```
并设置到input.options


## hook
  
   前端hook方法


| 函数名      | 说明    |  类型   | 返回
| --------   | -----   | ----   |----  |---|---|
| submitCheck| 在新增或修改的提交数据前   | Function(formData,vue) vue为编辑组件的vue对象   |formData|
| onShowAdd|  在打开新增窗口时   | Function(formData,vue)   |
| onShowEdit| 在打开编辑窗口时   | Function(formData,vue) vue为编辑组件的vue对象 |
| queryCheck| 在提交查询数据前   | Function(query,vue) |query



例子：我们要把提交的数据的字段provinces改成数组

```js
let hook={
 submitCheck:function(formData,vue) {
  formdata.provinces=formdata.provinces.split(",")
  return formdata
}
```
## loadDatas && data

  loadDatas用于需要从后端预先加载的数据放入data,一般用于格式化时需要把_id转为名称

  <br>格式：
  | 属性名      | 说明    |  类型   | 返回
  | --------   | -----   | ----   |----  |---|---|
 | name| 放入data的属性名   | string   |formData|
 | ajax| 从后端加载数据,同[input.ajax](/guide/cmetaconfig.html#input-ajax)  | object  |
 
例如：员工 所属的部门id值转为部门名称

```js{53}
//  /src/shared/company/Employee.js

let methods = {
    
    formatSex: function (row, column,cellValue) {
        return cellValue? "男" : "女"
    },
    formatDepartment:function(row, column,cellValue) {
        if(data.DepartmentList) {
          for (let item of data.DepartmentList) {
            if (cellValue == item._id) return item.name;
          }
        }

    }
};

let loadDatas = [{
    name: 'DepartmentList',
    ajax: {
        path: '/company/Department',
        projects:{_id:1,name:1}
    }
}]

let data = {}


module.exports = {
    entityName: 'employee',   
    loadDatas,
    data:data,
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
            input:{type:'select',ajax:{path:'/company/Department',label:'name',value:'_id',projects:{_id:1,name:1}}},
            formatter:methods.formatDepartment,
            autoRef:false
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
