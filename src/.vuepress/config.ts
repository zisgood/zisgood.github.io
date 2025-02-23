import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "神马笔记",
  description: "文档记录",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
