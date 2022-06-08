# PITR<a name="EN-US_TOPIC_0289897007"></a>

## Background<a name="en-us_topic_0283140540_section1093619499159"></a>

When a database breaks down or needs to be rolled back to a previous state, the point-in-time recovery \(PITR\) function of openGauss can be used to restore the database to any point in time after the backup and archive data is generated.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   PITR can only be restored to a point in time after the physical backup data is generated.
>-   Only the primary node can be restored using PITR. The standby node needs to be fully built to synchronize data with the primary node.

## Prerequisites<a name="en-us_topic_0283140540_section5133181313201"></a>

-   Full data files have been physically backed up.
-   WAL log files have been archived.

## PITR Process<a name="en-us_topic_0283140540_section162231757172114"></a>

1.  Replace the target database directory with the physical backup files.
2.  Delete all files in the database directory  **pg\_xlog/**.
3.  Copy the archived WAL log file to the  **pg\_xlog**  file. \(Or you can configure  **restore\_command**  in the  **recovery.conf**  file to skip this step.\)
4.  Create the recovery command file  **recovery.conf**  in the database directory and specify the database recovery degree.
5.  Start the database.
6.  Connect to the database and check whether the database is recovered to the expected status.
7.  If the expected status is reached, run the  **pg\_xlog\_replay\_resume\(\)**  command so that the primary node can provide services externally.

## Configuring the recovery.conf File<a name="en-us_topic_0283140540_section1847655332317"></a>

**Archive Recovery Configuration**

-   restore\_command = string

The  **shell**  command is used to obtain the archived WAL files among the WAL file series. Any %f in the string is replaced by the name of the file to retrieve from the archive, and any %p is replaced by the path name to copy it to on the server. Any %r is replaced by the name of the file containing the last valid restart point.

For example:

```
restore_command = 'cp /mnt/server/archivedir/%f %p'
```

-   archive\_cleanup\_command = string

This parameter declares a  **shell**  command that is executed each time the system is restarted.  **archive\_cleanup\_command**  provides a mechanism for deleting unnecessary archived WAL files from the standby database. Any %r is replaced by the name of the file containing the last valid restart point. That is the earliest file that must be kept to allow recovery to be restartable, so all files older than %r can be safely removed.

For example:

```
archive_cleanup_command = 'pg_archivecleanup /mnt/server/archivedir %r'
```

If multiple standby servers need to be recovered from the same archive path, ensure that WAL files are not deleted from any standby server before the recovery.

-   recovery\_end\_command = string

This parameter is optional and is used to declare a  **shell**  command that is executed only when the recovery is complete.  **recovery\_end\_command**  provides a cleanup mechanism for future replication and recovery.

**Recovery Object Configuration**

-   recovery\_target\_name = string

This parameter declares that the name is recovered to a recovery point created using pg\_create\_restore\_point\(\).

For example:

```
recovery_target_name = 'restore_point_1'
```

-   recovery\_target\_time = timestamp

This parameter declares that the name is recovered to a specified timestamp.

For example:

```
recovery_target_time = '2020-01-01 12:00:00'
```

-   recovery\_target\_xid = string

This parameter declares that the name is recovered to a transaction ID.

For example:

```
recovery_target_xid = '3000'
```

-   recovery\_target\_lsn = string

This parameter declares that the name is recovered to the LSN specified by log.

For example:

```
recovery_target_lsn = '0/0FFFFFF'
```

-   recovery\_target\_inclusive = boolean

This parameter declares whether to stop the recovery after the recovery target is specified \(**true**\) or before the recovery target is specified \(**false**\). This declaration supports only the recovery targets  **recovery\_target\_time**,  **recovery\_target\_xid**, and  **recovery\_target\_lsn**.

For example:

```
recovery_target_inclusive = true
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   Only one of the four configuration items  **recovery\_target\_name**,  **recovery\_target\_time**,  **recovery\_target\_xid**, and  **recovery\_target\_lsn**  can be used at a time.
>-   If no recovery targets are configured or the configured target does not exist, data is recovered to the latest WAL log point by default.

