# CREATE INDEX<a name="ZH-CN_TOPIC_0289900160"></a>

## 功能描述<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s10bd477b6f0a4b4687123335b61aa981"></a>

在指定的表上创建索引。

索引可以用来提高数据库查询性能，但是不恰当的使用将导致数据库性能下降。建议仅在匹配如下某条原则时创建索引：

-   经常执行查询的字段。
-   在连接条件上创建索引，对于存在多字段连接的查询，建议在这些字段上建立组合索引。例如，select \* from t1 join t2 on t1.a=t2.a and t1.b=t2.b，可以在t1表上的a，b字段上建立组合索引。
-   where子句的过滤条件字段上（尤其是范围条件）。
-   在经常出现在order by、group by和distinct后的字段。

在分区表上创建索引与在普通表上创建索引的语法不太一样，使用时请注意，如不支持创建部分索引。

## 注意事项<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s31780559299b4f62bec935a2c4679b84"></a>

-   索引自身也占用存储空间、消耗计算资源，创建过多的索引将对数据库性能造成负面影响（尤其影响数据导入的性能，建议在数据导入后再建索引）。因此，仅在必要时创建索引。
-   索引定义里的所有函数和操作符都必须是immutable类型的，即它们的结果必须只能依赖于它们的输入参数，而不受任何外部的影响（如另外一个表的内容或者当前时间）。这个限制可以确保该索引的行为是定义良好的。要在一个索引上或WHERE中使用用户定义函数，请把它标记为immutable类型函数。
-   分区表索引分为LOCAL索引与GLOBAL索引，LOCAL索引与某个具体分区绑定，而GLOBAL索引则对应整个分区表。
-   列存表支持的PSORT和B-tree索引都不支持创建表达式索引、部分索引，PSORT不支持创建唯一索引，B-tree支持创建唯一索引。
-   列存表支持的GIN索引支持创建表达式索引，但表达式不能包含空分词、空列和多列，不支持创建部分索引和唯一索引。
-   HASH索引目前仅限于行存表索引、临时表索引和分区表LOCAL索引，且不支持创建多字段索引。
-   被授予CREATE ANY INDEX权限的用户，可以在public模式和用户模式下创建索引。
-   如果表达式索引中调用的是用户自定义函数，按照函数创建者权限执行表达式索引函数。
-   仅支持在B兼容性数据库下指定COMMENT和可见性VISIBLE\INVISIBLE。

## 语法格式<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_sa24c1a88574742bcb5427f58f5abb732"></a>

-   在表上创建索引。

    ```
    CREATE [ UNIQUE ] INDEX [ CONCURRENTLY ] [ IF NOT EXISTS ] [ [schema_name.]index_name ] ON table_name [ USING method ]
        ({ { column_name [ ( length ) ] | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ] }[, ...] )
        [ INCLUDE ( column_name [, ...] )]
        [ WITH ( {storage_parameter = value} [, ... ] ) ]
        [ TABLESPACE tablespace_name ]
        [ COMMENT text ]
        [ VISIBLE | INVISIBLE ]
        [ WHERE predicate ];
    ```

-   在分区表上创建索引。

    ```
    CREATE [ UNIQUE ] INDEX [ IF NOT EXISTS ] [ [schema_name.]index_name ] ON table_name [ USING method ]
        ( {{ column_name [ ( length ) ] | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS LAST ] }[, ...] )
        [ LOCAL [ ( { PARTITION index_partition_name [ ( SUBPARTITION index_subpartition_name [, ...] ) ] [ TABLESPACE index_partition_tablespace ] } [, ...] ) ] | GLOBAL ]
        [ INCLUDE ( column_name [, ...] )]
        [ WITH ( { storage_parameter = value } [, ...] ) ]
        [ TABLESPACE tablespace_name ]
        [ COMMENT text ]
        [ VISIBLE | INVISIBLE ]
        [ WHERE predicate ];
    ```


## 参数说明<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s82e47e35c54c477094dcafdc90e5d85a"></a>

-   **UNIQUE**

    创建唯一性索引，每次添加数据时检测表中是否有重复值。如果插入或更新的值会引起重复的记录时，将导致一个错误。

    目前只有B-tree及UBTree索引支持唯一索引。

