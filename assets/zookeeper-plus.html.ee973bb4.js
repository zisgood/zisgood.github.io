const e={key:"v-fb7700a0",path:"/posts/distributed-system/distributed-process-coordination/zookeeper/zookeeper-plus.html",title:"ZooKeeper \u76F8\u5173\u6982\u5FF5\u603B\u7ED3(\u8FDB\u9636)",lang:"zh-CN",frontmatter:{summary:'ZooKeeper \u76F8\u5173\u6982\u5FF5\u603B\u7ED3(\u8FDB\u9636)\r" FrancisQ \u6295\u7A3F\u3002" 1. \u597D\u4E45\u4E0D\u89C1 \u79BB\u4E0A\u4E00\u7BC7\u6587\u7AE0\u7684\u53D1\u5E03\u4E5F\u5FEB\u4E00\u4E2A\u6708\u4E86\uFF0C\u60F3\u60F3\u5DF2\u7ECF\u5FEB\u4E00\u4E2A\u6708\u6CA1\u5199\u4E1C\u897F\u4E86\uFF0C\u5176\u4E2D\u53EF\u80FD\u6709\u671F\u672B\u8003\u8BD5\u3001\u8BFE\u7A0B\u8BBE\u8BA1\u548C\u9A7E\u7167\u8003\u8BD5\uFF0C\u4F46\u8FD9\u90FD\u4E0D\u662F\u501F\u53E3\uFF01 \u4E00\u5230\u51AC\u5929\u5C31\u61D2\u7684\u4E0D\u884C\uFF0C\u671B\u5E7F\u5927\u6398\u53CB\u7763\u4FC3\u6211\u{1F644}\u{1F644}\u270D\uFE0F\u270D\uFE0F\u3002\r" \u6587\u7AE0\u5F88\u957F\uFF0C\u5148\u8D5E\u540E\u770B\uFF0C\u517B\u6210\u4E60\u60EF\u3002\u2764\uFE0F \u{1F9E1} \u{1F49B} \u{1F49A} \u{1F499} \u{1F49C}" 2. \u4EC0\u4E48\u662FZooKee',head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/distributed-system/distributed-process-coordination/zookeeper/zookeeper-plus.html"}],["meta",{property:"og:site_name",content:"Technology Blog"}],["meta",{property:"og:title",content:"ZooKeeper \u76F8\u5173\u6982\u5FF5\u603B\u7ED3(\u8FDB\u9636)"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}]]},excerpt:"",headers:[{level:2,title:"1. \u597D\u4E45\u4E0D\u89C1",slug:"_1-\u597D\u4E45\u4E0D\u89C1",children:[]},{level:2,title:"2. \u4EC0\u4E48\u662FZooKeeper",slug:"_2-\u4EC0\u4E48\u662Fzookeeper",children:[]},{level:2,title:"3. \u4E00\u81F4\u6027\u95EE\u9898",slug:"_3-\u4E00\u81F4\u6027\u95EE\u9898",children:[]},{level:2,title:"4. \u4E00\u81F4\u6027\u534F\u8BAE\u548C\u7B97\u6CD5",slug:"_4-\u4E00\u81F4\u6027\u534F\u8BAE\u548C\u7B97\u6CD5",children:[{level:3,title:"4.1. 2PC\uFF08\u4E24\u9636\u6BB5\u63D0\u4EA4\uFF09",slug:"_4-1-2pc-\u4E24\u9636\u6BB5\u63D0\u4EA4",children:[]},{level:3,title:"4.2. 3PC\uFF08\u4E09\u9636\u6BB5\u63D0\u4EA4\uFF09",slug:"_4-2-3pc-\u4E09\u9636\u6BB5\u63D0\u4EA4",children:[]},{level:3,title:"4.3. Paxos \u7B97\u6CD5",slug:"_4-3-paxos-\u7B97\u6CD5",children:[]}]},{level:2,title:"5. \u5F15\u51FA ZAB",slug:"_5-\u5F15\u51FA-zab",children:[{level:3,title:"5.1. Zookeeper \u67B6\u6784",slug:"_5-1-zookeeper-\u67B6\u6784",children:[]},{level:3,title:"5.2. ZAB \u4E2D\u7684\u4E09\u4E2A\u89D2\u8272",slug:"_5-2-zab-\u4E2D\u7684\u4E09\u4E2A\u89D2\u8272",children:[]},{level:3,title:"5.3. \u6D88\u606F\u5E7F\u64AD\u6A21\u5F0F",slug:"_5-3-\u6D88\u606F\u5E7F\u64AD\u6A21\u5F0F",children:[]},{level:3,title:"5.4. \u5D29\u6E83\u6062\u590D\u6A21\u5F0F",slug:"_5-4-\u5D29\u6E83\u6062\u590D\u6A21\u5F0F",children:[]}]},{level:2,title:"6. Zookeeper\u7684\u51E0\u4E2A\u7406\u8BBA\u77E5\u8BC6",slug:"_6-zookeeper\u7684\u51E0\u4E2A\u7406\u8BBA\u77E5\u8BC6",children:[{level:3,title:"6.1. \u6570\u636E\u6A21\u578B",slug:"_6-1-\u6570\u636E\u6A21\u578B",children:[]},{level:3,title:"6.2. \u4F1A\u8BDD",slug:"_6-2-\u4F1A\u8BDD",children:[]},{level:3,title:"6.3. ACL",slug:"_6-3-acl",children:[]},{level:3,title:"6.4. Watcher\u673A\u5236",slug:"_6-4-watcher\u673A\u5236",children:[]}]},{level:2,title:"7. Zookeeper\u7684\u51E0\u4E2A\u5178\u578B\u5E94\u7528\u573A\u666F",slug:"_7-zookeeper\u7684\u51E0\u4E2A\u5178\u578B\u5E94\u7528\u573A\u666F",children:[{level:3,title:"7.1. \u9009\u4E3B",slug:"_7-1-\u9009\u4E3B",children:[]},{level:3,title:"7.2. \u5206\u5E03\u5F0F\u9501",slug:"_7-2-\u5206\u5E03\u5F0F\u9501",children:[]},{level:3,title:"7.3. \u547D\u540D\u670D\u52A1",slug:"_7-3-\u547D\u540D\u670D\u52A1",children:[]},{level:3,title:"7.4. \u96C6\u7FA4\u7BA1\u7406\u548C\u6CE8\u518C\u4E2D\u5FC3",slug:"_7-4-\u96C6\u7FA4\u7BA1\u7406\u548C\u6CE8\u518C\u4E2D\u5FC3",children:[]}]},{level:2,title:"8. \u603B\u7ED3",slug:"_8-\u603B\u7ED3",children:[]}],git:{createdTime:164891757e4,updatedTime:164891757e4,contributors:[{name:"zisgood",email:"zisgood@gitee.com",commits:1}]},readingTime:{minutes:33.64,words:10091},filePathRelative:"posts/distributed-system/distributed-process-coordination/zookeeper/zookeeper-plus.md"};export{e as data};
