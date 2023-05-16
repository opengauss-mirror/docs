# gs\_probackup

## 背景信息<a name="zh-cn_topic_0287276008_section779474172017"></a>

gs\_probackup是一个用于管理openGauss数据库备份和恢复的工具。它对openGauss实例进行定期备份，以便在数据库出现故障时能够恢复服务器。

-   可用于备份单机数据库，也可对主机或者主节点数据库备机进行备份，为物理备份。
-   可备份外部目录的内容，如脚本文件、配置文件、日志文件、dump文件等。
-   支持增量备份、定期备份和远程备份。
-   可设置备份的留存策略。
-   支持MySQL兼容性。（仅限于3.0.0，3.1.0，3.1.1的MySQL兼容性需求）

## 前提条件<a name="zh-cn_topic_0287276008_section95951827112520"></a>

-   可以正常连接openGauss数据库。
-   若要使用PTRACK增量备份，需在postgresql.conf中手动添加参数“enable\_cbm\_tracking = on”。
-   为了防止xlog在传输结束前被清理，请适当调高postgresql.conf文件中wal_keep_segements的值。

## 限制说明<a name="zh-cn_topic_0287276008_section6439171332614"></a>

-   备份必须由运行数据库服务器的用户执行。
-   备份和恢复的数据库服务器的主版本号必须相同。
-   如果要通过ssh在远程模式下备份数据库，需要在本地和远程主机安装相同主版本的数据库，并通过ssh-copy-id remote\_user@remote\_host命令设置本地主机备份用户和远程主机数据库用户的无密码ssh连接。
-   远程模式下只能执行add-instance、backup、restore子命令。
-   使用restore子命令前，应先停止gaussdb进程。
-   当存在用户自定义表空间时，备份的时候要加上 --external-dirs 参数，否则，该表空间不会被备份。
-   当备份的规模比较大时，为了防止备份过程中timeout发生，请适当调整postgresql.conf文件的参数 session\_timeout、wal\_sender\_timeout。并且在备份的命令行参数中适当调整参数--rw-timeout的值。
-   恢复时，使用-T选项把备份中的外部目录重定向到新目录时，请同时指定参数--external-mapping。
-   当使用远程备份时，请确保远程机器和备份机器的时钟同步，以防止使用--recovery-target-time恢复的场合,启动gaussdb时有可能会失败。
-   当远程备份有效时\(remote-proto=ssh\)，请确保-h和--remote-host指定的是同一台机器。当远程备份无效时，如果指定了-h选项，请确保-h指定的是本机地址或本机主机名。
-   当前仅支持备份发布订阅的逻辑复制槽。
-   备份时，请确保服务器用户对备份的目录下所有文件有读写的权限，以防止在恢复时因权限不足的问题而失败。
-   在资源池化模式下当前仅支持本地主机全量备份和全量恢复。
-   备份将执行checkpoint与xlog switch操作，此行为将产生新的xlog，并提交事务。一主一备或一主多备场景备份时，若配置文件中synchronous_commit设置为on，备机关停可能会导致主机同步提交事务失败，进而导致备份失败。此场景下，请确认各节点状态正常，或将synchronous_commit设置为off以避免备份失败。

## 命令说明<a name="zh-cn_topic_0287276008_section86861610172816"></a>

-   打印gs\_probackup版本。

    ```
    gs_probackup -V|--version
    gs_probackup version
    ```

-   显示gs\_probackup命令的摘要信息。如果指定了gs\_probackup的子命令，则显示可用于此子命令的参数的详细信息。

    ```
    gs_probackup -?|--help
    gs_probackup help [command]
    ```

-   初始化备份路径_backup-path_中的备份目录，该目录将存储已备份的内容。如果备份路径_backup-path_已存在，则_backup-path_必须为空目录。

    ```
    gs_probackup init -B backup-path [--help]
    ```

