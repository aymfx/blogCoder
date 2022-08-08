export default {
  '/': [
    {
      text: '主页',
      items: [{ text: '介绍', link: '/主页/' }],
    },
    {
      text: '读书观后感',
      collapsible: true,
      items: [
        { text: '书单', link: '/读书/书单.md' },
        { text: '2021', link: '/读书/2021读书笔记.md' },
        { text: '2020', link: '/读书/2020读书笔记.md' },
      ],
    },
    {
      text: '工具',
      collapsible: true,
      items: [
        { text: 'Git常用命令', link: '/前端/tool/Git常用命令.md' },
        { text: 'MongoDB命令', link: '/前端/tool/MongoDB命令.md' },
        { text: 'bug清单', link: '/前端/tool/bugList.md' },
      ],
    },
    {
      text: '年终总结',
      collapsible: true,
      items: [{ text: '2020', link: '/主页/2020年终总结.md' }],
    },
  ],
  '/面试/': [
    {
      text: 'http',
      collapsible: true,
      items: [
        { text: '说明', link: '/面试/' },
        { text: '基础', link: '/面试/http基础.md' },
      ],
    },
  ],
};
