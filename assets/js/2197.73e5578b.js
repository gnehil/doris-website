(window.webpackJsonp=window.webpackJsonp||[]).push([[2197],{2824:function(s,a,n){"use strict";n.r(a);var e=n(15),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"group-by"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#group-by"}},[s._v("#")]),s._v(" GROUP BY")]),s._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),n("p",[s._v("GROUP BY "),n("code",[s._v("GROUPING SETS")]),s._v(" ｜ "),n("code",[s._v("CUBE")]),s._v(" ｜ "),n("code",[s._v("ROLLUP")]),s._v(" 是对 GROUP BY 子句的扩展，它能够在一个 GROUP BY 子句中实现多个集合的分组的聚合。其结果等价于将多个相应 GROUP BY 子句进行 UNION 操作。")]),s._v(" "),n("p",[s._v("GROUP BY 子句是只含有一个元素的 GROUP BY GROUPING SETS 的特例。\n例如，GROUPING SETS 语句：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("其查询结果等价于：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT a, b, SUM( c ) FROM tab1 GROUP BY a, b\nUNION\nSELECT a, null, SUM( c ) FROM tab1 GROUP BY a\nUNION\nSELECT null, b, SUM( c ) FROM tab1 GROUP BY b\nUNION\nSELECT null, null, SUM( c ) FROM tab1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("code",[s._v("GROUPING(expr)")]),s._v(" 指示一个列是否为聚合列，如果是聚合列为0，否则为1")]),s._v(" "),n("p",[n("code",[s._v("GROUPING_ID(expr [ , expr [ , ... ] ])")]),s._v(" 与GROUPING 类似， GROUPING_ID根据指定的column 顺序，计算出一个列列表的 bitmap 值，每一位为GROUPING的值. GROUPING_ID()函数返回位向量的十进制值。")]),s._v(" "),n("h3",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT ...\nFROM ...\n[ ... ]\nGROUP BY [\n    , ... |\n    GROUPING SETS [, ...] (  groupSet [ , groupSet [ , ... ] ] ) |\n    ROLLUP(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH ROLLUP |\n    CUBE(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH CUBE\n    ]\n[ ... ]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[s._v("#")]),s._v(" Parameters")]),s._v(" "),n("p",[n("code",[s._v("groupSet")]),s._v(" 表示 select list 中的列，别名或者表达式组成的集合 "),n("code",[s._v("groupSet ::= { ( expr [ , expr [ , ... ] ] )}")])]),s._v(" "),n("p",[n("code",[s._v("expr")]),s._v("  表示 select list 中的列，别名或者表达式")]),s._v(" "),n("h3",{attrs:{id:"note"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[s._v("#")]),s._v(" Note")]),s._v(" "),n("p",[s._v("doris 支持类似PostgreSQL 语法, 语法实例如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY ROLLUP(a,b,c)\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY CUBE(a,b,c)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("code",[s._v("ROLLUP(a,b,c)")]),s._v(" 等价于如下"),n("code",[s._v("GROUPING SETS")]),s._v(" 语句")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("GROUPING SETS (\n(a,b,c),\n( a, b ),\n( a),\n( )\n)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("code",[s._v("CUBE ( a, b, c )")]),s._v(" 等价于如下"),n("code",[s._v("GROUPING SETS")]),s._v(" 语句")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("GROUPING SETS (\n( a, b, c ),\n( a, b ),\n( a,    c ),\n( a       ),\n(    b, c ),\n(    b    ),\n(       c ),\n(         )\n)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),n("p",[s._v("下面是一个实际数据的例子")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("> SELECT * FROM t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\n> SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| a    | B    |         4 |\n| a    | A    |         3 |\n| b    | A    |         5 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n\n> SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n+------+------+---------------+----------------+\n| k1   | k2   | grouping_id(k1,k2) | sum(`k3`) |\n+------+------+---------------+----------------+\n| a    | A    |             0 |              3 |\n| a    | B    |             0 |              4 |\n| a    | NULL |             1 |              7 |\n| b    | A    |             0 |              5 |\n| b    | B    |             0 |              6 |\n| b    | NULL |             1 |             11 |\n| NULL | A    |             2 |              8 |\n| NULL | B    |             2 |             10 |\n| NULL | NULL |             3 |             18 |\n+------+------+---------------+----------------+\n9 rows in set (0.02 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br")])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[s._v("#")]),s._v(" keyword")]),s._v(" "),n("p",[s._v("GROUP, GROUPING, GROUPING_ID, GROUPING_SETS, GROUPING SETS, CUBE, ROLLUP")])])}),[],!1,null,null,null);a.default=t.exports}}]);