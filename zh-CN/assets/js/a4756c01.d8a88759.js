"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[47456],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),s=c(n),u=r,f=s["".concat(i,".").concat(u)]||s[u]||k[u]||o;return n?a.createElement(f,p(p({ref:e},m),{},{components:n})):a.createElement(f,p({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,p=new Array(o);p[0]=s;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:r,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},48987:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Apache Doris 1.1 \u7279\u6027\u63ed\u79d8\uff1aFlink \u5b9e\u65f6\u5199\u5165\u5982\u4f55\u517c\u987e\u9ad8\u541e\u5410\u548c\u4f4e\u5ef6\u65f6",summary:"\u968f\u7740\u6570\u636e\u5b9e\u65f6\u5316\u9700\u6c42\u7684\u65e5\u76ca\u589e\u591a\uff0c\u6570\u636e\u7684\u65f6\u6548\u6027\u5bf9\u4f01\u4e1a\u7684\u7cbe\u7ec6\u5316\u8fd0\u8425\u8d8a\u6765\u8d8a\u91cd\u8981\uff0c\u4f7f\u5f97\u5b9e\u65f6\u6570\u4ed3\u5728\u8fd9\u4e00\u8fc7\u7a0b\u4e2d\u8d77\u5230\u4e86\u4e0d\u53ef\u66ff\u4ee3\u7684\u4f5c\u7528\u3002\u672c\u6587\u5c06\u57fa\u4e8e\u7528\u6237\u9047\u5230\u7684\u95ee\u9898\u4e0e\u6311\u6218\uff0c\u63ed\u79d8 Apache Doris 1.1 \u7279\u6027\uff0c\u5bf9 Flink \u5b9e\u65f6\u5199\u5165 Apache Doris \u7684\u4f18\u5316\u5b9e\u73b0\u4e0e\u672a\u6765\u89c4\u5212\u8fdb\u884c\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002",date:"2022-07-29",author:"Apache Doris",tags:["\u6280\u672f\u89e3\u6790"]},p=void 0,l={permalink:"/zh-CN/blog/Flink-realtime-write",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/Flink-realtime-write.md",title:"Apache Doris 1.1 \u7279\u6027\u63ed\u79d8\uff1aFlink \u5b9e\u65f6\u5199\u5165\u5982\u4f55\u517c\u987e\u9ad8\u541e\u5410\u548c\u4f4e\u5ef6\u65f6",description:"\x3c!--",date:"2022-07-29T00:00:00.000Z",formattedDate:"2022\u5e747\u670829\u65e5",tags:[{label:"\u6280\u672f\u89e3\u6790",permalink:"/zh-CN/blog/tags/\u6280\u672f\u89e3\u6790"}],truncated:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris 1.1 \u7279\u6027\u63ed\u79d8\uff1aFlink \u5b9e\u65f6\u5199\u5165\u5982\u4f55\u517c\u987e\u9ad8\u541e\u5410\u548c\u4f4e\u5ef6\u65f6",summary:"\u968f\u7740\u6570\u636e\u5b9e\u65f6\u5316\u9700\u6c42\u7684\u65e5\u76ca\u589e\u591a\uff0c\u6570\u636e\u7684\u65f6\u6548\u6027\u5bf9\u4f01\u4e1a\u7684\u7cbe\u7ec6\u5316\u8fd0\u8425\u8d8a\u6765\u8d8a\u91cd\u8981\uff0c\u4f7f\u5f97\u5b9e\u65f6\u6570\u4ed3\u5728\u8fd9\u4e00\u8fc7\u7a0b\u4e2d\u8d77\u5230\u4e86\u4e0d\u53ef\u66ff\u4ee3\u7684\u4f5c\u7528\u3002\u672c\u6587\u5c06\u57fa\u4e8e\u7528\u6237\u9047\u5230\u7684\u95ee\u9898\u4e0e\u6311\u6218\uff0c\u63ed\u79d8 Apache Doris 1.1 \u7279\u6027\uff0c\u5bf9 Flink \u5b9e\u65f6\u5199\u5165 Apache Doris \u7684\u4f18\u5316\u5b9e\u73b0\u4e0e\u672a\u6765\u89c4\u5212\u8fdb\u884c\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002",date:"2022-07-29",author:"Apache Doris",tags:["\u6280\u672f\u89e3\u6790"]},nextItem:{title:"[Doris \u53d1\u7248\u901a\u544a] Apache Doris 1.1.1 Release",permalink:"/zh-CN/blog/release-1.1.1"}},i={authorsImageUrls:[void 0]},c=[{value:"\u6d41\u5f0f\u5199\u5165",id:"\u6d41\u5f0f\u5199\u5165",level:2},{value:"Exactly-Once",id:"exactly-once",level:2},{value:"\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65",id:"\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65",level:2},{value:"\u6570\u636e\u7248\u672c\u7684\u5feb\u901f\u805a\u5408\u80fd\u529b",id:"\u6570\u636e\u7248\u672c\u7684\u5feb\u901f\u805a\u5408\u80fd\u529b",level:2},{value:"\u901a\u7528 Flink \u9ad8\u5e76\u53d1\u573a\u666f",id:"\u901a\u7528-flink-\u9ad8\u5e76\u53d1\u573a\u666f",level:2},{value:"\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65\u573a\u666f\uff08\u6781\u9650\u5927\u538b\u529b\uff09",id:"\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65\u573a\u666f\u6781\u9650\u5927\u538b\u529b",level:2},{value:"\u6570\u636e\u5b9e\u65f6\u53ef\u89c1\u573a\u666f",id:"\u6570\u636e\u5b9e\u65f6\u53ef\u89c1\u573a\u666f",level:2},{value:"\u9ad8\u5e76\u53d1\u573a\u666f",id:"\u9ad8\u5e76\u53d1\u573a\u666f",level:2}],m={toc:c};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,r.kt)("p",null,"\u968f\u7740\u6570\u636e\u5b9e\u65f6\u5316\u9700\u6c42\u7684\u65e5\u76ca\u589e\u591a\uff0c\u6570\u636e\u7684\u65f6\u6548\u6027\u5bf9\u4f01\u4e1a\u7684\u7cbe\u7ec6\u5316\u8fd0\u8425\u8d8a\u6765\u8d8a\u91cd\u8981\uff0c\u5728\u6d77\u91cf\u6570\u636e\u4e2d\uff0c\u5982\u4f55\u80fd\u5b9e\u65f6\u6709\u6548\u7684\u6316\u6398\u51fa\u6709\u4ef7\u503c\u7684\u4fe1\u606f\uff0c\u5feb\u901f\u7684\u83b7\u53d6\u6570\u636e\u53cd\u9988\uff0c\u534f\u52a9\u516c\u53f8\u66f4\u5feb\u7684\u505a\u51fa\u51b3\u7b56\uff0c\u66f4\u597d\u7684\u8fdb\u884c\u4ea7\u54c1\u8fed\u4ee3\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u65f6\u6570\u4ed3\u5728\u8fd9\u4e00\u8fc7\u7a0b\u4e2d\u8d77\u5230\u4e86\u4e0d\u53ef\u66ff\u4ee3\u7684\u4f5c\u7528"),"\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u5f62\u52bf\u4e0b\uff0c",(0,r.kt)("strong",{parentName:"p"},"Apache Doris \u4f5c\u4e3a\u4e00\u6b3e\u5b9e\u65f6 MPP \u5206\u6790\u578b\u6570\u636e\u5e93\u8131\u9896\u800c\u51fa"),"\uff0c\u540c\u65f6\u5177\u5907\u9ad8\u6027\u80fd\u3001\u7b80\u5355\u6613\u7528\u7b49\u7279\u6027\uff0c\u5177\u6709\u4e30\u5bcc\u7684\u6570\u636e\u63a5\u5165\u65b9\u5f0f\uff0c\u7ed3\u5408 Flink \u6d41\u5f0f\u8ba1\u7b97\uff0c\u53ef\u4ee5\u8ba9\u7528\u6237\u5feb\u901f\u5c06 Kafka \u4e2d\u7684\u975e\u7ed3\u6784\u5316\u6570\u636e\u4ee5\u53ca MySQL \u7b49\u4e0a\u6e38\u4e1a\u52a1\u5e93\u4e2d\u7684\u53d8\u66f4\u6570\u636e\uff0c\u5feb\u901f\u540c\u6b65\u5230 Doris \u5b9e\u65f6\u6570\u4ed3\u4e2d\uff0c\u540c\u65f6 Doris \u63d0\u4f9b\u4e9a\u79d2\u7ea7\u5206\u6790\u67e5\u8be2\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u6709\u6548\u5730\u6ee1\u8db3\u5b9e\u65f6 OLAP\u3001\u5b9e\u65f6\u6570\u636e\u770b\u677f\u4ee5\u53ca\u5b9e\u65f6\u6570\u636e\u670d\u52a1\u7b49\u573a\u666f\u7684\u9700\u6c42\u3002"),(0,r.kt)("h1",{id:"\u6311\u6218"},"\u6311\u6218"),(0,r.kt)("p",null,"\u901a\u5e38\u5b9e\u65f6\u6570\u4ed3\u8981\u4fdd\u8bc1\u7aef\u5230\u7aef\u9ad8\u5e76\u53d1\u4ee5\u53ca\u4f4e\u5ef6\u8fdf\uff0c\u5f80\u5f80\u9762\u4e34\u8bf8\u591a\u6311\u6218\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4fdd\u8bc1\u7aef\u5230\u7aef\u7684",(0,r.kt)("strong",{parentName:"li"},"\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65"),"\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5feb\u901f\u4fdd\u8bc1",(0,r.kt)("strong",{parentName:"li"},"\u6570\u636e\u53ef\u89c1\u6027"),"\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u9ad8\u5e76\u53d1\u5927\u538b\u529b\u4e0b\uff0c\u5982\u4f55\u89e3\u51b3",(0,r.kt)("strong",{parentName:"li"},"\u5927\u91cf\u5c0f\u6587\u4ef6\u5199\u5165"),"\u7684\u95ee\u9898\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u786e\u4fdd\u7aef\u5230\u7aef\u7684 ",(0,r.kt)("strong",{parentName:"li"},"Exactly Once")," \u8bed\u4e49\uff1f")),(0,r.kt)("p",null,"\u7ed3\u5408\u8fd9\u4e9b\u6311\u6218\uff0c\u540c\u65f6\u5bf9\u7528\u6237\u4f7f\u7528 Flink+Doris \u6784\u5efa\u5b9e\u65f6\u6570\u4ed3\u7684\u4e1a\u52a1\u573a\u666f\u8fdb\u884c\u6df1\u5165\u8c03\u7814\uff0c\u5728\u638c\u63e1\u4e86\u7528\u6237\u4f7f\u7528\u7684\u75db\u70b9\u4e4b\u540e\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5728 Doris 1.1 \u7248\u672c\u4e2d\u8fdb\u884c\u4e86\u9488\u5bf9\u6027\u7684\u4f18\u5316\uff0c\u5927\u5e45\u63d0\u5347\u5b9e\u65f6\u6570\u4ed3\u6784\u5efa\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u540c\u65f6\u63d0\u5347\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\uff0c\u7cfb\u7edf\u8d44\u6e90\u6d88\u8017\u4e5f\u5f97\u5230\u4e86\u5927\u5e45\u7684\u4f18\u5316\u3002")),(0,r.kt)("h1",{id:"\u4f18\u5316"},"\u4f18\u5316"),(0,r.kt)("h2",{id:"\u6d41\u5f0f\u5199\u5165"},"\u6d41\u5f0f\u5199\u5165"),(0,r.kt)("p",null,"Flink Doris Connector \u6700\u521d\u7684\u505a\u6cd5\u662f\u5728\u63a5\u6536\u5230\u6570\u636e\u540e\uff0c\u7f13\u5b58\u5230\u5185\u5b58 Batch \u4e2d\uff0c\u901a\u8fc7\u6512\u6279\u7684\u65b9\u5f0f\u8fdb\u884c\u5199\u5165\uff0c\u540c\u65f6\u4f7f\u7528 batch.size\u3001batch.interval \u7b49\u53c2\u6570\u6765\u63a7\u5236 Stream Load \u5199\u5165\u7684\u65f6\u673a\u3002\u8fd9\u79cd\u65b9\u5f0f\u901a\u5e38\u5728\u53c2\u6570\u5408\u7406\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u7a33\u5b9a\u8fd0\u884c\uff0c\u4e00\u65e6\u53c2\u6570\u4e0d\u5408\u7406\u5bfc\u81f4\u9891\u7e41\u7684 Stream Load\uff0c\u4fbf\u4f1a\u5f15\u53d1 Compaction \u4e0d\u53ca\u65f6\uff0c\u4ece\u800c\u5bfc\u81f4 version \u8fc7\u591a\u7684\u9519\u8bef(-235)\uff1b\u5176\u6b21\uff0c\u5f53\u6570\u636e\u8fc7\u591a\u65f6\uff0c\u4e3a\u4e86\u51cf\u5c11 Stream Load \u7684\u5199\u5165\u65f6\u673a\uff0cbatch.size \u8fc7\u5927\u7684\u8bbe\u7f6e\u8fd8\u53ef\u80fd\u4f1a\u5f15\u53d1 Flink \u4efb\u52a1\u7684 OOM\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5f15\u5165\u4e86\u6d41\u5f0f\u5199\u5165")," ",(0,r.kt)("strong",{parentName:"p"},"\uff1a")," ",(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b4b7364deb34a1398c496d10890a249~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Flink \u4efb\u52a1\u542f\u52a8\u540e\uff0c\u4f1a\u5f02\u6b65\u53d1\u8d77\u4e00\u4e2a Stream Load \u7684 Http \u8bf7\u6c42\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u6536\u5230\u5b9e\u65f6\u6570\u636e\u540e\uff0c\u901a\u8fc7 Http \u7684\u5206\u5757\u4f20\u8f93\u7f16\u7801(Chunked transfer encoding)\u673a\u5236\u6301\u7eed\u5411 Doris \u4f20\u8f93\u6570\u636e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 Checkpoint \u65f6\u7ed3\u675f Http \u8bf7\u6c42\uff0c\u5b8c\u6210\u672c\u6b21 Stream Load \u5199\u5165\uff0c\u540c\u65f6\u5f02\u6b65\u53d1\u8d77\u4e0b\u4e00\u6b21 Stream Load \u7684\u8bf7\u6c42\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7ee7\u7eed\u63a5\u6536\u5b9e\u65f6\u6570\u636e\uff0c\u540e\u7eed\u6d41\u7a0b\u540c\u4e0a\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7531\u4e8e\u91c7\u7528 Chunked \u673a\u5236\u4f20\u8f93\u6570\u636e\uff0c\u5c31\u907f\u514d\u4e86\u6512\u6279\u5bf9\u5185\u5b58\u7684\u538b\u529b\uff0c\u540c\u65f6\u5c06\u5199\u5165\u7684\u65f6\u673a\u548c Checkpoint \u7ed1\u5b9a\u8d77\u6765\uff0c\u4f7f\u5f97 Stream Load \u7684\u65f6\u673a\u53ef\u63a7\uff0c\u5e76\u4e14\u4e3a\u4e0b\u9762\u7684 Exactly-Once \u8bed\u4e49\u63d0\u4f9b\u4e86\u57fa\u7840\u3002")),(0,r.kt)("h2",{id:"exactly-once"},"Exactly-Once"),(0,r.kt)("p",null,"Exactly-Once \u8bed\u4e49\u662f\u6307\u5373\u4f7f\u5728\u673a\u5668\u6216\u5e94\u7528\u51fa\u73b0\u6545\u969c\u7684\u60c5\u51b5\u4e0b\uff0c\u4e5f\u4e0d\u4f1a\u91cd\u590d\u5904\u7406\u6570\u636e\u6216\u8005\u4e22\u5931\u6570\u636e\u3002Flink \u5f88\u65e9\u5c31\u652f\u6301 End-to-End \u7684 Exactly-Once \u573a\u666f\uff0c\u4e3b\u8981\u662f\u901a\u8fc7\u4e24\u9636\u6bb5\u63d0\u4ea4\u534f\u8bae\u6765\u5b9e\u73b0 Sink \u7b97\u5b50\u7684 Exactly-Once \u8bed\u4e49\u3002\u5728 Flink \u4e24\u9636\u6bb5\u63d0\u4ea4\u7684\u57fa\u7840\u4e0a\uff0c\u540c\u65f6\u501f\u52a9 Doris 1.0 \u7684 Stream Load \u4e24\u9636\u6bb5\u63d0\u4ea4\uff0c",(0,r.kt)("strong",{parentName:"p"},"Flink Doris Connector \u5b9e\u73b0\u4e86 Exactly Once \u8bed\u4e49\uff0c\u5177\u4f53\u539f\u7406\u5982\u4e0b\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Flink \u4efb\u52a1\u5728\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4f1a\u53d1\u8d77\u4e00\u4e2a Stream Load \u7684 PreCommit \u8bf7\u6c42\uff0c\u6b64\u65f6\u4f1a\u5148\u5f00\u542f\u4e00\u4e2a\u4e8b\u52a1\uff0c\u540c\u65f6\u4f1a\u901a\u8fc7 Http \u7684 Chunked \u673a\u5236\u5c06\u6570\u636e\u6301\u7eed\u53d1\u9001\u5230 Doris\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b2f143faf784500a3a8ba34063d6c2e~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728 Checkpoint \u65f6\uff0c\u7ed3\u675f\u6570\u636e\u5199\u5165\uff0c\u540c\u65f6\u5b8c\u6210 Http \u8bf7\u6c42\uff0c\u5e76\u4e14\u5c06\u4e8b\u52a1\u72b6\u6001\u8bbe\u7f6e\u4e3a\u9884\u63d0\u4ea4(PreCommitted)\uff0c\u6b64\u65f6\u6570\u636e\u5df2\u7ecf\u5199\u5165 BE\uff0c\u5bf9\u7528\u6237\u4e0d\u53ef\u89c1\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7e1d4f76a824c9a8f473e2e266defc4~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Checkpoint \u5b8c\u6210\u540e\uff0c\u53d1\u8d77 Commit \u8bf7\u6c42\uff0c\u5e76\u4e14\u5c06\u4e8b\u52a1\u72b6\u6001\u8bbe\u7f6e\u4e3a\u63d0\u4ea4(Committed)\uff0c\u5b8c\u6210\u540e\u6570\u636e\u5bf9\u7528\u6237\u53ef\u89c1\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1215aaa4dc3e44de86cdd4680ac30b00~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Flink \u5e94\u7528\u610f\u5916\u6302\u6389\u540e\uff0c\u4ece Checkpoint \u91cd\u542f\u65f6\uff0c\u82e5\u4e0a\u6b21\u4e8b\u52a1\u4e3a\u9884\u63d0\u4ea4(PreCommitted)\u72b6\u6001\uff0c\u5219\u4f1a\u53d1\u8d77\u56de\u6eda\u8bf7\u6c42\uff0c\u5e76\u4e14\u5c06\u4e8b\u52a1\u72b6\u6001\u8bbe\u7f6e\u4e3a Aborted\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u57fa\u4e8e\u6b64\uff0c\u53ef\u4ee5\u501f\u52a9 Flink Doris Connector \u5b9e\u73b0\u6570\u636e\u5b9e\u65f6\u5165\u5e93\u65f6\u6570\u636e\u4e0d\u4e22\u4e0d\u91cd\u3002")),(0,r.kt)("h2",{id:"\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65"},"\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65"),(0,r.kt)("p",null,"\u9ad8\u5e76\u53d1\u5199\u5165\u573a\u666f\u4e0b\u7684\u7aef\u5230\u7aef\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65\u4ee5\u53ca\u6570\u636e\u7684\u5b9e\u65f6\u53ef\u89c1\u80fd\u529b\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981 Doris \u5177\u5907\u5982\u4e0b\u51e0\u65b9\u9762\u7684\u80fd\u529b\uff1a")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u52a1\u5904\u7406\u80fd\u529b")),(0,r.kt)("p",null,"Flink \u5b9e\u65f6\u5199\u5165\u4ee5 Stream Load 2PC \u7684\u65b9\u5f0f\u4e0e Doris \u8fdb\u884c\u4ea4\u4e92\uff0c\u9700\u8981 Doris \u5177\u5907\u5bf9\u5e94\u7684\u4e8b\u52a1\u5904\u7406\u80fd\u529b\uff0c\u4fdd\u969c\u4e8b\u52a1\u57fa\u672c\u7684 ACID \u7279\u6027\uff0c\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u652f\u6491 Flink \u79d2\u7ea7\u522b\u7684\u6570\u636e\u540c\u6b65\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u7248\u672c\u7684\u5feb\u901f\u805a\u5408\u80fd\u529b"},"\u6570\u636e\u7248\u672c\u7684\u5feb\u901f\u805a\u5408\u80fd\u529b"),(0,r.kt)("p",null,"Doris \u91cc\u9762\u4e00\u6b21\u5bfc\u5165\u4f1a\u4ea7\u751f\u4e00\u4e2a\u6570\u636e\u7248\u672c\uff0c\u5728\u9ad8\u5e76\u53d1\u5199\u5165\u573a\u666f\u4e0b\u5fc5\u7136\u5e26\u6765\u7684\u4e00\u4e2a\u5f71\u54cd\u662f\u6570\u636e\u7248\u672c\u8fc7\u591a\uff0c\u4e14\u5355\u6b21\u5bfc\u5165\u7684\u6570\u636e\u91cf\u4e0d\u4f1a\u592a\u5927\u3002\u6301\u7eed\u7684\u9ad8\u5e76\u53d1\u5c0f\u6587\u4ef6\u5199\u5165\u573a\u666f\u5bf9 Doris \u5e76\u4e0d\u53cb\u597d\uff0c\u6781\u5176\u8003\u9a8c Doris \u6570\u636e\u5408\u5e76\u7684\u5b9e\u65f6\u6027\u4ee5\u53ca\u6027\u80fd\uff0c\u8fdb\u800c\u4f1a\u5f71\u54cd\u5230\u67e5\u8be2\u7684\u6027\u80fd\u3002",(0,r.kt)("strong",{parentName:"p"},"Doris \u5728 1.1 \u4e2d\u5927\u5e45\u589e\u5f3a\u4e86\u6570\u636e Compaction \u80fd\u529b\uff0c\u5bf9\u4e8e\u65b0\u589e\u6570\u636e\u80fd\u591f\u5feb\u901f\u5b8c\u6210\u805a\u5408\uff0c\u907f\u514d\u5206\u7247\u6570\u636e\u4e2d\u7684\u7248\u672c\u8fc7\u591a\u5bfc\u81f4\u7684 -235 \u9519\u8bef\u4ee5\u53ca\u5e26\u6765\u7684\u67e5\u8be2\u6548\u7387\u95ee\u9898\u3002")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9996\u5148"),"\uff0c\u5728 Doris 1.1 \u7248\u672c\u4e2d\uff0c\u5f15\u5165\u4e86 QuickCompaction\uff0c\u589e\u52a0\u4e86\u4e3b\u52a8\u89e6\u53d1\u5f0f\u7684 Compaction \u68c0\u67e5\uff0c\u5728\u6570\u636e\u7248\u672c\u589e\u52a0\u7684\u65f6\u5019\u4e3b\u52a8\u89e6\u53d1 Compaction\u3002\u540c\u65f6\u901a\u8fc7\u63d0\u5347\u5206\u7247\u5143\u4fe1\u606f\u626b\u63cf\u7684\u80fd\u529b\uff0c\u5feb\u901f\u7684\u53d1\u73b0\u6570\u636e\u7248\u672c\u591a\u7684\u5206\u7247\uff0c\u89e6\u53d1 Compaction\u3002\u901a\u8fc7\u4e3b\u52a8\u5f0f\u89e6\u53d1\u52a0\u88ab\u52a8\u5f0f\u626b\u63cf\u7684\u65b9\u5f0f\uff0c\u5f7b\u5e95\u89e3\u51b3\u6570\u636e\u5408\u5e76\u7684\u5b9e\u65f6\u6027\u95ee\u9898\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u540c\u65f6"),"\uff0c\u9488\u5bf9\u9ad8\u9891\u7684\u5c0f\u6587\u4ef6 Cumulative Compaction\uff0c\u5b9e\u73b0\u4e86 Compaction \u4efb\u52a1\u7684\u8c03\u5ea6\u9694\u79bb\uff0c\u9632\u6b62\u91cd\u91cf\u7ea7\u7684 Base Compaction \u5bf9\u65b0\u589e\u6570\u636e\u7684\u5408\u5e76\u9020\u6210\u5f71\u54cd\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6700\u540e"),"\uff0c\u9488\u5bf9\u5c0f\u6587\u4ef6\u5408\u5e76\uff0c\u4f18\u5316\u4e86\u5c0f\u6587\u4ef6\u5408\u5e76\u7684\u7b56\u7565\uff0c\u91c7\u7528\u68af\u5ea6\u5408\u5e76\u7684\u65b9\u5f0f\uff0c\u6bcf\u6b21\u53c2\u4e0e\u5408\u5e76\u7684\u6587\u4ef6\u90fd\u5c5e\u4e8e\u540c\u4e00\u4e2a\u6570\u636e\u91cf\u7ea7\uff0c\u9632\u6b62\u5927\u5c0f\u5dee\u522b\u5f88\u5927\u7684\u7248\u672c\u8fdb\u884c\u5408\u5e76\uff0c\u9010\u6e10\u6709\u5c42\u6b21\u7684\u5408\u5e76\uff0c\u51cf\u5c11\u5355\u4e2a\u6587\u4ef6\u53c2\u4e0e\u5408\u5e76\u7684\u6b21\u6570\uff0c\u80fd\u591f\u5927\u5e45\u7684\u8282\u7701\u7cfb\u7edf\u7684 CPU \u6d88\u8017\u3002",(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fee6ce47ed6d4c21a34ca35c3a3ad4df~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Doris 1.1 \u5bf9\u9ad8\u5e76\u53d1\u5bfc\u5165\u3001\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65\u3001\u6570\u636e\u5b9e\u65f6\u53ef\u89c1\u7b49\u573a\u666f\u90fd\u505a\u4e86\u9488\u5bf9\u6027\u4f18\u5316\uff0c\u5927\u5927\u589e\u52a0\u4e86 Flink + Doris \u7cfb\u7edf\u7684\u6613\u7528\u6027\u4ee5\u53ca\u7a33\u5b9a\u6027\uff0c\u8282\u7701\u4e86\u96c6\u7fa4\u6574\u4f53\u8d44\u6e90\u3002")),(0,r.kt)("h1",{id:"\u6548\u679c"},"\u6548\u679c"),(0,r.kt)("h2",{id:"\u901a\u7528-flink-\u9ad8\u5e76\u53d1\u573a\u666f"},"\u901a\u7528 Flink \u9ad8\u5e76\u53d1\u573a\u666f"),(0,r.kt)("p",null,"\u5728\u8c03\u7814\u7684\u901a\u7528\u573a\u666f\u4e2d\uff0c\u4f7f\u7528 Flink \u540c\u6b65\u4e0a\u6e38 Kafka \u4e2d\u7684\u975e\u7ed3\u6784\u5316\u6570\u636e\uff0c\u7ecf\u8fc7 ETL \u540e\u4f7f\u7528 Flink Doris Connector \u5c06\u6570\u636e\u5b9e\u65f6\u5199\u5165 Doris \u4e2d\u3002\u8fd9\u91cc\u5ba2\u6237\u573a\u666f\u6781\u5176\u4e25\u82db\uff0c\u4e0a\u6e38\u7ef4\u6301\u4ee5\u6bcf\u79d2 10w \u7684\u8d85\u9ad8\u9891\u7387\u5199\u5165\uff0c\u9700\u8981\u6570\u636e\u80fd\u591f\u5728 5s \u5185\u5b8c\u6210\u4e0a\u4e0b\u6e38\u540c\u6b65\uff0c\u5b9e\u73b0\u79d2\u7ea7\u522b\u7684\u6570\u636e\u53ef\u89c1\u3002\u8fd9\u91cc Flink \u914d\u7f6e\u4e3a 20 \u5e76\u53d1\uff0cCheckpoint \u95f4\u9694 5s\uff0cDoris 1.1 \u7684\u8868\u73b0\u76f8\u5f53\u4f18\u5f02\u3002",(0,r.kt)("strong",{parentName:"p"},"\u5177\u4f53\u4f53\u73b0\u5728\u5982\u4e0b\u51e0\u4e2a\u65b9\u9762\uff1a")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compaction \u5b9e\u65f6\u6027")),(0,r.kt)("p",null,"\u6570\u636e\u80fd\u5feb\u901f\u5408\u5e76\uff0cTablet \u6570\u636e\u7248\u672c\u4e2a\u6570\u7ef4\u6301\u5728 50 \u4ee5\u4e0b\uff0c Compaction Score \u7a33\u5b9a\u3002\u76f8\u6bd4\u4e8e\u4e4b\u524d\u9ad8\u5e76\u53d1\u5bfc\u5165\u9891\u51fa\u7684 -235 \u95ee\u9898\uff0c",(0,r.kt)("strong",{parentName:"p"},"Compaction \u5408\u5e76\u6548\u7387\u6709 10+ \u500d\u63d0\u5347"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f622b2f235ae4bad8b2b38fd9d1f0c57~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CPU \u8d44\u6e90\u6d88\u8017")),(0,r.kt)("p",null,"Doris 1.1 \u9488\u5bf9\u5c0f\u6587\u4ef6\u7684 Compaction \u8fdb\u884c\u4e86\u7b56\u7565\u4f18\u5316\uff0c\u5728\u4e0a\u8ff0\u9ad8\u5e76\u53d1\u5bfc\u5165\u573a\u666f\uff0c",(0,r.kt)("strong",{parentName:"p"},"CPU \u8d44\u6e90\u6d88\u8017\u4e0b\u964d 25%\u3002")," ",(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec2732a96bf047e283465b04452c063a~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"QPS \u67e5\u8be2\u5ef6\u8fdf\u7a33\u5b9a")),(0,r.kt)("p",null,"\u901a\u8fc7\u964d\u4f4e CPU \u4f7f\u7528\u7387\uff0c\u51cf\u5c11\u6570\u636e\u7248\u672c\u7684\u4e2a\u6570\uff0c\u63d0\u5347\u4e86\u6570\u636e\u6574\u4f53\u6709\u5e8f\u6027\uff0c\u4ece\u800c\u51cf\u5c11\u4e86 SQL \u67e5\u8be2\u7684\u5ef6\u8fdf\u3002",(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f49f45e950045c0b7913dd167c8d220~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.kt)("h2",{id:"\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65\u573a\u666f\u6781\u9650\u5927\u538b\u529b"},"\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65\u573a\u666f\uff08\u6781\u9650\u5927\u538b\u529b\uff09"),(0,r.kt)("p",null,"\u5355 BE \u5355 Tablet\uff0c\u5ba2\u6237\u7aef 30 \u5e76\u53d1\u6781\u9650 Stream Load \u538b\u6d4b\uff0c\u6570\u636e\u5728\u5b9e\u65f6\u6027<1s\uff0cCompaction Score \u4f18\u5316\u524d\u540e\u5bf9\u6bd4"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/209083a2f22846688f02454e306e0053~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.kt)("h1",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,r.kt)("h2",{id:"\u6570\u636e\u5b9e\u65f6\u53ef\u89c1\u573a\u666f"},"\u6570\u636e\u5b9e\u65f6\u53ef\u89c1\u573a\u666f"),(0,r.kt)("p",null,"\u5bf9\u5ef6\u8fdf\u8981\u6c42\u7279\u522b\u4e25\u683c\u7684\u573a\u666f\uff0c\u6bd4\u5982\u79d2\u7ea7\u522b\u6570\u636e\u540c\u6b65\uff0c\u901a\u5e38\u610f\u5473\u7740\u5355\u6b21\u5bfc\u5165\u6587\u4ef6\u8f83\u5c0f\uff0c\u6b64\u65f6\u5efa\u8bae\u8c03\u5c0f cumulative_size_based_promotion_min_size_mbytes\uff0c\u5355\u4f4d\u662f MB\uff0c\u9ed8\u8ba4 64\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u6210 8\uff0c\u80fd\u591f\u5f88\u5927\u7a0b\u5ea6\u63d0\u5347 Compaction \u7684\u5b9e\u65f6\u6027\u3002"),(0,r.kt)("h2",{id:"\u9ad8\u5e76\u53d1\u573a\u666f"},"\u9ad8\u5e76\u53d1\u573a\u666f"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u9ad8\u5e76\u53d1\u7684\u5199\u5165\u573a\u666f\uff0c\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0 Checkpoint \u7684\u95f4\u9694\u6765\u51cf\u5c11 Stream Load \u7684\u9891\u7387\uff0c\u6bd4\u5982 Checkpoint \u53ef\u4ee5\u8bbe\u7f6e\u4e3a 5-10s\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u589e\u52a0 Flink \u4efb\u52a1\u7684\u541e\u5410\uff0c\u4e5f\u53ef\u4ee5\u51cf\u5c11\u5c0f\u6587\u4ef6\u7684\u4ea7\u751f\uff0c\u907f\u514d\u7ed9 Compaction \u9020\u6210\u66f4\u591a\u538b\u529b\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u5bf9\u6570\u636e\u5b9e\u65f6\u6027\u8981\u6c42\u4e0d\u9ad8\u7684\u573a\u666f\uff0c\u6bd4\u5982\u5206\u949f\u7ea7\u522b\u7684\u6570\u636e\u540c\u6b65\uff0c\u53ef\u4ee5\u589e\u52a0 Checkpoint \u7684\u95f4\u9694\uff0c\u6bd4\u5982 5-10 \u5206\u949f\uff0c\u6b64\u65f6 Flink Doris Connector \u4f9d\u7136\u80fd\u591f\u901a\u8fc7\u4e24\u9636\u6bb5\u63d0\u4ea4 +checkpoint \u673a\u5236\u6765\u4fdd\u8bc1\u6570\u636e\u7684\u5b8c\u6574\u6027\u3002"),(0,r.kt)("h1",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u65f6 Schema Change")),(0,r.kt)("p",null,"\u76ee\u524d\u901a\u8fc7 Flink CDC \u5b9e\u65f6\u63a5\u5165\u6570\u636e\u65f6\uff0c\u5f53\u4e0a\u6e38\u4e1a\u52a1\u8868\u8fdb\u884c Schema Change \u64cd\u4f5c\u65f6\uff0c\u5fc5\u987b\u5148\u624b\u52a8\u4fee\u6539 Doris \u4e2d\u7684 Schema \u548c Flink \u4efb\u52a1\u4e2d\u7684 Schema\uff0c\u6700\u540e\u518d\u91cd\u542f\u4efb\u52a1\uff0c\u65b0\u7684 Schema \u7684\u6570\u636e\u624d\u53ef\u4ee5\u540c\u6b65\u8fc7\u6765\u3002\u8fd9\u6837\u4f7f\u7528\u65b9\u5f0f\u9700\u8981\u4eba\u4e3a\u7684\u4ecb\u5165\uff0c\u4f1a\u7ed9\u7528\u6237\u5e26\u6765\u6781\u5927\u7684\u8fd0\u7ef4\u8d1f\u62c5\u3002",(0,r.kt)("strong",{parentName:"p"},"\u540e\u7eed\u4f1a\u9488\u5bf9 CDC \u573a\u666f\u505a\u5230\u652f\u6301 Schema \u5b9e\u65f6\u53d8\u66f4\uff0c\u4e0a\u6e38\u7684 Schema Change \u5b9e\u65f6\u540c\u6b65\u5230\u4e0b\u6e38\uff0c\u5168\u9762\u63d0\u5347 Schema Change \u7684\u6548\u7387\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Doris \u591a\u8868\u5199\u5165")),(0,r.kt)("p",null,"\u76ee\u524d Doris Sink \u7b97\u5b50\u4ec5\u652f\u6301\u540c\u6b65\u5355\u5f20\u8868\uff0c\u6240\u4ee5\u5bf9\u4e8e\u6574\u5e93\u540c\u6b65\u7684\u64cd\u4f5c\uff0c\u9700\u8981\u624b\u52a8\u5728 Flink \u5c42\u9762\u8fdb\u884c\u5206\u6d41\uff0c\u5199\u5230\u591a\u4e2a Doris Sink \u4e2d\uff0c\u8fd9\u65e0\u7591\u589e\u52a0\u4e86\u5f00\u53d1\u8005\u7684\u96be\u5ea6\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5728\u540e\u7eed\u7248\u672c\u4e2d\u6211\u4eec\u4e5f\u5c06\u652f\u6301\u5355\u4e2a Doris Sink \u540c\u6b65\u591a\u5f20\u8868\uff0c\u8fd9\u6837\u5c31\u5927\u5927\u7684\u7b80\u5316\u4e86\u7528\u6237\u7684\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u81ea\u9002\u5e94\u7684 Compaction \u53c2\u6570\u8c03\u4f18")),(0,r.kt)("p",null,"\u76ee\u524d Compaction \u7b56\u7565\u53c2\u6570\u8f83\u591a\uff0c\u5728\u5927\u90e8\u5206\u901a\u7528\u573a\u666f\u80fd\u53d1\u6325\u8f83\u597d\u7684\u6548\u679c\uff0c\u4f46\u662f\u5728\u4e00\u4e9b\u7279\u6b8a\u573a\u666f\u4e0b\u5e76\u4e0d\u80fd\u9ad8\u6548\u7684\u53d1\u6325\u4f5c\u7528\u3002",(0,r.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5c06\u5728\u540e\u7eed\u7248\u672c\u4e2d\u6301\u7eed\u4f18\u5316\uff0c\u9488\u5bf9\u4e0d\u540c\u7684\u573a\u666f\uff0c\u8fdb\u884c\u81ea\u9002\u5e94\u7684 Compaction \u8c03\u4f18\uff0c\u5728\u5404\u7c7b\u573a\u666f\u4e0b\u63d0\u9ad8\u6570\u636e\u5408\u5e76\u6548\u7387\uff0c\u63d0\u5347\u5b9e\u65f6\u6027\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5355\u526f\u672c Compaction")),(0,r.kt)("p",null,"\u76ee\u524d\u7684 Compaction \u7b56\u7565\u662f\u5404 BE \u5355\u72ec\u8fdb\u884c\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5728\u540e\u7eed\u7248\u672c\u4e2d\u6211\u4eec\u5c06\u5b9e\u73b0\u5355\u526f\u672c Compaction\uff0c\u901a\u8fc7\u514b\u9686\u5feb\u7167\u7684\u65b9\u5f0f\u5b9e\u73b0 Compaction \u4efb\u52a1\uff0c\u51cf\u5c11\u96c6\u7fa4 2/3 \u7684 Compaction \u4efb\u52a1\uff0c\u964d\u4f4e\u7cfb\u7edf\u7684\u8d1f\u8f7d\uff0c\u628a\u66f4\u591a\u7684\u7cfb\u7edf\u8d44\u6e90\u7559\u7ed9\u7528\u6237\u4fa7\u3002")))}k.isMDXComponent=!0}}]);