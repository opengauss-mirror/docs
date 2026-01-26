# ALTER TABLE

## 主要用途

ALTER TABLE 操作用于对数据库表的定义进行结构变更，包含对字段和约束条件的调整，具体功能如下：

- 数据列的增加、删除、属性修改以及重命名
- 约束条件的添加与移除
- 对现有约束进行启用或禁用
- 更改数据表的名称
- 将已有分区拆分为更小的分区单元
- 在两个表或分区之间进行数据交换

## 使用限制与说明

- 执行此操作的用户必须具有 ALTER TABLE 或 ALTER ANY TABLE 系统权限。非特权用户不能修改 SYS 账户所属的对象。
- 如果命令中指定的表名称、字段名称或约束名称存在冲突或无效，或者表内数据与要启用的非验证约束状态不符，系统会给出明确的错误信息。
- 要修改表中某列的属性，该列在所有现有记录中的值必须均为 NULL。如果列包含非空值且不是分区键，则仅允许以下变更：BINARY、INT、CHAR、VARCHAR 类型可增大长度或尺寸；高精度数值类型可扩展其范围（修改后的小数位数和整数位数均不得小于原值）。其他数据类型及操作均不允许。
- 在添加新列或修改现有列时，不得同时将其定义为唯一索引、主键索引或以内联方式声明的外键约束。
- ALTER TABLE 命令不适用于外部表。
- 在数据库重新启动或事务回滚过程中，无法执行此操作。

## 语法格式

```
ALTER TABLE [ schema_name. ]table_name
{ alter_table_properties
| column_clauses
| partition_clauses
| set_interval_clause
| logic_replication_clauses
}

```

- _alter_table_properties_ 语法组件：

    ```
    { physical_attributes_clause
    | RENAME TO new_table_name
    | AUTO_INCREMENT [ = ] value
    }
    ```

    - _physical_attributes_clause_ 语法组件：

        ```
        { PCTFREE integer
        | INITRANS integer
        | APPENDONLY { ON | OFF }
        | storage_alter_clause
        }
        ```

        - _storage_alter_clause语法：_

            ```
            STORAGE ( MAXSIZE { UNLIMITED | integer [K | M | G | T] } )
            ```

- _column_clauses_ 语法组件：

    ```
    { add_column_clause
    | modify_column_clause
    | drop_column_clause
    | rename_column_clause
    }
    ```

    - _add_column_clause_ 语法组件：

        ```
        -- 添加单一数据列。
        ADD [ COLUMN ] column_name datatype_name [ DEFAULT expr [ON UPDATE expr ] ]
        [ COMMENT 'string' ] [ COLLATE collation_name ] [AUTO_INCREMENT] [ inline_constraint ]
        -- 添加多个数据列。
        ADD ( [ COLUMN ] { column_name datatype_name [ DEFAULT expr [ON UPDATE expr ] ]
        [ COMMENT 'string' ] [ COLLATE collation_name ] [AUTO_INCREMENT] [ inline_constraint ] }
        [ , ... ] )
        ```

        - _inline_constraint_ 语法组件：

            ```
            [ CONSTRAINT constraint_name ]{ [ NOT ] NULL
            | CHECK( expr )
            | PRIMARY KEY
            | UNIQUE
            }[ ... ]
            ```

    - _modify_column_clause_ 语法组件：

        ```
        -- 修改列定义。
        MODIFY ( { column_name [ new_datatype_name ] [ DEFAULT expr [ ON UPDATE expr ] ]
        [ COMMENT string ]
        [ COLLATE collation_name ]
        [ inline_constraint ] } [ , ... ]
        )
        -- 回收LOB类型字段的空间占用。
        MODIFY LOB(column_name) (SHRINK SPACE)
        ```

    - _drop_column_clause_ 语法组件：

        ```
        DROP [ COLUMN ] column_name
        ```

    - _rename_column_clause_ 语法组件：

        ```
        RENAME COLUMN old_name TO new_name
        ```
    
