(window.webpackJsonp=window.webpackJsonp||[]).push([[3428],{4057:function(A,s,t){"use strict";t.r(s);var a=t(15),n=Object(a.a)({},(function(){var A=this,s=A.$createElement,t=A._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[t("h1",{attrs:{id:"table-query-plan-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-query-plan-action"}},[A._v("#")]),A._v(" Table Query Plan Action")]),A._v(" "),t("h2",{attrs:{id:"request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[A._v("#")]),A._v(" Request")]),A._v(" "),t("p",[t("code",[A._v("POST /api/<db>/<table>/_query_plan")])]),A._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[A._v("#")]),A._v(" Description")]),A._v(" "),t("p",[A._v("给定一个 SQL，用于获取该 SQL 对应的查询计划。")]),A._v(" "),t("p",[A._v("该接口目前用于 Spark-Doris-Connector 中，Spark 获取 Doris 的查询计划。")]),A._v(" "),t("h2",{attrs:{id:"path-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[A._v("#")]),A._v(" Path parameters")]),A._v(" "),t("ul",[t("li",[t("p",[t("code",[A._v("<db>")])]),A._v(" "),t("p",[A._v("指定数据库")])]),A._v(" "),t("li",[t("p",[t("code",[A._v("<table>")])]),A._v(" "),t("p",[A._v("指定表")])])]),A._v(" "),t("h2",{attrs:{id:"query-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[A._v("#")]),A._v(" Query parameters")]),A._v(" "),t("p",[A._v("无")]),A._v(" "),t("h2",{attrs:{id:"request-body"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[A._v("#")]),A._v(" Request body")]),A._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v('{\n\t"sql": "select * from db1.tbl1;"\n}\n')])]),A._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[A._v("1")]),t("br"),t("span",{staticClass:"line-number"},[A._v("2")]),t("br"),t("span",{staticClass:"line-number"},[A._v("3")]),t("br")])]),t("h2",{attrs:{id:"response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[A._v("#")]),A._v(" Response")]),A._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"partitions": {\n\t\t\t"10039": {\n\t\t\t\t"routings": ["10.81.85.89:9062"],\n\t\t\t\t"version": 2,\n\t\t\t\t"versionHash": 982459448378619656,\n\t\t\t\t"schemaHash": 1294206575\n\t\t\t}\n\t\t},\n\t\t"opaqued_query_plan": "DAABDAACDwABDAAAAAEIAAEAAAAACAACAAAAAAgAAwAAAAAKAAT//////////w8ABQgAAAABAAAAAA8ABgIAAAABAAIACAAMABIIAAEAAAAADwACCwAAAAIAAAACazEAAAACazIPAAMIAAAAAgAAAAUAAAAFAgAEAQAAAA8ABAwAAAACDwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAAACAACAAAAAAAIABT/////CAAX/////wAADwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAABCAACAAAAAAAIABT/////CAAX/////wAADAAFCAABAAAABgwACAAADAAGCAABAAAAAA8AAgwAAAAAAAoABwAAAAAAAAAACgAIAAAAAAAAAAAADQACCgwAAAABAAAAAAAAJzcKAAEAAAAAAAAnNwoAAgAAAAAAAAACCgADDaJlqbrVdwgIAARNJAZvAAwAAw8AAQwAAAACCAABAAAAAAgAAgAAAAAMAAMPAAEMAAAAAQgAAQAAAAAMAAIIAAEAAAAFAAAACAAE/////wgABQAAAAQIAAYAAAAACAAHAAAAAAsACAAAAAJrMQgACQAAAAACAAoBAAgAAQAAAAEIAAIAAAAADAADDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABP////8IAAUAAAAICAAGAAAAAAgABwAAAAELAAgAAAACazIIAAkAAAABAgAKAQAPAAIMAAAAAQgAAQAAAAAIAAIAAAAMCAADAAAAAQoABAAAAAAAACc1CAAFAAAAAgAPAAMMAAAAAQoAAQAAAAAAACc1CAACAAAAAQgAAwAAAAIIAAQAAAAACwAHAAAABHRibDELAAgAAAAADAALCwABAAAABHRibDEAAAAMAAQKAAFfL5rpxl1I4goAArgs6f+h6eMxAAA=",\n\t\t"status": 200\n\t},\n\t"count": 0\n}\n')])]),A._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[A._v("1")]),t("br"),t("span",{staticClass:"line-number"},[A._v("2")]),t("br"),t("span",{staticClass:"line-number"},[A._v("3")]),t("br"),t("span",{staticClass:"line-number"},[A._v("4")]),t("br"),t("span",{staticClass:"line-number"},[A._v("5")]),t("br"),t("span",{staticClass:"line-number"},[A._v("6")]),t("br"),t("span",{staticClass:"line-number"},[A._v("7")]),t("br"),t("span",{staticClass:"line-number"},[A._v("8")]),t("br"),t("span",{staticClass:"line-number"},[A._v("9")]),t("br"),t("span",{staticClass:"line-number"},[A._v("10")]),t("br"),t("span",{staticClass:"line-number"},[A._v("11")]),t("br"),t("span",{staticClass:"line-number"},[A._v("12")]),t("br"),t("span",{staticClass:"line-number"},[A._v("13")]),t("br"),t("span",{staticClass:"line-number"},[A._v("14")]),t("br"),t("span",{staticClass:"line-number"},[A._v("15")]),t("br"),t("span",{staticClass:"line-number"},[A._v("16")]),t("br"),t("span",{staticClass:"line-number"},[A._v("17")]),t("br")])]),t("p",[A._v("其中 "),t("code",[A._v("opaqued_query_plan")]),A._v(" 为查询计划的二进制格式。")]),A._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[A._v("#")]),A._v(" Examples")]),A._v(" "),t("ol",[t("li",[t("p",[A._v("获取指定 sql 的查询计划")]),A._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v('POST /api/db1/tbl1/_query_plan\n{\n    "sql": "select * from db1.tbl1;"\n}\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"partitions": {\n\t\t\t"10039": {\n\t\t\t\t"routings": ["192.168.1.1:9060"],\n\t\t\t\t"version": 2,\n\t\t\t\t"versionHash": 982459448378619656,\n\t\t\t\t"schemaHash": 1294206575\n\t\t\t}\n\t\t},\n\t\t"opaqued_query_plan": "DAABDAACDwABD...",\n\t\t"status": 200\n\t},\n\t"count": 0\n}\n')])]),A._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[A._v("1")]),t("br"),t("span",{staticClass:"line-number"},[A._v("2")]),t("br"),t("span",{staticClass:"line-number"},[A._v("3")]),t("br"),t("span",{staticClass:"line-number"},[A._v("4")]),t("br"),t("span",{staticClass:"line-number"},[A._v("5")]),t("br"),t("span",{staticClass:"line-number"},[A._v("6")]),t("br"),t("span",{staticClass:"line-number"},[A._v("7")]),t("br"),t("span",{staticClass:"line-number"},[A._v("8")]),t("br"),t("span",{staticClass:"line-number"},[A._v("9")]),t("br"),t("span",{staticClass:"line-number"},[A._v("10")]),t("br"),t("span",{staticClass:"line-number"},[A._v("11")]),t("br"),t("span",{staticClass:"line-number"},[A._v("12")]),t("br"),t("span",{staticClass:"line-number"},[A._v("13")]),t("br"),t("span",{staticClass:"line-number"},[A._v("14")]),t("br"),t("span",{staticClass:"line-number"},[A._v("15")]),t("br"),t("span",{staticClass:"line-number"},[A._v("16")]),t("br"),t("span",{staticClass:"line-number"},[A._v("17")]),t("br"),t("span",{staticClass:"line-number"},[A._v("18")]),t("br"),t("span",{staticClass:"line-number"},[A._v("19")]),t("br"),t("span",{staticClass:"line-number"},[A._v("20")]),t("br"),t("span",{staticClass:"line-number"},[A._v("21")]),t("br"),t("span",{staticClass:"line-number"},[A._v("22")]),t("br"),t("span",{staticClass:"line-number"},[A._v("23")]),t("br")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);