-   **CONCURRENTLY**

    以不阻塞DML的方式创建索引（加ShareUpdateExclusiveLock锁）。创建索引时，一般会阻塞其他语句对该索引所依赖表的访问。指定此关键字，可以实现创建过程中不阻塞DML。

    -   此选项只能指定一个索引的名称。
    -   普通CREATE INDEX命令可以在事务内执行，但是CREATE INDEX CONCURRENTLY不可以在事务内执行。
    -   列存表、分区表和临时表不支持CONCURRENTLY方式创建索引。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   创建索引时指定此关键字，需要执行先后两次对该表的全表扫描来完成build，第一次扫描的时候创建索引，不阻塞读写操作；第二次扫描的时候合并更新第一次扫描到目前为止发生的变更。
    >-   由于需要执行两次对表的扫描和build，而且必须等待现有的所有可能对该表执行修改的事务结束。这意味着该索引的创建比正常耗时更长，同时因此带来的CPU和I/O消耗对其他业务也会造成影响。
    >-   如果在索引构建时发生失败，那会留下一个“不可用”的索引。这个索引会被查询忽略，但它仍消耗更新开销。这种情况推荐的恢复方法是删除该索引并尝试再次CONCURRENTLY建索引。
    >-   由于在第二次扫描之后，索引构建必须等待任何持有早于第二次扫描拿的快照的事务终止，而且建索引时加的ShareUpdateExclusiveLock锁（4级）会和大于等于4级的锁冲突，在创建这类索引时，容易引发卡住（hang）或者死锁问题。例如：
    >    -   两个会话对同一个表创建CONCURRENTLY索引，会引起死锁问题；
    >    -   两个会话，一个对表创建CONCURRENTLY索引，一个drop table，会引起死锁问题；
    >    -   三个会话，会话1先对表a加锁，不提交，会话2接着对表b创建CONCURRENTLY索引，会话3接着对表a执行写入操作，在会话1事务未提交之前，会话2会一直被阻塞；
    >    -   将事务隔离级别设置成可重复读（默认为读已提交），起两个会话，会话1起事务对表a执行写入操作，不提交，会话2对表b创建CONCURRENTLY索引，在会话1事务未提交之前，会话2会一直被阻塞。

-   **schema\_name**

    模式的名称。

    取值范围：已存在模式名。

-   **index\_name**

    要创建的索引名，索引的模式与表相同。

    取值范围：字符串，要符合标识符的命名规范。

-   **table\_name**

    需要为其创建索引的表的名称，可以用模式修饰。

    取值范围：已存在的表名。

-   **USING method**

    指定创建索引的方法。

    取值范围：

    -   btree：B-tree索引使用一种类似于B+树的结构来存储数据的键值，通过这种结构能够快速的查找索引。btree适合支持比较查询以及查询范围。
    -   hash：Hash索引使用Hash函数对索引的关键字进行散列。只能处理简单等值比较，比较适合在索引值较长的情况下使用。
    -   gin：GIN索引是倒排索引，可以处理包含多个键的值（比如数组）。
    -   gist：Gist索引适用于几何和地理等多维数据类型和集合数据类型。目前支持的数据类型有box、point、poly、circle、tsvector、tsquery、range。
    -   Psort：Psort索引。针对列存表进行局部排序索引。
    -   ubtree：仅供ustore表使用的多版本B-tree索引，索引页面上包含事务信息，能并自主回收页面。ubtree索引默认开启insertpt功能。

    行存表（ASTORE存储引擎）支持的索引类型：btree（行存表缺省值）、hash、gin、gist。行存表（USTORE存储引擎）支持的索引类型：ubtree。列存表支持的索引类型：Psort（列存表缺省值）、btree、gin。全局临时表不支持GIN索引和Gist索引。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >列存表对GIN索引支持仅限于对于tsvector类型的支持，即创建列存GIN索引入参需要为to\_tsvector函数（的返回值）。此方法为GIN索引比较普遍的使用方式。

-   **column\_name**

    表中需要创建索引的列的名称（字段名）。

    如果索引方式支持多字段索引，可以声明多个字段。全局索引最多可以声明31个字段，其他索引最多可以声明32个字段。

-   **column\_name ( length )**

    创建一个基于该表一个字段的前缀键索引，column_name为前缀键的字段名，length为前缀长度。

    前缀键将取指定字段数据的前缀作为索引键值，可以减少索引占用的存储空间。含有前缀键字段的过滤条件和连接条件可以使用索引。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-  此语法只在sql_compatibility=B时有效，sql_compatibility为其他值的情况下，此子句将被视作函数表达式键。
    >-  前缀键支持的索引方法：btree、ubtree。
    >-  前缀键的字段的数据类型必须是二进制类型或字符类型（不包括特殊字符类型）。
    >-  前缀长度必须是不超过2676的正整数，并且不能超过字段的最大长度。对于二进制类型，前缀长度以字节数为单位。对于非二进制字符类型，前缀长度以字符数为单位。键值的实际长度受内部页面限制，若字段中含有多字节字符、或者一个索引上有多个键，索引行长度可能会超限，导致报错，设定较长的前缀长度时请考虑此情况。
    >-  CREATE INDEX语法中，不支持以下关键字作为前缀键的字段名称：COALESCE、EXTRACT、GREATEST、LEAST、NULLIF、NVARCHAR、NVL、OVERLAY、POSITION、SUBSTRING、TIMESTAMPDIFF、TREAT、TRIM、XMLCONCAT、XMLELEMENT、XMLEXISTS、XMLFOREST、XMLPARSE、XMLPI、XMLROOT、XMLSERIALIZE。

