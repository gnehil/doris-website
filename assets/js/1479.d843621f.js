(window.webpackJsonp=window.webpackJsonp||[]).push([[1479],{2106:function(s,e,a){"use strict";a.r(e);var t=a(15),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"grant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grant"}},[s._v("#")]),s._v(" GRANT")]),s._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),a("p",[s._v("GRANT")]),s._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("p",[s._v("The GRANT command is used to grant the specified user or role specified permissions")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" privilege_list "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" db_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tbl_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" user_identity "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ROLE role_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" privilege_list "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" RESOURCE resource_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" user_identity "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ROLE role_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("privilege_list is a list of privileges to be granted, separated by commas. Currently Doris supports the following permissions:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("NODE_PRIV: Cluster node operation permissions, including node online and offline operations. Only the root user has this permission and cannot be granted to other users.\nADMIN_PRIV: All privileges except NODE_PRIV.\nGRANT_PRIV: Privilege for operation privileges. Including creating and deleting users, roles, authorization and revocation, setting passwords, etc.\nSELECT_PRIV: read permission on the specified library or table\nLOAD_PRIV: Import privileges on the specified library or table\nALTER_PRIV: Schema change permission for the specified library or table\nCREATE_PRIV: Create permission on the specified library or table\nDROP_PRIV: drop privilege on the specified library or table\nUSAGE_PRIV: access to the specified resource\n\nALL and READ_WRITE in legacy permissions will be converted to: SELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV;\nREAD_ONLY is converted to SELECT_PRIV.\n")])])]),a("p",[s._v("Permission classification:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("1. Node Privilege: NODE_PRIV\n2. Library table permissions: SELECT_PRIV, LOAD_PRIV, ALTER_PRIV, CREATE_PRIV, DROP_PRIV\n3. Resource permission: USAGE_PRIV\n")])])]),a("p",[s._v("db_name[.tbl_name] supports the following three forms:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("1. *.* permissions can be applied to all libraries and all tables in them\n2. db.* permissions can be applied to all tables under the specified library\n3. The db.tbl permission can be applied to the specified table under the specified library\n\nThe library or table specified here can be a library and table that does not exist.\n")])])]),a("p",[s._v("resource_name supports the following two forms:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("1. * Permissions apply to all resources\n2. The resource permission applies to the specified resource\n\nThe resource specified here can be a non-existing resource.\n")])])]),a("p",[s._v("user_identity:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("The user_identity syntax here is the same as CREATE USER. And must be a user_identity created with CREATE USER. The host in user_identity can be a domain name. If it is a domain name, the effective time of the authority may be delayed by about 1 minute.\n\nYou can also assign permissions to the specified ROLE, if the specified ROLE does not exist, it will be created automatically.\n")])])]),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Grant permissions to all libraries and tables to the user")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" SELECT_PRIV "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Grant permissions to the specified library table to the user")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" SELECT_PRIV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ALTER_PRIV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("LOAD_PRIV "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" db1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'192.8.%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Grant permissions to the specified library table to the role")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" LOAD_PRIV "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" db1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" ROLE "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my_role'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Grant access to all resources to users")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" USAGE_PRIV "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" RESOURCE "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Grant the user permission to use the specified resource")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" USAGE_PRIV "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" RESOURCE "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spark_resource'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Grant access to specified resources to roles")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" USAGE_PRIV "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" RESOURCE "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spark_resource'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" ROLE "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my_role'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("GRANT\n")])])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);e.default=r.exports}}]);