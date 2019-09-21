(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{175:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"功能区扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能区扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能区扩展")]),a("p",[t._v("前面的章节描述的主要是通过配置来实现功能(hook需要编写少量代码)。")]),a("p",[t._v("真实的业务需求是难以预料的，接下来的章节完全需要编写代码来实现功能扩展。")]),a("p",[t._v("例如： 在新增记录的时候，有个字段的内容不是简单数据类型而是个对象，这是时候【新增页面】无法满足这种输入要求，这时候我们可以对该字段进行单独输入。")]),a("p",[t._v("真实例子：部门需要加一个人数限制（min:最少人数，max：最多人数）")]),a("ul",[a("li",[t._v("在功能区新增个按钮[人数限制]")]),a("li",[t._v("点击按钮【人数限制】，弹出一个新对话框用")])]),a("p",[a("img",{attrs:{src:"/maxmin.png",alt:""}})]),a("p",[t._v("原来部门的数据结构：")]),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("_id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'人力资源部'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("memo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'备注'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("增加【人数配置】后：")]),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("_id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'人力资源部'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("memo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'备注'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("config"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("max"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("min"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"具体步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 具体步骤")]),a("ul",[a("li",[t._v("在 /src/client/component/extend目录创建一个目录:department")]),a("li",[t._v("创建按钮组件：index.vue")]),a("li",[t._v("创建表单组件：MaxMinForm.vue")]),a("li",[t._v('在部门通用元配置文件：/src/shared/meta/company/Department.js\n增加导出变量：extendActionButtons:"department_buttons"')]),a("li",[t._v("在文件 /src/client/components/extend/index.js 增加内容：")])]),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" department_buttons "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./department/index.vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" components "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"department_buttons"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" department_buttons"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("并在components变量增加属性：")]),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" components "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"department_buttons"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" department_buttons"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"刷新页面查看结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷新页面查看结果","aria-hidden":"true"}},[t._v("#")]),t._v(" 刷新页面查看结果")]),a("ul",[a("li",[t._v("功能区多出了一个按钮：人数设置")]),a("li",[t._v("选择一行，点击按钮：人数设置")]),a("li",[t._v("弹出一个对话框，这对话和双击弹出的对话框时不同的")])])])}],!1,null,null,null);s.default=e.exports}}]);