# 创建/删除MOT<a name="ZH-CN_TOPIC_0280525133"></a>

创建MOT非常简单。只有MOT中的创建和删除表语句与openGauss中基于磁盘的表的语句不同。SELECT、DML和DDL的所有其他命令的语法对于MOT表和openGauss基于磁盘的表是一样的。

-   创建MOT：

    ```
    create FOREIGN table test(x int) [server mot_server];
    ```

-   以上语句中：
    -   始终使用FOREIGN关键字引用MOT。
    -   在创建MOT表时，\[server mot\_server\]部分是可选的，因为MOT是一个集成的引擎，而不是一个独立的服务器。
    -   上文以创建一个名为test的内存表（表中有一个名为x的整数列）为例。在下一节（创建索引）中将提供一个更现实的例子。
    -   如果postgresql.conf中开启了增量检查点，则无法创建MOT。因此请在创建MOT前将enable_incremental_checkpoint设置为off。

-   删除名为test的MOT：

    ```
    drop FOREIGN table test;
    ```

-   ALTER TABLE

    支持添加列、删除列和重命名列。

有关MOT的功能限制（如数据类型），请参见[MOT SQL覆盖和限制](MOT-SQL覆盖和限制.md)。

