# CREATE INDEX<a name="ZH-CN_TOPIC_0242370570"></a>

## 功能描述<a name="zh-cn_topic_0237122106_zh-cn_topic_0059777455_s10bd477b6f0a4b4687123335b61aa981"></a>

在指定的表上创建索引。

索引可以用来提高数据库查询性能，但是不恰当的使用将导致数据库性能下降。建议仅在匹配如下某条原则时创建索引：

-   经常执行查询的字段。
-   在连接条件上创建索引，对于存在多字段连接的查询，建议在这些字段上建立组合索引。例如，select \* from t1 join t2 on t1.a=t2.a and t1.b=t2.b，可以在t1表上的a，b字段上建立组合索引。
-   where子句的过滤条件字段上（尤其是范围条件）。
-   在经常出现在order by、group by和distinct后的字段。

在分区表上创建索引与在普通表上创建索引的语法不太一样，使用时请注意，如分区表上不支持并行创建索引、不支持创建部分索引、不支持NULL FIRST特性。

## 注意事项<a name="zh-cn_topic_0237122106_zh-cn_topic_0059777455_s31780559299b4f62bec935a2c4679b84"></a>

-   索引自身也占用存储空间、消耗计算资源，创建过多的索引将对数据库性能造成负面影响（尤其影响数据导入的性能，建议在数据导入后再建索引）。因此，仅在必要时创建索引。
-   索引定义里的所有函数和操作符都必须是immutable类型的，即它们的结果必须只能依赖于它们的输入参数，而不受任何外部的影响（如另外一个表的内容或者当前时间）。这个限制可以确保该索引的行为是定义良好的。要在一个索引上或WHERE中使用用户定义函数，请把它标记为immutable类型函数。
-   在分区表上创建唯一索引时，索引项中必须包含分布列和所有分区键。
-   列存表支持的PSORT和B-tree索引都不支持创建表达式索引、部分索引和唯一索引。
-   列存表支持的GIN索引支持创建表达式索引，但表达式不能包含空分词、空列和多列，不支持创建部分索引和唯一索引。

## 语法格式<a name="zh-cn_topic_0237122106_zh-cn_topic_0059777455_sa24c1a88574742bcb5427f58f5abb732"></a>

-   在表上创建索引。

    ```
    CREATE [ UNIQUE ] INDEX [ [schemaname.]index_name ] ON table_name [ USING method ]
        ({ { column_name | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ] }[, ...] )
        [ WITH ( {storage_parameter = value} [, ... ] ) ]
        [ TABLESPACE tablespace_name ]
        [ WHERE predicate ];
    ```

-   在分区表上创建索引。

    ```
    CREATE [ UNIQUE ] INDEX [ [schemaname.]index_name ] ON table_name [ USING method ]
        ( {{ column_name | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS LAST ] }[, ...] )
        LOCAL [ ( { PARTITION index_partition_name [ TABLESPACE index_partition_tablespace ] } [, ...] ) ]
        [ WITH ( { storage_parameter = value } [, ...] ) ]
        [ TABLESPACE tablespace_name ];
    ```


## 参数说明<a name="zh-cn_topic_0237122106_zh-cn_topic_0059777455_s82e47e35c54c477094dcafdc90e5d85a"></a>

-   **UNIQUE**

    创建唯一性索引，每次添加数据时检测表中是否有重复值。如果插入或更新的值会引起重复的记录时，将导致一个错误。

    目前只有行存表B-tree索引支持唯一索引。

-   **schema\_name**

    模式的名称。

    取值范围：已存在模式名。

-   **index\_name**

    要创建的索引名，不能包含模式名，索引的模式与表相同。

    取值范围：字符串，要符合标识符的命名规范。

-   **table\_name**

    需要为其创建索引的表的名称，可以用模式修饰。

    取值范围：已存在的表名。

-   **USING method**

    指定创建索引的方法。

    取值范围：

    -   btree：B-tree索引使用一种类似于B+树的结构来存储数据的键值，通过这种结构能够快速的查找索引。btree适合支持比较查询以及查询范围。
    -   gin：GIN索引是倒排索引，可以处理包含多个键的值（比如数组）。
    -   gist：Gist索引适用于几何和地理等多维数据类型和集合数据类型。
    -   Psort：Psort索引。针对列存表进行局部排序索引。

    行存表支持的索引类型：btree（行存表缺省值）、gin、gist。列存表支持的索引类型：Psort（列存表缺省值）、btree、gin。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >列存表对GIN索引支持仅限于对于tsvector类型的支持，即创建列存GIN索引入参需要为to\_tsvector函数（的返回值）。此方法为GIN索引比较普遍的使用方式。  

-   **column\_name**

    表中需要创建索引的列的名称（字段名）。

    如果索引方式支持多字段索引，可以声明多个字段。最多可以声明32个字段。

