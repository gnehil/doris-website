"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[91149],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},73:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={title:"round",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/round",id:"version-dev/sql-manual/sql-functions/math-functions/round",title:"round",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/math-functions/round.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/round",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/round",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/math-functions/round.md",tags:[],version:"dev",frontMatter:{title:"round",language:"en"},sidebar:"docs",previous:{title:"radians",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/radians"},next:{title:"sign",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/sign"}},s={},u=[{value:"round",id:"round",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"round"},"round"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BIGINT round(DOUBLE x)"),"\nPreserve the integer part after rounding ",(0,o.kt)("inlineCode",{parentName:"p"},"x")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select round(2.4);\n+------------+\n| round(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select round(2.5);\n+------------+\n| round(2.5) |\n+------------+\n|          3 |\n+------------+\nmysql> select round(-3.4);\n+-------------+\n| round(-3.4) |\n+-------------+\n|          -3 |\n+-------------+\nmysql> select round(-3.5);\n+-------------+\n| round(-3.5) |\n+-------------+\n|          -4 |\n+-------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ROUND\n")))}d.isMDXComponent=!0}}]);