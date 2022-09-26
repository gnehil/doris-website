"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[98162],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var a=r.createContext({}),c=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(a.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,l=t.originalType,a=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(n),f=s,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function f(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=t,i.mdxType="string"==typeof t?t:s,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60542:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const l={title:"starts_with",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/starts_with",id:"sql-manual/sql-functions/string-functions/starts_with",title:"starts_with",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/starts_with.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/starts_with",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/starts_with",draft:!1,tags:[],version:"current",frontMatter:{title:"starts_with",language:"zh-CN"},sidebar:"docs",previous:{title:"ends_with",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/ends_with"},next:{title:"trim",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/trim"}},a={},c=[{value:"starts_with",id:"starts_with",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"starts_with"},"starts_with"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"BOOLEAN STARTS_WITH (VARCHAR str, VARCHAR prefix)")),(0,s.kt)("p",null,"\u5982\u679c\u5b57\u7b26\u4e32\u4ee5\u6307\u5b9a\u524d\u7f00\u5f00\u5934\uff0c\u8fd4\u56detrue\u3002\u5426\u5219\uff0c\u8fd4\u56defalse\u3002\u4efb\u610f\u53c2\u6570\u4e3aNULL\uff0c\u8fd4\u56deNULL\u3002"),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"MySQL [(none)]> select starts_with(\"hello world\",\"hello\");\n+-------------------------------------+\n| starts_with('hello world', 'hello') |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n\nMySQL [(none)]> select starts_with(\"hello world\",\"world\");\n+-------------------------------------+\n| starts_with('hello world', 'world') |\n+-------------------------------------+\n|                                   0 |\n+-------------------------------------+\n")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"STARTS_WITH\n")))}p.isMDXComponent=!0}}]);