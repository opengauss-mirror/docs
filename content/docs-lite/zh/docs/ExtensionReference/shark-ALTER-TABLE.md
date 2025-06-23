# ALTER TABLE

## 功能描述<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

修改表，包括修改表的定义、重命名表、重命名表中指定的列、重命名表的约束、设置表的所属模式、添加/更新多个列、打开/关闭行访问控制开关。

## 注意事项<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

-   本章节只包含shark新增的语法，原openGauss的语法未做删除和修改。
-   新增支持`opt_clustered`语法

## 语法格式<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s58bdce220c9f4292ba9af919b04ad25c"></a>

-   修改表的定义。

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | (ONLY) table_name | (ONLY) ( table_name ) }
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
        | IMCSTORED [ ( column_name [, ...] ) ]
        | MODIFY PARTITION partition_name IMCSTORED [ ( column_name [, ...] ) ]
        | UNIMCSTORED
        | MODIFY PARTITION partition_name UNIMCSTORED
    ```

-   其中表约束table\_constraint为：

    ```
    [ CONSTRAINT [ constraint_name ] ]
    	{ CHECK ( expression ) |
    	  UNIQUE [ opt_clustered ] ( { { column_name [ ( length ) ] | ( expression ) } [ ASC | DESC ] } [, ... ] ) index_parameters [ VISIBLE | INVISIBLE ] |
    	  PRIMARY KEY [ opt_clustered ] ( { column_name [ ASC | DESC ] }[, ... ] ) index_parameters [ VISIBLE | INVISIBLE ] |
    	  PARTIAL CLUSTER KEY ( column_name [, ... ] ) |
    	  FOREIGN KEY [ idx_name ] ( column_name [, ... ] ) REFERENCES reftable [ ( refcolumn [, ... ] ) ]
    	    [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] }
        [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    ```

## 参数说明<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_sf4962205ddf84312a5fd888bc662e5cf"></a>

-   **opt\_clustered**

    参数内容为CLUSTERED/NONCLUSTERED，兼容D库的语法，指定创建聚合/非聚合索引。仅语法作用，没有实际功能。

## 示例<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_se4f9dc97861c410bb51554bb58bcd76d"></a>

--- 创建表和约束。

```
openGauss=# CREATE TABLE alter_table_tbl1 (a INT, b INT);
openGauss=# ALTER TABLE alter_table_tbl1 ADD CONSTRAINT alter_table_tbl_a UNIQUE CLUSTERED (a);
openGauss=# ALTER TABLE alter_table_tbl1 ADD CONSTRAINT alter_table_tbl_b PRIMARY KEY NONCLUSTERED (a);
```
## 相关链接<a name="section156744489391"></a>

[ALTER TABLE](../SQLReference/ALTER-TABLE.md)
