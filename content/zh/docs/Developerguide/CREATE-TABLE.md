# CREATE TABLE<a name="ZH-CN_TOPIC_0289900279"></a>

## 功能描述<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

在当前数据库中创建一个新的空白表，该表由命令执行者所有。

## 注意事项<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sb04dbf08cbd848649163edbff21254a1"></a>

-   列存表支持的数据类型请参考[列存表支持的数据类型](列存表支持的数据类型.md)。
-   列存表不支持数组。
-   列存表不支持生成列。
-   列存表不支持创建全局临时表。
-   创建列存表的数量建议不超过1000个。
-   如果在建表过程中数据库系统发生故障，系统恢复后可能无法自动清除之前已创建的、大小为0的磁盘文件。此种情况出现概率小，不影响数据库系统的正常运行。
-   列存表的表级约束只支持PARTIAL CLUSTER KEY、UNIQUE、PRIAMRY KEY，不支持外键等表级约束。
-   列存表的字段约束只支持NULL、NOT NULL、DEFAULT常量值、UNIQUE和PRIMARY KEY。
-   列存表支持delta表，受参数enable\_delta\_store控制是否开启，受参数deltarow\_threshold控制进入delta表的阀值。
-   使用JDBC时，支持通过PrepareStatement对DEFAUTL值进行参数化设置。
-   每张表的列数最大为1600，具体取决于列的类型，所有列的大小加起来不能超过8192 byte，text、varchar、char等长度可变的类型除外。
-   被授予CREATE ANY TABLE权限的用户，可以在public模式和用户模式下创建表。如果想要创建包含serial类型列的表，还需要授予CREATE ANY SEQUENCE创建序列的权限。

## 语法格式<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sc7a49d08f8ac43189f0e7b1c74f877eb"></a>

创建表。

```
CREATE [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name 
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
      ENCRYPTED WITH ( COLUMN_ENCRYPTION_KEY = column_encryption_key, ENCRYPTION_TYPE = encryption_type_value ) |
      PRIMARY KEY index_parameters |
      REFERENCES reftable [ ( refcolumn ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
          [ ON DELETE action ] [ ON UPDATE action ] }
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
      FOREIGN KEY ( column_name [, ... ] ) REFERENCES reftable [ (refcolumn [, ... ] ) ]
          [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] |
      PARTIAL CLUSTER KEY ( column_name [, ... ] ) }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    ```


-   其中like选项like\_option为：

    ```
    { INCLUDING | EXCLUDING } { DEFAULTS | GENERATED | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | PARTITION | RELOPTIONS | ALL }
    ```

-   其中索引参数index\_parameters为：

    ```
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ USING INDEX TABLESPACE tablespace_name ]
    ```


## 参数说明<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s99cf2ac11c79436c93385e4efd7c4428"></a>

-   **UNLOGGED**

    如果指定此关键字，则创建的表为非日志表。在非日志表中写入的数据不会被写入到预写日志中，这样就会比普通表快很多。但是非日志表在冲突、执行操作系统重启、强制重启、切断电源操作或异常关机后会被自动截断，会造成数据丢失的风险。非日志表中的内容也不会被复制到备服务器中。在非日志表中创建的索引也不会被自动记录。

    使用场景：非日志表不能保证数据的安全性，用户应该在确保数据已经做好备份的前提下使用，例如系统升级时进行数据的备份。

    故障处理：当异常关机等操作导致非日志表上的索引发生数据丢失时，用户应该对发生错误的索引进行重建。

-   **GLOBAL | LOCAL**

    创建临时表时可以在TEMP或TEMPORARY前指定GLOBAL或LOCAL关键字。如果指定GLOBAL关键字，openGauss会创建全局临时表，否则openGauss会创建本地临时表。

