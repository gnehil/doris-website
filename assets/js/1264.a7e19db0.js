(window.webpackJsonp=window.webpackJsonp||[]).push([[1264],{1891:function(e,t,a){"use strict";a.r(t);var i=a(15),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"doris-join-optimization-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-join-optimization-principle"}},[e._v("#")]),e._v(" Doris Join optimization principle")]),e._v(" "),a("p",[e._v("Doris supports two physical operators, one is "),a("strong",[e._v("Hash Join")]),e._v(", and the other is "),a("strong",[e._v("Nest Loop Join")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Hash Join: Create a hash table on the right table based on the equivalent join column, and the left table uses the hash table to perform join calculations in a streaming manner. Its limitation is that it can only be applied to equivalent joins.")]),e._v(" "),a("li",[e._v("Nest Loop Join: With two for loops, it is very intuitive. Then it is applicable to unequal-valued joins, such as: greater than or less than or the need to find a Cartesian product. It is a general join operator, but has poor performance.")])]),e._v(" "),a("p",[e._v("As a distributed MPP database, data shuffle needs to be performed during the Join process. Data needs to be split and scheduled to ensure that the final Join result is correct. As a simple example, assume that the relationship S and R are joined, and N represents the number of nodes participating in the join calculation; T represents the number of tuples in the relationship.")]),e._v(" "),a("h2",{attrs:{id:"doris-shuffle-way"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-shuffle-way"}},[e._v("#")]),e._v(" Doris Shuffle way")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Doris supports 4 Shuffle methods")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("BroadCast Join")]),e._v(" "),a("p",[e._v("It requires the full data of the right table to be sent to the left table, that is, each node participating in Join has the full data of the right table, that is, T(R).")]),e._v(" "),a("p",[e._v("Its applicable scenarios are more general, and it can support Hash Join and Nest loop Join at the same time, and its network overhead is N * T(R).")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/join/image-20220523152004731.png"),alt:"image-20220523152004731"}}),e._v(" "),a("p",[e._v("The data in the left table is not moved, and the data in the right table is sent to the scanning node of the data in the left table.")])]),e._v(" "),a("li",[a("p",[e._v("Shuffle Join")]),e._v(" "),a("p",[e._v("When Hash Join is performed, the corresponding Hash value can be calculated through the Join column, and Hash bucketing can be performed.")]),e._v(" "),a("p",[e._v("Its network overhead is: T(R) + T(N), but it can only support Hash Join, because it also calculates buckets according to the conditions of Join.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/join/image-20220523151902368.png"),alt:"image-20220523151902368"}}),e._v(" "),a("p",[e._v("The left and right table data are sent to different partition nodes according to the partition, and the calculated demerits are sent.")])]),e._v(" "),a("li",[a("p",[e._v("Bucket Shuffle Join")]),e._v(" "),a("p",[e._v("Doris's table data itself is bucketed by Hash calculation, so you can use the properties of the bucketed columns of the table itself to shuffle the Join data. If two tables need to be joined, and the Join column is the bucket column of the left table, then the data in the left table can actually be calculated by sending the data into the buckets of the left table without moving the data in the right table.")]),e._v(" "),a("p",[e._v("Its network overhead is: T(R) is equivalent to only Shuffle the data in the right table.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/join/image-20220523151653562.png"),alt:"image-20220523151653562"}}),e._v(" "),a("p",[e._v("The data in the left table does not move, and the data in the right table is sent to the node that scans the table in the left table according to the result of the partition calculation.")])]),e._v(" "),a("li",[a("p",[e._v("Colocation")]),e._v(" "),a("p",[e._v("It is similar to Bucket Shuffle Join, which means that the data has been shuffled according to the preset Join column scenario when data is imported. Then the join calculation can be performed directly without considering the Shuffle problem of the data during the actual query.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/join/image-20220523151619754.png"),alt:"image-20220523151619754"}}),e._v(" "),a("p",[e._v("The data has been pre-partitioned, and the Join calculation is performed directly locally")])])]),e._v(" "),a("h3",{attrs:{id:"comparison-of-four-shuffle-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparison-of-four-shuffle-methods"}},[e._v("#")]),e._v(" Comparison of four Shuffle methods")]),e._v(" "),a("p",[e._v("| Shuffle Mode | Network Overhead | Physical Operators | Applicable Scenarios |\n| -------------- | ------------- | ------------ ---- | --------------------------------------------- --------------- |\n| BroadCast | N * T(R) | Hash Join / Nest Loop Join | Universal |\n| Shuffle | T(S) + T(R) | Hash Join | General |\n| Bucket Shuffle | T(R) | Hash Join | There are distributed columns in the left table in the join condition, and the left table is executed as a single partition |\n| Colocate | 0 | Hash Join | There are distributed columns in the left table in the join condition, and the left and right tables belong to the same Colocate Group |")]),e._v(" "),a("p",[e._v("N : The number of Instances participating in the Join calculation")]),e._v(" "),a("p",[e._v("T(relation) : Tuple number of relation")]),e._v(" "),a("p",[e._v("The flexibility of the above four methods is from high to low, and its requirements for this data distribution are becoming more and more strict, but the performance of Join calculation is also getting better and better.")]),e._v(" "),a("h2",{attrs:{id:"runtime-filter-join-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime-filter-join-optimization"}},[e._v("#")]),e._v(" Runtime Filter Join optimization")]),e._v(" "),a("p",[e._v("Doris will build a hash table in the right table when performing Hash Join calculation, and the left table will stream through the hash table of the right table to obtain the join result. The RuntimeFilter makes full use of the Hash table of the right table. When the right table generates a hash table, a filter condition based on the hash table data is generated at the same time, and then pushed down to the data scanning node of the left table. In this way, Doris can perform data filtering at runtime.")]),e._v(" "),a("p",[e._v("If the left table is a large table and the right table is a small table, then using the filter conditions generated by the left table, most of the data to be filtered in the Join layer can be filtered in advance when the data is read, so that a large amount of data can be filtered. Improve the performance of join queries.")]),e._v(" "),a("p",[e._v("Currently Doris supports three types of RuntimeFilter")]),e._v(" "),a("ul",[a("li",[e._v("One is IN-IN, which is well understood, and pushes a hashset down to the data scanning node.")]),e._v(" "),a("li",[e._v("The second is BloomFilter, which uses the data of the hash table to construct a BloomFilter, and then pushes the BloomFilter down to the scanning node that queries the data. .")]),e._v(" "),a("li",[e._v("The last one is MinMax, which is a Range range. After the Range range is determined by the data in the right table, it is pushed down to the data scanning node.")])]),e._v(" "),a("p",[e._v("There are two requirements for the applicable scenarios of Runtime Filter:")]),e._v(" "),a("ul",[a("li",[e._v("The first requirement is that the right table is large and the left table is small, because building a Runtime Filter needs to bear the computational cost, including some memory overhead.")]),e._v(" "),a("li",[e._v("The second requirement is that there are few results from the join of the left and right tables, indicating that this join can filter out most of the data in the left table.")])]),e._v(" "),a("p",[e._v("When the above two conditions are met, turning on the Runtime Filter can achieve better results")]),e._v(" "),a("p",[e._v("When the Join column is the Key column of the left table, the RuntimeFilter will be pushed down to the storage engine. Doris itself supports delayed materialization,")]),e._v(" "),a("p",[e._v("Delayed materialization is simply like this: if you need to scan three columns A, B, and C, there is a filter condition on column A: A is equal to 2, if you want to scan 100 rows, you can scan 100 rows of column A first, Then filter through the filter condition A = 2. After filtering the results, read columns B and C, which can greatly reduce the data read IO. Therefore, if the Runtime Filter is generated on the Key column, and the delayed materialization of Doris itself is used to further improve the performance of the query.")]),e._v(" "),a("h3",{attrs:{id:"runtime-filter-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime-filter-type"}},[e._v("#")]),e._v(" Runtime Filter Type")]),e._v(" "),a("ul",[a("li",[e._v("Doris provides three different Runtime Filter types:\n"),a("ul",[a("li",[e._v("The advantage of "),a("strong",[e._v("IN")]),e._v(" is that the effect filtering effect is obvious and fast. Its shortcomings are: First, it only applies to BroadCast. Second, when the right table exceeds a certain amount of data, it will fail. The current Doris configuration is 1024, that is, if the right table is larger than 1024, the Runtime Filter of IN will directly failed.")]),e._v(" "),a("li",[e._v("The advantage of "),a("strong",[e._v("MinMax")]),e._v(" is that the overhead is relatively small. Its disadvantage is that it has a relatively good effect on numeric columns, but basically no effect on non-numeric columns.")]),e._v(" "),a("li",[e._v("The feature of "),a("strong",[e._v("Bloom Filter")]),e._v(" is that it is universal, suitable for various types, and the effect is better. The disadvantage is that its configuration is more complicated and the calculation is high.")])])])]),e._v(" "),a("h2",{attrs:{id:"join-reader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#join-reader"}},[e._v("#")]),e._v(" Join Reader")]),e._v(" "),a("p",[e._v("Once the database involves multi-table Join, the order of Join has a great impact on the performance of the entire Join query. Assuming that there are three tables to join, refer to the following picture, the left is the a table and the b table to do the join first, the intermediate result has 2000 rows, and then the c table is joined.")]),e._v(" "),a("p",[e._v("Next, look at the picture on the right and adjust the order of Join. Join the a table with the c table first, the intermediate result generated is only 100, and then finally join with the b table for calculation. The final join result is the same, but the intermediate result it generates has a 20x difference, which results in a big performance diff.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/join/image-20220523152639123.png"),alt:"image-20220523152639123"}}),e._v(" "),a("ul",[a("li",[e._v("Doris currently supports the rule-based Join Reorder algorithm. Its logic is:\n"),a("ul",[a("li",[e._v("Make joins with large tables and small tables as much as possible, and the intermediate results it generates are as small as possible.")]),e._v(" "),a("li",[e._v("Put the conditional join table forward, that is to say, try to filter the conditional join table")]),e._v(" "),a("li",[e._v("Hash Join has higher priority than Nest Loop Join, because Hash Join itself is much faster than Nest Loop Join.")])])])]),e._v(" "),a("h2",{attrs:{id:"doris-join-optimization-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-join-optimization-method"}},[e._v("#")]),e._v(" Doris Join optimization method")]),e._v(" "),a("p",[e._v("Doris Join tuning method:")]),e._v(" "),a("ul",[a("li",[e._v("Use the Profile provided by Doris itself to locate the bottleneck of the query. Profile records various information in Doris' entire query, which is first-hand information for performance tuning. .")]),e._v(" "),a("li",[e._v("Understand the Join mechanism of Doris, which is also the content shared with you in the second part. Only by knowing why and understanding its mechanism can we analyze why it is slow.")]),e._v(" "),a("li",[e._v("Use Session variables to change some behaviors of Join, so as to realize the tuning of Join.")]),e._v(" "),a("li",[e._v("Check the Query Plan to analyze whether this tuning is effective.")])]),e._v(" "),a("p",[e._v("The above 4 steps basically complete a standard Join tuning process, and then it is to actually query and verify it to see what the effect is.")]),e._v(" "),a("p",[e._v("If the first 4 methods are connected in series, it still does not work. At this time, it may be necessary to rewrite the Join statement, or to adjust the data distribution. It is necessary to recheck whether the entire data distribution is reasonable, including querying the Join statement, and some manual adjustments may be required. Of course, this method has a relatively high mental cost, which means that further analysis is required only when the previous method does not work.")]),e._v(" "),a("h2",{attrs:{id:"optimization-case-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimization-case-practice"}},[e._v("#")]),e._v(" Optimization case practice")]),e._v(" "),a("h3",{attrs:{id:"case-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-1"}},[e._v("#")]),e._v(" Case 1")]),e._v(" "),a("p",[e._v("A four-table join query, through Profile, found that the second join took a long time, taking 14 seconds.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/join/image-20220523153600797.png"),alt:"image-20220523153600797"}}),e._v(" "),a("p",[e._v("After further analysis of Profile, it is found that BuildRows, that is, the data volume of the right table is about 25 million. And ProbeRows (ProbeRows is the amount of data in the left table) is only more than 10,000. In this scenario, the right table is much larger than the left table, which is obviously an unreasonable situation. This obviously shows that there is some problem with the order of Join. At this time, try to change the Session variable and enable Join Reorder.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set enable_cost_based_join_reorder = true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This time, the time has been reduced from 14 seconds to 4 seconds, and the performance has been improved by more than 3 times.")]),e._v(" "),a("p",[e._v("At this time, when checking the profile again, the order of the left and right tables has been adjusted correctly, that is, the right table is a large table, and the left table is a small table. The overhead of building a hash table based on a small table is very small. This is a typical scenario of using Join Reorder to improve Join performance.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/join/image-20220523153757607.png"),alt:"image-20220523153757607"}}),e._v(" "),a("h3",{attrs:{id:"case-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-2"}},[e._v("#")]),e._v(" Case 2")]),e._v(" "),a("p",[e._v("There is a slow query. After viewing the Profile, the entire Join node takes about 44 seconds. Its right table has 10 million, the left table has 60 million, and the final returned result is only 60 million.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/join/image-20220523153913059.png"),alt:"image-20220523153913059"}}),e._v(" "),a("p",[e._v("It can be roughly estimated that the filtering rate is very high, so why does the Runtime Filter not take effect? Check it out through Query Plan and find that it only enables the Runtime Filter of IN.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/join/image-20220523153958828.png"),alt:"image-20220523153958828"}}),e._v(" "),a("p",[e._v("When the right table exceeds 1024 rows, IN will not take effect, so there is no filtering effect at all, so try to adjust the type of RuntimeFilter.")]),e._v(" "),a("p",[e._v("This is changed to BloomFilter, and the 60 million pieces of data in the left table have filtered 59 million pieces. Basically, 99% of the data is filtered out, and this effect is very significant. The query has also dropped from the original 44 seconds to 13 seconds, and the performance has been improved by about three times.")]),e._v(" "),a("h3",{attrs:{id:"case-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-3"}},[e._v("#")]),e._v(" Case 3")]),e._v(" "),a("p",[e._v("The following is a relatively extreme case, which cannot be solved by tuning some environment variables, because it involves SQL Rewrite, so the original SQL is listed here.")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100.00")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sum")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("when")]),e._v(" P_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("like")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'PROMOS'")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" extendedprice "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" discount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" extendedprice "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" discount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" promo revenue\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" lineitem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" part\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("_partkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" p_partkey\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("_shipdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("date")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'1997-06-01'")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" shipdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("date")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'1997-06-01'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interval")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'1'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("month")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("This Join query is very simple, a simple join of left and right tables. Of course, there are some filter conditions on it. When I opened the Profile, I found that the entire query Hash Join was executed for more than three minutes. It is a BroadCast Join, and its right table has 200 million entries, while the left table has only 700,000. In this case, it is unreasonable to choose Broadcast Join, which is equivalent to making a Hash Table of 200 million records, and then traversing the Hash Table of 200 million records with 700,000 records, which is obviously unreasonable.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/image-20220523154712519.png"),alt:"image-20220523154712519"}}),e._v(" "),a("p",[e._v("Why is there an unreasonable Join order? In fact, the left table is a large table with a level of 1 billion records. Two filter conditions are added to it. After adding these two filter conditions, there are 700,000 records of 1 billion records. But Doris currently does not have a good framework for collecting statistics, so it does not know what the filtering rate of this filter condition is. Therefore, when the join order is arranged, the wrong left and right table order of the join is selected, resulting in extremely low performance.")]),e._v(" "),a("p",[e._v("The following figure is an SQL statement after the rewrite is completed. A Join Hint is added after the Join, a square bracket is added after the Join, and then the required Join method is written. Here, Shuffle Join is selected. You can see in the actual query plan on the right that the data is indeed Partitioned. The original 3-minute time-consuming is only 7 seconds after the rewriting, and the performance is improved significantly.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/join/image-20220523160915229.png"),alt:"image-20220523160915229"}}),e._v(" "),a("h2",{attrs:{id:"doris-join-optimization-suggestion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-join-optimization-suggestion"}},[e._v("#")]),e._v(" Doris Join optimization suggestion")]),e._v(" "),a("p",[e._v("Finally, we summarize four suggestions for optimization and tuning of Doris Join:")]),e._v(" "),a("ul",[a("li",[e._v("The first point: When doing Join, try to select columns of the same type or simple type. If the same type is used, reduce its data cast, and the simple type itself joins the calculation quickly.")]),e._v(" "),a("li",[e._v("The second point: try to choose the Key column for Join. The reason is also introduced in the Runtime Filter. The Key column can play a better effect on delayed materialization.")]),e._v(" "),a("li",[e._v("The third point: Join between large tables, try to make it Co-location, because the network overhead between large tables is very large, if you need to do Shuffle, the cost is very high.")]),e._v(" "),a("li",[e._v("Fourth point: Use Runtime Filter reasonably, which is very effective in scenarios with high join filtering rate. But it is not a panacea, but has certain side effects, so it needs to be switched according to the granularity of specific SQL.")]),e._v(" "),a("li",[e._v("Finally: When it comes to multi-table Join, it is necessary to judge the rationality of Join. Try to ensure that the left table is a large table and the right table is a small table, and then Hash Join will be better than Nest Loop Join. If necessary, you can use SQL Rewrite to adjust the order of Join using Hint.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);