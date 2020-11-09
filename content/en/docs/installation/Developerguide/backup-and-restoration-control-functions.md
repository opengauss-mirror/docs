# Backup and Restoration Control Functions<a name="EN-US_TOPIC_0242370456"></a>

## Backup Control Functions<a name="en-us_topic_0237121992_en-us_topic_0059778344_s540f3b3ffcd845909fe45a65f5cff84f"></a>

Backup control functions help with online backup.

-   pg\_create\_restore\_point\(name text\)

    Description: Creates a named point for performing the restore operation \(restricted to system administrators\).

    Return type: text

    Note:  **pg\_create\_restore\_point**  creates a named transaction log record that can be used as a restoration target, and returns the corresponding transaction log location. The given name can then be used with  **recovery\_target\_name**  to specify the point up to which restoration will proceed. Avoid creating multiple restoration points with the same name, since restoration will stop at the first one whose name matches the restoration target.

-   pg\_current\_xlog\_location\(\)

    Description: Obtains the write position of the current transaction log.

    Return type: text

    Note:  **pg\_current\_xlog\_location**  displays the write position of the current transaction log in the same format as those of the previous functions. Read-only operations do not require rights of the system administrator.

-   pg\_current\_xlog\_insert\_location\(\)

    Description: Obtains the insert position of the current transaction log.

    Return type: text

    Note:  **pg\_current\_xlog\_insert\_location**  displays the insert position of the current transaction log. The insertion point is the logical end of the transaction log at any instant, while the write location is the end of what has been written out from the server's internal buffers. The write position is the end that can be detected externally from the server. This operation can be performed to archive only some of completed transaction log files. The insert position is used for commissioning the server. Read-only operations do not require rights of the system administrator.

-   pg\_start\_backup\(label text \[, fast boolean \]\)

    Description: Starts executing online backup \(restricted to system administrators or replication roles\).

    Return type: text

    Note:  **pg\_start\_backup**  receives a user-defined backup label \(usually the name of the position where the backup dump file is stored\). This function writes a backup label file to the data directory of openGauss and then returns the starting position of backed up transaction logs in text mode.

    ```
    postgres=# SELECT pg_start_backup('label_goes_here');
     pg_start_backup
    -----------------
     0/3000020
    (1 row)
    ```

-   pg\_stop\_backup\(\)

    Description: Completes online backup \(restricted to system administrators or replication roles\).

    Return type: text

    Note:  **pg\_stop\_backup**  deletes the label file created by  **pg\_start\_backup**  and creates a backup history file in the transaction log archive area. The history file includes the label given to  **pg\_start\_backup**, the starting and ending transaction log locations for the backup, and the starting and ending times of the backup. The return value is the backup's ending transaction log location. After the ending position is calculated, the insert position of the current transaction log automatically goes ahead to the next transaction log file. This way, the ended transaction log file can be immediately archived so that backup is complete.

-   pg\_switch\_xlog\(\)

    Description: Switches to a new transaction log file \(restricted to system administrators\).

    Return type: text

    Note:  **pg\_switch\_xlog**  moves to the next transaction log file so that the current log file can be archived \(if continuous archive is used\). The return value is the ending transaction log location + 1 within the just-completed transaction log file. If there has been no transaction log activity since the last transaction log switchover,  **pg\_switch\_xlog**  will do nothing but return the start location of the transaction log file currently in use.

-   pg\_xlogfile\_name\(location text\)

    Description: Converts the position string in a transaction log to a file name.

    Return type: text

    Note:  **pg\_xlogfile\_name**  extracts only the transaction log file name. If the given transaction log position is the transaction log file border, a transaction log file name will be returned for both the two functions. This is usually the desired behavior for managing transaction log archiving, since the preceding file is the last one that currently needs to be archived.

-   pg\_xlogfile\_name\_offset\(location text\)

    Description: Converts the position string in a transaction log to a file name and returns the byte offset in the file.

    Return type: text, integer

    Note:  **pg\_xlogfile\_name\_offset**  can extract transaction log file names and byte offsets from the returned results of the preceding functions. Example:

    ```
    postgres=# SELECT * FROM pg_xlogfile_name_offset(pg_stop_backup());
    NOTICE:  pg_stop_backup cleanup done, waiting for required WAL segments to be archived
    NOTICE:  pg_stop_backup complete, all required WAL segments have been archived
            file_name         | file_offset 
    --------------------------+-------------
    000000010000000000000003  |         272
    (1 row)
    ```

