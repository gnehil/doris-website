(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{651:function(e,s,n){"use strict";n.r(s);var t=n(2),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"contribute-udf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contribute-udf"}},[e._v("#")]),e._v(" Contribute UDF")]),e._v(" "),n("p",[e._v("This manual mainly introduces how external users can contribute their own UDF functions to the Doris community.")]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("UDF function is universal")]),e._v(" "),n("p",[e._v("The versatility here mainly refers to: UDF functions are widely used in certain business scenarios. Such UDF functions are valuable and can be used directly by other users in the community.")]),e._v(" "),n("p",[e._v("If you are not sure whether the UDF function you wrote is universal, you can send an email to "),n("code",[e._v("dev@doris.apache.org")]),e._v(" or directly create an ISSUE to initiate the discussion.")])]),e._v(" "),n("li",[n("p",[e._v("UDF has completed testing and is running normally in the user's production environment")])])]),e._v(" "),n("h2",{attrs:{id:"ready-to-work"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-work"}},[e._v("#")]),e._v(" Ready to work")]),e._v(" "),n("ol",[n("li",[e._v("UDF source code")]),e._v(" "),n("li",[e._v("User Manual of UDF")])]),e._v(" "),n("h3",{attrs:{id:"source-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#source-code"}},[e._v("#")]),e._v(" Source code")]),e._v(" "),n("p",[e._v("Create a folder for UDF functions under "),n("code",[e._v("contrib/udf/src/")]),e._v(", and store the source code and CMAKE files here. The source code to be contributed should include: "),n("code",[e._v(".h")]),e._v(", "),n("code",[e._v(".cpp")]),e._v(", "),n("code",[e._v("CMakeFile.txt")]),e._v(". Taking udf_samples as an example here, first create a new folder under the "),n("code",[e._v("contrib/udf/src/")]),e._v(" path and store the source code.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("   ├──contrib\n   │  └── udf\n   │    ├── CMakeLists.txt\n   │    └── src\n   │       └── udf_samples\n   │           ├── CMakeLists.txt\n   │           ├── uda_sample.cpp\n   │           ├── uda_sample.h\n   │           ├── udf_sample.cpp\n   │           └── udf_sample.h\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br")])]),n("ol",[n("li",[n("p",[e._v("CMakeLists.txt")]),e._v(" "),n("p",[e._v("After the user's "),n("code",[e._v("CMakeLists.txt")]),e._v(" is placed here, a small amount of changes are required. Just remove "),n("code",[e._v("include udf")]),e._v(" and "),n("code",[e._v("udf lib")]),e._v(". The reason for the removal is that it has been declared in the CMake file at the "),n("code",[e._v("contrib/udf")]),e._v(" level.")])])]),e._v(" "),n("h3",{attrs:{id:"manual"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manual"}},[e._v("#")]),e._v(" manual")]),e._v(" "),n("p",[e._v("The user manual needs to include: UDF function definition description, applicable scenarios, function syntax, how to compile UDF, how to use UDF in Doris, and use examples.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("The user manual must contain both Chinese and English versions and be stored under "),n("code",[e._v("docs/zh-CN/extending-doris/contrib/udf")]),e._v(" and "),n("code",[e._v("docs/en/extending-doris/contrib/udf")]),e._v(" respectively.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("├── docs\n│   └── zh-CN\n│       └──extending-doris\n│          └──udf\n│            └──contrib\n│              ├── udf-simple-manual.md\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("├── docs\n│   └── en\n│       └──extending-doris\n│          └──udf\n│            └──contrib\n│              ├── udf-simple-manual.md\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])])]),e._v(" "),n("li",[n("p",[e._v("Add the two manual files to the sidebar in Chinese and English.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('vi docs/.vuepress/sidebar/zh-CN.js\n{\n    title: "用户贡献的 UDF",\n    directoryPath: "contrib/",\n    children:\n    [\n        "udf-simple-manual",\n    ],\n},\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('vi docs/.vuepress/sidebar/en.js\n{\n    title: "Users contribute UDF",\n    directoryPath: "contrib/",\n    children:\n    [\n        "udf-simple-manual",\n    ],\n},\n\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])])])]),e._v(" "),n("h2",{attrs:{id:"contribute-udf-to-the-community"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contribute-udf-to-the-community"}},[e._v("#")]),e._v(" Contribute UDF to the community")]),e._v(" "),n("p",[e._v("When you meet the conditions and prepare the code, you can contribute UDF to the Doris community after the document. Simply submit the request (PR) on "),n("a",{attrs:{href:"https://github.com/apache/incubator-doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),n("OutboundLink")],1),e._v(". See the specific submission method: "),n("a",{attrs:{href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pull Request (PR)"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Finally, when the PR assessment is passed and merged. Congratulations, your UDF becomes a third-party UDF supported by Doris. You can check it out in the ecological expansion section of "),n("a",{attrs:{href:"/en"}},[e._v("Doris official website")]),e._v("~.")])])}),[],!1,null,null,null);s.default=a.exports}}]);