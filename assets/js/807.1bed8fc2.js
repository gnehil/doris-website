(window.webpackJsonp=window.webpackJsonp||[]).push([[807],{1435:function(t,s,a){"use strict";a.r(s);var r=a(15),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据更新"}},[t._v("#")]),t._v(" 数据更新")]),t._v(" "),a("p",[t._v("本文主要讲述如果我们需要修改或更新Doris中的数据，如何使用UPDATE命令来操作。数据更新对Doris的版本有限制，只能在Doris "),a("strong",[t._v("Version 0.15.x +")]),t._v("  才可以使用。")]),t._v(" "),a("h2",{attrs:{id:"适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),a("ul",[a("li",[t._v("对满足某些条件的行，修改他的取值；")]),t._v(" "),a("li",[t._v("点更新，小范围更新，待更新的行最好是整个表的非常小的一部分；")]),t._v(" "),a("li",[t._v("update 命令只能在 Unique 数据模型的表中执行。")])]),t._v(" "),a("h2",{attrs:{id:"基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[t._v("#")]),t._v(" 基本原理")]),t._v(" "),a("p",[t._v("利用查询引擎自身的 where 过滤逻辑，从待更新表中筛选出需要被更新的行。再利用 Unique 模型自带的 Value 列新数据替换旧数据的逻辑，将待更新的行变更后，再重新插入到表中，从而实现行级别更新。")]),t._v(" "),a("h3",{attrs:{id:"同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[t._v("#")]),t._v(" 同步")]),t._v(" "),a("p",[t._v("Update 语法在Doris中是一个同步语法，即 Update 语句执行成功，更新操作也就完成了，数据是可见的。")]),t._v(" "),a("h3",{attrs:{id:"性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),a("p",[t._v("Update 语句的性能和待更新的行数以及 condition 的检索效率密切相关。")]),t._v(" "),a("ul",[a("li",[t._v("待更新的行数：待更新的行数越多，Update 语句的速度就会越慢。这和导入的原理是一致的。 Doris 的更新比较合适偶发更新的场景，比如修改个别行的值。 Doris 并不适合大批量的修改数据。大批量修改会使得 Update 语句运行时间很久。")]),t._v(" "),a("li",[t._v("condition 的检索效率：Doris 的 Update 实现原理是先将满足 condition 的行读取处理，所以如果 condition 的检索效率高，则 Update 的速度也会快。 condition 列最好能命中索引或者分区分桶裁剪，这样 Doris 就不需要扫全表，可以快速定位到需要更新的行，从而提升更新效率。 "),a("strong",[t._v("强烈不推荐 condition 列中包含 UNIQUE 模型的 value 列")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"并发控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发控制"}},[t._v("#")]),t._v(" 并发控制")]),t._v(" "),a("p",[t._v("默认情况下，并不允许同一时间对同一张表并发进行多个 Update 操作。")]),t._v(" "),a("p",[t._v("主要原因是，Doris 目前支持的是行更新，这意味着，即使用户声明的是 "),a("code",[t._v("SET v2 = 1")]),t._v("，实际上，其他所有的 Value 列也会被覆盖一遍（尽管值没有变化）。")]),t._v(" "),a("p",[t._v("这就会存在一个问题，如果同时有两个 Update 操作对同一行进行更新，那么其行为可能是不确定的，也就是可能存在脏数据。")]),t._v(" "),a("p",[t._v("但在实际应用中，如果用户自己可以保证即使并发更新，也不会同时对同一行进行操作的话，就可以手动打开并发限制。通过修改 FE 配置 "),a("code",[t._v("enable_concurrent_update")]),t._v("，当配置值为 true 时，则对更新并发无限制。")]),t._v(" "),a("h2",{attrs:{id:"使用风险"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用风险"}},[t._v("#")]),t._v(" 使用风险")]),t._v(" "),a("p",[t._v("由于 Doris 目前支持的是行更新，并且采用的是读取后再写入的两步操作，则如果 Update 语句和其他导入或 Delete 语句刚好修改的是同一行时，存在不确定的数据结果。")]),t._v(" "),a("p",[t._v("所以用户在使用的时候，一定要注意"),a("strong",[t._v("用户侧自己")]),t._v("进行 Update 语句和其他 DML 语句的并发控制。")]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("p",[t._v("假设 Doris 中存在一张订单表，其中 订单id 是 Key 列，订单状态，订单金额是 Value 列。数据状态如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("订单id")]),t._v(" "),a("th",[t._v("订单金额")]),t._v(" "),a("th",[t._v("订单状态")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("待付款")])])])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------+--------------+--------------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" order_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" order_amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" order_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------+--------------+--------------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 待付款       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------+--------------+--------------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("row")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("这时候，用户点击付款后，Doris 系统需要将订单id 为 '1' 的订单状态变更为 '待发货'，就需要用到 Update 功能。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" test_order "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" order_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'待发货'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" order_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nQuery OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("row")]),t._v(" affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.11")]),t._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n{"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'label'")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update_20ae22daf0354fe0-b5aceeaaddc666c5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'status'")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VISIBLE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'txnId'")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'33'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'queryId'")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20ae22daf0354fe0-b5aceeaaddc666c5'")]),t._v("}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("更新后结果如下")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------+--------------+--------------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" order_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" order_amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" order_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------+--------------+--------------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 待发货       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------+--------------+--------------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("row")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("用户执行 UPDATE 命令后，系统会进行如下三步：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第一步：读取满足 WHERE 订单id=1 的行 （1，100，'待付款'）")])]),t._v(" "),a("li",[a("p",[t._v("第二步：变更该行的订单状态，从'待付款'改为'待发货' （1，100，'待发货'）")])]),t._v(" "),a("li",[a("p",[t._v("第三步：将更新后的行再插入回表中，从而达到更新的效果。")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("订单id")]),t._v(" "),a("th",[t._v("订单金额")]),t._v(" "),a("th",[t._v("订单状态")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("待付款")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("待发货")])])])]),t._v(" "),a("p",[t._v("由于表 test_order 是 UNIQUE 模型，所以相同 Key 的行，之后后者才会生效，所以最终效果如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("订单id")]),t._v(" "),a("th",[t._v("订单金额")]),t._v(" "),a("th",[t._v("订单状态")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("待发货")])])])]),t._v(" "),a("h2",{attrs:{id:"更多帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[t._v("#")]),t._v(" 更多帮助")]),t._v(" "),a("p",[t._v("关于 "),a("strong",[t._v("数据更新")]),t._v(" 使用的更多详细语法，请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE.html"}},[t._v("update")]),t._v(" 命令手册，也可以在Mysql客户端命令行下输入 "),a("code",[t._v("HELP UPDATE")]),t._v(" 获取更多帮助信息。")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);