-   在备份路径_backup-path_内初始化一个新的备份实例，并生成pg\_probackup.conf配置文件，该文件保存了指定数据目录_pgdata-path_的gs\_probackup设置（非资源池化模式）。

    ```
    gs_probackup add-instance -B backup-path -D pgdata-path --instance=instance_name
    [-E external-directories-paths]
    [remote_options] [dss_options]
    [--help]
    ```

-   在备份路径_backup-path_内删除指定实例相关的备份内容。

    ```
    gs_probackup del-instance -B backup-path --instance=instance_name
    [--help]
    ```

-   将指定的连接、压缩、日志等相关设置添加到pg\_probackup.conf配置文件中，或修改已设置的值。不推荐手动编辑pg\_probackup.conf配置文件。

    ```
    gs_probackup set-config -B backup-path --instance=instance_name
    [-D pgdata-path] [-E external-directories-paths] [--archive-timeout=timeout]
    [--retention-redundancy=retention-redundancy] [--retention-window=retention-window] [--wal-depth=wal-depth]
    [--compress-algorithm=compress-algorithm] [--compress-level=compress-level]
    [-d dbname] [-h hostname] [-p port] [-U username]
    [logging_options] [remote_options] [dss_options]
    [--help]
    ```

-   将备份相关设置添加到backup.control配置文件中，或修改已设置的值。

    ```
    gs_probackup set-backup -B backup-path --instance=instance_name -i backup-id
    [--note=text] [pinning_options]
    [--help]
    ```

-   显示位于备份目录中的pg\_probackup.conf配置文件的内容。可以通过指定--format=json选项，以json格式显示。默认情况下，显示为纯文本格式。

    ```
    gs_probackup show-config -B backup-path --instance=instance_name
    [--format=plain|json]
    [--help]
    ```

-   显示备份目录的内容。如果指定了instance\_name和backup\_id，则显示该备份的详细信息。可以通过指定--format=json选项，以json格式显示。默认情况下，备份目录的内容显示为纯文本格式。

    ```
    gs_probackup show -B backup-path
    [--instance=instance_name [-i backup-id]] [--archive] [--format=plain|json]
    [--help]
    ```

-   创建指定实例的备份。

    ```
    gs_probackup backup -B backup-path --instance=instance_name -b backup-mode
    [-D pgdata-path] [-C] [-S slot-name] [--temp-slot] [--backup-pg-log] [-j threads_num] [--progress]
    [--no-validate] [--skip-block-validation] [-E external-directories-paths] [--no-sync] [--note=text]
    [--archive-timeout=timeout] [-t rwtimeout]
    [logging_options] [retention_options] [compression_options] [connection_options]
    [remote_options] [dss_options] [pinning_options][--backup-pg-replslot]
    [--help]
    ```

-   从备份目录_backup-path_中的备份副本恢复指定实例。如果指定了恢复目标选项，gs\_probackup将查找最近的备份并将其还原到指定的恢复目标。否则，使用最近一次备份。

    ```
    gs_probackup restore -B backup-path --instance=instance_name
    [-D pgdata-path] [-i backup_id] [-j threads_num] [--progress] [--force] [--no-sync] [--no-validate] [--skip-block-validation]
    [--external-mapping=OLDDIR=NEWDIR] [-T OLDDIR=NEWDIR] [--skip-external-dirs] [-I incremental_mode]
    [recovery_options] [remote_options] [dss_options] [logging_options]
    [--help]
    ```

-   将指定的增量备份与其父完全备份之间的所有增量备份合并到父完全备份。父完全备份将接收所有合并的数据，而已合并的增量备份将作为冗余被删除。

    ```
    gs_probackup merge -B backup-path --instance=instance_name -i backup_id
    [-j threads_num] [--progress] [logging_options]
    [--help]
    ```

-   删除指定备份，或删除不满足当前保留策略的备份。

    ```
    gs_probackup delete -B backup-path --instance=instance_name
    [-i backup-id | --delete-expired | --merge-expired | --status=backup_status]
    [--delete-wal] [-j threads_num] [--progress]
    [--retention-redundancy=retention-redundancy] [--retention-window=retention-window]
    [--wal-depth=wal-depth] [--dry-run]
    [logging_options]
    [--help]
    ```