- _partition_clauses_ 语法组件：

    ```
    { add_partition_clause
    | drop_partition_clause
    | truncate_partition_clause
    | coalesce_partition_clause
    | split_partition_clause
    | modify_partition_claus
    }
    ```

    - _add_partition_clause_ 语法组件：
        
        ```
        ADD PARTITION partition_name
        { VALUES LESS THAN ( { partition_value | MAXVALUE } [ , ... ] )
        | VALUES ( partition_value [ , ... ] | DEFAULT )
        }
        [ TABLESPACE tablespace_name ]
        [ PCTFREE integer ][ storage_clause ]
        { FORMAT CSF | [ COMPRESS ]
        [ ( { SUBPARTITION subpartition_name (
        { VALUES LESS THAN ( { subpartition_value | MAXVALUE } [, ... ] )
        | VALUES ( { subpartition_value [, ... ] | DEFAULT } [, ... ] )
        }
        [ TABLESPACE tablespace_name ]
        ) } [, ... ] ) ]
        }

        MODIFY PARTITION partition_name ADD SUBPARTITION
        { VALUES LESS THAN ( { subpartition_value | MAXVALUE } [, ... ] )
        | VALUES ( subpartition_values [, ... ] | DEFAULT )
        }
        [ TABLESPACE tablespace_name ]
        ```

        - _storage_clause_ 语法组件：

            ``` 
            STORAGE ( { INITIAL integer [K | M | G | T]
            |MAXSIZE { UNLIMITED | integer [K | M | G | T] }
            } [ ...] )
            ```

    - _drop_partition_clause_ 语法组件：

        ```
        DROP { PARTITION partition_name | SUBPARTITION subpartition_name }
        ```

    - truncate_partition_clause 语法组件：

        ```
        TRUNCATE { PARTITION partition_name | SUBPARTITION subpartition_name }
        [ DROP STORAGE | REUSE STORAGE | PURGE ]
        ```

    - coalesce_partition_clause 语法组件：

        ```
        COALESCE PARTITION
        MODIFY PARTITION partition_name COALESCE SUBPARTITION
        ```

- split_partition_clause 语法组件：

    ```
    SPLIT PARTITION partition_name 
    AT (range_value) 
    INTO 
    (
        PARTITION part_name1 [ TABLESPACE space_name ],
        PARTITION part_name2 [ TABLESPACE space_name ]
    )
    [ UPDATE GLOBAL INDEXES ]

    SPLIT SUBPARTITION subpartition_name 
    AT (range_value) 
    INTO 
    (
        SUBPARTITION subpart_name1 [ TABLESPACE space_name ],
        SUBPARTITION subpart_name2 [ TABLESPACE space_name ]
    )
    [ UPDATE GLOBAL INDEXES ]
    ```

