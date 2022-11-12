# pg\_resetxlog<a name="ZH-CN_TOPIC_0249632285"></a>

## 功能介绍<a name="zh-cn_topic_0237152442_section125419154813"></a>

pg\_resetxlog是一个重新设置数据库事务文件的工具。

>![](public_sys-resources/icon-caution.png) **注意：** 
>通过pg\_resetxlog重新设置之前，需要先停止数据库。

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

    设置下一个事务id。

-   -f

    强制更新。

-   -l xlogfile

    为新的事务日志指定最小的WAL起始位置。

-   -m XID

    设置下一个multitransaction ID。

-   -n

    不更新，仅显示配置文件的值。

-   -o OID

    设置下一个OID。

-   -O OFFSET

    设置下一个multitransaction的偏移量。

-   -V, --version

    显示版本信息。

-   -x XID

    设置下一个事务ID。

-   -?, --help

    打印帮助信息。


