(window.webpackJsonp=window.webpackJsonp||[]).push([[678],{1106:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"compaction-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compaction-action"}},[s._v("#")]),s._v(" Compaction Action")]),s._v(" "),t("p",[s._v("该 API 用于查看某个 BE 节点总体的 compaction 状态，或者指定 tablet 的 compaction 状态。也可以用于手动触发 Compaction。")]),s._v(" "),t("h2",{attrs:{id:"查看-compaction-状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-compaction-状态"}},[s._v("#")]),s._v(" 查看 Compaction 状态")]),s._v(" "),t("h3",{attrs:{id:"节点整体-compaction-状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点整体-compaction-状态"}},[s._v("#")]),s._v(" 节点整体 compaction 状态")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl -X GET http://be_host:webserver_port/api/compaction/run_status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("返回 JSON 格式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "CumulativeCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  },\n  "BaseCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("该结构表示某个数据目录下，正在执行 compaction 任务的 tablet 的 id，以及 compaction 的类型。")]),s._v(" "),t("h3",{attrs:{id:"指定-tablet-的-compaction-状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定-tablet-的-compaction-状态"}},[s._v("#")]),s._v(" 指定 tablet 的 compaction 状态")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl -X GET http://be_host:webserver_port/api/compaction/show?tablet_id=xxxx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("若 tablet 不存在，返回 JSON 格式的错误：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("若 tablet 存在，则返回 JSON 格式的结果:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "cumulative policy type": "NUM_BASED",\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": ,\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING 574.00 MB",\n        "[49-49] 2 DATA OVERLAPPING 574.00 B",\n        "[50-50] 0 DELETE NONOVERLAPPING 574.00 B",\n        "[51-51] 5 DATA OVERLAPPING 574.00 B"\n    ],\n    "missing_rowsets": [],\n    "stale version path": [\n        {\n            "path id": "2",\n            "last create time": "2019-12-16 18:11:15.110 +0800",\n            "path list": "2-> [0-24] -> [25-48]"\n        }, \n        {\n            "path id": "1",\n            "last create time": "2019-12-16 18:13:15.110 +0800",\n            "path list": "1-> [25-40] -> [40-48]"\n        }\n    ]\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("p",[s._v("结果说明：")]),s._v(" "),t("ul",[t("li",[s._v("cumulative policy type：当前tablet所使用的 cumulative compaction 策略。")]),s._v(" "),t("li",[s._v("cumulative point：base 和 cumulative compaction 的版本分界线。在 point（不含）之前的版本由 base compaction 处理。point（含）之后的版本由 cumulative compaction 处理。")]),s._v(" "),t("li",[s._v("last cumulative failure time：上一次尝试 cumulative compaction 失败的时间。默认 10min 后才会再次尝试对该 tablet 做 cumulative compaction。")]),s._v(" "),t("li",[s._v("last base failure time：上一次尝试 base compaction 失败的时间。默认 10min 后才会再次尝试对该 tablet 做 base compaction。")]),s._v(" "),t("li",[s._v("rowsets：该 tablet 当前的 rowset 集合。如 [0-48] 表示 0-48 版本。第二位数字表示该版本中 segment 的数量。"),t("code",[s._v("DELETE")]),s._v(" 表示 delete 版本。"),t("code",[s._v("DATA")]),s._v(" 表示数据版本。"),t("code",[s._v("OVERLAPPING")]),s._v(" 和 "),t("code",[s._v("NONOVERLAPPING")]),s._v(" 表示segment数据是否重叠。")]),s._v(" "),t("li",[s._v("missing_rowsets: 缺失的版本。")]),s._v(" "),t("li",[s._v("stale version path：该 table 当前被合并rowset集合的合并版本路径，该结构是一个数组结构，每个元素表示一个合并路径。每个元素中包含了三个属性：path id 表示版本路径id，last create time 表示当前路径上最近的 rowset 创建时间，默认在这个时间半个小时之后这条路径上的所有 rowset 会被过期删除。")])]),s._v(" "),t("h3",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl -X GET http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"手动触发-compaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动触发-compaction"}},[s._v("#")]),s._v(" 手动触发 Compaction")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl -X POST http://be_host:webserver_port/api/compaction/run?tablet_id=xxxx&compact_type=cumulative\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当前仅能执行一个手动compaction任务，其中compact_type取值为base或cumulative")]),s._v(" "),t("p",[s._v("若 tablet 不存在，返回 JSON 格式的错误：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("若 compaction 执行任务触发失败时，返回 JSON 格式的错误：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "status": "Fail",\n    "msg": "fail to execute compaction, error = -2000"\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("若 compaction 执行触发成功时，则返回 JSON 格式的结果:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "status": "Success",\n    "msg": "compaction task is successfully triggered."\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("结果说明：")]),s._v(" "),t("ul",[t("li",[s._v("status：触发任务状态，当成功触发时为Success；当因某些原因（比如，没有获取到合适的版本）时，返回Fail。")]),s._v(" "),t("li",[s._v("msg：给出具体的成功或失败的信息。")])]),s._v(" "),t("h3",{attrs:{id:"示例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl -X POST http://192.168.10.24:8040/api/compaction/run?tablet_id=10015\\&compact_type=cumulative\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"手动-compaction-执行状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动-compaction-执行状态"}},[s._v("#")]),s._v(" 手动 Compaction 执行状态")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl -X GET http://be_host:webserver_port/api/compaction/run_status?tablet_id=xxxx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("若 tablet 不存在，返回 JSON 格式：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("若 tablet 存在并且 tablet 不在正在执行 compaction，返回 JSON 格式：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "status" : "Success",\n    "run_status" : false,\n    "msg" : "this tablet_id is not running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : ""\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("若 tablet 存在并且 tablet 正在执行 compaction，返回 JSON 格式：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "status" : "Success",\n    "run_status" : true,\n    "msg" : "this tablet_id is running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : "cumulative"\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("结果说明：")]),s._v(" "),t("ul",[t("li",[s._v("run_status：获取当前手动 compaction 任务执行状态")])]),s._v(" "),t("h3",{attrs:{id:"示例-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl -X GET http://192.168.10.24:8040/api/compaction/run_status?tablet_id=10015\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);