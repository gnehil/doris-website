(window.webpackJsonp=window.webpackJsonp||[]).push([[2796],{3424:function(t,v,_){"use strict";_.r(v);var e=_(15),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"替换表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#替换表"}},[t._v("#")]),t._v(" 替换表")]),t._v(" "),_("p",[t._v("在 0.14 版本中，Doris 支持对两个表进行原子的替换操作。\n该操作仅适用于 OLAP 表。")]),t._v(" "),_("p",[t._v("分区级别的替换操作，请参阅 "),_("RouterLink",{attrs:{to:"/zh-CN/1.0/administrator-guide/alter-table/alter-table-temp-partition.html"}},[t._v("临时分区文档")])],1),t._v(" "),_("h2",{attrs:{id:"语法说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#语法说明"}},[t._v("#")]),t._v(" 语法说明")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("ALTER TABLE [db.]tbl1 REPLACE WITH TABLE tbl2\n[PROPERTIES('swap' = 'true')];\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[t._v("将表 tbl1 替换为表 tbl2。")]),t._v(" "),_("p",[t._v("如果 "),_("code",[t._v("swap")]),t._v(" 参数为 "),_("code",[t._v("true")]),t._v("，则替换后，名称为 "),_("code",[t._v("tbl1")]),t._v(" 表中的数据为原 "),_("code",[t._v("tbl2")]),t._v(" 表中的数据。而名称为 "),_("code",[t._v("tbl2")]),t._v(" 表中的数据为原 "),_("code",[t._v("tbl1")]),t._v(" 表中的数据。即两张表数据发生了互换。")]),t._v(" "),_("p",[t._v("如果 "),_("code",[t._v("swap")]),t._v(" 参数为 "),_("code",[t._v("false")]),t._v("，则替换后，名称为 "),_("code",[t._v("tbl1")]),t._v(" 表中的数据为原 "),_("code",[t._v("tbl2")]),t._v(" 表中的数据。而名称为 "),_("code",[t._v("tbl2")]),t._v(" 表被删除。")]),t._v(" "),_("h2",{attrs:{id:"原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),_("p",[t._v("替换表功能，实际上是将以下操作集合变成一个原子操作。")]),t._v(" "),_("p",[t._v("假设要将表 A 替换为表 B，且 "),_("code",[t._v("swap")]),t._v(" 为 "),_("code",[t._v("true")]),t._v("，则操作如下：")]),t._v(" "),_("ol",[_("li",[t._v("将表 B 重名为表 A。")]),t._v(" "),_("li",[t._v("将表 A 重名为表 B。")])]),t._v(" "),_("p",[t._v("如果 "),_("code",[t._v("swap")]),t._v(" 为 "),_("code",[t._v("false")]),t._v("，则操作如下：")]),t._v(" "),_("ol",[_("li",[t._v("删除表 A。")]),t._v(" "),_("li",[t._v("将表 B 重名为表 A。")])]),t._v(" "),_("h2",{attrs:{id:"注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("swap")]),t._v(" 参数默认为 "),_("code",[t._v("true")]),t._v("。即替换表操作相当于将两张表数据进行交换。")]),t._v(" "),_("li",[t._v("如果设置 "),_("code",[t._v("swap")]),t._v(" 参数为 "),_("code",[t._v("false")]),t._v("，则被替换的表（表A）将被删除，且无法恢复。")]),t._v(" "),_("li",[t._v("替换操作仅能发生在两张 OLAP 表之间，且不会检查两张表的表结构是否一致。")]),t._v(" "),_("li",[t._v("替换操作不会改变原有的权限设置。因为权限检查以表名称为准。")])]),t._v(" "),_("h2",{attrs:{id:"最佳实践"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("原子的覆盖写操作")]),t._v(" "),_("p",[t._v("某些情况下，用户希望能够重写某张表的数据，但如果采用先删除再导入的方式进行，在中间会有一段时间无法查看数据。这时，用户可以先使用 "),_("code",[t._v("CREATE TABLE LIKE")]),t._v(" 语句创建一个相同结构的新表，将新的数据导入到新表后，通过替换操作，原子的替换旧表，以达到目的。分区级别的原子覆盖写操作，请参阅 "),_("RouterLink",{attrs:{to:"/zh-CN/1.0/administrator-guide/alter-table/alter-table-temp-partition.html"}},[t._v("临时分区文档")])],1)])])])}),[],!1,null,null,null);v.default=a.exports}}]);