-   验证恢复数据库所需的所有文件是否存在且未损坏。如果未指定_instance\_name_，gs\_probackup将验证备份目录中的所有可用备份。如果指定_instance\_name_而不指定任何附加选项，gs\_probackup将验证此备份实例的所有可用备份。如果指定了_instance\_name_并且指定_backup-id_或恢复目标相关选项，gs\_probackup将检查是否可以使用这些选项恢复数据库。

    ```
    gs_probackup validate -B backup-path
    [--instance=instance_name] [-i backup-id]
    [-j threads_num] [--progress] [--skip-block-validation]
    [--recovery-target-time=time | --recovery-target-xid=xid | --recovery-target-lsn=lsn | --recovery-target-name=target-name]
    [--recovery-target-inclusive=boolean]
    [logging_options]
    [--help] 
    ```


## 参数说明<a name="zh-cn_topic_0287276008_section520716591338"></a>

### **通用参数**

-   command

    gs\_probackup除version和help以外的子命令：init、add-instance、del-instance、set-config、set-backup、show-config、show、backup、restore、merge、delete、validate。

-   -?, --help

    显示gs\_probackup命令行参数的帮助信息，然后退出。

    子命令中只能使用--help，不能使用-?。

-   -V, --version

    打印gs\_probackup版本，然后退出。

-   -B  _backup-path_, --backup-path=_backup-path_

    备份的路径。

    系统环境变量：$BACKUP\_PATH

-   -D  _pgdata-path_, --pgdata=_pgdata-path_

    数据目录的路径。

    系统环境变量：$PGDATA

-   --instance=_instance\_name_

    实例名。

-   -i  _backup-id_, --backup-id=_backup-id_

    备份的唯一标识。

-   --format=_format_

    指定显示备份信息的格式，支持plain和json格式。

    默认值：plain

-   --status=_backup\_status_

    删除指定状态的所有备份，包含以下状态：

    -   OK：备份已完成且有效。
    -   DONE：备份已完成但未经过验证。
    -   RUNNING：备份正在进行中。
    -   MERGING：备份正在合并中。
    -   DELETING：备份正在删除中。
    -   CORRUPT：部分备份文件已损坏。
    -   ERROR：由于意外错误，备份失败。
    -   ORPHAN：由于其父备份之一已损坏或丢失，备份无效。

-   -j  _threads\_num_, --threads=_threads\_num_

    设置备份、还原、合并进程的并行线程数。

-   --archive

    显示WAL归档信息。

-   --progress

    显示进度。

-   --note=_text_

    给备份添加note。

### **资源池化模式下添加实例相关参数**

- --enable-dss

  开启资源池化模式。

- --instance-id

  数据库节点id号，因为资源池化模式只支持主机备份，因此该参数一般为0。

- --vgname

  资源池化模式下数据库使用的卷的卷名。

- --socketpath

  dss进程socket文件路径。

### **备份相关参数**

-   -b  _backup-mode_, --backup-mode=_backup-mode_

    指定备份模式，支持FULL和PTRACK。

    FULL：创建全量备份，全量备份包含所有数据文件。

    PTRACK：创建PTRACK增量备份。

-   -C, --smooth-checkpoint

    将检查点在一段时间内展开。默认情况下，gs\_probackup会尝试尽快完成检查点。

-   -S  _slot-name_, --slot=_slot-name_

    指定WAL流处理的复制slot。

-   --temp-slot

    在备份的实例中为WAL流处理创建一个临时物理复制slot，它确保在备份过程中，所有所需的WAL段仍然是可用的。

    默认的slot名为pg\_probackup\_slot，可通过选项--slot/-S更改。

-   --backup-pg-log

    将日志目录包含到备份中。此目录通常包含日志消息。默认情况下包含日志目录，但不包含日志文件。如果修改了默认的日志路径，需要备份日志文件时可使用-E参数进行备份，使用方法见下文。

