# CREATE SUBSCRIPTION<a name="ZH-CN_TOPIC_0000001195412354"></a>

## 功能描述<a name="section1941212243553"></a>

为当前数据库添加一个新的订阅。订阅名称必须与数据库中任何现有的订阅不同。 订阅表示到发布者的复制连接。因此，此命令不仅在本地系统表中添加定义，还会在发布端创建复制槽。 在运行此命令的事务提交时，将启动逻辑复制线程以复制新订阅的数据。

## 注意事项<a name="section099312125612"></a>

创建复制槽时（默认行为），CREATE SUBSCRIPTION不能在事务块内部执行。

## 语法格式<a name="section12778143645515"></a>

```
CREATE SUBSCRIPTION subscription_name
    CONNECTION 'conninfo'
    PUBLICATION publication_name [, ...]
    [ WITH ( subscription_parameter [= value] [, ... ] ) ]
```

## 参数说明<a name="section9224164695517"></a>

-   **subscription\_name**

    新订阅的名称。

-   **CONNECTION 'conninfo'**

    连接发布端的字符串。

    如'host=1.1.1.1,2.2.2.2 port=10000,20000 dbname=postgres user=repusr1 password=password\_123'。

    -   **host**

        发布端IP地址，可以同时指定发布端主机和备机的IP地址，如果同时指定了多个IP，以英文逗号分隔。

    -   **port**

        发布端端口，此处的端口不能使用主端口，而应该使用主端口+1端口，否则会与线程池冲突。可以同时指定发布端主机和备机的端口，如果同时指定了多个端口，以英文逗号分隔。

        >![](public_sys-resources/icon-notice.gif) **注意:**   
        >host和port的数量要一致，并且要一一对应。

    -   **dbname**

        发布所在的数据库。

    -   **user和password**

        用于连接发布端且具有系统管理员权限(SYSADMIN)或者运维管理员权限(OPRADMIN)的用户名和密码。password需要加密，创建订阅前需要在订阅端执行gs\_guc generate -S xxxxxx -D $GAUSSHOME/bin -o subscription。


-   **PUBLICATION publication\_name**

    要订阅的发布端的发布名称，一个订阅可以对应多个发布。

-   **WITH \( subscription\_parameter \[= value\] \[, ... \] \)**

    该子句指定订阅的可选参数。支持的参数有：

    -   **enabled \(boolean\)**

        指定订阅是否应该主动复制，或者是否应该只是设置，但尚未启动。默认值是true。

    -   **slot\_name \(string\)**

        要使用的复制插槽的名称。默认使用订阅名称作为复制槽的名称。

        如果创建订阅时设置enable为false，则slot\_name将被强制设置为NONE，即空值，即使用户指定了slot\_name的值，表示复制槽不存在。

    -   **synchronous\_commit \(enum\)**

        该参数的值会覆盖synchronous\_commit设置。 默认值是off。

        对于逻辑复制使用off是安全的，如果订阅端由于缺少同步而丢失事务，数据将从发布者再次发送。进行同步逻辑复制时，一个不同的设置可能是合适的。逻辑复制线程向发布端报告写入和刷新的位置，当使用同步复制时，发布端将等待实际刷新。这意味着，当订阅用于同步复制时，将订阅者的synchronous\_commit设置为off可能会增加发布端服务器上COMMIT的延迟。在这种情况下，将synchronous\_commit设置为local或更高是有利的。

    -   **binary (boolean)**

        该参数指定是否需要该订阅对应的发布端以二进制格式发送数据，为true表示需要以二进制发送，为false表示不以二进制格式而知以默认的文本格式发送。默认值false。



## 示例<a name="section1399192015610"></a>

```
--创建一个到远程服务器的订阅，复制发布mypublication和insert_only中的表，并在提交时立即开始复制。
CREATE SUBSCRIPTION mysub
         CONNECTION 'host=192.168.1.50 port=5432 user=foo dbname=foodb password=xxxx'
        PUBLICATION mypublication, insert_only;
--创建一个到远程服务器的订阅，复制insert_only发布中的表， 并且不开始复制直到稍后启用复制。
CREATE SUBSCRIPTION mysub
         CONNECTION 'host=192.168.1.50 port=5432 user=foo dbname=foodb password=xxxx '
        PUBLICATION insert_only
               WITH (enabled = false);
--修改订阅的连接信息。
ALTER SUBSCRIPTION mysub CONNECTION 'host=192.168.1.51 port=5432 user=foo dbname=foodb password=xxxx';
--激活订阅。
ALTER SUBSCRIPTION mysub SET(enabled=true);
--删除订阅。
DROP SUBSCRIPTION mysub;
```

## 相关链接<a name="section1537472265911"></a>

[ALTER SUBSCRIPTION](ALTER-SUBSCRIPTION.md)，[DROP SUBSCRIPTION](DROP-SUBSCRIPTION.md)

