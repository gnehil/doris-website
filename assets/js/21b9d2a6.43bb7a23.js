"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[91886],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||n;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const n={title:"Apache Doris announced the official release of version 1.1.2",summary:"Dear community, we are pleased to announce that we have officially released Apache Doris 1.1.2 on September 13, 2022! This release is a hotfix version of 1.1.1",date:"2022-09-13",author:"Luzhijing",tags:["Release Notes"]},o=void 0,l={permalink:"/blog/release-1.1.2",source:"@site/blog/release-1.1.2.md",title:"Apache Doris announced the official release of version 1.1.2",description:"\x3c!--",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],truncated:!1,authors:[{name:"Luzhijing"}],frontMatter:{title:"Apache Doris announced the official release of version 1.1.2",summary:"Dear community, we are pleased to announce that we have officially released Apache Doris 1.1.2 on September 13, 2022! This release is a hotfix version of 1.1.1",date:"2022-09-13",author:"Luzhijing",tags:["Release Notes"]},nextItem:{title:"Doris analysis: Doris SQL principle analysis",permalink:"/blog/principle-of-Doris-SQL-parsing"}},s={authorsImageUrls:[void 0]},p=[{value:"New MemTracker",id:"new-memtracker",level:3},{value:"Add API for showing current queries and kill query",id:"add-api-for-showing-current-queries-and-kill-query",level:3},{value:"Support read/write emoji of UTF16 via ODBC Table",id:"support-readwrite-emoji-of-utf16-via-odbc-table",level:3},{value:"Data Lake related improvements",id:"data-lake-related-improvements",level:3},{value:"Add support for string and text type in Spark Load",id:"add-support-for-string-and-text-type-in-spark-load",level:3},{value:"Add reuse block in non-vectorized engine and have 50% performance improvement in some cases. #11392",id:"add-reuse-block-in-non-vectorized-engine-and-have-50-performance-improvement-in-some-cases-11392",level:3},{value:"Improve like or regex performance",id:"improve-like-or-regex-performance",level:3},{value:"Disable tcmalloc&#39;s aggressive_memory_decommit",id:"disable-tcmallocs-aggressive_memory_decommit",level:3},{value:"Some issues about FE that will cause FE failure or data corrupt.",id:"some-issues-about-fe-that-will-cause-fe-failure-or-data-corrupt",level:3},{value:"Fe will hang on waitFor_rpc during query and BE will hang in high concurrent scenarios.",id:"fe-will-hang-on-waitfor_rpc-during-query-and-be-will-hang-in-high-concurrent-scenarios",level:3},{value:"A fatal issue in vectorized storage engine which will cause wrong result. <strong>(Serious)</strong>",id:"a-fatal-issue-in-vectorized-storage-engine-which-will-cause-wrong-result-serious",level:3},{value:"Lots of planner related issues that will cause BE core or in abnormal state.",id:"lots-of-planner-related-issues-that-will-cause-be-core-or-in-abnormal-state",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this release, Doris Team has fixed more than 170 issues or performance improvement since 1.1.1. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."),(0,i.kt)("h1",{id:"features"},"Features"),(0,i.kt)("h3",{id:"new-memtracker"},"New MemTracker"),(0,i.kt)("p",null,"Introduced new MemTracker for both vectorized engine and non-vectorized engine which is more accurate."),(0,i.kt)("h3",{id:"add-api-for-showing-current-queries-and-kill-query"},"Add API for showing current queries and kill query"),(0,i.kt)("h3",{id:"support-readwrite-emoji-of-utf16-via-odbc-table"},"Support read/write emoji of UTF16 via ODBC Table"),(0,i.kt)("h1",{id:"improvements"},"Improvements"),(0,i.kt)("h3",{id:"data-lake-related-improvements"},"Data Lake related improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Improved HDFS ORC File scan performance about 300%. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11501"},"#11501"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Support HDFS HA mode when query Iceberg table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Support query Hive data created by ",(0,i.kt)("a",{parentName:"p",href:"https://tez.apache.org/"},"Apache Tez"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add Ali OSS as Hive external support."))),(0,i.kt)("h3",{id:"add-support-for-string-and-text-type-in-spark-load"},"Add support for string and text type in Spark Load"),(0,i.kt)("h3",{id:"add-reuse-block-in-non-vectorized-engine-and-have-50-performance-improvement-in-some-cases-11392"},"Add reuse block in non-vectorized engine and have 50% performance improvement in some cases. ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/11392"},"#11392")),(0,i.kt)("h3",{id:"improve-like-or-regex-performance"},"Improve like or regex performance"),(0,i.kt)("h3",{id:"disable-tcmallocs-aggressive_memory_decommit"},"Disable tcmalloc's aggressive_memory_decommit"),(0,i.kt)("p",null,"It will have 40% performance gains in load or query."),(0,i.kt)("p",null,"Currently it is a config, you can change it by set config ",(0,i.kt)("inlineCode",{parentName:"p"},"tc_enable_aggressive_memory_decommit"),"."),(0,i.kt)("h1",{id:"bug-fix"},"Bug Fix"),(0,i.kt)("h3",{id:"some-issues-about-fe-that-will-cause-fe-failure-or-data-corrupt"},"Some issues about FE that will cause FE failure or data corrupt."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add reserved disk config to avoid too many reserved BDB-JE files.",(0,i.kt)("strong",{parentName:"p"},"(Serious)"),"   In an HA environment, BDB JE will retains as many reserved files. The BDB-je log doesn't delete until approaching a disk limit.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fix fatal bug in BDB-JE which will cause FE replica could not start correctly or data corrupted.",(0,i.kt)("strong",{parentName:"p"}," (Serious)")))),(0,i.kt)("h3",{id:"fe-will-hang-on-waitfor_rpc-during-query-and-be-will-hang-in-high-concurrent-scenarios"},"Fe will hang on waitFor_rpc during query and BE will hang in high concurrent scenarios."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12459"},"#12459")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12458"},"#12458")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12392"},"#12392")),(0,i.kt)("h3",{id:"a-fatal-issue-in-vectorized-storage-engine-which-will-cause-wrong-result-serious"},"A fatal issue in vectorized storage engine which will cause wrong result. ",(0,i.kt)("strong",{parentName:"h3"},"(Serious)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11754"},"#11754")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11694"},"#11694")),(0,i.kt)("h3",{id:"lots-of-planner-related-issues-that-will-cause-be-core-or-in-abnormal-state"},"Lots of planner related issues that will cause BE core or in abnormal state."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12080"},"#12080")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12075"},"#12075")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12040"},"#12040")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12003"},"#12003")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12007"},"#12007")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11971"},"#11971")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11933"},"#11933")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11861"},"#11861")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11859"},"#11859")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11855"},"#11855")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11837"},"#11837")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11834"},"#11834")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11821"},"#11821")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11782"},"#11782")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11723"},"#11723")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11569"},"#11569")))}u.isMDXComponent=!0}}]);