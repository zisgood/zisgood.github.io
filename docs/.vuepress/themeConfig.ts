import defineThemeConfig from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "zisgood",
    url: "https://zisgood.github.io/",
  },

  iconPrefix: "iconfont icon-",

  breadcrumb: false,

  logo: "/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "demo/src",

  editLink: false,

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: false,

//   pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  pageInfo: ["Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个后端开发者",
    intro: "/intro.html",
    medias: {
      Gitee: "https://zisgood.gitee.io/",
      GitHub: "https://zisgood.github.io/",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
/*     comment: {
       *//**
       * Using giscus
       *//*
      type: "giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

       *//**
       * Using twikoo
       *//*
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

       *//**
       * Using Waline
       *//*
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },*/
    search: {
      // https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
      // 排除首页
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
      // 用于在页面的搜索索引中添加额外字段
      getExtraFields: () => [],
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
