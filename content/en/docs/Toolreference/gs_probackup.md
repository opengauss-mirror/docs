# gs\_probackup<a name="EN-US_TOPIC_0283839027"></a>

## Background<a name="section779474172017"></a>

**gs\_probackup**  is a tool used to manage openGauss database backup and restoration. It periodically backs up the openGauss instances so that the server can be restored when the database is faulty.

-   It supports the physical backup of a standalone database or a primary database node in a cluster.
-   It supports the backup of contents in external directories, such as script files, configuration files, log files, and dump files.
-   It supports incremental backup, periodic backup, and remote backup.
-   It supports settings on the backup retention policy.

## Prerequisites<a name="section95951827112520"></a>

-   The openGauss database can be connected.
-   The parameter  **enable\_cbm\_tracking = on**  is manually added to the  **postgresql.conf**  file.

## Important Notes<a name="section6439171332614"></a>

-   The backup must be performed by the user who runs the database server. For example, if the database server is run by user  **postgres**, the backup must be performed by user  **postgres**. If the backup is performed in remote mode through SSH, the value of  **--remote-user**  must be  **postgres**.
-   The major version number of the database server to be backed up must be the same as that of the database server to be restored.
-   To back up a database in remote mode using SSH, install the database of the same major version on the local and remote hosts, and run the  **ssh-copy-id remote\_user@remote\_host**  command to set an SSH connection without a password between the local host backup user and the remote host database user.
-   In remote mode, only the subcommands  **add-instance**,  **backup**, and  **restore**  can be executed.

## Command Description<a name="section86861610172816"></a>

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

-   Initialize the backup directory in the  **backup\_dir**  backup path. The backup directory stores the contents that have been backed up. If the  **backup\_dir**  backup path exists, it must be empty.

    ```
    gs_probackup init -B backup_dir [--help]
    ```

-   Initialize a new backup instance in the backup directory of  **backup\_dir**  and generate the  **pg\_probackup.conf**  configuration file, which saves the gs\_probackup settings of the specified data directory  **data\_dir**.

    ```
    gs_probackup add-instance -B backup_dir -D data_dir --instance=instance_name
    [--help] [-E external-directory-path]
    [remote_options]
    ```

-   Delete the backup content related to the specified instance from the  **backup\_dir**  directory.

    ```
    gs_probackup del-instance -B backup_dir --instance=instance_name
    [--help]
    ```

-   Add the specified connection, compression, redundancy, log-related settings, and external directory settings to the  **pg\_probackup.conf**  configuration file or modify the existing settings. You are not advised to manually edit the  **pg\_probackup.conf**  configuration file.

    ```
    gs_probackup set-config -B backup_dir --instance=instance_name
    [--help] [--pgdata=pgdata-path]
    [--retention-redundancy=redundancy] [--retention-window=window]
    [--compress-algorithm=compression_algorithm] [--compress-level=compression_level]
    [-d dbname] [-h host] [-p port] [-U username]
    [--external-dirs=external_directory_path]
    [--restore-command=cmdline]
    [remote_options] [logging_options]
    ```

-   Add the backup-related settings to the  **backup.control**  configuration file or modify the settings.

    ```
    gs_probackup set-backup -B backup_dir --instance instance_name -i backup_id
    {--ttl=ttl | --expire-time=time} [--help]
    ```

-   Display the content of the  **pg\_probackup.conf**  configuration file in the  **backup\_dir/backups/instance\_name**  directory. You can specify  **--format=json**  to display the information in JSON format. By default, the plain text format is used.

    ```
    gs_probackup show-config -B backup_dir –instance=instance_name
    [--format =plain|json]
    ```

-   Display the contents of the backup directory. If  **instance\_name**  and  **backup\_id**  are specified, detailed information about the backup is displayed. You can specify  **--format=json**  to display the information in JSON format. By default, the plain text format is used.

    ```
    gs_probackup show -B backup_dir
    [--help] [--instance=instance_name] [-i backup_id] [--format=plain|json]
    ```

