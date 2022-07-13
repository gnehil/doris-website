(window.webpackJsonp=window.webpackJsonp||[]).push([[2362],{2989:function(t,a,e){"use strict";e.r(a);var v=e(15),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),e("p",[t._v("如果我们需要修改或更新 Doris 中的数据，就可以使用 UPDATE 命令来操作。")]),t._v(" "),e("h2",{attrs:{id:"适用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),e("ul",[e("li",[t._v("对满足某些条件的行，修改他的取值。")]),t._v(" "),e("li",[t._v("点更新，小范围更新，待更新的行最好是整个表的非常小一部分。")]),t._v(" "),e("li",[t._v("update 命令只能在 Unique 数据模型的表中操作。")])]),t._v(" "),e("h2",{attrs:{id:"名词解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),e("ol",[e("li",[t._v("Unique 模型：Doris 系统中的一种数据模型。将列分为两类，Key 和 Value。当用户导入相同 Key 的行时，后者的 Value 会覆盖已有的 Value。与 Mysql 中的 Unique 含义一致。")])]),t._v(" "),e("h2",{attrs:{id:"基本原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[t._v("#")]),t._v(" 基本原理")]),t._v(" "),e("p",[t._v("利用查询引擎自身的 where 过滤逻辑，从待更新表中筛选出需要被更新的行。再利用 Unique 模型自带的 Value 列新数据替换旧数据的逻辑，将待更新的行变更后，再重新插入到表中。从而实现行级别更新。")]),t._v(" "),e("p",[t._v("举例说明")]),t._v(" "),e("p",[t._v("假设 Doris 中存在一张订单表，其中 订单id 是 Key 列，订单状态，订单金额是 Value 列。数据状态如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("订单id")]),t._v(" "),e("th",[t._v("订单金额")]),t._v(" "),e("th",[t._v("订单状态")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("100")]),t._v(" "),e("td",[t._v("待付款")])])])]),t._v(" "),e("p",[t._v("这时候，用户点击付款后，Doris 系统需要将订单id 为 '1' 的订单状态变更为 '待发货', 就需要用到 Update 功能。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("UPDATE order SET 订单状态='待发货' WHERE 订单id=1;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("用户执行 UPDATE 命令后，系统会进行如下三步：")]),t._v(" "),e("ul",[e("li",[t._v("第一步：读取满足 WHERE 订单id=1 的行\n（1，100，'待付款'）")]),t._v(" "),e("li",[t._v("第二步：变更该行的订单状态，从'待付款'改为'待发货'\n（1，100，'待发货'）")]),t._v(" "),e("li",[t._v("第三步：将更新后的行再插入回表中，从而达到更新的效果。\n|订单id | 订单金额| 订单状态|\n|---|---|---|\n| 1 | 100| 待付款 |\n| 1 | 100 | 待发货 |\n由于表 order 是 UNIQUE 模型，所以相同 Key 的行，之后后者才会生效，所以最终效果如下：\n|订单id | 订单金额| 订单状态|\n|---|---|---|\n| 1 | 100 | 待发货 |")])]),t._v(" "),e("h2",{attrs:{id:"基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[t._v("#")]),t._v(" 基本操作")]),t._v(" "),e("h3",{attrs:{id:"update-语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-语法"}},[t._v("#")]),t._v(" UPDATE 语法")]),t._v(" "),e("p",[e("code",[t._v("UPDATE table_name SET value=xxx WHERE condition;")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("table_name")]),t._v(": 待更新的表，必须是 UNIQUE 模型的表才能进行更新。")])]),t._v(" "),e("li",[e("p",[t._v("value=xxx: 待更新的列，等式左边必须是表的 value 列。等式右边可以是常量，也可以是某个表中某列的表达式变换。\n比如 value = 1, 则待更新的列值会变为1。\n比如 value = value +1， 则待更新的列值会自增1。")])]),t._v(" "),e("li",[e("p",[t._v("condition：只有满足 condition 的行才会被更新。condition 必须是一个结果为 Boolean 类型的表达式。\n比如 k1 = 1, 则只有当 k1 列值为1的行才会被更新。\n比如 k1 = k2, 则只有 k1 列值和 k2 列一样的行才会被更新。\n不支持不填写condition，也就是不支持全表更新。")])])]),t._v(" "),e("h3",{attrs:{id:"同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[t._v("#")]),t._v(" 同步")]),t._v(" "),e("p",[t._v("Update 语法在 Doris 中是一个同步语法，既 Update 语句成功，更新就成功了，数据可见。")]),t._v(" "),e("h3",{attrs:{id:"性能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),e("p",[t._v("Update 语句的性能和待更新的行数，以及 condition 的检索效率密切相关。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("待更新的行数：待更新的行数越多，Update 语句的速度就会越慢。这和导入的原理是一致的。\nDoris 的更新比较合适偶发更新的场景，比如修改个别行的值。\nDoris 并不适合大批量的修改数据。大批量修改会使得 Update 语句运行时间很久。")])]),t._v(" "),e("li",[e("p",[t._v("condition 的检索效率：Doris 的 Update 实现原理是先将满足 condition 的行读取处理，所以如果 condition 的检索效率高，则 Update 的速度也会快。\ncondition 列最好能命中，索引或者分区分桶裁剪。这样 Doris 就不需要扫全表，可以快速定位到需要更新的行。从而提升更新效率。\n强烈不推荐 condition 列中包含 UNIQUE 模型的 value 列。")])])]),t._v(" "),e("h3",{attrs:{id:"并发控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#并发控制"}},[t._v("#")]),t._v(" 并发控制")]),t._v(" "),e("p",[t._v("默认情况下，并不允许同一时间对同一张表并发进行多个 Update 操作。")]),t._v(" "),e("p",[t._v("主要原因是，Doris 目前支持的是行更新，这意味着，即使用户声明的是 "),e("code",[t._v("SET v2 = 1")]),t._v("，实际上，其他所有的 Value 列也会被覆盖一遍（尽管值没有变化）。")]),t._v(" "),e("p",[t._v("这就会存在一个问题，如果同时有两个 Update 操作对同一行进行更新，那么其行为可能是不确定的。也就是可能存在脏数据。")]),t._v(" "),e("p",[t._v("但在实际应用中，如果用户自己可以保证即使并发更新，也不会同时对同一行进行操作的话，就可以手动打开并发限制。通过修改 FE 配置 "),e("code",[t._v("enable_concurrent_update")]),t._v("。当配置值为 true 时，则对更新并发无限制。")]),t._v(" "),e("h2",{attrs:{id:"使用风险"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用风险"}},[t._v("#")]),t._v(" 使用风险")]),t._v(" "),e("p",[t._v("由于 Doris 目前支持的是行更新，并且采用的是读取后再写入的两步操作，则如果 Update 语句和其他导入或 Delete 语句刚好修改的是同一行时，存在不确定的数据结果。")]),t._v(" "),e("p",[t._v("所以用户在使用的时候，一定要注意"),e("em",[t._v("用户侧自己")]),t._v("进行 Update 语句和其他 DML 语句的并发控制。")]),t._v(" "),e("h2",{attrs:{id:"版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),e("p",[t._v("Doris Version 0.15.x +")])])}),[],!1,null,null,null);a.default=_.exports}}]);