# gs\_basebackup<a name="EN-US_TOPIC_0000001225106959"></a>

## Background<a name="en-us_topic_0289899235_en-us_topic_0287275996_en-us_topic_0237152406_en-us_topic_0059777806_section48401199395"></a>

After openGauss is deployed, problems and exceptions may occur during database running.  **gs\_basebackup**, provided by openGauss, is used to perform basic physical backup.  **gs\_basebackup**  copies the binary files of the database on the server using a replication protocol. To remotely execute  **gs\_basebackup**, you need to use the system administrator account.  **gs\_basebackup**  supports hot backup and compressed backup.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   **gs\_basebackup**  supports only full backup of the primary and standby nodes.
>-   **gs\_basebackup**  supports hot backup and compressed backup.
>-   If you use gs\_basebackup to back up a tablespace that contains an absolute path on the same server, you can use tablespace-mapping to redirect the tablespace path or use the archive mode to back up the tablespace.
>-   If the functions of incremental checkpoint and dual-write are enabled,  **gs\_basebackup**  also backs up dual-write files.
>-   If the  **pg\_xlog**  directory is a soft link, no soft link is created during backup. Data is directly backed up to the  **pg\_xlog**  directory in the destination path.
>-   If the backup permission is revoked during the backup, the backup may fail or the backup data may be unavailable.
>-   If the server does not respond due to a temporary network fault,  **gs\_basebackup **will exit after waiting for a maximum of 120 seconds.

## Prerequisites<a name="en-us_topic_0289899235_en-us_topic_0287275996_en-us_topic_0237152406_en-us_topic_0059777806_s9649938409774ccdbc6993a90ccb777a"></a>

-   The openGauss database can be connected.

-   User permissions are not revoked during the backup.

-   In the  **pg\_hba.conf**  file, the replication connection is allowed and the connection is established by a system administrator.

-   If the Xlog transmission mode is  **stream**, the number of  **max\_wal\_senders**  must be configured to at least one.

-   If the Xlog transmission mode is  **fetch**, the  **wal\_keep\_segments**  parameter must be set to a large value so that logs are not removed before the backup ends.

-   During the restoration, backup files exist in the backup directory on all the nodes. If backup files are lost on any node, copy them to it from another node.


## Syntax<a name="en-us_topic_0289899235_en-us_topic_0287275996_en-us_topic_0237152406_en-us_topic_0059777806_sa0c0a7aa3d4042fd81017d22ca1e8cac"></a>

-   Display help information.

    ```
    gs_basebackup -? | --help
    ```

-   Display version information.

    ```
    gs_basebackup -V | --version
    ```


## Parameter Description<a name="en-us_topic_0289899235_en-us_topic_0287275996_en-us_topic_0237152406_en-us_topic_0059777806_s2fa71feeaad041f293de868e52bb5907"></a>

The  **gs\_basebackup**  tool can use the following types of parameters:

-   -D directory

    Directory for storing backup files. This parameter is mandatory.


