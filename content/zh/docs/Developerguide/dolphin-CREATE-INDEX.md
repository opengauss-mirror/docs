# CREATE INDEX<a name="ZH-CN_TOPIC_0289900160"></a>

## 功能描述<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

在指定的表上创建索引。

索引可以用来提高数据库查询性能，但是不恰当的使用将导致数据库性能下降。建议仅在匹配如下某条原则时创建索引：

-   经常执行查询的字段。
-   在连接条件上创建索引，对于存在多字段连接的查询，建议在这些字段上建立组合索引。例如，select \* from t1 join t2 on t1.a=t2.a and t1.b=t2.b，可以在t1表上的a、b字段上建立组合索引。
-   where子句的过滤条件字段上（尤其是范围条件）。
-   在经常出现在order by、group by和distinct后的字段。

在分区表上创建索引与在普通表上创建索引的语法不太一样，使用时请注意，如分区表上不支持并行创建索引，不支持创建部分索引。

新增可以指定 ALGORITHM 选项语法。

## 注意事项<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s31780559299b4f62bec935a2c4679b84"></a>

-   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。
    新增支持option的无序排列。

## 语法格式<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_sa24c1a88574742bcb5427f58f5abb732"></a>

-   在表上创建索引。

    ```
    CREATE [ UNIQUE ] INDEX [ CONCURRENTLY ] [ [schema_name.]index_name ]
        { ON table_name [ USING method ] | [ USING method ] ON table_name }
        ({ { column_name | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ] }[, ...] )
        [ index_option ]
        [ WHERE predicate | ALGORITHM [=] {DEFAULT | INPLACE | COPY} ];
    ```

    ```
    CREATE [UNIQUE] INDEX index_name
        ON tbl_name (key_part,...)
        [USING {BTREE | HASH}]
    ```

-   在分区表上创建索引。

    ```
    CREATE [ UNIQUE ] INDEX [ [schema_name.]index_name ]
        { ON table_name [ USING method ] | [ USING method ] ON table_name }
        ( {{ column_name | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS LAST ] }[, ...] )
        [ LOCAL [ ( { PARTITION index_partition_name [ ( SUBPARTITION index_subpartition_name [, ...] ) ] [ TABLESPACE index_partition_tablespace ] } [, ...] ) ] | GLOBAL ]
        [ index_option ] [ALGORITHM [=] {DEFAULT | INPLACE | COPY} ]
    ```

## 参数说明<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s82e47e35c54c477094dcafdc90e5d85a"></a>

-   **column\_name ( length )**

    创建一个基于该表一个字段的前缀键索引，column_name为前缀键的字段名，length为前缀长度。

    前缀键将取指定字段数据的前缀作为索引键值，可以减少索引占用的存储空间。含有前缀键字段的过滤条件和连接条件可以使用索引。

    >![](public_sys-resources/icon-note.gif) **说明：**
    > -  前缀键支持的索引方法：btree、ubtree。
    > -  前缀键的字段的数据类型必须是二进制类型或字符类型（不包括特殊字符类型）。
    > -  前缀长度必须是不超过2676的正整数，并且不能超过字段的最大长度。对于二进制类型，前缀长度以字节数为单位。对于非二进制字符类型，前缀长度以字符数为单位。键值的实际长度受内部页面限制，若字段中含有多字节字符、或者一个索引上有多个键，索引行长度可能会超限，导致报错，设定较长的前缀长度时请考虑此情况。
    > -  CREATE INDEX语法中，不支持以下关键字作为前缀键的字段名称：COALESCE、CONVERT、DAYOFMONTH、DAYOFWEEK、DAYOFYEAR、DB_B_FORMAT、EXTRACT、GREATEST、HOUR_P、IFNULL、LEAST、LOCATE、MICROSECOND_P、MID、MINUTE_P、NULLIF、NVARCHAR、NVL、OVERLAY、POSITION、QUARTER、SECOND_P、SUBSTR、SUBSTRING、TEXT_P、TIME、TIMESTAMP、TIMESTAMPDIFF、TREAT、TRIM、WEEKDAY、WEEKOFYEAR、XMLCONCAT、XMLELEMENT、XMLEXISTS、XMLFOREST、XMLPARSE、XMLPI、XMLROOT、XMLSERIALIZE。若含有上述关键字的前缀键所在的索引是通过ALTER TABLE或CREATE TABLE语法创建的，导出的CREATE INDEX语句可能无法成功执行，请尽量不要使用上述关键字作为前缀键的列名称。

