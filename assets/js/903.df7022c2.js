(window.webpackJsonp=window.webpackJsonp||[]).push([[903],{1529:function(a,e,s){"use strict";s.r(e);var n=s(15),t=Object(n.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"weekday"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weekday"}},[a._v("#")]),a._v(" weekday")]),a._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("p",[s("code",[a._v("INT WEEKDAY (DATETIME date)")])]),a._v(" "),s("p",[a._v("The WEEKDAY function returns the index value of the working day of the date, that is, 0 on Monday, 1 on Tuesday, and 6 on Sunday.")]),a._v(" "),s("p",[a._v("The parameter is Date or Datetime type")]),a._v(" "),s("p",[a._v("Notice the difference between WEEKDAY and DAYOFWEEK:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("          +-----+-----+-----+-----+-----+-----+-----+\n          | Sun | Mon | Tues| Wed | Thur| Fri | Sat |\n          +-----+-----+-----+-----+-----+-----+-----+\n  weekday |  6  |  0  |  1  |  2  |  3  |  4  |  5  |\n          +-----+-----+-----+-----+-----+-----+-----+\ndayofweek |  1  |  2  |  3  |  4  |  5  |  6  |  7  |\n          +-----+-----+-----+-----+-----+-----+-----+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql> select weekday('2019-06-25');\n+--------------------------------+\n| weekday('2019-06-25 00:00:00') |\n+--------------------------------+\n|                              1 |\n+--------------------------------+\n\nmysql> select weekday(cast(20190625 as date)); \n+---------------------------------+\n| weekday(CAST(20190625 AS DATE)) |\n+---------------------------------+\n|                               1 |\n+---------------------------------+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),s("p",[a._v("WEEKDAY")])])}),[],!1,null,null,null);e.default=t.exports}}]);