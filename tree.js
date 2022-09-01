const walk = require('walk');
const fm = require('front-matter')
const fs = require('fs')
const { join } = require('path')
const getAbsolutePath = join(__dirname, 'docs')
const list = [
  '读书',
  '记录',
  '面试',
  '前端',
  '算法题',
  '源码分析',
  '主页',
]

// 配置顺序
const map = new Map();
map.set('主页', ['前言', '年终总结', '工具'])
map.set('源码分析', ['vue2',])


// 生成代码结构
const bookTree = {}
list.map(name => {
  let arr = []
  if (map.has(name)) {
    map.get(name).map(text => {
      arr.push({
        text,
        items: []
      })
    })
  }
  bookTree[`/${name}/`] = arr
})


const renderItem = (root, fileStats, yaml, next) => {
  const reg = /[^/]+(?=\/)/g
  const link = `${root.replace(getAbsolutePath, '')}/${fileStats.name}`
  console.log(fileStats);
  let [dirName, text, ...path] = link.match(reg)
  text = text === undefined ? dirName : text
  const page = bookTree[`/${dirName}/`];
  const title = yaml.attributes.title ? yaml.attributes.title : "暂时没想好"
  const index = page.findIndex(item => item.text == text)
  let item = null
  record = { text: `${path.length > 0 ? `【${path.join('-')}】` : ""}${title}`, link }
  if (index === -1) {
    item = { text, items: [record] }
    page.push(item)
  } else {
    page[index].items.push(record)
  }
  next()
}

walker = walk.walk(getAbsolutePath, {
  filters: ['.vitepress', 'public',]
});

walker.on("file", function (root, fileStats, next) {
  // console.log(`${root}/${fileStats.name.trim()}`, fileStats.name.includes('index'));
  if (fileStats.name.includes('index')) {
    return next();
  }
  fs.readFile(`${root}/${fileStats.name.trim()}`, 'utf8', function (err, data) {
    if (err) throw console.log(err);
    const yaml = fm(data)
    renderItem(root, fileStats, yaml, next)
  });
});

walker.on("errors", function (root, nodeStatsArray, next) {
  console.log('遍历出错啦');
  next();
});

walker.on("end", function () {
  console.log(JSON.stringify(bookTree, null, 2));
  fs.writeFile(join(__dirname, './docs/.vitepress/sidebar.ts'), 'export default ' + JSON.stringify(bookTree, null, 2), () => { })
  console.log('结束啦');
});