-   -E  _external-directories-paths_, --external-dirs=_external-directories-paths_

    将指定的目录包含到备份中。此选项对于备份位于数据目录外部的脚本、sql转储和配置文件很有用。如果要备份多个外部目录，请在Unix上用冒号分隔它们的路径。

    例如：-E /tmp/dir1:/tmp/dir2

-   --skip-block-validation

    关闭块级校验，加快备份速度。

-   --no-validate

    在完成备份后跳过自动验证。

-   --no-sync

    不将备份文件同步到磁盘。

-   --archive-timeout=_timeout_

    以秒为单位设置流式处理的超时时间。

    默认值：300

-   -t rwtimeout

    以秒为单位的连接的超时时间。

    默认值: 120

-   --backup-pg-replslot

    将pg_replslot下发布订阅的逻辑复制槽目录包含到备份中。默认情况下包含pg_replslot目录，但不包含复制槽文件。

### **恢复相关参数**

-   -I, --incremental-mode=none|checksum|lsn

    若PGDATA中可用的有效页没有修改，则重新使用它们。

    默认值：none

-   --external-mapping=_OLDDIR=NEWDIR_

    在恢复时，将包含在备份中的外部目录从_OLDDIR_重新定位到_NEWDIR_目录。_OLDDIR_和_NEWDIR_都必须是绝对路径。如果路径中包含“=”，则使用反斜杠转义。此选项可为多个目录多次指定。

-   -T  _OLDDIR=NEWDIR_, --tablespace-mapping=_OLDDIR=NEWDIR_

    在恢复时，将表空间从_OLDDIR_重新定位到_NEWDIR_目录。_OLDDIR_和_NEWDIR_必须都是绝对路径。如果路径中包含“=”，则使用反斜杠转义。多个表空间可以多次指定此选项。此选项必须和--external-mapping一起使用。

-   --skip-external-dirs

    跳过备份中包含的使用--external-dirs选项指定的外部目录。这些目录的内容将不会被恢复。

-   --skip-block-validation

    跳过块级校验，以加快验证速度。在恢复之前的自动验证期间，将仅做文件级别的校验。

-   --no-validate

    跳过备份验证。

-   --force

    允许忽略备份的无效状态。如果出于某种原因需要从损坏的或无效的备份中恢复数据，可以使用此标志。请谨慎使用。

### **恢复目标相关参数\(recovery\_options\)**

>![](public_sys-resources/icon-note.png) **说明：** 
>
>当前不支持配置连续的WAL归档的PITR，因而使用这些参数会有一定限制，具体如下描述。
>如果需要使用持续归档的WAL日志进行PITR恢复，请按照下面描述的步骤：
> 1.  将物理备份的文件替换目标数据库目录。
> 2.  删除数据库目录下pg\_xlog/中的所有文件。
> 3.  将归档的WAL日志文件复制到pg\_xlog文件中（此步骤可以省略，通过配置recovery.conf恢复命令文件中的restore\_command项替代）。
> 4.  在数据库目录下创建恢复命令文件recovery.conf，指定数据库恢复的程度。
> 5.  启动数据库。
> 6.  连接数据库，查看是否恢复到希望预期的状态。若已经恢复到预期状态，通过pg\_xlog\_replay\_resume\(\)指令使主节点对外提供服务。

-   --recovery-target-lsn=_lsn_

    指定要恢复到的lsn，当前只能指定备份的stop lsn。

-   --recovery-target-name=_target-name_

    指定要将数据恢复到的已命名的保存点，保存点可以通过查看备份中recovery-name字段得到。

-   --recovery-target-time=_time_

    指定要恢复到的时间，当前只能指定备份中的recovery-time。

-   --recovery-target-xid=_xid_

    指定要恢复到的事务ID，当前只能指定备份中的recovery-xid。

-   --recovery-target-inclusive=_boolean_

    当该参数指定为true时，恢复目标将包括指定的内容。

    当该参数指定为false时，恢复目标将不包括指定的内容。

    该参数必须和--recovery-target-name、--recovery-target-time、--recovery-target-lsn或--recovery-target-xid一起使用。

### **留存相关参数\(retention\_options\)**

