(window.webpackJsonp=window.webpackJsonp||[]).push([[3963],{4592:function(a,t,v){"use strict";v.r(t);var _=v(15),e=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h2",{attrs:{id:"bitmap-格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-格式"}},[a._v("#")]),a._v(" Bitmap 格式")]),a._v(" "),v("h3",{attrs:{id:"格式说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#格式说明"}},[a._v("#")]),a._v(" 格式说明")]),a._v(" "),v("p",[a._v("Doris 中的bitmap 采用的是roaring bitmap 存储， be 端使用CRoaring，"),v("code",[a._v("Roaring")]),a._v(" 的序列化格式在C++/java/go 等语言中兼容， 而C++ "),v("code",[a._v("Roaring64Map")]),a._v(" 的格式序列化结果和Java中"),v("code",[a._v("Roaring64NavigableMap")]),a._v(" 不兼容。Doris bimap 有5种类型， 分别用一个字节表示")]),a._v(" "),v("p",[a._v("Doris 中的bitmap 序列化格式说明如下:")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v(" | flag     | data .....|\n <--1Byte--\x3e<--n bytes--\x3e\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br")])]),v("p",[a._v("Flag 值说明如下：")]),a._v(" "),v("table",[v("thead",[v("tr",[v("th",[a._v("值")]),a._v(" "),v("th",[a._v("描述")])])]),a._v(" "),v("tbody",[v("tr",[v("td",[a._v("0")]),a._v(" "),v("td",[a._v("EMPTY，空 bitmap,  后面data 部分为空，整个序列化结果只有一个字节")])]),a._v(" "),v("tr",[v("td",[a._v("1")]),a._v(" "),v("td",[a._v("SINGLE32，bitmap 中只有一个32位无符号整型值， 后面4个字节表示32位无符号整型值")])]),a._v(" "),v("tr",[v("td",[a._v("2")]),a._v(" "),v("td",[a._v("BITMAP32，32 位bitmap 对应java 中类型为 "),v("code",[a._v("org.roaringbitmap.RoaringBitmap")]),a._v(" C++ 中类型为"),v("code",[a._v("roaring::Roaring")]),a._v("， 后面data 为roaring::Roaring 序列后的结构， 可以使用java 中的 "),v("code",[a._v("org.roaringbitmap.RoaringBitmap")]),a._v("  或c++中"),v("code",[a._v("roaring::Roaring")]),a._v(" 直接反序列化")])]),a._v(" "),v("tr",[v("td",[a._v("3")]),a._v(" "),v("td",[a._v("SINGLE64 ,bitmap 中只有一个64位无符号整型值，后面8个字节表示64位无符号整型值")])]),a._v(" "),v("tr",[v("td",[a._v("4")]),a._v(" "),v("td",[a._v("BITMAP64, 64 位bitmap 对应java 中类型为 "),v("code",[a._v("org.roaringbitmap.RoaringBitmap;")]),a._v(" c++ 中类型为doris 中的"),v("code",[a._v("Roaring64Map")]),a._v("，数据结构和 roaring 库中的结果一致，但是序列化和反序列话方法有所不同，后面会有1-8个字节的变长编码的uint64 的表述bitmap 中size。后面的数据是各式是多个 4个字节的高位表示和32位 roaring bitmap 序列化数据重复而成")])])])]),a._v(" "),v("p",[a._v("c++ 序列化和反序列化的示例 在 "),v("code",[a._v("be/src/util/bitmap_value.h")]),a._v(" 的"),v("code",[a._v("BitmapValue::write()")]),a._v(" "),v("code",[a._v("BitmapValue::deserialize()")]),a._v("  方法中, Java示例在 "),v("code",[a._v("fe/fe-common/src/main/java/org/apache/doris/common/io/BitmapValue.java")]),a._v(" 中的"),v("code",[a._v("serialize()")]),a._v(" "),v("code",[a._v("deserialize()")]),a._v(" 方法中。")]),a._v(" "),v("h2",{attrs:{id:"hll-格式说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hll-格式说明"}},[a._v("#")]),a._v(" HLL 格式说明")]),a._v(" "),v("p",[a._v("HLL 格式序列化数据在Doris 中自己实现的。同Bitmap 类型类似，HLL 格式是1个字节的flag 后面跟随多个字节数据组成，flag 含义如下")]),a._v(" "),v("table",[v("thead",[v("tr",[v("th",[a._v("值")]),a._v(" "),v("th",[a._v("描述")])])]),a._v(" "),v("tbody",[v("tr",[v("td",[a._v("0")]),a._v(" "),v("td",[a._v("HLL_DATA_EMPTY，空 HLL,  后面data 部分为空，整个序列化结果只有一个字节")])]),a._v(" "),v("tr",[v("td",[a._v("1")]),a._v(" "),v("td",[a._v("HLL_DATA_EXPLICIT， 后面1个字节 explicit 数据块个数，后面接多个数据块，每个数据块由8个字节长度和数据组成，")])]),a._v(" "),v("tr",[v("td",[a._v("2")]),a._v(" "),v("td",[a._v("HLL_DATA_SPARSE，只存非0 值，后面4个字节 表示 register 个数， 后面连续多个 register 结构，每个register 由前面2个字节的index 和1个字节的值组成")])]),a._v(" "),v("tr",[v("td",[a._v("3")]),a._v(" "),v("td",[a._v("HLL_DATA_FULL ,表示所有16 * 1024个register都有值， 后面连续16 * 1024个字节的值数据")])])])]),a._v(" "),v("p",[a._v("c++ 序列化和反序列化的示例 在 "),v("code",[a._v("be/src/olap/hll.h")]),a._v(" 的"),v("code",[a._v("serialize()")]),a._v(" "),v("code",[a._v("deserialize()")]),a._v("  方法中, Java示例在 "),v("code",[a._v("fe/fe-common/src/main/java/org/apache/doris/common/io/hll.java")]),a._v(" 中的"),v("code",[a._v("serialize()")]),a._v(" "),v("code",[a._v("deserialize()")]),a._v(" 方法中。")])])}),[],!1,null,null,null);t.default=e.exports}}]);