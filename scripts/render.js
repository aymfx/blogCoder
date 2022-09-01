const fs = require('fs')
const { join } = require('path')
// 暂时没想到怎么搞
const map = new Map();
map.set('主页', ['前言', '年终总结', '工具'])
map.set('源码分析', ['源码分析', 'vue2',])
const bookTree = {}
function initTree(list) {
  Array.from(list).map(name => {
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
}

function renderData(list) {
  for (const iterator of list) {
    let { dirs, yaml, link } = iterator
    // console.log(iterator);
    let [dirName, text] = dirs
    const page = bookTree[`/${dirName}/`]
    let { title, sort } = yaml
    text = text !== undefined ? text : dirName

    const index = page.findIndex(item => item.text == text)
    let item = null
    const record = { text: title, link }
    if (index === -1) {
      item = { text, items: [] }
      item.items[sort] = record
      Number.isInteger(sort) ? item.items[sort] = record : item.items.push(record)
      console.log(item);
      page.push(item)
    } else {
      Number.isInteger(sort) ? page[index].items[sort] = record : page[index].items.push(record)
    }
  }
}

function renderToFile() {
  fs.writeFile(join(__dirname, '../docs/.vitepress/sidebar.ts'), 'export default ' + JSON.stringify(bookTree, null, 2), () => { })
  console.log('结束啦');
}


function render(list, treeData) {
  initTree(treeData)
  renderData(list)
  renderToFile()
  console.log(bookTree);
}



module.exports = {
  render
}