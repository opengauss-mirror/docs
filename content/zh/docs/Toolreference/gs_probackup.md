# gs\_probackup<a name="ZH-CN_TOPIC_0282080143"></a>

## 背景信息<a name="section779474172017"></a>

gs\_probackup是一个用于管理openGauss数据库备份和恢复的工具。它对openGauss实例进行定期备份，以便在数据库出现故障时能够恢复服务器。

-   可用于备份单机数据库或者集群主节点数据库，为物理备份。
-   可备份外部目录的内容，如脚本文件、配置文件、日志文件、dump文件等。
-   支持增量备份、定期备份和远程备份。
-   可设置备份的留存策略。

## 前提条件<a name="section95951827112520"></a>

-   可以正常连接openGauss数据库。
-   在postgresql.conf中手动添加参数“enable\_cbm\_tracking = on”。

## 限制说明<a name="section6439171332614"></a>

-   备份必须由运行数据库服务器的用户执行。例如，数据库服务器由用户postgres运行，则备份必须由用户postgres执行。如果是通过ssh在远程模式下执行备份，--remote-user参数的值应为postgres。
-   备份和恢复的数据库服务器的主版本号必须相同。
-   如果要通过ssh在远程模式下备份数据库，需要在本地和远程主机安装相同主版本的数据库，并通过ssh-copy-id remote\_user@remote\_host命令设置本地主机备份用户和远程主机数据库用户的无密码ssh连接。
-   远程模式下只能执行add-instance、backup、restore子命令。

## 命令说明<a name="section86861610172816"></a>

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

-   初始化备份路径backup\_dir中的备份目录，该目录将存储已备份的内容。如果备份路径backup\_dir已存在，则backup\_dir必须为空目录。

    ```
    gs_probackup init -B backup_dir [--help]
    ```

-   在备份路径backup\_dir内初始化一个新的备份实例，并生成pg\_probackup.conf配置文件，该文件保存了指定数据目录data\_dir的gs\_probackup设置。

    ```
    gs_probackup add-instance -B backup_dir -D data_dir --instance=instance_name
    [--help] [-E external-directory-path]
    [remote_options]
    ```

-   在备份路径backup\_dir内删除指定实例相关的备份内容。

    ```
    gs_probackup del-instance -B backup_dir --instance=instance_name
    [--help]
    ```

-   将指定的连接、压缩、冗余、日志相关设置和外部目录设置添加到pg\_probackup.conf配置文件中，或修改已设置的值。不推荐手动编辑pg\_probackup.conf配置文件。

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

-   将备份相关设置添加到backup.control配置文件中，或修改已设置的值。

    ```
    gs_probackup set-backup -B backup_dir --instance instance_name -i backup_id
    {--ttl=ttl | --expire-time=time} [--help]
    ```

-   显示位于“backup\_dir/backups/instance\_name”目录中的pg\_probackup.conf配置文件的内容。可以通过指定--format=json选项，以json格式显示。默认情况下，显示为纯文本格式。

    ```
    gs_probackup show-config -B backup_dir –instance=instance_name
    [--format =plain|json]
    ```

-   显示备份目录的内容。如果指定了instance\_name和backup\_id，则显示该备份的详细信息。可以通过指定--format=json选项，以json格式显示。默认情况下，备份目录的内容显示为纯文本格式。

    ```
    gs_probackup show -B backup_dir
    [--help] [--instance=instance_name] [-i backup_id] [--format=plain|json]
    ```

-   创建指定实例的备份。backup\_mode选项指定要使用的备份模式。

    ```
    gs_probackup backup -B backup_dir -b backup_mode --instance=instance_name
    [--help] [-D pgdata-path] [-C] [--stream [-S slot_name] [--temp-slot]]
    [--backup-pg-log] [-j num_threads] [--progress]
    [--no-validate] [--skip-block-validation]
    [-E external_directory_path] [--no-sync] [--note=text]
    [connection_options] [compression_options] [remote_options]
    [retention_options] [pinning_options] [logging_options]
    ```

-   从备份目录backup\_dir中的备份副本恢复指定实例。如果指定了恢复目标选项， pg\_probackup将查找最近的备份并将其还原到指定的恢复目标。否则，使用最近一次备份。

    ```
    gs_probackup restore -B backup_dir --instance instance_name
    [--help] [-D data_dir] [-i backup_id] [-j num_threads] [--progress]
    [-T OLDDIR=NEWDIR] [--external-mapping=OLDDIR=NEWDIR] [--skip-external-dirs] [-I incremental_mode]
    [-R | --restore-as-replica] [--no-validate] [--skip-block-validation] [--force]
    [--restore-command=cmdline]
    [recovery_options] [logging_options] [remote_options]
    ```

