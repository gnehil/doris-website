(window.webpackJsonp=window.webpackJsonp||[]).push([[885],{1511:function(s,n,t){"use strict";t.r(n);var e=t(15),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"from-unixtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from-unixtime"}},[s._v("#")]),s._v(" from_unixtime")]),s._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" syntax")]),s._v(" "),t("p",[t("code",[s._v("DATETIME FROM UNIXTIME (INT unix timestamp [, VARCHAR string format]")])]),s._v(" "),t("p",[s._v("Convert the UNIX timestamp to the corresponding time format of bits, and the format returned is specified by "),t("code",[s._v("string_format")])]),s._v(" "),t("p",[s._v("Input is an integer and return is a string type")]),s._v(" "),t("p",[s._v("Currently, "),t("code",[s._v("string_format")]),s._v(" supports following formats:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("%Y: Year. \teg. 2014, 1900\n%m: Month. \teg. 12, 09\n%d: Day.    eg. 11, 01\n%H: Hour.   eg. 23, 01, 12\n%i: Minute. eg. 05, 11\n%s: Second. eg. 59, 01\n")])])]),t("p",[s._v("Default is "),t("code",[s._v("%Y-%m-%d %H:%i:%s")])]),s._v(" "),t("p",[s._v("Other "),t("code",[s._v("string_format")]),s._v(" is illegal and will returns NULL.")]),s._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> select from_unixtime(1196440219);\n+---------------------------+\n| from_unixtime(1196440219) |\n+---------------------------+\n| 2007-12-01 00:30:19       |\n+---------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d');\n+-----------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d')   |\n+-----------------------------------------+\n| 2007-12-01                              |\n+-----------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s');\n+--------------------------------------------------+\n|From unixtime (1196440219,'%Y-%m-%d %H:%i:%s')    |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n\n## keyword\n\n    FROM_UNIXTIME,FROM,UNIXTIME\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);