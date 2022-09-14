"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[69048],{3905:(t,n,e)=>{e.d(n,{Zo:()=>s,kt:()=>_});var r=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var m=r.createContext({}),c=function(t){var n=r.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},s=function(t){var n=c(t.components);return r.createElement(m.Provider,{value:n},t.children)},l={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,m=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=c(e),_=a,b=u["".concat(m,".").concat(_)]||u[_]||l[_]||i;return e?r.createElement(b,o(o({ref:n},s),{},{components:e})):r.createElement(b,o({ref:n},s))}));function _(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,o=new Array(i);o[0]=u;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<i;c++)o[c]=e[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},6980:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=e(87462),a=(e(67294),e(3905));const i={title:"bitmap_and_count",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_and_count",id:"sql-manual/sql-functions/bitmap-functions/bitmap_and_count",title:"bitmap_and_count",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap_and_count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_and_count",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_and_count",draft:!1,tags:[],version:"current",frontMatter:{title:"bitmap_and_count",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_count",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_count"},next:{title:"bitmap_or_count",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_or_count"}},m={},c=[{value:"bitmap_and_count",id:"bitmap_and_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c};function l(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bitmap_and_count"},"bitmap_and_count"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BigIntVal bitmap_and_count(BITMAP lhs, BITMAP rhs, ...)")),(0,a.kt)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u53ca\u4ee5\u4e0a\u8f93\u5165bitmap\u7684\u4ea4\u96c6\uff0c\u8fd4\u56de\u4ea4\u96c6\u7684\u4e2a\u6570."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MySQL> select bitmap_and_count(bitmap_from_string('1,2,3'),bitmap_empty());\n+---------------------------------------------------------------+\n| bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_empty()) |\n+---------------------------------------------------------------+\n|                                                             0 |\n+---------------------------------------------------------------+\n\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+----------------------------------------------------------------------------+\n| bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+----------------------------------------------------------------------------+\n|                                                                          3 |\n+----------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+----------------------------------------------------------------------------+\n| bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+----------------------------------------------------------------------------+\n|                                                                          1 |\n+----------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'));\n+-------------------------------------------------------------------------------------------------------------+\n| (bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+-------------------------------------------------------------------------------------------------------------+\n|                                                                                                           2 |\n+-------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),bitmap_empty());\n+-----------------------------------------------------------------------------------------------------------------------------+\n| (bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), bitmap_empty())) |\n+-----------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                           0 |\n+-----------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), NULL);\n+-------------------------------------------------------------------------------------------------------------------+\n| (bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), NULL)) |\n+-------------------------------------------------------------------------------------------------------------------+\n|                                                                                                              NULL |\n+-------------------------------------------------------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BITMAP_AND_COUNT,BITMAP\n")))}l.isMDXComponent=!0}}]);