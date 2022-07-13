(window.webpackJsonp=window.webpackJsonp||[]).push([[2804],{3434:function(e,a,t){"use strict";t.r(a);var s=t(15),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"show-routine-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-routine-load"}},[e._v("#")]),e._v(" SHOW ROUTINE LOAD")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("该语句用于展示 Routine Load 作业运行状态\n语法：\n    SHOW [ALL] ROUTINE LOAD [FOR jobName];\n\n结果说明：\n\n              Id: 作业ID\n            Name: 作业名称\n      CreateTime: 作业创建时间\n       PauseTime: 最近一次作业暂停时间\n         EndTime: 作业结束时间\n          DbName: 对应数据库名称\n       TableName: 对应表名称\n           State: 作业运行状态\n  DataSourceType: 数据源类型：KAFKA\n  CurrentTaskNum: 当前子任务数量\n   JobProperties: 作业配置详情\n")])])]),t("p",[e._v("DataSourceProperties: 数据源配置详情\nCustomProperties: 自定义配置\nStatistic: 作业运行状态统计信息\nProgress: 作业运行进度\nLag: 作业延迟状态\nReasonOfStateChanged: 作业状态变更的原因\nErrorLogUrls: 被过滤的质量不合格的数据的查看地址\nOtherMsg: 其他错误信息")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('* State\n\n    有以下4种State：\n\n    * NEED_SCHEDULE：作业等待被调度\n    * RUNNING：作业运行中\n    * PAUSED：作业被暂停\n    * STOPPED：作业已结束\n    * CANCELLED：作业已取消\n\n* Progress\n\n    对于Kafka数据源，显示每个分区当前已消费的offset。如 {"0":"2"} 表示Kafka分区0的消费进度为2。\n\n* Lag\n\n    对于Kafka数据源，显示每个分区的消费延迟。如{"0":10} 表示Kafka分区0的消费延迟为10。\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("展示名称为 test1 的所有例行导入作业（包括已停止或取消的作业）。结果为一行或多行。")]),e._v(" "),t("p",[e._v("SHOW ALL ROUTINE LOAD FOR test1;")])]),e._v(" "),t("li",[t("p",[e._v("展示名称为 test1 的当前正在运行的例行导入作业")]),e._v(" "),t("p",[e._v("SHOW ROUTINE LOAD FOR test1;")])]),e._v(" "),t("li",[t("p",[e._v("显示 example_db 下，所有的例行导入作业（包括已停止或取消的作业）。结果为一行或多行。")]),e._v(" "),t("p",[e._v("use example_db;\nSHOW ALL ROUTINE LOAD;")])]),e._v(" "),t("li",[t("p",[e._v("显示 example_db 下，所有正在运行的例行导入作业")]),e._v(" "),t("p",[e._v("use example_db;\nSHOW ROUTINE LOAD;")])]),e._v(" "),t("li",[t("p",[e._v("显示 example_db 下，名称为 test1 的当前正在运行的例行导入作业")]),e._v(" "),t("p",[e._v("SHOW ROUTINE LOAD FOR example_db.test1;")])]),e._v(" "),t("li",[t("p",[e._v("显示 example_db 下，名称为 test1 的所有例行导入作业（包括已停止或取消的作业）。结果为一行或多行。")]),e._v(" "),t("p",[e._v("SHOW ALL ROUTINE LOAD FOR example_db.test1;")])])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("SHOW,ROUTINE,LOAD\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);