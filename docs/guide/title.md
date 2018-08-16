# 网站标题
  开始一个新项目，首先就是取个名字，通过编辑：/config/shared/nav_menu.js文件的title来制定网站标题，假设我们目前要设计一个系统叫：HR系统
```bash
//文件：/config/shared/nav_menu.js

module.exports = {
    title: 'HR系统'
};
```
网站标题会显示在：
  - 登陆界面
  - 主界面左上角
  - 浏览器标题