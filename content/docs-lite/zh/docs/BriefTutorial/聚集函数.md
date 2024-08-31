# 聚集函数

-   sum\(expression\)

    描述：所有输入行的expression总和。

    返回类型：

    通常情况下输入数据类型和输出数据类型是相同的，但以下情况会发生类型转换：

    -   对于SMALLINT或INT输入，输出类型为BIGINT。
    -   对于BIGINT输入，输出类型为NUMBER 。
    -   对于浮点数输入，输出类型为DOUBLE PRECISION。

    示例：

    ```
    openGauss=# CREATE TABLE tab(a int); 
    CREATE TABLE 
    openGauss=# INSERT INTO tab values(1); 
    INSERT 0 1 
    openGauss=# INSERT INTO tab values(2); 
    INSERT 0 1 
    openGauss=# SELECT sum(a) FROM tab; 
     sum  
    ----- 
       3 
    (1 row) 
    openGauss=# DROP TABLE tab;
    ```

-   max\(expression\)

    描述：所有输入行中expression的最大值。

    参数类型：任意数组、数值、字符串、日期/时间类型、IPV4和IPV6地址（INET型和CIDR型）。

    返回类型：与参数数据类型相同

    示例：

    ```
    openGauss=# CREATE TABLE max_t1(a int, b int); 
     
    openGauss=# INSERT INTO max_t1 VALUES(1,2),(2,3),(3,4),(4,5); 
     
    openGauss=# SELECT MAX(a) FROM max_t1; 
     max  
    ----- 
       4 
    (1 row) 
     
    openGauss=# DROP TABLE max_t1;
    ```

-   min\(expression\)

    描述：所有输入行中expression的最小值。

    参数类型：任意数组、数值、字符串、日期/时间类型、IPV4和IPV6地址（INET型和CIDR型）。

    返回类型：与参数数据类型相同

    示例：

    ```
    openGauss=# CREATE TABLE min_t1(a int, b int); 
     
    openGauss=# INSERT INTO min_t1 VALUES(1,2),(2,3),(3,4),(4,5); 
     
    openGauss=# SELECT MIN(a) FROM min_t1; 
     min  
    ----- 
       1 
    (1 row) 
     
    openGauss=# DROP TABLE min_t1;
    ```

    注意事项：使用OM安装的数据库，默认的数据库编码为`SQL_ASCII`，min/max函数使用ASCII字符序进行排序，如果需要使用min/max函数通过非ASCII字符集的字符序进行排序，需要在创建数据库或表时指定编码为`UTF8`等非ASCII字符集。

    示例：

    ```
    -- 使用默认字符集
    openGauss=# create database db dbcompatibility 'b';

    openGauss=# \c db

    db=# CREATE TABLE `t` (
    db(#  `c_01` int(11) DEFAULT NULL,
    db(#  `c_02` varchar(20) DEFAULT NULL
    db(# );

    db=# insert into t values(1,'aa'),(2,'bb'),(3,'CC'),(4,'Dd'),(5,null),(null,null),(null,'eihei');

    db=# select c_02 from t order by c_02;
    c_02  
    -------
    
    
    CC
    Dd
    aa
    bb
    eihei
    (7 rows)

    db=# select min(c_02) from t;
    min 
    -----
    CC
    (1 row)

    -- 指定UTF8字符集
    openGauss=# create database db_utf8 dbcompatibility 'b' encoding 'utf8';

    openGauss=# \c db_utf8

    db_utf8=# CREATE TABLE `t` (
    db_utf8(#  `c_01` int(11) DEFAULT NULL,
    db_utf8(#  `c_02` varchar(20) DEFAULT NULL
    db_utf8(# )  DEFAULT CHARSET=utf8mb4;

    db_utf8=# insert into t values(1,'aa'),(2,'bb'),(3,'CC'),(4,'Dd'),(5,null),(null,null),(null,'eihei');

    db_utf8=# select c_02 from t order by c_02;
    c_02  
    -------
    
    
    aa
    bb
    CC
    Dd
    eihei
    (7 rows)

    db_utf8=# select min(c_02) from t;
    min 
    -----
    aa
    (1 row)

    ```

-   avg\(expression\)

    描述：所有输入值的均值（算术平均）。

    返回类型：

    对于任何整数类型输入，结果都是NUMBER类型。

    对于任何浮点输入，结果都是DOUBLE PRECISION类型。

    否则和输入数据类型相同。

    示例：

    ```
    openGauss=# CREATE TABLE avg_t1(a int, b int); 
     
    openGauss=# INSERT INTO avg_t1 VALUES(1,2),(2,3),(3,4),(4,5); 
     
    openGauss=# SELECT AVG(a) FROM avg_t1; 
            avg          
    -------------------- 
     2.5000000000000000 
    (1 row) 
     
    openGauss=# DROP TABLE avg_t1;
    ```

-   count\(expression\)

    描述：返回表中满足expression不为NULL的行数。

    返回类型：BIGINT

    示例：

    ```
    openGauss=# CREATE TABLE count_t1(a int, b int); 
     
    openGauss=# INSERT INTO count_t1 VALUES (NULL,1),(1,2),(2,3),(3,4),(4,5); 
     
    openGauss=# SELECT COUNT(a) FROM count_t1; 
     count  
    ------- 
         4 
    (1 row) 
     
    openGauss=# DROP TABLE count_t1;
    ```

-   count\(\*\)

    描述：返回表中的记录行数。

    返回类型：BIGINT

    示例：

    ```
    openGauss=# CREATE TABLE count_t1(a int, b int); 
     
    openGauss=# INSERT INTO count_t1 VALUES (NULL,1),(1,2),(2,3),(3,4),(4,5); 
     
    openGauss=# SELECT COUNT(*) FROM count_t1; 
     count  
    ------- 
         5 
    (1 row) 
    openGauss=# DROP TABLE count_t1;
    ```

-   delta

    描述：返回当前行和前一行的差值。

    参数：numeric

    返回值类型：numeric

-   mode\(\) within group \(order by value anyelement\)

    描述：返回某列中出现频率最高的值，如果多个值频率相同，则返回最小的那个值。排序方式和该列类型的默认排序方式相同。其中value为输入参数，可以为任意类型。

    返回类型：与输入参数类型相同。

    示例：

    ```
    openGauss=# SELECT mode() WITHIN GROUP (ORDER BY value) FROM (values(1, 'a'), (2, 'b'), (2, 'c')) v(value, tag); 
     mode 
    ------ 
        2 
    (1 row) 
    openGauss=# SELECT mode() WITHIN GROUP (ORDER BY tag) FROM (values(1, 'a'), (2, 'b'), (2, 'c')) v(value, tag); 
     mode 
    ------ 
     a 
    (1 row)
    ```


