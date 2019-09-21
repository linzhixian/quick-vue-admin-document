(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{157:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("quick-vue-admin不是一个模块，不可以通过npm install 来安装，它是一个集成开发框架，需要从GitHub下载\n目前还不支持数据库Mock，必须和MongoDB集成使用，所以要安装MongoDB。")]),t._m(1),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install on Windows"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://docs.mongodb.com/manual/administration/install-on-linux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install on Linux"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://docs.mongodb.com/manual/administration/install-on-linux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install on macOS"),s("OutboundLink")],1)])]),t._m(2),t._m(3),t._m(4),s("p",[t._v("注：如果MongoDB不是安装在本机的默认端口，需要修改配置文件:")]),t._m(5),t._m(6),s("p",[t._v("启动完成后会自动打开浏览器访问 http://localhost:9001， 你看到下面的页面就代表操作成功了。\n"),s("img",{attrs:{src:t.$withBase("/login.png")}})]),s("p",[t._v("系统默认初始化管理员账号为：用户名：admin,密码：admin。")]),s("p",[t._v("登录后进入下面页面代表登陆成功\n"),s("img",{attrs:{src:t.$withBase("/home.png")}})])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"本地安装mongodb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地安装mongodb","aria-hidden":"true"}},[this._v("#")]),this._v(" 本地安装MongoDB")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"安装node和git环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装node和git环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装node和git环境")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"安装quick-vue-admin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装quick-vue-admin","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装quick-vue-admin")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# clone the projice")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/linzhixian/quick-vue-admin.git\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# install dependency")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# develop")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("打开文件：项目目录/config/development.js")]),n("li",[this._v("修改 mongod.host 为MongoDB的ip")]),n("li",[this._v("修改 mongod.port 为MongoDB的端口")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v(" mongodb: "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" //数据库地址\n        "),s("span",{attrs:{class:"token string"}},[t._v('"host"')]),s("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"192.168.1.20"')]),t._v(",\n        "),s("span",{attrs:{class:"token string"}},[t._v('"port"')]),s("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" 27017,\n        "),s("span",{attrs:{class:"token string"}},[t._v('"dbname"')]),s("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"quickVueAdmin"')]),t._v(",\n        "),s("span",{attrs:{class:"token string"}},[t._v('"poolSize"')]),s("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" 1\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n")])])])}],!1,null,null,null);n.default=e.exports}}]);