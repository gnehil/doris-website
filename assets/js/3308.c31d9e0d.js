(window.webpackJsonp=window.webpackJsonp||[]).push([[3308],{3938:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"drop-materialized-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drop-materialized-view"}},[s._v("#")]),s._v(" DROP-MATERIALIZED-VIEW")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("DROP MATERIALIZED VIEW")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("该语句用于删除物化视图。同步语法")]),s._v(" "),t("p",[s._v("语法：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" MATERIALIZED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" mv_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",[t("li",[t("p",[s._v("IF EXISTS:\n如果物化视图不存在，不要抛出错误。如果不声明此关键字，物化视图不存在则报错。")])]),s._v(" "),t("li",[t("p",[s._v("mv_name:\n待删除的物化视图的名称。必填项。")])]),s._v(" "),t("li",[t("p",[s._v("table_name:\n待删除的物化视图所属的表名。必填项。")])])]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("p",[s._v("表结构为")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" all_type_table "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------+-------+----------+------+-------+---------+-------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" IndexName      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Field "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Type")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("Null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Key")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------+-------+----------+------+-------+---------+-------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" all_type_table "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k1    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TINYINT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k2    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SMALLINT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NONE  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k3    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NONE  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k4    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NONE  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k5    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" LARGEINT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NONE  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k6    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NONE  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k7    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DOUBLE")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NONE  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k1_sumk2       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k1    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TINYINT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k2    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SMALLINT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" SUM   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------+-------+----------+------+-------+---------+-------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("ol",[t("li",[t("p",[s._v("删除表 all_type_table 的名为 k1_sumk2 的物化视图")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" materialized "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" k1_sumk2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" all_type_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("物化视图被删除后的表结构")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+----------------+-------+----------+------+-------+---------+-------+\n| IndexName      | Field | Type     | Null | Key   | Default | Extra |\n+----------------+-------+----------+------+-------+---------+-------+\n| all_type_table | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | NONE  |\n|                | k3    | INT      | Yes  | false | N/A     | NONE  |\n|                | k4    | BIGINT   | Yes  | false | N/A     | NONE  |\n|                | k5    | LARGEINT | Yes  | false | N/A     | NONE  |\n|                | k6    | FLOAT    | Yes  | false | N/A     | NONE  |\n|                | k7    | DOUBLE   | Yes  | false | N/A     | NONE  |\n+----------------+-------+----------+------+-------+---------+-------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("删除表 all_type_table 中一个不存在的物化视图")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" materialized "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" k1_k2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" all_type_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nERROR "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1064")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": errCode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" detailMessage "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Materialized "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("k1_k2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" does "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" exist "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("all_type_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("删除请求直接报错")])]),s._v(" "),t("li",[t("p",[s._v("删除表 all_type_table 中的物化视图 k1_k2，不存在不报错。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" materialized "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" k1_k2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" all_type_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("存在则删除，不存在则不报错。")])])]),s._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("DROP, MATERIALIZED, VIEW\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=r.exports}}]);