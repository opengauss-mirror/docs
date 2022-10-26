# gs\_probackup<a name="EN-US_TOPIC_0000001152685968"></a>

## Background<a name="en-us_topic_0289899221_en-us_topic_0287276008_section779474172017"></a>

**gs\_probackup**  is a tool used to manage openGauss database backup and restoration. It periodically backs up the openGauss instances so that the server can be restored when the database is faulty.

-   It supports the physical backup of a standalone database, a primary node, or a standby node of the primary node database.
-   It supports the backup of contents in external directories, such as script files, configuration files, log files, and dump files.
-   It supports incremental backup, periodic backup, and remote backup.
-   It supports settings on the backup retention policy.

## Prerequisites<a name="en-us_topic_0289899221_en-us_topic_0287276008_section95951827112520"></a>

-   The openGauss database can be connected.
-   To use PTRACK incremental backup, manually add  **enable\_cbm\_tracking = on**  to  **postgresql.conf**.
-   To prevent Xlogs from being cleared before the transmission is complete, increase the value of  **wal\_keep\_segments**  in the  **postgresql.conf**  file.

## Important Notes<a name="en-us_topic_0289899221_en-us_topic_0287276008_section6439171332614"></a>

-   The backup must be performed by the user who runs the database server.
-   The major version number of the database server to be backed up must be the same as that of the database server to be restored.
-   To back up a database in remote mode using SSH, install the database of the same major version on the local and remote hosts, and run the  **ssh-copy-id remote\_user@remote\_host**  command to set an SSH connection without a password between the local host backup user and the remote host database user.
-   In remote mode, only the subcommands  **add-instance**,  **backup**, and  **restore**  can be executed.
-   Before running the  **restore**  subcommand, stop the gaussdb process.
-   If a user-defined tablespace exists, add the  **--external-dirs**  parameter when backing up the tablespace. Otherwise, the tablespace will not be backed up.
-   If a large amount of data needs to be backed up, adjust the values of  **session\_timeout**  and  **wal\_sender\_timeout**  in the  **postgresql.conf**  file to prevent backup timeout. In addition, adjust the value of  **--rw-timeout**  in the backup command line parameters.
-   When using the  **-T**  option to redirect the external directory in the backup to a new directory during restoration, specify the  **--external-mapping**  parameter.
-   After an incremental backup is restored, the created logical replication slot is unavailable and needs to be deleted and recreated.
-   When remote backup is used, ensure that the clock of the remote server is synchronized with that of the backup server. Otherwise,  **gaussdb**  may fail to be started when  **--recovery-target-time**  is used for restoration.
-   When remote backup is valid \(**remote-proto=ssh**\), ensure that  **-h**  and  **--remote-host **specify the same server. When remote backup is invalid, if the  **-h**  option is specified, ensure that  **-h**  specifies the local address or local host name.
-   Currently, logical replication slots cannot be backed up.

## Command Description<a name="en-us_topic_0289899221_en-us_topic_0287276008_section86861610172816"></a>

-   Print the  **gs\_probackup**  version.

    ```
    gs_probackup -V|--version
    gs_probackup version
    ```

-   Display brief information about the  **gs\_probackup**  command. Alternatively, display details about parameters of a specified subcommand of  **gs\_probackup**.

    ```
    gs_probackup -?|--help
    gs_probackup help [command]
    ```

-   Initialize the backup directory in  **backup-path**. The backup directory stores the contents that have been backed up. If the  **backup-path**  backup path exists, it must be empty.

    ```
    gs_probackup init -B backup-path [--help]
    ```

-   Initialize a new backup instance in the backup directory of  **backup-path**  and generate the  **pg\_probackup.conf**  configuration file, which saves the  **gs\_probackup **settings of the specified data directory  **pgdata-path**.

    ```
    gs_probackup add-instance -B backup-path -D pgdata-path --instance=instance_name
    [-E external-directories-paths]
    [remote_options]
    [--help]
    ```

-   Delete the backup content related to the specified instance from the  **backup-path**  directory.

    ```
    gs_probackup del-instance -B backup-path --instance=instance_name
    [--help]
    ```

