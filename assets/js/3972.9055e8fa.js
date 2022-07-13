(window.webpackJsonp=window.webpackJsonp||[]).push([[3972],{4601:function(e,a,t){"use strict";t.r(a);var s=t(15),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"java-代码格式化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-代码格式化"}},[e._v("#")]),e._v(" Java 代码格式化")]),e._v(" "),t("p",[e._v("Doris 中 Java 部分代码的格式化工作通常有 IDE 来自动完成。这里仅列举通用格式规则，开发这需要根据格式规则，在不同 IDE 中设置对应的代码风格。")]),e._v(" "),t("h2",{attrs:{id:"import-order"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-order"}},[e._v("#")]),e._v(" Import Order")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("org.apache.doris\n<blank line>\nthird party package\n<blank line>\nstandard java package\n<blank line>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("ul",[t("li",[e._v("禁止使用 "),t("code",[e._v("import *")])]),e._v(" "),t("li",[e._v("禁止使用 "),t("code",[e._v("import static")])])]),e._v(" "),t("h2",{attrs:{id:"编译时检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译时检查"}},[e._v("#")]),e._v(" 编译时检查")]),e._v(" "),t("p",[e._v("现在，在使用"),t("code",[e._v("maven")]),e._v("进行编译时，会默认进行"),t("code",[e._v("CheckStyle")]),e._v("检查。此检查会略微降低编译速度。如果想跳过此检查，请使用如下命令进行编译")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mvn clean install -DskipTests -Dcheckstyle.skip\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"checkstyle-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkstyle-插件"}},[e._v("#")]),e._v(" Checkstyle 插件")]),e._v(" "),t("p",[e._v("现在的 "),t("code",[e._v("CI")]),e._v(" 之中会有 "),t("code",[e._v("formatter-check")]),e._v(" 进行代码格式化检测。")]),e._v(" "),t("h3",{attrs:{id:"idea"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#idea"}},[e._v("#")]),e._v(" IDEA")]),e._v(" "),t("p",[e._v("如果使用 "),t("code",[e._v("IDEA")]),e._v(" 进行 Java 开发，请在设置中安装 "),t("code",[e._v("Checkstyle-IDEA")]),e._v(" 插件。")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("Tools->Checkstyle")]),e._v(" 的 "),t("code",[e._v("Configuration File")]),e._v(" 里点击 "),t("code",[e._v("Use a local Checkstyle file")]),e._v("，选择项目的 "),t("code",[e._v("fe/check/checkstyle/checkstyle.xml")]),e._v(" 文件。")]),e._v(" "),t("p",[t("strong",[e._v("注意：")]),e._v(" 保证"),t("code",[e._v("Checkstyle")]),e._v("的版本在9.3及以上（推荐使用最新版本）。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/images/idea-checkstyle-version.png"),alt:""}}),e._v(" "),t("p",[t("strong",[e._v("可以使用 "),t("code",[e._v("Checkstyle-IDEA")]),e._v(" 插件来对代码进行 "),t("code",[e._v("Checkstyle")]),e._v(" 检测")]),e._v("。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/images/idea-checkstyle-plugin-cn.png"),alt:""}}),e._v(" "),t("h3",{attrs:{id:"vs-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs-code"}},[e._v("#")]),e._v(" VS Code")]),e._v(" "),t("p",[e._v("如果使用 VS Code 进行 Java 开发，请安装 "),t("code",[e._v("Checkstyle for Java")]),e._v(" 插件，按照"),t("a",{attrs:{href:"https://code.visualstudio.com/docs/java/java-linting",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),t("OutboundLink")],1),e._v("里的说明和动图进行配置。")]),e._v(" "),t("h2",{attrs:{id:"idea-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#idea-2"}},[e._v("#")]),e._v(" IDEA")]),e._v(" "),t("h3",{attrs:{id:"自动格式化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动格式化"}},[e._v("#")]),e._v(" 自动格式化")]),e._v(" "),t("p",[e._v("推荐使用 "),t("code",[e._v("IDEA")]),e._v(" 的自动格式化功能。")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("Preferences->Editor->Code Style->Java")]),e._v(" 的配置标识点击 "),t("code",[e._v("Import Scheme")]),e._v("，点击 "),t("code",[e._v("IntelliJ IDEA code style XML")]),e._v("，选择项目的 "),t("code",[e._v("build-support/IntelliJ-code-format.xml")]),e._v(" 文件。")]),e._v(" "),t("h3",{attrs:{id:"rearrange-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rearrange-code"}},[e._v("#")]),e._v(" Rearrange Code")]),e._v(" "),t("p",[e._v("Checkstyle 会按照 "),t("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase/codeconventions-fileorganization.html#1852",target:"_blank",rel:"noopener noreferrer"}},[e._v("Class and Interface Declarations"),t("OutboundLink")],1),e._v(" 检测代码的 declarations 顺序。")]),e._v(" "),t("p",[e._v("在导入上面的 "),t("code",[e._v("build-support/IntelliJ-code-format.xml")]),e._v(" 文件后，使用 "),t("code",[e._v("Code/Rearrange Code")]),e._v(" 自动完成排序")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/images/idea-rearrange-code.png"),alt:""}}),e._v(" "),t("h2",{attrs:{id:"remove-unused-header"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-unused-header"}},[e._v("#")]),e._v(" Remove unused header")]),e._v(" "),t("p",[e._v("默认快捷键 "),t("strong",[e._v("CTRL + ALT + O ---\x3e")]),e._v(" 仅仅删除未使用的导入。")]),e._v(" "),t("p",[e._v("自动移除并且 Reorder ：")]),e._v(" "),t("p",[e._v("点击 "),t("code",[e._v("Preferences->Editor->General->Auto Import->Optimize Imports on the Fly")])])])}),[],!1,null,null,null);a.default=r.exports}}]);