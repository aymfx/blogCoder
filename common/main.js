window.$docsify = {
    loadSidebar: true, //  侧边栏目录
    coverpage: true, //开启封面
    loadNavbar: true, //导航栏
    onlyCover: true, //只在访问主页时加载封面。
    name: 'aymfx\'s blog', //文档标题，会显示在侧边栏顶部。
    repo: 'https://github.com/aymfx/', //配置仓库地址或者 username/repo 的字符串，会在页面右上角渲染一个 GitHub Corner 挂件。
    maxLevel: 4, //默认情况下会抓取文档中所有标题渲染成目录，可配置最大支持渲染的标题层级。
    auto2top: true, //切换页面后是否自动跳转到页面顶部。
    homepage: 'Home.md', //设置首页文件加载路径。适合不想将 README.md 作为入口文件渲染，或者是文档存放在其他位置的情况使用。
    nameLink: '/', //点击文档标题后跳转的链接地址。
    alias: {
        '/_coverpage.md': '/Coverpage.md',
    }, //定义路由别名，可以更自由的定义路由规则。 支持正则。
    //同时设置 loadSidebar 和 autoHeader 后，可以根据 _sidebar.md 的内容自动为每个页面增加标题
    loadSidebar: true,
    autoHeader: true,
    executeScript: true, //执行文档里的 script 标签里的脚本，只执行第一个 script (demo)。 如果 Vue 存在，则自动开启。
    mergeNavbar: true, //小屏设备下合并导航栏到侧边栏。
    formatUpdated: '{MM}/{DD} {HH}:{mm}',  //我们可以通过 {docsify-updated} 变量显示文档更新日期
    requestHeaders: {
        'cache-control': 'max-age=6000',
    },
    notFoundPage: true,
    topMargin: 90, // default: 0 让你的内容页在滚动到指定的锚点时，距离页面顶部有一定空间。当你使用 固定页头
    search: 'auto', // 默认值 全文搜索插件会根据当前页面上的超链接获取文档内容
    disqus: 'www-aymfx-com', //Disqus评论系统支持
    count: {
        countable: true,
        fontsize: '0.9em',
        color: 'rgb(90,90,90)',
        language: 'chinese'
    },
    loadFooter: '_footer.md',
}

