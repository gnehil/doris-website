(window.webpackJsonp=window.webpackJsonp||[]).push([[2941],{3571:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"show-meta-info-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-meta-info-action"}},[s._v("#")]),s._v(" Show Meta Info Action")]),s._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("p",[a("code",[s._v("GET /api/show_meta_info")])]),s._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("p",[s._v("用于显示一些元数据信息")]),s._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[s._v("#")]),s._v(" Path parameters")]),s._v(" "),a("p",[s._v("无")]),s._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[s._v("#")]),s._v(" Query parameters")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("action")]),s._v(" "),a("p",[s._v("指定要获取的元数据信息类型。目前支持如下：")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("SHOW_DB_SIZE")])]),s._v(" "),a("p",[s._v("获取指定数据库的数据量大小，单位为字节。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("SHOW_HA")])]),s._v(" "),a("p",[s._v("获取 FE 元数据日志的回放情况，以及可选举组的情况。")])])])])]),s._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[s._v("#")]),s._v(" Request body")]),s._v(" "),a("p",[s._v("无")]),s._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("SHOW_DB_SIZE")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"default_cluster:information_schema": 0,\n\t\t"default_cluster:db1": 381\n\t},\n\t"count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("SHOW_HA")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"can_read": "true",\n\t\t"role": "MASTER",\n\t\t"is_ready": "true",\n\t\t"last_checkpoint_version": "1492",\n\t\t"last_checkpoint_time": "1596465109000",\n\t\t"current_journal_id": "1595",\n\t\t"electable_nodes": "",\n\t\t"observer_nodes": "",\n\t\t"master": "10.81.85.89"\n\t},\n\t"count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("查看集群各个数据库的数据量大小")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('GET /api/show_meta_info?action=show_db_size\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"default_cluster:information_schema": 0,\n\t\t"default_cluster:db1": 381\n\t},\n\t"count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("查看FE选举组情况")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('GET /api/show_meta_info?action=show_ha\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"can_read": "true",\n\t\t"role": "MASTER",\n\t\t"is_ready": "true",\n\t\t"last_checkpoint_version": "1492",\n\t\t"last_checkpoint_time": "1596465109000",\n\t\t"current_journal_id": "1595",\n\t\t"electable_nodes": "",\n\t\t"observer_nodes": "",\n\t\t"master": "10.81.85.89"\n\t},\n\t"count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);