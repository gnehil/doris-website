(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{1034:function(e,s,i){"use strict";i.r(s);var t=i(15),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"grant"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#grant"}},[e._v("#")]),e._v(" Grant")]),e._v(" "),i("h2",{attrs:{id:"description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),i("p",[e._v("The GRANT command is used to give the specified user or role the specified permissions.")]),e._v(" "),i("p",[e._v("Syntax:")]),e._v(" "),i("p",[e._v("GRANT privilege_list ON db_name[.tbl_name] TO user_identity [ROLE role_name]")]),e._v(" "),i("p",[e._v("Privilege_list is a list of permissions that need to be granted, separated by commas. Currently Doris supports the following permissions:")]),e._v(" "),i("p",[e._v("NODE_PRIV: Operational privileges of cluster nodes, including operation of nodes' up and down lines. Only root users have this privilege and cannot be given to other users.\nADMIN_PRIV: All rights except NODE_PRIV.\nGRANT_PRIV: Permission to operate permissions. Including the creation and deletion of users, roles, authorization and revocation, password settings and so on.\nSELECT_PRIV: Read permissions for specified libraries or tables\nLOAD_PRIV: Import permissions for specified libraries or tables\nALTER_PRIV: schema change permissions for specified libraries or tables\nCREATE_PRIV: Creation permissions for specified libraries or tables\nDROP_PRIV: Delete permissions for specified libraries or tables")]),e._v(" "),i("p",[e._v("旧版权限中的 ALL 和 READ_WRITE 会被转换成: SELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV;\nREAD_ONLY is converted to SELECT_PRIV.")]),e._v(" "),i("p",[e._v("Db_name [.tbl_name] supports the following three forms:")]),e._v(" "),i("ol",[i("li",[e._v("*. * permissions can be applied to all libraries and all tables in them")]),e._v(" "),i("li",[e._v("db. * permissions can be applied to all tables under the specified library")]),e._v(" "),i("li",[e._v("db.tbl permissions can be applied to specified tables under specified Libraries")])]),e._v(" "),i("p",[e._v("The libraries or tables specified here can be non-existent libraries and tables.")]),e._v(" "),i("p",[e._v("user_identity:")]),e._v(" "),i("p",[e._v("The user_identity syntax here is the same as CREATE USER. And you must create user_identity for the user using CREATE USER. The host in user_identity can be a domain name. If it is a domain name, the validity time of permissions may be delayed by about one minute.")]),e._v(" "),i("p",[e._v("You can also grant permissions to the specified ROLE, which is automatically created if the specified ROLE does not exist.")]),e._v(" "),i("h2",{attrs:{id:"example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),i("ol",[i("li",[e._v("Grant permissions to all libraries and tables to users")])]),e._v(" "),i("p",[e._v("GRANT SELECT_PRIV ON "),i("em",[e._v(".")]),e._v(" TO 'jack'@'%';")]),e._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[e._v("Grant permissions to specified library tables to users")])]),e._v(" "),i("p",[e._v("GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON db1.tbl1 TO 'jack'@'192.8.%';")]),e._v(" "),i("ol",{attrs:{start:"3"}},[i("li",[e._v("Grant permissions to specified library tables to roles")])]),e._v(" "),i("p",[e._v("GRANT LOAD_PRIV ON db1.* TO ROLE 'my_role';")]),e._v(" "),i("h2",{attrs:{id:"keyword"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),i("p",[e._v("GRANT")])])}),[],!1,null,null,null);s.default=r.exports}}]);