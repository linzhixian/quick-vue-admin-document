module.exports = {
  title: 'Quick vue admin',
  description: '极简、基于配置、最少编程量的后台管理开发框架',
  base: '/quick-vue-admin-document/',
  themeConfig: {
    docsDir: "docs",
	sidebarDepth: 3,
	sidebar: 'auto',
	displayAllHeaders: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/linzhixian/quick-vue-admin' },
    ],
	sidebar:[		
		{
		 title:'开始',
		 collapsable:false,
		 children:['/begin/quickStart.md','/begin/background.md','/begin/install.md']
	    },
		{
		  title:"指南",
		  collapsable:false,
		  children:['/guide/base.md','/guide/title.md','/guide/av-menu.md','/guide/config.md','/guide/id_autoincrement.md','/guide/metaconfig.md','/guide/cmetaconfig.md','/guide/smetaconfig.md',
		'/guide/dbref.md','/guide/tree.md',
		  '/guide/fareaextend.md','/guide/customcom.md','/guide/authority.md']
		 
	    }
	 ]
  }
}