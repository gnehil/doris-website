(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{1056:function(t,e,a){"use strict";a.r(e);var s=a(15),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"link-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-database"}},[t._v("#")]),t._v(" LINK DATABASE")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("This statement allows users to link a database of one logical cluster to another logical cluster. A database is only allowed to be linked once at the same time and the linked database is deleted.")]),t._v(" "),a("p",[t._v("It does not delete data, and the linked database cannot be deleted. Administrator privileges are required.")]),t._v(" "),a("p",[t._v("grammar")]),t._v(" "),a("p",[t._v("LINK DATABASE src u cluster name.src db name of the cluster name.des db name")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("ol",[a("li",[t._v("Link test_db in test_cluster A to test_cluster B and name it link_test_db")])]),t._v(" "),a("p",[t._v("LINK DATABASE test_clusterA.test_db test_clusterB.link_test_db;")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Delete linked database link_test_db")])]),t._v(" "),a("p",[t._v("DROP DATABASE link_test_db;")]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("LINK,DATABASE")])])}),[],!1,null,null,null);e.default=r.exports}}]);