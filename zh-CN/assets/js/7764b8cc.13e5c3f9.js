"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[8966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),m=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||c[d]||a;return n?i.createElement(f,l(l({ref:t},u),{},{components:n})):i.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<a;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var i=n(87462),r=(n(67294),n(3905));const a={title:"unix_timestamp",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/unix_timestamp",id:"version-dev/sql-manual/sql-functions/date-time-functions/unix_timestamp",title:"unix_timestamp",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/date-time-functions/unix_timestamp.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/unix_timestamp",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/unix_timestamp",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/date-time-functions/unix_timestamp.md",tags:[],version:"dev",frontMatter:{title:"unix_timestamp",language:"zh-CN"},sidebar:"docs",previous:{title:"from_unixtime",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/from_unixtime"},next:{title:"utc_timestamp",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/utc_timestamp"}},o={},m=[{value:"unix_timestamp",id:"unix_timestamp",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"unix_timestamp"},"unix_timestamp"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INT UNIX_TIMESTAMP(), UNIX_TIMESTAMP(DATETIME date), UNIX_TIMESTAMP(DATETIME date, STRING fmt),")),(0,r.kt)("p",null,"\u5c06 Date \u6216\u8005 Datetime \u7c7b\u578b\u8f6c\u5316\u4e3a unix \u65f6\u95f4\u6233\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u53c2\u6570\uff0c\u5219\u662f\u5c06\u5f53\u524d\u7684\u65f6\u95f4\u8f6c\u5316\u4e3a\u65f6\u95f4\u6233\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\u9700\u8981\u662f Date \u6216\u8005 Datetime \u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5728 1970-01-01 00:00:00 \u4e4b\u524d\u6216 2038-01-19 03:14:07 \u4e4b\u540e\u7684\u65f6\u95f4\uff0c\u8be5\u51fd\u6570\u5c06\u8fd4\u56de 0\u3002"),(0,r.kt)("p",null,"Format \u7684\u683c\u5f0f\u8bf7\u53c2\u9605 ",(0,r.kt)("inlineCode",{parentName:"p"},"date_format")," \u51fd\u6570\u7684\u683c\u5f0f\u8bf4\u660e\u3002"),(0,r.kt)("p",null,"\u8be5\u51fd\u6570\u53d7\u65f6\u533a\u5f71\u54cd\u3002"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select unix_timestamp();\n+------------------+\n| unix_timestamp() |\n+------------------+\n|       1558589570 |\n+------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30:19');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30:19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30-19', '%Y-%m-%d %H:%i-%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30-19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30%3A19', '%Y-%m-%d %H:%i%%3A%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30%3A19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('1969-01-01 00:00:00');\n+---------------------------------------+\n| unix_timestamp('1969-01-01 00:00:00') |\n+---------------------------------------+\n|                                     0 |\n+---------------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"UNIX_TIMESTAMP,UNIX,TIMESTAMP\n")))}c.isMDXComponent=!0}}]);