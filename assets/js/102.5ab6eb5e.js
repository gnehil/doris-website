(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{534:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"meta-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meta-action"}},[t._v("#")]),t._v(" Meta Action")]),t._v(" "),s("p",[t._v("Meta Info Action is used to obtain metadata information in the cluster. Such as database list, table structure, etc.")]),t._v(" "),s("h2",{attrs:{id:"list-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-database"}},[t._v("#")]),t._v(" List Database")]),t._v(" "),s("h3",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /api/meta/namespaces/<ns_name>/databases\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Get a list of all database names, arranged in alphabetical order.")]),t._v(" "),s("h3",{attrs:{id:"path-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),s("p",[t._v("None")]),t._v(" "),s("h3",{attrs:{id:"query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("limit")])]),t._v(" "),s("p",[t._v("Limit the number of result rows returned")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("offset")])]),t._v(" "),s("p",[t._v("Pagination information, need to be used with "),s("code",[t._v("limit")])])])]),t._v(" "),s("h3",{attrs:{id:"request-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),s("p",[t._v("None")]),t._v(" "),s("h3",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": [\n\t   "db1", "db2", "db3", ...  \n\t],\n\t"count": 3\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ul",[s("li",[t._v("The data field returns a list of database names.")])]),t._v(" "),s("h2",{attrs:{id:"list-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-table"}},[t._v("#")]),t._v(" List Table")]),t._v(" "),s("h3",{attrs:{id:"request-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"description-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Get a list of tables in the specified database, arranged in alphabetical order.")]),t._v(" "),s("h3",{attrs:{id:"path-parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-2"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("<db_name>")])]),t._v(" "),s("p",[t._v("Specify database")])])]),t._v(" "),s("h3",{attrs:{id:"query-parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-2"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("limit")])]),t._v(" "),s("p",[t._v("Limit the number of result rows returned")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("offset")])]),t._v(" "),s("p",[t._v("Pagination information, need to be used with "),s("code",[t._v("limit")])])])]),t._v(" "),s("h3",{attrs:{id:"request-body-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-body-2"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),s("p",[t._v("None")]),t._v(" "),s("h3",{attrs:{id:"response-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": [\n\t   "tbl1", "tbl2", "tbl3", ...  \n\t],\n\t"count": 0\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ul",[s("li",[t._v("The data field returns a list of table names.")])]),t._v(" "),s("h2",{attrs:{id:"schema-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema-info"}},[t._v("#")]),t._v(" Schema Info")]),t._v(" "),s("h3",{attrs:{id:"request-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables/<tbl_name>/schema\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"description-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Get the table structure information of the specified table in the specified database.")]),t._v(" "),s("h3",{attrs:{id:"path-parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-3"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("<db_name>")])]),t._v(" "),s("p",[t._v("Specify the database name")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("<tbl_name>")])]),t._v(" "),s("p",[t._v("Specify table name")])])]),t._v(" "),s("h3",{attrs:{id:"query-parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-3"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("with_mv")])]),t._v(" "),s("p",[t._v("Optional. If not specified, the table structure of the base table is returned by default. If specified, all rollup index will also be returned.")])])]),t._v(" "),s("h3",{attrs:{id:"request-body-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-body-3"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),s("p",[t._v("None")]),t._v(" "),s("h3",{attrs:{id:"response-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema\n\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"tbl1": {\n\t\t\t"schema": [{\n\t\t\t\t\t"Field": "k1",\n\t\t\t\t\t"Type": "INT",\n\t\t\t\t\t"Null": "Yes",\n\t\t\t\t\t"Extra": "",\n\t\t\t\t\t"Default": null,\n\t\t\t\t\t"Key": "true"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"Field": "k2",\n\t\t\t\t\t"Type": "INT",\n\t\t\t\t\t"Null": "Yes",\n\t\t\t\t\t"Extra": "",\n\t\t\t\t\t"Default": null,\n\t\t\t\t\t"Key": "true"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"is_base": true\n\t\t}\n\t},\n\t"count": 0\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema?with_mv?=1\n\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"tbl1": {\n\t\t\t"schema": [{\n\t\t\t\t\t"Field": "k1",\n\t\t\t\t\t"Type": "INT",\n\t\t\t\t\t"Null": "Yes",\n\t\t\t\t\t"Extra": "",\n\t\t\t\t\t"Default": null,\n\t\t\t\t\t"Key": "true"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"Field": "k2",\n\t\t\t\t\t"Type": "INT",\n\t\t\t\t\t"Null": "Yes",\n\t\t\t\t\t"Extra": "",\n\t\t\t\t\t"Default": null,\n\t\t\t\t\t"Key": "true"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"is_base": true\n\t\t},\n\t\t"rollup1": {\n\t\t\t"schema": [{\n\t\t\t\t"Field": "k1",\n\t\t\t\t"Type": "INT",\n\t\t\t\t"Null": "Yes",\n\t\t\t\t"Extra": "",\n\t\t\t\t"Default": null,\n\t\t\t\t"Key": "true"\n\t\t\t}],\n\t\t\t"is_base": false\n\t\t}\n\t},\n\t"count": 0\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br")])]),s("ul",[s("li",[t._v("The data field returns the table structure information of the base table or rollup table.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);