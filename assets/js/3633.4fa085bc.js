(window.webpackJsonp=window.webpackJsonp||[]).push([[3633],{4262:function(s,n,e){"use strict";e.r(n);var a=e(15),r=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"time-round"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#time-round"}},[s._v("#")]),s._v(" time_round")]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),e("p",[e("code",[s._v("DATETIME TIME_ROUND(DATETIME expr)")])]),s._v(" "),e("p",[e("code",[s._v("DATETIME TIME_ROUND(DATETIME expr, INT period)")])]),s._v(" "),e("p",[e("code",[s._v("DATETIME TIME_ROUND(DATETIME expr, DATETIME origin)")])]),s._v(" "),e("p",[e("code",[s._v("DATETIME TIME_ROUND(DATETIME expr, INT period, DATETIME origin)")])]),s._v(" "),e("p",[s._v("函数名 "),e("code",[s._v("TIME_ROUND")]),s._v(" 由两部分组成，每部分由以下可选值组成")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("TIME")]),s._v(": "),e("code",[s._v("SECOND")]),s._v(", "),e("code",[s._v("MINUTE")]),s._v(", "),e("code",[s._v("HOUR")]),s._v(", "),e("code",[s._v("DAY")]),s._v(", "),e("code",[s._v("WEEK")]),s._v(", "),e("code",[s._v("MONTH")]),s._v(", "),e("code",[s._v("YEAR")])]),s._v(" "),e("li",[e("code",[s._v("ROUND")]),s._v(": "),e("code",[s._v("FLOOR")]),s._v(", "),e("code",[s._v("CEIL")])])]),s._v(" "),e("p",[s._v("返回 "),e("code",[s._v("expr")]),s._v(" 的上/下界。")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("period")]),s._v(" 指定每个周期有多少个 "),e("code",[s._v("TIME")]),s._v(" 单位组成，默认为 "),e("code",[s._v("1")]),s._v("。")]),s._v(" "),e("li",[e("code",[s._v("origin")]),s._v(" 指定周期的开始时间，默认为 "),e("code",[s._v("1970-01-01T00:00:00")]),s._v("，"),e("code",[s._v("WEEK")]),s._v(" 的默认开始时间为 "),e("code",[s._v("1970-01-04T00:00:00")]),s._v("，即周日。可以比 "),e("code",[s._v("expr")]),s._v(" 大。")]),s._v(" "),e("li",[s._v("请尽量选择常见 "),e("code",[s._v("period")]),s._v("，如 3 "),e("code",[s._v("MONTH")]),s._v("，90 "),e("code",[s._v("MINUTE")]),s._v(" 等，如设置了非常用 "),e("code",[s._v("period")]),s._v("，请同时指定 "),e("code",[s._v("origin")]),s._v("。")])]),s._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\nMySQL> SELECT YEAR_FLOOR('20200202000000');\n+------------------------------+\n| year_floor('20200202000000') |\n+------------------------------+\n| 2020-01-01 00:00:00          |\n+------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3); --quarter\n+--------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3) |\n+--------------------------------------------------------+\n| 2020-04-01 00:00:00                                    |\n+--------------------------------------------------------+\n\n\nMySQL> SELECT WEEK_CEIL('2020-02-02 13:09:20', '2020-01-06'); --monday\n+---------------------------------------------------------+\n| week_ceil('2020-02-02 13:09:20', '2020-01-06 00:00:00') |\n+---------------------------------------------------------+\n| 2020-02-03 00:00:00                                     |\n+---------------------------------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)); --next rent day\n+-------------------------------------------------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)) |\n+-------------------------------------------------------------------------------------------------+\n| 2020-04-09 00:00:00                                                                             |\n+-------------------------------------------------------------------------------------------------+\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),e("p",[s._v("TIME_ROUND")])])}),[],!1,null,null,null);n.default=r.exports}}]);