const klaw = require('klaw')
const fs = require('fs-extra')
const through2 = require('through2')
const { resolve, extname, basename } = require('path')
const dayjs = require('dayjs')
fm = require('front-matter')
const sidebar = {}
// const navList = ['主页']
const navList = ['主页', '生活', '读书', 'typescript', 'vue2']
const outputFile = resolve(__dirname, './docs/.vitepress/sidebar.ts')

//获取所有的文件
const getAllFilePath = (navName) => {
  const root = resolve(__dirname, `./docs/${navName}`)
  sidebar[`/${navName}/`] = []
  const excludeDirFilter = through2.obj(async function (item, enc, next) {
    const path = item.path
    const name = basename(path)
    const relativePath = path.replace(resolve(__dirname, './docs'), '')
    if (extname(path) === '.md') {
      const { attributes } = await getFileFrontMatter(path)
      let { title = name, group = '序言', date = '2000-01-01' } = attributes
      if (sidebar[`/${navName}/`].findIndex(it => it.text === group) === -1) {
        if (group !== '序言') {
          sidebar[`/${navName}/`].push({ text: group, items: [] })
        } else {
          sidebar[`/${navName}/`].unshift({ text: group, items: [] })
        }

      }
      if (name.includes('index.md')) {
        title = '😁'
      }
      this.push({ navName, title, date, group, path, name, relativePath })
    }
    next()
  })
  return new Promise((resolve, reject) => {
    const items = []
    klaw(root)
      .pipe(excludeDirFilter)
      .on('data', item => items.push(item))
      .on('end', () => resolve(items)) // => [ ... array of files without directories]
  })
}

// 解析读取里面的front-matter
const getFileFrontMatter = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) reject(err)
      var { body, ...content } = fm(data)
      resolve(content)
    })
  })
}

// 获取item
const getItem = (item) => ({ text: item.title, link: item.relativePath })

// 按照日期排序

const getDateSort = (v1, v2) => {
  const first = dayjs(v1.date).valueOf()
  const second = dayjs(v2.date).valueOf()
  return first - second
}

//获取侧边栏的信息
getAsideList = (list) => {
  list.map(items => {
    items.sort(getDateSort)
    items.map(item => {
      const arr = sidebar[`/${item.navName}/`].find(it => it.text === item.group).items

      if (Array.isArray(arr)) {
        arr.push(getItem(item))
      }
    })
  })
}

async function mainProcess() {
  try {
    const PromiseList = navList.map(n => getAllFilePath(n)) //获取每个导航的路径

    const filePathList = await Promise.all(PromiseList)

    getAsideList(filePathList)
    // console.log(filePathList)
    // console.log('---------------------------');
    // console.log(JSON.stringify(sidebar, '    '));
    fs.writeFileSync(outputFile, `export default ${JSON.stringify(sidebar)}`, 'utf8')
  } catch (error) {
    console.log(`error：${error}`);
  }
}

mainProcess()