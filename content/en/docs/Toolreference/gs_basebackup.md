# gs\_basebackup<a name="EN-US_TOPIC_0249632270"></a>

## Background<a name="en-us_topic_0237152406_en-us_topic_0059777806_section48401199395"></a>

After openGauss is deployed, problems and exceptions may occur during database running.  **gs\_basebackup**, provided by openGauss, is used to perform basic physical backup.  **gs\_basebackup**  copies the binary files of the database on the server using a replication protocol. To remotely execute  **gs\_basebackup**, you need to use the system administrator account.  **gs\_basebackup**  supports only hot backup and does not support compressed backup.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   **gs\_basebackup**  supports only full backup.  
>-   **gs\_basebackup**  supports only hot backup and does not support compressed backup.  
>-   **gs\_basebackup**  cannot back up tablespaces containing absolute paths on the same server. This is because the absolute path is unique on the same machine, and brings about conflicts. However, it can back up tablespaces containing absolute paths on different machines.  
>-   If the functions of incremental checkpoint and dual-write are enabled,  **gs\_basebackup**  also backs up dual-write files.  
>-   If the  **pg\_xlog**  directory is a soft link, no soft link is created during backup. Data is directly backed up to the  **pg\_xlog**  directory in the destination path.  

## Prerequisites<a name="en-us_topic_0237152406_en-us_topic_0059777806_s9649938409774ccdbc6993a90ccb777a"></a>

-   The openGauss database can be connected. Link replication is enabled in  **pg\_hba.conf**, and at least one  **max\_wal\_senders**  is configured and available.
-   During the restoration, backup files exist in the backup directory on all the nodes. If backup files are lost on any node, copy them to it from another node.

## Syntax<a name="en-us_topic_0237152406_en-us_topic_0059777806_sa0c0a7aa3d4042fd81017d22ca1e8cac"></a>

-   Display help information.

    ```
    gs_basebackup -? | --help
    ```

-   Display version information.

    ```
    gs_basebackup -V | --version
    ```


## Parameter Description<a name="en-us_topic_0237152406_en-us_topic_0059777806_s2fa71feeaad041f293de868e52bb5907"></a>

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



## Example<a name="en-us_topic_0237152406_en-us_topic_0059777806_sdebe53579dba4bb8a7dad8e21dbcb342"></a>

```
gs_basebackup -D /home/test/trunk/install/data/backup -h 127.0.0.1 -p 21233
INFO:  The starting position of the xlog copy of the full build is: 0/1B800000. The slot minimum LSN is: 0/1B800000.
```

## Restoring Data from Backup Files<a name="section161121221193110"></a>

If a database is faulty, restore it from backup files.  **gs\_basebackup**  backs up the database in binary mode. Therefore, you can directly copy and replace the original files or start the database on the backup database.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   If the current database instance is running, a port conflict may occur when you start the database from the backup file. In this case, you need to modify the port parameter in the configuration file or specify a port when starting the database.  
>-   If the current backup file is a primary/standby database, you may need to modify the replication connections between the master and slave databases. That is,  **replconninfo1**  and  **replconninfo2**  in the  **postgre.conf**  file.  

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

