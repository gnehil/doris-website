(window.webpackJsonp=window.webpackJsonp||[]).push([[3590],{4219:function(a,t,e){"use strict";e.r(t);var s=e(15),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"bitmap-union-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-union-function"}},[a._v("#")]),a._v(" bitmap_union function")]),a._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("p",[a._v("聚合函数，用于计算分组后的 bitmap 并集。常见使用场景如：计算PV，UV。")]),a._v(" "),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),e("p",[e("code",[a._v("BITMAP BITMAP_UNION(BITMAP value)")])]),a._v(" "),e("p",[a._v("输入一组 bitmap 值，求这一组 bitmap 值的并集，并返回。")]),a._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mysql> select page_id, bitmap_union(user_id) from table group by page_id;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("和 bitmap_count 函数组合使用可以求得网页的 UV 数据")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mysql> select page_id, bitmap_count(bitmap_union(user_id)) from table group by page_id;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("当 user_id 字段为 int 时，上面查询语义等同于")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mysql> select page_id, count(distinct user_id) from table group by page_id;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" keywords")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("BITMAP_UNION, BITMAP\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);