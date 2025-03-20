# CREATE TABLE

## 功能描述<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

在当前数据库中创建一个新的空白表，该表由命令执行者所有。

## 注意事项<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sb04dbf08cbd848649163edbff21254a1"></a>

-   本章节只包含shark新增的语法，原openGauss的语法未做删除和修改。
-   新增支持 `AS expr [PERSISTED]` 生成列语法

## 语法格式<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sc7a49d08f8ac43189f0e7b1c74f877eb"></a>

创建表。

```
CREATE [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name 
    ({ column_name data_type [ CHARACTER SET | CHARSET charset ] [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ]
        | table_constraint
        | LIKE source_table [ like_option [...] ] }
        [, ... ])
    [ AUTO_INCREMENT [ = ] value ]
    [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ] [ [DEFAULT] COLLATE [ = ] default_collation ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    [ COMMENT {=| } 'text' ];
```

-   其中列约束column\_constraint为：

    ```
    [ CONSTRAINT constraint_name ]
    { NOT NULL |
      NULL |
      CHECK ( expression ) |
      DEFAULT default_expr |
      GENERATED ALWAYS AS ( generation_expr ) [STORED] |
      AS ( generation_expr ) [PERSISTED] |
      AUTO_INCREMENT |
      ON UPDATE update_expr |
      UNIQUE [KEY] index_parameters |
      ENCRYPTED WITH ( COLUMN_ENCRYPTION_KEY = column_encryption_key, ENCRYPTION_TYPE = encryption_type_value ) |
      PRIMARY KEY index_parameters |
      REFERENCES reftable [ ( refcolumn ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
          [ ON DELETE action ] [ ON UPDATE action ] }
    [ ENABLE [VALIDATE | NOVALIDATE] | DISABLE [VALIDATE | NOVALIDATE] ]
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    [ COMMENT {=| } 'text' ]
    ```

## 参数说明<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s99cf2ac11c79436c93385e4efd7c4428"></a>

+ **AS \( generation\_expr \) \[PERSISTED\]**

  该子句为兼容D库的语法，将字段创建为生成列，生成列的值在写入（插入或更新）数据时由generation\_expr计算得到，PERSISTED表示像普通列一样存储生成列的值。

  >![](public_sys-resources/icon-note.png) **说明：** 
  >
  >-   PERSISTED关键字可省略，与不省略PERSISTED语义相同。
  >-   兼容D库的生成列无需指定列类型，由表达式计算类型得到列的类型。
  >-   兼容D库的生成列在删除生成列依赖的普通列时报错，必须先删除生成列，才能删除生成列依赖的普通列。

## 生成列示例<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s985289833081489e9d77c485755bd362"></a>

```sql
opengauss=# CREATE TABLE Products(
opengauss(#     QtyAvailable smallint,
opengauss(#     UnitPrice money,
opengauss(#     InventoryValue AS (QtyAvailable * UnitPrice)
opengauss(# );
NOTICE:  The virtual computed columns (non-persisted) are currently ignored and behave the same as persisted columns.
CREATE TABLE
opengauss=# ALTER TABLE Products ADD RetailValue AS (QtyAvailable * UnitPrice * 1.5) PERSISTED;
ALTER TABLE
opengauss=# \d+ Products
                                                         Table "public.products"
     Column     |   Type   |                               Modifiers                               | Storage | Stats target | Description 
----------------+----------+-----------------------------------------------------------------------+---------+--------------+-------------
 qtyavailable   | smallint |                                                                       | plain   |              | 
 unitprice      | money    |                                                                       | plain   |              | 
 inventoryvalue | money    | as ((qtyavailable * unitprice)) persisted                             | plain   |              | 
 retailvalue    | money    | as (((qtyavailable * unitprice) * (1.5)::double precision)) persisted | plain   |              | 
Has OIDs: no
Options: orientation=row, compression=no

opengauss=# ALTER TABLE Products DROP unitprice;
ERROR:  cannot drop a column used by a generated column
DETAIL:  Column "unitprice" is used by generated column "retailvalue".
opengauss=# ALTER TABLE Products DROP inventoryvalue;
ALTER TABLE
opengauss=# ALTER TABLE Products DROP retailvalue;
ALTER TABLE
opengauss=# ALTER TABLE Products DROP unitprice;
ALTER TABLE
```

## 相关链接<a name="section156744489391"></a>

[CREATE TABLE](../SQLReference/CREATE-TABLE.md)