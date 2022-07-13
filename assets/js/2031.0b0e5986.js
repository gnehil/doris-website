(window.webpackJsonp=window.webpackJsonp||[]).push([[2031],{2661:function(s,a,n){"use strict";n.r(a);var t=n(15),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"date-format"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#date-format"}},[s._v("#")]),s._v(" date_format")]),s._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),n("h3",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),n("p",[n("code",[s._v("VARCHAR DATE_FORMAT(DATETIME date, VARCHAR format)")])]),s._v(" "),n("p",[s._v("将日期类型按照format的类型转化为字符串，\n当前支持最大128字节的字符串，如果返回值长度超过128，则返回NULL")]),s._v(" "),n("p",[s._v("date 参数是合法的日期。format 规定日期/时间的输出格式。")]),s._v(" "),n("p",[s._v("可以使用的格式有：")]),s._v(" "),n("p",[s._v("%a | 缩写星期名")]),s._v(" "),n("p",[s._v("%b | 缩写月名")]),s._v(" "),n("p",[s._v("%c | 月，数值")]),s._v(" "),n("p",[s._v("%D | 带有英文前缀的月中的天")]),s._v(" "),n("p",[s._v("%d | 月的天，数值(00-31)")]),s._v(" "),n("p",[s._v("%e | 月的天，数值(0-31)")]),s._v(" "),n("p",[s._v("%f | 微秒")]),s._v(" "),n("p",[s._v("%H | 小时 (00-23)")]),s._v(" "),n("p",[s._v("%h | 小时 (01-12)")]),s._v(" "),n("p",[s._v("%I | 小时 (01-12)")]),s._v(" "),n("p",[s._v("%i | 分钟，数值(00-59)")]),s._v(" "),n("p",[s._v("%j | 年的天 (001-366)")]),s._v(" "),n("p",[s._v("%k | 小时 (0-23)")]),s._v(" "),n("p",[s._v("%l | 小时 (1-12)")]),s._v(" "),n("p",[s._v("%M | 月名")]),s._v(" "),n("p",[s._v("%m | 月，数值(00-12)")]),s._v(" "),n("p",[s._v("%p | AM 或 PM")]),s._v(" "),n("p",[s._v("%r | 时间，12-小时（hh:mm:ss AM 或 PM）")]),s._v(" "),n("p",[s._v("%S | 秒(00-59)")]),s._v(" "),n("p",[s._v("%s | 秒(00-59)")]),s._v(" "),n("p",[s._v("%T | 时间, 24-小时 (hh:mm:ss)")]),s._v(" "),n("p",[s._v("%U | 周 (00-53) 星期日是一周的第一天")]),s._v(" "),n("p",[s._v("%u | 周 (00-53) 星期一是一周的第一天")]),s._v(" "),n("p",[s._v("%V | 周 (01-53) 星期日是一周的第一天，与 %X 使用")]),s._v(" "),n("p",[s._v("%v | 周 (01-53) 星期一是一周的第一天，与 %x 使用")]),s._v(" "),n("p",[s._v("%W | 星期名")]),s._v(" "),n("p",[s._v("%w | 周的天 （0=星期日, 6=星期六）")]),s._v(" "),n("p",[s._v("%X | 年，其中的星期日是周的第一天，4 位，与 %V 使用")]),s._v(" "),n("p",[s._v("%x | 年，其中的星期一是周的第一天，4 位，与 %v 使用")]),s._v(" "),n("p",[s._v("%Y | 年，4 位")]),s._v(" "),n("p",[s._v("%y | 年，2 位")]),s._v(" "),n("p",[s._v("%% | 用于表示 %")]),s._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nmysql> select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nmysql> select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nmysql> select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nmysql> select date_format('1999-01-01 00:00:00', '%X %V'); \n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[s._v("#")]),s._v(" keyword")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("DATE_FORMAT,DATE,FORMAT\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);