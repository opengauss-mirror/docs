# DELETE<a name="ZH-CN_TOPIC_0289900955"></a>

## 功能描述<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_se9507fb26df547a795ac7940e3a19ecf"></a>

DELETE从指定的表里删除满足WHERE子句的行。如果WHERE子句不存在，将删除表中所有行，结果只保留表结构。

## 注意事项<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_sfc96c070e8574f4ea9a2726e898fda16"></a>

-   表的所有者、被授予了表DELETE权限的用户或被授予DELETE ANY TABLE权限的用户有权删除表中数据，系统管理员默认拥有此权限。同时也必须有USING子句引用的表以及condition上读取的表的SELECT权限。
-   对于列存表，暂时不支持RETURNING子句。
-   对于多表删除语法，暂时不支持对列存表、视图和含有RULE的表进行多表删除。

## 语法格式<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_s84baecef89484d5f87f57b0545b46203"></a>

```
单表删除：
[ WITH [ RECURSIVE ] with_query [, ...] ]
DELETE [/*+ plan_hint */] [FROM] [ ONLY ] table_name [ * ] [ [ [partition_clause]  [ [ AS ] alias ] ] | [ [ [ AS ] alias ] [partitions_clause] ] ]
    [ USING using_list ]
    [ WHERE condition | WHERE CURRENT OF cursor_name ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ]
    [ LIMIT { count } ]
    [ RETURNING { * | { output_expr [ [ AS ] output_name ] } [, ...] } ];

多表删除：
[ WITH [ RECURSIVE ] with_query [, ...] ]
DELETE [/*+ plan_hint */] [FROM] 
    {[ ONLY ] table_name [ * ] [ [ [partition_clause]  [ [ AS ] alias ] ] | [ [ [ AS ] alias ] [partitions_clause] ] ]} [, ...]
    [ USING using_list ]
    [ WHERE condition  ];
或
[ WITH [ RECURSIVE ] with_query [, ...] ]
DELETE [/*+ plan_hint */]
    {[ ONLY ] table_name [ * ] [ [ [partition_clause]  [ [ AS ] alias ] ] | [ [ [ AS ] alias ] [partitions_clause] ] ]} [, ...]
    [ FROM using_list ]
    [ WHERE condition ];
```

## 参数说明<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_s6df87c0dd87c49e29a034e0ff3385ca6"></a>

-   **WITH \[ RECURSIVE \] with\_query \[, ...\]**

    用于声明一个或多个可以在主查询中通过名称引用的子查询，相当于临时表。

    如果声明了RECURSIVE，那么允许SELECT子查询通过名称引用它自己。

    其中with\_query的详细格式为：

    ```
    with_query_name [ ( column_name [, ...] ) ] AS [ [ NOT ] MATERIALIZED]
    ( {select | values | insert | update | delete} )
    ```

    - with\_query\_name指定子查询生成的结果集名称，在查询中可使用该名称访问子查询的结果集。
    - column\_name指定子查询结果集中显示的列名。
    - 每个子查询可以是SELECT、VALUES、INSERT、UPDATE或DELETE语句。
    - 用户可以使用MATERIALIZED / NOT MATERIALIZED对CTE进行修饰。
    
      -   如果声明为MATERIALIZED，WITH查询将被物化，生成一个子查询结果集的拷贝，在引用处直接查询该拷贝，因此WITH子查询无法和主干SELECT语句进行联合优化（如谓词下推、等价类传递等），对于此类场景可以使用NOT MATERIALIZED进行修饰，如果WITH查询语义上可以作为子查询内联执行，则可以进行上述优化。
      -   如果用户没有显示声明物化属性则遵守以下规则：如果CTE只在所属主干语句中被引用一次，且语义上支持内联执行，则会被改写为子查询内联执行，否则以CTE Scan的方式物化执行。
    