-   Create a backup for a specified database instance. The  **backup\_mode**  option specifies the backup mode to be used.

    ```
    gs_probackup backup -B backup_dir -b backup_mode --instance=instance_name
    [--help] [-D pgdata-path] [-C] [--stream [-S slot_name] [--temp-slot]]
    [--backup-pg-log] [-j num_threads] [--progress]
    [--no-validate] [--skip-block-validation]
    [-E external_directory_path] [--no-sync] [--note=text]
    [connection_options] [compression_options] [remote_options]
    [retention_options] [pinning_options] [logging_options]
    ```

-   Restore a specified instance from the backup copy in the  **backup\_dir**  directory. If an instance to be restored is specified,  **pg\_probackup**  will look for its latest backup and restore it to the specified recovery target. Otherwise, the latest backup of any instance is used.

    ```
    gs_probackup restore -B backup_dir --instance instance_name
    [--help] [-D data_dir] [-i backup_id] [-j num_threads] [--progress]
    [-T OLDDIR=NEWDIR] [--external-mapping=OLDDIR=NEWDIR] [--skip-external-dirs] [-I incremental_mode]
    [-R | --restore-as-replica] [--no-validate] [--skip-block-validation] [--force]
    [--restore-command=cmdline]
    [recovery_options] [logging_options] [remote_options]
    ```

-   Merge all incremental backups between the specified incremental backup and its parent full backup into the parent full backup. The parent full backup will receive all merged data, while the merged incremental backup will be deleted as redundancy.

    ```
    gs_probackup merge -B backup_dir --instance instance_name -i backup_id
    [--help] [-j num_threads] [--progress]
    [logging_options]
    ```

-   Delete a backup with a specified  **backup\_id**  or delete backups and archived WALs that do not meet the current retention policy.

    ```
    gs_probackup delete -B backup_dir --instance instance_name
    [--help] [-j num_threads] [--progress]
    [--retention-redundancy=redundancy][--retention-window=window]
    [-i backup-id | --delete-expired | --merge-expired | --status=backup_status]
    [--delete-wal] [--dry-run]
    [logging_options]
    ```


## Parameter Description<a name="section520716591338"></a>

**Common parameters**

-   command

    Specifies subcommands except  **version**  and  **help**:  **init**,  **add-instance**,  **del-instance**,  **set-config**,  **set-backup**,  **show-config**,  **show**,  **backup**,  **restore**,  **merge**  and  **delete**.

-   -?, --help

    Displays help information about the command line parameters of  **gs\_probackup**  and exits.

    Only  **--help**  can be used in subcommands;  **-?**  is forbidden.

-   -V, --version

    Prints the  **gs\_probackup**  version and exits.

-   -B backup\_dir, --backup-path=backup\_dir

    Backup path.

    System environment variable:  _$BACKUP\_PATH_

-   -D data\_dir, --pgdata=data\_dir

    Path of the data directory.

    System environment variable:  _$PGDATA_

-   --instance=instance\_name

    Instance name.

-   -i id, --backup-id=id

    Unique identifier of a backup.

-   -j num\_threads, --threads=num\_threads

    Sets the number of concurrent threads for the backup, restoration, and combination processes.

-   --progress

    Displays progress.

-   --note=text

    Adds a note to the backup.


**Parameters for backup**

-   -b mode, --backup-mode=mode

    Specifies the backup mode. The value can be  **FULL**  or  **PTRACK**.

    **FULL**: creates a full backup. The full backup contains all data files.

    **PTRACK**: creates a PTRACK incremental backup.

-   -C, --smooth-checkpoint

    Expands checkpoints within a period of time. By default,  **gs\_probackup**  attempts to complete checkpoints as soon as possible.

-   --stream

    Transfers files from the database server in the form of stream. A stream backup containing all necessary WAL files is generated.

