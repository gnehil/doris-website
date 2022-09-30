"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[49037],{3905:(t,n,e)=>{e.d(n,{Zo:()=>s,kt:()=>d});var o=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var l=o.createContext({}),u=function(t){var n=o.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},s=function(t){var n=u(t.components);return o.createElement(l.Provider,{value:n},t.children)},p={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(t,n){var e=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),m=u(e),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return e?o.createElement(f,i(i({ref:n},s),{},{components:e})):o.createElement(f,i({ref:n},s))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=e.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var u=2;u<a;u++)i[u]=e[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}m.displayName="MDXCreateElement"},17439:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=e(87462),r=(e(67294),e(3905));const a={title:"bitmap_and_not_count",language:"zh-CN"},i=void 0,c={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",id:"version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",title:"bitmap_and_not_count",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count.md",tags:[],version:"dev",frontMatter:{title:"bitmap_and_not_count",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_and_count",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_and_count"},next:{title:"orthogonal_bitmap_union_count",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_union_count"}},l={},u=[{value:"bitmap_and_not_count",id:"bitmap_and_not_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u};function p(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,o.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bitmap_and_not_count"},"bitmap_and_not_count"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_AND_NOT_COUNT(BITMAP lhs, BITMAP rhs)")),(0,r.kt)("p",null,"\u5c06\u4e24\u4e2abitmap\u8fdb\u884c\u4e0e\u975e\u64cd\u4f5c\u5e76\u8fd4\u56de\u8ba1\u7b97\u8fd4\u56de\u7684\u5927\u5c0f."),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select bitmap_and_not_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5')) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BITMAP_AND_NOT_COUNT,BITMAP\n")))}p.isMDXComponent=!0}}]);