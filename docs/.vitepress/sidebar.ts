export default {
  '/主页/': [
    {
      text: '主页',
      items: [
        { text: "🤡 Aymfx's blog", link: '/主页/' },
        { text: '🤗 关于我', link: '/主页/关于我' },
      ],
    },
    {
      text: '工具',
      collapsible: true,
      items: [
        { text: 'Git常用命令', link: '/前端/tool/Git常用命令.md' },
        { text: 'MongoDB命令', link: '/前端/tool/MongoDB命令.md' },
        { text: 'bug清单', link: '/前端/tool/bugList.md' },
        { text: 'eslint 格式化', link: '/前端/tool/格式化.md' },
      ],
    },
    {
      text: '年终总结',
      collapsible: true,
      items: [
        { text: '2021', link: '/主页/2021年终总结.md' },
        { text: '2020', link: '/主页/2020年终总结.md' },
      ],
    },
    {
      text: '读书观后感',
      collapsible: true,
      items: [
        { text: '我的书单', link: '/读书/书单.md' },
        { text: '2022读书笔记', link: '/读书/2022读书笔记.md' },
        { text: '2021读书笔记', link: '/读书/2021读书笔记.md' },
        { text: '2020读书笔记', link: '/读书/2020读书笔记.md' },
      ],
    },
  ],
  '/面试/': [
    {
      text: 'HTTP',
      collapsible: true,
      items: [
        { text: '目录', link: '/面试/' },
        { text: 'http基础', link: '/面试/http基础.md' },
      ],
    },
  ],
  '/源码分析/': [
    {
      text: '主页',
      items: [{ text: 'TODO💪🏻', link: '/源码分析/index' }],
    },
    {
      text: 'Vue2源码',
      items: [
        { text: '前言', link: '/源码分析/vue2/前言.md' },
        { text: '初始化-入口文件', link: '/源码分析/vue2/入口文件.md' },
        { text: '初始化-initMixin', link: '/源码分析/vue2/initMixin.md' },
        { text: '初始化-stateMixin', link: '/源码分析/vue2/stateMixin.md' },
        { text: '初始化-eventsMixin', link: '/源码分析/vue2/eventsMixin.md' },
      ],
    },
  ],
};
