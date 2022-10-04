import nav from './nav';
import sidebar from './sidebar';

export default {
  title: '爱编程',
  description: 'aymfx、博客、编程、分享',
  ignoreDeadLinks: true,
  base: '/',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'aymfx\'s blog',
    nav,
    sidebar,
    markdown: {
      theme: 'material-palenight',
      lineNumbers: true,
    },
    lastUpdated: true,
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/aymfx' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2014-present aymfx',
    },
    lastUpdatedText: '最后更新时间',
  },
};