-   将指定的增量备份与其父完全备份之间的所有增量备份合并到父完全备份。父完全备份将接收所有合并的数据，而已合并的增量备份将作为冗余被删除。

    ```
    gs_probackup merge -B backup_dir --instance instance_name -i backup_id
    [--help] [-j num_threads] [--progress]
    [logging_options]
    ```

-   删除指定backup\_id的备份，或删除不满足当前保留策略的备份和归档WAL。

    ```
    gs_probackup delete -B backup_dir --instance instance_name
    [--help] [-j num_threads] [--progress]
    [--retention-redundancy=redundancy][--retention-window=window]
    [-i backup-id | --delete-expired | --merge-expired | --status=backup_status]
    [--delete-wal] [--dry-run]
    [logging_options]
    ```


## 参数说明<a name="section520716591338"></a>

**通用参数**

-   command

    gs\_probackup除version和help以外的子命令：init、add-instance、del-instance、set-config、set-backup、show-config、show、backup、restore、merge、delete。

-   -?, --help

    显示gs\_probackup命令行参数的帮助信息，然后退出。

    子命令中只能使用--help，不能使用-?。

-   -V, --version

    打印gs\_probackup版本，然后退出。

-   -B backup\_dir, --backup-path=backup\_dir

    备份的路径。

    系统环境变量：$BACKUP\_PATH

-   -D data\_dir, --pgdata=data\_dir

    数据目录的路径。

    系统环境变量：$PGDATA

-   --instance=instance\_name

    实例名。

-   -i id, --backup-id=id

    备份的唯一标识。

-   -j num\_threads, --threads=num\_threads

    设置备份、还原、合并进程的并行线程数。

-   --progress

    显示进度。

-   --note=text

    给备份添加note。


**backup参数**

-   -b mode, --backup-mode=mode

    指定备份模式，支持FULL和PTRACK。

    FULL：创建全量备份，全量备份包含所有数据文件。

    PTRACK：创建PTRACK增量备份。

-   -C, --smooth-checkpoint

    将检查点在一段时间内展开。默认情况下，gs\_probackup会尝试尽快完成检查点。

-   --stream

    从数据库服务器通过stream流处理形式传输文件，生成包括所有必需的WAL文件的STREAM备份。

-   --temp-slot

    在备份的实例中为WAL流处理创建一个临时物理复制slot，它确保在备份过程中，所有所需的WAL段仍然是可用的。此参数只能与--stream参数一起使用。默认的slot名为pg\_probackup\_slot，可通过选项--slot/-S更改。

-   -S slot\_name, --slot=slot\_name

    指定WAL流处理的复制slot。此参数只能与--stream参数一起使用。

-   --backup-pg-log

    将日志目录包含到备份中。此目录通常包含日志消息。默认情况下不包含日志目录。

-   -E external\_directory\_path, --external-dirs=external\_directory\_path

    将指定的目录包含到备份中。此选项对于备份位于数据目录外部的脚本、sql转储和配置文件很有用。如果要备份多个外部目录，请在Unix上用冒号分隔它们的路径。

-   --skip-block-validation

    关闭块级校验，加快备份速度。

-   --no-validate

    在完成备份后跳过自动验证。

-   --no-sync

    不将备份文件同步到磁盘。


**restore参数**

-   -I, --incremental-mode=none|lsn

    若PGDATA中可用的有效页没有修改，则重新使用它们。

    默认值：none

-   -T OLDDIR=NEWDIR, --tablespace-mapping=OLDDIR=NEWDIR

    在恢复时，将表空间从OLDDIR重新定位到NEWDIR目录。OLDDIR和NEWDIR必须都是绝对路径。如果路径中包含“=”，则使用反斜杠转义。多个表空间可以多次指定此选项。

-   --skip-external-dirs

    跳过备份中包含的使用--external-dirs选项指定的外部目录。这些目录的内容将不会被恢复。

-   --skip-block-validation

    跳过块级校验，以加快验证速度。在恢复之前的自动验证期间，将仅做文件级别的校验。

