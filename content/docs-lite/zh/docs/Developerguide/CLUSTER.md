# CLUSTER<a name="ZH-CN_TOPIC_0289899899"></a>

## 功能描述<a name="zh-cn_topic_0283137352_zh-cn_topic_0237122092_zh-cn_topic_0059778981_s0e572999489a4677bdb5354183b3efbf"></a>

根据一个索引对表进行聚簇排序。

CLUSTER指定openGauss通过索引名指定的索引聚簇由表名指定的表。 表名上必须已经定义该索引。

当对一个表聚集后，该表将基于索引信息进行物理存储。聚集是一次性操作：当表被更新之后， 更改的内容不会被聚集。也就是说，系统不会试图按照索引顺序对新的存储内容及更新记录进行重新聚集。

在对一个表聚簇之后，openGauss会记录在哪个索引上建立了聚集。 CLUSTER table\_name的聚集形式在之前的同一个索引的表上重新聚集。用户也可以用ALTER TABLE的CLUSTER或SET WITHOUT CLUSTER形式来设置索引来用于后续的聚集操作或清除任何之前的设置。

不含参数的CLUSTER会将当前用户所拥有的数据库中的先前做过聚簇的所有表重新处理，或者系统管理员调用的这些表。

在对一个表进行聚簇的时候，会在其上请求一个ACCESS EXCLUSIVE锁。这样就避免了在CLUSTER完成之前对此表执行其它的操作\(包括读写\)。

## 注意事项<a name="zh-cn_topic_0283137352_zh-cn_topic_0237122092_zh-cn_topic_0059778981_s4e7b14ca57a84f719386c5788cc36e67"></a>

-   只有行存B-tree索引支持CLUSTER操作。
-   如果用户只是随机访问表中的行，那么表中数据的实际存储顺序是无关紧要的。但是， 如果对某些数据的访问多于其它数据，而且有一个索引将这些数据分组， 那么将使用CLUSTER中会有所帮助。如果从一个表中请求一定索引范围的值， 或者是一个索引值对应多行，CLUSTER也会有助于应用，因为如果索引标识出第一匹配行所在的存储页，所有其它行也可能已经在同一个存储页里了，这样便节省了磁盘访问的时间，加速了查询。
-   在聚簇过程中，系统先创建一个按照索引顺序建立的表的临时拷贝。同时也建立表上的每个索引的临时拷贝。因此，需要磁盘上有足够的剩余空间， 至少是表大小和索引大小的和。
-   因为CLUSTER记忆聚集信息，可以在第一次的时候手工对表进行聚簇，然后设置一个类似VACUUM的时间，这样就可以周期地自动对表进行聚簇操作。
-   因为优化器记录着有关表的排序的统计，所以建议在新近聚簇的表上运行ANALYZE。否则，优化器可能会选择很差劲的查询规划。
-   CLUSTER不允许在事务中执行。
-   如果没有打开xc\_maintenance\_mode参数，那么CLUSTER操作将跳过所有系统表。

## 语法格式<a name="zh-cn_topic_0283137352_zh-cn_topic_0237122092_zh-cn_topic_0059778981_s893ab8c9210b4276b975b47546c2f17e"></a>

-   对一个表进行聚簇排序。

    ```
    CLUSTER [ VERBOSE ] table_name [ USING index_name ];
    ```

-   对一个分区进行聚簇排序。

    ```
    CLUSTER [ VERBOSE ] table_name PARTITION ( partition_name ) [ USING index_name ];
    ```

-   对已做过聚簇的表重新进行聚簇。

    ```
    CLUSTER [ VERBOSE ];
    ```


## 参数说明<a name="zh-cn_topic_0283137352_zh-cn_topic_0237122092_zh-cn_topic_0059778981_s28dde0419d7548e78e12c7de2cb64fa8"></a>

-   **VERBOSE**

    启用显示进度信息。

-   **table\_name**

    表名称。

    取值范围：已存在的表名称。

-   **index\_name**

    索引名称。

    取值范围：已存在的索引名称。

-   **partition\_name**

    分区名称。

    取值范围：已存在的分区名称。


## 示例<a name="zh-cn_topic_0283137352_zh-cn_topic_0237122092_zh-cn_topic_0059778981_sdb050484e7b9488899733d8718cd9dad"></a>

```
-- 创建一个分区表。
openGauss=# CREATE TABLE tpcds.inventory_p1
(
    INV_DATE_SK               INTEGER               NOT NULL,
    INV_ITEM_SK               INTEGER               NOT NULL,
    INV_WAREHOUSE_SK          INTEGER               NOT NULL,
    INV_QUANTITY_ON_HAND      INTEGER
)
PARTITION BY RANGE(INV_DATE_SK)
(
        PARTITION P1 VALUES LESS THAN(2451179),
        PARTITION P2 VALUES LESS THAN(2451544),
        PARTITION P3 VALUES LESS THAN(2451910),
        PARTITION P4 VALUES LESS THAN(2452275),
        PARTITION P5 VALUES LESS THAN(2452640),
        PARTITION P6 VALUES LESS THAN(2453005),
        PARTITION P7 VALUES LESS THAN(MAXVALUE)
);

-- 创建索引ds_inventory_p1_index1。
openGauss=# CREATE INDEX ds_inventory_p1_index1 ON tpcds.inventory_p1 (INV_ITEM_SK) LOCAL;

-- 对表tpcds.inventory_p1进行聚集。
openGauss=# CLUSTER tpcds.inventory_p1 USING ds_inventory_p1_index1;

-- 对分区p3进行聚集。
openGauss=# CLUSTER tpcds.inventory_p1 PARTITION (p3) USING ds_inventory_p1_index1;

-- 对数据库中可以进行聚集的表进聚集。
openGauss=# CLUSTER;

--删除索引。
openGauss=# DROP INDEX tpcds.ds_inventory_p1_index1;

--删除分区表。
openGauss=# DROP TABLE tpcds.inventory_p1;
```

## 优化建议<a name="zh-cn_topic_0283137352_zh-cn_topic_0237122092_zh-cn_topic_0059778981_section8558510163121"></a>

-   cluster
    -   建议在新近聚簇的表上运行ANALYZE。否则，优化器可能会选择很差劲的查询规划。
    -   不允许在事务中执行CLUSTER。