-   Add the specified connection, compression, and log-related settings to the  **pg\_probackup.conf**  configuration file or modify the existing settings. You are not advised to manually edit the  **pg\_probackup.conf**  configuration file.

    ```
    gs_probackup set-config -B backup-path --instance=instance_name
    [-D pgdata-path] [-E external-directories-paths] [--archive-timeout=timeout]
    [--retention-redundancy=retention-redundancy] [--retention-window=retention-window] [--wal-depth=wal-depth]
    [--compress-algorithm=compress-algorithm] [--compress-level=compress-level]
    [-d dbname] [-h hostname] [-p port] [-U username]
    [logging_options] [remote_options]
    [--help]
    ```

-   Add the backup-related settings to the  **backup.control**  configuration file or modify the settings.

    ```
    gs_probackup set-backup -B backup-path --instance=instance_name -i backup-id
    [--note=text] [pinning_options]
    [--help]
    ```

-   Display the content of the  **pg\_probackup.conf**  configuration file in the backup directory. You can specify  **--format=json**  to display the information in JSON format. By default, the plain text format is used.

    ```
    gs_probackup show-config -B backup-path --instance=instance_name
    [--format=plain|json]
    [--help]
    ```

-   Display the contents of the backup directory. If  **instance\_name**  and  **backup\_id**  are specified, detailed information about the backup is displayed. You can specify  **--format=json**  to display the information in JSON format. By default, the plain text format is used.

    ```
    gs_probackup show -B backup-path
    [--instance=instance_name [-i backup-id]] [--archive] [--format=plain|json]
    [--help]
    ```

-   Create a backup for a specified database instance.

    ```
    gs_probackup backup -B backup-path --instance=instance_name -b backup-mode
    [-D pgdata-path] [-C] [-S slot-name] [--temp-slot] [--backup-pg-log] [-j threads_num] [--progress]
    [--no-validate] [--skip-block-validation] [-E external-directories-paths] [--no-sync] [--note=text]
    [--archive-timeout=timeout] [-t rwtimeout]
    [logging_options] [retention_options] [compression_options]
    [connection_options] [remote_options] [pinning_options]
    [--help]
    ```

-   Restore a specified instance from the backup copy in the  **backup-path**  directory. If an instance to be restored is specified,  **gs\_probackup**  will look for its latest backup and restore it to the specified recovery objective. Otherwise, the latest backup of any instance is used.

    ```
    gs_probackup restore -B backup-path --instance=instance_name
    [-D pgdata-path] [-i backup_id] [-j threads_num] [--progress] [--force] [--no-sync] [--no-validate] [--skip-block-validation]
    [--external-mapping=OLDDIR=NEWDIR] [-T OLDDIR=NEWDIR] [--skip-external-dirs] [-I incremental_mode]
    [recovery_options] [remote_options] [logging_options]
    [--help]
    ```

-   Merge all incremental backups between the specified incremental backup and its parent full backup into the parent full backup. The parent full backup will receive all merged data, while the merged incremental backup will be deleted as redundancy.

    ```
    gs_probackup merge -B backup-path --instance=instance_name -i backup_id
    [-j threads_num] [--progress] [logging_options]
    [--help]
    ```

-   Delete a specified backup or delete backups that do not meet the current retention policy.

    ```
    gs_probackup delete -B backup-path --instance=instance_name
    [-i backup-id | --delete-expired | --merge-expired | --status=backup_status]
    [--delete-wal] [-j threads_num] [--progress]
    [--retention-redundancy=retention-redundancy] [--retention-window=retention-window]
    [--wal-depth=wal-depth] [--dry-run]
    [logging_options]
    [--help]
    ```

