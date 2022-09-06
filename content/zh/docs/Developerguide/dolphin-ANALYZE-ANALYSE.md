# ANALYZE | ANALYSE<a name="ZH-CN_TOPIC_0289900881"></a>

## 功能描述<a name="zh-cn_topic_0283136969_zh-cn_topic_0237122086_zh-cn_topic_0059779340_s3b85e88124004279b0fccf70b5953039"></a>

用于收集与数据库中普通表内容相关的统计信息，统计结果存储在系统表PG\_STATISTIC下。执行计划生成器会使用这些统计数据，以确定最有效的执行计划。

如果没有指定参数，ANALYZE会分析当前数据库中的每个表和分区表。同时也可以通过指定table\_name、column和partition\_name参数把分析限定在特定的表、列或分区表中。

ANALYZE|ANALYSE VERIFY用于检测数据库中普通表（行存表、列存表）的数据文件是否损坏。

## 注意事项<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

![](public_sys-resources/icon-note.gif) **说明：** 
注意事项可见[ANALYZE](ANALYZE-ANALYSE.md)。

## 语法格式<a name="zh-cn_topic_0283136969_zh-cn_topic_0237122086_zh-cn_topic_0059779340_sd95698dc205444ad9f4bbe049cc5d488"></a>

-   收集表的统计信息

    ```
    {ANALYZE | ANALYSE} [ VERBOSE ] [ NO_WRITE_TO_BINLOG | LOCAL ] TABLE { [schema.]table_name } [, ... ]
    ```

## 参数说明<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_sf4962205ddf84312a5fd888bc662e5cf"></a>

-   **NO_WRITE_TO_BINLOG | LOCAL**

    仅作语法，无实际用途

![](public_sys-resources/icon-note.gif) **说明：** 
涉及的参数可见[ANALYZE](ANALYZE-ANALYSE.md)。

## 示例<a name="zh-cn_topic_0283136969_zh-cn_topic_0237122086_zh-cn_topic_0059779340_s70741e0e8d4843c29a3d2916af35ad25"></a>

--- 创建表。

```
openGauss=# CREATE TABLE customer_info
(
WR_RETURNED_DATE_SK       INTEGER                       ,
WR_RETURNED_TIME_SK       INTEGER                       ,
WR_ITEM_SK                INTEGER               NOT NULL,
WR_REFUNDED_CUSTOMER_SK   INTEGER
)
;
```

--- 创建分区表。

```
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
```

--- 使用ANALYZE语句更新统计信息。

```
openGauss=# ANALYZE TABLE customer_info, customer_par;
        Table         |   Op    | Msg_type | Msg_text
----------------------+---------+----------+----------
 public.customer_info | analyze | status   | OK
 public.customer_par  | analyze | status   | OK
(2 row)
```

--- 删除表。

```
openGauss=# DROP TABLE customer_info;
openGauss=# DROP TABLE customer_par;
```

## 相关链接<a name="section156744489391"></a>

[ANALYZE](ANALYZE-ANALYSE.md)
