"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[65666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"Release 1.1.0",language:"zh-CN"},o=void 0,c={unversionedId:"releasenotes/release-1.1.1",id:"releasenotes/release-1.1.1",title:"Release 1.1.0",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/releasenotes/release-1.1.1.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.1.1",permalink:"/zh-CN/docs/releasenotes/release-1.1.1",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 1.1.0",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 1.1.0",permalink:"/zh-CN/docs/releasenotes/release-1.1.0"}},i={},p=[{value:"\u65b0\u589e\u529f\u80fd",id:"\u65b0\u589e\u529f\u80fd",level:2},{value:"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u652f\u6301 ODBC Sink\u3002",id:"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u652f\u6301-odbc-sink",level:3},{value:"\u589e\u52a0\u7b80\u6613\u7248 MemTracker",id:"\u589e\u52a0\u7b80\u6613\u7248-memtracker",level:3},{value:"\u6539\u8fdb",id:"\u6539\u8fdb",level:2},{value:"\u652f\u6301\u5728 Page Cache \u4e2d\u7f13\u5b58\u89e3\u538b\u540e\u6570\u636e\u3002",id:"\u652f\u6301\u5728-page-cache-\u4e2d\u7f13\u5b58\u89e3\u538b\u540e\u6570\u636e",level:3},{value:"Bug \u4fee\u590d",id:"bug-\u4fee\u590d",level:2},{value:"\u4fee\u590d\u65e0\u6cd5\u4ece 1.0 \u7248\u672c\u8fdb\u884c\u6eda\u52a8\u5347\u7ea7\u7684\u95ee\u9898\u3002",id:"\u4fee\u590d\u65e0\u6cd5\u4ece-10-\u7248\u672c\u8fdb\u884c\u6eda\u52a8\u5347\u7ea7\u7684\u95ee\u9898",level:3},{value:"\u4fee\u590d\u67d0\u4e9b\u67e5\u8be2\u4e0d\u80fd\u56de\u9000\u5230\u975e\u5411\u91cf\u5316\u5f15\u64ce\u7684\u95ee\u9898\uff0c\u5e76\u5bfc\u81f4 BE Core\u3002",id:"\u4fee\u590d\u67d0\u4e9b\u67e5\u8be2\u4e0d\u80fd\u56de\u9000\u5230\u975e\u5411\u91cf\u5316\u5f15\u64ce\u7684\u95ee\u9898\u5e76\u5bfc\u81f4-be-core",level:3},{value:"Compaction \u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u5bfc\u81f4 -235 \u9519\u8bef\u3002",id:"compaction-\u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c\u5bfc\u81f4--235-\u9519\u8bef",level:3},{value:"\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86\u4e00\u4e9b\u5206\u6bb5\u6545\u969c\u3002",id:"\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86\u4e00\u4e9b\u5206\u6bb5\u6545\u969c",level:3}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65b0\u589e\u529f\u80fd"},"\u65b0\u589e\u529f\u80fd"),(0,a.kt)("h3",{id:"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u652f\u6301-odbc-sink"},"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u652f\u6301 ODBC Sink\u3002"),(0,a.kt)("p",null,"\u5728 1.1.0 \u7248\u672c\u7684\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u4e2d ODBC Sink \u662f\u4e0d\u652f\u6301\u7684\uff0c\u800c\u8fd9\u4e00\u529f\u80fd\u5728\u4e4b\u524d\u7248\u672c\u7684\u884c\u5b58\u5f15\u64ce\u662f\u652f\u6301\u7684\uff0c\u56e0\u6b64\u5728 1.1.1 \u7248\u672c\u4e2d\u6211\u4eec\u91cd\u65b0\u5b8c\u5584\u4e86\u8fd9\u4e00\u529f\u80fd\u3002"),(0,a.kt)("h3",{id:"\u589e\u52a0\u7b80\u6613\u7248-memtracker"},"\u589e\u52a0\u7b80\u6613\u7248 MemTracker"),(0,a.kt)("p",null,"MemTracker \u662f\u4e00\u4e2a\u7528\u4e8e\u5206\u6790\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u7684\u7edf\u8ba1\u5de5\u5177\uff0c\u5728 1.1.0 \u7248\u672c\u7684\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u4e2d\uff0c\u7531\u4e8e BE \u4fa7\u6ca1\u6709 MemTracker\uff0c\u53ef\u80fd\u51fa\u73b0\u56e0\u5185\u5b58\u5931\u63a7\u5bfc\u81f4\u7684 OOM \u95ee\u9898\u3002\u5728 1.1.1 \u7248\u672c\u4e2d\uff0cBE \u4fa7\u589e\u52a0\u4e86\u4e00\u4e2a\u7b80\u6613\u7248 MemTracker\uff0c\u53ef\u4ee5\u5e2e\u52a9\u63a7\u5236\u5185\u5b58\uff0c\u5e76\u5728\u5185\u5b58\u8d85\u51fa\u65f6\u53d6\u6d88\u67e5\u8be2\u3002"),(0,a.kt)("p",null,"\u5b8c\u6574\u7248 MemTracker \u5c06\u5728 1.1.2 \u7248\u672c\u4e2d\u6b63\u5f0f\u53d1\u5e03\u3002"),(0,a.kt)("h2",{id:"\u6539\u8fdb"},"\u6539\u8fdb"),(0,a.kt)("h3",{id:"\u652f\u6301\u5728-page-cache-\u4e2d\u7f13\u5b58\u89e3\u538b\u540e\u6570\u636e"},"\u652f\u6301\u5728 Page Cache \u4e2d\u7f13\u5b58\u89e3\u538b\u540e\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u5728 Page Cache \u4e2d\u6709\u4e9b\u6570\u636e\u662f\u7528 bitshuffle \u7f16\u7801\u65b9\u5f0f\u538b\u7f29\u7684\uff0c\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u9700\u8981\u82b1\u8d39\u5927\u91cf\u7684\u65f6\u95f4\u6765\u89e3\u538b\u3002\u5728 1.1.1 \u7248\u672c\u4e2d\uff0cDoris \u5c06\u7f13\u5b58\u89e3\u538b\u7531 bitshuffle \u7f16\u7801\u7684\u6570\u636e\u4ee5\u52a0\u901f\u67e5\u8be2\uff0c\u6211\u4eec\u53d1\u73b0\u5728 ssb-flat \u7684\u4e00\u4e9b\u67e5\u8be2\u4e2d\uff0c\u53ef\u4ee5\u51cf\u5c11 30% \u7684\u5ef6\u65f6\u3002"),(0,a.kt)("h2",{id:"bug-\u4fee\u590d"},"Bug \u4fee\u590d"),(0,a.kt)("h3",{id:"\u4fee\u590d\u65e0\u6cd5\u4ece-10-\u7248\u672c\u8fdb\u884c\u6eda\u52a8\u5347\u7ea7\u7684\u95ee\u9898"},"\u4fee\u590d\u65e0\u6cd5\u4ece 1.0 \u7248\u672c\u8fdb\u884c\u6eda\u52a8\u5347\u7ea7\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u662f\u5728 1.1.0 \u7248\u672c\u4e2d\u51fa\u73b0\u7684\uff0c\u5f53\u5347\u7ea7 BE \u800c\u4e0d\u5347\u7ea7 FE \u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 BE Core\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10833"},"#10833")," \u6765\u4fee\u590d\u5b83\u3002"),(0,a.kt)("h3",{id:"\u4fee\u590d\u67d0\u4e9b\u67e5\u8be2\u4e0d\u80fd\u56de\u9000\u5230\u975e\u5411\u91cf\u5316\u5f15\u64ce\u7684\u95ee\u9898\u5e76\u5bfc\u81f4-be-core"},"\u4fee\u590d\u67d0\u4e9b\u67e5\u8be2\u4e0d\u80fd\u56de\u9000\u5230\u975e\u5411\u91cf\u5316\u5f15\u64ce\u7684\u95ee\u9898\uff0c\u5e76\u5bfc\u81f4 BE Core\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\uff0c\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u4e0d\u80fd\u5904\u7406\u6240\u6709\u7684 SQL \u67e5\u8be2\uff0c\u4e00\u4e9b\u67e5\u8be2\uff08\u5982 left outer join\uff09\u5c06\u4f7f\u7528\u975e\u5411\u91cf\u5316\u5f15\u64ce\u6765\u8fd0\u884c\u3002\u4f46\u90e8\u5206\u573a\u666f\u5728 1.1.0 \u7248\u672c\u4e2d\u672a\u88ab\u8986\u76d6\u5230\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4 BE \u6302\u6389\u3002"),(0,a.kt)("h3",{id:"compaction-\u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c\u5bfc\u81f4--235-\u9519\u8bef"},"Compaction \u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u5bfc\u81f4 -235 \u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u5728 Unique Key \u6a21\u578b\u4e2d\uff0c\u5f53\u4e00\u4e2a Rowset \u6709\u591a\u4e2a Segment \u65f6\uff0c\u5728\u505a Compaction \u8fc7\u7a0b\u4e2d\u7531\u4e8e\u6ca1\u6709\u6b63\u786e\u7684\u7edf\u8ba1\u884c\u6570\uff0c\u4f1a\u5bfc\u81f4Compaction \u5931\u8d25\u5e76\u4e14\u4ea7\u751f Tablet \u7248\u672c\u8fc7\u591a\u800c\u5bfc\u81f4\u7684 -235 \u9519\u8bef\u3002"),(0,a.kt)("h3",{id:"\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86\u4e00\u4e9b\u5206\u6bb5\u6545\u969c"},"\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86\u4e00\u4e9b\u5206\u6bb5\u6545\u969c\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10961"},"#10961")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10954"},"#10954")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10962"},"#10962")))}s.isMDXComponent=!0}}]);