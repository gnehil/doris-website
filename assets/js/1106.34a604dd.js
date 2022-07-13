(window.webpackJsonp=window.webpackJsonp||[]).push([[1106],{1732:function(e,a,t){"use strict";t.r(a);var s=t(15),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"lateral-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lateral-view"}},[e._v("#")]),e._v(" Lateral View")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("p",[e._v("Lateral view syntax can be used with Table Function to fulfill the requirement of expanding one row of data into multiple rows (column to rows).")]),e._v(" "),t("p",[e._v("grammar:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("...\nFROM table_name\nlateral_view_ref[ lateral_view_ref ...]\n\nlateral_view_ref:\n\nLATERAL VIEW table_function(...) view_alias as col_name\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("The Lateral view clause must follow the table name or subquery. Can contain multiple Lateral view clauses. "),t("code",[e._v("view_alias")]),e._v(" is the name of the corresponding Lateral View. "),t("code",[e._v("col_name")]),e._v(" is the name of the column produced by the table function "),t("code",[e._v("table_function")]),e._v(".")]),e._v(" "),t("p",[e._v("Table functions currently supported:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("explode_split")])]),e._v(" "),t("li",[t("code",[e._v("explode_bitmap")])]),e._v(" "),t("li",[t("code",[e._v("explode_json_array")])])]),e._v(" "),t("p",[e._v("For specific function descriptions, please refer to the corresponding syntax help documentation.")]),e._v(" "),t("p",[e._v("The data in the table will be Cartesian product with the result set produced by each Lateral View and then return to the upper level.")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("p",[e._v("Here, only the syntax example of Lateral View is given. For the specific meaning and output result description, please refer to the help document of the corresponding table function.")]),e._v(" "),t("ol",[t("li")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select k1, e1 from tbl1\nlateral view explode_split(v1,',') tmp1 as e1 where e1 = \"abc\";\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select k1, e1, e2 from tbl2\nlateral view explode_split(v1,',') tmp1 as e1\nlateral view explode_bitmap(bitmap1) tmp2 as e2\nwhere e2> 3;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('select k1, e1, e2 from tbl3\nlateral view explode_json_array_int("[1,2,3]") tmp1 as e1\nlateral view explode_bitmap(bitmap_from_string("4,5,6")) tmp2 as e2;\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select k1, e1 from (select k1, bitmap_union(members) as x from tbl1 where k1=10000 group by k1)tmp1\nlateral view explode_bitmap(x) tmp2 as e1;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("LATERAL, VIEW\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);