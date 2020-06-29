# gs\_basebackup<a name="ZH-CN_TOPIC_0256377135"></a>

## 背景信息<a name="zh-cn_topic_0249632270_zh-cn_topic_0237152406_zh-cn_topic_0059777806_section48401199395"></a>

openGauss部署成功后，在数据库运行的过程中，会遇到各种问题及异常状态。openGauss提供了gs\_basebackup工具做基础的物理备份。gs\_basebackup的实现目标是对服务器数据库文件的二进制进行拷贝，其实现原理使用了复制协议。远程执行gs\_basebackup时，需要使用系统管理员账户。gs\_basebackup当前仅支持热备份模式，不支持压缩格式备份。

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   gs\_basebackup仅支持全量备份，不支持增量。  
>-   gs\_basebackup当前仅支持热备份模式，不支持压缩格式备份。  
>-   gs\_basebackup在备份包含绝对路径的表空间时，不能在同一台机器上进行备份。对于同一台机器，绝对路径是唯一的，因此会产生冲突。可以在不同的机器上备份含绝对路径的表空间。  
>-   若打开增量检测点功能且打开双写, gs\_basebackup也会备份双写文件。  
>-   若pg\_xlog目录为软链接，备份时将不会建立软链接，会直接将数据备份到目的路径的pg\_xlog目录下。  

## 前提条件<a name="zh-cn_topic_0249632270_zh-cn_topic_0237152406_zh-cn_topic_0059777806_s9649938409774ccdbc6993a90ccb777a"></a>

-   可以正常连接openGauss数据库，pg\_hba.conf中需要配置允许复制链接, 需要配置max\_wal\_senders的数量, 至少有一个可用。
-   在进行还原时，需要保证各节点备份目录中存在备份文件，若备份文件丢失，则需要从其他节点进行拷贝。

## 语法<a name="zh-cn_topic_0249632270_zh-cn_topic_0237152406_zh-cn_topic_0059777806_sa0c0a7aa3d4042fd81017d22ca1e8cac"></a>

-   显示帮助信息

    ```
    gs_basebackup -? | --help
    ```

-   显示版本号信息

    ```
    gs_basebackup -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0249632270_zh-cn_topic_0237152406_zh-cn_topic_0059777806_s2fa71feeaad041f293de868e52bb5907"></a>

gs\_basebackup参数可以分为如下几类：

-   -D directory

    备份文件输出的目录，必选项。


-   常用参数：
    -   -c，--checkpoint=fast|spread

        设置检查点模式为fast或者spread\(默认\)

    -   -l，--label=LABEL

        为备份设置标签

    -   -P，--progress

        启用进展报告

    -   -v， --verbose

        启用冗长模式

    -   -V， --version

        打印版本后退出

    -   -?，--help

        显示gs\_basebackup命令行参数


-   连接参数
    -   -h, --host=HOSTNAME

        指定正在运行服务器的主机名或者Unix域套接字的路径。

    -   -p，--port=PORT

        指定数据库服务器的端口号。

        可以通过port参数修改默认端口号。

    -   -U，--username=USERNAME

        指定连接数据库的用户。

    -   -s, --status-interval=INTERVAL

        发送到服务器的状态包的时间\(以秒为单位\)

    -   -w,--no-password

        不出现输入密码提示。

    -   -W, --password

        当使用-U参数连接本地数据库或者连接远端数据库时，可通过指定该选项出现输入密码提示。



## 示例<a name="zh-cn_topic_0249632270_zh-cn_topic_0237152406_zh-cn_topic_0059777806_sdebe53579dba4bb8a7dad8e21dbcb342"></a>

```
gs_basebackup -D /home/test/trunk/install/data/backup -h 127.0.0.1 -p 21233
INFO:  The starting position of the xlog copy of the full build is: 0/1B800000. The slot minimum LSN is: 0/1B800000.
```

## 从备份文件恢复数据<a name="zh-cn_topic_0249632270_section161121221193110"></a>

当数据库发生故障时需要从备份文件进行恢复。因为gs\_basebackup是对数据库按二进制进行备份，因此恢复时可以直接拷贝替换原有的文件， 或者直接在备份的库上启动数据库。

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   若当前数据库实例正在运行，直接从备份文件启动数据库可能会存在端口冲突，这是需要修配置文件的port参数，或者在启动数据库时指定一下端口。  
>-   若当前备份文件为主备数据库，可能需要修改一下主备之间的复制连接。即配置文件中的postgre.conf中的replconninfo1， replconninfo2等  

若要在原库的地方恢复数据库，参考步骤如下：

1.  停止数据库服务器, 具体操作请参见<管理员指南\>
2.  将原数据库库和所有表空间复制到另外一个位置, 以备后面需要
3.  清理原库中的所有或部分文件
4.  使用数据库系统用户权限从备份中还原需要的数据库文件
5.  若数据库中存在链接文件, 需要修改使其链接到正确的文件.
6.  重启数据库服务器， 并检查数据库内容，确保数据库已经恢复到所需的状态。

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   暂不支持备份文件增量恢复  
>-   恢复后需要检查数据库中的链接文件是否链接到正确的文件  