-   Verify that all files required for restoring the database exist and are not damaged. If  **instance\_name **is not specified,  **gs\_probackup **verifies all available backups in the backup directory. If  **instance\_name **is specified and no additional options are specified,  **gs\_probackup **verifies all available backups for this backup instance. If both  **instance\_name **and  **backup-id **or recovery objective-related options are specified,  **gs\_probackup **checks whether these options can be used to restore the database.

    ```
    gs_probackup validate -B backup-path
    [--instance=instance_name] [-i backup-id]
    [-j threads_num] [--progress] [--skip-block-validation]
    [--recovery-target-time=time | --recovery-target-xid=xid | --recovery-target-lsn=lsn | --recovery-target-name=target-name]
    [--recovery-target-inclusive=boolean]
    [logging_options]
    [--help] 
    ```


## Parameter Description<a name="en-us_topic_0289899221_en-us_topic_0287276008_section520716591338"></a>

**Common parameters**

-   command

    Specifies subcommands except  **version**  and  **help**:  **init**,  **add-instance**,  **del-instance**,  **set-config**,  **set-backup**,  **show-config**,  **show**,  **backup**,  **restore**,  **merge**,  **delete**, and  **validate**.

-   -?, --help

    Displays help information about the command line parameters of  **gs\_probackup**  and exits.

    Only  **--help**  can be used in subcommands;  **-?**  is forbidden.

-   -V, --version

    Prints the  **gs\_probackup**  version and exits.

-   -B  _backup-path_, --backup-path=_backup-path_

    Backup path.

    System environment variable:  _$BACKUP\_PATH_

-   -D  _pgdata-path_, --pgdata=_pgdata-path_

    Path of the data directory.

    System environment variable:  _$PGDATA_

-   --instance=_instance\_name_

    Instance name.

-   -i  _backup-id_, --backup-id=_backup-id_

    Unique identifier of a backup.

-   --format=_format_

    Specifies format of the backup information to be displayed. The plain and JSON formats are supported.

    Default value:  **plain**

-   --status=_backup\_status_

    Deletes all backups in a specified state. The states are as follows:

    -   **OK**: Backup is complete and valid.
    -   **DONE**: Backup has been completed but not verified.
    -   **RUNNING**: Backup is in progress.
    -   **MERGING**: Backups are being merged.
    -   **DELETING**: Backup is being deleted.
    -   **CORRUPT**: Some backup files are damaged.
    -   **ERROR**: Backup fails due to an unexpected error.
    -   **ORPHAN**: Backup is invalid because one of its parent backups is corrupted or lost.

-   -j  _threads\_num_, --threads=_threads\_num_

    Sets the number of concurrent threads for the backup, restoration, and combination processes.

-   --archive

    Displays WAL archiving information.

-   --progress

    Displays progress.

-   --note=_text_

    Adds a note to the backup.


**Backup-related parameters**

-   -b  _backup-mode_, --backup-mode=_backup-mode_

    Specifies the backup mode. The value can be  **FULL**  or  **PTRACK**.

    **FULL**: creates a full backup. The full backup contains all data files.

    **PTRACK**: creates a PTRACK incremental backup.

-   -C, --smooth-checkpoint

    Expands checkpoints within a period of time. By default,  **gs\_probackup**  attempts to complete checkpoints as soon as possible.

-   -S  _slot-name_, --slot=_slot-name_

    Specifies the replication slot for WAL stream processing.

-   --temp-slot

    Creates a temporary physical replication slot for WAL stream processing in the backup instance to ensure that all required WAL segments are still available during the backup.

    The default slot name is  **pg\_probackup\_slot**, which can be changed using the  **--slot/-S**  option.

-   --backup-pg-log

    Includes the log directory in the backup. This directory typically contains log messages. By default, the log directory is included, but the log file is not included. If the default log path is changed, you can use the  **-E**  parameter to back up log files. The following describes how to use the  **-E**  parameter.

-   -E  _external-directories-paths_, --external-dirs=_external-directories-paths_

    Includes the specified directory in the backup. This option is useful for backing up scripts in external data directories, sql dumps, and configuration files. To back up multiple external directories, use colons \(:\) to separate their paths in Unix.

    Example: -E /tmp/dir1:/tmp/dir2

-   --skip-block-validation

    Disables block-level verification to speed up backup.

-   --no-validate

    Skips the automatic verification when the backup is complete.

-   --no-sync

    Disables backup file synchronization to the disk.

