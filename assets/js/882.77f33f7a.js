(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{1510:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"size-cardinality"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#size-cardinality"}},[s._v("#")]),s._v(" size (cardinality)")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),t("h4",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("BIGINT size(ARRAY<T> arr) \nBIGINT cardinality(ARRAY<T> arr)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("返回数组中元素数量，如果输入数组为NULL，则返回NULL")]),s._v(" "),t("h3",{attrs:{id:"notice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[s._v("#")]),s._v(" notice")]),s._v(" "),t("p",[t("code",[s._v("仅支持向量化引擎中使用")])]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> set enable_vectorized_engine=true;\n\nmysql> select k1,k2,size(k2) from array_test;\n+------+-----------+------------+\n| k1   | k2        | size(`k2`) |\n+------+-----------+------------+\n|    1 | [1, 2, 3] |          3 |\n|    2 | []        |          0 |\n|    3 | NULL      |       NULL |\n+------+-----------+------------+\n\nmysql> select k1,k2,cardinality(k2) from array_test;\n+------+-----------+-------------------+\n| k1   | k2        | cardinality(`k2`) |\n+------+-----------+-------------------+\n|    1 | [1, 2, 3] |                 3 |\n|    2 | []        |                 0 |\n|    3 | NULL      |              NULL |\n+------+-----------+-------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),t("p",[s._v("SIZE, CARDINALITY")])])}),[],!1,null,null,null);a.default=n.exports}}]);