-   **TEMPORARY | TEMP**

    如果指定TEMP或TEMPORARY关键字，则创建的表为临时表。临时表分为全局临时表和本地临时表两种类型。创建临时表时如果指定GLOBAL关键字则为全局临时表，否则为本地临时表。

    全局临时表的元数据对所有会话可见，会话结束后元数据继续存在。会话与会话之间的用户数据、索引和统计信息相互隔离，每个会话只能看到和更改自己提交的数据。全局临时表有两种模式：一种是基于会话级别的\(ON COMMIT PRESERVE ROWS\), 当会话结束时自动清空用户数据；一种是基于事务级别的\(ON COMMIT DELETE ROWS\), 当执行commit或rollback时自动清空用户数据。建表时如果没有指定ON COMMIT选项，则缺省为会话级别。与本地临时表不同，全局临时表建表时可以指定非pg\_temp\_开头的schema。

    本地临时表只在当前会话可见，本会话结束后会自动删除。因此，在除当前会话连接的数据库节点故障时，仍然可以在当前会话上创建和使用临时表。由于临时表只在当前会话创建，对于涉及对临时表操作的DDL语句，会产生DDL失败的报错。因此，建议DDL语句中不要对临时表进行操作。TEMP和TEMPORARY等价。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >
    >-   本地临时表通过每个会话独立的以pg\_temp开头的schema来保证只对当前会话可见，因此，不建议用户在日常操作中手动删除以pg\_temp、pg\_toast\_temp开头的schema。
    >
    >-   如果建表时不指定TEMPORARY/TEMP关键字，而指定表的schema为当前会话的pg\_temp\_开头的schema，则此表会被创建为临时表。
    >
    >-   ALTER/DROP全局临时表和索引，如果其它会话正在使用它，禁止操作（ALTER INDEX index\_name REBUILD除外）。
    >
    >-   全局临时表的DDL只会影响当前会话的用户数据和索引。例如truncate、reindex、analyze只对当前会话有效。
    >
    >-   全局临时表功能可以通过设置GUC参数max\_active\_global\_temporary\_table控制是否启用。如果max\_active\_global\_temporary\_table=0，关闭全局临时表功能。
    >
    >-   临时表只对当前会话可见，因此不支持与\\parallel on并行执行一起使用。
    >
    >-   \\parallel on临时表不支持主备切换。

-   **IF NOT EXISTS**

    如果已经存在相同名称的表，不会报出错误，而会发出通知，告知通知此表已存在。

- **table\_name**

  要创建的表名。

  ![](public_sys-resources/icon-notice.gif) **须知：** 
  物化视图的一些处理逻辑会通过表名的前缀来识别是不是物化视图日志表和物化视图关联表，因此，用户不要创建表名以mlog\_或matviewmap\_为前缀的表，否则会影响此表的一些功能。

-   **column\_name**

    新表中要创建的字段名。

-   **data\_type**

    字段的数据类型。

-   **compress\_mode**

    表字段的压缩选项。该选项指定表字段优先使用的压缩算法。行存表不支持压缩。

    取值范围：DELTA、PREFIX、DICTIONARY、NUMSTR、NOCOMPRESS

-   **COLLATE collation**

    COLLATE子句指定列的排序规则（该列必须是可排列的数据类型）。如果没有指定，则使用默认的排序规则。排序规则可以使用“select \* from pg\_collation;”命令从pg\_collation系统表中查询，默认的排序规则为查询结果中以default开始的行。

