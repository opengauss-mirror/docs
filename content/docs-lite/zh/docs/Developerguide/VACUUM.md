# VACUUM<a name="ZH-CN_TOPIC_0289900615"></a>

## 功能描述<a name="zh-cn_topic_0283137096_zh-cn_topic_0237122195_zh-cn_topic_0059777503_sd160e2f29b7240d88e6b4e9c7c7b8ae3"></a>

VACUUM回收表或B-Tree索引中已经删除的行所占据的存储空间。在一般的数据库操作里，那些已经DELETE的行并没有从它们所属的表中物理删除；在完成VACUUM之前它们仍然存在。因此有必要周期地运行VACUUM，特别是在经常更新的表上。

## 注意事项<a name="zh-cn_topic_0283137096_zh-cn_topic_0237122195_zh-cn_topic_0059777503_sc14108b37ff240e98423cf0f3a02fc33"></a>

-   如果没有参数，VACUUM处理当前数据库里用户拥有相应权限的每个表。如果参数指定了一个表，VACUUM只处理指定的那个表。
-   要对一个表进行VACUUM操作，通常用户必须是表的所有者或者被授予了指定表VACUUM权限的用户，默认系统管理员有该权限。数据库的所有者允许对数据库中除了共享目录以外的所有表进行VACUUM操作（该限制意味着只有系统管理员才能真正对一个数据库进行VACUUM操作）。VACUUM命令会跳过那些用户没有权限的表进行垃圾回收操作。
-   VACUUM不能在事务块内执行。
-   建议生产数据库经常清理（至少每晚一次），以保证不断地删除失效的行。尤其是在增删了大量记录之后，对受影响的表执行VACUUM ANALYZE命令是一个很好的习惯。这样将更新系统目录为最近的更改，并且允许查询优化器在规划用户查询时有更好地选择。
-   不建议日常使用FULL选项，但是可以在特殊情况下使用。例如在用户删除了一个表的大部分行之后，希望从物理上缩小该表以减少磁盘空间占用。VACUUM FULL通常要比单纯的VACUUM收缩更多的表尺寸。FULL选项并不清理索引，所以推荐周期性的运行[REINDEX](REINDEX.md)命令。实际上，首先删除所有索引，再运行VACUUM FULL命令，最后重建索引通常是更快的选择。如果执行此命令后所占用物理空间无变化（未减少），请确认是否有其他活跃事务（删除数据事务开始之前开始的事务，并在VACUUM FULL执行前未结束）存在，如果有等其他活跃事务退出进行重试。
-   VACUUM会导致I/O流量的大幅增加，这可能会影响其他活动会话的性能。因此，有时候会建议使用基于开销的VACUUM延迟特性。
-   如果指定了VERBOSE选项，VACUUM将打印处理过程中的信息，以表明当前正在处理的表。各种有关当前表的统计信息也会打印出来。但是对于列存表执行VACUUM操作，指定了VERBOSE选项，无信息输出。
-   当含有带括号的选项列表时，选项可以以任何顺序写入。如果没有括号，则选项必须按语法显示的顺序给出。
-   VACUUM和VACUUM FULL时，会根据参数vacuum\_defer\_cleanup\_age延迟清理行存表记录，即不会立即清理刚刚删除的元组。
-   VACUUM ANALYZE先执行一个VACUUM操作，然后给每个选定的表执行一个ANALYZE。对于日常维护脚本而言，这是一个很方便的组合。
-   简单的VACUUM（不带FULL选项）只是简单地回收空间并且令其可以再次使用。这种形式的命令可以和对表的普通读写并发操作，因为没有请求排他锁。VACUUM FULL执行更广泛的处理，包括跨块移动行，以便把表压缩到最少的磁盘块数目里。这种形式要慢许多并且在处理的时候需要在表上施加一个排他锁。
-   VACUUM列存表内部执行的操作包括三个：迁移delta表中的数据到主表、VACUUM主表的delta表、VACUUM主表的desc表。该操作不会回收delta表的存储空间，如果要回收delta表的冗余存储空间，需要对该列存表执行VACUUM DELTAMERGE。
-   同时执行多个VACUUM FULL可能出现死锁。
-   如果没有打开xc\_maintenance\_mode参数，那么VACUUM FULL操作将跳过所有系统表。
-   执行DELETE后立即执行VACUUM FULL命令不会回收空间。执行DELETE后再执行1000个非SELECT事务，或者等待1s后再执行1个事务，之后再执行VACUUM FULL命令空间才会回收。

## 语法格式<a name="zh-cn_topic_0283137096_zh-cn_topic_0237122195_zh-cn_topic_0059777503_s6ae572813e4047dbafe371b136af69ae"></a>

