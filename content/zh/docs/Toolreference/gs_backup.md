# gs\_backup<a name="ZH-CN_TOPIC_0249632295"></a>

## 背景信息<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_section48401199395"></a>

openGauss部署成功后，在数据库运行的过程中，会遇到各种问题及异常状态。openGauss提供了gs\_backup工具帮助openGauss备份、恢复重要数据、显示帮助信息和版本号信息。

## 前提条件<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_s9649938409774ccdbc6993a90ccb777a"></a>

-   可以正常连接openGauss数据库。
-   在进行还原时，需要保证各节点备份目录中存在备份文件，若备份文件丢失，则需要从其他节点进行拷贝（二进制文件需修改文件名中的节点名）。
-   需以操作系统用户omm执行gs\_backup命令。

## 语法<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_sa0c0a7aa3d4042fd81017d22ca1e8cac"></a>

-   备份数据库主机

    ```
    gs_backup -t backup --backup-dir=BACKUPDIR [-h HOSTNAME] [--parameter] [--binary] [--all] [-l LOGFILE]
    ```

-   恢复数据库主机

    ```
    gs_backup -t restore --backup-dir=BACKUPDIR [-h HOSTNAME] [--parameter] [--binary] [--all] [-l LOGFILE]
    ```

-   显示帮助信息

    ```
    gs_backup -? | --help
    ```

-   显示版本号信息

    ```
    gs_backup -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_s2fa71feeaad041f293de868e52bb5907"></a>

gs\_backup参数可以分为如下几类：

-   备份数据库主机参数：
    -   -h

        指定存储备份文件的主机名称。

        取值范围：主机名称。如果不指定主机名称，则分发到openGauss。

    -   --backup-dir=BACKUPDIR

        备份文件保存路径。

    -   --parameter

        备份参数文件，不指定--parameter、--binary、--all参数时默认只备份参数文件。

    -   --binary

        备份app目录下的二进制文件。

    -   --all

        备份app目录下的二进制文件、pg_hba.conf和postgsql.conf文件。

    -   -l

        指定日志文件及存放路径。

        默认值：$GAUSSLOG/om/gs\_backup-YYYY-MM-DD\_hhmmss.log


-   恢复数据库主机参数：
    -   -h

        指定需要恢复主机的名称。

        取值范围：主机名称。如果不指定主机，则恢复openGauss。

    -   --backup-dir=BACKUPDIR

        恢复文件提取路径。

    -   --parameter

        恢复参数文件，不指定--parameter、--binary、--all参数时默认只恢复参数文件。

    -   --binary

        恢复二进制文件。

    -   --all

        恢复二进制和参数文件。

    -   -l

        指定日志文件及存放路径。

        默认值：$GAUSSLOG/om/gs\_backup-YYYY-MM-DD\_hhmmss.log


-   其他参数：
    -   -?, --help

        显示帮助信息。

    -   -V, --version

        显示版本号信息。



## 示例<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_sdebe53579dba4bb8a7dad8e21dbcb342"></a>

-   使用gs\_backup脚本备份数据库主机。

    ```
    gs_backup -t backup --backup-dir=/opt/software/gaussdb/backup_dir -h plat1 --parameter
    Backing up openGauss.
    Parsing configuration files.
    Successfully parsed the configuration file.
    Performing remote backup.
    Remote backup succeeded.
    Successfully backed up openGauss.
    ```

-   使用gs\_backup脚本恢复数据库主机。

    ```
    gs_backup -t restore --backup-dir=/opt/software/gaussdb/backup_dir -h plat1 --parameter
    Restoring openGauss.
    Parsing the configuration file.
    Successfully parsed configuration files.
    Performing remote restoration.
    Remote restoration succeeded.
    Successfully restored openGauss.
    ```


