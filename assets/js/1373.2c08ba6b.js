(window.webpackJsonp=window.webpackJsonp||[]).push([[1373],{2003:function(e,a,s){"use strict";s.r(a);var t=s(15),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"element-at"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-at"}},[e._v("#")]),e._v(" element_at")]),e._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),s("p",[s("code",[e._v("T element_at(ARRAY<T> arr, BIGINT position)")])]),e._v(" "),s("p",[s("code",[e._v("T arr[position]")])]),e._v(" "),s("p",[e._v("Returns an element of an array located at the input position. If there is no element at the position, return NULL.")]),e._v(" "),s("p",[s("code",[e._v("position")]),e._v(" is 1-based and support negtive number.")]),e._v(" "),s("h3",{attrs:{id:"notice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[e._v("#")]),e._v(" notice")]),e._v(" "),s("p",[s("code",[e._v("Only supported in vectorized engine")])]),e._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("p",[e._v("positive "),s("code",[e._v("position")]),e._v(" example:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,element_at(c_array, 5) FROM `array_test`;\n+------+-----------------+--------------------------+\n| id   | c_array         | element_at(`c_array`, 5) |\n+------+-----------------+--------------------------+\n|    1 | [1, 2, 3, 4, 5] |                        5 |\n|    2 | [6, 7, 8]       |                     NULL |\n|    3 | []              |                     NULL |\n|    4 | NULL            |                     NULL |\n+------+-----------------+--------------------------+\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("negtive "),s("code",[e._v("position")]),e._v(" example:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,c_array[-2] FROM `array_test`;\n+------+-----------------+----------------------------------+\n| id   | c_array         | %element_extract%(`c_array`, -2) |\n+------+-----------------+----------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                                4 |\n|    2 | [6, 7, 8]       |                                7 |\n|    3 | []              |                             NULL |\n|    4 | NULL            |                             NULL |\n+------+-----------------+----------------------------------+\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("h3",{attrs:{id:"keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" keywords")]),e._v(" "),s("p",[e._v("ELEMENT_AT, SUBSCRIPT")])])}),[],!1,null,null,null);a.default=n.exports}}]);