-   --temp-slot

    Creates a temporary physical replication slot for WAL stream processing in the backup instance to ensure that all required WAL segments are still available during the backup. This parameter can be used only with the  **--stream**  parameter. The default slot name is  **pg\_probackup\_slot**, which can be changed using the  **--slot/-S**  option.

-   -S slot\_name, --slot=slot\_name

    Specifies the replication slot for WAL stream processing. This parameter can be used only with the  **--stream**  parameter.

-   --backup-pg-log

    Includes the log directory in the backup. This directory typically contains log messages. By default, the log directory is not included.

-   -E external\_directory\_path, --external-dirs=external\_directory\_path

    Includes the specified directory in the backup. This option is useful for backing up scripts in external data directories, sql dumps, and configuration files. To back up multiple external directories, use colons \(:\) to separate their paths in Unix.

-   --skip-block-validation

    Disables block-level verification to speed up backup.

-   --no-validate

    Skips the automatic verification when the backup is complete.

-   --no-sync

    Disables backup file synchronization to the disk.


**Parameters for restore**

-   -I, --incremental-mode=none|lsn

    Reuses the valid pages available in PGDATA if they are not modified.

    Default value:  **none**

-   -T OLDDIR=NEWDIR, --tablespace-mapping=OLDDIR=NEWDIR

    Relocates the tablespace from the  **OLDDIR**  directory to the  **NEWDIR**  directory during the restoration.  **OLDDIR**  and  **NEWDIR**  must be absolute paths. If the path contains an equal sign \(=\), use a backslash \(\\\) to escape. This parameter can be specified multiple times for multiple tablespaces.

-   --skip-external-dirs

    Skips the external directories in the backup that are specified using the  **--external-dirs**  option. The contents of these directories will not be restored.

-   --skip-block-validation

    Skips block-level verification to speed up verification. During the automatic verification before the restoration, only file-level verification is performed.

-   --no-validate

    Skips the backup verification.

-   --restore-command=cmdline

    Specifies restoration-related commands, for example,  **--restore-command='cp /mnt/server/archivedir/%f "%p"'**.

-   --force

    Specifies the invalid state that allows ignoring backup. This flag can be used if data needs to be restored from a damaged or invalid backup. Exercise caution when using it.


**Parameters for recovery target**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If continuous WAL archiving is configured, the following parameters can be used together with the  **restore**  command.

-   --recovery-target=immediate|latest

    Defines when to stop the recovery.

    **immediate**: When the consistency status of the specified backup is reached, the restoration stops. If the  **-i/--backup\_id**  parameter is omitted, the restoration stops after the latest available backup is restored.

    **latest**: Data is continuously restored until all available WAL segments in all archives are applied.

    The default value of  **--recovery-target**  depends on the WAL transmission mode of the backup to be restored. Set the backup mode of the streaming backup to  **immediate**  and the archive mode to  **latest**.

-   --recovery-target-timeline=timeline

    Specifies the timeline to which the data is to be restored. By default, the timeline of the specified backup is used.

-   --recovery-target-lsn=lsn

    Specifies the LSN to be restored.

-   --recovery-target-name=recovery\_target\_name

    Specifies the named savepoint to which the data is to be restored.

-   --recovery-target-time=time

    Specify the time to which the data is to be restored.

-   --recovery-target-xid=xid

    Specifies the transaction ID to be restored.

-   --recovery-target-inclusive=boolean

    When this parameter is set to  **true**, the recovery target will include the specified content.

    When this parameter is set to  **false**, the recovery target will not include the specified content.

    This parameter must be used together with  **--recovery-target-name**,  **--recovery-target-time**,  **--recovery-target-lsn**, or  **--recovery-target-xid**.

-   --recovery-target-action=pause|promote|shutdown

    Specifies the operations to be executed by the server when the target is restored.


**Parameters for retention**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The following parameters can be used together with the  **backup**  and  **delete**  commands.

-   --retention-redundancy=redundancy

    Number of full backups retained in the data directory. The value must be a positive integer. The value  **0**  indicates that the setting is disabled.

    Default value:  **0**

