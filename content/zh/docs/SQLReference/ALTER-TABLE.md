# ALTER TABLE

## 功能描述<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

修改表，包括修改表的定义、重命名表、重命名表中指定的列、重命名表的约束、设置表的所属模式、添加/更新多个列、打开/关闭行访问控制开关。

## 注意事项<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

-   表的所有者被授予了表ALTER权限的用户或被授予ALTER ANY TABLE的用户有权限执行ALTER TABLE命令，系统管理员默认拥有此权限。但要修改表的所有者或者修改表的模式，当前用户必须是该表的所有者或者系统管理员，且该用户是新所有者角色的成员。
-   不能修改分区表的tablespace，但可以修改分区的tablespace。
-   不支持修改存储参数ORIENTATION。
-   SET SCHEMA操作不支持修改为系统内部模式，当前仅支持用户模式之间的修改。
-   列存表只支持PARTIAL CLUSTER KEY、UNIQUE、PRIMARY KEY表级约束，不支持外键等表级约束。
-   列存表只支持添加字段ADD COLUMN、修改字段的数据类型ALTER TYPE、设置单个字段的收集目标SET STATISTICS、支持更改表名称、支持更改表空间、支持删除字段DROP COLUMN。对于添加的字段和修改的字段类型要求是列存支持的[数据类型](数据类型.md)。ALTER TYPE的USING选项只支持常量表达式和涉及本字段的表达式，暂不支持涉及其他字段的表达式。
-   列存表支持的字段约束包括NULL、NOT NULL、DEFAULT常量值、UNIQUE和PRIMARY KEY；对字段约束的修改当前只支持对DEFAULT值的修改（SET DEFAULT）和删除（DROP DEFAULT），暂不支持对非空约束NULL/NOT NULL的修改。
-   不支持增加自增列，或者增加DEFAULT值中包含nextval\(\)表达式的列。
-   不支持对外表、临时表开启行访问控制开关。
-   通过约束名删除PRIMARY KEY约束时，不会删除NOT NULL约束，如果有需要，请手动删除NOT NULL约束。
-   使用JDBC时，支持通过PrepareStatement对DEFAULT值进行参数化设置。
-   重命名时，不能与当前命名空间的synonym产生命名冲突。
-   设置命名空间时，不能与当前命名空间的synonym产生命名冲突。
-   仅支持在B兼容性数据库下指定COMMENT和可见性VISIBLE\INVISIBLE。
-   使用FIRST | AFTER column\_name新增列或修改列，或修改字段的字符集，会带来全表更新开销，影响在线业务。

## 语法格式<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s58bdce220c9f4292ba9af919b04ad25c"></a>

- 修改表的定义。

  ```
  ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name ) }
      action [, ... ];
  ```

  其中具体表操作action可以是以下子句之一：

  ```
  column_clause
      | ADD table_constraint [ NOT VALID ]
      | ADD table_constraint_using_index
      | VALIDATE CONSTRAINT constraint_name
      | DROP CONSTRAINT [ IF EXISTS ]  constraint_name [ RESTRICT | CASCADE ]
      | CLUSTER ON index_name
      | SET WITHOUT CLUSTER
      | SET ( {storage_parameter = value} [, ... ] )
      | RESET ( storage_parameter [, ... ] )
      | OWNER TO new_owner
      | SET TABLESPACE new_tablespace
      | SET {COMPRESS|NOCOMPRESS}
      | TO { GROUP groupname | NODE ( nodename [, ... ] ) }
      | ADD NODE ( nodename [, ... ] )
      | DELETE NODE ( nodename [, ... ] )
      | DISABLE TRIGGER [ trigger_name | ALL | USER ]
      | ENABLE TRIGGER [ trigger_name | ALL | USER ]
      | ENABLE REPLICA TRIGGER trigger_name
      | ENABLE ALWAYS TRIGGER trigger_name
      | DISABLE/ENABLE [ REPLICA | ALWAYS ] RULE
      | DISABLE ROW LEVEL SECURITY
      | ENABLE ROW LEVEL SECURITY
      | FORCE ROW LEVEL SECURITY
      | NO FORCE ROW LEVEL SECURITY
      | ENCRYPTION KEY ROTATION
      | INHERIT parents
      | NO INHERIT parents
      | OF type_name
      | NOT OF
      | REPLICA IDENTITY { DEFAULT | USING INDEX index_name | FULL | NOTHING }
      | AUTO_INCREMENT [ = ] value
      | COMMENT {=| } 'text'
      | ALTER INDEX index_name [ VISBLE | INVISIBLE ]
      | [ [ DEFAULT ] CHARACTER SET | CHARSET [ = ] default_charset ] [ [ DEFAULT ] COLLATE [ = ] default_collation ]
      | CONVERT TO CHARACTER SET | CHARSET charset | DEFAULT [ COLLATE collation ]
      | MODIFY column_name column_type ON UPDATE CURRENT_TIMESTAMP
  ```