-   pg\_xlog\_location\_diff\(location text, location text\)

    Description:  **pg\_xlog\_location\_diff**  calculates the difference in bytes between two transaction log locations.

    Return type: numeric

-   pg\_cbm\_tracked\_location\(\)

    Description: Queries for the LSN location parsed by CBM.

    Return type: text

-   pg\_cbm\_get\_merged\_file\(startLSNArg text, endLSNArg text\)

    Description: Combines CBM files within the specified LSN range into one and returns the name of the combined file.

    Return type: text

-   pg\_cbm\_get\_changed\_block\(startLSNArg text, endLSNArg text\)

    Description: Combines CBM files within the specified LSN range into a table and return records of this table.

    Return type: record

    Note: The table columns include the start LSN, end LSN, tablespace OID, database OID, table relfilenode, table fork number, whether the table is deleted, whether the table is created, whether the table is truncated, number of pages in the truncated table, number of modified pages, and list of No. of modified pages.

-   pg\_cbm\_recycle\_file\(targetLSNArg text\)

    Description: Deletes the CBM files that are no longer used and returns the first LSN after the deletion.

    Return type: text

-   pg\_cbm\_force\_track\(targetLSNArg text,timeOut int\)

    Description: Forcibly executes the CBM trace to the specified Xlog position and returns the Xlog position of the actual trace end point.

    Return type: text

-   pg\_enable\_delay\_ddl\_recycle\(is\_full\_backup boolean, backup\_key  text\)

    Description: Enables DDL delay and returns the Xlog position of the enabling point.

    Return type: text

-   pg\_disable\_delay\_ddl\_recycle\(barrierLSNArg text, isForce bool, is\_full\_backup boolean, backup\_key  text\)

    Description: Disables DDL delay and returns the Xlog range where DDL delay takes effect.

    Return type: record

-   pg\_enable\_delay\_xlog\_recycle\(\)

    Description: Enables Xlog recycle delay. This function is used in primary database node restoration.

    Return type: void

-   pg\_disable\_delay\_xlog\_recycle\(\)

    Description: Disables Xlog recycle delay. This function is used in primary database node restoration.

    Return type: void


## Restoration Control Functions<a name="en-us_topic_0237121992_en-us_topic_0059778344_sc7012e6115754c129c650cb2a0f899c9"></a>

Restoration control functions provide information about the status of standby nodes. These functions may be executed both during restoration and in normal running.

-   pg\_is\_in\_recovery\(\)

    Description: Returns  **true**  if restoration is still in progress.

    Return type: bool

-   pg\_last\_xlog\_receive\_location\(\)

    Description: Gets the last transaction log location received and synchronized to disk by streaming replication. While streaming replication is in progress, this will increase monotonically. If restoration has completed, this value will remain static at the value of the last WAL record received and synchronized to disk during restoration. If streaming replication is disabled or if it has not yet started, the function returns  **NULL**.

    Return type: text

-   pg\_last\_xlog\_replay\_location\(\)

    Description: Gets last transaction log location replayed during restoration. If restoration is still in progress, this will increase monotonically. If restoration has completed, then this value will remain static at the value of the last WAL record received during that restoration. When the server has been started normally without restoration, the function returns  **NULL**.

    Return type: text

-   pg\_last\_xact\_replay\_timestamp\(\)

    Description: Gets the timestamp of last transaction replayed during restoration. This is the time to commit a transaction or abort a WAL record on the primary node. If no transactions have been replayed during restoration, this function will return  **NULL**. If restoration is still in progress, this will increase monotonically. If restoration has completed, then this value will remain static at the value of the last WAL record received during that restoration. If the server normally starts without manual intervention, this function will return  **NULL**.

    Return type: timestamp with time zone


Restoration control functions control restoration processes. These functions may be executed only during restoration.

-   pg\_is\_xlog\_replay\_paused\(\)

    Description: Returns  **true**  if restoration is paused.

    Return type: bool

-   pg\_xlog\_replay\_pause\(\)

    Description: Pauses restoration immediately.

    Return type: void

-   pg\_xlog\_replay\_resume\(\)

    Description: Restarts restoration if it was paused.

    Return type: void


While restoration is paused, no further database changes are applied. In hot standby mode, all new queries will see the same consistent snapshot of the database, and no further query conflicts will be generated until restoration is resumed.

If streaming replication is disabled, the paused state may continue indefinitely without problem. While streaming replication is in progress, WAL records will continue to be received, which will eventually fill available disk space. This progress depends on the duration of the pause, the rate of WAL generation, and available disk space.

