import { hasGlobalComponent } from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.7_195fc09d1266769eede11b5ac1779c76/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vueuse+core@12.7.0/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_75983ae0ede06aab411749d29e38473f/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
