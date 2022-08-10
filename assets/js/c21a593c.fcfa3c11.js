"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[61377],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79317:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"SHOW-QUERY-PROFILE",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",id:"sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",title:"SHOW-QUERY-PROFILE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-QUERY-PROFILE",language:"en"},sidebar:"docs",previous:{title:"SHOW-PROPERTY",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-PROPERTY"},next:{title:"SHOW-REPOSITORIES",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES"}},i={},c=[{value:"SHOW-QUERY-PROFILE",id:"show-query-profile",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-query-profile"},"SHOW-QUERY-PROFILE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW QUERY PROFILE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to view the tree profile information of the query operation,this function requires the user to open profile settings.\nBefore versions 0.15, perform the following settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET is_report_success=true;\n")),(0,a.kt)("p",null,"For versions 0.15 and later, perform the following settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET [GLOBAL] enable_profile=true;\n")),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'show query profile "/";\n')),(0,a.kt)("p",null,"This command will list the profiles of all currently saved query operations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'show query profile "/queryId"\\G\nshow query profile "/queryId/fragment_id/instance_id"\\G\n')),(0,a.kt)("p",null,"Get the tree profile information of the specified query ID,Return to profile simple tree.Specify fragment",(0,a.kt)("em",{parentName:"p"}," ID and instance")," ID returns the corresponding detailed profile tree."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"List all query Profile"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/";\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n| QueryId                           | User | DefaultDb               | SQL                | QueryType | StartTime           | EndTime             | TotalTime | QueryState |\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n| 327167e0db4749a9-adce3b3d770b2bb1 | root | default_cluster:test_db | select * from test | Query     | 2022-08-09 10:50:09 | 2022-08-09 10:50:09 | 19ms      | EOF        |\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n1 row in set (0.00 sec)\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"List the query profile of the specified queryid"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1"\\G\n*************************** 1. row ***************************\nFragments: \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[-1: VDataBufferSender] \u2502\n\u2502Fragment: 0             \u2502\n\u2502MaxActiveTime: 783.263us\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u250c\u2518\n            \u2502\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502[1: VEXCHANGE_NODE]\u2502\n  \u2502Fragment: 0        \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2514\u2510\n             \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[1: VDataStreamSender]  \u2502\n\u2502Fragment: 1             \u2502\n\u2502MaxActiveTime: 847.612us\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n             \u2502\n             \u2502\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502[0: VOLAP_SCAN_NODE]\u2502\n  \u2502Fragment: 1         \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u250c\u2518\n            \u2502\n     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n     \u2502[OlapScanner]\u2502\n     \u2502Fragment: 1  \u2502\n     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2502\n            \u2502\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502[SegmentIterator]\u2502\n   \u2502Fragment: 1      \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 row in set (0.00 sec)\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Lists the instance profile of the specified fragment:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1/1/"\\G\n*************************** 1. row ***************************\n Instances: 327167e0db4749a9-adce3b3d770b2bb2\n      Host: 172.26.0.1:9111\nActiveTime: 847.612us\n1 row in set (0.01 sec)\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Continue to view the detailed profile of each operator on a specific instance:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1/1/327167e0db4749a9-adce3b3d770b2bb2"\\G\n*************************** 1. row ***************************\nInstance: \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[1: VDataStreamSender]                 \u2502\n\u2502(Active: 36.944us, non-child: 0.20)    \u2502\n\u2502  - Counters:                          \u2502\n\u2502      - BytesSent: 0.00                \u2502\n\u2502      - IgnoreRows: 0                  \u2502\n\u2502      - LocalBytesSent: 20.00 B        \u2502\n\u2502      - OverallThroughput: 0.0 /sec    \u2502\n\u2502      - PeakMemoryUsage: 0.00          \u2502\n\u2502      - SerializeBatchTime: 0ns        \u2502\n\u2502      - UncompressedRowBatchSize: 0.00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[0: VOLAP_SCAN_NODE]                   \u2502\n\u2502(Active: 563.241us, non-child: 3.00)   \u2502\n\u2502  - Counters:                          \u2502\n\u2502      - BatchQueueWaitTime: 444.714us  \u2502\n\u2502      - BytesRead: 37.00 B             \u2502\n\u2502      - NumDiskAccess: 1               \u2502\n\u2502      - NumScanners: 2                 \u2502\n\u2502      - PeakMemoryUsage: 320.00 KB     \u2502\n\u2502      - RowsRead: 4                    \u2502\n\u2502      - RowsReturned: 4                \u2502\n\u2502      - RowsReturnedRate: 7.101K /sec  \u2502\n\u2502      - ScannerBatchWaitTime: 206.40us \u2502\n\u2502      - ScannerSchedCount : 2          \u2502\n\u2502      - ScannerWorkerWaitTime: 34.640us\u2502\n\u2502      - TabletCount : 2                \u2502\n\u2502      - TotalReadThroughput: 0.0 /sec  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502[OlapScanner]                    \u2502\n   \u2502(Active: 0ns, non-child: 0.00)   \u2502\n   \u2502  - Counters:                    \u2502\n   \u2502      - BlockConvertTime: 0ns    \u2502\n   \u2502      - BlockFetchTime: 183.741us\u2502\n   \u2502      - ReaderInitTime: 180.741us\u2502\n   \u2502      - RowsDelFiltered: 0       \u2502\n   \u2502      - RowsPushedCondFiltered: 0\u2502\n   \u2502      - ScanCpuTime: 388.576us   \u2502\n   \u2502      - ScanTime: 0ns            \u2502\n   \u2502      - ShowHintsTime_V1: 0ns    \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502[SegmentIterator]                    \u2502\n \u2502(Active: 0ns, non-child: 0.00)       \u2502\n \u2502  - Counters:                        \u2502\n \u2502      - BitmapIndexFilterTimer: 124ns\u2502\n \u2502      - BlockLoadTime: 179.202us     \u2502\n \u2502      - BlockSeekCount: 5            \u2502\n \u2502      - BlockSeekTime: 18.792us      \u2502\n \u2502      - BlocksLoad: 4                \u2502\n \u2502      - CachedPagesNum: 2            \u2502\n \u2502      - CompressedBytesRead: 0.00    \u2502\n \u2502      - DecompressorTimer: 0ns       \u2502\n \u2502      - IOTimer: 0ns                 \u2502\n \u2502      - IndexLoadTime_V1: 0ns        \u2502\n \u2502      - NumSegmentFiltered: 0        \u2502\n \u2502      - NumSegmentTotal: 2           \u2502\n \u2502      - RawRowsRead: 4               \u2502\n \u2502      - RowsBitmapIndexFiltered: 0   \u2502\n \u2502      - RowsBloomFilterFiltered: 0   \u2502\n \u2502      - RowsConditionsFiltered: 0    \u2502\n \u2502      - RowsKeyRangeFiltered: 0      \u2502\n \u2502      - RowsStatsFiltered: 0         \u2502\n \u2502      - RowsVectorPredFiltered: 0    \u2502\n \u2502      - TotalPagesNum: 2             \u2502\n \u2502      - UncompressedBytesRead: 0.00  \u2502\n \u2502      - VectorPredEvalTime: 0ns      \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set (0.01 sec)\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, QUERY, PROFILE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);