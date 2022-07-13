(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{737:function(e,s,i){"use strict";i.r(s);var t=i(15),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"authority-management"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#authority-management"}},[e._v("#")]),e._v(" Authority Management")]),e._v(" "),i("p",[e._v("Doris's new privilege management system refers to Mysql's privilege management mechanism, achieves table-level fine-grained privilege control, role-based privilege access control, and supports whitelist mechanism.")]),e._v(" "),i("h2",{attrs:{id:"noun-interpretation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("user_identity")]),e._v(" "),i("p",[e._v("In a permission system, a user is identified as a User Identity. User ID consists of two parts: username and userhost. Username is a user name, which is composed of English upper and lower case. Userhost represents the IP from which the user link comes. User_identity is presented as username@'userhost', representing the username from userhost.")]),e._v(" "),i("p",[e._v("Another expression of user_identity is username@['domain'], where domain is the domain name, which can be resolved into a set of IPS by DNS BNS (Baidu Name Service). The final expression is a set of username@'userhost', so we use username@'userhost'to represent it.")])]),e._v(" "),i("li",[i("p",[e._v("Privilege")]),e._v(" "),i("p",[e._v("The objects of permissions are nodes, databases or tables. Different permissions represent different operating permissions.")])]),e._v(" "),i("li",[i("p",[e._v("Role")]),e._v(" "),i("p",[e._v("Doris can create custom named roles. Roles can be seen as a set of permissions. When a newly created user can be assigned a role, the role's permissions are automatically granted. Subsequent changes in the role's permissions will also be reflected in all user permissions that belong to the role.")])]),e._v(" "),i("li",[i("p",[e._v("user_property")]),e._v(" "),i("p",[e._v("User attributes are directly attached to a user, not to a user identity. That is, both cmy@'192.%'and cmy@['domain'] have the same set of user attributes, which belong to user cmy, not cmy@'192.%' or cmy@['domain'].")]),e._v(" "),i("p",[e._v("User attributes include, but are not limited to, the maximum number of user connections, import cluster configuration, and so on.")])])]),e._v(" "),i("h2",{attrs:{id:"supported-operations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#supported-operations"}},[e._v("#")]),e._v(" Supported operations")]),e._v(" "),i("ol",[i("li",[e._v("Create users: CREATE USER")]),e._v(" "),i("li",[e._v("Delete users: DROP USER")]),e._v(" "),i("li",[e._v("Authorization: GRANT")]),e._v(" "),i("li",[e._v("Withdrawal: REVOKE")]),e._v(" "),i("li",[e._v("Create role: CREATE ROLE")]),e._v(" "),i("li",[e._v("Delete Roles: DROP ROLE")]),e._v(" "),i("li",[e._v("View current user privileges: SHOW GRANTS")]),e._v(" "),i("li",[e._v("View all user privilegesSHOW ALL GRANTS;")]),e._v(" "),i("li",[e._v("View the created roles: SHOW ROLES")]),e._v(" "),i("li",[e._v("View user attributes: SHOW PROPERTY")])]),e._v(" "),i("p",[e._v("For detailed help with the above commands, you can use help + command to get help after connecting Doris through the MySQL client. For example "),i("code",[e._v("HELP CREATE USER")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"permission-type"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#permission-type"}},[e._v("#")]),e._v(" Permission type")]),e._v(" "),i("p",[e._v("Doris currently supports the following permissions")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Node_priv")]),e._v(" "),i("p",[e._v("Nodes change permissions. Including FE, BE, BROKER node addition, deletion, offline operations. Currently, this permission can only be granted to Root users.")])]),e._v(" "),i("li",[i("p",[e._v("Grant_priv")]),e._v(" "),i("p",[e._v("Permissions change permissions. Allow the execution of operations including authorization, revocation, add/delete/change user/role, etc.")])]),e._v(" "),i("li",[i("p",[e._v("Select_priv")]),e._v(" "),i("p",[e._v("Read-only access to databases and tables.")])]),e._v(" "),i("li",[i("p",[e._v("Load_priv")]),e._v(" "),i("p",[e._v("Write permissions to databases and tables. Including Load, Insert, Delete and so on.")])]),e._v(" "),i("li",[i("p",[e._v("Alter_priv")]),e._v(" "),i("p",[e._v("Change permissions on databases and tables. It includes renaming libraries/tables, adding/deleting/changing columns, and adding/deleting partitions.")])]),e._v(" "),i("li",[i("p",[e._v("Create_priv")]),e._v(" "),i("p",[e._v("The right to create databases, tables, and views.")])]),e._v(" "),i("li",[i("p",[e._v("Drop_priv")]),e._v(" "),i("p",[e._v("Delete permissions for databases, tables, and views.")])])]),e._v(" "),i("h2",{attrs:{id:"permission-hierarchy"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#permission-hierarchy"}},[e._v("#")]),e._v(" Permission hierarchy")]),e._v(" "),i("p",[e._v("At the same time, according to the scope of application of permissions, we divide them into three levels:")]),e._v(" "),i("ol",[i("li",[e._v("GLOBAL LEVEL: Global permissions. That is, permissions on "),i("code",[e._v("*.*")]),e._v(" granted by GRANT statements. The granted permissions apply to any table in any database.")]),e._v(" "),i("li",[e._v("DATABASE LEVEL: Database-level permissions. That is, permissions on "),i("code",[e._v("db.*")]),e._v(" granted by GRANT statements. The granted permissions apply to any table in the specified database.")]),e._v(" "),i("li",[e._v("TABLE LEVEL: Table-level permissions. That is, permissions on "),i("code",[e._v("db.tbl")]),e._v(" granted by GRANT statements. The permissions granted apply to the specified tables in the specified database.")])]),e._v(" "),i("h2",{attrs:{id:"admin-grant"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#admin-grant"}},[e._v("#")]),e._v(" ADMIN /GRANT")]),e._v(" "),i("p",[e._v("ADMIN_PRIV and GRANT_PRIV have the authority of "),i("strong",[e._v('"grant authority"')]),e._v(" at the same time, which is more special. The operations related to these two privileges are described here one by one.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("CREATE USER")]),e._v(" "),i("ul",[i("li",[e._v("Users with ADMIN or GRANT privileges at any level can create new users.")])])]),e._v(" "),i("li",[i("p",[e._v("DROP USER")]),e._v(" "),i("ul",[i("li",[e._v("Only ADMIN privileges can delete users.")])])]),e._v(" "),i("li",[i("p",[e._v("CREATE/DROP ROLE")]),e._v(" "),i("ul",[i("li",[e._v("Only ADMIN privileges can create roles.")])])]),e._v(" "),i("li",[i("p",[e._v("GRANT /REVOKE")]),e._v(" "),i("ul",[i("li",[e._v("Users with ADMIN or GLOBAL GRANT privileges can grant or revoke the privileges of any user.")]),e._v(" "),i("li",[e._v("Users with GRANT privileges at the DATABASE level can grant or revoke the privileges of any user on the specified database.")]),e._v(" "),i("li",[e._v("Users with GRANT privileges at TABLE level can grant or revoke the privileges of any user on the specified tables in the specified database.")])])]),e._v(" "),i("li",[i("p",[e._v("SET PASSWORD")]),e._v(" "),i("ul",[i("li",[e._v("Users with ADMIN or GLOBAL GRANT privileges can set any user's password.")]),e._v(" "),i("li",[e._v("Ordinary users can set their corresponding User Identity password. The corresponding User Identity can be viewed by "),i("code",[e._v("SELECT CURRENT_USER();")]),e._v("command.")]),e._v(" "),i("li",[e._v("Users with GRANT privileges at non-GLOBAL level cannot set the password of existing users, but can only specify the password when creating users.")])])])]),e._v(" "),i("h2",{attrs:{id:"some-explanations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#some-explanations"}},[e._v("#")]),e._v(" Some explanations")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("When Doris initializes, the following users and roles are automatically created:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Operator role: This role has Node_priv and Admin_priv, i.e. all permissions for Doris. In a subsequent upgrade version, we may restrict the role's permissions to Node_priv, which is to grant only node change permissions. To meet some cloud deployment requirements.")])]),e._v(" "),i("li",[i("p",[e._v("admin role: This role has Admin_priv, which is all permissions except for node changes.")])]),e._v(" "),i("li",[i("p",[e._v("root@'%': root user, which allows login from any node, with the role of operator.")])]),e._v(" "),i("li",[i("p",[e._v("admin@'%': admin user, allowing login from any node, role admin.")])])])]),e._v(" "),i("li",[i("p",[e._v("It is not supported to delete or change the permissions of default created roles or users.")])]),e._v(" "),i("li",[i("p",[e._v("The user of the operator role has one and only one user. Users of admin roles can create multiple.")])]),e._v(" "),i("li",[i("p",[e._v("Operational instructions for possible conflicts")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Conflict between domain name and ip:")]),e._v(" "),i("p",[e._v("Assume that the following users are created:")]),e._v(" "),i("p",[e._v("CREATE USER cmy@['domain'];")]),e._v(" "),i("p",[e._v("And authorize:")]),e._v(" "),i("p",[e._v("GRANT SELECT_PRIV ON *.* TO cmy@['domain']")]),e._v(" "),i("p",[e._v("The domain is resolved into two ips: IP1 and IP2")]),e._v(" "),i("p",[e._v("Let's assume that we have a separate authorization for cmy@'ip1':")]),e._v(" "),i("p",[e._v("GRANT ALTER_PRIV ON *.* TO cmy@'ip1';")]),e._v(" "),i("p",[e._v("The permissions of CMY @'ip1'will be changed to SELECT_PRIV, ALTER_PRIV. And when we change the permissions of cmy@['domain'] again, cmy@'ip1' will not follow.")])]),e._v(" "),i("li",[i("p",[e._v("duplicate IP conflicts:")]),e._v(" "),i("p",[e._v("Assume that the following users are created:")]),e._v(" "),i("p",[e._v("CREATE USER cmy@'%' IDENTIFIED BY \"12345\";")]),e._v(" "),i("p",[e._v("CREATE USER cmy@'192.%' IDENTIFIED BY \"abcde\";")]),e._v(" "),i("p",[e._v("In priority,'192.%'takes precedence over'%', so when user CMY tries to login Doris with password '12345' from 192.168.1.1, the machine will be rejected.")])])])]),e._v(" "),i("li",[i("p",[e._v("Forget passwords")]),e._v(" "),i("p",[e._v("If you forget your password and cannot log in to Doris, you can log in to Doris without a password using the following command on the machine where the Doris FE node is located:")]),e._v(" "),i("p",[i("code",[e._v("mysql-client -h 127.0.0.1 -P query_port -uroot")])]),e._v(" "),i("p",[e._v("After login, the password can be reset through the SET PASSWORD command.")])]),e._v(" "),i("li",[i("p",[e._v("No user can reset the password of the root user except the root user himself.")])]),e._v(" "),i("li",[i("p",[e._v("ADMIN_PRIV permissions can only be granted or revoked at the GLOBAL level.")])]),e._v(" "),i("li",[i("p",[e._v("Having GRANT_PRIV at GLOBAL level is actually equivalent to having ADMIN_PRIV, because GRANT_PRIV at this level has the right to grant arbitrary permissions, please use it carefully.")])]),e._v(" "),i("li",[i("p",[i("code",[e._v("current_user()")]),e._v(" and "),i("code",[e._v("user()")])]),e._v(" "),i("p",[e._v("Users can view "),i("code",[e._v("current_user")]),e._v(" and "),i("code",[e._v("user")]),e._v(" respectively by "),i("code",[e._v("SELECT current_user();")]),e._v(" and "),i("code",[e._v("SELECT user();")]),e._v(". Where "),i("code",[e._v("current_user")]),e._v(" indicates which identity the current user is passing through the authentication system, and "),i("code",[e._v("user")]),e._v(" is the user's current actual "),i("code",[e._v("user_identity")]),e._v(".")])])]),e._v(" "),i("p",[e._v("For example, suppose the user "),i("code",[e._v("user1@'192.%'")]),e._v(" is created, and then a user user1 from 192.168.10.1 is logged into the system. At this time, "),i("code",[e._v("current_user")]),e._v(" is "),i("code",[e._v("user1@'192.%'")]),e._v(", and "),i("code",[e._v("user")]),e._v(" is "),i("code",[e._v("user1@'192.168.10.1'")]),e._v(".")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("All privileges are given to a `current_user`, and the real user has all the privileges of the corresponding `current_user`.\n")])])]),i("h2",{attrs:{id:"best-practices"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),i("p",[e._v("Here are some usage scenarios of Doris privilege system.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Scene 1")]),e._v(" "),i("p",[e._v("The users of Doris cluster are divided into Admin, RD and Client. Administrators have all the rights of the whole cluster, mainly responsible for cluster building, node management and so on. The development engineer is responsible for business modeling, including database building, data import and modification. Users access different databases and tables to get data.")]),e._v(" "),i("p",[e._v("In this scenario, ADMIN or GRANT privileges can be granted to administrators. Give RD CREATE, DROP, ALTER, LOAD, SELECT permissions to any or specified database tables. Give Client SELECT permission to any or specified database table. At the same time, it can also simplify the authorization of multiple users by creating different roles.")])]),e._v(" "),i("li",[i("p",[e._v("Scene 2")]),e._v(" "),i("p",[e._v("There are multiple services in a cluster, and each business may use one or more data. Each business needs to manage its own users. In this scenario. Administrator users can create a user with GRANT privileges at the DATABASE level for each database. The user can only authorize the specified database for the user.")])]),e._v(" "),i("li",[i("p",[e._v("Blacklist")]),e._v(" "),i("p",[e._v("Doris itself does not support blacklist, only whitelist, but we can simulate blacklist in some way. Suppose you first create a user named "),i("code",[e._v("user@'192.%'")]),e._v(", which allows users from "),i("code",[e._v("192.*")]),e._v(" to login. At this time, if you want to prohibit users from "),i("code",[e._v("192.168.10.1")]),e._v(" from logging in, you can create another user with "),i("code",[e._v("cmy@'192.168.10.1'")]),e._v(" and set a new password. Since "),i("code",[e._v("192.168.10.1")]),e._v(" has a higher priority than "),i("code",[e._v("192.%")]),e._v(", user can no longer login by using the old password from "),i("code",[e._v("192.168.10.1")]),e._v(".")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);