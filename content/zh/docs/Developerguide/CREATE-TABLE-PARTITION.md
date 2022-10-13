# CREATE TABLE PARTITION<a name="ZH-CN_TOPIC_0289900346"></a>

## 功能描述<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_section1163224811518"></a>

创建分区表。分区表是把逻辑上的一张表根据某种方案分成几张物理块进行存储，这张逻辑上的表称之为分区表，物理块称之为分区。分区表是一张逻辑表，不存储数据，数据实际是存储在分区上的。

常见的分区方案有范围分区（Range Partitioning）、间隔分区（Interval Partitioning）、哈希分区（Hash Partitioning）、列表分区（List Partitioning）、数值分区（Value Partition）等。目前行存表支持范围分区、间隔分区、哈希分区、列表分区，列存表仅支持范围分区。

范围分区是根据表的一列或者多列，将要插入表的记录分为若干个范围，这些范围在不同的分区里没有重叠。为每个范围创建一个分区，用来存储相应的数据。

范围分区的分区策略是指记录插入分区的方式。目前范围分区仅支持范围分区策略。

范围分区策略：根据分区键值将记录映射到已创建的某个分区上，如果可以映射到已创建的某一分区上，则把记录插入到对应的分区上，否则给出报错和提示信息。这是最常用的分区策略。

间隔分区是一种特殊的范围分区，相比范围分区，新增间隔值定义，当插入记录找不到匹配的分区时，可以根据间隔值自动创建分区。

间隔分区只支持基于表的一列分区，并且该列只支持TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\]、TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\]、DATE数据类型。

间隔分区策略：根据分区键值将记录映射到已创建的某个分区上，如果可以映射到已创建的某一分区上，则把记录插入到对应的分区上，否则根据分区键值和表定义信息自动创建一个分区，然后将记录插入新分区中，新创建的分区数据范围等于间隔值。

哈希分区是根据表的一列，为每个分区指定模数和余数，将要插入表的记录划分到对应的分区中，每个分区所持有的行都需要满足条件：分区键的值除以为其指定的模数将产生为其指定的余数。

哈希分区策略：根据分区键值将记录映射到已创建的某个分区上，如果可以映射到已创建的某一分区上，则把记录插入到对应的分区上，否则返回报错和提示信息。

列表分区是根据表的一列，将要插入表的记录通过每一个分区中出现的键值划分到对应的分区中，这些键值在不同的分区里没有重叠。为每组键值创建一个分区，用来存储相应的数据。

列表分区策略：根据分区键值将记录映射到已创建的某个分区上，如果可以映射到已创建的某一分区上，则把记录插入到对应的分区上，否则给出报错和提示信息。

分区可以提供若干好处：

-   某些类型的查询性能可以得到极大提升。特别是表中访问率较高的行位于一个单独分区或少数几个分区上的情况下。分区可以减少数据的搜索空间，提高数据访问效率。
-   当查询或更新一个分区的大部分记录时，连续扫描那个分区而不是访问整个表可以获得巨大的性能提升。
-   如果需要大量加载或者删除的记录位于单独的分区上，则可以通过直接读取或删除那个分区以获得巨大的性能提升，同时还可以避免由于大量DELETE导致的VACUUM超载（哈希分区不支持删除分区）。

## 注意事项<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_zh-cn_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

-   唯一约束和主键约束的约束键包含所有分区键将为约束创建LOCAL索引，否则创建GLOBAL索引。
-   目前哈希分区和列表分区仅支持单列构建分区键，暂不支持多列构建分区键。
-   只需要有间隔分区表的INSERT权限，往该表INSERT数据时就可以自动创建分区。
-   对于分区表PARTITION FOR \(values\)语法，values只能是常量。
-   对于分区表PARTITION FOR \(values\)语法，values在需要数据类型转换时，建议使用强制类型转换，以防隐式类型转换结果与预期不符。
-   分区数最大值为1048575个，一般情况下业务不可能创建这么多分区，这样会导致内存不足。应参照参数local\_syscache\_threshold的值合理创建分区，分区表使用内存大致为（分区数 \* 3 / 1024）MB。理论上分区占用内存不允许大于local\_syscache\_threshold的值，同时还需要预留部分空间以供其他功能使用。
-   指定分区语句目前不能走全局索引扫描。

## 语法格式<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE TABLE [ IF NOT EXISTS ] partition_table_name
( [ 
    { column_name data_type [ COLLATE collation ] [ column_constraint [ ... ] ]
    | table_constraint
    | LIKE source_table [ like_option [...] ] }[, ... ]
] )
    [ AUTO_INCREMENT [ = ] value ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    [ COMMENT {=| } 'text' ]
     PARTITION BY { 
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_less_than_item [, ... ] )} |
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_start_end_item [, ... ] )} |
         {LIST (partition_key) ( PARTITION partition_name VALUES (list_values) [TABLESPACE tablespace_name][, ... ]）} |
        {HASH (partition_key) ( PARTITION partition_name [TABLESPACE tablespace_name][, ... ]）}
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_less_than_item [COMMENT {=| } 'text'][...][, ... ] )} |
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_start_end_item [COMMENT {=| } 'text'][...][, ... ] )} |
        {LIST | HASH (partition_key) (PARTITION partition_name [VALUES (list_values_clause)] opt_table_space [COMMENT {=| } 'text'][...])}
    } [ { ENABLE | DISABLE } ROW MOVEMENT ]; 