-   --retention-window=window

    Specifies the retention period. The value must be a positive integer. The value  **0**  indicates that the setting is disabled.

    Default value:  **0**

-   --wal-depth=wal\_depth

    Latest number of valid backups that must be retained on each timeline to perform the PITR capability The value must be a positive integer. The value  **0**  indicates that the setting is disabled.

    Default value:  **0**

-   --delete-wal

    Deletes unnecessary WAL files from any existing backup.

-   --delete-expired

    Deletes the backups that do not comply with the retention policy defined in the  **pg\_probackup.conf**  configuration file.

-   --merge-expired

    Merges the oldest incremental backup that meets the retention policy requirements with its expired parent backup.

-   --dry-run

    Displays the current status of all available backups. Expired backups will not be deleted or merged.


**Parameters for fixed backup**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>To exclude certain backups from the established retention policy, you can use the following parameters with the  **backup**  and  **set-backup**  commands.

-   --ttl=ttl

    Specifies a fixed amount of time to back up data from the restoration time. The value must be a positive integer. The value  **0**  indicates that the backup is canceled.

    Supported unit: ms, s, min, h, d \(default value:  **s**\)

    For example,  **--ttl=30d**.

-   --expire-time=time

    Specifies the timestamp when the backup is invalid. The time stamp must comply with the ISO-8601 standard.

    For example,  **--expire-time='2020-01-01 00:00:00+03'**.


**Parameters for log**

Log levels:  **verbose**,  **log**,  **info**,  **warning**,  **error**, and  **off**.

-   --log-level-console=log\_level

    Sets the level of logs to be sent to the console. Each level contains all the levels following it. A higher level indicates fewer messages sent. If this parameter is set to  **off**, the log recording function of the console is disabled.

    Default value:  **info**

-   --log-level-file=log\_level

    Sets the level of logs to be sent to the log file. Each level contains all the levels following it. A higher level indicates fewer messages sent. If this parameter is set to  **off**, the log file recording function is disabled.

-   --log-filename=log\_filename

    Specifies the name of the log file to be created. The file name can use the strftime mode. Therefore,  **%-escapes**  can be used to specify the file name that changes with time.

    For example, if the  **pg\_probackup-%u.log**  mode is specified, pg\_probackup generates a log file each day of the week, with  **%u**  replaced by the corresponding decimal number, that is,  **pg\_probackup-1.log**  indicates Monday.  **pg\_probackup-2.log**  indicates Tuesday, and so on.

    This parameter is valid if the  **--log-level-file**  parameter is specified to enable log file recording.

    Default value:  **pg\_probackup.log**

-   --error-log-filename=error\_log\_filename

    Specifies the name of the log file that is used only for error logs. The specifying method is the same as that of the  **--log-filename**  parameter.

    It is used for troubleshooting and monitoring.