>- **ADD table\_constraint \[ NOT VALID \]**
>
>  给表增加一个新的约束。
>
>- **ADD table\_constraint\_using\_index**
>
>  根据已有唯一索引为表增加主键约束或唯一约束。
>
>- **VALIDATE CONSTRAINT constraint\_name**
>
>  验证一个使用NOT VALID选项创建的检查类约束，通过扫描全表来保证所有记录都符合约束条件。如果约束已标记为有效时，什么操作也不会发生。
>
>- **DROP CONSTRAINT \[ IF EXISTS \]  constraint\_name \[ RESTRICT | CASCADE \]**
>
>  删除一个表上的约束。
>
>- **CLUSTER ON index\_name**
>
>  为将来的CLUSTER（聚簇）操作选择默认索引。实际上并没有重新盘簇化处理该表。
>
>- **SET WITHOUT CLUSTER**
>
>  从表中删除最新使用的CLUSTER索引。这样会影响将来那些没有声明索引的CLUSTER（聚簇）操作。
>
>- **SET \( \{storage\_parameter = value\} \[, ... \] \)**
>
>  修改表的一个或多个存储参数。
>
>- **RESET \( storage\_parameter \[, ... \] \)**
>
>  重置表的一个或多个存储参数。与SET一样，根据参数的不同可能需要重写表才能获得想要的效果。
>
>- **OWNER TO new\_owner**
>
>  将表、序列、视图的属主改变成指定的用户。
>
>- **SET TABLESPACE new\_tablespace**
>
>  这种形式将表空间修改为指定的表空间并将相关的数据文件移动到新的表空间。但是表上的所有索引都不会被移动，索引可以通过ALTER INDEX语法的SET TABLESPACE选项来修改索引的表空间。
>
>- **SET \{COMPRESS|NOCOMPRESS\}**
>
>  修改表的压缩特性。表压缩特性的改变只会影响后续批量插入的数据的存储方式，对已有数据的存储毫无影响。也就是说，表压缩特性的修改会导致该表中同时存在着已压缩和未压缩的数据。行存表不支持压缩。
>
>- **TO \{ GROUP groupname | NODE \( nodename \[, ... \] \) \}**
>
>  此语法仅在扩展模式（GUC参数support\_extended\_features为on时）下可用。该模式谨慎打开，主要供内部扩容工具使用，一般用户不应使用该模式。
>
>- **ADD NODE \( nodename \[, ... \] \)**
>
>  此语法主要供内部扩容工具使用，一般用户不建议使用。
>
>- **DELETE NODE \( nodename \[, ... \] \)**
>
>  此语法主要供内部缩容工具使用，一般用户不建议使用。
>
>- **DISABLE TRIGGER \[ trigger\_name | ALL | USER \]**
>
>  禁用trigger\_name所表示的单个触发器，或禁用所有触发器，或仅禁用用户触发器（此选项不包括内部生成的约束触发器，例如，可延迟唯一性和排除约束的约束触发器）。
>  应谨慎使用此功能，因为如果不执行触发器，则无法保证原先期望的约束的完整性。
>
>- **ENABLE TRIGGER \[ trigger\_name | ALL | USER \]**
>
>  启用trigger\_name所表示的单个触发器，或启用所有触发器，或仅启用用户触发器。
>
>- **ENABLE REPLICA TRIGGER trigger\_name**
>
>  触发器触发机制受配置变量[session\_replication\_role](../DatabaseReference/语句行为.md#zh-cn_topic_0237124732_zh-cn_topic_0059779117_sffbd1c48d86b4c3fa3287167a7810216)的影响，当复制角色为“origin”（默认值）或“local”时，将触发简单启用的触发器。
>  配置为ENABLE REPLICA的触发器仅在会话处于“replica”模式时触发。
>
>- **ENABLE ALWAYS TRIGGER trigger\_name**
>  无论当前复制模式如何，配置为ENABLE ALWAYS的触发器都将触发。
>
>- **DISABLE/ENABLE \[ REPLICA | ALWAYS \] RULE**
>
>  配置属于表的重写规则，已禁用的规则对系统来说仍然是可见的，只是在查询重写期间不被应用。语义为关闭/启动规则。由于关系到视图的实现，ON SELECT规则不可禁用。 配置为ENABLE REPLICA的规则将会仅在会话为"replica" 模式时启动，而配置为ENABLE ALWAYS的触发器将总是会启动，不考虑当前复制模式。规则触发机制也受配置变量[session\_replication\_role](../DatabaseReference/语句行为.md#zh-cn_topic_0237124732_zh-cn_topic_0059779117_sffbd1c48d86b4c3fa3287167a7810216)的影响，类似于上述触发器。
>
>- **DISABLE/ENABLE ROW LEVEL SECURITY**
>
>  开启或关闭表的行访问控制开关。
>  当开启行访问控制开关时，如果未在该数据表定义相关行访问控制策略，数据表的行级访问将不受影响；如果关闭表的行访问控制开关，即使定义了行访问控制策略，数据表的行访问也不受影响。详细信息参见[CREATE ROW LEVEL SECURITY POLICY](CREATE-ROW-LEVEL-SECURITY-POLICY.md)章节。
>
>- **NO FORCE/FORCE ROW LEVEL SECURITY**
>
>  强制开启或关闭表的行访问控制开关。
>  默认情况，表所有者不受行访问控制特性影响，但当强制开启表的行访问控制开关时，表的所有者（不包含系统管理员用户）会受影响。系统管理员可以绕过所有的行访问控制策略，不受影响。
>
>- **ENCRYPTION KEY ROTATION**
>
>  透明数据加密密钥轮转。只有在数据库开启透明加密功能，并且表的enable_tde选项为on时才可以进行表的数据加密密钥轮转。执行密钥轮转操作后，系统会自动向KMS申请创建新的密钥。密钥轮转后，使用旧密钥加密的数据仍使用旧密钥解密，新写入的数据使用新密钥加密。为保证加密数据安全，用户可根据加密表的新增数据量大小定期更新密钥，建议更新周期为两到三年。
>
>
>- **INHERIT parent\_table**
>
>  将目标资料表加到指定的父资料表中成为新的子资料表。之后，针对父资料表的查询将会包含目标资料表的资料。要作为子资料表加入前，目标资料表必须已经包含父资料表的所有栏位。这些栏位必须具有可匹配的资料类别，并且如果他们在父资料表中具有NOT NULL的限制条件，那么他们必须在子资料表中也具有NOT NULL的限制条件。对于父资料表的所有CHECK限制条件，必须还有相对应的子资料表限制条件，除非父资料表中标记为不可继承。
>
>- **NO INHERIT parent\_table**
>
>  从指定的父资料表的子资料表中产出目标资料表。针对父资料表的查询将不再包含从目标资料表中所产生的记录。
>
>- **OF type\_name**
>
>  将表连接至一种复合类型，与CREATE TABLE OF选项创建表一样。表的字段的名称和类型必须精确匹配复合类型中的定义，不过oid系统字段允许不一样。表不能是从任何其他表继承的。这些限制确保CREATE TABLE OF选项允许一个相同的表定义。
>
>- **NOT OF**
>
>  将一个与某类型进行关联的表进行关联的解除。
>
>- **REPLICA IDENTITY \{ DEFAULT | USING INDEX index\_name | FULL | NOTHING \}**
>
>  在逻辑复制场景下，指定该表的UPDATE和DELETE操作中旧元组的记录级别。
>
>    - DEFAULT记录主键的列的旧值，没有主键则不记录。
>    - USING INDEX记录命名索引覆盖的列的旧值，这些值必须是唯一的、不局部的、不可延迟的，并且仅包括标记为NOT NULL的列。
>    - FULL记录该行中所有列的旧值。
>    - NOTHING不记录有关旧行的信息。
>
>   在逻辑复制场景，解析该表的UPDATE和DELETE操作语句时，解析出的旧元组由以此方法记录的信息组成。对于有主键表该选项可设置为DEFAULT或FULL。对于无主键表该选项需设置为FULL，否则解码时旧元组将解析为空。一般场景不建议设置为NOTHING，旧元组会始终解析为空。
>
>   即使指定DEFAULT或USING INDEX，当前ustore表列的旧值中也可能包含该行所有列的旧值，只有旧值涉及toast该配置选项才会生效。另外针对ustore表，选项NOTHING无效，实际效果等同于FULL。
>
>- **COMMENT {=| } 'text'**
>
>  修改表对象的注释。
>
>- **ALTER INDEX index_name [ VISBLE | INVISIBLE ]**
>
>  修改索引的可见性。
>
>- **\[ \[ DEFAULT \] CHARACTER SET | CHARSET \[ = \] default\_charset \] \[ \[ DEFAULT \] COLLATE \[ = \] default\_collation \]**
>
>  修改表的默认字符集和默认字符序为指定的值。修改不会影响表中当前已经存在的列。
>
>- **CONVERT TO CHARACTER SET | CHARSET charset \[ COLLATE collation \]**
>
>  修改表的默认字符集和默认字符序为指定的值，同时将表中的所有字符类型的字段的字符集和字符序设置为指定的值，并将字段里的数据转换为新字符集编码。



其中列相关的操作column\_clause可以是以下子句之一：

```
ADD [ COLUMN ] column_name data_type [ CHARACTER SET | CHARSET [ = ] charset ] [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ] [ FIRST | AFTER column_name ]     
| MODIFY column_name data_type
| MODIFY column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ]
| MODIFY column_name [ CONSTRAINT constraint_name ] NULL
| MODIFY [ COLUMN ] column_name data_type [ CHARACTER SET | CHARSET [ = ] charset ] [{[ COLLATE collation ] | [ column_constraint ]} [ ... ] ] [FIRST | AFTER column_name]
| CHANGE [ COLUMN ] old_column_name new_column_name data_type [ CHARACTER SET | CHARSET [ = ] charset ] [{[ COLLATE collation ] | [ column_constraint ]} [ ... ] ] [FIRST | AFTER column_name]
| DROP [ COLUMN ] [ IF EXISTS ] column_name [ RESTRICT | CASCADE ]    
| ALTER [ COLUMN ] column_name [ SET DATA ] TYPE data_type [ COLLATE collation ] [ USING expression ]    
| ALTER [ COLUMN ] column_name { SET DEFAULT expression | DROP DEFAULT }    
| ALTER [ COLUMN ] column_name { SET | DROP } NOT NULL    
| ALTER [ COLUMN ] column_name SET STATISTICS [PERCENT] integer    
| ADD STATISTICS (( column_1_name, column_2_name [, ...] ))    
| DELETE STATISTICS (( column_1_name, column_2_name [, ...] ))    
| ALTER [ COLUMN ] column_name SET ( {attribute_option = value} [, ... ] )    
| ALTER [ COLUMN ] column_name RESET ( attribute_option [, ... ] )    
| ALTER [ COLUMN ] column_name SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }
```



> + **ADD \[ COLUMN \] column\_name data\_type [ CHARACTER SET | CHARSET [ = ] charset ] \[ compress\_mode \] \[ COLLATE collation \] \[ column\_constraint \[ ... \] \]   \[ FIRST | AFTER column\_name\]**
>
>   向表中增加一个新的字段。用ADD COLUMN增加一个字段，所有表中现有行都初始化为该字段的缺省值（如果没有声明DEFAULT子句，值为NULL）。其中FIRST | AFTER column\_name表示新增字段到某个位置。
>
> + **ADD \( \{ column\_name data\_type \[ compress\_mode \]  \} \[, ...\] \)**
>
>   向表中增加多列。
>
> + **MODIFY \( \{ column\_name data\_type | column\_name \[ CONSTRAINT constraint\_name \] NOT NULL \[ ENABLE \] | column\_name \[ CONSTRAINT constraint\_name \] NULL \} \[, ...\] \)**
>
>   修改表已存在字段的数据类型。
>
> + **MODIFY \[ COLUMN \] column\_name data\_type \[ CHARACTER SET | CHARSET charset \] \[\{\[ COLLATE collation \] | \[ column\_constraint \]\} \[ ... \] \] \[FIRST | AFTER column\_name\]**
>   修改表已存在字段的定义，将用新定义替换字段原定义，原字段上的索引、独立对象约束（例如：主键、唯一键、CHECK约束等）不会被删除。\[FIRST | AFTER column\_name\]语法表示修改字段定义的同时修改字段在表中的位置。
>   此语法只能在参数sql\_compatibility='B'时使用。不支持列存表，不支持外表，不支持修改加密字段，不支持修改分区键字段的数据类型和排序规则，不支持修改规则引用的字段的数据类型和排序规则，不支持修改物化视图引用的字段的数据类型和排序规则。
>   被修改数据类型或排序规则的字段如果被一个生成列引用，这个生成列的数据将会重新生成。
>   被修改字段若被一些对象依赖（比如：索引、独立对象约束、视图、触发器、行级访问控制策略等），修改字段过程中将会重建这些对象。若被修改后字段定义违反此类对象的约束，修改操作会失败，比如：修改作为视图结果列的字段的数据类型。请修改字段前评估这类影响。
>   被修改字段若被一些对象调用（比如：自定义函数、存储过程等），修改字段不会处理这些对象。修改字段完毕后，这些对象有可能出现不可用的情况，请修改字段前评估这类影响。
>   修改字段的字符集或字符序会将字段中的数据转换为新的字符集进行编码。
>   此子句与上一子句中“MODIFY column\_name data\_type”部分语法相同，语义功能不同，当GUC参数b\_format\_behavior\_compat\_options含有'enable\_modify\_column'选项时，将按照此子句功能处理。
>
> + **CHANGE \[ COLUMN \] old\_column\_name new\_column\_name data\_type \[ CHARACTER SET | CHARSET charset \] \[\{\[ COLLATE collation \] | \[ column\_constraint \]\} \[ ... \] \] \[FIRST | AFTER column\_name\]**
>   修改表已存在字段的名称和定义，字段新名称不能是已有字段的名称，将用新名称和定义替换字段原名称和定义原字段上的索引、独立对象约束（例如：主键、唯一键、CHECK约束）等不会被删除。\[FIRST | AFTER column\_name\]语法表示修改字段名称和定义的同时修改字段在表中的位置。
>   此语法只能在参数sql\_compatibility='B'时使用。不支持列存表，不支持外表。不支持修改加密字段，不支持修改分区键字段的数据类型和排序规则，不支持修改规则引用的字段的数据类型和排序规则，不支持修改物化视图引用的字段的数据类型和排序规则
>   被修改数据类型或排序规则的字段如果被一个生成列引用，这个生成列的数据将会重新生成。
>   被修改字段若被一些对象依赖（比如：索引、独立对象约束、视图、触发器、行级访问控制策略等），修改字段过程中将会重建这些对象。若被修改后字段定义违反此类对象的约束，修改操作会失败，比如：修改作为视图结果列的字段的数据类型。请修改字段前评估这类影响。
>   被修改字段若被一些对象调用（比如：自定义函数、存储过程等），修改字段不会处理这些对象。修改字段名称后，这些对象有可能出现不可用的情况，请修改字段前评估这类影响。
>   修改字段的字符集或字符序会将字段中的数据转换为新的字符集进行编码。
>
> + **DROP \[ COLUMN \] \[ IF EXISTS \] column\_name \[ RESTRICT | CASCADE \]**
>
>   从表中删除一个字段，和这个字段相关的索引和表约束也会被自动删除。如果任何表之外的对象依赖于这个字段，必须声明CASCADE ，比如视图。
>   DROP COLUMN命令并不是物理上把字段删除，而只是简单地把它标记为对SQL操作不可见。随后对该表的插入和更新将在该字段存储一个NULL。因此，删除一个字段是很快的，但是它不会立即释放表在磁盘上的空间，因为被删除了的字段占据的空间还没有回收。这些空间将在执行VACUUM时而得到回收。
>
> + **ALTER \[ COLUMN \] column\_name \[ SET DATA \] TYPE data\_type \[ COLLATE collation \] \[ USING expression \]**
>
>   改变表字段的数据类型。该字段涉及的索引和简单的表约束将被自动地转换为使用新的字段类型，方法是重新分析最初提供的表达式。
>    ALTER TYPE要求重写整个表的特性有时候是一个优点，因为重写的过程消除了表中没用的空间。比如，要想立刻回收被一个已经删除的字段占据的空间，最快的方法是
>
>  ```
>  ALTER TABLE table ALTER COLUMN anycol TYPE anytype;
>  ```
>
>  这里的anycol是任何在表中还存在的字段，而anytype是和该字段的原类型一样的类型。这样的结果是在表上没有任何可见的语意的变化，但是这个命令强制重写，这样就删除了不再使用的数据。
>
> - **ALTER \[ COLUMN \] column\_name \{ SET DEFAULT expression | DROP DEFAULT \}**
>
>   为一个字段设置或者删除缺省值。请注意缺省值只应用于随后的INSERT命令，它们不会修改表中已经存在的行。也可以为视图创建缺省，这个时候它们是在视图的ON INSERT规则应用之前插入到INSERT句中的。
>
> - **ALTER \[ COLUMN \] column\_name \{ SET | DROP \} NOT NULL**
>
>   修改一个字段是否允许NULL值或者拒绝NULL值。如果表在字段中包含非NULL，则只能使用SET NOT NULL。
>
> - **ALTER \[ COLUMN \] column\_name SET STATISTICS \[PERCENT\] integer**
>
>   为随后的ANALYZE操作设置针对每个字段的统计收集目标。目标的范围可以在0到10000之内设置。设置为-1时表示重新恢复到使用系统缺省的统计目标。
>
> - **\{ADD | DELETE\} STATISTICS \(\(column\_1\_name, column\_2\_name \[, ...\]\)\)**
>
>   用于添加和删除多列统计信息声明（不实际进行多列统计信息收集），以便在后续进行全表或全库analyze时进行多列统计信息收集。如果关闭GUC参数enable\_functional\_dependency，每组多列统计信息最多支持32列；如果开启GUC参数enable\_functional\_dependency，每组多列统计信息最多支持4列。不支持添加/删除多列统计信息声明的表：系统表、外表。
>
> - **ALTER \[ COLUMN \] column\_name SET \( \{attribute\_option = value\} \[, ... \] \)**
>   **ALTER \[ COLUMN \] column\_name RESET \( attribute\_option \[, ... \] \)**
>
>    设置/重置属性选项。
>    目前，属性选项只定义了n\_distinct和n\_distinct\_inherited。n\_distinct影响表本身的统计值，而n\_distinct\_inherited影响表及其继承子表的统计。目前，只支持SET/RESET n\_distinct参数，禁止SET/RESET n\_distinct\_inherited参数。
>
> - **ALTER \[ COLUMN \] column\_name SET STORAGE \{ PLAIN | EXTERNAL | EXTENDED | MAIN \}**
>
>   为一个字段设置存储模式。这个设置控制这个字段是内联保存还是保存在一个附属的表里，以及数据是否要压缩。仅支持对行存表的设置；对列存表没有意义，执行时报错。SET STORAGE本身并不改变表上的任何东西，只是设置将来的表操作时，建议使用的策略。

- 其中列约束column\_constraint为：

  ```
  [ CONSTRAINT constraint_name ]
              { NOT NULL |
                NULL |
                CHECK ( expression ) |
                DEFAULT default_expr  |
                GENERATED ALWAYS AS ( generation_expr ) [STORED] |
                AUTO_INCREMENT |
                ON UPDATE update_expr |
                UNIQUE [KEY] index_parameters |
                PRIMARY KEY index_parameters |
                ENCRYPTED WITH ( COLUMN_ENCRYPTION_KEY = column_encryption_key, ENCRYPTION_TYPE = encryption_type_value ) |                                                                                  
                REFERENCES reftable [ ( refcolumn ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
                    [ ON DELETE action ] [ ON UPDATE action ] }    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
  [ COMMENT 'text' ]
  ```

  

- 其中列的压缩可选项compress\_mode为：

```
[ DELTA | PREFIX | DICTIONARY | NUMSTR | NOCOMPRESS ]

```

-  其中根据已有唯一索引为表增加主键约束或唯一约束table\_constraint\_using\_index为：


    [ CONSTRAINT constraint_name ]
        { UNIQUE | PRIMARY KEY } USING INDEX index_name
        [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]

-   其中表约束table\_constraint为：

    ```
    [ CONSTRAINT [ constraint_name ] ]
    	{ CHECK ( expression ) |
    	  UNIQUE [ idx_name ] [ USING method ] ( { { column_name | ( expression ) } [ ASC | DESC ] } [, ... ] ) index_parameters [ VISIBLE | INVISIBLE ] |
    	  PRIMARY KEY [ USING method ] ( { column_name [ ASC | DESC ] }[, ... ] ) index_parameters [ VISIBLE | INVISIBLE ] |
    	  PARTIAL CLUSTER KEY ( column_name [, ... ] ) |
    	  FOREIGN KEY [ idx_name ] ( column_name [, ... ] ) REFERENCES reftable [ ( refcolumn [, ... ] ) ]
    	    [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] }
        [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    ```
    
-   其中索引参数index\_parameters为：

    ```
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
        [ USING INDEX TABLESPACE tablespace_name ]
    ```

-   重命名表。对名称的修改不会影响所存储的数据。

    ```
    ALTER TABLE [ IF EXISTS ] table_name 
        RENAME TO new_table_name;
    ```

-   重命名表中指定的列。

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name )}
        RENAME [ COLUMN ] column_name TO new_column_name;
    ```

-   重命名表的约束。

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name ) }
        RENAME CONSTRAINT constraint_name TO new_constraint_name;
    ```

