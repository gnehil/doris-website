(window.webpackJsonp=window.webpackJsonp||[]).push([[1233],{1860:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"subscribe-to-kafka-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribe-to-kafka-logs"}},[t._v("#")]),t._v(" Subscribe to Kafka logs")]),t._v(" "),a("p",[t._v("Users can directly subscribe to message data in Kafka by submitting routine import jobs to synchronize data in near real-time.")]),t._v(" "),a("p",[t._v("Doris itself can ensure that messages in Kafka are subscribed without loss or weight, that is, "),a("code",[t._v("Exactly-Once")]),t._v(" consumption semantics.")]),t._v(" "),a("h2",{attrs:{id:"subscribe-to-kafka-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribe-to-kafka-messages"}},[t._v("#")]),t._v(" Subscribe to Kafka messages")]),t._v(" "),a("p",[t._v("Subscribing to Kafka messages uses the Routine Load feature in Doris.")]),t._v(" "),a("p",[t._v("The user first needs to create a "),a("strong",[t._v("routine import job")]),t._v(". The job will send a series of "),a("strong",[t._v("tasks")]),t._v(" continuously through routine scheduling, and each task will consume a certain number of messages in Kafka.")]),t._v(" "),a("p",[t._v("Please note the following usage restrictions:")]),t._v(" "),a("ol",[a("li",[t._v("Support unauthenticated Kafka access and SSL-authenticated Kafka clusters.")]),t._v(" "),a("li",[t._v("The supported message formats are as follows:\n"),a("ul",[a("li",[t._v("csv text format. Each message is a line, and the end of the line "),a("strong",[t._v("does not contain")]),t._v(" a newline.")]),t._v(" "),a("li",[t._v("Json format, see "),a("RouterLink",{attrs:{to:"/1.1/data-operate/import/import-way/load-json-format.html"}},[t._v("Import Json Format Data")]),t._v(".")],1)])]),t._v(" "),a("li",[t._v("Only supports Kafka 0.10.0.0 (inclusive) and above.")])]),t._v(" "),a("h3",{attrs:{id:"accessing-ssl-authenticated-kafka-clusters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-ssl-authenticated-kafka-clusters"}},[t._v("#")]),t._v(" Accessing SSL-authenticated Kafka clusters")]),t._v(" "),a("p",[t._v("The routine import feature supports unauthenticated Kafka clusters, as well as SSL-authenticated Kafka clusters.")]),t._v(" "),a("p",[t._v("Accessing an SSL-authenticated Kafka cluster requires the user to provide a certificate file (ca.pem) for authenticating the Kafka Broker public key. If client authentication is also enabled in the Kafka cluster, the client's public key (client.pem), key file (client.key), and key password must also be provided. The files required here need to be uploaded to Plao through the "),a("code",[t._v("CREAE FILE")]),t._v(" command, and the catalog name is "),a("code",[t._v("kafka")]),t._v(". The specific help of the "),a("code",[t._v("CREATE FILE")]),t._v(" command can be found in the "),a("RouterLink",{attrs:{to:"/1.1/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE.html"}},[t._v("CREATE FILE")]),t._v(" command manual . Here is an example:")],1),t._v(" "),a("ul",[a("li",[a("p",[t._v("upload files")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FILE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ca.pem"')]),t._v(" PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example_url/kafka-key/ca.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"catalog"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FILE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client.key"')]),t._v(" PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example_urlkafka-key/client.key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"catalog"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FILE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client.pem"')]),t._v(" PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example_url/kafka-key/client.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"catalog"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])]),t._v(" "),a("p",[t._v("After the upload is complete, you can view the uploaded files through the "),a("RouterLink",{attrs:{to:"/1.1/sql-manual/sql-reference/Show-Statements/SHOW-FILE.html"}},[t._v("SHOW FILES")]),t._v(" command.")],1),t._v(" "),a("h3",{attrs:{id:"create-a-routine-import-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-routine-import-job"}},[t._v("#")]),t._v(" Create a routine import job")]),t._v(" "),a("p",[t._v("For specific commands to create routine import tasks, see "),a("RouterLink",{attrs:{to:"/1.1/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD.html"}},[t._v("ROUTINE LOAD")]),t._v(" command manual. Here is an example:")],1),t._v(" "),a("ol",[a("li",[a("p",[t._v("Access the Kafka cluster without authentication")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROUTINE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("my_first_routine_load_job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" test_1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMNS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TERMINATED")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_batch_interval"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_batch_rows"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_batch_size"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"209715200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" KAFKA\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka_broker_list"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"broker1:9092,broker2:9092,broker3:9092"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka_topic"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_topic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"property.group.id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"property.client.id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"property.kafka_default_offsets"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OFFSET_BEGINNING"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("max_batch_interval/max_batch_rows/max_batch_size")]),t._v(" is used to control the running period of a subtask. The running period of a subtask is determined by the longest running time, the maximum number of rows consumed, and the maximum amount of data consumed.")])])]),t._v(" "),a("li",[a("p",[t._v("Access an SSL-authenticated Kafka cluster")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROUTINE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("my_first_routine_load_job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" test_1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMNS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TERMINATED")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_batch_interval"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_batch_rows"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_batch_size"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"209715200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" KAFKA\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka_broker_list"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"broker1:9091,broker2:9091"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka_topic"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_topic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"property.security.protocol"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ssl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"property.ssl.ca.location"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FILE:ca.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"property.ssl.certificate.location"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FILE:client.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"property.ssl.key.location"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FILE:client.key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"property.ssl.key.password"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcdefg"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"view-import-job-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-import-job-status"}},[t._v("#")]),t._v(" View import job status")]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/1.1/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD.html"}},[t._v("SHOW ROUTINE LOAD")]),t._v(" for specific commands and examples for checking the status of a "),a("strong",[t._v("job")]),t._v(" ) command documentation.")],1),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/1.1/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK.html"}},[t._v("SHOW ROUTINE LOAD TASK")]),t._v(" command documentation.")],1),t._v(" "),a("p",[t._v("Only the currently running tasks can be viewed, and the completed and unstarted tasks cannot be viewed.")]),t._v(" "),a("h3",{attrs:{id:"modify-job-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-job-properties"}},[t._v("#")]),t._v(" Modify job properties")]),t._v(" "),a("p",[t._v("The user can modify some properties of the job that has been created. For details, please refer to the "),a("RouterLink",{attrs:{to:"/1.1/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD.html"}},[t._v("ALTER ROUTINE LOAD")]),t._v(" command manual.")],1),t._v(" "),a("h3",{attrs:{id:"job-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-control"}},[t._v("#")]),t._v(" Job Control")]),t._v(" "),a("p",[t._v("The user can control the stop, pause and restart of the job through the "),a("code",[t._v("STOP/PAUSE/RESUME")]),t._v(" three commands.")]),t._v(" "),a("p",[t._v("For specific commands, please refer to "),a("RouterLink",{attrs:{to:"/1.1/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD.html"}},[t._v("STOP ROUTINE LOAD")]),t._v(" , "),a("RouterLink",{attrs:{to:"/1.1/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD.html"}},[t._v("PAUSE ROUTINE LOAD")]),t._v(", "),a("RouterLink",{attrs:{to:"/1.1/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD.html"}},[t._v("RESUME ROUTINE LOAD")]),t._v(" command documentation.")],1),t._v(" "),a("h2",{attrs:{id:"more-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[t._v("#")]),t._v(" more help")]),t._v(" "),a("p",[t._v("For more detailed syntax and best practices for ROUTINE LOAD, see "),a("RouterLink",{attrs:{to:"/1.1/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD.html"}},[t._v("ROUTINE LOAD")]),t._v(" command manual.")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);