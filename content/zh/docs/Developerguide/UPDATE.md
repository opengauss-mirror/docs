# UPDATE

## 功能描述<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_s85747c5f88e64562a8ff9ddacda19929"></a>

更新表中的数据。UPDATE修改满足条件的所有行中指定的字段值，WHERE子句声明条件，SET子句指定的字段会被修改，没有出现的字段则保持它们的原值。

## 注意事项<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_s7e9e912f472543cbb190edb83e5f22d2"></a>

-   表的所有者、拥有表UPDATE权限的用户或拥有UPDATE ANY TABLE权限的用户，有权更新表中的数据，系统管理员默认拥有此权限。
-   对expression或condition条件里涉及到的任何表要有SELECT权限。
-   对于列存表，暂时不支持RETURNING子句。
-   列存表不支持结果不确定的更新\(non-deterministic update\)。试图对列存表用多行数据更新一行时会报错。
-   列存表的更新操作，旧记录空间不会回收，需要执行VACUUM FULL table\_name进行清理。
-   对于列存复制表，暂不支持UPDATE操作。
-   对于多表更新语法，仅在参数sql\_compatibility=B时生效，暂时不支持对列存表、视图和含有RULE的表进行多表更新。

## 语法格式<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_sd8d9ff15ff6c45c9aebd16c861936c06"></a>

```
单表更新：
[ WITH [ RECURSIVE ] with_query [, ...] ]
UPDATE [/*+ plan_hint */] [ ONLY ] table_name [ partition_clause ] [ * ] [ [ AS ] alias ]
SET {column_name = { expression | DEFAULT }
    |( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }}[, ...]
    [ FROM from_list] [ WHERE condition ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ]
    [ LIMIT { count } ]
    [ RETURNING {*
                | {output_expression [ [ AS ] output_name ]} [, ...] }];

多表更新：
[ WITH [ RECURSIVE ] with_query [, ...] ]
UPDATE [/*+ plan_hint */] table_list
SET {column_name = { expression | DEFAULT }
    |( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }}[, ...]
    [ FROM from_list] [ WHERE condition ];

where sub_query can be:
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
{ * | {expression [ [ AS ] output_name ]} [, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY grouping_element [, ...] ]
[ HAVING condition [, ...] ]
[ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
[ LIMIT { [offset,] count | ALL } ]
```
-   其中子查询with\_query为：

    ```
    with_query_name [ ( column_name [, ...] ) ]
        AS [ [ NOT ] MATERIALIZED ] ( {select | values | insert | update | delete} )
    ```
## 参数说明<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_sf3e3262b89854b3d829a94054116838c"></a>

-   **WITH \[ RECURSIVE \] with\_query \[, ...\]**

    用于声明一个或多个可以在主查询中通过名称引用的子查询，相当于临时表。

    如果声明了RECURSIVE，那么允许SELECT子查询通过名称引用它自己。

    其中with\_query的详细格式为：with\_query\_name \[ \( column\_name \[, ...\] \) \] AS \[ \[ NOT \] MATERIALIZED \] \( \{select | values | insert | update | delete\} \)

    -   with\_query\_name指定子查询生成的结果集名称，在查询中可使用该名称访问子查询的结果集。
    -   column\_name指定子查询结果集中显示的列名。
    -   每个子查询可以是SELECT，VALUES，INSERT，UPDATE或DELETE语句。
    -   用户可以使用MATERIALIZED / NOT MATERIALIZED对CTE进行修饰。
        -   如果声明为MATERIALIZED，WITH查询将被物化，生成一个子查询结果集的拷贝，在引用处直接查询该拷贝，因此WITH子查询无法和主干SELECT语句进行联合优化（如谓词下推、等价类传递等），对于此类场景可以使用NOT MATERIALIZED进行修饰，如果WITH查询语义上可以作为子查询内联执行，则可以进行上述优化。
        -   如果用户没有显示声明物化属性则遵守以下规则：如果CTE只在所属SELECT主干中被引用一次，且语义上支持内联执行，则会被改写为子查询内联执行，否则以CTE Scan的方式物化执行。

-   **plan\_hint子句**

    以/\*+ \*/的形式在UPDATE关键字后，用于对UPDATE对应的语句块生成的计划进行hint调优，详细用法请参见章节[使用Plan Hint进行调优](使用Plan-Hint进行调优.md)。每条语句中只有第一个/\*+ plan\_hint \*/注释块会作为hint生效，里面可以写多条hint。

-   **table\_name**

    要更新的表名，可以使用模式修饰。

    取值范围：已存在的表名称。

- **partition\_clause**

  指定分区更新操作

  PARTITION \{ \( partition\_name \) | FOR \( partition\_value \[, ...\] \) \} |

  SUBPARTITION \{ \( subpartition\_name \) | FOR \( subpartition\_value \[, ...\] \) \}

  关键字详见[SELECT](SELECT.md)一节介绍

  示例详见[CREATE TABLE SUBPARTITION](zh-cn_topic_0000001198046401.md)

-   **alias**

    目标表的别名。

    取值范围：字符串，符合标识符命名规范。

-   **table\_list**

    一个表的表达式列表，与from\_list类似，但可以同时声明目标表和关联表，仅在多表更新语法中使用。
-   **column\_name**

    要修改的字段名。

    支持使用目标表的别名加字段名来引用这个字段。例如：

    UPDATE foo AS f SET f.col\_name = 'namecol';

    取值范围：已存在的字段名。

-   **expression**

    赋给字段的值或表达式。

-   **DEFAULT**

    用对应字段的缺省值填充该字段。

    如果没有缺省值，则为NULL。

- **sub\_query**

  子查询。

  使用同一数据库里其他表的信息来更新一个表可以使用子查询的方法。其中SELECT子句具体介绍请参考[SELECT](SELECT.md)。

  在update单列时，支持使用order by子句与limit子句；而在update多列时，则不支持使用order by子句与limit子句。

-   **from\_list**

    一个表的表达式列表，允许在WHERE条件里使用其他表的字段。与在一个SELECT语句的FROM子句里声明表列表类似。

    >![](public_sys-resources/icon-notice.png) **须知：**
    >目标表绝对不能出现在from\_list里，除非在使用一个自连接（此时它必须以from\_list的别名出现）。

-   **condition**

    一个返回Boolean类型结果的表达式。只有这个表达式返回true的行才会被更新。不建议使用int等数值类型作为condition，因为int等数值类型可以隐式转换为bool值（非0值隐式转换为true，0转换为false），可能导致非预期的结果。

-   ORDER BY子句

    关键字详见[SELECT](SELECT.md)一节介绍

-   LIMIT子句

    关键字详见[SELECT](SELECT.md)一节介绍
-   **output\_expression**

    在所有需要更新的行都被更新之后，UPDATE命令用于计算返回值的表达式。

    取值范围：使用任何table以及FROM中列出的表的字段。\*表示返回所有字段。

-   **output\_name**

    字段的返回名称。


## 示例<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_s23d933f56bc745e1bd819083b4e50155"></a>

```
--创建表student1。
openGauss=# CREATE TABLE student1
(
   stuno     int,
   classno   int
);

--插入数据。
openGauss=# INSERT INTO student1 VALUES(1,1);
openGauss=# INSERT INTO student1 VALUES(2,2);
openGauss=# INSERT INTO student1 VALUES(3,3);

--查看数据。
openGauss=# SELECT * FROM student1;

--直接更新所有记录的值。
openGauss=# UPDATE student1 SET classno = classno*2;

--查看数据。
openGauss=# SELECT * FROM student1;

--删除表。
openGauss=# DROP TABLE student1;
```
