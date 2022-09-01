const walk = require('walk');
const fm = require('front-matter')
const fs = require('fs')
const { join } = require('path')
const dayjs = require('dayjs')

module.exports = function (getAbsolutePath, options) {
  return new Promise((reslove, reject) => {
    const treeData = new Set()
    let list = []
    walker = walk.walk(getAbsolutePath, options);
    walker.on("file", function (root, fileStats, next) {
      const { birthtime, name, type } = fileStats
      if (getAbsolutePath !== root) {
        const reg = /[^/]+(?=\/)/g
        const link = `${root.replace(getAbsolutePath, '')}/${fileStats.name}`
        const dirs = link.match(reg)
        dirs.length > 0 && treeData.add(dirs[0])
        const second = dayjs(birthtime).valueOf()
        list.push({ dirs, link, root, second, birthtime, name, type, path: `${root}/${name}`, fileStats })
      }
      next()
    });

    walker.on("errors", function (root, nodeStatsArray, next) {
      console.log('遍历出错啦');
      reject()
      next();
    });

    walker.on("end", function () {
      console.log('结束啦');
      reslove({ list, treeData })
    });
  })
}

