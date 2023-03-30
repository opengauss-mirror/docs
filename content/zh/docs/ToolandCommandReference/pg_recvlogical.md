# pg\_recvlogical<a name="ZH-CN_TOPIC_0000001092048360"></a>

## 功能介绍<a name="section143231619112111"></a>

pg\_recvlogical工具通过连接指定的节点，创建或删除逻辑复制槽，以及持续、实时的从该节点获取逻辑解码中间结果，输出到文件或标准输出。

## 语法<a name="section1763981272214"></a>

```
pg_recvlogical [OPTION]...
```

其中，逻辑复制槽行为参数为必选参数，必须指定一个。其余参数为可选参数，如不指定，将会读取默认值。

## 参数说明<a name="section927885412229"></a>

### 逻辑复制槽行为参数：必选参数。

-   --create

    创建一个新的逻辑复制槽。
    内部调用了pg_create_logical_replication_slot函数，调用该函数的用户需要具有SYSADMIN权限或具有REPLICATION权限或继承了内置角色gs_role_replication的权限，且此函数目前只支持在主机调用。参考《SQL参考》pg_create_logical_replication_slot函数的说明。

-   --start

    启动该逻辑复制槽的流复制。

-   --drop

    删除一个逻辑复制槽。



### 连接参数：

-   -d, --dbname=DBNAME

    连接的目标数据库名。

-   -h, --host=HOSTNAME

    连接的目标主机名或socket。

-   -p, --port=PORT

    连接的目标数据库节点的HA端口号。

-   -U, --username=NAME

    连接目标库所使用的用户名。

-   -w, --no-password

    不使用密码进行连接。

-   -W, --password

    使用指定密码进行连接。

### 复制参数：

-   -F  --fsync-interval=INTERVAL

    同步到目标输出文件的间隔时间。

    单位为秒，默认值10。

-   -o, --option=NAME\[=VALUE\]

    指定向逻辑复制槽的输出插件添加参数。

    参数的取值为：include-xids、skip-empty-xacts、include-timestamp、only-local、force-binary、white-table-list、standby-connection、parallel-decode-num、decode-style、sending-batch、max-txn-in-memory、max-reorderbuffer-in-memory。

    详细请参见《SQL参考》中“ 内置函数 \> 系统管理函数 \> 逻辑复制函数\> pg_logical_slot_peek_changes > options”以及 “应用开发 > openGauss JDBC 编程指南 > 示例：逻辑复制代码示例”章节。
    链接：https://opengauss.org/zh/docs/latest/docs/DeveloperGuide/%E7%A4%BA%E4%BE%8B-%E9%80%BB%E8%BE%91%E5%A4%8D%E5%88%B6%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B.html

-   -P, --plugin=PLUGIN

    指定使用的逻辑复制槽输出插件。

    默认值为mppdb\_decoding。

-   -s, --status-interval=INTERVAL

    发送的心跳包间隔时间。

    单位为秒，默认值10。

-   -S, --slot=SLOT

    指定逻辑复制槽的名称。

-   -I, --startpos=PTR

    当使用已有逻辑复制槽时，指定初始复制的LSN位置。

### 其它参数:

-   -f, --file=FILE

    设置输出到指定文件。

    直接使用“-”表示输出到stdout。

-   -n, --no-loop

    指定此参数，连接失败后不重试。

-   -v, --verbose

    输出详细信息。

-   -V, --version

    输出版本信息，随后立即退出。

-   -?, --help

    输出帮助信息，随后立即退出。
    
-   -r, --raw

    在并行解码场景下，设置此参数表示不会将二进制格式或是批量发送的结果转化为文本格式，该参数仅供测试人员测量并行解码性能时使用。设置该参数后，二进制格式或批量发送的解码结果将为不可读的格式。



## 示例<a name="section655133344514"></a>

1.  创建名为test\_slot的逻辑复制槽。

    ```
    pg_recvlogical -d postgres -S test_slot -p 26000 --create
    ```

2.  开启流式解码，结果输出到stdout。

    ```
    pg_recvlogical -d postgres -S test_slot -p 26000 --start -v -f -
    pg_recvlogical: starting log streaming at 0/0 (slot test_slot)
    pg_recvlogical: initiated streaming
    pg_recvlogical: confirming write up to 0/0, flush to 0/0 (slot test_slot)
    pg_recvlogical: confirming write up to 0/2A342E8, flush to 0/2A342E8 (slot test_slot)
    pg_recvlogical: confirming write up to 0/2A34320, flush to 0/2A34320 (slot test_slot)
    pg_recvlogical: confirming write up to 0/2A34320, flush to 0/2A34320 (slot test_slot)
    BEGIN 16039
    table public.t: INSERT: a[integer]:4 b[integer]:4
    COMMIT 16039
    pg_recvlogical: confirming write up to 0/2A34450, flush to 0/2A34450 (slot test_slot)
    pg_recvlogical: confirming write up to 0/2A34450, flush to 0/2A34450 (slot test_slot)
    ```

3.  删除逻辑复制槽。

    ```
    pg_recvlogical -d postgres -S test_slot -p 26000 --drop
    ```


