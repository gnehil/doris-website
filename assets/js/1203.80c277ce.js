(window.webpackJsonp=window.webpackJsonp||[]).push([[1203],{1830:function(e,s,a){"use strict";a.r(s);var t=a(15),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"debug-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug-log"}},[e._v("#")]),e._v(" Debug Log")]),e._v(" "),a("p",[e._v("The system operation logs of Doris's FE and BE nodes are at INFO level by default. It can usually satisfy the analysis of system behavior and the localization of basic problems. However, in some cases, it may be necessary to enable DEBUG level logs to further troubleshoot the problem. This document mainly introduces how to enable the DEBUG log level of FE and BE nodes.")]),e._v(" "),a("blockquote",[a("p",[e._v("It is not recommended to adjust the log level to WARN or higher, which is not conducive to the analysis of system behavior and the location of problems.")])]),e._v(" "),a("blockquote",[a("p",[e._v("Enable DEBUG log may cause a large number of logs to be generated, "),a("strong",[e._v("Please be careful to open it in production environment")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"enable-fe-debug-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-fe-debug-log"}},[e._v("#")]),e._v(" Enable FE Debug log")]),e._v(" "),a("p",[e._v("The Debug level log of FE can be turned on by modifying the configuration file, or it can be turned on at runtime through the interface or API.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open via configuration file")]),e._v(" "),a("p",[e._v("Add the configuration item "),a("code",[e._v("sys_log_verbose_modules")]),e._v(" to fe.conf. An example is as follows:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Only enable Debug log for class org.apache.doris.catalog.Catalog\nsys_log_verbose_modules=org.apache.doris.catalog.Catalog\n\n# Open the Debug log of all classes under the package org.apache.doris.catalog\nsys_log_verbose_modules=org.apache.doris.catalog\n\n# Enable Debug logs for all classes under package org\nsys_log_verbose_modules=org\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("Add configuration items and restart the FE node to take effect.")])]),e._v(" "),a("li",[a("p",[e._v("Via FE UI interface")]),e._v(" "),a("p",[e._v("The log level can be modified at runtime through the UI interface. There is no need to restart the FE node. Open the http port of the FE node (8030 by default) in the browser, and log in to the UI interface. Then click on the "),a("code",[e._v("Log")]),e._v(" tab in the upper navigation bar.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("https://bce.bdstatic.com/doc/BaiduDoris/DORIS/image_f87b8c1.png"),alt:"image.png"}}),e._v(" "),a("p",[e._v("We can enter the package name or specific class name in the Add input box to open the corresponding Debug log. For example, enter "),a("code",[e._v("org.apache.doris.catalog.Catalog")]),e._v(" to open the Debug log of the Catalog class:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("https://bce.bdstatic.com/doc/BaiduDoris/DORIS/image_f0d4a23.png"),alt:"image.png"}}),e._v(" "),a("p",[e._v("You can also enter the package name or specific class name in the Delete input box to close the corresponding Debug log.")]),e._v(" "),a("blockquote",[a("p",[e._v("The modification here will only affect the log level of the corresponding FE node. Does not affect the log level of other FE nodes.")])])]),e._v(" "),a("li",[a("p",[e._v("Modification via API")]),e._v(" "),a("p",[e._v("The log level can also be modified at runtime via the following API. There is no need to restart the FE node.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -X POST -uuser:passwd fe_host:http_port/rest/v1/log?add_verbose"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("org.apache.doris.catalog.Catalog\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The username and password are the root or admin users who log in to Doris. The "),a("code",[e._v("add_verbose")]),e._v(" parameter specifies the package or class name to enable Debug logging. Returns if successful:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"LogConfiguration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"VerboseNames"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"org,org.apache.doris.catalog.Catalog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"AuditNames"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"slow_query,query,load"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"INFO"')]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"count"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("Debug logging can also be turned off via the following API:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -X POST -uuser:passwd fe_host:http_port/rest/v1/log?del_verbose"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("org.apache.doris.catalog.Catalog\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The "),a("code",[e._v("del_verbose")]),e._v(" parameter specifies the package or class name for which to turn off Debug logging.")])])]),e._v(" "),a("h2",{attrs:{id:"enable-be-debug-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-be-debug-log"}},[e._v("#")]),e._v(" Enable BE Debug log")]),e._v(" "),a("p",[e._v("BE's Debug log currently only supports modifying and restarting the BE node through the configuration file to take effect.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sys_log_verbose_modules=plan_fragment_executor,olap_scan_node\nsys_log_verbose_level=3\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[a("code",[e._v("sys_log_verbose_modules")]),e._v(" specifies the file name to be opened, which can be specified by the wildcard *. for example:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sys_log_verbose_modules=*\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Indicates that all DEBUG logs are enabled.")]),e._v(" "),a("p",[a("code",[e._v("sys_log_verbose_level")]),e._v(" indicates the level of DEBUG. The higher the number, the more detailed the DEBUG log. The value range is 1-10.")])])}),[],!1,null,null,null);s.default=n.exports}}]);