- _modify_partition_clause_ 语法组件：

    ```
    MODIFY PARTITION partition_name { INITRANS integer | storage_alter_clause }
    ```

  - _storage_alter_clause_ 语法组件：

      ```
      STORAGE (MAXSIZE { UNLIMITED | integer [K | M | G | T] } )
      
- _set_interval_clause_ 语法组件：

    ```
    SET INTERVAL([interval_value])
    ```

- _logic_replication_clauses_ 语法组件：

    ```
    [([ partition_name | subpartition_name ][ , ... ])] ADD LOGICAL LOG(UNIQUE index_name)|
    [([ partition_name | subpartition_name ][ , ... ])] ADD LOGICAL LOG(PRIMARY KEY) | DROP LOGICAL LOG
    ```

## 参数说明

- **[_schema_name_.]**

    模式名称。当未显式指定时，系统默认采用当前登录用户的名称作为模式名。

- **_table_name_**

    需要修改的目标数据表名称，该表必须已经存在于数据库中。

- **_alter_table_properties_**

    用于调整数据表的物理存储特性。例如，LOB_storage_clause 可指定大型对象（LOB）字段存储在独立的段中，并可配置为行内或行外存储。目前存储引擎仅支持行外存储模式。

    - **_physical_attributes_clause_**
    
        - **INITRANS _integer_**
        
            调整数据表中每个初始数据页面上预分配的事务槽数量。该参数的取值区间为 [1, 255]。

            注意：
            - 此修改仅对后续新分配的数据页面生效，已分配的现有页面不受影响。
            - 对于分区表，该操作会同时更新表分区及所有二级分区的 INITRANS 属性。

        - **_storage_alter_clause_**

            设置数据表可使用的最大存储空间限额。

            - **UNLIMITED**

                表示不对此表的存储空间设置上限。
            
            - **_integer_ [K | M | G | T]**

                明确设定表存储空间的最大值，允许的范围是 [1MB, 1TB]。

    - **APPENDONLY { ON | OFF }**

        此选项控制并发插入行为。当设置为 ON 时，各插入线程将独立扩展存储空间，可提升高并发下的插入性能。默认值为 OFF。启用此功能需谨慎，若使用不当可能导致存储空间利用率下降。

        - **ON**

            启用独立空间扩展模式。
        
            重要提示：
            - 对于分区表，启用 APPENDONLY ON 后，在并行插入场景下需特别注意。用户需预先规划数据，确保每个并行线程插入的数据不会跨越多个分区，即实现“一个线程对应一个分区”。
            - 不建议对 HASH 分区表启用 APPENDONLY ON 选项。

        - **OFF**
            
            关闭独立空间扩展，采用常规并发插入模式。

    - **PCTFREE _integer_**

        定义数据块中保留的自由空间百分比。当数据块中的可用空间低于此百分比时，该块仅允许执行更新操作，禁止插入新数据。取值范围是 [0, 80]，默认值为 8。

    - **RENAME TO _new_table_name_**

        修改数据表的名称。
    
    - **AUTO_INCREMENT [ = ] value**

        修改表上自增列的起始序列值。若未指定，则默认从 1 开始。
    
- **_column_clauses_**

    用于变更表结构，包括增加、删除及修改数据列。

    - **_add_column_clause_**
        
        向表中添加新的数据列。
    
    - **DEFAULT —— [ON UPDATE _expr_]**

        列的默认值支持使用表达式。在创建 DDL 时，若 DEFAULT 是常量表达式，系统会进行列数据类型的兼容性检查。
    
        - `[ON UPDATE expr]`：此为语法兼容项。当更新行数据且未显式指定该列值时，将使用此更新默认表达式填充该列。
        - `INSERT` 和 `UPDATE` 操作中，`DEFAULT` 后面的表达式文本最大长度限制为 1024 个英文字符。若超过此限制，将报错：“GS-00611, default value string is too long, exceed 1024.”。
    
    - **COMMENT _'string'_**

        为列添加注释信息。可通过查询 `MY_COL_COMMENTS` 系统视图来查看列注释。
    
    - **COLLATE _collation_name_**

        定义该列数据的排序（比较）规则。当比较此列中的数据时，将依据此处定义的排序规则判定大小或相等关系。

        _collation_name_ 为排序规则名称，可选值如下：
        - `UTF8_BIN`：适用于 UTF8 字符集。将字符视为二进制串，从高位到低位逐位比较。区分大小写。
        - `UTF8_GENERAL_CI`：适用于 UTF8 字符集，不区分大小写。
        - `UTF8_UNICODE_CI`：适用于 UTF8 字符集，不区分大小写。
        - `GBK_BIN`：适用于 GBK 字符集，区分大小写。
        - `GBK_CHINESE_CI`：适用于 GBK 字符集，不区分大小写。

    - **_inline_constraint_**
        
        内联列约束，作为列定义的一部分直接声明。目前支持 `[NOT] NULL`、`UNIQUE`、`PRIMARY KEY`、唯一索引、外键及 `CHECK` 约束。

    - **_modify_column_clause_**

        修改一个或多个指定列的属性，包括：更改数据类型、在符合现有约束的前提下添加列约束、以及收缩 LOB 字段占用的空间。函数索引依赖的列不支持修改属性。
        <br>
        修改列的数据类型时，仅在表为空或该列所有值均为 `NULL` 时，才允许进行不兼容的数据类型变更。若要进行兼容的数据类型变更，则表中必须已有数据，且待修改列的值不全为 `NULL`。当前支持的兼容数据类型变更包括：
        - `VARCHAR` 与 `CHAR` 类型相互转换（要求转换后的长度不小于转换前的长度）。
        - `VARCHAR`、`CHAR`、`BINARY`、`INT` 类型增大其长度限制。
        - 高精度数值类型（如 `NUMBER`）扩大其数值范围（要求修改后的小数位数 `scale` 和整数位数 `precision - scale` 均不小于修改前的值）。

            - **_new_datatype_name_**
            
                修改后列的目标数据类型。
        
    - **_drop_column_clause_**
    
        从表中删除指定的列。
    
        - **DROP [ COLUMN ] column_name**

            删除列字段。`column_name` 为要删除的列的名称。
    
    - **_rename_column_clause_**

        重命名表中现有的列。

        - **RENAME COLUMN _old_name_ TO _new_name_**

            重命名列。
            
            - **_old_name_**

                待重命名的原列名称。
            
            - **_new_name_**

                重命名后的新列名称。

- **_partition_clauses_**
    
    分区相关操作子句。

    - **_add_partition_clause_**
        
        为分区表添加新的分区。

        - **VALUES LESS THAN**
        
            用于范围分区，定义新分区的上限值（不包含）。
        
        - **_partition_value_**

            分区的边界值。
        
        - **MAXVALUE**

            表示一个分区允许的最大可能值，通常用于最后一个分区。

        - **VALUES**

            用于列表分区，定义新分区包含的特定值集合。

        - **DEFAULT**
        
            用于列表分区，创建一个容纳所有未在其他分区中指定值的数据的默认分区。
        
        - **INITIAL _integer_ [K | M | G | T]**

            指定新分区的初始存储空间大小。默认情况下，一个新分区会分配一个区段（EXTENT）。可通过此参数自定义初始大小。取值范围是 [64KB, 1TB]。

        - **MAXSIZE { UNLIMITED | _integer_ [K | M | G | T] }**

            指定该分区可使用的最大存储空间限额。
            
            - **UNLIMITED**
                
                表示不限制该分区的存储空间上限。
            
            - **integer [K | M | G | T]**

                明确设定该分区存储空间的最大值，取值范围是 [1MB, 1TB]。
        
        - **FORMAT CSF**

            对于带CSF属性的HASH分区，由于HASH分区添加时会导致数据重分布，所以带CSF属性的HASH分区添加时可能会报错，报错与否取决于是否满足CSF属性约束。
        
        - **COMPRESS**
            添加一个压缩分区。需确保此压缩分区所处的表空间内具有压缩属性文件，否则插入数据时会报错。

    - drop_parition_clause

        - DROP PARTITION partition_name

            删除一个分区，partition_name 是分区名称。

        - DROP SUBPARTITION subparition_name

            删除二级分区子分区，subpartiion_name为子分区的名字。

    - split_partition_clause

        分裂分区，将指定的(子)分区分裂为两个(子)分区，原始分区里的数据将会重新分布到新的分区里。目前只有RANGE分区支持split操作。

        - (sub)partition_name

            将要分裂的（子）分区名称。
        - (sub)part_name1 (sub)part_name2

            分裂后新的（子）分区名称，注意这两个（子）分区名称不能重复。一级分区进行分裂后，只有最后一个新分区可以使用原分区名称。
        - range_value

            分裂的边界值。
        - UPADATE GLOBAL INDEXES
            - 如果指定update global indexes，且分区表有全局索引的时候，则数据重分布之后会自动重建全局索引。
            - 如果不指定，则全局索引处于invalid状态。

    - exchange_partition_clause
        交换分区

        - WITH TABLE 
        
            设置需要交换的普通表的表名。

        - INCLUDING | EXCLUDING INDEXES 
            - INCLUDING INDEXES
            
                要交换索引 。
            - EXLUDINGINDEXES
    
                不需要交换索引。
        - WITH | WITHOUT VALIDATION
            - WITH VALIDATION

                需要校验数据。

            - WITHOUT VALIDATION

                不需要交换数据。

        - partition_clause
            需要交换的分区的信息

            - partition_name

                需要交换的分区名称

            - FOR（part_key value）

                当分区名不易获取的情况下，可以通过设置该分区键值用于指示需要交换的分区。

        ```
        @说明：分区交换的使用约束

        1.不支持RCR的表和索引进行交换。

        2.不支持涉及外键约束的子句，例如cascade。若交换的两张表的任意表上有外键关系，则交换分区会报错。

        3.交换的分区需要判断是否具有压缩、nologging Insert等属性，如果属性不相同则不允许交换。

        4.交换的分区存在自增列的时候不允许交换。

        6.交换的分区的表定义、索引定义、列定义完全相同时，才允许交换。
        ```
    
    - modify_partition_clause

        修改分区的属性

        - partition_name

            需要修改的分区名称。
        
        - INITRANS interger 

            对分区的初始数据页面上事务槽的个数进行修改，取值范围是[1,255]。

            - 修改指定分区的INITRANS属性，并且会同步修改该分区的所有子分区的INITRANS。

            - 对于新分配的页面，修改后的新值是有效的，对已经分配的老页面是无效的。

            ```
            @说明：INITRANS使用
            1.高并发oltp系统，当出现频繁的update/insert操作导致事务槽争用时，可以将INITRANS设为4-8(INITRANS=10时)，减少动态扩展开销。
            2.索引块的默认INITRANS=2可能无法满足高并发写入需求，可以将其设置为3。
            ```
    
        - storage_alter_clause

            表的存储空间的最大值。
            
            - UNLINITED

                说明不限制表存储空间的最大值。

            - interger[K|M|G|T]

                设置表的存储空间最大值，取值范围[1M,1T]。

    - coalesce_partition_clause

        - COALESCE PARTITION

            先将最后一个分区的数据插入进前面的某个分区中之后，再将最后一个分区进行删除。

            - 仅限HASH分区的情况才能执行COALESCE_PARTITION语句，并且无需指定分区名称。

            - 如果只剩一个分区，不能执行COALESCE_PARTITION语句，否则会报错。

    - [PARITION | SUBPARTITION] NOLOGGING
        - NOLOGGING 
        启用或禁用分区上的NOLOGGING INSERT属性。
        - PARTITION NOLOGGING
        启用或禁用分区上的NOLOGGING INSERT属性。
        - SUBPARTITION NOLOGGING
        启用或禁用子分区上的NOLOGGING INSERT属性。
        
        表级与分区级的 NOLOGGING INSERT 属性相互独立、互不影响：某个分区是否启用 NOLOGGING INSERT 属性，与表上的该属性配置无关，仅由分区自身的 NOLOGGING INSERT 属性设置决定。而父子分区间的 NOLOGGING INSERT 属性存在关联规则：若父分区开启了 NOLOGGING INSERT 属性，其下所有子分区会同步启用该属性；反之，即使启用子分区的 NOLOGGING INSERT 属性，也不会对父分区的该属性状态产生任何影响。
  
        该特性使用时，需要注意以下约束：
        - NOLOGGING INSERT 该操作的目的是提升大量数据的入库性能，在表或分区上执行Nologging insert操作时，需避免与其他正常业务并发执行。这是因为Nologging insert不会记录 undo日志，若出现并发读取undo的情况，可能会导致正常业务报错。

        - NOLOGGING INSERT 数据入库操作全部完成后，建议及时提交事务，同时手动触发数据刷盘操作；待上述操作执行完毕后，再启动其他相关业务。这样做可有效保障数据安全性，防止因突发掉电情况导致数据丢失，进而避免需重新执行数据入库的重复操作。

        - NOLOGGING INSERT不会记录 undo 数据，因此完成数据导入后，强烈建议先及时提交事务，再开展其他业务操作 —— 这能防止其他业务因无法访问历史数据而出现异常。同时需注意，由于未生成 undo 日志，若同一事务中执行过 NOLOGGING INSERT，后续即便执行 rollback 操作（操作本身可正常执行），数据库内部也不会产生任何数据修改效果。故而，执行过 NOLOGGING INSERT 的事务，无法通过 rollback 操作回退到数据的历史版本。由于没有redo/undo，所以一旦发生任何异常，数据库不能继续保证数据一致性，因此需要删除表数据，重新执行导入操作。

        - Session级别的 NOLOGGING INSERT仅供内部工具使用，客户业务禁止采用该语法。对于客户业务场景，应使用表分区级的 NOLOGGING INSERT，以此替代Session级的NOLOGGING INSERT进行相关操作。

        - 开启逻辑复制或者在主备环境下不允许执行NOLOGGING INSERT。同时若数据库中有表或者分区对象存在NOLOGGING INSERT，则后续不允许动态添加备机。

        - 临时表不支持NOLOGGING INSERT属性的设置，临时表本身就带有不记录redo的属性，所以临时表不支持再设置nologging属性。

        - 若表或分区中已存在原有数据，则不允许启用 NOLOGGING INSERT 操作。关于版本兼容性需注意：支持表分区级 NOLOGGING INSERT 特性的数据库版本，不允许降级至不支持该特性的版本，但可正常升级；若两个数据库版本均支持表分区级 NOLOGGING INSERT 特性，则可不受限制地执行升级或降级操作（暂不考虑其他特性的兼容性影响）。此外，在启动数据库升级或降级流程前，用户需手动核查系统中是否存在 NOLOGGING 对象；若这些对象已无需保留 NOLOGGING 属性，建议先关闭该属性，再开展升级或降级操作。

        - 若在执行备份恢复操作前，未关闭对象的NOLOGGING INSERT属性，会导致该NOLOGGING属性扩散至恢复后的新环境中。用户需提前确认是否需要保留该属性的扩散效果：若无需将NOLOGGING属性同步到新环境，则应在备份操作执行前，先关闭对应对象的NOLOGGING属性。

- logic_replication_caluses
打开表逻辑复制开关或者关闭逻辑复制的开关，支持表级和表分区级逻辑复制开关的打开或关闭。
    - (sub)partition_name
      - 在表名后括号内填写表（子）分区名称，即可完成表分区级逻辑复制开关的设置。该操作支持针对未开启的表分区开关进行多次补充配置，但不支持直接在表级与表分区级开关之间切换。
      - SYS用户不会加载数据字典，基于这一特性，该用户不支持通过多次补充操作开启表分区逻辑复制开关。
    - ADD LOGICAL LOG(PRIMARY KEY)
      根据主键打开表逻辑复制开关。
    - ADD LOGICAL LOG(UNIQUE index_name)
      根据唯一索引打开逻辑复制开关。
    - DROP LOGICAL LOG
      关闭表级和分区级逻辑复制开关。

- rename_cloumn_clause
  修改表名。只能修改自己schama下的表名，不能修改系统表空间下的表名。

- set_interval_caluse
设置间隔分区，仅对分区表有效。
    - SET INTERVAL():将间隔分区表修改为范围分区表。
    - SET INTERVAL(interval_value):修改间隔分区表的间隔值，interval_value表示指定具体的间隔值数值。

示例：

- 添加某列

```
--删除表training
DROP TABLE IF EXISTS test;
--创建表test
CREATE TABLE test(student_id INT NOT NULL, course_name VARCHAR(30), course_start_date DATETIME, score INT);
- 修改列的数据类型
```

ALTER TABLE test MODIFY course_name VARCHAR(20);

```
- 添加主键约束
```

alter table t_or2union_1 add constraint pk_a primary key (a);

```

