"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[8092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"ADMIN-COPY-TABLET",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET",id:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET",title:"ADMIN-COPY-TABLET",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET",draft:!1,tags:[],version:"current",frontMatter:{title:"ADMIN-COPY-TABLET",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-CLEAN-TRASH",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH"},next:{title:"ADMIN-REPAIR-TABLE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE"}},p={},s=[{value:"ADMIN-COPY-TABLET",id:"admin-copy-tablet",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"admin-copy-tablet"},"ADMIN-COPY-TABLET"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"ADMIN COPY TABLET"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u4e3a\u6307\u5b9a\u7684 tablet \u5236\u4f5c\u5feb\u7167\uff0c\u4e3b\u8981\u7528\u4e8e\u672c\u5730\u52a0\u8f7d tablet \u6765\u590d\u73b0\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN COPY TABLET tablet_id PROPERTIES("xxx");\n')),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u9700\u8981 ROOT \u6743\u9650\u3002"),(0,r.kt)("p",null,"PROPERTIES \u652f\u6301\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"backend_id\uff1a\u6307\u5b9a\u526f\u672c\u6240\u5728\u7684 BE \u8282\u70b9\u7684 id\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u968f\u673a\u9009\u62e9\u4e00\u4e2a\u526f\u672c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"version\uff1a\u6307\u5b9a\u5feb\u7167\u7684\u7248\u672c\u3002\u8be5\u7248\u672c\u9700\u5c0f\u4e8e\u7b49\u4e8e\u526f\u672c\u7684\u6700\u5927\u7248\u672c\u3002\u5982\u4e0d\u6307\u5b9a\uff0c\u5219\u4f7f\u7528\u6700\u5927\u7248\u672c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"expiration_minutes\uff1a\u5feb\u7167\u4fdd\u7559\u65f6\u957f\u3002\u9ed8\u8ba4\u4e3a1\u5c0f\u65f6\u3002\u8d85\u65f6\u540e\u4f1a\u81ea\u52a8\u6e05\u7406\u3002\u5355\u4f4d\u5206\u949f\u3002"))),(0,r.kt)("p",null,"\u7ed3\u679c\u5c55\u793a\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'         TabletId: 10020\n        BackendId: 10003\n               Ip: 192.168.10.1\n             Path: /path/to/be/storage/snapshot/20220830101353.2.3600\nExpirationMinutes: 60\n  CreateTableStmt: CREATE TABLE `tbl1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(k1) BUCKETS 1\nPROPERTIES (\n"replication_num" = "1",\n"version_info" = "2"\n);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TabletId: tablet id"),(0,r.kt)("li",{parentName:"ul"},"BackendId: BE \u8282\u70b9 id"),(0,r.kt)("li",{parentName:"ul"},"Ip: BE \u8282\u70b9 ip"),(0,r.kt)("li",{parentName:"ul"},"Path: \u5feb\u7167\u6240\u5728\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},"ExpirationMinutes: \u5feb\u7167\u8fc7\u671f\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"CreateTableStmt: tablet \u5bf9\u5e94\u7684\u8868\u7684\u5efa\u8868\u8bed\u53e5\u3002\u8be5\u8bed\u53e5\u4e0d\u662f\u539f\u59cb\u7684\u5efa\u8868\u8bed\u53e5\uff0c\u800c\u662f\u7528\u4e8e\u4e4b\u540e\u672c\u5730\u52a0\u8f7d tablet \u7684\u7b80\u5316\u540e\u7684\u5efa\u8868\u8bed\u53e5\u3002")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u6307\u5b9a BE \u8282\u70b9\u4e0a\u7684\u526f\u672c\u505a\u5feb\u7167"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN COPY TABLET 10010 PROPERTIES("backend_id" = "10001");\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u6307\u5b9a BE \u8282\u70b9\u4e0a\u7684\u526f\u672c\uff0c\u505a\u6307\u5b9a\u7248\u672c\u7684\u5feb\u7167"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN COPY TABLET 10010 PROPERTIES("backend_id" = "10001", "version" = "10");\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ADMIN, COPY, TABLET\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);