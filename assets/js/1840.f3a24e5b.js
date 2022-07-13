(window.webpackJsonp=window.webpackJsonp||[]).push([[1840],{2470:function(s,a,e){"use strict";e.r(a);var n=e(15),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"贡献-udf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贡献-udf"}},[s._v("#")]),s._v(" 贡献 UDF")]),s._v(" "),e("p",[s._v("该手册主要讲述了外部用户如何将自己编写的 UDF 函数贡献给 Doris 社区。")]),s._v(" "),e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[s._v("#")]),s._v(" 前提条件")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("UDF 函数具有通用性")]),s._v(" "),e("p",[s._v("这里的通用性主要指的是：UDF 函数在某些业务场景下，被广泛使用。也就是说 UDF 函数具有复用价值，可被社区内其他用户直接使用。")]),s._v(" "),e("p",[s._v("如果你不确定自己写的 UDF 函数是否具有通用性，可以发邮件到 "),e("code",[s._v("dev@doris.apache.org")]),s._v(" 或直接创建 ISSUE 发起讨论。")])]),s._v(" "),e("li",[e("p",[s._v("UDF 已经完成测试，并正常运行在用户的生产环境中")])])]),s._v(" "),e("h2",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),e("ol",[e("li",[s._v("UDF 的 source code")]),s._v(" "),e("li",[s._v("UDF 的使用手册")])]),s._v(" "),e("h3",{attrs:{id:"源代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源代码"}},[s._v("#")]),s._v(" 源代码")]),s._v(" "),e("p",[s._v("在 "),e("code",[s._v("contrib/udf/src/")]),s._v(" 下创建一个存放 UDF 函数的文件夹，并将源码和 CMAKE 文件存放在此处。待贡献的源代码应该包含: "),e("code",[s._v(".h")]),s._v(" , "),e("code",[s._v(".cpp")]),s._v(", "),e("code",[s._v("CMakeFile.txt")]),s._v("。这里以 udf_samples 为例，首先在 "),e("code",[s._v("contrib/udf/src/")]),s._v(" 路径下创建一个新的文件夹，并存放源码。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("   ├──contrib\n   │  └── udf\n   │    ├── CMakeLists.txt\n   │    └── src\n   │       └── udf_samples\n   │           ├── CMakeLists.txt\n   │           ├── uda_sample.cpp\n   │           ├── uda_sample.h\n   │           ├── udf_sample.cpp\n   │           └── udf_sample.h\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("ol",[e("li",[e("p",[s._v("CMakeLists.txt")]),s._v(" "),e("p",[s._v("用户的 "),e("code",[s._v("CMakeLists.txt")]),s._v(" 放在此处后，需要进行少量更改。去掉 "),e("code",[s._v("include udf")]),s._v(" 和 "),e("code",[s._v("udf lib")]),s._v(" 即可。去掉的原因是，在 "),e("code",[s._v("contrib/udf")]),s._v(" 层级的 CMake 文件中，已经声明了。")])])]),s._v(" "),e("h3",{attrs:{id:"使用手册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用手册"}},[s._v("#")]),s._v(" 使用手册")]),s._v(" "),e("p",[s._v("使用手册需要包含：UDF 函数含义说明，适用的场景，函数的语法，如何编译 UDF ，如何在 Doris 集群中使用 UDF， 以及使用示例。")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("使用手册需包含中英文两个版本，并分别存放在 "),e("code",[s._v("docs/zh-CN/extending-doris/udf/contrib")]),s._v(" 和 "),e("code",[s._v("docs/en/extending-doris/udf/contrib")]),s._v(" 下。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("├── docs\n│   └── zh-CN\n│       └──extending-doris\n│          └──udf\n│            └──contrib\n│              ├── udf-simple-manual.md\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("├── docs\n│   └── en\n│       └──extending-doris\n│          └──udf\n│            └──contrib\n│              ├── udf-simple-manual.md\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("将两个使用手册的文件，加入中文和英文的 sidebar 中。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('vi docs/.vuepress/sidebar/zh-CN.js\n{\n    title: "用户贡献的 UDF",\n    directoryPath: "contrib/",\n    children:\n    [\n        "udf-simple-manual",\n    ],\n},\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('vi docs/.vuepress/sidebar/en.js\n{\n    title: "Users contribute UDF",\n    directoryPath: "contrib/",\n    children:\n    [\n        "udf-simple-manual",\n    ],\n},\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"贡献-udf-到社区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贡献-udf-到社区"}},[s._v("#")]),s._v(" 贡献 UDF 到社区")]),s._v(" "),e("p",[s._v("当你符合前提条件并准备好代码，文档后就可以将 UDF 贡献到 Doris 社区了。在  "),e("a",{attrs:{href:"https://github.com/apache/incubator-doris",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),e("OutboundLink")],1),s._v(" 上面提交 Pull Request (PR) 即可。具体提交方式见："),e("a",{attrs:{href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pull Request (PR)"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("p",[s._v("最后，当 PR 评审通过并 Merge 后。恭喜你，你的 UDF 已经贡献给 Doris 社区，你可以在 "),e("a",{attrs:{href:"http://doris.apache.org/master/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Doris 官网"),e("OutboundLink")],1),s._v(" 的扩展功能部分查看到啦~。")])])}),[],!1,null,null,null);a.default=t.exports}}]);