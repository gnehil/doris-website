(window.webpackJsonp=window.webpackJsonp||[]).push([[4137],{4763:function(_,v,t){"use strict";t.r(v);var r=t(15),e=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"安装与部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装与部署"}},[_._v("#")]),_._v(" 安装与部署")]),_._v(" "),t("p",[_._v("该文档主要介绍了部署 Doris 所需软硬件环境、建议的部署方式、集群扩容缩容，以及集群搭建到运行过程中的常见问题。"),t("br"),_._v("\n在阅读本文档前，请先根据编译文档编译 Doris。")]),_._v(" "),t("h2",{attrs:{id:"软硬件需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软硬件需求"}},[_._v("#")]),_._v(" 软硬件需求")]),_._v(" "),t("h3",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[_._v("#")]),_._v(" 概述")]),_._v(" "),t("p",[_._v("Doris 作为一款开源的 MPP 架构 OLAP 数据库，能够运行在绝大多数主流的商用服务器上。为了能够充分运用 MPP 架构的并发优势，以及 Doris 的高可用特性，我们建议 Doris 的部署遵循以下需求：")]),_._v(" "),t("h4",{attrs:{id:"linux-操作系统版本需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-操作系统版本需求"}},[_._v("#")]),_._v(" Linux 操作系统版本需求")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("Linux 系统")]),_._v(" "),t("th",[_._v("版本")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("CentOS")]),_._v(" "),t("td",[_._v("7.1 及以上")])]),_._v(" "),t("tr",[t("td",[_._v("Ubuntu")]),_._v(" "),t("td",[_._v("16.04 及以上")])])])]),_._v(" "),t("h4",{attrs:{id:"软件需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件需求"}},[_._v("#")]),_._v(" 软件需求")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("软件")]),_._v(" "),t("th",[_._v("版本")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("Java")]),_._v(" "),t("td",[_._v("1.8 及以上")])]),_._v(" "),t("tr",[t("td",[_._v("GCC")]),_._v(" "),t("td",[_._v("4.8.2 及以上")])])])]),_._v(" "),t("h4",{attrs:{id:"操作系统安装要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统安装要求"}},[_._v("#")]),_._v(" 操作系统安装要求")]),_._v(" "),t("h5",{attrs:{id:"设置系统最大打开文件句柄数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置系统最大打开文件句柄数"}},[_._v("#")]),_._v(" 设置系统最大打开文件句柄数")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("vi /etc/security/limits.conf \n* soft nofile 65536\n* hard nofile 65536\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br")])]),t("h5",{attrs:{id:"时钟同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时钟同步"}},[_._v("#")]),_._v(" 时钟同步")]),_._v(" "),t("p",[_._v("Doris 的元数据要求时间精度要小于5000ms，所以所有集群所有机器要进行时钟同步，避免因为时钟问题引发的元数据不一致导致服务出现异常。")]),_._v(" "),t("h5",{attrs:{id:"关闭交换分区-swap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭交换分区-swap"}},[_._v("#")]),_._v(" 关闭交换分区（swap）")]),_._v(" "),t("p",[_._v("Linux交换分区会给Doris带来很严重的性能问题，需要在安装之前禁用交换分区")]),_._v(" "),t("h5",{attrs:{id:"liunx文件系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#liunx文件系统"}},[_._v("#")]),_._v(" Liunx文件系统")]),_._v(" "),t("p",[_._v("这里我们推荐使用ext4文件系统，在安装操作系统的时候，请选择ext4文件系统。")]),_._v(" "),t("h4",{attrs:{id:"开发测试环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发测试环境"}},[_._v("#")]),_._v(" 开发测试环境")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("模块")]),_._v(" "),t("th",[_._v("CPU")]),_._v(" "),t("th",[_._v("内存")]),_._v(" "),t("th",[_._v("磁盘")]),_._v(" "),t("th",[_._v("网络")]),_._v(" "),t("th",[_._v("实例数量")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("Frontend")]),_._v(" "),t("td",[_._v("8核+")]),_._v(" "),t("td",[_._v("8GB+")]),_._v(" "),t("td",[_._v("SSD 或 SATA，10GB+ *")]),_._v(" "),t("td",[_._v("千兆网卡")]),_._v(" "),t("td",[_._v("1")])]),_._v(" "),t("tr",[t("td",[_._v("Backend")]),_._v(" "),t("td",[_._v("8核+")]),_._v(" "),t("td",[_._v("16GB+")]),_._v(" "),t("td",[_._v("SSD 或 SATA，50GB+ *")]),_._v(" "),t("td",[_._v("千兆网卡")]),_._v(" "),t("td",[_._v("1-3 *")])])])]),_._v(" "),t("h4",{attrs:{id:"生产环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境"}},[_._v("#")]),_._v(" 生产环境")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("模块")]),_._v(" "),t("th",[_._v("CPU")]),_._v(" "),t("th",[_._v("内存")]),_._v(" "),t("th",[_._v("磁盘")]),_._v(" "),t("th",[_._v("网络")]),_._v(" "),t("th",[_._v("实例数量（最低要求）")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("Frontend")]),_._v(" "),t("td",[_._v("16核+")]),_._v(" "),t("td",[_._v("64GB+")]),_._v(" "),t("td",[_._v("SSD 或 RAID 卡，100GB+ *")]),_._v(" "),t("td",[_._v("万兆网卡")]),_._v(" "),t("td",[_._v("1-5 *")])]),_._v(" "),t("tr",[t("td",[_._v("Backend")]),_._v(" "),t("td",[_._v("16核+")]),_._v(" "),t("td",[_._v("64GB+")]),_._v(" "),t("td",[_._v("SSD 或 SATA，100G+ *")]),_._v(" "),t("td",[_._v("万兆网卡")]),_._v(" "),t("td",[_._v("10-100 *")])])])]),_._v(" "),t("blockquote",[t("p",[_._v("注1：")]),_._v(" "),t("ol",[t("li",[_._v("FE 的磁盘空间主要用于存储元数据，包括日志和 image。通常从几百 MB 到几个 GB 不等。")]),_._v(" "),t("li",[_._v("BE 的磁盘空间主要用于存放用户数据，总磁盘空间按用户总数据量 * 3（3副本）计算，然后再预留额外 40% 的空间用作后台 compaction 以及一些中间数据的存放。")]),_._v(" "),t("li",[_._v("一台机器上可以部署多个 BE 实例，但是"),t("strong",[_._v("只能部署一个 FE")]),_._v("。如果需要 3 副本数据，那么至少需要 3 台机器各部署一个 BE 实例（而不是1台机器部署3个BE实例）。"),t("strong",[_._v("多个FE所在服务器的时钟必须保持一致（允许最多5秒的时钟偏差）")])]),_._v(" "),t("li",[_._v("测试环境也可以仅适用一个 BE 进行测试。实际生产环境，BE 实例数量直接决定了整体查询延迟。")]),_._v(" "),t("li",[_._v("所有部署节点关闭 Swap。")])])]),_._v(" "),t("blockquote",[t("p",[_._v("注2：FE 节点的数量")]),_._v(" "),t("ol",[t("li",[_._v("FE 角色分为 Follower 和 Observer，（Leader 为 Follower 组中选举出来的一种角色，以下统称 Follower）。")]),_._v(" "),t("li",[_._v("FE 节点数据至少为1（1 个 Follower）。当部署 1 个 Follower 和 1 个 Observer 时，可以实现读高可用。当部署 3 个 Follower 时，可以实现读写高可用（HA）。")]),_._v(" "),t("li",[_._v("Follower 的数量"),t("strong",[_._v("必须")]),_._v("为奇数，Observer 数量随意。")]),_._v(" "),t("li",[_._v("根据以往经验，当集群可用性要求很高时（比如提供在线业务），可以部署 3 个 Follower 和 1-3 个 Observer。如果是离线业务，建议部署 1 个 Follower 和 1-3 个 Observer。")])])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("通常我们建议 10 ~ 100 台左右的机器，来充分发挥 Doris 的性能（其中 3 台部署 FE（HA），剩余的部署 BE）")])]),_._v(" "),t("li",[t("strong",[_._v("当然，Doris的性能与节点数量及配置正相关。在最少4台机器（一台 FE，三台 BE，其中一台 BE 混部一个 Observer FE 提供元数据备份），以及较低配置的情况下，依然可以平稳的运行 Doris。")])]),_._v(" "),t("li",[t("strong",[_._v("如果 FE 和 BE 混部，需注意资源竞争问题，并保证元数据目录和数据目录分属不同磁盘。")])])]),_._v(" "),t("h4",{attrs:{id:"broker-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broker-部署"}},[_._v("#")]),_._v(" Broker 部署")]),_._v(" "),t("p",[_._v("Broker 是用于访问外部数据源（如 hdfs）的进程。通常，在每台机器上部署一个 broker 实例即可。")]),_._v(" "),t("h4",{attrs:{id:"网络需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络需求"}},[_._v("#")]),_._v(" 网络需求")]),_._v(" "),t("p",[_._v("Doris 各个实例直接通过网络进行通讯。以下表格展示了所有需要的端口")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("实例名称")]),_._v(" "),t("th",[_._v("端口名称")]),_._v(" "),t("th",[_._v("默认端口")]),_._v(" "),t("th",[_._v("通讯方向")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("BE")]),_._v(" "),t("td",[_._v("be_port")]),_._v(" "),t("td",[_._v("9060")]),_._v(" "),t("td",[_._v("FE --\x3e BE")]),_._v(" "),t("td",[_._v("BE 上 thrift server 的端口，用于接收来自 FE 的请求")])]),_._v(" "),t("tr",[t("td",[_._v("BE")]),_._v(" "),t("td",[_._v("webserver_port")]),_._v(" "),t("td",[_._v("8040")]),_._v(" "),t("td",[_._v("BE <--\x3e BE")]),_._v(" "),t("td",[_._v("BE 上的 http server 的端口")])]),_._v(" "),t("tr",[t("td",[_._v("BE")]),_._v(" "),t("td",[_._v("heartbeat_service_port")]),_._v(" "),t("td",[_._v("9050")]),_._v(" "),t("td",[_._v("FE --\x3e BE")]),_._v(" "),t("td",[_._v("BE 上心跳服务端口（thrift），用于接收来自 FE 的心跳")])]),_._v(" "),t("tr",[t("td",[_._v("BE")]),_._v(" "),t("td",[_._v("brpc_port")]),_._v(" "),t("td",[_._v("8060")]),_._v(" "),t("td",[_._v("FE <--\x3e BE, BE <--\x3e BE")]),_._v(" "),t("td",[_._v("BE 上的 brpc 端口，用于 BE 之间通讯")])]),_._v(" "),t("tr",[t("td",[_._v("FE")]),_._v(" "),t("td",[_._v("http_port")]),_._v(" "),t("td",[_._v("8030")]),_._v(" "),t("td",[_._v("FE <--\x3e FE，用户 <--\x3e FE")]),_._v(" "),t("td",[_._v("FE 上的 http server 端口")])]),_._v(" "),t("tr",[t("td",[_._v("FE")]),_._v(" "),t("td",[_._v("rpc_port")]),_._v(" "),t("td",[_._v("9020")]),_._v(" "),t("td",[_._v("BE --\x3e FE, FE <--\x3e FE")]),_._v(" "),t("td",[_._v("FE 上的 thrift server 端口，每个fe的配置需要保持一致")])]),_._v(" "),t("tr",[t("td",[_._v("FE")]),_._v(" "),t("td",[_._v("query_port")]),_._v(" "),t("td",[_._v("9030")]),_._v(" "),t("td",[_._v("用户 <--\x3e FE")]),_._v(" "),t("td",[_._v("FE 上的 mysql server 端口")])]),_._v(" "),t("tr",[t("td",[_._v("FE")]),_._v(" "),t("td",[_._v("edit_log_port")]),_._v(" "),t("td",[_._v("9010")]),_._v(" "),t("td",[_._v("FE <--\x3e FE")]),_._v(" "),t("td",[_._v("FE 上的 bdbje 之间通信用的端口")])]),_._v(" "),t("tr",[t("td",[_._v("Broker")]),_._v(" "),t("td",[_._v("broker_ipc_port")]),_._v(" "),t("td",[_._v("8000")]),_._v(" "),t("td",[_._v("FE --\x3e Broker, BE --\x3e Broker")]),_._v(" "),t("td",[_._v("Broker 上的 thrift server，用于接收请求")])])])]),_._v(" "),t("blockquote",[t("p",[_._v("注：")]),_._v(" "),t("ol",[t("li",[_._v("当部署多个 FE 实例时，要保证 FE 的 http_port 配置相同。")]),_._v(" "),t("li",[_._v("部署前请确保各个端口在应有方向上的访问权限。")])])]),_._v(" "),t("h4",{attrs:{id:"ip-绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip-绑定"}},[_._v("#")]),_._v(" IP 绑定")]),_._v(" "),t("p",[_._v("因为有多网卡的存在，或因为安装过 docker 等环境导致的虚拟网卡的存在，同一个主机可能存在多个不同的 ip。当前 Doris 并不能自动识别可用 IP。所以当遇到部署主机上有多个 IP 时，必须通过 priority_networks 配置项来强制指定正确的 IP。")]),_._v(" "),t("p",[_._v("priority_networks 是 FE 和 BE 都有的一个配置，配置项需写在 fe.conf 和 be.conf 中。该配置项用于在 FE 或 BE 启动时，告诉进程应该绑定哪个IP。示例如下：")]),_._v(" "),t("p",[t("code",[_._v("priority_networks=10.1.3.0/24")])]),_._v(" "),t("p",[_._v("这是一种 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",target:"_blank",rel:"noopener noreferrer"}},[_._v("CIDR"),t("OutboundLink")],1),_._v(" 的表示方法。FE 或 BE 会根据这个配置项来寻找匹配的IP，作为自己的 localIP。")]),_._v(" "),t("p",[t("strong",[_._v("注意")]),_._v("：当配置完 priority_networks 并启动 FE 或 BE 后，只是保证了 FE 或 BE 自身的 IP 进行了正确的绑定。而在使用 ADD BACKEND 或 ADD FRONTEND 语句中，也需要指定和 priority_networks 配置匹配的 IP，否则集群无法建立。举例：")]),_._v(" "),t("p",[_._v("BE 的配置为："),t("code",[_._v("priority_networks=10.1.3.0/24")])]),_._v(" "),t("p",[_._v("但是在 ADD BACKEND 时使用的是："),t("code",[_._v('ALTER SYSTEM ADD BACKEND "192.168.0.1:9050";')])]),_._v(" "),t("p",[_._v("则 FE 和 BE 将无法正常通信。")]),_._v(" "),t("p",[_._v("这时，必须 DROP 掉这个添加错误的 BE，重新使用正确的 IP 执行 ADD BACKEND。")]),_._v(" "),t("p",[_._v("FE 同理。")]),_._v(" "),t("p",[_._v("BROKER 当前没有，也不需要 priority_networks 这个选项。Broker 的服务默认绑定在 0.0.0.0 上。只需在 ADD BROKER 时，执行正确可访问的 BROKER IP 即可。")]),_._v(" "),t("h4",{attrs:{id:"表名大小写敏感性设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表名大小写敏感性设置"}},[_._v("#")]),_._v(" 表名大小写敏感性设置")]),_._v(" "),t("p",[_._v("doris默认为表名大小写敏感，如有表名大小写不敏感的需求需在集群初始化时进行设置。表名大小写敏感性在集群初始化完成后不可再修改。")]),_._v(" "),t("p",[_._v("详细参见 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/advanced/variables.html##支持的变量"}},[_._v("变量")]),_._v(" 中关于"),t("code",[_._v("lower_case_table_names")]),_._v("变量的介绍。")],1),_._v(" "),t("h2",{attrs:{id:"集群部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群部署"}},[_._v("#")]),_._v(" 集群部署")]),_._v(" "),t("h3",{attrs:{id:"手动部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动部署"}},[_._v("#")]),_._v(" 手动部署")]),_._v(" "),t("h4",{attrs:{id:"fe-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fe-部署"}},[_._v("#")]),_._v(" FE 部署")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("拷贝 FE 部署文件到指定节点")]),_._v(" "),t("p",[_._v("将源码编译生成的 output 下的 fe 文件夹拷贝到 FE 的节点指定部署路径下并进入该目录。")])]),_._v(" "),t("li",[t("p",[_._v("配置 FE")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("配置文件为 conf/fe.conf。其中注意："),t("code",[_._v("meta_dir")]),_._v("是元数据存放位置。默认值为 "),t("code",[_._v("${DORIS_HOME}/doris-meta")]),_._v("。需"),t("strong",[_._v("手动创建")]),_._v("该目录。")]),_._v(" "),t("p",[t("strong",[_._v("注意：生产环境强烈建议单独指定目录不要放在Doris安装目录下，最好是单独的磁盘（如果有SSD最好），测试开发环境可以使用默认配置")])])]),_._v(" "),t("li",[t("p",[_._v("fe.conf 中 JAVA_OPTS 默认 java 最大堆内存为 4GB，"),t("strong",[_._v("建议生产环境调整至 8G 以上")]),_._v("。")])])])]),_._v(" "),t("li",[t("p",[_._v("启动FE")]),_._v(" "),t("p",[t("code",[_._v("bin/start_fe.sh --daemon")])]),_._v(" "),t("p",[_._v("FE进程启动进入后台执行。日志默认存放在 log/ 目录下。如启动失败，可以通过查看 log/fe.log 或者 log/fe.out 查看错误信息。")])]),_._v(" "),t("li",[t("p",[_._v('如需部署多 FE，请参见 "FE 扩容和缩容" 章节')])])]),_._v(" "),t("h4",{attrs:{id:"be-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#be-部署"}},[_._v("#")]),_._v(" BE 部署")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("拷贝 BE 部署文件到所有要部署 BE 的节点")]),_._v(" "),t("p",[_._v("将源码编译生成的 output 下的 be 文件夹拷贝到 BE 的节点的指定部署路径下。")]),_._v(" "),t("blockquote",[t("p",[_._v("注意："),t("code",[_._v("output/be/lib/debug_info/")]),_._v(" 目录下为调试信息文件，文件较大，但实际运行不需要这些文件，可以不部署。")])])]),_._v(" "),t("li",[t("p",[_._v("修改所有 BE 的配置")]),_._v(" "),t("p",[_._v("修改 be/conf/be.conf。主要是配置 "),t("code",[_._v("storage_root_path")]),_._v("：数据存放目录。默认在be/storage下，需要"),t("strong",[_._v("手动创建")]),_._v("该目录。多个路径之间使用英文状态的分号 "),t("code",[_._v(";")]),_._v(" 分隔（"),t("strong",[_._v("最后一个目录后不要加 "),t("code",[_._v(";")])]),_._v("）。可以通过路径区别存储目录的介质，HDD或SSD。可以添加容量限制在每个路径的末尾，通过英文状态逗号"),t("code",[_._v(",")]),_._v("隔开。")]),_._v(" "),t("p",[_._v("示例1如下：")]),_._v(" "),t("p",[t("strong",[_._v("注意：如果是SSD磁盘要在目录后面加上"),t("code",[_._v(".SSD")]),_._v(",HDD磁盘在目录后面加"),t("code",[_._v(".HDD")])])]),_._v(" "),t("p",[t("code",[_._v("storage_root_path=/home/disk1/doris.HDD,50;/home/disk2/doris.SSD,10;/home/disk2/doris")])]),_._v(" "),t("p",[t("strong",[_._v("说明")])]),_._v(" "),t("ul",[t("li",[_._v("/home/disk1/doris.HDD,50，表示存储限制为50GB，HDD;")]),_._v(" "),t("li",[_._v("/home/disk2/doris.SSD,10，存储限制为10GB，SSD；")]),_._v(" "),t("li",[_._v("/home/disk2/doris，存储限制为磁盘最大容量，默认为HDD")])]),_._v(" "),t("p",[_._v("示例2如下：")]),_._v(" "),t("p",[t("strong",[_._v("注意：不论HDD磁盘目录还是SSD磁盘目录，都无需添加后缀，storage_root_path参数里指定medium即可")])]),_._v(" "),t("p",[t("code",[_._v("storage_root_path=/home/disk1/doris,medium:hdd,capacity:50;/home/disk2/doris,medium:ssd,capacity:50")])]),_._v(" "),t("p",[t("strong",[_._v("说明")])]),_._v(" "),t("ul",[t("li",[_._v("/home/disk1/doris,medium:hdd,capacity:10，表示存储限制为10GB, HDD;")]),_._v(" "),t("li",[_._v("/home/disk2/doris,medium:ssd,capacity:50，表示存储限制为50GB, SSD;")])])]),_._v(" "),t("li",[t("p",[_._v("BE webserver_port端口配置")]),_._v(" "),t("p",[_._v("如果 be 部署在 hadoop 集群中，注意调整 be.conf 中的 "),t("code",[_._v("webserver_port = 8040")]),_._v(" ,以免造成端口冲突")])]),_._v(" "),t("li",[t("p",[_._v("在 FE 中添加所有 BE 节点")]),_._v(" "),t("p",[_._v("BE 节点需要先在 FE 中添加，才可加入集群。可以使用 mysql-client("),t("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/5.7.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("下载MySQL 5.7"),t("OutboundLink")],1),_._v(") 连接到 FE：")]),_._v(" "),t("p",[t("code",[_._v("./mysql-client -h fe_host -P query_port -uroot")])]),_._v(" "),t("p",[_._v("其中 fe_host 为 FE 所在节点 ip；query_port 在 fe/conf/fe.conf 中的；默认使用 root 账户，无密码登录。")]),_._v(" "),t("p",[_._v("登录后，执行以下命令来添加每一个 BE：")]),_._v(" "),t("p",[t("code",[_._v('ALTER SYSTEM ADD BACKEND "be_host:heartbeat-service_port";')])]),_._v(" "),t("p",[_._v("其中 be_host 为 BE 所在节点 ip；heartbeat_service_port 在 be/conf/be.conf 中。")])]),_._v(" "),t("li",[t("p",[_._v("启动 BE")]),_._v(" "),t("p",[t("code",[_._v("bin/start_be.sh --daemon")])]),_._v(" "),t("p",[_._v("BE 进程将启动并进入后台执行。日志默认存放在 be/log/ 目录下。如启动失败，可以通过查看 be/log/be.log 或者 be/log/be.out 查看错误信息。")])]),_._v(" "),t("li",[t("p",[_._v("查看BE状态")]),_._v(" "),t("p",[_._v("使用 mysql-client 连接到 FE，并执行 "),t("code",[_._v("SHOW PROC '/backends';")]),_._v(" 查看 BE 运行情况。如一切正常，"),t("code",[_._v("isAlive")]),_._v(" 列应为 "),t("code",[_._v("true")]),_._v("。")])])]),_._v(" "),t("h4",{attrs:{id:"可选-fs-broker-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可选-fs-broker-部署"}},[_._v("#")]),_._v(" （可选）FS_Broker 部署")]),_._v(" "),t("p",[_._v("Broker 以插件的形式，独立于 Doris 部署。如果需要从第三方存储系统导入数据，需要部署相应的 Broker，默认提供了读取 HDFS 、百度云 BOS 及 Amazon S3 的 fs_broker。fs_broker 是无状态的，建议每一个 FE 和 BE 节点都部署一个 Broker。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("拷贝源码 fs_broker 的 output 目录下的相应 Broker 目录到需要部署的所有节点上。建议和 BE 或者 FE 目录保持同级。")])]),_._v(" "),t("li",[t("p",[_._v("修改相应 Broker 配置")]),_._v(" "),t("p",[_._v("在相应 broker/conf/ 目录下对应的配置文件中，可以修改相应配置。")])]),_._v(" "),t("li",[t("p",[_._v("启动 Broker")]),_._v(" "),t("p",[t("code",[_._v("bin/start_broker.sh --daemon")])])]),_._v(" "),t("li",[t("p",[_._v("添加 Broker")]),_._v(" "),t("p",[_._v("要让 Doris 的 FE 和 BE 知道 Broker 在哪些节点上，通过 sql 命令添加 Broker 节点列表。")]),_._v(" "),t("p",[_._v("使用 mysql-client 连接启动的 FE，执行以下命令：")]),_._v(" "),t("p",[t("code",[_._v('ALTER SYSTEM ADD BROKER broker_name "broker_host1:broker_ipc_port1","broker_host2:broker_ipc_port2",...;')])]),_._v(" "),t("p",[_._v("其中 broker_host 为 Broker 所在节点 ip；broker_ipc_port 在 Broker 配置文件中的conf/apache_hdfs_broker.conf。")])]),_._v(" "),t("li",[t("p",[_._v("查看 Broker 状态")]),_._v(" "),t("p",[_._v("使用 mysql-client 连接任一已启动的 FE，执行以下命令查看 Broker 状态："),t("code",[_._v('SHOW PROC "/brokers";')])])])]),_._v(" "),t("p",[t("strong",[_._v("注：在生产环境中，所有实例都应使用守护进程启动，以保证进程退出后，会被自动拉起，如 "),t("a",{attrs:{href:"http://supervisord.org/",target:"_blank",rel:"noopener noreferrer"}},[_._v("Supervisor"),t("OutboundLink")],1),_._v("。如需使用守护进程启动，在 0.9.0 及之前版本中，需要修改各个 start_xx.sh 脚本，去掉最后的 & 符号")]),_._v("。从 0.10.0 版本开始，直接调用 "),t("code",[_._v("sh start_xx.sh")]),_._v(" 启动即可。也可参考 "),t("a",{attrs:{href:"https://www.cnblogs.com/lenmom/p/9973401.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("这里"),t("OutboundLink")],1)]),_._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[_._v("#")]),_._v(" 常见问题")]),_._v(" "),t("h3",{attrs:{id:"进程相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程相关"}},[_._v("#")]),_._v(" 进程相关")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("如何确定 FE 进程启动成功")]),_._v(" "),t("p",[_._v("FE 进程启动后，会首先加载元数据，根据 FE 角色的不同，在日志中会看到 "),t("code",[_._v("transfer from UNKNOWN to MASTER/FOLLOWER/OBSERVER")]),_._v("。最终会看到 "),t("code",[_._v("thrift server started")]),_._v(" 日志，并且可以通过 mysql 客户端连接到 FE，则表示 FE 启动成功。")]),_._v(" "),t("p",[_._v("也可以通过如下连接查看是否启动成功："),t("br"),_._v(" "),t("code",[_._v("http://fe_host:fe_http_port/api/bootstrap")])]),_._v(" "),t("p",[_._v("如果返回："),t("br"),_._v(" "),t("code",[_._v('{"status":"OK","msg":"Success"}')])]),_._v(" "),t("p",[_._v("则表示启动成功，其余情况，则可能存在问题。")]),_._v(" "),t("blockquote",[t("p",[_._v("注：如果在 fe.log 中查看不到启动失败的信息，也许在 fe.out 中可以看到。")])])]),_._v(" "),t("li",[t("p",[_._v("如何确定 BE 进程启动成功")]),_._v(" "),t("p",[_._v("BE 进程启动后，如果之前有数据，则可能有数分钟不等的数据索引加载时间。")]),_._v(" "),t("p",[_._v("如果是 BE 的第一次启动，或者该 BE 尚未加入任何集群，则 BE 日志会定期滚动 "),t("code",[_._v("waiting to receive first heartbeat from frontend")]),_._v(" 字样。表示 BE 还未通过 FE 的心跳收到 Master 的地址，正在被动等待。这种错误日志，在 FE 中 ADD BACKEND 并发送心跳后，就会消失。如果在接到心跳后，又重复出现 "),t("code",[_._v("master client, get client from cache failed.host: , port: 0, code: 7")]),_._v(" 字样，说明 FE 成功连接了 BE，但 BE 无法主动连接 FE。可能需要检查 BE 到 FE 的 rpc_port 的连通性。")]),_._v(" "),t("p",[_._v("如果 BE 已经被加入集群，日志中应该每隔 5 秒滚动来自 FE 的心跳日志："),t("code",[_._v("get heartbeat, host: xx.xx.xx.xx, port: 9020, cluster id: xxxxxx")]),_._v("，表示心跳正常。")]),_._v(" "),t("p",[_._v("其次，日志中应该每隔 10 秒滚动 "),t("code",[_._v("finish report task success. return code: 0")]),_._v(" 的字样，表示 BE 向 FE 的通信正常。")]),_._v(" "),t("p",[_._v("同时，如果有数据查询，应该能看到不停滚动的日志，并且有 "),t("code",[_._v("execute time is xxx")]),_._v(" 日志，表示 BE 启动成功，并且查询正常。")]),_._v(" "),t("p",[_._v("也可以通过如下连接查看是否启动成功："),t("br"),_._v(" "),t("code",[_._v("http://be_host:be_http_port/api/health")])]),_._v(" "),t("p",[_._v("如果返回："),t("br"),_._v(" "),t("code",[_._v('{"status": "OK","msg": "To Be Added"}')])]),_._v(" "),t("p",[_._v("则表示启动成功，其余情况，则可能存在问题。")]),_._v(" "),t("blockquote",[t("p",[_._v("注：如果在 be.INFO 中查看不到启动失败的信息，也许在 be.out 中可以看到。")])])]),_._v(" "),t("li",[t("p",[_._v("搭建系统后，如何确定 FE、BE 连通性正常")]),_._v(" "),t("p",[_._v("首先确认 FE 和 BE 进程都已经单独正常启动，并确认已经通过 "),t("code",[_._v("ADD BACKEND")]),_._v(" 或者 "),t("code",[_._v("ADD FOLLOWER/OBSERVER")]),_._v(" 语句添加了所有节点。")]),_._v(" "),t("p",[_._v("如果心跳正常，BE 的日志中会显示 "),t("code",[_._v("get heartbeat, host: xx.xx.xx.xx, port: 9020, cluster id: xxxxxx")]),_._v("。如果心跳失败，在 FE 的日志中会出现 "),t("code",[_._v("backend[10001] got Exception: org.apache.thrift.transport.TTransportException")]),_._v(" 类似的字样，或者其他 thrift 通信异常日志，表示 FE 向 10001 这个 BE 的心跳失败。这里需要检查 FE 向 BE host 的心跳端口的连通性。")]),_._v(" "),t("p",[_._v("如果 BE 向 FE 的通信正常，则 BE 日志中会显示 "),t("code",[_._v("finish report task success. return code: 0")]),_._v(" 的字样。否则会出现 "),t("code",[_._v("master client, get client from cache failed")]),_._v(" 的字样。这种情况下，需要检查 BE 向 FE 的 rpc_port 的连通性。")])]),_._v(" "),t("li",[t("p",[_._v("Doris 各节点认证机制")]),_._v(" "),t("p",[_._v("除了 Master FE 以外，其余角色节点（Follower FE，Observer FE，Backend），都需要通过 "),t("code",[_._v("ALTER SYSTEM ADD")]),_._v(" 语句先注册到集群，然后才能加入集群。")]),_._v(" "),t("p",[_._v("Master FE 在第一次启动时，会在 doris-meta/image/VERSION 文件中生成一个 cluster_id。")]),_._v(" "),t("p",[_._v("FE 在第一次加入集群时，会首先从 Master FE 获取这个文件。之后每次 FE 之间的重新连接（FE 重启），都会校验自身 cluster id 是否与已存在的其它 FE 的 cluster id 相同。如果不同，则该 FE 会自动退出。")]),_._v(" "),t("p",[_._v("BE 在第一次接收到 Master FE 的心跳时，会从心跳中获取到 cluster id，并记录到数据目录的 "),t("code",[_._v("cluster_id")]),_._v(" 文件中。之后的每次心跳都会比对 FE 发来的 cluster id。如果 cluster id 不相等，则 BE 会拒绝响应 FE 的心跳。")]),_._v(" "),t("p",[_._v("心跳中同时会包含 Master FE 的 ip。当 FE 切主时，新的 Master FE 会携带自身的 ip 发送心跳给 BE，BE 会更新自身保存的 Master FE 的 ip。")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("priority_network")])]),_._v(" "),t("p",[_._v("priority_network 是 FE 和 BE 都有一个配置，其主要目的是在多网卡的情况下，协助 FE 或 BE 识别自身 ip 地址。priority_network 采用 CIDR 表示法："),t("a",{attrs:{href:"https://tools.ietf.org/html/rfc4632",target:"_blank",rel:"noopener noreferrer"}},[_._v("RFC 4632"),t("OutboundLink")],1)]),_._v(" "),t("p",[_._v("当确认 FE 和 BE 连通性正常后，如果仍然出现建表 Timeout 的情况，并且 FE 的日志中有 "),t("code",[_._v("backend does not found. host: xxx.xxx.xxx.xxx")]),_._v(" 字样的错误信息。则表示 Doris 自动识别的 IP 地址有问题，需要手动设置 priority_network 参数。")]),_._v(" "),t("p",[_._v("出现这个问题的主要原因是：当用户通过 "),t("code",[_._v("ADD BACKEND")]),_._v(" 语句添加 BE 后，FE 会识别该语句中指定的是 hostname 还是 IP。如果是 hostname，则 FE 会自动将其转换为 IP 地址并存储到元数据中。当 BE 在汇报任务完成信息时，会携带自己的 IP 地址。而如果 FE 发现 BE 汇报的 IP 地址和元数据中不一致时，就会出现如上错误。")]),_._v(" "),t("p",[_._v("这个错误的解决方法：1）分别在 FE 和 BE 设置 "),t("strong",[_._v("priority_network")]),_._v(" 参数。通常 FE 和 BE 都处于一个网段，所以该参数设置为相同即可。2）在 "),t("code",[_._v("ADD BACKEND")]),_._v(" 语句中直接填写 BE 正确的 IP 地址而不是 hostname，以避免 FE 获取到错误的 IP 地址。")])])]),_._v(" "),t("li",[t("p",[_._v("BE 进程文件句柄数")]),_._v(" "),t("p",[_._v("BE进程文件句柄数，受min_file_descriptor_number/max_file_descriptor_number两个参数控制。")]),_._v(" "),t("p",[_._v("如果不在[min_file_descriptor_number, max_file_descriptor_number]区间内，BE进程启动会出错，可以使用ulimit进行设置。")]),_._v(" "),t("p",[_._v("min_file_descriptor_number的默认值为65536。")]),_._v(" "),t("p",[_._v("max_file_descriptor_number的默认值为131072.")]),_._v(" "),t("p",[_._v("举例而言：ulimit -n 65536; 表示将文件句柄设成65536。")]),_._v(" "),t("p",[_._v("启动BE进程之后，可以通过 cat /proc/$pid/limits 查看进程实际生效的句柄数")]),_._v(" "),t("p",[_._v("如果使用了supervisord，遇到句柄数错误，可以通过修改supervisord的minfds参数解决。")]),_._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[_._v("vim")]),_._v(" /etc/supervisord.conf\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[_._v("minfds")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("65535")]),_._v("                 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("min. avail startup "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("file")]),_._v(" descriptors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("default "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);