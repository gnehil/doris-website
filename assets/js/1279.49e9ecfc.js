(window.webpackJsonp=window.webpackJsonp||[]).push([[1279],{1906:function(t,e,s){"use strict";s.r(e);var a=s(15),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tpc-h-benchmark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tpc-h-benchmark"}},[t._v("#")]),t._v(" TPC-H benchmark")]),t._v(" "),s("p",[t._v("TPC-H is a Decision Support Benchmark consisting of a set of business-oriented ad hoc queries and concurrent data modifications. The data that queries and populates the database has broad industry relevance. This benchmark demonstrates a decision support system that examines large amounts of data, executes highly complex queries, and answers critical business questions. The performance metric reported by TPC-H is called the TPC-H Hourly Compound Query Performance Metric (QphH@Size) and reflects multiple aspects of the system's ability to process queries. These aspects include the database size chosen when executing the query, the query processing power when the query is submitted by a single stream, and the query throughput when the query is submitted by multiple concurrent users.")]),t._v(" "),s("p",[t._v("This document mainly introduces the performance of Doris on the TPC-H test set.")]),t._v(" "),s("blockquote",[s("p",[t._v("Note 1: Standard test sets including TPC-H are usually far from actual business scenarios, and some tests will perform parameter tuning for the test set. Therefore, the test results of the standard test set can only reflect the performance of the database in specific scenarios. Users are advised to conduct further testing with actual business data.")]),t._v(" "),s("p",[t._v("Note 2: The operations covered in this document are tested on CentOS 7.x.")])]),t._v(" "),s("p",[t._v("On 22 queries on the TPC-H standard test dataset, we tested the upcoming Doris 1.1 version and Doris 0.15.0 RC04 version side by side, and the overall performance improved by 3-4 times. In individual scenarios, it can achieve a ten-fold improvement.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/image-20220614114351241.png"),alt:"image-20220614114351241"}}),t._v(" "),s("h2",{attrs:{id:"_1-hardware-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-hardware-environment"}},[t._v("#")]),t._v(" 1. Hardware Environment")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Hardware")]),t._v(" "),s("th",[t._v("Configuration Instructions")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("number of machines")]),t._v(" "),s("td",[t._v("4 Alibaba Cloud hosts (1 FE, 3 BE)")])]),t._v(" "),s("tr",[s("td",[t._v("CPU")]),t._v(" "),s("td",[t._v("Intel Xeon(Cascade Lake) Platinum 8269CY  16C  (2.5 GHz/3.2 GHz)")])]),t._v(" "),s("tr",[s("td",[t._v("Memory")]),t._v(" "),s("td",[t._v("64G")])]),t._v(" "),s("tr",[s("td",[t._v("Network")]),t._v(" "),s("td",[t._v("5Gbps")])]),t._v(" "),s("tr",[s("td",[t._v("Disk")]),t._v(" "),s("td",[t._v("ESSD cloud hard disk")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-software-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-software-environment"}},[t._v("#")]),t._v(" 2. Software Environment")]),t._v(" "),s("ul",[s("li",[t._v("Doris deploys 3BE 1FE;")]),t._v(" "),s("li",[t._v("Kernel version: Linux version 5.4.0-96-generic (buildd@lgw01-amd64-051)")]),t._v(" "),s("li",[t._v("OS version: CentOS 7.8")]),t._v(" "),s("li",[t._v("Doris software version: Apache Doris 1.1, Apache Doris 0.15.0 RC04")]),t._v(" "),s("li",[t._v('JDK: openjdk version "11.0.14" 2022-01-18')])]),t._v(" "),s("h2",{attrs:{id:"_3-test-data-volume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-test-data-volume"}},[t._v("#")]),t._v(" 3. Test Data Volume")]),t._v(" "),s("p",[t._v("The entire test simulation generates 100G of data and is imported into Doris 0.15.0 RC04 and Doris 1.1 versions for testing. The following is the relevant description of the table and the amount of data.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("TPC-H Table Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Rows")]),t._v(" "),s("th",[t._v("data size")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("remark")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("REGION")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),s("td",[t._v("400KB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("NATION")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("25")]),t._v(" "),s("td",[t._v("7.714 KB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("SUPPLIER")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("100 million")]),t._v(" "),s("td",[t._v("85.528 MB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("PART")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("20 million")]),t._v(" "),s("td",[t._v("752.330 MB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("PARTSUPP")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("80 million")]),t._v(" "),s("td",[t._v("4.375 GB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("CUSTOMER")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("15 million")]),t._v(" "),s("td",[t._v("1.317 GB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ORDERS")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1.5 billion")]),t._v(" "),s("td",[t._v("6.301 GB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("LINEITEM")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("6 billion")]),t._v(" "),s("td",[t._v("20.882 GB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),s("h2",{attrs:{id:"_4-test-sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-test-sql"}},[t._v("#")]),t._v(" 4. Test SQL")]),t._v(" "),s("p",[t._v("TPCH 22 test query statements ： "),s("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/tools/tpch-tools/queries",target:"_blank",rel:"noopener noreferrer"}},[t._v("TPCH-Query-SQL"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Notice:")]),t._v(" "),s("p",[t._v("The following four parameters in the above SQL do not exist in 0.15.0 RC04. When executed in 0.15.0 RC04, remove them:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. enable_vectorized_engine=true,\n2. batch_size=4096,\n3. disable_join_reorder=false\n4. enable_projection=true\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"_5-test-result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-test-result"}},[t._v("#")]),t._v(" 5. Test Result")]),t._v(" "),s("p",[t._v("Here we use the upcoming Doris-1.1 version and Doris-0.15.0 RC04 version for comparative testing. The test results are as follows:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Query")]),t._v(" "),s("th",[t._v("Doris-1.1(s)")]),t._v(" "),s("th",[t._v("0.15.0 RC04(s)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Q1")]),t._v(" "),s("td",[t._v("3.75")]),t._v(" "),s("td",[t._v("28.63")])]),t._v(" "),s("tr",[s("td",[t._v("Q2")]),t._v(" "),s("td",[t._v("4.22")]),t._v(" "),s("td",[t._v("7.88")])]),t._v(" "),s("tr",[s("td",[t._v("Q3")]),t._v(" "),s("td",[t._v("2.64")]),t._v(" "),s("td",[t._v("9.39")])]),t._v(" "),s("tr",[s("td",[t._v("Q4")]),t._v(" "),s("td",[t._v("1.5")]),t._v(" "),s("td",[t._v("9.3")])]),t._v(" "),s("tr",[s("td",[t._v("Q5")]),t._v(" "),s("td",[t._v("2.15")]),t._v(" "),s("td",[t._v("4.11")])]),t._v(" "),s("tr",[s("td",[t._v("Q6")]),t._v(" "),s("td",[t._v("0.19")]),t._v(" "),s("td",[t._v("0.43")])]),t._v(" "),s("tr",[s("td",[t._v("Q7")]),t._v(" "),s("td",[t._v("1.04")]),t._v(" "),s("td",[t._v("1.61")])]),t._v(" "),s("tr",[s("td",[t._v("Q8")]),t._v(" "),s("td",[t._v("1.75")]),t._v(" "),s("td",[t._v("50.35")])]),t._v(" "),s("tr",[s("td",[t._v("Q9")]),t._v(" "),s("td",[t._v("7.94")]),t._v(" "),s("td",[t._v("16.34")])]),t._v(" "),s("tr",[s("td",[t._v("Q10")]),t._v(" "),s("td",[t._v("1.41")]),t._v(" "),s("td",[t._v("5.21")])]),t._v(" "),s("tr",[s("td",[t._v("Q11")]),t._v(" "),s("td",[t._v("0.35")]),t._v(" "),s("td",[t._v("1.72")])]),t._v(" "),s("tr",[s("td",[t._v("Q12")]),t._v(" "),s("td",[t._v("0.57")]),t._v(" "),s("td",[t._v("5.39")])]),t._v(" "),s("tr",[s("td",[t._v("Q13")]),t._v(" "),s("td",[t._v("8.15")]),t._v(" "),s("td",[t._v("20.88")])]),t._v(" "),s("tr",[s("td",[t._v("Q14")]),t._v(" "),s("td",[t._v("0.3")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Q15")]),t._v(" "),s("td",[t._v("0.66")]),t._v(" "),s("td",[t._v("1.86")])]),t._v(" "),s("tr",[s("td",[t._v("Q16")]),t._v(" "),s("td",[t._v("0.79")]),t._v(" "),s("td",[t._v("1.32")])]),t._v(" "),s("tr",[s("td",[t._v("Q17")]),t._v(" "),s("td",[t._v("1.51")]),t._v(" "),s("td",[t._v("26.67")])]),t._v(" "),s("tr",[s("td",[t._v("Q18")]),t._v(" "),s("td",[t._v("3.364")]),t._v(" "),s("td",[t._v("11.77")])]),t._v(" "),s("tr",[s("td",[t._v("Q19")]),t._v(" "),s("td",[t._v("0.829")]),t._v(" "),s("td",[t._v("1.71")])]),t._v(" "),s("tr",[s("td",[t._v("Q20")]),t._v(" "),s("td",[t._v("2.77")]),t._v(" "),s("td",[t._v("5.2")])]),t._v(" "),s("tr",[s("td",[t._v("Q21")]),t._v(" "),s("td",[t._v("4.47")]),t._v(" "),s("td",[t._v("10.34")])]),t._v(" "),s("tr",[s("td",[t._v("Q22")]),t._v(" "),s("td",[t._v("0.9")]),t._v(" "),s("td",[t._v("3.22")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("total")])]),t._v(" "),s("td",[s("strong",[t._v("51.253")])]),t._v(" "),s("td",[s("strong",[t._v("223.33")])])])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Result description")]),t._v(" "),s("ul",[s("li",[t._v("The data set corresponding to the test results is scale 100, about 600 million.")]),t._v(" "),s("li",[t._v("The test environment is configured to be commonly used by users, including 4 cloud servers, 16-core 64G SSD, and 1 FE and 3 BE deployment.")]),t._v(" "),s("li",[t._v("Use common user configuration tests to reduce user selection and evaluation costs, but will not consume so many hardware resources during the entire test process.")]),t._v(" "),s("li",[t._v("The test results are averaged over 3 executions. And the data has been fully compacted (if the data is tested immediately after the data is imported, the query delay may be higher than the test result, and the speed of compaction is being continuously optimized, and will be significantly reduced in the future).")]),t._v(" "),s("li",[t._v("0.15 RC04 Q14 execution failed in TPC-H test, unable to complete query.")])])])]),t._v(" "),s("h2",{attrs:{id:"_6-environmental-preparation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-environmental-preparation"}},[t._v("#")]),t._v(" 6. Environmental Preparation")]),t._v(" "),s("p",[t._v("Please refer to the "),s("RouterLink",{attrs:{to:"/docs/install/install-deploy.html"}},[t._v("official document")]),t._v(" to install and deploy Doris to obtain a normal running Doris cluster (at least 1 FE 1 BE, 1 FE 3 BE is recommended).")],1),t._v(" "),s("h2",{attrs:{id:"_7-data-preparation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-data-preparation"}},[t._v("#")]),t._v(" 7. Data Preparation")]),t._v(" "),s("h3",{attrs:{id:"_7-1-download-and-install-the-tpc-h-data-generation-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-download-and-install-the-tpc-h-data-generation-tool"}},[t._v("#")]),t._v(" 7.1 Download and install the TPC-H data generation tool")]),t._v(" "),s("p",[t._v("Execute the following script to download and compile the "),s("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/tools/tpch-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("tpch-tools"),s("OutboundLink")],1),t._v(" tool.")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" build-tpch-dbgen.sh\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("After successful installation, the "),s("code",[t._v("dbgen")]),t._v(" binary will be generated in the "),s("code",[t._v("TPC-H_Tools_v3.0.0/")]),t._v(" directory.")]),t._v(" "),s("h3",{attrs:{id:"_7-2-generate-tpc-h-test-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-generate-tpc-h-test-set"}},[t._v("#")]),t._v(" 7.2 Generate TPC-H test set")]),t._v(" "),s("p",[t._v("Execute the following script to generate the TPC-H dataset:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" gen-tpch-data.sh\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("Note 1: View script help via "),s("code",[t._v("sh gen-tpch-data.sh -h")]),t._v(".")]),t._v(" "),s("p",[t._v("Note 2: The data will be generated in the "),s("code",[t._v("tpch-data/")]),t._v(" directory with the suffix "),s("code",[t._v(".tbl")]),t._v(". The total file size is about 100GB. The generation time may vary from a few minutes to an hour.")]),t._v(" "),s("p",[t._v("Note 3: The standard test data set of 100G is generated by default")])]),t._v(" "),s("h3",{attrs:{id:"_7-3-create-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-create-table"}},[t._v("#")]),t._v(" 7.3 Create Table")]),t._v(" "),s("h4",{attrs:{id:"_7-3-1-prepare-the-doris-cluster-conf-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-1-prepare-the-doris-cluster-conf-file"}},[t._v("#")]),t._v(" 7.3.1 Prepare the "),s("code",[t._v("doris-cluster.conf")]),t._v(" file")]),t._v(" "),s("p",[t._v("Before calling the import script, you need to write the FE's ip port and other information in the "),s("code",[t._v("doris-cluster.conf")]),t._v(" file.")]),t._v(" "),s("p",[t._v("File location and "),s("code",[t._v("load-tpch-data.sh")]),t._v(" level.")]),t._v(" "),s("p",[t._v("The contents of the file include FE's ip, HTTP port, user name, password and the DB name of the data to be imported:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Any of FE host")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FE_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http_port in fe.conf")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FE_HTTP_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8030")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# query_port in fe.conf")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FE_QUERY_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9030")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Doris username")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Doris password")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The database where TPC-H tables located")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tpch1'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h4",{attrs:{id:"_7-3-2-execute-the-following-script-to-generate-and-create-the-tpc-h-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-2-execute-the-following-script-to-generate-and-create-the-tpc-h-table"}},[t._v("#")]),t._v(" 7.3.2 Execute the following script to generate and create the TPC-H table")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" create-tpch-tables.sh\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Or copy the table creation statement in "),s("a",{attrs:{href:"https://github.com/apache/incubator-doris/blob/master/tools/tpch-tools/create-tpch-tables.sql",target:"_blank",rel:"noopener noreferrer"}},[t._v("create-tpch-tables.sql"),s("OutboundLink")],1),t._v(", Execute in Doris.")]),t._v(" "),s("h3",{attrs:{id:"_7-4-导入数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-导入数据"}},[t._v("#")]),t._v(" 7.4 导入数据")]),t._v(" "),s("p",[t._v("通过下面的命令执行数据导入：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" ./load-tpch-data.sh\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_7-5-check-imported-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-check-imported-data"}},[t._v("#")]),t._v(" 7.5 Check Imported Data")]),t._v(" "),s("p",[t._v("Execute the following SQL statement to check the imported data volume is consistent with the above data volume.")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  lineitem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  partsupp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  part"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  customer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  supplier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  nation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  region"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  revenue0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h3",{attrs:{id:"_7-6-query-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-query-test"}},[t._v("#")]),t._v(" 7.6 Query Test")]),t._v(" "),s("p",[t._v("Execute the above test SQL or execute the following command")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./run-tpch-queries.sh\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("Notice:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("At present, the query optimizer and statistics functions of Doris are not perfect, so we rewrite some queries in TPC-H to adapt to the execution framework of Doris, but it does not affect the correctness of the results")])]),t._v(" "),s("li",[s("p",[t._v("Doris' new query optimizer will be released in subsequent versions")])]),t._v(" "),s("li",[s("p",[t._v("Set "),s("code",[t._v("set mem_exec_limit=8G")]),t._v(" before executing the query")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);