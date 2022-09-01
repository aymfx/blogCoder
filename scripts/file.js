const fm = require('front-matter')
const fs = require('fs')
async function renderFiles(list) {
  if (!Array.isArray(list)) {
    list = [list]
  }
  for (file of list) {
    const data = await fs.readFileSync(file.path, 'utf-8')
    file.yaml = (fm(data)).attributes
  }
}

module.exports = {
  renderFiles
}