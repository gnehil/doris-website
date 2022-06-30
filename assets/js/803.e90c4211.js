(window.webpackJsonp=window.webpackJsonp||[]).push([[803],{1232:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"编译与部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译与部署"}},[s._v("#")]),s._v(" 编译与部署")]),s._v(" "),a("h2",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),a("p",[s._v("直接在manager路径下的build.sh脚本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" incubator-doris-manager\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" build.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("编译完成后会在manager路径下生成安装包output目录，目录结构如下")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("├── agent  //agent 目录\n│   ├── bin\n│   │\t├── agent_start.sh\n│   │\t├── agent_stop.sh\n│   │\t└── download_doris.sh\n│   ├── config\n│   │\t└── application.properties\n│   └── lib\n│   \t└── dm-agent.jar\n└── server  //server 目录\n    ├── bin\n    │\t├── start_manager.sh   //Doris Manager启动脚本\n    │\t└── stop_manager.sh    //Doris Manager停止脚本\n    ├── conf\n    │\t└── manager.conf       //Doris Manager配置文件\n    ├── lib\n    │\t└── doris-manager.jar  //Doris Manager的运行包doris-manager.jar\n    └── web-resource         \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("h3",{attrs:{id:"_1-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置"}},[s._v("#")]),s._v(" 1 配置")]),s._v(" "),a("p",[s._v("修改配置文件"),a("code",[s._v("server/conf/manager.conf")]),s._v("，重点关注的配置项内容如下：")]),s._v(" "),a("div",{staticClass:"language-$xslt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("服务的启动http端口\nSTUDIO_PORT=8080\n\n后端数据存放的数据库的类型，包括mysql/h2/postgresql.默认是支持mysql\nMB_DB_TYPE=mysql\n\n数据库连接信息\n如果是配置的h2类型数据库，就不需要配置这些信息，会把数据以本地文件存放在本地\nh2数据文件存放路径，默认直接存放在当前路径\nH2_FILE_PATH=\n\n如果是mysql/postgresql就需要配置如下连接信息\n数据库地址\nMB_DB_HOST=\n\n数据库端口\nMB_DB_PORT=3306\n\n数据库访问端口\nMB_DB_USER=\n\n数据库访问密码\nMB_DB_PASS=\n\n数据库的database名称\nMB_DB_DBNAME=\n\n服务运行的路径，默认直接存放在当前运行路径的log文件夹中\nLOG_PATH=\n\nweb容器的等待队列长度，默认100。队列也做缓冲池用，但也不能无限长，不但消耗内存，而且出队入队也消耗CPU\nWEB_ACCEPT_COUNT=100\n\nWeb容器的最大工作线程数，默认200。（一般是CPU核数*200）\nWEB_MAX_THREADS=200\n\nWeb容器的最小工作空闲线程数，默认10。（适当增大一些，以便应对突然增长的访问量）\nWEB_MIN_SPARE_THREADS=10\n\nWeb容器的最大连接数，默认10000。（适当增大一些，以便应对突然增长的访问量）\nWEB_MAX_CONNECTIONS=10000\n\n访问数据库连接池最大连接数量，默认为10\nDB_MAX_POOL_SIZE=20\n\n访问数据库连接池最小空闲连接数，默认为10\nDB_MIN_IDLE=10\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])]),a("h3",{attrs:{id:"_2-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动"}},[s._v("#")]),s._v(" 2 启动")]),s._v(" "),a("p",[s._v("配置修改完成后，启动doris manger")]),s._v(" "),a("div",{staticClass:"language-$xslt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd server\nsh bin/start_manager.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查看logs中的日志即可判断程序是否启动成功")]),s._v(" "),a("h3",{attrs:{id:"_3-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用"}},[s._v("#")]),s._v(" 3 使用")]),s._v(" "),a("p",[s._v("Doris Manager预设了一个超级管理员用户，信息如下：")]),s._v(" "),a("div",{staticClass:"language-$xslt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("用户名: Admin\n密码: Admin@123\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("为确保使用安全，登陆后请修改密码！")])])}),[],!1,null,null,null);n.default=t.exports}}]);