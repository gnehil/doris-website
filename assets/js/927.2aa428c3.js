(window.webpackJsonp=window.webpackJsonp||[]).push([[927],{1554:function(s,a,n){"use strict";n.r(a);var t=n(15),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"unix-timestamp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unix-timestamp"}},[s._v("#")]),s._v(" unix_timestamp")]),s._v(" "),n("h3",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),n("h4",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),n("p",[n("code",[s._v("INT UNIX_TIMESTAMP(), UNIX_TIMESTAMP(DATETIME date), UNIX_TIMESTAMP(DATETIME date, STRING fmt),")])]),s._v(" "),n("p",[s._v("将 Date 或者 Datetime 类型转化为 unix 时间戳。")]),s._v(" "),n("p",[s._v("如果没有参数，则是将当前的时间转化为时间戳。")]),s._v(" "),n("p",[s._v("参数需要是 Date 或者 Datetime 类型。")]),s._v(" "),n("p",[s._v("对于在 1970-01-01 00:00:00 之前或 2038-01-19 03:14:07 之后的时间，该函数将返回 0。")]),s._v(" "),n("p",[s._v("Format 的格式请参阅 "),n("code",[s._v("date_format")]),s._v(" 函数的格式说明。")]),s._v(" "),n("p",[s._v("该函数受时区影响。")]),s._v(" "),n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select unix_timestamp();\n+------------------+\n| unix_timestamp() |\n+------------------+\n|       1558589570 |\n+------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30:19');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30:19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30-19', '%Y-%m-%d %H:%i-%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30-19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30%3A19', '%Y-%m-%d %H:%i%%3A%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30%3A19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('1969-01-01 00:00:00');\n+---------------------------------------+\n| unix_timestamp('1969-01-01 00:00:00') |\n+---------------------------------------+\n|                                     0 |\n+---------------------------------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("h3",{attrs:{id:"keywords"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("UNIX_TIMESTAMP,UNIX,TIMESTAMP\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);