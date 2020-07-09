# gs\_ctl \(Full and Incremental\)<a name="EN-US_TOPIC_0260488083"></a>

This tool is used to create a standby server from a primary server, as well as to synchronize a server with another copy of the same server after their timelines have diverged.

At the end of the operation, the latest MOT checkpoint is fetched by the tool, taking into consideration the  **checkpoint\_dir**  configuration setting value.

The checkpoint is fetched from the source server's  **checkpoint\_dir**  to the destination server's  **checkpoint\_dir**.

Currently, MOT does not support an incremental checkpoint. Therefore, the gs\_ctl****incremental****build does not work in an incremental manner for MOT, but rather in FULL mode. The Postgres \(disk-tables\) incremental build can still be done incrementally.