-   --archive-timeout=_timeout_

    Specifies timeout interval for streaming processing, in seconds.

    Default value:  **300**

-   -t rwtimeout

    Specifies timeout interval for a connection, in seconds.

    Default value:  **120**


**Restoration-related parameters**

-   -I, --incremental-mode=none|checksum|lsn

    Reuses the valid pages available in PGDATA if they are not modified.

    Default value:  **none**

-   --external-mapping=_OLDDIR=NEWDIR_

    During restoration, the external directory contained in the backup is moved from  **OLDDIR **to  **NEWDIR**.  **OLDDIR**  and  **NEWDIR**  must be absolute paths. If the path contains an equal sign \(=\), use a backslash \(\\\) to escape. This option can be specified for multiple directories.

-   -T  _OLDDIR=NEWDIR_, --tablespace-mapping=_OLDDIR=NEWDIR_

    Relocates the tablespace from the  **OLDDIR**  directory to the  **NEWDIR**  directory during the restoration.  **OLDDIR**  and  **NEWDIR**  must be absolute paths. If the path contains an equal sign \(=\), use a backslash \(\\\) to escape. This parameter can be specified multiple times for multiple tablespaces. This parameter must be used together with  **--external-mapping**.

-   --skip-external-dirs

    Skips the external directories in the backup that are specified using the  **--external-dirs**  option. The contents of these directories will not be restored.

-   --skip-block-validation

    Skips block-level verification to speed up verification. During the automatic verification before the restoration, only file-level verification is performed.

-   --no-validate

    Skips the backup verification.

-   --force

    Specifies the invalid state that allows ignoring backup. This flag can be used if data needs to be restored from a damaged or invalid backup. Exercise caution when using it.


