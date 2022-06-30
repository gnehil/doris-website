(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{498:function(e,t,o){"use strict";o.r(t);var n=o(2),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"elastic-scaling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#elastic-scaling"}},[e._v("#")]),e._v(" Elastic scaling")]),e._v(" "),o("p",[e._v("Doris can easily expand and shrink FE, BE, Broker instances.")]),e._v(" "),o("h2",{attrs:{id:"fe-expansion-and-compression"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fe-expansion-and-compression"}},[e._v("#")]),e._v(" FE Expansion and Compression")]),e._v(" "),o("p",[e._v("High availability of FE can be achieved by expanding FE to three top-one nodes.")]),e._v(" "),o("p",[e._v("Users can login to Master FE through MySQL client. By:")]),e._v(" "),o("p",[o("code",[e._v("SHOW PROC '/frontends';")])]),e._v(" "),o("p",[e._v("To view the current FE node situation.")]),e._v(" "),o("p",[e._v("You can also view the FE node through the front-end page connection: "),o("code",[e._v("http://fe_hostname:fe_http_port/frontend")]),e._v(" or "),o("code",[e._v("http://fe_hostname:fe_http_port/system?Path=//frontends")]),e._v(".")]),e._v(" "),o("p",[e._v("All of the above methods require Doris's root user rights.")]),e._v(" "),o("p",[e._v("The process of FE node expansion and contraction does not affect the current system operation.")]),e._v(" "),o("h3",{attrs:{id:"adding-fe-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-fe-nodes"}},[e._v("#")]),e._v(" Adding FE nodes")]),e._v(" "),o("p",[e._v("FE is divided into three roles: Leader, Follower and Observer. By default, a cluster can have only one Leader and multiple Followers and Observers. Leader and Follower form a Paxos selection group. If the Leader goes down, the remaining Followers will automatically select a new Leader to ensure high write availability. Observer synchronizes Leader data, but does not participate in the election. If only one FE is deployed, FE defaults to Leader.")]),e._v(" "),o("p",[e._v("The first FE to start automatically becomes Leader. On this basis, several Followers and Observers can be added.")]),e._v(" "),o("p",[e._v("Add Follower or Observer. Connect to the started FE using mysql-client and execute:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM ADD FOLLOWER "follower_host:edit_log_port";')])]),e._v(" "),o("p",[e._v("or")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM ADD OBSERVER "observer_host:edit_log_port";')])]),e._v(" "),o("p",[e._v("The follower_host and observer_host is the node IP of Follower or Observer, and the edit_log_port in its configuration file fe.conf.")]),e._v(" "),o("p",[e._v("Configure and start Follower or Observer. Follower and Observer are configured with Leader. The following commands need to be executed at the first startup:")]),e._v(" "),o("p",[o("code",[e._v("bin/start_fe.sh --helper host:edit_log_port --daemon")])]),e._v(" "),o("p",[e._v("The host is the node IP of Leader, and the edit_log_port in Lead's configuration file fe.conf. The --helper is only required when follower/observer is first startup.")]),e._v(" "),o("p",[e._v("View the status of Follower or Observer. Connect to any booted FE using mysql-client and execute:")]),e._v(" "),o("p",[o("code",[e._v("SHOW PROC '/frontends';")])]),e._v(" "),o("p",[e._v("You can view the FE currently joined the cluster and its corresponding roles.")]),e._v(" "),o("blockquote",[o("p",[e._v("Notes for FE expansion:")]),e._v(" "),o("ol",[o("li",[e._v("The number of Follower FEs (including Leaders) must be odd. It is recommended that a maximum of three constituent high availability (HA) modes be deployed.")]),e._v(" "),o("li",[e._v("When FE is in a highly available deployment (1 Leader, 2 Follower), we recommend that the reading service capability of FE be extended by adding Observer FE. Of course, you can continue to add Follower FE, but it's almost unnecessary.")]),e._v(" "),o("li",[e._v("Usually a FE node can handle 10-20 BE nodes. It is suggested that the total number of FE nodes should be less than 10. Usually three can meet most of the needs.")]),e._v(" "),o("li",[e._v("The helper cannot point to the FE itself, it must point to one or more existing running Master/Follower FEs.")])])]),e._v(" "),o("h3",{attrs:{id:"delete-fe-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delete-fe-nodes"}},[e._v("#")]),e._v(" Delete FE nodes")]),e._v(" "),o("p",[e._v("Delete the corresponding FE node using the following command:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM DROP FOLLOWER[OBSERVER] "fe_host:edit_log_port";')])]),e._v(" "),o("blockquote",[o("p",[e._v("Notes for FE contraction:")]),e._v(" "),o("ol",[o("li",[e._v("When deleting Follower FE, make sure that the remaining Follower (including Leader) nodes are odd.")])])]),e._v(" "),o("h2",{attrs:{id:"be-expansion-and-compression"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#be-expansion-and-compression"}},[e._v("#")]),e._v(" BE Expansion and Compression")]),e._v(" "),o("p",[e._v("Users can login to Leader FE through mysql-client. By:")]),e._v(" "),o("p",[o("code",[e._v("SHOW PROC '/backends';")])]),e._v(" "),o("p",[e._v("To see the current BE node situation.")]),e._v(" "),o("p",[e._v("You can also view the BE node through the front-end page connection: "),o("code",[e._v("http://fe_hostname:fe_http_port/backend")]),e._v(" or "),o("code",[e._v("http://fe_hostname:fe_http_port/system?Path=//backends")]),e._v(".")]),e._v(" "),o("p",[e._v("All of the above methods require Doris's root user rights.")]),e._v(" "),o("p",[e._v("The expansion and scaling process of BE nodes does not affect the current system operation and the tasks being performed, and does not affect the performance of the current system. Data balancing is done automatically. Depending on the amount of data available in the cluster, the cluster will be restored to load balancing in a few hours to a day. For cluster load, see the "),o("RouterLink",{attrs:{to:"/docs/admin-manual/maint-monitor/tablet-meta-tool.html"}},[e._v("Tablet Load Balancing Document")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"add-be-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-be-nodes"}},[e._v("#")]),e._v(" Add BE nodes")]),e._v(" "),o("p",[e._v("The BE node is added in the same way as in the "),o("strong",[e._v("BE deployment")]),e._v(" section. The BE node is added by the "),o("code",[e._v("ALTER SYSTEM ADD BACKEND")]),e._v(" command.")]),e._v(" "),o("blockquote",[o("p",[e._v("Notes for BE expansion:")]),e._v(" "),o("ol",[o("li",[e._v("After BE expansion, Doris will automatically balance the data according to the load, without affecting the use during the period.")])])]),e._v(" "),o("h3",{attrs:{id:"delete-be-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delete-be-nodes"}},[e._v("#")]),e._v(" Delete BE nodes")]),e._v(" "),o("p",[e._v("There are two ways to delete BE nodes: DROP and DECOMMISSION")]),e._v(" "),o("p",[e._v("The DROP statement is as follows:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM DROP BACKEND "be_host:be_heartbeat_service_port";')])]),e._v(" "),o("p",[o("strong",[e._v("Note: DROP BACKEND will delete the BE directly and the data on it will not be recovered!!! So we strongly do not recommend DROP BACKEND to delete BE nodes. When you use this statement, there will be corresponding error-proof operation hints.")])]),e._v(" "),o("p",[e._v("DECOMMISSION clause:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";')])]),e._v(" "),o("blockquote",[o("p",[e._v("DECOMMISSION notes:")]),e._v(" "),o("ol",[o("li",[e._v("This command is used to safely delete BE nodes. After the command is issued, Doris attempts to migrate the data on the BE to other BE nodes, and when all data is migrated, Doris automatically deletes the node.")]),e._v(" "),o("li",[e._v("The command is an asynchronous operation. After execution, you can see that the BE node's isDecommission status is true through ``SHOW PROC '/backends';` Indicates that the node is offline.")]),e._v(" "),o("li",[e._v("The order "),o("strong",[e._v("does not necessarily carry out successfully")]),e._v(". For example, when the remaining BE storage space is insufficient to accommodate the data on the offline BE, or when the number of remaining machines does not meet the minimum number of replicas, the command cannot be completed, and the BE will always be in the state of isDecommission as true.")]),e._v(" "),o("li",[e._v("The progress of DECOMMISSION can be viewed through "),o("code",[e._v("SHOW PROC '/backends';")]),e._v(" Tablet Num, and if it is in progress, Tablet Num will continue to decrease.")]),e._v(" "),o("li",[e._v("The operation can be carried out by:\n"),o("code",[e._v('CANCEL ALTER SYSTEM DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";')]),e._v("\nThe order was cancelled. When cancelled, the data on the BE will maintain the current amount of data remaining. Follow-up Doris re-load balancing")])])]),e._v(" "),o("p",[o("strong",[e._v("For expansion and scaling of BE nodes in multi-tenant deployment environments, please refer to the "),o("RouterLink",{attrs:{to:"/docs/admin-manual/multi-tenant.html"}},[e._v("Multi-tenant Design Document")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"broker-expansion-and-shrinkage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#broker-expansion-and-shrinkage"}},[e._v("#")]),e._v(" Broker Expansion and Shrinkage")]),e._v(" "),o("p",[e._v("There is no rigid requirement for the number of Broker instances. Usually one physical machine is deployed. Broker addition and deletion can be accomplished by following commands:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM ADD BROKER broker_name "broker_host:broker_ipc_port";')]),e._v(" "),o("code",[e._v('ALTER SYSTEM DROP BROKER broker_name "broker_host:broker_ipc_port";')]),e._v(" "),o("code",[e._v("ALTER SYSTEM DROP ALL BROKER broker_name;")])]),e._v(" "),o("p",[e._v("Broker is a stateless process that can be started or stopped at will. Of course, when it stops, the job running on it will fail. Just try again.")])])}),[],!1,null,null,null);t.default=a.exports}}]);