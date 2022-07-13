(window.webpackJsonp=window.webpackJsonp||[]).push([[1474],{2101:function(s,t,a){"use strict";a.r(t);var e=a(15),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"window-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-function"}},[s._v("#")]),s._v(" WINDOW FUNCTION")]),s._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),a("p",[s._v("Analytical functions(windown function) are a special class of built-in functions. Similar to aggregate functions, analytic functions also perform calculations on multiple input rows to obtain a data value. The difference is that the analytic function processes the input data within a specific window, rather than grouping calculations by group by. The data within each window can be sorted and grouped using the over() clause. The analytic function computes a single value for each row of the result set, rather than one value per group by grouping. This flexible approach allows the user to add additional columns to the select clause, giving the user more opportunities to reorganize and filter the result set. Analytic functions can only appear in select lists and in the outermost order by clause. During the query process, the analytical function will take effect at the end, that is, after the join, where and group by operations are performed. Analytical functions are often used in financial and scientific computing to analyze trends, calculate outliers, and perform bucket analysis on large amounts of data.")]),s._v(" "),a("p",[s._v("The syntax of the analytic function:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("partition_by_clause order_by_clause "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("window_clause"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \npartition_by_clause ::"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" expr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" expr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    \norder_by_clause ::"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" expr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" expr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[s._v("#")]),s._v(" Function")]),s._v(" "),a("p",[s._v("Support Functions: AVG(), COUNT(), DENSE_RANK(), FIRST_VALUE(), LAG(), LAST_VALUE(), LEAD(), MAX(), MIN(), RANK(), ROW_NUMBER(), SUM()")]),s._v(" "),a("h4",{attrs:{id:"partition-by-clause"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partition-by-clause"}},[s._v("#")]),s._v(" PARTITION BY clause")]),s._v(" "),a("p",[s._v("The Partition By clause is similar to Group By. It groups the input rows according to the specified column or columns, and rows with the same value will be grouped together.")]),s._v(" "),a("h4",{attrs:{id:"order-by-clause"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-by-clause"}},[s._v("#")]),s._v(" ORDER BY clause")]),s._v(" "),a("p",[s._v("The Order By clause is basically the same as the outer Order By. It defines the order in which the input rows are sorted, and if Partition By is specified, Order By defines the order within each Partition grouping. The only difference from the outer Order By is that the Order By n (n is a positive integer) in the OVER clause is equivalent to doing nothing, while the outer Order By n means sorting according to the nth column.")]),s._v(" "),a("p",[s._v("Example:")]),s._v(" "),a("p",[s._v("This example shows adding an id column to the select list with values 1, 2, 3, etc., sorted by the date_and_time column in the events table.")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("   \nrow_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OVER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" date_and_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   \nc1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c4   \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"window-clause"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-clause"}},[s._v("#")]),s._v(" Window clause")]),s._v(" "),a("p",[s._v("The Window clause is used to specify an operation range for the analytical function, the current row is the criterion, and several rows before and after are used as the object of the analytical function operation. The methods supported by the Window clause are: AVG(), COUNT(), FIRST_VALUE(), LAST_VALUE() and SUM(). For MAX() and MIN(), the window clause can specify the starting range UNBOUNDED PRECEDING")]),s._v(" "),a("p",[s._v("syntax:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROWS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" { m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNBOUNDED")]),s._v(" } "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRECEDING")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURRENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURRENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNBOUNDED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" n } "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOLLOWING")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),a("p",[s._v("Suppose we have the following stock data, the stock symbol is JDR, and the closing price is the closing price of each day.")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" stock_ticker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stock_symbol string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" closing_price "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" closing_date "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("some")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("    \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" stock_ticker "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" stock_symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" closing_date\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stock_symbol "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" closing_price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" closing_date        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--------------|---------------|---------------------|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.86")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.89")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.94")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.55")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.03")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.75")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("07")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.98")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("This query uses the analytic function to generate the column moving_average, whose value is the 3-day average price of the stock, that is, the three-day average price of the previous day, the current day, and the next day. The first day has no value for the previous day, and the last day does not have the value for the next day, so these two lines only calculate the average of the two days. Partition By does not play a role here, because all the data are JDR data, but if there is other stock information, Partition By will ensure that the analysis function value acts within this Partition.")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" stock_symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" closing_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" closing_price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("closing_price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("over")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" stock_symbol "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" closing_date    \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("preceding")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("following")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" moving_average    \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" stock_ticker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stock_symbol "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" closing_date        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" closing_price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" moving_average "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--------------|---------------------|---------------|----------------|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.86")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.87")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.89")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.89")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.94")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.79")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.55")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.17")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.03")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.77")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("07")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.75")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.25")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" JDR          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.98")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.36")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("WINDOW,FUNCTION")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);