# 利用外表访问HDFS数据<a name="ZH-CN_TOPIC_0311524273"></a>

openGauss创建的HDFS外表的数据类型要和HDFS上通过Hadoop HIVE创建的结构化表定义的数据类型相匹配。HDFS上Hadoop结构化数据表的定义参见HIVE官方文档描述。

在openGauss上创建的HDFS外表，需要支持HDFS原生数据表实际所采用的ROUND ROBIN和replication数据分布方式。

## 管理Foreign Data Server<a name="section1485280104511"></a>

正如[使用前的对接配置](使用前的对接配置.md)所述，对接最终要实现通过[CREATE SERVER](CREATE-SERVER.md)语法定义外部服务器来存储HDFS数据库实例信息。

要修改外部服务器的信息，请使用[ALTER SERVER](ALTER-SERVER.md)语法。

要删除外部服务器，请使用[DROP SERVER](DROP-SERVER.md)语法。

## 管理Foreign Table<a name="section135985217459"></a>

-   完成对接配置，通过CREATE SERVER语法定义完外部服务器来存储HDFS数据库实例信息后。即可创建外表，通过外表读取远端HDFS数据库实例上的数据。外表的创建语法为[CREATE FOREIGN TABLE](CREATE-FOREIGN-TABLE.md)。
    -   创建HDFS外表需要指定该外表所在HDFS服务器的server\_name，以及该表在此HDFS数据库实例服务器上的存储文件列表或存储目录。一个HDFS外表可以对应多个HDFS存储文件或一个文件存储目录。如果指定的是HDFS文件存储目录，默认该目录及子目录内的所有文件都为该表的数据文件。
    -   引擎支持访问存储在HDFS上的ORC version 0.11和version 0.12格式的数据表，并支持ORC格式采用SNAPPY、ZLIB及NO压缩方式。
    -   引擎支持访问存储在HDFS上的Parquet version 1.0和version 2.0格式的数据表，并支持Parquet格式采用SNAPPY及NO压缩方式。
    -   外表的定义需要和数据导入HDFS时实际定义的HIVE表类型相匹配，数据类型的对应关系参见[数据类型](数据类型.md)。
    -   数据由外部工具导入HDFS数据库实例文件系统，并存储为Hadoop原生格式数据表时，默认的HDFS节点间数据分布方式是数剧随机均布在所有HDFS数据节点上。支持的HDFS外表数据需要指定分布方式为ROUNDROBIN。
    -   Column属性默认为可以为空（NULL），当指定为“NOT NULL”时，不会对数据做一致性检查，需要由应用来保证无空值。

-   修改外表，具体请参考[ALTER FOREIGN TABLE](ALTER-FOREIGN-TABLE.md)。
-   删除外表，具体请参考[DROP FOREIGN TABLE](DROP-FOREIGN-TABLE.md)。
-   查看外表。外表创建完成后，即可以通过SELECT进行数据查询。更多信息请参见[外表使用](外表使用.md)。

>![](public_sys-resources/icon-note.png) **说明：**
>
>-   HDFS外表在建表语句中，不支持普通表定义中的column constraint、table constraint特性及语法。
>
>-   不支持建立索引INDEX，不支持被继承，支持创建视图VIEW。
>
>-   enable\_hdfs\_predicate\_pushdown：bool型GUC参数，标示是否启用谓词下推至原生数据层的功能，默认打开（true）。
>
>-   HDFS外表指定的目录或者文件必须是连接HD的用户有权限访问的，否则会报错该文件不存在。
>
>-   访问HDFS数据支持数据传输加密，但有如下约束：
>
>    -   开启数据传输加密（设置dfs.encrypt.data.transfer为true）时，必须同时设置hadoop.rpc.protection为“privacy”；
>
>    -   HDFS数据传输加密相关配置dfs.encrypt.data.transfer.algorithm只支持“3des”（不推荐使用3DES，因为3DES为不安全的加密算法，存在网络安全风险）；
>
>    -   HDFS数据传输加密相关配置dfs.encrypt.data.transfer.cipher.key.bitlength只支持128长度的初始密钥（FusionInsight HD该参数默认值为192，故当开启数据传输加密时，需要配套修改该参数值为128）；
>
>    -   HDFS数据传输加密相关配置dfs.encrypt.data.transfer.cipher.suites只支持“AES/CTR/NoPadding”。
