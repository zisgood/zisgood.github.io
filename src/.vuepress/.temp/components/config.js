import { hasGlobalComponent } from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.7_195fc09d1266769eede11b5ac1779c76/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/vuepress-plugin-components@_8c320f04b9448f4121801cc6519be6bb/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/Code/AppProjects/my-docs/node_modules/.pnpm/vuepress-plugin-components@_8c320f04b9448f4121801cc6519be6bb/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/Code/AppProjects/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.7_195fc09d1266769eede11b5ac1779c76/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