-   **LIKE source\_table \[ like\_option ... \]**

    LIKE子句声明一个表，新表自动从这个表中继承所有字段名及其数据类型和非空约束。

    新表与源表之间在创建动作完毕之后是完全无关的。在源表做的任何修改都不会传播到新表中，并且也不可能在扫描源表的时候包含新表的数据。

    被复制的列和约束并不使用相同的名称进行融合。如果明确的指定了相同的名称或者在另外一个LIKE子句中，将会报错。

    -   源表上的字段缺省表达式只有在指定INCLUDING DEFAULTS时，才会复制到新表中。缺省是不包含缺省表达式的，即新表中的所有字段的缺省值都是NULL。
    -   源表上的CHECK约束仅在指定INCLUDING CONSTRAINTS时，会复制到新表中，而其他类型的约束永远不会复制到新表中。非空约束总是复制到新表中。此规则同时适用于表约束和列约束。
    -   如果指定了INCLUDING INDEXES，则源表上的索引也将在新表上创建，默认不建立索引。
    -   如果指定了INCLUDING STORAGE，则复制列的STORAGE设置会复制到新表中，默认情况下不包含STORAGE设置。
    -   如果指定了INCLUDING COMMENTS，则源表列、约束和索引的注释会复制到新表中。默认情况下，不复制源表的注释。
    -   如果指定了INCLUDING PARTITION，则源表的分区定义会复制到新表中，同时新表将不能再使用PARTITION BY子句。默认情况下，不拷贝源表的分区定义。如果源表上带有索引，可以使用INCLUDING PARTITION INCLUDING INDEXES语法实现。如果对分区表只使用INCLUDING INDEXES，目标表定义将是普通表，但是索引是分区索引，最后结果会报错，因为普通表不支持分区索引。
    -   如果指定了INCLUDING RELOPTIONS，则源表的存储参数（即源表的WITH子句）会复制到新表中。默认情况下，不复制源表的存储参数。
    -   INCLUDING ALL包含了INCLUDING DEFAULTS、INCLUDING CONSTRAINTS、INCLUDING INDEXES、INCLUDING STORAGE、INCLUDING COMMENTS、INCLUDING PARTITION和INCLUDING RELOPTIONS的内容。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >
    >-   如果源表包含serial、bigserial、smallserial、largeserial类型，或者源表字段的默认值是sequence，且sequence属于源表（通过CREATE SEQUENCE ... OWNED BY创建），这些Sequence不会关联到新表中，新表中会重新创建属于自己的sequence。这和之前版本的处理逻辑不同。如果用户希望源表和新表共享Sequence，需要首先创建一个共享的Sequence（避免使用OWNED BY），并配置为源表字段默认值，这样创建的新表会和源表共享该Sequence。
    >
    >-   不建议将其他表私有的Sequence配置为源表字段的默认值，尤其是其他表只分布在特定的NodeGroup上，这可能导致CREATE TABLE ... LIKE执行失败。另外，如果源表配置其他表私有的Sequence，当该表删除时Sequence也会连带删除，这样源表的Sequence将不可用。如果用户希望多个表共享Sequence，建议创建共享的Sequence。
    >
    >-   对于分区表EXCLUDING，需要配合INCLUDING ALL使用，如INCLUDING ALL EXCLUDING DEFAULTS，除源分区表的DEFAULTS，其它全包含。

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

    -   STORAGE\_TYPE

        指定存储引擎类型，该参数设置成功后就不再支持修改。

        取值范围：

        -   USTORE，表示表支持Inplace-Update存储引擎。
        -   ASTORE，表示表支持Append-Only存储引擎。

        默认值：

        不指定表时，默认是Append-Only存储。

    -   INIT\_TD

        创建Ustore表时，指定初始化的TD个数，该参数只在创建Ustore表时才能设置生效。

        取值范围：2\~128，默认值为4。

    -   COMPRESSION

        指定表数据的压缩级别，它决定了表数据的压缩比以及压缩时间。一般来讲，压缩级别越高，压缩比也越大，压缩时间也越长；反之亦然。实际压缩比取决于加载的表数据的分布特征。行存表默认增加COMPRESSION=NO字段。

        取值范围：

        列存表的有效值为YES/NO/LOW/MIDDLE/HIGH，默认值为LOW。

    -   COMPRESSLEVEL

        指定表数据同一压缩级别下的不同压缩水平，它决定了同一压缩级别下表数据的压缩比以及压缩时间。对同一压缩级别进行了更加详细的划分，为用户选择压缩比和压缩时间提供了更多的空间。总体来讲，此值越大，表示同一压缩级别下压缩比越大，压缩时间越长；反之亦然。

        取值范围：0\~3，默认值为0。

    -   COMPRESSTYPE

        行存表参数，设置行存表压缩算法。1代表pglz算法，2代表zstd算法，默认不压缩。（仅支持ASTORE下的普通表）

        取值范围：0\~2，默认值为0。

    -   COMPRESS\_LEVEL

        行存表参数，设置行存表压缩算法等级，仅当COMPRESSTYPE为2时生效。压缩等级越高，表的压缩效果越好，表的访问速度越慢。（仅支持ASTORE下的普通表）

        取值范围：-31\~31，默认值为0。

    -   COMPRESS\_CHUNK_SIZE

        行存表参数，设置行存表压缩chunk块大小。chunk数据块越小，预期能达到的压缩效果越好，同时数据越离散，影响表的访问速度。（仅支持ASTORE下的普通表）

        取值范围：与页面大小有关。在页面大小为8k场景，取值范围为：512、1024、2048、4096。
    
        默认值：4096

    - COMPRESS_PREALLOC_CHUNKS

      行存表参数，设置行存表压缩chunk块预分配数量。预分配数量越大，表的压缩率相对越差，离散度越小，访问性能越好。（仅支持ASTORE下的普通表）

      取值范围：0\~7，默认值为0。

      - 当COMPRESS\_CHUNK_SIZE为512和1024时，支持预分配设置最大为7。
      - 当COMPRESS\_CHUNK_SIZE为2048时，支持预分配设置最大为3。
      - 当COMPRESS\_CHUNK_SIZE为4096时，支持预分配设置最大为1。
    
  - COMPRESS_BYTE_CONVERT

      行存表参数，设置行存表压缩字节转换预处理。在一些场景下可以提升压缩效果，同时会导致一定性能劣化。

      取值范围：布尔值，默认关闭。

  - COMPRESS_DIFF_CONVERT

      行存表参数，设置行存表压缩字节差分预处理。只能与compress_byte_convert一起使用。在一些场景下可以提升压缩效果，同时会导致一定性能劣化。

      取值范围：布尔值，默认关闭。

  - MAX\_BATCHROW

      指定了在数据加载过程中一个存储单元可以容纳记录的最大数目。该参数只对列存表有效。

      取值范围：10000\~60000，默认60000。

  - PARTIAL\_CLUSTER\_ROWS

      指定了在数据加载过程中进行将局部聚簇存储的记录数目。该参数只对列存表有效。

      取值范围：大于等于MAX\_BATCHROW，建议取值为MAX\_BATCHROW的整数倍。

  - DELTAROW\_THRESHOLD

      指定列存表导入时小于多少行的数据进入delta表，只在GUC参数enable\_delta\_store开启时生效。该参数只对列存表有效。

      取值范围：0～9999，默认值为100

  - VERSION

      指定ORC存储格式的版本。

      取值范围：0.12，目前支持ORC 0.12格式，后续会随着ORC格式的发展，支持更多格式。

      默认值：0.12

  - segment

      使用段页式的方式存储。本参数仅支持行存表。不支持列存表、临时表、unlog表。不支持ustore存储引擎。

      取值范围：on/off
  
      默认值：off
  
  - dek\_cipher
  
      透明数据加密密钥的密文。当开启enable\_tde选项时会自动申请创建，用户不可单独指定。通过密钥轮转功能可以对密钥进行更新。
  
      取值范围：字符串。
  
      默认值：不开启加密时默认为空。
  
  - hasuids
  
      参数开启：更新表元组时，为元组分配表级唯一标识id。
  
      取值范围：on/off。
  
      默认值：off。


