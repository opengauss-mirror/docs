# CREATE TABLE SUBPARTITION

## 功能描述<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_section1163224811518"></a>

创建二级分区表。分区表是把逻辑上的一张表根据某种方案分成几张物理块进行存储，这张逻辑上的表称之为分区表，物理块称之为分区。分区表是一张逻辑表，不存储数据，数据实际是存储在分区上的。对于二级分区表，顶层节点表和一级分区都是逻辑表，不存储数据，只有二级分区（叶子节点）存储数据。

二级分区表的分区方案是由两个一级分区的分区方案组合而来的，一级分区的分区方案详见章节CREATE TABLE PARTITION。

常见的二级分区表组合方案有Range-Range分区、Range-List分区、Range-Hash分区、List-Range分区、List-List分区、List-Hash分区、Hash-Range分区、Hash-List分区、Hash-Hash分区等。目前二级分区仅支持行存表。

## 注意事项<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_zh-cn_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

-   二级分区表有两个分区键，每个分区键只能支持1列。
-   唯一约束和主键约束的约束键包含所有分区键将为约束创建LOCAL索引，否则创建GLOBAL索引。
-   二级分区表的二级分区（叶子节点）个数不能超过1048575个，一级分区无限制，但一级分区下面至少有一个二级分区。
-   二级分区表只支持行存，不支持列存、段页式、hashbucket。
-   不支持Upsert、Merge into。
-   指定分区查询时，如select \* from tablename partition/subpartition \(partitionname\)，关键字partition和subpartition注意不要写错。如果写错，查询不会报错，这时查询会变为对表起别名进行查询。
-   不支持对二级分区 subpartition for \(values\)查询。如select \* from tablename subpartition for \(values\)。
-   不支持密态数据库、账本数据库和行级访问控制。
-   对于二级分区表PARTITION FOR \(values\)语法，values只能是常量。
-   对于分区表PARTITION/SUBPARTITION FOR \(values\)语法，values在需要数据类型转换时，建议使用强制类型转换，以防隐式类型转换结果与预期不符。
-   指定分区语句目前不能走全局索引扫描。
-   当分区数太多导致内存不足时，会间接导致性能急剧下降。
-   目前Hash分区是按倒序排列的，即通过哈希和取余计算后得到的分区下标与创建顺序相反，同样EXPLAIN计划显示的Selected Partitions的序号排序也与创建顺序相反。List分区是按分区数组的第一个元素排序的。

## 语法格式<a name="section11556125664117"></a>

```
CREATE TABLE [ IF NOT EXISTS ] subpartition_table_name
( 
{ column_name data_type [ COLLATE collation ] [ column_constraint [ ... ] ]
| table_constraint
| LIKE source_table [ like_option [...] ] }[, ... ]
)
[ AUTO_INCREMENT [ = ] value ]
[ WITH ( {storage_parameter = value} [, ... ] ) ]
[ COMPRESS | NOCOMPRESS ]
[ TABLESPACE tablespace_name ]
PARTITION BY {RANGE [ COLUMNS ] | LIST [ COLUMNS ] | HASH | KEY} (partition_key) [ PARTITIONS integer ] SUBPARTITION BY {RANGE | LIST | HASH | KEY} (subpartition_key) [ SUBPARTITIONS integer ]
(
  PARTITION partition_name1 [ VALUES LESS THAN {(val1) | MAXVALUE} | VALUES [IN] (val1[, …]) ] [ TABLESPACE [=] tablespace ]
  (
       { SUBPARTITION subpartition_name1 [ VALUES LESS THAN (val1_1) | VALUES (val1_1[, …])]  [ TABLESPACE [=] tablespace ] [COMMENT {=| } 'text' ] } [, ...]
  )[, ...]
)[ { ENABLE | DISABLE } ROW MOVEMENT ];
```

