(window.webpackJsonp=window.webpackJsonp||[]).push([[812],{1240:function(t,e,a){"use strict";a.r(e);var s=a(2),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"odbc-external-table-of-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#odbc-external-table-of-doris"}},[t._v("#")]),t._v(" ODBC External Table Of Doris")]),t._v(" "),a("p",[t._v("ODBC External Table Of Doris 提供了Doris通过数据库访问的标准接口(ODBC)来访问外部表，外部表省去了繁琐的数据导入工作，让Doris可以具有了访问各式数据库的能力，并借助Doris本身的OLAP的能力来解决外部表的数据分析问题：")]),t._v(" "),a("ol",[a("li",[t._v("支持各种数据源接入Doris")]),t._v(" "),a("li",[t._v("支持Doris与各种数据源中的表联合查询，进行更加复杂的分析操作")]),t._v(" "),a("li",[t._v("通过insert into将Doris执行的查询结果写入外部的数据源")])]),t._v(" "),a("p",[t._v("本文档主要介绍该功能的实现原理、使用方式等。")]),t._v(" "),a("h2",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),a("h3",{attrs:{id:"doris相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris相关"}},[t._v("#")]),t._v(" Doris相关")]),t._v(" "),a("ul",[a("li",[t._v("FE：Frontend，Doris 的前端节点,负责元数据管理和请求接入")]),t._v(" "),a("li",[t._v("BE：Backend，Doris 的后端节点,负责查询执行和数据存储")])]),t._v(" "),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("h3",{attrs:{id:"doris中创建odbc的外表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris中创建odbc的外表"}},[t._v("#")]),t._v(" Doris中创建ODBC的外表")]),t._v(" "),a("p",[t._v("具体建表语法参照："),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE.html"}},[t._v("CREATE TABLE")])],1),t._v(" "),a("h4",{attrs:{id:"_1-不使用resource创建odbc的外表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-不使用resource创建odbc的外表"}},[t._v("#")]),t._v(" 1. 不使用Resource创建ODBC的外表")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE EXTERNAL TABLE `baseall_oracle` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n) ENGINE=ODBC\nCOMMENT "ODBC"\nPROPERTIES (\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"table" = "baseall",\n"driver" = "Oracle 19 ODBC driver",\n"odbc_type" = "oracle"\n);\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("h4",{attrs:{id:"_2-通过odbc-resource来创建odbc外表-推荐使用的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过odbc-resource来创建odbc外表-推荐使用的方式"}},[t._v("#")]),t._v(" 2. 通过ODBC_Resource来创建ODBC外表 (推荐使用的方式)")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" EXTERNAL RESOURCE "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("oracle_odbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"odbc_catalog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"port"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8086"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"database"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"odbc_type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oracle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"driver"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Oracle 19 ODBC driver"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" EXTERNAL "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("baseall_oracle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ODBC\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ODBC"')]),t._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"odbc_catalog_resource"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oracle_odbc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"database"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"table"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baseall"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("p",[t._v("参数说明：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("hosts")])]),t._v(" "),a("td",[t._v("外表数据库的IP地址")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("driver")])]),t._v(" "),a("td",[t._v("ODBC外表的Driver名，该名字需要和be/conf/odbcinst.ini中的Driver名一致。")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("odbc_type")])]),t._v(" "),a("td",[t._v("外表数据库的类型，当前支持oracle, mysql, postgresql")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("user")])]),t._v(" "),a("td",[t._v("外表数据库的用户名")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("password")])]),t._v(" "),a("td",[t._v("对应用户的密码信息")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("charset")])]),t._v(" "),a("td",[t._v("数据库连接使用的字符集")])])])]),t._v(" "),a("p",[t._v("备注：\n"),a("code",[t._v("PROPERTIES")]),t._v(" 中除了可以添加上述参数之外，还支持每个数据库的ODBC driver 实现的专用参数，比如mysql 的"),a("code",[t._v("sslverify")]),t._v(" 等")]),t._v(" "),a("h5",{attrs:{id:"odbc-driver的安装和配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#odbc-driver的安装和配置"}},[t._v("#")]),t._v(" ODBC Driver的安装和配置")]),t._v(" "),a("p",[t._v("各大主流数据库都会提供ODBC的访问Driver，用户可以执行参照参照各数据库官方推荐的方式安装对应的ODBC Driver LiB库。")]),t._v(" "),a("p",[t._v("安装完成之后，查找对应的数据库的Driver Lib库的路径，并且修改be/conf/odbcinst.ini的配置：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[MySQL Driver]\nDescription     = ODBC for MySQL\nDriver          = /usr/lib64/libmyodbc8w.so\nFileUsage       = 1 \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[t._v("上述配置"),a("code",[t._v("[]")]),t._v("里的对应的是Driver名，在建立外部表时需要保持外部表的Driver名和配置文件之中的一致。")]),t._v(" "),a("li",[a("code",[t._v("Driver=")]),t._v("  这个要根据实际BE安装Driver的路径来填写，本质上就是一个动态库的路径，这里需要保证该动态库的前置依赖都被满足。")])]),t._v(" "),a("p",[a("strong",[t._v("切记，这里要求所有的BE节点都安装上相同的Driver，并且安装路径相同，同时有相同的be/conf/odbcinst.ini的配置。")])]),t._v(" "),a("h3",{attrs:{id:"查询用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询用法"}},[t._v("#")]),t._v(" 查询用法")]),t._v(" "),a("p",[t._v("完成在Doris中建立ODBC外表后，除了无法使用Doris中的数据模型(rollup、预聚合、物化视图等)外，与普通的Doris表并无区别")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select * from oracle_table where k1 > 1000 and k3 ='term' or k4 like '%doris';\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"数据写入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据写入"}},[t._v("#")]),t._v(" 数据写入")]),t._v(" "),a("p",[t._v("在Doris中建立ODBC外表后，可以通过insert into语句直接写入数据，也可以将Doris执行完查询之后的结果写入ODBC外表，或者是从一个ODBC外表将数据导入另一个ODBC外表。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('insert into oracle_table values(1, "doris");\ninsert into oracle_table select * from postgre_table;\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),a("p",[t._v("Doris的数据是由一组batch的方式写入外部表的，如果中途导入中断，之前写入数据可能需要回滚。所以ODBC外表支持数据写入时的事务，事务的支持需要通过session variable："),a("code",[t._v("enable_odbc_transcation")]),t._v("设置。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("set enable_odbc_transcation = true; \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("事务保证了ODBC外表数据写入的原子性，但是一定程度上会降低数据写入的性能，可以考虑酌情开启该功能。")]),t._v(" "),a("h2",{attrs:{id:"数据库odbc版本对应关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库odbc版本对应关系"}},[t._v("#")]),t._v(" 数据库ODBC版本对应关系")]),t._v(" "),a("h3",{attrs:{id:"centos操作系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos操作系统"}},[t._v("#")]),t._v(" Centos操作系统")]),t._v(" "),a("p",[t._v("使用的unixODBC版本是：2.3.1，Doris 0.15，centos 7.9，全部使用yum方式安装。")]),t._v(" "),a("h4",{attrs:{id:"_1-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql"}},[t._v("#")]),t._v(" 1.mysql")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Mysql版本")]),t._v(" "),a("th",[t._v("Mysql ODBC版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("8.0.27")]),t._v(" "),a("td",[t._v("8.0.27,8.026")])]),t._v(" "),a("tr",[a("td",[t._v("5.7.36")]),t._v(" "),a("td",[t._v("5.3.11,5.3.13")])]),t._v(" "),a("tr",[a("td",[t._v("5.6.51")]),t._v(" "),a("td",[t._v("5.3.11,5.3.13")])]),t._v(" "),a("tr",[a("td",[t._v("5.5.62")]),t._v(" "),a("td",[t._v("5.3.11,5.3.13")])])])]),t._v(" "),a("h4",{attrs:{id:"_2-postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-postgresql"}},[t._v("#")]),t._v(" 2.PostgreSQL")]),t._v(" "),a("p",[t._v("PostgreSQL的yum 源 rpm包地址：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这里面包含PostgreSQL从9.x 到 14.x的全部版本，包括对应的ODBC版本，可以根据需要选择安装。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("PostgreSQL版本")]),t._v(" "),a("th",[t._v("PostgreSQL ODBC版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("12.9")]),t._v(" "),a("td",[t._v("postgresql12-odbc-13.02.0000")])]),t._v(" "),a("tr",[a("td",[t._v("13.5")]),t._v(" "),a("td",[t._v("postgresql13-odbc-13.02.0000")])]),t._v(" "),a("tr",[a("td",[t._v("14.1")]),t._v(" "),a("td",[t._v("postgresql14-odbc-13.02.0000")])]),t._v(" "),a("tr",[a("td",[t._v("9.6.24")]),t._v(" "),a("td",[t._v("postgresql96-odbc-13.02.0000")])]),t._v(" "),a("tr",[a("td",[t._v("10.6")]),t._v(" "),a("td",[t._v("postgresql10-odbc-13.02.0000")])]),t._v(" "),a("tr",[a("td",[t._v("11.6")]),t._v(" "),a("td",[t._v("postgresql11-odbc-13.02.0000")])])])]),t._v(" "),a("h4",{attrs:{id:"_3-oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-oracle"}},[t._v("#")]),t._v(" 3.Oracle")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Oracle版本")]),t._v(" "),a("th",[t._v("Oracle ODBC版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Oracle Database 11g Enterprise Edition Release 11.2.0.1.0 - 64bit Production")]),t._v(" "),a("td",[t._v("oracle-instantclient19.13-odbc-19.13.0.0.0")])]),t._v(" "),a("tr",[a("td",[t._v("Oracle Database 12c Standard Edition Release 12.2.0.1.0 - 64bit Production")]),t._v(" "),a("td",[t._v("oracle-instantclient19.13-odbc-19.13.0.0.0")])]),t._v(" "),a("tr",[a("td",[t._v("Oracle Database 18c Enterprise Edition Release 18.0.0.0.0 - Production")]),t._v(" "),a("td",[t._v("oracle-instantclient19.13-odbc-19.13.0.0.0")])]),t._v(" "),a("tr",[a("td",[t._v("Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production")]),t._v(" "),a("td",[t._v("oracle-instantclient19.13-odbc-19.13.0.0.0")])]),t._v(" "),a("tr",[a("td",[t._v("Oracle Database 21c Enterprise Edition Release 21.0.0.0.0 - Production")]),t._v(" "),a("td",[t._v("oracle-instantclient19.13-odbc-19.13.0.0.0")])])])]),t._v(" "),a("p",[t._v("Oracle ODBC驱动版本下载地址：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://download.oracle.com/otn_software/linux/instantclient/1913000/oracle-instantclient19.13-sqlplus-19.13.0.0.0-2.x86_64.rpm\nhttps://download.oracle.com/otn_software/linux/instantclient/1913000/oracle-instantclient19.13-devel-19.13.0.0.0-2.x86_64.rpm\nhttps://download.oracle.com/otn_software/linux/instantclient/1913000/oracle-instantclient19.13-odbc-19.13.0.0.0-2.x86_64.rpm\nhttps://download.oracle.com/otn_software/linux/instantclient/1913000/oracle-instantclient19.13-basic-19.13.0.0.0-2.x86_64.rpm\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"ubuntu操作系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu操作系统"}},[t._v("#")]),t._v(" Ubuntu操作系统")]),t._v(" "),a("p",[t._v("使用的unixODBC版本是：2.3.4，Doris 0.15，Ubuntu 20.04")]),t._v(" "),a("h4",{attrs:{id:"_1-mysql-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql-2"}},[t._v("#")]),t._v(" 1.Mysql")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Mysql版本")]),t._v(" "),a("th",[t._v("Mysql ODBC版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("8.0.27")]),t._v(" "),a("td",[t._v("8.0.11,5.3.13")])])])]),t._v(" "),a("p",[t._v("目前只测试了这一个版本其他版本测试后补充")]),t._v(" "),a("h4",{attrs:{id:"_2-postgresql-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-postgresql-2"}},[t._v("#")]),t._v(" 2.PostgreSQL")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("PostgreSQL版本")]),t._v(" "),a("th",[t._v("PostgreSQL ODBC版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("12.9")]),t._v(" "),a("td",[t._v("psqlodbc-12.02.0000")])])])]),t._v(" "),a("p",[t._v("其他版本只要下载和数据库大版本相符合的ODBC驱动版本，问题不大，这块后续会持续补充其他版本在Ubuntu系统下的测试结果。")]),t._v(" "),a("h4",{attrs:{id:"_3-oracle-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-oracle-2"}},[t._v("#")]),t._v(" 3.Oracle")]),t._v(" "),a("p",[t._v("同上Centos操作系统的Oracle数据库及ODBC对应关系，在ubuntu下安装rpm软件包使用下面方式。")]),t._v(" "),a("p",[t._v("为了在ubuntu下可以进行安装rpm包，我们还需要安装一个alien，这是一个可以将rpm包转换成deb安装包的工具")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt-get install alien\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后执行安装上面四个包")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo alien -i  oracle-instantclient19.13-basic-19.13.0.0.0-2.x86_64.rpm\nsudo alien -i  oracle-instantclient19.13-devel-19.13.0.0.0-2.x86_64.rpm\nsudo alien -i  oracle-instantclient19.13-odbc-19.13.0.0.0-2.x86_64.rpm\nsudo alien -i  oracle-instantclient19.13-sqlplus-19.13.0.0.0-2.x86_64.rpm\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"类型匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型匹配"}},[t._v("#")]),t._v(" 类型匹配")]),t._v(" "),a("p",[t._v("各个数据库之间数据类型存在不同，这里列出了各个数据库中的类型和Doris之中数据类型匹配的情况。")]),t._v(" "),a("h3",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("MySQL")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("替换方案")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前仅支持UTF8编码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前仅支持UTF8编码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h3",{attrs:{id:"postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[t._v("#")]),t._v(" PostgreSQL")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("PostgreSQL")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("替换方案")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前仅支持UTF8编码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前仅支持UTF8编码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("REAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TIMESTAMP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h3",{attrs:{id:"oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[t._v("#")]),t._v(" Oracle")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Oracle")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("替换方案")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Oracle可用number(1) 替换boolean")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Oracle可由NUMMBER替换")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Oracle可由NUMMBER替换")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Oracle可由NUMMBER替换")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NUMBER")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h3",{attrs:{id:"sqlserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlserver"}},[t._v("#")]),t._v(" SQLServer")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("SQLServer")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("替换方案")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前仅支持UTF8编码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前仅支持UTF8编码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("REAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME/DATETIME2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL/NUMERIC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h2",{attrs:{id:"最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),a("p",[t._v("适用于少数据量的同步")]),t._v(" "),a("p",[t._v("例如Mysql中一张表有100万数据，想同步到doris，就可以采用ODBC的方式将数据映射过来，在使用"),a("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual.html"}},[t._v("insert into")]),t._v(" 方式将数据同步到Doris中，如果想同步大批量数据，可以分批次使用"),a("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual.html"}},[t._v("insert into")]),t._v("同步（不建议使用）")],1),t._v(" "),a("h2",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("与原先的MySQL外表的关系")]),t._v(" "),a("p",[t._v("在接入ODBC外表之后，原先的访问MySQL外表的方式将被逐渐弃用。如果之前没有使用过MySQL外表，建议新接入的MySQL表直接使用ODBC的MySQL外表。")])]),t._v(" "),a("li",[a("p",[t._v("除了MySQL,Oracle,PostgreSQL,SQLServer是否能够支持更多的数据库")]),t._v(" "),a("p",[t._v("目前Doris只适配了MySQL,Oracle,PostgreSQL,SQLServer，关于其他的数据库的适配工作正在规划之中，原则上来说任何支持ODBC访问的数据库都能通过ODBC外表来访问。如果您有访问其他外表的需求，欢迎修改代码并贡献给Doris。")])]),t._v(" "),a("li",[a("p",[t._v("什么场合适合通过外表访问")]),t._v(" "),a("p",[t._v("通常在外表数据量较小，少于100W条时，可以通过外部表的方式访问。由于外表无法发挥Doris在存储引擎部分的能力和会带来额外的网络开销，所以建议根据实际对查询的访问时延要求来确定是否通过外部表访问还是将数据导入Doris之中。")])]),t._v(" "),a("li",[a("p",[t._v("通过Oracle访问出现乱码")]),t._v(" "),a("p",[t._v("尝试在BE启动脚本之中添加如下参数："),a("code",[t._v("export NLS_LANG=AMERICAN_AMERICA.AL32UTF8")]),t._v("， 并重新启动所有BE")])]),t._v(" "),a("li",[a("p",[t._v("ANSI Driver or Unicode Driver ？")]),t._v(" "),a("p",[t._v("当前ODBC支持ANSI 与 Unicode 两种Driver形式，当前Doris只支持Unicode Driver。如果强行使用ANSI Driver可能会导致查询结果出错。")])]),t._v(" "),a("li",[a("p",[t._v("报错 "),a("code",[t._v("driver connect Err: 01000 [unixODBC][Driver Manager]Can't open lib 'Xxx' : file not found (0)")])]),t._v(" "),a("p",[t._v("没有在每一个BE上安装好对应数据的Driver，或者是没有在be/conf/odbcinst.ini配置正确的路径，亦或是建表是Driver名与be/conf/odbcinst.ini不同")])]),t._v(" "),a("li",[a("p",[t._v("报错 "),a("code",[t._v("Fail to convert odbc value 'PALO ' TO INT on column:'A'")])]),t._v(" "),a("p",[t._v("ODBC外表的A列类型转换出错，说明外表的实际列与ODBC的映射列的数据类型不同，需要修改列的类型映射")])]),t._v(" "),a("li",[a("p",[t._v("同时使用旧的MySQL表与ODBC外表的Driver时出现程序Crash")]),t._v(" "),a("p",[t._v("这个是MySQL数据库的Driver与现有Doris依赖MySQL外表的兼容问题。推荐解决的方式如下：")]),t._v(" "),a("ul",[a("li",[t._v("方式1：通过ODBC外表替换旧的MySQL外表，并重新编译BE，关闭WITH_MYSQL的选项")]),t._v(" "),a("li",[t._v("方式2：不使用最新8.X的MySQL的ODBC Driver，而是使用5.X的MySQL的ODBC Driver")])])]),t._v(" "),a("li",[a("p",[t._v("过滤条件下推\n当前ODBC外表支持过滤条件下推，目前MySQL的外表是能够支持所有条件下推的。其他的数据库的函数与Doris不同会导致下推查询失败。目前除MySQL外表之外，其他的数据库不支持函数调用的条件下推。Doris是否将所需过滤条件下推，可以通过"),a("code",[t._v("explain")]),t._v(" 查询语句进行确认。")])]),t._v(" "),a("li",[a("p",[t._v("报错"),a("code",[t._v("driver connect Err: xxx")])]),t._v(" "),a("p",[t._v("通常是连接数据库失败，Err部分代表了不同的数据库连接失败的报错。这种情况通常是配置存在问题。可以检查是否错配了ip地址，端口或账号密码。")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);