-   **ON COMMIT \{ PRESERVE ROWS | DELETE ROWS | DROP \}**

    ON COMMIT选项决定在事务中执行创建临时表操作，当事务提交时，此临时表的后续操作。有以下三个选项，当前支持PRESERVE ROWS和DELETE ROWS选项。

    -   PRESERVE ROWS（缺省值）：提交时不对临时表做任何操作，临时表及其表数据保持不变。
    -   DELETE ROWS：提交时删除临时表中数据。
    -   DROP：提交时删除此临时表。只支持本地临时表，不支持全局临时表。

-   **COMPRESS | NOCOMPRESS**

    创建新表时，需要在CREATE TABLE语句中指定关键字COMPRESS，这样，当对该表进行批量插入时就会触发压缩特性。该特性会在页范围内扫描所有元组数据，生成字典、压缩元组数据并进行存储。指定关键字NOCOMPRESS则不对表进行压缩。行存表不支持压缩。

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

-   **REFERENCES reftable \[ \( refcolum \) \] \[ MATCH matchtype \] \[ ON DELETE action \] \[ ON UPDATE action \] \(column constraint\)**

    **FOREIGN KEY \( column\_name \[, ... \] \) REFERENCES reftable \[ \( refcolumn \[, ... \] \) \] \[ MATCH matchtype \] \[ ON DELETE action \] \[ ON UPDATE action \] \(table constraint\)**

    外键约束要求新表中一列或多列构成的组应该只包含、匹配被参考表中被参考字段值。若省略refcolum，则将使用reftable的主键。被参考列应该是被参考表中的唯一字段或主键。外键约束不能被定义在临时表和永久表之间。

    参考字段与被参考字段之间存在三种类型匹配，分别是：

    -   MATCH FULL：不允许一个多字段外键的字段为NULL，除非全部外键字段都是NULL。
    -   MATCH SIMPLE（缺省）：允许任意外键字段为NULL。
    -   MATCH PARTIAL：目前暂不支持。

    另外，当被参考表中的数据发生改变时，某些操作也会在新表对应字段的数据上执行。ON DELETE子句声明当被参考表中的被参考行被删除时要执行的操作。ON UPDATE子句声明当被参考表中的被参考字段数据更新时要执行的操作。对于ON DELETE子句、ON UPDATE子句的可能动作：

    -   NO ACTION（缺省）：删除或更新时，创建一个表明违反外键约束的错误。若约束可推迟，且若仍存在任何引用行，那这个错误将会在检查约束的时候产生。
    -   RESTRICT：删除或更新时，创建一个表明违反外键约束的错误。与NO ACTION相同，只是动作不可推迟。
    -   CASCADE：删除新表中任何引用了被删除行的行，或更新新表中引用行的字段值为被参考字段的新值。
    -   SET NULL：设置引用字段为NULL。
    -   SET DEFAULT：设置引用字段为它们的缺省值。

