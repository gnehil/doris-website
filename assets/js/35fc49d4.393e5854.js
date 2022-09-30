"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[21935],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>d});var r=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var c=r.createContext({}),s=function(t){var n=r.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},u=function(t){var n=s(t.components);return r.createElement(c.Provider,{value:n},t.children)},p={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(e),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return e?r.createElement(f,i(i({ref:n},u),{},{components:e})):r.createElement(f,i({ref:n},u))}));function d(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var a=e.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=e[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},4574:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=e(87462),o=(e(67294),e(3905));const a={title:"bitmap_and_not_count",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",id:"version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",title:"bitmap_and_not_count",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count.md",tags:[],version:"dev",frontMatter:{title:"bitmap_and_not_count",language:"en"},sidebar:"docs",previous:{title:"bitmap_and_count",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_and_count"},next:{title:"orthogonal_bitmap_union_count",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_union_count"}},c={},s=[{value:"bitmap_and_not_count",id:"bitmap_and_not_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s};function p(t){let{components:n,...e}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bitmap_and_not_count"},"bitmap_and_not_count"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_AND_NOT_COUNT(BITMAP lhs, BITMAP rhs)")),(0,o.kt)("p",null,"Calculate the set after lhs minus intersection of two input bitmaps, return the new bitmap size."),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select bitmap_and_not_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5')) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"BITMAP_AND_NOT_COUNT,BITMAP\n")))}p.isMDXComponent=!0}}]);