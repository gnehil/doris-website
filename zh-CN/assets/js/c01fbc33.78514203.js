"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[7277],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,b=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(b,o(o({ref:t},s),{},{components:a})):n.createElement(b,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Tablet \u6062\u590d\u5de5\u5177",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/maint-monitor/tablet-restore-tool",id:"version-dev/admin-manual/maint-monitor/tablet-restore-tool",title:"Tablet \u6062\u590d\u5de5\u5177",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/admin-manual/maint-monitor/tablet-restore-tool.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/tablet-restore-tool",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/tablet-restore-tool",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/admin-manual/maint-monitor/tablet-restore-tool.md",tags:[],version:"dev",frontMatter:{title:"Tablet \u6062\u590d\u5de5\u5177",language:"zh-CN"},sidebar:"docs",previous:{title:"Tablet \u672c\u5730\u8c03\u8bd5",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/tablet-local-debug"},next:{title:"\u5143\u6570\u636e\u8fd0\u7ef4",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/metadata-operation"}},p={},m=[{value:"\u4ece BE \u56de\u6536\u7ad9\u4e2d\u6062\u590d\u6570\u636e",id:"\u4ece-be-\u56de\u6536\u7ad9\u4e2d\u6062\u590d\u6570\u636e",level:2},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:3},{value:"single mode",id:"single-mode",level:4},{value:"batch mode",id:"batch-mode",level:4},{value:"\u4fee\u590d\u7f3a\u5931\u6216\u635f\u574f\u7684 Tablet",id:"\u4fee\u590d\u7f3a\u5931\u6216\u635f\u574f\u7684-tablet",level:2}],s={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tablet-\u6062\u590d\u5de5\u5177"},"Tablet \u6062\u590d\u5de5\u5177"),(0,r.kt)("h2",{id:"\u4ece-be-\u56de\u6536\u7ad9\u4e2d\u6062\u590d\u6570\u636e"},"\u4ece BE \u56de\u6536\u7ad9\u4e2d\u6062\u590d\u6570\u636e"),(0,r.kt)("p",null,"\u7528\u6237\u5728\u4f7f\u7528Doris\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u4f1a\u53d1\u751f\u56e0\u4e3a\u4e00\u4e9b\u8bef\u64cd\u4f5c\u6216\u8005\u7ebf\u4e0abug\uff0c\u5bfc\u81f4\u4e00\u4e9b\u6709\u6548\u7684tablet\u88ab\u5220\u9664\uff08\u5305\u62ec\u5143\u6570\u636e\u548c\u6570\u636e\uff09\u3002\u4e3a\u4e86\u9632\u6b62\u5728\u8fd9\u4e9b\u5f02\u5e38\u60c5\u51b5\u51fa\u73b0\u6570\u636e\u4e22\u5931\uff0cDoris\u63d0\u4f9b\u4e86\u56de\u6536\u7ad9\u673a\u5236\uff0c\u6765\u4fdd\u62a4\u7528\u6237\u6570\u636e\u3002\u7528\u6237\u5220\u9664\u7684tablet\u6570\u636e\u4e0d\u4f1a\u88ab\u76f4\u63a5\u5220\u9664\uff0c\u4f1a\u88ab\u653e\u5728\u56de\u6536\u7ad9\u4e2d\u5b58\u50a8\u4e00\u6bb5\u65f6\u95f4\uff0c\u5728\u4e00\u6bb5\u65f6\u95f4\u4e4b\u540e\u4f1a\u6709\u5b9a\u65f6\u6e05\u7406\u673a\u5236\u5c06\u8fc7\u671f\u7684\u6570\u636e\u5220\u9664\u3002\u56de\u6536\u7ad9\u4e2d\u7684\u6570\u636e\u5305\u62ec\uff1atablet\u7684data\u6587\u4ef6(.dat)\uff0ctablet\u7684\u7d22\u5f15\u6587\u4ef6(.idx)\u548ctablet\u7684\u5143\u6570\u636e\u6587\u4ef6(.hdr)\u3002\u6570\u636e\u5c06\u4f1a\u5b58\u653e\u5728\u5982\u4e0b\u683c\u5f0f\u7684\u8def\u5f84\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/root_path/trash/time_label/tablet_id/schema_hash/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root_path"),"\uff1a\u5bf9\u5e94BE\u8282\u70b9\u7684\u67d0\u4e2a\u6570\u636e\u6839\u76ee\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trash"),"\uff1a\u56de\u6536\u7ad9\u7684\u76ee\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"time_label"),"\uff1a\u65f6\u95f4\u6807\u7b7e\uff0c\u4e3a\u4e86\u56de\u6536\u7ad9\u4e2d\u6570\u636e\u76ee\u5f55\u7684\u552f\u4e00\u6027\uff0c\u540c\u65f6\u8bb0\u5f55\u6570\u636e\u65f6\u95f4\uff0c\u4f7f\u7528\u65f6\u95f4\u6807\u7b7e\u4f5c\u4e3a\u5b50\u76ee\u5f55\u3002")),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u53d1\u73b0\u7ebf\u4e0a\u7684\u6570\u636e\u88ab\u8bef\u5220\u9664\uff0c\u9700\u8981\u4ece\u56de\u6536\u7ad9\u4e2d\u6062\u590d\u88ab\u5220\u9664\u7684tablet\uff0c\u9700\u8981\u7528\u5230\u8fd9\u4e2atablet\u6570\u636e\u6062\u590d\u529f\u80fd\u3002"),(0,r.kt)("p",null,"BE\u63d0\u4f9bhttp\u63a5\u53e3\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"restore_tablet_tool.sh")," \u811a\u672c\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\uff0c\u652f\u6301\u5355tablet\u64cd\u4f5c\uff08single mode\uff09\u548c\u6279\u91cf\u64cd\u4f5c\u6a21\u5f0f\uff08batch mode\uff09\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728single mode\u4e0b\uff0c\u652f\u6301\u5355\u4e2atablet\u7684\u6570\u636e\u6062\u590d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728batch mode\u4e0b\uff0c\u652f\u6301\u6279\u91cftablet\u7684\u6570\u636e\u6062\u590d\u3002")),(0,r.kt)("h3",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,r.kt)("h4",{id:"single-mode"},"single mode"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"http\u8bf7\u6c42\u65b9\u5f0f"),(0,r.kt)("p",{parentName:"li"},"BE\u4e2d\u63d0\u4f9b\u5355\u4e2atablet\u6570\u636e\u6062\u590d\u7684http\u63a5\u53e3\uff0c\u63a5\u53e3\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'curl -X POST "http://be_host:be_webserver_port/api/restore_tablet?tablet_id=11111\\&schema_hash=12345"\n')),(0,r.kt)("p",{parentName:"li"},"\u6210\u529f\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{"status": "Success", "msg": "OK"}\n')),(0,r.kt)("p",{parentName:"li"},"\u5931\u8d25\u7684\u8bdd\uff0c\u4f1a\u8fd4\u56de\u76f8\u5e94\u7684\u5931\u8d25\u539f\u56e0\uff0c\u4e00\u79cd\u53ef\u80fd\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{"status": "Failed", "msg": "create link path failed"}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u811a\u672c\u65b9\u5f0f"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"restore_tablet_tool.sh")," \u53ef\u7528\u6765\u5b9e\u73b0\u5355tablet\u6570\u636e\u6062\u590d\u7684\u529f\u80fd\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'sh tools/restore_tablet_tool.sh -b "http://127.0.0.1:8040" -t 12345 -s 11111\nsh tools/restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --tablet_id 12345 --schema_hash 11111\n')))),(0,r.kt)("h4",{id:"batch-mode"},"batch mode"),(0,r.kt)("p",null,"\u6279\u91cf\u6062\u590d\u6a21\u5f0f\u7528\u4e8e\u5b9e\u73b0\u6062\u590d\u591a\u4e2atablet\u6570\u636e\u7684\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u7684\u65f6\u5019\u9700\u8981\u9884\u5148\u5c06\u6062\u590d\u7684tablet id\u548cschema hash\u6309\u7167\u9017\u53f7\u5206\u9694\u7684\u683c\u5f0f\u653e\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u4e00\u4e2atablet\u4e00\u884c\u3002"),(0,r.kt)("p",null,"\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"12345,11111\n12346,11111\n12347,11111\n")),(0,r.kt)("p",null,"\u7136\u540e\u5982\u4e0b\u7684\u547d\u4ee4\u8fdb\u884c\u6062\u590d(\u5047\u8bbe\u6587\u4ef6\u540d\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"tablets.txt"),")\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sh restore_tablet_tool.sh -b "http://127.0.0.1:8040" -f tablets.txt\nsh restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --file tablets.txt\n')),(0,r.kt)("h2",{id:"\u4fee\u590d\u7f3a\u5931\u6216\u635f\u574f\u7684-tablet"},"\u4fee\u590d\u7f3a\u5931\u6216\u635f\u574f\u7684 Tablet"),(0,r.kt)("p",null,"\u5728\u67d0\u4e9b\u6781\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u5982\u4ee3\u7801BUG\u3001\u6216\u4eba\u4e3a\u8bef\u64cd\u4f5c\u7b49\uff0c\u53ef\u80fd\u5bfc\u81f4\u90e8\u5206\u5206\u7247\u7684\u5168\u90e8\u526f\u672c\u90fd\u4e22\u5931\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u5df2\u7ecf\u5b9e\u8d28\u6027\u7684\u4e22\u5931\u3002\u4f46\u662f\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u4e1a\u52a1\u4f9d\u7136\u5e0c\u671b\u80fd\u591f\u5728\u5373\u4f7f\u6709\u6570\u636e\u4e22\u5931\u7684\u60c5\u51b5\u4e0b\uff0c\u4fdd\u8bc1\u67e5\u8be2\u6b63\u5e38\u4e0d\u62a5\u9519\uff0c\u964d\u4f4e\u7528\u6237\u5c42\u7684\u611f\u77e5\u7a0b\u5ea6\u3002\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u7a7a\u767dTablet\u586b\u5145\u4e22\u5931\u526f\u672c\u7684\u529f\u80fd\uff0c\u6765\u4fdd\u8bc1\u67e5\u8be2\u80fd\u591f\u6b63\u5e38\u6267\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\uff1a\u8be5\u64cd\u4f5c\u4ec5\u7528\u4e8e\u89c4\u907f\u67e5\u8be2\u56e0\u65e0\u6cd5\u627e\u5230\u53ef\u67e5\u8be2\u526f\u672c\u5bfc\u81f4\u62a5\u9519\u7684\u95ee\u9898\uff0c\u65e0\u6cd5\u6062\u590d\u5df2\u7ecf\u5b9e\u8d28\u6027\u4e22\u5931\u7684\u6570\u636e")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b Master FE \u65e5\u5fd7 ",(0,r.kt)("inlineCode",{parentName:"p"},"fe.log")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u51fa\u73b0\u6570\u636e\u4e22\u5931\u7684\u60c5\u51b5\uff0c\u5219\u65e5\u5fd7\u4e2d\u4f1a\u6709\u7c7b\u4f3c\u5982\u4e0b\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"backend [10001] invalid situation. tablet[20000] has few replica[1], replica num setting is [3]\n")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u65e5\u5fd7\u8868\u793a\uff0cTablet 20000 \u7684\u6240\u6709\u526f\u672c\u5df2\u635f\u574f\u6216\u4e22\u5931\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u7a7a\u767d\u526f\u672c\u586b\u8865\u7f3a\u5931\u526f\u672c"),(0,r.kt)("p",{parentName:"li"},"\u5f53\u786e\u8ba4\u6570\u636e\u5df2\u7ecf\u65e0\u6cd5\u6062\u590d\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u751f\u6210\u7a7a\u767d\u526f\u672c\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "true");\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6ce8\uff1a\u53ef\u4ee5\u5148\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"ADMIN SHOW FRONTEND CONFIG;")," \u547d\u4ee4\u67e5\u770b\u5f53\u524d\u7248\u672c\u662f\u5426\u652f\u6301\u8be5\u53c2\u6570\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u5b8c\u6210\u51e0\u5206\u949f\u540e\uff0c\u5e94\u8be5\u4f1a\u5728 Master FE \u65e5\u5fd7 ",(0,r.kt)("inlineCode",{parentName:"p"},"fe.log")," \u4e2d\u770b\u5230\u5982\u4e0b\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"tablet 20000 has only one replica 20001 on backend 10001 and it is lost. create an empty replica to recover it.\n")),(0,r.kt)("p",{parentName:"li"},"\u8be5\u65e5\u5fd7\u8868\u793a\u7cfb\u7edf\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u7a7a\u767d Tablet \u7528\u4e8e\u586b\u8865\u7f3a\u5931\u526f\u672c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u67e5\u8be2\u6765\u5224\u65ad\u662f\u5426\u5df2\u7ecf\u4fee\u590d\u6210\u529f\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5168\u90e8\u4fee\u590d\u6210\u529f\u540e\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5173\u95ed ",(0,r.kt)("inlineCode",{parentName:"p"},"recover_with_empty_tablet")," \u53c2\u6570\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "false");\n')))))}c.isMDXComponent=!0}}]);