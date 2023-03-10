const e={key:"v-c6e66df6",path:"/posts/system-design/framework/spring/spring-design-patterns-summary.html",title:"Spring \u8BBE\u8BA1\u6A21\u5F0F\u603B\u7ED3",lang:"zh-CN",frontmatter:{title:"Spring \u8BBE\u8BA1\u6A21\u5F0F\u603B\u7ED3",category:["\u6846\u67B6"],tag:["Spring"],summary:"JDK \u4E2D\u7528\u5230\u4E86\u90A3\u4E9B\u8BBE\u8BA1\u6A21\u5F0F?Spring \u4E2D\u7528\u5230\u4E86\u90A3\u4E9B\u8BBE\u8BA1\u6A21\u5F0F?\u8FD9\u4E24\u4E2A\u95EE\u9898\uFF0C\u5728\u9762\u8BD5\u4E2D\u6BD4\u8F83\u5E38\u89C1\u3002\u6211\u5728\u7F51\u4E0A\u641C\u7D22\u4E86\u4E00\u4E0B\u5173\u4E8E Spring \u4E2D\u8BBE\u8BA1\u6A21\u5F0F\u7684\u8BB2\u89E3\u51E0\u4E4E\u90FD\u662F\u5343\u7BC7\u4E00\u5F8B\uFF0C\u800C\u4E14\u5927\u90E8\u5206\u90FD\u5E74\u4EE3\u4E45\u8FDC\u3002\u6240\u4EE5\uFF0C\u82B1\u4E86\u51E0\u5929\u65F6\u95F4\u81EA\u5DF1\u603B\u7ED3\u4E86\u4E00\u4E0B\uFF0C\u7531\u4E8E\u6211\u7684\u4E2A\u4EBA\u80FD\u529B\u6709\u9650\uFF0C\u6587\u4E2D\u5982\u6709\u4EFB\u4F55\u9519\u8BEF\u5404\u4F4D\u90FD\u53EF\u4EE5\u6307\u51FA\u3002\u53E6\u5916\uFF0C\u6587\u7AE0\u7BC7\u5E45\u6709\u9650\uFF0C\u5BF9\u4E8E\u8BBE\u8BA1\u6A21\u5F0F\u4EE5\u53CA\u4E00\u4E9B\u6E90\u7801\u7684\u89E3\u8BFB\u6211\u53EA\u662F\u4E00\u7B14\u5E26\u8FC7\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u7684\u4E3B\u8981\u76EE",head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/system-design/framework/spring/spring-design-patterns-summary.html"}],["meta",{property:"og:site_name",content:"Technology Blog"}],["meta",{property:"og:title",content:"Spring \u8BBE\u8BA1\u6A21\u5F0F\u603B\u7ED3"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Spring"}]]},excerpt:"",headers:[{level:2,title:"\u63A7\u5236\u53CD\u8F6C(IoC)\u548C\u4F9D\u8D56\u6CE8\u5165(DI)",slug:"\u63A7\u5236\u53CD\u8F6C-ioc-\u548C\u4F9D\u8D56\u6CE8\u5165-di",children:[]},{level:2,title:"\u5DE5\u5382\u8BBE\u8BA1\u6A21\u5F0F",slug:"\u5DE5\u5382\u8BBE\u8BA1\u6A21\u5F0F",children:[]},{level:2,title:"\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F",slug:"\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F",children:[]},{level:2,title:"\u4EE3\u7406\u8BBE\u8BA1\u6A21\u5F0F",slug:"\u4EE3\u7406\u8BBE\u8BA1\u6A21\u5F0F",children:[{level:3,title:"\u4EE3\u7406\u6A21\u5F0F\u5728 AOP \u4E2D\u7684\u5E94\u7528",slug:"\u4EE3\u7406\u6A21\u5F0F\u5728-aop-\u4E2D\u7684\u5E94\u7528",children:[]},{level:3,title:"Spring AOP \u548C AspectJ AOP \u6709\u4EC0\u4E48\u533A\u522B?",slug:"spring-aop-\u548C-aspectj-aop-\u6709\u4EC0\u4E48\u533A\u522B",children:[]}]},{level:2,title:"\u6A21\u677F\u65B9\u6CD5",slug:"\u6A21\u677F\u65B9\u6CD5",children:[]},{level:2,title:"\u89C2\u5BDF\u8005\u6A21\u5F0F",slug:"\u89C2\u5BDF\u8005\u6A21\u5F0F",children:[{level:3,title:"Spring \u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B\u4E2D\u7684\u4E09\u79CD\u89D2\u8272",slug:"spring-\u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B\u4E2D\u7684\u4E09\u79CD\u89D2\u8272",children:[]},{level:3,title:"Spring \u7684\u4E8B\u4EF6\u6D41\u7A0B\u603B\u7ED3",slug:"spring-\u7684\u4E8B\u4EF6\u6D41\u7A0B\u603B\u7ED3",children:[]}]},{level:2,title:"\u9002\u914D\u5668\u6A21\u5F0F",slug:"\u9002\u914D\u5668\u6A21\u5F0F",children:[{level:3,title:"spring AOP\u4E2D\u7684\u9002\u914D\u5668\u6A21\u5F0F",slug:"spring-aop\u4E2D\u7684\u9002\u914D\u5668\u6A21\u5F0F",children:[]},{level:3,title:"spring MVC\u4E2D\u7684\u9002\u914D\u5668\u6A21\u5F0F",slug:"spring-mvc\u4E2D\u7684\u9002\u914D\u5668\u6A21\u5F0F",children:[]}]},{level:2,title:"\u88C5\u9970\u8005\u6A21\u5F0F",slug:"\u88C5\u9970\u8005\u6A21\u5F0F",children:[]},{level:2,title:"\u603B\u7ED3",slug:"\u603B\u7ED3",children:[]},{level:2,title:"\u53C2\u8003",slug:"\u53C2\u8003",children:[]},{level:2,title:"\u516C\u4F17\u53F7",slug:"\u516C\u4F17\u53F7",children:[]}],git:{createdTime:164891757e4,updatedTime:164891757e4,contributors:[{name:"zisgood",email:"zisgood@gitee.com",commits:1}]},readingTime:{minutes:14.71,words:4413},filePathRelative:"posts/system-design/framework/spring/spring-design-patterns-summary.md"};export{e as data};
