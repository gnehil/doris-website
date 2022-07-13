(window.webpackJsonp=window.webpackJsonp||[]).push([[3732],{4361:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"grant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grant"}},[s._v("#")]),s._v(" GRANT")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("GRANT")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("GRANT 命令用于赋予指定用户或角色指定的权限")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" privilege_list "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" db_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tbl_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" user_identity "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ROLE role_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" privilege_list "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" RESOURCE resource_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" user_identity "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ROLE role_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("privilege_list 是需要赋予的权限列表，以逗号分隔。当前 Doris 支持如下权限：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("NODE_PRIV：集群节点操作权限，包括节点上下线等操作，只有 root 用户有该权限，不可赋予其他用户。\nADMIN_PRIV：除 NODE_PRIV 以外的所有权限。\nGRANT_PRIV: 操作权限的权限。包括创建删除用户、角色，授权和撤权，设置密码等。\nSELECT_PRIV：对指定的库或表的读取权限\nLOAD_PRIV：对指定的库或表的导入权限\nALTER_PRIV：对指定的库或表的schema变更权限\nCREATE_PRIV：对指定的库或表的创建权限\nDROP_PRIV：对指定的库或表的删除权限\nUSAGE_PRIV: 对指定资源的使用权限\n\n旧版权限中的 ALL 和 READ_WRITE 会被转换成：SELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV；\nREAD_ONLY 会被转换为 SELECT_PRIV。\n")])])]),t("p",[s._v("权限分类：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("1. 节点权限：NODE_PRIV\n2. 库表权限：SELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV\n3. 资源权限：USAGE_PRIV\n")])])]),t("p",[s._v("db_name[.tbl_name] 支持以下三种形式：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("1. *.* 权限可以应用于所有库及其中所有表\n2. db.* 权限可以应用于指定库下的所有表\n3. db.tbl 权限可以应用于指定库下的指定表\n\n这里指定的库或表可以是不存在的库和表。\n")])])]),t("p",[s._v("resource_name 支持以下两种形式：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("1. * 权限应用于所有资源\n2. resource 权限应用于指定资源\n\n这里指定的资源可以是不存在的资源。\n")])])]),t("p",[s._v("user_identity：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("这里的 user_identity 语法同 CREATE USER。且必须为使用 CREATE USER 创建过的 user_identity。user_identity 中的host可以是域名，如果是域名的话，权限的生效时间可能会有1分钟左右的延迟。\n\n也可以将权限赋予指定的 ROLE，如果指定的 ROLE 不存在，则会自动创建。\n")])])]),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("授予所有库和表的权限给用户")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" SELECT_PRIV "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("授予指定库表的权限给用户")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" SELECT_PRIV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ALTER_PRIV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("LOAD_PRIV "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" db1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tbl1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'192.8.%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("授予指定库表的权限给角色")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" LOAD_PRIV "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" db1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" ROLE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my_role'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("授予所有资源的使用权限给用户")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" USAGE_PRIV "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" RESOURCE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("授予指定资源的使用权限给用户")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" USAGE_PRIV "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" RESOURCE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spark_resource'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("授予指定资源的使用权限给角色")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" USAGE_PRIV "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" RESOURCE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spark_resource'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" ROLE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my_role'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("GRANT\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=r.exports}}]);