(window.webpackJsonp=window.webpackJsonp||[]).push([[1248],{1875:function(e,s,t){"use strict";t.r(s);var a=t(15),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"multi-tenancy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multi-tenancy"}},[e._v("#")]),e._v(" Multi-tenancy")]),e._v(" "),t("p",[e._v("The main purpose of Doris's multi-tenant and resource isolation solution is to reduce interference between multiple users when performing data operations in the same Doris cluster, and to allocate cluster resources to each user more reasonably.")]),e._v(" "),t("p",[e._v("The scheme is mainly divided into two parts, one is the division of resource groups at the node level in the cluster, and the other is the resource limit for a single query.")]),e._v(" "),t("h2",{attrs:{id:"nodes-in-doris"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodes-in-doris"}},[e._v("#")]),e._v(" Nodes in Doris")]),e._v(" "),t("p",[e._v("First, let's briefly introduce the node composition of Doris. There are two types of nodes in a Doris cluster: Frontend (FE) and Backend (BE).")]),e._v(" "),t("p",[e._v("FE is mainly responsible for metadata management, cluster management, user request access and query plan analysis.")]),e._v(" "),t("p",[e._v("BE is mainly responsible for data storage and execution of query plans.")]),e._v(" "),t("p",[e._v("FE does not participate in the processing and calculation of user data, so it is a node with low resource consumption. The BE is responsible for all data calculations and task processing, and is a resource-consuming node. Therefore, the resource division and resource restriction schemes introduced in this article are all aimed at BE nodes. Because the FE node consumes relatively low resources and can also be scaled horizontally, there is usually no need to isolate and restrict resources, and the FE node can be shared by all users.")]),e._v(" "),t("h2",{attrs:{id:"node-resource-division"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-resource-division"}},[e._v("#")]),e._v(" Node resource division")]),e._v(" "),t("p",[e._v("Node resource division refers to setting tags for BE nodes in a Doris cluster, and the BE nodes with the same tags form a resource group. Resource group can be regarded as a management unit of data storage and calculation. Below we use a specific example to introduce the use of resource groups.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Set labels for BE nodes")]),e._v(" "),t("p",[e._v("Assume that the current Doris cluster has 6 BE nodes. They are host[1-6] respectively. In the initial situation, all nodes belong to a default resource group (Default).")]),e._v(" "),t("p",[e._v("We can use the following command to divide these 6 nodes into 3 resource groups: group_a, group_b, group_c:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" system "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("modify")]),e._v(" backend "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"host1:9050"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tag.location"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"group_a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" system "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("modify")]),e._v(" backend "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"host2:9050"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tag.location"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"group_a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" system "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("modify")]),e._v(" backend "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"host3:9050"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tag.location"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"group_b"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" system "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("modify")]),e._v(" backend "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"host4:9050"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tag.location"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"group_b"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" system "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("modify")]),e._v(" backend "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"host5:9050"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tag.location"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"group_c"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" system "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("modify")]),e._v(" backend "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"host6:9050"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tag.location"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"group_c"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Here we combine "),t("code",[e._v("host[1-2]")]),e._v(" to form a resource group "),t("code",[e._v("group_a")]),e._v(", "),t("code",[e._v("host[3-4]")]),e._v(" to form a resource group "),t("code",[e._v("group_b")]),e._v(", and "),t("code",[e._v("host[5-6]")]),e._v(" to form a resource group "),t("code",[e._v("group_c")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("Note: One BE only supports setting one Tag.")])])]),e._v(" "),t("li",[t("p",[e._v("Distribution of data according to resource groups")]),e._v(" "),t("p",[e._v("After the resource group is divided. We can distribute different copies of user data in different resource groups. Assume a user table UserTable. We want to store a copy in each of the three resource groups, which can be achieved by the following table creation statement:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("create")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("table")]),e._v(" UserTable\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("k1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" k2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("distributed")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("by")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("k1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" buckets "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nproperties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"replication_allocation"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tag.location.group_a:1, tag.location.group_b:1, tag.location.group_c:1"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("In this way, the data in the UserTable table will be stored in the form of 3 copies in the nodes where the resource groups group_a, group_b, and group_c are located.")]),e._v(" "),t("p",[e._v("The following figure shows the current node division and data distribution:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" ┌────────────────────────────────────────────────────┐\n │                                                    │\n │         ┌──────────────────┐  ┌──────────────────┐ │\n │         │ host1            │  │ host2            │ │\n │         │  ┌─────────────┐ │  │                  │ │\n │ group_a │  │   replica1  │ │  │                  │ │\n │         │  └─────────────┘ │  │                  │ │\n │         │                  │  │                  │ │\n │         └──────────────────┘  └──────────────────┘ │\n │                                                    │\n ├────────────────────────────────────────────────────┤\n ├────────────────────────────────────────────────────┤\n │                                                    │\n │         ┌──────────────────┐  ┌──────────────────┐ │\n │         │ host3            │  │ host4            │ │\n │         │                  │  │  ┌─────────────┐ │ │\n │ group_b │                  │  │  │   replica2  │ │ │\n │         │                  │  │  └─────────────┘ │ │\n │         │                  │  │                  │ │\n │         └──────────────────┘  └──────────────────┘ │\n │                                                    │\n ├────────────────────────────────────────────────────┤\n ├────────────────────────────────────────────────────┤\n │                                                    │\n │         ┌──────────────────┐  ┌──────────────────┐ │\n │         │ host5            │  │ host6            │ │\n │         │                  │  │  ┌─────────────┐ │ │\n │ group_c │                  │  │  │   replica3  │ │ │\n │         │                  │  │  └─────────────┘ │ │\n │         │                  │  │                  │ │\n │         └──────────────────┘  └──────────────────┘ │\n │                                                    │\n └────────────────────────────────────────────────────┘\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Use different resource groups for data query")]),e._v(" "),t("p",[e._v("After the execution of the first two steps is completed, we can limit a user's query by setting the user's resource usage permissions, and can only use the nodes in the specified resource group to execute.")]),e._v(" "),t("p",[e._v("For example, we can use the following statement to restrict user1 to only use nodes in the "),t("code",[e._v("group_a")]),e._v(" resource group for data query, user2 can only use the "),t("code",[e._v("group_b")]),e._v(" resource group, and user3 can use 3 resource groups at the same time:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" property "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'user1''resource_tags.location'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'group_a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" property "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'user2''resource_tags.location'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'group_b'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" property "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'user3''resource_tags.location'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'group_a, group_b, group_c'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("After the setting is complete, when user1 initiates a query on the UserTable table, it will only access the data copy on the nodes in the "),t("code",[e._v("group_a")]),e._v(" resource group, and the query will only use the node computing resources in the "),t("code",[e._v("group_a")]),e._v(" resource group. The query of user3 can use copies and computing resources in any resource group.")]),e._v(" "),t("p",[e._v("In this way, we have achieved physical resource isolation for different user queries by dividing nodes and restricting user resource usage. Furthermore, we can create different users for different business departments and restrict each user from using different resource groups. In order to avoid the use of resource interference between different business parts. For example, there is a business table in the cluster that needs to be shared by all 9 business departments, but it is hoped that resource preemption between different departments can be avoided as much as possible. Then we can create 3 copies of this table and store them in 3 resource groups. Next, we create 9 users for 9 business departments, and limit the use of one resource group for every 3 users. In this way, the degree of competition for resources is reduced from 9 to 3.")]),e._v(" "),t("p",[e._v("On the other hand, for the isolation of online and offline tasks. We can use resource groups to achieve this. For example, we can divide nodes into two resource groups, Online and Offline. The table data is still stored in 3 copies, of which 2 copies are stored in the Online resource group, and 1 copy is stored in the Offline resource group. The Online resource group is mainly used for online data services with high concurrency and low latency. Some large queries or offline ETL operations can be executed using nodes in the Offline resource group. So as to realize the ability to provide online and offline services simultaneously in a unified cluster.")])]),e._v(" "),t("li",[t("p",[e._v("Resource group assignments for load job")]),e._v(" "),t("p",[e._v("The resource usage of load jobs (including insert, broker load, routine load, stream load, etc.) can be divided into two parts:")]),e._v(" "),t("ol",[t("li",[e._v("Computing resources: responsible for reading data sources, data transformation and distribution.")]),e._v(" "),t("li",[e._v("Write resource: responsible for data encoding, compression and writing to disk.")])]),e._v(" "),t("p",[e._v("The write resource must be the node where the replica is located, and the computing resource can theoretically select any node to complete. Therefore, the allocation of resource groups for load jobs is divided into two steps:")]),e._v(" "),t("ol",[t("li",[e._v("Use user-level resource tags to limit the resource groups that computing resources can use.")]),e._v(" "),t("li",[e._v("Use the resource tag of the replica to limit the resource group that the write resource can use.")])]),e._v(" "),t("p",[e._v("So if you want all the resources used by the load operation to be limited to the resource group where the data is located, you only need to set the resource tag of the user level to the same as the resource tag of the replica.")])])]),e._v(" "),t("h2",{attrs:{id:"single-query-resource-limit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#single-query-resource-limit"}},[e._v("#")]),e._v(" Single query resource limit")]),e._v(" "),t("p",[e._v("The resource group method mentioned earlier is resource isolation and restriction at the node level. In the resource group, resource preemption problems may still occur. For example, as mentioned above, the three business departments are arranged in the same resource group. Although the degree of resource competition is reduced, the queries of these three departments may still affect each other.")]),e._v(" "),t("p",[e._v("Therefore, in addition to the resource group solution, Doris also provides a single query resource restriction function.")]),e._v(" "),t("p",[e._v("At present, Doris's resource restrictions on single queries are mainly divided into two aspects: CPU and memory restrictions.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Memory Limitation")]),e._v(" "),t("p",[e._v("Doris can limit the maximum memory overhead that a query is allowed to use. To ensure that the memory resources of the cluster will not be fully occupied by a query. We can set the memory limit in the following ways:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set the session variable exec_mem_limit. Then all subsequent queries in the session (within the connection) use this memory limit.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" exec_mem_limit"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("G"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set the global variable exec_mem_limit. Then all subsequent queries of all new sessions (new connections) use this memory limit.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("global")]),e._v(" exec_mem_limit"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("G"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set the variable exec_mem_limit in SQL. Then the variable only affects this SQL.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*+ SET_VAR(exec_mem_limit=1G) */")]),e._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" tbl "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Because Doris' query engine is based on the full-memory MPP query framework. Therefore, when the memory usage of a query exceeds the limit, the query will be terminated. Therefore, when a query cannot run under a reasonable memory limit, we need to solve it through some SQL optimization methods or cluster expansion.")])]),e._v(" "),t("li",[t("p",[e._v("CPU limitations")]),e._v(" "),t("p",[e._v("Users can limit the CPU resources of the query in the following ways:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set the session variable cpu_resource_limit. Then all queries in the session (within the connection) will use this CPU limit.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" cpu_resource_limit "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set the user's attribute cpu_resource_limit, then all queries of this user will use this CPU limit. The priority of this attribute is higher than the session variable cpu_resource_limit")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" property "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'user1''cpu_resource_limit'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("The value of "),t("code",[e._v("cpu_resource_limit")]),e._v(" is a relative value. The larger the value, the more CPU resources can be used. However, the upper limit of the CPU that can be used by a query also depends on the number of partitions and buckets of the table. In principle, the maximum CPU usage of a query is positively related to the number of tablets involved in the query. In extreme cases, assuming that a query involves only one tablet, even if "),t("code",[e._v("cpu_resource_limit")]),e._v(" is set to a larger value, only 1 CPU resource can be used.")])])]),e._v(" "),t("p",[e._v("Through memory and CPU resource limits. We can divide user queries into more fine-grained resources within a resource group. For example, we can make some offline tasks with low timeliness requirements, but with a large amount of calculation, use less CPU resources and more memory resources. Some delay-sensitive online tasks use more CPU resources and reasonable memory resources.")]),e._v(" "),t("h2",{attrs:{id:"best-practices-and-forward-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-and-forward-compatibility"}},[e._v("#")]),e._v(" Best practices and forward compatibility")]),e._v(" "),t("p",[e._v("Tag division and CPU limitation are new features in version 0.15. In order to ensure a smooth upgrade from the old version, Doris has made the following forward compatibility:")]),e._v(" "),t("ol",[t("li",[e._v("Each BE node will have a default Tag: "),t("code",[e._v('"tag.location": "default"')]),e._v(".")]),e._v(" "),t("li",[e._v("The BE node added through the "),t("code",[e._v("alter system add backend")]),e._v(" statement will also set Tag: "),t("code",[e._v('"tag.location": "default"')]),e._v(" by default.")]),e._v(" "),t("li",[e._v("The copy distribution of all tables is modified by default to: "),t("code",[e._v('"tag.location.default:xx')]),e._v(". xx is the number of original copies.")]),e._v(" "),t("li",[e._v("Users can still specify the number of replicas in the table creation statement by "),t("code",[e._v('"replication_num" = "xx"')]),e._v(", this attribute will be automatically converted to: "),t("code",[e._v('"tag.location.default:xx')]),e._v(". This ensures that there is no need to modify the original creation. Table statement.")]),e._v(" "),t("li",[e._v("By default, the memory limit for a single query is 2GB for a single node, and the CPU resources are unlimited, which is consistent with the original behavior. And the user's "),t("code",[e._v("resource_tags.location")]),e._v(" attribute is empty, that is, by default, the user can access the BE of any Tag, which is consistent with the original behavior.")])]),e._v(" "),t("p",[e._v("Here we give an example of the steps to start using the resource division function after upgrading from the original cluster to version 0.15:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Turn off data repair and balance logic")]),e._v(" "),t("p",[e._v("After the upgrade, the default Tag of BE is "),t("code",[e._v('"tag.location": "default"')]),e._v(", and the default copy distribution of the table is: "),t("code",[e._v('"tag.location.default:xx')]),e._v(". So if you directly modify the Tag of BE, the system will Automatically detect changes in the distribution of copies, and start data redistribution. This may occupy some system resources. So we can turn off the data repair and balance logic before modifying the tag to ensure that there will be no copies when we plan resources Redistribution operation.")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("ADMIN "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" FRONTEND CONFIG "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"disable_balance"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nADMIN "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" FRONTEND CONFIG "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"disable_tablet_scheduler"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Set Tag and table copy distribution")]),e._v(" "),t("p",[e._v("Next, you can use the "),t("code",[e._v("alter system modify backend")]),e._v(" statement to set the BE Tag. And through the "),t("code",[e._v("alter table")]),e._v(" statement to modify the copy distribution strategy of the table. Examples are as follows:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" system "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("modify")]),e._v(" backend "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"host1:9050, 1212:9050"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tag.location"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"group_a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("table")]),e._v(" my_table "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("modify")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("partition")]),e._v(" p1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"replication_allocation"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tag.location.group_a:2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Turn on data repair and balance logic")]),e._v(" "),t("p",[e._v("After the tag and copy distribution are set, we can turn on the data repair and equalization logic to trigger data redistribution.")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("ADMIN "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" FRONTEND CONFIG "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"disable_balance"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"false"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nADMIN "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" FRONTEND CONFIG "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"disable_tablet_scheduler"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"false"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("This process will continue for a period of time depending on the amount of data involved. And it will cause some colocation tables to fail colocation planning (because the copy is being migrated). You can view the progress by "),t("code",[e._v('show proc "/cluster_balance/"')]),e._v(". You can also judge the progress by the number of "),t("code",[e._v("UnhealthyTabletNum")]),e._v(" in "),t("code",[e._v('show proc "/statistic"')]),e._v(". When "),t("code",[e._v("UnhealthyTabletNum")]),e._v(" drops to 0, it means that the data redistribution is completed. .")])]),e._v(" "),t("li",[t("p",[e._v("Set the user's resource label permissions.")]),e._v(" "),t("p",[e._v("After the data is redistributed. We can start to set the user's resource label permissions. Because by default, the user's "),t("code",[e._v("resource_tags.location")]),e._v(" attribute is empty, that is, the BE of any tag can be accessed. Therefore, in the previous steps, the normal query of existing users will not be affected. When the "),t("code",[e._v("resource_tags.location")]),e._v(" property is not empty, the user will be restricted from accessing the BE of the specified Tag.")])])]),e._v(" "),t("p",[e._v("Through the above 4 steps, we can smoothly use the resource division function after the original cluster is upgraded.")])])}),[],!1,null,null,null);s.default=r.exports}}]);