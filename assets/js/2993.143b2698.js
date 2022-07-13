(window.webpackJsonp=window.webpackJsonp||[]).push([[2993],{3623:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"hll-近似去重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hll-近似去重"}},[s._v("#")]),s._v(" HLL 近似去重")]),s._v(" "),t("p",[s._v("在实际的业务场景中，随着业务数据量越来越大，对数据去重的压力也越来越大，当数据达到一定规模之后，使用精准去重的成本也越来越高，在业务可以接受的情况下，通过近似算法来实现快速去重降低计算压力是一个非常好的方式，本文主要介绍 Doris 提供的 HyperLogLog（简称 HLL）是一种近似去重算法。")]),s._v(" "),t("p",[s._v("HLL 的特点是具有非常优异的空间复杂度 O(mloglogn) , 时间复杂度为 O(n),  并且计算结果的误差可控制在 1%—2% 左右，误差与数据集大小以及所采用的哈希函数有关。")]),s._v(" "),t("h2",{attrs:{id:"什么是-hyperloglog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-hyperloglog"}},[s._v("#")]),s._v(" 什么是 HyperLogLog")]),s._v(" "),t("p",[s._v("它是 LogLog 算法的升级版，作用是能够提供不精确的去重计数。其数学基础为"),t("strong",[s._v("伯努利试验")]),s._v("。")]),s._v(" "),t("p",[s._v("假设硬币拥有正反两面，一次的上抛至落下，最终出现正反面的概率都是50%。一直抛硬币，直到它出现正面为止，我们记录为一次完整的试验。")]),s._v(" "),t("p",[s._v("那么对于多次的伯努利试验，假设这个多次为n次。就意味着出现了n次的正面。假设每次伯努利试验所经历了的抛掷次数为k。第一次伯努利试验，次数设为k1，以此类推，第n次对应的是kn。")]),s._v(" "),t("p",[s._v("其中，对于这n次伯努利试验中，必然会有一个最大的抛掷次数k，例如抛了12次才出现正面，那么称这个为k_max，代表抛了最多的次数。")]),s._v(" "),t("p",[s._v("伯努利试验容易得出有以下结论：")]),s._v(" "),t("ul",[t("li",[s._v("n 次伯努利过程的投掷次数都不大于 k_max。")]),s._v(" "),t("li",[s._v("n 次伯努利过程，至少有一次投掷次数等于 k_max")])]),s._v(" "),t("p",[s._v("最终结合极大似然估算的方法，发现在n和k_max中存在估算关联：n = 2 ^ k_max。"),t("strong",[s._v("当我们只记录了k_max时，即可估算总共有多少条数据，也就是基数。")])]),s._v(" "),t("p",[s._v("假设试验结果如下：")]),s._v(" "),t("ul",[t("li",[s._v("第1次试验: 抛了3次才出现正面，此时 k=3，n=1")]),s._v(" "),t("li",[s._v("第2次试验: 抛了2次才出现正面，此时 k=2，n=2")]),s._v(" "),t("li",[s._v("第3次试验: 抛了6次才出现正面，此时 k=6，n=3")]),s._v(" "),t("li",[s._v("第n次试验：抛了12次才出现正面，此时我们估算， n = 2^12")])]),s._v(" "),t("p",[s._v("取上面例子中前三组试验，那么 k_max = 6，最终 n=3，我们放进估算公式中去，明显： 3 ≠ 2^6 。也即是说，当试验次数很小的时候，这种估算方法的误差是很大的。")]),s._v(" "),t("p",[s._v("这三组试验，我们称为一轮的估算。如果只是进行一轮的话，当 n 足够大的时候，估算的误差率会相对减少，但仍然不够小。")]),s._v(" "),t("h2",{attrs:{id:"doris-hll-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doris-hll-函数"}},[s._v("#")]),s._v(" Doris HLL 函数")]),s._v(" "),t("p",[s._v("HLL 是基于 HyperLogLog 算法的工程实现，用于保存 HyperLogLog 计算过程的中间结果，它只能作为表的 value 列类型、通过聚合来不断的减少数据量，以此")]),s._v(" "),t("p",[s._v("来实现加快查询的目的，基于它得到的是一个估算结果，误差大概在1%左右，hll 列是通过其它列或者导入数据里面的数据生成的，导入的时候通过 hll_hash 函数")]),s._v(" "),t("p",[s._v("来指定数据中哪一列用于生成 hll 列，它常用于替代 count distinct，通过结合 rollup 在业务上用于快速计算uv等")]),s._v(" "),t("p",[t("strong",[s._v("HLL_UNION_AGG(hll)")])]),s._v(" "),t("p",[s._v("此函数为聚合函数，用于计算满足条件的所有数据的基数估算。")]),s._v(" "),t("p",[t("strong",[s._v("HLL_CARDINALITY(hll)")])]),s._v(" "),t("p",[s._v("此函数用于计算单条hll列的基数估算")]),s._v(" "),t("p",[t("strong",[s._v("HLL_HASH(column_name)")])]),s._v(" "),t("p",[s._v("生成HLL列类型，用于insert或导入的时候，导入的使用见相关说明")]),s._v(" "),t("h2",{attrs:{id:"如何使用-doris-hll"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-doris-hll"}},[s._v("#")]),s._v(" 如何使用 Doris HLL")]),s._v(" "),t("ol",[t("li",[s._v("使用 HLL 去重的时候，需要在建表语句中将目标列类型设置成HLL，聚合函数设置成HLL_UNION")]),s._v(" "),t("li",[s._v("HLL类型的列不能作为 Key 列使用")]),s._v(" "),t("li",[s._v("用户不需要指定长度及默认值，长度根据数据聚合程度系统内控制")])]),s._v(" "),t("h3",{attrs:{id:"创建一张含有-hll-列的表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一张含有-hll-列的表"}},[s._v("#")]),s._v(" 创建一张含有 hll 列的表")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" test_hll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\tdt "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tid "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tname "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tprovince "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tos "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tpv hll hll_union\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAggregate "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("province"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distributed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" buckets "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nPROPERTIES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replication_num"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"in_memory"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"导入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入数据"}},[s._v("#")]),s._v(" 导入数据")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Stream load 导入")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('curl --location-trusted -u root: -H "label:label_test_hll_load" \\\n    -H "column_separator:," \\\n    -H "columns:dt,id,name,province,os, pv=hll_hash(id)" -T test_hll.csv http://fe_IP:8030/api/demo/test_hll/_stream_load\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("示例数据如下（test_hll.csv）：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("2022-05-05,10001,测试01,北京,windows\n2022-05-05,10002,测试01,北京,linux\n2022-05-05,10003,测试01,北京,macos\n2022-05-05,10004,测试01,河北,windows\n2022-05-06,10001,测试01,上海,windows\n2022-05-06,10002,测试01,上海,linux\n2022-05-06,10003,测试01,江苏,macos\n2022-05-06,10004,测试01,陕西,windows\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("导入结果如下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# curl --location-trusted -u root: -H "label:label_test_hll_load"     -H "column_separator:,"     -H "columns:dt,id,name,province,os, pv=hll_hash(id)" -T test_hll.csv http://127.0.0.1:8030/api/demo/test_hll/_stream_load\n\n{\n    "TxnId": 693,\n    "Label": "label_test_hll_load",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 8,\n    "NumberLoadedRows": 8,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 320,\n    "LoadTimeMs": 23,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 1,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 9,\n    "CommitAndPublishTimeMs": 11\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Broker Load")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('LOAD LABEL demo.test_hlllabel\n (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/doris_test_hll/data/input/file")\n    INTO TABLE `test_hll`\n    COLUMNS TERMINATED BY ","\n    (dt,id,name,province,os)\n    SET (\n      pv = HLL_HASH(id)\n    )\n );\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"查询数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询数据"}},[s._v("#")]),s._v(" 查询数据")]),s._v(" "),t("p",[s._v("HLL 列不允许直接查询原始值，只能通过 HLL 的聚合函数进行查询。")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("求总的PV")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" HLL_UNION_AGG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_hll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" hll_union_agg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("pv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("等价于：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" pv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" test_hll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("pv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("求每一天的PV")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" HLL_UNION_AGG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_hll "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" dt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" hll_union_agg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("pv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);