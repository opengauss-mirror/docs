# MOT限制<a name="ZH-CN_TOPIC_0257647918"></a>

MOT不支持以下特性：

-   跨引擎操作，不支持跨引擎（磁盘+MOT）的查询、视图或事务，计划于2021年支持。
-   MVCC、隔离，不支持没有快照/可序列化隔离，计划于2021年支持。
-   本地内存限制为1GB。一个事务只能修改小于1GB的数据。
-   容量（数据+索引）受限于可用内存。未来将提供Anti-caching和数据分层功能。
-   不支持全文检索索引。

MOT表不支持的功能：

-   按范围分片
-   AES加密
-   流操作
-   用户自定义类型
-   子事务
-   DML触发器
-   DDL触发器

MOT不支持的DDL操作

-   修改表结构
-   创建including表
-   创建as select表
-   按范围分片
-   创建无日志记录子句（no-logging clause）的表
-   创建可延迟约束主键（DEFERRABLE ）

MOT不支持的数据类型

-   UUID
-   User-Defined Type \(UDF\)
-   Array data type
-   NVARCHAR2\(n\)
-   Clob
-   Name
-   Blob
-   Raw
-   Path
-   Circle
-   Reltime
-   Bit varying\(10\)
-   Tsvector
-   Tsquery
-   JSON
-   HSTORE
-   Box
-   Text
-   Line
-   Point
-   LSEG
-   POLYGON
-   INET
-   CIDR
-   MACADDR
-   Smalldatetime
-   BYTEA
-   Bit
-   Varbit
-   OID
-   Money
-   无限制的varchar/char

MOT不支持的索引DDL

-   在小数和数值类型上创建索引
-   在列宽\>256的表上创建索引
-   在总列数\>256的表上创建索引
-   单表创建索引总数>9

MOT不支持的DML

-   Merge into
-   Delete on conflict
-   Insert on conflict
-   Select into
-   Update on conflict
-   Update from

MOT不支持的本地编译和精简查询

-   查询涉及两个以上的表
-   查询有以下任何一个情况：
    -   非原生类型的聚合
    -   窗口功能
    -   子查询子链接
    -   Distinct-ON修饰语（distinct子句来自DISTINCT ON）。
    -   递归\(已指定WITH RECURSIVE\)
    -   修改CTE\(在WITH中包含INSERT/UPDATE/DELETE\)

-   以下子句不支持精简查询：
    -   Returning list
    -   GROUP BY子句
    -   Grouping sets
    -   HAVING子句
    -   Windows子句
    -   Distinct子句
    -   不符合本地索引顺序的排序子句
    -   Set操作
    -   约束依赖性


