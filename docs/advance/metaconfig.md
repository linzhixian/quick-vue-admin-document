# 配置文件
  
  每个菜单都要对应一个配置文件

## 文件路径
  
   配置文件的路径和文件对应着path,放在:项目目录/config/meta 下
   
   例如：
```bash
   path: '/company/Employee'
```
   则 配件文件位置和文件名在：
```bash
   项目目录/config/meta/company/Employee.js
```
## 文件格式
   文件其就是一个js文件，导出其配置的变量


可用变量

| 变量名      | 说明    | 类型  | 可选 | 默认值|
| --------   | -----   | ---- |----  |---   |
| entityName  | 实体名(MongoDB集合名)      |   string    | 必填|-|
| columnsDef | 数据模式[ 详解](/advance/metaconfig.html#columnsdef)  |   array    | 必填||-|
| pageSize | 每页记录数  |   int    | 可选|20|
| showAdd | 显示新增按钮  |   boolean    | 可选|true|
| editable | 是否可编辑(双击)  |   boolean    | 可选|true|
| showRemove | 显示删除按钮  |   boolean    | 可选|true|
| showPagination | 显示分页栏  |   boolean    | 可选|true|
| showIndexCol | 显示索引列  |   boolean    | 可选|true|
| showFilter | 显示查询区  |   boolean    | 可选|true|
| showSummary | 显示表尾合计行  |   boolean    | 可选|false|
| loadDatas | 预加载数据  |   object    | 可选|-|
| filterConditions | 内置数据过滤条件  |   object{k:v}    | 可选|-|
| methods.filterCheck | 过滤条件检查(提交前)  |   Function(filterConditions)/Object    | 可选|-|
| sorted | 默认排序  |   object{k:v}    | 可选|-|



### columnsDef 
   列定义：用来定义数据表格的显示，以及新增，编辑，查询等选项 
   
   列定义：是个数组，每个成员是个对象，对象格式为

| 变量名      | 说明    |  类型   | 可选 | 默认值|
| --------   | -----   | ----   |----  |---   |
|prop        | 属性名   | string | 必须 |-|
|label       | 标签     | string | 必须 |-|
|show        | 是否显示 | boolean | 可选 |true| 
|width       | 列宽 | int     | 可选|-|
|filter       | 可查询 | boolean     | 可选|false|
|add         | 可新增  | boolean     | 可选|true|
|edit        | 可编辑  | boolean     | 可选|true|
|input       | 输入方式 [详解](/advance/metaconfig.html#input) | string 或 object     | 可选|-|
|formatter   | 内容格式化| Function(row, column, cellValue, index)|可选|-|


#### input
 当input为'text',相当于{type:'text'}的简写

 input如果是对象，对象格式如下表：

| 变量名      | 说明    |  类型   | 可选 | 可选值|
| --------   | -----   | ----   |----  |---   |
| type       | 输入组件| string   | 必选 |详解 |
|default     | 默认值  | string  | 可选 |-|
| rule       | 校验规则 | string或object  | 必选 | |
|onChange    | 数据改变 | Function(vue,newValue,oldValue)|可选|-|


rule 为string ，只有值：required,表示必选

rule 为 object

#### input.type可选值

| 可选值      | 说明    | 
| --------   | -----   | 
| text       | 单行文本输入框   |
| textarea       | 多行文本输入框   |
| radio       | 单选框   |
| select     | 下拉单选框   |
| selectMulti     | 下拉多选框   |
| checkbox       | 多选框   |
| checkboxGroup     | 多选框组   |
| file     | 文件上传   |
| date     | 日期选择   |
| time     | 时间选择   |
| dateRange     | 日期范围选择   |
| timeRange     | 时间范围选择   |
| cascader     | 级联选择器   |
| tree     | 树选择器   |




