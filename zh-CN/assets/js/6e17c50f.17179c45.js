"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[20538],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},60162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={title:"RETENTION",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/retention",id:"version-dev/sql-manual/sql-functions/aggregate-functions/retention",title:"RETENTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/aggregate-functions/retention.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/retention",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/retention",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/retention.md",tags:[],version:"dev",frontMatter:{title:"RETENTION",language:"zh-CN"},sidebar:"docs",previous:{title:"VARIANCE,VAR_POP,VARIANCE_POP",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/variance"},next:{title:"to_bitmap",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/to_bitmap"}},u={},s=[{value:"RETENTION",id:"retention",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:5},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"retention"},"RETENTION"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"retention(event1, event2, ... , eventN);")),(0,i.kt)("p",null,"\u7559\u5b58\u51fd\u6570\u5c06\u4e00\u7ec4\u6761\u4ef6\u4f5c\u4e3a\u53c2\u6570\uff0c\u7c7b\u578b\u4e3a1\u523032\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u7528\u6765\u8868\u793a\u4e8b\u4ef6\u662f\u5426\u6ee1\u8db3\u7279\u5b9a\u6761\u4ef6\u3002 \u4efb\u4f55\u6761\u4ef6\u90fd\u53ef\u4ee5\u6307\u5b9a\u4e3a\u53c2\u6570."),(0,i.kt)("p",null,"\u9664\u4e86\u7b2c\u4e00\u4e2a\u4ee5\u5916\uff0c\u6761\u4ef6\u6210\u5bf9\u9002\u7528\uff1a\u5982\u679c\u7b2c\u4e00\u4e2a\u548c\u7b2c\u4e8c\u4e2a\u662f\u771f\u7684\uff0c\u7b2c\u4e8c\u4e2a\u7ed3\u679c\u5c06\u662f\u771f\u7684\uff0c\u5982\u679c\u7b2c\u4e00\u4e2a\u548c\u7b2c\u4e09\u4e2a\u662f\u771f\u7684\uff0c\u7b2c\u4e09\u4e2a\u7ed3\u679c\u5c06\u662f\u771f\u7684\uff0c\u7b49\u7b49\u3002"),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"event")," \u2014 \u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u7ed3\u679c\uff081\u62160\uff09\u7684\u8868\u8fbe\u5f0f."),(0,i.kt)("h5",{id:"returned-value"},"Returned value"),(0,i.kt)("p",null,"\u75311\u548c0\u7ec4\u6210\u7684\u6570\u7ec4\u3002"),(0,i.kt)("p",null,"1 \u2014 \u6761\u4ef6\u6ee1\u8db3\u3002"),(0,i.kt)("p",null,"0 \u2014 \u6761\u4ef6\u4e0d\u6ee1\u8db3"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS retention_test;\n\nCREATE TABLE retention_test(\n                `uid` int COMMENT 'user id', \n                `date` datetime COMMENT 'date time' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT into retention_test (uid, date) values (0, '2022-10-12'),\n                                        (0, '2022-10-13'),\n                                        (0, '2022-10-14'),\n                                        (1, '2022-10-12'),\n                                        (1, '2022-10-13'),\n                                        (2, '2022-10-12'); \n\nSELECT * from retention_test;\n\n+------+---------------------+\n| uid  | date                |\n+------+---------------------+\n|    0 | 2022-10-14 00:00:00 |\n|    0 | 2022-10-13 00:00:00 |\n|    0 | 2022-10-12 00:00:00 |\n|    1 | 2022-10-13 00:00:00 |\n|    1 | 2022-10-12 00:00:00 |\n|    2 | 2022-10-12 00:00:00 |\n+------+---------------------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+------+\n| uid  | r    |\n+------+------+\n|    0 | [1]  | \n|    1 | [1]  |\n|    2 | [1]  |\n+------+------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12', date = '2022-10-13')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+--------+\n| uid  | r      |\n+------+--------+\n|    0 | [1, 1] |\n|    1 | [1, 1] |\n|    2 | [1, 0] |\n+------+--------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12', date = '2022-10-13', date = '2022-10-14')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+-----------+\n| uid  | r         |\n+------+-----------+\n|    0 | [1, 1, 1] |\n|    1 | [1, 1, 0] |\n|    2 | [1, 0, 0] |\n+------+-----------+\n\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"RETENTION"))}d.isMDXComponent=!0}}]);