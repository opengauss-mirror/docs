# ANALYZE | ANALYSE<a name="ZH-CN_TOPIC_0289900881"></a>

## 功能描述<a name="zh-cn_topic_0283136969_zh-cn_topic_0237122086_zh-cn_topic_0059779340_s3b85e88124004279b0fccf70b5953039"></a>

用于收集与数据库中普通表内容相关的统计信息，统计结果存储在系统表PG\_STATISTIC下。执行计划生成器会使用这些统计数据，以确定最有效的执行计划。

如果没有指定参数，ANALYZE会分析当前数据库中的每个表和分区表。同时也可以通过指定table\_name、column和partition\_name参数把分析限定在特定的表、列或分区表中。

ANALYZE|ANALYSE VERIFY用于检测数据库中普通表（行存表、列存表）的数据文件是否损坏。

## 注意事项<a name="zh-cn_topic_0283136969_zh-cn_topic_0237122086_zh-cn_topic_0059779340_s5dcc72ade57146a2920a3136d366081c"></a>

-   ANALYZE非临时表不能在一个匿名块、事务块、函数或存储过程内被执行。支持存储过程中ANALYZE临时表，不支持统计信息回滚操作。
-   ANALYZE VERIFY操作处理的大多为异常场景检测需要使用RELEASE版本。ANALYZE VERIFY 场景不触发远程读，因此远程读参数不生效。对于关键系统表出现错误被系统检测出页面损坏时，将直接报错不再继续检测。
-   如果没有指定参数，ANALYZE处理当前数据库里用户拥有相应权限的每个表。如果参数中指定了表，ANALYZE只处理指定的表。
-   要对一个表进行ANALYZE操作，通常用户必须是表的所有者或者被授予了指定表VACUUM权限的用户，默认系统管理员有该权限。数据库的所有者允许对数据库中除了共享目录以外的所有表进行ANALYZE操作（该限制意味着只有系统管理员才能真正对一个数据库进行ANALYZE操作）。ANALYZE命令会跳过那些用户没有权限的表。

## 语法格式<a name="zh-cn_topic_0283136969_zh-cn_topic_0237122086_zh-cn_topic_0059779340_sd95698dc205444ad9f4bbe049cc5d488"></a>

-   收集表的统计信息。

    ```
    { ANALYZE | ANALYSE } [ VERBOSE ]
        [ table_name [ ( column_name [, ...] ) ] ];
    ```


