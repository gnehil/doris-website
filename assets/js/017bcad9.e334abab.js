"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[47921],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},18343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"money_format",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/money_format",id:"version-dev/sql-manual/sql-functions/string-functions/money_format",title:"money_format",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/string-functions/money_format.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/money_format",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/money_format",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/string-functions/money_format.md",tags:[],version:"dev",frontMatter:{title:"money_format",language:"en"},sidebar:"docs",previous:{title:"split_part",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/split_part"},next:{title:"parse_url",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/parse_url"}},s={},c=[{value:"money_format",id:"money_format",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"money_format"},"money_format"),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR money format (Number)")),(0,o.kt)("p",null,"The number is output in currency format, the integer part is separated by commas every three bits, and the decimal part is reserved for two bits."),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select money_format(17014116);\n+------------------------+\n| money_format(17014116) |\n+------------------------+\n| 17,014,116.00          |\n+------------------------+\n\nmysql> select money_format(1123.456);\n+------------------------+\n| money_format(1123.456) |\n+------------------------+\n| 1,123.46               |\n+------------------------+\n\nmysql> select money_format(1123.4);\n+----------------------+\n| money_format(1123.4) |\n+----------------------+\n| 1,123.40             |\n+----------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MONEY_FORMAT,MONEY,FORMAT\n")))}u.isMDXComponent=!0}}]);