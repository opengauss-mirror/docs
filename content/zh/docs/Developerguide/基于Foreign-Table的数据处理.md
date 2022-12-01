# 基于Foreign Table的数据处理<a name="ZH-CN_TOPIC_0311524283"></a>

## 功能描述<a name="zh-cn_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

通过在数据库实例中创建Foreign Table的方式，实现在多个数据库实例之间的关联查询和用来导入数据。

## 使用场景<a name="section3206325195115"></a>

-   将数据从一个数据库实例导入到另外一个数据库实例中。
-   多个数据库实例之间的关联查询。

## 注意事项<a name="section116519262516"></a>

-   创建的外表与其对应的远端表的列名和类型名要完全一致，且远端表的类型为行存表或列存表、哈希表或者复制表。
-   如果关联的表在另外一个数据库实例是复制表或者存在数据倾斜，性能可能会很差。
-   使用期间，两个数据库实例的状态应为Normal。
-   两个数据库实例都需要具备基于Foreign Table的SQL on other openGauss数据处理功能。
-   建议配置LVS，如未配置，推荐使用多个DN作为server的地址，禁止将多个数据库实例的DN地址写在一起。
-   请尽可能保证两端数据库的编码相同，否则可能出现报错或者收到的数据为乱码。
-   如果远端表已经做过统计信息收集，可以对外表执行analyze以获得更优的执行计划。

## 使用前准备<a name="section14555122745119"></a>

需要保证两个数据库实例可以连通，连接配置步骤如下：

