import CodeDemo from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@_3d2f8cff305cf4b7781d188f73d4428e/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@_3d2f8cff305cf4b7781d188f73d4428e/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
