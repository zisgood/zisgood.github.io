import { CodeTabs } from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_27617d36064e63e0388af41c6fca31b9/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_27617d36064e63e0388af41c6fca31b9/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_27617d36064e63e0388af41c6fca31b9/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
