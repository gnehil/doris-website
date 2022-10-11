"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[97748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const r={title:"Setting Up dev env for FE - IntelliJ IDEA",language:"en"},a=void 0,l={unversionedId:"developer-guide/fe-idea-dev",id:"developer-guide/fe-idea-dev",title:"Setting Up dev env for FE - IntelliJ IDEA",description:"\x3c!--",source:"@site/community/developer-guide/fe-idea-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/fe-idea-dev",permalink:"/community/developer-guide/fe-idea-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"Setting Up dev env for FE - IntelliJ IDEA",language:"en"},sidebar:"community",previous:{title:"Setting FE dev env - Eclipse",permalink:"/community/developer-guide/fe-eclipse-dev"},next:{title:"FE development and debugging environment - Visual Studio Code (VSCode)",permalink:"/community/developer-guide/fe-vscode-dev"}},s={},p=[{value:"1. Environmental Preparation",id:"1-environmental-preparation",level:2},{value:"2. Debug",id:"2-debug",level:2},{value:"3. Custom FE configuration",id:"3-custom-fe-configuration",level:2},{value:"4. Setting Environment Variables",id:"4-setting-environment-variables",level:2},{value:"5. Config options",id:"5-config-options",level:2},{value:"6. Start FE",id:"6-start-fe",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-development-environment-for-fe-using-intellij-idea"},"Setting Up Development Environment for FE using IntelliJ IDEA"),(0,o.kt)("h2",{id:"1-environmental-preparation"},"1. Environmental Preparation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Git"),(0,o.kt)("li",{parentName:"ul"},"JDK1.8+"),(0,o.kt)("li",{parentName:"ul"},"IntelliJ IDEA"),(0,o.kt)("li",{parentName:"ul"},"Maven (Optional, IDEA shipped embedded Maven3)")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Git clone codebase from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/doris.git"},"https://github.com/apache/doris.git"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Use IntelliJ IDEA to open the code root directory")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If your are only interested in FE module, and for some reason you can't or don't want to compile full thirdparty libraries,\nthe minimum tool required for FE module is ",(0,o.kt)("inlineCode",{parentName:"p"},"thrift"),", so you can manually install ",(0,o.kt)("inlineCode",{parentName:"p"},"thrift")," and copy or create a link of\nthe executable ",(0,o.kt)("inlineCode",{parentName:"p"},"thrift")," command to ",(0,o.kt)("inlineCode",{parentName:"p"},"./thirdparty/installed/bin"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Doris build against `thrift` 0.13.0 ( note : `Doris` 0.15 and later version build against `thrift` 0.13.0 , the previous version is still `thrift` 0.9.3)   \n\nWindows: \n   1. Download\uff1a`http://archive.apache.org/dist/thrift/0.13.0/thrift-0.13.0.exe`\n   2. Copy\uff1acopy the file to `./thirdparty/installed/bin`\n   \nMacOS: \n   1. Download\uff1a`brew install thrift@0.13.0`\n   2. Establish soft connection\uff1a \n     `mkdir -p ./thirdparty/installed/bin`\n     # For ARM macOS\n     `ln -s /opt/homebrew/Cellar/thrift@0.13.0/0.13.0/bin/thrift ./thirdparty/installed/bin/thrift`\n     # For Intel macOS\n     `ln -s /usr/local/Cellar/thrift@0.13.0/0.13.0/bin/thrift ./thirdparty/installed/bin/thrift`\n   \nNote\uff1aThe error that the version cannot be found may be reported when MacOS execute `brew install thrift@0.13.0`. The solution is execute at the terminal as follows:\n   1. `brew tap-new $USER/local-tap`\n   2. `brew extract --version='0.13.0' thrift $USER/local-tap`\n   3. `brew install thrift@0.13.0`\nReference link: `https://gist.github.com/tonydeng/02e571f273d6cce4230dc8d5f394493c`\n\nLinux:\n   1.Download source package\uff1a`wget https://archive.apache.org/dist/thrift/0.13.0/thrift-0.13.0.tar.gz`\n   2.Install dependencies\uff1a`yum install -y autoconf automake libtool cmake ncurses-devel openssl-devel lzo-devel zlib-devel gcc gcc-c++`\n   3.`tar zxvf thrift-0.13.0.tar.gz`\n   4.`cd thrift-0.13.0`\n   5.`./configure --without-tests`\n   6.`make`\n   7.`make install`\nCheck the version after installation is complete\uff1athrift --version\nNote: If you have compiled Doris, you do not need to install thrift, you can directly use $DORIS_HOME/thirdparty/installed/bin/thrift\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"./fe")," folder and run the following maven command to generate sources."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mvn generate-sources\n")),(0,o.kt)("p",{parentName:"li"},"If fails, run following command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mvn clean install -DskipTests\n")),(0,o.kt)("p",{parentName:"li"},"If it's MAC M1, run following command"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mvn clean install -DskipTests -Dos.arch=x86_64\n")),(0,o.kt)("p",{parentName:"li"},"You can also use IDE embedded GUI tools to run maven command to generate sources"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(21526).Z,width:"794",height:"790"})),(0,o.kt)("p",null,"If you are developing on the OS which lack of support to run ",(0,o.kt)("inlineCode",{parentName:"p"},"shell script")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," such as Windows, a workround here\nis generate codes in Linux and copy them back. Using Docker should also be an option."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If it's MAC M1, python may not be found, so create a soft link from python3 to python: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"ln -s /usr/bin/python3 /usr/bin/python\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If a help document has not been generated, go to the docs directory and run",(0,o.kt)("inlineCode",{parentName:"p"},"sh build_help_zip.sh"),"\uff0c\nThen copy help-resource.zip from build to fe/fe-core/target/classes"))),(0,o.kt)("h2",{id:"2-debug"},"2. Debug"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import ",(0,o.kt)("inlineCode",{parentName:"p"},"./fe")," into IDEA")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the picture to create the folders (The directory may exist in the new version. If it exists, skip it, otherwise create it.)"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(93085).Z,width:"1077",height:"879"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Build ",(0,o.kt)("inlineCode",{parentName:"li"},"ui")," project , and copy files from directory ",(0,o.kt)("inlineCode",{parentName:"li"},"ui/dist")," into directory ",(0,o.kt)("inlineCode",{parentName:"li"},"webroot")," ( you can skip this step , if you don't need ",(0,o.kt)("inlineCode",{parentName:"li"},"Doris")," UI )")),(0,o.kt)("h2",{id:"3-custom-fe-configuration"},"3. Custom FE configuration"),(0,o.kt)("p",null,"Copy below content into ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/fe.conf")," and tune it to fit your environment(Note: If developed using",(0,o.kt)("inlineCode",{parentName:"p"},"Mac"),", since",(0,o.kt)("inlineCode",{parentName:"p"},"docker for Mac"),"does not support",(0,o.kt)("inlineCode",{parentName:"p"},"Host"),"mode,",(0,o.kt)("inlineCode",{parentName:"p"},"be"),"needs to be exposed using",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fe.conf")," ",(0,o.kt)("inlineCode",{parentName:"p"},"priority_networks")," configured to be accessible within the container, such as WIFI Ip)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n#####################################################################\n## The uppercase properties are read and exported by bin/start_fe.sh.\n## To see all Frontend configurations,\n## see fe/src/org/apache/doris/common/Config.java\n#####################################################################\n\n# the output dir of stderr and stdout \nLOG_DIR = ${DORIS_HOME}/log\n\nDATE = `date +%Y%m%d-%H%M%S`\nJAVA_OPTS="-Xmx2048m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$DORIS_HOME/log/fe.gc.log.$DATE"\n\n# For jdk 9+, this JAVA_OPTS will be used as default JVM options\nJAVA_OPTS_FOR_JDK_9="-Xmx4096m -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xlog:gc*:$DORIS_HOME/log/fe.gc.log.$DATE:time"\n\n##\n## the lowercase properties are read by main program.\n##\n\n# INFO, WARN, ERROR, FATAL\nsys_log_level = INFO\n\n# store metadata, create it if it is not exist.\n# Default value is ${DORIS_HOME}/doris-meta\n# meta_dir = ${DORIS_HOME}/doris-meta\n\nhttp_port = 8030\nrpc_port = 9020\nquery_port = 9030\nedit_log_port = 9010\nmysql_service_nio_enabled = true\n\n# Choose one if there are more than one ip except loopback address. \n# Note that there should at most one ip match this list.\n# If no ip match this rule, will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/24\n# Default value is empty.\n# priority_networks = 10.10.10.0/24;192.168.0.0/16\n\n# Advanced configurations \n# log_roll_size_mb = 1024\n# sys_log_dir = ${DORIS_HOME}/log\n# sys_log_roll_num = 10\n# sys_log_verbose_modules = \n# audit_log_dir = ${DORIS_HOME}/log\n# audit_log_modules = slow_query, query\n# audit_log_roll_num = 10\n# meta_delay_toleration_second = 10\n# qe_max_connection = 1024\n# max_conn_per_user = 100\n# qe_query_timeout_second = 300\n# qe_slow_log_ms = 5000\n\n')),(0,o.kt)("h2",{id:"4-setting-environment-variables"},"4. Setting Environment Variables"),(0,o.kt)("p",null,"Follow the picture to set runtime Environment Variables in IDEA"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(92497).Z,width:"2435",height:"1400"})),(0,o.kt)("h2",{id:"5-config-options"},"5. Config options"),(0,o.kt)("p",null,"Because part of the dependency is ",(0,o.kt)("inlineCode",{parentName:"p"},"provided"),", idea needs to do a special config. Click on the right ",(0,o.kt)("inlineCode",{parentName:"p"},"Modify Options")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Run/Debug Configurations")," setting. Check the ",(0,o.kt)("inlineCode",{parentName:"p"},'Add Dependencies with "Provided" scope to classpath')," option."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(43846).Z,width:"1006",height:"964"})),(0,o.kt)("h2",{id:"6-start-fe"},"6. Start FE"),(0,o.kt)("p",null,"Having fun with Doris FE!"))}c.isMDXComponent=!0},93085:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/DEBUG4-7c5b94bf36d5b38026f522c90c4d964c.png"},92497:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/DEBUG5-48854eb83a0abb0802393856c6eaf770.png"},21526:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gen_code-eb0ee5102336c3ea5da6c7e9e481180b.png"},43846:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/idea_options-24ec83b18a96c669b6e525cc31bde067.png"}}]);