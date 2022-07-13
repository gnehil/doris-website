(window.webpackJsonp=window.webpackJsonp||[]).push([[1790],{2417:function(e,t,s){"use strict";s.r(t);var a=s(15),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ldap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ldap"}},[e._v("#")]),e._v(" LDAP")]),e._v(" "),s("p",[e._v("Access to third-party LDAP services to provide authentication login and group authorization services for Doris.")]),e._v(" "),s("p",[e._v("LDAP authentication login complements Doris authentication login by accessing the LDAP service for password authentication; Doris uses LDAP to authenticate the user's password first; if the user does not exist in the LDAP service, it continues to use Doris to authenticate the password; if the LDAP password is correct but there is no corresponding account in Doris, a temporary user is created to log in to Doris.")]),e._v(" "),s("p",[e._v("LDAP group authorization, is to map the group in LDAP to the Role in Doris, if the user belongs to multiple user groups in LDAP, after logging into Doris the user will get the permission of all groups corresponding to the Role, requiring the group name to be the same as the Role name.")]),e._v(" "),s("h2",{attrs:{id:"noun-interpretation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),s("ul",[s("li",[e._v("LDAP: Lightweight directory access protocol that enables centralized management of account passwords.")]),e._v(" "),s("li",[e._v("Privilege: Permissions act on nodes, databases or tables. Different permissions represent different permission to operate.")]),e._v(" "),s("li",[e._v("Role: Doris can create custom named roles. A role can be thought of as a collection of permissions.")])]),e._v(" "),s("h2",{attrs:{id:"enable-ldap-authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-ldap-authentication"}},[e._v("#")]),e._v(" Enable LDAP Authentication")]),e._v(" "),s("h3",{attrs:{id:"server-side-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-side-configuration"}},[e._v("#")]),e._v(" Server-side Configuration")]),e._v(" "),s("p",[e._v("You need to configure the LDAP basic information in the fe/conf/ldap.conf file, and the LDAP administrator password needs to be set using sql statements.")]),e._v(" "),s("h4",{attrs:{id:"configure-the-fe-conf-ldap-conf-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-fe-conf-ldap-conf-file"}},[e._v("#")]),e._v(" Configure the fe/conf/ldap.conf file：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("ldap_authentication_enabled = false"),s("br"),e._v('\nSet the value to "true" to enable LDAP authentication; when the value is "false", LDAP authentication is not enabled and all other configuration items of this profile are invalid.Set the value to "true" to enable LDAP authentication; when the value is "false", LDAP authentication is not enabled and all other configuration items of this profile are invalid.')])]),e._v(" "),s("li",[s("p",[e._v("ldap_host = 127.0.0.1"),s("br"),e._v("\nLDAP service ip.")])]),e._v(" "),s("li",[s("p",[e._v("ldap_port = 389"),s("br"),e._v("\nLDAP service port, the default plaintext transfer port is 389, currently Doris' LDAP function only supports plaintext password transfer.")])]),e._v(" "),s("li",[s("p",[e._v("ldap_admin_name = cn=admin,dc=domain,dc=com"),s("br"),e._v('\nLDAP administrator account "Distinguished Name". When a user logs into Doris using LDAP authentication, Doris will bind the administrator account to search for user information in LDAP.')])]),e._v(" "),s("li",[s("p",[e._v("ldap_user_basedn = ou=people,dc=domain,dc=com\nDoris base dn when searching for user information in LDAP.")])]),e._v(" "),s("li",[s("p",[e._v("ldap_user_filter = (&(uid={login}))")]),e._v(" "),s("p",[e._v('For Doris\' filtering criteria when searching for user information in LDAP, the placeholder "{login}" will be replaced with the login username. You must ensure that the user searched by this filter is unique, otherwise Doris will not be able to verify the password through LDAP and the error message "ERROR 5081 (42000): user is not unique in LDAP server." will appear when logging in.')]),e._v(" "),s("p",[e._v("For example, if you use the LDAP user node uid attribute as the username to log into Doris, you can configure it as:"),s("br"),e._v("\nldap_user_filter = (&(uid={login}))；"),s("br"),e._v("\nThis item can be configured using the LDAP user mailbox prefix as the user name:"),s("br"),e._v("\nldap_user_filter = (&(mail={login}@baidu.com))。")])]),e._v(" "),s("li",[s("p",[e._v("ldap_group_basedn = ou=group,dc=domain,dc=com\nbase dn when Doris searches for group information in LDAP. if this item is not configured, LDAP group authorization will not be enabled.")])])]),e._v(" "),s("h4",{attrs:{id:"set-the-ldap-administrator-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-the-ldap-administrator-password"}},[e._v("#")]),e._v(" Set the LDAP administrator password:")]),e._v(" "),s("p",[e._v("After configuring the ldap.conf file, start fe, log in to Doris with the root or admin account, and execute sql:")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" ldap_admin_password "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ldap_admin_password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"client-side-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-side-configuration"}},[e._v("#")]),e._v(" Client-side configuration")]),e._v(" "),s("p",[e._v("Client-side LDAP authentication requires the mysql client-side explicit authentication plugin to be enabled. Logging into Doris using the command line enables the mysql explicit authentication plugin in one of two ways.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Set the environment variable LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN to value 1.\nFor example, in a linux or max environment you can use the command:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"export LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ～/.bash_profile "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" ～/.bash_profile\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v('Add the parameter "--enable-cleartext-plugin" each time you log in to Doris.')]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("mysql "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("hDORIS_HOST "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("PDORIS_PORT "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("u "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("user")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("p "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("--enable-cleartext-plugin")]),e._v("\n\nEnter ldap password\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])])]),e._v(" "),s("h2",{attrs:{id:"ldap-authentication-detailed-explanation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ldap-authentication-detailed-explanation"}},[e._v("#")]),e._v(" LDAP authentication detailed explanation")]),e._v(" "),s("p",[e._v("LDAP password authentication and group authorization are complementary to Doris password authentication and authorization. Enabling LDAP functionality does not completely replace Doris password authentication and authorization, but coexists with Doris password authentication and authorization.")]),e._v(" "),s("h3",{attrs:{id:"ldap-authentication-login-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ldap-authentication-login-details"}},[e._v("#")]),e._v(" LDAP authentication login details")]),e._v(" "),s("p",[e._v("When LDAP is enabled, users have the following in Doris and DLAP:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("LDAP User")]),e._v(" "),s("th",[e._v("Doris User")]),e._v(" "),s("th",[e._v("Password")]),e._v(" "),s("th",[e._v("Login Status")]),e._v(" "),s("th",[e._v("Login to Doris users")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Existent")]),e._v(" "),s("td",[e._v("Existent")]),e._v(" "),s("td",[e._v("LDAP Password")]),e._v(" "),s("td",[e._v("Login successful")]),e._v(" "),s("td",[e._v("Doris User")])]),e._v(" "),s("tr",[s("td",[e._v("Existent")]),e._v(" "),s("td",[e._v("Existent")]),e._v(" "),s("td",[e._v("Doris Password")]),e._v(" "),s("td",[e._v("Login failure")]),e._v(" "),s("td",[e._v("None")])]),e._v(" "),s("tr",[s("td",[e._v("Non-Existent")]),e._v(" "),s("td",[e._v("Existent")]),e._v(" "),s("td",[e._v("Doris Password")]),e._v(" "),s("td",[e._v("Login successful")]),e._v(" "),s("td",[e._v("Doris User")])]),e._v(" "),s("tr",[s("td",[e._v("Existent")]),e._v(" "),s("td",[e._v("Non-Existent")]),e._v(" "),s("td",[e._v("LDAP Password")]),e._v(" "),s("td",[e._v("Login successful")]),e._v(" "),s("td",[e._v("Ldap Temporary user")])])])]),e._v(" "),s("p",[e._v("After LDAP is enabled, when a user logs in using mysql client, Doris will first verify the user's password through the LDAP service, and if the LDAP user exists and the password is correct, Doris will use the user to log in; at this time, if the corresponding account exists, Doris will directly log in to the account, and if the corresponding account does not exist, it will create a temporary account for the user and log in to the account. The temporary account has the appropriate pair of permissions (see LDAP Group Authorization) and is only valid for the current connection. doris does not create the user and does not generate metadata for creating the user pair."),s("br"),e._v("\nIf no login user exists in the LDAP service, Doris is used for password authentication.")]),e._v(" "),s("p",[e._v("The following assumes that LDAP authentication is enabled, ldap_user_filter = (&(uid={login})) is configured, and all other configuration items are correct, and the client sets the environment variable LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1")]),e._v(" "),s("p",[e._v("For example:")]),e._v(" "),s("h4",{attrs:{id:"_1-accounts-exist-in-both-doris-and-ldap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-accounts-exist-in-both-doris-and-ldap"}},[e._v("#")]),e._v(" 1:Accounts exist in both Doris and LDAP.")]),e._v(" "),s("p",[e._v("Doris account exists: jack@'172.10.1.10', password: 123456"),s("br"),e._v("\nLDAP user node presence attribute: uid: jack user password: abcdef"),s("br"),e._v("\nThe jack@'172.10.1.10' account can be logged into by logging into Doris using the following command:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Login will fail with the following command:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("mysql -hDoris_HOST -PDoris_PORT -ujack -p "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("123456")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"_2-the-user-exists-in-ldap-and-the-corresponding-account-does-not-exist-in-doris"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-the-user-exists-in-ldap-and-the-corresponding-account-does-not-exist-in-doris"}},[e._v("#")]),e._v(" 2:The user exists in LDAP and the corresponding account does not exist in Doris.")]),e._v(" "),s("p",[e._v("LDAP user node presence attribute: uid: jack User password: abcdef"),s("br"),e._v("\nUse the following command to create a temporary user and log in to jack@'%', the temporary user has basic privileges DatabasePrivs: Select_priv, Doris will delete the temporary user after the user logs out and logs in:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"_3-ldap-does-not-exist-for-the-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-ldap-does-not-exist-for-the-user"}},[e._v("#")]),e._v(" 3:LDAP does not exist for the user.")]),e._v(" "),s("p",[e._v("Doris account exists: jack@'172.10.1.10', password: 123456"),s("br"),e._v("\nLogin to the account using the Doris password, successfully:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("mysql -hDoris_HOST -PDoris_PORT -ujack -p "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("123456")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"ldap-group-authorization-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ldap-group-authorization-details"}},[e._v("#")]),e._v(" LDAP group authorization details")]),e._v(" "),s("p",[e._v('If a DLAP user dn is the "member" attribute of an LDAP group node, Doris assumes that the user belongs to the group. Doris will revoke the corresponding role privileges after the user logs out. Before using LDAP group authorization, you should create the corresponding role pairs in Doris and authorize the roles.')]),e._v(" "),s("p",[e._v("Login user Privileges are related to Doris user and group Privileges, as shown in the following table:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("LDAP Users")]),e._v(" "),s("th",[e._v("Doris Users")]),e._v(" "),s("th",[e._v("Login User Privileges")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("exist")]),e._v(" "),s("td",[e._v("exist")]),e._v(" "),s("td",[e._v("LDAP group Privileges + Doris user Privileges")])]),e._v(" "),s("tr",[s("td",[e._v("Does not exist")]),e._v(" "),s("td",[e._v("Exists")]),e._v(" "),s("td",[e._v("Doris user Privileges")])]),e._v(" "),s("tr",[s("td",[e._v("exist")]),e._v(" "),s("td",[e._v("non-exist")]),e._v(" "),s("td",[e._v("LDAP group Privileges")])])])]),e._v(" "),s("p",[e._v("If the logged-in user is a temporary user and no group permission exists, the user has the select_priv permission of the information_schema by default")]),e._v(" "),s("p",[e._v("Example:"),s("br"),e._v('\nLDAP user dn is the "member" attribute of the LDAP group node then the user is considered to belong to the group, Doris will intercept the first Rdn of group dn as the group name.'),s("br"),e._v('\nFor example, if user dn is "uid=jack,ou=aidp,dc=domain,dc=com", the group information is as follows:')]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("dn: cn=doris_rd,ou=group,dc=domain,dc=com  \nobjectClass: groupOfNames  \nmember: uid=jack,ou=aidp,dc=domain,dc=com  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Then the group name is doris_rd.")]),e._v(" "),s("p",[e._v("If jack also belongs to the LDAP groups doris_qa, doris_pm; Doris exists roles: doris_rd, doris_qa, doris_pm, after logging in using LDAP authentication, the user will not only have the original permissions of the account, but will also get the roles doris_rd, doris_qa and doris _pm privileges.")]),e._v(" "),s("h2",{attrs:{id:"limitations-of-ldap-authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-ldap-authentication"}},[e._v("#")]),e._v(" Limitations of LDAP authentication")]),e._v(" "),s("ul",[s("li",[e._v("The current LDAP feature of Doris only supports plaintext password authentication, that is, when a user logs in, the password is transmitted in plaintext between client and fe and between fe and LDAP service.")]),e._v(" "),s("li",[e._v("The current LDAP authentication only supports password authentication under mysql protocol. If you use the Http interface, you cannot use LDAP users for authentication.")]),e._v(" "),s("li",[e._v("Temporary users do not have user properties.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);