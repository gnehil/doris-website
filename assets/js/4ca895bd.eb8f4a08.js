"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[57598],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:e},c),{},{components:n})):a.createElement(h,i({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55230:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Contribute to Doris",language:"en"},i=void 0,l={unversionedId:"how-to-contribute/how-to-contribute",id:"how-to-contribute/how-to-contribute",title:"Contribute to Doris",description:"\x3c!--",source:"@site/community/how-to-contribute/how-to-contribute.md",sourceDirName:"how-to-contribute",slug:"/how-to-contribute/",permalink:"/community/how-to-contribute/",draft:!1,tags:[],version:"current",frontMatter:{title:"Contribute to Doris",language:"en"},sidebar:"community",previous:{title:"Feedback",permalink:"/community/feedback"},next:{title:"Contributor Guide",permalink:"/community/how-to-contribute/contributor-guide"}},u={},s=[{value:"Initial contact",id:"initial-contact",level:2},{value:"Doris&#39;s code and documentation",id:"doriss-code-and-documentation",level:2},{value:"Improving documentation",id:"improving-documentation",level:2},{value:"If a Bug or problem is found",id:"if-a-bug-or-problem-is-found",level:2},{value:"Modify the code and submit PR (Pull Request)",id:"modify-the-code-and-submit-pr-pull-request",level:2}],c={toc:s};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribute-to-doris"},"Contribute to Doris"),(0,o.kt)("p",null,"Thank you very much for your interest in the Doris project. We welcome your suggestions, comments (including criticisms) and contributions to the Doris project."),(0,o.kt)("p",null,"Your suggestions, comments and contributions on Doris can be made directly through GitHub's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/issues/new/choose"},"Issues"),"."),(0,o.kt)("p",null,"There are many ways to participate in and contribute to Doris projects: code implementation, test writing, process tool improvement, document improvement, and so on. Any contribution will be welcomed and you will be added to the list of contributors. Further, with sufficient contributions, you will have the opportunity to become a Committer of Apache with Apache mailbox and be included in the list of ",(0,o.kt)("a",{parentName:"p",href:"http://people.apache.org/committer-index.html"},"Apache Committers"),"."),(0,o.kt)("p",null,"Any questions, you can contact us to get timely answers, including Wechat, Gitter (GitHub instant messaging tool), e-mail and so on."),(0,o.kt)("h2",{id:"initial-contact"},"Initial contact"),(0,o.kt)("p",null,"For the first time in Doris community, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Follow ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/doris"},"Doris Github")),(0,o.kt)("li",{parentName:"ul"},"Subscribe to our ",(0,o.kt)("a",{parentName:"li",href:"./subscribe-mail-list"},"mailing list"),";"),(0,o.kt)("li",{parentName:"ul"},"Join Doris Wechat Group (add WeChat-ID: morningman-cmy, note: join Doris Group) and ask questions at any time."),(0,o.kt)("li",{parentName:"ul"},"Enter Doris's ",(0,o.kt)("a",{parentName:"li",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-11jb8gesh-7IukzSrdea6mqoG0HB4gZg"},"Slack"))),(0,o.kt)("p",null,"Learn the development trends of Doris project in time and give your opinions on the topics you are concerned about."),(0,o.kt)("h2",{id:"doriss-code-and-documentation"},"Doris's code and documentation"),(0,o.kt)("p",null,"As you can see from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris"},"GitHub"),", Apache Doris (incubating) code base mainly consists of three parts: Frontend (FE), Backend (BE) and Broker (to support file reading on external storage systems such as HDFS). Documents are mainly the wiki on Doris website and GitHub, as well as the online help manual when running Doris. Details of these components can be found in the following table:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Component Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Related Language"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/doris"},"Frontend daemon (FE)")),(0,o.kt)("td",{parentName:"tr",align:null},"consists of a query coordinator and a metadata manager"),(0,o.kt)("td",{parentName:"tr",align:null},"Java")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/doris"},"Backend daemon (BE)")),(0,o.kt)("td",{parentName:"tr",align:null},"Responsible for storing data and executing query fragments"),(0,o.kt)("td",{parentName:"tr",align:null},"C++")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/doris"},"Broker")),(0,o.kt)("td",{parentName:"tr",align:null},"Read HDFS data to Doris"),(0,o.kt)("td",{parentName:"tr",align:null},"Java")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/doris-website"},"Website")),(0,o.kt)("td",{parentName:"tr",align:null},"Doris Website"),(0,o.kt)("td",{parentName:"tr",align:null},"Markdown")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/doris-manager"},"Manager")),(0,o.kt)("td",{parentName:"tr",align:null},"Doris Manager"),(0,o.kt)("td",{parentName:"tr",align:null},"Java")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/doris-flink-connector"},"Flink-Connector")),(0,o.kt)("td",{parentName:"tr",align:null},"Doris Flink Connector"),(0,o.kt)("td",{parentName:"tr",align:null},"Java")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/doris-spark-connector"},"Spark-Connector")),(0,o.kt)("td",{parentName:"tr",align:null},"Doris Spark Connector"),(0,o.kt)("td",{parentName:"tr",align:null},"Java")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Doris Runtime Help Document"),(0,o.kt)("td",{parentName:"tr",align:null},"Online Help Manual at Doris Runtime"),(0,o.kt)("td",{parentName:"tr",align:null},"Markdown")))),(0,o.kt)("h2",{id:"improving-documentation"},"Improving documentation"),(0,o.kt)("p",null,"Documentation is the most important way for you to understand Apache Doris, and it's where we need help most!"),(0,o.kt)("p",null,"Browse the document, you can deepen your understanding of Doris, can also help you understand Doris's function and technical details, if you find that the document has problems, please contact us in time;"),(0,o.kt)("p",null,"If you are interested in improving the quality of documents, whether it is revising the address of a page, correcting a link, and writing a better introductory document, we are very welcome!"),(0,o.kt)("p",null,"Most of our documents are written in markdown format, and you can modify and submit document changes directly through ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris"},"GitHub"),". If you submit code changes, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"./pull-request"},"Pull Request"),"."),(0,o.kt)("h2",{id:"if-a-bug-or-problem-is-found"},"If a Bug or problem is found"),(0,o.kt)("p",null,"If a Bug or problem is found, you can directly raise a new Issue through GitHub's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/issues/new/choose"},"Issues"),", and we will have someone deal with it regularly."),(0,o.kt)("p",null,"You can also fix it yourself by reading the analysis code (of course, it's better to talk to us before that, maybe someone has fixed the same problem) and submit a ",(0,o.kt)("a",{parentName:"p",href:"./pull-request"},"Pull Request"),"."),(0,o.kt)("h2",{id:"modify-the-code-and-submit-pr-pull-request"},"Modify the code and submit PR (Pull Request)"),(0,o.kt)("p",null,"You can download the code, compile and install it, deploy and run it for a try (refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/install/source-install/compilation"},"compilation document")," to see if it works as you expected. If you have problems, you can contact us directly, ask questions or fix them by reading and analyzing the source code."),(0,o.kt)("p",null,"Whether it's fixing Bugs or adding Features, we're all very welcome. If you want to submit code to Doris, you need to create a new branch for your submitted code from the fork code library on GitHub to your project space, add the source project upstream, and submit PR."),(0,o.kt)("p",null,"About how to submit a PR refer to ",(0,o.kt)("a",{parentName:"p",href:"./pull-request"},"Pull Request"),"."))}p.isMDXComponent=!0}}]);