--添加列full_score
ALTER TABLE test ADD full_score INT;
```

- 删除列

```
ALTER TABLE test DROP score;
```

- 重命名表

```
ALTER TABLE test RENAME TO test2025;
```

- 创建分区表

```
--删除表test_partition
DROP TABLE IF EXISTS test_partition;
--创建分区表test_partition
CREATE TABLE test_partition(
  student_id INT NOT NULL,
  course_name CHAR(20),
  exam_date DATETIME,
  socre INT)
PARTITION BY RANGE(student_id)
(
PARTITION test_partition1 VALUES LESS THAN(100),
PARTITION test_partition2 VALUES LESS THAN(200),
PARTITION test_partition3 VALUES LESS THAN(300),
PARTITION test_partition4 VALUES LESS THAN(400)
);
```

- 添加分区test_partition5和test_partition6

```
ALTER TABLE test_partition ADD PARTITION test_partition5 VALUES LESS THAN(450);
ALTER TABLE test_partition ADD PARTITION test_partition6 VALUES LESS THAN(MAXVALUE);
```

- 删除分区test_partition3和test_partition4

```
--删除分区test_partition3
ALTER TABLE test_partition DROP PARTITION test_partition3;

--清空分区test_partition4
ALTER TABLE test_partition TRUNCATE PARTITION test_partition4;
```

- 分裂分区

```
ALTER TABLE test_partition SPLIT PARTITION test_partition5 AT(430) INTO (PARITIION p1, PARTITION p2);
```

- 修改表的分区的MAXSIZE值

```
--删除表
DROP TABLE IF EXISTS test_partition;
--创建表
CREATE TABLE test_partition(o_id INT, o_char VARCHAR2(900)) STORAGE (MAXSIZE 5M INITIAL 1M)
PARTITION BY RANGE(o_id)(
PARTITION p1 VALUES LESS THAN(20) STORAGE (MAXSIZE 3M INITIAL 1M),
PARTITION p2 VALUES LESS THAN(50)
);
--修改表的存储空间的MAXSIZE值
ALTER TABLE test_partition STORAGE (MAXSIZE 10M);
--添加分区，初始大小是5M最小值是2M
ALTER TABLE test_partition ADD PARTITION p3 VALUES LESS THAN(80) STORAGE (MAXSIZE 5M INITIAL 2M);
--修改分区p1的最大值为2M
ALTER TABLE test_partition MODIFY PARTITION p1 STORAGE (MAXSIZE 2M);
```

- 修改表及分区的INITRANS值

```
--删除表
DROP TABLE IF EXISTS test_partition;
--创建表
CREATE TABLE test_partition(o_id INT, o_char VARCHAR2(1000)) INITRANS 10
PARTITION BY RANGE(o_id)(
PARTITION p1 VALUES LESS THAN(2) INITRANS 5,
PARTITION p2 VALUES LESS THAN(3)
);

