(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{758:function(e,t,a){"use strict";a.r(t);var s=a(15),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"disk-capacity-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disk-capacity-management"}},[e._v("#")]),e._v(" Disk Capacity Management")]),e._v(" "),a("p",[e._v("This document mainly introduces system parameters and processing strategies related to disk storage capacity.")]),e._v(" "),a("p",[e._v("If Doris' data disk capacity is not controlled, the process will hang because the disk is full. Therefore, we monitor the disk usage and remaining capacity, and control various operations in the Doris system by setting different warning levels, and try to avoid the situation where the disk is full.")]),e._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("ul",[a("li",[e._v("Data Dir：Data directory, each data directory specified in the "),a("code",[e._v("storage_root_path")]),e._v(" of the BE configuration file "),a("code",[e._v("be.conf")]),e._v(". Usually a data directory corresponds to a disk, so the following "),a("strong",[e._v("disk")]),e._v(" also refers to a data directory.")])]),e._v(" "),a("h2",{attrs:{id:"basic-principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-principles"}},[e._v("#")]),e._v(" Basic Principles")]),e._v(" "),a("p",[e._v("BE will report disk usage to FE on a regular basis (every minute). FE records these statistical values and restricts various operation requests based on these statistical values.")]),e._v(" "),a("p",[e._v("Two thresholds, "),a("strong",[e._v("High Watermark")]),e._v(" and "),a("strong",[e._v("Flood Stage")]),e._v(", are set in FE. Flood Stage is higher than High Watermark. When the disk usage is higher than High Watermark, Doris will restrict the execution of certain operations (such as replica balancing, etc.). If it is higher than Flood Stage, certain operations (such as load data) will be prohibited.")]),e._v(" "),a("p",[e._v("At the same time, a "),a("strong",[e._v("Flood Stage")]),e._v(" is also set on the BE. Taking into account that FE cannot fully detect the disk usage on BE in a timely manner, and cannot control certain BE operations (such as Compaction). Therefore, Flood Stage on the BE is used for the BE to actively refuse and stop certain operations to achieve the purpose of self-protection.")]),e._v(" "),a("h2",{attrs:{id:"fe-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-parameter"}},[e._v("#")]),e._v(" FE Parameter")]),e._v(" "),a("p",[a("strong",[e._v("High Watermark:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("storage_high_watermark_usage_percent: default value is 85 (85%).\nstorage_min_left_capacity_bytes: default value is 2GB.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("When disk capacity "),a("strong",[e._v("more than")]),e._v(" "),a("code",[e._v("storage_high_watermark_usage_percent")]),e._v(", "),a("strong",[e._v("or")]),e._v(" disk free capacity "),a("strong",[e._v("less than")]),e._v(" "),a("code",[e._v("storage_min_left_capacity_bytes")]),e._v(", the disk will no longer be used as the destination path for the following operations:")]),e._v(" "),a("ul",[a("li",[e._v("Tablet Balance")]),e._v(" "),a("li",[e._v("Colocation Relocation")]),e._v(" "),a("li",[e._v("Decommission")])]),e._v(" "),a("p",[a("strong",[e._v("Flood Stage:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("storage_flood_stage_usage_percent: default value is 95 (95%).\nstorage_flood_stage_left_capacity_bytes: default value is 1GB.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("When disk capacity "),a("strong",[e._v("more than")]),e._v(" "),a("code",[e._v("storage_flood_stage_usage_percent")]),e._v(", "),a("strong",[e._v("or")]),e._v(" disk free capacity "),a("strong",[e._v("less than")]),e._v(" "),a("code",[e._v("storage_flood_stage_left_capacity_bytes")]),e._v(", the disk will no longer be used as the destination path for the following operations:")]),e._v(" "),a("ul",[a("li",[e._v("Tablet Balance")]),e._v(" "),a("li",[e._v("Colocation Relocation")]),e._v(" "),a("li",[e._v("Replica make up")]),e._v(" "),a("li",[e._v("Restore")]),e._v(" "),a("li",[e._v("Load/Insert")])]),e._v(" "),a("h2",{attrs:{id:"be-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#be-parameter"}},[e._v("#")]),e._v(" BE Parameter")]),e._v(" "),a("p",[a("strong",[e._v("Flood Stage:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("capacity_used_percent_flood_stage: default value is 95 (95%).\ncapacity_min_left_bytes_flood_stage: default value is 1GB.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("When disk capacity "),a("strong",[e._v("more than")]),e._v(" "),a("code",[e._v("storage_flood_stage_usage_percent")]),e._v(", "),a("strong",[e._v("and")]),e._v(" disk free capacity "),a("strong",[e._v("less than")]),e._v(" "),a("code",[e._v("storage_flood_stage_left_capacity_bytes")]),e._v(", the following operations on this disk will be prohibited:")]),e._v(" "),a("ul",[a("li",[e._v("Base/Cumulative Compaction")]),e._v(" "),a("li",[e._v("Data load")]),e._v(" "),a("li",[e._v("Clone Task (Usually occurs when the replica is repaired or balanced.)")]),e._v(" "),a("li",[e._v("Push Task (Occurs during the Loading phase of Hadoop import, and the file is downloaded. )")]),e._v(" "),a("li",[e._v("Alter Task (Schema Change or Rollup Task.)")]),e._v(" "),a("li",[e._v("Download Task (The Downloading phase of the recovery operation.)")])]),e._v(" "),a("h2",{attrs:{id:"disk-capacity-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disk-capacity-release"}},[e._v("#")]),e._v(" Disk Capacity Release")]),e._v(" "),a("p",[e._v("When the disk capacity is higher than High Watermark or even Flood Stage, many operations will be prohibited. At this time, you can try to reduce the disk usage and restore the system in the following ways.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Delete table or partition")]),e._v(" "),a("p",[e._v("By deleting tables or partitions, you can quickly reduce the disk space usage and restore the cluster.\n"),a("strong",[e._v("Note: Only the "),a("code",[e._v("DROP")]),e._v(" operation can achieve the purpose of quickly reducing the disk space usage, the "),a("code",[e._v("DELETE")]),e._v(" operation cannot.")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("DROP TABLE tbl;\nALTER TABLE tbl DROP PARTITION p1;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("BE expansion")]),e._v(" "),a("p",[e._v("After backend expansion, data tablets will be automatically balanced to BE nodes with lower disk usage. The expansion operation will make the cluster reach a balanced state in a few hours or days depending on the amount of data and the number of nodes.")])]),e._v(" "),a("li",[a("p",[e._v("Modify replica of a table or partition")]),e._v(" "),a("p",[e._v("You can reduce the number of replica of a table or partition. For example, the default 3 replica can be reduced to 2 replica. Although this method reduces the reliability of the data, it can quickly reduce the disk usage rate and restore the cluster to normal.\nThis method is usually used in emergency recovery systems. Please restore the number of copies to 3 after reducing the disk usage rate by expanding or deleting data after recovery."),a("br"),e._v("\nModifying the replica operation takes effect instantly, and the backends will automatically and asynchronously delete the redundant replica.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ALTER TABLE tbl MODIFY PARTITION p1 SET("replication_num" = "2");\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Delete unnecessary files")]),e._v(" "),a("p",[e._v("When the BE has crashed because the disk is full and cannot be started (this phenomenon may occur due to untimely detection of FE or BE), you need to delete some temporary files in the data directory to ensure that the BE process can start.\nFiles in the following directories can be deleted directly:")]),e._v(" "),a("ul",[a("li",[e._v("log/：Log files in the log directory.")]),e._v(" "),a("li",[e._v("snapshot/: Snapshot files in the snapshot directory.")]),e._v(" "),a("li",[e._v("trash/ Trash files in the trash directory.")])]),e._v(" "),a("p",[a("strong",[e._v("This operation will affect "),a("RouterLink",{attrs:{to:"/docs/admin-manual/maint-monitor/tablet-restore-tool.html"}},[e._v("Restore data from BE Recycle Bin")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("If the BE can still be started, you can use "),a("code",[e._v("ADMIN CLEAN TRASH ON(BackendHost:BackendHeartBeatPort);")]),e._v(" to actively clean up temporary files. "),a("strong",[e._v("all trash files")]),e._v(" and expired snapshot files will be cleaned up, "),a("strong",[e._v("This will affect the operation of restoring data from the trash bin")]),e._v(".")]),e._v(" "),a("p",[e._v("If you do not manually execute "),a("code",[e._v("ADMIN CLEAN TRASH")]),e._v(", the system will still automatically execute the cleanup within a few minutes to tens of minutes.There are two situations as follows:")]),e._v(" "),a("ul",[a("li",[e._v("If the disk usage does not reach 90% of the "),a("strong",[e._v("Flood Stage")]),e._v(", expired trash files and expired snapshot files will be cleaned up. At this time, some recent files will be retained without affecting the recovery of data.")]),e._v(" "),a("li",[e._v("If the disk usage has reached 90% of the "),a("strong",[e._v("Flood Stage")]),e._v(", "),a("strong",[e._v("all trash files")]),e._v(" and expired snapshot files will be cleaned up, "),a("strong",[e._v("This will affect the operation of restoring data from the trash bin")]),e._v(".")])]),e._v(" "),a("p",[e._v("The time interval for automatic execution can be changed by "),a("code",[e._v("max_garbage_sweep_interval")]),e._v(" and "),a("code",[e._v("min_garbage_sweep_interval")]),e._v(" in the configuration items.")]),e._v(" "),a("p",[e._v("When the recovery fails due to lack of trash files, the following results may be returned:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{"status": "Fail","msg": "can find tablet path in trash"}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Delete data file (dangerous!!!)")]),e._v(" "),a("p",[e._v("When none of the above operations can free up capacity, you need to delete data files to free up space. The data file is in the "),a("code",[e._v("data/")]),e._v(" directory of the specified data directory. To delete a tablet, you must first ensure that at least one replica of the tablet is normal, otherwise "),a("strong",[e._v("deleting the only replica will result in data loss")]),e._v(".")]),e._v(" "),a("p",[e._v("Suppose we want to delete the tablet with id 12345:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Find the directory corresponding to Tablet, usually under "),a("code",[e._v("data/shard_id/tablet_id/")]),e._v(". like:")]),e._v(" "),a("p",[a("code",[e._v("data/0/12345/")])])]),e._v(" "),a("li",[a("p",[e._v("Record the tablet id and schema hash. The schema hash is the name of the next-level directory of the previous step. The following is 352781111:")]),e._v(" "),a("p",[a("code",[e._v("data/0/12345/352781111")])])]),e._v(" "),a("li",[a("p",[e._v("Delete the data directory:")]),e._v(" "),a("p",[a("code",[e._v("rm -rf data/0/12345/")])])]),e._v(" "),a("li",[a("p",[e._v("Delete tablet metadata (refer to "),a("RouterLink",{attrs:{to:"/docs/admin-manual/maint-monitor/tablet-meta-tool.html"}},[e._v("Tablet metadata management tool")]),e._v("）")],1),e._v(" "),a("p",[a("code",[e._v("./lib/meta_tool --operation=delete_header --root_path=/path/to/root_path --tablet_id=12345 --schema_hash= 352781111")])])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);