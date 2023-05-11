# gs\_basebackup

## 背景信息<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_section48401199395"></a>

openGauss部署成功后，在数据库运行的过程中，会遇到各种问题及异常状态。openGauss提供了gs\_basebackup工具做基础的物理备份。gs\_basebackup的实现目标是对服务器数据库文件的二进制进行拷贝，其实现原理使用了复制协议。远程执行gs\_basebackup时，需要使用系统管理员账户。gs\_basebackup当前支持热备份模式和压缩格式备份模式。

>![](public_sys-resources/icon-note.png) **说明：** 

>-   gs\_basebackup仅支持主机和备机的全量备份，不支持增量。
>-   gs\_basebackup当前支持热备份模式和压缩格式备份模式。
>-   若打开增量检测点功能且打开双写，gs\_basebackup也会备份双写文件。
>-   gs\_basebackup在备份包含绝对路径的表空间时，如果在同一台机器上进行备份，可以通过tablespace-mapping重定向表空间路径或使用归档模式进行备份。
>-   若pg\_xlog目录为软链接，备份时将不会建立软链接，会直接将数据备份到目的路径的pg\_xlog目录下。
>-   备份过程中收回用户备份权限，可能导致备份失败或者备份数据不可用。
>-   如果因为网络临时故障等原因导致Server端无法应答，gs\_basebackup将在最长等待120秒后退出。

## 前提条件<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_s9649938409774ccdbc6993a90ccb777a"></a>

-   可以正常连接openGauss数据库。
-   备份过程中用户权限没有被回收。
-   pg\_hba.conf中需要配置允许复制链接，且该连接必须由一个系统管理员建立。
-   如果xlog传输模式为stream模式，需要配置max\_wal\_senders的数量，至少有一个可用。
-   如果xlog传输模式为fetch模式，有必要把wal_keep_segments参数设置得足够高，这样在备份末尾之前日志不会被移除。
-   在进行还原时，需要保证各节点备份目录中存在备份文件，若备份文件丢失，则需要从其他节点进行拷贝。

## 语法<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_sa0c0a7aa3d4042fd81017d22ca1e8cac"></a>

-   显示帮助信息

    ```
    gs_basebackup -? | --help
    ```

