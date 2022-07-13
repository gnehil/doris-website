(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{1240:function(e,a,t){"use strict";t.r(a);var s=t(15),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"batch-delete"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#batch-delete"}},[e._v("#")]),e._v(" Batch Delete")]),e._v(" "),t("p",[e._v("Currently, Doris supports multiple import methods such as broker load, routine load, stream load, etc. The data can only be deleted through the delete statement at present. When the delete statement is used to delete, a new data version will be generated every time delete is executed. Frequent deletion will seriously affect the query performance, and when using the delete method to delete, it is achieved by generating an empty rowset to record the deletion conditions. Each time you read, you must filter the deletion jump conditions. Also when there are many conditions, Performance affects. Compared with other systems, the implementation of greenplum is more like a traditional database product. Snowflake is implemented through the merge syntax.")]),e._v(" "),t("p",[e._v("For scenarios similar to the import of cdc data, insert and delete in the data data generally appear interspersed. In this scenario, our current import method is not enough, even if we can separate insert and delete, it can solve the import problem , But still cannot solve the problem of deletion. Use the batch delete function to solve the needs of these scenarios.\nThere are three ways to merge data import:")]),e._v(" "),t("ol",[t("li",[e._v("APPEND: All data are appended to existing data")]),e._v(" "),t("li",[e._v("DELETE: delete all rows with the same key column value as the imported data")]),e._v(" "),t("li",[e._v("MERGE: APPEND or DELETE according to DELETE ON decision")])]),e._v(" "),t("h2",{attrs:{id:"principle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),t("p",[e._v("This is achieved by adding a hidden column "),t("code",[e._v("__DORIS_DELETE_SIGN__")]),e._v(", because we are only doing batch deletion on the unique model, so we only need to add a hidden column whose type is bool and the aggregate function is replace. In be, the various aggregation write processes are the same as normal columns, and there are two read schemes:")]),e._v(" "),t("p",[e._v("Remove "),t("code",[e._v("__DORIS_DELETE_SIGN__")]),e._v(" when fe encounters extensions such as *, and add the condition of "),t("code",[e._v("__DORIS_DELETE_SIGN__ != true")]),e._v(" by default\nWhen be reads, a column is added for judgment, and the condition is used to determine whether to delete.")]),e._v(" "),t("h3",{attrs:{id:"import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[e._v("#")]),e._v(" Import")]),e._v(" "),t("p",[e._v("When importing, set the value of the hidden column to the value of the "),t("code",[e._v("DELETE ON")]),e._v(" expression during fe parsing. The other aggregation behaviors are the same as the replace aggregation column")]),e._v(" "),t("h3",{attrs:{id:"read"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read"}},[e._v("#")]),e._v(" Read")]),e._v(" "),t("p",[e._v("When reading, add the condition of "),t("code",[e._v("__DORIS_DELETE_SIGN__ != true")]),e._v(" to all olapScanNodes with hidden columns, be does not perceive this process and executes normally")]),e._v(" "),t("h3",{attrs:{id:"cumulative-compaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cumulative-compaction"}},[e._v("#")]),e._v(" Cumulative Compaction")]),e._v(" "),t("p",[e._v("In Cumulative Compaction, hidden columns are treated as normal columns, and the compaction logic remains unchanged")]),e._v(" "),t("h3",{attrs:{id:"base-compaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-compaction"}},[e._v("#")]),e._v(" Base Compaction")]),e._v(" "),t("p",[e._v("In Base Compaction, delete the rows marked for deletion to reduce the space occupied by data")]),e._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("p",[e._v("The import syntax design is mainly to add a column mapping that specifies the field of the delete mark column, and this column needs to be added to the imported data. The method of setting each import method is as follows")]),e._v(" "),t("h4",{attrs:{id:"stream-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[e._v("#")]),e._v(" stream load")]),e._v(" "),t("p",[e._v("The wording of stream load adds a field to set the delete mark column in the columns field in the header. Example\n"),t("code",[e._v('-H "columns: k1, k2, label_c3" -H "merge_type: [MERGE|APPEND|DELETE]" -H "delete: label_c3=1"')])]),e._v(" "),t("h4",{attrs:{id:"broker-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broker-load"}},[e._v("#")]),e._v(" broker load")]),e._v(" "),t("p",[e._v("Set the field to delete the mark column at "),t("code",[e._v("PROPERTIES")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('LOAD LABEL db1.label1\n(\n    [MERGE|APPEND|DELETE] DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1,tmp_c2, label_c3)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1,\n    )\n    [DELETE ON label=true]\n\n)\nWITH BROKER\'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n    \n);\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br")])]),t("h4",{attrs:{id:"routine-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[e._v("#")]),e._v(" routine load")]),e._v(" "),t("p",[e._v("Routine load adds a mapping to the "),t("code",[e._v("columns")]),e._v(" field. The mapping method is the same as above, the example is as follows")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('   CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, k3, v1, v2, label),\n    WHERE k1> 100 and k2 like "%doris%"\n    [DELETE ON label=true]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br")])]),t("h2",{attrs:{id:"enable-bulk-delete-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-bulk-delete-support"}},[e._v("#")]),e._v(" Enable bulk delete support")]),e._v(" "),t("p",[e._v("There are two ways of enabling batch delete support:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("By adding "),t("code",[e._v("enable_batch_delete_by_default=true")]),e._v(" in the fe configuration file, all newly created tables after restarting fe support batch deletion, this option defaults to false")])]),e._v(" "),t("li",[t("p",[e._v("For tables that have not changed the above fe configuration or for existing tables that do not support the bulk delete function, you can use the following statement:\n"),t("code",[e._v('ALTER TABLE tablename ENABLE FEATURE "BATCH_DELETE"')]),e._v(" to enable the batch delete.")])])]),e._v(" "),t("p",[e._v("If you want to determine whether a table supports batch delete, you can set a session variable to display the hidden columns "),t("code",[e._v("SET show_hidden_columns=true")]),e._v(", and then use "),t("code",[e._v("desc tablename")]),e._v(", if there is a "),t("code",[e._v("__DORIS_DELETE_SIGN__")]),e._v(" column in the output, it is supported, if not, it is not supported")]),e._v(" "),t("h2",{attrs:{id:"note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),t("ol",[t("li",[e._v("Since import operations other than stream load may be executed out of order inside doris, if it is not stream load when importing using the "),t("code",[e._v("MERGE")]),e._v(" method, it needs to be used with load sequence. For the specific syntax, please refer to the sequence column related documents")]),e._v(" "),t("li",[t("code",[e._v("DELETE ON")]),e._v(" condition can only be used with MERGE")])]),e._v(" "),t("h2",{attrs:{id:"usage-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-example"}},[e._v("#")]),e._v(" Usage example")]),e._v(" "),t("p",[e._v("Let's take stream load as an example to show how to use it")]),e._v(" "),t("ol",[t("li",[e._v("Import data normally:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: APPEND" -T ~/table1_data http://127.0.0.1: 8130/api/test/table1/_stream_load\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The APPEND condition can be omitted, which has the same effect as the following statement:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -T ~/table1_data http://127.0.0.1:8130/api/test/table1 /_stream_load\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Delete all data with the same key as the imported data")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: DELETE" -T ~/table1_data http://127.0.0.1: 8130/api/test/table1/_stream_load\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Before load:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      3 |        2 | tom      |    2 |\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("Load data:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("3,2,tom,0\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("After load:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Import the same row as the key column of the row with "),t("code",[e._v("site_id=1")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: MERGE" -H "delete: siteid=1" -T ~/ table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Before load:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n|      1 |        1 | jim      |    2 |\n+--------+----------+----------+------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("Load data:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("2,1,grace,2\n3,2,tom,2\n1,1,jim,2\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("After load:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      2 |        1 | grace    |    2 |\n|      3 |        2 | tom      |    2 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);