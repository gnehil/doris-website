(window.webpackJsonp=window.webpackJsonp||[]).push([[2890],{3520:function(s,e,n){"use strict";n.r(e);var a=n(15),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"使用-intellij-idea-搭建-fe-开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-intellij-idea-搭建-fe-开发环境"}},[s._v("#")]),s._v(" 使用 IntelliJ IDEA 搭建 FE 开发环境")]),s._v(" "),n("h2",{attrs:{id:"_1-环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境准备"}},[s._v("#")]),s._v(" 1.环境准备")]),s._v(" "),n("p",[s._v("JDK1.8+, IntelliJ IDEA")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("从 https://github.com/apache/incubator-doris.git 下载源码到本地")])]),s._v(" "),n("li",[n("p",[s._v("使用IntelliJ IDEA 打开代码根目录")])]),s._v(" "),n("li",[n("p",[s._v("如果仅进行fe开发而没有编译过thirdparty，则需要安装thrift，并将thrift 复制或者连接到 "),n("code",[s._v("thirdparty/installed/bin")]),s._v(" 目录下")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v(" 安装 `thrift` 0.13.0 版本(注意：`Doris` 0.15 和最新的版本基于 `thrift` 0.13.0 构建, 之前的版本依然使用`thrift` 0.9.3 构建)\n\n Windows: \n    1. 下载：`http://archive.apache.org/dist/thrift/0.13.0/thrift-0.13.0.exe`\n    2. 拷贝：将文件拷贝至 `./thirdparty/installed/bin`\n \n MacOS: \n    1. 下载：`brew install thrift@0.13.0`\n    2. 建立软链接： \n       `mkdir -p ./thirdparty/installed/bin`\n       # ARM架构macOS\n       `ln -s /opt/homebrew/Cellar/thrift@0.13.0/0.13.0/bin/thrift ./thirdparty/installed/bin/thrift`\n       # Intel架构macOS\n       `ln -s /usr/local/Cellar/thrift@0.13.0/0.13.0/bin/thrift ./thirdparty/installed/bin/thrift`\n \n 注：MacOS执行 `brew install thrift@0.13.0` 可能会报找不到版本的错误，解决方法如下，在终端执行：\n    1. `brew tap-new $USER/local-tap`\n    2. `brew extract --version='0.13.0' thrift $USER/local-tap`\n    3. `brew install thrift@0.13.0`\n 参考链接: `https://gist.github.com/tonydeng/02e571f273d6cce4230dc8d5f394493c`\n")])])])]),s._v(" "),n("li",[n("p",[s._v("如果是Mac 或者 Linux 环境 可以通过 如下命令生成自动生成代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd fe\nmvn generate-sources\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("如果出现错误，则执行：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd fe && mvn clean install -DskipTests\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("p",[s._v("或者通过图形界面运行 maven 命令生成")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/images/gen_code.png"),alt:""}}),s._v(" "),n("p",[s._v("如果使用windows环境可能会有make命令和sh脚本无法执行的情况 可以通过拷贝linux上的 "),n("code",[s._v("fe/fe-core/target/generated-sources")]),s._v(" 目录拷贝到相应的目录的方式实现，也可以通过docker 镜像挂载本地目录之后，在docker 内部生成自动生成代码，可以参照编译一节")]),s._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[s._v("如果还未生成过help文档，需要跳转到docs目录，执行"),n("code",[s._v("sh build_help_zip.sh")]),s._v("，\n然后将build中的help-resource.zip拷贝到fe/fe-core/target/classes中")])]),s._v(" "),n("h2",{attrs:{id:"_2-调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-调试"}},[s._v("#")]),s._v(" 2.调试")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("用idea导入fe工程")])]),s._v(" "),n("li",[n("p",[s._v("在fe目录下创建下面红框标出的目录（在新版本中该目录可能存在，如存在则跳过，否则创建）")])])]),s._v(" "),n("img",{attrs:{src:s.$withBase("/images/DEBUG4.png"),alt:""}}),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("编译"),n("code",[s._v("ui")]),s._v("项目，将 "),n("code",[s._v("ui/dist/")]),s._v("目录中的文件拷贝到"),n("code",[s._v("webroot")]),s._v("中（如果你不需要看"),n("code",[s._v("Doris")]),s._v(" UI，这一步可以跳过）")])]),s._v(" "),n("h2",{attrs:{id:"_3-配置conf-fe-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置conf-fe-conf"}},[s._v("#")]),s._v(" 3.配置conf/fe.conf")]),s._v(" "),n("p",[s._v("下面是我自己的配置，你可以根据自己的需要进行修改(注意：如果使用"),n("code",[s._v("Mac")]),s._v("开发，由于"),n("code",[s._v("docker for Mac")]),s._v("不支持"),n("code",[s._v("Host")]),s._v("模式，需要使用"),n("code",[s._v("-p")]),s._v("方式暴露"),n("code",[s._v("be")]),s._v("端口，同时"),n("code",[s._v("fe.conf")]),s._v("的"),n("code",[s._v("priority_networks")]),s._v("配置为容器内可访问的Ip，例如WIFI的Ip)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n#####################################################################\n## The uppercase properties are read and exported by bin/start_fe.sh.\n## To see all Frontend configurations,\n## see fe/src/org/apache/doris/common/Config.java\n#####################################################################\n\n# the output dir of stderr and stdout \nLOG_DIR = ${DORIS_HOME}/log\n\nDATE = `date +%Y%m%d-%H%M%S`\nJAVA_OPTS="-Xmx2048m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$DORIS_HOME/log/fe.gc.log.$DATE"\n\n# For jdk 9+, this JAVA_OPTS will be used as default JVM options\nJAVA_OPTS_FOR_JDK_9="-Xmx4096m -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xlog:gc*:$DORIS_HOME/log/fe.gc.log.$DATE:time"\n\n##\n## the lowercase properties are read by main program.\n##\n\n# INFO, WARN, ERROR, FATAL\nsys_log_level = INFO\n\n# store metadata, create it if it is not exist.\n# Default value is ${DORIS_HOME}/doris-meta\n# meta_dir = ${DORIS_HOME}/doris-meta\n\nhttp_port = 8030\nrpc_port = 9020\nquery_port = 9030\nedit_log_port = 9010\nmysql_service_nio_enabled = true\n\n# Choose one if there are more than one ip except loopback address. \n# Note that there should at most one ip match this list.\n# If no ip match this rule, will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/24\n# Default value is empty.\n# priority_networks = 10.10.10.0/24;192.168.0.0/16\n\n# Advanced configurations \n# log_roll_size_mb = 1024\n# sys_log_dir = ${DORIS_HOME}/log\n# sys_log_roll_num = 10\n# sys_log_verbose_modules = \n# audit_log_dir = ${DORIS_HOME}/log\n# audit_log_modules = slow_query, query\n# audit_log_roll_num = 10\n# meta_delay_toleration_second = 10\n# qe_max_connection = 1024\n# max_conn_per_user = 100\n# qe_query_timeout_second = 300\n# qe_slow_log_ms = 5000\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br")])]),n("h2",{attrs:{id:"_4-设置环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置环境变量"}},[s._v("#")]),s._v(" 4.设置环境变量")]),s._v(" "),n("p",[s._v("在IDEA中设置运行环境变量")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/images/DEBUG5.png"),alt:""}}),s._v(" "),n("h2",{attrs:{id:"_5-配置options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置options"}},[s._v("#")]),s._v(" 5.配置options")]),s._v(" "),n("p",[s._v("由于部分依赖使用了"),n("code",[s._v("provided")]),s._v("，idea需要做下特殊配置，在"),n("code",[s._v("Run/Debug Configurations")]),s._v("设置中点击右侧"),n("code",[s._v("Modify options")]),s._v("，勾选"),n("code",[s._v('Add dependencies with "provided" scope to classpath')]),s._v("选项")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/images/idea_options.png"),alt:""}}),s._v(" "),n("h2",{attrs:{id:"_6-启动fe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-启动fe"}},[s._v("#")]),s._v(" 6.启动fe")]),s._v(" "),n("p",[s._v("下面你就可以愉快的启动，调试你的FE了")])])}),[],!1,null,null,null);e.default=t.exports}}]);