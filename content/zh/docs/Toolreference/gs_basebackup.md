# gs\_basebackup<a name="ZH-CN_TOPIC_0242223700"></a>

## 背景信息<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_section48401199395"></a>

openGauss部署成功后，在数据库运行的过程中，会遇到各种问题及异常状态。openGauss提供了gs\_basebackup工具做基础备份。。

gs\_basebackup工具由数据库安装用户执行。

>![](public_sys-resources/icon-note.gif) **说明：**   
>gs\_basebackup仅支持全量备份，不支持增量恢复。  

## 前提条件<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_s9649938409774ccdbc6993a90ccb777a"></a>

-   可以正常连接openGauss数据库。
-   在进行还原时，需要保证各节点备份目录中存在备份文件，若备份文件丢失，则需要从其他节点进行拷贝（二进制文件需修改文件名中的节点名）。

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

    写输出的目录，必选项。

-   -x

    相当于-X的fetch方法

-   -X

    在备份中包含所需的事务日志文件（WAL文件）。


支持的事务日志收集方式为fast或者stream

-   常用参数：
    -   -c，--checkpoint=fast|spread

        设置检查点模式为fast或者spread

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

    -   -W, --password=PASSWORD

        当使用-U参数连接本地数据库或者连接远端数据库时，可通过该选项指定密码



## 示例<a name="zh-cn_topic_0237152406_zh-cn_topic_0059777806_sdebe53579dba4bb8a7dad8e21dbcb342"></a>

```
gs_basebackup -D /home/test/trunk/install/data/backup -h 127.0.0.1 -p 21233
INFO:  The starting position of the xlog copy of the full build is: 0/1B800000. The slot minimum LSN is: 0/1B800000.
```

