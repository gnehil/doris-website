"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[98421],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=p(a),u=r,c=f["".concat(d,".").concat(u)]||f[u]||m[u]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},55865:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"yearweek",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/yearweek",id:"version-dev/sql-manual/sql-functions/date-time-functions/yearweek",title:"yearweek",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/date-time-functions/yearweek.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/yearweek",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/yearweek",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/date-time-functions/yearweek.md",tags:[],version:"dev",frontMatter:{title:"yearweek",language:"en"},sidebar:"docs",previous:{title:"weekofyear",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/weekofyear"},next:{title:"dayname",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/dayname"}},d={},p=[{value:"yearweek",id:"yearweek",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"yearweek"},"yearweek"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INT YEARWEEK(DATE date)"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"INT YEARWEEK(DATE date, INT mode)")),(0,r.kt)("p",null,"Returns year and week for a date.The value of the mode argument defaults to 0.\nWhen the week of the date belongs to the previous year, the year and week of the previous year are returned;\nwhen the week of the date belongs to the next year, the year of the next year is returned and the week is 1."),(0,r.kt)("p",null,"The following table describes how the mode argument works."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,r.kt)("th",{parentName:"tr",align:"left"},"First day of week"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Week 1 is the first week \u2026"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"with a Sunday in this year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"with a Sunday in this year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"with a Monday in this year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"with a Monday in this year")))),(0,r.kt)("p",null,"The parameter is Date or Datetime type"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select yearweek('2021-1-1');\n+----------------------+\n| yearweek('2021-1-1') |\n+----------------------+\n|               202052 |\n+----------------------+\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select yearweek('2020-7-1');\n+----------------------+\n| yearweek('2020-7-1') |\n+----------------------+\n|               202026 |\n+----------------------+\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select yearweek('2024-12-30',1);\n+------------------------------------+\n| yearweek('2024-12-30 00:00:00', 1) |\n+------------------------------------+\n|                             202501 |\n+------------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"YEARWEEK\n")))}m.isMDXComponent=!0}}]);