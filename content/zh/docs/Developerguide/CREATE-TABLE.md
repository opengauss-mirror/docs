# CREATE TABLE<a name="ZH-CN_TOPIC_0242370581"></a>

## 功能描述<a name="zh-cn_topic_0237122117_zh-cn_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

在当前数据库中创建一个新的空白表，该表由命令执行者所有。

## 注意事项<a name="zh-cn_topic_0237122117_zh-cn_topic_0059778169_sb04dbf08cbd848649163edbff21254a1"></a>

-   列存表支持的数据类型请参考[列存表支持的数据类型](列存表支持的数据类型.md)。
-   列存表不支持数组。
-   创建列存表的数量建议不超过1000个。
-   表中的主键约束和唯一约束必须包含分布列。
-   如果在建表过程中数据库系统发生故障，系统恢复后可能无法自动清除之前已创建的、大小为0的磁盘文件。此种情况出现概率小，不影响数据库系统的正常运行。
-   列存表的表级约束只支持PARTIAL CLUSTER KEY，不支持主外键等表级约束。
-   列存表的字段约束只支持NULL、NOT NULL和DEFAULT常量值。
-   列存表支持delta表，受参数[enable\_delta\_store](并行导入.md#zh-cn_topic_0237124705_section1035224982816)  控制是否开启，受参数deltarow\_threshold控制进入delta表的阀值。
-   使用JDBC时，支持通过PrepareStatement对DEFAUTL值进行参数化设置。

## 语法格式<a name="zh-cn_topic_0237122117_zh-cn_topic_0059778169_sc7a49d08f8ac43189f0e7b1c74f877eb"></a>

-   创建表。

    ```
    CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name 
        ({ column_name data_type [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ]
            | table_constraint
            | LIKE source_table [ like_option [...] ] }
            [, ... ])
        [ WITH ( {storage_parameter = value} [, ... ] ) ]
        [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
        [ COMPRESS | NOCOMPRESS ]
        [ TABLESPACE tablespace_name ];
    ```

    -   其中列约束column\_constraint为：

        ```
        [ CONSTRAINT constraint_name ]
        { NOT NULL |
          NULL |
          CHECK ( expression ) |
          DEFAULT default_expr |
          UNIQUE index_parameters |
          PRIMARY KEY index_parameters }
        [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
        ```

    -   其中列的压缩可选项compress\_mode为：

        ```
        { DELTA | PREFIX | DICTIONARY | NUMSTR | NOCOMPRESS }
        ```

    -   其中表约束table\_constraint为：

        ```
        [ CONSTRAINT constraint_name ]
        { CHECK ( expression ) |
          UNIQUE ( column_name [, ... ] ) index_parameters |
          PRIMARY KEY ( column_name [, ... ] ) index_parameters |
          PARTIAL CLUSTER KEY ( column_name [, ... ] ) }
        [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
        ```

    -   其中like选项like\_option为：

        ```
        { INCLUDING | EXCLUDING } { DEFAULTS | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | PARTITION | RELOPTIONS | ALL }
        ```



其中索引参数index\_parameters为：

```
[ WITH ( {storage_parameter = value} [, ... ] ) ]
[ USING INDEX TABLESPACE tablespace_name ]
```

## 参数说明<a name="zh-cn_topic_0237122117_zh-cn_topic_0059778169_s99cf2ac11c79436c93385e4efd7c4428"></a>

-   **UNLOGGED**

    如果指定此关键字，则创建的表为非日志表。在非日志表中写入的数据不会被写入到预写日志中，这样就会比普通表快很多。但是非日志表在冲突、执行操作系统重启、强制重启、切断电源操作或异常关机后会被自动截断，会造成数据丢失的风险。非日志表中的内容也不会被复制到备服务器中。在非日志表中创建的索引也不会被自动记录。

    使用场景：非日志表不能保证数据的安全性，用户应该在确保数据已经做好备份的前提下使用，例如系统升级时进行数据的备份。

    故障处理：当异常关机等操作导致非日志表上的索引发生数据丢失时，用户应该对发生错误的索引进行重建。

-   **GLOBAL | LOCAL**

    创建临时表时可以在TEMP或TEMPORARY前指定GLOBAL或LOCAL关键字。目前这两个关键字的设立，仅是为了兼容SQL标准，实际上无论指定GLOBAL还是LOCAL关键字，openGauss都会创建本地临时表。

-   **TEMPORARY | TEMP**

    指定TEMP或者TEMPORARY关键字，则创建的表为临时表。临时表只在当前会话可见，本会话结束后会自动删除。因此，在除当前会话连接的数据库节点故障时，仍然可以在当前会话上创建和使用临时表。由于临时表只在当前会话创建，对于涉及对临时表操作的DDL语句，会产生DDL失败的报错。因此，建议DDL语句中不要对临时表进行操作。TEMP和TEMPORARY等价。

    >![](public_sys-resources/icon-notice.gif) **须知：**   
>-   临时表通过每个会话独立的以pg\_temp开头的schema来保证只对当前会话可见，因此，不建议用户在日常操作中手动删除以pg\_temp，pg\_toast\_temp开头的schema。  
    >-   如果建表时不指定TEMPORARY/TEMP关键字，而指定表的schema为当前会话的pg\_temp\_开头的schema，则此表会被创建为临时表。  

-   **IF NOT EXISTS**

    如果已经存在相同名称的表，不会报出错误，而会发出通知，告知通知此表已存在。

-   **table\_name**

    要创建的表名。

-   **column\_name**

    新表中要创建的字段名。

-   **data\_type**

    字段的数据类型。

-   **compress\_mode**

    表字段的压缩选项，当前仅对行存表有效。该选项指定表字段优先使用的压缩算法。

    取值范围：DELTA、PREFIX、DICTIONARY、NUMSTR、NOCOMPRESS

-   **COLLATE collation**

    COLLATE子句指定列的排序规则（该列必须是可排列的数据类型）。如果没有指定，则使用默认的排序规则。

-   **LIKE source\_table \[ like\_option ... \]**

    LIKE子句声明一个表，新表自动从这个表中继承所有字段名及其数据类型和非空约束。

    新表与源表之间在创建动作完毕之后是完全无关的。在源表做的任何修改都不会传播到新表中，并且也不可能在扫描源表的时候包含新表的数据。

    被复制的列和约束并不使用相同的名称进行融合。如果明确的指定了相同的名称或者在另外一个LIKE子句中，将会报错。

    -   源表上的字段缺省表达式只有在指定INCLUDING DEFAULTS时，才会复制到新表中。缺省是不包含缺省表达式的，即新表中的所有字段的缺省值都是NULL。
    -   源表上的CHECK约束仅在指定INCLUDING CONSTRAINTS时，会复制到新表中，而其他类型的约束永远不会复制到新表中。非空约束总是复制到新表中。此规则同时适用于表约束和列约束。
    -   如果指定了INCLUDING INDEXES，则源表上的索引也将在新表上创建，默认不建立索引。
    -   如果指定了INCLUDING STORAGE，则复制列的STORAGE设置会复制到新表中，默认情况下不包含STORAGE设置。
    -   如果指定了INCLUDING COMMENTS，则源表列、约束和索引的注释会复制到新表中。默认情况下，不复制源表的注释。
    -   如果指定了INCLUDING PARTITION，则源表的分区定义会复制到新表中，同时新表将不能再使用PARTITION BY子句。默认情况下，不拷贝源表的分区定义。
    -   如果指定了INCLUDING RELOPTIONS，则源表的存储参数（即源表的WITH子句）会复制到新表中。默认情况下，不复制源表的存储参数。
    -   INCLUDING ALL包含了INCLUDING DEFAULTS、INCLUDING CONSTRAINTS、INCLUDING INDEXES、INCLUDING STORAGE、INCLUDING COMMENTS、INCLUDING PARTITION和INCLUDING RELOPTIONS的内容。

    >![](public_sys-resources/icon-notice.gif) **须知：**   
    >-   如果源表包含serial、bigserial、smallserial类型，或者源表字段的默认值是sequence，且sequence属于源表（通过CREATE SEQUENCE ... OWNED BY创建），这些Sequence不会关联到新表中，新表中会重新创建属于自己的sequence。这和之前版本的处理逻辑不同。如果用户希望源表和新表共享Sequence，需要首先创建一个共享的Sequence（避免使用OWNED BY），并配置为源表字段默认值，这样创建的新表会和源表共享该Sequence。  
    >-   不建议将其他表私有的Sequence配置为源表字段的默认值，尤其是其他表只分布在特定的NodeGroup上，这可能导致CREATE TABLE ... LIKE执行失败。另外，如果源表配置其他表私有的Sequence，当该表删除时Sequence也会连带删除，这样源表的Sequence将不可用。如果用户希望多个表共享Sequence，建议创建共享的Sequence。  

-   **WITH \( \{ storage\_parameter = value \} \[, ... \] \)**

    这个子句为表或索引指定一个可选的存储参数。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >使用任意精度类型Numeric定义列时，建议指定精度p以及刻度s。在不指定精度和刻度时，会按输入的显示出来。  

    参数的详细描述如下所示。

    -   FILLFACTOR

        一个表的填充因子（fillfactor）是一个介于10和100之间的百分数。100（完全填充）是默认值。如果指定了较小的填充因子，INSERT操作仅按照填充因子指定的百分率填充表页。每个页上的剩余空间将用于在该页上更新行，这就使得UPDATE有机会在同一页上放置同一条记录的新版本，这比把新版本放置在其他页上更有效。对于一个从不更新的表将填充因子设为100是最佳选择，但是对于频繁更新的表，选择较小的填充因子则更加合适。该参数对于列存表没有意义。

        取值范围：10\~100

    -   ORIENTATION

        指定表数据的存储方式，即行存方式、列存方式、ORC格式的方式，该参数设置成功后就不再支持修改。

        取值范围：

        -   ROW，表示表的数据将以行式存储。

            行存储适合于OLTP业务，适用于点查询或者增删操作较多的场景。

        -   COLUMN，表示表的数据将以列式存储。

            列存储适合于数据仓库业务，此类型的表上会做大量的汇聚计算，且涉及的列操作较少。

        默认值：

        若指定表空间为普通表空间，默认值为ROW。

    -   COMPRESSION

        指定表数据的压缩级别，它决定了表数据的压缩比以及压缩时间。一般来讲，压缩级别越高，压缩比也越大，压缩时间也越长；反之亦然。实际压缩比取决于加载的表数据的分布特征。

        取值范围：

        列存表的有效值为YES/NO/LOW/MIDDLE/HIGH，默认值为LOW。

    -   COMPRESSLEVEL

        指定表数据同一压缩级别下的不同压缩水平，它决定了同一压缩级别下表数据的压缩比以及压缩时间。对同一压缩级别进行了更加详细的划分，为用户选择压缩比和压缩时间提供了更多的空间。总体来讲，此值越大，表示同一压缩级别下压缩比越大，压缩时间越长；反之亦然。

        取值范围：0\~3，默认值为0。

    -   MAX\_BATCHROW

        指定了在数据加载过程中一个存储单元可以容纳记录的最大数目。该参数只对列存表有效。

        取值范围：10000\~60000

    -   PARTIAL\_CLUSTER\_ROWS

        指定了在数据加载过程中进行将局部聚簇存储的记录数目。该参数只对列存表有效。

        取值范围：600000\~2147483647

    -   DELTAROW\_THRESHOLD

        指定列存表导入时小于多少行的数据进入delta表，只在GUC参数[enable\_delta\_store](并行导入.md#zh-cn_topic_0237124705_section1035224982816)开启时生效。该参数只对列存表有效。

        取值范围：0～9999，默认值为100

    -   VERSION

        指定ORC存储格式的版本。

        取值范围：0.12，目前支持ORC 0.12格式，后续会随着ORC格式的发展，支持更多格式。

        默认值：0.12


-   **ON COMMIT \{ PRESERVE ROWS | DELETE ROWS | DROP \}**

    ON COMMIT选项决定在事务中执行创建临时表操作，当事务提交时，此临时表的后续操作。有以下三个选项，当前支持PRESERVE ROWS和DELETE ROWS选项。

    -   PRESERVE ROWS（缺省值）：提交时不对临时表做任何操作，临时表及其表数据保持不变。
    -   DELETE ROWS：提交时删除临时表中数据。
    -   DROP：提交时删除此临时表。

-   **COMPRESS | NOCOMPRESS**

    创建新表时，需要在CREATE TABLE语句中指定关键字COMPRESS，这样，当对该表进行批量插入时就会触发压缩特性。该特性会在页范围内扫描所有元组数据，生成字典、压缩元组数据并进行存储。指定关键字NOCOMPRESS则不对表进行压缩。

    缺省值：NOCOMPRESS，即不对元组数据进行压缩。

-   **TABLESPACE tablespace\_name**

    创建新表时指定此关键字，表示新表将要在指定表空间内创建。如果没有声明，将使用默认表空间。

-   **CONSTRAINT constraint\_name**

    列约束或表约束的名称。可选的约束子句用于声明约束，新行或者更新的行必须满足这些约束才能成功插入或更新。

    定义约束有两种方法：

    -   列约束：作为一个列定义的一部分，仅影响该列。
    -   表约束：不和某个列绑在一起，可以作用于多个列。

-   **NOT NULL**

    字段值不允许为NULL。

-   **NULL**

    字段值允许为NULL ，这是缺省值。

    这个子句只是为和非标准SQL数据库兼容。不建议使用。

-   **CHECK \( expression \)**

    CHECK约束声明一个布尔表达式，每次要插入的新行或者要更新的行的新值必须使表达式结果为真或未知才能成功，否则会抛出一个异常并且不会修改数据库。

    声明为字段约束的检查约束应该只引用该字段的数值，而在表约束里出现的表达式可以引用多个字段。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >expression表达式中，如果存在“<\>NULL”或“！=NULL”，这种写法是无效的，需要写成“is NOT NULL”。  

-   **DEFAULT default\_expr**

    DEFAULT子句给字段指定缺省值。该数值可以是任何不含变量的表达式\(不允许使用子查询和对本表中的其他字段的交叉引用\)。缺省表达式的数据类型必须和字段类型匹配。

    缺省表达式将被用于任何未声明该字段数值的插入操作。如果没有指定缺省值则缺省值为NULL 。

-   **UNIQUE index\_parameters**

    **UNIQUE \( column\_name \[, ... \] \) index\_parameters**

    UNIQUE约束表示表里的一个字段或多个字段的组合必须在全表范围内唯一。

    对于唯一约束，NULL被认为是互不相等的。

-   **PRIMARY KEY index\_parameters**

    **PRIMARY KEY \( column\_name \[, ... \] \) index\_parameters**

    主键约束声明表中的一个或者多个字段只能包含唯一的非NULL值。

    一个表只能声明一个主键。

-   **DEFERRABLE | NOT DEFERRABLE**

    这两个关键字设置该约束是否可推迟。一个不可推迟的约束将在每条命令之后马上检查。可推迟约束可以推迟到事务结尾使用SET CONSTRAINTS命令检查。缺省是NOT DEFERRABLE。目前，UNIQUE约束和主键约束可以接受这个子句。所有其他约束类型都是不可推迟的。

-   **PARTIAL CLUSTER KEY**

    局部聚簇存储，列存表导入数据时按照指定的列\(单列或多列\)，进行局部排序。

-   **INITIALLY IMMEDIATE | INITIALLY DEFERRED**

    如果约束是可推迟的，则这个子句声明检查约束的缺省时间。

    -   如果约束是INITIALLY IMMEDIATE（缺省），则在每条语句执行之后就立即检查它；
    -   如果约束是INITIALLY DEFERRED ，则只有在事务结尾才检查它。

    约束检查的时间可以用SET CONSTRAINTS命令修改。

-   **USING INDEX TABLESPACE tablespace\_name**

    为UNIQUE或PRIMARY KEY约束相关的索引声明一个表空间。如果没有提供这个子句，这个索引将在default\_tablespace中创建，如果default\_tablespace为空，将使用数据库的缺省表空间。


## 示例<a name="zh-cn_topic_0237122117_zh-cn_topic_0059778169_s86758dcf05d442d2a9ebd272e76ed1b8"></a>

```
--创建简单的表。
postgres=# CREATE TABLE tpcds.warehouse_t1
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

postgres=# CREATE TABLE tpcds.warehouse_t2
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER                       ,
    W_STREET_NUMBER           CHAR(10)                      ,
    W_STREET_NAME             VARCHAR(60)         DICTIONARY,
    W_STREET_TYPE             CHAR(15)                      ,
    W_SUITE_NUMBER            CHAR(10)                      ,
    W_CITY                    VARCHAR(60)                   ,
    W_COUNTY                  VARCHAR(30)                   ,
    W_STATE                   CHAR(2)                       ,
    W_ZIP                     CHAR(10)                      ,
    W_COUNTRY                 VARCHAR(20)                   ,
    W_GMT_OFFSET              DECIMAL(5,2)
);
```

```
--创建表，并指定W_STATE字段的缺省值为GA。
postgres=# CREATE TABLE tpcds.warehouse_t3
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
    W_STATE                   CHAR(2)           DEFAULT 'GA',
    W_ZIP                     CHAR(10)                      ,
    W_COUNTRY                 VARCHAR(20)                   ,
    W_GMT_OFFSET              DECIMAL(5,2)
);

--创建表，并在事务结束时检查W_WAREHOUSE_NAME字段是否有重复。
postgres=# CREATE TABLE tpcds.warehouse_t4
(
    W_WAREHOUSE_SK            INTEGER                NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)               NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)   UNIQUE DEFERRABLE,
    W_WAREHOUSE_SQ_FT         INTEGER                        ,
    W_STREET_NUMBER           CHAR(10)                       ,
    W_STREET_NAME             VARCHAR(60)                    ,
    W_STREET_TYPE             CHAR(15)                       ,
    W_SUITE_NUMBER            CHAR(10)                       ,
    W_CITY                    VARCHAR(60)                    ,
    W_COUNTY                  VARCHAR(30)                    ,
    W_STATE                   CHAR(2)                        ,
    W_ZIP                     CHAR(10)                       ,
    W_COUNTRY                 VARCHAR(20)                    ,
    W_GMT_OFFSET              DECIMAL(5,2) 
);
```

```
--创建一个带有70%填充因子的表。
postgres=# CREATE TABLE tpcds.warehouse_t5
(
    W_WAREHOUSE_SK            INTEGER                NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)               NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)                    ,
    W_WAREHOUSE_SQ_FT         INTEGER                        ,
    W_STREET_NUMBER           CHAR(10)                       ,
    W_STREET_NAME             VARCHAR(60)                    ,
    W_STREET_TYPE             CHAR(15)                       ,
    W_SUITE_NUMBER            CHAR(10)                       ,
    W_CITY                    VARCHAR(60)                    ,
    W_COUNTY                  VARCHAR(30)                    ,
    W_STATE                   CHAR(2)                        ,
    W_ZIP                     CHAR(10)                       ,
    W_COUNTRY                 VARCHAR(20)                    ,
    W_GMT_OFFSET              DECIMAL(5,2),
    UNIQUE(W_WAREHOUSE_NAME) WITH(fillfactor=70)
);

--或者用下面的语法。
postgres=# CREATE TABLE tpcds.warehouse_t6
(
    W_WAREHOUSE_SK            INTEGER                NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)               NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)              UNIQUE,
    W_WAREHOUSE_SQ_FT         INTEGER                        ,
    W_STREET_NUMBER           CHAR(10)                       ,
    W_STREET_NAME             VARCHAR(60)                    ,
    W_STREET_TYPE             CHAR(15)                       ,
    W_SUITE_NUMBER            CHAR(10)                       ,
    W_CITY                    VARCHAR(60)                    ,
    W_COUNTY                  VARCHAR(30)                    ,
    W_STATE                   CHAR(2)                        ,
    W_ZIP                     CHAR(10)                       ,
    W_COUNTRY                 VARCHAR(20)                    ,
    W_GMT_OFFSET              DECIMAL(5,2)
) WITH(fillfactor=70);

--创建表，并指定该表数据不写入预写日志。
postgres=# CREATE UNLOGGED TABLE tpcds.warehouse_t7
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

--创建表临时表。
postgres=# CREATE TEMPORARY TABLE warehouse_t24
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

--创建本地临时表，并指定提交事务时删除该临时表数据。
postgres=# CREATE TEMPORARY TABLE warehouse_t25
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
) ON COMMIT DELETE ROWS;

--创建全局临时表，并指定会话结束时删除该临时表数据。
postgres=# CREATE GLOBAL TEMPORARY TABLE gtt1
(
    ID                        INTEGER               NOT NULL,
    NAME                      CHAR(16)              NOT NULL,
    ADDRESS                   VARCHAR(50)                   ,
    POSTCODE                  CHAR(6)
) ON COMMIT PRESERVE ROWS;

--创建表时，不希望因为表已存在而报错。
postgres=# CREATE TABLE IF NOT EXISTS tpcds.warehouse_t8
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

--创建普通表空间。
postgres=# CREATE TABLESPACE DS_TABLESPACE1 RELATIVE LOCATION 'tablespace/tablespace_1';
--创建表时，指定表空间。
postgres=# CREATE TABLE tpcds.warehouse_t9
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
) TABLESPACE DS_TABLESPACE1;

--创建表时，单独指定W_WAREHOUSE_NAME的索引表空间。
postgres=# CREATE TABLE tpcds.warehouse_t10
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)           UNIQUE USING INDEX TABLESPACE DS_TABLESPACE1,
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
```

```
--创建一个有主键约束的表。
postgres=# CREATE TABLE tpcds.warehouse_t11
(
    W_WAREHOUSE_SK            INTEGER            PRIMARY KEY,
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

---或是用下面的语法，效果完全一样。
postgres=# CREATE TABLE tpcds.warehouse_t12
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
    W_GMT_OFFSET              DECIMAL(5,2),
    PRIMARY KEY(W_WAREHOUSE_SK)
);

--或是用下面的语法，指定约束的名称。
postgres=# CREATE TABLE tpcds.warehouse_t13
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
    W_GMT_OFFSET              DECIMAL(5,2),
    CONSTRAINT W_CSTR_KEY1 PRIMARY KEY(W_WAREHOUSE_SK)
);

--创建一个有复合主键约束的表。
postgres=# CREATE TABLE tpcds.warehouse_t14
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
    W_GMT_OFFSET              DECIMAL(5,2),
    CONSTRAINT W_CSTR_KEY2 PRIMARY KEY(W_WAREHOUSE_SK, W_WAREHOUSE_ID)
);

--创建列存表。
postgres=# CREATE TABLE tpcds.warehouse_t15
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
) WITH (ORIENTATION = COLUMN);

--创建局部聚簇存储的列存表。
postgres=# CREATE TABLE tpcds.warehouse_t16
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
    W_GMT_OFFSET              DECIMAL(5,2),
    PARTIAL CLUSTER KEY(W_WAREHOUSE_SK, W_WAREHOUSE_ID)
) WITH (ORIENTATION = COLUMN);

--定义一个带压缩的列存表。
postgres=# CREATE TABLE tpcds.warehouse_t17
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
) WITH (ORIENTATION = COLUMN, COMPRESSION=HIGH);

--定义一个带压缩的表。
postgres=# CREATE TABLE tpcds.warehouse_t18
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
) COMPRESS;

--定义一个检查列约束。
postgres=# CREATE TABLE tpcds.warehouse_t19
(
    W_WAREHOUSE_SK            INTEGER               PRIMARY KEY CHECK (W_WAREHOUSE_SK > 0),
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)           CHECK (W_WAREHOUSE_NAME IS NOT NULL),
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

postgres=# CREATE TABLE tpcds.warehouse_t20
(
    W_WAREHOUSE_SK            INTEGER               PRIMARY KEY,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)           CHECK (W_WAREHOUSE_NAME IS NOT NULL),
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
    W_GMT_OFFSET              DECIMAL(5,2),
    CONSTRAINT W_CONSTR_KEY2 CHECK(W_WAREHOUSE_SK > 0 AND W_WAREHOUSE_NAME IS NOT NULL) 
);

--定义一个表，表中每一个行存在数据库节点中。
postgres=# CREATE TABLE tpcds.warehouse_t21
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

--定义一个表，使用HASH分布。
postgres=# CREATE TABLE tpcds.warehouse_t22
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
    W_GMT_OFFSET              DECIMAL(5,2),
    CONSTRAINT W_CONSTR_KEY3 UNIQUE(W_WAREHOUSE_SK)
);

--向tpcds.warehouse_t19表中增加一个varchar列。
```

```
postgres=# ALTER TABLE tpcds.warehouse_t19 ADD W_GOODS_CATEGORY varchar(30);

--给tpcds.warehouse_t19表增加一个检查约束。
postgres=# ALTER TABLE tpcds.warehouse_t19 ADD CONSTRAINT W_CONSTR_KEY4 CHECK (W_STATE IS NOT NULL);

--在一个操作中改变两个现存字段的类型。
postgres=# ALTER TABLE tpcds.warehouse_t19
    ALTER COLUMN W_GOODS_CATEGORY TYPE varchar(80),
    ALTER COLUMN W_STREET_NAME TYPE varchar(100);

--此语句与上面语句等效。
postgres=# ALTER TABLE tpcds.warehouse_t19 MODIFY (W_GOODS_CATEGORY varchar(30), W_STREET_NAME varchar(60));

--给一个已存在字段添加非空约束。
postgres=# ALTER TABLE tpcds.warehouse_t19 ALTER COLUMN W_GOODS_CATEGORY SET NOT NULL;

--移除已存在字段的非空约束。
postgres=# ALTER TABLE tpcds.warehouse_t19 ALTER COLUMN W_GOODS_CATEGORY DROP NOT NULL;

--如果列存表中还未指定局部聚簇，向在一个列存表中添加局部聚簇列。
postgres=# ALTER TABLE tpcds.warehouse_t17 ADD PARTIAL CLUSTER KEY(W_WAREHOUSE_SK);

--查看约束的名称，并删除一个列存表中的局部聚簇列。
postgres=# \d+ tpcds.warehouse_t17
                              Table "tpcds.warehouse_t17"
      Column       |         Type          | Modifiers | Storage  | Stats target | Description 
-------------------+-----------------------+-----------+----------+--------------+-------------
 w_warehouse_sk    | integer               | not null  | plain    |              | 
 w_warehouse_id    | character(16)         | not null  | extended |              | 
 w_warehouse_name  | character varying(20) |           | extended |              | 
 w_warehouse_sq_ft | integer               |           | plain    |              | 
 w_street_number   | character(10)         |           | extended |              | 
 w_street_name     | character varying(60) |           | extended |              | 
 w_street_type     | character(15)         |           | extended |              | 
 w_suite_number    | character(10)         |           | extended |              | 
 w_city            | character varying(60) |           | extended |              | 
 w_county          | character varying(30) |           | extended |              | 
 w_state           | character(2)          |           | extended |              | 
 w_zip             | character(10)         |           | extended |              | 
 w_country         | character varying(20) |           | extended |              | 
 w_gmt_offset      | numeric(5,2)          |           | main     |              | 
Partial Cluster :
    "warehouse_t17_cluster" PARTIAL CLUSTER KEY (w_warehouse_sk)
Has OIDs: no
Location Nodes: ALL DATANODES
Options: compression=no, version=0.12
postgres=# ALTER TABLE tpcds.warehouse_t17 DROP CONSTRAINT warehouse_t17_cluster;

--将表移动到另一个表空间。
postgres=# ALTER TABLE tpcds.warehouse_t19 SET TABLESPACE PG_DEFAULT; 
--创建模式joe。
postgres=# CREATE SCHEMA joe;

--将表移动到另一个模式中。
postgres=# ALTER TABLE tpcds.warehouse_t19 SET SCHEMA joe;

--重命名已存在的表。
postgres=# ALTER TABLE joe.warehouse_t19 RENAME TO warehouse_t23;

--从warehouse_t23表中删除一个字段。
postgres=# ALTER TABLE joe.warehouse_t23 DROP COLUMN W_STREET_NAME;

--删除表空间、模式joe和模式表warehouse。
postgres=# DROP TABLE tpcds.warehouse_t1;
postgres=# DROP TABLE tpcds.warehouse_t2;
postgres=# DROP TABLE tpcds.warehouse_t3;
postgres=# DROP TABLE tpcds.warehouse_t4;
postgres=# DROP TABLE tpcds.warehouse_t5;
postgres=# DROP TABLE tpcds.warehouse_t6;
postgres=# DROP TABLE tpcds.warehouse_t7;
postgres=# DROP TABLE tpcds.warehouse_t8;
postgres=# DROP TABLE tpcds.warehouse_t9;
postgres=# DROP TABLE tpcds.warehouse_t10;
postgres=# DROP TABLE tpcds.warehouse_t11;
postgres=# DROP TABLE tpcds.warehouse_t12;
postgres=# DROP TABLE tpcds.warehouse_t13;
postgres=# DROP TABLE tpcds.warehouse_t14;
postgres=# DROP TABLE tpcds.warehouse_t15;
postgres=# DROP TABLE tpcds.warehouse_t16;
postgres=# DROP TABLE tpcds.warehouse_t17;
postgres=# DROP TABLE tpcds.warehouse_t18;
postgres=# DROP TABLE tpcds.warehouse_t20;
postgres=# DROP TABLE tpcds.warehouse_t21;
postgres=# DROP TABLE tpcds.warehouse_t22;
postgres=# DROP TABLE joe.warehouse_t23;
postgres=# DROP TABLE tpcds.warehouse_t24;
postgres=# DROP TABLE tpcds.warehouse_t25;
postgres=# DROP TABLESPACE DS_TABLESPACE1;
postgres=# DROP SCHEMA IF EXISTS joe CASCADE;
```

## 相关链接<a name="zh-cn_topic_0237122117_zh-cn_topic_0059778169_scd5caca899f849f697cb50d76c49de4c"></a>

[ALTER TABLE](ALTER-TABLE.md)，[DROP TABLE](DROP-TABLE.md)，[CREATE TABLESPACE](CREATE-TABLESPACE.md)

## 优化建议<a name="zh-cn_topic_0237122117_zh-cn_topic_0059778169_section29320865113651"></a>

-   UNLOGGED
    -   UNLOGGED表和表上的索引因为数据写入时不通过WAL日志机制，写入速度远高于普通表。因此，可以用于缓冲存储复杂查询的中间结果集，增强复杂查询的性能。
    -   UNLOGGED表无主备机制，在系统故障或异常断点等情况下，会有数据丢失风险，因此，不可用来存储基础数据。

-   TEMPORARY | TEMP
    -   临时表只在当前会话可见，会话结束后会自动删除。

-   LIKE
    -   新表自动从这个表中继承所有字段名及其数据类型和非空约束，新表与源表之间在创建动作完毕之后是完全无关的。

-   LIKE INCLUDING DEFAULTS
    -   源表上的字段缺省表达式只有在指定INCLUDING DEFAULTS时，才会复制到新表中。缺省是不包含缺省表达式的，即新表中的所有字段的缺省值都是NULL。

-   LIKE INCLUDING CONSTRAINTS
    -   源表上的CHECK约束仅在指定INCLUDING CONSTRAINTS时，会复制到新表中，而其他类型的约束永远不会复制到新表中。非空约束总是复制到新表中。此规则同时适用于表约束和列约束。

-   LIKE INCLUDING INDEXES
    -   如果指定了INCLUDING INDEXES，则源表上的索引也将在新表上创建，默认不建立索引。

-   LIKE INCLUDING STORAGE
    -   如果指定了INCLUDING STORAGE，则复制列的STORAGE设置会复制到新表中，默认情况下不包含STORAGE设置。

-   LIKE INCLUDING COMMENTS
    -   如果指定了INCLUDING COMMENTS，则源表列、约束和索引的注释会复制到新表中。默认情况下，不复制源表的注释。

-   LIKE INCLUDING PARTITION
    -   如果指定了INCLUDING PARTITION，则源表的分区定义会复制到新表中，同时新表将不能再使用PARTITION BY子句。默认情况下，不拷贝源表的分区定义。

-   LIKE INCLUDING RELOPTIONS
    -   如果指定了INCLUDING RELOPTIONS，则源表的存储参数（即源表的WITH子句）会复制到新表中。默认情况下，不复制源表的存储参数。

-   LIKE INCLUDING ALL
    -   INCLUDING ALL包含了INCLUDING DEFAULTS、INCLUDING CONSTRAINTS、INCLUDING INDEXES、INCLUDING STORAGE、INCLUDING COMMENTS、INCLUDING PARTITION、INCLUDING RELOPTIONS的内容。

-   ORIENTATION ROW
    -   创建行存表，行存储适合于OLTP业务，此类型的表上交互事务比较多，一次交互会涉及表中的多个列，用行存查询效率较高。

-   ORIENTATION COLUMN
    -   创建列存表，列存储适合于数据仓库业务，此类型的表上会做大量的汇聚计算，且涉及的列操作较少。