**Recovery objective-related parameters \(recovery\_options\)**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>Currently, continuous WAL archiving PITR cannot be configured. Therefore, parameter usage is restricted as follows:
>To use continuously archived WAL logs for PITR, perform the following steps:
>1.  Replace the target database directory with the physical backup files.
>2.  Delete all files in the database directory  **pg\_xlog/**.
>3.  Copy the archived WAL log file to the  **pg\_xlog**  file. \(Or you can configure  **restore\_command**  in the  **recovery.conf**  file to skip this step.\)
>4.  Create the  **recovery.conf**  file in the database directory and specify the database restoration degree.
>5.  Start the database.
>6.  Connect to the database and check whether the database is recovered to the expected status. If the expected status is reached, run the  **pg\_xlog\_replay\_resume\(\)**  command so that the primary node can provide services externally.

-   --recovery-target-lsn=_lsn_

    Specifies LSN to be restored. Currently, only the backup stop LSN can be specified.

-   --recovery-target-name=_target-name_

    Specifies named savepoint to which data is restored. You can obtain the savepoint by viewing the recovery-name column in the backup.

-   --recovery-target-time=_time_

    Specifies time to which data is restored. Currently, only recovery-time can be specified.

-   --recovery-target-xid=_xid_

    Specifies transaction ID to which data is restored. Currently, only recovery-xid can be specified.

-   --recovery-target-inclusive=_boolean_

    When this parameter is set to  **true**, the recovery objective will include the specified content.

    When this parameter is set to  **false**, the recovery objective will not include the specified content.

    This parameter must be used together with  **--recovery-target-name**,  **--recovery-target-time**,  **--recovery-target-lsn**, or  **--recovery-target-xid**.


**Retention-related parameters \(retention\_options\)**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The following parameters can be used together with the  **backup**  and  **delete**  commands.

-   --retention-redundancy=_retention-redundancy_

    Number of full backups retained in the data directory. The value must be a positive integer. The value  **0**  indicates that the setting is disabled.

    Default value:  **0**

-   --retention-window=_retention-window_

    Specifies the retention period. The value must be a positive integer. The value  **0**  indicates that the setting is disabled.

    Default value:  **0**

-   --wal-depth=_wal-depth_

    Latest number of valid backups that must be retained on each timeline to perform the PITR capability. The value must be a positive integer. The value  **0**  indicates that the setting is disabled.

    Default value:  **0**

-   --delete-wal

    Deletes unnecessary WAL files from any existing backup.

-   --delete-expired

    Deletes the backups that do not comply with the retention policy defined in the  **pg\_probackup.conf**  configuration file.

-   --merge-expired

    Merges the oldest incremental backup that meets the retention policy requirements with its expired parent backup.

-   --dry-run

    Displays the status of all available backups. Expired backups will not be deleted or merged.


**Fixed backup-related parameters \(pinning\_options\)**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>To exclude certain backups from the established retention policy, you can use the following parameters with the  **backup**  and  **set-backup**  commands.

-   --ttl=_interval_

    Specifies a fixed amount of time to back up data from the restoration time. The value must be a positive integer. The value  **0**  indicates that the backup is canceled.

    Supported unit: ms, s, min, h, d \(default value:  **s**\)

    For example,  **--ttl=30d**.

-   --expire-time=_time_

    Specifies the timestamp when the backup is invalid. The time stamp must comply with the ISO-8601 standard.

    For example,  **--expire-time='2020-01-01 00:00:00+03'**.


**Log-related parameters \(logging\_options\)**

Log levels:  **verbose**,  **log**,  **info**,  **warning**,  **error**, and  **off**.

-   --log-level-console=_log-level-console_

    Sets the level of logs to be sent to the console. Each level contains all the levels following it. A higher level indicates fewer messages sent. If this parameter is set to  **off**, the log recording function of the console is disabled.

    Default value:  **info**

-   --log-level-file=_log-level-file_

    Sets the level of logs to be sent to the log file. Each level contains all the levels following it. A higher level indicates fewer messages sent. If this parameter is set to  **off**, the log file recording function is disabled.

    Default value:  **off**

-   --log-filename=_log-filename_

    Specifies the name of the log file to be created. The file name can use the strftime mode. Therefore,  **%-escapes**  can be used to specify the file name that changes with time.

    For example, if the  **pg\_probackup-%u.log**  mode is specified, pg\_probackup generates a log file each day of the week, with  **%u**  replaced by the corresponding decimal number, that is,  **pg\_probackup-1.log**  indicates Monday.  **pg\_probackup-2.log**  indicates Tuesday, and so on.

    This parameter is valid if the  **--log-level-file**  parameter is specified to enable log file recording.

    Default value:  **pg\_probackup.log**

-   --error-log-filename=_error-log-filename_

    Specifies the name of the log file that is used only for error logs. The specifying method is the same as that of the  **--log-filename**  parameter.

    It is used for troubleshooting and monitoring.

-   --log-directory=_log-directory_

    Specifies the directory where log files are created. The value must be an absolute path. This directory is created when the first log is written.

    Default value:  **$BACKUP\_PATH/log**

-   --log-rotation-size=_log-rotation-size_

    Specifies the maximum size of a log file. If the maximum size is reached, the log file will be circulated after the  **gs\_probackup**  command is executed. The  **help**  and  **version**  commands will not lead to a log file circulation. The value  **0**  indicates that the file size-based loop is disabled.

    The unit can be KB, MB, GB, or TB. The default unit is  **KB**.

    Default value:  **0**

-   --log-rotation-age=_log-rotation-age_

    Maximum life cycle of a log file. If the maximum size is reached, the log file will be circulated after the  **gs\_probackup**  command is executed. The  **help**  and  **version**  commands will not lead to a log file circulation. The  **$BACKUP\_PATH/log/log\_rotation**  directory saves the time of the last created log file. The value  **0**  indicates that the time-based loop is disabled.

    Supported unit: ms, s, min, h, d \(default value:  **min**\)

    Default value:  **0**


**Connection-related parameters \(connection\_options\)**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The following parameters can be used together with the  **backup**  command.

-   -d  _dbname_, --pgdatabase=_dbname_

    Specifies the name of the database to connect to. This connection is only used to manage the backup process. Therefore, you can connect to any existing database. If this parameter is not specified in the command line, the  _PGDATABASE_  environment variable, or the  **pg\_probackup.conf**  configuration file,  **gs\_probackup**  attempts to obtain the value from the  _PGUSER_  environment variable. If the  _PGUSER_  variable is not set, the value is obtained from the current user name.

    System environment variable:  _$PGDATABASE_

-   -h  _hostname_, --pghost=_hostname_

    Specifies the host name of the system on which the server is running. If the value begins with a slash \(/\), it is used as the directory for the UNIX domain socket.

    System environment variable:  _$PGHOST_

    Default value:  **local socket**

-   -p  _port_, --pgport=_p__ort_

    Specifies the TCP port or local Unix domain socket file name extension on which the server is listening for connections.

    System environment variable:  _$PGPORT_

    Default value:  **5432**

-   -U  _username_, --pguser=_username_

    Specifies the username of the host to be connected.

    System environment variable:  _$PGUSER_

-   -w, --no-password

    Never issues a password prompt. The connection attempt fails if the host requires password verification and the password is not provided in other ways. This option is useful in batch jobs and scripts in which no user password is required.

-   -W  _password_, --password=_password_

    Specifies the user password for connection. If the host uses the trust authentication policy, the administrator does not need to enter the  **-W**  option. If the  **-W**  option is not provided and you are not a system administrator, the system will ask you to enter a password.


**Compression-related parameters \(compression\_options\)**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The following parameters can be used together with the  **backup**  command.

-   --compress-algorithm=_compress-algorithm_

    Specifies the algorithm used to compress data file.

    The value can be  **zlib**,  **pglz**, or  **none**. If  **zlib**  or  **pglz**  is set, compression is enabled. By default, the compression function is disabled.

    Default value:  **none**

-   --compress-level=_compress-level_

    Specifies the compression level. Value range: 0–9

    -   **0**  indicates no compression.
    -   **1**  indicates that the compression ratio is the lowest and processing speed the fastest.
    -   **9**  indicates that the compression ratio is the highest and processing speed the slowest.
    -   This parameter can be used together with  **--compress-algorithm**.

    Default value:  **1**

-   --compress

    Compresses with  **--compress-algorithm=zlib**  and  **--compress-level=1**.


**Remote mode-related parameters \(remote\_options\)**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The following are parameters that remotely run  **gs\_probackup**  through SSH, and can be used together with the  **add-instance**,  **set-config**,  **backup**, and  **restore**  commands.

-   --remote-proto=_protocol_

    Specifies the protocol used for remote operations. Currently, only the SSH protocol is supported. Valid value:

    **ssh**: enables the remote backup mode through SSH. This is the default.

    **none**: The remote mode is disabled explicitly.

    If  **--remote-host**  is specified, this parameter can be omitted.

-   --remote-host=_destination_

    Specifies the IP address or host name of the remote host to be connected.

-   --remote-port=_port_

    Specifies the port number of the remote host to be connected.

    Default value:  **22**

-   --remote-user=_username_

    Specifies the remote host user for SSH connection. If this parameter is not specified, the user who initiates the SSH connection is used.

    Default value: the current user.

-   --remote-path=_path_

    Specifies the installation directory of  **gs\_probackup**  in the remote system.

    Default value: current path

-   --remote-libpath=_libpath_

    Specifies the lib directory where  **gs\_probackup**  is installed in the remote system.

-   --ssh-options=_ssh\_options_

    Specifies the character string of the SSH command line parameter.

    Example: --ssh-options='-c cipher\_spec -F configfile'

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   If the server does not respond due to a temporary network fault,  **gs\_probackup **will exit after waiting for  _archive-timeout_  seconds \(300 seconds is set by default\).
    >-   If the LSN of the standby server is different from that of the primary server, the database continuously updates the following log information. In this case, you need to rebuild the standby server.
    >```
    >LOG: walsender thread shut down
    >LOG: walsender thread started
    >LOG: received wal replication command: IDENTIFY_VERSION
    >LOG: received wal replication command: IDENTIFY_MODE
    >LOG: received wal replication command: IDENTIFY_SYSTEM
    >LOG: received wal replication command: IDENTIFY_CONSISTENCE 0/D0002D8
    >LOG: remote request lsn/crc: [xxxxx] local max lsn/crc: [xxxxx]
    >```


## Backup Process<a name="en-us_topic_0289899221_en-us_topic_0287276008_section1735727125216"></a>

1.  Initialize the backup directory. Create the  **backups/**  and  **wal/**  subdirectories in the specified directory to store backup files and WAL files respectively.

    ```
    gs_probackup init -B backup_dir
    ```

2.  Add a new backup instance.  **gs\_probackup**  can store backups of multiple database instances in the same backup directory.

    ```
    gs_probackup add-instance -B backup_dir -D data_dir --instance instance_name
    ```

3.  Create a backup for a specified database instance. Before performing an incremental backup, you must create at least one full backup.

    ```
    gs_probackup backup -B backup_dir --instance instance_name -b backup_mode
    ```

4.  Restore data from the backup of a specified instance.

    ```
    gs_probackup restore -B backup_dir --instance instance_name -D pgdata-path -i backup_id
    ```


## Troubleshooting<a name="en-us_topic_0289899221_section1494010372368"></a>

<a name="en-us_topic_0289899221_table580714103714"></a>
<table><thead align="left"><tr id="en-us_topic_0289899221_row1881191415371"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="en-us_topic_0289899221_p88111145376"><a name="en-us_topic_0289899221_p88111145376"></a><a name="en-us_topic_0289899221_p88111145376"></a>Problem Description</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="en-us_topic_0289899221_p3811314113715"><a name="en-us_topic_0289899221_p3811314113715"></a><a name="en-us_topic_0289899221_p3811314113715"></a>Cause and Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0289899221_row128119141370"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0289899221_p1137341385614"><a name="en-us_topic_0289899221_p1137341385614"></a><a name="en-us_topic_0289899221_p1137341385614"></a>ERROR: query failed: ERROR: canceling statement due to conflict with recovery</p>
<p id="en-us_topic_0289899221_p3250176192018"><a name="en-us_topic_0289899221_p3250176192018"></a><a name="en-us_topic_0289899221_p3250176192018"></a> </p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0289899221_p1177019484135"><a name="en-us_topic_0289899221_p1177019484135"></a><a name="en-us_topic_0289899221_p1177019484135"></a><strong id="en-us_topic_0289899221_b5514131818519"><a name="en-us_topic_0289899221_b5514131818519"></a><a name="en-us_topic_0289899221_b5514131818519"></a>Cause</strong>: The operation performed on the standby node is accessing the storage row. The corresponding row is modified or deleted on the primary node, and the Xlog is replayed on the standby node. As a result, the operation is canceled on the standby node.</p>
<p id="en-us_topic_0289899221_p1694692172319"><a name="en-us_topic_0289899221_p1694692172319"></a><a name="en-us_topic_0289899221_p1694692172319"></a>Solution:</p>
<p id="en-us_topic_0289899221_p237491316569"><a name="en-us_topic_0289899221_p237491316569"></a><a name="en-us_topic_0289899221_p237491316569"></a>1. Increase the values of the following parameters:</p>
<p id="en-us_topic_0289899221_p3696105218208"><a name="en-us_topic_0289899221_p3696105218208"></a><a name="en-us_topic_0289899221_p3696105218208"></a>max_standby_archive_delay</p>
<p id="en-us_topic_0289899221_p9696105215208"><a name="en-us_topic_0289899221_p9696105215208"></a><a name="en-us_topic_0289899221_p9696105215208"></a>max_standby_streaming_delay</p>
<p id="en-us_topic_0289899221_p317036192310"><a name="en-us_topic_0289899221_p317036192310"></a><a name="en-us_topic_0289899221_p317036192310"></a>2. Add the following configuration item:</p>
<p id="en-us_topic_0289899221_p1286010362416"><a name="en-us_topic_0289899221_p1286010362416"></a><a name="en-us_topic_0289899221_p1286010362416"></a>hot_standby_feedback = on</p>
</td>
</tr>
</tbody>
</table>

