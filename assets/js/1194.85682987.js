(window.webpackJsonp=window.webpackJsonp||[]).push([[1194],{1822:function(s,a,e){"use strict";e.r(a);var t=e(15),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"show-restore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-restore"}},[s._v("#")]),s._v(" SHOW-RESTORE")]),s._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),e("p",[s._v("SHOW RESTORE")]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("p",[s._v("该语句用于查看 RESTORE 任务")]),s._v(" "),e("p",[s._v("语法：")]),s._v(" "),e("div",{staticClass:"language-SQL line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RESTORE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" DB_NAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("说明：\n1. Doris 中仅保存最近一次 RESTORE 任务。\n2. 各列含义如下：\nJobId：                  唯一作业id\nLabel：                  要恢复的备份的名称\nTimestamp：              要恢复的备份的时间版本\nDbName：                 所属数据库\nState：                  当前阶段\nPENDING：        提交作业后的初始状态\nSNAPSHOTING：    执行快照中\nDOWNLOAD：       快照完成，准备下载仓库中的快照\nDOWNLOADING：    快照下载中\nCOMMIT：         快照下载完成，准备生效\nCOMMITING：      生效中\nFINISHED：       作业成功\nCANCELLED：      作业失败\nAllowLoad：              恢复时是否允许导入（当前不支持）\nReplicationNum：         指定恢复的副本数\nRestoreJobs：            要恢复的表和分区\nCreateTime：             任务提交时间\nMetaPreparedTime：       元数据准备完成时间\nSnapshotFinishedTime：   快照完成时间\nDownloadFinishedTime：   快照下载完成时间\nFinishedTime：           作业结束时间\nUnfinishedTasks：        在 SNAPSHOTING、DOWNLOADING 和 COMMITING 阶段会显示还未完成的子任务id\nStatus：                 如果作业失败，显示失败信息\nTimeout：                作业超时时间，单位秒")]),s._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("查看 example_db 下最近一次 RESTORE 任务。")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RESTORE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" example_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("SHOW, RESTORE\n")])])]),e("h3",{attrs:{id:"best-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=n.exports}}]);