"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[78291],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"abs",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/math-functions/abs",id:"version-dev/sql-manual/sql-functions/math-functions/abs",title:"abs",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/math-functions/abs.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/abs",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/abs",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/math-functions/abs.md",tags:[],version:"dev",frontMatter:{title:"abs",language:"en"},sidebar:"docs",previous:{title:"pmod",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/pmod"},next:{title:"acos",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/acos"}},i={},c=[{value:"abs",id:"abs",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"abs"},"abs"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DOUBLE abs(DOUBLE x)"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},"SMALLINT abs(TINYINT x)"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},"INT abs(SMALLINT x)"),"  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BIGINT abs(INT x)"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},"LARGEINT abs(BIGINT x)"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},"LARGEINT abs(LARGEINT x)"),"  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DOUBLE abs(DOUBLE x)"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},"FLOAT abs(FLOAT x)"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},"DECIMAL abs(DECIMAL x)"),"  "),(0,r.kt)("p",null,"Returns the absolute value of ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select abs(-2);\n+---------+\n| abs(-2) |\n+---------+\n|       2 |\n+---------+\nmysql> select abs(3.254655654);\n+------------------+\n| abs(3.254655654) |\n+------------------+\n|      3.254655654 |\n+------------------+\nmysql> select abs(-3254654236547654354654767);\n+---------------------------------+\n| abs(-3254654236547654354654767) |\n+---------------------------------+\n| 3254654236547654354654767       |\n+---------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ABS\n")))}u.isMDXComponent=!0}}]);