-   收集分区表的统计信息。

    ```
    { ANALYZE | ANALYSE } [ VERBOSE ]
        [ table_name [ ( column_name [, ...] ) ] ]
        PARTITION ( patrition_name ) ;
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >普通分区表目前支持针对某个分区的统计信息的语法，但功能上不支持针对某个分区的统计信息收集。


-   收集多列统计信息。

    ```
    {ANALYZE | ANALYSE} [ VERBOSE ]
        table_name (( column_1_name, column_2_name [, ...] ));
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   收集多列统计信息时，请设置GUC参数[default\_statistics\_target](其他优化器选项.md#zh-cn_topic_0283137690_zh-cn_topic_0237124719_zh-cn_topic_0059779049_se18c86fcdf5e4a22870f71187436d815)为负数，以使用百分比采样方式。
    >
    >-   如果关闭GUC参数enable\_functional\_dependency，每组多列统计信息最多支持32列；如果开启GUC参数enable\_functional\_dependency，每组多列统计信息最多支持4列。
    >
    >-   不支持收集多列统计信息的表：系统表。


-   检测当前库的数据文件。

    ```
    {ANALYZE | ANALYSE} VERIFY {FAST|COMPLETE};
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   Fast模式校验时，需要对校验的表有并发的DML操作，会导致校验过程中有误报的问题，因为当前Fast模式是直接从磁盘上读取，并发有其他线程修改文件时，会导致获取的数据不准确，建议离线操作。
    >
    >-   支持对全库进行操作，由于涉及的表较多，建议以重定向保存结果**gsql -d database -p port -f "verify.sql"\> verify\_warning.txt  2\>&1**。
    >
    >-   对外提示NOTICE只核对外可见的表，内部表的检测会包含在它所依赖的外部表，不对外显示和呈现。
    >
    >-   此命令的处理可容错ERROR级别的处理。由于debug版本的Assert可能会导致core无法继续执行命令，建议在release模式下操作。
    >
    >-   对于全库操作时，当关键系统表出现损坏则直接报错，不再继续执行。

-   检测表和索引的数据文件

    ```
    {ANALYZE | ANALYSE} VERIFY {FAST|COMPLETE} table_name|index_name [CASCADE];
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   支持对普通表的操作和索引表的操作，但不支持对索引表index使用CASCADE操作。原因是由于CASCADE模式用于处理主表的所有索引表，当单独对索引表进行检测时，无需使用CASCADE模式。
    >
    >-   对于主表的检测会同步检测主表的内部表，例如toast表、cudesc表等。
    >
    >-   当提示索引表损坏时，建议使用reindex命令进行重建索引操作。

-   检测表分区的数据文件

    ```
    {ANALYZE | ANALYSE} VERIFY {FAST|COMPLETE} table_name PARTITION {(patrition_name)}[CASCADE];
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >支持对表的单独分区进行检测操作，但不支持对索引表index使用CASCADE操作。


## 参数说明<a name="zh-cn_topic_0283136969_zh-cn_topic_0237122086_zh-cn_topic_0059779340_s4a744c72f8c44fa4899ddd31887cb4ee"></a>

-   **VERBOSE**

    启用显示进度信息。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >如果指定了VERBOSE，ANALYZE发出进度信息，表明目前正在处理的表。各种有关表的统计信息也会打印出来。

-   **table\_name**

    需要分析的特定表的表名（可能会带模式名），如果省略，将对数据库中的所有表（非外部表）进行分析。

    对于ANALYZE收集统计信息，目前仅支持行存表、列存表。

    取值范围：已有的表名。

-   **column\_name**，column\_1\_name，column\_2\_name

    需要分析特定列的列名，默认为所有列。

    取值范围：已有的列名。

-   **partition\_name**

    如果table为分区表，在关键字PARTITION后面指定分区名partition\_name表示分析该分区表的统计信息。目前语法上支持分区表做ANALYZE，但功能实现上暂不支持对指定分区统计信息的分析。

    取值范围：表的某一个分区名。

-   **index\_name**

    需要分析的特定索引表的表名（可能会带模式名）。

    取值范围：已有的表名。

-   **FAST|COMPLETE**

    对于行存表，FAST模式下主要对于行存表的CRC和page header进行校验，如果校验失败则会告警; 而COMPLETE模式下，则主要对行存表的指针、tuple进行解析校验。 对于列存表，FAST模式下主要对于列存表的CRC和magic进行校验，如果校验失败则会告警; 而COMPLETE模式下，则主要对列存表的CU进行解析校验。

-   **CASCADE**

    CASCADE模式下会对当前表的所有索引进行检测处理。


## 示例<a name="zh-cn_topic_0283136969_zh-cn_topic_0237122086_zh-cn_topic_0059779340_s70741e0e8d4843c29a3d2916af35ad25"></a>

-- 创建表。

```
openGauss=# CREATE TABLE customer_info
(
WR_RETURNED_DATE_SK       INTEGER                       ,
WR_RETURNED_TIME_SK       INTEGER                       ,
WR_ITEM_SK                INTEGER               NOT NULL,
WR_REFUNDED_CUSTOMER_SK   INTEGER
)
;

-- 创建分区表。

openGauss=# CREATE TABLE customer_par
(
WR_RETURNED_DATE_SK       INTEGER                       ,
WR_RETURNED_TIME_SK       INTEGER                       ,
WR_ITEM_SK                INTEGER               NOT NULL,
WR_REFUNDED_CUSTOMER_SK   INTEGER
)
PARTITION BY RANGE(WR_RETURNED_DATE_SK)
(
PARTITION P1 VALUES LESS THAN(2452275),
PARTITION P2 VALUES LESS THAN(2452640),
PARTITION P3 VALUES LESS THAN(2453000),
PARTITION P4 VALUES LESS THAN(MAXVALUE)
)
ENABLE ROW MOVEMENT;

-- 使用ANALYZE语句更新统计信息。

openGauss=# ANALYZE customer_info;
openGauss=# ANALYZE customer_par;

-- 使用ANALYZE VERBOSE语句更新统计信息，并输出表的相关信息。

openGauss=# ANALYZE VERBOSE customer_info;
INFO:  analyzing "cstore.pg_delta_3394584009"(cn_5002 pid=53078)
INFO:  analyzing "public.customer_info"(cn_5002 pid=53078)
INFO:  analyzing "public.customer_info" inheritance tree(cn_5002 pid=53078)
ANALYZE
```

>![](public_sys-resources/icon-note.gif) **说明：** 
>若环境若有故障，需查看数据库主节点的log。


```
-- 删除表。
openGauss=# DROP TABLE customer_info;
openGauss=# DROP TABLE customer_par;
```

