(window.webpackJsonp=window.webpackJsonp||[]).push([[811],{1439:function(a,t,v){"use strict";v.r(t);var _=v(15),l=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"cloudcanal-数据导入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cloudcanal-数据导入"}},[a._v("#")]),a._v(" CloudCanal 数据导入")]),a._v(" "),v("h2",{attrs:{id:"介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),v("p",[a._v("CloudCanal 社区版是一款由 "),v("a",{attrs:{href:"https://www.clougence.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("ClouGence 公司"),v("OutboundLink")],1),a._v(" 发行的集结构迁移、数据全量迁移/校验/订正、增量实时同步为一体的免费数据迁移同步平台。产品包含完整的产品化能力，助力企业打破数据孤岛、完成数据互融互通，从而更好的使用数据。\n"),v("img",{attrs:{src:a.$withBase("../../../.vuepress/public/images/cloudcanal/cloudcanal-1.jpg"),alt:"image.png"}})]),a._v(" "),v("h2",{attrs:{id:"下载安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[a._v("#")]),a._v(" 下载安装")]),a._v(" "),v("p",[v("a",{attrs:{href:"https://clougence.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("CloudCanal 最新版下载地址"),v("OutboundLink")],1)]),a._v(" "),v("p",[v("a",{attrs:{href:"https://doc-cloudcanal.clougence.com/operation/install_linux",target:"_blank",rel:"noopener noreferrer"}},[a._v("CloudCanal 社区版安装部署参考文档"),v("OutboundLink")],1)]),a._v(" "),v("h2",{attrs:{id:"功能说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能说明"}},[a._v("#")]),a._v(" 功能说明")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("推荐使用2.2.5.0及以上的CloudCanal版本写入Doris")])]),a._v(" "),v("li",[v("p",[a._v("建议您在使用 CloudCanal 将 "),v("strong",[a._v("增量数据")]),a._v(" 导入至 Doris 时，控制导入的频率，CloudCanal写入Doris的默认导入频率可以通过参数"),v("code",[a._v("realFlushPauseSec")]),a._v("调整，默认为10秒。")])]),a._v(" "),v("li",[v("p",[a._v("当前社区版本最大的内存配置为2g，如果同步任务运行产生OOM异常或者GC停顿严重可以调小以下参数减少批次大小从而减少内存占用。全量参数为"),v("code",[a._v("fullBatchSize")]),a._v("和"),v("code",[a._v("fullRingBufferSize")]),a._v("，增量参数为"),v("code",[a._v("increBatchSize")]),a._v("和"),v("code",[a._v("increRingBufferSize")])])]),a._v(" "),v("li",[v("p",[a._v("支持的源端以及功能项：")]),a._v(" "),v("table",[v("thead",[v("tr",[v("th",[a._v("数据源 \\ 功能项")]),a._v(" "),v("th",[a._v("结构迁移")]),a._v(" "),v("th",[a._v("全量数据迁移")]),a._v(" "),v("th",[a._v("增量实时同步")]),a._v(" "),v("th",[a._v("数据校验")])])]),a._v(" "),v("tbody",[v("tr",[v("td",[a._v("Oracle 源端")]),a._v(" "),v("td",[a._v("支持")]),a._v(" "),v("td",[a._v("支持")]),a._v(" "),v("td",[a._v("支持")]),a._v(" "),v("td",[a._v("支持")])]),a._v(" "),v("tr",[v("td",[a._v("PostgreSQL 源端")]),a._v(" "),v("td",[a._v("支持")]),a._v(" "),v("td",[a._v("支持")]),a._v(" "),v("td",[a._v("支持")]),a._v(" "),v("td",[a._v("支持")])]),a._v(" "),v("tr",[v("td",[a._v("Greenplum 源端")]),a._v(" "),v("td",[a._v("支持")]),a._v(" "),v("td",[a._v("支持")]),a._v(" "),v("td",[a._v("不支持")]),a._v(" "),v("td",[a._v("支持")])]),a._v(" "),v("tr",[v("td",[a._v("MySQL 源端")]),a._v(" "),v("td",[a._v("支持")]),a._v(" "),v("td",[a._v("支持")]),a._v(" "),v("td",[a._v("支持")]),a._v(" "),v("td",[a._v("支持")])])])])])]),a._v(" "),v("h2",{attrs:{id:"使用方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),v("p",[a._v("CloudCanal 提供了完整的产品化能力，用户在可视化界面完成数据源添加和任务创建即可自动完成结构迁移、全量迁移、增量实时同步。下文演示如何将 MySQL 数据库中的数据迁移同步到对端 Doris 中。其他源端同步到 Doris 也可以按照类似的方式进行。")]),a._v(" "),v("h3",{attrs:{id:"前置条件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[a._v("#")]),a._v(" 前置条件")]),a._v(" "),v("p",[a._v("首先参考 "),v("a",{attrs:{href:"https://www.askcug.com/topic/75",target:"_blank",rel:"noopener noreferrer"}},[a._v("CloudCanal 安装部署参考文档"),v("OutboundLink")],1),a._v(" 完成 CloudCanal 社区版的安装和部署。")]),a._v(" "),v("h3",{attrs:{id:"添加数据源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#添加数据源"}},[a._v("#")]),a._v(" 添加数据源")]),a._v(" "),v("ul",[v("li",[a._v("登录 CloudCanal 平台")]),a._v(" "),v("li",[a._v("数据源管理-> 新增数据源")]),a._v(" "),v("li",[a._v("选择自建数据库中 Doris")])]),a._v(" "),v("img",{attrs:{src:a.$withBase("../../../.vuepress/public/images/cloudcanal/cloudcanal-2.jpg"),alt:"image.png"}}),a._v(" "),v("blockquote",[v("p",[a._v("Tips:")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("Client 地址： 为 Doris 提供给 MySQL Client 的服务端口，CloudCanal 主要用其查询库表的元数据信息")])]),a._v(" "),v("li",[v("p",[a._v("Http 地址： Http 地址主要用于接收 CloudCanal 数据导入的请求")])])])]),a._v(" "),v("h3",{attrs:{id:"任务创建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#任务创建"}},[a._v("#")]),a._v(" 任务创建")]),a._v(" "),v("p",[a._v("添加好数据源之后可以按照如下步骤进行数据迁移、同步任务的创建。")]),a._v(" "),v("ul",[v("li",[v("strong",[a._v("任务管理")]),a._v("-> "),v("strong",[a._v("任务创建")])]),a._v(" "),v("li",[a._v("选择 "),v("strong",[a._v("源")]),a._v(" 和 "),v("strong",[a._v("目标")]),a._v(" 数据库")]),a._v(" "),v("li",[a._v("点击 下一步")])]),a._v(" "),v("img",{attrs:{src:a.$withBase("../../../.vuepress/public/images/cloudcanal/cloudcanal-3.jpg"),alt:"image.png"}}),a._v(" "),v("ul",[v("li",[a._v("选择 "),v("strong",[a._v("增量同步")]),a._v("，并且启用 "),v("strong",[a._v("全量数据初始化")])]),a._v(" "),v("li",[a._v("不勾选 DDL 同步(暂不支持)")]),a._v(" "),v("li",[a._v("点击下一步")])]),a._v(" "),v("img",{attrs:{src:a.$withBase("../../../.vuepress/public/images/cloudcanal/cloudcanal-4.png"),alt:"image.png"}}),a._v(" "),v("ul",[v("li",[a._v("选择订阅的表，"),v("strong",[a._v("结构迁移自动创建的表为主键模型的表，因此暂不支持无主键表")])]),a._v(" "),v("li",[a._v("点击下一步")])]),a._v(" "),v("img",{attrs:{src:a.$withBase("../../../.vuepress/public/images/cloudcanal/cloudcanal-5.png"),alt:"image.png"}}),a._v(" "),v("ul",[v("li",[a._v("配置列映射")]),a._v(" "),v("li",[a._v("点击下一步")])]),a._v(" "),v("img",{attrs:{src:a.$withBase("../../../.vuepress/public/images/cloudcanal/cloudcanal-6.png"),alt:"image.png"}}),a._v(" "),v("ul",[v("li",[a._v("创建任务")])]),a._v(" "),v("img",{attrs:{src:a.$withBase("../../../.vuepress/public/images/cloudcanal/cloudcanal-7.png"),alt:"image.png"}}),a._v(" "),v("ul",[v("li",[a._v("查看任务状态。任务创建后，会自动完成结构迁移、全量、增量阶段。")])]),a._v(" "),v("img",{attrs:{src:a.$withBase("../../../.vuepress/public/images/cloudcanal/cloudcanal-8.jpg"),alt:"image.png"}}),a._v(" "),v("h2",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),v("p",[a._v("更多关于 CloudCanal 同步 Doris 的资料，可以查看")]),a._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://www.askcug.com/topic/262",target:"_blank",rel:"noopener noreferrer"}},[a._v("5 分钟搞定 MySQL/PostgreSQL/Oracle 到 Doris 数据迁移同步-CloudCanal 实战"),v("OutboundLink")],1)])]),a._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://www.askcug.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("CloudCanal 官方社区"),v("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=l.exports}}]);