>![](public_sys-resources/icon-note.png) **说明：** 
>可以和backup和delete命令一起使用这些参数。

-   --retention-redundancy=_retention-redundancy_

    指定在数据目录中留存的完整备份数。必须为正整数。0表示禁用此设置。

    默认值：0

-   --retention-window=_retention-window_

    指定留存的天数。必须为正整数。0表示禁用此设置。

    默认值：0

-   --wal-depth=_wal-depth_

    每个时间轴上必须留存的执行PITR能力的最新有效备份数。必须为正整数。0表示禁用此设置。

    默认值：0

-   --delete-wal

    从任何现有的备份中删除不需要的WAL文件。

-   --delete-expired

    删除不符合pg\_probackup.conf配置文件中定义的留存策略的备份。

-   --merge-expired

    将满足留存策略要求的最旧的增量备份与其已过期的父备份合并。

-   --dry-run

    显示所有可用备份的当前状态，不删除或合并过期备份。

### **固定备份相关参数\(pinning\_options\)**

>![](public_sys-resources/icon-note.png) **说明：** 
>如果要将某些备份从已建立的留存策略中排除，可以和backup和set-backup命令一起使用这些参数。

-   --ttl=_interval_

    指定从恢复时间开始计算，备份要固定的时间量。必须为正整数。0表示取消备份固定。

    支持的单位：ms、 s、 min、 h、 d（默认为s）。

    例如：--ttl=30d。

-   --expire-time=_time_

    指定备份固定失效的时间戳。必须是ISO-8601标准的时间戳。需要和留存相关参数配合使用。

    例如：--expire-time='2020-01-01 00:00:00+03'

### **日志相关参数\(logging\_options\)**

日志级别：verbose、log、info、warning、error和off。

-   --log-level-console=_log-level-console_

    设置要发送到控制台的日志级别。每个级别都包含其后的所有级别。级别越高，发送的消息越少。指定off级别表示禁用控制台日志记录。

    默认值：info

-   --log-level-file=_log-level-file_

    设置要发送到日志文件的日志级别。每个级别都包含其后的所有级别。级别越高，发送的消息越少。指定off级别表示禁用日志文件记录。

    默认值：off

-   --log-filename=_log-filename_

    指定要创建的日志文件的文件名。文件名可以使用strftime模式，因此可以使用%-escapes指定随时间变化的文件名。

    例如，如果指定了“pg\_probackup-%u.log”模式，则pg\_probackup为每周的每一天生成单独的日志文件，其中%u替换为相应的十进制数字，即pg\_probackup-1.log表示星期一；pg\_probackup-2.log表示星期二，以此类推。

    如果指定了--log-level-file参数启用日志文件记录，则该参数有效。

    默认值：“pg\_probackup.log”

-   --error-log-filename=_error-log-filename_

    指定仅用于error日志的日志文件名。指定方式与--log-filename参数相同。

    此参数用于故障排除和监视。

-   --log-directory=_log-directory_

    指定创建日志文件的目录。必须是绝对路径。此目录会在写入第一条日志时创建。

    默认值：$BACKUP\_PATH/log

-   --log-rotation-size=_log-rotation-size_

    指定单个日志文件的最大大小。如果达到此值，则启动gs\_probackup命令后，日志文件将循环，但help和version命令除外。0表示禁用基于文件大小的循环。

    支持的单位：KB、MB、GB、TB（默认为KB）。

    默认值：0

-   --log-rotation-age=_log-rotation-age_

    单个日志文件的最大生命周期。如果达到此值，则启动gs\_probackup命令后，日志文件将循环，但help和version命令除外。$BACKUP\_PATH/log/log\_rotation目录下保存最后一次创建日志文件的时间。0表示禁用基于时间的循环。

    支持的单位：ms、 s、 min、 h、 d（默认为min）。

    默认值：0

### **连接相关参数\(connection\_options\)**

>![](public_sys-resources/icon-note.png) **说明：** 
>可以和backup命令一起使用这些参数。

