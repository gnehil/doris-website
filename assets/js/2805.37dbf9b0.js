(window.webpackJsonp=window.webpackJsonp||[]).push([[2805],{3433:function(s,a,n){"use strict";n.r(a);var t=n(15),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"colocation-join"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#colocation-join"}},[s._v("#")]),s._v(" Colocation Join")]),s._v(" "),n("p",[s._v("Colocation Join 是在 Doris 0.9 版本中引入的新功能。旨在为某些 Join 查询提供本地性优化，来减少数据在节点间的传输耗时，加速查询。")]),s._v(" "),n("p",[s._v("最初的设计、实现和效果可以参阅 "),n("a",{attrs:{href:"https://github.com/apache/incubator-doris/issues/245",target:"_blank",rel:"noopener noreferrer"}},[s._v("ISSUE 245"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("p",[s._v("Colocation Join 功能经过一次改版，设计和使用方式和最初设计稍有不同。本文档主要介绍 Colocation Join 的原理、实现、使用方式和注意事项。")]),s._v(" "),n("h2",{attrs:{id:"名词解释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[s._v("#")]),s._v(" 名词解释")]),s._v(" "),n("ul",[n("li",[s._v("FE：Frontend，Doris 的前端节点。负责元数据管理和请求接入。")]),s._v(" "),n("li",[s._v("BE：Backend，Doris 的后端节点。负责查询执行和数据存储。")]),s._v(" "),n("li",[s._v("Colocation Group（CG）：一个 CG 中会包含一张及以上的 Table。在同一个 Group 内的 Table 有着相同的 Colocation Group Schema，并且有着相同的数据分片分布。")]),s._v(" "),n("li",[s._v("Colocation Group Schema（CGS）：用于描述一个 CG 中的 Table，和 Colocation 相关的通用 Schema 信息。包括分桶列类型，分桶数以及副本数等。")])]),s._v(" "),n("h2",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),n("p",[s._v("Colocation Join 功能，是将一组拥有相同 CGS 的 Table 组成一个 CG。并保证这些 Table 对应的数据分片会落在同一个 BE 节点上。使得当 CG 内的表进行分桶列上的 Join 操作时，可以通过直接进行本地数据 Join，减少数据在节点间的传输耗时。")]),s._v(" "),n("p",[s._v("一个表的数据，最终会根据分桶列值 Hash、对桶数取模的后落在某一个分桶内。假设一个 Table 的分桶数为 8，则共有 "),n("code",[s._v("[0, 1, 2, 3, 4, 5, 6, 7]")]),s._v(" 8 个分桶（Bucket），我们称这样一个序列为一个 "),n("code",[s._v("BucketsSequence")]),s._v("。每个 Bucket 内会有一个或多个数据分片（Tablet）。当表为单分区表时，一个 Bucket 内仅有一个 Tablet。如果是多分区表，则会有多个。")]),s._v(" "),n("p",[s._v("为了使得 Table 能够有相同的数据分布，同一 CG 内的 Table 必须保证以下属性相同：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("分桶列和分桶数")]),s._v(" "),n("p",[s._v("分桶列，即在建表语句中 "),n("code",[s._v("DISTRIBUTED BY HASH(col1, col2, ...)")]),s._v(" 中指定的列。分桶列决定了一张表的数据通过哪些列的值进行 Hash 划分到不同的 Tablet 中。同一 CG 内的 Table 必须保证分桶列的类型和数量完全一致，并且桶数一致，才能保证多张表的数据分片能够一一对应的进行分布控制。")])]),s._v(" "),n("li",[n("p",[s._v("副本数")]),s._v(" "),n("p",[s._v("同一个 CG 内所有表的所有分区（Partition）的副本数必须一致。如果不一致，可能出现某一个 Tablet 的某一个副本，在同一个 BE 上没有其他的表分片的副本对应。")])])]),s._v(" "),n("p",[s._v("同一个 CG 内的表，分区的个数、范围以及分区列的类型不要求一致。")]),s._v(" "),n("p",[s._v("在固定了分桶列和分桶数后，同一个 CG 内的表会拥有相同的 BucketsSequence。而副本数决定了每个分桶内的 Tablet 的多个副本，存放在哪些 BE 上。假设 BucketsSequence 为 "),n("code",[s._v("[0, 1, 2, 3, 4, 5, 6, 7]")]),s._v("，BE 节点有 "),n("code",[s._v("[A, B, C, D]")]),s._v(" 4个。则一个可能的数据分布如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| 0 | | 1 | | 2 | | 3 | | 4 | | 5 | | 6 | | 7 |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| A | | B | | C | | D | | A | | B | | C | | D |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| B | | C | | D | | A | | B | | C | | D | | A |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| C | | D | | A | | B | | C | | D | | A | | B |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("CG 内所有表的数据都会按照上面的规则进行统一分布，这样就保证了，分桶列值相同的数据都在同一个 BE 节点上，可以进行本地数据 Join。")]),s._v(" "),n("h2",{attrs:{id:"使用方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),n("h3",{attrs:{id:"建表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建表"}},[s._v("#")]),s._v(" 建表")]),s._v(" "),n("p",[s._v("建表时，可以在 "),n("code",[s._v("PROPERTIES")]),s._v(" 中指定属性 "),n("code",[s._v('"colocate_with" = "group_name"')]),s._v("，表示这个表是一个 Colocation Join 表，并且归属于一个指定的 Colocation Group。")]),s._v(" "),n("p",[s._v("示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('CREATE TABLE tbl (k1 int, v1 int sum)\nDISTRIBUTED BY HASH(k1)\nBUCKETS 8\nPROPERTIES(\n    "colocate_with" = "group1"\n);\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("如果指定的 Group 不存在，则 Doris 会自动创建一个只包含当前这张表的 Group。如果 Group 已存在，则 Doris 会检查当前表是否满足 Colocation Group Schema。如果满足，则会创建该表，并将该表加入 Group。同时，表会根据已存在的 Group 中的数据分布规则创建分片和副本。\nGroup 归属于一个 Database，Group 的名字在一个 Database 内唯一。在内部存储是 Group 的全名为 "),n("code",[s._v("dbId_groupName")]),s._v("，但用户只感知 groupName。")]),s._v(" "),n("h3",{attrs:{id:"删表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删表"}},[s._v("#")]),s._v(" 删表")]),s._v(" "),n("p",[s._v("当 Group 中最后一张表彻底删除后（彻底删除是指从回收站中删除。通常，一张表通过 "),n("code",[s._v("DROP TABLE")]),s._v(" 命令删除后，会在回收站默认停留一天的时间后，再删除），该 Group 也会被自动删除。")]),s._v(" "),n("h3",{attrs:{id:"查看-group"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看-group"}},[s._v("#")]),s._v(" 查看 Group")]),s._v(" "),n("p",[s._v("以下命令可以查看集群内已存在的 Group 信息。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SHOW PROC '/colocation_group';\n\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| GroupId     | GroupName    | TableIds     | BucketsNum | ReplicationNum | DistCols | IsStable |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| 10005.10008 | 10005_group1 | 10007, 10040 | 10         | 3              | int(11)  | true     |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("GroupId：          一个 Group 的全集群唯一标识，前半部分为 db id，后半部分为 group id。")]),s._v(" "),n("li",[s._v("GroupName：        Group 的全名。")]),s._v(" "),n("li",[s._v("TabletIds：        该 Group 包含的 Table 的 id 列表。")]),s._v(" "),n("li",[s._v("BucketsNum：       分桶数。")]),s._v(" "),n("li",[s._v("ReplicationNum：   副本数。")]),s._v(" "),n("li",[s._v("DistCols：         Distribution columns，即分桶列类型。")]),s._v(" "),n("li",[s._v("IsStable：         该 Group 是否稳定（稳定的定义，见 "),n("code",[s._v("Colocation 副本均衡和修复")]),s._v(" 一节）。")])]),s._v(" "),n("p",[s._v("通过以下命令可以进一步查看一个 Group 的数据分布情况：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SHOW PROC '/colocation_group/10005.10008';\n\n+-------------+---------------------+\n| BucketIndex | BackendIds          |\n+-------------+---------------------+\n| 0           | 10004, 10002, 10001 |\n| 1           | 10003, 10002, 10004 |\n| 2           | 10002, 10004, 10001 |\n| 3           | 10003, 10002, 10004 |\n| 4           | 10002, 10004, 10003 |\n| 5           | 10003, 10002, 10001 |\n| 6           | 10003, 10004, 10001 |\n| 7           | 10003, 10004, 10002 |\n+-------------+---------------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("ul",[n("li",[s._v("BucketIndex：  分桶序列的下标。")]),s._v(" "),n("li",[s._v("BackendIds：   分桶中数据分片所在的 BE 节点 id 列表。")])]),s._v(" "),n("blockquote",[n("p",[s._v("以上命令需要 ADMIN 权限。暂不支持普通用户查看。")])]),s._v(" "),n("h3",{attrs:{id:"修改表-colocate-group-属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改表-colocate-group-属性"}},[s._v("#")]),s._v(" 修改表 Colocate Group 属性")]),s._v(" "),n("p",[s._v("可以对一个已经创建的表，修改其 Colocation Group 属性。示例：")]),s._v(" "),n("p",[n("code",[s._v('ALTER TABLE tbl SET ("colocate_with" = "group2");')])]),s._v(" "),n("ul",[n("li",[s._v("如果该表之前没有指定过 Group，则该命令检查 Schema，并将该表加入到该 Group（Group 不存在则会创建）。")]),s._v(" "),n("li",[s._v("如果该表之前有指定其他 Group，则该命令会先将该表从原有 Group 中移除，并加入新 Group（Group 不存在则会创建）。")])]),s._v(" "),n("p",[s._v("也可以通过以下命令，删除一个表的 Colocation 属性：")]),s._v(" "),n("p",[n("code",[s._v('ALTER TABLE tbl SET ("colocate_with" = "");')])]),s._v(" "),n("h3",{attrs:{id:"其他相关操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他相关操作"}},[s._v("#")]),s._v(" 其他相关操作")]),s._v(" "),n("p",[s._v("当对一个具有 Colocation 属性的表进行增加分区（ADD PARTITION）、修改副本数时，Doris 会检查修改是否会违反 Colocation Group Schema，如果违反则会拒绝。")]),s._v(" "),n("h2",{attrs:{id:"colocation-副本均衡和修复"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#colocation-副本均衡和修复"}},[s._v("#")]),s._v(" Colocation 副本均衡和修复")]),s._v(" "),n("p",[s._v("Colocation 表的副本分布需要遵循 Group 中指定的分布，所以在副本修复和均衡方面和普通分片有所区别。")]),s._v(" "),n("p",[s._v("Group 自身有一个 Stable 属性，当 Stable 为 true 时，表示当前 Group 内的表的所有分片没有正在进行变动，Colocation 特性可以正常使用。当 Stable 为 false 时（Unstable），表示当前 Group 内有部分表的分片正在做修复或迁移，此时，相关表的 Colocation Join 将退化为普通 Join。")]),s._v(" "),n("h3",{attrs:{id:"副本修复"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#副本修复"}},[s._v("#")]),s._v(" 副本修复")]),s._v(" "),n("p",[s._v("副本只能存储在指定的 BE 节点上。所以当某个 BE 不可用时（宕机、Decommission 等），需要寻找一个新的 BE 进行替换。Doris 会优先寻找负载最低的 BE 进行替换。替换后，该 Bucket 内的所有在旧 BE 上的数据分片都要做修复。迁移过程中，Group 被标记为 Unstable。")]),s._v(" "),n("h3",{attrs:{id:"副本均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#副本均衡"}},[s._v("#")]),s._v(" 副本均衡")]),s._v(" "),n("p",[s._v("Doris 会尽力将 Colocation 表的分片均匀分布在所有 BE 节点上。对于普通表的副本均衡，是以单副本为粒度的，即单独为每一个副本寻找负载较低的 BE 节点即可。而 Colocation 表的均衡是 Bucket 级别的，即一个 Bucket 内的所有副本都会一起迁移。我们采用一个简单的均衡算法，即在不考虑副本实际大小，而只根据副本数量，将 BucketsSequence 均匀的分布在所有 BE 上。具体算法可以参阅 "),n("code",[s._v("ColocateTableBalancer.java")]),s._v(" 中的代码注释。")]),s._v(" "),n("blockquote",[n("p",[s._v("注1：当前的 Colocation 副本均衡和修复算法，对于异构部署的 Doris 集群效果可能不佳。所谓异构部署，即 BE 节点的磁盘容量、数量、磁盘类型（SSD 和 HDD）不一致。在异构部署情况下，可能出现小容量的 BE 节点和大容量的 BE 节点存储了相同的副本数量。")]),s._v(" "),n("p",[s._v("注2：当一个 Group 处于 Unstable 状态时，其中的表的 Join 将退化为普通 Join。此时可能会极大降低集群的查询性能。如果不希望系统自动均衡，可以设置 FE 的配置项 "),n("code",[s._v("disable_colocate_balance")]),s._v(" 来禁止自动均衡。然后在合适的时间打开即可。（具体参阅 "),n("code",[s._v("高级操作")]),s._v(" 一节）")])]),s._v(" "),n("h2",{attrs:{id:"查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[s._v("#")]),s._v(" 查询")]),s._v(" "),n("p",[s._v("对 Colocation 表的查询方式和普通表一样，用户无需感知 Colocation 属性。如果 Colocation 表所在的 Group 处于 Unstable 状态，将自动退化为普通 Join。")]),s._v(" "),n("p",[s._v("举例说明：")]),s._v(" "),n("p",[s._v("表1：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('CREATE TABLE `tbl1` (\n    `k1` date NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` int(11) SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nPARTITION BY RANGE(`k1`)\n(\n    PARTITION p1 VALUES LESS THAN (\'2019-05-31\'),\n    PARTITION p2 VALUES LESS THAN (\'2019-06-30\')\n)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("表2：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('CREATE TABLE `tbl2` (\n    `k1` datetime NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` double SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("查看查询计划：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("DESC SELECT * FROM tbl1 INNER JOIN tbl2 ON (tbl1.k2 = tbl2.k2);\n\n+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN                           |\n|   |  hash predicates:                              |\n|   |  colocate: true                                |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----1:OlapScanNode                              |\n|   |       TABLE: tbl2                              |\n|   |       PREAGGREGATION: OFF. Reason: null        |\n|   |       partitions=0/1                           |\n|   |       rollup: null                             |\n|   |       buckets=0/0                              |\n|   |       cardinality=-1                           |\n|   |       avgRowSize=0.0                           |\n|   |       numNodes=0                               |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n+----------------------------------------------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])]),n("p",[s._v("如果 Colocation Join 生效，则 Hash Join 节点会显示 "),n("code",[s._v("colocate: true")]),s._v("。")]),s._v(" "),n("p",[s._v("如果没有生效，则查询计划如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN (BROADCAST)               |\n|   |  hash predicates:                              |\n|   |  colocate: false, reason: group is not stable  |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----3:EXCHANGE                                  |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n|                                                    |\n| PLAN FRAGMENT 1                                    |\n|  OUTPUT EXPRS:                                     |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   STREAM DATA SINK                                 |\n|     EXCHANGE ID: 03                                |\n|     UNPARTITIONED                                  |\n|                                                    |\n|   1:OlapScanNode                                   |\n|      TABLE: tbl2                                   |\n|      PREAGGREGATION: OFF. Reason: null             |\n|      partitions=0/1                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 1                                  |\n+----------------------------------------------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br")])]),n("p",[s._v("HASH JOIN 节点会显示对应原因："),n("code",[s._v("colocate: false, reason: group is not stable")]),s._v("。同时会有一个 EXCHANGE 节点生成。")]),s._v(" "),n("h2",{attrs:{id:"高级操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高级操作"}},[s._v("#")]),s._v(" 高级操作")]),s._v(" "),n("h3",{attrs:{id:"fe-配置项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置项"}},[s._v("#")]),s._v(" FE 配置项")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("disable_colocate_relocate")]),s._v(" "),n("p",[s._v("是否关闭 Doris 的自动 Colocation 副本修复。默认为 false，即不关闭。该参数只影响 Colocation 表的副本修复，不影响普通表。")])]),s._v(" "),n("li",[n("p",[s._v("disable_colocate_balance")]),s._v(" "),n("p",[s._v("是否关闭 Doris 的自动 Colocation 副本均衡。默认为 false，即不关闭。该参数只影响 Colocation 表的副本均衡，不影响普通表。")])])]),s._v(" "),n("p",[s._v("以上参数可以动态修改，设置方式请参阅 "),n("code",[s._v("HELP ADMIN SHOW CONFIG;")]),s._v(" 和 "),n("code",[s._v("HELP ADMIN SET CONFIG;")]),s._v("。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("disable_colocate_join")]),s._v(" "),n("p",[s._v("是否关闭 Colocation Join 功能。在 0.10 及之前的版本，默认为 true，即关闭。在之后的某个版本中将默认为 false，即开启。")])]),s._v(" "),n("li",[n("p",[s._v("use_new_tablet_scheduler")]),s._v(" "),n("p",[s._v("在 0.10 及之前的版本中，新的副本调度逻辑与 Colocation Join 功能不兼容，所以在 0.10 及之前版本，如果 "),n("code",[s._v("disable_colocate_join = false")]),s._v("，则需设置 "),n("code",[s._v("use_new_tablet_scheduler = false")]),s._v("，即关闭新的副本调度器。之后的版本中，"),n("code",[s._v("use_new_tablet_scheduler")]),s._v(" 将衡为 true。")])])]),s._v(" "),n("h3",{attrs:{id:"http-restful-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-restful-api"}},[s._v("#")]),s._v(" HTTP Restful API")]),s._v(" "),n("p",[s._v("Doris 提供了几个和 Colocation Join 有关的 HTTP Restful API，用于查看和修改 Colocation Group。")]),s._v(" "),n("p",[s._v("该 API 实现在 FE 端，使用 "),n("code",[s._v("fe_host:fe_http_port")]),s._v(" 进行访问。需要 ADMIN 权限。")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("查看集群的全部 Colocation 信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('GET /api/colocate\n\n返回以 Json 格式表示内部 Colocation 信息。\n\n{\n    "msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"infos": [\n\t\t\t["10003.12002", "10003_group1", "10037, 10043", "1", "1", "int(11)", "true"]\n\t\t],\n\t\t"unstableGroupIds": [],\n\t\t"allGroupIds": [{\n\t\t\t"dbId": 10003,\n\t\t\t"grpId": 12002\n\t\t}]\n\t},\n\t"count": 0\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("将 Group 标记为 Stable 或 Unstable")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("标记为 Stable")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("POST /api/colocate/group_stable?db_id=10005&group_id=10008\n\n返回：200\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("标记为 Unstable")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("DELETE /api/colocate/group_stable?db_id=10005&group_id=10008\n\n返回：200\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])])]),s._v(" "),n("li",[n("p",[s._v("设置 Group 的数据分布")]),s._v(" "),n("p",[s._v("该接口可以强制设置某一 Group 的数分布。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("POST /api/colocate/bucketseq?db_id=10005&group_id=10008\n\nBody:\n[[10004,10002],[10003,10002],[10002,10004],[10003,10002],[10002,10004],[10003,10002],[10003,10004],[10003,10004],[10003,10004],[10002,10004]]\n\n返回 200\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("其中 Body 是以嵌套数组表示的 BucketsSequence 以及每个 Bucket 中分片分布所在 BE 的 id。")]),s._v(" "),n("p",[s._v("注意，使用该命令，可能需要将 FE 的配置 "),n("code",[s._v("disable_colocate_relocate")]),s._v(" 和 "),n("code",[s._v("disable_colocate_balance")]),s._v(" 设为 true。即关闭系统自动的 Colocation 副本修复和均衡。否则可能在修改后，会被系统自动重置。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);