-   **expression**

    创建一个基于该表的一个或多个字段的表达式索引，通常必须写在圆括弧中。如果表达式有函数调用的形式，圆括弧可以省略。

    表达式索引可用于获取对基本数据的某种变形的快速访问。比如，一个在upper\(col\)上的函数索引将允许WHERE upper\(col\) = 'JIM'子句使用索引。

    在创建表达式索引时，如果表达式中包含IS NULL子句，则这种索引是无效的。此时，建议用户尝试创建一个部分索引。

-   **COLLATE collation**

    COLLATE子句指定列的排序规则（该列必须是可排列的数据类型）。如果没有指定，则使用默认的排序规则。

-   **opclass**

    操作符类的名称。对于索引的每一列可以指定一个操作符类，操作符类标识了索引那一列的使用的操作符。例如一个B-tree索引在一个四字节整数上可以使用int4\_ops；这个操作符类包括四字节整数的比较函数。实际上对于列上的数据类型默认的操作符类是足够用的。操作符类主要用于一些有多种排序的数据。例如，用户想按照绝对值或者实数部分排序一个复数。能通过定义两个操作符类然后当建立索引时选择合适的类。

-   **ASC**

    指定按升序排序 （默认）。

-   **DESC**

    指定按降序排序。

-   **NULLS FIRST**

    指定空值在排序中排在非空值之前，当指定DESC排序时，本选项为默认的。

-   **NULLS LAST**

    指定空值在排序中排在非空值之后，未指定DESC排序时，本选项为默认的。

-   **WITH \( \{storage\_parameter = value\} \[, ... \] \)**

    指定索引方法的存储参数。

    取值范围：

    只有GIN索引支持FASTUPDATE，GIN\_PENDING\_LIST\_LIMIT参数。GIN和Psort之外的索引都支持FILLFACTOR参数。

    -   FILLFACTOR

        一个索引的填充因子（fillfactor）是一个介于10和100之间的百分数。

        取值范围：10\~100

    -   FASTUPDATE

        GIN索引是否使用快速更新。

        取值范围：ON，OFF

        默认值：ON

    -   GIN\_PENDING\_LIST\_LIMIT

        当GIN索引启用fastupdate时，设置该索引pending list容量的最大值。

        取值范围：64\~INT\_MAX，单位KB。

        默认值：gin\_pending\_list\_limit的默认取决于GUC中gin\_pending\_list\_limit的值（默认为4MB）


-   **TABLESPACE tablespace\_name**

    指定索引的表空间，如果没有声明则使用默认的表空间。

    取值范围：已存在的表空间名。

-   **WHERE predicate**

    创建一个部分索引。部分索引是一个只包含表的一部分记录的索引，通常是该表中比其他部分数据更有用的部分。例如，有一个表，表里包含已记账和未记账的定单，未记账的定单只占表的一小部分而且这部分是最常用的部分，此时就可以通过只在未记账部分创建一个索引来改善性能。另外一个可能的用途是使用带有UNIQUE的WHERE强制一个表的某个子集的唯一性。

    取值范围：predicate表达式只能引用表的字段，它可以使用所有字段，而不仅是被索引的字段。目前，子查询和聚集表达式不能出现在WHERE子句里。

-   **PARTITION index\_partition\_name**

    索引分区的名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **TABLESPACE index\_partition\_tablespace**

    索引分区的表空间。

    取值范围：如果没有声明，将使用分区表索引的表空间index\_tablespace。


## 示例<a name="zh-cn_topic_0237122106_zh-cn_topic_0059777455_s985289833081489e9d77c485755bd362"></a>

