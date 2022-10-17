"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[99026],{60395:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(39960),r=t(95999),l=t(67294);function o(){return l.createElement("svg",{width:"1rem",height:"1rem",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("g",{clipPath:"url(#clip0_424_3506)"},l.createElement("path",{d:"M13.0662 7.23986C13.1278 7.17546 13.1628 7.08866 13.1628 6.99906C13.1628 6.90946 13.1278 6.82266 13.0662 6.75826M13.0662 6.75686L6.85865 0.274863C6.58565 -0.0107372 6.13205 0.00746314 5.86044 0.291663C5.58884 0.575863 5.58745 1.03506 5.85905 1.31926L11.291 6.99766L5.85905 12.6747C5.58605 12.9603 5.58885 13.4195 5.86045 13.7023C6.13065 13.9879 6.58565 14.0061 6.85725 13.7205L13.0648 7.23846L13.0648 6.75686L13.0662 6.75686Z",fill:"currentColor"}),l.createElement("path",{d:"M8.24886 7.24361C8.31046 7.17921 8.34406 7.09241 8.34406 7.00281C8.34406 6.91321 8.30906 6.82641 8.24886 6.76201M8.24886 6.76061L2.04126 0.278611C1.76826 -0.00698851 1.31466 0.011211 1.04306 0.295411C0.771462 0.579611 0.770062 1.03881 1.04166 1.32301L6.47366 7.00141L1.04166 12.6798C0.768663 12.9654 0.771463 13.4246 1.04306 13.7074C1.31466 13.9916 1.76966 14.0098 2.04126 13.7242L8.24886 7.24221L8.24886 6.76061V6.76061Z",fill:"currentColor"})),l.createElement("defs",null,l.createElement("clipPath",{id:"clip0_424_3506"},l.createElement("rect",{width:"14",height:"14",fill:"currentColor",transform:"translate(0 14) rotate(-90)"}))))}function i(e){const{link:a,text:t=l.createElement(r.Z,{id:"learnmore"},"Learn More")}=e;return l.createElement("div",{className:"more"},l.createElement(n.Z,{to:a},t,l.createElement(o,null)))}},41800:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(86010),r=t(67294);function l(e){const{align:a="center",title:t,footer:l,children:o,subTitle:i}=e;return r.createElement("div",{className:(0,n.Z)("page-column",a,l&&"has-footer")},r.createElement("h1",{className:"page-column-title"},r.createElement("div",{className:"container"},t)),i&&r.createElement("p",{className:"sub-title"},r.createElement("div",{className:"container"},i)),r.createElement("div",{className:"page-column-container"},r.createElement("div",{className:"container",style:e.style},o)),l&&r.createElement("div",{className:"page-column-footer"},l))}},99942:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var n=t(86010),r=t(13066),l=t(62443),o=t(39960),i=t(60395),c=t(41800),s=t(67294),d=t(95999),m=t(52263);const u="https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=",h="https://mirrors.tuna.tsinghua.edu.cn/apache/";let p,E,b;!function(e){e.Latest="1.1.3",e.Prev="1.1.2"}(p||(p={})),function(e){e.IntelAvx2="intel-avx2",e.IntelNoAvx2="intel-noavx2",e.ARM="arm"}(E||(E={})),function(e){e.JDK8="jdk8",e.JDK11="jdk11"}(b||(b={}));const v=[{label:"1.1.3 ( latest )",value:p.Latest},{label:"1.1.2",value:p.Prev}],f=[{label:"X64 ( avx2 )",value:E.IntelAvx2},{label:"X64 ( no avx2 )",value:E.IntelNoAvx2},{label:"ARM64",value:E.ARM}];b.JDK8,b.JDK11;function g(){const{siteConfig:e,i18n:{currentLocale:a,locales:t,localeConfigs:g}}=(0,m.Z)(),[w,k]=(0,s.useState)(p.Latest),[Z,x]=(0,s.useState)(E.IntelAvx2),[$,y]=(0,s.useState)(b.JDK8),[z,N]=(0,s.useState)(),C=function(e){const a="EN"===e.toLocaleUpperCase()?"https://dist.apache.org/repos/dist/release/":"https://mirrors.tuna.tsinghua.edu.cn/apache/";return[{version:"1.2.0",date:"2022-08-15",flink:"1.15",scala:"2.12, 2.11",doris:"1.0+",download:`${a}doris/flink-connector/1.2.0/`,github:"https://github.com/apache/doris-flink-connector"},{version:"1.1.0",date:"2022-07-11",flink:"1.14",scala:"2.12, 2.11",doris:"0.15+",download:`${a}doris/flink-connector/1.1.0/`,github:"https://github.com/apache/doris-flink-connector"},{version:"1.0.3",date:"2021-03-18",flink:"1.14, 1.13, 1.12, 1.11",scala:"2.12, 2.11",doris:"0.15+",download:`${a}doris/flink-connector/1.0.3/`,github:"https://github.com/apache/doris-flink-connector"}]}(a),_=function(e){const a="EN"===e.toLocaleUpperCase()?"https://dist.apache.org/repos/dist/release/":"https://mirrors.tuna.tsinghua.edu.cn/apache/";return[{version:"1.1.0",date:"2022-07-11",spark:"3.2, 3.1, 2.3",scala:"2.12, 2.11",doris:"0.15+",download:`${a}doris/spark-connector/1.1.0/`,github:"https://github.com/apache/doris-spark-connector"},{version:"1.0.1",date:"2021-03-18",spark:"3.1, 2.3",scala:"2.12, 2.11",doris:"0.15+",download:`${a}doris/spark-connector/1.0.1/`,github:"https://github.com/apache/doris-spark-connector"}]}(a),I=function(e){const a="EN"===e.toLocaleUpperCase()?"https://archive.apache.org/dist/":"https://mirrors.tuna.tsinghua.edu.cn/apache/";return[{version:"1.1.3 ( latest )",date:"2022-10-17",note:"/docs/releasenotes/release-1.1.3",download:`${a}doris/1.1/1.1.3-rc02/`},{version:"1.1.2",date:"2022-09-13",note:"/docs/releasenotes/release-1.1.2",download:`${a}doris/1.1/1.1.2-rc05/`},{version:"1.1.1",date:"2022-07-29",note:"/docs/releasenotes/release-1.1.1",download:`${a}doris/1.1/1.1.1-rc03/`},{version:"1.1.0",date:"2022-07-14",note:"/docs/releasenotes/release-1.1.0",download:`${a}doris/1.1/1.1.0-rc05/`},{version:"0.15.0",date:"2021-11-29",note:"https://github.com/apache/doris/issues/6806",download:`${a}doris/0.15.0-incubating/`},{version:"0.14.0",date:"2021-05-26",note:"https://github.com/apache/doris/issues/5374",download:`${a}doris/0.14.0-incubating/`},{version:"0.13.0",date:"2020-10-24",note:"https://github.com/apache/doris/issues/4370",download:`${a}doris/0.13.0-incubating/`}]}(a),D=()=>{const e=`${w}-${Z}-${$}`,t=function(e){const a="EN"===e.toLocaleUpperCase()?u:h;return[{id:"1.1.3-intel-avx2-jdk8",items:[{label:"apache-doris-fe-1.1.3-bin.tar.gz",links:{source:`${a}doris/1.1/1.1.3-rc02/apache-doris-fe-1.1.3-bin.tar.gz`,signature:`${u}doris/1.1/1.1.3-rc02/apache-doris-fe-1.1.3-bin.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.3-rc02/apache-doris-fe-1.1.3-bin.tar.gz.sha512`}},{label:"apache-doris-be-1.1.3-bin-x86_64.tar.gz",links:{source:`${a}doris/1.1/1.1.3-rc02/apache-doris-be-1.1.3-bin-x86_64.tar.gz`,signature:`${u}doris/1.1/1.1.3-rc02/apache-doris-be-1.1.3-bin-x86_64.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.3-rc02/apache-doris-be-1.1.3-bin-x86_64.tar.gz.sha512`}}]},{id:"1.1.3-intel-noavx2-jdk8",items:[{label:"apache-doris-fe-1.1.3-bin.tar.gz",links:{source:`${a}doris/1.1/1.1.3-rc02/apache-doris-fe-1.1.3-bin.tar.gz`,signature:`${u}doris/1.1/1.1.3-rc02/apache-doris-fe-1.1.3-bin.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.3-rc02/apache-doris-fe-1.1.3-bin.tar.gz.sha512`}},{label:"apache-doris-be-1.1.3-bin-x86_64-noavx2.tar.gz",links:{source:`${a}doris/1.1/1.1.3-rc02/apache-doris-be-1.1.3-bin-x86_64-noavx2.tar.gz`,signature:`${u}doris/1.1/1.1.3-rc02/apache-doris-be-1.1.3-bin-x86_64-noavx2.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.3-rc02/apache-doris-be-1.1.3-bin-x86_64-noavx2.tar.gz.sha512`}}]},{id:"1.1.3-arm-jdk8",items:[{label:"apache-doris-fe-1.1.3-bin.tar.gz",links:{source:`${a}doris/1.1/1.1.3-rc02/apache-doris-fe-1.1.3-bin.tar.gz`,signature:`${u}doris/1.1/1.1.3-rc02/apache-doris-fe-1.1.3-bin.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.3-rc02/apache-doris-fe-1.1.3-bin.tar.gz.sha512`}},{label:"apache-doris-be-1.1.3-bin-arm.tar.gz",links:{source:`${a}doris/1.1/1.1.3-rc02/apache-doris-be-1.1.3-bin-arm.tar.gz`,signature:`${u}doris/1.1/1.1.3-rc02/apache-doris-be-1.1.3-bin-arm.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.3-rc02/apache-doris-be-1.1.3-bin-arm.tar.gz.sha512`}}]},{id:"1.1.2-intel-avx2-jdk8",items:[{label:"apache-doris-fe-1.1.2-bin.tar.gz",links:{source:`${a}doris/1.1/1.1.2-rc05/apache-doris-fe-1.1.2-bin.tar.gz`,signature:`${u}doris/1.1/1.1.2-rc05/apache-doris-fe-1.1.2-bin.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.2-rc05/apache-doris-fe-1.1.2-bin.tar.gz.sha512`}},{label:"apache-doris-be-1.1.2-bin-x86_64.tar.gz",links:{source:`${a}doris/1.1/1.1.2-rc05/apache-doris-be-1.1.2-bin-x86_64.tar.gz`,signature:`${u}doris/1.1/1.1.2-rc05/apache-doris-be-1.1.2-bin-x86_64.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.2-rc05/apache-doris-be-1.1.2-bin-x86_64.tar.gz.sha512`}}]},{id:"1.1.2-intel-noavx2-jdk8",items:[{label:"apache-doris-fe-1.1.2-bin.tar.gz",links:{source:`${a}doris/1.1/1.1.2-rc05/apache-doris-fe-1.1.2-bin.tar.gz`,signature:`${u}doris/1.1/1.1.2-rc05/apache-doris-fe-1.1.2-bin.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.2-rc05/apache-doris-fe-1.1.2-bin.tar.gz.sha512`}},{label:"apache-doris-be-1.1.2-bin-x86_64-noavx2.tar.gz",links:{source:`${a}doris/1.1/1.1.2-rc05/apache-doris-be-1.1.2-bin-x86_64-noavx2.tar.gz`,signature:`${u}doris/1.1/1.1.2-rc05/apache-doris-be-1.1.2-bin-x86_64-noavx2.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.2-rc05/apache-doris-be-1.1.2-bin-x86_64-noavx2.tar.gz.sha512`}}]},{id:"1.1.2-arm-jdk8",items:[{label:"apache-doris-fe-1.1.2-bin.tar.gz",links:{source:`${a}doris/1.1/1.1.2-rc05/apache-doris-fe-1.1.2-bin.tar.gz`,signature:`${u}doris/1.1/1.1.2-rc05/apache-doris-fe-1.1.2-bin.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.2-rc05/apache-doris-fe-1.1.2-bin.tar.gz.sha512`}},{label:"apache-doris-be-1.1.2-bin-arm.tar.gz",links:{source:`${a}doris/1.1/1.1.2-rc05/apache-doris-be-1.1.2-bin-arm.tar.gz`,signature:`${u}doris/1.1/1.1.2-rc05/apache-doris-be-1.1.2-bin-arm.tar.gz.asc`,sha512:`${u}doris/1.1/1.1.2-rc05/apache-doris-be-1.1.2-bin-arm.tar.gz.sha512`}}]}]}(a).find((a=>a.id===e));N(t)};return(0,s.useEffect)((()=>{D()}),[w,Z,$]),(0,s.useEffect)((()=>{x(E.IntelAvx2),y(b.JDK8)}),[w]),s.createElement(l.Z,{title:(0,d.I)({id:"download.title",message:"Download"}),description:(0,d.I)({id:"homepage.banner.subTitle",message:"An easy-to-use, high-performance and unified analytical database"}),wrapperClassName:"download"},s.createElement("section",{className:"quick-download"},s.createElement(c.Z,{align:"left",title:s.createElement(d.Z,{id:"download.quick.download",description:"Quick Download"},"Quick Download")},s.createElement("div",{className:"download-box"},s.createElement("div",{className:"download-type"},s.createElement("label",null,s.createElement(d.Z,{id:"download.binary.version",description:"Binary Version"},"Binary Version")),s.createElement("div",{className:"tabs-radio"},v.map((e=>s.createElement("div",{className:(0,n.Z)("radio",{checked:w===e.value}),key:e.value,onClick:()=>{return a=e.value,void k(a);var a}},e.label))))),s.createElement("div",{className:"download-type"},s.createElement("label",null,s.createElement(d.Z,{id:"download.cpu.model",description:"CPU Model"},"CPU Model")),s.createElement("div",{className:"tabs-radio"},f.map((e=>s.createElement("div",{className:(0,n.Z)("radio",{checked:Z===e.value}),key:e.value,onClick:()=>{return a=e.value,void x(a);var a}},e.label))))),s.createElement("div",{className:"download-type"},s.createElement("label",null,s.createElement(d.Z,{id:"download.download.link",description:"Download"},"Download")),s.createElement("div",{className:"tabs-radio"},s.createElement("div",{className:"radio"},null==z?void 0:z.items.map((e=>s.createElement("div",{className:"inner",key:e.label},s.createElement(o.Z,{to:null==e?void 0:e.links.source},null==e?void 0:e.label),s.createElement("span",null," ( "),s.createElement(o.Z,{to:null==e?void 0:e.links.signature},"asc"),","," ",s.createElement(o.Z,{to:null==e?void 0:e.links.sha512},"sha512"),s.createElement("span",null," )"))))))),s.createElement("div",{className:"intr"},s.createElement(d.Z,{id:"download.quick.download.intr.prefix"},"If the CPU does not support the avx2 instruction set, select the no avx2 version. You can check whether it is supported by"),s.createElement("code",null,"cat /proc/cpuinfo"),s.createElement(d.Z,{id:"download.quick.download.intr.suffix"},". The avx2 instruction will improve the computational efficiency of data structures such as bloom filter."))))),s.createElement("section",{className:"table-content"},s.createElement(c.Z,{align:"left",title:s.createElement(d.Z,{id:"download.release"},"All Releases"),footer:s.createElement(i.Z,{text:s.createElement(d.Z,{id:"download.release.more"},"More"),link:"https://archive.apache.org/dist/doris/"})},s.createElement("div",{className:"content"},s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,s.createElement(d.Z,{id:"download.all.release.version"},"Version")),s.createElement("th",null,s.createElement(d.Z,{id:"download.all.release.date"},"Release Date")),s.createElement("th",null,s.createElement(d.Z,{id:"download.all.release.download"},"Download")),s.createElement("th",null,s.createElement(d.Z,{id:"download.all.release.note"},"Release Note")))),s.createElement("tbody",null,I.map(((e,a)=>s.createElement("tr",{key:a},s.createElement("td",null,e.version),s.createElement("td",null,e.date),s.createElement("td",null,s.createElement(o.Z,{to:e.download},s.createElement(d.Z,{id:"download.source.binary"},"Source / Binary"))),s.createElement("td",null,s.createElement(o.Z,{to:e.note},"Release Note")))))))))),s.createElement("section",{className:"table-content"},s.createElement(c.Z,{align:"left",title:s.createElement(d.Z,{id:"download.flink.connector",description:"Flink Doris Connector"},"Flink Doris Connector")},s.createElement("div",{className:"content"},s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,s.createElement(d.Z,{id:"download.flink.connector.version"},"Version")),s.createElement("th",null,s.createElement(d.Z,{id:"download.flink.release.date"},"Release Date")),s.createElement("th",null,s.createElement(d.Z,{id:"download.flink.version"},"Flink Version")),s.createElement("th",null,s.createElement(d.Z,{id:"download.flink.scala.version"},"Scala Version")),s.createElement("th",null,s.createElement(d.Z,{id:"download.flink.doris.version"},"Doris Version")),s.createElement("th",null,s.createElement(d.Z,{id:"download.source"},"Source")))),s.createElement("tbody",null,C.map(((e,a)=>s.createElement("tr",{key:a},s.createElement("td",null,e.version),s.createElement("td",null,e.date),s.createElement("td",null,e.flink),s.createElement("td",null,e.scala),s.createElement("td",null,e.doris),s.createElement("td",null,s.createElement(o.Z,{to:e.download},s.createElement(d.Z,{id:"download"},"Download")),s.createElement(o.Z,{to:e.github},"GitHub")))))))))),s.createElement("section",{className:"maven"},s.createElement(c.Z,{align:"left",title:s.createElement(d.Z,{id:"download.maven",description:"Maven"},"Maven")},s.createElement(r.Z,{language:"xml",title:"",showLineNumbers:!0},"<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>flink-doris-connector-1.14_2.12</artifactId>\n  \x3c!--artifactId>flink-doris-connector-1.13_2.12</artifactId--\x3e\n  \x3c!--artifactId>flink-doris-connector-1.12_2.12</artifactId--\x3e\n  \x3c!--artifactId>flink-doris-connector-1.11_2.12</artifactId--\x3e\n  \x3c!--version>1.0.3</version--\x3e\n  <version>1.1.0</version>\n</dependency>"))),s.createElement("section",{className:"table-content"},s.createElement(c.Z,{align:"left",title:s.createElement(d.Z,{id:"download.spark.connector",description:"Spark Doris Connector"},"Spark Doris Connector")},s.createElement("div",{className:"content"},s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,s.createElement(d.Z,{id:"download.spark.connector.version"},"Version")),s.createElement("th",null,s.createElement(d.Z,{id:"download.spark.release.date"},"Release Date")),s.createElement("th",null,s.createElement(d.Z,{id:"download.spark.version"},"Spark Version")),s.createElement("th",null,s.createElement(d.Z,{id:"download.spark.scala.version"},"Scala Version")),s.createElement("th",null,s.createElement(d.Z,{id:"download.spark.doris.version"},"Doris Version")),s.createElement("th",null,s.createElement(d.Z,{id:"download.source"},"Source")))),s.createElement("tbody",null,_.map(((e,a)=>s.createElement("tr",{key:a},s.createElement("td",null,e.version),s.createElement("td",null,e.date),s.createElement("td",null,e.spark),s.createElement("td",null,e.scala),s.createElement("td",null,e.doris),s.createElement("td",null,s.createElement(o.Z,{to:e.download},s.createElement(d.Z,{id:"download"},"Download")),s.createElement(o.Z,{to:e.github},"GitHub")))))))))),s.createElement("section",{className:"maven"},s.createElement(c.Z,{align:"left",title:s.createElement(d.Z,{id:"download.maven",description:"Maven"},"Maven")},s.createElement(r.Z,{language:"xml",title:"",showLineNumbers:!0},"<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>spark-doris-connector-3.2_2.12</artifactId>\n  \x3c!--artifactId>spark-doris-connector-3.1_2.12</artifactId--\x3e\n  \x3c!--artifactId>spark-doris-connector-2.3_2.11</artifactId--\x3e\n  \x3c!--version>1.0.1</version--\x3e\n  <version>1.1.0</version>\n</dependency>"))),s.createElement("section",{className:"verify"},s.createElement(c.Z,{align:"left",title:s.createElement(d.Z,{id:"download.verify",description:"Verify"},"Verify")},s.createElement(d.Z,{id:"download.verify.w1"},"To verify the downloaded files, please read"),s.createElement(o.Z,{to:"/community/release-and-verify/release-verify"},s.createElement(d.Z,{id:"download.verify.w2"}," Verify Apache Release ")),s.createElement(d.Z,{id:"download.verify.w3"}," and using these "),s.createElement(o.Z,{to:"https://downloads.apache.org/doris/KEYS"},s.createElement(d.Z,{id:"download.verify.w4"}," KEYS")),s.createElement(d.Z,{id:"download.verify.w5"},". After verification, please read"),s.createElement(o.Z,{to:"/docs/install/source-install/compilation"},s.createElement(d.Z,{id:"download.verify.w6"}," Compilation ")),s.createElement(d.Z,{id:"download.verify.w7"}," and "),s.createElement(o.Z,{to:"/docs/install/install-deploy"},s.createElement(d.Z,{id:"download.verify.w8"}," Installation and deployment ")),s.createElement(d.Z,{id:"download.verify.w9"}," to compile and install Doris."))))}}}]);