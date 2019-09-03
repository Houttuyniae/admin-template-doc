const path = require('path')
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录

const docs = rootpath
const utils = require(rootpath + '/utils/index.js')
const filehelper = require(rootpath + '/utils/getFilenames.js')
module.exports = {
  title: 'Houttuyniae Blog',
  description: 'Houttuyniae Blog',
  base: '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/static'
      }
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: '组件',
        link: '/组件/Table'
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/组件/': utils.genSidebar(
        '',
        filehelper.getFileName(docs + '/组件/'),
        false,
        2
      )
    }
  }
}
