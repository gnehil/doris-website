(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{1266:function(a,n,s){"use strict";s.r(n);var e=s(15),i=Object(e.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"apache-doris-incubating-1-0-0-release"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache-doris-incubating-1-0-0-release"}},[a._v("#")]),a._v(" Apache Doris(Incubating) 1.0.0 Release")]),a._v(" "),s("p",[a._v("亲爱的社区小伙伴们，历时数月，我们很高兴地宣布，Apache Doris (incubating) 于 2022 年 4 月 18 日迎来了 1.0 Release 版本的正式发布！"),s("strong",[a._v("这是 Apache Doris 在进入 Apache 基金会孵化以来的第一个 1 位版本，也是迄今为止对 Apache Doris 核心代码重构幅度最大的一个版本")]),a._v("**！"),s("strong",[a._v("有 "),s("strong",[a._v("114 位 Contributor")]),a._v(" 为 Apache Doris 提交了")]),a._v("超过 660 项优化和修复**，感谢每一个让 Apache Doris 变得更好的你！")]),a._v(" "),s("p",[a._v("在 1.0 版本中，我们引入了向量化执行引擎、Hive 外部表、Lateral View 语法及 Table Function 表函数、Z-Order 数据索引、Apache SeaTunnel 插件等重要功能，增加了对 Flink CDC 同步更新和删除数据的支持，优化了诸多数据导入和查询过程中的问题，对 Apache Doris 的查询性能、易用性、稳定性等多方特效进行了全面加强，欢迎大家下载使用！点击文末“"),s("strong",[a._v("阅读原文")]),a._v("”即可直接前往下载地址。")]),a._v(" "),s("p",[a._v("每一个不曾发版的日子，背后都有无数贡献者枕戈待旦，不敢停歇半分。在此我们尤其要感谢来自"),s("strong",[a._v("向量化执行引擎、查询优化器、可视化运维平台 等 SIG （专项兴趣小组）的小伙伴")]),a._v("。自 2021 年 8 月 Apache Doris 社区 SIG 小组成立以来，"),s("strong",[a._v("来自百度、美团、小米、京东、蜀海、字节跳动、腾讯、网易、阿里巴巴、PingCAP、Nebula Graph 等十余家公司的数十名贡献者")]),a._v("作为首批成员加入到 SIG 中，第一次以专项小组的开源协作形式完成了向量化执行引擎、查询优化器、 Doris Manager 可视化监控运维平台等如此重大功能的开发，"),s("strong",[a._v("历时半年以上、开展技术调研和分享数十次、召开远程会议近百次、累计提交 Commits 多达数百个、涉及代码行数高达十余万行")]),a._v("，正是因为有他们的贡献，才有 1.0 版本的问世，让我们再次对他们的辛勤付出表示最真诚的感谢！")]),a._v(" "),s("p",[a._v("与此同时，Apache Doris 的贡献者数量已超过 300 人，每月活跃的贡献者数量超过了 60 人，近几周平均每周提交的 Commits 数量也超过 80，社区聚集的开发者规模及活跃度已经有了极大的提升。我们十分期待有更多的小伙伴参与社区贡献中来，与我们一道把 Apache Doris 打造成全球顶级的分析型数据库，也期待所有小伙伴可以与我们一起收获宝贵的成长。如果你想参与社区，欢迎通过开发者邮箱 dev@doris.apache.org 与我们取得联系。")]),a._v(" "),s("p",[a._v("我们欢迎大家在使用过程中，有任何问题通过 GitHub Discussion 或者 Dev 邮件组与我们取得联系，也期待大家参与社区讨论和建设中 。")]),a._v(" "),s("h2",{attrs:{id:"重要更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要更新"}},[a._v("#")]),a._v(" 重要更新")]),a._v(" "),s("h3",{attrs:{id:"向量化执行引擎-experimental"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向量化执行引擎-experimental"}},[a._v("#")]),a._v(" 向量化执行引擎 [Experimental]")]),a._v(" "),s("p",[a._v("过去 Apache Doris 的 SQL 执行引擎是基于行式内存格式以及基于传统的火山模型进行设计的，在进行 SQL 算子与函数运算时存在非必要的开销，导致 Apache Doris 执行引擎的效率受限，并不适应现代 CPU 的体系结构。向量化执行引擎的目标是替换 Apache Doris 当前的行式 SQL 执行引擎，充分释放现代 CPU 的计算能力，突破在 SQL 执行引擎上的性能限制，发挥出极致的性能表现。")]),a._v(" "),s("p",[a._v("基于现代 CPU 的特点与火山模型的执行特点，向量化执行引擎重新设计了在列式存储系统的 SQL 执行引擎：")]),a._v(" "),s("ul",[s("li",[a._v("重新组织内存的数据结构，用 Column替换 Tuple，提高了计算时 Cache 亲和度，分支预测与预取内存的友好度")]),a._v(" "),s("li",[a._v("分批进行类型判断，在本次批次中都使用类型判断时确定的类型，将每一行类型判断的虚函数开销分摊到批量级别。")]),a._v(" "),s("li",[a._v("通过批级别的类型判断，消除了虚函数的调用，让编译器有函数内联以及 SIMD 优化的机会")])]),a._v(" "),s("p",[a._v("从而大大提高了 CPU 在 SQL 执行时的效率，提升了 SQL 查询的性能。")]),a._v(" "),s("p",[a._v("在 Apache Doris 1.0 版本中，通过 set batch_size = 4096 和 set enable_vectorized_engine = true 开启向量化执行引擎，多数情况下可显著提升查询性能。在 SSB 和 OnTime 标准测试数据集下，多表关联和宽列查询两大场景的整体性能分别有 3 倍和 2.6 倍的提升。")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/blogs/1.0/1.0.0-1.png"),alt:""}}),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/blogs/1.0/1.0.0-2.png"),alt:""}}),a._v(" "),s("h3",{attrs:{id:"lateral-view-语法-experimental"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lateral-view-语法-experimental"}},[a._v("#")]),a._v(" Lateral View 语法 [Experimental]")]),a._v(" "),s("p",[a._v("通过 Lateral View 语法，我们可以使用 explod_bitmap 、explode_split、explode_jaon_array  等 Table Function 表函数，将 bitmap、String 或 Json Array 由一列展开成多行，以便后续可以对展开的数据进行进一步处理（如 Filter、Join 等）。")]),a._v(" "),s("h3",{attrs:{id:"hive-外表-experimental"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hive-外表-experimental"}},[a._v("#")]),a._v(" Hive 外表 [Experimental]")]),a._v(" "),s("p",[a._v("Hive External Table 为用户提供了通过 Doris 直接访问 Hive 表的能力，外部表省去了 繁琐的数据导入工作，可以借助 Doris 本身 OLAP 的能力来解决 Hive 表的数据分析问题。当前版本支持将 Hive 数据源接入 Doris，并支持通过 Doris 与 Hive 数据源中的数据进行联邦查询，进行更加复杂的分析操作。")]),a._v(" "),s("h3",{attrs:{id:"支持-z-order-数据排序格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持-z-order-数据排序格式"}},[a._v("#")]),a._v(" 支持 Z-Order 数据排序格式")]),a._v(" "),s("p",[a._v("Apache Doris 数据是按照前缀列排序存储的，因此在包含前缀查询条件时，可以在排序数据上进行快速的数据查找，但如果查询条件不是前缀列，则无法利用数据排序的特征进行快速数据查找。通过 Z-Order Indexing 可以解决上述问题，在 1.0 版本中我们增加了 Z-Order 数据排序格式，在看板类多列查询的场景中可以起到很好过滤效果，加速对非前缀列条件的过滤性能。")]),a._v(" "),s("h3",{attrs:{id:"支持-apache-seatunnel-incubating-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持-apache-seatunnel-incubating-插件"}},[a._v("#")]),a._v(" 支持 Apache SeaTunnel（Incubating）插件")]),a._v(" "),s("p",[a._v("Apache SeaTunnel 是一个高性能的分布式数据集成框架，架构于 Apache Spark 和 Apache Flink 之上。在 Apache Doris 1.0 版本中，我们增加了 SaeTunnel 插件，用户可以借助 Apache SeaTunnel 进行多数据源之间的同步和 ETL。")]),a._v(" "),s("h3",{attrs:{id:"新增函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新增函数"}},[a._v("#")]),a._v(" 新增函数")]),a._v(" "),s("p",[a._v("支持更多 bitmap 函数，具体可查看函数手册：")]),a._v(" "),s("ul",[s("li",[a._v("bitmap_max")]),a._v(" "),s("li",[a._v("bitmap_and_not")]),a._v(" "),s("li",[a._v("bitmap_and_not_count")]),a._v(" "),s("li",[a._v("bitmap_has_all")]),a._v(" "),s("li",[a._v("bitmap_and_count")]),a._v(" "),s("li",[a._v("bitmap_or_count")]),a._v(" "),s("li",[a._v("bitmap_xor_count")]),a._v(" "),s("li",[a._v("bitmap_subset_limit")]),a._v(" "),s("li",[a._v("sub_bitmap")])]),a._v(" "),s("p",[a._v("支持国密算法 SM3/SM4；")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("注意")]),a._v("：以上标记 [Experimental] 的功能为实验性功能，我们将会在后续版本中对以上功能进行持续优化和迭代，并后续版本中进一步完善。在使用过程中有任何问题或意见，欢迎随时与我们联系")])]),a._v(" "),s("h3",{attrs:{id:"重要优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要优化"}},[a._v("#")]),a._v(" 重要优化")]),a._v(" "),s("h3",{attrs:{id:"功能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能优化"}},[a._v("#")]),a._v(" 功能优化")]),a._v(" "),s("ul",[s("li",[a._v("降低大批量导入时，生成的 Segment 文件数量，以降低 Compaction 压力。")]),a._v(" "),s("li",[a._v("通过 BRPC 的 attachment 功能传输数据，以查询过程中的降低序列化和反序列化开销。")]),a._v(" "),s("li",[a._v("支持直接返回 HLL/BITMAP 类型的二进制数据，用于业务在外侧解析。")]),a._v(" "),s("li",[a._v("优化并降低 BRPC 出现 OVERCROWDED 和 NOT_CONNECTED 错误的概率，增强系统稳定性。")]),a._v(" "),s("li",[a._v("增强导入的容错性。")]),a._v(" "),s("li",[a._v("支持通过 Flink CDC 同步更新和删除数据。")]),a._v(" "),s("li",[a._v("支持自适应的 Runtime Filter。")]),a._v(" "),s("li",[a._v("显著降低 insert into 操作的内存占用")])]),a._v(" "),s("h3",{attrs:{id:"易用性改进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#易用性改进"}},[a._v("#")]),a._v(" 易用性改进")]),a._v(" "),s("ul",[s("li",[a._v("Routine Load 支持显示当前 offset 延迟数量等状态。")]),a._v(" "),s("li",[a._v("FE audit log 中增加查询峰值内存使用量的统计。")]),a._v(" "),s("li",[a._v("Compaction URL 结果中增加缺失版本的信息，方便排查问题。")]),a._v(" "),s("li",[a._v("支持将 BE 标记为不可查询或不可导入，以快速屏蔽问题节点。")])]),a._v(" "),s("h3",{attrs:{id:"重要-bug-修复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要-bug-修复"}},[a._v("#")]),a._v(" 重要 Bug 修复")]),a._v(" "),s("ul",[s("li",[a._v("修复若干查询错误问题。")]),a._v(" "),s("li",[a._v("修复 Broker Load 若干调度逻辑问题。")]),a._v(" "),s("li",[a._v("修复 STREAM 关键词导致元数据无法加载的问题。")]),a._v(" "),s("li",[a._v("修复 Decommission 无法正确执行的问题。")]),a._v(" "),s("li",[a._v("修复部分情况下操作 Schema Change 操作可能出现 -102 错误的问题。")]),a._v(" "),s("li",[a._v("修复部分情况下使用 String 类型可能导致 BE 宕机的问题。")])]),a._v(" "),s("h3",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),s("ul",[s("li",[a._v("增加 Minidump 功能；")])]),a._v(" "),s("h2",{attrs:{id:"更新日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新日志"}},[a._v("#")]),a._v(" 更新日志")]),a._v(" "),s("p",[a._v("详细 Release Note 请查看链接：")]),a._v(" "),s("p",[a._v("https://github.com/apache/incubator-doris/issues/8549")]),a._v(" "),s("h2",{attrs:{id:"致谢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#致谢"}},[a._v("#")]),a._v(" 致谢")]),a._v(" "),s("p",[a._v("Apache Doris(incubating) 1.0 Release 版本的发布离不开所有社区用户的支持，在此向所有参与版本设计、开发、测试、讨论的社区贡献者们表示感谢，他们分别是：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("@924060929\n@adonis0147\n@Aiden-Dong\n@aihai\n@airborne12\n@Alibaba-HZY\n@amosbird\n@arthuryangcs\n@awakeljw\n@bingzxy\n@BiteTheDDDDt\n@blackstar-baba\n@caiconghui\n@CalvinKirs\n@cambyzju\n@caoliang-web\n@ccoffline\n@chaplinthink\n@chovy-3012\n@ChPi\n@DarvenDuan\n@dataalive\n@dataroaring\n@dh-cloud\n@dohongdayi\n@dongweizhao\n@drgnchan\n@e0c9\n@EmmyMiao87\n@englefly\n@eyesmoons\n@freemandealer\n@Gabriel39\n@gaodayue\n@GoGoWen\n@Gongruixiao\n@gwdgithubnom\n@HappenLee\n@Henry2SS\n@hf200012\n@htyoung\n@jacktengg\n@jackwener\n@JNSimba\n@Keysluomo\n@kezhenxu94\n@killxdcj\n@lihuigang\n@littleeleventhwolf\n@liutang123\n@liuzhuang2017\n@lonre\n@lovingfeel\n@luozenglin\n@luzhijing\n@MeiontheTop\n@mh-boy\n@morningman\n@mrhhsg\n@Myasuka\n@nimuyuhan\n@obobj\n@pengxiangyu\n@qidaye\n@qzsee\n@renzhimin7\n@Royce33\n@SleepyBear96\n@smallhibiscus\n@sodamnsure\n@spaces-X\n@sparklezzz\n@stalary\n@steadyBoy\n@tarepanda1024\n@THUMarkLau\n@tianhui5\n@tinkerrrr\n@ucasfl\n@Userwhite\n@vinson0526\n@wangbo\n@wangshuo128\n@wangyf0555\n@weajun\n@weizuo93\n@whutpencil\n@WindyGao\n@wunan1210\n@xiaokang\n@xiaokangguo\n@xiedeyantu\n@xinghuayu007\n@xingtanzjr\n@xinyiZzz\n@xtr1993\n@xu20160924\n@xuliuzhe\n@xuzifu666\n@xy720\n@yangzhg\n@yiguolei\n@yinzhijian\n@yjant\n@zbtzbtzbt\n@zenoyang\n@zh0122\n@zhangstar333\n@zhannngchen\n@zhengshengjun\n@zhengshiJ\n@ZhikaiZuo\n@ztgoto\n@zuochunwei\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br"),s("span",{staticClass:"line-number"},[a._v("51")]),s("br"),s("span",{staticClass:"line-number"},[a._v("52")]),s("br"),s("span",{staticClass:"line-number"},[a._v("53")]),s("br"),s("span",{staticClass:"line-number"},[a._v("54")]),s("br"),s("span",{staticClass:"line-number"},[a._v("55")]),s("br"),s("span",{staticClass:"line-number"},[a._v("56")]),s("br"),s("span",{staticClass:"line-number"},[a._v("57")]),s("br"),s("span",{staticClass:"line-number"},[a._v("58")]),s("br"),s("span",{staticClass:"line-number"},[a._v("59")]),s("br"),s("span",{staticClass:"line-number"},[a._v("60")]),s("br"),s("span",{staticClass:"line-number"},[a._v("61")]),s("br"),s("span",{staticClass:"line-number"},[a._v("62")]),s("br"),s("span",{staticClass:"line-number"},[a._v("63")]),s("br"),s("span",{staticClass:"line-number"},[a._v("64")]),s("br"),s("span",{staticClass:"line-number"},[a._v("65")]),s("br"),s("span",{staticClass:"line-number"},[a._v("66")]),s("br"),s("span",{staticClass:"line-number"},[a._v("67")]),s("br"),s("span",{staticClass:"line-number"},[a._v("68")]),s("br"),s("span",{staticClass:"line-number"},[a._v("69")]),s("br"),s("span",{staticClass:"line-number"},[a._v("70")]),s("br"),s("span",{staticClass:"line-number"},[a._v("71")]),s("br"),s("span",{staticClass:"line-number"},[a._v("72")]),s("br"),s("span",{staticClass:"line-number"},[a._v("73")]),s("br"),s("span",{staticClass:"line-number"},[a._v("74")]),s("br"),s("span",{staticClass:"line-number"},[a._v("75")]),s("br"),s("span",{staticClass:"line-number"},[a._v("76")]),s("br"),s("span",{staticClass:"line-number"},[a._v("77")]),s("br"),s("span",{staticClass:"line-number"},[a._v("78")]),s("br"),s("span",{staticClass:"line-number"},[a._v("79")]),s("br"),s("span",{staticClass:"line-number"},[a._v("80")]),s("br"),s("span",{staticClass:"line-number"},[a._v("81")]),s("br"),s("span",{staticClass:"line-number"},[a._v("82")]),s("br"),s("span",{staticClass:"line-number"},[a._v("83")]),s("br"),s("span",{staticClass:"line-number"},[a._v("84")]),s("br"),s("span",{staticClass:"line-number"},[a._v("85")]),s("br"),s("span",{staticClass:"line-number"},[a._v("86")]),s("br"),s("span",{staticClass:"line-number"},[a._v("87")]),s("br"),s("span",{staticClass:"line-number"},[a._v("88")]),s("br"),s("span",{staticClass:"line-number"},[a._v("89")]),s("br"),s("span",{staticClass:"line-number"},[a._v("90")]),s("br"),s("span",{staticClass:"line-number"},[a._v("91")]),s("br"),s("span",{staticClass:"line-number"},[a._v("92")]),s("br"),s("span",{staticClass:"line-number"},[a._v("93")]),s("br"),s("span",{staticClass:"line-number"},[a._v("94")]),s("br"),s("span",{staticClass:"line-number"},[a._v("95")]),s("br"),s("span",{staticClass:"line-number"},[a._v("96")]),s("br"),s("span",{staticClass:"line-number"},[a._v("97")]),s("br"),s("span",{staticClass:"line-number"},[a._v("98")]),s("br"),s("span",{staticClass:"line-number"},[a._v("99")]),s("br"),s("span",{staticClass:"line-number"},[a._v("100")]),s("br"),s("span",{staticClass:"line-number"},[a._v("101")]),s("br"),s("span",{staticClass:"line-number"},[a._v("102")]),s("br"),s("span",{staticClass:"line-number"},[a._v("103")]),s("br"),s("span",{staticClass:"line-number"},[a._v("104")]),s("br"),s("span",{staticClass:"line-number"},[a._v("105")]),s("br"),s("span",{staticClass:"line-number"},[a._v("106")]),s("br"),s("span",{staticClass:"line-number"},[a._v("107")]),s("br"),s("span",{staticClass:"line-number"},[a._v("108")]),s("br"),s("span",{staticClass:"line-number"},[a._v("109")]),s("br"),s("span",{staticClass:"line-number"},[a._v("110")]),s("br"),s("span",{staticClass:"line-number"},[a._v("111")]),s("br"),s("span",{staticClass:"line-number"},[a._v("112")]),s("br"),s("span",{staticClass:"line-number"},[a._v("113")]),s("br"),s("span",{staticClass:"line-number"},[a._v("114")]),s("br")])])])}),[],!1,null,null,null);n.default=i.exports}}]);