```
--创建表tpcds.ship_mode_t1。
postgres=# create schema tpcds;
postgres=# CREATE TABLE tpcds.ship_mode_t1
(
    SM_SHIP_MODE_SK           INTEGER               NOT NULL,
    SM_SHIP_MODE_ID           CHAR(16)              NOT NULL,
    SM_TYPE                   CHAR(30)                      ,
    SM_CODE                   CHAR(10)                      ,
    SM_CARRIER                CHAR(20)                      ,
    SM_CONTRACT               CHAR(20)
) 
;

--在表tpcds.ship_mode_t1上的SM_SHIP_MODE_SK字段上创建普通索引。
postgres=# CREATE UNIQUE INDEX ds_ship_mode_t1_index1 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK);

--在表tpcds.ship_mode_t1上的SM_SHIP_MODE_SK字段上创建指定B-tree索引。
postgres=# CREATE INDEX ds_ship_mode_t1_index4 ON tpcds.ship_mode_t1 USING btree(SM_SHIP_MODE_SK);

--在表tpcds.ship_mode_t1上SM_CODE字段上创建表达式索引。
postgres=# CREATE INDEX ds_ship_mode_t1_index2 ON tpcds.ship_mode_t1(SUBSTR(SM_CODE,1 ,4));

--在表tpcds.ship_mode_t1上的SM_SHIP_MODE_SK字段上创建SM_SHIP_MODE_SK大于10的部分索引。
postgres=# CREATE UNIQUE INDEX ds_ship_mode_t1_index3 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK) WHERE SM_SHIP_MODE_SK>10;

--重命名一个现有的索引。
postgres=# ALTER INDEX tpcds.ds_ship_mode_t1_index1 RENAME TO ds_ship_mode_t1_index5;

--设置索引不可用。
postgres=# ALTER INDEX tpcds.ds_ship_mode_t1_index2 UNUSABLE;

--重建索引。
postgres=# ALTER INDEX tpcds.ds_ship_mode_t1_index2 REBUILD;

--删除一个现有的索引。
postgres=# DROP INDEX tpcds.ds_ship_mode_t1_index2;

--删除表。
postgres=# DROP TABLE tpcds.ship_mode_t1;

--创建表空间。
postgres=# CREATE TABLESPACE example1 RELATIVE LOCATION 'tablespace1/tablespace_1';
postgres=# CREATE TABLESPACE example2 RELATIVE LOCATION 'tablespace2/tablespace_2';
postgres=# CREATE TABLESPACE example3 RELATIVE LOCATION 'tablespace3/tablespace_3';
postgres=# CREATE TABLESPACE example4 RELATIVE LOCATION 'tablespace4/tablespace_4';
--创建表tpcds.customer_address_p1。
postgres=# CREATE TABLE tpcds.customer_address_p1
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
postgres=# CREATE INDEX ds_customer_address_p1_index1 ON tpcds.customer_address_p1(CA_ADDRESS_SK) LOCAL; 
--创建分区表索引ds_customer_address_p1_index2，并指定索引分区的名称。
postgres=# CREATE INDEX ds_customer_address_p1_index2 ON tpcds.customer_address_p1(CA_ADDRESS_SK) LOCAL
(
    PARTITION CA_ADDRESS_SK_index1,
    PARTITION CA_ADDRESS_SK_index2 TABLESPACE example3,
    PARTITION CA_ADDRESS_SK_index3 TABLESPACE example4
) 
TABLESPACE example2;

--修改分区表索引CA_ADDRESS_SK_index2的表空间为example1。
postgres=# ALTER INDEX tpcds.ds_customer_address_p1_index2 MOVE PARTITION CA_ADDRESS_SK_index2 TABLESPACE example1;

--修改分区表索引CA_ADDRESS_SK_index3的表空间为example2。
postgres=# ALTER INDEX tpcds.ds_customer_address_p1_index2 MOVE PARTITION CA_ADDRESS_SK_index3 TABLESPACE example2;

--重命名分区表索引。
postgres=# ALTER INDEX tpcds.ds_customer_address_p1_index2 RENAME PARTITION CA_ADDRESS_SK_index1 TO CA_ADDRESS_SK_index4;

--删除索引和分区表。
postgres=# DROP INDEX tpcds.ds_customer_address_p1_index1;
postgres=# DROP INDEX tpcds.ds_customer_address_p1_index2;
postgres=# DROP TABLE tpcds.customer_address_p1;
--删除表空间。
postgres=# DROP TABLESPACE example1;
postgres=# DROP TABLESPACE example2;
postgres=# DROP TABLESPACE example3;
postgres=# DROP TABLESPACE example4;

--创建列存表以及列存表GIN索引。
postgres=# create table cgin_create_test(a int, b text) with (orientation = column);
CREATE TABLE
postgres=# create index cgin_test on cgin_create_test using gin(to_tsvector('ngram', b));
CREATE INDEX
```

## 相关链接<a name="zh-cn_topic_0237122106_zh-cn_topic_0059777455_sa839a210de6a48efa3945de3e1d661fc"></a>

[ALTER INDEX](ALTER-INDEX.md)，[DROP INDEX](DROP-INDEX.md)

## 优化建议<a name="zh-cn_topic_0237122106_zh-cn_topic_0059777455_section3814797010859"></a>

-   create index

    建议仅在匹配如下条件之一时创建索引：

    -   经常执行查询的字段。
    -   在连接条件上创建索引，对于存在多字段连接的查询，建议在这些字段上建立组合索引。例如，select \* from t1 join t2 on t1.a=t2.a and t1.b=t2.b，可以在t1表上的a，b字段上建立组合索引。
    -   where子句的过滤条件字段上（尤其是范围条件）。
    -   在经常出现在order by、group by和distinct后的字段。

    约束限制：

    -   分区表上不支持创建部分索引、不支持NULL FIRST特性。

    -   在分区表上创建唯一索引时，索引项中必须包含分布列和所有分区键。