-   设置表的所属模式。

    ```
    ALTER TABLE [ IF EXISTS ] table_name 
        SET SCHEMA new_schema;
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >-   这种形式把表移动到另外一个模式。相关的索引、约束都跟着移动。目前序列不支持改变schema。 若该表拥有序列，需要将序列删除，重建，或者取消拥有关系， 才能将表schema更改成功。
    >
    >-   要修改一个表的模式，用户必须在新模式上拥有CREATE权限。要把该表添加为一个父表的新子表，用户必须同时又是父表的所有者。要修改所有者，用户还必须是新的所有角色的直接或间接成员，并且该成员必须在此表的模式上有CREATE权限。这些限制规定了该用户不能做出了重建和删除表之外的事情。不过，系统管理员可以以任何方式修改任意表的所有权限。
    >
    >-   除了RENAME和SET SCHEMA之外所有动作都可以捆绑在一个经过多次修改的列表中并行使用。比如，可以在一个命令里增加几个字段或修改几个字段的类型。对于大表，此种操作带来的效率提升更明显，原因在于只需要对该大表做一次处理。
    >
    >-   增加一个CHECK或NOT NULL约束将会扫描该表，以保证现有的行符合约束要求。
    >
    >-   用一个非空缺省值增加一个字段或者改变一个字段的现有类型会重写整个表。对于大表来说，这个操作可能会花很长时间，并且它还临时需要两倍的磁盘空间。

-   添加多个列。

    ```
    ALTER TABLE [ IF EXISTS ] table_name
        ADD ( { column_name data_type [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ]} [, ...] );
    ```

-   更新多个列。

    ```
    ALTER TABLE [ IF EXISTS ] table_name 
        MODIFY ( { column_name data_type [ CHARACTER SET | CHARSET charset ] [{[ COLLATE collation ] | [ column_constraint ]} [ ... ] ] [FIRST | AFTER column_name] | column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ] | column_name [ CONSTRAINT constraint_name ] NULL } [, ...] );
    ```


-   对表timestamp列添加ON UPDATE属性。

    ```sql
    ALTER TABLE table_name
        MODIFY column_name column_type ON UPDATE CURRENT_TIMESTAMP;
    ```

-   对表timestamp列删除ON UPDATE属性。

    ```sql
    ALTER TABLE table_name
        MODIFY column_name column_type;
    ```

## 参数说明<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_sf4962205ddf84312a5fd888bc662e5cf"></a>

-   **IF EXISTS**

    如果不存在相同名称的表，不会抛出一个错误，而会发出一个通知，告知表不存在。

-   **table\_name  \[\*\] | ONLY table\_name | ONLY \( table\_name  \)**

    table\_name是需要修改的表名。

    若声明了ONLY选项，则只有那个表被更改。若未声明ONLY，该表及其所有子表都将会被更改。另外，可以在表名称后面显示地增加\*选项来指定包括子表，即表示所有后代表都被扫描，这是默认行为。

-   **constraint\_name**
    -   在DROP CONSTRAINT操作中表示要删除的现有约束的名称。
    -   在ADD CONSTRAINT操作中表示新增的约束名称。

        >![](public_sys-resources/icon-notice.png) **须知：** 
        >
        >对于新增约束，在B模式数据库下（即sql\_compatibility = 'B'）constraint\_name为可选项，在其他模式数据库下，必须加上constraint\_name。


-   **index\_name**

    索引名称。
        
    >![](public_sys-resources/icon-notice.png) **须知：** 
    >
    >在ADD CONSTRAINT操作中：
    >-   index\_name仅在B模式数据库下（即sql\_compatibility = 'B'）支持，其他模式数据库下不支持。
    >-   对于外键约束，constraint\_name和index\_name同时指定时，索引名为constraint\_name。
    >-   对于唯一键约束，constraint\_name和index\_name同时指定时，索引名以index\_name。

-   **USING method**

    指定创建索引的方法。

    取值范围参考[参数说明](CREATE-INDEX.md)中的USING method。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >
    >在ADD CONSTRAINT操作中：
    >-   USING method仅在B模式数据库下（即sql\_compatibility = 'B'）支持，其他模式数据库下不支持。
    >-   在B模式下，未指定USING method时，对于ASTORE的存储方式，默认索引方法为btree；对于USTORE的存储方式，默认索引方法为ubtree。

-   **ASC | DESC**

    ASC表示指定按升序排序（默认）。DESC指定按降序排序。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >
    >在ADD CONSTRAINT中，ASC|DESC只在B模式数据库下（即sql\_compatibility = 'B'）支持，其他模式数据库不支持。

-   **expression**

    创建一个基于该表的一个或多个字段的表达式索引约束，必须写在圆括弧中。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >
    >表达式索引只在B模式数据库下支持（即sql\_compatibility = 'B'），其他模式数据库不支持。
-   **storage\_parameter**

    表的存储参数的名称。

    创建索引新增一个选项：

    -   parallel\_workers（int类型）

        取值范围：\[0,32\]，0表示关闭并发。

        表示创建索引时起的bgworker线程数量，例如2就表示将会起2个bgworker线程并发创建索引。

        如果未设置，启动bgworker线程数量与表大小相关，一般不超过4个线程。
        
    -   hasuids（bool类型）
    
        默认值：off
    
        参数开启：更新表元组时，为元组分配表级唯一标识id。


-   **new\_owner**

    表新拥有者的名称。

-   **new\_tablespace**

    表所属新的表空间名称。

-   **column\_name**、**column\_1\_name、 column\_2\_name**

    现存的或新字段的名称。

-   **data\_type**

    新字段的类型，或者现存字段的新类型。

-   **compress\_mode**

    表字段的压缩可选项。该子句指定该字段优先使用的压缩算法。行存表不支持压缩。

-   **charset**

    只在B模式数据库下（即sql\_compatibility = 'B'）支持该语法，其他模式数据库不支持。指定表字段的字符集，单独指定时会将字段的字符序设置为指定的字符集的默认字符序。

- **collation**

  字段排序规则（字符序）名称。可选字段COLLATE指定了新字段的排序规则，如果省略，排序规则为新字段的默认类型。排序规则可以使用“select \* from pg\_collation;”命令从pg\_collation系统表中查询，默认的排序规则为查询结果中以default开始的行。

  对于B模式数据库下（即sql\_compatibility = 'B'）还支持utf8mb4\_bin、utf8mb4\_general\_ci、utf8mb4\_unicode\_ci、binary字符序，部分说明见表字段的字符集说明（参见[表1 B模式（即sql\_compatibility = 'B'）下支持的字符集和字符序介绍](CREATE-TABLE.md#table8163190152)）。

  ![](public_sys-resources/icon-note.png) **说明：** 

  >-   仅字符类型支持指定字符集，指定为binary字符集或字符序实际是将字符类型转化为对应的二进制类型，若类型映射不存在则报错。当前仅有TEXT类型转化为BLOB的映射。
  >-   除binary字符集和字符序外，当前仅支持指定与数据库编码相同的字符集。
  >-   未显式指定字段字符集或字符序时，若指定了表的默认字符集或字符序，字段字符集和字符序将从表上继承。若表的默认字符集或字符序不存在，当b\_format\_behavior\_compat\_options = 'default\_collation'时，字段的字符集和字符序将继承当前数据库的字符集及其对应的默认字符序。
  >-   当修改的字符集或字符序对应的字符集与当前字段字符集不同时，会将字段中的数据转换为指定的字符集进行编码。

-   **USING expression**

    USING子句声明如何从旧的字段值里计算新的字段值；如果省略，缺省从旧类型向新类型的赋值转换。如果从旧数据类型到新类型没有隐含或者赋值的转换，则必须提供一个USING子句。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >ALTER TYPE的USING选项实际上可以声明涉及该行旧值的任何表达式，即它可以引用除了正在被转换的字段之外其他的字段。这样，就可以用ALTER TYPE语法做非常普遍性的转换。因为这个灵活性，USING表达式并没有作用于该字段的缺省值（如果有的话），结果可能不是缺省表达式要求的常量表达式。这就意味着如果从旧类型到新类型没有隐含或者赋值转换的话，即使存在USING子句，ALTER TYPE也可能无法把缺省值转换成新的类型。在这种情况下，应该用DROP DEFAULT先删除缺省，执行ALTER TYPE，然后使用SET DEFAULT增加一个合适的新缺省值。类似的考虑也适用于涉及该字段的索引和约束。

-   **NOT NULL | NULL**

    设置列是否允许空值。

-   **integer**

    带符号的整数常值。当使用PERCENT时表示按照表数据的百分比收集统计信息，integer的取值范围为0-100。

-   **attribute\_option**

    属性选项。

-   **PLAIN | EXTERNAL | EXTENDED | MAIN**

    字段存储模式。

    -   PLAIN必需用于定长的数值（比如integer）并且是内联的、不压缩的。
    -   MAIN用于内联、可压缩的数据。
    -   EXTERNAL用于外部保存、不压缩的数据。使用EXTERNAL将令在text和bytea字段上的子字符串操作更快，但付出的代价是增加了存储空间。
    -   EXTENDED用于外部的压缩数据，EXTENDED是大多数支持非PLAIN存储的数据的缺省。

-   **CHECK \( expression \)**

    每次将要插入的新行或者将要被更新的行必须使表达式结果为真才能成功，否则会抛出一个异常并且不会修改数据库。

    声明为字段约束的检查约束应该只引用该字段的数值，而在表约束里出现的表达式可以引用多个字段。

    目前，CHECK表达式不能包含子查询也不能引用除当前行字段之外的变量。

-   **DEFAULT default\_expr**

    给字段指定缺省值。

    缺省表达式的数据类型必须和字段类型匹配。

    缺省表达式将被用于任何未声明该字段数值的插入操作。如果没有指定缺省值则缺省值为NULL 。

- **GENERATED ALWAYS AS \( generation\_expr \) \[STORED\]**

  该子句将字段创建为生成列，生成列的值在写入（插入或更新）数据时由generation\_expr计算得到，STORED表示像普通列一样存储生成列的值。

  > ![](public_sys-resources/icon-note.png) **说明：** 
  >
  > -   STORED关键字可省略，与不省略STORED语义相同。
  > -   生成表达式不能以任何方式引用当前行以外的其他数据。生成表达式不能引用其他生成列，不能引用系统列。生成表达式不能返回结果集，不能使用子查询，不能使用聚集函数，不能使用窗口函数。生成表达式调用的函数只能是不可变（IMMUTABLE）函数。
  > -   不能为生成列指定默认值。
  > -   生成列不能作为分区键的一部分。
  > -   生成列不能和ON UPDATE约束字句的CASCADE,SET NULL,SET DEFAULT动作同时指定。生成列不能和ON DELETE约束字句的SET NULL,SET DEFAULT动作同时指定。
  > -   修改和删除生成列的方法和普通列相同。删除生成列依赖的普通列，生成列被自动删除。不能改变生成列所依赖的列的类型。
  > -   生成列不能被直接写入。在INSERT或UPDATE命令中, 不能为生成列指定值, 但是可以指定关键字DEFAULT。
  > -   生成列的权限控制和普通列一样。
  > -   列存表、内存表MOT不支持生成列。外表中仅postgres\_fdw支持生成列。

- **UNIQUE [KEY] index\_parameters**

  **UNIQUE \( column\_name \[, ... \] \) index\_parameters**

  UNIQUE约束表示表里的一个或多个字段的组合必须在全表范围内唯一。

  UNIQUE KEY只能在sql\_compatibility='B'时使用，与UNIQUE语义相同。

-   **PRIMARY KEY index\_parameters**

    **PRIMARY KEY \( column\_name \[, ... \] \) index\_parameters**

    主键约束表明表中的一个或者一些字段只能包含唯一（不重复）的非NULL值。

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

- **DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE**

  设置该约束是否可推迟。

  - DEFERRABLE：可以推迟到事务结尾使用SET CONSTRAINTS命令检查。

  - NOT DEFERRABLE：在每条命令之后马上检查。

  - INITIALLY IMMEDIATE：那么每条语句之后就立即检查它。

  - INITIALLY DEFERRED：只有在事务结尾才检查它。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >Ustore表不支持新增DEFERRABLE 以及 INITIALLY  DEFERRED约束。

-   **PARTIAL CLUSTER KEY**

    局部聚簇存储，列存表导入数据时按照指定的列\(单列或多列\)，进行局部排序。

-   **WITH \( \{storage\_parameter = value\} \[, ... \] \)**

    为表或索引指定一个可选的存储参数。

-   **tablespace\_name**

    索引所在表空间的名称。

-   **COMPRESS|NOCOMPRESS**
    -   NOCOMPRESS：如果指定关键字NOCOMPRESS则不会修改表的现有压缩特性。
    -   COMPRESS：如果指定COMPRESS关键字，则对该表进行批量插入元组时触发该特性。行存表不支持压缩。

-   **new\_table\_name**

    修改后新的表名称。

-   **new\_column\_name**

    表中指定列修改后新的列名称。

-   **new\_constraint\_name**

    修改后表约束的新名称。

-   **new\_schema**

    修改后新的模式名称。

-   **CASCADE**

    级联删除依赖于被依赖字段或者约束的对象（比如引用该字段的视图）。

-   **RESTRICT**

    如果字段或者约束还有任何依赖的对象，则拒绝删除该字段。这是缺省行为。

-   **FIRST**

    新增列或修改列到第一位。

- **AFTER** **column\_name**

  新增列或修改列到column\_name之后。

  > ![](public_sys-resources/icon-note.png) **说明：** 
  >
  > -   列存表不支持FIRST | AFTER column\_name。
  > -   仅在B模式数据库下（即sql\_compatibility = 'B'）支持，其他模式数据库不支持。
  > -   加密列不支持FIRST | AFTER column\_name。
  > -   有规则依赖的表不支持改变表列的位置（包括新增和修改导致列位置的变化）。
  > -   外表不支持FIRST | AFTER column\_name。
  > -   SET类型的字段不支持修改到指定位置。

-   **schema\_name**

    表所在的模式名称。

-   **VISIBLE | INVISIBLE**

    指定索引是否可见，如果没有声明则默认为VISIBLE。
    
- **\[DEFAULT\] CHARACTER SET | CHARSET \[ = \] default\_charset**

  仅在sql\_compatibility='B'时支持该语法。修改表的默认字符集，单独指定时会将表的默认字符序设置为指定的字符集的默认字符序。

- **\[DEFAULT\] COLLATE \[ = \] default\_collation**

  仅在sql\_compatibility='B'时支持该语法。修改表的默认字符序，单独指定时会将表的默认字符集设置为指定的字符序对应的字符集。字符序参见[表1 B模式（即sql\_compatibility = 'B'）下支持的字符集和字符序介绍](CREATE-TABLE.md#table8163190152)。

  >![](public_sys-resources/icon-note.png) **说明：** 
  >未显式指定表的字符集或字符序时，若指定了模式的默认字符集或字符序，表字符集和字符序将从模式上继承。若模式的默认字符集或字符序不存在，当b\_format\_behavior\_compat\_options = 'default\_collation'时，表的字符集和字符序将继承当前数据库的字符集及其对应的默认字符序。


## 示例<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_se4f9dc97861c410bb51554bb58bcd76d"></a>

请参考CREATE TABLE的[示例](CREATE-TABLE.md#zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s86758dcf05d442d2a9ebd272e76ed1b8)。

```
-- 创建B模式数据库。
openGauss=# create database test_first_after dbcompatibility 'b';
openGauss=# \c test_first_after
-- 创建表t1并插入数据。
openGauss=# drop table if exists t1 cascade;
openGauss=# create table t1(f1 int, f2 varchar(20), f3 timestamp, f4 bit(8), f5 bool);
openGauss=# insert into t1 values(1, 'a', '2022-11-08 19:56:10.158564', x'41', true), (2, 'b', '2022-11-09 19:56:10.158564', x'42', false);
-- 指定位置新增字段
openGauss=# alter table t1 add f6 clob first;
openGauss=# alter table t1 add f7 blob after f2;
openGauss=# alter table t1 add f8 int, add f9 text first, add f10 float after f3;
-- 查询t1表结构
openGauss=# \d+ t1
-- 查询t1表数据
openGauss=# select * from t1;
-- 修改字段到指定位置
openGauss=# alter table t1 modify f3 timestamp first;
openGauss=# alter table t1 modify f1 int after f5;
-- 查询t1表结构
openGauss=# \d+ t1
-- 查询t1表数据
openGauss=# select * from t1;
-- 修改t1表的默认字符集为utf8mb4，默认字符序为utf8mb4_bin
openGauss=# alter table t1 charset utf8mb4 collate utf8mb4_bin;
-- 将t1表中字符类型字段的数据转化为utf8mb4编码，并设置表和字段的字符序为utf8mb4_bin
openGauss=# alter table t1 convert to charset utf8mb4 collate utf8mb4_bin;
-- 为t1表新增字段并设置字段的字符集为utf8mb4，字符序为utf8mb4_bin
openGauss=# alter table t1 add t10 varchar(20) charset utf8mb4 collate utf8mb4_bin;
-- 修改t1表的t10字段的字符集为utf8mb4，字符序为utf8mb4_unicode_ci
openGauss=# alter table t1 modify t10 varchar(20) charset utf8mb4 collate utf8mb4_unicode_ci;
-- 创建INVISIBLE唯一索引
openGauss=# alter table t1 add constraint uniq_a unique (f1) invisible;
-- 修改索引为VISIBLE
openGauss=# alter table t1 alter index uniq_a visible;
```



## 相关链接<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s489a6430be6447c193a4011257dc4994"></a>

[CREATE TABLE](CREATE-TABLE.md)，[DROP TABLE](DROP-TABLE.md)

