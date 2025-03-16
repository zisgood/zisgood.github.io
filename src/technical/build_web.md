---
title: 搭建自己的github博客
icon: mdi:web-box
order: 2
category:
  - 个人博客
tag:
  - 文档记录
---

## 前置准备
- 安装nodejs
  - 可以按照pnpm中文网安装好pnpm包管理工具
- 安装新版的git
  - 旧版本的git后续在vuepress-theme-hope创建github的workflow时会执行git init -b main命令可能会报错ExecaSyncError: Command failed with exit code 129: git init -b main  error: unknown switch `b'。原因：从 Git 2.28 版本开始，git init 支持 -b 选项来指定初始分支名称。如果你的 Git 版本低于 2.28，你需要更新 Git。

## 用到的技术和知识
- [VuePress](https://vuepress.vuejs.org/zh/)：基于Markdown的前端网站生成器，awesome，简单易用，不需要掌握太多前端技术也可以快速搭建
- [vuepress-theme-hope](https://theme-hope.vuejs.press/zh/get-started/)：一个具有强大功能的 vuepress 主题，封装好了很多功能，即使前端不是很熟悉，也可以快速上手
- markdown语法：这个网上教程很多，语法也很简单，本文也是使用markdown进行撰写的，这个必须要了解

## 项目命令
### 环境安装命令
如果只是从github拉去代码，需要在本地启动，在上面前置准备好以后在项目下运行命令
```` bash
pnpm install
````
### 构建命令
构建项目并输出
```` bash
pnpm docs:build
````
### 启动命令
启动开发服务器
```` bash
pnpm docs:dev
````
清除缓存并启动开发服务器
```` bash
pnpm docs:clean-dev
````

## 视频教程
由于语雀上传视频需要会员，所以视频放到有道云笔记里了，可以去有道云笔记搜索文章《**搭建自己的github博客**》

## 其他
github连不上的问题，可以通过下载[Watt Toolkit](https://steampp.net/)工具对很多平台加速，其他包括Steam、github等

## 参考文章
- [「奇怪的教程」年轻人的第一个博客搭建指南](https://segmentfault.com/a/1190000038885122)
- [GitHub Actions 的工作流语法](https://docs.github.com/zh/actions/writing-workflows/workflow-syntax-for-github-actions)