(window.webpackJsonp=window.webpackJsonp||[]).push([[3109],{3739:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"bitmap-subset-in-range"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-subset-in-range"}},[s._v("#")]),s._v(" bitmap_subset_in_range")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("h4",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),t("p",[t("code",[s._v("BITMAP BITMAP_SUBSET_IN_RANGE(BITMAP src, BIGINT range_start, BIGINT range_end)")])]),s._v(" "),t("p",[s._v("返回 BITMAP 指定范围内的子集(不包括范围结束)。")]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,2,3,4,5'), 0, 9)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,2,3,4,5 |\n+-----------+\n\nmysql> select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,2,3,4,5'), 2, 3)) value;\n+-------+\n| value |\n+-------+\n| 2     |\n+-------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("BITMAP_SUBSET_IN_RANGE,BITMAP_SUBSET,BITMAP\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);