-   **expression**

    创建一个基于该表的一个或多个字段的表达式索引，通常必须写在圆括弧中。如果表达式有函数调用的形式，圆括弧可以省略。

    表达式索引可用于获取对基本数据的某种变形的快速访问。比如，一个在upper\(col\)上的函数索引将允许WHERE upper\(col\) = 'JIM'子句使用索引。

    在创建表达式索引时，如果表达式中包含IS NULL子句，则这种索引是无效的。此时，建议用户尝试创建一个部分索引。

-   **COLLATE collation**

    COLLATE子句指定列的排序规则（该列必须是可排列的数据类型）。如果没有指定，则使用默认的排序规则。排序规则可以使用“select \* from pg\_collation”命令从pg\_collation系统表中查询，默认的排序规则为查询结果中以default开始的行。

-   **opclass**

    操作符类的名称。对于索引的每一列可以指定一个操作符类，操作符类标识了索引那一列的使用的操作符。例如一个B-tree索引在一个四字节整数上可以使用int4\_ops；这个操作符类包括四字节整数的比较函数。实际上对于列上的数据类型默认的操作符类是足够用的。操作符类主要用于一些有多种排序的数据。例如，用户想按照绝对值或者实数部分排序一个复数。能通过定义两个操作符类然后当建立索引时选择合适的类。

-   **ASC**

    指定按升序排序（默认）。

-   **DESC**

    指定按降序排序。

-   **NULLS FIRST**

    指定空值在排序中排在非空值之前，当指定DESC排序时，本选项为默认的。

-   **NULLS LAST**

    指定空值在排序中排在非空值之后，未指定DESC排序时，本选项为默认的。

-   **LOCAL**

    指定创建的分区索引为LOCAL索引。

-   **GLOBAL**

    指定创建的分区索引为GLOBAL索引，当不指定LOCAL、GLOBAL关键字时，默认创建GLOBAL索引。

-   **INCLUDE  \( column\_name \[, ...\]**  \)

    可选的 INCLUDE 子句指定将一些非键列（non-key columns）包含在索引中。非键列不能用于作为索引扫描的加速搜索条件，同时在检查索引的唯一性约束时会忽略它们。

    仅索引扫描 \(Index Only Scan\) 可以直接返回非键列中的内容，而不必去访问索引所对应的堆表。

    将非键列添加为 INCLUDE 列需要保守一些，尤其是对于宽列。如果索引元组超过索引类型允许的最大大小，数据将插入失败。需要注意的是，任何情况下为索引添加非键列都会增加索引的空间占用，从而可能减慢搜索速度。

    目前只有ubtree索引访问方式支持该特性。非键列会被保存在与堆元组对应的索引叶子元组中，不会包含在索引上层页面的元组中。

-   **WITH \( \{storage\_parameter = value\} \[, ... \] \)**

    指定索引方法的存储参数。

    取值范围：

    只有GIN索引支持FASTUPDATE，GIN\_PENDING\_LIST\_LIMIT参数。GIN和Psort之外的索引都支持FILLFACTOR参数。只有UBTREE索引支持INDEXSPLIT参数。

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

    -   INDEXSPLIT

        UBTREE索引选择采取哪种分裂策略。其中DEFAULT策略指的是与BTREE相同的分裂策略。INSERTPT策略能在某些场景下显著降低索引空间占用。

        取值范围：INSERTPT, DEFAULT

        默认值：INSERTPT


-   **TABLESPACE tablespace\_name**

    指定索引的表空间，如果没有声明则使用默认的表空间。

    取值范围：已存在的表空间名。

-   **COMMENT text**

    指定索引的注释，如果没有声明则注释为空。

-   **VISIBLE | INVISIBLE**

    指定索引是否可见，如果没有声明则默认为VISIBLE。