-   列约束column\_constraint：

    ```
    [ CONSTRAINT constraint_name ]
    { NOT NULL |
      NULL | 
      CHECK ( expression ) | 
      DEFAULT default_e xpr | 
      GENERATED ALWAYS AS ( generation_expr ) [STORED] |
      AUTO_INCREMENT |
      UNIQUE [KEY] index_parameters | 
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
      UNIQUE  [ index_name ][ USING method ] ( { column_name [ ASC | DESC ] } [, ... ] ) index_parameters | 
      PRIMARY KEY  [ USING method ] ( { column_name [ ASC | DESC ] } [, ... ] ) index_parameters |
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


## 参数说明<a name="section7923313718"></a>

-   **IF NOT EXISTS**

    如果已经存在相同名称的表，不会抛出一个错误，而会发出一个通知，告知表关系已存在。

-   **subpartition\_table\_name**

    二级分区表的名称。

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
    -   表约束：不和某个列绑在一起，可以作用于多个列。

     >![](public_sys-resources/icon-notice.png) **须知：** 
        >在B模式数据库下（即sql\_compatibility = 'B'）constraint\_name为可选项，在其他模式数据库下，必须加上constraint\_name。

-   **index\_name**

    索引名。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >-   index\_name仅在B模式数据库下（即sql\_compatibility = 'B'）支持，其他模式数据库下不支持。
    >-   对于外键约束，constraint\_name和index\_name同时指定时，索引名为constraint\_name。
    >-   对于唯一键约束，constraint\_name和index\_name同时指定时，索引名以index\_name。

-   **USING method**

    指定创建索引的方法。

    取值范围参考[参数说明](CREATE-INDEX.md)中的USING method。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >-   USING method仅在B模式数据库下（即sql\_compatibility = 'B'）支持，其他模式数据库下不支持。
    >-   在B模式下，未指定USING method时，对于ASTORE的存储方式，默认索引方法为btree；对于USTORE的存储方式，默认索引方法为ubtree。

-   **ASC | DESC**

    ASC表示指定按升序排序（默认）。DESC指定按降序排序。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >
    >ASC|DESC只在B模式数据库下（即sql\_compatibility = 'B'）支持，其他模式数据库不支持。

-   **LIKE source\_table \[ like\_option ... \]**

    二级分区表暂不支持该功能。

-   **AUTO\_INCREMENT \[ = \] value**

    这个子句为自动增长列指定一个初始值，value必须为正整数，不得超过2<sup>127</sup>-1。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >
    >该子句仅在参数sql\_compatibility=B时有效。


-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    这个子句为表或索引指定一个可选的存储参数。参数的详细描述如下所示：

    -   **FILLFACTOR**

        一个表的填充因子（fillfactor）是一个介于10和100之间的百分数。100（完全填充）是默认值。如果指定了较小的填充因子，INSERT操作仅按照填充因子指定的百分率填充表页。每个页上的剩余空间将用于在该页上更新行，这就使得UPDATE有机会在同一页上放置同一条记录的新版本，这比把新版本放置在其他页上更有效。对于一个从不更新的表将填充因子设为100是最佳选择，但是对于频繁更新的表，选择较小的填充因子则更加合适。该参数对于列存表没有意义。

        取值范围：10\~100

    -   **ORIENTATION**

        决定了表的数据的存储方式。

        取值范围：

        -   COLUMN：表的数据将以列式存储。
        -   ROW（缺省值）：表的数据将以行式存储。

            >![](public_sys-resources/icon-notice.png) **须知：** 
            >
            >orientation不支持修改。

-   **COMPRESSION**
    
    -   列存表的有效值为LOW/MIDDLE/HIGH/YES/NO，压缩级别依次升高，默认值为LOW。
-   行存表不支持压缩。
    
-   **MAX\_BATCHROW**

    指定了在数据加载过程中一个存储单元可以容纳记录的最大数目。该参数只对列存表有效。

    取值范围：10000\~60000，默认60000。

-   **PARTIAL\_CLUSTER\_ROWS**

    指定了在数据加载过程中进行将局部聚簇存储的记录数目。该参数只对列存表有效。

    取值范围：大于等于MAX\_BATCHROW，建议取值为MAX\_BATCHROW的整数倍数。

-   **DELTAROW\_THRESHOLD**

    预留参数。该参数只对列存表有效。

    取值范围：0～9999


-   **COMPRESS / NOCOMPRESS**

    创建一个新表时，需要在创建表语句中指定关键字COMPRESS，这样，当对该表进行批量插入时就会触发压缩特性。该特性会在页范围内扫描所有元组数据，生成字典、压缩元组数据并进行存储。指定关键字NOCOMPRESS则不对表进行压缩。行存表不支持压缩。该参数已废弃，列存表请使用COMPRESSION修改压缩等级。

    缺省值为NOCOMPRESS，即不对元组数据进行压缩。

- **TABLESPACE tablespace\_name**

  指定新表将要在tablespace\_name表空间内创建。如果没有声明，将使用默认表空间。

- **PARTITION BY \{RANGE \[COLUMNS\] | LIST \[COLUMNS\] | HASH | KEY\} \(partition\_key\)**

  -   对于partition\_key，分区策略的分区键仅支持1列。
  -   分区键支持的数据类型和一级分区表约束保持一致。
  -   COLUMNS关键字只能在sql\_compatibility='B'时使用，只能加在RANGE或LIST之后，“RANGE COLUMNS” 语义同 “RANGE”，“LIST COLUMNS” 语义同 “LIST”。
  -   KEY关键字只能在sql\_compatibility='B'时使用，KEY与HASH同义。

- **SUBPARTITION BY \{RANGE | LIST | HASH | KEY\} \(subpartition\_key\)**

  -   对于subpartition\_key，分区策略的分区键仅支持1列。
  -   分区键支持的数据类型和一级分区表约束保持一致。
  -   KEY关键字只能在sql\_compatibility='B'时使用，KEY与HASH同义。

- **PARTITIONS integer**

  指定分区个数。

  integer为分区数，必须为大于0的整数，且不得大于1048575。

  -   当在RANGE和LIST分区后指定此子句时，必须显式定义每个分区，且定义分区的数量必须与integer值相等。只能在sql\_compatibility='B'时在RANGE和LIST分区后指定此子句。
  -   当在HASH和KEY分区后指定此子句时，若不列出各个分区定义，将自动生成integer个分区，自动生成的分区名为“p+数字”，数字依次为0到integer-1，分区的表空间默认为此表的表空间；也可以显式列出每个分区定义，此时定义分区的数量必须与integer值相等。若既不列出分区定义，也不指定分区数量，将创建唯一一个分区。

- **SUBPARTITIONS integer**

  指定二级分区数量。

  integer为二级分区个数，必须为大于0的整数，且不得大于1048575。

  -   只能在HASH和KEY二级分区后指定此子句。
      -   若不列出各个二级分区定义，将在每个一级分区内自动生成integer个二级分区，自动生成的二级分区名为“一级分区名+sp+数字”，数字依次为0到integer-1，分区的表空间默认为此表的表空间。
      -   也可以列出每个二级分区定义，此时二级分区的数量必须与integer值相等。
      -   若既不列出每个二级分区定义，也不指定二级分区数量，将创建唯一一个二级分区。


-   **\{ ENABLE | DISABLE \} ROW MOVEMENT**

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

-   **GENERATED ALWAYS AS \( generation\_expr \) [STORED]**

    该子句将字段创建为生成列，生成列的值在写入（插入或更新）数据时由generation\_expr计算得到，STORED表示像普通列一样存储生成列的值。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >-   STORED关键字可省略，与不省略STORED语义相同。
    >-   生成表达式不能以任何方式引用当前行以外的其他数据。生成表达式不能引用其他生成列，不能引用系统列。生成表达式不能返回结果集，不能使用子查询，不能使用聚集函数，不能使用窗口函数。生成表达式调用的函数只能是不可变（IMMUTABLE）函数。
    >-   不能为生成列指定默认值。
    >-   生成列不能作为分区键的一部分。
    >-   生成列不能和ON UPDATE约束字句的CASCADE、SET NULL、SET DEFAULT动作同时指定。生成列不能和ON DELETE约束字句的SET NULL、SET DEFAULT动作同时指定。
    >-   修改和删除生成列的方法和普通列相同。删除生成列依赖的普通列，生成列被自动删除。不能改变生成列所依赖的列的类型。
    >-   生成列不能被直接写入。在INSERT或UPDATE命令中, 不能为生成列指定值, 但是可以指定关键字DEFAULT。
    >-   生成列的权限控制和普通列一样。
    >
    >
    >-   不能为生成列指定默认值。
    >
    >-   生成列不能作为分区键的一部分。
    > 
    >-   生成列不能和ON UPDATE约束字句的CASCADE、SET NULL、SET DEFAULT动作同时指定。生成列不能和ON DELETE约束字句的SET NULL、SET DEFAULT动作同时指定。
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

-   COMMENT {=| } 'text':

    二级分区表的分区中，该字段无实际意义，仅作语法兼容。在数据库中使用该语法时会有告警提示。

## 示例<a name="section3608124119220"></a>

-   示例1：创建各种组合类型的二级分区表

    ```
    CREATE TABLE list_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY LIST (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901 VALUES ( '201902' )
      (
        SUBPARTITION p_201901_a VALUES ( '1' ),
        SUBPARTITION p_201901_b VALUES ( '2' )
      ),
      PARTITION p_201902 VALUES ( '201903' )
      (
        SUBPARTITION p_201902_a VALUES ( '1' ),
        SUBPARTITION p_201902_b VALUES ( '2' )
      )
    );
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201902', '2', '1', 1);
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    insert into list_list values('201903', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    select * from list_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (6 rows)
    
    drop table list_list;
    CREATE TABLE list_hash
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY LIST (month_code) SUBPARTITION BY HASH (dept_code)
    (
      PARTITION p_201901 VALUES ( '201902' )
      (
        SUBPARTITION p_201901_a,
        SUBPARTITION p_201901_b
      ),
      PARTITION p_201902 VALUES ( '201903' )
      (
        SUBPARTITION p_201902_a,
        SUBPARTITION p_201902_b
      )
    );
    insert into list_hash values('201902', '1', '1', 1);
    insert into list_hash values('201902', '2', '1', 1);
    insert into list_hash values('201902', '3', '1', 1);
    insert into list_hash values('201903', '4', '1', 1);
    insert into list_hash values('201903', '5', '1', 1);
    insert into list_hash values('201903', '6', '1', 1);
    select * from list_hash;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 4         | 1       |         1
     201903     | 5         | 1       |         1
     201903     | 6         | 1       |         1
     201902     | 2         | 1       |         1
     201902     | 3         | 1       |         1
     201902     | 1         | 1       |         1
    (6 rows)
    
    drop table list_hash;
    CREATE TABLE list_range
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY LIST (month_code) SUBPARTITION BY RANGE (dept_code)
    (
      PARTITION p_201901 VALUES ( '201902' )
      (
        SUBPARTITION p_201901_a values less than ('4'),
        SUBPARTITION p_201901_b values less than ('6')
      ),
      PARTITION p_201902 VALUES ( '201903' )
      (
        SUBPARTITION p_201902_a values less than ('3'),
        SUBPARTITION p_201902_b values less than ('6')
      )
    );
    insert into list_range values('201902', '1', '1', 1);
    insert into list_range values('201902', '2', '1', 1);
    insert into list_range values('201902', '3', '1', 1);
    insert into list_range values('201903', '4', '1', 1);
    insert into list_range values('201903', '5', '1', 1);
    insert into list_range values('201903', '6', '1', 1);
    ERROR:  inserted partition key does not map to any table partition
    select * from list_range;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 4         | 1       |         1
     201903     | 5         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 2         | 1       |         1
     201902     | 3         | 1       |         1
    (5 rows)
    
    drop table list_range;
    CREATE TABLE range_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY RANGE (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901 VALUES LESS THAN( '201903' )
      (
        SUBPARTITION p_201901_a values ('1'),
        SUBPARTITION p_201901_b values ('2')
      ),
      PARTITION p_201902 VALUES LESS THAN( '201904' )
      (
        SUBPARTITION p_201902_a values ('1'),
        SUBPARTITION p_201902_b values ('2')
      )
    );
    insert into range_list values('201902', '1', '1', 1);
    insert into range_list values('201902', '2', '1', 1);
    insert into range_list values('201902', '1', '1', 1);
    insert into range_list values('201903', '2', '1', 1);
    insert into range_list values('201903', '1', '1', 1);
    insert into range_list values('201903', '2', '1', 1);
    select * from range_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
    (6 rows)
    
    drop table range_list;
    CREATE TABLE range_hash
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY RANGE (month_code) SUBPARTITION BY HASH (dept_code)
    (
      PARTITION p_201901 VALUES LESS THAN( '201903' )
      (
        SUBPARTITION p_201901_a,
        SUBPARTITION p_201901_b
      ),
      PARTITION p_201902 VALUES LESS THAN( '201904' )
      (
        SUBPARTITION p_201902_a,
        SUBPARTITION p_201902_b
      )
    );
    insert into range_hash values('201902', '1', '1', 1);
    insert into range_hash values('201902', '2', '1', 1);
    insert into range_hash values('201902', '1', '1', 1);
    insert into range_hash values('201903', '2', '1', 1);
    insert into range_hash values('201903', '1', '1', 1);
    insert into range_hash values('201903', '2', '1', 1);
    select * from range_hash;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
    (6 rows)
    
    drop table range_hash;
    CREATE TABLE range_range
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY RANGE (month_code) SUBPARTITION BY RANGE (dept_code)
    (
      PARTITION p_201901 VALUES LESS THAN( '201903' )
      (
        SUBPARTITION p_201901_a VALUES LESS THAN( '2' ),
        SUBPARTITION p_201901_b VALUES LESS THAN( '3' )
      ),
      PARTITION p_201902 VALUES LESS THAN( '201904' )
      (
        SUBPARTITION p_201902_a VALUES LESS THAN( '2' ),
        SUBPARTITION p_201902_b VALUES LESS THAN( '3' )
      )
    );
    insert into range_range values('201902', '1', '1', 1);
    insert into range_range values('201902', '2', '1', 1);
    insert into range_range values('201902', '1', '1', 1);
    insert into range_range values('201903', '2', '1', 1);
    insert into range_range values('201903', '1', '1', 1);
    insert into range_range values('201903', '2', '1', 1);
    select * from range_range;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
    (6 rows)
    
    drop table range_range;
    CREATE TABLE hash_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY hash (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901
      (
        SUBPARTITION p_201901_a VALUES ( '1' ),
        SUBPARTITION p_201901_b VALUES ( '2' )
      ),
      PARTITION p_201902
      (
        SUBPARTITION p_201902_a VALUES ( '1' ),
        SUBPARTITION p_201902_b VALUES ( '2' )
      )
    );
    insert into hash_list values('201901', '1', '1', 1);
    insert into hash_list values('201901', '2', '1', 1);
    insert into hash_list values('201901', '1', '1', 1);
    insert into hash_list values('201903', '2', '1', 1);
    insert into hash_list values('201903', '1', '1', 1);
    insert into hash_list values('201903', '2', '1', 1);
    select * from hash_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201901     | 2         | 1       |         1
     201901     | 1         | 1       |         1
     201901     | 1         | 1       |         1
    (6 rows)
    
    drop table hash_list;
    CREATE TABLE hash_hash
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY hash (month_code) SUBPARTITION BY hash (dept_code)
    (
      PARTITION p_201901
      (
        SUBPARTITION p_201901_a,
        SUBPARTITION p_201901_b
      ),
      PARTITION p_201902
      (
        SUBPARTITION p_201902_a,
        SUBPARTITION p_201902_b
      )
    );
    insert into hash_hash values('201901', '1', '1', 1);
    insert into hash_hash values('201901', '2', '1', 1);
    insert into hash_hash values('201901', '1', '1', 1);
    insert into hash_hash values('201903', '2', '1', 1);
    insert into hash_hash values('201903', '1', '1', 1);
    insert into hash_hash values('201903', '2', '1', 1);
    select * from hash_hash;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201901     | 2         | 1       |         1
     201901     | 1         | 1       |         1
     201901     | 1         | 1       |         1
    (6 rows)
    
    drop table hash_hash;
    CREATE TABLE hash_range
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY hash (month_code) SUBPARTITION BY range (dept_code)
    (
      PARTITION p_201901
      (
        SUBPARTITION p_201901_a VALUES LESS THAN ( '2' ),
        SUBPARTITION p_201901_b VALUES LESS THAN ( '3' )
      ),
      PARTITION p_201902
      (
        SUBPARTITION p_201902_a VALUES LESS THAN ( '2' ),
        SUBPARTITION p_201902_b VALUES LESS THAN ( '3' )
      )
    );
    insert into hash_range values('201901', '1', '1', 1);
    insert into hash_range values('201901', '2', '1', 1);
    insert into hash_range values('201901', '1', '1', 1);
    insert into hash_range values('201903', '2', '1', 1);
    insert into hash_range values('201903', '1', '1', 1);
    insert into hash_range values('201903', '2', '1', 1);
    select * from hash_range;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 1         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201901     | 1         | 1       |         1
     201901     | 1         | 1       |         1
     201901     | 2         | 1       |         1
    (6 rows)
    ```

-   示例2：对二级分区表进行DML指定分区操作

    ```
    CREATE TABLE range_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY RANGE (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901 VALUES LESS THAN( '201903' )
      (
        SUBPARTITION p_201901_a values ('1'),
        SUBPARTITION p_201901_b values ('2')
      ),
      PARTITION p_201902 VALUES LESS THAN( '201910' )
      (
        SUBPARTITION p_201902_a values ('1'),
        SUBPARTITION p_201902_b values ('2')
      )
    );
    --指定一级分区插入数据
    insert into range_list partition (p_201901) values('201902', '1', '1', 1);
    --实际分区和指定分区不一致，报错
    insert into range_list partition (p_201902) values('201902', '1', '1', 1);
    ERROR:  inserted partition key does not map to the table partition
    DETAIL:  N/A.
    --指定二级分区插入数据
    insert into range_list subpartition (p_201901_a) values('201902', '1', '1', 1);
    --实际分区和指定分区不一致，报错
    insert into range_list subpartition (p_201901_b) values('201902', '1', '1', 1);
    ERROR:  inserted subpartition key does not map to the table subpartition
    DETAIL:  N/A.
    insert into range_list partition for ('201902') values('201902', '1', '1', 1);
    insert into range_list subpartition for ('201902','1') values('201902', '1', '1', 1);
    
    --指定分区查询数据
    select * from range_list partition (p_201901);
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (4 rows)
    
    select * from range_list subpartition (p_201901_a);
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (4 rows)
    
    select * from range_list partition for ('201902');
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (4 rows)
    
    select * from range_list subpartition for ('201902','1');
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (4 rows)
    
    --指定分区更新数据
    update range_list partition (p_201901) set user_no = '2';
    select * from range_list;
    select *from range_list; month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 2       |         1
     201902     | 1         | 2       |         1
     201902     | 1         | 2       |         1
     201902     | 1         | 2       |         1
    (4 rows)
    update range_list subpartition (p_201901_a) set user_no = '3';
    select * from range_list;
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 3       |         1
     201902     | 1         | 3       |         1
     201902     | 1         | 3       |         1
     201902     | 1         | 3       |         1
    (4 rows)
    update range_list partition for ('201902') set user_no = '4';
    select * from range_list;
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 4       |         1
     201902     | 1         | 4       |         1
     201902     | 1         | 4       |         1
     201902     | 1         | 4       |         1
    (4 rows)
    update range_list subpartition for ('201902','2') set user_no = '5';
    openGauss=# select *from range_list;
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 4       |         1
     201902     | 1         | 4       |         1
     201902     | 1         | 4       |         1
     201902     | 1         | 4       |         1
    (4 rows)
    select * from range_list;
    
    --指定分区删除数据
    delete from range_list partition (p_201901);
    DELETE 4
    delete from range_list partition for ('201903');
    DELETE 0
    delete from range_list subpartition (p_201901_a);
    DELETE 0
    delete from range_list subpartition for ('201903','2');
    DELETE 0
    --参数sql_compatibility=B时，可指定多分区删除数据
    delete from range_list as t partition (p_201901_a, p_201901);
    DELETE 0
    
    --指定分区insert数据
    insert into range_list partition (p_201901)  values('201902', '1', '1', 1)  ON DUPLICATE KEY UPDATE sales_amt = 5;
    insert into range_list subpartition (p_201901_a)  values('201902', '1', '1', 1)  ON DUPLICATE KEY UPDATE sales_amt = 10;
    insert into range_list partition for ('201902')  values('201902', '1', '1', 1)  ON DUPLICATE KEY UPDATE sales_amt = 30;
    insert into range_list subpartition for ('201902','1')  values('201902', '1', '1', 1)  ON DUPLICATE KEY UPDATE sales_amt = 40;
    select * from range_list;
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (4 rows)
    
    --指定分区merge into数据
    CREATE TABLE newrange_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY RANGE (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901 VALUES LESS THAN( '201903' )
      (
        SUBPARTITION p_201901_a values ('1'),
        SUBPARTITION p_201901_b values ('2')
      ),
      PARTITION p_201902 VALUES LESS THAN( '201910' )
      (
        SUBPARTITION p_201902_a values ('1'),
        SUBPARTITION p_201902_b values ('2')
      )
    );
    insert into newrange_list values('201902', '1', '1', 1);
    insert into newrange_list values('201903', '1', '1', 2);
    
    MERGE INTO range_list partition (p_201901) p
    USING newrange_list partition (p_201901) np
    ON p.month_code= np.month_code
    WHEN MATCHED THEN
      UPDATE SET dept_code = np.dept_code, user_no = np.user_no, sales_amt = np.sales_amt
    WHEN NOT MATCHED THEN  
      INSERT VALUES (np.month_code, np.dept_code, np.user_no, np.sales_amt);
    
    select * from range_list;
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (4 rows)
    
    MERGE INTO range_list partition for ('201901') p
    USING newrange_list partition for ('201901') np
    ON p.month_code= np.month_code
    WHEN MATCHED THEN
      UPDATE SET dept_code = np.dept_code, user_no = np.user_no, sales_amt = np.sales_amt
    WHEN NOT MATCHED THEN  
      INSERT VALUES (np.month_code, np.dept_code, np.user_no, np.sales_amt);
    
    select * from range_list;
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (4 rows)
    
    MERGE INTO range_list subpartition (p_201901_a) p
    USING newrange_list subpartition (p_201901_a) np
    ON p.month_code= np.month_code
    WHEN MATCHED THEN
      UPDATE SET dept_code = np.dept_code, user_no = np.user_no, sales_amt = np.sales_amt
    WHEN NOT MATCHED THEN  
      INSERT VALUES (np.month_code, np.dept_code, np.user_no, np.sales_amt);
    
    select * from range_list;
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (4 rows)
    
    MERGE INTO range_list subpartition for ('201901', '1') p
    USING newrange_list subpartition for ('201901', '1') np
    ON p.month_code= np.month_code
    WHEN MATCHED THEN
      UPDATE SET dept_code = np.dept_code, user_no = np.user_no, sales_amt = np.sales_amt
    WHEN NOT MATCHED THEN  
      INSERT VALUES (np.month_code, np.dept_code, np.user_no, np.sales_amt);
    
    select * from range_list;
     month_code | dept_code | user_no | sales_amt
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (4 rows)
    ```

-   示例3：对二级分区表进行truncate操作

    ```
    CREATE TABLE list_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY LIST (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901 VALUES ( '201902' )
      (
        SUBPARTITION p_201901_a VALUES ( '1' ),
        SUBPARTITION p_201901_b VALUES ( default )
      ),
      PARTITION p_201902 VALUES ( '201903' )
      (
        SUBPARTITION p_201902_a VALUES ( '1' ),
        SUBPARTITION p_201902_b VALUES ( '2' )
      )
    );
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201902', '2', '1', 1);
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    insert into list_list values('201903', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    select * from list_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (6 rows)
    
    select * from list_list partition (p_201901);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (3 rows)
    
    alter table list_list truncate partition p_201901;
    select * from list_list partition (p_201901);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list partition (p_201902);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
    (3 rows)
    
    alter table list_list truncate partition p_201902;
    select * from list_list partition (p_201902);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201902', '2', '1', 1);
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    insert into list_list values('201903', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    select * from list_list subpartition (p_201901_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (2 rows)
    
    alter table list_list truncate subpartition p_201901_a;
    select * from list_list subpartition (p_201901_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list subpartition (p_201901_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
    (1 row)
    
    alter table list_list truncate subpartition p_201901_b;
    select * from list_list subpartition (p_201901_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list subpartition (p_201902_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 1         | 1       |         1
    (1 row)
    
    alter table list_list truncate subpartition p_201902_a;
    select * from list_list subpartition (p_201902_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list subpartition (p_201902_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
    (2 rows)
    
    alter table list_list truncate subpartition p_201902_b;
    select * from list_list subpartition (p_201902_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    drop table list_list;
    
    ```

-   示例4：对二级分区表进行split操作

    ```
    CREATE TABLE list_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY LIST (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901 VALUES ( '201902' )
      (
        SUBPARTITION p_201901_a VALUES ( '1' ),
        SUBPARTITION p_201901_b VALUES ( default )
      ),
      PARTITION p_201902 VALUES ( '201903' )
      (
        SUBPARTITION p_201902_a VALUES ( '1' ),
        SUBPARTITION p_201902_b VALUES ( default )
      )
    );
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201902', '2', '1', 1);
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    insert into list_list values('201903', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    select * from list_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (6 rows)
    
    select * from list_list subpartition (p_201901_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (2 rows)
    
    select * from list_list subpartition (p_201901_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
    (1 row)
    
    alter table list_list split subpartition p_201901_b values (2) into
    (
     subpartition p_201901_b,
     subpartition p_201901_c
    );
    select * from list_list subpartition (p_201901_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (2 rows)
    
    select * from list_list subpartition (p_201901_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
    (1 row)
    
    select * from list_list subpartition (p_201901_c);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list partition (p_201901);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (3 rows)
    
    select * from list_list subpartition (p_201902_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 1         | 1       |         1
    (1 row)
    
    select * from list_list subpartition (p_201902_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
    (2 rows)
    
    alter table list_list split subpartition p_201902_b values (3) into
    (
     subpartition p_201902_b,
     subpartition p_201902_c
    );
    select * from list_list subpartition (p_201902_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 1         | 1       |         1
    (1 row)
    
    select * from list_list subpartition (p_201902_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list subpartition (p_201902_c);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
    (2 rows)
    
    drop table list_list;
    ```


