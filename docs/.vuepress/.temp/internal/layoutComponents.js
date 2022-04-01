import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import(/* webpackChunkName: "layout-404" */"C:/projects/vuepress-theme-hope/packages/theme/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import(/* webpackChunkName: "layout-Layout" */"C:/projects/vuepress-theme-hope/packages/theme/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import(/* webpackChunkName: "layout-Slide" */"vuepress-plugin-md-enhance/lib/client/SlidePage.js")),
  "Blog": defineAsyncComponent(() => import(/* webpackChunkName: "layout-Blog" */"C:/projects/vuepress-theme-hope/packages/theme/lib/client/module/blog/layouts/Blog.js")),
}
