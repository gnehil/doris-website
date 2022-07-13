(window.webpackJsonp=window.webpackJsonp||[]).push([[1169],{1796:function(e,t,a){"use strict";a.r(t);var r=a(15),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"setting-fe-dev-env-using-eclipse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-fe-dev-env-using-eclipse"}},[e._v("#")]),e._v(" Setting FE dev env using Eclipse")]),e._v(" "),a("h2",{attrs:{id:"preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),a("ul",[a("li",[e._v("JDK 1.8+")]),e._v(" "),a("li",[e._v("Maven 3.x+")]),e._v(" "),a("li",[e._v("Eclipse, with "),a("a",{attrs:{href:"http://www.eclipse.org/m2e/",target:"_blank",rel:"noopener noreferrer"}},[e._v("M2Eclipse"),a("OutboundLink")],1),e._v(" installed")])]),e._v(" "),a("h3",{attrs:{id:"code-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-generation"}},[e._v("#")]),e._v(" Code Generation")]),e._v(" "),a("p",[e._v("The FE module requires part of the generated code, such as Thrift, Protobuf, Jflex, CUP and other frameworks.")]),e._v(" "),a("h4",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Under Linux, enter the source code directory "),a("code",[e._v("fe")]),e._v(" and execute the following command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" mvn  generate-sources\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("If use windows as development environment, then package the generated "),a("code",[e._v("fe/fe-core/target/generated-sources")]),e._v(" directory:")]),e._v(" "),a("p",[a("code",[e._v("fe/fe-core/target/ && tar czf java.tar.gz generated-sources/")])])]),e._v(" "),a("li",[a("p",[e._v("Copy "),a("code",[e._v("java.tar.gz")]),e._v(" to the "),a("code",[e._v("fe/fe-core/target/")]),e._v(" directory of the development environment and unzip")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cp java.tar.gz /path/to/doris/fe/fe-core/target/\ncd /path/to/doris/fe/fe-core/target/ && tar xzf java.tar.gz\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])])]),e._v(" "),a("h4",{attrs:{id:"macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" MacOS")]),e._v(" "),a("p",[e._v("We can use maven to do code generation or in other words build FE project\ndirectly on MacOS.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install apache thrift from source code or "),a("code",[e._v("brew")]),e._v(" if you don't have one")])]),e._v(" "),a("li",[a("p",[e._v("Create a directory "),a("code",[e._v("thirdparty/installed/bin")]),e._v(", and link command thrift into\nit.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkdir -p thirdparty/installed/bin\nln -s ${thrift_installed_full_path} thirdparty/installed/bin/thrift\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Call "),a("code",[e._v("maven")]),e._v(" to build FE project, if something went wrong, check you\n"),a("code",[e._v("$JAVA_HOME")]),e._v(", java version and newly installed command "),a("code",[e._v("thrift")]),e._v(" work\ncorrectly.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd fe && mvn package -DskipTests=true -Dos.arch=x86_64\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])]),e._v(" "),a("p",[e._v("Option "),a("code",[e._v("-Dos.arch=x86_64")]),e._v(" in step 3 is for compatibility of Apple's M series\nCPU.")]),e._v(" "),a("p",[e._v("Note:\n0. cup and jfex use java jar to do code generation, the process is platform\nindependent.")]),e._v(" "),a("ol",[a("li",[e._v("Code generation of protobuf is done by "),a("code",[e._v("protoc-jar-maven-plugin")]),e._v(", which uses\nprecompiled binaries of different archs to make it seems platform independent.")]),e._v(" "),a("li",[e._v("thrift is the only one relies on "),a("code",[e._v("thirdparty/installed")]),e._v(", which needs to be\nbuilt from source. We will make it independent on "),a("code",[e._v("thirdparty/installed")]),e._v("\nsomeday (TODO).")])]),e._v(" "),a("h2",{attrs:{id:"import-fe-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-fe-project"}},[e._v("#")]),e._v(" Import FE project")]),e._v(" "),a("h3",{attrs:{id:"import-as-eclipse-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-as-eclipse-project"}},[e._v("#")]),e._v(" Import as eclipse project")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the "),a("code",[e._v("fe/")]),e._v(" directory of the development environment, execute the following command to generate the Eclipse project file:")]),e._v(" "),a("p",[a("code",[e._v("cd /path/to/doris/fe/ && mvn -npr eclipse:eclipse -Dskip.plugin=true")])]),e._v(" "),a("p",[e._v("After the execution is completed, the "),a("code",[e._v(".project")]),e._v(" and "),a("code",[e._v(".classpath")]),e._v(" files will be generated in the "),a("code",[e._v("fe/")]),e._v(" directory.")])]),e._v(" "),a("li",[a("p",[e._v("Import FE project")]),e._v(" "),a("ul",[a("li",[e._v("Open Eclipse, choose "),a("code",[e._v("File -> Import")]),e._v(".")]),e._v(" "),a("li",[e._v("Choose "),a("code",[e._v("General -> Existing Projects into Workspace")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("Select root directory")]),e._v(" and choose "),a("code",[e._v("fe/")]),e._v(" directory, click "),a("code",[e._v("Finish")]),e._v(" to finish.")]),e._v(" "),a("li",[e._v("Right click the project, and choose "),a("code",[e._v("Build Path -> Configure Build Path")]),e._v(".")]),e._v(" "),a("li",[e._v("In the "),a("code",[e._v("Java Build Path")]),e._v(" dialog, choose the "),a("code",[e._v("Source")]),e._v(" tab, click "),a("code",[e._v("Add Folder")]),e._v(", and select the "),a("code",[e._v("java/")]),e._v(" directory that was copied and unzipped before adding.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Apply and Close")]),e._v(" to finish.")])])])]),e._v(" "),a("p",[e._v("At this point, FE project import is complete. The project directory in Eclipse is roughly as follows:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/eclipse-import-fe-project-1.png"),alt:""}}),e._v(" "),a("h3",{attrs:{id:"import-as-maven-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-as-maven-project"}},[e._v("#")]),e._v(" Import as maven project")]),e._v(" "),a("p",[e._v("We are able to build FE with maven, if we have done all the operations related\nto MacOS. And we are now of course able to import FE project as a maven project\nin eclipse.")]),e._v(" "),a("p",[e._v("In eclipse menu "),a("code",[e._v("File")]),e._v(" select "),a("code",[e._v("Import -> Maven -> Existing Maven Projects")]),e._v(",\nChoose doris fe directory to finish import. It's recommended to use working set\nto manage the all modules of FE.")]),e._v(" "),a("p",[e._v("Enjoy developing and debugging FE in eclipse!")]),e._v(" "),a("h2",{attrs:{id:"run-unit-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-unit-test"}},[e._v("#")]),e._v(" Run Unit Test")]),e._v(" "),a("p",[e._v("Right-click on the unit test file you want to run and select "),a("code",[e._v("Run As -> JUnit Test")]),e._v(". (If you want to debug, select "),a("code",[e._v("Debug As -> JUnit Test")]),e._v(").")]),e._v(" "),a("p",[e._v("If the following error occurs:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("java.lang.Exception: Method xxxx should have no parameters\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Then right-click the unit test file and select "),a("code",[e._v("Run As -> Run Configurations...")]),e._v(". (If you want to debug, select "),a("code",[e._v("Debug As -> Debug Configurations...")]),e._v(").")]),e._v(" "),a("p",[e._v("Add to the "),a("code",[e._v("VM arguments")]),e._v(" in the "),a("code",[e._v("Arguments")]),e._v(" tab:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-javaagent:${settings.localRepository}/org/jmockit/jmockit/1.48/jmockit-1.48.jar\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Among them, "),a("code",[e._v("${settings.localRepository}")]),e._v(" should be replaced with the path of the maven library path, such as:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-javaagent:/Users/cmy/.m2/repository/org/jmockit/jmockit/1.48/jmockit-1.48.jar\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Then just run "),a("code",[e._v("Run/Debug")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"run-fe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-fe"}},[e._v("#")]),e._v(" Run FE")]),e._v(" "),a("p",[e._v("You can directly start an FE process in Eclipse to facilitate debugging the code.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create a runtime directory")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkdir /path/to/doris/fe/run/\ncd /path/to/doris/fe/run/\nmkdir conf/ log/ palo-meta/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Create configuration file")]),e._v(" "),a("p",[e._v("Create the configuration file "),a("code",[e._v("fe.conf")]),e._v(" in the "),a("code",[e._v("conf/")]),e._v(" directory created in the first step. You can directly copy "),a("code",[e._v("conf/fe.conf")]),e._v(" in the source directory and make simple changes.")])]),e._v(" "),a("li",[a("p",[e._v("Find the "),a("code",[e._v("src/main/java/org/apache/doris/PaloFe.java")]),e._v(" file in Eclipse, right-click and select "),a("code",[e._v("Run As -> Run Configurations...")]),e._v(". Add the following environment variables to the "),a("code",[e._v("Environment")]),e._v(" tab:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("DORIS_HOME: /path/to/doris/fe/run/")])]),e._v(" "),a("li",[a("code",[e._v("PID_DIR: /path/to/doris/fe/run/")])]),e._v(" "),a("li",[a("code",[e._v("LOG_DIR: /path/to/doris/fe/run/log")])])])]),e._v(" "),a("li",[a("p",[e._v("Right-click "),a("code",[e._v("PaloFe.java")]),e._v(" and select "),a("code",[e._v("Run As -> Java Application")]),e._v(" to start FE.")])])]),e._v(" "),a("p",[e._v("To run a UT, a FE service will be started at first. And then, UT cases execute as client and test corresponding logics. When errors occur, only client logs will be print in UT logs. If you need more information from "),a("strong",[e._v("server logs")]),e._v(", you can view logs in "),a("code",[e._v("${DORIS_HOME}/fe/mocked")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"code-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-update"}},[e._v("#")]),e._v(" Code Update")]),e._v(" "),a("h3",{attrs:{id:"imported-as-eclipse-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imported-as-eclipse-project"}},[e._v("#")]),e._v(" Imported as eclipse project")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Update lexical and grammar files or proto and thrift files")]),e._v(" "),a("p",[e._v("If you modified "),a("code",[e._v("fe/src/main/cup/sql_parser.cup")]),e._v(" or "),a("code",[e._v("fe/src/main/jflex/sql_scanner.flex")]),e._v(" file or proto and thrift files. You need to execute the following commands in the "),a("code",[e._v("fe/")]),e._v(" directory:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mvn  generate-sources\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Then refresh the project in Eclipse.")])]),e._v(" "),a("li",[a("p",[e._v("Update maven dependencies")]),e._v(" "),a("p",[e._v("If you update the dependency in "),a("code",[e._v("fe/pom.xml")]),e._v(", you need to execute the following command in the "),a("code",[e._v("fe/")]),e._v(" directory:")]),e._v(" "),a("p",[a("code",[e._v("mvn -npr eclipse:eclipse -Dskip.plugin=true")])]),e._v(" "),a("p",[e._v("Then refresh the project in Eclipse. If it cannot be updated, it is recommended to delete the project and import it again according to this document.")])])]),e._v(" "),a("h3",{attrs:{id:"imported-as-maven-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imported-as-maven-project"}},[e._v("#")]),e._v(" Imported as maven project")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Update lexical and grammar files or proto and thrift files")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd fe && mvn package -DskipTests=true -Dos.arch=x86_64\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Update maven dependencies, in eclipse "),a("code",[e._v("Package Explorer")]),e._v(" right click on the\nproject "),a("code",[e._v("maven -> update project...")])])]),e._v(" "),a("li",[a("p",[e._v("Refresh project in eclipse")])])]),e._v(" "),a("h2",{attrs:{id:"imports-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imports-order"}},[e._v("#")]),e._v(" Imports Order")]),e._v(" "),a("p",[e._v("In order to maintain the Imports order of Java, please perform the following operations to set the Imports Order of the project.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create the file "),a("code",[e._v("fe_doris.importorder")]),e._v(" and write the following:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#Organize Import Order\n#Wed Jul 01 16:42:47 CST 2020\n4=javax\n3=java\n2=org\n1=com\n0=org.apache.doris\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Open Eclipse Preferences, select "),a("code",[e._v("Java -> Code Style -> Organize Imports")]),e._v(". Click "),a("code",[e._v("Import")]),e._v(" to import the above file.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);