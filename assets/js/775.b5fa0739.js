(window.webpackJsonp=window.webpackJsonp||[]).push([[775],{1204:function(t,s,a){"use strict";a.r(s);var v=a(2),e=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"导入的数据转换、列映射及过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入的数据转换、列映射及过滤"}},[t._v("#")]),t._v(" 导入的数据转换、列映射及过滤")]),t._v(" "),a("h2",{attrs:{id:"支持的导入方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的导入方式"}},[t._v("#")]),t._v(" 支持的导入方式")]),t._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD.html"}},[t._v("BROKER LOAD")])],1),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" LABEL example_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INFILE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bos://bucket/input/file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("my_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tmpk3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRECEDING")]),t._v(" FILTER k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        k3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmpk3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" k2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" BROKER bos\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD.html"}},[t._v("STREAM LOAD")])],1),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("\n--location-trusted\n-u user:passwd\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"columns: k1, k2, tmpk3, k3 = tmpk3 + 1"')]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"where: k1 > k2"')]),t._v("\n-T file.txt\nhttp://host:port/api/testDb/testTbl/_stream_load\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD.html"}},[t._v("ROUTINE LOAD")])],1),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROUTINE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" example_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" my_table\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMNS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tmpk3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmpk3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRECEDING")]),t._v(" FILTER k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" k2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])]),t._v(" "),a("p",[t._v("以上导入方式都支持对源数据进行列映射、转换和过滤操作：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("前置过滤：对读取到的原始数据进行一次过滤。")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PRECEDING FILTER k1 = 1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("映射：定义源数据中的列。如果定义的列名和表中的列相同，则直接映射为表中的列。如果不同，则这个被定义的列可以用于之后的转换操作。如上面示例中的：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(k1, k2, tmpk3)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("转换：将第一步中经过映射的列进行转换，可以使用内置表达式、函数、自定义函数进行转化，并重新映射到表中对应的列上。如上面示例中的：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("k3 = tmpk3 + 1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("后置过滤：对经过映射和转换后的列，通过表达式进行过滤。被过滤的数据行不会导入到系统中。如上面示例中的：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("WHERE k1 > k2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"列映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列映射"}},[t._v("#")]),t._v(" 列映射")]),t._v(" "),a("p",[t._v("列映射的目的主要是描述导入文件中各个列的信息，相当于为源数据中的列定义名称。通过描述列映射关系，我们可以将于表中列顺序不同、列数量不同的源文件导入到 Doris 中。下面我们通过示例说明：")]),t._v(" "),a("p",[t._v("假设源文件有4列，内容如下（表头列名仅为方便表述，实际并无表头）：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("列1")]),t._v(" "),a("th",[t._v("列2")]),t._v(" "),a("th",[t._v("列3")]),t._v(" "),a("th",[t._v("列4")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("beijing")]),t._v(" "),a("td",[t._v("1.1")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("shanghai")]),t._v(" "),a("td",[t._v("1.2")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("300")]),t._v(" "),a("td",[t._v("guangzhou")]),t._v(" "),a("td",[t._v("1.3")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("\\N")]),t._v(" "),a("td",[t._v("chongqing")]),t._v(" "),a("td",[t._v("1.4")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("注："),a("code",[t._v("\\N")]),t._v(" 在源文件中表示 null。")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("调整映射顺序")]),t._v(" "),a("p",[t._v("假设表中有 "),a("code",[t._v("k1,k2,k3,k4")]),t._v(" 4列。我们希望的导入映射关系如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("列1 -> k1\n列2 -> k3\n列3 -> k2\n列4 -> k4\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("则列映射的书写顺序应如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(k1, k3, k2, k4)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("源文件中的列数量多于表中的列")]),t._v(" "),a("p",[t._v("假设表中有 "),a("code",[t._v("k1,k2,k3")]),t._v(" 3列。我们希望的导入映射关系如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("列1 -> k1\n列2 -> k3\n列3 -> k2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("则列映射的书写顺序应如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(k1, k3, k2, tmpk4)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("其中 "),a("code",[t._v("tmpk4")]),t._v(" 为一个自定义的、表中不存在的列名。Doris 会忽略这个不存在的列名。")])]),t._v(" "),a("li",[a("p",[t._v("源文件中的列数量少于表中的列，使用默认值填充")]),t._v(" "),a("p",[t._v("假设表中有 "),a("code",[t._v("k1,k2,k3,k4,k5")]),t._v(" 5列。我们希望的导入映射关系如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("列1 -> k1\n列2 -> k3\n列3 -> k2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这里我们仅使用源文件中的前3列。"),a("code",[t._v("k4,k5")]),t._v(" 两列希望使用默认值填充。")]),t._v(" "),a("p",[t._v("则列映射的书写顺序应如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(k1, k3, k2)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果 "),a("code",[t._v("k4,k5")]),t._v(" 列有默认值，则会填充默认值。否则如果是 "),a("code",[t._v("nullable")]),t._v(" 的列，则会填充 "),a("code",[t._v("null")]),t._v(" 值。否则，导入作业会报错。")])])]),t._v(" "),a("h2",{attrs:{id:"列前置过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列前置过滤"}},[t._v("#")]),t._v(" 列前置过滤")]),t._v(" "),a("p",[t._v("前置过滤是对读取到的原始数据进行一次过滤。目前仅支持 BROKER LOAD 和 ROUTINE LOAD。")]),t._v(" "),a("p",[t._v("前置过滤有以下应用场景：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("转换前做过滤")]),t._v(" "),a("p",[t._v("希望在列映射和转换前做过滤的场景。能够先行过滤掉部分不需要的数据。")])]),t._v(" "),a("li",[a("p",[t._v("过滤列不存在于表中，仅作为过滤标识")]),t._v(" "),a("p",[t._v("比如源数据中存储了多张表的数据（或者多张表的数据写入了同一个 Kafka 消息队列）。数据中每行有一列表名来标识该行数据属于哪个表。用户可以通过前置过滤条件来筛选对应的表数据进行导入。")])])]),t._v(" "),a("h2",{attrs:{id:"列转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列转换"}},[t._v("#")]),t._v(" 列转换")]),t._v(" "),a("p",[t._v("列转换功能允许用户对源文件中列值进行变换。目前 Doris 支持使用绝大部分内置函数、用户自定义函数进行转换。")]),t._v(" "),a("blockquote",[a("p",[t._v("注：自定义函数隶属于某一数据库下，在使用自定义函数进行转换时，需要用户对这个数据库有读权限。")])]),t._v(" "),a("p",[t._v("转换操作通常是和列映射一起定义的。即先对列进行映射，再进行转换。下面我们通过示例说明：")]),t._v(" "),a("p",[t._v("假设源文件有4列，内容如下（表头列名仅为方便表述，实际并无表头）：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("列1")]),t._v(" "),a("th",[t._v("列2")]),t._v(" "),a("th",[t._v("列3")]),t._v(" "),a("th",[t._v("列4")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("beijing")]),t._v(" "),a("td",[t._v("1.1")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("shanghai")]),t._v(" "),a("td",[t._v("1.2")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("300")]),t._v(" "),a("td",[t._v("guangzhou")]),t._v(" "),a("td",[t._v("1.3")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("400")]),t._v(" "),a("td",[t._v("chongqing")]),t._v(" "),a("td",[t._v("1.4")])])])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("将源文件中的列值经转换后导入表中")]),t._v(" "),a("p",[t._v("假设表中有 "),a("code",[t._v("k1,k2,k3,k4")]),t._v(" 4列。我们希望的导入映射和转换关系如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("列1       -> k1\n列2 * 100 -> k3\n列3       -> k2\n列4       -> k4\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("则列映射的书写顺序应如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(k1, tmpk3, k2, k4, k3 = tmpk3 * 100)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这里相当于我们将源文件中的第2列命名为 "),a("code",[t._v("tmpk3")]),t._v("，同时指定表中 "),a("code",[t._v("k3")]),t._v(" 列的值为 "),a("code",[t._v("tmpk3 * 100")]),t._v("。最终表中的数据如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("k1")]),t._v(" "),a("th",[t._v("k2")]),t._v(" "),a("th",[t._v("k3")]),t._v(" "),a("th",[t._v("k4")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("beijing")]),t._v(" "),a("td",[t._v("10000")]),t._v(" "),a("td",[t._v("1.1")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("shanghai")]),t._v(" "),a("td",[t._v("20000")]),t._v(" "),a("td",[t._v("1.2")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("guangzhou")]),t._v(" "),a("td",[t._v("30000")]),t._v(" "),a("td",[t._v("1.3")])]),t._v(" "),a("tr",[a("td",[t._v("null")]),t._v(" "),a("td",[t._v("chongqing")]),t._v(" "),a("td",[t._v("40000")]),t._v(" "),a("td",[t._v("1.4")])])])])]),t._v(" "),a("li",[a("p",[t._v("通过 case when 函数，有条件的进行列转换。")]),t._v(" "),a("p",[t._v("假设表中有 "),a("code",[t._v("k1,k2,k3,k4")]),t._v(" 4列。我们希望对于源数据中的 "),a("code",[t._v("beijing, shanghai, guangzhou, chongqing")]),t._v(" 分别转换为对应的地区id后导入：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("列1                  -> k1\n列2                  -> k2\n列3 进行地区id转换后    -> k3\n列4                  -> k4\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("则列映射的书写顺序应如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("最终表中的数据如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("k1")]),t._v(" "),a("th",[t._v("k2")]),t._v(" "),a("th",[t._v("k3")]),t._v(" "),a("th",[t._v("k4")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1.1")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("1.2")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("300")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("1.3")])]),t._v(" "),a("tr",[a("td",[t._v("null")]),t._v(" "),a("td",[t._v("400")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("1.4")])])])])]),t._v(" "),a("li",[a("p",[t._v("将源文件中的 null 值转换成 0 导入。同时也进行示例2中的地区id转换。")]),t._v(" "),a("p",[t._v("假设表中有 "),a("code",[t._v("k1,k2,k3,k4")]),t._v(" 4列。在对地区id转换的同时，我们也希望对于源数据中 k1 列的 null 值转换成 0 导入：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("列1 如果为null 则转换成0   -> k1\n列2                      -> k2\n列3                      -> k3\n列4                      -> k4\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("则列映射的书写顺序应如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('(tmpk1, k2, tmpk3, k4, k1 = ifnull(tmpk1, 0), k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("最终表中的数据如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("k1")]),t._v(" "),a("th",[t._v("k2")]),t._v(" "),a("th",[t._v("k3")]),t._v(" "),a("th",[t._v("k4")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1.1")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("1.2")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("300")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("1.3")])]),t._v(" "),a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("400")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("1.4")])])])])])]),t._v(" "),a("h2",{attrs:{id:"列过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列过滤"}},[t._v("#")]),t._v(" 列过滤")]),t._v(" "),a("p",[t._v("经过列映射和转换后，我们可以通过过滤条件将不希望导入到Doris中的数据进行过滤。下面我们通过示例说明：")]),t._v(" "),a("p",[t._v("假设源文件有4列，内容如下（表头列名仅为方便表述，实际并无表头）：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("列1")]),t._v(" "),a("th",[t._v("列2")]),t._v(" "),a("th",[t._v("列3")]),t._v(" "),a("th",[t._v("列4")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("beijing")]),t._v(" "),a("td",[t._v("1.1")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("shanghai")]),t._v(" "),a("td",[t._v("1.2")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("300")]),t._v(" "),a("td",[t._v("guangzhou")]),t._v(" "),a("td",[t._v("1.3")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("400")]),t._v(" "),a("td",[t._v("chongqing")]),t._v(" "),a("td",[t._v("1.4")])])])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在列映射和转换缺省的情况下，直接过滤")]),t._v(" "),a("p",[t._v("假设表中有 "),a("code",[t._v("k1,k2,k3,k4")]),t._v(" 4列。我们可以在缺省列映射和转换的情况下，直接定义过滤条件。如我们希望只导入源文件中第4列为大于 1.2 的数据行，则过滤条件如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("where k4 > 1.2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("最终表中的数据如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("k1")]),t._v(" "),a("th",[t._v("k2")]),t._v(" "),a("th",[t._v("k3")]),t._v(" "),a("th",[t._v("k4")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("300")]),t._v(" "),a("td",[t._v("guangzhou")]),t._v(" "),a("td",[t._v("1.3")])]),t._v(" "),a("tr",[a("td",[t._v("null")]),t._v(" "),a("td",[t._v("400")]),t._v(" "),a("td",[t._v("chongqing")]),t._v(" "),a("td",[t._v("1.4")])])])]),t._v(" "),a("p",[t._v("缺省情况下，Doris 会按照顺序进行列映射，因此源文件中的第4列自动被映射到表中的 "),a("code",[t._v("k4")]),t._v(" 列。")])]),t._v(" "),a("li",[a("p",[t._v("对经过列转换的数据进行过滤")]),t._v(" "),a("p",[t._v("假设表中有 "),a("code",[t._v("k1,k2,k3,k4")]),t._v(" 4列。在 "),a("strong",[t._v("列转换")]),t._v(" 示例中，我们将省份名称转换成了id。这里我们想过滤掉 id 为 3 的数据。则转换、过滤条件如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\nwhere k3 != 3\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("最终表中的数据如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("k1")]),t._v(" "),a("th",[t._v("k2")]),t._v(" "),a("th",[t._v("k3")]),t._v(" "),a("th",[t._v("k4")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1.1")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("1.2")])]),t._v(" "),a("tr",[a("td",[t._v("null")]),t._v(" "),a("td",[t._v("400")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("1.4")])])])]),t._v(" "),a("p",[t._v("这里我们看到，执行过滤时的列值，为经过映射和转换后的最终列值，而不是原始数据。")])]),t._v(" "),a("li",[a("p",[t._v("多条件过滤")]),t._v(" "),a("p",[t._v("假设表中有 "),a("code",[t._v("k1,k2,k3,k4")]),t._v(" 4列。我们想过滤掉 "),a("code",[t._v("k1")]),t._v(" 列为 "),a("code",[t._v("null")]),t._v(" 的数据，同时过滤掉 "),a("code",[t._v("k4")]),t._v(" 列小于 1.2 的数据，则过滤条件如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("where k1 is null and k4 &lt; 1.2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("最终表中的数据如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("k1")]),t._v(" "),a("th",[t._v("k2")]),t._v(" "),a("th",[t._v("k3")]),t._v(" "),a("th",[t._v("k4")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("1.2")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("300")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("1.3")])])])])])]),t._v(" "),a("h3",{attrs:{id:"数据质量问题和过滤阈值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据质量问题和过滤阈值"}},[t._v("#")]),t._v(" 数据质量问题和过滤阈值")]),t._v(" "),a("p",[t._v("导入作业中被处理的数据行可以分为如下三种：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Filtered Rows")]),t._v(" "),a("p",[t._v("因数据质量不合格而被过滤掉的数据。数据质量不合格包括类型错误、精度错误、字符串长度超长、文件列数不匹配等数据格式问题，以及因没有对应的分区而被过滤掉的数据行。")])]),t._v(" "),a("li",[a("p",[t._v("Unselected Rows")]),t._v(" "),a("p",[t._v("这部分为因 "),a("code",[t._v("preceding filter")]),t._v(" 或 "),a("code",[t._v("where")]),t._v(" 列过滤条件而被过滤掉的数据行。")])]),t._v(" "),a("li",[a("p",[t._v("Loaded Rows")]),t._v(" "),a("p",[t._v("被正确导入的数据行。")])])]),t._v(" "),a("p",[t._v("Doris 的导入任务允许用户设置最大错误率（"),a("code",[t._v("max_filter_ratio")]),t._v("）。如果导入的数据的错误率低于阈值，则这些错误行将被忽略，其他正确的数据将被导入。")]),t._v(" "),a("p",[t._v("错误率的计算方式为：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#Filtered Rows / (#Filtered Rows + #Loaded Rows)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("也就是说 "),a("code",[t._v("Unselected Rows")]),t._v(" 不会参与错误率的计算。")])])}),[],!1,null,null,null);s.default=e.exports}}]);