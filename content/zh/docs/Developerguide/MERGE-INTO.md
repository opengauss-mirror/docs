# MERGE INTO<a name="ZH-CN_TOPIC_0242370634"></a>

## 功能描述<a name="zh-cn_topic_0237122170_section11462163155618"></a>

通过MERGE INTO语句，将目标表和源表中数据针对关联条件进行匹配，若关联条件匹配时对目标表进行UPDATE，无法匹配时对目标表执行INSERT。此语法可以很方便地用来合并执行UPDATE和INSERT，避免多次执行。

## 注意事项<a name="zh-cn_topic_0237122170_section166351045574"></a>

-   进行MERGE INTO操作的用户需要同时拥有目标表的UPDATE和INSERT权限，以及源表的SELECT权限。
-   不支持重分布过程中MERGE INTO。

## 语法格式<a name="zh-cn_topic_0237122170_section10551749579"></a>

```
MERGE INTO table_name [ [ AS ] alias ]
USING { { table_name | view_name } | subquery } [ [ AS ] alias ]
ON ( condition )
[
  WHEN MATCHED THEN
  UPDATE SET { column_name = { expression | DEFAULT } |
          ( column_name [, ...] ) = ( { expression | DEFAULT } [, ...] ) } [, ...]
  [ WHERE condition ]
]
[
  WHEN NOT MATCHED THEN
  INSERT { DEFAULT VALUES |
  [ ( column_name [, ...] ) ] VALUES ( { expression | DEFAULT } [, ...] ) [, ...] [ WHERE condition ] }
];
```

## 参数说明<a name="zh-cn_topic_0237122170_section1315653475"></a>

-   **INTO子句**

    指定正在更新或插入的目标表。

    -   目标表的表名。

    -   **alias**

        目标表的别名。

        取值范围：字符串，符合标识符命名规范。


-   **USING子句**

    指定源表，源表可以为表、视图或子查询。

-   **ON子句**

    关联条件，用于指定目标表和源表的关联条件。不支持更新关联条件中的字段。

-   **WHEN MATCHED子句**

    当源表和目标表中数据针对关联条件可以匹配上时，选择WHEN MATCHED子句进行UPDATE操作。

    不支持更新分布列。不支持更新系统表、系统列。

-   **WHEN NOT MATCHED子句**

    当源表和目标表中数据针对关联条件无法匹配时，选择WHEN NOT MATCHED子句进行INSERT操作。

    不支持INSERT子句中包含多个VALUES。

    WHEN MATCHED和WHEN NOT MATCHED子句顺序可以交换，可以缺省其中一个，但不能同时缺省，不支持同时指定两个WHEN MATCHED或WHEN NOT MATCHED子句。

-   **DEFAULT**

    用对应字段的缺省值填充该字段。

    如果没有缺省值，则为NULL。

-   **WHERE condition**

    UPDATE子句和INSERT子句的条件，只有在条件满足时才进行更新操作，可缺省。不支持WHERE条件中引用系统列。


## 示例<a name="zh-cn_topic_0237122170_section3650125620712"></a>

```
-- 创建目标表products和源表newproducts，并插入数据
postgres=# CREATE TABLE products
(
product_id INTEGER,
product_name VARCHAR2(60),
category VARCHAR2(60)
);

postgres=# INSERT INTO products VALUES (1501, 'vivitar 35mm', 'electrncs');
postgres=# INSERT INTO products VALUES (1502, 'olympus is50', 'electrncs');
postgres=# INSERT INTO products VALUES (1600, 'play gym', 'toys');
postgres=# INSERT INTO products VALUES (1601, 'lamaze', 'toys');
postgres=# INSERT INTO products VALUES (1666, 'harry potter', 'dvd');

postgres=# CREATE TABLE newproducts
(
product_id INTEGER,
product_name VARCHAR2(60),
category VARCHAR2(60)
);

postgres=# INSERT INTO newproducts VALUES (1502, 'olympus camera', 'electrncs');
postgres=# INSERT INTO newproducts VALUES (1601, 'lamaze', 'toys');
postgres=# INSERT INTO newproducts VALUES (1666, 'harry potter', 'toys');
postgres=# INSERT INTO newproducts VALUES (1700, 'wait interface', 'books');

-- 进行MERGE INTO操作
postgres=# MERGE INTO products p   
USING newproducts np   
ON (p.product_id = np.product_id)   
WHEN MATCHED THEN  
  UPDATE SET p.product_name = np.product_name, p.category = np.category WHERE p.product_name != 'play gym'  
WHEN NOT MATCHED THEN  
  INSERT VALUES (np.product_id, np.product_name, np.category) WHERE np.category = 'books';
MERGE 4

-- 查询更新后的结果
postgres=# SELECT * FROM products ORDER BY product_id;
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
postgres=# DROP TABLE products;
postgres=# DROP TABLE newproducts;
```