- **DEFERRABLE | NOT DEFERRABLE**

  这两个关键字设置该约束是否可推迟。一个不可推迟的约束将在每条命令之后马上检查。可推迟约束可以推迟到事务结尾使用SET CONSTRAINTS命令检查。缺省是NOT DEFERRABLE。目前，UNIQUE约束、主键约束、外键约束可以接受这个子句。所有其他约束类型都是不可推迟的。

  ![](public_sys-resources/icon-note.gif) **说明：** 
  Ustore表不支持**DEFERRABLE以及INITIALLY  DEFERRED**关键字。

-   **PARTIAL CLUSTER KEY**

    局部聚簇存储，列存表导入数据时按照指定的列\(单列或多列\)，进行局部排序。

-   **INITIALLY IMMEDIATE | INITIALLY DEFERRED**

    如果约束是可推迟的，则这个子句声明检查约束的缺省时间。

    -   如果约束是INITIALLY IMMEDIATE（缺省），则在每条语句执行之后就立即检查它；
    -   如果约束是INITIALLY DEFERRED ，则只有在事务结尾才检查它。

    约束检查的时间可以用SET CONSTRAINTS命令修改。

-   **USING INDEX TABLESPACE tablespace\_name**

    为UNIQUE或PRIMARY KEY约束相关的索引声明一个表空间。如果没有提供这个子句，这个索引将在default\_tablespace中创建，如果default\_tablespace为空，将使用数据库的缺省表空间。

-   **ENCRYPTION\_TYPE = encryption\_type\_value**

    为ENCRYPTED WITH约束中的加密类型，encryption\_type\_value的值为\[ DETERMINISTIC | RANDOMIZED \]


## 示例<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s86758dcf05d442d2a9ebd272e76ed1b8"></a>

