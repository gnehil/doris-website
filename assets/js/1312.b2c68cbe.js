(window.webpackJsonp=window.webpackJsonp||[]).push([[1312],{1939:function(e,t,a){"use strict";a.r(t);var s=a(15),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"prefix-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefix-index"}},[e._v("#")]),e._v(" Prefix Index")]),e._v(" "),a("h2",{attrs:{id:"basic-concept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-concept"}},[e._v("#")]),e._v(" Basic concept")]),e._v(" "),a("p",[e._v("Unlike traditional database designs, Doris does not support creating indexes on arbitrary columns. OLAP databases with MPP architectures such as Doris usually process large amounts of data by improving concurrency.")]),e._v(" "),a("p",[e._v("Essentially, Doris' data is stored in a data structure similar to SSTable (Sorted String Table). This structure is an ordered data structure that can be sorted and stored according to the specified column. In this data structure, it is very efficient to use the sorted column as a condition to search.")]),e._v(" "),a("p",[e._v("In the three data models of Aggregate, Unique and Duplicate. The underlying data storage is sorted and stored according to the columns specified in the AGGREGATE KEY, UNIQUE KEY and DUPLICATE KEY in the respective table creation statements.")]),e._v(" "),a("p",[e._v("The prefix index, that is, on the basis of sorting, implements an index method to quickly query data according to a given prefix column.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("We use the first 36 bytes of a row of data as the prefix index of this row of data. Prefix indexes are simply truncated when a VARCHAR type is encountered. We give an example:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The prefix index of the following table structure is user_id(8 Bytes) + age(4 Bytes) + message(prefix 20 Bytes).")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("ColumnName")]),e._v(" "),a("th",[e._v("Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("user_id")]),e._v(" "),a("td",[e._v("BIGINT")])]),e._v(" "),a("tr",[a("td",[e._v("age")]),e._v(" "),a("td",[e._v("INT")])]),e._v(" "),a("tr",[a("td",[e._v("message")]),e._v(" "),a("td",[e._v("VARCHAR(100)")])]),e._v(" "),a("tr",[a("td",[e._v("max_dwell_time")]),e._v(" "),a("td",[e._v("DATETIME")])]),e._v(" "),a("tr",[a("td",[e._v("min_dwell_time")]),e._v(" "),a("td",[e._v("DATETIME")])])])])]),e._v(" "),a("li",[a("p",[e._v("The prefix index of the following table structure is user_name(20 Bytes). Even if it does not reach 36 bytes, because VARCHAR is encountered, it is directly truncated and will not continue further.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("ColumnName")]),e._v(" "),a("th",[e._v("Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("user_name")]),e._v(" "),a("td",[e._v("VARCHAR(20)")])]),e._v(" "),a("tr",[a("td",[e._v("age")]),e._v(" "),a("td",[e._v("INT")])]),e._v(" "),a("tr",[a("td",[e._v("message")]),e._v(" "),a("td",[e._v("VARCHAR(100)")])]),e._v(" "),a("tr",[a("td",[e._v("max_dwell_time")]),e._v(" "),a("td",[e._v("DATETIME")])]),e._v(" "),a("tr",[a("td",[e._v("min_dwell_time")]),e._v(" "),a("td",[e._v("DATETIME")])])])])])]),e._v(" "),a("p",[e._v("When our query condition is the prefix of the prefix index, the query speed can be greatly accelerated. For example, in the first example, we execute the following query:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("table")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" user_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1829239")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("；\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This query will be much more efficient than the following query:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("table")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("；\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Therefore, when building a table, choosing the correct column order can greatly improve query efficiency.")]),e._v(" "),a("h2",{attrs:{id:"adjust-prefix-index-by-rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjust-prefix-index-by-rollup"}},[e._v("#")]),e._v(" Adjust prefix index by ROLLUP")]),e._v(" "),a("p",[e._v("Because the column order has been specified when the table is created, there is only one prefix index for a table. This may not be efficient for queries that use other columns that cannot hit the prefix index as conditions. Therefore, we can artificially adjust the column order by creating a ROLLUP. For details, please refer to "),a("RouterLink",{attrs:{to:"/docs/data-table/hit-the-rollup.html"}},[e._v("ROLLUP")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);