-   --log-directory=log\_directory

    Specifies the directory where log files are created. The value must be an absolute path. This directory is created when the first log is written.

    Default value:  **$BACKUP\_PATH/log/**

-   --log-rotation-size=log\_rotation\_size

    Specifies the maximum size of a log file. If the maximum size is reached, the log file will be circulated after the  **gs\_probackup**  command is executed. The  **help**  and  **version**  commands will not lead to a log file circulation. The value  **0**  indicates that the file size-based loop is disabled.

    The unit can be KB, MB, GB, or TB. The default unit is  **KB**.

    Default value:  **0**

-   --log-rotation-age=log\_rotation\_age

    Maximum life cycle of a log file. If the maximum size is reached, the log file will be circulated after the  **gs\_probackup**  command is executed. The  **help**  and  **version**  commands will not lead to a log file circulation. The  **$BACKUP\_PATH/log/log\_rotation**  directory saves the time of the last created log file. The value  **0**  indicates that the time-based loop is disabled.

    Supported unit: ms, s, min, h, d \(default value:  **min**\)

    Default value:  **0**


**Parameters for connection**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The following parameters can be used together with the  **backup**  command.

-   -d dbname, --pgdatabase=dbname

    Specifies the name of the database to connect to. This connection is only used to manage the backup process. Therefore, you can connect to any existing database. If this parameter is not specified in the command line, the  _PGDATABASE_  environment variable, or the  **pg\_probackup.conf**  configuration file, gs\_probackup attempts to obtain the value from the  _PGUSER_  environment variable. If the  _PGUSER_  variable is not set, the value is obtained from the current user name.

    System environment variable:  _$PGDATABASE_

-   -h host, --pghost=host

    Specifies the host name of the system on which the server is running. If the value begins with a slash \(/\), it is used as the directory for the UNIX domain socket.

    System environment variable:  _$PGHOST_

    Default value:  **local socket**

-   -p port, --pgport=port

    Specifies the TCP port or local Unix domain socket file name extension on which the server is listening for connections.

    System environment variable:  _$PGPORT_

    Default value:  **5432**

-   -U username, --pguser=username

    Specifies the username of the host to be connected.

    System environment variable:  _$PGUSER_

-   -w, --no-password

    Never issues a password prompt. The connection attempt fails if the host requires password verification and the password is not provided in other ways. This parameter is useful in batch jobs and the scripts that require no user password.

-   -W, --password

    Forcibly issues a password prompt.


**Parameters for compression**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The following parameters can be used together with the  **backup**  command.

-   --compress-algorithm=compression\_algorithm

    Specifies the algorithm used to compress data file. The value can be  **zlib**,  **pglz**, or  **none**. If  **zlib**  or  **pglz**  is set, compression is enabled. By default, the compression function is disabled.

    Default value:  **none**

-   --compress-level=compression\_level

    Specifies the compression level. Value range:

    -   **0**  indicates no compression.
    -   **1**  indicates the compression ratio is the lowest and processing speed the fastest.
    -   **9**  indicates the compression ratio is the highest and processing speed the slowest.
    -   This parameter can be used together with  **--compress-algorithm**.

    Default value:  **1**

-   --compress

    Compresses with  **--compress-algorithm=zlib**  and  **--compress-level=1**.


**Parameters for remote mode**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The following are parameters that remotely run gs\_probackup through SSH, and can be used together with the  **add-instance**,  **set-config**,  **backup**, and  **restore**  commands.

-   --remote-proto=proto

    Specifies the protocol used for remote operations. Currently, only the SSH protocol is supported. Valid value:

    **ssh**: enables the remote backup mode through SSH. This is the default.

    **none**: The remote mode is disabled explicitly.

    If  **--remote-host**  is specified, this parameter can be omitted.

-   --remote-host=destination

    Specifies the IP address or host name of the remote host to be connected.

-   --remote-port=port

    Specifies the port number of the remote host to be connected.

    Default value:  **22**

-   --remote-user=username

    Specifies the remote host user for SSH connection. If this parameter is not specified, the user who initiates the SSH connection is used.

    Default value:  **the current user**.

-   --remote-path=path

    Specifies the installation directory of gs\_probackup in the remote system.

-   --ssh-options=ssh\_options

    Specifies the character string of the SSH command line parameter.


## Backup Process<a name="section1735727125216"></a>

1.  Initialize the backup directory. Create the  **backups/**  and  **wal/**  subdirectories in the specified directory to store backup files and WAL files respectively.

    ```
    gs_probackup init -B backup_dir
    ```

2.  Add a new backup instance. gs\_probackup can store backups of multiple database instances in the same backup directory.

    ```
    gs_probackup add-instance -B backup_dir -D data_dir --instance instance_name [remote_options]
    ```

3.  Create a backup for a specified database instance. Before performing an incremental backup, you must create at least one full backup.

    ```
    gs_probackup backup -B backup_dir --instance instance_name -b backup_mode
    ```

4.  Restore data from the backup of a specified DB instance.

    ```
    gs_probackup restore -B backup_dir --instance instance_name -i backup_id
    ```