-   -d  _dbname_, --pgdatabase=_dbname_

    指定要连接的数据库名称。该连接仅用于管理备份进程，因此您可以连接到任何现有的数据库。如果命令行、PGDATABASE环境变量或pg\_probackup.conf配置文件中没有指定此参数，则gs\_probackup会尝试从PGUSER环境变量中获取该值。如果未设置PGUSER变量，则从当前用户名获取。

    系统环境变量：$PGDATABASE

-   -h  _hostname_, --pghost=_hostname_

    指定运行服务器的系统的主机名。如果该值以斜杠开头，则被用作到Unix域套接字的路径。

    系统环境变量：$PGHOST

    默认值：local socket

-   -p  _port_, --pgport=_p__ort_

    指定服务器正在侦听连接的TCP端口或本地Unix域套接字文件扩展名。

    系统环境变量：$PGPORT

    默认值：5432

-   -U  _username_, --pguser=_username_

    指定所连接主机的用户名。

    系统环境变量：$PGUSER

-   -w, --no-password

    不出现输入密码提示。如果主机要求密码认证并且密码没有通过其它形式给出，则连接尝试将会失败。 该选项在批量工作和不存在用户输入密码的脚本中很有帮助。

-   -W  _password_, --password=_password_

    指定用户连接的密码。如果主机的认证策略是trust，则不会对系统管理员进行密码验证，即无需输入-W选项；如果没有-W选项，并且不是系统管理员，则会提示用户输入密码。

### **压缩相关参数\(compression\_options\)**

>![](public_sys-resources/icon-note.png) **说明：** 
>可以和backup命令一起使用这些参数。

-   --compress-algorithm=_compress-algorithm_

    指定用于压缩数据文件的算法。

    取值包括zlib、pglz和none。如果设置为zlib或pglz，此选项将启用压缩。默认情况下，压缩功能处于关闭状态。

    默认值：none

-   --compress-level=_compress-level_

    指定压缩级别。取值范围：0\~9

    -   0表示无压缩。
    -   1表示压缩比最小，处理速度最快。
    -   9表示压缩比最大，处理速度最慢。
    -   可与--compress-algorithm选项一起使用。

    默认值：1

-   --compress

    以--compress-algorithm=zlib和--compress-level=1进行压缩。

### **远程模式相关参数\(remote\_options\)**

>![](public_sys-resources/icon-note.png) **说明：** 
>通过SSH远程运行gs\_probackup操作的相关参数。可以和add-instance、set-config、backup、restore命令一起使用这些参数。

-   --remote-proto=_protocol_

    指定用于远程操作的协议。目前只支持SSH协议。取值包括：

    ssh：通过SSH启用远程备份模式。这是默认值。

    none：显式禁用远程模式。

    如果指定了--remote-host参数，可以省略此参数。

-   --remote-host=_destination_

    指定要连接的远程主机的IP地址或主机名。

-   --remote-port=_port_

    指定要连接的远程主机的端口号。

    默认值：22

-   --remote-user=_username_

    指定SSH连接的远程主机用户。如果省略此参数，则使用当前发起SSH连接的用户。

    默认值：当前用户

-   --remote-path=_path_

    指定gs\_probackup在远程系统的安装目录。

    默认值：当前路径

-   --remote-libpath=_libpath_

    指定gs\_probackup在远程系统安装的lib库目录。

- --ssh-options=_ssh\_options_

  指定SSH命令行参数的字符串。

  例如：--ssh-options='-c cipher\_spec -F configfile'

  >![](public_sys-resources/icon-note.png) **说明：** 
  >
  >
  >
  >- 如果因为网络临时故障等原因导致server端无应答,gs\_probackup将在等待archive-timeout（默认300秒）后退出。
  >
  >- 如果备机lsn与主机有差别时，数据库会不停地刷以下log信息，此时应重新build备机。
  >
  >
  >```
  >LOG: walsender thread shut down
  >LOG: walsender thread started
  >LOG: received wal replication command: IDENTIFY_VERSION
  >LOG: received wal replication command: IDENTIFY_MODE
  >LOG: received wal replication command: IDENTIFY_SYSTEM
  >LOG: received wal replication command: IDENTIFY_CONSISTENCE 0/D0002D8
  >LOG: remote request lsn/crc: [xxxxx] local max lsn/crc: [xxxxx]
  >```


