(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{1179:function(e,t,o){"use strict";o.r(t);var i=o(15),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"bucket-shuffle-join"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bucket-shuffle-join"}},[e._v("#")]),e._v(" Bucket Shuffle Join")]),e._v(" "),o("p",[e._v("Bucket Shuffle Join is a new function officially added in Doris 0.14. The purpose is to provide local optimization for some join queries to reduce the time-consuming of data transmission between nodes and speed up the query.")]),e._v(" "),o("p",[e._v("It's design, implementation can be referred to "),o("a",{attrs:{href:"https://github.com/apache/incubator-doris/issues/4394",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISSUE 4394"),o("OutboundLink")],1),e._v("。")]),e._v(" "),o("h2",{attrs:{id:"noun-interpretation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),o("ul",[o("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),o("li",[e._v("BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")]),e._v(" "),o("li",[e._v("Left table: the left table in join query. Perform probe expr. The order can be adjusted by join reorder.")]),e._v(" "),o("li",[e._v("Right table: the right table in join query. Perform build expr The order can be adjusted by join reorder.")])]),e._v(" "),o("h2",{attrs:{id:"principle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),o("p",[e._v("The conventional distributed join methods supported by Doris is: "),o("code",[e._v("Shuffle Join, Broadcast Join")]),e._v(". Both of these join will lead to some network overhead.")]),e._v(" "),o("p",[e._v("For example, there are join queries for table A and table B. the join method is hashjoin. The cost of different join types is as follows：")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Broadcast Join")]),e._v(": If table a has three executing hashjoinnodes according to the data distribution, table B needs to be sent to the three HashJoinNode. Its network overhead is "),o("code",[e._v("3B")]),e._v(", and its memory overhead is "),o("code",[e._v("3B")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("Shuffle Join")]),e._v(": Shuffle join will distribute the data of tables A and B to the nodes of the cluster according to hash calculation, so its network overhead is "),o("code",[e._v("A + B")]),e._v(" and memory overhead is "),o("code",[e._v("B")]),e._v(".")])]),e._v(" "),o("p",[e._v("The data distribution information of each Doris table is saved in FE. If the join statement hits the data distribution column of the left table, we should use the data distribution information to reduce the network and memory overhead of the join query. This is the source of the idea of bucket shuffle join.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/images/bucket_shuffle_join.png"),alt:"image.png"}}),e._v(" "),o("p",[e._v("The picture above shows how the Bucket Shuffle Join works. The SQL query is A table join B table. The equivalent expression of join hits the data distribution column of A. According to the data distribution information of table A. Bucket Shuffle Join sends the data of table B to the corresponding data storage and calculation node of table A. The cost of Bucket Shuffle Join is as follows:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("network cost： "),o("code",[e._v("B < min(3B, A + B)")])])]),e._v(" "),o("li",[o("p",[e._v("memory cost： "),o("code",[e._v("B <= min(3B, B)")])])])]),e._v(" "),o("p",[e._v("Therefore, compared with Broadcast Join and Shuffle Join, Bucket shuffle join has obvious performance advantages. It reduces the time-consuming of data transmission between nodes and the memory cost of join. Compared with Doris's original join method, it has the following advantages")]),e._v(" "),o("ul",[o("li",[e._v("First of all, Bucket Shuffle Join reduces the network and memory cost which makes some join queries have better performance. Especially when FE can perform partition clipping and bucket clipping of the left table.")]),e._v(" "),o("li",[e._v("Secondly, unlike Colorate Join, it is not intrusive to the data distribution of tables, which is transparent to users. There is no mandatory requirement for the data distribution of the table, which is not easy to lead to the problem of data skew.")]),e._v(" "),o("li",[e._v("Finally, it can provide more optimization space for join reorder.")])]),e._v(" "),o("h2",{attrs:{id:"usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),o("h3",{attrs:{id:"set-session-variable"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-session-variable"}},[e._v("#")]),e._v(" Set session variable")]),e._v(" "),o("p",[e._v("Set session variable "),o("code",[e._v("enable_bucket_shuffle_join")]),e._v(" to "),o("code",[e._v("true")]),e._v(", FE will automatically plan queries that can be converted to Bucket Shuffle Join.")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("set enable_bucket_shuffle_join = true;\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("In FE's distributed query planning, the priority order is Colorate Join -> Bucket Shuffle Join -> Broadcast Join -> Shuffle Join. However, if the user explicitly hints the type of join, for example:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("select * from test join [shuffle] baseall on test.k1 = baseall.k1;\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("the above order of preference will not take effect.")]),e._v(" "),o("p",[e._v("The session variable is set to "),o("code",[e._v("true")]),e._v(" by default in version 0.14, while it needs to be set to "),o("code",[e._v("true")]),e._v(" manually in version 0.13.")]),e._v(" "),o("h3",{attrs:{id:"view-the-type-of-join"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#view-the-type-of-join"}},[e._v("#")]),e._v(" View the type of join")]),e._v(" "),o("p",[e._v("You can use the "),o("code",[e._v("explain")]),e._v(" command to check whether the join is a Bucket Shuffle Join")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("|   2:HASH JOIN                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |\n|   |  join op: INNER JOIN (BUCKET_SHUFFLE)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |\n|   |  hash predicates:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |\n|   |  colocate: false, reason: table not in the same group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |\n|   |  equal join conjunct: `test`.`k1` = `baseall`.`k1`                                         \n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br"),o("span",{staticClass:"line-number"},[e._v("5")]),o("br")])]),o("p",[e._v("The join type indicates that the join method to be used is："),o("code",[e._v("BUCKET_SHUFFLE")]),e._v("。")]),e._v(" "),o("h2",{attrs:{id:"planning-rules-of-bucket-shuffle-join"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#planning-rules-of-bucket-shuffle-join"}},[e._v("#")]),e._v(" Planning rules of Bucket Shuffle Join")]),e._v(" "),o("p",[e._v("In most scenarios, users only need to turn on the seesion variable by default to transparently use the performance improvement brought by this join method. However, if we understand the planning rules of Bucket Shuffle Join, we can use it to write more efficient SQL.")]),e._v(" "),o("ul",[o("li",[e._v("Bucket Shuffle Join only works when the join condition is equivalent. The reason is similar to Colorate Join. They all rely on hash to calculate the determined data distribution.")]),e._v(" "),o("li",[e._v("The bucket column of two tables is included in the equivalent join condition. When the bucket column of the left table is an equivalent join condition, it has a high probability of being planned as a Bucket Shuffle Join.")]),e._v(" "),o("li",[e._v("Because the hash values of different data types have different calculation results. Bucket Shuffle Join requires that the bucket column type of the left table and the equivalent join column type of the right table should be consistent, otherwise the corresponding planning cannot be carried out.")]),e._v(" "),o("li",[e._v("Bucket Shuffle Join only works on Doris native OLAP tables. For ODBC, MySQL, ES External Table, when they are used as left tables, they cannot be planned as Bucket Shuffle Join.")]),e._v(" "),o("li",[e._v("For partitioned tables, because the data distribution rules of each partition may be different, the Bucket Shuffle Join can only guarantee that the left table is a single partition. Therefore, in SQL execution, we need to use the "),o("code",[e._v("where")]),e._v(" condition as far as possible to make the partition clipping policy effective.")]),e._v(" "),o("li",[e._v("If the left table is a colorate table, the data distribution rules of each partition are determined. So the bucket shuffle join can perform better on the colorate table.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);