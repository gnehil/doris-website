(window.webpackJsonp=window.webpackJsonp||[]).push([[1836],{2463:function(s,t,a){"use strict";a.r(t);var e=a(15),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"s3-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-load"}},[s._v("#")]),s._v(" S3 Load")]),s._v(" "),a("p",[s._v("Starting from version 0.14, Doris supports the direct import of data from online storage systems that support the S3 protocol through the S3 protocol.")]),s._v(" "),a("p",[s._v("This document mainly introduces how to import data stored in AWS S3. It also supports the import of other object storage systems that support the S3 protocol, such as Baidu Cloud’s BOS, Alibaba Cloud’s OSS and Tencent Cloud’s COS, etc.")]),s._v(" "),a("h2",{attrs:{id:"applicable-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applicable-scenarios"}},[s._v("#")]),s._v(" Applicable scenarios")]),s._v(" "),a("ul",[a("li",[s._v("Source data in S3 protocol accessible storage systems, such as S3, BOS.")]),s._v(" "),a("li",[s._v("Data volumes range from tens to hundreds of GB.")])]),s._v(" "),a("h2",{attrs:{id:"preparing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing"}},[s._v("#")]),s._v(" Preparing")]),s._v(" "),a("ol",[a("li",[s._v("Standard AK and SK First, you need to find or regenerate AWS "),a("code",[s._v("Access keys")]),s._v(", you can find the generation method in "),a("code",[s._v("My Security Credentials")]),s._v(" of AWS console, as shown in the following figure: "),a("a",{attrs:{href:"https://doris.apache.org/images/aws_ak_sk.png",target:"_blank",rel:"noopener noreferrer"}},[s._v("AK_SK"),a("OutboundLink")],1),s._v(" Select "),a("code",[s._v("Create New Access Key")]),s._v(" and pay attention to save and generate AK and SK.")]),s._v(" "),a("li",[s._v("Prepare REGION and ENDPOINT REGION can be selected when creating the bucket or can be viewed in the bucket list. ENDPOINT can be found through REGION on the following page "),a("a",{attrs:{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region",target:"_blank",rel:"noopener noreferrer"}},[s._v("AWS Documentation"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("Other cloud storage systems can find relevant information compatible with S3 in corresponding documents")]),s._v(" "),a("h2",{attrs:{id:"start-loading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-loading"}},[s._v("#")]),s._v(" Start Loading")]),s._v(" "),a("p",[s._v("Like Broker Load just replace "),a("code",[s._v("WITH BROKER broker_name ()")]),s._v(" with")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("example:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" LABEL example_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exmpale_label_1\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATA")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INFILE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s3://your_bucket_name/your_file.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" load_test\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMNS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TERMINATED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" S3\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AWS_ENDPOINT"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AWS_ENDPOINT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AWS_ACCESS_KEY"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AWS_ACCESS_KEY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AWS_SECRET_KEY"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AWS_SECRET_KEY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AWS_REGION"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AWS_REGION"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    PROPERTIES\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timeout"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3600"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[s._v("#")]),s._v(" FAQ")]),s._v(" "),a("p",[s._v("S3 SDK uses virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the "),a("code",[s._v("use_path_style")]),s._v(" parameter to force the use of path style:")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('   WITH S3\n   (\n         "AWS_ENDPOINT" = "AWS_ENDPOINT",\n         "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n         "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n         "AWS_REGION" = "AWS_REGION",\n         "use_path_style" = "true"\n   )\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);