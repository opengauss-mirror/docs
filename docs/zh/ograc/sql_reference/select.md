# 数据查询 SELECT

SELECT 操作是只读的，不会修改数据库中的任何数据，但能以各种方式组合和转换数据，为报表生成、数据分析和应用程序查询提供基础。

## 基础语法

```sql
SELECT [DISTINCT] column1, column2, ... | [*] | expression
FROM TABLE_NAME | VIEW_NAME | SUBQUERY
[WHERE condition]
[ [ START WITH condition ] CONNECT BY [NOCYCLE] condition [ ORDER SIBLINGS BY expression ] ]
[GROUP BY {cube | rollup} column_list] 
[HAVING condition]
[ { UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select ]
[ORDER BY column_list | expression [ASC|DESC]] 
[LIMIT offset, count]
[ {FOR { UPDATE | NO KEY UPDATE | SHARE | KEY SHARE } [ OF table_name [, ...] ] [ NOWAIT | WAIT N]} [...] ];
```

以下示例均基于表

```sql
CREATE TABLE employees (
    employee_id NUMBER PRIMARY KEY,
    name VARCHAR2(20) NOT NULL,
    manager_id NUMBER,
    department_id NUMBER,
    job_title VARCHAR2(20),
    salary NUMBER,
    hire_date DATE
);
INSERT INTO employees VALUES (1, 'CEO', NULL, 10, 'CEO', 150000, SYSDATE);
INSERT INTO employees VALUES (2, 'Manager1', 1, 10, 'Manager', 100000, SYSDATE);
INSERT INTO employees VALUES (3, 'Manager2', 1, 20, 'Manager', 95000, SYSDATE);
INSERT INTO employees VALUES (4, 'Developer1', 2, 10, 'Developer', 85000, SYSDATE);
INSERT INTO employees VALUES (5, 'Developer2', 2, 10, 'Developer', 80000, SYSDATE);
COMMIT;
```

- [DISTINCT]: (可选) 用于从查询结果中移除重复行。
    - DISTINCT与ORDER BY一同使用时，ORDER BY中排序的列必须包括在SELECT语句所检索的结果集的列中。

    ```sql
    SQL> SELECT DISTINCT department_id, job_title FROM employees ORDER BY department_id, job_title;

    DEPARTMENT_ID                            JOB_TITLE           
    ---------------------------------------- --------------------
    10                                       CEO                 
    10                                       Developer           
    10                                       Manager             
    20                                       Manager             

    4 rows fetched.
    ```

- column1, column2, ... | [*] | expression: 指定要查询的结果。
    - [*] 可以使用星号* 表示查询所有列。
    - expression 可以是常量、表达式、函数调用等。

    ```sql
    SELECT * FROM employees;
    SELECT department_id, job_title FROM employees;

    SQL> SELECT department_id + 100, UPPER(job_title) FROM employees WHERE department_id = 10;

    DEPARTMENT_ID + 100                      UPPER(JOB_TITLE)    
    ---------------------------------------- --------------------
    110                                      CEO                 
    110                                      MANAGER             
    110                                      DEVELOPER           
    110                                      DEVELOPER           

    4 rows fetched.

    ```

- FROM TABLE_NAME | VIEW_NAME | SUBQUERY: 指定要查询的数据源表, 可以是表、视图或子查询。

    ```sql
    SQL> CREATE OR REPLACE VIEW employee_view AS SELECT * FROM employees WHERE department_id = 10;

    Succeed.

    SQL> SELECT department_id, name FROM employee_view WHERE job_title = 'Manager';

    DEPARTMENT_ID                            NAME                
    ---------------------------------------- --------------------
    10                                       Manager1            

    1 rows fetched.

    SQL> SELECT department_id, name FROM (SELECT * FROM employees WHERE department_id = 10) WHERE job_title = 'Manager';

    DEPARTMENT_ID                            NAME                
    ---------------------------------------- --------------------
    10                                       Manager1            

    1 rows fetched.
    ```