```
--创建简单的表。
openGauss=# CREATE TABLE tpcds.warehouse_t1
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

openGauss=# CREATE TABLE tpcds.warehouse_t2
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER                       ,
    W_STREET_NUMBER           CHAR(10)                      ,
    W_STREET_NAME             VARCHAR(60),
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
openGauss=# CREATE TABLE tpcds.warehouse_t3
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
openGauss=# CREATE TABLE tpcds.warehouse_t4
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
openGauss=# CREATE TABLE tpcds.warehouse_t5
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
openGauss=# CREATE TABLE tpcds.warehouse_t6
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
openGauss=# CREATE UNLOGGED TABLE tpcds.warehouse_t7
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
openGauss=# CREATE TEMPORARY TABLE warehouse_t24
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
openGauss=# CREATE TEMPORARY TABLE warehouse_t25
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

--创建全局临时表，并指定会话结束时删除该临时表数据。当前Ustore存储引擎不支持全局临时表。
openGauss=# CREATE GLOBAL TEMPORARY TABLE gtt1
(
    ID                        INTEGER               NOT NULL,
    NAME                      CHAR(16)              NOT NULL,
    ADDRESS                   VARCHAR(50)                   ,
    POSTCODE                  CHAR(6)
) ON COMMIT PRESERVE ROWS;

--创建表时，不希望因为表已存在而报错。
openGauss=# CREATE TABLE IF NOT EXISTS tpcds.warehouse_t8
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
openGauss=# CREATE TABLESPACE DS_TABLESPACE1 RELATIVE LOCATION 'tablespace/tablespace_1';
--创建表时，指定表空间。
openGauss=# CREATE TABLE tpcds.warehouse_t9
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
openGauss=# CREATE TABLE tpcds.warehouse_t10
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
openGauss=# CREATE TABLE tpcds.warehouse_t11
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
openGauss=# CREATE TABLE tpcds.warehouse_t12
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
openGauss=# CREATE TABLE tpcds.warehouse_t13
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
openGauss=# CREATE TABLE tpcds.warehouse_t14
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
openGauss=# CREATE TABLE tpcds.warehouse_t15
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
openGauss=# CREATE TABLE tpcds.warehouse_t16
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
openGauss=# CREATE TABLE tpcds.warehouse_t17
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


--定义一个检查列约束。
openGauss=# CREATE TABLE tpcds.warehouse_t19
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

openGauss=# CREATE TABLE tpcds.warehouse_t20
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

--创建一个有外键约束的表。
openGauss=# CREATE TABLE tpcds.city_t23
(
    W_CITY            VARCHAR(60)                PRIMARY KEY,
    W_ADDRESS       TEXT                     
);
openGauss=# CREATE TABLE tpcds.warehouse_t23
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER                       ,
    W_STREET_NUMBER           CHAR(10)                      ,
    W_STREET_NAME             VARCHAR(60)                   ,
    W_STREET_TYPE             CHAR(15)                      ,
    W_SUITE_NUMBER            CHAR(10)                      ,
    W_CITY                    VARCHAR(60)           REFERENCES tpcds.city_t23(W_CITY),
    W_COUNTY                  VARCHAR(30)                   ,
    W_STATE                   CHAR(2)                       ,
    W_ZIP                     CHAR(10)                      ,
    W_COUNTRY                 VARCHAR(20)                   ,
    W_GMT_OFFSET              DECIMAL(5,2)
);

--或是用下面的语法，效果完全一样。
openGauss=# CREATE TABLE tpcds.warehouse_t23
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
    W_GMT_OFFSET              DECIMAL(5,2)                  ,
    FOREIGN KEY(W_CITY) REFERENCES tpcds.city_t23(W_CITY)
);

--或是用下面的语法，指定约束的名称。
openGauss=# CREATE TABLE tpcds.warehouse_t23
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
    W_GMT_OFFSET              DECIMAL(5,2)                  ,
    CONSTRAINT W_FORE_KEY1 FOREIGN KEY(W_CITY) REFERENCES tpcds.city_t23(W_CITY)
);

--向tpcds.warehouse_t19表中增加一个varchar列。
```