- **WHERE predicate**

  创建一个部分索引。部分索引是一个只包含表的一部分记录的索引，通常是该表中比其他部分数据更有用的部分。例如，有一个表，表里包含已记账和未记账的定单，未记账的定单只占表的一小部分而且这部分是最常用的部分，此时就可以通过只在未记账部分创建一个索引来改善性能。另外一个可能的用途是使用带有UNIQUE的WHERE强制一个表的某个子集的唯一性。

  取值范围：predicate表达式只能引用表的字段，它可以使用所有字段，而不仅是被索引的字段。目前，子查询和聚集表达式不能出现在WHERE子句里。不建议使用int等数值类型作为predicate，因为int等数值类型可以隐式转换为bool值（非0值隐式转换为true，0转换为false），可能导致非预期的结果。

  对于分区表索引，当创建索引带GLOBAL/LOCAL关键字，或者最终创建的索引类型为GLOBAL索引时，不支持带WHERE子句创建索引。

-   **PARTITION index\_partition\_name**

    索引分区的名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **SUBPARTITION index\_subpartition\_name**

    索引二级分区的名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **TABLESPACE index\_partition\_tablespace**

    索引分区的表空间。

    取值范围：如果没有声明，将使用分区表索引的表空间index\_tablespace。

-   **COMPRESSTYPE**

    索引参数，设置索引压缩算法。1代表pglz算法，2代表zstd算法，默认不压缩。（仅支持B-TREE索引）

    取值范围：0\~2，默认值为0。

-   **COMPRESS\_LEVEL**

    索引参数，设置索引压缩算法等级，仅当COMPRESSTYPE为2时生效。压缩等级越高，索引的压缩效果越好，索引的访问速度越慢。（仅支持B-TREE索引）

    取值范围：-31\~31，默认值为0。

-   **COMPRESS\_CHUNK\_SIZE**

    索引参数，设置索引压缩chunk块大小。chunk数据块越小，预期能达到的压缩效果越好，同时数据越离散，影响索引的访问速度。该参数生效后不允许修改。（仅支持B-TREE索引）

    取值范围：与页面大小有关。在页面大小为8k场景，取值范围为：512、1024、2048、4096。

    默认值：4096

- **COMPRESS\_PREALLOC\_CHUNKS**

  索引参数，设置索引压缩chunk块预分配数量。预分配数量越大，索引的压缩率相对越差，离散度越小，访问性能越好。（仅支持B-TREE索引）

  取值范围：0\~7，默认值为0。

  - 当COMPRESS\_CHUNK_SIZE为512和1024时，支持预分配设置最大为7。
  - 当COMPRESS\_CHUNK_SIZE为2048时，支持预分配设置最大为3。
  - 当COMPRESS\_CHUNK_SIZE为4096时，支持预分配设置最大为1。

-   **COMPRESS\_BYTE\_CONVERT**

    索引参数，设置索引压缩字节转换预处理。在一些场景下可以提升压缩效果，同时会导致一定性能劣化。

    取值范围：布尔值，默认关闭。

-   **COMPRESS\_DIFF\_CONVERT**

    索引参数，设置索引压缩字节差分预处理。只能与compress\_byte\_convert一起使用。在一些场景下可以提升压缩效果，同时会导致一定性能劣化。

    取值范围：布尔值，默认关闭。


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

## 相关链接<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_sa839a210de6a48efa3945de3e1d661fc"></a>

[ALTER INDEX](ALTER-INDEX.md)，[DROP INDEX](DROP-INDEX.md)

## 优化建议<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_section3814797010859"></a>

-   create index

    建议仅在匹配如下条件之一时创建索引：

    -   经常执行查询的字段。
    -   在连接条件上创建索引，对于存在多字段连接的查询，建议在这些字段上建立组合索引。例如，select \* from t1 join t2 on t1.a=t2.a and t1.b=t2.b，可以在t1表上的a，b字段上建立组合索引。
    -   where子句的过滤条件字段上（尤其是范围条件）。
    -   在经常出现在order by、group by和distinct后的字段。

    约束限制：

    -   分区表上不支持创建部分索引。

    -   分区表创建GLOBAL索引时，存在以下约束条件：
        -   不支持表达式索引、部分索引
        -   不支持列存表
        -   仅支持B-tree索引

    -   在相同属性列上，分区LOCAL索引与GLOBAL索引不能共存。
    -   GLOBAL索引，最大支持31列。
    -   如果alter语句不带有UPDATE GLOBAL INDEX，那么原有的GLOBAL索引将失效，查询时将使用其他索引进行查询；如果alter语句带有UPDATE GLOBAL INDEX，原有的GLOBAL索引仍然有效，并且索引功能正确。
    -   对于分区表的local unique索引，索引键必须包含所有的分区键。