-   Common parameters
    -   -c, --checkpoint=fast|spread

        Sets the checkpoint mode to  **fast**  or  **spread**  \(default\).

    -   -l, --label=LABEL

        Adds tags for the backup.

    -   -P, --progress

        Enables the progress report.

    -   -v, --verbose

        Enables the verbose mode.

    -   -V, --version

        Prints the version and exits.

    -   -?, --help

        Displays  **gs\_basebackup**  command parameters.

    -   -T, –tablespace-mapping=olddir=newdir

        During the backup, the tablespace in the  **olddir**  directory is relocated to the  **newdir**  directory. For this to take effect,  **olddir**  must exactly match the path where the tablespace is located \(but it is not an error if the backup does not contain the tablespaces in  **olddir**\).  **olddir**  and  **newdir**  must be absolute paths. If a path happens to contain an equal sign \(=\), you can escape it with a backslash \(\\\). This option can be used multiple times for multiple tablespaces.

    -   -F, –format=plain|tar

        Sets the output format to  **plain**  \(default\) or  **tar**. If this parameter is not set, the default value  **–format=plain**  is used. The plain format writes the output as a flat file, using the same layout as the current data directory and tablespace. When the cluster has no extra tablespace, the entire database is placed in the target directory. If the cluster contains additional tablespaces, the primary data directory will be placed in the target directory, but all other tablespaces will be placed in the same absolute path on the server. The tar mode writes the output as a tar file in the target directory. The primary data directory is written to a file named  **base.tar**, and other tablespaces are named after their OIDs. The generated .tar package must be decompressed using the  **gs\_tar**  command.

    -   -X, –xlog-method=fetch|stream

        Sets the Xlog transmission mode. If this parameter is not set, the default value  **–xlog-method=stream**  is used. The required write-ahead log files \(WALs\) are included in the backup. This includes all WALs generated during the backup. In fetch mode, WAL files are collected at the end of the backup. Therefore, the  **wal\_keep\_segments**  parameter must be set to a large value so that logs are not removed before the backup ends. If it has been rotated when the log is to be transmitted, the backup fails and is unavailable. In stream mode, WALs are streamed when a backup is created. This will open a second connection to the server and start streaming WALs while the backup is running. Therefore, it will use up to two connections configured by the  **max\_wal\_senders**  parameter. As long as the client can receive WALs, no additional WALs need to be stored on the host.

    -   -x, –xlog

        Equivalent to using  **-X**  with the fetch method.

    -   -Z –compress=level

        Enables gzip compression for the output of the tar file and sets the compression level \(0 to 9, where 0 indicates no compression and 9 indicates the best compression\). The compression is available only when the tar format is used. The suffix .gz is automatically added to the end of all .tar file names.

    -   -z

        Enables gzip compression for tar file output and uses the default compression level. The compression is available only when the tar format is used. The suffix .gz is automatically added to the end of all .tar file names.

    -   -t, –rw-timeout

        Sets the checkpoint time limit during backup. The default value is 120s. If the full checkpoint of the database is time-consuming, you can increase the value of  **rw-timeout**.


-   Connection parameters
    -   -h, --host=HOSTNAME

        Specifies the host name of the machine on which the server is running or the directory for the Unix-domain socket.

    -   -p, --port=PORT

        Specifies the port number of the database server.

        You can modify the default port number using this parameter.

    -   -U, --username=USERNAME

        Specifies the user that connects to the database.

    -   -s, --status-interval=INTERVAL

        Specifies the time for sending status packets to the server, in seconds.

    -   -w,--no-password

        Never issues a password prompt.

    -   -W, --password

        Issues a password prompt when the  **-U**  parameter is used to connect to a local or remote database.



## Example<a name="en-us_topic_0289899235_en-us_topic_0287275996_en-us_topic_0237152406_en-us_topic_0059777806_sdebe53579dba4bb8a7dad8e21dbcb342"></a>

```
gs_basebackup -D /home/test/trunk/install/data/backup -h 127.0.0.1 -p 21233
INFO:  The starting position of the xlog copy of the full build is: 0/1B800000. The slot minimum LSN is: 0/1B800000.
```

## Restoring Data from Backup Files<a name="en-us_topic_0289899235_en-us_topic_0287275996_section161121221193110"></a>

If a database is faulty, restore it from backup files.  **gs\_basebackup**  backs up the database in binary mode. Therefore, you can directly copy and replace the original files or start the database on the backup database.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   If the current database instance is running, a port conflict may occur when you start the database from the backup file. In this case, you need to modify the port parameter in the configuration file or specify a port when starting the database.
>-   If the current backup file is a primary/standby database, you may need to modify the replication connections between the primary and standby databases, such as  **replconninfo1**  and  **replconninfo2**  in the  **postgre.conf**  file.
>-   If the  **data\_directory**  parameter in the  **postgresql.conf**  configuration file is enabled and configured and the backup directory is used to start the database, the database fails to be started because the value of  **data\_directory**  is different from the backup directory. You can change the value of  **data\_directory**  to a new data directory or comment out this parameter.

To restore the original database, perform the following steps:

1.  Stop the database server. For details, see  _Administrator Guide_.
2.  Copy the original database and all tablespaces to another location for future use.
3.  Delete all or part of the files from the original database.
4.  Use the database system user rights to restore the required database files from the backup.
5.  If a link file exists in the database, modify the link file so that it can be linked to the correct file.
6.  Restart the database server and check the database content to ensure that the database is restored to the required status.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   Incremental restoration from backup files is not supported.
>-   After the restoration, check that the link file in the database is linked to the correct file.