-   --no-validate

    跳过备份验证。

-   --restore-command=cmdline

    指定恢复相关的命令。例如：--restore-command='cp /mnt/server/archivedir/%f "%p"'

-   --force

    允许忽略备份的无效状态。如果出于某种原因需要从损坏的或无效的备份中恢复数据，可以使用此标志。请谨慎使用。


**恢复目标参数**

 ![](public_sys-resources/icon-note.gif) **说明：**

 如果配置了连续的WAL归档，则可以和restore命令一起使用这些参数。

-   --recovery-target=immediate|latest

    定义何时停止恢复。

    immediate：当达到指定备份的一致性状态后，停止恢复；如果省略-i/--backup\_id参数，则恢复到最新的可用的备份之后，停止恢复。

    latest：持续进行恢复，直到应用了所有存档中的所有可用的WAL段。

    --recovery-target的默认值取决于要恢复的备份的WAL传输方式，STREAM流备份为immediate，归档模式为latest。

-   --recovery-target-timeline=timeline

    指定要恢复到的timeline。缺省情况下，使用指定备份的timeline。

-   --recovery-target-lsn=lsn

    指定要恢复到的lsn。

-   --recovery-target-name=recovery\_target\_name

    指定要将数据恢复到的已命名的保存点。

-   --recovery-target-time=time

    指定要恢复到的时间

-   --recovery-target-xid=xid

    指定要恢复到的事务ID

-   --recovery-target-inclusive=boolean

    当该参数指定为true时，恢复目标将包括指定的内容。

    当该参数指定为false时，恢复目标将不包括指定的内容。

    该参数必须和--recovery-target-name、--recovery-target-time、--recovery-target-lsn或--recovery-target-xid一起使用。

-   --recovery-target-action=pause|promote|shutdown

    指定恢复至目标时，服务器应执行的操作。


**留存参数**

 ![](public_sys-resources/icon-note.gif) **说明：** 

 可以和backup和delete命令一起使用这些参数。

-   --retention-redundancy=redundancy

    指定在数据目录中留存的完整备份数。必须为正整数。0表示禁用此设置。

    默认值：0

-   --retention-window=window

    指定留存的天数。必须为正整数。0表示禁用此设置。

    默认值：0

-   --wal-depth=wal\_depth

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


**固定备份参数**

 ![](public_sys-resources/icon-note.gif) **说明：** 

 如果要将某些备份从已建立的留存策略中排除，可以和backup和set-backup命令一起使用这些参数。

-   --ttl=ttl

    指定从恢复时间开始计算，备份要固定的时间量。必须为正整数。0表示取消备份固定。

    支持的单位：ms, s, min, h, d（默认为s）。

    例如：--ttl=30d。

-   --expire-time=time

    指定备份固定失效的时间戳。必须是ISO-8601标准的时间戳。

    例如：--expire-time='2020-01-01 00:00:00+03'


**日志参数**

日志级别：verbose、log、info、warning、error和off。

-   --log-level-console=log\_level

    设置要发送到控制台的日志级别。每个级别都包含其后的所有级别。级别越高，发送的消息越少。指定off级别表示禁用控制台日志记录。

    默认值：info

-   --log-level-file=log\_level

    设置要发送到日志文件的日志级别。每个级别都包含其后的所有级别。级别越高，发送的消息越少。指定off级别表示禁用日志文件记录。

-   --log-filename=log\_filename

    指定要创建的日志文件的文件名。文件名可以使用strftime模式，因此可以使用%-escapes指定随时间变化的文件名。

    例如，如果指定了“pg\_probackup-%u.log”模式，则pg\_probackup为每周的每一天生成单独的日志文件，其中%u替换为相应的十进制数字，即pg\_probackup-1.log表示星期一；pg\_probackup-2.log表示星期二，以此类推。

    如果指定了--log-level-file参数启用日志文件记录，则该参数有效。

    默认值：pg\_probackup.log

-   --error-log-filename=error\_log\_filename

    指定仅用于error日志的日志文件名。指定方式与--log-filename参数相同。

    此参数用于故障排除和监视。

-   --log-directory=log\_directory

    指定创建日志文件的目录。必须是绝对路径。此目录会在写入第一条日志时创建。

    默认值：$BACKUP\_PATH/log/

