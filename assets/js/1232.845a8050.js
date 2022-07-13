(window.webpackJsonp=window.webpackJsonp||[]).push([[1232],{1859:function(e,s,t){"use strict";t.r(s);var n=t(15),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"query-detail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-detail"}},[e._v("#")]),e._v(" QUERY DETAIL")]),e._v(" "),t("p",[e._v("Collect the query details from FE. You should set the event_time.\nFE will return the query detail after the event_time.\nThe unit of event_time is milliseconds.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -X GET http://fe_host:fe_http_port/api/query_detail?event_time=1592054515284\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The query details will be be returned as JSON")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[\n  {\n    "eventTime": 1592201405063,\n    "queryId": "a0a9259df9844029-845331577440a3bd",\n    "startTime": 1592201405055,\n    "endTime": 1592201405063,\n    "latency": 8,\n    "state": "FINISHED",\n    "database": "test",\n    "sql": "select * from table1"\n  }, \n  {\n    "eventTime": 1592201420842,\n    "queryId": "21cd79c3e1634e8a-bdac090c7e7bcc36",\n    "startTime": 1592201420834,\n    "endTime": 1592201420842,\n    "latency": 8,\n    "state": "FINISHED",\n    "database": "test",\n    "sql": "select * from table1"\n  }\n]\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);