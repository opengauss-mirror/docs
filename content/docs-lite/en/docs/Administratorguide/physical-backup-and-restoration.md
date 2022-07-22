# Physical Backup and Restoration<a name="EN-US_TOPIC_0289897025"></a>

## PITR<a name="EN-US_TOPIC_0289897007"></a>

### Background<a name="en-us_topic_0283140540_section1093619499159"></a>

When the database breaks down or needs to be rolled back to a previous state, the point-in-time recovery (PITR) function of openGauss can be used to restore the database to any time point after the backup and archived data is generated.

>![](public_sys-resources/icon-note.gif) **NOTE:**
>
>-   PITR can only restore the database to a time point after the physical backup data is generated.
>-   Only the primary node can be restored by using PITR. The standby node needs to be fully built to synchronize data with the primary node.

### Prerequisites<a name="en-us_topic_0283140540_section5133181313201"></a>

-   Full data files have been physically backed up.
-   WAL files have been archived.

### PITR Process<a name="en-us_topic_0283140540_section162231757172114"></a>

1.  Replace the target database directory with the physical backup files.
2.  Delete all files in the database directory **pg\_xlog/**.
3.  Copy the archived WAL files to the **pg\_xlog** file. (You can configure **restore\_command** in the **recovery.conf** file to skip this step.)
4.  Create the **recovery.conf** file in the database directory and specify the database restoration degree.
5.  Start the database.
6.  Connect to the database and check whether the database is restored to the expected state.
7.  If the expected state is reached, run the **pg\_xlog\_replay\_resume\(\)** command to enable the primary node to provide services externally.

### Configuring the recovery.conf File<a name="en-us_topic_0283140540_section1847655332317"></a>

**Archive Restoration Configuration**

-   restore\_command = string

The **shell** command is used to obtain the archived WAL files among the WAL file series. Any **%f** in the string is replaced by the name of the file retrieved from the archived files. Any **%p** is replaced by the path name of the replication destination on the server. Any **%r** is replaced by the name of the file containing the latest valid restart point.

Example:

```
restore_command = 'cp /mnt/server/archivedir/%f %p'
```

-   archive\_cleanup\_command = string

This parameter declares a **shell** command that is executed each time the system is restarted. **archive\_cleanup\_command** provides a mechanism for deleting unnecessary archived WAL files from the standby database. Any **%r** is replaced by the name of the file containing the latest valid restart point. The file is the earliest file that must be kept to allow restoration to be restartable, so that all files earlier than the value of **%r** can be safely removed.

Example:

```
archive_cleanup_command = 'pg_archivecleanup /mnt/server/archivedir %r'
```

If multiple standby servers need to be restored from the same archive path, ensure that the WAL files are not deleted from any standby server before the restoration.

-   recovery\_end\_command = string

This parameter is optional and is used to declare a **shell** command that is executed only when the restoration is complete. **recovery\_end\_command** provides a cleanup mechanism for future replication and restoration.

**Restoration Object Configuration**

-   recovery\_target\_name = string

This parameter declares that the name is restored to a restoration point created by using **pg\_create\_restore\_point\(\)**.

Example:

```
recovery_target_name = 'restore_point_1'
```

-   recovery\_target\_time = timestamp

This parameter declares that the name is restored to a specified timestamp.

Example:

```
recovery_target_time = '2020-01-01 12:00:00'
```

-   recovery\_target\_xid = string

This parameter declares that the name is restored to a transaction ID.

Example:

```
recovery_target_xid = '3000'
```

-   recovery\_target\_lsn = string

This parameter declares that the name is restored to the LSN specified by logs.

Example:

```
recovery_target_lsn = '0/0FFFFFF'
```

-   recovery\_target\_inclusive = boolean

This parameter declares whether to stop the restoration after the restoration target is specified (**true**) or before the restoration target is specified (**false**). This declaration supports only the restoration targets **recovery\_target\_time**, **recovery\_target\_xid**, and **recovery\_target\_lsn**.

Example:

```
recovery_target_inclusive = true
```

>![](public_sys-resources/icon-note.gif) **NOTE:**
>
>-   Only one of the four configuration items **recovery\_target\_name**, **recovery\_target\_time**, **recovery\_target\_xid**, and **recovery\_target\_lsn** can be used at a time.
>-   If no restoration target is configured or the configured target does not exist, data is restored to the latest WAL point by default.
