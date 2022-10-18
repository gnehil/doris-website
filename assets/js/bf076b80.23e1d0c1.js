"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[58575],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),g=o,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"group_bitmap_xor",language:"en"},i=void 0,p={unversionedId:"sql-manual/sql-functions/aggregate-functions/group_bitmap_xor",id:"version-dev/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor",title:"group_bitmap_xor",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor.md",tags:[],version:"dev",frontMatter:{title:"group_bitmap_xor",language:"en"},sidebar:"docs",previous:{title:"BITMAP_UNION",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/bitmap_union"},next:{title:"PERCENTILE_APPROX",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile_approx"}},l={},s=[{value:"group_bitmap_xor",id:"group_bitmap_xor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"group_bitmap_xor"},"group_bitmap_xor"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BITMAP GROUP_BITMAP_XOR(expr)")),(0,o.kt)("p",null,"Perform an xor calculation on expr, and return a new bitmap."),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql>  select page, bitmap_to_string(user_id) from pv_bitmap;\n+------+-----------------------------+\n| page | bitmap_to_string(`user_id`) |\n+------+-----------------------------+\n| m    | 4,7,8                       |\n| m    | 1,3,6,15                    |\n| m    | 4,7                         |\n+------+-----------------------------+\n\nmysql> select page, bitmap_to_string(group_bitmap_xor(user_id)) from pv_bitmap group by page;\n+------+-----------------------------------------------+\n| page | bitmap_to_string(group_bitmap_xor(`user_id`)) |\n+------+-----------------------------------------------+\n| m    | 1,3,6,8,15                                    |\n+------+-----------------------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GROUP_BITMAP_XOR,BITMAP\n")))}c.isMDXComponent=!0}}]);