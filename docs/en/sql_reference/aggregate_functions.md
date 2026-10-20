---
description: This document describes Aggregate Functions in openGauss, covering topics such as Aggregate Functions.
keywords: [openGauss, Aggregate Functions, SQL]
---

# Aggregate Functions

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T09:48:37.607Z pushedAt=2026-07-30T08:20:15.213Z -->

## Aggregate Functions<a name="zh-cn_topic_0283136894_zh-cn_topic_0237121982_zh-cn_topic_0059778466_s6494488eb2824afa801304697cb740e4"></a>

- sum\(expression\)

    Description: Sum of expression across all input rows.

    Return type:

    Normally, the input data type and output data type are the same, but type conversion occurs in the following cases:

    - For SMALLINT or INT input, the output type is BIGINT.

    - For BIGINT input, the output type is NUMBER.

    - For floating-point input, the output type is DOUBLE PRECISION.

    Example:

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

- max\(expression\)

    Description: Maximum value of expression across all input rows.

    Parameter type: Any array, numeric, string, date/time type, IPv4 and IPv6 addresses (INET and CIDR types).

    Return type: Same as the parameter data type

    Example:

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

- min(expression)

    Description: The minimum value of expression across all input rows.

    Parameter type: Any array, numeric, string, date/time type, and IPV4 and IPV6 addresses (INET and CIDR types).

    Return type: Same as the parameter data type

    Example:

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

    Note: For databases installed using OM, the default database encoding is `SQL_ASCII`. The min/max functions use ASCII collation order for sorting. To use the min/max functions with non-ASCII character set collation for sorting, you need to specify a non-ASCII encoding such as `UTF8` when creating the database or table.

    Example:

    ```
    -- Use the default character set.
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

    -- Specify the UTF8 character set.
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

- avg(expression)

    Description: The average (arithmetic mean) of all input values.

    Return type:

    For any integer type input, the result is of the NUMBER type.

    For any floating-point input, the result is of the DOUBLE PRECISION type.

    Otherwise, it is the same as the input data type.

    Example:

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

- count(expression)

    Description: Returns the number of rows in the table where expression is not NULL.

    Return type: BIGINT

    Example:

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

- count(*)

    Description: Returns the number of rows in the table.

    Return Type: BIGINT

    Example:

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

- median(expression) [over (query partition clause)]

    Description: Returns the median of the expression. NULL values are ignored by the median function during calculation. The DISTINCT keyword can be used to exclude duplicate records in the expression. The data type of the input expression can be a numeric type (including integer, double, bigint, etc.) or an interval type. Other data types are not supported for median calculation.

    Return type: double or interval type

    Example:

    ```
    openGauss=# SELECT median(id) FROM (values(1), (2), (3), (4), (null)) test(id); 
     median 
    -------- 
         2.5 
    (1 row)
    ```

- array_agg(expression)

    Description: Concatenate scalar input values (including NULL) into an array. Concatenate array inputs of the same dimension into an array of one higher dimension. Empty arrays cannot be concatenated; input arrays cannot be entirely NULL (partial NULLs are allowed); arrays of different dimensions cannot be concatenated. The dimension of input arrays must not exceed 5.

    Return type: an array of the parameter type for scalar inputs; an array with the original dimension increased by 1 for array inputs.

    Example:

    ```
    openGauss=# CREATE TABLE array_agg_t1(a int, b int); 
     
    openGauss=# INSERT INTO array_agg_t1 VALUES (NULL,1),(1,2),(2,3),(3,4),(4,5); 
     
    openGauss=# SELECT ARRAY_AGG(a) FROM array_agg_t1; 
       array_agg     
    ---------------- 
     {NULL,1,2,3,4} 
    (1 row) 

    openGauss=# SELECT ARRAY_AGG(ARRAY[i+1.2, i+1.3, i+1.4]) FROM GENERATE_SERIES(1,3) G(i);
                  array_agg                  
    ---------------------------------------------
    {{2.2,2.3,2.4},{3.2,3.3,3.4},{4.2,4.3,4.4}}
    (1 row)
    openGauss=# DROP TABLE array_agg_t1;
    ```

- string_agg(expression, delimiter)

    Description: Concatenates input values into a string, separated by a delimiter.

    Return type: Same as the parameter data type.

    Example:

    ```
    openGauss=# CREATE TABLE string_agg_t1(a int, b int); 
     
    openGauss=# INSERT INTO string_agg_t1 VALUES (NULL,1),(1,2),(2,3),(3,4),(4,5); 
     
    openGauss=# SELECT STRING_AGG(a,';') FROM string_agg_t1; 
     string_agg  
    ------------ 
     1;2;3;4 
    (1 row) 

    openGauss=# DROP TABLE string_agg_t1;
    ```

- listagg(`expression` [, `delimiter`]) WITHIN GROUP(ORDER BY `order-list`)

    Description: Arranges the aggregate column data in the sort order specified by WITHIN GROUP, and concatenates them into a string using the delimiter specified by `delimiter`.

    - `expression`: Required. Specifies the aggregate column name or a valid expression based on the column. The DISTINCT keyword and VARIADIC parameters are not supported.

    - `delimiter`: Optional. Specifies the delimiter, which can be a string constant or a deterministic expression based on the group column. The default value indicates an empty delimiter.

    - `order-list`: Required. Specifies the sort order within the group.

    Return type: text

    Example:

    The aggregate column is of a text character set type.

    ```
    openGauss=# CREATE TABLE listagg_t1(a int, b text); 
     
    openGauss=# INSERT INTO listagg_t1 VALUES (NULL,'a1'),(1,'b2'),(1,'c3'),(2,'d4'),(2,'e5'),(3,'f6'); 
     
    openGauss=# SELECT a,LISTAGG(b,';') WITHIN GROUP(ORDER BY b) FROM listagg_t1 group by a; 
     a | listagg  
    ---+--------- 
     1 | b2;c3 
     2 | d4;e5 
     3 | f6 
       | a1 
    (4 rows) 
     
    openGauss=# DROP TABLE listagg_t1;
    ```

    The aggregate column is of an integer type.

    ```
    openGauss=# CREATE TABLE listagg_t1(a int, b int); 
     
    openGauss=# INSERT INTO listagg_t1 VALUES (NULL,1),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT a,LISTAGG(b,';') WITHIN GROUP(ORDER BY b) FROM listagg_t1 group by a; 
     a | listagg  
    ---+--------- 
     1 | 2;3 
     2 | 4;5 
     3 | 6 
       | 1 
    (4 rows) 
     
    openGauss=# DROP TABLE listagg_t1;
    ```

    The aggregate column is of a floating-point type.

    ```
    openGauss=# CREATE TABLE listagg_t1(a int, b float); 
     
    openGauss=# INSERT INTO listagg_t1 VALUES (NULL,1.111),(1,2.222),(1,3.333),(2,4.444),(2,5.555),(3,6.666); 
     
    openGauss=# SELECT a,LISTAGG(b,';') WITHIN GROUP(ORDER BY b) FROM listagg_t1 group by a; 
     a |      listagg       
    ---+------------------- 
     1 | 2.222000;3.333000 
     2 | 4.444000;5.555000 
     3 | 6.666000 
       | 1.111000 
    (4 rows) 
     
    openGauss=# DROP TABLE listagg_t1;
    ```

    The aggregate column is of a time type.

    ```
    openGauss=# CREATE TABLE listagg_t1(a int, b timestamp); 
     
    openGauss=# INSERT INTO listagg_t1 VALUES (NULL,'2000-01-01'),(1,'2000-02-02'),(1,'2000-03-03'),(2,'2000-04-04'),(2,'2000-05-05'),(3,'2000-06-06'); 
     
    openGauss=# SELECT a,LISTAGG(b,';') WITHIN GROUP(ORDER BY b) FROM listagg_t1 group by a; 
     a |                 listagg                  
    ---+----------------------------------------- 
     1 | 2000-02-02 00:00:00;2000-03-03 00:00:00 
     2 | 2000-04-04 00:00:00;2000-05-05 00:00:00 
     3 | 2000-06-06 00:00:00 
       | 2000-01-01 00:00:00 
    (4 rows) 
     
    openGauss=# DROP TABLE listagg_t1;
    ```

    The aggregate column is of a time interval type.

    ```
    openGauss=# CREATE TABLE listagg_t1(a int, b interval); 
     
    openGauss=# INSERT INTO listagg_t1 VALUES (NULL,'1 days'),(1,'2 days'),(1,'3 days'),(2,'4 days'),(2,'5 days'),(3,'6 days'); 
     
    openGauss=# SELECT a,LISTAGG(b,';') WITHIN GROUP(ORDER BY b) FROM listagg_t1 group by a; 
     a |    listagg     
    ---+--------------- 
     1 | 2 days;3 days 
     2 | 4 days;5 days 
     3 | 6 days 
       | 1 day 
    (4 rows) 
     
    openGauss=# DROP TABLE listagg_t1;
    ```

    When the delimiter is omitted, it defaults to empty.

    ```
    openGauss=# CREATE TABLE listagg_t1(a int, b interval); 
     
    openGauss=# INSERT INTO listagg_t1 VALUES (NULL,'1 days'),(1,'2 days'),(1,'3 days'),(2,'4 days'),(2,'5 days'),(3,'6 days'); 
     
    openGauss=# SELECT a,LISTAGG(b) WITHIN GROUP(ORDER BY b) FROM listagg_t1 group by a; 
     a |   listagg     
    ---+-------------- 
     1 | 2 days3 days 
     2 | 4 days5 days 
     3 | 6 days 
       | 1 day 
    (4 rows) 
     
    openGauss=# DROP TABLE listagg_t1;
    ```

    When LISTAGG is used as a window function, the OVER clause does not support ORDER BY window sorting, and the LISTAGG column is an ordered aggregation of the corresponding group.

    ```
    openGauss=# CREATE TABLE listagg_t1(a int, b interval); 
     
    openGauss=# INSERT INTO listagg_t1 VALUES (NULL,'1 days'),(1,'2 days'),(1,'3 days'),(2,'4 days'),(2,'5 days'),(3,'6 days'); 
     
    openGauss=# SELECT a,LISTAGG(b) WITHIN GROUP(ORDER BY b) OVER(PARTITION BY a) FROM listagg_t1; 
     a |   listagg     
    ---+-------------- 
     1 | 2 days3 days 
     1 | 2 days3 days 
     2 | 4 days5 days 
     2 | 4 days5 days 
     3 | 6 days 
       | 1 day 
    (6 rows) 
     
    openGauss=# DROP TABLE listagg_t1;
    ```

- group_concat([DISTINCT | ALL] expression [,expression ...] [ORDER BY { expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ] } [,...]] [SEPARATOR str_val])

    Description: (Available only in B compatibility mode) This function accepts a variable number of parameters and can concatenate multiple columns. It arranges the aggregate column data in the sort order specified by ORDER BY and concatenates them into a string using the delimiter specified by SEPARATOR. It cannot be used as a window function.

    - DISTINCT: Optional. Deduplicates the concatenated result of each row.

    - expression: Required. Specifies the aggregate column name or a valid expression based on a column.

    - ORDER BY: Optional, followed by a variable number of expressions and sort specifications. The GROUP_CONCAT function does not support the (ORDER BY + number) form.

    - SEPARATOR clause: Optional, followed by a CONST character (string). The expression results of two adjacent rows in a group are concatenated using this delimiter. If not specified, a comma (',') is used by default.

    - When DISTINCT and ORDER BY are specified at the same time, all ORDER BY expressions in openGauss must be included in the DISTINCT expressions. Otherwise, an error is reported.

    Return type: text

    Example:

    Use `separator` to specify the delimiter as semicolon (;).

    ```
    openGauss=# CREATE TABLE group_concat_t1(a int, b int); 
     
    openGauss=# INSERT INTO group_concat_t1 VALUES (NULL,1),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT a,group_concat(b separator ';') FROM group_concat_t1 GROUP BY a ORDER BY a; 
     a | group_concat  
    ---+-------------- 
     1 | 2;3 
     2 | 4;5 
     3 | 6 
       | 1 
    (4 rows) 
     
    openGauss=# DROP TABLE group_concat_t1;
    ```

    When the delimiter is not specified, it defaults to a comma (,).

    ```
    openGauss=# CREATE TABLE group_concat_t1(a int, b int); 
     
    openGauss=# INSERT INTO group_concat_t1 VALUES (NULL,1),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT a,group_concat(a,b) FROM group_concat_t1 GROUP BY a ORDER BY a; 
     a | group_concat  
    ---+-------------- 
     1 | 12,13 
     2 | 24,25 
     3 | 36 
       | 1 
    (4 rows) 
     
    openGauss=# DROP TABLE group_concat_t1;
    ```

    The aggregate column is of a text character set type.

    ```
    openGauss=# CREATE TABLE group_concat_t1(a int, b text); 
     
    openGauss=# INSERT INTO group_concat_t1 VALUES (NULL,'a1'),(1,'b2'),(1,'c3'),(2,'d4'),(2,'e5'),(3,'f6'); 
     
    openGauss=# SELECT a,group_concat(a,b) FROM group_concat_t1 GROUP BY a ORDER BY a; 
     a | group_concat  
    ---+-------------- 
     1 | 1b2,1c3 
     2 | 2d4,2e5 
     3 | 3f6 
       | a1 
    (4 rows) 
     
    openGauss=# DROP TABLE group_concat_t1;
    ```

    The aggregate column is of an integer type.

    ```
    openGauss=# CREATE TABLE group_concat_t1(a int, b int); 
     
    openGauss=# INSERT INTO group_concat_t1 VALUES (NULL,1),(1, 2),(1, 3),(2, 4),(2, 5),(3,6); 
     
    openGauss=# SELECT a,group_concat(b) FROM group_concat_t1 GROUP BY a ORDER BY a; 
     a | group_concat  
    ---+-------------- 
     1 | 2,3 
     2 | 4,5 
     3 | 6 
       | 1 
    (4 rows) 
     
    openGauss=# DROP TABLE group_concat_t1;
    ```

    The aggregate column is of a floating-point type.

    ```
    openGauss=# CREATE TABLE group_concat_t1(a int, b float); 
     
    openGauss=# INSERT INTO group_concat_t1 VALUES (NULL,1.11),(1,2.22),(1,3.33),(2,4.44),(2,5.55),(3,6.66); 
     
    openGauss=# SELECT a,group_concat(b) FROM group_concat_t1 GROUP BY a ORDER BY a; 
     a | group_concat  
    ---+-------------- 
     1 | 2.22,3.33 
     2 | 4.44,5.55 
     3 | 6.66 
       | 1.11 
    (4 rows) 
     
    openGauss=# DROP TABLE group_concat_t1;
    ```

    The aggregate column is of a time type.

    ```
    openGauss=# CREATE TABLE group_concat_t1(a int, b timestamp); 
     
    openGauss=# INSERT INTO group_concat_t1 VALUES (NULL,'2000-01-01'),(1,'2000-02-02'),(1,'2000-03-03'),(2,'2000-04-04'),(2,'2000-05-05'),(3,'2000-06-06'); 
     
    openGauss=# SELECT a,group_concat(b) FROM group_concat_t1 GROUP BY a ORDER BY a; 
     a |              group_concat                
    ---+----------------------------------------- 
     1 | 2000-02-02 00:00:00,2000-03-03 00:00:00 
     2 | 2000-04-04 00:00:00,2000-05-05 00:00:00 
     3 | 2000-06-06 00:00:00 
       | 2000-01-01 00:00:00 
    (4 rows) 
     
    openGauss=# DROP TABLE group_concat_t1;
    ```

    The aggregate column is of a binary type.

    ```
     openGauss=# CREATE TABLE group_concat_t1(a int, b bytea); 
     
    openGauss=# INSERT INTO group_concat_t1 VALUES (NULL,'1'),(1,'2'),(1,'3'),(2,'4'),(2,'5'),(3,'6'); 
     
    openGauss=# SELECT a,group_concat(b) FROM group_concat_t1 GROUP BY a ORDER BY a; 
     a | group_concat  
    ---+-------------- 
     1 | \x32,\x33 
     2 | \x34,\x35 
     3 | \x36 
       | \x31 
    (4 rows) 
     
    openGauss=# DROP TABLE group_concat_t1;
    ```

    The aggregate column is of the interval type.

    ```
    openGauss=# CREATE TABLE group_concat_t1(a int, b interval); 
     
    openGauss=# INSERT INTO group_concat_t1 VALUES (NULL,'1 days'),(1,'2 days'),(1,'3 days'),(2,'4 days'),(2,'5 days'),(3,'6 days'); 
     
    openGauss=# SELECT a,group_concat(b) FROM group_concat_t1 GROUP BY a ORDER BY a; 
     a | group_concat   
    ---+--------------- 
     1 | 2 days,3 days 
     2 | 4 days,5 days 
     3 | 6 days 
       | 1 day 
    (4 rows) 
     
    openGauss=# DROP TABLE group_concat_t1;
    ```

    Use DISTINCT to remove duplicates.

    ```
    openGauss=# CREATE TABLE group_concat_t1(a int, b interval); 
     
    openGauss=# INSERT INTO group_concat_t1 VALUES (NULL,'1 days'),(1,'2 days'),(1,'2 days'),(1,'3 days'),(1,'3 days'),(2,'4 days'),(2,'5 days'),(3,'6 days'); 
     
    openGauss=# SELECT a,group_concat(distinct b) FROM group_concat_t1 GROUP BY a ORDER BY a; 
     a | group_concat   
    ---+--------------- 
     1 | 2 days,3 days 
     2 | 4 days,5 days 
     3 | 6 days 
       | 1 day 
    (4 rows) 
     
    openGauss=# DROP TABLE group_concat_t1;
    ```

    Use ORDER BY to sort.

    ```
    openGauss=# CREATE TABLE group_concat_t1(a int, b interval); 
     
    openGauss=# INSERT INTO group_concat_t1 VALUES (NULL,'1 days'),(1,'2 days'),(1,'3 days'),(2,'4 days'),(2,'5 days'),(3,'6 days'); 
     
    openGauss=# SELECT a,group_concat(b ORDER BY b desc) FROM group_concat_t1 GROUP BY a ORDER BY a; 
     a | group_concat   
    ---+--------------- 
     1 | 3 days,2 days 
     2 | 5 days,4 days 
     3 | 6 days 
       | 1 day 
    (4 rows) 
     
    openGauss=# DROP TABLE group_concat_t1;
    ```

- covar\_pop(Y, X)

    Description: Population covariance.

    Return type: double precision

    Example:

    ```
    openGauss=# CREATE TABLE covar_pop_t1(a int, b int); 
     
    openGauss=# INSERT INTO covar_pop_t1 VALUES (NULL,11),(11,21),(11,31),(21,41),(21,51),(31,61); 
     
    openGauss=# SELECT COVAR_POP(a,b) FROM covar_pop_t1; 
     covar_pop  
    ----------- 
           100 
    (1 row) 
     
    openGauss=# DROP TABLE covar_pop_t1;
    ```

- covar_samp(Y, X)

    Description: Sample covariance.

    Return type: double precision

    Example:

    ```
    openGauss=# CREATE TABLE covar_samp_t1(a int, b int); 
     
    openGauss=# INSERT INTO covar_samp_t1 VALUES (NULL,11),(11,21),(11,31),(21,41),(21,51),(31,61); 
     
    openGauss=# SELECT COVAR_SAMP(a,b) FROM covar_samp_t1; 
     covar_samp  
    ------------ 
            125 
    (1 row) 
     
    openGauss=# DROP TABLE covar_samp_t1;
    ```

- stddev_pop(expression)

    Description: Population standard deviation.

    Return type: double precision for floating-point input, and numeric for other inputs.

    Example:

    ```
    openGauss=# CREATE TABLE stddev_pop_t1(a int, b int); 
     
    openGauss=# INSERT INTO stddev_pop_t1 VALUES (NULL,11),(11,21),(11,31),(21,41),(21,51),(31,61); 
     
    openGauss=# SELECT STDDEV_POP(a) FROM stddev_pop_t1; 
         stddev_pop      
    -------------------- 
     7.4833147735478828 
    (1 row) 
     
    openGauss=# DROP TABLE stddev_pop_t1;
    ```

- stddev_samp(expression)

    Description: Sample standard deviation.

    Return type: For floating-point input, returns double precision; for other inputs, returns numeric.

    Example:

    ```
    openGauss=# CREATE TABLE stddev_samp_t1(a int, b int); 
     
    openGauss=# INSERT INTO stddev_samp_t1 VALUES (NULL,11),(11,21),(11,31),(21,41),(21,51),(31,61); 
     
    openGauss=# SELECT STDDEV_SAMP(a) FROM stddev_samp_t1; 
        stddev_samp      
    -------------------- 
     8.3666002653407555 
    (1 row) 
     
    openGauss=# DROP TABLE stddev_samp_t1;
    ```

- var_pop(expression)

    Description: Population variance (square of population standard deviation)

    Return type: For floating-point input, double precision is returned; for other inputs, numeric is returned.

    Example:

    ```
    openGauss=# CREATE TABLE var_pop_t1(a int, b int); 
     
    openGauss=# INSERT INTO var_pop_t1 VALUES (NULL,11),(11,21),(11,31),(21,41),(21,51),(31,61); 
     
    openGauss=# SELECT VAR_POP(a) FROM var_pop_t1; 
           var_pop        
    --------------------- 
     56.0000000000000000 
    (1 row) 
     
    openGauss=# DROP TABLE var_pop_t1;
    ```

- var_samp(expression)

    Description: Sample variance (square of sample standard deviation)

    Return type: For floating-point input, double precision is returned; for other inputs, numeric is returned.

    Example:

    ```
    openGauss=# CREATE TABLE var_samp_t1(a int, b int); 
     
    openGauss=# INSERT INTO var_samp_t1 VALUES (NULL,11),(11,21),(11,31),(21,41),(21,51),(31,61); 
     
    openGauss=# SELECT VAR_SAMP(a) FROM var_samp_t1; 
          var_samp        
    --------------------- 
     70.0000000000000000 
    (1 row) 
     
    openGauss=# DROP TABLE var_samp_t1;
    ```

- bit_and(expression)

    Description: Bitwise AND of all non-NULL input values. If all input values are NULL, the result is also NULL.

    Return type: Same as the parameter data type.

    Example:

    ```
    openGauss=# CREATE TABLE bit_and_t1(a int, b int); 
     
    openGauss=# INSERT INTO bit_and_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT BIT_AND(a) FROM bit_and_t1; 
     bit_and  
    --------- 
           0 
    (1 row) 
     
    openGauss=# DROP TABLE bit_and_t1;
    ```

- bit\_or\(expression\)

    Description: Bitwise OR of all non-NULL input values. If all input values are NULL, the result is also NULL.

    Return type: Same as the parameter data type.

    Example:

    ```
    openGauss=# CREATE TABLE bit_or_t1(a int, b int); 
     
    openGauss=# INSERT INTO bit_or_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT BIT_OR(a) FROM bit_or_t1; 
     bit_or  
    -------- 
          3 
    (1 row) 
     
    openGauss=# DROP TABLE bit_or_t1;
    ```

- bool\_and(expression)

    Description: Returns true if all input values are true, otherwise returns false.

    Return type: `bool`

    Example:

    ```
    openGauss=# SELECT bool_and(100 <2500);
     bool_and
    ----------
     t
    (1 row)
    ```

- bool\_or(expression)

    Description: Returns true if at least one input value is true; otherwise returns false.

    Return type: bool

    Example:

    ```
    openGauss=# SELECT bool_or(100 <2500);
     bool_or
    ----------
     t
    (1 row)
    ```

- corr(Y, X)

    Description: Correlation coefficient

    Return type: double precision

    Examples:

    ```
    openGauss=# CREATE TABLE corr_t1(a int, b int); 
     
    openGauss=# INSERT INTO corr_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT CORR(a,b) FROM corr_t1; 
           corr        
    ------------------ 
     .944911182523068 
    (1 row) 
     
    openGauss=# DROP TABLE corr_t1;
    ```

- corr_s(expr1, expr2, return_mode)

    Description: Spearman rank correlation coefficient

    Return type: double precision

    Return value: `return_mode` is optional. If not specified, the function returns the Spearman's rank correlation coefficient (the return value is the same as when return_mode = COEFFICIENT). If specified, the value of `return_mode` must be one of the following five options.

    <table>
        <tr>
            <th>Return value</th>
            <th>Meaning</th>
        </tr>
        <tr>
            <td>COEFFICIENT</td>
            <td>Correlation coefficient</td>
        </tr>
        <tr>
            <td>ONE_SIDED_SIG</td>
            <td>Positive one-tailed significance of the correlation</td>
        </tr>
        <tr>
            <td>ONE_SIDED_SIG_POS</td>
            <td>Equivalent to ONE_SIDED_SIG</td>
        </tr>
        <tr>
            <td>ONE_SIDED_SIG_NEG</td>
            <td>Negative one-tailed significance of the correlation</td>
        </tr>
        <tr>
            <td>TWO_SIDED_SIG</td>
            <td>Two-tailed significance of the correlation</td>
        </tr>
    </table>

    Example:

    ```
    openGauss=# CREATE TABLE corr_t1(a int, b int);
    CREATE TABLE
    openGauss=# INSERT INTO corr_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6);
    INSERT 0 6
    openGauss=# SELECT CORR_S(a,b) FROM corr_t1;
        corr_s
    ------------------
    .948683298050514
    (1 row)

    openGauss=# SELECT CORR_S(a,b,'COEFFICIENT') FROM corr_t1;
        corr_s
    ------------------
    .948683298050514
    (1 row)

    openGauss=# SELECT CORR_S(a,b,'ONE_SIDED_SIG') FROM corr_t1;
        corr_s
    --------------------
    .00692341649442951
    (1 row)
    ```

- corr_k\(expr1, expr2, return_mode\)

    Description: Kendall's tau-b correlation coefficient

    Return type: double precision

    Return value: `return_mode` is optional. If not specified, the function returns the Kendall's tau-b correlation coefficient (the return value is the same as when return_mode = COEFFICIENT). If specified, the return value description is the same as that of `corr_s` above.

    Example:

    ```
    openGauss=# SELECT CORR_K(a,b) FROM corr_t1;
        corr_k
    ------------------
    .894427190999916
    (1 row)

    openGauss=# SELECT CORR_K(a,b,'COEFFICIENT') FROM corr_t1;
        corr_k
    ------------------
    .894427190999916
    (1 row)

    openGauss=# SELECT CORR_K(a,b,'ONE_SIDED_SIG') FROM corr_t1;
        corr_k
    -------------------
    .0142298684581553
    (1 row)
    ```

- every\(expression\)

    Description: Equivalent to bool_and.

    Return type: bool

    Example:

    ```
    openGauss=# SELECT every(100 <2500);
     every
    -------
     t
    (1 row)
    ```

- regr_avgx(Y, X)

    Description: Average of the independent variable (sum(X)/N).

    Return type: double precision

    Example:

    ```
    openGauss=# CREATE TABLE regr_t1(a int, b int); 
     
    openGauss=# INSERT INTO regr_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT REGR_AVGX(a,b) FROM regr_t1; 
     regr_avgx  
    ----------- 
             4 
    (1 row) 
     
    openGauss=# DROP TABLE regr_t1;
    ```

- regr_avgy(Y, X)

    Description: average of the dependent variable \(sum(Y)/N\)

    Return type: double precision

    Example:

    ```
    openGauss=# CREATE TABLE regr_avgy_t1(a int, b int); 
     
    openGauss=# INSERT INTO regr_avgy_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT REGR_AVGY(a,b) FROM regr_avgy_t1; 
     regr_avgy  
    ----------- 
           1.8 
    (1 row) 
     
    openGauss=# DROP TABLE regr_avgy_t1;
    ```

- regr\_count\(Y, X\)

    Description: Number of input rows in which both expressions are non-NULL.

    Return type: bigint

    Example:

    ```
    openGauss=# CREATE TABLE regr_count_t1(a int, b int); 
     
    openGauss=# INSERT INTO regr_count_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT REGR_COUNT(a,b) FROM regr_count_t1; 
     regr_count  
    ------------ 
              5 
    (1 row) 
     
    openGauss=# DROP TABLE regr_count_t1;
    ```

- regr_intercept(Y, X)

    Description: Fits a linear equation using the least squares method based on all input points (X, Y), and returns the Y-intercept of the line.

    Return type: double precision

    Example:

    ```
    openGauss=# CREATE TABLE regr_intercept_t1(a int, b int); 
     
    openGauss=# INSERT INTO regr_intercept_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT REGR_INTERCEPT(b,a) FROM regr_intercept_t1; 
      regr_intercept   
    ------------------ 
     .785714285714286 
    (1 row) 
     
    openGauss=# DROP TABLE regr_intercept_t1;
    ```

- regr_r2(Y, X)

    Description: Square of the correlation coefficient.

    Return type: double precision

    Example:

    ```
    openGauss=# CREATE TABLE regr_r2_t1(a int, b int); 
     
    openGauss=# INSERT INTO regr_r2_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT REGR_R2(b,a) FROM regr_r2_t1; 
         regr_r2       
    ------------------ 
     .892857142857143 
    (1 row) 
     
    openGauss=# DROP TABLE regr_r2_t1;
    ```

- regr_slope(Y, X)

    Description: Fits a linear equation using the least squares method based on all input points (X, Y), and then returns the slope of the line.

    Return type: double precision

    Example:

    ```
    openGauss=# CREATE TABLE regr_slope_t1(a int, b int); 
     
    openGauss=# INSERT INTO regr_slope_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT REGR_SLOPE(b,a) FROM regr_slope_t1; 
        regr_slope     
    ------------------ 
     1.78571428571429 
    (1 row) 
     
    openGauss=# DROP TABLE regr_slope_t1;
    ```

- regr\_sxx\(Y, X\)

    Description: sum\(X^2\) – sum\(X\)^2/N (the "sum of squares" of the independent variable)

    Return type: double precision

    Example:

    ```
    openGauss=# CREATE TABLE regr_sxx_t1(a int, b int); 
     
    openGauss=# INSERT INTO regr_sxx_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT REGR_SXX(b,a) FROM regr_sxx_t1; 
     regr_sxx  
    ---------- 
          2.8 
    (1 row) 
     
    openGauss=# DROP TABLE regr_sxx_t1;
    ```

- regr\_sxy\(Y, X\)

    Description: sum\(X\*Y\) – sum\(X\) \* sum\(Y\)/N (the "sum of products" of the independent variable and dependent variable)

    Return type: double precision

    Example:

    ```
    openGauss=# CREATE TABLE regr_sxy_t1(a int, b int); 
     
    openGauss=# INSERT INTO regr_sxy_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT REGR_SXY(b,a) FROM regr_sxy_t1; 
     regr_sxy  
    ---------- 
            5 
    (1 row) 
     
    openGauss=# DROP TABLE regr_sxy_t1;
    ```

- regr\_syy\(Y, X\)

    Description: sum\(Y^2\) – sum\(Y\)^2/N (sum of squares of the dependent variable)

    Return type: double precision

    Example:

    ```
    openGauss=# CREATE TABLE regr_syy_t1(a int, b int); 
     
    openGauss=# INSERT INTO regr_syy_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT REGR_SYY(b,a) FROM regr_syy_t1; 
     regr_syy  
    ---------- 
           10 
    (1 row) 
     
    openGauss=# DROP TABLE regr_syy_t1;
    ```

- stddev\(expression\)

    Description: Alias of `stddev_samp`.

    Return type: double precision for floating-point input, and numeric for other input.

    Example:

    ```
    openGauss=# CREATE TABLE stddev_t1(a int, b int); 
     
    openGauss=# INSERT INTO stddev_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT STDDEV(a) FROM stddev_t1; 
            stddev          
    ----------------------- 
     .83666002653407554798 
    (1 row) 
     
    openGauss=# DROP TABLE stddev_t1;
    ```

- variance(expression)

    Description: Alias of `var_samp`.

    Return type: For floating-point input, double precision is returned; for other input, numeric is returned.

    Example:

    ```
    openGauss=# CREATE TABLE variance_t1(a int, b int); 
     
    openGauss=# INSERT INTO variance_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT VARIANCE(a) FROM variance_t1; 
           variance         
    ----------------------- 
     .70000000000000000000 
    (1 row) 
     
    openGauss=# DROP TABLE variance_t1;
    ```

- delta

    Description: Returns the difference between the current row and the previous row.

    Parameter type: numeric

    Return type: numeric

- checksum(expression)

  Description: Returns the CHECKSUM value of all input values. This function can be used to verify whether the data in a table is the same before and after backup and recovery or data migration operations in the openGauss database (other databases besides openGauss are not supported). Before and after backup and recovery or data migration operations, users need to manually execute SQL commands to obtain the execution results, and determine whether the data in the table is the same before and after the operation by comparing the obtained results.

  >[!NOTE]
  >
  >- For large tables, the CHECKSUM function may take a long time.
  >
  >- If the CHECKSUM values of two tables are different, it indicates that the contents of the two tables are different. Because the hash function used in the CHECKSUM function cannot guarantee collision-free results, two tables with different contents may produce the same CHECKSUM value, though the probability of this occurring is relatively low. The same situation also applies to CHECKSUM performed on columns.
  >
  >- For time types timestamp, timestamptz, and smalldatetime, ensure that the time zone settings are consistent when calculating the CHECKSUM value.

  - If the CHECKSUM value of a column is calculated and the column type can be implicitly converted to the TEXT type, then expression is the column name.

  - If the CHECKSUM value of a column is calculated and the column type cannot be implicitly converted to the TEXT type, the expression is `column_name::TEXT`.

  - If the CHECKSUM value of all columns is calculated, the expression is `table_name::TEXT`.

  Types that can be implicitly converted to TEXT include: char, name, int8, int2, int1, int4, raw, pg_node_tree, float4, float8, bpchar, varchar, nvarchar, nvarchar2, date, timestamp, timestamptz, numeric, and smalldatetime. Other types must be explicitly cast to TEXT.

  Return type: numeric.

  Example:

  The CHECKSUM value of a column in the table that can be converted to the TEXT type by default.

  ```
    openGauss=# CREATE TABLE checksum_t1(a int, b int); 
     
    openGauss=# INSERT INTO checksum_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT CHECKSUM(a) FROM checksum_t1; 
      checksum    
    ------------- 
     18126842830 
    (1 row) 
     
    openGauss=# DROP TABLE checksum_t1;
  ```

  The CHECKSUM value of a column in the table that cannot be converted to the TEXT type by default. Note: In this case, the CHECKSUM parameter is `column_name::TEXT`.

  ```
    openGauss=# CREATE TABLE checksum_t1(a int, b int); 
     
    openGauss=# INSERT INTO checksum_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT CHECKSUM(a::TEXT) FROM checksum_t1; 
      checksum    
    ------------- 
     18126842830 
    (1 row) 
     
    openGauss=# DROP TABLE checksum_t1;
  ```

  The CHECKSUM value of all columns in the table. Note: In this case, the CHECKSUM parameter is table_name::TEXT, and the table name is not preceded by a schema.

  ```
    openGauss=# CREATE TABLE checksum_t1(a int, b int); 
     
    openGauss=# INSERT INTO checksum_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT CHECKSUM(checksum_t1::TEXT) FROM checksum_t1; 
      checksum    
    ------------- 
     11160522226 
    (1 row) 
     
    openGauss=# DROP TABLE checksum_t1;
  ```

- first\(anyelement\)

    Description: Returns the first non-NULL input value.

    Return type: anyelement

    ```
    openGauss=# select * from tba;
    name 
    -----
    A    
    A    
    D    
    (4 rows)
    
    openGauss=# select first(name) from tba;
    first
    -----
    A
    (1 rows)
    ```

- last\(anyelement\)

    Description: Returns the last non-NULL input.

    Return type: anyelement

    ```
    openGauss=# select * from tba;
    name 
    -----
    A    
    A    
    D    
    (4 rows)
    
    openGauss=# select last(name) from tba;
    last
    -----
    D
    (1 rows)
    ```

- mode\(\) within group \(order by value anyelement\)

    Description: Returns the most frequent value in a column. If multiple values have the same frequency, the smallest value is returned. The sorting method is the same as the default sorting method for the column type. Here, value is the input parameter and can be of any type.

    Return type: Same as the input parameter type.

    Example:

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

- json_agg(any)

    Description: Aggregates values into a JSON array.

    Return type: array-json

    Example:

    ```
    openGauss=# CREATE TABLE json_agg_t1(a int, b int); 
     
    openGauss=# INSERT INTO json_agg_t1 VALUES (NULL,11),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT JSON_AGG(a) FROM json_agg_t1; 
           json_agg         
    ----------------------- 
     [null, 1, 1, 2, 2, 3] 
    (1 row) 
     
    openGauss=# DROP TABLE json_agg_t1;
    ```

- json_object_agg(any, any)

    Description: Aggregates values into a JSON object.

    Return type: object-json

    Example:

    ```
     openGauss=# CREATE TABLE json_object_agg_t1(a int, b int); 
     
    openGauss=# INSERT INTO json_object_agg_t1 VALUES (11,NULL),(1,2),(1,3),(2,4),(2,5),(3,6); 
     
    openGauss=# SELECT JSON_OBJECT_AGG(a,b) FROM json_object_agg_t1; 
                           json_object_agg                         
    -------------------------------------------------------------- 
     { "11" : null, "1" : 2, "1" : 3, "2" : 4, "2" : 5, "3" : 6 } 
    (1 row) 
     
    openGauss=# DROP TABLE json_object_agg_t1;
    ```

- cume\_dist(expression [,expression ...] ) WITHIN GROUP (ORDER BY { order-list [ ASC | DESC ] [ NULLS { FIRST | LAST } ] } [,...])

    Description: Computes the cumulative distribution of a hypothetical row identified by the function's arguments and the corresponding sort specification among the rows in the aggregate group, that is, the proportion of the number of rows up to and including the last row whose value equals the expression value after sorting to the total number of rows in the sorted partition.

    - expression: Required. Specifies the row hypothetically inserted into a set of rows. The expression must return a value of a built-in data type. The expression must be a constant or a variable of a constant. Multiple arguments can be input. The number of arguments must match the number of items in order-list.

    - `order-list`: Required. The sort key can be a column name or a sort key expression.

    Return type: float

    Example:

    Using `c1` as the sort column, insert the input value 4 into this sort column. 4 is at position 8, so the function returns 8/14.

    ```
    openGauss=# create table aggregates_hypothetical(c1 int, c2 NUMBER(8,2), c3 varchar(20), c4 timestamp);
    CREATE TABLE
    openGauss=# insert into aggregates_hypothetical values
    openGauss-# (1,0.1,'1','2024-09-01 09:22:00'),
    openGauss-# (2,0.2,'2','2024-09-02 09:22:00'),
    openGauss-# (3,0.1,'3','2024-09-03 09:22:00'),
    openGauss-# (3,0.2,'3','2024-09-04 09:22:00'),
    openGauss-# (3,0.3,'3','2024-09-05 09:22:00'),
    openGauss-# (3,0.3,'3','2024-09-05 09:22:00'),
    openGauss-# (4,0.2,'4','2024-09-06 09:22:00'),
    openGauss-# (5,0.2,'5','2024-09-07 09:22:00'),
    openGauss-# (6,0.2,'6','2024-09-08 09:22:00'),
    openGauss-# (7,0.2,'7','2024-09-09 09:22:00'),
    openGauss-# (8,0.2,'8','2024-09-10 09:22:00'),
    openGauss-# (9,0.2,'9','2024-09-11 09:22:00'),
    openGauss-# (10,0.2,'10','2024-09-12 09:22:00');
    INSERT 0 13

    openGauss=# select cume_dist(4) within group (order by c1) from aggregates_hypothetical;
        cume_dist     
    ------------------
    .571428571428571
    (1 row)
    ```

    Example:

    Using `c1` and `c2` as the sort columns, insert the input values (3, 0.2) into these sort columns. They are at position 5, so the function returns 5/14.

    ```
    openGauss=# select cume_dist(3,0.2) within group (order by c1,c2) from aggregates_hypothetical;
    cume_dist     
    ------------------
     .357142857142857
    (1 row)
    ```

    Example:

    Using `c1` as the sort column, the input string is inserted into this sort column, and type conversion is performed before calculation.

    ```
    select cume_dist('1') within group (order by c1) from test_aggregate;
        cume_dist     
    ------------------
    .142857142857143
    (1 row)
    ```

- rank( expression [,expression] ) WITHIN GROUP (ORDER BY { order-list [ ASC | DESC ] [ NULLS { FIRST | LAST } ] } [,...])

    Description: Computes the rank of a hypothetical row identified by the function's arguments relative to a given sort specification. The ranking values of the rank function are not consecutive.

    - expression: Required. Specifies the row to be hypothetically inserted into a set of rows. The expression must return a value of a built-in data type. The expression must be a constant or variable. Multiple parameters can be input. The number of parameters must match the number of items in order-list.

    - order-list: Required. The sort key can be a column name or a sort key expression.

    Return type: int

    Example

    Use `c1` as the sort column to calculate the ranking value of the input parameter in the sort column. Duplicate columns are also counted in the ranking, so the ranking is non-consecutive.

    ```
    openGauss=# select rank(3) within group (order by c1) from aggregates_hypothetical;
    rank 
    ------
        3
    (1 row)

    openGauss=# select rank(4) within group (order by c1) from aggregates_hypothetical;
    rank 
    ------
        7
    (1 row)
    ```

    Example

    Uses `c1` and `c2` as the sort columns.

    ```
    openGauss=# select rank(4,0.2) within group (order by c1,c2) from aggregates_hypothetical;
    rank 
    ------
        7
    (1 row)
    ```

- dense\_rank\( expression \[,expression\] \) WITHIN GROUP \(ORDER BY \{ order-list \[ ASC | DESC \] \[ NULLS \{ FIRST | LAST \} \] \} \[,...\]\)

    Description: Computes the rank of a hypothetical row identified by the function's arguments relative to a given sort specification. The ranking values returned by the dense_rank function are consecutive.

    - expression: Required. Specifies the row to be hypothetically inserted into a set of rows. The expression must return a value of a built-in data type. The expression must be a constant or variable. Multiple arguments can be input. The number of arguments must match the number of items in order-list.

    - order-list: Required. The sort key can be a column name or a sort key expression.

    Return type: int

    Example

    Using `c1` as the sort column, calculate the ranking value of the input parameter in the sort column. Duplicate values are not counted separately in the ranking, so the ranking is consecutive.

    ```
    openGauss=# select dense_rank(3) within group (order by c1) from aggregates_hypothetical;
    dense_rank 
    ------------
            3
    (1 row)

    openGauss=# select dense_rank(4) within group (order by c1) from aggregates_hypothetical;
    dense_rank 
    ------------
            4
    (1 row)
    ```

    Example

    Using `c1` and `c2` as sort columns

    ```
    openGauss=# select dense_rank(4,0.2) within group (order by c1,c2) from aggregates_hypothetical;;
    dense_rank 
    ------------
              6
    (1 row)
    ```

- percent\_rank( expression [,expression] ) WITHIN GROUP (ORDER BY { order-list [ ASC | DESC ] [ NULLS { FIRST | LAST } ] } [,...])

    Description: Calculates the percentage of the relative position of a hypothetical row identified by the function's arguments with respect to a given sort specification. The calculation formula is (rank - 1) / (total_rows - 1).

    - expression: Required. Specifies the row to be hypothetically inserted into a set of rows. The expression must return a value of a built-in data type. The expression must be a constant or variable. Multiple arguments can be input. The number of arguments must be consistent with the number of items in order-list.

    - order-list: Required. The sort key can be a column name or a sort key expression.

    Return type: float

    Example

    Uses `c1` as the sort column, and returns the percentage of the input value's position in the current ranking column.

    ```
    openGauss=# select percent_rank(4) within group (order by c1) from aggregates_hypothetical;;
    percent_rank    
    -------------------
    0.461538461538462
    (1 row)
    ```

    Example

    Uses `c1` and `c2` as the sort columns.

    ```
    openGauss=# select percent_rank(3,0.2) within group (order by c1,c2) from aggregates_hypothetical; 
    percent_rank    
    -------------------
    0.230769230769231
    (1 row)
    ```