- [WHERE condition]: (可选) WHERE子句构成一个行选择表达式，用来缩小SELECT查询的范围。condition是返回值为布尔型的任意表达式，任何不满足该条件的行都不会被检索。
    - 常用的条件包括：= 、 <>[!=]、>、<、>=、<=、AND、OR、BETWEEN AND、IN、LIKE [ESCAPE]、IS [NOT] NULL、[NOT] IN、[NOT] EXISTS等

    ```sql
    SELECT * FROM employees WHERE department_id = [!=] | [>] | [<] | [>=] | [<=] 10;
    SELECT * FROM employees WHERE job_title [NOT] LIKE '%Sales\%' ESCAPE '\';
    SELECT * FROM employees WHERE salary [NOT] BETWEEN 5000 AND 10000;
    SELECT * FROM employees WHERE manager_id IS [NOT] NULL;
    SELECT * FROM employees WHERE department_id [NOT] IN (10, 20, 30);
    ```

- [START WITH condition]: (可选) 用于指定递归查询的起始条件。
    - START WITH子句通常与CONNECT BY子句同时出现，数据进行层次递归遍历查询，START WITH代表递归的初始条件。若省略该子句，单独使用CONNECT BY子句，则表示以表中的所有行作为初始集合。
- [CONNECT BY [NOCYCLE] condition]: (可选) 用于指定递归查询的连接条件。
    - CONNECT BY代表递归连接条件，和START WITH一起子句一起使用，实现数据遍历递归的功能。 除此之外，PRIOR关键字还可以用在目标列中，允许用户通过目标列获取上一层的值。
- [ORDER SIBLINGS BY expression]: (可选) 用于对递归查询结果的子行进行排序。
    - ORDER SIBLINGS BY通常和START WITH、CONNECT BY子句同时使用, 用法和ORDER BY子句一样, 用于在递归过程中的层级排序。

    ```sql
    SQL> SELECT LPAD(' ', 2 * LEVEL) || name AS employee_name, department_id
    2 FROM employees
    3 START WITH manager_id IS NULL
    4 CONNECT BY PRIOR employee_id = manager_id
    5 ORDER SIBLINGS BY name;

    EMPLOYEE_NAME                                                    DEPARTMENT_ID                           
    ---------------------------------------------------------------- ----------------------------------------
    CEO                                                              10                                      
        Manager1                                                     10                                      
            Developer1                                               10                                      
            Developer2                                               10                                      
        Manager2                                                     20                                      

    5 rows fetched.
    ```

- [GROUP BY {cube | rollup} column_list]: (可选) 用于对查询结果进行分组。
    - GROUPING SETS ( grouping_element [, ...] ): GROUPING SETS子句是GROUP BY子句的进一步扩展，它可以使用户指定多个GROUP BY选项。 这样做可以通过裁剪用户不需要的数据组来提高效率。

    ```sql
    SQL> SELECT department_id, job_title, SUM(salary) AS total_salary
    2 FROM employees
    3 GROUP BY department_id, job_title
    4 ORDER BY department_id, job_title;

    DEPARTMENT_ID                            JOB_TITLE            TOTAL_SALARY                            
    ---------------------------------------- -------------------- ----------------------------------------
    10                                       CEO                  150000                                  
    10                                       Developer            165000                                  
    10                                       Manager              100000                                  
    20                                       Manager              95000                                   

    4 rows fetched.
    ```

    - CUBE (expression, ...): CUBE是自动对group by子句中列出的字段进行分组汇总，结果集将包含维度列中各值的所有可能组合，以及与这些维度值组合相匹配的基础行中的聚合值。它会为每个分组返回一行汇总信息， 用户可以使用CUBE来产生交叉表值。比如，在CUBE子句中给出三个表达式（n = 3），运算结果为2n = 23 = 8组。 以n个表达式的值分组的行称为常规行，其余的行称为超级聚集行。

    ```sql
    -- GROUP BY CUBE 逻辑等价
    -- CUBE (c1,c2,c3) <--> GROUPING SETS ((c1, c2, c3),(c1, c2),(c2, c3),(c1, c3),(c1),(c2),(c3),())
    SQL> SELECT department_id, job_title, SUM(salary) AS total_salary
    2 FROM employees
    3 GROUP BY CUBE(department_id, job_title)
    4 ORDER BY department_id, job_title;

    DEPARTMENT_ID                            JOB_TITLE            TOTAL_SALARY                            
    ---------------------------------------- -------------------- ----------------------------------------
    10                                       CEO                  150000                                  
    10                                       Developer            165000                                  
    10                                       Manager              100000                                  
    10                                                            415000                                  
    20                                       Manager              95000                                   
    20                                                            95000                                   
                                             CEO                  150000                                  
                                             Developer            165000                                  
                                             Manager              195000                                  
                                                                  510000                                  

    10 rows fetched.
    ```

    - ROLLUP是生成多个分组集合的快捷功能。与CUBE子句的差异是，ROLLUP不生成基于特定列所有可能的分组集合，生成分组集合为其子集。ROLLUP假设输入列之间存在层次结构，从而生成有意义的所有分组集合

    ```sql
    -- GROUP BY ROLLUP 逻辑等价
    -- ROLLUP(c1,c2,c3) <--> GROUPING SETS ((c1, c2, c3),(c1, c2),(c1),())
    SQL> SELECT department_id, job_title, SUM(salary) AS total_salary
    2 FROM employees
    3 GROUP BY ROLLUP(department_id, job_title)
    4 ORDER BY department_id, job_title;

    DEPARTMENT_ID                            JOB_TITLE            TOTAL_SALARY                            
    ---------------------------------------- -------------------- ----------------------------------------
    10                                       CEO                  150000                                  
    10                                       Developer            165000                                  
    10                                       Manager              100000                                  
    10                                                            415000                                  
    20                                       Manager              95000                                   
    20                                                            95000                                   
                                                                  510000                                  

    7 rows fetched.
    ```

    - 如果SELECT列表的表达式中引用了那些没有分组的字段，SQL会报错，除非使用了聚集函数或者它函数依赖于分组的字段，因为对于未分组的字段，可能返回多个数值。
