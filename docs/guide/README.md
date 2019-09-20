# 介绍

本项目框架是基于 [vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/) 开发的，它基于 vue 和 element-ui 实现。而本文档是为记录开发过程中实现的一些功能与组件而编写的。

::: tip

文档基于 Vuepress 开发，目前实现类似 [element-ui](https://element.eleme.io/2.12/#/zh-CN/component/installation) 的组件文档库

:::

## 前序准备

你需要在本地安装 [node]() 和 [git]()。

本项目技术栈基于 ES2015+、[vue]()、[vuex]()、[vue-router]() 、[vue-cli]() 、[axios]() 和 [element-ui]()。

开发工具：[vscode]() （推荐）

## 目录结构

```

├── build                      # 构建相关
├── mock                       # 项目mock 模拟数据
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store 管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│         └── modules          # 功能模块划分页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
└── package.json               # package.json

```
