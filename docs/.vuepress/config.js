const path = require('path')
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录

const docs = rootpath
const utils = require(rootpath + '/utils/index.js')
const fileHelper = require(rootpath + '/utils/getFilenames.js')
const getHighlightCodeHtml = require('./highlight')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/',
  markdown: {
    anchor: { permalinkSymbol: '¶' },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.renderer.rules.table_open = function() {
        return '<table class="api-container">'
      }

      md.use(require('markdown-it-container'), 'code', {
        validate: function(params) {
          return params.trim().match(/^code$/)
        },

        render: function(tokens, idx) {
          const { nesting, info } = tokens[idx]
          let htmlStr = ''
          if (nesting === 1) {
            // opening tag
            let textBlock = ''
            for (let index = idx; index < tokens.length; index++) {
              const { map, type, content, nesting } = tokens[index]

              //-1 未结束状态
              if (nesting === -1) break
              if (type === 'html_block') {
                if (
                  content.trim().startsWith('<!--') &&
                  content.trim().endsWith('-->')
                ) {
                  textBlock = content.replace('<!--', '')
                  textBlock = textBlock.replace('-->', '')
                } else {
                  htmlStr += content
                }
              }
            }
            return `<common-code textBlock='${textBlock}'>
                      <template slot="code">
                        <div >
                            ${getHighlightCodeHtml(htmlStr, (language = 'vue'))}
                        </div>
                      </template>
                      <template slot='demo'>
            `
          } else if (nesting === -1) {
            // closing tag
            return '</template></common-code>\n'
          }
        }
      })
    }
  },
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '组件',
        link: '/组件/Button'
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/guide/': [
        {
          title: '指南', // 必要的
          path: '/guide/', // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ['/guide/', '/guide/1-getting-started', '/guide/2-dev-step']
        },
        {
          title: '进阶', // 必要的
          path: '/guide/', // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ['/']
        }
      ],
      '/组件/': utils.genSidebar(
        '',
        fileHelper.getFileName(docs + '/组件/'),
        false,
        2
      )
    }
  }
}
