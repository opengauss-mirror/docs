# MOT External Support Tools<a name="EN-US_TOPIC_0270171479"></a>

The following external openGauss tools have been modified in order to support MOT. Make sure to use the most recent version of each. An overview describing MOT-related usage is provided below. For a full description of these tools and their usage, refer to the openGauss Tools Reference document.

## gs\_ctl \(Full and Incremental\)<a name="section961120357353"></a>

This tool is used to create a standby server from a primary server, as well as to synchronize a server with another copy of the same server after their timelines have diverged.

At the end of the operation, the latest MOT checkpoint is fetched by the tool, taking into consideration the  **checkpoint\_dir**  configuration setting value.

The checkpoint is fetched from the source server's  **checkpoint\_dir**  to the destination server's  **checkpoint\_dir**.

Currently, MOT does not support an incremental checkpoint. Therefore, the gs\_ctl incremental build does not work in an incremental manner for MOT, but rather in FULL mode. The Postgres \(disk-tables\) incremental build can still be done incrementally.

## gs\_basebackup<a name="section357133133617"></a>

gs\_basebackup is used to prepare base backups of a running server, without affecting other database clients.

The MOT checkpoint is fetched at the end of the operation as well. However, the checkpoint's location is taken from  **checkpoint\_dir**  in the source server and is transferred to the data directory of the source in order to back it up correctly.

## gs\_dump<a name="section19393259364"></a>

gs\_dump is used to export the database schema and data to a file. It also supports MOT tables.

## gs\_restore<a name="section151119426368"></a>

gs\_restore is used to import the database schema and data from a file. It also supports MOT tables.

