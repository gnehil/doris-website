"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[4805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const s={title:"ends_with",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/ends_with",id:"sql-manual/sql-functions/string-functions/ends_with",title:"ends_with",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/ends_with.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/ends_with",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/ends_with",draft:!1,tags:[],version:"current",frontMatter:{title:"ends_with",language:"zh-CN"},sidebar:"docs",previous:{title:"append_trailing_char_if_absent",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/append_trailing_char_if_absent"},next:{title:"starts_with",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/starts_with"}},a={},c=[{value:"ends_with",id:"ends_with",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ends_with"},"ends_with"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BOOLEAN ENDS_WITH (VARCHAR str, VARCHAR suffix)")),(0,i.kt)("p",null,"\u5982\u679c\u5b57\u7b26\u4e32\u4ee5\u6307\u5b9a\u540e\u7f00\u7ed3\u5c3e\uff0c\u8fd4\u56detrue\u3002\u5426\u5219\uff0c\u8fd4\u56defalse\u3002\u4efb\u610f\u53c2\u6570\u4e3aNULL\uff0c\u8fd4\u56deNULL\u3002"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select ends_with(\"Hello doris\", \"doris\");\n+-----------------------------------+\n| ends_with('Hello doris', 'doris') |\n+-----------------------------------+\n|                                 1 | \n+-----------------------------------+\n\nmysql> select ends_with(\"Hello doris\", \"Hello\");\n+-----------------------------------+\n| ends_with('Hello doris', 'Hello') |\n+-----------------------------------+\n|                                 0 | \n+-----------------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ENDS_WITH\n")))}p.isMDXComponent=!0}}]);