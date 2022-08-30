import nav from './nav';
import sidebar from './sidebar';

export default {
  title: '爱编程',
  description: '我的博客网站',
  ignoreDeadLinks: true,
  themeConfig: {
    nav,
    sidebar,
    head: [
      [
        'link',
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
      ],
    ],
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
