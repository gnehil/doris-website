(window.webpackJsonp=window.webpackJsonp||[]).push([[4163],{4789:function(s,a,n){"use strict";n.r(a);var t=n(15),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"array-distinct"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#array-distinct"}},[s._v("#")]),s._v(" array_distinct")]),s._v(" "),n("h3",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),n("h4",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ARRAY<T> array_distinct(ARRAY<T> arr)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("返回去除了重复元素的数组，如果输入数组为NULL，则返回NULL。")]),s._v(" "),n("h3",{attrs:{id:"notice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[s._v("#")]),s._v(" notice")]),s._v(" "),n("p",[n("code",[s._v("仅支持向量化引擎中使用")])]),s._v(" "),n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> set enable_vectorized_engine=true;\n\nmysql> select k1, k2, array_distinct(k2) from array_test;\n+------+-----------------------------+---------------------------+\n| k1   | k2                          | array_distinct(k2)        |\n+------+-----------------------------+---------------------------+\n| 1    | [1, 2, 3, 4, 5]             | [1, 2, 3, 4, 5]           |\n| 2    | [6, 7, 8]                   | [6, 7, 8]                 |\n| 3    | []                          | []                        |\n| 4    | NULL                        | NULL                      |\n| 5    | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [1, 2, 3, 4, 5]           |\n| 6    | [1, 2, 3, NULL]             | [1, 2, 3, NULL]           |\n| 7    | [1, 2, 3, NULL, NULL]       | [1, 2, 3, NULL, NULL]     |\n+------+-----------------------------+---------------------------+\n\nmysql> select k1, k2, array_distinct(k2) from array_test01;\n+------+------------------------------------------+---------------------------+\n| k1   | k2                                       | array_distinct(`k2`)      |\n+------+------------------------------------------+---------------------------+\n| 1    | ['a', 'b', 'c', 'd', 'e']                | ['a', 'b', 'c', 'd', 'e'] |\n| 2    | ['f', 'g', 'h']                          | ['f', 'g', 'h']           |\n| 3    | ['']                                     | ['']                      |\n| 3    | [NULL]                                   | [NULL]                    |\n| 5    | ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'] | ['a', 'b', 'c', 'd', 'e'] |\n| 6    | NULL                                     | NULL                      |\n| 7    | ['a', 'b', NULL]                         | ['a', 'b', NULL]          |\n| 8    | ['a', 'b', NULL, NULL]                   | ['a', 'b', NULL, NULL]    |\n+------+------------------------------------------+---------------------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h3",{attrs:{id:"keywords"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),n("p",[s._v("ARRAY, DISTINCT, ARRAY_DISTINCT")])])}),[],!1,null,null,null);a.default=e.exports}}]);