module.exports = {
  title: '宝宝&猪猪的博客',
  description: '',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/heart.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  port:80,
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '宝宝生日快乐', link: '/birthday/birthday.md' },
      { text: '宝宝&猪猪の大事记', link: '/history/history.md' },
      // { text: '微博', link: 'https://baidu.com' },
      // { text: 'GitHub', link: 'https://github.com/PeterAlfredLee' }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
  }
};