1.  设置远端数据库实例的侦听IP。

    在需要接受远程服务的所有DN上（假设其中一个DN主机名为Linux-235，IP为10.11.12.16），将其对外提供服务的网卡IP或主机名（英文逗号分隔）添加到侦听列表中去（一般为本机IP，如果列表中已有则可以不用设置）。例如：

    ```
    gs_guc reload -Z datanode -N Linux-235 -I all -c "listen_addresses='localhost,10.11.12.16'"
    ```

    更详细的说明请参考[5](Linux下配置数据源.md#zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059779273_li36737057205239)、[6](Linux下配置数据源.md#zh-cn_topic_0283136654_li1724551081815)。

2.  在远端数据库实例DN设置认证方式。

    假定本地openGauss数据库实例的各节点IP地址为：10.11.12.13、10.11.12.14、10.11.12.15，如设置sha256连接认证方式，则可在远端openGauss数据库实例上每一个有DN的节点执行如下命令：

    ```
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.13/32 sha256"
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.14/32 sha256"
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.15/32 sha256"
    ```

    对于本地openGauss数据库实例有很多节点，且其IP连续、在一个网段时，可进行批量设置，如：

    ```
    # 允许IP为10.11.12.x的任何主机进行连接访问
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.0/24 sha256"
    # 允许IP为10.11.x.x的任何主机进行连接访问
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.0.0/16 sha256"
    ```

    对于本地openGauss数据库实例有很多节点，且其IP不连续或不在同网段时，用户可用脚本批量设置，具体请参考基于EC的数据处理的[4](基于EC的数据处理.md#li118501793551)。

    >![](public_sys-resources/icon-note.png) **说明：**

    >-   远端数据库实例需要在所有有DN的节点上进行配置。

    >-   本地数据库实例有扩容、新增DN的操作，需要将新增的地址在远端数据库实例所有有DN的节点进行配置。

    >-   支持ssl连接。如果本地数据库实例与远端数据库实例跨越不信任域，建议配置ssl双向认证，具体配置可参考[用SSL进行安全的TCP/IP连接](用SSL进行安全的TCP-IP连接.md)。

3.  重启远端数据库实例。

    ```
    gs_om -t stop
    gs_om -t start
    ```


## 操作步骤<a name="section653132835118"></a>

1.  创建server。

    ```
    openGauss=# CREATE SERVER server_remote FOREIGN DATA WRAPPER GC_FDW OPTIONS
       (address '10.146.187.231:8000,10.180.157.130:8000' ,
      dbname 'test',
      username 'test',
      password 'xxxxxxxx'
    );
    ```

    >![](public_sys-resources/icon-note.png) **说明：**

    >-   server\_remote为server名称，供外表使用。

    >-   address为远端数据库实例DN的地址和端口号，如配置LVS，推荐只填写一个LVS地址，如未配置，推荐使用多个DN作为server的地址。

    >-   dbname为远端数据库实例的数据库名。

    >-   username为连接远端数据库实例使用的用户名，建议不要使用系统管理员。

    >-   password为连接远端数据库实例使用的用户名的密码。

2.  创建外表。

    ```
    openGauss=# CREATE FOREIGN TABLE region
    (
        R_REGIONKEY INT4,
        R_NAME TEXT,
        R_COMMENT TEXT
    )
    SERVER
        server_remote
    OPTIONS
    (
        schema_name 'test',
        table_name 'region',
        encoding 'gbk'
    );
    ```

    >![](public_sys-resources/icon-note.png) **说明：**

    >-   外表的列不允许带任何约束。

    >-   外表的列名和列的类型要与远端数据库实例对应的表的列名和列的类型完全一致。

    >-   schema\_name为远端数据库实例对应的表所在的schema，如果该option省略，则schema\_name预设该外表所在的schema。

    >-   table\_name为远端数据库实例对应的表所在的表名，如果该option省略，则table\_name预设该外表的表名。

    >-   encoding为远端数据库实例的编码，如果该option省略，则编码使用远端数据库实例数据库的默认编码。

3.  查看建立的外表。

    ```
    openGauss=# \d+ region

                                  Foreign table "public.region"
       Column    |  Type   | Modifiers | FDW Options | Storage  | Stats target | Description
    -------------+---------+-----------+-------------+----------+--------------+-------------
     r_regionkey | integer |           |             | plain    |              |
     r_name      | text    |           |             | extended |              |
     r_comment   | text    |           |             | extended |              |
    Server: server_remote
    FDW Options: (schema_name 'test', table_name 'region', encoding 'gbk')
    FDW permition: read only
    Has OIDs: no
    Distribute By: ROUND ROBIN
    Location Nodes: ALL DATANODES
    ```

4.  使用外表进行导入数据或者关联查询。
    -   导入数据。

        ```
        openGauss=# CREATE TABLE local_region
        (
            R_REGIONKEY INT4,
            R_NAME TEXT,
            R_COMMENT TEXT
        );
        openGauss=# INSERT INTO local_region SELECT * FROM region;
        ```

        >![](public_sys-resources/icon-note.png) **说明：**

        >-   如遇到报错连接失败，请检查server的信息确认两个数据库实例是否已经相互连通。

        >-   如遇到报错表不存在，请检查外表的option信息是否正确。

        >-   如遇到报错列信息不匹配，请检查外表的列信息是否与远端数据库实例对应表的列信息是否一致。

        >-   如遇到报错版本不一致，请升级低版本的数据库实例在继续使用。

        >-   如遇到乱码，请检查数据源的实际编码方式，并重新创建外表指定正确的编码。

    -   关联查询。

        ```
        openGauss=# SELECT local_region * FROM region, local_region WHERE local_region.R_NAME = region.R_NAME;
        ```

        >![](public_sys-resources/icon-note.png) **说明：**

        >-   外表可以当做一个本地表来使用，执行复杂的作业。

        >-   如果远端数据库实例已经有统计信息，请对该外表执行analyze以获得更优的执行计划。

        >-   如果本地数据库实例的DN数量比远端数据库实例的DN数量少，本地数据库实例需要使用SMP来获得更佳的性能。


5.  删除外表。

    ```
    openGauss=# DROP FOREIGN TABLE region;
    DROP FOREIGN TABLE
    ```