- [HAVING condition]: (可选) 用于对分组后的结果进行筛选。
    - 与GROUP BY子句配合用来选择特殊的组。HAVING子句将组的一些属性与一个常数值比较，只有满足HAVING子句中的逻辑表达式的组才会被提取出来。

    ```sql
    SQL> SELECT department_id, AVG(salary) AS avg_salary
    2 FROM employees
    3 GROUP BY department_id
    4 HAVING AVG(salary) > 85000 -- 分组后筛选
    5 ORDER BY department_id;

    DEPARTMENT_ID                            AVG_SALARY                              
    ---------------------------------------- ----------------------------------------
    10                                       103750                                  
    20                                       95000                                   

    2 rows fetched.
    ```

- [{ UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select]: (可选) 用于多个查询结果集的集合操作，要求子查询两端的列数和数据类型必须一致或兼容。
    - UNION计算多个SELECT语句返回行集合的并集。
        - 除非声明了ALL子句，否则缺省的UNION结果不包含重复的行
        - 同一个SELECT语句中的多个UNION操作符是从左向右计算的，除非用()进行优先级标识

    ```sql
    SELECT employee_id, name, department_id FROM employees WHERE department_id = 10
    UNION [ALL]
    SELECT employee_id, name, department_id FROM employees WHERE department_id = 20 AND job_title = 'Manager';
    ```

    - INTERSECT计算多个SELECT语句返回行集合的交集
        - 除非声明了ALL子句，否则缺省的INTERSECT结果不包含重复的行
        - 同一个SELECT语句中的多个INTERSECT操作符是从左向右计算的，除非用()进行优先级标识
        - 当对多个SELECT语句的执行结果进行UNION和INTERSECT操作的时候，会优先处理INTERSECT

    ```sql
    SELECT employee_id, name, department_id FROM employees WHERE department_id = 10
    INTERSECT [ALL]
    SELECT employee_id, name, department_id FROM employees WHERE department_id = 20 AND job_title = 'Manager';
    ```

    - EXCEPT计算多个SELECT语句返回行集合的差集
        - 除非声明了ALL子句，否则缺省的EXCEPT结果不包含重复的行
        - EXCEPT操作符计算存在于左边SELECT语句的输出而不存在于右边SELECT语句输出的行
        - 使用ALL时，一个在左边表中有m个重复而在右边表中有n个重复的行将在结果中出现max(m-n,0) 次。
        - 同一个SELECT语句中的多个EXCEPT操作符是从左向右计算的，除非用()进行优先级标识
        - EXCEPT和UNION的绑定级别相同

    ```sql
    SELECT employee_id, name, department_id FROM employees WHERE department_id = 10
    EXCEPT [ALL]
    SELECT employee_id, name, department_id FROM employees WHERE department_id = 20 AND job_title = 'Manager';
    ```

    - MINUS计算多个SELECT语句返回行集合的差集, 与EXCEPT操作符功能相同, 但是不能与ALL子句一起使用
- [ORDER BY column_list | expression [ASC|DESC]]: (可选) 用于对查询结果进行排序。
    - 当ORDER BY表达式中包含多列或者表达式时，排序优先级从左到右。
    - 在与DISTINCT关键字一起使用的情况下，ORDER BY中排序的列必须包括在SELECT语句所检索的结果集的列中。
        - ORDER BY 可以支持表达式，其中引用的列必须在 DISTINCT 中
    - 在与GROUP BY子句一起使用的情况下，ORDER BY中排序的列必须包括在SELECT语句所检索的结果集的列中。
- [LIMIT offset, count]: (可选) 用于限制查询结果返回的行数，offset 表示起始位置，count 表示返回的行数。
    - 当LIMIT子句中只指定一个参数时，默认从结果集的第一行开始返回。

    ```sql
    SQL> SELECT employee_id, name, department_id, salary
    2 FROM employees
    3 ORDER BY employee_id
    4 LIMIT 2, 2;  -- 跳过前 2 条，返回接下来的 2 条

    EMPLOYEE_ID                              NAME                 DEPARTMENT_ID                            SALARY                                  
    ---------------------------------------- -------------------- ---------------------------------------- ----------------------------------------
    3                                        Manager2             20                                       95000                                   
    4                                        Developer1           10                                       85000                                   

    2 rows fetched.
    ```

- [FOR UPDATE]: (可选) 用于指定查询时对所查询数据的行进行加锁。

    ```sql
    SELECT employee_id, name, department_id, salary
    FROM employees
    ORDER BY employee_id
    FOR UPDATE;  -- 对查询结果中的每一行加行级锁
    ```

## JOIN 语法

JOIN 是 SQL 中用于将多个表连接起来的操作，通过连接条件将不同表中的数据组合在一起，形成有意义的结果集。

基本语法结构

```sql
SELECT column1, column2, ... | expression | function
FROM [Schema.]{table1 | view1 | subquery1} [alias1]
{JOIN TYPE} JOIN [Schema.]{table2 | view2 | subquery2} [alias2] 
    ON alias1.{column | expression | function} = alias2.{column | expression | function}
{JOIN TYPE} JOIN [Schema.]{table3 | view3 | subquery3} [alias3] 
    ON alias2.{column | expression | function} = alias3.{column | expression | function}
···
{JOIN TYPE} JOIN [Schema.]{tableN | viewN | subqueryN} [aliasN] 
    ON alias(N-1).{column | expression | function} = aliasN.{column | expression | function}
[WHERE conditions]
[GROUP BY columns]
[HAVING conditions]
[ORDER BY columns];
```

- {JOIN TYPE}: 用于指定连接类型，包括 [ INNER ] JOIN、LEFT [ OUTER ] JOIN、RIGHT [ OUTER ] JOIN、FULL [ OUTER ] JOIN等。
    - INNER JOIN：返回两个表中连接条件完全匹配的行，即两个表的交集部分。
    - LEFT  [ OUTER ] JOIN：返回左表（FROM 后第一个表）的所有行，即使右表没有匹配的行。右表不匹配的部分用 NULL 填充。
    - RIGHT [ OUTER ] JOIN：返回右表（JOIN 后第二个表）的所有行，即使左表没有匹配的行。左表不匹配的部分用 NULL 填充。
    - FULL [ OUTER ] JOIN：返回左表和右表所有行，不匹配的部分用 NULL 填充。
- aliasN: （可选）用于为表、视图或子查询指定别名，以便在后续的查询中引用。
- alias(N-1).{column | expression | function} = aliasN.{column | expression | function}: 用于指定连接条件，即两个表中用于匹配的结果，可以是列、表达式、函数等。

### [ INNER ] JOIN

- 返回两个表中连接条件完全匹配的行，即两个表的交集部分。
- 使用时可省略INNER，语义相同

```sql
create table t_join_1(a int, b int, c int);
create table t_join_2(a int, b int, c int);
insert into t_join_1 values(1,1,1),(2,2,2),(3,3,3),(4,4,4);
insert into t_join_2 values(1,1,1),(2,2,2),(3,3,3),(5,5,5);

-- 以表t_join_1为左表, 表t_join_2为右表, 以a列和b列进行内连接
SQL> select * from t_join_1 t1 inner join t_join_2 t2 on t1.a = t2.b;

A            B            C            A            B            C           
------------ ------------ ------------ ------------ ------------ ------------
1            1            1            1            1            1           
2            2            2            2            2            2           
3            3            3            3            3            3           

3 rows fetched.
```

### LEFT [ OUTER ] JOIN

- 返回左表（FROM 后, LEFT JOIN 前的第一个表）的所有行，即使右表没有满足连接匹配条件的行。右表不匹配的部分数据用 NULL 值填充。
- 使用时可省略OUTER，语义相同

```sql
-- 以表t_join_1为左表, 表t_join_2为右表, 以a列和b列进行左外连接
SQL> select * from t_join_1 t1 left outer join t_join_2 t2 on t1.a = t2.b;

A            B            C            A            B            C           
------------ ------------ ------------ ------------ ------------ ------------
1            1            1            1            1            1           
2            2            2            2            2            2           
3            3            3            3            3            3           
4            4            4                                                  

4 rows fetched.

```

### RIGHT [ OUTER ] JOIN

- 与 LEFT [ OUTER ] JOIN 语义相反，返回右表（JOIN 后第一个表）的所有行，即使左表没有满足连接匹配条件的行。左表不匹配的部分数据用 NULL 值填充。
- 使用时可省略OUTER，语义相同
- 这只是一个符号上的方便，因为所有的 RIGHT [ OUTER ] JOIN 总是可以把它转换成一个LEFT OUTER JOIN，只要把左边和右边的输入互换位置即可。

```sql
-- 以表t_join_1为左表, 表t_join_2为右表, 以a列和b列进行右外连接

SQL> select * from t_join_1 t1 right outer join t_join_2 t2 on t1.a = t2.b;

A            B            C            A            B            C           
------------ ------------ ------------ ------------ ------------ ------------
1            1            1            1            1            1           
2            2            2            2            2            2           
3            3            3            3            3            3           
                                       5            5            5           

4 rows fetched.

```

### FULL [ OUTER ] JOIN

- 返回所有满足连接条件的结果行，除此之外，加上每个不匹配的左表行（右表用NULL值填充扩展），再加上每个不匹配的右表行（左表用NULL值填充扩展）。
- 使用时可省略OUTER，语义相同

```sql
-- 以表t_join_1为左表, 表t_join_2为右表, 以a列和b列进行全外连接

SQL> select * from t_join_1 t2 full outer join t_join_2 t1 on t2.b = t1.a;

A            B            C            A            B            C           
------------ ------------ ------------ ------------ ------------ ------------
1            1            1            1            1            1           
2            2            2            2            2            2           
3            3            3            3            3            3           
4            4            4                                                  
                                       5            5            5           

5 rows fetched.

```

### CROSS JOIN

- 返回两个表的笛卡尔积（所有可能的行组合），不指定连接条件，即 SQL 语句中没有 ON 子句。
- CROSS JOIN等效于INNER JOIN ON（TRUE） ，即左右两张表的所有的行组合。这种连接类型只是符号上的方便，因为它们与简单的FROM和WHERE的效果相同。
- 最后返回的结果集行数为左表行数乘以右表行数

```sql
-- 以表t_join_1为左表, 表t_join_2为右表, 进行交叉连接

SQL> select * from t_join_1 t1 cross join t_join_2 t2;

A            B            C            A            B            C           
------------ ------------ ------------ ------------ ------------ ------------
1            1            1            1            1            1           
1            1            1            2            2            2           
1            1            1            3            3            3           
1            1            1            5            5            5           
2            2            2            1            1            1           
2            2            2            2            2            2           
2            2            2            3            3            3           
2            2            2            5            5            5           
3            3            3            1            1            1           
3            3            3            2            2            2           
3            3            3            3            3            3           
3            3            3            5            5            5           
4            4            4            1            1            1           
4            4            4            2            2            2           
4            4            4            3            3            3           
4            4            4            5            5            5           

16 rows fetched.

```

## WHERE (+) 语法

OGRAC 支持在 WHERE 子句中可以通过指定 “(+)” 操作符的方法将表的连接关系转换为外连接。该语法并不是SQL的标准语法，在做平台迁移的时候可能面临语法兼容性的问题。同时，使用“(+)”有很多限制：

- “(+)”只能出现在where子句中。如果from子句中已经有指定表连接关系，那么不能再在where子句中使用“(+)”。

```sql
-- 错误示例：在from子句中已经有指定表连接关系，不能再在where子句中使用 "(+)" 会报错

SQL> SELECT * FROM t_join_1 t1 JOIN t_join_2 t2 ON t1.a = t2.a WHERE t1.b = t2.b (+); 

OG-00601, Sql syntax error: the 'join' keyword is not allowed when exist '(+)'

```

- “(+)”只能作用在表或者视图的列上，不能作用在表达式上。

```sql
-- 错误示例：在表达式中使用 "(+)" 会报错

SQL> SELECT * FROM t_join_1 t1, t_join_2 t2 WHERE (t1.a + 1)(+) = t2.a;

OG-00601, [1:57]Sql syntax error: invalid word '(+)' found

SQL> SELECT * FROM t_join_1 t1, t_join_2 t2 WHERE (t1.a + 1) = t2.a(+);

A            B            C            A            B            C           
------------ ------------ ------------ ------------ ------------ ------------
1            1            1            2            2            2           
2            2            2            3            3            3           
3            3            3                                                  
4            4            4            5            5            5           

4 rows fetched.

```

- 如果表A和表B有多个连接条件，那么必须在所有的连接条件中指定“(+)”，否则“(+)”将不会生效，表连接会转化成内连接，并且不给出任何提示信息。

```sql
-- 错误示例：仅在部分条件使用 "(+)" 转换成内连接 无任何报错信息

SQL> SELECT * FROM t_join_1 t1, t_join_2 t2 WHERE t1.a = t2.a (+) AND t1.b = t2.b;

A            B            C            A            B            C           
------------ ------------ ------------ ------------ ------------ ------------
1            1            1            1            1            1           
2            2            2            2            2            2           
3            3            3            3            3            3           

3 rows fetched.

```

- “(+)”作用的表达式不能直接通过“OR”连接。

```sql
-- 错误示例：直接通过 "OR" 连接 "(+)" 表达式会报错
SQL> SELECT * FROM t_join_1 t1, t_join_2 t2 WHERE t1.a = t2.a(+) OR t1.b = t2.b; 

OG-00601, [1:53]Sql syntax error: invalid usage outer join symbol
```

- 如果“(+)”作用的列是和一个常量的比较关系， 那么这个表达式会成为join条件的一部分。

```sql

SQL> SELECT * 
  2 FROM t_join_1, t_join_2 
  3 WHERE t_join_1.a = t_join_2.a (+)  -- 正常连接条件
  4   AND t_join_2.b (+) = 1;          -- (t_join_2.b = 1) 成为连接条件的一部分

A            B            C            A            B            C           
------------ ------------ ------------ ------------ ------------ ------------
1            1            1            1            1            1           
2            2            2                                                  
3            3            3                                                  
4            4            4                                                  

4 rows fetched.

```

- “(+)”只能转化为左外连接或者右外连接，不能转化为全连接，即不能在一个表达式的两个表上同时指定“(+)”。

```sql
-- 错误示例：在一个表达式的两个表上同时指定 "(+)" 会报错
SQL> SELECT * FROM t_join_1 t1, t_join_2 t2 WHERE t1.a = t2.a(+) AND t1.b(+) = t2.b; 

OG-00601, Sql syntax error: failed to generate join tree when using '(+)'
```

## 分区表数据查询

对分区表执行 SELECT 查询时，SQL 语法与普通表基本一致，但可通过特定方式利用分区特性提升性能。

### 基本语法

分区表数据查询的基本语法与普通表查询基本一致，只是在 FROM 子句中可以指定查询的分区或子分区。

```sql
SELECT columns | expression | function
FROM [schema.]table_name [PARTITION (partition_name) | SUBPARTITION (subpartition_name)] [alias1]
[{JOIN TYPE} JOIN [Schema.]{table_name [PARTITION (partition_name) | SUBPARTITION (subpartition_name)] | view | subquery} [alias2]]
[WHERE conditions]
[GROUP BY columns]
[HAVING conditions]
[ORDER BY columns];
```

### 示例

```sql
-- 查询分区表的指定分区数据
SELECT * FROM table_name PARTITION (partition_name) where conditions;

-- 查询分区表特定子分区数据
SELECT * FROM table_name SUBPARTITION (subpartition_name) WHERE conditions;

-- 指定分区的 JOIN 语句 查询表 sales 子分区 p_2024_q3_north 与表 products 关联的记录
SELECT s.sale_id, p.product_name, s.amount FROM sales SUBPARTITION (p_2024_q3_north) s JOIN products p ON s.product_id = p.product_id;
```

## EXPLAIN 语句

EXPLAIN 语句用于显示 SQL 语句的执行计划。通过分析 SQL 语句的 EXPLAIN 信息，可以了解 SQL 语句的执行计划、索引使用情况、索引扫描方式、表JOIN连接方式等信息，从而优化 SQL 语句执行的性能。

### 基本语法

```sql
    EXPLAIN [PLAN FOR] SQL_QUERY;
```

- EXPLAIN [PLAN FOR] ： PLAN FOR 字段可选，与 EXPLAIN 语句功能相同，用于显示 SQL 语句的执行计划。
- SQL_QUERY ： 要分析的 SQL 语句，DML 语句仅满足 SELECT、DELETE、UPDATE，其必须是一个合法的 SQL 语句，满足特定语句的语法规则，否则报错。

### 示例

```sql

SQL> explain select * from t_join_1 t1 left outer join t_join_2 t2 on t1.a = t2.b;

EXPLAIN PLAN OUTPUT                                             
----------------------------------------------------------------
--------------------------------------------------------------------------------------
| Id | Operation               | Owner | Name        | Rows | Cost  | Bytes | Remark |
--------------------------------------------------------------------------------------
| 0  | SELECT STATEMENT        |       |             | 0    | 20000 |       |        |
| 1  |   NESTED LOOPS OUTER    |       |             | 0    | 20000 |       |        |
| 2  |       TABLE ACCESS FULL | SYS   | T_JOIN_1 T1 | 0    | 10000 |       |        |
| 3  |       TABLE ACCESS FULL | SYS   | T_JOIN_2 T2 | 0    | 10000 |       |        |
--------------------------------------------------------------------------------------
Predicate Information (identified by id):                       
-----------------------------------------                       
    3 - filter: T1.A = T2.B                                     

11 rows fetched.

SQL> EXPLAIN PLAN FOR SELECT LPAD(' ', 2 * LEVEL) || name AS employee_name, department_id
  2 FROM employees
  3 START WITH manager_id IS NULL
  4 CONNECT BY PRIOR employee_id = manager_id
  5 ORDER SIBLINGS BY name;

EXPLAIN PLAN OUTPUT                                             
----------------------------------------------------------------
-------------------------------------------------------------------------------------------
| Id | Operation                      | Owner | Name      | Rows | Cost  | Bytes | Remark |
-------------------------------------------------------------------------------------------
| 0  | SELECT STATEMENT               |       |           | 0    | 0     |       |        |
| 1  |   QUERY SORT SIBLINGS ORDER BY |       |           | 0    | 0     |       |        |
| 2  |     START WITH                 |       |           | 0    | 0     |       |        |
| 3  |         TABLE ACCESS FULL      | SYS   | EMPLOYEES | 0    | 10000 |       |        |
| 4  |     CONNECT BY                 |       |           | 0    | 0     |       |        |
| 5  |         TABLE ACCESS FULL      | SYS   | EMPLOYEES | 0    | 10000 |       |        |
-------------------------------------------------------------------------------------------
Predicate Information (identified by id):                       
-----------------------------------------                       
    2 - filter: MANAGER_ID IS NULL                              
    3 - filter: MANAGER_ID IS NULL                              
    4 - filter: PRIOR EMPLOYEE_ID = MANAGER_ID                  

15 rows fetched.
```
