(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{1062:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"alter-system-add-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-system-add-backend"}},[t._v("#")]),t._v(" ALTER-SYSTEM-ADD-BACKEND")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),a("p",[t._v("ALTER SYSTEM ADD BACKEND")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("This statement is used to manipulate nodes within a system. (Administrator only!)")]),t._v(" "),a("p",[t._v("grammar:")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Add nodes (add this method if you do not use the multi-tenancy function)")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" SYSTEM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" BACKEND "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host:heartbeat_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host:heartbeat_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Add idle nodes (that is, add BACKEND that does not belong to any cluster)")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" SYSTEM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" FREE BACKEND "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host:heartbeat_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host:heartbeat_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Add nodes to a cluster")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" SYSTEM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" BACKEND "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" cluster_name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host:heartbeat_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host:heartbeat_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("illustrate:")]),t._v(" "),a("ol",[a("li",[t._v("host can be a hostname or an ip address")]),t._v(" "),a("li",[t._v("heartbeat_port is the heartbeat port of the node")]),t._v(" "),a("li",[t._v("Adding and deleting nodes is a synchronous operation. These two operations do not consider the existing data on the node, and the node is directly deleted from the metadata, please use it with caution.")])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Add a node")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" SYSTEM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" BACKEND "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host:port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Add an idle node")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" SYSTEM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" FREE BACKEND "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host:port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("ALTER, SYSTEM, ADD, BACKEND, ALTER SYSTEM\n")])])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")])])}),[],!1,null,null,null);s.default=n.exports}}]);