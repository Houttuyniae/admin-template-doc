# 快速开始

::: warning 注意

请确保你的 Node.js 版本 >= 8。

:::

## 安装依赖

```md
npm install
```

## 启动项目

```md
npm run dev
```

## VSCode 配置

### 安装插件

- Vue VSCode Extension Pack ---- vscode vue 插件集合

- Path Intellisense ---- @路径提示

- Vue Peek ---- 组件跳转

- SVN ---- 版本控制

- GitLens ---- 版本控制

- Ayu ---- 主题

### 配置

配置 vscode 的设置，实现保存时，自动格式化代码。[传送门](https://www.cnblogs.com/benbentu/p/9661998.html)

```js
// vscode 配置
"files.insertFinalNewline": true, // 文件末尾空行
"files.trimTrailingWhitespace": true, // 启用后，将在保存文件时剪裁尾随空格
"files.trimFinalNewlines": true, // 启用后，保存文件时将删除在最终新行后的所有新行。
"editor.fontSize": 14, //字体大小
"editor.formatOnSave": true, //每次保存自动格式化
// 格式化设置
"eslint.autoFixOnSave": true, // 每次保存的时候将代码按 eslint 格式进行修复
"vetur.format.defaultFormatter.html": "js-beautify-html", // 格式化.vue 中 html
"vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
"vetur.format.defaultFormatterOptions": {
"js-beautify-html": {
	"wrap_attributes": "force-aligned" // 属性强制折行对齐
   }
},
"extensions.autoUpdate": false,
// "vetur.format.enable": false,
"prettier.eslintIntegration": true, //让 prettier 使用 eslint 的代码格式进行校验
"prettier.semi": false, //在代码结尾加上分号
"prettier.singleQuote": true, //使用带引号替代双引号
"eslint.validate": [
	//开启对.vue文件中错误的检查
	"javascript",
	"javascriptreact",
	{
	"language": "html",
	"autoFix": true
	},
	{
	"language": "vue",
	"autoFix": true
	}
],
```

### 创建 Vue 模板

在 vscode 的设置中创建用户个人模版 [传送门](https://www.jianshu.com/p/34a5a4193892)

```js
{
	"Print to console": {
		"prefix": "vue",
		"body": [
			"<!-- $1 -->",
			"<template>",
			"<div class='$2'>$5</div>",
			"</template>",
			"",
			"<script>",
			"",
			"export default {",
			"components: {},",
			"data() {",
			"return {",
			"",
			"}",
			"},",
			"computed: {},",
			"watch: {},",
			"methods: {",
			"",
			"},",
			"created() {",
			"",
			"},",
			"mounted() {",
			"",
			"},",
			"beforeCreate() {},",
			"beforeMount() {},",
			"beforeUpdate() {},",
			"updated() {},",
			"beforeDestroy() {},",
			"destroyed() {},",
			"activated() {},",
			"}",
			"</script>",
			"<style lang='scss' scoped>",
			"$4",
			"</style>"
		],
		"description": "Log output to console"
	}

```
