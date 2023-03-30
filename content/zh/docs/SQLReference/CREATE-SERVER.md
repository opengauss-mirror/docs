# CREATE SERVER<a name="ZH-CN_TOPIC_0289899991"></a>

## 功能描述<a name="zh-cn_topic_0283137586_section1087614114391"></a>

定义一个新的外部服务器。

## 语法格式<a name="zh-cn_topic_0283137586_section14553175913395"></a>

```
CREATE SERVER server_name
    [ TYPE ' server_type ' ]
    [ VERSION ' server_version ' ]
    FOREIGN DATA WRAPPER fdw_name
    [ OPTIONS ( { option_name ' value ' } [, ...] ) ] ;
```

## 参数说明<a name="zh-cn_topic_0283137586_section183121377402"></a>

-   **server\_name**

    server的名称。

    取值范围：长度必须小于等于63。

-   **server\_type**

    可选的服务器类型，可能对外部数据包装器有用。

-   **server\_version**

    可选的服务器版本，可能对外部数据包装器有用。

-   **fdw\_name**

    指定外部数据封装器的名称。

    取值范围：dist\_fdw，hdfs\_fdw，log\_fdw，file\_fdw，mot\_fdw，oracle\_fdw，mysql\_fdw，postgres\_fdw。

-   **OPTIONS \(  \{ option\_name ' value '  \}  \[, ...\] \)**

    这个子句为服务器指定选项。这些选项通常定义该服务器的连接细节，但是实际的名称和值取决于该服务器的外部数据包装器。

    -   oracle\_fdw支持的options包括：
        -   **dbserver**

            远端Oracle数据库的连接字符串。

        -   **isolation\_level**  （默认值为serializable）

            oracle数据库的事务隔离级别。

            取值范围：serializable、 read\_committed 、 read\_only

    -   mysql\_fdw支持的options包括：
        -   **host**  （默认值为 127.0.0.1）

            MySQL Server/MariaDB的地址。

        -   **port**  （默认值为 3306）

            MySQL Server/MariaDB侦听的端口号。

    -   postgres\_fdw支持的options同libpq支持的连接参数一致，可参考  **链接字符**  。需要注意的是，以下几个options不支持设置：
        -   **user**和**password**

            用户名和密码将在创建user mapping时指定。

        -   **client\_encoding**

            将自动获取本地server的编码方式并设置该值。

        -   **application\_name**

            总是设置成postgres\_fdw。

    -   用于指定外部服务器的各类参数，详细的参数说明如下所示。
        -   encrypt

            是否对数据进行加密，该参数仅支持type为OBS时设置。默认值为on。

            取值范围：

            -   on表示对数据进行加密，使用HTTPS协议通信。
            -   off表示不对数据进行加密，使用HTTP协议通信。

        -   access\_key

            OBS访问协议对应的AK值（OBS云服务界面由用户获取），创建外表时AK值会加密保存到数据库的元数据表中。该参数仅支持type为OBS时设置。

        -   secret\_access\_key

            OBS访问协议对应的SK值（OBS云服务界面由用户获取），创建外表时SK值会加密保存到数据库的元数据表中。该参数仅支持type为OBS时设置。




除了libpq支持的连接参数外，还额外提供3个options：

-   **use\_remote\_estimate**

    控制postgres\_fdw是否发出EXPLAIN命令以获取运行消耗估算。默认值为false。

-   **fdw\_startup\_cost**

    执行一个外表扫描时的启动耗时估算。这个值通常包含建立连接、远端对请求的分析和生成计划的耗时。默认值为100。

-   **fdw\_typle\_cost**

    在远端服务器上对每一个元组进行扫描时的额外消耗。这个值通常表示数据在server间传输的额外消耗。默认值为0.01。


## 示例<a name="section6372437377"></a>

创建server。

```
openGauss=* create server my_server foreign data wrapper log_fdw;
CREATE SERVER
```

## 相关链接<a name="zh-cn_topic_0283137586_section3901738174011"></a>

[ALTER SERVER](ALTER-SERVER.md)，[DROP SERVER](DROP-SERVER.md)

