const path = require('path')
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录

const docs = rootpath
const utils = require(rootpath + '/utils/index.js')
const filehelper = require(rootpath + '/utils/getFilenames.js')
console.info(filehelper.getFileName(docs + '/unity/doc/'))