# REINDEX<a name="ZH-CN_TOPIC_0289899863"></a>

## 功能描述<a name="zh-cn_topic_0283137442_zh-cn_topic_0237122174_zh-cn_topic_0059777511_sf1cc0970ae31445a9e063cf504569e6e"></a>

为表中的数据重建索引。

在以下几种情况下需要使用REINDEX重建索引：

-   索引崩溃，并且不再包含有效的数据。
-   索引变得“臃肿”，包含大量的空页或接近空页。
-   为索引更改了存储参数（例如填充因子），并且希望这个更改完全生效。
-   使用CONCURRENTLY选项创建索引失败，留下了一个“非法”索引。

## 注意事项<a name="zh-cn_topic_0283137442_zh-cn_topic_0237122174_zh-cn_topic_0059777511_s871de483556241f0a3180925ed04ded3"></a>

REINDEX DATABASE和SYSTEM这种形式的重建索引不能在事务块中执行。

REINDEX CONCURRENTLY这种形式的重建索引不能在事务块中执行。

## 语法格式<a name="zh-cn_topic_0283137442_zh-cn_topic_0237122174_zh-cn_topic_0059777511_s2ba0db3344cd44189859fbd0cefdd97f"></a>

-   重建普通索引。

    ```
    REINDEX { INDEX | [INTERNAL] TABLE | DATABASE | SYSTEM } [CONCURRENTLY] name [ FORCE ];
    ```


-   重建索引分区。

    ```
    REINDEX  { INDEX|  [INTERNAL] TABLE} [CONCURRENTLY] name
        PARTITION partition_name [ FORCE  ];
    ```


## 参数说明<a name="zh-cn_topic_0283137442_zh-cn_topic_0237122174_zh-cn_topic_0059777511_s68dcdc2270944092a61b8e6fb6f09a48"></a>

-   **INDEX**

    重新建立指定的索引。

-   **INTERNAL TABLE**

    重建列存表或Hadoop内表的Desc表的索引，如果表有从属的“TOAST”表，则这个表也会重建索引。
    
    -  不支持CONCURRENTLY方式重建索引，REINDEX INTERNAL TABLE CONCURRENTLY相当于执行REINDEX INTERNAL TABLE。

-   **TABLE**

    重新建立指定表的所有索引，如果表有从属的“TOAST”表，则这个表也会重建索引。如果表上有索引已经被alter unusable失效，则这个索引无法被重新创建。

-   **DATABASE**

    重建当前数据库里的所有索引。

-   **SYSTEM**

    在当前数据库上重建所有系统表上的索引。不会处理在用户表上的索引。

-   **CONCURRENTLY**

    以不阻塞DML的方式重建索引（加ShareUpdateExclusiveLock锁）。重建索引时，一般会阻塞其他语句对该索引所依赖表的访问。指定此关键字，可以实现重建过程中不阻塞DML。

    -   普通REINDEX命令可以在事务内执行，但是REINDEX CONCURRENTLY不可以在事务内执行。
    -   列存表、ustore表、临时表、全局分区索引不支持CONCURRENTLY方式重建索引。
    -   REINDEX SYSTEM CONCURRENTLY不会执行任何操作，因为系统表不支持在线重建索引。
    -   REINDEX DATABASE CONCURRENTLY执行时会跳过系统表、列存表、ustore表、临时表。
    -   在线重建普通表会跳过“非法”（invalid）的普通索引。
    -   在线重建普通索引会将“非法”索引变为“合法”（valid），除了toast表的“非法”索引。
    -   在线重建分区表会跳过含有“不可用”（unuse）分区索引的分区表索引，在线重建分区表特定分区会跳过“不可用”分区索引。
    -   在线重建分区表索引和在线重建分区表索引特定分区索引会将“不可用”分区索引变为“可用”（use）。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   重建索引时指定此关键字，需要执行先后两次对该表的全表扫描来完成build，第一次扫描的时候创建新索引，不阻塞读写操作；第二次扫描的时候合并更新第一次扫描到目前为止发生的变更。
    
    >-   因为需要执行两次对表的扫描和build，且必须等待现有的所有可能对该表执行修改的事务结束，所以该索引的重建比正常耗时更长，同时带来的CPU和I/O消耗对其他业务也会造成影响。
    
    >-   如果在索引重建时发生失败，那会留下一个“非法”的索引。这个索引会被查询忽略，但它仍消耗更新开销。这种情况推荐的恢复方法是删除该索引并尝试再次CONCURRENTLY重建索引。
    
    >-   由于在第二次扫描之后，索引重建必须等待任何持有早于第二次扫描拿的快照的事务终止，而且重建索引时加的ShareUpdateExclusiveLock锁（4级）会和大于等于4级的锁冲突，因此在重建这类索引时，容易引发卡住（hang）或者死锁问题。例如：
    
    >    -   两个会话对同一个表重建CONCURRENTLY索引，会引起死锁问题；
    
    >    -   两个会话，一个对表重建CONCURRENTLY索引，一个drop table，会引起死锁问题；
    
    >    -   三个会话，会话1先对表a加锁，不提交，会话2接着对表a执行写入操作，会话3接着对表b重建CONCURRENTLY索引，在会话1事务未提交之前，会话3会一直被阻塞；
    
    >    -   将事务隔离级别设置成可重复读（默认为读已提交），起两个会话，会话1起事务对表a执行写入操作，不提交，会话2对表b重建CONCURRENTLY索引，在会话1事务未提交之前，会话2会一直被阻塞。


