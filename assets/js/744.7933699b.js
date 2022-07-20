(window.webpackJsonp=window.webpackJsonp||[]).push([[744],{1372:function(t,_,a){"use strict";a.r(_);var e=a(15),s=Object(e.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"磁盘空间管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘空间管理"}},[t._v("#")]),t._v(" 磁盘空间管理")]),t._v(" "),a("p",[t._v("本文档主要介绍和磁盘存储空间有关的系统参数和处理策略。")]),t._v(" "),a("p",[t._v("Doris 的数据磁盘空间如果不加以控制，会因磁盘写满而导致进程挂掉。因此我们监测磁盘的使用率和剩余空间，通过设置不同的警戒水位，来控制 Doris 系统中的各项操作，尽量避免发生磁盘被写满的情况。")]),t._v(" "),a("h2",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),a("ul",[a("li",[t._v("Data Dir：数据目录，在 BE 配置文件 "),a("code",[t._v("be.conf")]),t._v(" 的 "),a("code",[t._v("storage_root_path")]),t._v(" 中指定的各个数据目录。通常一个数据目录对应一个磁盘、因此下文中 "),a("strong",[t._v("磁盘")]),t._v(" 也指代一个数据目录。")])]),t._v(" "),a("h2",{attrs:{id:"基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[t._v("#")]),t._v(" 基本原理")]),t._v(" "),a("p",[t._v("BE 定期（每隔一分钟）会向 FE 汇报一次磁盘使用情况。FE 记录这些统计值，并根据这些统计值，限制不同的操作请求。")]),t._v(" "),a("p",[t._v("在 FE 中分别设置了 "),a("strong",[t._v("高水位（High Watermark）")]),t._v(" 和 "),a("strong",[t._v("危险水位（Flood Stage）")]),t._v(" 两级阈值。危险水位高于高水位。当磁盘使用率高于高水位时，Doris 会限制某些操作的执行（如副本均衡等）。而如果高于危险水位，则会禁止某些操作的执行（如导入）。")]),t._v(" "),a("p",[t._v("同时，在 BE 上也设置了 "),a("strong",[t._v("危险水位（Flood Stage）")]),t._v("。考虑到 FE 并不能完全及时的检测到 BE 上的磁盘使用情况，以及无法控制某些 BE 自身运行的操作（如 Compaction）。因此 BE 上的危险水位用于 BE 主动拒绝和停止某些操作，达到自我保护的目的。")]),t._v(" "),a("h2",{attrs:{id:"fe-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-参数"}},[t._v("#")]),t._v(" FE 参数")]),t._v(" "),a("p",[a("strong",[t._v("高水位：")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("storage_high_watermark_usage_percent 默认 85 (85%)。\nstorage_min_left_capacity_bytes 默认 2GB。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("当磁盘空间使用率"),a("strong",[t._v("大于")]),t._v(" "),a("code",[t._v("storage_high_watermark_usage_percent")]),t._v("，"),a("strong",[t._v("或者")]),t._v(" 磁盘空间剩余大小"),a("strong",[t._v("小于")]),t._v(" "),a("code",[t._v("storage_min_left_capacity_bytes")]),t._v(" 时，该磁盘不会再被作为以下操作的目的路径：")]),t._v(" "),a("ul",[a("li",[t._v("Tablet 均衡操作（Balance）")]),t._v(" "),a("li",[t._v("Colocation 表数据分片的重分布（Relocation）")]),t._v(" "),a("li",[t._v("Decommission")])]),t._v(" "),a("p",[a("strong",[t._v("危险水位：")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("storage_flood_stage_usage_percent 默认 95 (95%)。\nstorage_flood_stage_left_capacity_bytes 默认 1GB。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("当磁盘空间使用率"),a("strong",[t._v("大于")]),t._v(" "),a("code",[t._v("storage_flood_stage_usage_percent")]),t._v("，"),a("strong",[t._v("并且")]),t._v(" 磁盘空间剩余大小"),a("strong",[t._v("小于")]),t._v(" "),a("code",[t._v("storage_flood_stage_left_capacity_bytes")]),t._v(" 时，该磁盘不会再被作为以下操作的目的路径，并禁止某些操作：")]),t._v(" "),a("ul",[a("li",[t._v("Tablet 均衡操作（Balance）")]),t._v(" "),a("li",[t._v("Colocation 表数据分片的重分布（Relocation）")]),t._v(" "),a("li",[t._v("副本补齐")]),t._v(" "),a("li",[t._v("恢复操作（Restore）")]),t._v(" "),a("li",[t._v("数据导入（Load/Insert）")])]),t._v(" "),a("h2",{attrs:{id:"be-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#be-参数"}},[t._v("#")]),t._v(" BE 参数")]),t._v(" "),a("p",[a("strong",[t._v("危险水位：")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("capacity_used_percent_flood_stage 默认 95 (95%)。\ncapacity_min_left_bytes_flood_stage 默认 1GB。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("当磁盘空间使用率"),a("strong",[t._v("大于")]),t._v(" "),a("code",[t._v("storage_flood_stage_usage_percent")]),t._v("，"),a("strong",[t._v("并且")]),t._v(" 磁盘空间剩余大小"),a("strong",[t._v("小于")]),t._v(" "),a("code",[t._v("storage_flood_stage_left_capacity_bytes")]),t._v(" 时，该磁盘上的以下操作会被禁止：")]),t._v(" "),a("ul",[a("li",[t._v("Base/Cumulative Compaction。")]),t._v(" "),a("li",[t._v("数据写入。包括各种导入操作。")]),t._v(" "),a("li",[t._v("Clone Task。通常发生于副本修复或均衡时。")]),t._v(" "),a("li",[t._v("Push Task。发生在 Hadoop 导入的 Loading 阶段，下载文件。")]),t._v(" "),a("li",[t._v("Alter Task。Schema Change 或 Rollup 任务。")]),t._v(" "),a("li",[t._v("Download Task。恢复操作的 Downloading 阶段。")])]),t._v(" "),a("h2",{attrs:{id:"磁盘空间释放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘空间释放"}},[t._v("#")]),t._v(" 磁盘空间释放")]),t._v(" "),a("p",[t._v("当磁盘空间高于高水位甚至危险水位后，很多操作都会被禁止。此时可以尝试通过以下方式减少磁盘使用率，恢复系统。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("删除表或分区")]),t._v(" "),a("p",[t._v("通过删除表或分区的方式，能够快速降低磁盘空间使用率，恢复集群。"),a("strong",[t._v("注意：只有 "),a("code",[t._v("DROP")]),t._v(" 操作可以达到快速降低磁盘空间使用率的目的，"),a("code",[t._v("DELETE")]),t._v(" 操作不可以。")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("DROP TABLE tbl;\nALTER TABLE tbl DROP PARTITION p1;\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("扩容 BE")]),t._v(" "),a("p",[t._v("扩容后，数据分片会自动均衡到磁盘使用率较低的 BE 节点上。扩容操作会根据数据量及节点数量不同，在数小时或数天后使集群到达均衡状态。")])]),t._v(" "),a("li",[a("p",[t._v("修改表或分区的副本")]),t._v(" "),a("p",[t._v("可以将表或分区的副本数降低。比如默认3副本可以降低为2副本。该方法虽然降低了数据的可靠性，但是能够快速的降低磁盘使用率，使集群恢复正常。该方法通常用于紧急恢复系统。请在恢复后，通过扩容或删除数据等方式，降低磁盘使用率后，将副本数恢复为 3。")]),t._v(" "),a("p",[t._v("修改副本操作为瞬间生效，后台会自动异步的删除多余的副本。")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ALTER TABLE tbl MODIFY PARTITION p1 SET("replication_num" = "2");\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("删除多余文件")]),t._v(" "),a("p",[t._v("当 BE 进程已经因为磁盘写满而挂掉并无法启动时（此现象可能因 FE 或 BE 检测不及时而发生）。需要通过删除数据目录下的一些临时文件，保证 BE 进程能够启动。以下目录中的文件可以直接删除：")]),t._v(" "),a("ul",[a("li",[t._v("log/：日志目录下的日志文件。")]),t._v(" "),a("li",[t._v("snapshot/: 快照目录下的快照文件。")]),t._v(" "),a("li",[t._v("trash/：回收站中的文件。")])]),t._v(" "),a("p",[a("strong",[t._v("这种操作会对 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/admin-manual/maint-monitor/tablet-restore-tool.html"}},[t._v("从 BE 回收站中恢复数据")]),t._v(" 产生影响。")],1)]),t._v(" "),a("p",[t._v("如果BE还能够启动，则可以使用"),a("code",[t._v("ADMIN CLEAN TRASH ON(BackendHost:BackendHeartBeatPort);")]),t._v("来主动清理临时文件，会清理 "),a("strong",[t._v("所有")]),t._v(" trash文件和过期snapshot文件，"),a("strong",[t._v("这将影响从回收站恢复数据的操作")]),t._v(" 。")]),t._v(" "),a("p",[t._v("如果不手动执行"),a("code",[t._v("ADMIN CLEAN TRASH")]),t._v("，系统仍将会在几分钟至几十分钟内自动执行清理，这里分为两种情况：")]),t._v(" "),a("ul",[a("li",[t._v("如果磁盘占用未达到 "),a("strong",[t._v("危险水位(Flood Stage)")]),t._v(" 的90%，则会清理过期trash文件和过期snapshot文件，此时会保留一些近期文件而不影响恢复数据。")]),t._v(" "),a("li",[t._v("如果磁盘占用已达到 "),a("strong",[t._v("危险水位(Flood Stage)")]),t._v(" 的90%，则会清理 "),a("strong",[t._v("所有")]),t._v(" trash文件和过期snapshot文件， "),a("strong",[t._v("此时会影响从回收站恢复数据的操作")]),t._v(" 。 自动执行的时间间隔可以通过配置项中的"),a("code",[t._v("max_garbage_sweep_interval")]),t._v("和"),a("code",[t._v("min_garbage_sweep_interval")]),t._v("更改。")])]),t._v(" "),a("p",[t._v("出现由于缺少trash文件而导致恢复失败的情况时，可能返回如下结果：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"status": "Fail","msg": "can find tablet path in trash"}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("删除数据文件（危险！！！）")]),t._v(" "),a("p",[t._v("当以上操作都无法释放空间时，需要通过删除数据文件来释放空间。数据文件在指定数据目录的 "),a("code",[t._v("data/")]),t._v(" 目录下。删除数据分片（Tablet）必须先确保该 Tablet 至少有一个副本是正常的，否则"),a("strong",[t._v("删除唯一副本会导致数据丢失")]),t._v("。假设我们要删除 id 为 12345 的 Tablet：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("找到 Tablet 对应的目录，通常位于 "),a("code",[t._v("data/shard_id/tablet_id/")]),t._v(" 下。如：")]),t._v(" "),a("p",[a("code",[t._v("data/0/12345/")])])]),t._v(" "),a("li",[a("p",[t._v("记录 tablet id 和 schema hash。其中 schema hash 为上一步目录的下一级目录名。如下为 352781111：")]),t._v(" "),a("p",[a("code",[t._v("data/0/12345/352781111")])])]),t._v(" "),a("li",[a("p",[t._v("删除数据目录：")]),t._v(" "),a("p",[a("code",[t._v("rm -rf data/0/12345/")])])]),t._v(" "),a("li",[a("p",[t._v("删除 Tablet 元数据（具体参考 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/admin-manual/maint-monitor/tablet-meta-tool.html"}},[t._v("Tablet 元数据管理工具")]),t._v("）")],1),t._v(" "),a("p",[a("code",[t._v("./lib/meta_tool --operation=delete_header --root_path=/path/to/root_path --tablet_id=12345 --schema_hash= 352781111")])])])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);