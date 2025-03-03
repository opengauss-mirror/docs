# pg\_xlogdump

## 功能介绍<a name="zh-cn_topic_0237152442_section125419154814"></a>

pg_xlogdump是一个用于解码并显示 openGauss 的预写式日志 (WAL) 的工具。此工具只能由安装该服务器的用户使用，因为它要求对数据目录的只读访问。

>![](public_sys-resources/icon-caution.png) **注意：**<br/>
>暂不支持对段页式文件进行解码。<br/>


## 前提条件<a name="zh-cn_topic_0237152442_section14602518110"></a>

保证数据库目录存在且路径正确。

## 语法<a name="zh-cn_topic_0237152442_section554725769"></a>

```
pg_xlogdump [OPTION]... [STARTSEG [ENDSEG]]
```

## 参数说明<a name="zh-cn_topic_0237152442_section4751333172416"></a>

OPTION取值如下所示：

-   -b, --bkp-details

    输出有关备份块的详细信息。

-   -e, --end=RECPTR

    读取到日志的指定位置。

-   -f, --follow

    在到达指定 WAL 的末尾后，继续解析下一个文件。

-   -n, --limit=N

    指定要显示的日志记录的数量。

-   -p, --path=PATH

    指定 WAL 日志存放的目录。默认路径为 ./pg\_xlog 。

-   -r, --rmgr=RMGR

    仅显示资源管理器生成的记录。若参数设置为 -r = list 则列出有效的资源管理器名称。

-   -s, --start=RECPTR

    指定日志记录的读取位置。默认从所找到的最早的文件的第一个可用日志记录开始读取。

-   -S, --size=n

    设置解析资源池化模式下日志时的大小（不包括 ctl 信息长度）。
    默认大小为 512 * 1024 * 1024 * 1024 (512GB)

-   -t, --timeline=TLI

    选择指定的 timeline 读取日志记录。默认使用 1 或 STARTSEG 。

-   -V, --version

    显示版本信息。

-   -w, --write-FPW

    显示整页写入的信息，使用该参数时应同时使用 -b 。

-   -x XID

    仅显示给定的事物 ID 记录。

-   -z, --stats

    显示插入记录的统计信息而不显示每条记录。

-   -v, --verbose

    输出记录的详细信息。

-   -?, --help

    打印帮助信息。

-   --enable-dss

    资源池化参数，开启资源池化模式。

-   --socketpath=SOCKETPATH

    资源池化参数，dss 实例进程使用的 socket 文件路径。


## 使用举例<a name="zh-cn_topic_0237152442_section554725770"></a>

+ 解析给定的事物ID的 xlog 文件。
```
pg_xlogdump -x [XID] [start log position]
```