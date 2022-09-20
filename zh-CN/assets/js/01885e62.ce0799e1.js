"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[63618],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const o={title:"acos",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-functions/math-functions/acos",id:"sql-manual/sql-functions/math-functions/acos",title:"acos",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/math-functions/acos.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/acos",permalink:"/zh-CN/docs/sql-manual/sql-functions/math-functions/acos",draft:!1,tags:[],version:"current",frontMatter:{title:"acos",language:"zh-CN"},sidebar:"docs",previous:{title:"abs",permalink:"/zh-CN/docs/sql-manual/sql-functions/math-functions/abs"},next:{title:"asin",permalink:"/zh-CN/docs/sql-manual/sql-functions/math-functions/asin"}},s={},i=[{value:"acos",id:"acos",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"acos"},"acos"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DOUBLE acos(DOUBLE x)"),"\n\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u53cd\u4f59\u5f26\u503c\uff0c\u82e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u4e0d\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\u7684\u8303\u56f4\u4e4b\u5185\uff0c\u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"nan"),"."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select acos(1);\n+-----------+\n| acos(1.0) |\n+-----------+\n|         0 |\n+-----------+\nmysql> select acos(0);\n+--------------------+\n| acos(0.0)          |\n+--------------------+\n| 1.5707963267948966 |\n+--------------------+\nmysql> select acos(-2);\n+------------+\n| acos(-2.0) |\n+------------+\n|        nan |\n+------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ACOS\n")))}p.isMDXComponent=!0}}]);