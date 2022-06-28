(window.webpackJsonp=window.webpackJsonp||[]).push([[826],{1453:function(e,t,a){"use strict";a.r(t);var s=a(15),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sql问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql问题"}},[e._v("#")]),e._v(" SQL问题")]),e._v(" "),a("h3",{attrs:{id:"q1-查询报错-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1-查询报错-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx"}},[e._v("#")]),e._v(" Q1. 查询报错：Failed to get scan range, no queryable replica found in tablet: xxxx")]),e._v(" "),a("p",[e._v("这种情况是因为对应的 tablet 没有找到可以查询的副本，通常原因可能是 BE 宕机、副本缺失等。可以先通过 "),a("code",[e._v("show tablet tablet_id")]),e._v(" 语句，然后执行后面的 "),a("code",[e._v("show proc")]),e._v(" 语句，查看这个 tablet 对应的副本信息，检查副本是否完整。同时还可以通过 "),a("code",[e._v('show proc "/cluster_balance"')]),e._v(" 信息来查询集群内副本调度和修复的进度。")]),e._v(" "),a("p",[e._v("关于数据副本管理相关的命令，可以参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/admin-manual/maint-monitor/tablet-repair-and-balance.html"}},[e._v("数据副本管理")]),e._v("。")],1),e._v(" "),a("h3",{attrs:{id:"q2-show-backends-frontends-查看到的信息不完整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2-show-backends-frontends-查看到的信息不完整"}},[e._v("#")]),e._v(" Q2. show backends/frontends 查看到的信息不完整")]),e._v(" "),a("p",[e._v("在执行如"),a("code",[e._v("show backends/frontends")]),e._v(" 等某些语句后，结果中可能会发现有部分列内容不全。比如show backends结果中看不到磁盘容量信息等。")]),e._v(" "),a("p",[e._v("通常这个问题会出现在集群有多个FE的情况下，如果用户连接到非Master FE节点执行这些语句，就会看到不完整的信息。这是因为，部分信息仅存在于Master FE节点。比如BE的磁盘使用量信息等。所以只有在直连Master FE后，才能获得完整信息。")]),e._v(" "),a("p",[e._v("当然，用户也可以在执行这些语句前，先执行 "),a("code",[e._v("set forward_to_master=true;")]),e._v(" 这个会话变量设置为true后，后续执行的一些信息查看类语句会自动转发到Master FE获取结果。这样，不论用户连接的是哪个FE，都可以获取到完整结果了。")]),e._v(" "),a("h3",{attrs:{id:"q3-invalid-cluster-id-xxxx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3-invalid-cluster-id-xxxx"}},[e._v("#")]),e._v(" Q3. invalid cluster id: xxxx")]),e._v(" "),a("p",[e._v("这个错误可能会在show backends 或 show frontends 命令的结果中出现。通常出现在某个FE或BE节点的错误信息列中。这个错误的含义是，Master FE向这个节点发送心跳信息后，该节点发现心跳信息中携带的 cluster id和本地存储的 cluster id不同，所以拒绝回应心跳。")]),e._v(" "),a("p",[e._v("Doris的 Master FE 节点会主动发送心跳给各个FE或BE节点，并且在心跳信息中会携带一个cluster_id。cluster_id是在一个集群初始化时，由Master FE生成的唯一集群标识。当FE或BE第一次收到心跳信息后，则会将cluster_id以文件的形式保存在本地。FE的该文件在元数据目录的image/目录下，BE则在所有数据目录下都有一个cluster_id文件。之后，每次节点收到心跳后，都会用本地cluster_id的内容和心跳中的内容作比对，如果不一致，则拒绝响应心跳。")]),e._v(" "),a("p",[e._v("该机制是一个节点认证机制，以防止接收到集群外的节点发送来的错误的心跳信息。")]),e._v(" "),a("p",[e._v("如果需要恢复这个错误。首先要先确认所有节点是否都是正确的集群中的节点。之后，对于FE节点，可以尝试修改元数据目录下的 image/VERSION 文件中的 cluster_id 值后重启FE。对于BE节点，则可以删除所有数据目录下的 cluster_id 文件后重启 BE。")]),e._v(" "),a("h3",{attrs:{id:"q4-unique-key-模型查询结果不一致"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4-unique-key-模型查询结果不一致"}},[e._v("#")]),e._v(" Q4. Unique Key 模型查询结果不一致")]),e._v(" "),a("p",[e._v("某些情况下，当用户使用相同的 SQL 查询一个 Unique Key 模型的表时，可能会出现多次查询结果不一致的现象。并且查询结果总在 2-3 种之间变化。")]),e._v(" "),a("p",[e._v("这可能是因为，在同一批导入数据中，出现了 key 相同但 value 不同的数据，这会导致，不同副本间，因数据覆盖的先后顺序不确定而产生的结果不一致的问题。")]),e._v(" "),a("p",[e._v("比如表定义为 k1, v1。一批次导入数据如下：")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('1, "abc"\n1, "def"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("那么可能副本1 的结果是 "),a("code",[e._v('1, "abc"')]),e._v("，而副本2 的结果是 "),a("code",[e._v('1, "def"')]),e._v("。从而导致查询结果不一致。")]),e._v(" "),a("p",[e._v("为了确保不同副本之间的数据先后顺序唯一，可以参考 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/update-delete/sequence-column-manual.html"}},[e._v("Sequence Column")]),e._v(" 功能。")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);