-   显示版本号信息

    ```
    gs_basebackup -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_s2fa71feeaad041f293de868e52bb5907"></a>

gs\_basebackup参数可以分为如下几类：

-   -D directory

    备份文件输出的目录，必选项，备份目录需提前创建。


-   常用参数：
    -   -c，--checkpoint=fast|spread

        设置检查点模式为fast或者spread（默认）。

    -   -l，--label=LABEL

        为备份设置标签。

    -   -P，--progress

        启用进展报告。

    -   -v， --verbose

        启用冗长模式。

    -   -V， --version

        打印版本后退出。

    -   -?，--help

        显示gs\_basebackup命令行参数。

    -   -T，--tablespace-mapping=olddir=newdir

        在备份期间将目录olddir中的表空间重定位到newdir中。为使之有效，olddir必须正好匹配表空间所在的路径（但如果备份中没有包含olddir中的表空间也不是错误）。olddir和newdir必须是绝对路径。如果一个路径凑巧包含了一个=符号，可用反斜线对它转义。对于多个表空间可以多次使用这个选项。

    -   -F，--format=plain|tar

        设置输出格式为plain（默认）或者tar。没有设置该参数的情况下，默认--format=plain。plain格式把输出写成平面文件，使用和当前数据目录和表空间相同的布局。当集簇没有额外表空间时，整个数据库将被放在目标目录中。如果集簇包含额外的表空间，主数据目录将被放置在目标目录中，但是所有其他表空间将被放在它们位于服务器上的相同的绝对路径中。tar模式将输出写成目标目录中的 tar 文件。主数据目录将被写入到一个名为base.tar的文件中，并且其他表空间将被以其 OID 命名。生成的tar包，需要用gs_tar命令解压。

    -   -X， --xlog-method=fetch|stream

        设置xlog传输方式。没有设置该参数的情况下，默认--xlog-method=stream。在备份中包括所需的预写式日志文件（WAL文件）。这包括所有在备份期间产生的预写式日志。fetch方式在备份末尾收集预写式日志文件。因此，有必要把wal_keep_segments参数设置得足够高，这样在备份末尾之前日志不会被移除。如果在要传输日志时它已经被轮转，备份将失败并且是不可用的。stream方式在备份被创建时流传送预写式日志。这将开启一个到服务器的第二连接并且在运行备份时并行开始流传输预写式日志。因此，它将使用最多两个由max_wal_senders参数配置的连接。只要客户端能保持接收预写式日志，使用这种模式不需要在主控机上保存额外的预写式日志。

    -   -x，--xlog
        使用这个选项等效于和方法fetch一起使用-X。

    -   -Z --compress=level

        启用对 tar 文件输出的 gzip 压缩，并且制定压缩级别（0 到 9，0 是不压缩，9 是最佳压缩）。只有使用 tar 格式时压缩才可用，并且会在所有tar文件名后面自动加上后缀.gz。

    -   -z

        启用对 tar 文件输出的 gzip 压缩，使用默认的压缩级别。只有使用 tar 格式时压缩才可用，并且会在所有tar文件名后面自动加上后缀.gz。
        
    -   -t，–rw-timeout
    
        设置备份期间checkpoint的时间限制，默认限制时间为120s。当数据库全量checkpoint耗时较长时，可以适当增大rw-timeout限制时间。



-   连接参数
    -   -h, --host=HOSTNAME

        指定正在运行服务器的主机名或者Unix域套接字的路径。

    -   -p，--port=PORT

        指定数据库服务器的端口号。

        可以通过port参数修改默认端口号。

    -   -U，--username=USERNAME

        指定连接数据库的用户。

    -   -s, --status-interval=INTERVAL

        发送到服务器的状态包的时间（以秒为单位）。

    -   -w,--no-password

        不出现输入密码提示。

    -   -W, --password

        当使用-U参数连接本地数据库或者连接远端数据库时，可通过指定该选项出现输入密码提示。



## 示例<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_sdebe53579dba4bb8a7dad8e21dbcb342"></a>

```
gs_basebackup -D /home/test/trunk/install/data/backup -h 127.0.0.1 -p 21233
INFO:  The starting position of the xlog copy of the full build is: 0/1B800000. The slot minimum LSN is: 0/1B800000.
```

## 从备份文件恢复数据<a name="section161121221193110"></a>

当数据库发生故障时需要从备份文件进行恢复。因为gs\_basebackup是对数据库按二进制进行备份，因此恢复时可以直接拷贝替换原有的文件，或者直接在备份的库上启动数据库。

>![](public_sys-resources/icon-note.png) **说明：** 

>-   若当前数据库实例正在运行，直接从备份文件启动数据库可能会存在端口冲突，这时需要修改配置文件的port参数，或者在启动数据库时指定一下端口。
>-   若当前备份文件为主备数据库，可能需要修改一下主备之间的复制连接。即配置文件中的postgresql.conf中的replconninfo1、replconninfo2等。
>-   若配置文件postgresql.conf的参数data_directory打开且有配置，当使用备份目录启动数据库时候，data_directory和备份目录不同会导致启动失败。可以修改data_directory的值为新的数据目录，或者注释掉该参数。

若要在原库的地方恢复数据库，参考步骤如下：

1.  停止数据库服务器，具体操作请参见《数据库运维指南》。
2.  将原数据库和所有表空间复制到另外一个位置, 以备后面需要。
3.  清理原库中的所有或部分文件。
4.  使用数据库系统用户权限从备份中还原需要的数据库文件。
5.  若数据库中存在链接文件，需要修改使其链接到正确的文件。
6.  重启数据库服务器，并检查数据库内容，确保数据库已经恢复到所需的状态。

>![](public_sys-resources/icon-note.png) **说明：** 

>-   暂不支持备份文件增量恢复。
>-   恢复后需要检查数据库中的链接文件是否链接到正确的文件。

