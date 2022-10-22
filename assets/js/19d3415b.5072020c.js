"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[72703],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"STREAM-LOAD",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",title:"STREAM-LOAD",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"STREAM-LOAD",language:"en"},sidebar:"docs",previous:{title:"STOP-ROUTINE-LOAD",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD"},next:{title:"PAUSE-SYNC-JOB",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB"}},s={},p=[{value:"STREAM-LOAD",id:"stream-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"stream-load"},"STREAM-LOAD"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"STREAM LOAD"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"stream-load: load data to table in streaming"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd [-H ""...] -T data.file -XPUT http://fe_host:http_port/api/{db}/{table}/_stream_load\n')),(0,r.kt)("p",null,"This statement is used to import data into the specified table. The difference from ordinary Load is that this import method is synchronous import."),(0,r.kt)("p",null," This import method can still ensure the atomicity of a batch of import tasks, either all data is imported successfully or all of them fail."),(0,r.kt)("p",null," This operation will update the data of the rollup table related to this base table at the same time."),(0,r.kt)("p",null," This is a synchronous operation. After the entire data import work is completed, the import result is returned to the user."),(0,r.kt)("p",null," Currently, HTTP chunked and non-chunked uploads are supported. For non-chunked methods, Content-Length must be used to indicate the length of the uploaded content, which can ensure the integrity of the data."),(0,r.kt)("p",null,"In addition, it is best for users to set the content of the Expect Header field to 100-continue, which can avoid unnecessary data transmission in some error scenarios."),(0,r.kt)("p",null,"Parameter introduction:\nUsers can pass in import parameters through the Header part of HTTP"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"label"),": The label imported once, the data of the same label cannot be imported multiple times. Users can avoid the problem of duplicate data import by specifying Label."),(0,r.kt)("p",{parentName:"li"},"Currently, Doris retains the most recent successful label within 30 minutes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"column_separator"),": used to specify the column separator in the import file, the default is \\t. If it is an invisible character, you need to add \\x as a prefix and use hexadecimal to represent the separator."),(0,r.kt)("p",{parentName:"li"},'For example, the separator \\x01 of the hive file needs to be specified as -H "column_separator:\\x01".'),(0,r.kt)("p",{parentName:"li"},"You can use a combination of multiple characters as column separators.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"line_delimiter"),": used to specify the newline character in the imported file, the default is \\n. Combinations of multiple characters can be used as newlines.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"columns"),": used to specify the correspondence between the columns in the import file and the columns in the table. If the column in the source file corresponds exactly to the content in the table, then there is no need to specify the content of this field."),(0,r.kt)("p",{parentName:"li"},"If the source file does not correspond to the table schema, then this field is required for some data conversion. There are two forms of column, one is directly corresponding to the field in the imported file, which is directly represented by the field name;"),(0,r.kt)("p",{parentName:"li"},"One is derived column, the syntax is ",(0,r.kt)("inlineCode",{parentName:"p"},"column_name")," = expression. Give a few examples to help understand."),(0,r.kt)("p",{parentName:"li"},' Example 1: There are 3 columns "c1, c2, c3" in the table, and the three columns in the source file correspond to "c3, c2, c1" at a time; then you need to specify -H "columns: c3, c2, c1 "'),(0,r.kt)("p",{parentName:"li"},' Example 2: There are 3 columns "c1, c2, c3" in the table, the first three columns in the source file correspond in turn, but there is more than 1 column; then you need to specify -H "columns: c1, c2, c3, xxx";'),(0,r.kt)("p",{parentName:"li"}," The last column can be arbitrarily assigned a name and placeholder"),(0,r.kt)("p",{parentName:"li"},' Example 3: There are three columns "year, month, day" in the table, and there is only one time column in the source file, which is in "2018-06-01 01:02:03" format;'),(0,r.kt)("p",{parentName:"li"},' Then you can specify -H "columns: col, year = year(col), month=month(col), day=day(col)" to complete the import')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"where"),": used to extract part of the data. If the user needs to filter out the unnecessary data, he can achieve this by setting this option."),(0,r.kt)("p",{parentName:"li"},'Example 1: Only import data greater than k1 column equal to 20180601, then you can specify -H "where: k1 = 20180601" when importing')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"max_filter_ratio"),": The maximum tolerable data ratio that can be filtered (for reasons such as data irregularity). Zero tolerance by default. Data irregularities do not include rows filtered out by where conditions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"partitions"),": used to specify the partition designed for this import. If the user can determine the partition corresponding to the data, it is recommended to specify this item. Data that does not satisfy these partitions will be filtered out."),(0,r.kt)("p",{parentName:"li"},'For example, specify import to p1, p2 partition, -H "partitions: p1, p2"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"timeout"),": Specify the import timeout. in seconds. The default is 600 seconds. The setting range is from 1 second to 259200 seconds.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"strict_mode"),': The user specifies whether to enable strict mode for this import. The default is off. The enable mode is -H "strict_mode: true".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"timezone"),": Specify the time zone used for this import. The default is Dongba District. This parameter affects the results of all time zone-related functions involved in the import.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"exec_mem_limit"),": Import memory limit. Default is 2GB. The unit is bytes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"format"),": Specify the import data format, the default is csv, and csv_with_names(filter out the first row of your csv file), csv_with_names_and_types(filter out the first two lines of your csv file), json format are supported.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jsonpaths"),": The way of importing json is divided into: simple mode and matching mode."),(0,r.kt)("p",{parentName:"li"},"  Simple mode: The simple mode is not set the jsonpaths parameter. In this mode, the json data is required to be an object type, for example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," ````\n")),(0,r.kt)("p",{parentName:"li"},'  {"k1":1, "k2":2, "k3":"hello"}, where k1, k2, k3 are column names.'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," ````\n")),(0,r.kt)("p",{parentName:"li"},"  Matching mode: It is relatively complex for json data and needs to match the corresponding value through the jsonpaths parameter.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"strip_outer_array"),": Boolean type, true indicates that the json data starts with an array object and flattens the array object, the default value is false. E.g:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},' ````\n  [\n   {"k1" : 1, "v1" : 2},\n   {"k1" : 3, "v1" : 4}\n  ]\n  When strip_outer_array is true, the final import into doris will generate two rows of data.\n ````\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"json_root"),': json_root is a valid jsonpath string, used to specify the root node of the json document, the default value is "".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"merge_type"),": The merge type of data, which supports three types: APPEND, DELETE, and MERGE. Among them, APPEND is the default value, which means that this batch of data needs to be appended to the existing data, and DELETE means to delete all the data with the same key as this batch of data. Line, the MERGE semantics need to be used in conjunction with the delete condition, which means that the data that meets the delete condition is processed according to the DELETE semantics and the rest is processed according to the APPEND semantics, for example: ",(0,r.kt)("inlineCode",{parentName:"p"},'-H "merge_type: MERGE" -H "delete: flag=1"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"delete"),": Only meaningful under MERGE, indicating the deletion condition of the data\nfunction_column.sequence_col: Only applicable to UNIQUE_KEYS. Under the same key column, ensure that the value column is REPLACEed according to the source_sequence column. The source_sequence can be a column in the data source or a column in the table structure.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fuzzy_parse"),": Boolean type, true means that json will be parsed with the schema of the first row. Enabling this option can improve the efficiency of json import, but requires that the order of the keys of all json objects is the same as the first row, the default is false, only use in json format")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"num_as_string"),": Boolean type, true means that when parsing json data, the numeric type will be converted to a string, and then imported without losing precision.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"read_json_by_line"),": Boolean type, true to support reading one json object per line, the default value is false.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"send_batch_parallelism"),": Integer, used to set the parallelism of sending batch data. If the value of parallelism exceeds ",(0,r.kt)("inlineCode",{parentName:"p"},"max_send_batch_parallelism_per_job")," in the BE configuration, the BE as a coordination point will use the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"max_send_batch_parallelism_per_job"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"load_to_single_tablet")," :  Boolean type, True means that one task can only load data to one tablet in the corresponding partition at a time. The default value is false. The number of tasks for the job depends on the overall concurrency. This parameter can only be set when loading data into the OLAP table with random partition. "))),(0,r.kt)("p",null,"RETURN VALUES\nAfter the import is complete, the related content of this import will be returned in Json format. Currently includes the following fields\nStatus: Import the last status.\nSuccess: Indicates that the import is successful and the data is already visible;\nPublish Timeout: Indicates that the import job has been successfully committed, but is not immediately visible for some reason. The user can consider the import to be successful and not have to retry the import\nLabel Already Exists: Indicates that the Label has been occupied by other jobs. It may be imported successfully or it may be being imported.\nThe user needs to determine the subsequent operation through the get label state command\nOthers: The import failed, the user can specify the Label to retry the job\nMessage: Detailed description of the import status. On failure, the specific failure reason is returned.\nNumberTotalRows: The total number of rows read from the data stream\nNumberLoadedRows: The number of data rows imported this time, only valid in Success\nNumberFilteredRows: The number of rows filtered out by this import, that is, the number of rows with unqualified data quality\nNumberUnselectedRows: This import, the number of rows filtered out by the where condition\nLoadBytes: The size of the source file data imported this time\nLoadTimeMs: The time taken for this import\nBeginTxnTimeMs: The time it takes to request Fe to start a transaction, in milliseconds.\nStreamLoadPutTimeMs: The time it takes to request Fe to obtain the execution plan for importing data, in milliseconds.\nReadDataTimeMs: Time spent reading data, in milliseconds.\nWriteDataTimeMs: The time taken to perform the write data operation, in milliseconds.\nCommitAndPublishTimeMs: The time it takes to submit a request to Fe and publish the transaction, in milliseconds.\nErrorURL: The specific content of the filtered data, only the first 1000 items are retained"),(0,r.kt)("p",null,"ERRORS:\nImport error details can be viewed with the following statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   ```sql\n    SHOW LOAD WARNINGS ON 'url\n   ````\n")),(0,r.kt)("p",null," where url is the url given by ErrorURL."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', and use Label for deduplication. Specify a timeout of 100 seconds"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'    curl --location-trusted -u root -H "label:123" -H "timeout:100" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', use Label for deduplication, and only import data whose k1 is equal to 20180601\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'   ````\n   curl --location-trusted -u root -H "label:123" -H "where: k1=20180601" -T testData http://host:port/api/testDb/testTbl/_stream_load\n   ````\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', allowing a 20% error rate (the user is in the defalut_cluster)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'   ````\n   curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -T testData http://host:port/api/testDb/testTbl/_stream_load\n   ````\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', allow a 20% error rate, and specify the column name of the file (the user is in the defalut_cluster)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'   ````\n   curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -H "columns: k2, k1, v1" -T testData http://host:port/api/testDb/testTbl /_stream_load\n   ````\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Import the data in the local file 'testData' into the p1, p2 partitions of the table 'testTbl' in the database 'testDb', allowing a 20% error rate.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'   ````\n   curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -H "partitions: p1, p2" -T testData http://host:port/api/testDb/testTbl/_stream_load\n   ````\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Import using streaming (user is in defalut_cluster)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   ````\n   seq 1 10 | awk '{OFS=\"\\t\"}{print $1, $1 * 10}' | curl --location-trusted -u root -T - http://host:port/api/testDb/testTbl/ _stream_load\n   ````\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Import a table containing HLL columns, which can be columns in the table or columns in the data to generate HLL columns, or use hll_empty to supplement columns that are not in the data\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'   ````\n   curl --location-trusted -u root -H "columns: k1, k2, v1=hll_hash(k1), v2=hll_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load\n   ````\n')),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Import data for strict mode filtering and set the time zone to Africa/Abidjan\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'   ````\n   curl --location-trusted -u root -H "strict_mode: true" -H "timezone: Africa/Abidjan" -T testData http://host:port/api/testDb/testTbl/_stream_load\n   ````\n')),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import a table with a BITMAP column, which can be a column in the table or a column in the data to generate a BITMAP column, or use bitmap_empty to fill an empty Bitmap"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},' curl --location-trusted -u root -H "columns: k1, k2, v1=to_bitmap(k1), v2=bitmap_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load\n ````\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Simple mode, import json data\nTable Structure:"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"category"),' varchar(512) NULL COMMENT "",\n',(0,r.kt)("inlineCode",{parentName:"p"},"author"),' varchar(512) NULL COMMENT "",\n',(0,r.kt)("inlineCode",{parentName:"p"},"title"),' varchar(512) NULL COMMENT "",\n',(0,r.kt)("inlineCode",{parentName:"p"},"price"),' double NULL COMMENT ""'),(0,r.kt)("p",null,"json data format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"category":"C++","author":"avc","title":"C++ primer","price":895}\n')),(0,r.kt)("p",null,"Import command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "label:123" -H "format: json" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')),(0,r.kt)("p",null,"In order to improve throughput, it supports importing multiple pieces of json data at one time, each line is a json object, and \\n is used as a newline by default. You need to set read_json_by_line to true. The json data format is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"category":"C++","author":"avc","title":"C++ primer","price":89.5}\n{"category":"Java","author":"avc","title":"Effective Java","price":95}\n{"category":"Linux","author":"avc","title":"Linux kernel","price":195}\n')),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"Match pattern, import json data\njson data format:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[\n{"category":"xuxb111","author":"1avc","title":"SayingsoftheCentury","price":895},{"category":"xuxb222","author":"2avc"," title":"SayingsoftheCentury","price":895},\n{"category":"xuxb333","author":"3avc","title":"SayingsoftheCentury","price":895}\n]\n')),(0,r.kt)("p",null,"Precise import by specifying jsonpath, such as importing only three attributes of category, author, and price"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: [\\"$.category\\",\\" $.price\\",\\"$.author\\"]" -H "strip_outer_array: true" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')),(0,r.kt)("p",null,"illustrate:\n1) If the json data starts with an array, and each object in the array is a record, you need to set strip_outer_array to true, which means flatten the array.\n2) If the json data starts with an array, and each object in the array is a record, when setting jsonpath, our ROOT node is actually an object in the array."),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"User specified json root node\njson data format:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n "RECORDS":[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]\n}\n')),(0,r.kt)("p",null,"Precise import by specifying jsonpath, such as importing only three attributes of category, author, and price"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: [\\"$.category\\",\\" $.price\\",\\"$.author\\"]" -H "strip_outer_array: true" -H "json_root: $.RECORDS" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},"Delete the data with the same import key as this batch")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "merge_type: DELETE" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')),(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},"Delete the columns in this batch of data that match the data whose flag is listed as true, and append other rows normally")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv, flag" -H "merge_type: MERGE" -H "delete: flag=1" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')),(0,r.kt)("ol",{start:15},(0,r.kt)("li",{parentName:"ol"},"Import data into UNIQUE_KEYS table with sequence column")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/ _stream_load\n')),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"STREAM, LOAD\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the import task status"),(0,r.kt)("p",{parentName:"li"},"Stream Load is a synchronous import process. The successful execution of the statement means that the data is imported successfully. The imported execution result will be returned synchronously through the HTTP return value. And display it in Json format. An example is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "TxnId": 17,\n    "Label": "707717c0-271a-44c5-be0b-4e71bfeacaa5",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 5,\n    "NumberLoadedRows": 5,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 28,\n    "LoadTimeMs": 27,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 2,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 3,\n    "CommitAndPublishTimeMs": 18\n}\n')),(0,r.kt)("p",{parentName:"li"},"The field definitions are as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TxnId: Import transaction ID, which is automatically generated by the system and is globally unique.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Label: Import Label, if not specified, the system will generate a UUID.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Status:"),(0,r.kt)("p",{parentName:"li"},"Import results. Has the following values:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Success: Indicates that the import was successful and the data is already visible."),(0,r.kt)("li",{parentName:"ul"},"Publish Timeout: This status also means that the import has completed, but the data may be visible with a delay."),(0,r.kt)("li",{parentName:"ul"},"Label Already Exists: The Label is duplicated and needs to be replaced."),(0,r.kt)("li",{parentName:"ul"},"Fail: Import failed."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ExistingJobStatus:"),(0,r.kt)("p",{parentName:"li"},"The status of the import job corresponding to the existing Label."),(0,r.kt)("p",{parentName:"li"},'This field is only displayed when the Status is "Label Already Exists". The user can know the status of the import job corresponding to the existing Label through this status. "RUNNING" means the job is still executing, "FINISHED" means the job was successful.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Message: Import error message.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NumberTotalRows: The total number of rows processed by the import.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NumberLoadedRows: The number of rows successfully imported.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NumberFilteredRows: The number of rows with unqualified data quality.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NumberUnselectedRows: The number of rows filtered by the where condition.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"LoadBytes: Number of bytes imported.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"LoadTimeMs: Import completion time. The unit is milliseconds.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"BeginTxnTimeMs: The time it takes to request the FE to start a transaction, in milliseconds.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"StreamLoadPutTimeMs: The time taken to request the FE to obtain the execution plan for importing data, in milliseconds.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ReadDataTimeMs: Time spent reading data, in milliseconds.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WriteDataTimeMs: The time spent performing the write data operation, in milliseconds.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CommitAndPublishTimeMs: The time it takes to submit a request to Fe and publish the transaction, in milliseconds.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ErrorURL: If there is a data quality problem, visit this URL to view the specific error line.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How to correctly submit the Stream Load job and process the returned results."),(0,r.kt)("p",{parentName:"li"},"Stream Load is a synchronous import operation, so the user needs to wait for the return result of the command synchronously, and decide the next processing method according to the return result."),(0,r.kt)("p",{parentName:"li"},"The user's primary concern is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Status")," field in the returned result."),(0,r.kt)("p",{parentName:"li"},"If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"Success"),", everything is fine and you can do other operations after that."),(0,r.kt)("p",{parentName:"li"},"If the returned result shows a large number of ",(0,r.kt)("inlineCode",{parentName:"p"},"Publish Timeout"),", it may indicate that some resources (such as IO) of the cluster are currently under strain, and the imported data cannot take effect finally. The import task in the state of ",(0,r.kt)("inlineCode",{parentName:"p"},"Publish Timeout")," has succeeded and does not need to be retried. However, it is recommended to slow down or stop the submission of new import tasks and observe the cluster load."),(0,r.kt)("p",{parentName:"li"},"If the returned result is ",(0,r.kt)("inlineCode",{parentName:"p"},"Fail"),", the import failed, and you need to check the problem according to the specific reason. Once resolved, you can retry with the same Label."),(0,r.kt)("p",{parentName:"li"},"In some cases, the user's HTTP connection may be disconnected abnormally and the final returned result cannot be obtained. At this point, you can use the same Label to resubmit the import task, and the resubmitted task may have the following results:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Status")," status is ",(0,r.kt)("inlineCode",{parentName:"li"},"Success"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Fail")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Publish Timeout"),". At this point, it can be processed according to the normal process."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Status")," status is ",(0,r.kt)("inlineCode",{parentName:"li"},"Label Already Exists"),". At this time, you need to continue to view the ",(0,r.kt)("inlineCode",{parentName:"li"},"ExistingJobStatus")," field. If the value of this field is ",(0,r.kt)("inlineCode",{parentName:"li"},"FINISHED"),", it means that the import task corresponding to this Label has been successful, and there is no need to retry. If it is ",(0,r.kt)("inlineCode",{parentName:"li"},"RUNNING"),", it means that the import task corresponding to this Label is still running. At this time, you need to use the same Label to continue to submit repeatedly at intervals (such as 10 seconds) until ",(0,r.kt)("inlineCode",{parentName:"li"},"Status")," is not ",(0,r.kt)("inlineCode",{parentName:"li"},"Label Already Exists' "),", or until the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"ExistingJobStatus")," field is ",(0,r.kt)("inlineCode",{parentName:"li"},"FINISHED"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cancel the import task"),(0,r.kt)("p",{parentName:"li"},"Import tasks that have been submitted and not yet completed can be canceled with the CANCEL LOAD command. After cancellation, the written data will also be rolled back and will not take effect.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Label, import transaction, multi-table atomicity"),(0,r.kt)("p",{parentName:"li"},"All import tasks in Doris are atomic. And the import of multiple tables in the same import task can also guarantee atomicity. At the same time, Doris can also use the Label mechanism to ensure that the data imported is not lost or heavy. For details, see the ",(0,r.kt)("a",{parentName:"p",href:"../../../data-operate/import/import-scenes/load-atomicity.md"},"Import Transactions and Atomicity")," documentation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Column mapping, derived columns and filtering"),(0,r.kt)("p",{parentName:"li"},"Doris can support very rich column transformation and filtering operations in import statements. Most built-in functions and UDFs are supported. For how to use this function correctly, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../../data-operate/import/import-scenes/load-data-convert.md"},"Column Mapping, Conversion and Filtering")," document.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Error data filtering"),(0,r.kt)("p",{parentName:"li"},"Doris' import tasks can tolerate a portion of malformed data. The tolerance ratio is set via ",(0,r.kt)("inlineCode",{parentName:"p"},"max_filter_ratio"),". The default is 0, which means that the entire import task will fail when there is an error data. If the user wants to ignore some problematic data rows, the secondary parameter can be set to a value between 0 and 1, and Doris will automatically skip the rows with incorrect data format."),(0,r.kt)("p",{parentName:"li"},"For some calculation methods of the tolerance rate, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../../data-operate/import/import-scenes/load-data-convert.md"},"Column Mapping, Conversion and Filtering")," document.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Strict Mode"),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"strict_mode")," attribute is used to set whether the import task runs in strict mode. The format affects the results of column mapping, transformation, and filtering. For a detailed description of strict mode, see the ",(0,r.kt)("a",{parentName:"p",href:"../../../data-operate/import/import-scenes/load-strict-mode.md"},"strict mode")," documentation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Timeout"),(0,r.kt)("p",{parentName:"li"},"The default timeout for Stream Load is 10 minutes. from the time the task is submitted. If it does not complete within the timeout period, the task fails.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Limits on data volume and number of tasks"),(0,r.kt)("p",{parentName:"li"},"Stream Load is suitable for importing data within a few GB. Because the data is processed by single-threaded transmission, the performance of importing excessively large data cannot be guaranteed. When a large amount of local data needs to be imported, multiple import tasks can be submitted in parallel."),(0,r.kt)("p",{parentName:"li"},"Doris also limits the number of import tasks running at the same time in the cluster, usually ranging from 10-20. Import jobs submitted after that will be rejected."))))}d.isMDXComponent=!0}}]);