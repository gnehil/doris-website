"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[43901],{3905:(t,e,r)=>{r.d(e,{Zo:()=>o,kt:()=>c});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),i=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},o=function(t){var e=i(t.components);return a.createElement(m.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),k=i(r),c=n,s=k["".concat(m,".").concat(c)]||k[c]||N[c]||l;return r?a.createElement(s,p(p({ref:e},o),{},{components:r})):a.createElement(s,p({ref:e},o))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,p=new Array(l);p[0]=k;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d.mdxType="string"==typeof t?t:n,p[1]=d;for(var i=2;i<l;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},12508:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>N,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const l={title:"Doris On JDBC",language:"zh-CN"},p=void 0,d={unversionedId:"ecosystem/external-table/jdbc-of-doris",id:"version-dev/ecosystem/external-table/jdbc-of-doris",title:"Doris On JDBC",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/ecosystem/external-table/jdbc-of-doris.md",sourceDirName:"ecosystem/external-table",slug:"/ecosystem/external-table/jdbc-of-doris",permalink:"/zh-CN/docs/dev/ecosystem/external-table/jdbc-of-doris",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/ecosystem/external-table/jdbc-of-doris.md",tags:[],version:"dev",frontMatter:{title:"Doris On JDBC",language:"zh-CN"},sidebar:"docs",previous:{title:"Doris On ODBC",permalink:"/zh-CN/docs/dev/ecosystem/external-table/odbc-of-doris"},next:{title:"Doris On Hive",permalink:"/zh-CN/docs/dev/ecosystem/external-table/hive-of-doris"}},m={},i=[{value:"Doris\u4e2d\u521b\u5efaJDBC\u7684\u5916\u8868",id:"doris\u4e2d\u521b\u5efajdbc\u7684\u5916\u8868",level:3},{value:"1. \u901a\u8fc7JDBC_Resource\u6765\u521b\u5efaJDBC\u5916\u8868",id:"1-\u901a\u8fc7jdbc_resource\u6765\u521b\u5efajdbc\u5916\u8868",level:4},{value:"\u67e5\u8be2\u7528\u6cd5",id:"\u67e5\u8be2\u7528\u6cd5",level:3},{value:"\u6570\u636e\u5199\u5165",id:"\u6570\u636e\u5199\u5165",level:3},{value:"\u4e8b\u52a1",id:"\u4e8b\u52a1",level:4},{value:"1.Mysql\u6d4b\u8bd5",id:"1mysql\u6d4b\u8bd5",level:4},{value:"2.PostgreSQL\u6d4b\u8bd5",id:"2postgresql\u6d4b\u8bd5",level:4},{value:"3.SQLServer\u6d4b\u8bd5",id:"3sqlserver\u6d4b\u8bd5",level:4},{value:"4.oracle\u6d4b\u8bd5",id:"4oracle\u6d4b\u8bd5",level:4},{value:"\u7c7b\u578b\u5339\u914d",id:"\u7c7b\u578b\u5339\u914d",level:2},{value:"MySQL",id:"mysql",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Oracle",id:"oracle",level:3},{value:"SQL server",id:"sql-server",level:3},{value:"Q&amp;A",id:"qa",level:2}],o={toc:i};function N(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"jdbc-external-table-of-doris"},"JDBC External Table Of Doris"),(0,n.kt)("p",null,"JDBC External Table Of Doris \u63d0\u4f9b\u4e86Doris\u901a\u8fc7\u6570\u636e\u5e93\u8bbf\u95ee\u7684\u6807\u51c6\u63a5\u53e3(JDBC)\u6765\u8bbf\u95ee\u5916\u90e8\u8868\uff0c\u5916\u90e8\u8868\u7701\u53bb\u4e86\u7e41\u7410\u7684\u6570\u636e\u5bfc\u5165\u5de5\u4f5c\uff0c\u8ba9Doris\u53ef\u4ee5\u5177\u6709\u4e86\u8bbf\u95ee\u5404\u5f0f\u6570\u636e\u5e93\u7684\u80fd\u529b\uff0c\u5e76\u501f\u52a9Doris\u672c\u8eab\u7684OLAP\u7684\u80fd\u529b\u6765\u89e3\u51b3\u5916\u90e8\u8868\u7684\u6570\u636e\u5206\u6790\u95ee\u9898\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u652f\u6301\u5404\u79cd\u6570\u636e\u6e90\u63a5\u5165Doris"),(0,n.kt)("li",{parentName:"ol"},"\u652f\u6301Doris\u4e0e\u5404\u79cd\u6570\u636e\u6e90\u4e2d\u7684\u8868\u8054\u5408\u67e5\u8be2\uff0c\u8fdb\u884c\u66f4\u52a0\u590d\u6742\u7684\u5206\u6790\u64cd\u4f5c")),(0,n.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u8be5\u529f\u80fd\u7684\u4f7f\u7528\u65b9\u5f0f\u7b49\u3002"),(0,n.kt)("h3",{id:"doris\u4e2d\u521b\u5efajdbc\u7684\u5916\u8868"},"Doris\u4e2d\u521b\u5efaJDBC\u7684\u5916\u8868"),(0,n.kt)("p",null,"\u5177\u4f53\u5efa\u8868\u8bed\u6cd5\u53c2\u7167\uff1a",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE")),(0,n.kt)("h4",{id:"1-\u901a\u8fc7jdbc_resource\u6765\u521b\u5efajdbc\u5916\u8868"},"1. \u901a\u8fc7JDBC_Resource\u6765\u521b\u5efaJDBC\u5916\u8868"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE jdbc_resource\nproperties (\n    "type"="jdbc",\n    "user"="root",\n    "password"="123456",\n    "jdbc_url"="jdbc:mysql://192.168.0.1:3306/test",\n    "driver_url"="http://IP:port/mysql-connector-java-5.1.47.jar",\n    "driver_class"="com.mysql.jdbc.Driver"\n);\n     \nCREATE EXTERNAL TABLE `baseall_mysql` (\n  `k1` tinyint(4) NULL,\n  `k2` smallint(6) NULL,\n  `k3` int(11) NULL,\n  `k4` bigint(20) NULL,\n  `k5` decimal(9, 3) NULL\n) ENGINE=JDBC\nPROPERTIES (\n"resource" = "jdbc_resource",\n"table" = "baseall",\n"table_type"="mysql"\n);\n')),(0,n.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"type")),(0,n.kt)("td",{parentName:"tr",align:null},'"jdbc", \u5fc5\u586b\u9879\u6807\u5fd7\u8d44\u6e90\u7c7b\u578b')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u5916\u8868\u6570\u636e\u5e93\u6240\u4f7f\u7684\u7528\u6237\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"password")),(0,n.kt)("td",{parentName:"tr",align:null},"\u8be5\u7528\u6237\u5bf9\u5e94\u7684\u5bc6\u7801\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"jdbc_url")),(0,n.kt)("td",{parentName:"tr",align:null},'JDBC\u7684URL\u534f\u8bae\uff0c\u5305\u62ec\u6570\u636e\u5e93\u7c7b\u578b\uff0cIP\u5730\u5740\uff0c\u7aef\u53e3\u53f7\u548c\u6570\u636e\u5e93\u540d\uff0c\u4e0d\u540c\u6570\u636e\u5e93\u534f\u8bae\u683c\u5f0f\u4e0d\u4e00\u6837\u3002\u4f8b\u5982mysql: "jdbc:mysql://127.0.0.1:3306/test"\u3002')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"driver_class")),(0,n.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u5916\u8868\u6570\u636e\u5e93\u7684\u9a71\u52a8\u5305\u7c7b\u540d\uff0c\u4f8b\u5982mysql\u662f:com.mysql.jdbc.Driver.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"driver_url")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u4e0b\u8f7d\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u5e93\u7684jar\u5305\u9a71\u52a8URL\u3002http://IP:port/mysql-connector-java-5.1.47.jar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"resource")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5728Doris\u4e2d\u5efa\u7acb\u5916\u8868\u65f6\u4f9d\u8d56\u7684\u8d44\u6e90\u540d\uff0c\u5bf9\u5e94\u4e0a\u6b65\u521b\u5efa\u8d44\u6e90\u65f6\u7684\u540d\u5b57\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"table")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5728Doris\u4e2d\u5efa\u7acb\u5916\u8868\u65f6\uff0c\u4e0e\u5916\u90e8\u6570\u636e\u5e93\u76f8\u6620\u5c04\u7684\u8868\u540d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"table_type")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5728Doris\u4e2d\u5efa\u7acb\u5916\u8868\u65f6\uff0c\u8be5\u8868\u6765\u81ea\u90a3\u4e2a\u6570\u636e\u5e93\u3002\u4f8b\u5982mysql,postgresql,sqlserver,oracle")))),(0,n.kt)("h3",{id:"\u67e5\u8be2\u7528\u6cd5"},"\u67e5\u8be2\u7528\u6cd5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"select * from mysql_table where k1 > 1000 and k3 ='term';\n")),(0,n.kt)("h3",{id:"\u6570\u636e\u5199\u5165"},"\u6570\u636e\u5199\u5165"),(0,n.kt)("p",null,"\u5728Doris\u4e2d\u5efa\u7acbJDBC\u5916\u8868\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7insert into\u8bed\u53e5\u76f4\u63a5\u5199\u5165\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u5c06Doris\u6267\u884c\u5b8c\u67e5\u8be2\u4e4b\u540e\u7684\u7ed3\u679c\u5199\u5165JDBC\u5916\u8868\uff0c\u6216\u8005\u662f\u4ece\u4e00\u4e2aJDBC\u5916\u8868\u5c06\u6570\u636e\u5bfc\u5165\u53e6\u4e00\u4e2aJDBC\u5916\u8868\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'insert into mysql_table values(1, "doris");\ninsert into mysql_table select * from table;\n')),(0,n.kt)("h4",{id:"\u4e8b\u52a1"},"\u4e8b\u52a1"),(0,n.kt)("p",null,"Doris\u7684\u6570\u636e\u662f\u7531\u4e00\u7ec4batch\u7684\u65b9\u5f0f\u5199\u5165\u5916\u90e8\u8868\u7684\uff0c\u5982\u679c\u4e2d\u9014\u5bfc\u5165\u4e2d\u65ad\uff0c\u4e4b\u524d\u5199\u5165\u6570\u636e\u53ef\u80fd\u9700\u8981\u56de\u6eda\u3002\u6240\u4ee5JDBC\u5916\u8868\u652f\u6301\u6570\u636e\u5199\u5165\u65f6\u7684\u4e8b\u52a1\uff0c\u4e8b\u52a1\u7684\u652f\u6301\u9700\u8981\u901a\u8fc7\u8bbe\u7f6esession variable: ",(0,n.kt)("inlineCode",{parentName:"p"},"enable_odbc_transcation "),"(ODBC\u4e8b\u52a1\u4e5f\u53d7\u6b64\u53d8\u91cf\u63a7\u5236)\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set enable_odbc_transcation = true; \n")),(0,n.kt)("p",null,"\u4e8b\u52a1\u4fdd\u8bc1\u4e86JDBC\u5916\u8868\u6570\u636e\u5199\u5165\u7684\u539f\u5b50\u6027\uff0c\u4f46\u662f\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4f1a\u964d\u4f4e\u6570\u636e\u5199\u5165\u7684\u6027\u80fd\uff0c\u53ef\u4ee5\u8003\u8651\u914c\u60c5\u5f00\u542f\u8be5\u529f\u80fd\u3002"),(0,n.kt)("h4",{id:"1mysql\u6d4b\u8bd5"},"1.Mysql\u6d4b\u8bd5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Mysql\u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:null},"Mysql JDBC\u9a71\u52a8\u7248\u672c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8.0.30"),(0,n.kt)("td",{parentName:"tr",align:null},"mysql-connector-java-5.1.47.jar")))),(0,n.kt)("h4",{id:"2postgresql\u6d4b\u8bd5"},"2.PostgreSQL\u6d4b\u8bd5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"PostgreSQL\u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:null},"PostgreSQL JDBC\u9a71\u52a8\u7248\u672c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"14.5"),(0,n.kt)("td",{parentName:"tr",align:null},"postgresql-42.5.0.jar")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE jdbc_pg\nproperties (\n    "type"="jdbc",\n    "user"="postgres",\n    "password"="123456",\n    "jdbc_url"="jdbc:postgresql://127.0.0.1:5442/postgres?currentSchema=doris_test",\n    "driver_url"="http://127.0.0.1:8881/postgresql-42.5.0.jar",\n    "driver_class"="org.postgresql.Driver"\n);\n\nCREATE EXTERNAL TABLE `ext_pg` (\n  `k1` int\n) ENGINE=JDBC\nPROPERTIES (\n"resource" = "jdbc_pg",\n"table" = "pg_tbl",\n"table_type"="postgresql"\n);\n')),(0,n.kt)("h4",{id:"3sqlserver\u6d4b\u8bd5"},"3.SQLServer\u6d4b\u8bd5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"SQLserver\u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:null},"SQLserver JDBC\u9a71\u52a8\u7248\u672c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2022"),(0,n.kt)("td",{parentName:"tr",align:null},"mssql-jdbc-11.2.0.jre8.jar")))),(0,n.kt)("h4",{id:"4oracle\u6d4b\u8bd5"},"4.oracle\u6d4b\u8bd5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Oracle\u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:null},"Oracle JDBC\u9a71\u52a8\u7248\u672c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"11"),(0,n.kt)("td",{parentName:"tr",align:null},"ojdbc6.jar")))),(0,n.kt)("p",null,"\u76ee\u524d\u53ea\u6d4b\u8bd5\u4e86\u8fd9\u4e00\u4e2a\u7248\u672c\u5176\u4ed6\u7248\u672c\u6d4b\u8bd5\u540e\u8865\u5145"),(0,n.kt)("h2",{id:"\u7c7b\u578b\u5339\u914d"},"\u7c7b\u578b\u5339\u914d"),(0,n.kt)("p",null,"\u5404\u4e2a\u6570\u636e\u5e93\u4e4b\u95f4\u6570\u636e\u7c7b\u578b\u5b58\u5728\u4e0d\u540c\uff0c\u8fd9\u91cc\u5217\u51fa\u4e86\u5404\u4e2a\u6570\u636e\u5e93\u4e2d\u7684\u7c7b\u578b\u548cDoris\u4e4b\u4e2d\u6570\u636e\u7c7b\u578b\u5339\u914d\u7684\u60c5\u51b5\u3002"),(0,n.kt)("h3",{id:"mysql"},"MySQL"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"MySQL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL")))),(0,n.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PostgreSQL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"REAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE PRECISION"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TIMESTAMP"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL")))),(0,n.kt)("h3",{id:"oracle"},"Oracle"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Oracle"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL")))),(0,n.kt)("h3",{id:"sql-server"},"SQL server"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"SQLServer"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BIT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"REAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL")))),(0,n.kt)("h2",{id:"qa"},"Q&A"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9664\u4e86MySQL,Oracle,PostgreSQL,SQLServer\u662f\u5426\u80fd\u591f\u652f\u6301\u66f4\u591a\u7684\u6570\u636e\u5e93"),(0,n.kt)("p",{parentName:"li"},"\u76ee\u524dDoris\u53ea\u9002\u914d\u4e86MySQL\uff0cPostgreSQL,SQLServer,Oracle.\u5173\u4e8e\u5176\u4ed6\u7684\u6570\u636e\u5e93\u7684\u9002\u914d\u5de5\u4f5c\u6b63\u5728\u89c4\u5212\u4e4b\u4e2d\uff0c\u539f\u5219\u4e0a\u6765\u8bf4\u4efb\u4f55\u652f\u6301JDBC\u8bbf\u95ee\u7684\u6570\u636e\u5e93\u90fd\u80fd\u901a\u8fc7JDBC\u5916\u8868\u6765\u8bbf\u95ee\u3002\u5982\u679c\u60a8\u6709\u8bbf\u95ee\u5176\u4ed6\u5916\u8868\u7684\u9700\u6c42\uff0c\u6b22\u8fce\u4fee\u6539\u4ee3\u7801\u5e76\u8d21\u732e\u7ed9Doris\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bfb\u5199mysql\u5916\u8868\u7684emoji\u8868\u60c5\u51fa\u73b0\u4e71\u7801"),(0,n.kt)("p",{parentName:"li"},"Doris\u8fdb\u884cjdbc\u5916\u8868\u8fde\u63a5\u65f6\uff0c\u7531\u4e8emysql\u4e4b\u4e2d\u9ed8\u8ba4\u7684utf8\u7f16\u7801\u4e3autf8mb3\uff0c\u65e0\u6cd5\u8868\u793a\u9700\u89814\u5b57\u8282\u7f16\u7801\u7684emoji\u8868\u60c5\u3002\u8fd9\u91cc\u9700\u8981\u5728\u5efa\u7acbmysql\u5916\u8868\u65f6\u8bbe\u7f6e\u5bf9\u5e94\u5217\u7684\u7f16\u7801\u4e3autf8mb4,\u8bbe\u7f6e\u670d\u52a1\u5668\u7f16\u7801\u4e3autf8mb4,JDBC Url\u4e2d\u7684characterEncoding\u4e0d\u914d\u7f6e.\uff08\u8be5\u5c5e\u6027\u4e0d\u652f\u6301utf8mb4,\u914d\u7f6e\u4e86\u975eutf8mb4\u5c06\u5bfc\u81f4\u65e0\u6cd5\u5199\u5165\u8868\u60c5\uff0c\u56e0\u6b64\u8981\u7559\u7a7a\uff0c\u4e0d\u914d\u7f6e\uff09"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u53ef\u5168\u5c40\u4fee\u6539\u914d\u7f6e\u9879\n\n\u4fee\u6539mysql\u76ee\u5f55\u4e0b\u7684my.ini\u6587\u4ef6\uff08linux\u7cfb\u7edf\u4e3aetc\u76ee\u5f55\u4e0b\u7684my.cnf\u6587\u4ef6\uff09\n[client]\ndefault-character-set=utf8mb4\n\n[mysql]\n\u8bbe\u7f6emysql\u9ed8\u8ba4\u5b57\u7b26\u96c6\ndefault-character-set=utf8mb4\n\n[mysqld]\n\u8bbe\u7f6emysql\u5b57\u7b26\u96c6\u670d\u52a1\u5668\ncharacter-set-server=utf8mb4\ncollation-server=utf8mb4_unicode_ci\ninit_connect='SET NAMES utf8mb4\n\n\u4fee\u6539\u5bf9\u5e94\u8868\u4e0e\u5217\u7684\u7c7b\u578b\nALTER TABLE table_name MODIFY  colum_name  VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n\nALTER TABLE table_name CHARSET=utf8mb4;\n\nSET NAMES utf8mb4\n\n")))}N.isMDXComponent=!0}}]);