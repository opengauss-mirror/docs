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
        | MODIFY column_name column_type ON UPDATE CURRENT_TIMESTAMP
        | AUTOEXTEND_SIZE [=] value
        | AVG_ROW_LENGTH [=] value
        | CHECKSUM [=] value
        | CONNECTION [=] 'connect_string'
        | {DATA | INDEX} DIRECTORY [=] 'absolute path to directory'
        | DELAY_KEY_WRITE [=] value
        | ENCRYPTION [=] 'encryption_string'
        | ENGINE_ATTRIBUTE [=] 'string'
        | INSERT_METHOD [=] { NO | FIRST | LAST }
        | KEY_BLOCK_SIZE [=] value
        | MAX_ROWS [=] value
        | MIN_ROWS [=] value
        | PACK_KEYS [=] value
        | PASSWORD [=] 'password'
        | START TRANSACTION
        | SECONDARY_ENGINE_ATTRIBUTE [=] 'string'
        | STATS_AUTO_RECALC [=] value
        | STATS_PERSISTENT [=] value
        | STATS_SAMPLE_PAGES [=] value
        | UNION [=] (tbl_name[,tbl_name]...)
        | TABLESPACE tablespace_name [STORAGE DISK]
        | [TABLESPACE tablespace_name] STORAGE MEMORY
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

-   **ADD table_indexclause**

    在表上新增一个索引

    ```
    {[FULLTEXT] INDEX | KEY} [index_name] [index_type] (key_part,...)[index_option]...
    ```

    其中参数index_type为：

    ```
    USING {BTREE | HASH | GIN | GIST | PSORT | UBTREE}
    ```

    其中参数key_part为：

    ```
    {col_name[(length)] | (expr)} [ASC | DESC]
    ```
    
    其中参数index_option为：
    
    ```
    index_option:{
    	  COMMENT 'string'
    	| index_type
      | [ VISIBLE | INVISIBLE ]
      | WITH PARSER ngram ON {UPDATE | DELETE} CASCADE
    }
    ```
    
    COMMENT、index_type、[ VISIBLE | INVISIBLE ] 的顺序和数量任意，但相同字段仅最后一个值生效。WITH PARSER ngram 为FULLTEXT INDEX指定的ngram解析器。

## 参数说明<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_sf4962205ddf84312a5fd888bc662e5cf"></a>

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

- **AUTOEXTEND\_SIZE \[=\] value**

  用于指定在表空间变满时扩展表空间大小；目前该特性仅有语法支持，不实现功能。参数的取值范围包括非负整数，小数，标识符，非负整数+标识符，小数+标识符。

- **AVG\_ROW\_LENGTH \[=\] value**

  用于指定表的平均行长度；目前该特性仅有语法支持，不实现功能。参数的取值范围包括非负整数，小数。

- **CHECKSUM \[=\] value**

  用于指定是否维护所有行的实时校验和；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数。

- **CONNECTION \[=\] 'connect_string'**

  用于指定联合表的连接字符串；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

- **{DATA | INDEX} DIRECTORY \[=\] 'absolute path to directory'**

  用于指定表数据数据和索引的存储目录；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

- **DELAY\_KEY\_WRITE \[=\] value**

  用于指定是否延迟表的键更新直到表关闭；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数。

- **ENCRYPTION \[=\] 'encryption_string'**

  用于指定表启用或禁用页面级数据加密；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

- **ENGINE\_ATTRIBUTE \[=\] 'string'**

  用于指定主存储引擎的表属性；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

- **INSERT\_METHOD \[=\] { NO | FIRST | LAST }**

  用于指定应将行插入到的表；目前该特性仅有语法支持，不实现功能。参数的取值范围为NO，FIRST，LAST。

- **KEY\_BLOCK\_SIZE \[=\] value**

  用于指定索引键块的字节大小；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数。

- **MAX\_ROWS [\=\] value**

  用于指定计划在表中存储的最大行数；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数。

- **MIN\_ROWS \[=\] value**

  用于指定计划在表中存储的最小行数；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数。

- **PACK\_KEYS \[=\] value**

  用于指定控制压缩索引的方式；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数，DEFAULT。

- **PASSWORD \[=\] 'password'**

  此选项未使用；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

- **SECONDARY\_ENGINE\_ATTRIBUTE \[=\] 'string'**

  用于指定辅助存储引擎的表属性；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

- **START TRANSACTION**

  用于开启事务模式；目前该特性仅有语法支持，不实现功能。

- **STATS\_AUTO\_RECALC \[=\] value**

  用于指定是否自动重新计算表的持久统计信息；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数，DEFAULT。

- **STATS\_PERSISTENT \[=\] value**

  用于指定是否为表启用持久统计信息；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数，DEFAULT。

- **STATS\_SAMPLE\_PAGES \[=\] value**

  用于指定估计索引列的基数和其他统计信息时要采样的索引页数；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数。

- **UNION \[=\] (tbl\_name\[,tbl\_name\]...)**

  用于访问一组相同的表作为一个表；目前该特性仅有语法支持，不实现功能。

- **TABLESPACE tablespace\_name \[STORAGE DISK\]**

  用于指定表存储在磁盘；目前该特性仅有语法支持，不实现功能。

- **\[TABLESPACE tablespace\_name\] STORAGE MEMORY**

  用于指定表存储在内存；目前该特性仅有语法支持，不实现功能。

>![](public_sys-resources/icon-note.gif) **说明：** 

>涉及的参数说明可见[ALTER TABLE](ALTER-TABLE.md)。

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

--- 兼容MySQL全文索引，添加全文索引语法
```sql
test=# ALTER TABLE test ADD FULLTEXT INDEX test_index_1 (title, boby) WITH PARSER ngram;
ALTER TABLE
test=# \d test_index_1
                  Index "fulltext_test.test_index_1"
    Column    | Type |                   Definition
--------------+------+------------------------------------------------
 to_tsvector  | text | to_tsvector('"ngram"'::regconfig, title::text)
 to_tsvector1 | text | to_tsvector('"ngram"'::regconfig, boby)
gin, for table "fulltext_test.test"
```

## 相关链接<a name="section156744489391"></a>

[ALTER TABLE](ALTER-TABLE.md)