## 备份指令执行顺序（非资源池化模式）<a name="zh-cn_topic_0287276008_section1735727125216"></a>

1.  初始化备份目录。在指定的目录下创建backups/和wal/子目录，分别用于存放备份文件和WAL文件。

    ```
    gs_probackup init -B backup-path
    ```

2.  添加一个新的备份实例。gs\_probackup可以在同一个备份目录下存放多个数据库实例的备份。

    ```
    gs_probackup add-instance -B backup-path -D pgdata-path --instance instance_name
    ```

3.  创建指定实例的备份。在进行增量备份之前，必须至少创建一次全量备份。

    ```
    gs_probackup backup -B backup-path --instance instance_name -b backup_mode
    ```

4.  从指定实例的备份中恢复数据。

    ```
    gs_probackup restore -B backup-path --instance instance_name -D pgdata-path -i backup_id
    ```


## cm工具管理集群全量备份恢复流程（资源池化模式）

1. 初始化备份目录。

   ```
   gs_probackup init -B backup-path
   ```
   **说明：** backup-path为用户指定的备份目录。

2. 添加一个新的备份实例。

   ```
   gs_probackup add-instance -B backup-path -D pgdata-path --instance instance_name --enable-dss --instance-id node_id --vgname="vgdata,vglog" --socketpath=socket_domain
   ```
   **说明：** pgdata-path为数据库在文件系统中的数据目录，instance_name为用户指定的备份实例名，--enable-dss参数代表所添加的备份实例对应的数据库为资源池化模式，node_id为所备份数据库集群的主机节点id，vgdata和vglog分别代表资源池化的数据目录和主机在磁阵中的日志目录(例如--vgname="+data,+p0",其中+data为资源池化的数据目录，+p0为主机在磁阵中的日志目录)，socket_domain为dss实例进程使用的socket文件路径，仅支持绝对路径。

3. 创建指定实例的备份，对主机进行备份。在进行增量备份之前，必须至少创建一次全量备份。

   ```
   gs_probackup backup -B backup-path --instance instance_name -b backup_mode -d db_name -p port
   ```
   **说明：** 此操作与非资源池化模式相同。

4. 执行cm_ctl stop关闭集群。

   ```
   cm_ctl stop
   ```

5. 使用dd命令清空磁阵（清空磁阵前2M内容磁阵便可以被清空）。

   ```
   dd if=/dev/zero of=/dev/disk_name bs=2048 count=1000 > /dev/null 2>&1

   示例：
   假如当前dss_vg_conf.ini文件的内容如下（环境为一主一备）：
   data:/dev/user_dss_shared
   p0:/dev/user_dss_private_0
   p2:/dev/user_dss_private_1
   对应清空磁阵操作如下：
   dd if=/dev/zero of=/dev/user_dss_shared bs=2048 count=1000 > /dev/null 2>&1
   dd if=/dev/zero of=/dev/user_dss_private_0 bs=2048 count=1000 > /dev/null 2>&1
   dd if=/dev/zero of=/dev/user_dss_private_1 bs=2048 count=1000 > /dev/null 2>&1
   ```
   **说明：** of后面的参数可以进入$DSS_HOME的cfg目录，在dss_vg_conf.ini文件中查看每个卷对应磁盘，这里需要清空该文件中的所有主备对应的数据和日志磁盘。

6. 使用dsscmd cv命令建卷。

   ```
   dsscmd cv -g data -v /dev/disk_name -D $DSS_HOME

   示例：
   假如当前dss_vg_conf.ini文件的内容如下（环境为一主一备）：
   data:/dev/user_dss_shared
   p0:/dev/user_dss_private_0
   p2:/dev/user_dss_private_1
   对应建卷操作如下：
   dsscmd cv -g data -v /dev/user_dss_shared -D $DSS_HOME
   dsscmd cv -g p0 -v /dev/user_dss_private_0 -D $DSS_HOME
   dsscmd cv -g p2 -v /dev/user_dss_private_1 -D $DSS_HOME
   ```
   **说明：** -v后面的参数是每个卷对应磁盘，在dss_vg_conf.ini文件中查看。

