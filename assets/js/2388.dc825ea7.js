(window.webpackJsonp=window.webpackJsonp||[]).push([[2388],{3014:function(s,a,e){"use strict";e.r(a);var t=e(15),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"arm64-kylinos-编译运行-doris"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arm64-kylinos-编译运行-doris"}},[s._v("#")]),s._v(" ARM64 + KylinOS 编译运行 Doris")]),s._v(" "),e("p",[s._v("本文档介绍如何在 ARM64 平台上编译 Doris。")]),s._v(" "),e("p",[s._v("注意，该文档仅作为指导性文档。在不同环境中编译可能出现其他错误。")]),s._v(" "),e("h2",{attrs:{id:"软硬件环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软硬件环境"}},[s._v("#")]),s._v(" 软硬件环境")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("KylinOS 版本：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$> cat /etc/.kyinfo\nname=Kylin-Server\nmilestone=10-SP1-Release-Build04-20200711\narch=arm64\nbeta=False\ntime=2020-07-11 17:16:54\ndist_id=Kylin-Server-10-SP1-Release-Build04-20200711-arm64-2020-07-11 17:16:54\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("CPU型号")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$> cat /proc/cpuinfo\nmodel name  : Phytium,FT-2000+/64\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Doris 版本")]),s._v(" "),e("p",[s._v("commit 68bab73")])])]),s._v(" "),e("h2",{attrs:{id:"编译工具安装-无网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译工具安装-无网络"}},[s._v("#")]),s._v(" 编译工具安装（无网络）")]),s._v(" "),e("p",[s._v("示例中，所有工具安装在在 "),e("code",[s._v("/home/doris/tools/installed/")]),s._v(" 目录下。")]),s._v(" "),e("p",[s._v("所需安装包请先在有网络情况下获取。")]),s._v(" "),e("h3",{attrs:{id:"_1-安装gcc10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装gcc10"}},[s._v("#")]),s._v(" 1. 安装gcc10")]),s._v(" "),e("p",[s._v("下载 gcc-10.1.0")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("wget https://mirrors.tuna.tsinghua.edu.cn/gnu/gcc/gcc-10.1.0/gcc-10.1.0.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解压后，在 "),e("code",[s._v("contrib/download_prerequisites")]),s._v(" 查看依赖并下载：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://gcc.gnu.org/pub/gcc/infrastructure/gmp-6.1.0.tar.bz2\nhttp://gcc.gnu.org/pub/gcc/infrastructure/mpfr-3.1.4.tar.bz2\nhttp://gcc.gnu.org/pub/gcc/infrastructure/mpc-1.0.3.tar.gz\nhttp://gcc.gnu.org/pub/gcc/infrastructure/isl-0.18.tar.bz2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("解压这四个依赖，然后移动到 gcc-10.1.0 源码目录下，并重命名为 gmp、isl、mpc、mpfr。")]),s._v(" "),e("p",[s._v("下载并安装 automake-1.15（因为gcc10编译过程中会查找automake 1.15 版本）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://ftp.gnu.org/gnu/automake/automake-1.15.tar.gz\ntar xzf automake-1.15.tar.gz\n./configure --prefix=/home/doris/tools/installed\nmake && make install\nexport PATH=/home/doris/tools/installed/bin:$PATH\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("编译GCC10:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd gcc-10.1.0\n./configure --prefix=/home/doris/tools/installed\nmake -j && make install\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("编译时间较长。")]),s._v(" "),e("h3",{attrs:{id:"_2-安装其他编译组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装其他编译组件"}},[s._v("#")]),s._v(" 2. 安装其他编译组件")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("jdk-8u291-linux-aarch64.tar.gz")]),s._v(" "),e("p",[e("code",[s._v("https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html")])]),s._v(" "),e("p",[s._v("无需编译，开箱即用。")])]),s._v(" "),e("li",[e("p",[s._v("cmake-3.19.8-Linux-aarch64.tar.gz")]),s._v(" "),e("p",[e("code",[s._v("https://cmake.org/download/")])]),s._v(" "),e("p",[s._v("无需编译，开箱即用")])]),s._v(" "),e("li",[e("p",[s._v("apache-maven-3.8.1-bin.tar.gz")]),s._v(" "),e("p",[e("code",[s._v("https://maven.apache.org/download.cgi")])]),s._v(" "),e("p",[s._v("无需编译，开箱即用")])]),s._v(" "),e("li",[e("p",[s._v("nodejs 16.3.0")]),s._v(" "),e("p",[e("code",[s._v("https://nodejs.org/dist/v16.3.0/node-v16.3.0-linux-arm64.tar.xz")])]),s._v(" "),e("p",[s._v("无需编译，开箱即用")])]),s._v(" "),e("li",[e("p",[s._v("libtool-2.4.6.tar.gz")]),s._v(" "),e("p",[s._v("编译第三方组件用，虽然系统可能自带了libtool，但是libtool需要和automake在一起，这样不容易出问题。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://ftp.gnu.org/gnu/libtool/libtool-2.4.6.tar.gz\ncd  libtool-2.4.6/\n./configure --prefix=/home/doris/tools/installed\nmake -j && make install\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("binutils-2.36.tar.xz（获取bdf.h）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://ftp.gnu.org/gnu/binutils/binutils-2.36.tar.bz2\n./configure --prefix=/home/doris/tools/installed\nmake -j && make install\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("libiberty（编译BE用）")]),s._v(" "),e("p",[s._v("这个库的源码就在 gcc-10.1.0 的源码包下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd gcc-10.1.0/libiberty/\n./configure --prefix=/home/doris/tools/installed\nmake\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("编译后会产生 libiberty.a，后续移动到 Doris 的thirdparty 的 lib64 目录中即可。")])])]),s._v(" "),e("h3",{attrs:{id:"_3-编译第三方库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-编译第三方库"}},[s._v("#")]),s._v(" 3. 编译第三方库")]),s._v(" "),e("p",[s._v("假设Doris源码在 "),e("code",[s._v("/home/doris/doris-src/")]),s._v(" 下。")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("手动下载所有第三方库并放在 thirdparty/src 目录下。")])]),s._v(" "),e("li",[e("p",[s._v("在Doris源码目录下新增 "),e("code",[s._v("custom_env.sh")]),s._v(" 并添加如下内容")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export DORIS_THIRDPARTY=/home/doris/doris-src/thirdparty/\nexport JAVA_HOME=/home/doris/tools/jdk1.8.0_291/\nexport DORIS_GCC_HOME=/home/doris/tools/installed/\nexport PATCH_COMPILER_RT=true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("注意替换对应的目录")])]),s._v(" "),e("li",[e("p",[s._v("修改 build-thirdparty.sh 中的部分内容")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("关闭 "),e("code",[s._v("build_mysql")]),s._v(" 和 "),e("code",[s._v("build_libhdfs3")])]),s._v(" "),e("p",[s._v("mysql 不再需要。而 libhdfs3 暂不支持 arm 架构，所以在arm中运行Doris，暂不支持通过 libhdfs3 直接访问 hdfs，需要通过broker。")])]),s._v(" "),e("li",[e("p",[s._v("在 "),e("code",[s._v("build_curl")]),s._v(" 中增加 configure 参数："),e("code",[s._v("--without-libpsl")]),s._v("。如果不添加，则在最终编译Doris BE的链接阶段，可能报错："),e("code",[s._v("undefined reference to ‘psl_is_cookie_domain_acceptable'")])])])])]),s._v(" "),e("li",[e("p",[s._v("执行 build-thirdparty.sh。这里仅列举可能出现的错误")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("error: narrowing conversion of '-1' from 'int' to 'char' [-Wnarrowing]")])]),s._v(" "),e("p",[s._v("编译brpc 0.9.7 时会出现错误，解决方案，在 brpc 的 CMakeLists.txt 的 "),e("code",[s._v("CMAKE_CXX_FLAGS")]),s._v(" 中添加 "),e("code",[s._v("-Wno-narrowing")]),s._v("。brpc master 代码中已经修复这个问题：")]),s._v(" "),e("p",[e("code",[s._v("https://github.com/apache/incubator-brpc/issues/1091")])])]),s._v(" "),e("li",[e("p",[e("code",[s._v("libz.a(deflate.o): relocation R_AARCH64_ADR_PREL_PG_HI21 against symbol")]),s._v("z_errmsg' which may bind externally can not be used when making a shared object; recompile with -fPIC`")]),s._v(" "),e("p",[s._v("编译brpc 0.9.7 时会出现错误，还有 libcrypto 也会报类似错误。原因未知，似乎在 aarch64 下，brpc 需要链接动态的 zlib 和 crypto 库。但是我们在编译这两个第三方库时，都只编译的了 .a 静态文件。解决方案：重新编译zlib和 openssl 生成.so 动态库：")]),s._v(" "),e("p",[s._v("打开 "),e("code",[s._v("build-thirdparty.sh")]),s._v("，找到 "),e("code",[s._v("build_zlib")]),s._v(" 函数，将：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./configure --prefix=$TP_INSTALL_DIR --static\n就改为\n./configure --prefix=$TP_INSTALL_DIR\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("找到 "),e("code",[s._v("build_openssl")]),s._v("，将以下部分注释掉：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#if [ -f $TP_INSTALL_DIR/lib64/libcrypto.so ]; then\n#    rm -rf $TP_INSTALL_DIR/lib64/libcrypto.so*\n#fi\n#if [ -f $TP_INSTALL_DIR/lib64/libssl.so ]; then\n#    rm -rf $TP_INSTALL_DIR/lib64/libssl.so*\n#fi\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("然后来到 "),e("code",[s._v("build-thirdparty.sh")]),s._v("，注释掉其他 "),e("code",[s._v("build_xxx")]),s._v("，仅打开 "),e("code",[s._v("build_zlib")]),s._v(" 和 "),e("code",[s._v("build_openssl")]),s._v("，以及 "),e("code",[s._v("build_brpc")]),s._v(" 和之后的 "),e("code",[s._v("build_xxx")]),s._v("。然后重新执行 "),e("code",[s._v("build-thirdparty.sh")]),s._v("。")])]),s._v(" "),e("li",[e("p",[s._v("编译到某个阶段卡住不动。")]),s._v(" "),e("p",[s._v("不确定原因。解决方案：重跑 "),e("code",[s._v("build-thirdparty.sh")]),s._v("。"),e("code",[s._v("build-thirdparty.sh")]),s._v(" 是可以重复执行的。")])])])])]),s._v(" "),e("h3",{attrs:{id:"_4-编译doris源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-编译doris源码"}},[s._v("#")]),s._v(" 4. 编译Doris源码")]),s._v(" "),e("p",[s._v("执行 "),e("code",[s._v("sh build.sh")]),s._v(" 即可。")]),s._v(" "),e("h3",{attrs:{id:"_5-常见错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-常见错误"}},[s._v("#")]),s._v(" 5. 常见错误")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("编译 Doris 时出现 "),e("code",[s._v("undefined reference to psl_free")])]),s._v(" "),e("p",[s._v("libcurl 会调用 libpsl 的函数，但 libpsl 未连接，原因未知。解决方法（二选一）：")]),s._v(" "),e("ol",[e("li",[s._v("在 "),e("code",[s._v("thirdparty/build-thirdparty.sh")]),s._v(" 中的 "),e("code",[s._v("build_curl")]),s._v(" 方法中添加 "),e("code",[s._v("--without-libpsl")]),s._v(" 后重新编译 libcurl，然后再重新编译 Doris。")]),s._v(" "),e("li",[e("code",[s._v("be/CMakeLists.txt")]),s._v(" 中 603 行左右，"),e("code",[s._v("-pthread")]),s._v(" 后添加 "),e("code",[s._v("-lpsl")]),s._v("，然后重新编译 Doris。")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);