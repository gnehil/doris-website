(window.webpackJsonp=window.webpackJsonp||[]).push([[525],{1152:function(e,a,t){"use strict";t.r(a);var s=t(15),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"alter-routine-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alter-routine-load"}},[e._v("#")]),e._v(" ALTER ROUTINE LOAD")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("p",[e._v("This syntax is used to modify a routine import job that has been created.")]),e._v(" "),t("p",[e._v("Only jobs in the PAUSED state can be modified.")]),e._v(" "),t("p",[e._v("Syntax:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("ALTER ROUTINE LOAD FOR [db.]job_name\n[job_properties]\nFROM data_source\n[data_source_properties]\n")])])]),t("ol",[t("li",[t("p",[t("code",[e._v("[db.]job_name")])]),e._v(" "),t("p",[e._v("Specify the name of the job to be modified.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("job_properties")])]),e._v(" "),t("p",[e._v("Specify the job parameters that need to be modified. Currently only supports the modification of the following parameters:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("desired_concurrent_number")])]),e._v(" "),t("li",[t("code",[e._v("max_error_number")])]),e._v(" "),t("li",[t("code",[e._v("max_batch_interval")])]),e._v(" "),t("li",[t("code",[e._v("max_batch_rows")])]),e._v(" "),t("li",[t("code",[e._v("max_batch_size")])]),e._v(" "),t("li",[t("code",[e._v("jsonpaths")])]),e._v(" "),t("li",[t("code",[e._v("json_root")])]),e._v(" "),t("li",[t("code",[e._v("strip_outer_array")])]),e._v(" "),t("li",[t("code",[e._v("strict_mode")])]),e._v(" "),t("li",[t("code",[e._v("timezone")])]),e._v(" "),t("li",[t("code",[e._v("num_as_string")])]),e._v(" "),t("li",[t("code",[e._v("fuzzy_parse")])])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("data_source")])]),e._v(" "),t("p",[e._v("The type of data source. Currently supported:")]),e._v(" "),t("p",[e._v("KAFKA")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("data_source_properties")])]),e._v(" "),t("p",[e._v("The relevant attributes of the data source. Currently only supports:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("kafka_partitions")])]),e._v(" "),t("li",[t("code",[e._v("kafka_offsets")])]),e._v(" "),t("li",[t("code",[e._v("kafka_broker_list")])]),e._v(" "),t("li",[t("code",[e._v("kafka_topic")])]),e._v(" "),t("li",[e._v("Custom property, such as "),t("code",[e._v("property.group.id")])])]),e._v(" "),t("p",[e._v("Notice:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("kafka_partitions")]),e._v(" and "),t("code",[e._v("kafka_offsets")]),e._v(" are used to modify the offset of the kafka partition to be consumed, and can only modify the currently consumed partition. Cannot add partition.")])])])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Modify "),t("code",[e._v("desired_concurrent_number")]),e._v(" to 1")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "1"\n);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Modify "),t("code",[e._v("desired_concurrent_number")]),e._v(" to 10, modify partition offset, and modify group id.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "10"\n)\nFROM kafka\n(\n    "kafka_partitions" = "0, 1, 2",\n    "kafka_offsets" = "100, 200, 100",\n    "property.group.id" = "new_group"\n);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])])])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("ALTER,ROUTINE,LOAD\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);