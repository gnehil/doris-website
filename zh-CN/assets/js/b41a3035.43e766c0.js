"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[75570],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>E});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(a),E=r,d=c["".concat(o,".").concat(E)]||c[E]||u[E]||l;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function E(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},37046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"SHOW ALTER TABLE MATERIALIZED VIEW",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",id:"version-dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",title:"SHOW ALTER TABLE MATERIALIZED VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW.md",tags:[],version:"dev",frontMatter:{title:"SHOW ALTER TABLE MATERIALIZED VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-PARTITION-ID",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-PARTITION-ID"},next:{title:"SHOW-SNAPSHOT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT"}},o={},m=[{value:"SHOW ALTER TABLE MATERIALIZED VIEW",id:"show-alter-table-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"show-alter-table-materialized-view"},"SHOW ALTER TABLE MATERIALIZED VIEW"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"SHOW ALTER TABLE MATERIALIZED VIEW"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u7528\u4e8e\u67e5\u770b\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"../Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW"},"CREATE-MATERIALIZED-VIEW")," \u8bed\u53e5\u63d0\u4ea4\u7684\u521b\u5efa\u7269\u5316\u89c6\u56fe\u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8be5\u8bed\u53e5\u7b49\u540c\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW ALTER TABLE ROLLUP"),";")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE MATERIALIZED VIEW\n[FROM database]\n[WHERE]\n[ORDER BY]\n[LIMIT OFFSET]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"database\uff1a\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u7684\u4f5c\u4e1a\u3002\u5982\u4e0d\u6307\u5b9a\uff0c\u4f7f\u7528\u5f53\u524d\u6570\u636e\u5e93\u3002"),(0,r.kt)("li",{parentName:"ul"},"WHERE\uff1a\u53ef\u4ee5\u5bf9\u7ed3\u679c\u5217\u8fdb\u884c\u7b5b\u9009\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u5bf9\u4ee5\u4e0b\u5217\u8fdb\u884c\u7b5b\u9009\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TableName\uff1a\u4ec5\u652f\u6301\u7b49\u503c\u7b5b\u9009\u3002"),(0,r.kt)("li",{parentName:"ul"},"State\uff1a\u4ec5\u652f\u6301\u7b49\u503c\u7b5b\u9009\u3002"),(0,r.kt)("li",{parentName:"ul"},"Createtime/FinishTime\uff1a\u652f\u6301 =\uff0c>=\uff0c<=\uff0c>\uff0c<\uff0c!="))),(0,r.kt)("li",{parentName:"ul"},"ORDER BY\uff1a\u53ef\u4ee5\u5bf9\u7ed3\u679c\u96c6\u6309\u4efb\u610f\u5217\u8fdb\u884c\u6392\u5e8f\u3002"),(0,r.kt)("li",{parentName:"ul"},"LIMIT\uff1a\u914d\u5408 ORDER BY \u8fdb\u884c\u7ffb\u9875\u67e5\u8be2\u3002")),(0,r.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show alter table materialized view\\G\n*************************** 1. row ***************************\n          JobId: 11001\n      TableName: tbl1\n     CreateTime: 2020-12-23 10:41:00\n     FinishTime: NULL\n  BaseIndexName: tbl1\nRollupIndexName: r1\n       RollupId: 11002\n  TransactionId: 5070\n          State: WAITING_TXN\n            Msg:\n       Progress: NULL\n        Timeout: 86400\n1 row in set (0.00 sec)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"JobId"),"\uff1a\u4f5c\u4e1a\u552f\u4e00ID\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TableName"),"\uff1a\u57fa\u8868\u540d\u79f0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CreateTime/FinishTime"),"\uff1a\u4f5c\u4e1a\u521b\u5efa\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BaseIndexName/RollupIndexName"),"\uff1a\u57fa\u8868\u540d\u79f0\u548c\u7269\u5316\u89c6\u56fe\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"RollupId"),"\uff1a\u7269\u5316\u89c6\u56fe\u7684\u552f\u4e00 ID\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TransactionId"),"\uff1a\u89c1 State \u5b57\u6bb5\u8bf4\u660e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"State"),"\uff1a\u4f5c\u4e1a\u72b6\u6001\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PENDING\uff1a\u4f5c\u4e1a\u51c6\u5907\u4e2d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WAITING_TXN\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u5728\u6b63\u5f0f\u5f00\u59cb\u4ea7\u751f\u7269\u5316\u89c6\u56fe\u6570\u636e\u524d\uff0c\u4f1a\u7b49\u5f85\u5f53\u524d\u8fd9\u4e2a\u8868\u4e0a\u7684\u6b63\u5728\u8fd0\u884c\u7684\u5bfc\u5165\u4e8b\u52a1\u5b8c\u6210\u3002\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionId")," \u5b57\u6bb5\u5c31\u662f\u5f53\u524d\u6b63\u5728\u7b49\u5f85\u7684\u4e8b\u52a1ID\u3002\u5f53\u8fd9\u4e2aID\u4e4b\u524d\u7684\u5bfc\u5165\u90fd\u5b8c\u6210\u540e\uff0c\u5c31\u4f1a\u5b9e\u9645\u5f00\u59cb\u4f5c\u4e1a\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RUNNING\uff1a\u4f5c\u4e1a\u8fd0\u884c\u4e2d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FINISHED\uff1a\u4f5c\u4e1a\u8fd0\u884c\u6210\u529f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CANCELLED\uff1a\u4f5c\u4e1a\u8fd0\u884c\u5931\u8d25\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Msg"),"\uff1a\u9519\u8bef\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Progress"),"\uff1a\u4f5c\u4e1a\u8fdb\u5ea6\u3002\u8fd9\u91cc\u7684\u8fdb\u5ea6\u8868\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5df2\u5b8c\u6210\u7684tablet\u6570\u91cf/\u603btablet\u6570\u91cf"),"\u3002\u521b\u5efa\u7269\u5316\u89c6\u56fe\u662f\u6309 tablet \u7c92\u5ea6\u8fdb\u884c\u7684\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Timeout"),"\uff1a\u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002"))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u6570\u636e\u5e93 example_db \u4e0b\u7684\u7269\u5316\u89c6\u56fe\u4f5c\u4e1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE MATERIALIZED VIEW FROM example_db;\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SHOW, ALTER, TABLE, MATERIALIZED, VIEW\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);