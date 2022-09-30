"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[78442],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"DATETIMEV2",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-reference/Data-Types/DATETIMEV2",id:"version-dev/sql-manual/sql-reference/Data-Types/DATETIMEV2",title:"DATETIMEV2",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Data-Types/DATETIMEV2.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATETIMEV2",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/DATETIMEV2",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Data-Types/DATETIMEV2.md",tags:[],version:"dev",frontMatter:{title:"DATETIMEV2",language:"zh-CN"},sidebar:"docs",previous:{title:"DATEV2",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/DATEV2"},next:{title:"BITMAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/BITMAP"}},s={},i=[{value:"DATETIMEV2",id:"datetimev2",level:2},{value:"description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"datetimev2"},"DATETIMEV2"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DATETIMEV2([P])\n\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\uff0c\u53ef\u9009\u53c2\u6570P\u8868\u793a\u65f6\u95f4\u7cbe\u5ea6\uff0c\u53d6\u503c\u8303\u56f4\u662f[0, 6]\uff0c\u5373\u6700\u591a\u652f\u63016\u4f4d\u5c0f\u6570\uff08\u5fae\u79d2\uff09\u3002\u4e0d\u8bbe\u7f6e\u65f6\u4e3a0\u3002\n\u53d6\u503c\u8303\u56f4\u662f['0000-01-01 00:00:00[.000000]', '9999-12-31 23:59:59[.999999]'].\n\u6253\u5370\u7684\u5f62\u5f0f\u662f'YYYY-MM-DD HH:MM:SS.ffffff'\n")),(0,a.kt)("h3",{id:"note"},"note"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u76f8\u6bd4DATETIME\u7c7b\u578b\uff0cDATETIMEV2\u66f4\u52a0\u9ad8\u6548\uff0c\u5e76\u4e14\u652f\u6301\u4e86\u6700\u591a\u5230\u5fae\u79d2\u7684\u65f6\u95f4\u7cbe\u5ea6\u3002\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DATETIMEV2\n")))}u.isMDXComponent=!0}}]);