-   **name**

    需要重建索引的索引、表、数据库的名称。表和索引可以有模式修饰。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >REINDEX DATABASE和SYSTEM只能重建当前数据库的索引，所以name必须和当前数据库名称相同。

-   **FORCE**

    无效选项，会被忽略。

-   **partition\_name**

    需要重建索引的分区的名称或者索引分区的名称。

    取值范围：

    -   如果前面是REINDEX INDEX，则这里应该指定索引分区的名称；
    -   如果前面是REINDEX TABLE，则这里应该指定分区的名称；
    -   如果前面是REINDEX INTERNAL TABLE，则这里应该指定列存分区表的分区的名称。


>![](public_sys-resources/icon-notice.gif) **须知：** 
>REINDEX DATABASE和SYSTEM这种形式的重建索引不能在事务块中执行。

## 示例<a name="zh-cn_topic_0283137442_zh-cn_topic_0237122174_zh-cn_topic_0059777511_saeb969f6c052407e98c22893941c9440"></a>

```
--创建一个行存表tpcds.customer_t1，并在tpcds.customer_t1表上的c_customer_sk字段创建索引。
openGauss=# CREATE TABLE tpcds.customer_t1
(
    c_customer_sk             integer               not null,
    c_customer_id             char(16)              not null,
    c_current_cdemo_sk        integer                       ,
    c_current_hdemo_sk        integer                       ,
    c_current_addr_sk         integer                       ,
    c_first_shipto_date_sk    integer                       ,
    c_first_sales_date_sk     integer                       ,
    c_salutation              char(10)                      ,
    c_first_name              char(20)                      ,
    c_last_name               char(30)                      ,
    c_preferred_cust_flag     char(1)                       ,
    c_birth_day               integer                       ,
    c_birth_month             integer                       ,
    c_birth_year              integer                       ,
    c_birth_country           varchar(20)                   ,
    c_login                   char(13)                      ,
    c_email_address           char(50)                      ,
    c_last_review_date        char(10)
)
WITH (orientation = row);

openGauss=# CREATE INDEX tpcds_customer_index1 ON tpcds.customer_t1 (c_customer_sk);

openGauss=# INSERT INTO tpcds.customer_t1 SELECT * FROM tpcds.customer WHERE c_customer_sk < 10;

--重建一个单独索引。
openGauss=# REINDEX INDEX tpcds.tpcds_customer_index1;

--实时重建一个单独索引。
openGauss=# REINDEX INDEX CONCURRENTLY tpcds.tpcds_customer_index1;

--重建表tpcds.customer_t1上的所有索引。
openGauss=# REINDEX TABLE tpcds.customer_t1;

--实时重建表tpcds.customer_t1上的所有索引。
openGauss=# REINDEX TABLE CONCURRENTLY tpcds.customer_t1;

--删除tpcds.customer_t1表。
openGauss=# DROP TABLE tpcds.customer_t1;
```

## 优化建议<a name="zh-cn_topic_0283137442_zh-cn_topic_0237122174_zh-cn_topic_0059777511_section21815038152246"></a>

-   INTERNAL TABLE

    此种情况大多用于故障恢复，不建议进行并发操作。

-   DATABASE

    不能在事务中reindex database。

-   SYSTEM

    不能在事务中reindex系统表。


