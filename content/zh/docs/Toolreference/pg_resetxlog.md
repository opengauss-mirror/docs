# pg\_resetxlog<a name="ZH-CN_TOPIC_0242223736"></a>

## 功能介绍<a name="zh-cn_topic_0237152442_section125419154813"></a>

pg\_resetxlog是一个重新设置数据库事务文件的工具。

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

    设置下一个事务id的时期。

-   -f

    强制更新。

-   -l xlogfile

    强制指定新事物log对应在xlog文件中的最小点。

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


