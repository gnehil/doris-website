"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[99978],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>y});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),y=a,d=p["".concat(c,".").concat(y)]||p[y]||_[y]||l;return r?t.createElement(d,o(o({ref:n},u),{},{components:r})):t.createElement(d,o({ref:n},u))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},34762:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>_,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const l={title:"array_join",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array_join",id:"version-dev/sql-manual/sql-functions/array-functions/array_join",title:"array_join",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/array-functions/array_join.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_join",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_join",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/array-functions/array_join.md",tags:[],version:"dev",frontMatter:{title:"array_join",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_SUM \u51fd\u6570",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_sum"},next:{title:"convert_tz",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/convert_tz"}},c={},s=[{value:"array_join",id:"array_join",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s};function _(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_join"},"array_join"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"VARCHAR array_join(ARRAY<T> arr, VARCHAR sep[, VARCHAR null_replace])\n")),(0,a.kt)("p",null,"\u6839\u636e\u5206\u9694\u7b26(sep)\u548c\u66ff\u6362NULL\u7684\u5b57\u7b26\u4e32(null_replace), \u5c06\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\u7ec4\u5408\u6210\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\u3002\n\u82e5sep\u4e3aNULL\uff0c\u5219\u8fd4\u56de\u503c\u4e3aNULL\u3002\n\u82e5null_replace\u4e3aNULL\uff0c\u5219\u8fd4\u56de\u503c\u4e5f\u4e3aNULL\u3002\n\u82e5sep\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4e0d\u5e94\u7528\u4efb\u4f55\u5206\u9694\u7b26\u3002\n\u82e5null_replace\u4e3a\u7a7a\u5b57\u7b26\u4e32\u6216\u8005\u4e0d\u6307\u5b9a\uff0c\u5219\u76f4\u63a5\u4e22\u5f03\u6570\u7ec4\u4e2d\u7684NULL\u5143\u7d20\u3002"),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nmysql> set enable_vectorized_engine=true;\n\nmysql> select k1, k2, array_join(k1, '_', 'null') from array_test order by k1;\n+------+-----------------------------+------------------------------------+\n| k1   | k2                          | array_join(`k2`, '_', 'null')      |\n+------+-----------------------------+------------------------------------+\n|  1   | [1, 2, 3, 4, 5]             | 1_2_3_4_5                          |\n|  2   | [6, 7, 8]                   | 6_7_8                              |\n|  3   | []                          |                                    |\n|  4   | NULL                        | NULL                               |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | 1_2_3_4_5_4_3_2_1                  |\n|  6   | [1, 2, 3, NULL]             | 1_2_3_null                         |\n|  7   | [4, 5, 6, NULL, NULL]       | 4_5_6_null_null                    |\n+------+-----------------------------+------------------------------------+\n\nmysql> select k1, k2, array_join(k2, '_', 'null') from array_test01 order by k1;\n+------+-----------------------------------+------------------------------------+\n| k1   | k2                                | array_join(`k2`, '_', 'null')      |\n+------+-----------------------------------+------------------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | a_b_c_d                            |\n|  2   | ['e', 'f', 'g', 'h']              | e_f_g_h                            |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | null_a_null_b_null_c               |\n|  4   | ['d', 'e', NULL, ' ']             | d_e_null_                          |\n|  5   | [' ', NULL, 'f', 'g']             |  _null_f_g                         |\n+------+-----------------------------------+------------------------------------+\n\nmysql> select k1, k2, array_join(k2, '_') from array_test order by k1;\n+------+-----------------------------+----------------------------+\n| k1   | k2                          | array_join(`k2`, '_')      |\n+------+-----------------------------+----------------------------+\n|  1   | [1, 2, 3, 4, 5]             | 1_2_3_4_5                  |\n|  2   | [6, 7, 8]                   | 6_7_8                      |\n|  3   | []                          |                            |\n|  4   | NULL                        | NULL                       |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | 1_2_3_4_5_4_3_2_1          |\n|  6   | [1, 2, 3, NULL]             | 1_2_3                      |\n|  7   | [4, 5, 6, NULL, NULL]       | 4_5_6                      |\n+------+-----------------------------+----------------------------+\n\nmysql> select k1, k2, array_join(k2, '_') from array_test01 order by k1;\n+------+-----------------------------------+----------------------------+\n| k1   | k2                                | array_join(`k2`, '_')      |\n+------+-----------------------------------+----------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | a_b_c_d                    |\n|  2   | ['e', 'f', 'g', 'h']              | e_f_g_h                    |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | a_b_c                      |\n|  4   | ['d', 'e', NULL, ' ']             | d_e_                       |\n|  5   | [' ', NULL, 'f', 'g']             |  _f_g                      |\n+------+-----------------------------------+----------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY, JOIN, ARRAY_JOIN"))}_.isMDXComponent=!0}}]);