# pg\_resetxlog

## 功能介绍<a name="zh-cn_topic_0237152442_section125419154813"></a>

pg\_resetxlog是一个重新设置数据库事务文件的工具。

>![](public_sys-resources/icon-caution.png) **注意：**<br/> 
>通过pg\_resetxlog重新设置之前，需要先停止数据库。<br/> 
>在共享存储模式，关闭数据库之后需要先手动开启dssserver，然后执行pg\_resetxlog操作。

## 前提条件<a name="zh-cn_topic_0237152442_section14602518109"></a>

保证数据库目录存在且路径正确。

## 语法<a name="zh-cn_topic_0237152442_section554725769"></a>

```
pg_resetxlog [OPTION]... DATADIR
```

## 参数说明<a name="zh-cn_topic_0237152442_section4751333172415"></a>

OPTION取值如下所示：

-   DATADIR

    需要修改的数据库目录，确保路径正确。

-   -e XIDEPOCH

    设置下一个事务id的epoch值。

-   -f

    强制更新。

-   -l xlogfile

    为新的事务日志指定最小的WAL起始位置。(注意：xlogfile的值要大于当前最大的xlog文件名，否则该参数不生效，将按照默认逻辑处理，即新的日志文件名为执行该命令前最后一个日志文件的文件名加1.)

-   -m XID

    设置下一个multitransaction ID。

-   -n

    不更新，仅显示配置文件的值。

-   -o OID

    设置下一个OID。

-   -O OFFSET

    设置下一个multitransaction的偏移量。

-   --enable-dss

    资源池化参数，开启资源池化模式。当输入包含vgname时，会自动开启该参数。

-   --socketpath=SOCKETPATH

    资源池化参数，dss实例进程使用的socket文件路径，仅支持绝对路径，可不指定，默认值为$DSS_HOME/.dss_unix_d_socket。

-   --vgname=VGDATA

    资源池化参数，资源池化的数据目录。

-   -V, --version

    显示版本信息。

-   -x XID

    设置下一个事务ID。

-   -?, --help

    打印帮助信息。

## 使用举例（非资源池化模式）<a name="zh-cn_topic_0237152442_section554725769"></a>

```
pg_resetxlog [OPTION]... DATADIR
```
**说明：**

在非资源池化模式，OPTION的取值不能是资源池化参数。

## 使用举例（资源池化模式）<a name="zh-cn_topic_0237152442_section554725769"></a>

```
export DSS_MAINTAIN=TRUE
dssserver -D $DSS_HOME &
pg_resetxlog [OPTION]... DATADIR --enable-dss --vgname=VGDATA --socketpath=SOCKETPATH
export DSS_MAINTAIN=FALSE
```

**资源池化模式使用说明：**

在资源池化模式下，用户需要指定数据库节点文件系统的数据目录DATADIR，用于判断数据库是否关闭，同时也需要指定共享的数据目录，用于操作共享存储设备中的文件。由于备机dss不允许写入，用户只能在主机执行该工具，并且数据库必须是正常关闭的状态。用户在执行该工具之后，工具会自动识别主机并对主机的日志进行重置。