--修改表的INITRANS值
ALTER TABLE test_partition INITRANS 20;
--修改表的分区的INITRANS值
ALTER TABLE test_partition MODIFY PARTITION p1 INITRANS 10;
```

- 打开或关闭表级的逻辑复制开关

```
--删除表
DROP TABLE IF EXISTS test_partition;
--创建表
CREATE TABLE test_partition(
  student_id INT PRIMARY KEY,
  course_name VARCHAR(50))
PARTITION BY RANGE(student_id)(
PARTITION p1 VALUES LESS THAN(10),
PARTITION p2 VALUES LESS THAN(50),
PARTITION p3 VALUES LESS THAN(100)
);
-- 打开表级的逻辑复制开关
ALTER TABLE test_partition ADD LOGICAL LOG(PRIMARY KEY);
-- 关闭表级的逻辑复制开关
ALTER TABLE test_partition DROP LOGICAL LOG;
```

- 打开或关闭表分区级逻辑复制开关

```
--删除表
DROP TABLE IF EXISTS test_partition;
--创建表
CREATE TABLE test_partition(
  student_id INT PRIMARY KEY,
  course_name VARCHAR(50))
PARTITION BY RANGE(student_id)(
PARTITION p1 VALUES LESS THAN(10),
PARTITION p2 VALUES LESS THAN(50),
PARTITION p3 VALUES LESS THAN(100)
);
-- 打开表分区级的逻辑复制开关
ALTER TABLE test_partition(p1,p2) ADD LOGICAL LOG(PRIMARY KEY);
-- 删除表分区的同时会删除表分区级逻辑复制开关
ALTER TABLE test_partition DROP PARTITION p1;
-- 关闭表级的逻辑复制开关
ALTER TABLE test_partition DROP LOGICAL LOG;
```
