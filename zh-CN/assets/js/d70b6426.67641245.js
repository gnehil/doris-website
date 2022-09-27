"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[31155],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>p});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),i=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},c=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=i(r),p=a,d=h["".concat(s,".").concat(p)]||h[p]||m[p]||l;return r?t.createElement(d,u(u({ref:n},c),{},{components:r})):t.createElement(d,u({ref:n},c))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=r[i];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},27697:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var t=r(87462),a=(r(67294),r(3905));const l={title:"murmur_hash3_64",language:"zh-CN"},u=void 0,o={unversionedId:"sql-manual/sql-functions/hash-functions/murmur_hash3_64",id:"version-dev/sql-manual/sql-functions/hash-functions/murmur_hash3_64",title:"murmur_hash3_64",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/hash-functions/murmur_hash3_64.md",sourceDirName:"sql-manual/sql-functions/hash-functions",slug:"/sql-manual/sql-functions/hash-functions/murmur_hash3_64",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/hash-functions/murmur_hash3_64",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/hash-functions/murmur_hash3_64.md",tags:[],version:"dev",frontMatter:{title:"murmur_hash3_64",language:"zh-CN"}},s={},i=[{value:"murmur_hash3_64",id:"murmur_hash3_64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"murmur_hash3_64"},"murmur_hash3_64"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BIGINT MURMUR_HASH3_64(VARCHAR input, ...)")),(0,a.kt)("p",null,"\u8fd4\u56de\u8f93\u5165\u5b57\u7b26\u4e32\u768464\u4f4dmurmur3 hash\u503c"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select murmur_hash3_64(null);\n+-----------------------+\n| murmur_hash3_64(NULL) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n\nmysql> select murmur_hash3_64(\"hello\");\n+--------------------------+\n| murmur_hash3_64('hello') |\n+--------------------------+\n|     -3215607508166160593 |\n+--------------------------+\n\nmysql> select murmur_hash3_64(\"hello\", \"world\");\n+-----------------------------------+\n| murmur_hash3_64('hello', 'world') |\n+-----------------------------------+\n|               3583109472027628045 |\n+-----------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MURMUR_HASH3_64,HASH\n")))}m.isMDXComponent=!0}}]);