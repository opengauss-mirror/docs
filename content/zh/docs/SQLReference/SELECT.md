# SELECT<a name="ZH-CN_TOPIC_0289900232"></a>

## 功能描述<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_s65596fb5f1d44a428e41dd508d2044a7"></a>

SELECT用于从表或视图中取出数据。

SELECT语句就像叠加在数据库表上的过滤器，利用SQL关键字从数据表中过滤出用户需要的数据。

## 注意事项<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_s42c37979749545719ac9114594f45d93"></a>

-   必须对每个在SELECT命令中使用的字段有SELECT权限。

-   使用FOR UPDATE，FOR NO KEY UPDATE，FOR SHARE或FOR KEY SHARE还要求UPDATE权限。

## 语法格式<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_sb7329222602d46fe944bf6c300931dd2"></a>

-   查询数据

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [/*+ plan_hint */] [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
{ * | {expression [ [ AS ] output_name ]} [, ...] }
[ into_option ]
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ [ START WITH condition ] CONNECT BY [NOCYCLE] condition [ ORDER SIBLINGS BY expression ] ]
[ GROUP BY grouping_element [, ...] ]
[ HAVING condition [, ...] ]
[ WINDOW {window_name AS ( window_definition )} [, ...] ]
[ { UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select ]
[ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
[ LIMIT { [offset,] count | ALL } ]
[ OFFSET start [ ROW | ROWS ] ]
[ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]
[ into_option ]
[ {FOR { UPDATE | NO KEY UPDATE | SHARE | KEY SHARE } [ OF table_name [, ...] ] [ NOWAIT | WAIT N]} [...] ]
[ into_option ];
```

>![](public_sys-resources/icon-note.gif) **说明：** 
>
>condition和expression中可以使用targetlist中表达式的别名。
>
>-   只能同一层引用。
>
>-   只能引用targetlist中的别名。
>
>-   只能是后面的表达式引用前面的表达式。
>
>-   不能包含volatile函数。
>
>-   不能包含Window function函数。
>
>-   不支持在join on条件中引用别名。
>
>-   targetlist中有多个要应用的别名则报错。

-   其中子查询with\_query为：

    ```
    with_query_name [ ( column_name [, ...] ) ]
        AS [ [ NOT ] MATERIALIZED ] ( {select | values | insert | update | delete} )
    ```

- 其中into子句为：

  ```
  into_option: {
          INTO var_name [, var_name] ...
  	| INTO OUTFILE 'file_name'
  		[CHARACTER SET charset_name]
  		export_options
  	| INTO DUMPFILE 'file_name'
  }
  export_options: {
      [FIELDS
   [TERMINATED BY 'string']
   [[OPTIONALLY] ENCLOSED BY 'char']
   [ESCAPED BY 'char' ]
      ]
      [LINES
   [STARTING BY 'string']
   [TERMINATED BY 'string']
      ]
  }
  ```

-   其中指定查询源from\_item为：

    ```
    {[ ONLY ] table_name [ * ] [ partition_clause ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
    [ TABLESAMPLE sampling_method ( argument [, ...] ) [ REPEATABLE ( seed ) ] ]
    [TIMECAPSULE {TIMESTAMP|CSN} expression]
    |( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
    |with_query_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
    |function_name ( [ argument [, ...] ] ) [ AS ] alias [ ( column_alias [, ...] | column_definition [, ...] ) ]
    |function_name ( [ argument [, ...] ] ) AS ( column_definition [, ...] )
    |from_item [ NATURAL ] join_type from_item [ ON join_condition | USING ( join_column [, ...] ) ]}
    ```

-   其中group子句为：

    ```
    ( )
    | expression
    | ( expression [, ...] )
    | ROLLUP ( { expression | ( expression [, ...] ) } [, ...] )
    | CUBE ( { expression | ( expression [, ...] ) } [, ...] )
    | GROUPING SETS ( grouping_element [, ...] )
    ```

-   其中指定分区partition\_clause为：

    ```
    PARTITION { ( partition_name ) | 
            FOR (  partition_value [, ...] ) }
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >指定分区只适合分区表。

- 其中设置排序方式nlssort\_expression\_clause为：

  ```
  NLSSORT ( column_name, ' NLS_SORT = { SCHINESE_PINYIN_M | generic_m_ci } ' )
  其中，第二个参数可选generic_m_ci，仅支持纯英文不区分大小写排序。
  ```

-   简化版查询语法，功能相当于select \* from table\_name。

    ```
    TABLE { ONLY {(table_name)| table_name} | table_name [ * ]};
    ```


## 参数说明<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_sa812f65b8e8c4c638ec7840697222ddc"></a>

- **WITH \[ RECURSIVE \] with\_query \[, ...\]**

  用于声明一个或多个可以在主查询中通过名称引用的子查询，相当于只在主查询中存在的临时表，其可以将复杂的查询简化。
  
  其中with\_query的详细格式为：
  ```
  with_query_name [ ( column_name [, ...] ) ] AS ( {select | values | insert | update | delete} )
  ```

  -   with\_query\_name指定子查询生成的结果集名称，在查询中可使用该名称访问子查询的结果集。
  -   column\_name指定子查询结果集中显示的列名。
  -   每个子查询可以是SELECT、VALUES、INSERT、UPDATE或DELETE语句。
  
  如果声明了RECURSIVE，那么允许AS后的SELECT子查询通过名称引用自己，详细格式为：
  ```
  non_recursive_term UNION [ ALL | DISTINCT ] recursive_term
  ```
  -  即由非递归项、UNION、递归项组成
  -  只有递归项中可以引用自己
  -  每个查询中只允许一个递归自引用

-   **plan\_hint子句**

    以/\*+ \*/的形式在SELECT关键字后，用于对SELECT对应的语句块生成的计划进行hint调优，详细用法请参见章节[使用Plan Hint进行调优](../PerformanceTuningGuide/使用Plan-Hint进行调优.md)。每条语句中只有第一个/\*+ plan\_hint \*/注释块会作为hint生效，里面可以写多条hint。

-   **ALL**

    声明返回所有符合条件的行，是默认行为，可以省略该关键字。

-   **DISTINCT \[ ON \( expression \[, ...\] \) \]**

    从SELECT的结果集中删除所有重复的行，使结果集中的每行都是唯一的。

    ON \( expression \[, ...\] \) 只保留那些在给出的表达式上运算出相同结果的行集合中的第一行。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >DISTINCT ON表达式是使用与ORDER BY相同的规则进行解释的。除非使用了ORDER BY来保证需要的行首先出现，否则，“第一行” 是不可预测的。

-   **SELECT列表**

    指定查询表中列名，可以是部分列或者是全部（使用通配符\*表示）。

    通过使用子句AS output\_name可以为输出字段取个别名，这个别名通常用于输出字段的显示。支持关键字name、value和type作为列别名。

    列名可以用下面几种形式表达：

    -   手动输入列名，多个列之间用英文逗号（,）分隔。
    -   可以是FROM子句里面计算出来的字段。

- **INTO子句**

  将select出的结果输出到指定用户自定义变量或文件。

  - var\_name

    用户自定义的变量名。详见[SET章节](SET.md)中的var\_name。

  - OUTFILE

    - CHARACTER SET 指定编码格式。

    - FIELDS 指定每个字段的属性：

      TERMINATED 指定间隔符。

      \[OPTIONALLY\] ENCLOSED 指定引号符，指定OPTIONALLY时只对字符串数据类型起作用。

      ESCAPED 指定转义符。

    - LINES 指定行属性：

      STARTING 指定行开头。

      TERMINATED 指定行结尾。

  - DUMPFILE

    导出无间隔符，无换行符的单行数据到文件。

  - file\_name

    指定文件的绝对路径。

    ```
  into_option三处位置：
    --在from子句之前。
    openGauss=#  select * into @my_var from t;
    --在锁定子句之前。
    openGauss=#  select * from t into @my_var for update;
    --在select语句结尾。
  openGauss=#  select * from t for update into @my_var;
    
  导出到文件：
    openGauss=#  select * from t；
   a | b
    ---+---
   1 | a
    (1 row)
  --导出数据到outfile文件。
    openGauss=#  select * from t into outfile '/home/openGauss/t.txt'FIELDS TERMINATED BY '~' ENCLOSED BY 't' ESCAPED BY '^' LINES STARTING BY '$' TERMINATED BY '&\n';
  文件内容：$t1t~tat&，其中LINES STARTING BY($),FIELDS TERMINATED BY(~),ENCLOSED BY(t),LINES TERMINATED BY(&\n)。
    --导出数据到dumpfile文件。
  openGauss=#  select * from t into dumpfile '/home/openGauss/t.txt';
    文件内容：1a
  ```
  
  
  
- **FROM子句**

  为SELECT声明一个或者多个源表。

  FROM子句涉及的元素如下所示。

  -   table\_name

      表名或视图名，名称前可加上模式名，如：schema\_name.table\_name。

  -   alias

      给表或复杂的表引用起一个临时的表别名，以便被其余的查询引用。

      别名用于缩写或者在自连接中消除歧义。如果提供了别名，它就会完全隐藏表的实际名称。

  -   TABLESAMPLE  _sampling\_method_  \(  _argument_  \[, ...\] \) \[ REPEATABLE \(  _seed_  \) \]

      _table\_name_之后的TABLESAMPLE子句表示应该用指定的_sampling\_method_来检索表中行的子集。

      可选的REPEATABLE子句指定一个用于产生采样方法中随机数的_种子_数。种子值可以是任何非空常量值。如果查询时表没有被更改，指定相同种子和_argument_值的两个查询将会选择该表相同的采样。但是不同的种子值通常将会产生不同的采样。如果没有给出REPEATABLE，则会基于一个系统产生的种子为每一个查询选择一个新的随机采样。

  - TIMECAPSULE \{ TIMESTAMP | CSN \} expression

    查询指定CSN点或者指定时间点表的内容。

    目前不支持闪回查询的表：系统表、列存表、内存表、DFS表、全局临时表、本地临时表、UNLOGGED表、分区表、视图、序列表、Hbkt表、共享表、继承表、带有PARTIAL CLUSTER KEY约束的表。

    - TIMECAPSULE TIMESTAMP

      关键字，闪回查询的标识，根据date日期，闪回查找指定时间点的结果集。date日期必须是一个过去有效的时间戳。

    - TIMECAPSULE CSN

      关键字，闪回查询的标识，根据表的CSN闪回查询指定CSN点的结果集。其中CSN可从gs_txn_snapshot记录的snpcsn号查得。

      > ![img](https://docs.opengauss.org/zh/docs/5.0.0/docs/DeveloperGuide/public_sys-resources/icon-note.gif) **说明：**
      >
      > - 闪回查询不能跨越影响表结构或物理存储的语句，否则会报错。即闪回点和当前点之间，如果执行过修改表结构或影响物理存储的语句（TRUNCATE、DDL、DCL、VACUUM FULL），则闪回失败，报错:ERROR: The table definition of T1 has been changed。
      > - 闪回点过旧时，因闪回版本被回收等导致无法获取旧版本会导致闪回失败，报错：Restore point too old。可通过将version_retention_age和vacuum_defer_cleanup_age设置成同值，配置闪回功能旧版本保留期限，取值范围是0~1000000，值为0表示VACUUM不会延迟清除无效的行存记录。
      > - 通过时间方式指定闪回点，闪回数据和实际时间点最多偏差为3秒。

    - column_alias

      列别名。

    - PARTITION

      查询分区表的某个分区的数据。

    - partition_name

      分区名。

    - partition_value

      指定的分区键值。在创建分区表时，如果指定了多个分区键，可以通过PARTITION FOR子句指定的这一组分区键的值，唯一确定一个分区。

    - subquery

      FROM子句中可以出现子查询，创建一个临时表保存子查询的输出。

    - with_query_name

      WITH子句同样可以作为FROM子句的源，可以通过WITH查询的名称对其进行引用。

    - function_name

      函数名称。函数调用也可以出现在FROM子句中。

    - join_type

      有5种类型，如下所示。

      - [ INNER ] JOIN

        一个JOIN子句组合两个FROM项。可使用圆括弧以决定嵌套的顺序。如果没有圆括弧，JOIN从左向右嵌套。

        在任何情况下，JOIN都比逗号分隔的FROM项绑定得更紧。

      - LEFT [ OUTER ] JOIN

        返回笛卡尔积中所有符合连接条件的行，再加上左表中通过连接条件没有匹配到右表行的那些行。这样，左边的行将扩展为生成表的全长，方法是在那些右表对应的字段位置填上NULL。请注意，只在计算匹配的时候，才使用JOIN子句的条件，外层的条件是在计算完毕之后施加的。

      - RIGHT [ OUTER ] JOIN

        返回所有内连接的结果行，加上每个不匹配的右边行（左边用NULL扩展）。

        这只是一个符号上的方便，因为总是可以把它转换成一个LEFT OUTER JOIN，只要把左边和右边的输入互换位置即可。

      - FULL [ OUTER ] JOIN

        返回所有内连接的结果行，加上每个不匹配的左边行（右边用NULL扩展），再加上每个不匹配的右边行（左边用NULL扩展）。

      - CROSS JOIN

        CROSS JOIN等效于INNER JOIN ON（TRUE） ，即没有被条件删除的行。这种连接类型只是符号上的方便，因为它们与简单的FROM和WHERE的效果相同。

        > ![img](https://docs.opengauss.org/zh/docs/5.0.0/docs/Developerguide/public_sys-resources/icon-note.gif) **说明：** 必须为INNER和OUTER连接类型声明一个连接条件，即NATURAL ON、join_condition、USING (join_column [， …]) 之一。但是它们不能出现在CROSS JOIN中。

      其中CROSS JOIN和INNER JOIN生成一个简单的笛卡尔积，和在FROM的顶层列出两个项的结果相同。

    - ON join_condition

      连接条件，用于限定连接中的哪些行是匹配的。如：ON left_table.a = right_table.a。

    - USING(join_column[，…])

      ON left_table.a = right_table.a AND left_table.b = right_table.b … 的简写。要求对应的列必须同名。USING 意味着，每个等号表达式里面的列，只有一列会输出，而不是全部。

    - NATURAL

      NATURAL是具有相同名称的两个表的所有列的USING列表的简写，如果没有一样名称的列，则等效于 join on true。

    - from item

      用于连接的查询源对象的名称。


-   **WHERE子句**

    WHERE子句构成一个行选择表达式，用来缩小SELECT查询的范围。condition是返回值为布尔型的任意表达式，任何不满足该条件的行都不会被检索。

    WHERE子句中可以通过指定“\(+\)”操作符的方法将表的连接关系转换为外连接。但是不建议用户使用这种用法，因为这并不是SQL的标准语法，在做平台迁移的时候可能面临语法兼容性的问题。同时，使用“\(+\)”有很多限制：

    1.  “\(+\)”只能出现在where子句中。
    2.  如果from子句中已经有指定表连接关系，那么不能再在where子句中使用“\(+\)”。
    3.  “\(+\)”只能作用在表或者视图的列上，不能作用在表达式上。
    4.  如果表A和表B有多个连接条件，那么必须在所有的连接条件中指定“\(+\)”，否则“\(+\)”将不会生效，表连接会转化成内连接，并且不给出任何提示信息。
    5.  “\(+\)”作用的连接条件中的表不能跨查询或者子查询。如果“\(+\)”作用的表，不在当前查询或者子查询的from子句中，则会报错。如果“\(+\)”作用的对端的表不存在，则不报错，同时连接关系会转化为内连接。
    6.  “\(+\)”作用的表达式不能直接通过“OR”连接。
    7.  如果“\(+\)”作用的列是和一个常量的比较关系， 那么这个表达式会成为join条件的一部分。
    8.  同一个表不能对应多个外表。
    9.  “\(+\)”只能出现“比较表达式”，“NOT表达式”，“ANY表达式”，“ALL表达式”，“IN表达式”，“NULLIF表达式”，“IS DISTINCT FROM表达式”，“IS OF表达式”。“\(+\)”不能出现在其他类型表达式中，并且这些表达式中不允许出现通过“AND”和“OR”连接的表达式。
    10. “\(+\)”只能转化为左外连接或者右外连接，不能转化为全连接，即不能在一个表达式的两个表上同时指定“\(+\)”。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >
    >对于WHERE子句的LIKE操作符，当LIKE中要查询特殊字符“%”、“\_”、“\\”的时候需要使用反斜杠“\\”来进行转义。

-   **START WITH子句**

    START WITH子句通常与CONNECT BY子句同时出现，数据进行层次递归遍历查询，START WITH代表递归的初始条件。若省略该子句，单独使用CONNECT BY子句，则表示以表中的所有行作为初始集合。

-   **CONNECT BY子句**

    CONNECT BY代表递归连接条件，和START WITH一起子句一起使用，实现数据遍历递归的功能。
    ```
    openGauss=# create table test(name varchar, id int, fatherid int);
    openGauss=# insert into test values('A', 1, 0), ('B', 2, 1), ('C', 3, 1), ('D', 4, 1), ('E', 5, 2);
    select * from test start with id = 1 connect by prior id = fatherid order siblings by id desc;
    name | id | fatherid
    ------+----+----------
    A    |  1 |        0
    D    |  4 |        1
    C    |  3 |        1
    B    |  2 |        1
    E    |  5 |        2
    (5 rows)
    ```
    CONNECT BY代表递归连接条件，CONNECT BY条件中可以对列指定PRIOR关键字代表以这列为递归键进行递归。当前约束只能对表中的列指定PRIOR，不支持对表达式、类型转换指定PRIOR关键字。若在递归连接条件前加NOCYCLE，则表示遇到循环记录时停止递归。（注：含START WITH .. CONNECT BY子句的SELECT语句不支持使用FOR KEY SHARE/SHARE/NO KEY UPDATE/UPDATE锁）。

    Start with语句的执行流程是：
    1. 由 start with 区域的条件选择初始的数据集。上述例子里，先把 ('A', 1, 0) 选择出来。然后把初始的数据集设置为工作集。
    2. 只要工作集不为空，会用工作集的数据作为输入，查询下一轮的数据，过滤条件有 conntect by 区域指定。其中，PRIOR关键字表示当前记录，比如上位例子中 prior id = fatherid 表示当前记录的 id 是下一条记录的 fatherid。
    3. 把2中筛选出来的数据集，设为工作集，返回第二步重复操作。
  
    同时，数据库为每一条选出来的数据添加下述的伪列，方便用户了解数据在递归或者树状结构中的位置。
    - LEVEL：节点的层级
    - CONNECT_BY_ISLEAF：是否为叶子结点
    
    除了伪列外，还提供下述的查询函数
    - sys_connect)by_path(col, separtor)：返回从根节点到当前行的连接路径。参数col为路径中显示的列的名称，separator为连接符。
    - connect_by_root(col)：显示该节点最顶级的节点，col为输出列的名称。

    当前Start with默认行为是宽度优先搜索，但可以通过和伪列配合，实现深度优先搜索。比如：
    ```
    openGauss=# select sys_connect_by_path(name,'-') as path,*,LEVEL from test start with id = 1 connect by fatherid=prior id order by path;
      path  | name | id | fatherid | level
    --------+------+----+----------+-------
    -A     | A    |  1 |        0 |     1
    -A-B   | B    |  2 |        1 |     2
    -A-B-E | E    |  5 |        2 |     3
    -A-C   | C    |  3 |        1 |     2
    -A-D   | D    |  4 |        1 |     2
    (5 rows)
    ```

-   **ORDER SIBLINGS BY子句**

    ORDER SIBLINGS BY通常和START WITH、CONNECT BY子句同时使用, 用法和ORDER BY子句一样, 用于在递归过程中的层级排序。当前不支持接函数调用，如果有函数调用，且函数参数中存在列，则取第一个列作为排序键排序。

-   **GROUP BY子句**

    将查询结果按某一列或多列的值分组，值相等的为一组。

    -   GROUPING SETS \( grouping\_element \[, ...\] \)

        GROUPING SETS子句是GROUP BY子句的进一步扩展，它可以使用户指定多个GROUP BY选项。 这样做可以通过裁剪用户不需要的数据组来提高效率。 当用户指定了所需的数据组时，数据库不需要执行完整CUBE或ROLLUP生成的聚合集合。

    -   CUBE \( \{ expression | \( expression \[, ...\] \) \} \[, ...\] \)

        CUBE是自动对group by子句中列出的字段进行分组汇总，结果集将包含维度列中各值的所有可能组合，以及与这些维度值组合相匹配的基础行中的聚合值。它会为每个分组返回一行汇总信息， 用户可以使用CUBE来产生交叉表值。比如，在CUBE子句中给出三个表达式（n = 3），运算结果为2<sup>n</sup>  = 2<sup>3</sup>  = 8组。 以n个表达式的值分组的行称为常规行，其余的行称为超级聚集行。例如：

        CUBE (c1,c2,c3)
        等效于
        ```
        GROUPING SETS (
          (c1, c2, c3),
          (c1, c2),
          (c2, c3),
          (c1, c3),
          (c1),
          (c2),
          (c3),
          ()
        )
        ```

    -   ROLLUP \( \{ expression | \( expression \[, ...\] \) \} \[, ...\] \)
        
        ROLLUP是生成多个分组集合的快捷功能。与CUBE子句的差异是，ROLLUP不生成基于特定列所有可能的分组集合，生成分组集合为其子集。ROLLUP假设输入列之间存在层次结构，从而生成有意义的所有分组集合。例如：

        ROLLUP(c1,c2,c3)仅生成4种分组集合，等效于：
        ```
        GROUPING SETS (
          (c1, c2, c3),
          (c1, c2),
          (c1),
          (),
        )
        ```
    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >
    > - 如果SELECT列表的表达式中引用了那些没有分组的字段，则会报错，除非使用了聚集函数或者它函数依赖于分组的字段，因为对于未分组的字段，可能返回多个数值。如果分组的字段是包含非分组字段的表的主键（或者主键的子集），则存在函数依赖。
    > - 如果任何GROUPING SETS、ROLLUP、CUBE作为分组字段存在，则GROUP BY子句整体上定义了数个独立的分组集。其效果等效于在子查询间构建一个UNION ALL，子查询带有分组集作为它们的GROUP BY子句。
    > - 当前，FOR UPDATE、FOR SHARE、FOR NO KEY UPDATE、FOR KEY SHARE不能和GROUP BY子句一起指定。

-   **HAVING子句**

    与GROUP BY子句配合用来选择特殊的组。HAVING子句将组的一些属性与一个常数值比较，只有满足HAVING子句中的逻辑表达式的组才会被提取出来。
    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >
    >当前，FOR UPDATE、FOR SHARE、FOR NO KEY UPDATE、FOR KEY SHARE不能和HAVING子句一起指定。

- **WINDOW子句**

  一般形式为WINDOW window\_name AS \( window\_definition \) \[， ...\]，window\_name是可以被随后的窗口定义所引用的名称，window\_definition可以是以下的形式：

  ```
  [ existing_window_name ]
  
  [ PARTITION BY expression [, ...] ]
  
  [ ORDER BY expression [ ASC | DESC | USING operator ] [ NULLS { FIRST | LAST } ] [, ...] ]
  
  [ frame_clause ]
  ```

  frame\_clause为窗函数定义一个窗口帧window frame，窗函数（并非所有）依赖于帧，window frame是当前查询行的一组相关行。frame\_clause可以是以下的形式：

  ```
  [ RANGE | ROWS ] frame_start
  
  [ RANGE | ROWS ] BETWEEN frame_start AND frame_end
  ```
  
  frame_start和frame_end可以是：

  ```
  UNBOUNDED PRECEDING     //分区第一行开始的帧
  
  value PRECEDING         //当前行前value行开始或结束的帧
  
  CURRENT ROW             //当前行开始或结束的帧
  
  value FOLLOWING         //当前行后value行开始或结束的帧
  
  UNBOUNDED FOLLOWING     //分区最后一行结束的帧
  ```
  - frame_start缺省为UNBOUNDED PRECEDING，frame_end缺省为CURRENT ROW
  - frame_end的取值在上面列出的顺序中必须晚于frame_start的取值
  - value不可为负数或空，可以为0

  >![](public_sys-resources/icon-notice.gif) **须知：** 
  >
  >对列存表的查询目前只支持row\_number窗口函数，不支持frame\_clause。

  WINDOW子句可指定窗口函数的行为，在处理窗口定义相同的窗口函数时，使用WINDOW子句，在OVER中引用，能使SQL语句更简单，例如：
  ```
  openGauss=# SELECT sum(count) OVER w, avg(count) OVER w
    FROM table_count
    WINDOW w AS (PARTITION BY name ORDER BY count DESC);
  ```

-   **UNION子句**

    UNION计算多个SELECT语句返回行集合的并集。

    UNION子句有如下约束条件：

    -   除非声明了ALL子句，否则缺省的UNION结果不包含重复的行。
    -   同一个SELECT语句中的多个UNION操作符是从左向右计算的，除非用圆括弧进行了标识。
    -   FOR UPDATE，FOR NO KEY UPDATE，FOR SHARE和FOR KEY SHARE不能在UNION的结果或输入中声明。

    一般表达式：

    select\_statement UNION \[ALL\] select\_statement

    -   select\_statement可以是任何没有ORDER BY、LIMIT、FOR UPDATE，FOR NO KEY UPDATE，FOR SHARE或FOR KEY SHARE子句的SELECT语句。
    -   如果用圆括弧包围，ORDER BY和LIMIT可以附着在子表达式里。

-   **INTERSECT子句**

    INTERSECT计算多个SELECT语句返回行集合的交集，不含重复的记录。

    INTERSECT子句有如下约束条件：

    -   同一个SELECT语句中的多个INTERSECT操作符是从左向右计算的，除非用圆括弧进行了标识。
    -   当对多个SELECT语句的执行结果进行UNION和INTERSECT操作的时候，会优先处理INTERSECT。

    一般形式：

    select\_statement INTERSECT select\_statement

    select\_statement可以是任何没有FOR UPDATE，FOR NO KEY UPDATE，FOR SHARE或FOR KEY SHARE子句的SELECT语句。

-   **EXCEPT子句**

    EXCEPT子句有如下的通用形式：

    select\_statement EXCEPT \[ ALL \] select\_statement

    select\_statement是任何没有FOR UPDATE，FOR NO KEY UPDATE，FOR SHARE或FOR KEY SHARE子句的SELECT表达式。

    EXCEPT操作符计算存在于左边SELECT语句的输出而不存在于右边SELECT语句输出的行。

    EXCEPT的结果不包含任何重复的行，除非声明了ALL选项。使用ALL时，一个在左边表中有m个重复而在右边表中有n个重复的行将在结果中出现max\(m-n,0\) 次。

    除非用圆括弧指明顺序，否则同一个SELECT语句中的多个EXCEPT操作符是从左向右计算的。EXCEPT和UNION的绑定级别相同。

    目前，不能给EXCEPT的结果或者任何EXCEPT的输入声明FOR UPDATE，FOR NO KEY UPDATE，FOR SHARE和FOR KEY SHARE子句。

-   **MINUS子句**

    与EXCEPT子句具有相同的功能和用法。

- **ORDER BY子句**

  对SELECT语句检索得到的数据进行升序或降序排序。对于ORDER BY表达式中包含多列的情况：

  - 首先根据最左边的列进行排序，如果这一列的值相同，则根据下一个表达式进行比较，依此类推。

  - 如果对于所有声明的表达式都相同，则按随机顺序返回。

  - 在与DISTINCT关键字一起使用的情况下，ORDER BY中排序的列必须包括在SELECT语句所检索的结果集的列中。
    >![](public_sys-resources/icon-notice.gif) **例外：**
    >
    > 在兼容B模式下，ORDER BY 可以支持表达式，其中引用的列必须在 DISTINCT 中。
    >
    > 在兼容B模式下，以下两种方式可以让 ORDER BY 引用的列不必在 DISTINCT 中：
    >
    > - DOLPHIN 插件存在时，dolphin.sql_mode 参数未设置 sql_mode_full_group 选项。
    >
    > - DOLPHIN 插件不存在时，behavior_compat_options 参数设置 allow_orderby_undistinct_column 选项。
    >
    > 注意：本例外只支持DISTINCT语法，不支持DISTINCT ON语法。

  - 在与GROUP BY子句一起使用的情况下，ORDER BY中排序的列必须包括在SELECT语句所检索的结果集的列中。

  - 在与GROUP BY子句一起使用的情况下，ORDER BY中排序的列必须包括在SELECT语句所检索的结果集的列中。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >如果要支持中文拼音排序，需要在初始化数据库时指定编码格式为UTF-8、GB18030或GBK。命令如下:
    >
    >```
    >initdb –E UTF8 –D ../data –locale=zh_CN.UTF-8、initdb -E GB18030 -D ../data -locale=zh_CN.GB18030或initdb –E GBK –D ../data –locale=zh_CN.GBK。
    >```

- **LIMIT子句**

  LIMIT子句由两个独立的子句组成：

  LIMIT \{ count | ALL \}

  OFFSET start count声明返回的最大行数，而start声明开始返回行之前忽略的行数。如果两个都指定了，会在开始计算count个返回行之前先跳过start行。

-   **OFFSET子句**

    SQL：2008开始提出一种不同的语法：

    OFFSET start \{ ROW | ROWS \}

    start声明开始返回行之前忽略的行数。

-   **FETCH \{ FIRST | NEXT \} \[ count \] \{ ROW | ROWS \} ONLY**

    如果不指定count，默认值为1，FETCH子句限定返回查询结果从第一行开始的总行数。

-   **锁定子句**

    FOR UPDATE子句将对SELECT检索出来的行进行加锁。这样避免它们在当前事务结束前被其他事务修改或者删除，即其他企图UPDATE、 DELETE、 SELECT FOR UPDATE、SELECT FOR NO KEY UPDATE, SELECT FOR SHARE 或 SELECT FOR KEY SHARE这些行的事务将被阻塞，直到当前事务结束。任何在一行上的DELETE命令也会获得FOR UPDATE锁模式，在非主键列上修改值的UPDATE也会获得该锁模式。反过来，SELECT FOR UPDATE将等待已经在相同行上运行以上这些命令的并发事务，并且接着锁定并且返回被更新的行（或者没有行，因为行可能已被删除）。

    FOR NO KEY UPDATE行为与FOR UPDATE类似，不过获得的锁较弱：这种锁将不会阻塞尝试在相同行上获得锁的SELECT FOR KEY SHARE命令。任何不获取FOR UPDATE锁的UPDATE也会获得这种锁模式。

    FOR SHARE的行为类似，只是它在每个检索出来的行上要求一个共享锁，而不是一个排他锁。一个共享锁阻塞其它事务执行UPDATE、DELETE、SELECT FOR UPDATE或者SELECT FOR NO KEY UPDATE，不阻塞SELECT FOR SHARE或者SELECT FOR KEY SHARE。

    FOR KEY SHARE行为与FOR SHARE类似，不过锁较弱：SELECT FOR UPDATE会被阻塞，但是SELECT FOR NO KEY UPDATE不会被阻塞。一个键共享锁会阻塞其他事务执行修改键值的DELETE或者UPDATE，但不会阻塞其他UPDATE，也不会阻止SELECT FOR NO KEY UPDATE、SELECT FOR SHARE或者SELECT FOR KEY SHARE。

    为了避免操作等待其他事务提交，可使用NOWAIT选项，如果被选择的行不能立即被锁住，将会立即汇报一个错误，而不是等待。

    如果在锁定子句中明确指定了表名称，则只有这些指定的表被锁定，其他在SELECT中使用的表将不会被锁定。否则，将锁定该命令中所有使用的表。

    如果锁定子句应用于一个视图或者子查询，它同样将锁定所有该视图或子查询中使用到的表。

    多个锁定子句可以用于为不同的表指定不同的锁定模式。

    如果一个表中同时出现（或隐含同时出现）在多个子句中，则按照最强的锁处理。类似的，如果影响一个表的任意子句中出现了NOWAIT，该表将按照NOWAIT处理。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >对列存表的查询不支持for update/share。

-   **NLS\_SORT**

    指定某字段按照特殊方式排序。目前仅支持中文拼音格式排序和不区分大小写排序。如果要支持此排序方式，在创建数据库时需要指定编码格式为“UTF8”、”GB18030”或“GBK”；如果指定为其他编码，例如SQL\_ASCII，则可能报错或者排序无效。
    
    取值范围：
    
    -   SCHINESE\_PINYIN\_M，按照中文拼音排序。
    -   generic\_m\_ci，不区分大小写排序（可选，仅支持纯英文不区分大小写排序）。
    
-   **PARTITION子句**

    查询某个分区表中相应分区的数据。


## 示例<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_sc1b5e63c90c946b89430696c38fc86c0"></a>

```
--先通过子查询得到一张临时表temp_t，然后查询表temp_t中的所有数据。
openGauss=# WITH temp_t(name,isdba) AS (SELECT usename,usesuper FROM pg_user) SELECT * FROM temp_t;

--创建多级菜单表
openGauss=# CREATE TABLE exp_menu (
  id int,
  name text,
  parent_id int
);

--插入数据
openGauss=# INSERT INTO exp_menu VALUES (1, 'grandpa', 0),(2, 'father', 1),(3, 'son', 2);

--使用 WITH RECURSIVE 递归查询菜单关系
openGauss=# WITH RECURSIVE res AS (
    SELECT id, name, parent_id
    FROM exp_menu 
    WHERE id = 3
    UNION
    SELECT m.id,
           m.name || ' > ' || r.name,
           m.parent_id
    FROM res r INNER JOIN exp_menu m ON m.id = r.parent_id
)
select * from res;
 id |          name          | parent_id
----+------------------------+-----------
  3 | son                    |         2
  2 | father > son           |         1
  1 | grandpa > father > son |         0
(3 rows)

--查询tpcds.reason表的所有r_reason_sk记录，且去除重复。
openGauss=# SELECT DISTINCT(r_reason_sk) FROM tpcds.reason;

--LIMIT子句示例：获取表中一条记录。
openGauss=# SELECT * FROM tpcds.reason LIMIT 1;

--查询所有记录，且按字母升序排列。
openGauss=# SELECT r_reason_desc FROM tpcds.reason ORDER BY r_reason_desc;

--通过表别名，从pg_user和pg_user_status这两张表中获取数据。
openGauss=# SELECT a.usename,b.locktime FROM pg_user a,pg_user_status b WHERE a.usesysid=b.roloid;

--FULL JOIN子句示例：将pg_user和pg_user_status这两张表的数据进行全连接显示，即数据的合集。
openGauss=# SELECT a.usename,b.locktime,a.usesuper FROM pg_user a FULL JOIN pg_user_status b on a.usesysid=b.roloid;

--GROUP BY子句示例：根据查询条件过滤，并对结果进行分组。
openGauss=# SELECT r_reason_id, AVG(r_reason_sk) FROM tpcds.reason GROUP BY r_reason_id HAVING AVG(r_reason_sk) > 25;

--GROUP BY CUBE子句示例：根据查询条件过滤，并对结果进行分组汇总。
openGauss=# SELECT r_reason_id,AVG(r_reason_sk) FROM tpcds.reason GROUP BY CUBE(r_reason_id,r_reason_sk);

--GROUP BY GROUPING SETS子句示例:根据查询条件过滤，并对结果进行分组汇总。
openGauss=# SELECT r_reason_id,AVG(r_reason_sk) FROM tpcds.reason GROUP BY GROUPING SETS((r_reason_id,r_reason_sk),r_reason_sk);

--UNION子句示例：将表tpcds.reason里r_reason_desc字段中的内容以W开头和以N开头的进行合并。
openGauss=# SELECT r_reason_sk, tpcds.reason.r_reason_desc
    FROM tpcds.reason
    WHERE tpcds.reason.r_reason_desc LIKE 'W%'
UNION
SELECT r_reason_sk, tpcds.reason.r_reason_desc
    FROM tpcds.reason
    WHERE tpcds.reason.r_reason_desc LIKE 'N%';

--NLS_SORT子句示例：中文拼音排序。
openGauss=# SELECT * FROM tpcds.reason ORDER BY NLSSORT( r_reason_desc, 'NLS_SORT = SCHINESE_PINYIN_M');


--不区分大小写排序（可选，仅支持纯英文不区分大小写排序）:
openGauss=# SELECT * FROM tpcds.reason ORDER BY NLSSORT( r_reason_desc, 'NLS_SORT = generic_m_ci');

--创建分区表tpcds.reason_p
openGauss=# CREATE TABLE tpcds.reason_p
(
  r_reason_sk integer,
  r_reason_id character(16),
  r_reason_desc character(100)
)
PARTITION BY RANGE (r_reason_sk)
(
  partition P_05_BEFORE values less than (05),
  partition P_15 values less than (15),
  partition P_25 values less than (25),
  partition P_35 values less than (35),
  partition P_45_AFTER values less than (MAXVALUE)
)
;

--插入数据。
openGauss=# INSERT INTO tpcds.reason_p values(3,'AAAAAAAABAAAAAAA','reason 1'),(10,'AAAAAAAABAAAAAAA','reason 2'),(4,'AAAAAAAABAAAAAAA','reason 3'),(10,'AAAAAAAABAAAAAAA','reason 4'),(10,'AAAAAAAABAAAAAAA','reason 5'),(20,'AAAAAAAACAAAAAAA','reason 6'),(30,'AAAAAAAACAAAAAAA','reason 7');

--PARTITION子句示例：从tpcds.reason_p的表分区P_05_BEFORE中获取数据。
openGauss=#  SELECT * FROM tpcds.reason_p PARTITION (P_05_BEFORE);
 r_reason_sk |   r_reason_id    |   r_reason_desc                   
-------------+------------------+------------------------------------
           4 | AAAAAAAABAAAAAAA | reason 3                          
           3 | AAAAAAAABAAAAAAA | reason 1                          
(2 rows)

--GROUP BY子句示例：按r_reason_id分组统计tpcds.reason_p表中的记录数。
openGauss=# SELECT COUNT(*),r_reason_id FROM tpcds.reason_p GROUP BY r_reason_id;
 count |   r_reason_id    
-------+------------------
     2 | AAAAAAAACAAAAAAA
     5 | AAAAAAAABAAAAAAA
(2 rows)

--GROUP BY CUBE子句示例：根据查询条件过滤，并对查询结果分组汇总。
openGauss=# SELECT * FROM tpcds.reason GROUP BY  CUBE (r_reason_id,r_reason_sk,r_reason_desc);

--GROUP BY GROUPING SETS子句示例：根据查询条件过滤，并对查询结果分组汇总。
openGauss=# SELECT * FROM tpcds.reason GROUP BY  GROUPING SETS ((r_reason_id,r_reason_sk),r_reason_desc);

--HAVING子句示例：按r_reason_id分组统计tpcds.reason_p表中的记录，并只显示r_reason_id个数大于2的信息。
openGauss=# SELECT COUNT(*) c,r_reason_id FROM tpcds.reason_p GROUP BY r_reason_id HAVING c>2;
 c |   r_reason_id    
---+------------------
 5 | AAAAAAAABAAAAAAA
(1 row)

--IN子句示例：按r_reason_id分组统计tpcds.reason_p表中的r_reason_id个数，并只显示r_reason_id值为 AAAAAAAABAAAAAAA或AAAAAAAADAAAAAAA的个数。
openGauss=# SELECT COUNT(*),r_reason_id FROM tpcds.reason_p GROUP BY r_reason_id HAVING r_reason_id IN('AAAAAAAABAAAAAAA','AAAAAAAADAAAAAAA'); 
count |   r_reason_id    
-------+------------------
     5 | AAAAAAAABAAAAAAA
(1 row)

--INTERSECT子句示例：查询r_reason_id等于AAAAAAAABAAAAAAA，并且r_reason_sk小于5的信息。
openGauss=# SELECT * FROM tpcds.reason_p WHERE r_reason_id='AAAAAAAABAAAAAAA' INTERSECT SELECT * FROM tpcds.reason_p WHERE r_reason_sk<5;
 r_reason_sk |   r_reason_id    |     r_reason_desc                 
-------------+------------------+------------------------------------
           4 | AAAAAAAABAAAAAAA | reason 3                           
           3 | AAAAAAAABAAAAAAA | reason 1                           
(2 rows)

--EXCEPT子句示例：查询r_reason_id等于AAAAAAAABAAAAAAA，并且去除r_reason_sk小于4的信息。
openGauss=# SELECT * FROM tpcds.reason_p WHERE r_reason_id='AAAAAAAABAAAAAAA' EXCEPT SELECT * FROM tpcds.reason_p WHERE r_reason_sk<4;
r_reason_sk |   r_reason_id    |      r_reason_desc                  
-------------+------------------+------------------------------------
          10 | AAAAAAAABAAAAAAA | reason 2                          
          10 | AAAAAAAABAAAAAAA | reason 5                          
          10 | AAAAAAAABAAAAAAA | reason 4                          
           4 | AAAAAAAABAAAAAAA | reason 3                          
(4 rows)

--通过在where子句中指定"(+)"来实现左连接。
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where t1.sr_customer_sk  = t2.c_customer_sk(+) 
order by 1 desc limit 1;
 sr_item_sk | c_customer_id
------------+---------------
      18000 |
(1 row)

--通过在where子句中指定"(+)"来实现右连接。
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where t1.sr_customer_sk(+)  = t2.c_customer_sk 
order by 1 desc limit 1;
 sr_item_sk |  c_customer_id
------------+------------------
            | AAAAAAAAJNGEBAAA
(1 row)

--通过在where子句中指定"(+)"来实现左连接，并且增加连接条件。
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where t1.sr_customer_sk  = t2.c_customer_sk(+) and t2.c_customer_sk(+) < 1 order by 1  limit 1;
 sr_item_sk | c_customer_id
------------+---------------
          1 |
(1 row)

--不支持在where子句中指定"(+)"的同时使用内层嵌套AND/OR的表达式。
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where not(t1.sr_customer_sk  = t2.c_customer_sk(+) and t2.c_customer_sk(+) < 1);
ERROR:  Operator "(+)" can not be used in nesting expression.
LINE 1: ...tomer_id from store_returns t1, customer t2 where not(t1.sr_...
                                                             ^
--where子句在不支持表达式宏指定"(+)"会报错。
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where (t1.sr_customer_sk  = t2.c_customer_sk(+))::bool;
ERROR:  Operator "(+)" can only be used in common expression.

--where子句在表达式的两边都指定"(+)"会报错。
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where t1.sr_customer_sk(+)  = t2.c_customer_sk(+);
ERROR:  Operator "(+)" can't be specified on more than one relation in one join condition
HINT:  "t1", "t2"...are specified Operator "(+)" in one condition.

--删除表。
openGauss=# DROP TABLE tpcds.reason_p;

--闪回查询示例
--创建表tpcds.time_table
openGauss=#  create table tpcds.time_table(idx integer, snaptime timestamp, snapcsn bigint, timeDesc character(100));
--向表tpcds.time_table中插入记录
openGauss=#  INSERT INTO tpcds.time_table select 1, now(),int8in(xidout(next_csn)), 'time1' from gs_get_next_xid_csn();
openGauss=#  INSERT INTO tpcds.time_table select 2, now(),int8in(xidout(next_csn)), 'time2' from gs_get_next_xid_csn();
openGauss=#  INSERT INTO tpcds.time_table select 3, now(),int8in(xidout(next_csn)), 'time3' from gs_get_next_xid_csn();
openGauss=#  INSERT INTO tpcds.time_table select 4, now(),int8in(xidout(next_csn)), 'time4' from gs_get_next_xid_csn();
openGauss=#  select * from tpcds.time_table;

 idx |          snaptime          | snapcsn |                                               timedesc
-----+----------------------------+---------+------------------------------------------------------------------------------------------------------
   1 | 2021-04-25 17:50:05.360326 |  107322 | time1
   2 | 2021-04-25 17:50:10.886848 |  107324 | time2
   3 | 2021-04-25 17:50:16.12921  |  107327 | time3
   4 | 2021-04-25 17:50:22.311176 |  107330 | time4
(4 rows)
openGauss=#  delete tpcds.time_table;
DELETE 4
openGauss=#  SELECT * FROM tpcds.time_table TIMECAPSULE TIMESTAMP to_timestamp('2021-04-25 17:50:22.311176','YYYY-MM-DD HH24:MI:SS.FF');
 idx |          snaptime          | snapcsn |                                               timedesc
-----+----------------------------+---------+------------------------------------------------------------------------------------------------------
   1 | 2021-04-25 17:50:05.360326 |  107322 | time1
   2 | 2021-04-25 17:50:10.886848 |  107324 | time2
   3 | 2021-04-25 17:50:16.12921  |  107327 | time3
(3 rows)
openGauss=#  SELECT * FROM tpcds.time_table TIMECAPSULE CSN 107330;
 idx |          snaptime          | snapcsn |                                               timedesc
-----+----------------------------+---------+------------------------------------------------------------------------------------------------------
   1 | 2021-04-25 17:50:05.360326 |  107322 | time1
   2 | 2021-04-25 17:50:10.886848 |  107324 | time2
   3 | 2021-04-25 17:50:16.12921  |  107327 | time3
(3 rows)
```

- ORDER BY子句的列不在DISTINCT子句中的示例（兼容B模式下）：
```sql
-- 创建B库并切换
CREATE DATABASE mydb_b WITH DBCOMPATIBILITY 'B';
\c mydb_b

-- ORDER BY列不在DISTINCT中的示例：根据c2列进行去重，按c1列进行排序，只输出c2列
CREATE TABLE my_tbl(score INT, name VARCHAR(20));
INSERT INTO my_tbl VALUES (100, 'alice'), (90, 'john'), (99, 'bob'), (80, 'bob');

-- 允许ORDER BY后面的列不在DISTINCT里
-- 无dolphin插件时执行：（增加 allow_orderby_undistinct_column 选项即可）
SET behavior_compat_options = 'allow_orderby_undistinct_column';
-- 有dolphin插件时执行：(将 sql_mode_full_group 选项删除即可)
set dolphin.sql_mode = '';
-- 注意：openGauss只会将去重后的数据，根据ORDER BY后的列进行排序。并不会先排序再去重，也就是无法保证重复行被去除的是哪一行，
-- 所以当去重列与排序列的数据值没有一一对应时，可能会由于数据的插入顺序、数据量等不一致而导致最终输出结果不一样。
SELECT DISTINCT name FROM my_tbl ORDER BY score;
```
