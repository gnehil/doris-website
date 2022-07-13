(window.webpackJsonp=window.webpackJsonp||[]).push([[3458],{4087:function(s,a,e){"use strict";e.r(a);var t=e(15),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"如何开启debug日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何开启debug日志"}},[s._v("#")]),s._v(" 如何开启Debug日志")]),s._v(" "),e("p",[s._v("Doris 的 FE 和 BE 节点的系统运行日志默认为 INFO 级别。通常可以满足对系统行为的分析和基本问题的定位。但是某些情况下，可能需要开启 DEBUG 级别的日志来进一步排查问题。本文档主要介绍如何开启 FE、BE节点的 DEBUG 日志级别。")]),s._v(" "),e("blockquote",[e("p",[s._v("不建议将日志级别调整为 WARN 或更高级别，这不利于系统行为的分析和问题的定位。")])]),s._v(" "),e("blockquote",[e("p",[s._v("开启 DEBUG 日志可能会导致大量日志产生，"),e("strong",[s._v("生产环境请谨慎开启")]),s._v("。")])]),s._v(" "),e("h2",{attrs:{id:"开启-fe-debug-日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启-fe-debug-日志"}},[s._v("#")]),s._v(" 开启 FE Debug 日志")]),s._v(" "),e("p",[s._v("FE 的 Debug 级别日志可以通过修改配置文件开启，也可以通过界面或 API 在运行时打开。")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("通过配置文件开启")]),s._v(" "),e("p",[s._v("在 fe.conf 中添加配置项 "),e("code",[s._v("sys_log_verbose_modules")]),s._v("。举例如下：")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 仅开启类 org.apache.doris.catalog.Catalog 的 Debug 日志\nsys_log_verbose_modules=org.apache.doris.catalog.Catalog\n\n# 开启包 org.apache.doris.catalog 下所有类的 Debug 日志\nsys_log_verbose_modules=org.apache.doris.catalog\n\n# 开启包 org 下所有类的 Debug 日志\nsys_log_verbose_modules=org\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("添加配置项并重启 FE 节点，即可生效。")])]),s._v(" "),e("li",[e("p",[s._v("通过 FE UI 界面")]),s._v(" "),e("p",[s._v("通过 UI 界面可以在运行时修改日志级别。无需重启 FE 节点。在浏览器打开 FE 节点的 http 端口（默认为 8030），并登陆 UI 界面。之后点击上方导航栏的 "),e("code",[s._v("Log")]),s._v(" 标签。")]),s._v(" "),e("img",{attrs:{src:s.$withBase("https://bce.bdstatic.com/doc/BaiduDoris/DORIS/image_f87b8c1.png"),alt:"image.png"}}),s._v(" "),e("p",[s._v("我们在 Add 输入框中可以输入包名或者具体的类名，可以打开对应的 Debug 日志。如输入 "),e("code",[s._v("org.apache.doris.catalog.Catalog")]),s._v(" 则可以打开 Catalog 类的 Debug 日志：")]),s._v(" "),e("img",{attrs:{src:s.$withBase("https://bce.bdstatic.com/doc/BaiduDoris/DORIS/image_f0d4a23.png"),alt:"image.png"}}),s._v(" "),e("p",[s._v("你也可以在 Delete 输入框中输入包名或者具体的类名，来关闭对应的 Debug 日志。")]),s._v(" "),e("blockquote",[e("p",[s._v("这里的修改只会影响对应的 FE 节点的日志级别。不会影响其他 FE 节点的日志级别。")])])]),s._v(" "),e("li",[e("p",[s._v("通过 API 修改")]),s._v(" "),e("p",[s._v("通过以下 API 也可以在运行时修改日志级别。无需重启 FE 节点。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X POST -uuser:passwd fe_host:http_port/rest/v1/log?add_verbose"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("org.apache.doris.catalog.Catalog\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中用户名密码为登陆 Doris 的 root 或 admin 用户。"),e("code",[s._v("add_verbose")]),s._v(" 参数指定要开启 Debug 日志的包名或类名。若成功则返回：")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"success"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"LogConfiguration"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"VerboseNames"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org,org.apache.doris.catalog.Catalog"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"AuditNames"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"slow_query,query,load"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Level"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"INFO"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"count"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("也可以通过以下 API 关闭 Debug 日志：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X POST -uuser:passwd fe_host:http_port/rest/v1/log?del_verbose"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("org.apache.doris.catalog.Catalog\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("del_verbose")]),s._v(" 参数指定要关闭 Debug 日志的包名或类名。")])])]),s._v(" "),e("h2",{attrs:{id:"开启-be-debug-日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启-be-debug-日志"}},[s._v("#")]),s._v(" 开启 BE Debug 日志")]),s._v(" "),e("p",[s._v("BE 的 Debug 日志目前仅支持通过配置文件修改并重启 BE 节点以生效。")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sys_log_verbose_modules=plan_fragment_executor,olap_scan_node\nsys_log_verbose_level=3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("code",[s._v("sys_log_verbose_modules")]),s._v(" 指定要开启的文件名，可以通过通配符 * 指定。比如：")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sys_log_verbose_modules=*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("表示开启所有 DEBUG 日志。")]),s._v(" "),e("p",[e("code",[s._v("sys_log_verbose_level")]),s._v(" 表示 DEBUG 的级别。数字越大，则 DEBUG 日志越详细。取值范围在 1-10。")])])}),[],!1,null,null,null);a.default=r.exports}}]);