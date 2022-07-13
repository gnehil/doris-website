(window.webpackJsonp=window.webpackJsonp||[]).push([[1628],{2258:function(e,t,a){"use strict";a.r(t);var n=a(15),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"quantile-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quantile-state"}},[e._v("#")]),e._v(" QUANTILE_STATE")]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("QUANTILE_STATE")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("QUANTILE_STATE cannot be used as a key column, and the aggregation type is QUANTILE_UNION when building the table.\nThe user does not need to specify the length and default value. The length is controlled within the system according to the degree of data aggregation.\nAnd the QUANTILE_STATE column can only be queried or used through the supporting QUANTILE_PERCENT, QUANTILE_UNION and TO_QUANTILE_STATE functions.    \nQUANTILE_STATE is a type for calculating the approximate value of quantiles. Different values with the same key are pre-aggregated during loading process. When the number of aggregated values does not exceed 2048, all data are recorded in detail. When the number of aggregated values is greater than 2048, [TDigest] is used. (https://github.com/tdunning/t-digest/blob/main/docs/t-digest-paper/histo.pdf) algorithm to aggregate (cluster) the data and save the centroid points after clustering.\n")])])]),a("p",[e._v("related functions:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("QUANTILE_UNION(QUANTILE_STATE):\n  \n  This function is an aggregation function, which is used to aggregate the intermediate results of different quantile calculations. The result returned by this function is still QUANTILE_STATE\n\n\nTO_QUANTILE_STATE(INT/FLOAT/DOUBLE raw_data [,FLOAT compression]):\n   \n   This function converts a numeric type to a QUANTILE_STATE type\n   The compression parameter is optional and can be set in the range [2048, 10000]. \n   The larger the value, the higher the precision of quantile approximation calculations, the greater the memory consumption, and the longer the calculation time.\n   An unspecified or set value for the compression parameter is outside the range [2048, 10000], run with the default value of 2048\n\nQUANTILE_PERCENT(QUANTILE_STATE):\n   This function converts the intermediate result variable (QUANTILE_STATE) of the quantile calculation into a specific quantile value\n")])])]),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("select QUANTILE_PERCENT(QUANTILE_UNION(v1)) from test_table group by k1, k2, k3;\n")])])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" keywords")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("QUANTILE_STATE, QUANTILE_UNION, TO_QUANTILE_STATE, QUANTILE_PERCENT\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);