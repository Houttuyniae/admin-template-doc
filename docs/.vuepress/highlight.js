// copy from https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/markdown/lib/highlight.js
const hljs = require('highlight.js')
const { escapeHtml } = require('@vuepress/shared-utils')

function wrap(code, lang) {
  if (lang === 'text') {
    code = escapeHtml(code)
  }
  // return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`
  return `<pre v-pre ><code>${code}</code></pre>`
}

module.exports = (str, lang) => {
  const code = hljs.highlightAuto(str).value
  return wrap(code, lang)
}