7. 将主机的dn目录中的如下文件拷贝出来（当要恢复的集群相对于备份来讲重新安装过或者不是原来的集群，需要执行该操作，否则跳过）。

   ```
   cacert.pem server.crt server.key server.key.cipher server.key.rand
   ```
   **说明：** 当要恢复的集群相对于备份来讲重新安装过或者不是原来的集群时，集群之间用于认证的证书会发生变化，因此需要将当前集群的拷贝下来防止恢复后被备份文件中的证书覆盖导致无法和备机通信。

8. 清空主机的dn目录，启动dssserver。

   ```
   rm -rf primary_dir/*
   dssserver -D $DSS_HOME &
   ```

9. 在主机执行恢复操作。

   ```
   gs_probackup restore -B backup-path --instance instance_name -D pgdata-path -i backup_id
   ```

10. 当要恢复的集群相对于备份来讲重新安装过或者不是原来的集群时，将步骤7拷贝的的文件覆盖到恢复的主机dn目录，否则跳过。

11. 将备机的dn目录进行拷贝，在步骤14会用到。

12. 清空备机的dn目录，启动dssserver。

    ```
    rm -rf standby_dir/*
    dssserver -D $DSS_HOME &
    ```

13. 在备机执行初始化操作。
    
    ```
    gs_initdb --locale=LOCALE -D pgdata-path --nodename=NODENAME -C DIR -n --vgname="vgdata,vglog" --enable-dss --dms_url="node0_id:ip0:dms0_port,..." -I node_id --socketpath=socket_domain
    ```
    **说明：** 可以在备机的om日志目录下执行grep gs_initdb *来查找该命令的历史执行然后直接复制,无需用户自己去指定对应参数。

14. 用步骤11中拷贝的dn目录覆盖初始化完毕后备机生成的dn目录。

15. 在主机启动集群。

    ```
    cm_ctl start
    ```



## 故障处理<a name="section1494010372368"></a>

<a name="table580714103714"></a>
<table><thead align="left"><tr id="row1881191415371"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p88111145376"><a name="p88111145376"></a><a name="p88111145376"></a>问题描述</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p3811314113715"><a name="p3811314113715"></a><a name="p3811314113715"></a>原因和解决方案</p>
</th>
</tr>
</thead>
<tbody><tr id="row128119141370"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1137341385614"><a name="p1137341385614"></a><a name="p1137341385614"></a>ERROR: query failed: ERROR: canceling statement due to conflict with recovery</p>
<p id="p3250176192018"><a name="p3250176192018"></a><a name="p3250176192018"></a>（错误：查询失败：由于与恢复操作冲突，正在取消语句命令）</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1177019484135"><a name="p1177019484135"></a><a name="p1177019484135"></a>原因：在备机上执行的操作正在访问存储行，主机上更改或者删除了对应的行，并将xlog在备机上重放，迫使备机上操作取消。</p>
<p id="p1694692172319"><a name="p1694692172319"></a><a name="p1694692172319"></a>解决方案：</p>
<p id="p237491316569"><a name="p237491316569"></a><a name="p237491316569"></a>1. 适当增加如下配置参数的值</p>
<p id="p3696105218208"><a name="p3696105218208"></a><a name="p3696105218208"></a>max_standby_archive_delay</p>
<p id="p9696105215208"><a name="p9696105215208"></a><a name="p9696105215208"></a>max_standby_streaming_delay</p>
<p id="p317036192310"><a name="p317036192310"></a><a name="p317036192310"></a>2. 增加如下配置</p>
<p id="p1286010362416"><a name="p1286010362416"></a><a name="p1286010362416"></a>hot_standby_feedback = on</p>
</td>
</tr>
</tbody>
</table>
