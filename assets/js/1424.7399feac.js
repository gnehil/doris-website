(window.webpackJsonp=window.webpackJsonp||[]).push([[1424],{2051:function(s,a,n){"use strict";n.r(a);var t=n(15),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"concat-ws"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concat-ws"}},[s._v("#")]),s._v(" concat_ws")]),s._v(" "),n("h3",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),n("h4",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),n("p",[n("code",[s._v("VARCHAR concat ws (VARCHAR sep, VARCHAR str,...)")])]),s._v(" "),n("p",[s._v("Using the first parameter SEP as a connector, the second parameter and all subsequent parameters are spliced into a string.\nIf the separator is NULL, return NULL.\n"),n("code",[s._v("The concat_ws")]),s._v(" function does not skip empty strings, but NULL values.")]),s._v(" "),n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('mysql> select concat_ws("or", "d", "is");\n+----------------------------+\n| concat_ws(\'or\', \'d\', \'is\') |\n+----------------------------+\n| doris                      |\n+----------------------------+\n\nmysql> select concat_ws(NULL, "d", "is");\n+----------------------------+\n| concat_ws(NULL, \'d\', \'is\') |\n+----------------------------+\n| NULL                       |\n+----------------------------+\n\nmysql> select concat_ws("or", "d", NULL,"is");\n+---------------------------------+\n| concat_ws("or", "d", NULL,"is") |\n+---------------------------------+\n| doris                           |\n+---------------------------------+\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"keywords"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),n("p",[s._v("CONCAT_WS,CONCAT,WS")])])}),[],!1,null,null,null);a.default=e.exports}}]);