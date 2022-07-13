(window.webpackJsonp=window.webpackJsonp||[]).push([[1985],{2612:function(t,e,a){"use strict";a.r(e);var s=a(15),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"week"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#week"}},[t._v("#")]),t._v(" week")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("INT WEEK(DATE date)")]),t._v(" "),a("code",[t._v("INT WEEK(DATE date, INT mode)")])]),t._v(" "),a("p",[t._v("Returns the week number for date.The value of the mode argument defaults to 0.\nThe following table describes how the mode argument works.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Mode")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("First day of week")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Range")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Week 1 is the first week …")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Sunday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with a Sunday in this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Monday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with 4 or more days this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Sunday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with a Sunday in this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Monday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with 4 or more days this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Sunday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with 4 or more days this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Monday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with a Monday in this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Sunday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with 4 or more days this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Monday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with a Monday in this year")])])])]),t._v(" "),a("p",[t._v("The parameter is Date or Datetime type")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> select week('2020-1-1');\n+------------------+\n| week('2020-1-1') |\n+------------------+\n|                0 |\n+------------------+\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> select week('2020-7-1',1);\n+---------------------+\n| week('2020-7-1', 1) |\n+---------------------+\n|                  27 |\n+---------------------+\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" keywords")]),t._v(" "),a("p",[t._v("WEEK")])])}),[],!1,null,null,null);e.default=l.exports}}]);