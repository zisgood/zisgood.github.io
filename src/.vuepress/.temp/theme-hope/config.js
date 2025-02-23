import { Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_c136c28e7ffd43c1671702f683b6210e/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vuepress+plugin-catalog@2._399a4a54f19d078984889b062be2c06c/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_c136c28e7ffd43c1671702f683b6210e/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "D:/Code/AppProjects/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_c136c28e7ffd43c1671702f683b6210e/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.7_195fc09d1266769eede11b5ac1779c76/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.7_195fc09d1266769eede11b5ac1779c76/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.7_195fc09d1266769eede11b5ac1779c76/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/Code/AppProjects/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_c136c28e7ffd43c1671702f683b6210e/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