-   --log-rotation-size=log\_rotation\_size

    指定单个日志文件的最大大小。如果达到此值，则启动gs\_probackup命令后，日志文件将循环，但help和version命令除外。0表示禁用基于文件大小的循环。

    支持的单位：KB、MB、GB、TB（默认为KB）。

    默认值：0

-   --log-rotation-age=log\_rotation\_age

    单个日志文件的最大生命周期。如果达到此值，则启动gs\_probackup命令后，日志文件将循环，但help和version命令除外。$BACKUP\_PATH/log/log\_rotation目录下保存最后一次创建日志文件的时间。0表示禁用基于时间的循环。

    支持的单位：ms, s, min, h, d（默认为min）。

    默认值：0


**连接参数**

 ![](public_sys-resources/icon-note.gif) **说明：** 

 可以和backup命令一起使用这些参数。

-   -d dbname, --pgdatabase=dbname

    指定要连接的数据库名称。该连接仅用于管理备份进程，因此您可以连接到任何现有的数据库。如果命令行、PGDATABASE环境变量或pg\_probackup.conf配置文件中没有指定此参数，则gs\_probackup会尝试从PGUSER环境变量中获取该值。如果未设置PGUSER变量，则从当前用户名获取。

    系统环境变量：$PGDATABASE

-   -h host, --pghost=host

    指定运行服务器的系统的主机名。如果该值以斜杠开头，则被用作到Unix域套接字的路径。

    系统环境变量：$PGHOST

    默认值：local socket

-   -p port, --pgport=port

    指定服务器正在侦听连接的TCP端口或本地Unix域套接字文件扩展名。

    系统环境变量：$PGPORT

    默认值：5432

-   -U username, --pguser=username

    指定所连接主机的用户名。

    系统环境变量：$PGUSER

-   -w, --no-password

    不出现输入密码提示。如果主机要求密码认证并且密码没有通过其它形式给出，则连接尝试将会失败。 该选项在批量工作和不存在用户输入密码的脚本中很有帮助。

-   -W, --password

    强制出现输入密码提示。


**压缩参数**

 ![](public_sys-resources/icon-note.gif) **说明：** 

 可以和backup命令一起使用这些参数。

-   --compress-algorithm=compression\_algorithm

    指定用于压缩数据文件的算法。取值包括zlib、pglz和none。如果设置为zlib或pglz，此选项将启用压缩。默认情况下，压缩功能处于关闭状态。

    默认值：none

-   --compress-level=compression\_level

    指定压缩级别。取值范围：0~9

    -   0表示无压缩。
    -   1表示压缩比最小，处理速度最快。
    -   9表示压缩比最大，处理速度最慢。
    -   可与--compress-algorithm选项一起使用。

    默认值：1

-   --compress

    以--compress-algorithm=zlib和--compress-level=1进行压缩。


**远程模式参数**

 ![](public_sys-resources/icon-note.gif) **说明：** 

 通过SSH远程运行gs\_probackup操作的相关参数。可以和add-instance、set-config、backup、restore命令一起使用这些参数。

-   --remote-proto=proto

    指定用于远程操作的协议。目前只支持SSH协议。取值包括：

    ssh：通过SSH启用远程备份模式。这是默认值。

    none：显式禁用远程模式。

    如果指定了--remote-host参数，可以省略此参数。

-   --remote-host=destination

    指定要连接的远程主机的IP地址或主机名。

-   --remote-port=port

    指定要连接的远程主机的端口号。

    默认值：22

-   --remote-user=username

    指定SSH连接的远程主机用户。如果省略此参数，则使用当前发起SSH连接的用户。

    默认值：当前用户

-   --remote-path=path

    指定gs\_probackup在远程系统的安装目录。

-   --ssh-options=ssh\_options

    指定SSH命令行参数的字符串。


## 备份流程<a name="section1735727125216"></a>

1.初始化备份目录。在指定的目录下创建backups/和wal/子目录，分别用于存放备份文件和WAL文件。

    gs_probackup init -B backup_dir

2.添加一个新的备份实例。gs\_probackup可以在同一个备份目录下存放多个数据库实例的备份。

    gs_probackup add-instance -B backup_dir -D data_dir --instance instance_name [remote_options]

3.创建指定实例的备份。在进行增量备份之前，必须至少创建一次全量备份。

    gs_probackup backup -B backup_dir --instance instance_name -b backup_mode

4.从指定实例的备份中恢复数据。

    gs_probackup restore -B backup_dir --instance instance_name -i backup_id



