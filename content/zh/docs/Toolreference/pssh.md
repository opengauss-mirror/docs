# pssh<a name="ZH-CN_TOPIC_0000001197461637"></a>

## 基本功能<a name="section6557202811106"></a>

用于执行数据库节点间的访问，发送命令给远程节点。

## 语法<a name="section39063449108"></a>

```
python3 pssh [OPTIONS]
```

## 参数说明<a name="section14185451151019"></a>

-   --help

    显示帮助信息。

-   -H HOSTNAME

    主机列表。

-   -h HOSTFILE

    写入主机列表的文件全路径。

-   -t TIMEOUT

    连接超时时间，单位秒，默认300s。

-   -p PARALLEL

    最大并行个数，默认32。

-   -o OUTDIR

    执行结果输出全文件路径。

-   -e ERRDIR

    错误信息输出全文件路径。

-   -P

    线上远端主机执行的命令。

-   -s

    显示执行结果。

-   -x EXTRA

    额外的命令行参数。

-   -i

    显示所有节点的输出和错误。


-   -O OPT

    补充的线下模式ssh的参数。