-   **plan\_hint子句**

    以/\*+ \*/的形式在DELETE关键字后，用于对DELETE对应的语句块生成的计划进行hint调优，详细用法请参见章节[使用Plan Hint进行调优](使用Plan-Hint进行调优.md)。每条语句中只有第一个/\*+ plan\_hint \*/注释块会作为hint生效，里面可以写多条hint。

-   **ONLY**

    如果指定ONLY则只有该表被删除；如果没有声明，则该表和它的所有子表将都被删除。

-   **table\_name**

    目标表的名称（可以有模式修饰）。

    取值范围：已存在的表名。

- **partition\_clause**

  指定分区删除操作

  PARTITION \{ \( partition\_name \) | FOR \( partition\_value \[, ...\] \) \} |

  SUBPARTITION \{ \( subpartition\_name \) | FOR \( subpartition\_value \[, ...\] \) \}

  关键字详见[SELECT](SELECT.md)一节介绍

  示例详见[CREATE TABLE SUBPARTITION](CREATE-TABLE-SUBPARTITION.md)

-   **partitions\_clause**

    指定多个分区删除操作

    PARTITION \{ \( \{ partition\_name | subpartition\_name \} \[, ...\] \) \}

    此语法仅在参数sql\_compatibility=B时生效。

    关键字详见[SELECT](SELECT.md)一节介绍

    示例详见[CREATE TABLE SUBPARTITION](CREATE-TABLE-SUBPARTITION.md)

-   **alias**

    目标表的别名。

    取值范围：字符串，符合标识符命名规范。

-   **using\_list**

    using子句。

      >![](public_sys-resources/icon-notice.gif) **须知：** 
      > 
    >当参数sql\_compatibility='B'或删除多张目标表时，using\_list指定关联表的集合时可以同时出现目标表，并且可以定义表的别名并在目标表中使用。其他情况下则目标表不可重复出现在using\_list中。

-   **condition**

    一个返回Boolean值的表达式，用于判断哪些行需要被删除。不建议使用int等数值类型作为condition，因为int等数值类型可以隐式转换为bool值（非0值隐式转换为true，0转换为false），可能导致非预期的结果。

-   **WHERE CURRENT OF cursor\_name**

    当前不支持，仅保留语法接口。

-   ORDER BY子句

    关键字详见[SELECT](SELECT.md)一节介绍

-   LIMIT子句

    关键字详见[SELECT](SELECT.md)一节介绍
-   **output\_expr**

    DELETE命令删除行之后计算输出结果的表达式。该表达式可以使用表的任意字段。可以使用\*返回被删除行的所有字段。

-   **output\_name**

    一个字段的输出名称。

    取值范围：字符串，符合标识符命名规范。


## 示例<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_s90a3978214f644269ab932c29df31137"></a>

```
--创建表tpcds.customer_address_bak。
openGauss=# CREATE TABLE tpcds.customer_address_bak AS TABLE tpcds.customer_address;

--删除tpcds.customer_address_bak中ca_address_sk小于14888的职员。
openGauss=# DELETE FROM tpcds.customer_address_bak WHERE ca_address_sk < 14888;

--删除tpcds.customer_address_bak中所有数据。
openGauss=# DELETE FROM tpcds.customer_address_bak;

--删除tpcds.customer_address_bak表。
openGauss=# DROP TABLE tpcds.customer_address_bak;

--同时删除tpcds.customer_address和tpcds.customer_address_bak中ca_address_sk小于50的职员。
openGauss=# DELETE FROM a,b USING tpcds.customer_address a,tpcds.customer_address_bak b where a.ca_address_sk = b.ca_address_sk and a.ca_address_sk < 50;
或者
openGauss=# DELETE a,b FROM tpcds.customer_address a,tpcds.customer_address_bak b where a.ca_address_sk = b.ca_address_sk and a.ca_address_sk < 50;
```

## 优化建议<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_section50155651112741"></a>

-   delete

    如果要删除表中的所有记录，建议使用truncate语法。


