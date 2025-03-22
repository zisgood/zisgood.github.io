import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "技术文档",
      icon: "laptop-code",
      prefix: "technical/",
      children: [
          {
              text: "计算机基础",
              icon: "icon-park:computer",
              prefix: "computer/",
              collapsible: true,
              expanded: true,
              children: [
                  {
                      text: "数据结构",
                      icon: "fluent-color:data-line-20",
                      prefix: "data-structure/",
                      collapsible: true,
                      expanded: true,
                      children: [
                               "data-structure",
                              ]
                  },
              ]
          },
          {
              text: "错误处理",
              icon: "icon-park:error",
              prefix: "error/",
              collapsible: true,
              expanded: true,
              children: [
                  "git",
              ]
          },
          {
              text: "JVM",
              icon: "icon-park:jvm",
              prefix: "jvm/",
              collapsible: true,
              expanded: true,
              children: [
                  "openjdk_download",
              ]
          },
                 "build_web",
      ],
    },
    {
      text: "官方文档|个人博客",
      icon: "book",
      prefix: "official/",
      children: [
                "document",
                "blog",
                "links",
                ],
    },
  ],
});
