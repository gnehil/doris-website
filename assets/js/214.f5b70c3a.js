(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{643:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"iceberg-external-table-of-doris"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iceberg-external-table-of-doris"}},[t._v("#")]),t._v(" Iceberg External Table of Doris")]),t._v(" "),s("p",[t._v("Iceberg External Table of Doris provides Doris with the ability to access Iceberg external tables directly, eliminating the need for cumbersome data import and leveraging Doris' own OLAP capabilities to solve Iceberg table data analysis problems.")]),t._v(" "),s("ol",[s("li",[t._v("support Iceberg data sources to access Doris")]),t._v(" "),s("li",[t._v("Support joint query between Doris and Iceberg data source tables to perform more complex analysis operations")])]),t._v(" "),s("p",[t._v("This document introduces how to use this feature and the considerations.")]),t._v(" "),s("h2",{attrs:{id:"glossary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[t._v("#")]),t._v(" Glossary")]),t._v(" "),s("h3",{attrs:{id:"noun-in-doris"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noun-in-doris"}},[t._v("#")]),t._v(" Noun in Doris")]),t._v(" "),s("ul",[s("li",[t._v("FE: Frontend, the front-end node of Doris, responsible for metadata management and request access")]),t._v(" "),s("li",[t._v("BE: Backend, the backend node of Doris, responsible for query execution and data storage")])]),t._v(" "),s("h2",{attrs:{id:"how-to-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),s("h3",{attrs:{id:"create-iceberg-external-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-iceberg-external-table"}},[t._v("#")]),t._v(" Create Iceberg External Table")]),t._v(" "),s("p",[t._v("Iceberg tables can be created in Doris in two ways. You do not need to declare the column definitions of the table when creating an external table, Doris can automatically convert them based on the column definitions of the table in Iceberg.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a separate external table to mount the Iceberg table."),s("br"),t._v("\nThe syntax can be viewed in "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE.html"}},[t._v("CREATE TABLE")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Syntax")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("EXTERNAL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ICEBERG\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.table"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icberg_table_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Example: Mount iceberg_table under iceberg_db in Iceberg ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_iceberg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ICEBERG\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.table"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_table"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Create an Iceberg database to mount the corresponding Iceberg database on the remote side, and mount all the tables under the database."),s("br"),t._v("\nYou can check the syntax with "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE.html"}},[t._v("CREATE DATABASE")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Syntax")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" db_name \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Example: mount the iceberg_db in Iceberg and mount all tables under that db")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("iceberg_test_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("The progress of the table build in "),s("code",[t._v("iceberg_test_db")]),t._v(" can be viewed by "),s("code",[t._v("HELP SHOW TABLE CREATION")]),t._v(".")])])]),t._v(" "),s("p",[t._v("You can also create an Iceberg table by explicitly specifying the column definitions according to your needs.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create an Iceberg table")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Syntax")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("EXTERNAL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    col_name col_type "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ICEBERG\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.table"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icberg_table_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Example: Mount iceberg_table under iceberg_db in Iceberg ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_iceberg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id number"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user name"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ICEBERG\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.table"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_table"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])])])]),t._v(" "),s("h4",{attrs:{id:"parameter-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameter-description"}},[t._v("#")]),t._v(" Parameter Description")]),t._v(" "),s("ul",[s("li",[t._v("External Table Columns\n"),s("ul",[s("li",[t._v("Column names should correspond to the Iceberg table")]),t._v(" "),s("li",[t._v("The order of the columns needs to be consistent with the Iceberg table")])])]),t._v(" "),s("li",[t._v("ENGINE needs to be specified as ICEBERG")]),t._v(" "),s("li",[t._v("PROPERTIES property.\n"),s("ul",[s("li",[s("code",[t._v("iceberg.hive.metastore.uris")]),t._v(": Hive Metastore service address")]),t._v(" "),s("li",[s("code",[t._v("iceberg.database")]),t._v(": the name of the database to which Iceberg is mounted")]),t._v(" "),s("li",[s("code",[t._v("iceberg.table")]),t._v(": the name of the table to which Iceberg is mounted, not required when mounting Iceberg database.")]),t._v(" "),s("li",[s("code",[t._v("iceberg.catalog.type")]),t._v(": the catalog method used in Iceberg, the default is "),s("code",[t._v("HIVE_CATALOG")]),t._v(", currently only this method is supported, more Iceberg catalog access methods will be supported in the future.")])])])]),t._v(" "),s("h3",{attrs:{id:"show-table-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-table-structure"}},[t._v("#")]),t._v(" Show table structure")]),t._v(" "),s("p",[t._v("Show table structure can be viewed by "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE.html"}},[t._v("SHOW CREATE TABLE")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"synchronized-mounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-mounts"}},[t._v("#")]),t._v(" Synchronized mounts")]),t._v(" "),s("p",[t._v("When the Iceberg table Schema changes, you can manually synchronize it with the "),s("code",[t._v("REFRESH")]),t._v(" command, which will remove and rebuild the Iceberg external table in Doris, as seen in the "),s("code",[t._v("HELP REFRESH")]),t._v(" help.")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Synchronize the Iceberg table")]),t._v("\nREFRESH "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" t_iceberg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Synchronize the Iceberg database")]),t._v("\nREFRESH "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" iceberg_test_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"data-type-matching"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-type-matching"}},[t._v("#")]),t._v(" Data Type Matching")]),t._v(" "),s("p",[t._v("The supported Iceberg column types correspond to Doris in the following table.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Iceberg")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("INTEGER")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("LONG")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TIMESTAMP")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Timestamp to Datetime with loss of precision")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("STRING")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("STRING")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("UUID")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Use VARCHAR instead")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TIME")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("FIXED")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("BINARY")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("STRUCT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("LIST")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("MAP")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])])])]),t._v(" "),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("ul",[s("li",[t._v("Iceberg table Schema changes "),s("strong",[t._v("are not automatically synchronized")]),t._v(" and require synchronization of Iceberg external tables or databases in Doris via the "),s("code",[t._v("REFRESH")]),t._v(" command.")]),t._v(" "),s("li",[t._v("The current default supported version of Iceberg is 0.12.0,0.13.2 and has not been tested in other versions. More versions will be supported in the future.")])]),t._v(" "),s("h3",{attrs:{id:"query-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-usage"}},[t._v("#")]),t._v(" Query Usage")]),t._v(" "),s("p",[t._v("Once you have finished building the Iceberg external table in Doris, it is no different from a normal Doris OLAP table except that you cannot use the data models in Doris (rollup, preaggregation, materialized views, etc.)")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t_iceberg "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" k1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" k3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'term'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" k4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%doris'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"related-system-configurations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-system-configurations"}},[t._v("#")]),t._v(" Related system configurations")]),t._v(" "),s("h3",{attrs:{id:"fe-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fe-configuration"}},[t._v("#")]),t._v(" FE Configuration")]),t._v(" "),s("p",[t._v("The following configurations are at the Iceberg external table system level and can be configured by modifying "),s("code",[t._v("fe.conf")]),t._v(" or by "),s("code",[t._v("ADMIN SET CONFIG")]),t._v(".")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("iceberg_table_creation_strict_mode")])]),t._v(" "),s("p",[t._v("Iceberg tables are created with strict mode enabled by default."),s("br"),t._v("\nstrict mode means that the column types of the Iceberg table are strictly filtered, and if there are data types that Doris does not currently support, the creation of the table will fail.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("iceberg_table_creation_interval_second")])]),t._v(" "),s("p",[t._v("The background task execution interval for automatic creation of Iceberg tables, default is 10s.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("max_iceberg_table_creation_record_size")])]),t._v(" "),s("p",[t._v("The maximum value reserved for Iceberg table creation records, default is 2000. Only for creating Iceberg database records.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);