(window.webpackJsonp=window.webpackJsonp||[]).push([[860],{1487:function(e,t,a){"use strict";a.r(t);var s=a(15),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"bitmap-union-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-union-function"}},[e._v("#")]),e._v(" bitmap_union function")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("Aggregate function, used to calculate the grouped bitmap union. Common usage scenarios such as: calculating PV, UV.")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[a("code",[e._v("BITMAP BITMAP_UNION(BITMAP value)")])]),e._v(" "),a("p",[e._v("Enter a set of bitmap values, find the union of this set of bitmap values, and return.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select page_id, bitmap_union(user_id) from table group by page_id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Combined with the bitmap_count function, the PV data of the web page can be obtained")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select page_id, bitmap_count(bitmap_union(user_id)) from table group by page_id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("When the user_id field is int, the above query semantics is equivalent to")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select page_id, count(distinct user_id) from table group by page_id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("BITMAP_UNION, BITMAP\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);