-   回收空间并更新统计信息，对关键字顺序无要求。

    ```
    VACUUM [ ( { FULL | FREEZE | VERBOSE | {ANALYZE | ANALYSE }} [,...] ) ]
        [ table_name [ (column_name [, ...] ) ] ] [ PARTITION ( partition_name ) | SUBPARTITION ( subpartition_name ) ];
    ```

-   仅回收空间，不更新统计信息。

    ```
    VACUUM [ FULL [COMPACT] ] [ FREEZE ] [ VERBOSE ] [ table_name ] 
    [ PARTITION ( partition_name )  | SUBPARTITION ( subpartition_name ) ];
    ```

-   回收空间并更新统计信息，且对关键字顺序有要求。

    ```
    VACUUM [ FULL ] [ FREEZE ] [ VERBOSE ] { ANALYZE | ANALYSE } [ VERBOSE ] 
        [ table_name [ (column_name [, ...] ) ] ] [ PARTITION ( partition_name ) | SUBPARTITION ( subpartition_name ) ];
    ```


## 参数说明<a name="zh-cn_topic_0283137096_zh-cn_topic_0237122195_zh-cn_topic_0059777503_sbca5ac35b0f942659382ddcabe74ee42"></a>

-   **FULL**

    选择“FULL”清理，这样可以恢复更多的空间，但是需要耗时更多，并且在表上施加了排他锁。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >使用FULL参数会导致统计信息丢失，如果需要收集统计信息，请在VACUUM FULL语句中加上analyze关键字。

-   **FREEZE**

    指定FREEZE相当于执行VACUUM时将vacuum\_freeze\_min\_age参数设为0。

-   **VERBOSE**

    为每个表打印一份详细的清理工作报告。

- **ANALYZE | ANALYSE**

  更新用于优化器的统计信息，以决定执行查询的最有效方法。

  > **![](C:/Users/liyang/Desktop/openGauss/docs/content/zh/docs/Developerguide/public_sys-resources/icon-note.gif)说明**
  >
  > ustore分区表在autovacuum=analyze的时候也会触发vacuum。

-   **table\_name**

    要清理的表的名称（可以有模式修饰）。

    取值范围：要清理的表的名称。缺省时为当前数据库中的所有表。

-   **column\_name**

    要分析的具体的字段名称，需要配合analyze选项使用。

    取值范围：要分析的具体的字段名称。缺省时为所有字段。

-   **PARTITION**

    COMPACT和PARTITION参数不能同时使用。

-   **partition\_name**

    要清理的表的一级分区名称。缺省时为所有一级分区。

-   **subpartition\_name**

    要清理的表的二级分区名称。缺省时为所有二级分区。

-   **DELTAMERGE**

    只针对列存表，将列存表的delta table中的数据转移到主表存储上。对列存表而言，此操作受[enable\_delta\_store](zh-cn_topic_0289900911.md#zh-cn_topic_0283136577_zh-cn_topic_0237124705_section1035224982816)和[参数说明](CREATE-TABLE.md#zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s99cf2ac11c79436c93385e4efd7c4428)中的deltarow\_threshold控制。


## 示例<a name="zh-cn_topic_0283137096_zh-cn_topic_0237122195_zh-cn_topic_0059777503_s030f55570baf48f8978effdf4361bb45"></a>

```
--在表tpcds.reason上创建索引。
openGauss=# CREATE UNIQUE INDEX ds_reason_index1 ON tpcds.reason(r_reason_sk);

--对带索引的表tpcds.reason执行VACUUM操作。
openGauss=# VACUUM (VERBOSE, ANALYZE) tpcds.reason;

--删除索引。
openGauss=# DROP INDEX ds_reason_index1 CASCADE;
openGauss=# DROP TABLE tpcds.reason;
```

## 优化建议<a name="zh-cn_topic_0283137096_zh-cn_topic_0237122195_zh-cn_topic_0059777503_section34774208154224"></a>

-   vacuum
    -   VACUUM不能在事务块内执行。
    -   建议生产数据库经常清理（至少每晚一次），以保证不断地删除失效的行。尤其是在增删了大量记录后，对相关表执行VACUUM ANALYZE命令。
    -   不建议日常使用FULL选项，但是可以在特殊情况下使用。例如，一个例子就是在用户删除了一个表的大部分行之后，希望从物理上缩小该表以减少磁盘空间占用。
    -   执行VACUUM FULL操作时，建议首先删除相关表上的所有索引，再运行VACUUM FULL命令，最后重建索引。


