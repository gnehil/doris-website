(window.webpackJsonp=window.webpackJsonp||[]).push([[2186],{2812:function(a,e,t){"use strict";t.r(e);var s=t(15),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"recover"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recover"}},[a._v("#")]),a._v(" RECOVER")]),a._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" Name")]),a._v(" "),t("p",[a._v("RECOVER")]),a._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("This statement is used to restore a previously deleted database, table or partition")]),a._v(" "),t("p",[a._v("grammar:")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("restore database")]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("RECOVER "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" db_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("restore table")]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("RECOVER "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("db_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("restore partition")]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("RECOVER "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PARTITION")]),a._v(" partition_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("db_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])]),a._v(" "),t("p",[a._v("illustrate:")]),a._v(" "),t("ul",[t("li",[a._v("This operation can only restore meta information that was deleted in the previous period. Default is 1 day. (Configurable through the "),t("code",[a._v("catalog_trash_expire_second")]),a._v(" parameter in fe.conf)")]),a._v(" "),t("li",[a._v("If a new meta information with the same name and type is created after the meta information is deleted, the previously deleted meta information cannot be recovered")])]),a._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("ol",[t("li",[a._v("Restore the database named example_db")])]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("RECOVER "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" example_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("Restore the table named example_tbl")])]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("RECOVER "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" example_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("example_tbl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("Restore the partition named p1 in table example_tbl")])]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("RECOVER "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PARTITION")]),a._v(" p1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" example_tbl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" Keywords")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(" RECOVER\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[a._v("#")]),a._v(" Best Practice")])])}),[],!1,null,null,null);e.default=r.exports}}]);