- **index\_option**

    创建索引时可指定选项，其语法为：

    ```
    INCLUDE ( column_name [, ...] )
    | WITH ( { storage_parameter = value } [, ...] )
    | TABLESPACE tablespace_name
    ```

    其中，TABLESPACE选项允许输入多次，以最后一次的输入为准。

- **ALGORITHM**

    指定算法，可选项：DEFAULT、INPLACE、COPY。当前只做语法兼容，暂无实际功能。

## 示例<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s985289833081489e9d77c485755bd362"></a>

```
--创建表tpcds.ship_mode_t1。
openGauss=# create schema tpcds;
openGauss=# CREATE TABLE tpcds.ship_mode_t1
(
    SM_SHIP_MODE_SK           INTEGER               NOT NULL,
    SM_SHIP_MODE_ID           CHAR(16)              NOT NULL,
    SM_TYPE                   CHAR(30)                      ,
    SM_CODE                   CHAR(10)                      ,
    SM_CARRIER                CHAR(20)                      ,
    SM_CONTRACT               CHAR(20)
) 
;

--在表tpcds.ship_mode_t1上的SM_SHIP_MODE_SK字段上创建普通的唯一索引。
openGauss=# CREATE UNIQUE INDEX ds_ship_mode_t1_index1 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK);

--在表tpcds.ship_mode_t1上的SM_SHIP_MODE_SK字段上创建指定B-tree索引。
openGauss=# CREATE INDEX ds_ship_mode_t1_index4 ON tpcds.ship_mode_t1 USING btree(SM_SHIP_MODE_SK);

--在表tpcds.ship_mode_t1上SM_CODE字段上创建表达式索引。
openGauss=# CREATE INDEX ds_ship_mode_t1_index2 ON tpcds.ship_mode_t1(SUBSTR(SM_CODE,1 ,4));

--在表tpcds.ship_mode_t1上的SM_SHIP_MODE_SK字段上创建SM_SHIP_MODE_SK大于10的部分索引。
openGauss=# CREATE UNIQUE INDEX ds_ship_mode_t1_index3 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK) WHERE SM_SHIP_MODE_SK>10;

--重命名一个现有的索引。
openGauss=# ALTER INDEX tpcds.ds_ship_mode_t1_index1 RENAME TO ds_ship_mode_t1_index5;

--设置索引不可用。
openGauss=# ALTER INDEX tpcds.ds_ship_mode_t1_index2 UNUSABLE;

--重建索引。
openGauss=# ALTER INDEX tpcds.ds_ship_mode_t1_index2 REBUILD;

--删除一个现有的索引。
openGauss=# DROP INDEX tpcds.ds_ship_mode_t1_index2;

--删除表。
openGauss=# DROP TABLE tpcds.ship_mode_t1;

--创建表空间。
openGauss=# CREATE TABLESPACE example1 RELATIVE LOCATION 'tablespace1/tablespace_1';
openGauss=# CREATE TABLESPACE example2 RELATIVE LOCATION 'tablespace2/tablespace_2';
openGauss=# CREATE TABLESPACE example3 RELATIVE LOCATION 'tablespace3/tablespace_3';
openGauss=# CREATE TABLESPACE example4 RELATIVE LOCATION 'tablespace4/tablespace_4';
--创建表tpcds.customer_address_p1。
openGauss=# CREATE TABLE tpcds.customer_address_p1
(
    CA_ADDRESS_SK             INTEGER               NOT NULL,
    CA_ADDRESS_ID             CHAR(16)              NOT NULL,
    CA_STREET_NUMBER          CHAR(10)                      ,
    CA_STREET_NAME            VARCHAR(60)                   ,
    CA_STREET_TYPE            CHAR(15)                      ,
    CA_SUITE_NUMBER           CHAR(10)                      ,
    CA_CITY                   VARCHAR(60)                   ,
    CA_COUNTY                 VARCHAR(30)                   ,
    CA_STATE                  CHAR(2)                       ,
    CA_ZIP                    CHAR(10)                      ,
    CA_COUNTRY                VARCHAR(20)                   ,
    CA_GMT_OFFSET             DECIMAL(5,2)                  ,
    CA_LOCATION_TYPE          CHAR(20)
)
TABLESPACE example1
PARTITION BY RANGE(CA_ADDRESS_SK)
( 
   PARTITION p1 VALUES LESS THAN (3000),
   PARTITION p2 VALUES LESS THAN (5000) TABLESPACE example1,
   PARTITION p3 VALUES LESS THAN (MAXVALUE) TABLESPACE example2
)
ENABLE ROW MOVEMENT;
--创建分区表索引ds_customer_address_p1_index1，不指定索引分区的名称。
openGauss=# CREATE INDEX ds_customer_address_p1_index1 ON tpcds.customer_address_p1(CA_ADDRESS_SK) LOCAL; 
--创建分区表索引ds_customer_address_p1_index2，并指定索引分区的名称。
openGauss=# CREATE INDEX ds_customer_address_p1_index2 ON tpcds.customer_address_p1(CA_ADDRESS_SK) LOCAL
(
    PARTITION CA_ADDRESS_SK_index1,
    PARTITION CA_ADDRESS_SK_index2 TABLESPACE example3,
    PARTITION CA_ADDRESS_SK_index3 TABLESPACE example4
) 
TABLESPACE example2;

--创建GLOBAL分区索引
openGauss=CREATE INDEX ds_customer_address_p1_index3 ON tpcds.customer_address_p1(CA_ADDRESS_ID) GLOBAL;

--不指定关键字，默认创建GLOBAL分区索引
openGauss=CREATE INDEX ds_customer_address_p1_index4 ON tpcds.customer_address_p1(CA_ADDRESS_ID);

--修改分区表索引CA_ADDRESS_SK_index2的表空间为example1。
openGauss=# ALTER INDEX tpcds.ds_customer_address_p1_index2 MOVE PARTITION CA_ADDRESS_SK_index2 TABLESPACE example1;

--修改分区表索引CA_ADDRESS_SK_index3的表空间为example2。
openGauss=# ALTER INDEX tpcds.ds_customer_address_p1_index2 MOVE PARTITION CA_ADDRESS_SK_index3 TABLESPACE example2;

--重命名分区表索引。
openGauss=# ALTER INDEX tpcds.ds_customer_address_p1_index2 RENAME PARTITION CA_ADDRESS_SK_index1 TO CA_ADDRESS_SK_index4;

--删除索引和分区表。
openGauss=# DROP INDEX tpcds.ds_customer_address_p1_index1;
openGauss=# DROP INDEX tpcds.ds_customer_address_p1_index2;
openGauss=# DROP TABLE tpcds.customer_address_p1;
--删除表空间。
openGauss=# DROP TABLESPACE example1;
openGauss=# DROP TABLESPACE example2;
openGauss=# DROP TABLESPACE example3;
openGauss=# DROP TABLESPACE example4;

--创建列存表以及列存表GIN索引。
openGauss=# create table cgin_create_test(a int, b text) with (orientation = column);
CREATE TABLE
openGauss=# create index cgin_test on cgin_create_test using gin(to_tsvector('ngram', b));
CREATE INDEX
```

## 相关链接<a name="section156744489391"></a>

[CREATE INDEX](CREATE-INDEX.md)