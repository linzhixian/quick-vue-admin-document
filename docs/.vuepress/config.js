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
		 children:['/guide/background.md','/guide/install.md','/guide/quickStart.md']
	    },
		{
		  title:"指南",
		  collapsable:false,
		  children:['/advance/title.md','/advance/av-menu.md','/advance/metaconfig.md']
		 
	    },
		{
		  title:"参考",
		  collapsable:false
		 
	    }
	 ]
  }
}