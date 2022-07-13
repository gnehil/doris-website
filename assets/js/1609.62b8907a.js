(window.webpackJsonp=window.webpackJsonp||[]).push([[1609],{2239:function(t,e,a){"use strict";a.r(e);var s=a(15),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" DELETE")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),a("p",[t._v("DELETE")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("This statement is used to conditionally delete data in the specified table (base index) partition.")]),t._v(" "),a("p",[t._v("This operation will also delete the data of the rollup index related to this base index.")]),t._v(" "),a("p",[t._v("grammar:")]),t._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" table_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" partition_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" PARTITIONS "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\ncolumn_name1 op { "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" value_list } "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" column_name2 op { "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" value_list } "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("illustrate:")]),t._v(" "),a("ol",[a("li",[t._v("The optional types of op include: =, >, <, >=, <=, !=, in, not in")]),t._v(" "),a("li",[t._v("Only conditions on the key column can be specified.")]),t._v(" "),a("li",[t._v("When the selected key column does not exist in a rollup, delete cannot be performed.")]),t._v(" "),a("li",[t._v('Conditions can only have an "and" relationship. If you want to achieve an "or" relationship, you need to write the conditions in two DELETE statements.')]),t._v(" "),a("li",[t._v("If it is a partitioned table, you can specify a partition. If not specified, and the session variable delete_without_partition is true, it will be applied to all partitions. If it is a single-partition table, it can be left unspecified.")])]),t._v(" "),a("p",[t._v("Notice:")]),t._v(" "),a("ol",[a("li",[t._v("This statement may reduce query efficiency for a period of time after execution.")]),t._v(" "),a("li",[t._v("The degree of impact depends on the number of delete conditions specified in the statement.")]),t._v(" "),a("li",[t._v("The more conditions you specify, the greater the impact.")])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Delete the data row whose k1 column value is 3 in my_table partition p1")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" my_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" p1\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v('Delete the data rows where the value of column k1 is greater than or equal to 3 and the value of column k2 is "abc" in my_table partition p1')]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" my_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" p1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" k2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v('Delete the data rows where the value of column k1 is greater than or equal to 3 and the value of column k2 is "abc" in my_table partition p1, p2')]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" my_table PARTITIONS "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" k2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("DELETE\n")])])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")])])}),[],!1,null,null,null);e.default=n.exports}}]);