# MERGE INTO<a name="ZH-CN_TOPIC_0289900297"></a>

## 功能描述<a name="zh-cn_topic_0283137308_zh-cn_topic_0237122170_section11462163155618"></a>

通过MERGE INTO语句，将目标表和源表中数据针对关联条件进行匹配，若关联条件匹配时对目标表进行UPDATE，无法匹配时对目标表执行INSERT。此语法可以很方便地用来合并执行UPDATE和INSERT，避免多次执行。

## 注意事项<a name="zh-cn_topic_0283137308_zh-cn_topic_0237122170_section166351045574"></a>

进行MERGE INTO操作的用户需要同时拥有目标表的UPDATE和INSERT权限，以及源表的SELECT权限。

## 语法格式<a name="zh-cn_topic_0283137308_zh-cn_topic_0237122170_section10551749579"></a>

```
MERGE [/*+ plan_hint */] INTO table_name [ partition_clause ] [ [ AS ] alias ]
USING { { table_name | view_name } | subquery } [ [ AS ] alias ]
ON ( condition )
[
  WHEN MATCHED THEN
  UPDATE SET { column_name = { expression | subquery | DEFAULT } |
          ( column_name [, ...] ) = ( { expression | subquery | DEFAULT } [, ...] ) } [, ...]
  [ WHERE condition ]
]
[
  WHEN NOT MATCHED THEN
  INSERT { DEFAULT VALUES |
  [ ( column_name [, ...] ) ] VALUES ( { expression | subquery | DEFAULT } [, ...] ) [, ...] [ WHERE condition ] }
];
NOTICE: 'subquery' in the UPDATE and INSERT clauses are only avaliable in CENTRALIZED mode!
```

## 参数说明<a name="zh-cn_topic_0283137308_zh-cn_topic_0237122170_section1315653475"></a>

-   **plan\_hint子句**

    以/\*+ \*/的形式在MERGE关键字后，用于对MERGE对应的语句块生成的计划进行hint调优，详细用法请参见章节[使用Plan Hint进行调优](使用Plan-Hint进行调优.md)。每条语句中只有第一个/\*+ plan\_hint \*/注释块会作为hint生效，里面可以写多条hint。

-   **INTO子句**

    指定正在更新或插入的目标表。

-   **talbe\_name**

    目标表的表名。

-   **partition\_clause**

    指定分区MERGE操作：

    ```
    PARTITION { ( partition_name ) | FOR ( partition_value [, ...] ) } |
    SUBPARTITION { ( subpartition_name ) | FOR ( subpartition_value [, ...] ) }
    ```

    关键字详见[SELECT](SELECT.md)一节介绍。

    如果value子句的值和指定分区不一致，会抛出异常。


-   **alias**

    目标表的别名。

    取值范围：字符串，符合标识符命名规范。

-   **USING子句**

    指定源表，源表可以为表、视图或子查询。

-   **ON子句**

    关联条件，用于指定目标表和源表的关联条件。不支持更新关联条件中的字段。

-   **WHEN MATCHED子句**

    当源表和目标表中数据针对关联条件可以匹配上时，选择WHEN MATCHED子句进行UPDATE操作。

    不支持更新系统表、系统列。

-   **WHEN NOT MATCHED子句**

    当源表和目标表中数据针对关联条件无法匹配时，选择WHEN NOT MATCHED子句进行INSERT操作。

    不支持INSERT子句中包含多个VALUES。

    WHEN MATCHED和WHEN NOT MATCHED子句顺序可以交换，可以缺省其中一个，但不能同时缺省，不支持同时指定两个WHEN MATCHED或WHEN NOT MATCHED子句。

-   **DEFAULT**

    用对应字段的缺省值填充该字段。

    如果没有缺省值，则为NULL。

-   **WHERE condition**

    UPDATE子句和INSERT子句的条件，只有在条件满足时才进行更新操作，可缺省。不支持WHERE条件中引用系统列。不建议使用int等数值类型作为condition，因为int等数值类型可以隐式转换为bool值（非0值隐式转换为true，0转换为false），可能导致非预期的结果。


## 示例<a name="zh-cn_topic_0283137308_zh-cn_topic_0237122170_section3650125620712"></a>

```
-- 创建目标表products和源表newproducts，并插入数据
openGauss=# CREATE TABLE products
(
product_id INTEGER,
product_name VARCHAR2(60),
category VARCHAR2(60)
);

openGauss=# INSERT INTO products VALUES (1501, 'vivitar 35mm', 'electrncs');
openGauss=# INSERT INTO products VALUES (1502, 'olympus is50', 'electrncs');
openGauss=# INSERT INTO products VALUES (1600, 'play gym', 'toys');
openGauss=# INSERT INTO products VALUES (1601, 'lamaze', 'toys');
openGauss=# INSERT INTO products VALUES (1666, 'harry potter', 'dvd');

openGauss=# CREATE TABLE newproducts
(
product_id INTEGER,
product_name VARCHAR2(60),
category VARCHAR2(60)
);

openGauss=# INSERT INTO newproducts VALUES (1502, 'olympus camera', 'electrncs');
openGauss=# INSERT INTO newproducts VALUES (1601, 'lamaze', 'toys');
openGauss=# INSERT INTO newproducts VALUES (1666, 'harry potter', 'toys');
openGauss=# INSERT INTO newproducts VALUES (1700, 'wait interface', 'books');

-- 进行MERGE INTO操作
openGauss=# MERGE INTO products p   
USING newproducts np   
ON (p.product_id = np.product_id)   
WHEN MATCHED THEN  
  UPDATE SET p.product_name = np.product_name, p.category = np.category WHERE p.product_name != 'play gym'  
WHEN NOT MATCHED THEN  
  INSERT VALUES (np.product_id, np.product_name, np.category) WHERE np.category = 'books';
MERGE 4

-- 查询更新后的结果
openGauss=# SELECT * FROM products ORDER BY product_id;
 product_id |  product_name  | category  
------------+----------------+-----------
       1501 | vivitar 35mm   | electrncs
       1502 | olympus camera | electrncs
       1600 | play gym       | toys
       1601 | lamaze         | toys
       1666 | harry potter   | toys
       1700 | wait interface | books
(6 rows)

-- 删除表
openGauss=# DROP TABLE products;
openGauss=# DROP TABLE newproducts;
```

