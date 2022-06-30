(window.webpackJsonp=window.webpackJsonp||[]).push([[1112],{1542:function(t,e,a){"use strict";a.r(e);var s=a(2),T=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"quantile-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quantile-state"}},[t._v("#")]),t._v(" QUANTILE_STATE")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("QUANTILE_STATE\nQUANTILE_STATE不能作为key列使用，建表时配合聚合类型为QUANTILE_UNION。\n用户不需要指定长度和默认值。长度根据数据的聚合程度系统内控制。\n并且QUANTILE_STATE列只能通过配套的QUANTILE_PERCENT、QUANTILE_UNION、TO_QUANTILE_STATE等函数进行查询或使用。\n\nQUANTILE_STATE 是一种计算分位数近似值的类型，在导入时会对相同的key，不同 value 进行预聚合，当value数量不超过2048时采用明细记录所有数据，当 value 数量大于2048时采用 [TDigest](https://github.com/tdunning/t-digest/blob/main/docs/t-digest-paper/histo.pdf) 算法，对数据进行聚合（聚类）保存聚类后的质心点。\n\n相关函数:\n\n  QUANTILE_UNION(QUANTILE_STATE):\n  此函数为聚合函数，用于将不同的分位数计算中间结果进行聚合操作。此函数返回的结果仍是QUANTILE_STATE\n\n  \n  TO_QUANTILE_STATE(INT/FLOAT/DOUBLE raw_data [,FLOAT compression]):\n  此函数将数值类型转化成QUANTILE_STATE类型\n  compression参数是可选项，可设置范围是[2048, 10000]，值越大，后续分位数近似计算的精度越高，内存消耗越大，计算耗时越长。 \n  compression参数未指定或设置的值在[2048, 10000]范围外，以2048的默认值运行\n\n  QUANTILE_PERCENT(QUANTILE_STATE):\n  此函数将分位数计算的中间结果变量（QUANTILE_STATE）转化为具体的分位数数值\n")])])]),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("select QUANTILE_PERCENT(QUANTILE_UNION(v1)) from test_table group by k1, k2, k3;\n")])])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" keywords")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("QUANTILE_STATE, QUANTILE_UNION, TO_QUANTILE_STATE, QUANTILE_PERCENT\n")])])])])}),[],!1,null,null,null);e.default=T.exports}}]);