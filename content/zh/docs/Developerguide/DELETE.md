# DELETE<a name="ZH-CN_TOPIC_0289900955"></a>

## 功能描述<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_se9507fb26df547a795ac7940e3a19ecf"></a>

DELETE从指定的表里删除满足WHERE子句的行。如果WHERE子句不存在，将删除表中所有行，结果只保留表结构。

## 注意事项<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_sfc96c070e8574f4ea9a2726e898fda16"></a>

-   要删除表中的数据，用户必须对它有DELETE权限。同样也必须有USING子句引用的表以及condition上读取的表的SELECT权限。
-   对于列存表，暂时不支持RETURNING子句。

## 语法格式<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_s84baecef89484d5f87f57b0545b46203"></a>

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
DELETE [/*+ plan_hint */] FROM [ ONLY ] table_name [ * ] [ [ AS ] alias ]
    [ USING using_list ]
    [ WHERE condition | WHERE CURRENT OF cursor_name ]
    [ RETURNING { * | { output_expr [ [ AS ] output_name ] } [, ...] } ];
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
-   **plan\_hint子句**

    以/\*+ \*/的形式在DELETE关键字后，用于对DELETE对应的语句块生成的计划进行hint调优，详细用法请参见章节[使用Plan Hint进行调优](使用Plan-Hint进行调优.md)。每条语句中只有第一个/\*+ plan\_hint \*/注释块会作为hint生效，里面可以写多条hint。

-   **ONLY**

    如果指定ONLY则只有该表被删除；如果没有声明，则该表和它的所有子表将都被删除。

-   **table\_name**

    目标表的名称（可以有模式修饰）。

    取值范围：已存在的表名。

-   **alias**

    目标表的别名。

    取值范围：字符串，符合标识符命名规范。

-   **using\_list**

    using子句。

-   **condition**

    一个返回Boolean值的表达式，用于判断哪些行需要被删除。

-   **WHERE CURRENT OF cursor\_name**

    当前不支持，仅保留语法接口。

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
```

## 优化建议<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_section50155651112741"></a>

-   delete

    如果要删除表中的所有记录，建议使用truncate语法。


