# ALTER TABLE<a name="ZH-CN_TOPIC_0289899912"></a>

## 功能描述<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

修改表，包括修改表的定义、重命名表、重命名表中指定的列、重命名表的约束、设置表的所属模式、添加/更新多个列、打开/关闭行访问控制开关。

## 注意事项<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

-   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。
-   当一条语句下有多条子命令时，drop index和rename index会优先其他子命令执行，这两种命令的优先级一致。

## 语法格式<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s58bdce220c9f4292ba9af919b04ad25c"></a>

-   修改表的定义。

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name ) }
        action [, ... ];
    ```

    其中具体表操作action可以是以下子句之一：

    ```
    column_clause
        | {DISABLE | ENABLE} KEYS
        | DROP INDEX index_name [ RESTRICT | CASCADE ]
        | DROP PRIMARY KEY [ RESTRICT | CASCADE ]
        | DROP FOREIGN KEY foreign_key_name [ RESTRICT | CASCADE ]
        | RENAME INDEX index_name to new_index_name
        | ADD table_indexclause
    ```

-   对一个表进行重建。

    ```
    ALTER TABLE table_name FORCE;
    ```

-   重命名表。对名称的修改不会影响所存储的数据。

    ```
    ALTER TABLE [ IF EXISTS ] table_name 
        RENAME { TO | AS } new_table_name;
    ```

-   **ADD table_indexclause**

    在表上新增一个索引

    ```
    {INDEX | KEY} [index_name] [index_type] (key_part,...)
    ```

    其中参数index_type为：

    ```
    USING {BTREE | HASH | GIN | GIST | PSORT | UBTREE}
    ```

    其中参数key_part为：

    ```
    {col_name | (expr)} [ASC | DESC]
    ```

![](public_sys-resources/icon-note.gif) **说明：** 

- **{DISABLE | ENABLE} KEYS**
  禁用和启用一个表的所有非唯一索引。

- **DROP INDEX index_name [ RESTRICT | CASCADE ]**
  删除一个表的索引。

- **DROP PRIMARY KEY [ RESTRICT | CASCADE ]**
  删除一个表的外键。

- **DROP FOREIGN KEY foreign_key_name [ RESTRICT | CASCADE ]**
  删除一个表的外键。

- **RENAME INDEX index_name to new_index_name**
  重命名一个表的索引。

## 参数说明<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_sf4962205ddf84312a5fd888bc662e5cf"></a>

![](public_sys-resources/icon-note.gif) **说明：** 
涉及的参数说明可见[ALTER TABLE](ALTER-TABLE.md)。

## 示例<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_se4f9dc97861c410bb51554bb58bcd76d"></a>

--- 创建表、外键和非唯一索引。

```
openGauss=# CREATE TABLE alter_table_tbl1 (a INT PRIMARY KEY, b INT);
openGauss=# CREATE TABLE alter_table_tbl2 (c INT PRIMARY KEY, d INT);
openGauss=# ALTER TABLE alter_table_tbl2 ADD CONSTRAINT alter_table_tbl_fk FOREIGN KEY (d) REFERENCES alter_table_tbl1 (a);
openGauss=# CREATE INDEX alter_table_tbl_b_ind ON alter_table_tbl1(b);
```

--- 禁用和启用非唯一索引。

```
openGauss=# ALTER TABLE alter_table_tbl1 DISABLE KEYS;
openGauss=# ALTER TABLE alter_table_tbl1 ENABLE KEYS;
```

--- 删除索引。

```
openGauss=# ALTER TABLE alter_table_tbl1 DROP KEY alter_table_tbl_b_ind;
```

--- 删除主键。

```
openGauss=# ALTER TABLE alter_table_tbl2 DROP PRIMARY KEY;
```

--- 删除外键。

```
openGauss=# ALTER TABLE alter_table_tbl2 DROP FOREIGN KEY alter_table_tbl_fk;
```

--- 重建表。

```
openGauss=# ALTER TABLE alter_table_tbl1 FORCE;
```

--- 重命名索引。

```
openGauss=# CREATE INDEX alter_table_tbl_b_ind ON alter_table_tbl1(b);
openGauss=# ALTER TABLE alter_table_tbl1 RENAME INDEX alter_table_tbl_b_ind TO new_alter_table_tbl_b_ind;
```

--- 删除表。

```
openGauss=# DROP TABLE alter_table_tbl1, alter_table_tbl2;
```

## 相关链接<a name="section156744489391"></a>

[ALTER TABLE](ALTER-TABLE.md)
