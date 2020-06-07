module.exports = {
  title: 'Peterlee\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '猪猪', link: '/zhuzhu/zhuzhu.md' },
      {text: '宝宝', link: '/baobao/baobao.md'},
      {text: '微博', link: 'https://baidu.com'},
	  {text: 'GitHub', link: 'https://github.com/PeterAlfredLee'}
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
  }
};
