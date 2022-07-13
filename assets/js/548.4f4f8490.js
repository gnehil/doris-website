(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{1174:function(e,t,a){"use strict";a.r(t);var o=a(15),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"backup-and-recovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-and-recovery"}},[e._v("#")]),e._v(" Backup and Recovery")]),e._v(" "),a("p",[e._v("Doris supports the backup of current data in the form of files to remote storage systems via broker. The data can then be restored from the remote storage system to any Doris cluster by the restore command. With this feature, Doris can support regular snapshot backups of data. It can also be used to migrate data between different clusters.")]),e._v(" "),a("p",[e._v("This feature requires Doris version 0.8.2+")]),e._v(" "),a("p",[e._v("Using this function, brokers corresponding to remote storage need to be deployed. Such as BOS, HDFS, etc. You can view the currently deployed broker through "),a("code",[e._v("SHOW BROKER;")])]),e._v(" "),a("h2",{attrs:{id:"brief-principle-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brief-principle-description"}},[e._v("#")]),e._v(" Brief Principle Description")]),e._v(" "),a("h3",{attrs:{id:"backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup"}},[e._v("#")]),e._v(" Backup")]),e._v(" "),a("p",[e._v("The backup operation is to upload the data of the specified table or partition directly to the remote warehouse in the form of files stored by Doris for storage. When a user submits a Backup request, the following actions will be done within the system:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Snapshot and snapshot upload")]),e._v(" "),a("p",[e._v("The snapshot phase takes a snapshot of the specified table or partition data file. Later, backups are all snapshots. After the snapshot, changes to tables, imports, and other operations no longer affect the results of the backup. Snapshots only produce a hard link to the current data file, which takes very little time. Once the snapshots are completed, they are uploaded one by one. Snapshot upload is done concurrently by each Backend.")])]),e._v(" "),a("li",[a("p",[e._v("Metadata preparation and upload")]),e._v(" "),a("p",[e._v("After the data file snapshot is uploaded, Frontend first writes the corresponding metadata to the local file, and then uploads the local metadata file to the remote warehouse through broker. Finish the final backup job.")])])]),e._v(" "),a("h3",{attrs:{id:"restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore"}},[e._v("#")]),e._v(" Restore")]),e._v(" "),a("p",[e._v("Recovery operations need to specify a backup that already exists in a remote repository, and then restore the backup content to the local cluster. When a user submits a Restore request, the following actions will be done within the system:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create corresponding metadata locally")]),e._v(" "),a("p",[e._v("This step starts by creating structures such as restoring the corresponding table partitions in the local cluster. When created, the table is visible, but not accessible.")])]),e._v(" "),a("li",[a("p",[e._v("Local snapshot")]),e._v(" "),a("p",[e._v("This step is to take a snapshot of the table created in the previous step. This is actually an empty snapshot (because the tables just created have no data), and its main purpose is to generate the corresponding snapshot directory on the Backend for receiving the snapshot files downloaded from the remote repository later.")])]),e._v(" "),a("li",[a("p",[e._v("Download snapshots")]),e._v(" "),a("p",[e._v("The snapshot files in the remote warehouse are downloaded to the corresponding snapshot directory generated in the previous step. This step is done concurrently by each backend.")])]),e._v(" "),a("li",[a("p",[e._v("Effective snapshot")]),e._v(" "),a("p",[e._v("When the snapshot download is complete, we map each snapshot to the metadata of the current local table. These snapshots are then reloaded to take effect and complete the final recovery operation.")])])]),e._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("h3",{attrs:{id:"backup-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-2"}},[e._v("#")]),e._v(" Backup")]),e._v(" "),a("p",[e._v("We currently support full backup at the minimum partition granularity (incremental backup may be supported in future versions). If data need to be backed up regularly, first of all, it is necessary to plan the partition and bucket allocation of tables reasonably, such as partitioning according to time. Then in the subsequent run process, periodic data backup is performed according to partition granularity.")]),e._v(" "),a("h3",{attrs:{id:"data-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-migration"}},[e._v("#")]),e._v(" Data migration")]),e._v(" "),a("p",[e._v("Users can first backup the data to the remote warehouse, and then restore the data to another cluster through the remote warehouse to complete data migration. Because data backup is done in the form of snapshots, new imported data after the snapshot phase of the backup job will not be backed up. Therefore, after the snapshot is completed, the data imported on the original cluster needs to be imported on the new cluster as well until the recovery job is completed.")]),e._v(" "),a("p",[e._v("It is suggested that the new and old clusters be imported in parallel for a period of time after the migration is completed. After completing data and business correctness checks, the business is migrated to the new cluster.")]),e._v(" "),a("h2",{attrs:{id:"highlights"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highlights"}},[e._v("#")]),e._v(" Highlights")]),e._v(" "),a("ol",[a("li",[e._v("Backup and recovery-related operations are currently only allowed to be performed by users with ADMIN privileges.")]),e._v(" "),a("li",[e._v("Within a database, only one backup or recovery job is allowed to be performed.")]),e._v(" "),a("li",[e._v("Both backup and recovery support the operation at the minimum partition level. When the table has a large amount of data, it is recommended to perform partition-by-partition to reduce the cost of failed retries.")]),e._v(" "),a("li",[e._v("Because backup and recovery operations, the operation is the actual data files. So when there are too many fragments of a table or too many small versions of a fragment, it may take a long time to backup or restore even if the total amount of data is very small. Users can estimate job execution time by "),a("code",[e._v("SHOW PARTITIONS FROM table_name;")]),e._v(", and "),a("code",[e._v("SHOW TABLET FROM table_name;")]),e._v(", viewing the number of partitions and the number of file versions of each partition. The number of files has a great impact on the execution time of the job, so it is suggested that the partition buckets should be planned reasonably in order to avoid excessive partitioning.")]),e._v(" "),a("li",[e._v("When viewing the job status through "),a("code",[e._v("SHOW BACKUP")]),e._v(" or "),a("code",[e._v("SHOW RESTORE")]),e._v(". It is possible to see an error message in the "),a("code",[e._v("TaskErrMsg")]),e._v(" column. But as long as the "),a("code",[e._v("State")]),e._v(" column does not\n"),a("code",[e._v("CANCELLED")]),e._v(", that means the job is still going on. These Tasks may succeed in retrying. Of course, some Task errors can also directly lead to job failure.")]),e._v(" "),a("li",[e._v("If the recovery operation is a coverage operation (specifying the recovery data to an existing table or partition), then starting from the "),a("code",[e._v("COMMIT")]),e._v(" phase of the recovery operation, the data covered on the current cluster may not be restored. At this time, if the recovery operation fails or is cancelled, it may cause the previous data to be damaged and inaccessible. In this case, the recovery operation can only be performed again and wait for the job to complete. Therefore, we recommend that if it is not necessary, try not to use coverage to recover data unless it is confirmed that the current data is no longer in use.")])]),e._v(" "),a("h2",{attrs:{id:"relevant-orders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relevant-orders"}},[e._v("#")]),e._v(" Relevant orders")]),e._v(" "),a("p",[e._v("The commands related to the backup recovery function are as follows. The following commands, you can use `help cmd;'to view detailed help after connecting Doris through mysql-client.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("CREATE REPOSITORY")]),e._v(" "),a("p",[e._v("Create a remote warehouse Path for backup or recovery. This command needs to access the remote storage through the Broker. Different brokers need to provide different parameters. For details, please refer to [Broker Document] (broker.md), or directly back up to the remote storage supporting AWS S3 protocol through S3 protocol. For details, please refer to [CREATE REPOSITORY DOCUMENT] (../sql-reference/sql-statements/Data%20Definition/CREATE%20REPOSITORY.md)")])]),e._v(" "),a("li",[a("p",[e._v("BACKUP")]),e._v(" "),a("p",[e._v("Perform a backup operation.")])]),e._v(" "),a("li",[a("p",[e._v("SHOW BACKUP")]),e._v(" "),a("p",[e._v("View the execution of the last backup job, including:")]),e._v(" "),a("ul",[a("li",[e._v("JobId: ID of this backup job.")]),e._v(" "),a("li",[e._v("SnapshotName: User-specified name of this backup job (Label).")]),e._v(" "),a("li",[e._v("DbName: The database corresponding to the backup job.")]),e._v(" "),a("li",[e._v("State: The current stage of the backup job:\n"),a("ul",[a("li",[e._v("PENDING: The initial state of the job.")]),e._v(" "),a("li",[e._v("SNAPSHOTING: Snapshot operation is in progress.")]),e._v(" "),a("li",[e._v("UPLOAD_SNAPSHOT: The snapshot is over and ready to upload.")]),e._v(" "),a("li",[e._v("UPLOADING: Uploading snapshots.")]),e._v(" "),a("li",[e._v("SAVE_META: Metadata files are being generated locally.")]),e._v(" "),a("li",[e._v("UPLOAD_INFO: Upload metadata files and information for this backup job.")]),e._v(" "),a("li",[e._v("FINISHED: The backup is complete.")]),e._v(" "),a("li",[e._v("CANCELLED: Backup failed or cancelled.")])])]),e._v(" "),a("li",[e._v("Backup Objs: List of tables and partitions involved in this backup.")]),e._v(" "),a("li",[e._v("CreateTime: Job creation time.")]),e._v(" "),a("li",[e._v("Snapshot Finished Time: Snapshot completion time.")]),e._v(" "),a("li",[e._v("Upload Finished Time: Snapshot upload completion time.")]),e._v(" "),a("li",[e._v("FinishedTime: The completion time of this assignment.")]),e._v(" "),a("li",[e._v("Unfinished Tasks: In the "),a("code",[e._v("SNAPSHOTTING")]),e._v(", "),a("code",[e._v("UPLOADING")]),e._v(" and other stages, there will be multiple sub-tasks at the same time, the current stage shown here, the task ID of the unfinished sub-tasks.")]),e._v(" "),a("li",[e._v("TaskErrMsg: If there is a sub-task execution error, the error message corresponding to the sub-task will be displayed here.")]),e._v(" "),a("li",[e._v("Status: It is used to record some status information that may appear during the whole operation.")]),e._v(" "),a("li",[e._v("Timeout: The timeout time of a job in seconds.")])])]),e._v(" "),a("li",[a("p",[e._v("SHOW SNAPSHOT")]),e._v(" "),a("p",[e._v("View the backup that already exists in the remote warehouse.")]),e._v(" "),a("ul",[a("li",[e._v("Snapshot: The name of the backup specified at the time of backup (Label).")]),e._v(" "),a("li",[e._v("Timestamp: Backup timestamp.")]),e._v(" "),a("li",[e._v("Status: Is the backup normal?")])]),e._v(" "),a("p",[e._v("If the where clause is specified after `SHOW SNAPSHOT', more detailed backup information can be displayed.")]),e._v(" "),a("ul",[a("li",[e._v("Database: The database corresponding to backup.")]),e._v(" "),a("li",[e._v("Details: Shows the complete data directory structure of the backup.")])])]),e._v(" "),a("li",[a("p",[e._v("RESTORE")]),e._v(" "),a("p",[e._v("Perform a recovery operation.")])]),e._v(" "),a("li",[a("p",[e._v("SHOW RESTORE")]),e._v(" "),a("p",[e._v("View the execution of the last restore job, including:")]),e._v(" "),a("ul",[a("li",[e._v("JobId: ID of this resumption job.")]),e._v(" "),a("li",[e._v("Label: The name of the backup in the user-specified warehouse (Label).")]),e._v(" "),a("li",[e._v("Timestamp: The timestamp for backup in a user-specified warehouse.")]),e._v(" "),a("li",[e._v("DbName: Restore the database corresponding to the job.")]),e._v(" "),a("li",[e._v("State: The current stage of the recovery operation:\n"),a("ul",[a("li",[e._v("PENDING: The initial state of the job.")]),e._v(" "),a("li",[e._v("SNAPSHOTING: A snapshot of a new local table is in progress.")]),e._v(" "),a("li",[e._v("DOWNLOAD: The download snapshot task is being sent.")]),e._v(" "),a("li",[e._v("DOWNLOADING: Snapshot is downloading.")]),e._v(" "),a("li",[e._v("COMMIT: Prepare to take effect the downloaded snapshot.")]),e._v(" "),a("li",[e._v("COMMITTING: The downloaded snapshot is in effect.")]),e._v(" "),a("li",[e._v("FINISHED: Recovery is complete.")]),e._v(" "),a("li",[e._v("CANCELLED: Recovery failed or cancelled.")])])]),e._v(" "),a("li",[e._v("AllowLoad: Is import allowed during recovery?")]),e._v(" "),a("li",[e._v("ReplicationNum: Restores the specified number of copies.")]),e._v(" "),a("li",[e._v("Restore Objs: List of tables and partitions involved in this recovery.")]),e._v(" "),a("li",[e._v("CreateTime: Job creation time.")]),e._v(" "),a("li",[e._v("MetaPreparedTime: Completion time of local metadata generation.")]),e._v(" "),a("li",[e._v("Snapshot Finished Time: Local snapshot completion time.")]),e._v(" "),a("li",[e._v("Download Finished Time: The download completion time of the remote snapshot.")]),e._v(" "),a("li",[e._v("FinishedTime: The completion time of this assignment.")]),e._v(" "),a("li",[e._v("Unfinished Tasks: In the "),a("code",[e._v("SNAPSHOTTING")]),e._v(", "),a("code",[e._v("DOWNLOADING")]),e._v(", "),a("code",[e._v("COMMITTING")]),e._v(", and other stages, there will be multiple sub-tasks at the same time, the current stage shown here, the task ID of the unfinished sub-tasks.")]),e._v(" "),a("li",[e._v("TaskErrMsg: If there is a sub-task execution error, the error message corresponding to the sub-task will be displayed here.")]),e._v(" "),a("li",[e._v("Status: It is used to record some status information that may appear during the whole operation.")]),e._v(" "),a("li",[e._v("Timeout: The timeout time of a job in seconds.")])])]),e._v(" "),a("li",[a("p",[e._v("CANCEL BACKUP")]),e._v(" "),a("p",[e._v("Cancel the backup job currently being performed.")])]),e._v(" "),a("li",[a("p",[e._v("CANCEL RESTORE")]),e._v(" "),a("p",[e._v("Cancel the recovery job currently being performed.")])]),e._v(" "),a("li",[a("p",[e._v("DROP REPOSITORY")]),e._v(" "),a("p",[e._v("Delete the created remote warehouse. Delete the warehouse, just delete the mapping of the warehouse in Doris, will not delete the actual warehouse data.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);