```
openGauss=# ALTER TABLE tpcds.warehouse_t19 ADD W_GOODS_CATEGORY varchar(30);

--给tpcds.warehouse_t19表增加一个检查约束。
openGauss=# ALTER TABLE tpcds.warehouse_t19 ADD CONSTRAINT W_CONSTR_KEY4 CHECK (W_STATE IS NOT NULL);

--在一个操作中改变两个现存字段的类型。
openGauss=# ALTER TABLE tpcds.warehouse_t19
    ALTER COLUMN W_GOODS_CATEGORY TYPE varchar(80),
    ALTER COLUMN W_STREET_NAME TYPE varchar(100);

--此语句与上面语句等效。
openGauss=# ALTER TABLE tpcds.warehouse_t19 MODIFY (W_GOODS_CATEGORY varchar(30), W_STREET_NAME varchar(60));

--给一个已存在字段添加非空约束。
openGauss=# ALTER TABLE tpcds.warehouse_t19 ALTER COLUMN W_GOODS_CATEGORY SET NOT NULL;

--移除已存在字段的非空约束。
openGauss=# ALTER TABLE tpcds.warehouse_t19 ALTER COLUMN W_GOODS_CATEGORY DROP NOT NULL;

--如果列存表中还未指定局部聚簇，向在一个列存表中添加局部聚簇列。
openGauss=# ALTER TABLE tpcds.warehouse_t17 ADD PARTIAL CLUSTER KEY(W_WAREHOUSE_SK);

--查看约束的名称，并删除一个列存表中的局部聚簇列。
openGauss=# \d+ tpcds.warehouse_t17
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
openGauss=# ALTER TABLE tpcds.warehouse_t17 DROP CONSTRAINT warehouse_t17_cluster;

--将表移动到另一个表空间。
openGauss=# ALTER TABLE tpcds.warehouse_t19 SET TABLESPACE PG_DEFAULT; 
--创建模式joe。
openGauss=# CREATE SCHEMA joe;

--将表移动到另一个模式中。
openGauss=# ALTER TABLE tpcds.warehouse_t19 SET SCHEMA joe;

--重命名已存在的表。
openGauss=# ALTER TABLE joe.warehouse_t19 RENAME TO warehouse_t23;

--从warehouse_t23表中删除一个字段。
openGauss=# ALTER TABLE joe.warehouse_t23 DROP COLUMN W_STREET_NAME;

--删除表空间、模式joe和模式表warehouse。
openGauss=# DROP TABLE tpcds.warehouse_t1;
openGauss=# DROP TABLE tpcds.warehouse_t2;
openGauss=# DROP TABLE tpcds.warehouse_t3;
openGauss=# DROP TABLE tpcds.warehouse_t4;
openGauss=# DROP TABLE tpcds.warehouse_t5;
openGauss=# DROP TABLE tpcds.warehouse_t6;
openGauss=# DROP TABLE tpcds.warehouse_t7;
openGauss=# DROP TABLE tpcds.warehouse_t8;
openGauss=# DROP TABLE tpcds.warehouse_t9;
openGauss=# DROP TABLE tpcds.warehouse_t10;
openGauss=# DROP TABLE tpcds.warehouse_t11;
openGauss=# DROP TABLE tpcds.warehouse_t12;
openGauss=# DROP TABLE tpcds.warehouse_t13;
openGauss=# DROP TABLE tpcds.warehouse_t14;
openGauss=# DROP TABLE tpcds.warehouse_t15;
openGauss=# DROP TABLE tpcds.warehouse_t16;
openGauss=# DROP TABLE tpcds.warehouse_t17;
openGauss=# DROP TABLE tpcds.warehouse_t18;
openGauss=# DROP TABLE tpcds.warehouse_t20;
openGauss=# DROP TABLE tpcds.warehouse_t21;
openGauss=# DROP TABLE tpcds.warehouse_t22;
openGauss=# DROP TABLE joe.warehouse_t23;
openGauss=# DROP TABLE tpcds.warehouse_t24;
openGauss=# DROP TABLE tpcds.warehouse_t25;
openGauss=# DROP TABLESPACE DS_TABLESPACE1;
openGauss=# DROP SCHEMA IF EXISTS joe CASCADE;
```

## 相关链接<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_scd5caca899f849f697cb50d76c49de4c"></a>

[ALTER TABLE](ALTER-TABLE.md)，[DROP TABLE](DROP-TABLE.md)，[CREATE TABLESPACE](CREATE-TABLESPACE.md)

## 优化建议<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_section29320865113651"></a>

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

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >列表/哈希分区表暂不支持LIKE INCLUDING PARTITION。

-   LIKE INCLUDING RELOPTIONS
    
    -   如果指定了INCLUDING RELOPTIONS，则源表的存储参数（即源表的WITH子句）会复制到新表中。默认情况下，不复制源表的存储参数。
    
-   LIKE INCLUDING ALL
    
    -   INCLUDING ALL包含了INCLUDING DEFAULTS、INCLUDING CONSTRAINTS、INCLUDING INDEXES、INCLUDING STORAGE、INCLUDING COMMENTS、INCLUDING PARTITION、INCLUDING RELOPTIONS的内容。
    
-   ORIENTATION ROW
    
    -   创建行存表，行存储适合于OLTP业务，此类型的表上交互事务比较多，一次交互会涉及表中的多个列，用行存查询效率较高。
    
-   ORIENTATION COLUMN
    
    -   创建列存表，列存储适合于数据仓库业务，此类型的表上会做大量的汇聚计算，且涉及的列操作较少。


