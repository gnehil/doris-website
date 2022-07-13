(window.webpackJsonp=window.webpackJsonp||[]).push([[2917],{3545:function(t,s,n){"use strict";n.r(s);var e=n(15),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"seatunnel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#seatunnel"}},[t._v("#")]),t._v(" Seatunnel")]),t._v(" "),n("p",[t._v("最新版本的 "),n("a",{attrs:{href:"https://seatunnel.apache.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache SeaTunnel (原 waterdrop )"),n("OutboundLink")],1),t._v(" 已经支持 Doris 的连接器, SeaTunnel 可以用过 Spark 引擎和 Flink 引擎同步数据至 Doris 中.")]),t._v(" "),n("h2",{attrs:{id:"flink-sink-doris-2-x"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flink-sink-doris-2-x"}},[t._v("#")]),t._v(" Flink Sink Doris(2.x)")]),t._v(" "),n("p",[t._v("Seatunnel Flink Sink Doris "),n("a",{attrs:{href:"https://github.com/apache/incubator-seatunnel/tree/dev/seatunnel-connectors/seatunnel-connector-flink-doris",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件代码"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"参数列表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参数列表"}},[t._v("#")]),t._v(" 参数列表")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("配置项")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("必填")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("支持引擎")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("fenodes")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("yes")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("database")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("yes")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("table")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("yes")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("user")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("yes")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("password")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("yes")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("batch_size")]),t._v(" "),n("td",[t._v("int")]),t._v(" "),n("td",[t._v("no")]),t._v(" "),n("td",[t._v("100")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("interval")]),t._v(" "),n("td",[t._v("int")]),t._v(" "),n("td",[t._v("no")]),t._v(" "),n("td",[t._v("1000")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("max_retries")]),t._v(" "),n("td",[t._v("int")]),t._v(" "),n("td",[t._v("no")]),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("doris.*")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("no")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])])])]),t._v(" "),n("p",[n("code",[t._v("fenodes [string]")])]),t._v(" "),n("p",[t._v("Doris Fe Http访问地址, eg: 127.0.01:8030")]),t._v(" "),n("p",[n("code",[t._v("database [string]")])]),t._v(" "),n("p",[t._v("写入 Doris 的库名")]),t._v(" "),n("p",[n("code",[t._v("table [string]")])]),t._v(" "),n("p",[t._v("写入 Doris 的表名")]),t._v(" "),n("p",[n("code",[t._v("user [string]")])]),t._v(" "),n("p",[t._v("Doris 访问用户")]),t._v(" "),n("p",[n("code",[t._v("password [string]")])]),t._v(" "),n("p",[t._v("Doris 访问用户密码")]),t._v(" "),n("p",[n("code",[t._v("batch_size [int]")])]),t._v(" "),n("p",[t._v("单次写Doris的最大行数,默认值100")]),t._v(" "),n("p",[n("code",[t._v("interval [int]")])]),t._v(" "),n("p",[t._v("flush 间隔时间(毫秒)，超过该时间后异步线程将 缓存中数据写入Doris。设置为0表示关闭定期写入。")]),t._v(" "),n("p",[n("code",[t._v("max_retries [int]")])]),t._v(" "),n("p",[t._v("写Doris失败之后的重试次数")]),t._v(" "),n("p",[n("code",[t._v("doris.* [string]")])]),t._v(" "),n("p",[t._v("Stream load 的导入参数。例如:'doris.column_separator' = ', '等")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://doris.apache.org/zh-CN/administrator-guide/load-data/stream-load-manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多 Stream Load 参数配置"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("p",[t._v("Socket 数据写入 Doris")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('env {\n  execution.parallelism = 1\n}\nsource {\n    SocketStream {\n      host = 127.0.0.1\n      port = 9999\n      result_table_name = "socket"\n      field_name = "info"\n    }\n}\ntransform {\n}\nsink {\n  DorisSink {\n      fenodes = "127.0.0.1:8030"\n      user = root\n      password = 123456\n      database = test\n      table = test_tbl\n      batch_size = 5\n      max_retries = 1\n      interval = 5000\n    }\n}\n\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br")])]),n("h3",{attrs:{id:"启动命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动命令"}},[t._v("#")]),t._v(" 启动命令")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("sh bin/start-seatunnel-flink.sh --config config/flink.streaming.conf\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);