```

-   列约束column\_constraint：

    ```
    [ CONSTRAINT constraint_name ]
    { NOT NULL |
      NULL | 
      CHECK ( expression ) | 
      DEFAULT default_e xpr | 
      GENERATED ALWAYS AS ( generation_expr ) STORED |
      AUTO_INCREMENT |
      UNIQUE index_parameters | 
      PRIMARY KEY index_parameters |
      REFERENCES reftable [ ( refcolumn ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
            [ ON DELETE action ] [ ON UPDATE action ] }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    [ COMMENT {=| } 'text' ]
    ```

-   表约束table\_constraint：

    ```
    [ CONSTRAINT [ constraint_name ] ]
    { CHECK ( expression ) | 
      UNIQUE [ index_name ][ USING method ] ( { column_name [ ASC | DESC ] } [, ... ] ) index_parameters | 
      PRIMARY KEY [ USING method ] ( { column_name [ ASC | DESC ] } [, ... ] ) index_parameters |
      FOREIGN KEY [ index_name ] ( column_name [, ... ] ) REFERENCES reftable [ ( refcolumn [, ... ] ) ]
          [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    [ COMMENT {=| } 'text' ]
    ```


-   like选项like\_option：

    ```
    { INCLUDING | EXCLUDING } { DEFAULTS | GENERATED | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | RELOPTIONS| ALL }
    ```


-   索引存储参数index\_parameters：

    ```
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ USING INDEX TABLESPACE tablespace_name ]
    ```


-   partition\_less\_than\_item：

    ```
    PARTITION partition_name VALUES LESS THAN ( { partition_value | MAXVALUE } ) [TABLESPACE tablespace_name]
    ```

-   partition\_start\_end\_item：

    ```
    PARTITION partition_name {
            {START(partition_value) END (partition_value) EVERY (interval_value)} |
            {START(partition_value) END ({partition_value | MAXVALUE})} |
            {START(partition_value)} |
            {END({partition_value | MAXVALUE})}
    } [TABLESPACE tablespace_name]
    ```

-   COMMENT {=| } 'text':

    分区表的分区中，该字段无实际意义，仅作语法兼容。在数据库中使用该语法时会有告警提示。

## 参数说明<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_zh-cn_topic_0059777586_sd2701df1d7364084a7791592def4e9eb"></a>

-   **IF NOT EXISTS**

    如果已经存在相同名称的表，不会抛出一个错误，而会发出一个通知，告知表关系已存在。

-   **partition\_table\_name**

    分区表的名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **column\_name**

    新表中要创建的字段名。

    取值范围：字符串，要符合标识符的命名规范。

-   **data\_type**

    字段的数据类型。

-   **COLLATE  collation**

    COLLATE子句指定列的排序规则（该列必须是可排列的数据类型）。如果没有指定，则使用默认的排序规则。排序规则可以使用“select \* from pg\_collation;”命令从pg\_collation系统表中查询，默认的排序规则为查询结果中以default开始的行。

-   **CONSTRAINT constraint\_name**

    列约束或表约束的名称。可选的约束子句用于声明约束，新行或者更新的行必须满足这些约束才能成功插入或更新。

    定义约束有两种方法：

    -   列约束：作为一个列定义的一部分，仅影响该列。
    -   表约束：不和某个列绑在一起，可以作用于多个列。在B模式数据库下（即sql\_compatibility = 'B'）constraint\_name为可选项，在其他模式数据库下，必须加上constraint\_name。

-   **index\_name**

    索引名。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >-   index\_name仅在B模式数据库下（即sql\_compatibility = 'B'）支持，其他模式数据库下不支持。
    >-   对于外键约束，constraint\_name和index\_name同时指定时，索引名为constraint\_name。
    >-   对于唯一键约束，constraint\_name和index\_name同时指定时，索引名以index\_name。

-   **USING method**

    指定创建索引的方法。

    取值范围参考[参数说明](CREATE-INDEX.md)中的USING method。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >-   USING method仅在B模式数据库下（即sql\_compatibility = 'B'）支持，其他模式数据库下不支持。
    >-   在B模式下，未指定USING method时，对于ASTORE的存储方式，默认索引方法为btree；对于USTORE的存储方式，默认索引方法为ubtree。

-   **ASC | DESC**

    ASC表示指定按升序排序（默认）。DESC指定按降序排序。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >ASC|DESC只在B模式数据库下（即sql\_compatibility = 'B'）支持，其他模式数据库不支持。


-   **LIKE source\_table \[ like\_option ... \]**

    LIKE子句声明一个表，新表自动从这个表里面继承所有字段名及其数据类型和非空约束。

    和INHERITS不同，新表与原来的表之间在创建动作完毕之后是完全无关的。在源表做的任何修改都不会传播到新表中，并且也不可能在扫描源表的时候包含新表的数据。

    -   字段缺省表达式只有在声明了INCLUDING DEFAULTS之后才会包含进来。缺省是不包含缺省表达式的，即新表中所有字段的缺省值都是NULL。
    -   如果指定了INCLUDING GENERATED，则源表列的生成表达式会复制到新表中。默认不复制生成表达式。
    -   非空约束将总是复制到新表中，CHECK约束则仅在指定了INCLUDING CONSTRAINTS的时候才复制，而其他类型的约束则永远也不会被复制。此规则同时适用于表约束和列约束。
    -   和INHERITS不同，被复制的列和约束并不使用相同的名称进行融合。如果明确的指定了相同的名称或者在另外一个LIKE子句中，将会报错。
    -   如果指定了INCLUDING INDEXES，则源表上的索引也将在新表上创建，默认不建立索引。
    -   如果指定了INCLUDING STORAGE，则拷贝列的STORAGE设置也将被拷贝，默认情况下不包含STORAGE设置。
    -   如果指定了INCLUDING COMMENTS，则源表列、约束和索引的注释也会被拷贝过来。默认情况下，不拷贝源表的注释。
    -   如果指定了INCLUDING RELOPTIONS，则源表的存储参数（即源表的WITH子句）也将拷贝至新表。默认情况下，不拷贝源表的存储参数。
    -   INCLUDING ALL包含了INCLUDING DEFAULTS、INCLUDING CONSTRAINTS、INCLUDING INDEXES、INCLUDING STORAGE、INCLUDING COMMENTS、INCLUDING PARTITION和INCLUDING RELOPTIONS的内容。

-   **AUTO\_INCREMENT \[ = \] value**

    这个子句为自动增长列指定一个初始值，value必须为正整数，不得超过2<sup>127</sup>-1。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >该子句仅在参数sql\_compatibility=B时有效。

-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    这个子句为表或索引指定一个可选的存储参数。参数的详细描述如下所示：

    -   FILLFACTOR

        一个表的填充因子（fillfactor）是一个介于10和100之间的百分数。100（完全填充）是默认值。如果指定了较小的填充因子，INSERT操作仅按照填充因子指定的百分率填充表页。每个页上的剩余空间将用于在该页上更新行，这就使得UPDATE有机会在同一页上放置同一条记录的新版本，这比把新版本放置在其他页上更有效。对于一个从不更新的表将填充因子设为100是最佳选择，但是对于频繁更新的表，选择较小的填充因子则更加合适。该参数对于列存表没有意义。

        取值范围：10\~100

    -   ORIENTATION

        决定了表的数据的存储方式。

        取值范围：

        -   COLUMN：表的数据将以列式存储。
        -   ROW（缺省值）：表的数据将以行式存储。

            >![](public_sys-resources/icon-notice.gif) **须知：** 
            >orientation不支持修改。
        
    -    STORAGE\_TYPE

          指定存储引擎类型，该参数设置成功后就不再支持修改。

          取值范围：

          -   USTORE，表示表支持Inplace-Update存储引擎。特别需要注意，使用USTORE表，必须要开启track\_counts和track\_activities参数，否则会引起空间膨胀。

          -   ASTORE，表示表支持Append-Only存储引擎。

          默认值： 不指定表时，默认是Append-Only存储。

    - COMPRESSION
      -   列存表的有效值为LOW/MIDDLE/HIGH/YES/NO，压缩级别依次升高，默认值为LOW。
      -   行存表不支持压缩。
    
    - MAX\_BATCHROW
    
      指定了在数据加载过程中一个存储单元可以容纳记录的最大数目。该参数只对列存表有效。
    
      取值范围：10000\~60000，默认60000。
    
    - PARTIAL\_CLUSTER\_ROWS
    
      指定了在数据加载过程中进行将局部聚簇存储的记录数目。该参数只对列存表有效。
    
      取值范围：大于等于MAX\_BATCHROW，建议取值为MAX\_BATCHROW的整数倍数。
    
    - DELTAROW\_THRESHOLD
    
      预留参数。该参数只对列存表有效。
    
      取值范围：0～9999
    
    - segment
    
      使用段页式的方式存储。本参数仅支持行存表。不支持列存表、临时表、unlog表。不支持ustore存储引擎。
    
      取值范围：on/off
    
      默认值：off
    
- **COMPRESS / NOCOMPRESS**

  创建一个新表时，需要在创建表语句中指定关键字COMPRESS，这样，当对该表进行批量插入时就会触发压缩特性。该特性会在页范围内扫描所有元组数据，生成字典、压缩元组数据并进行存储。指定关键字NOCOMPRESS则不对表进行压缩。行存表不支持压缩。

  缺省值为NOCOMPRESS，即不对元组数据进行压缩。

- **TABLESPACE tablespace\_name**

  指定新表将要在tablespace\_name表空间内创建。如果没有声明，将使用默认表空间。

- **PARTITION BY RANGE\(partition\_key\)**

  创建范围分区。partition\_key为分区键的名称。

  （1）对于从句是VALUES LESS THAN的语法格式：

  >![](public_sys-resources/icon-notice.gif) **须知：** 
  >对于从句是VALUE LESS THAN的语法格式，范围分区策略的分区键最多支持4列。

  该情形下，分区键支持的数据类型为：SMALLINT、INTEGER、BIGINT、DECIMAL、NUMERIC、REAL、DOUBLE PRECISION、CHARACTER VARYING\(n\)、VARCHAR\(n\)、CHARACTER\(n\)、CHAR\(n\)、CHARACTER、CHAR、TEXT、NVARCHAR、NVARCHAR2、NAME、TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\]、TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\]、DATE。

  （2）对于从句是START END的语法格式：

  >![](public_sys-resources/icon-notice.gif) **须知：** 
  >对于从句是START END的语法格式，范围分区策略的分区键仅支持1列。

  该情形下，分区键支持的数据类型为：SMALLINT、INTEGER、BIGINT、DECIMAL、NUMERIC、REAL、DOUBLE PRECISION、TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\]、TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\]、DATE。

  （3）对于指定了INTERVAL子句的语法格式：

  >![](public_sys-resources/icon-notice.gif) **须知：** 
  >对于指定了INTERVAL子句的语法格式，范围分区策略的分区键仅支持1列。

  该情形下，分区键支持的数据类型为：TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\]、TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\]、DATE。

- **PARTITION partition\_name VALUES LESS THAN \( \{ partition\_value | MAXVALUE \} \)**

  指定各分区的信息。partition\_name为范围分区的名称。partition\_value为范围分区的上边界，取值依赖于partition\_key的类型。MAXVALUE表示分区的上边界，它通常用于设置最后一个范围分区的上边界。

  >![](public_sys-resources/icon-notice.gif) **须知：** 
  >
  >-   每个分区都需要指定一个上边界。

  >-   分区上边界的类型应当和分区键的类型一致。

  >-   分区列表是按照分区上边界升序排列的，值较小的分区位于值较大的分区之前。

- **PARTITION partition\_name \{START \(partition\_value\) END \(partition\_value\) EVERY \(interval\_value\)\} |  **\{START \(partition\_value\) END \(partition\_value|MAXVALUE\)\} | \{START\(partition\_value\)\} | **\{END \(partition\_value | MAXVALUE\)**\}

  指定各分区的信息，各参数意义如下：

  -   partition\_name：范围分区的名称或名称前缀，除以下情形外（假定其中的partition\_name是p1），均为分区的名称。
      -   若该定义是START+END+EVERY从句，则语义上定义的分区的名称依次为p1\_1, p1\_2, ...。例如对于定义“PARTITION p1 START\(1\) END\(4\) EVERY\(1\)”，则生成的分区是：\[1, 2\), \[2, 3\) 和 \[3, 4\)，名称依次为p1\_1, p1\_2和p1\_3，即此处的p1是名称前缀。
      -   若该定义是第一个分区定义，且该定义有START值，则范围（MINVALUE, START）将自动作为第一个实际分区，其名称为p1\_0，然后该定义语义描述的分区名称依次为p1\_1, p1\_2, ...。例如对于完整定义“PARTITION p1 START\(1\), PARTITION p2 START\(2\)”，则生成的分区是：\(MINVALUE, 1\), \[1, 2\) 和 \[2, MAXVALUE\)，其名称依次为p1\_0, p1\_1和p2，即此处p1是名称前缀，p2是分区名称。这里MINVALUE表示最小值。

  -   partition\_value：范围分区的端点值（起始或终点），取值依赖于partition\_key的类型，不可是MAXVALUE。
  -   interval\_value：对\[START，END\) 表示的范围进行切分，interval\_value是指定切分后每个分区的宽度，不可是MAXVALUE；如果（END-START）值不能整除以EVERY值，则仅最后一个分区的宽度小于EVERY值。
  -   MAXVALUE：表示最大值，它通常用于设置最后一个范围分区的上边界。

  >![](public_sys-resources/icon-notice.gif) **须知：** 
  >
  >1.  在创建分区表若第一个分区定义含START值，则范围（MINVALUE，START）将自动作为实际的第一个分区。
  >2.  START END语法需要遵循以下限制：
  >    -   每个partition\_start\_end\_item中的START值（如果有的话，下同）必须小于其END值。

  >    -   相邻的两个partition\_start\_end\_item，第一个的END值必须等于第二个的START值；

  >    -   每个partition\_start\_end\_item中的EVERY值必须是正向递增的，且必须小于（END-START）值；

  >    -   每个分区包含起始值，不包含终点值，即形如：\[起始值，终点值\)，起始值是MINVALUE时则不包含；

  >    -   一个partition\_start\_end\_item创建的每个分区所属的TABLESPACE一样；

  >    -   partition\_name作为分区名称前缀时，其长度不要超过57字节，超过时自动截断；

  >    -   在创建、修改分区表时请注意分区表的分区总数不可超过最大限制（1048575）；

  >3.  在创建分区表时START END与LESS THAN语法不可混合使用。
  >4.  即使创建分区表时使用START END语法，备份（gs\_dump）出的SQL语句也是VALUES LESS THAN语法格式。

- **INTERVAL \('interval\_expr'\) \[ STORE IN \(tablespace\_name \[, ... \] \) \]**

  间隔分区定义信息。

  -   interval\_expr：自动创建分区的间隔，例如：1 day、1 month。

  -   STORE IN \(tablespace\_name \[, ... \] \)：指定存放自动创建分区的表空间列表，如果有指定，则自动创建的分区从表空间列表中循环选择使用，否则使用分区表默认的表空间。

  >![](public_sys-resources/icon-notice.gif) **须知：** 
  >
  >列存表不支持间隔分区。

- **PARTITION BY LIST\(partition\_key\)**

  创建列表分区。partition\_key为分区键的名称。

  -   对于partition\_key，列表分区策略的分区键仅支持1列。
  -   对于从句是VALUES \(list\_values\_clause\)的语法格式，list\_values\_clause中包含了对应分区存在的键值，推荐每个分区的键值数量不超过64个。

  分区键支持的数据类型为：INT1、INT2、INT4、INT8、NUMERIC、VARCHAR\(n\)、CHAR、BPCHAR、NVARCHAR、NVARCHAR2、TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\]、TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\]、DATE。分区个数不能超过 1048575 个。

- **PARTITION BY HASH\(partition\_key\)**

  创建哈希分区。partition\_key为分区键的名称。

  对于partition\_key，哈希分区策略的分区键仅支持1列。

  分区键支持的数据类型为：INT1、INT2、INT4、INT8、NUMERIC、VARCHAR\(n\)、CHAR、BPCHAR、TEXT、NVARCHAR、NVARCHAR2、TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\]、TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\]、DATE。分区个数不能超过1048575 个。

- **\{ ENABLE | DISABLE \} ROW MOVEMENT**

  行迁移开关。

  如果进行UPDATE操作时，更新了元组在分区键上的值，造成了该元组所在分区发生变化，就会根据该开关给出报错信息，或者进行元组在分区间的转移。

  取值范围：

  -   ENABLE（缺省值）：行迁移开关打开。
  -   DISABLE：行迁移开关关闭。

-   **NOT NULL**

    字段值不允许为NULL。ENABLE用于语法兼容，可省略。

-   **NULL**

    字段值允许NULL ，这是缺省。

    这个子句只是为和非标准SQL数据库兼容。不建议使用。

-   **CHECK \(condition\) \[ NO INHERIT \]**

    CHECK约束声明一个布尔表达式，每次要插入的新行或者要更新的行的新值必须使表达式结果为真或未知才能成功，否则会抛出一个异常并且不会修改数据库。

    声明为字段约束的检查约束应该只引用该字段的数值，而在表约束里出现的表达式可以引用多个字段。

    用NO INHERIT标记的约束将不会传递到子表中去。

    ENABLE用于语法兼容，可省略。

-   **DEFAULT default\_expr**

    DEFAULT子句给字段指定缺省值。该数值可以是任何不含变量的表达式\(不允许使用子查询和对本表中的其他字段的交叉引用\)。缺省表达式的数据类型必须和字段类型匹配。

    缺省表达式将被用于任何未声明该字段数值的插入操作。如果没有指定缺省值则缺省值为NULL 。

-   GENERATED ALWAYS AS \( generation\_expr \) STORED

    该子句将字段创建为生成列，生成列的值在写入（插入或更新）数据时由generation\_expr计算得到，STORED表示像普通列一样存储生成列的值。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   生成表达式不能以任何方式引用当前行以外的其他数据。生成表达式不能引用其他生成列，不能引用系统列。生成表达式不能返回结果集，不能使用子查询，不能使用聚集函数，不能使用窗口函数。生成表达式调用的函数只能是不可变（IMMUTABLE）函数。
    >
    >-   不能为生成列指定默认值。
    >
    >-   生成列不能作为分区键的一部分。
    >
    >-   生成列不能和ON UPDATE约束字句的CASCADE,SET NULL,SET DEFAULT动作同时指定。生成列不能和ON DELETE约束字句的SET NULL、SET DEFAULT动作同时指定。
    >
    >-   修改和删除生成列的方法和普通列相同。删除生成列依赖的普通列，生成列被自动删除。不能改变生成列所依赖的列的类型。
    >
    >-   生成列不能被直接写入。在INSERT或UPDATE命令中, 不能为生成列指定值, 但是可以指定关键字DEFAULT。
    >
    >-   生成列的权限控制和普通列一样。
    >
    >-   列存表、内存表MOT不支持生成列。外表中仅postgres\_fdw支持生成列。

-   **AUTO\_INCREMENT**

    指定列为自动增长列。

    详见：[AUTO\_INCREMENT](CREATE-TABLE.md)。
-   **UNIQUE index\_parameters**

    **UNIQUE \( column\_name \[, ... \] \) index\_parameters**

    UNIQUE约束表示表里的一个字段或多个字段的组合必须在全表范围内唯一。

    对于唯一约束，NULL被认为是互不相等的。

-   **PRIMARY KEY index\_parameters**

    **PRIMARY KEY \( column\_name \[, ... \] \) index\_parameters**

    主键约束声明表中的一个或者多个字段只能包含唯一的非NULL值。

    一个表只能声明一个主键。

-   **DEFERRABLE | NOT DEFERRABLE**

    这两个关键字设置该约束是否可推迟。一个不可推迟的约束将在每条命令之后马上检查。可推迟约束可以推迟到事务结尾使用SET CONSTRAINTS命令检查。缺省是NOT DEFERRABLE。目前，UNIQUE约束、主键约束、外键约束可以接受这个子句。所有其他约束类型都是不可推迟的。

-   **INITIALLY IMMEDIATE | INITIALLY DEFERRED**

    如果约束是可推迟的，则这个子句声明检查约束的缺省时间。

    -   如果约束是INITIALLY IMMEDIATE（缺省），则在每条语句执行之后就立即检查它；
    -   如果约束是INITIALLY DEFERRED ，则只有在事务结尾才检查它。

    约束检查的时间可以用SET CONSTRAINTS命令修改。

-   **USING INDEX TABLESPACE tablespace\_name**

    为UNIQUE或PRIMARY KEY约束相关的索引声明一个表空间。如果没有提供这个子句，这个索引将在default\_tablespace中创建，如果default\_tablespace为空，将使用数据库的缺省表空间。


## 示例<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_zh-cn_topic_0059777586_s43dd49de892344bf89e6f56f17404842"></a>

-   示例1：创建范围分区表tpcds.web\_returns\_p1，含有8个分区，分区键为integer类型。  分区的范围分别为：wr\_returned\_date\_sk< 2450815、2450815<= wr\_returned\_date\_sk< 2451179、2451179<=wr\_returned\_date\_sk< 2451544、2451544 <= wr\_returned\_date\_sk< 2451910、2451910 <= wr\_returned\_date\_sk< 2452275、2452275 <= wr\_returned\_date\_sk< 2452640、2452640 <= wr\_returned\_date\_sk< 2453005、wr\_returned\_date\_sk\>=2453005。

    ```
    --创建表tpcds.web_returns。
    openGauss=# CREATE TABLE tpcds.web_returns
    (
        W_WAREHOUSE_SK            INTEGER               NOT NULL,
        W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
        W_WAREHOUSE_NAME          VARCHAR(20)                   ,
        W_WAREHOUSE_SQ_FT         INTEGER                       ,
        W_STREET_NUMBER           CHAR(10)                      ,
        W_STREET_NAME             VARCHAR(60)                   ,
        W_STREET_TYPE             CHAR(15)                      ,
        W_SUITE_NUMBER            CHAR(10)                      ,
        W_CITY                    VARCHAR(60)                   ,
        W_COUNTY                  VARCHAR(30)                   ,
        W_STATE                   CHAR(2)                       ,
        W_ZIP                     CHAR(10)                      ,
        W_COUNTRY                 VARCHAR(20)                   ,
        W_GMT_OFFSET              DECIMAL(5,2)
    );
    --创建分区表tpcds.web_returns_p1。
    openGauss=# CREATE TABLE tpcds.web_returns_p1
    (
        WR_RETURNED_DATE_SK       INTEGER                       ,
        WR_RETURNED_TIME_SK       INTEGER                       ,
        WR_ITEM_SK                INTEGER               NOT NULL,
        WR_REFUNDED_CUSTOMER_SK   INTEGER                       ,
        WR_REFUNDED_CDEMO_SK      INTEGER                       ,
        WR_REFUNDED_HDEMO_SK      INTEGER                       ,
        WR_REFUNDED_ADDR_SK       INTEGER                       ,
        WR_RETURNING_CUSTOMER_SK  INTEGER                       ,
        WR_RETURNING_CDEMO_SK     INTEGER                       ,
        WR_RETURNING_HDEMO_SK     INTEGER                       ,
        WR_RETURNING_ADDR_SK      INTEGER                       ,
        WR_WEB_PAGE_SK            INTEGER                       ,
        WR_REASON_SK              INTEGER                       ,
        WR_ORDER_NUMBER           BIGINT                NOT NULL,
        WR_RETURN_QUANTITY        INTEGER                       ,
        WR_RETURN_AMT             DECIMAL(7,2)                  ,
        WR_RETURN_TAX             DECIMAL(7,2)                  ,
        WR_RETURN_AMT_INC_TAX     DECIMAL(7,2)                  ,
        WR_FEE                    DECIMAL(7,2)                  ,
        WR_RETURN_SHIP_COST       DECIMAL(7,2)                  ,
        WR_REFUNDED_CASH          DECIMAL(7,2)                  ,
        WR_REVERSED_CHARGE        DECIMAL(7,2)                  ,
        WR_ACCOUNT_CREDIT         DECIMAL(7,2)                  ,
        WR_NET_LOSS               DECIMAL(7,2)
    )
    WITH (ORIENTATION = COLUMN,COMPRESSION=MIDDLE)
    PARTITION BY RANGE(WR_RETURNED_DATE_SK)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(2451910),
            PARTITION P5 VALUES LESS THAN(2452275),
            PARTITION P6 VALUES LESS THAN(2452640),
            PARTITION P7 VALUES LESS THAN(2453005),
            PARTITION P8 VALUES LESS THAN(MAXVALUE)
    );
    
    --从示例数据表导入数据。
    openGauss=# INSERT INTO tpcds.web_returns_p1 SELECT * FROM tpcds.web_returns;
    
    --删除分区P8。
    openGauss=# ALTER TABLE tpcds.web_returns_p1 DROP PARTITION P8;
    
    --增加分区WR_RETURNED_DATE_SK介于2453005和2453105之间。
    openGauss=# ALTER TABLE tpcds.web_returns_p1 ADD PARTITION P8 VALUES LESS THAN (2453105);
    
    --增加分区WR_RETURNED_DATE_SK介于2453105和MAXVALUE之间。
    openGauss=# ALTER TABLE tpcds.web_returns_p1 ADD PARTITION P9 VALUES LESS THAN (MAXVALUE);
    
    --删除分区P8。
    openGauss=# ALTER TABLE tpcds.web_returns_p1 DROP PARTITION FOR (2453005);
    
    --分区P7重命名为P10。
    openGauss=# ALTER TABLE tpcds.web_returns_p1 RENAME PARTITION P7 TO P10;
    
    --分区P6重命名为P11。
    openGauss=# ALTER TABLE tpcds.web_returns_p1 RENAME PARTITION FOR (2452639) TO P11;
    
    --查询分区P10的行数。
    openGauss=# SELECT count(*) FROM tpcds.web_returns_p1 PARTITION (P10);
     count  
    --------
     0
    (1 row)
    
    --查询分区P1的行数。
    openGauss=# SELECT COUNT(*) FROM tpcds.web_returns_p1 PARTITION FOR (2450815);
     count  
    --------
     0
    (1 row)
    ```

-   示例2：创建范围分区表tpcds.web\_returns\_p2，含有8个分区，分区键类型为integer类型，其中第8个分区上边界为MAXVALUE。

    八个分区的范围分别为：  wr\_returned\_date\_sk< 2450815、2450815<= wr\_returned\_date\_sk< 2451179、2451179<=wr\_returned\_date\_sk< 2451544、2451544 <= wr\_returned\_date\_sk< 2451910、2451910 <= wr\_returned\_date\_sk< 2452275、2452275 <= wr\_returned\_date\_sk< 2452640、2452640 <= wr\_returned\_date\_sk< 2453005、wr\_returned\_date\_sk\>=2453005。

    分区表tpcds.web\_returns\_p2的表空间为example1；分区P1到P7没有声明表空间，使用采用分区表tpcds.web\_returns\_p2的表空间example1；指定分区P8的表空间为example2。

    假定数据库节点的数据目录/pg\_location/mount1/path1，数据库节点的数据目录/pg\_location/mount2/path2，数据库节点的数据目录/pg\_location/mount3/path3，数据库节点的数据目录/pg\_location/mount4/path4是dwsadmin用户拥有读写权限的空目录。

    ```
    openGauss=# CREATE TABLESPACE example1 RELATIVE LOCATION 'tablespace1/tablespace_1';
    openGauss=# CREATE TABLESPACE example2 RELATIVE LOCATION 'tablespace2/tablespace_2';
    openGauss=# CREATE TABLESPACE example3 RELATIVE LOCATION 'tablespace3/tablespace_3';
    openGauss=# CREATE TABLESPACE example4 RELATIVE LOCATION 'tablespace4/tablespace_4';
    
    openGauss=# CREATE TABLE tpcds.web_returns_p2
    (
        WR_RETURNED_DATE_SK       INTEGER                       ,
        WR_RETURNED_TIME_SK       INTEGER                       ,
        WR_ITEM_SK                INTEGER               NOT NULL,
        WR_REFUNDED_CUSTOMER_SK   INTEGER                       ,
        WR_REFUNDED_CDEMO_SK      INTEGER                       ,
        WR_REFUNDED_HDEMO_SK      INTEGER                       ,
        WR_REFUNDED_ADDR_SK       INTEGER                       ,
        WR_RETURNING_CUSTOMER_SK  INTEGER                       ,
        WR_RETURNING_CDEMO_SK     INTEGER                       ,
        WR_RETURNING_HDEMO_SK     INTEGER                       ,
        WR_RETURNING_ADDR_SK      INTEGER                       ,
        WR_WEB_PAGE_SK            INTEGER                       ,
        WR_REASON_SK              INTEGER                       ,
        WR_ORDER_NUMBER           BIGINT                NOT NULL,
        WR_RETURN_QUANTITY        INTEGER                       ,
        WR_RETURN_AMT             DECIMAL(7,2)                  ,
        WR_RETURN_TAX             DECIMAL(7,2)                  ,
        WR_RETURN_AMT_INC_TAX     DECIMAL(7,2)                  ,
        WR_FEE                    DECIMAL(7,2)                  ,
        WR_RETURN_SHIP_COST       DECIMAL(7,2)                  ,
        WR_REFUNDED_CASH          DECIMAL(7,2)                  ,
        WR_REVERSED_CHARGE        DECIMAL(7,2)                  ,
        WR_ACCOUNT_CREDIT         DECIMAL(7,2)                  ,
        WR_NET_LOSS               DECIMAL(7,2)
    )
    TABLESPACE example1
    PARTITION BY RANGE(WR_RETURNED_DATE_SK)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(2451910),
            PARTITION P5 VALUES LESS THAN(2452275),
            PARTITION P6 VALUES LESS THAN(2452640),
            PARTITION P7 VALUES LESS THAN(2453005),
            PARTITION P8 VALUES LESS THAN(MAXVALUE) TABLESPACE example2
    )
    ENABLE ROW MOVEMENT;
    
    --以like方式创建一个分区表。
    openGauss=# CREATE TABLE tpcds.web_returns_p3 (LIKE tpcds.web_returns_p2 INCLUDING PARTITION);
    
    --修改分区P1的表空间为example2。
    openGauss=# ALTER TABLE tpcds.web_returns_p2 MOVE PARTITION P1 TABLESPACE example2;
    
    --修改分区P2的表空间为example3。
    openGauss=# ALTER TABLE tpcds.web_returns_p2 MOVE PARTITION P2 TABLESPACE example3;
    
    --以2453010为分割点切分P8。
    openGauss=# ALTER TABLE tpcds.web_returns_p2 SPLIT PARTITION P8 AT (2453010) INTO
    (
            PARTITION P9,
            PARTITION P10
    ); 
    
    --将P6，P7合并为一个分区。
    openGauss=# ALTER TABLE tpcds.web_returns_p2 MERGE PARTITIONS P6, P7 INTO PARTITION P8;
    
    --修改分区表迁移属性。
    openGauss=# ALTER TABLE tpcds.web_returns_p2 DISABLE ROW MOVEMENT;
    --删除表和表空间。
    openGauss=# DROP TABLE tpcds.web_returns_p1;
    openGauss=# DROP TABLE tpcds.web_returns_p2;
    openGauss=# DROP TABLE tpcds.web_returns_p3;
    openGauss=# DROP TABLESPACE example1;
    openGauss=# DROP TABLESPACE example2;
    openGauss=# DROP TABLESPACE example3;
    openGauss=# DROP TABLESPACE example4;
    ```


-   示例3：START END语法创建、修改Range分区表。

    假定/home/omm/startend\_tbs1、/home/omm/startend\_tbs2、/home/omm/startend\_tbs3、/home/omm/startend\_tbs4是omm用户拥有读写权限的空目录。

    ```
    -- 创建表空间
    openGauss=# CREATE TABLESPACE startend_tbs1 LOCATION '/home/omm/startend_tbs1';
    openGauss=# CREATE TABLESPACE startend_tbs2 LOCATION '/home/omm/startend_tbs2';
    openGauss=# CREATE TABLESPACE startend_tbs3 LOCATION '/home/omm/startend_tbs3';
    openGauss=# CREATE TABLESPACE startend_tbs4 LOCATION '/home/omm/startend_tbs4';
    
    -- 创建临时schema
    openGauss=# CREATE SCHEMA tpcds;
    openGauss=# SET CURRENT_SCHEMA TO tpcds;
    
    -- 创建分区表，分区键是integer类型
    openGauss=# CREATE TABLE tpcds.startend_pt (c1 INT, c2 INT) 
    TABLESPACE startend_tbs1 
    PARTITION BY RANGE (c2) (
        PARTITION p1 START(1) END(1000) EVERY(200) TABLESPACE startend_tbs2,
        PARTITION p2 END(2000),
        PARTITION p3 START(2000) END(2500) TABLESPACE startend_tbs3,
        PARTITION p4 START(2500),
        PARTITION p5 START(3000) END(5000) EVERY(1000) TABLESPACE startend_tbs4
    )
    ENABLE ROW MOVEMENT;
    
    -- 查看分区表信息
    openGauss=# SELECT relname, boundaries, spcname FROM pg_partition p JOIN pg_tablespace t ON p.reltablespace=t.oid and p.parentid='tpcds.startend_pt'::regclass ORDER BY 1;
       relname   | boundaries |    spcname
    -------------+------------+---------------
     p1_0        | {1}        | startend_tbs2
     p1_1        | {201}      | startend_tbs2
     p1_2        | {401}      | startend_tbs2
     p1_3        | {601}      | startend_tbs2
     p1_4        | {801}      | startend_tbs2
     p1_5        | {1000}     | startend_tbs2
     p2          | {2000}     | startend_tbs1
     p3          | {2500}     | startend_tbs3
     p4          | {3000}     | startend_tbs1
     p5_1        | {4000}     | startend_tbs4
     p5_2        | {5000}     | startend_tbs4
     startend_pt |            | startend_tbs1
    (12 rows)
    
    -- 导入数据，查看分区数据量
    openGauss=# INSERT INTO tpcds.startend_pt VALUES (GENERATE_SERIES(0, 4999), GENERATE_SERIES(0, 4999));
    openGauss=# SELECT COUNT(*) FROM tpcds.startend_pt PARTITION FOR (0);
     count
    -------
         1
    (1 row)
    
    openGauss=# SELECT COUNT(*) FROM tpcds.startend_pt PARTITION (p3);
     count
    -------
       500
    (1 row)
    
    -- 增加分区: [5000, 5300), [5300, 5600), [5600, 5900), [5900, 6000)
    openGauss=# ALTER TABLE tpcds.startend_pt ADD PARTITION p6 START(5000) END(6000) EVERY(300) TABLESPACE startend_tbs4;
    
    -- 增加MAXVALUE分区: p7
    openGauss=# ALTER TABLE tpcds.startend_pt ADD PARTITION p7 END(MAXVALUE);
    
    -- 重命名分区p7为p8
    openGauss=# ALTER TABLE tpcds.startend_pt RENAME PARTITION p7 TO p8;
    
    -- 删除分区p8
    openGauss=# ALTER TABLE tpcds.startend_pt DROP PARTITION p8;
    
    -- 重命名5950所在的分区为：p71
    openGauss=# ALTER TABLE tpcds.startend_pt RENAME PARTITION FOR(5950) TO p71;
    
    -- 分裂4500所在的分区[4000, 5000)
    openGauss=# ALTER TABLE tpcds.startend_pt SPLIT PARTITION FOR(4500) INTO(PARTITION q1 START(4000) END(5000) EVERY(250) TABLESPACE startend_tbs3);
    
    -- 修改分区p2的表空间为startend_tbs4
    openGauss=# ALTER TABLE tpcds.startend_pt MOVE PARTITION p2 TABLESPACE startend_tbs4;
    
    -- 查看分区情形
    openGauss=# SELECT relname, boundaries, spcname FROM pg_partition p JOIN pg_tablespace t ON p.reltablespace=t.oid and p.parentid='tpcds.startend_pt'::regclass ORDER BY 1;
       relname   | boundaries |    spcname
    -------------+------------+---------------
     p1_0        | {1}        | startend_tbs2
     p1_1        | {201}      | startend_tbs2
     p1_2        | {401}      | startend_tbs2
     p1_3        | {601}      | startend_tbs2
     p1_4        | {801}      | startend_tbs2
     p1_5        | {1000}     | startend_tbs2
     p2          | {2000}     | startend_tbs4
     p3          | {2500}     | startend_tbs3
     p4          | {3000}     | startend_tbs1
     p5_1        | {4000}     | startend_tbs4
     p6_1        | {5300}     | startend_tbs4
     p6_2        | {5600}     | startend_tbs4
     p6_3        | {5900}     | startend_tbs4
     p71         | {6000}     | startend_tbs4
     q1_1        | {4250}     | startend_tbs3
     q1_2        | {4500}     | startend_tbs3
     q1_3        | {4750}     | startend_tbs3
     q1_4        | {5000}     | startend_tbs3
     startend_pt |            | startend_tbs1
    (19 rows)
    
    -- 删除表和表空间
    openGauss=# DROP SCHEMA tpcds CASCADE;
    openGauss=# DROP TABLESPACE startend_tbs1;
    openGauss=# DROP TABLESPACE startend_tbs2;
    openGauss=# DROP TABLESPACE startend_tbs3;
    openGauss=# DROP TABLESPACE startend_tbs4;
    ```


-   示例4：创建间隔分区表sales，初始包含2个分区，分区键为DATE类型。  分区的范围分别为：time\_id  <  '2019-02-01 00:00:00'、

    '2019-02-01 00:00:00' <= time\_id < '2019-02-02 00:00:00' 。

    ```
    --创建表sales
    openGauss=# CREATE TABLE sales
    (prod_id NUMBER(6),
     cust_id NUMBER,
     time_id DATE,
     channel_id CHAR(1),
     promo_id NUMBER(6),
     quantity_sold NUMBER(3),
     amount_sold NUMBER(10,2)
    )
    PARTITION BY RANGE (time_id)
    INTERVAL('1 day')
    ( PARTITION p1 VALUES LESS THAN ('2019-02-01 00:00:00'),
      PARTITION p2 VALUES LESS THAN ('2019-02-02 00:00:00')
    );
    
    -- 数据插入分区p1
    openGauss=# INSERT INTO sales VALUES(1, 12, '2019-01-10 00:00:00', 'a', 1, 1, 1);
    
    -- 数据插入分区p2
    openGauss=# INSERT INTO sales VALUES(1, 12, '2019-02-01 00:00:00', 'a', 1, 1, 1);
    
    -- 查看分区信息
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'sales' AND t1.parttype = 'p';
     relname | partstrategy |       boundaries
    ---------+--------------+-------------------------
     p1      | r            | {"2019-02-01 00:00:00"}
     p2      | r            | {"2019-02-02 00:00:00"}
    (2 rows)
    
    -- 插入数据没有匹配的分区，新创建一个分区，并将数据插入该分区
    -- 新分区的范围为 '2019-02-05 00:00:00' <= time_id < '2019-02-06 00:00:00'
    openGauss=# INSERT INTO sales VALUES(1, 12, '2019-02-05 00:00:00', 'a', 1, 1, 1);
    
    -- 插入数据没有匹配的分区，新创建一个分区，并将数据插入该分区
    -- 新分区的范围为 '2019-02-03 00:00:00' <= time_id < '2019-02-04 00:00:00'
    openGauss=# INSERT INTO sales VALUES(1, 12, '2019-02-03 00:00:00', 'a', 1, 1, 1);
    
    -- 查看分区信息
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'sales' AND t1.parttype = 'p';
     relname | partstrategy |       boundaries
    ---------+--------------+-------------------------
     sys_p1  | i            | {"2019-02-06 00:00:00"}
     sys_p2  | i            | {"2019-02-04 00:00:00"}
     p1      | r            | {"2019-02-01 00:00:00"}
     p2      | r            | {"2019-02-02 00:00:00"}
    (4 rows)
    
    ```


-   示例5：创建LIST分区表test\_list，初始包含4个分区，分区键为INT类型。4个分区的范围分别为：2000、3000、4000、5000。

    ```
    --创建表test_list
    openGauss=# create table test_list (col1 int, col2 int)
    partition by list(col1)
    (
    partition p1 values (2000),
    partition p2 values (3000),
    partition p3 values (4000),
    partition p4 values (5000)
    );
    
    -- 数据插入
    openGauss=# INSERT INTO test_list VALUES(2000, 2000);
    INSERT 0 1
    openGauss=# INSERT INTO test_list VALUES(3000, 3000);
    INSERT 0 1
    
    -- 查看分区信息
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'test_list' AND t1.parttype = 'p';
     relname | partstrategy | boundaries
    ---------+--------------+------------
     p1      | l            | {2000}
     p2      | l            | {3000}
     p3      | l            | {4000}
     p4      | l            | {5000}
    (4 rows)
    
    -- 插入数据没有匹配到分区，报错处理
    openGauss=# INSERT INTO test_list VALUES(6000, 6000);
    ERROR:  inserted partition key does not map to any table partition
    
    -- 添加分区
    openGauss=# alter table test_list add partition p5 values (6000);
    ALTER TABLE
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'test_list' AND t1.parttype = 'p';
     relname | partstrategy | boundaries
    ---------+--------------+------------
     p5      | l            | {6000}
     p4      | l            | {5000}
     p1      | l            | {2000}
     p2      | l            | {3000}
     p3      | l            | {4000}
    (5 rows)
    openGauss=# INSERT INTO test_list VALUES(6000, 6000);
    INSERT 0 1
    
    -- 分区表和普通表交换数据
    openGauss=# create table t1 (col1 int, col2 int);
    CREATE TABLE
    openGauss=# select * from test_list partition (p1);
     col1 | col2
    ------+------
     2000 | 2000
    (1 row)
    openGauss=# alter table test_list exchange partition (p1) with table t1;
    ALTER TABLE
    openGauss=# select * from test_list partition (p1);
     col1 | col2
    ------+------
    (0 rows)
    openGauss=# select * from t1;
     col1 | col2
    ------+------
     2000 | 2000
    (1 row)
    
    -- truncate分区
    openGauss=# select * from test_list partition (p2);
     col1 | col2
    ------+------
     3000 | 3000
    (1 row)
    openGauss=# alter table test_list truncate partition p2;
    ALTER TABLE
    openGauss=# select * from test_list partition (p2);
     col1 | col2
    ------+------
    (0 rows)
    
    -- 删除分区
    openGauss=# alter table test_list drop partition p5;
    ALTER TABLE
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'test_list' AND t1.parttype = 'p';
     relname | partstrategy | boundaries
    ---------+--------------+------------
     p4      | l            | {5000}
     p1      | l            | {2000}
     p2      | l            | {3000}
     p3      | l            | {4000}
    (4 rows)
    
    openGauss=# INSERT INTO test_list VALUES(6000, 6000);
    ERROR:  inserted partition key does not map to any table partition
    
    -- 删除分区表
    openGauss=# drop table test_list;
    ```


-   示例6：创建HASH分区表test\_hash，初始包含2个分区，分区键为INT类型。

    ```
    --创建表test_hash
    openGauss=# create table test_hash (col1 int, col2 int)
    partition by hash(col1)
    (
    partition p1,
    partition p2
    );
    
    -- 数据插入
    openGauss=# INSERT INTO test_hash VALUES(1, 1);
    INSERT 0 1
    openGauss=# INSERT INTO test_hash VALUES(2, 2);
    INSERT 0 1
    openGauss=# INSERT INTO test_hash VALUES(3, 3);
    INSERT 0 1
    openGauss=# INSERT INTO test_hash VALUES(4, 4);
    INSERT 0 1
    
    -- 查看分区信息
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'test_hash' AND t1.parttype = 'p';
     relname | partstrategy | boundaries
    ---------+--------------+------------
     p1      | h            | {0}
     p2      | h            | {1}
    (2 rows)
    
    -- 查看数据
    openGauss=# select * from test_hash partition (p1);
     col1 | col2
    ------+------
        3 |    3
        4 |    4
    (2 rows)
    
    openGauss=# select * from test_hash partition (p2);
     col1 | col2
    ------+------
        1 |    1
        2 |    2
    (2 rows)
    
    -- 分区表和普通表交换数据
    openGauss=# create table t1 (col1 int, col2 int);
    CREATE TABLE
    openGauss=# alter table test_hash exchange partition (p1) with table t1;
    ALTER TABLE
    openGauss=# select * from test_hash partition (p1);
     col1 | col2
    ------+------
    (0 rows)
    openGauss=# select * from t1;
     col1 | col2
    ------+------
        3 |    3
        4 |    4
    (2 rows)
    
    -- truncate分区
    openGauss=# alter table test_hash truncate partition p2;
    ALTER TABLE
    openGauss=#  select * from test_hash partition (p2);
     col1 | col2
    ------+------
    (0 rows)
    
    -- 删除分区表
    openGauss=# drop table test_hash;
    ```


## 相关链接<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_zh-cn_topic_0059777586_s4e5ff679edd643b5a6cd6679fd1055a1"></a>

[ALTER TABLE PARTITION](ALTER-TABLE-PARTITION.md)，[DROP TABLE](DROP-TABLE.md)

