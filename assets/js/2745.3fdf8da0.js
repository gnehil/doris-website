(window.webpackJsonp=window.webpackJsonp||[]).push([[2745],{3373:function(n,e,a){"use strict";a.r(e);var t=a(15),r=Object(t.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[n._v("#")]),n._v(" ROUTINE LOAD")]),n._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[n._v("#")]),n._v(" description")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("例行导入（Routine Load）功能，支持用户提交一个常驻的导入任务，通过不断的从指定的数据源读取数据，将数据导入到 Doris 中。\n目前仅支持通过无认证或者 SSL 认证方式，从 Kakfa 导入文本格式（CSV）的数据。\n")])])]),a("p",[n._v("语法：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('CREATE ROUTINE LOAD [db.]job_name ON tbl_name\n[merge_type]\n[load_properties]\n[job_properties]\nFROM data_source\n[data_source_properties]\n\n1. [db.]job_name\n\n    导入作业的名称，在同一个 database 内，相同名称只能有一个 job 在运行。\n\n2. tbl_name\n\n    指定需要导入的表的名称。\n    \n3. merge_type\n    数据的合并类型，一共支持三种类型APPEND、DELETE、MERGE 其中，APPEND是默认值，表示这批数据全部需要追加到现有数据中，DELETE 表示删除与这批数据key相同的所有行，MERGE 语义 需要与delete on条件联合使用，表示满足delete 条件的数据按照DELETE 语义处理其余的按照APPEND 语义处理, 语法为[WITH MERGE|APPEND|DELETE]\n\n4. load_properties\n\n    用于描述导入数据。语法：\n    [column_separator],\n    [columns_mapping],\n    [where_predicates],\n    [delete_on_predicates],\n    [source_sequence],\n    [partitions],\n    [preceding_predicates]\n\n    1. column_separator:\n\n        指定列分隔符，如：\n\n            COLUMNS TERMINATED BY ","\n\n        默认为：\\t\n\n    2. columns_mapping:\n\n        指定源数据中列的映射关系，以及定义衍生列的生成方式。\n\n        1. 映射列：\n\n            按顺序指定，源数据中各个列，对应目的表中的哪些列。对于希望跳过的列，可以指定一个不存在的列名。\n            假设目的表有三列 k1, k2, v1。源数据有4列，其中第1、2、4列分别对应 k2, k1, v1。则书写如下：\n\n            COLUMNS (k2, k1, xxx, v1)\n\n            其中 xxx 为不存在的一列，用于跳过源数据中的第三列。\n\n        2. 衍生列：\n\n            以 col_name = expr 的形式表示的列，我们称为衍生列。即支持通过 expr 计算得出目的表中对应列的值。\n            衍生列通常排列在映射列之后，虽然这不是强制的规定，但是 Doris 总是先解析映射列，再解析衍生列。\n            接上一个示例，假设目的表还有第4列 v2，v2 由 k1 和 k2 的和产生。则可以书写如下：\n\n            COLUMNS (k2, k1, xxx, v1, v2 = k1 + k2);\n\n    3. where_predicates\n\n        用于指定过滤条件，以过滤掉不需要的列。过滤列可以是映射列或衍生列。\n        例如我们只希望导入 k1 大于 100 并且 k2 等于 1000 的列，则书写如下：\n\n        WHERE k1 > 100 and k2 = 1000\n\n    4. partitions\n\n        指定导入目的表的哪些 partition 中。如果不指定，则会自动导入到对应的 partition 中。\n        示例：\n\n        PARTITION(p1, p2, p3)\n\n    5. delete_on_predicates\n        表示删除条件，仅在 merge type 为MERGE 时有意义，语法与where 相同\n\n    6. source_sequence:\n    \n        只适用于UNIQUE_KEYS,相同key列下，保证value列按照source_sequence列进行REPLACE, source_sequence可以是数据源中的列，也可以是表结构中的一列。\n\n    7. preceding_predicates\n\n        PRECEDING FILTER predicate\n\n        用于过滤原始数据。原始数据是未经列映射、转换的数据。用户可以在对转换前的数据前进行一次过滤，选取期望的数据，再进行转换。\n\n5. job_properties\n\n    用于指定例行导入作业的通用参数。\n    语法：\n\n    PROPERTIES (\n        "key1" = "val1",\n        "key2" = "val2"\n    )\n\n    目前我们支持以下参数：\n\n    1. desired_concurrent_number\n\n        期望的并发度。一个例行导入作业会被分成多个子任务执行。这个参数指定一个作业最多有多少任务可以同时执行。必须大于0。默认为3。\n        这个并发度并不是实际的并发度，实际的并发度，会通过集群的节点数、负载情况，以及数据源的情况综合考虑。\n        例：\n\n            "desired_concurrent_number" = "3"\n\n    2. max_batch_interval/max_batch_rows/max_batch_size\n\n        这三个参数分别表示：\n        1）每个子任务最大执行时间，单位是秒。范围为 5 到 60。默认为10。\n        2）每个子任务最多读取的行数。必须大于等于200000。默认是200000。\n        3）每个子任务最多读取的字节数。单位是字节，范围是 100MB 到 1GB。默认是 100MB。\n\n        这三个参数，用于控制一个子任务的执行时间和处理量。当任意一个达到阈值，则任务结束。\n        例：\n\n            "max_batch_interval" = "20",\n            "max_batch_rows" = "300000",\n            "max_batch_size" = "209715200"\n\n    3. max_error_number\n\n        采样窗口内，允许的最大错误行数。必须大于等于0。默认是 0，即不允许有错误行。\n        采样窗口为 max_batch_rows * 10。即如果在采样窗口内，错误行数大于 max_error_number，则会导致例行作业被暂停，需要人工介入检查数据质量问题。\n        被 where 条件过滤掉的行不算错误行。\n\n    4. strict_mode\n\n        是否开启严格模式，默认为关闭。如果开启后，非空原始数据的列类型变换如果结果为 NULL，则会被过滤。指定方式为 "strict_mode" = "true"\n\n    5. timezone\n\n        指定导入作业所使用的时区。默认为使用 Session 的 timezone 参数。该参数会影响所有导入涉及的和时区有关的函数结果。\n\n    6. format\n\n        指定导入数据格式，默认是csv，支持json格式。\n\n    7. jsonpaths\n\n        jsonpaths: 导入json方式分为：简单模式和匹配模式。如果设置了jsonpath则为匹配模式导入，否则为简单模式导入，具体可参考示例。\n\n    8. strip_outer_array\n\n        布尔类型，为true表示json数据以数组对象开始且将数组对象中进行展平，默认值是false。\n\n    9. json_root\n\n        json_root为合法的jsonpath字符串，用于指定json document的根节点，默认值为""。\n\n    10. send_batch_parallelism\n        \n        整型，用于设置发送批处理数据的并行度，如果并行度的值超过 BE 配置中的 `max_send_batch_parallelism_per_job`，那么作为协调点的 BE 将使用 `max_send_batch_parallelism_per_job` 的值。 \n\n6. data_source\n\n    数据源的类型。当前支持：\n\n        KAFKA\n\n7. data_source_properties\n\n    指定数据源相关的信息。\n    语法：\n\n    (\n        "key1" = "val1",\n        "key2" = "val2"\n    )\n\n    1. KAFKA 数据源\n\n        1. kafka_broker_list\n\n            Kafka 的 broker 连接信息。格式为 ip:host。多个broker之间以逗号分隔。\n            示例：\n\n                "kafka_broker_list" = "broker1:9092,broker2:9092"\n\n        2. kafka_topic\n\n            指定要订阅的 Kafka 的 topic。\n            示例：\n\n                "kafka_topic" = "my_topic"\n\n        3. kafka_partitions/kafka_offsets\n\n            指定需要订阅的 kafka partition，以及对应的每个 partition 的起始 offset。\n\n            offset 可以指定从大于等于 0 的具体 offset，或者：\n            1) OFFSET_BEGINNING: 从有数据的位置开始订阅。\n            2) OFFSET_END: 从末尾开始订阅。\n            3) 时间戳，格式必须如："2021-05-11 10:00:00"，系统会自动定位到大于等于该时间戳的第一个消息的offset。注意，时间戳格式的offset不能和数字类型混用，只能选其一。\n\n            如果没有指定，则默认从 OFFSET_END 开始订阅 topic 下的所有 partition。\n            示例：\n\n                "kafka_partitions" = "0,1,2,3",\n                "kafka_offsets" = "101,0,OFFSET_BEGINNING,OFFSET_END"\n\n                "kafka_partitions" = "0,1",\n                "kafka_offsets" = "2021-05-11 10:00:00, 2021-05-11 11:00:00"\n                \n        4. property\n\n            指定自定义kafka参数。\n            功能等同于kafka shell中 "--property" 参数。\n            当参数的 value 为一个文件时，需要在 value 前加上关键词："FILE:"。\n            关于如何创建文件，请参阅 "HELP CREATE FILE;"\n            更多支持的自定义参数，请参阅 librdkafka 的官方 CONFIGURATION 文档中，client 端的配置项。\n\n            示例:\n                "property.client.id" = "12345",\n                "property.ssl.ca.location" = "FILE:ca.pem"\n\n            1.使用 SSL 连接 Kafka 时，需要指定以下参数：\n\n            "property.security.protocol" = "ssl",\n            "property.ssl.ca.location" = "FILE:ca.pem",\n            "property.ssl.certificate.location" = "FILE:client.pem",\n            "property.ssl.key.location" = "FILE:client.key",\n            "property.ssl.key.password" = "abcdefg"\n\n            其中：\n            "property.security.protocol" 和 "property.ssl.ca.location" 为必须，用于指明连接方式为 SSL，以及 CA 证书的位置。\n\n            如果 Kafka server 端开启了 client 认证，则还需设置：\n\n            "property.ssl.certificate.location"\n            "property.ssl.key.location"\n            "property.ssl.key.password"\n\n            分别用于指定 client 的 public key，private key 以及 private key 的密码。\n\n\n            2.指定kafka partition的默认起始offset\n            如果没有指定kafka_partitions/kafka_offsets,默认消费所有分区,此时可以指定kafka_default_offsets指定起始 offset。默认为 OFFSET_END，即从末尾开始订阅。\n            值为\n                1) OFFSET_BEGINNING: 从有数据的位置开始订阅。\n                2) OFFSET_END: 从末尾开始订阅。\n                3) 时间戳，格式同 kafka_offsets\n\n                示例：\n                "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n                "property.kafka_default_offsets" = "2021-05-11 10:00:00"\n\n8. 导入数据格式样例\n\n    整型类（TINYINT/SMALLINT/INT/BIGINT/LARGEINT）：1, 1000, 1234\n    浮点类（FLOAT/DOUBLE/DECIMAL）：1.1, 0.23, .356\n    日期类（DATE/DATETIME）：2017-10-03, 2017-06-13 12:34:03。\n    字符串类（CHAR/VARCHAR）（无引号）：I am a student, a\n    NULL值：\\N\n')])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[n._v("#")]),n._v(" example")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('1. 为 example_db 的 example_tbl 创建一个名为 test1 的 Kafka 例行导入任务。指定列分隔符和 group.id 和 client.id，并且自动默认消费所有分区，且从有数据的位置（OFFSET_BEGINNING）开始订阅\n\n    CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n    COLUMNS TERMINATED BY ",",\n    COLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100)\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "property.group.id" = "xxx",\n        "property.client.id" = "xxx",\n        "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n    );\n\n2. 为 example_db 的 example_tbl 创建一个名为 test1 的 Kafka 例行导入任务。导入任务为严格模式。\n\n    CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n    COLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\n    WHERE k1 > 100 and k2 like "%doris%"\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n\n3. 通过 SSL 认证方式，从 Kafka 集群导入数据。同时设置 client.id 参数。导入任务为非严格模式，时区为 Africa/Abidjan\n\n    CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n    COLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\n    WHERE k1 > 100 and k2 like "%doris%"\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false",\n        "timezone" = "Africa/Abidjan"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "property.security.protocol" = "ssl",\n        "property.ssl.ca.location" = "FILE:ca.pem",\n        "property.ssl.certificate.location" = "FILE:client.pem",\n        "property.ssl.key.location" = "FILE:client.key",\n        "property.ssl.key.password" = "abcdefg",\n        "property.client.id" = "my_client_id"\n    );\n4. 简单模式导入json\n    CREATE ROUTINE LOAD example_db.test_json_label_1 ON table1\n    COLUMNS(category,price,author)\n    PROPERTIES\n    (\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false",\n    "format" = "json"\n    )\n    FROM KAFKA\n    (\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2",\n    "kafka_offsets" = "0,0,0"\n    );\n    支持两种json数据格式：\n  1）{"category":"a9jadhx","author":"test","price":895}\n    2）[\n            {"category":"a9jadhx","author":"test","price":895},\n            {"category":"axdfa1","author":"EvelynWaugh","price":1299}\n        ]\n\n5. 精准导入json数据格式\n    CREATE TABLE `example_tbl` (\n    `category` varchar(24) NULL COMMENT "",\n    `author` varchar(24) NULL COMMENT "",\n    `timestamp` bigint(20) NULL COMMENT "",\n    `dt` int(11) NULL COMMENT "",\n    `price` double REPLACE\n    ) ENGINE=OLAP\n    AGGREGATE KEY(`category`,`author`,`timestamp`,`dt`)\n    COMMENT "OLAP"\n    PARTITION BY RANGE(`dt`)\n    (PARTITION p0 VALUES [("-2147483648"), ("20200509")),\n    PARTITION p20200509 VALUES [("20200509"), ("20200510")),\n    PARTITION p20200510 VALUES [("20200510"), ("20200511")),\n    PARTITION p20200511 VALUES [("20200511"), ("20200512")))\n    DISTRIBUTED BY HASH(`category`,`author`,`timestamp`) BUCKETS 4\n    PROPERTIES (\n        "replication_num" = "1"\n      );\n\n    CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n    COLUMNS(category, author, price, timestamp, dt=from_unixtime(timestamp, \'%Y%m%d\'))\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false",\n        "format" = "json",\n        "jsonpaths" = "[\\"$.category\\",\\"$.author\\",\\"$.price\\",\\"$.timestamp\\"]",\n        "strip_outer_array" = "true"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2",\n        "kafka_offsets" = "0,0,0"\n    );\n')])])]),a("p",[n._v('json数据格式:\n[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]\n说明：\n1）如果json数据是以数组开始，并且数组中每个对象是一条记录，则需要将strip_outer_array设置成true，表示展平数组。\n2）如果json数据是以数组开始，并且数组中每个对象是一条记录，在设置jsonpath时，我们的ROOT节点实际上是数组中对象。')]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('6. 用户指定根节点json_root\n    CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n    COLUMNS(category, author, price, timestamp, dt=from_unixtime(timestamp, \'%Y%m%d\'))\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false",\n        "format" = "json",\n        "jsonpaths" = "[\\"$.category\\",\\"$.author\\",\\"$.price\\",\\"$.timestamp\\"]",\n        "strip_outer_array" = "true",\n        "json_root" = "$.RECORDS"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2",\n        "kafka_offsets" = "0,0,0"\n    );\n')])])]),a("p",[n._v('json数据格式:\n{\n"RECORDS":[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]\n}')]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('7. 为 example_db 的 example_tbl 创建一个名为 test1 的 Kafka 例行导入任务。并且删除与v3 >100 行相匹配的key列的行\n\n    CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n    WITH MERGE\n    COLUMNS(k1, k2, k3, v1, v2, v3),\n    WHERE k1 > 100 and k2 like "%doris%",\n    DELETE ON v3 >100\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    \n8. 导入数据到含有sequence列的UNIQUE_KEYS表中\n    CREATE ROUTINE LOAD example_db.test_job ON example_tbl\n    COLUMNS TERMINATED BY ",",\n    COLUMNS(k1,k2,source_sequence,v1,v2),\n    ORDER BY source_sequence\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "30",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200"\n    ) FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n\n8. 过滤原始数据\n\n    CREATE ROUTINE LOAD example_db.test_job ON example_tbl\n    COLUMNS TERMINATED BY ",",\n    COLUMNS(k1,k2,source_sequence,v1,v2),\n    PRECEDING FILTER k1 > 2\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "30",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200"\n    ) FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n\n9. 从指定的时间点开始消费\n\n    CREATE ROUTINE LOAD example_db.test_job ON example_tbl\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "30",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200"\n    ) FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "property.kafka_default_offsets" = "2021-10-10 11:00:00"\n    );\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[n._v("#")]),n._v(" keyword")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("CREATE,ROUTINE,LOAD\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);