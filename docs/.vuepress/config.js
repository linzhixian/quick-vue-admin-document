module.exports = {
  title: 'Quick vue admin',
  description: 'A least programming admin',
  themeConfig: {
    docsDir: "docs",
	sidebarDepth: 3,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/linzhixian/quick-vue-admin' },
    ],
	sidebar:[		
		{
		 title:'开始',
		 collapsable:false,
		 children:['/begin/background.md','/begin/install.md','/begin/quickStart.md']
	    },
		{
		  title:"指南",
		  collapsable:false,
		  children:['/guide/base.md','/guide/title.md','/guide/av-menu.md','/guide/config.md','/guide/id_autoincrement.md','/guide/metaconfig.md','/guide/cmetaconfig.md','/guide/smetaconfig.md',
		'/guide/dbref.md',	  
		  '/guide/fareaextend.md','/guide/customcom.md','/guide/authority.md']
		 
	    },
		{
		  title:"参考",
		  collapsable:false
		 
	    }
	 ]
  }
}