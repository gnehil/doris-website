(window.webpackJsonp=window.webpackJsonp||[]).push([[4169],{4795:function(a,s,e){"use strict";e.r(s);var t=e(15),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"element-at"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element-at"}},[a._v("#")]),a._v(" element_at")]),a._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),e("p",[e("code",[a._v("T element_at(ARRAY<T> arr, BIGINT position)")])]),a._v(" "),e("p",[e("code",[a._v("T arr[position]")])]),a._v(" "),e("p",[a._v("返回数组中位置为 "),e("code",[a._v("position")]),a._v(" 的元素。如果该位置上元素不存在，返回NULL。")]),a._v(" "),e("p",[e("code",[a._v("position")]),a._v(" 从1开始，并且支持负数。")]),a._v(" "),e("h3",{attrs:{id:"notice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[a._v("#")]),a._v(" notice")]),a._v(" "),e("p",[e("code",[a._v("仅支持向量化引擎中使用")])]),a._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("p",[e("code",[a._v("position")]),a._v(" 为正数使用范例:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,element_at(c_array, 5) FROM `array_test`;\n+------+-----------------+--------------------------+\n| id   | c_array         | element_at(`c_array`, 5) |\n+------+-----------------+--------------------------+\n|    1 | [1, 2, 3, 4, 5] |                        5 |\n|    2 | [6, 7, 8]       |                     NULL |\n|    3 | []              |                     NULL |\n|    4 | NULL            |                     NULL |\n+------+-----------------+--------------------------+\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("p",[e("code",[a._v("position")]),a._v(" 为负数使用范例:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,c_array[-2] FROM `array_test`;\n+------+-----------------+----------------------------------+\n| id   | c_array         | %element_extract%(`c_array`, -2) |\n+------+-----------------+----------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                                4 |\n|    2 | [6, 7, 8]       |                                7 |\n|    3 | []              |                             NULL |\n|    4 | NULL            |                             NULL |\n+------+-----------------+----------------------------------+\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" keywords")]),a._v(" "),e("p",[a._v("ELEMENT_AT, SUBSCRIPT")])])}),[],!1,null,null,null);s.default=n.exports}}]);