const { join } = require('path')
const renderWalk = require('./walk')
const { renderFiles, renderYmals } = require('./file')
const { render } = require('./render')
const getAbsolutePath = join(__dirname, '../docs')


async function processData() {
  const { list, treeData } = await renderWalk(getAbsolutePath, { filters: ['.vitepress', 'public'], followLinks: false, })
  await renderFiles(list)
  render(list, treeData)
  // console.log(list[0]);
}

processData()