# Aggregate Functions<a name="EN-US_TOPIC_0289900330"></a>

## Aggregate Functions<a name="en-us_topic_0283136894_en-us_topic_0237121982_en-us_topic_0059778466_s6494488eb2824afa801304697cb740e4"></a>

-   sum\(expression\)

    Description: Specifies the sum of expressions across all input values.

    Return type:

    Generally, same as the argument data type. In the following cases, type conversion occurs:

    -   **BIGINT**  for  **SMALLINT**  or  **INT**  arguments
    -   **NUMBER**  for  **BIGINT**  arguments
    -   **DOUBLE PRECISION**  for floating-point arguments

    Example:

    ```
    openGauss=# SELECT SUM(ss_ext_tax) FROM tpcds.STORE_SALES;
      sum      
    --------------
     213267594.69
    (1 row)
    ```

-   max\(expression\)

    Description: Specifies the maximum value of expression across all input values.

    Parameter type: any array, numeric, string, date/time type, or IPv4 and IPv6 addresses \(INET and CIDR data types\)

    Return type: same as the argument type

    Example:

    ```
    openGauss=# SELECT MAX(inv_quantity_on_hand) FROM tpcds.inventory;
    ```

-   min\(expression\)

    Description: Specifies the minimum value of expression across all input values.

    Parameter type: any array, numeric, string, date/time type, or IPv4 and IPv6 addresses \(INET and CIDR data types\)

    Return type: same as the argument type

    Example:

    ```
    openGauss=# SELECT MIN(inv_quantity_on_hand) FROM tpcds.inventory;
     min 
    -----
       0
    (1 row)
    ```

-   avg\(expression\)

    Description: Specifies the average \(arithmetic mean\) of all input values.

    Return type:

    **NUMBER**  for any integer-type argument.

    **DOUBLE PRECISION**  for floating-point arguments.

    otherwise the same as the argument data type.

    Example:

    ```
    openGauss=# SELECT AVG(inv_quantity_on_hand) FROM tpcds.inventory;
             avg          
    ----------------------
     500.0387129084044604
    (1 row)
    ```

-   count\(expression\)

    Description: Specifies the number of input rows for which the value of the expression is not null.

    Return type: bigint

    Example:

    ```
    openGauss=# SELECT COUNT(inv_quantity_on_hand) FROM tpcds.inventory;
      count   
    ----------
     11158087
    (1 row)
    ```

-   count\(\*\)

    Description: Returns the number of input rows.

    Return type: bigint

    Example:

    ```
    openGauss=# SELECT COUNT(*) FROM tpcds.inventory;
      count   
    ----------
     11745000
    (1 row)
    ```

-   median\(expression\) \[over \(query partition clause\)\]

    Description: Returns the median of an expression.  **NULL**  will be ignored by the median function during calculation. The  **DISTINCT**  keyword can be used to exclude duplicate records in an expression. The data type of the input expression can be numeric \(including integer, double, and bigint\) or interval. For other data types, the median cannot be calculated.

    Return type: double or interval

    Example:

    ```
    select median(id) from (values(1), (2), (3), (4), (null)) test(id);
     median
    --------
         2.5
    (1 row)
    ```

-   array\_agg\(expression\)

    Description: Concatenates input values, including nulls, into an array.

    Return type: array of the argument type

    Example:

    ```
    openGauss=# SELECT ARRAY_AGG(sr_fee) FROM tpcds.store_returns WHERE sr_customer_sk = 2;
       array_agg   
    ---------------
     {22.18,63.21}
    (1 row)
    ```

-   string\_agg\(expression, delimiter\)

    Description: Concatenates input values into a string, separated by delimiter.

    Return type: same as the argument type

    Example:

    ```
    openGauss=# SELECT string_agg(sr_item_sk, ',') FROM tpcds.store_returns where sr_item_sk < 3;
             string_agg         
    ---------------------------------------------------------------------------------
    ------------------------------
     1,2,1,2,2,1,1,2,2,1,2,1,2,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,2,2,1,1,2,1,1,1
    (1 row)
    ```

-   listagg\(expression \[, delimiter\]\) WITHIN GROUP\(ORDER BY order-list\)

    Description: Sorts aggregation column data according to the mode specified by  **WITHIN GROUP**  and concatenates the data to a string using the specified delimiter.

    -   **expression**: Mandatory. It specifies an aggregation column name or a column-based valid expression. It does not support the  **DISTINCT**  keyword and the  **VARIADIC**  parameter.
    -   **delimiter**: Optional. It specifies a delimiter, which can be a string constant or a deterministic expression based on a group of columns. The default value is empty.
    -   **order-list**: Mandatory. It specifies the sorting mode in a group.

    Return type: text

    Example:

    The aggregation column is of the text character set type.

    ```
    openGauss=# SELECT deptno, listagg(ename, ',') WITHIN GROUP(ORDER BY ename) AS employees FROM emp GROUP BY deptno;
     deptno |              employees               
    --------+--------------------------------------
         10 | CLARK,KING,MILLER
         20 | ADAMS,FORD,JONES,SCOTT,SMITH
         30 | ALLEN,BLAKE,JAMES,MARTIN,TURNER,WARD
    (3 rows)
    ```

    The aggregation column is of the integer type.

    ```
    openGauss=# SELECT deptno, listagg(mgrno, ',') WITHIN GROUP(ORDER BY mgrno NULLS FIRST) AS mgrnos FROM emp GROUP BY deptno;
     deptno |            mgrnos             
    --------+-------------------------------
         10 | 7782,7839
         20 | 7566,7566,7788,7839,7902
         30 | 7698,7698,7698,7698,7698,7839
    (3 rows)
    ```

    The aggregation column is of the floating point type.

    ```
    openGauss=# SELECT job, listagg(bonus, '($); ') WITHIN GROUP(ORDER BY bonus DESC) || '($)' AS bonus FROM emp GROUP BY job;
        job     |                      bonus                      
    ------------+-------------------------------------------------
     CLERK      | 10234.21($); 2000.80($); 1100.00($); 1000.22($)
     PRESIDENT  | 23011.88($)
     ANALYST    | 2002.12($); 1001.01($)
     MANAGER    | 10000.01($); 2399.50($); 999.10($)
     SALESMAN   | 1000.01($); 899.00($); 99.99($); 9.00($)
    (5 rows)
    ```

    The aggregation column is of the time type.

    ```
    openGauss=# SELECT deptno, listagg(hiredate, ', ') WITHIN GROUP(ORDER BY hiredate DESC) AS hiredates FROM emp GROUP BY deptno;
     deptno |                                                          hiredates                                                           
    --------+------------------------------------------------------------------------------------------------------------------------------
         10 | 1982-01-23 00:00:00, 1981-11-17 00:00:00, 1981-06-09 00:00:00
         20 | 2001-04-02 00:00:00, 1999-12-17 00:00:00, 1987-05-23 00:00:00, 1987-04-19 00:00:00, 1981-12-03 00:00:00
         30 | 2015-02-20 00:00:00, 2010-02-22 00:00:00, 1997-09-28 00:00:00, 1981-12-03 00:00:00, 1981-09-08 00:00:00, 1981-05-01 00:00:00
    (3 rows)
    ```

    The aggregation column is of the time interval type.

    ```
    openGauss=# SELECT deptno, listagg(vacationTime, '; ') WITHIN GROUP(ORDER BY vacationTime DESC) AS vacationTime FROM emp GROUP BY deptno;
     deptno |                                    vacationtime                                    
    --------+------------------------------------------------------------------------------------
         10 | 1 year 30 days; 40 days; 10 days
         20 | 70 days; 36 days; 9 days; 5 days
         30 | 1 year 1 mon; 2 mons 10 days; 30 days; 12 days 12:00:00; 4 days 06:00:00; 24:00:00
    (3 rows)
    ```

    By default, the delimiter is empty.

    ```
    openGauss=# SELECT deptno, listagg(job) WITHIN GROUP(ORDER BY job) AS jobs FROM emp GROUP BY deptno;
     deptno |                     jobs                     
    --------+----------------------------------------------
         10 | CLERKMANAGERPRESIDENT
         20 | ANALYSTANALYSTCLERKCLERKMANAGER
         30 | CLERKMANAGERSALESMANSALESMANSALESMANSALESMAN
    (3 rows)
    ```

    When  **listagg**  is used as a window function, the  **OVER**  clause does not support the window sorting of  **ORDER BY**, and the  **listagg**  column is an ordered aggregation of the corresponding groups.

    ```
    openGauss=# SELECT deptno, mgrno, bonus, listagg(ename,'; ') WITHIN GROUP(ORDER BY hiredate) OVER(PARTITION BY deptno) AS employees FROM emp;
     deptno | mgrno |  bonus   |                 employees                 
    --------+-------+----------+-------------------------------------------
         10 |  7839 | 10000.01 | CLARK; KING; MILLER
         10 |       | 23011.88 | CLARK; KING; MILLER
         10 |  7782 | 10234.21 | CLARK; KING; MILLER
         20 |  7566 |  2002.12 | FORD; SCOTT; ADAMS; SMITH; JONES
         20 |  7566 |  1001.01 | FORD; SCOTT; ADAMS; SMITH; JONES
         20 |  7788 |  1100.00 | FORD; SCOTT; ADAMS; SMITH; JONES
         20 |  7902 |  2000.80 | FORD; SCOTT; ADAMS; SMITH; JONES
         20 |  7839 |   999.10 | FORD; SCOTT; ADAMS; SMITH; JONES
         30 |  7839 |  2399.50 | BLAKE; TURNER; JAMES; MARTIN; WARD; ALLEN
         30 |  7698 |     9.00 | BLAKE; TURNER; JAMES; MARTIN; WARD; ALLEN
         30 |  7698 |  1000.22 | BLAKE; TURNER; JAMES; MARTIN; WARD; ALLEN
         30 |  7698 |    99.99 | BLAKE; TURNER; JAMES; MARTIN; WARD; ALLEN
         30 |  7698 |  1000.01 | BLAKE; TURNER; JAMES; MARTIN; WARD; ALLEN
         30 |  7698 |   899.00 | BLAKE; TURNER; JAMES; MARTIN; WARD; ALLEN
    (14 rows)
    ```

- group_concat\(\[DISTINCT | ALL] expression \[,expression ...\] \[ORDER BY \{ expression \[ \[ ASC | DESC | USING operator \] | nlssort_expression_clause \] \[ NULLS \{ FIRST | LAST \} \] \} \[,...\]\] \[SEPARATOR str_val\]\)

    Description: (Available only in B-compatible mode) The number of parameters is not fixed. Multiple columns can be concatenated. Aggregation column data is sorted based on the value of **ORDER BY** and concatenated into a character string using the separator. This function cannot be used as a window function.

    -   **DISTINCT**: Optional. It deduplicates the result after each row is concatenated.
    -   **expression**: Mandatory. It specifies the aggregation column name or a valid column-based expression.
    -   **ORDER BY**: Optional. It is followed by a variable expression and sorting rule. The group_concat function does not support the (ORDER BY + number) format.
    -   **SEPARATOR**: Optional. It is followed by a CONST character (string). This separator is used to concatenate the expression results of two adjacent lines in a group. If this parameter is not specified, **','** is used by default.
    -   When both DISTINCT and ORDER BY are specified, all ORDER BY expressions of openGauss must be in DISTINCT expressions. Otherwise, an error is reported.

    Return type: text

    Example:

    Set **separator** to **';'**.
    ```
    test=# select id, group_concat(v separator ';') from t group by id order by id asc;
     id | group_concat
    ----+--------------
      1 | A;C;A
      2 | B;D;B
    (2 rows)
    ```

    By default, the separator is ','.
    ```
    test=# select id, group_concat(id,v) from t group by id order by id asc;
     id | group_concat
    ----+--------------
      1 | 1A,1C,1A
      2 | 2B,2D,2B
    (2 rows)
    ```

    The aggregation column is of the text character set type.
    ```
    test=# select id, group_concat(v) from t group by id order by id asc;
     id | group_concat
    ----+--------------
      1 | A,C,A
      2 | B,D,B
    (2 rows)
    ```

    The aggregation column is of the integer type.
    ```
    test=# select id, group_concat(v separator ';') from t group by id order by id asc;
     id | group_concat
    ----+--------------
      1 | 50;99
      2 | 20;100
    (2 rows)
    ```

    The aggregation column is of the floating point type.
    ```
    test=# select id, group_concat(v separator ';') from t group by id order by id asc;
     id | group_concat
    ----+--------------
      1 | 50.11;99.33
      2 | 20.22;100.44
    (2 rows)
    ```

    The aggregation column is of the time type.
    ```
    test=# select id, group_concat(hiredate separator ';') from t group by id order by id asc;
      id |                     group_concat
    ----+-------------------------------------------------------
       1 | 2022-08-22 10:51:29.374948;2022-08-22 10:51:29.374948
       2 | 2022-08-22 10:51:29.374948;2022-08-22 10:51:29.374948
    (2 rows)
    ```

    The aggregation column is of the binary type.
    ```
    test=# select id, group_concat(v separator ';') from t group by id order by id asc;
     id | group_concat
    ----+--------------
      1 | 19;1B
      2 | 1A;1C
    (2 rows)
    ```

    The aggregation column is of the time interval type.
    ```
    test=# select id, group_concat(vacationt separator ';') from t group by id order by id asc;
     id |                    group_concat
    ----+-----------------------------------------------------
      1 | 8785 days 11:04:01.510189;8783 days 11:04:01.510189
      2 | 8784 days 11:04:01.510189;8782 days 11:04:01.510189
    (2 rows)
    ```

    Use DISTINCT to deduplicate data.
    ```
    test=# select id, group_concat(distinct v) from t group by id order by id asc;
     id | group_concat
    ----+--------------
      1 | A,C
      2 | B,D
    (2 rows)
    ```

    Use ORDER BY to sort data.
    ```
    test=# select id, group_concat(v order by v desc) from t group by id order by id asc;
     id | group_concat
    ----+--------------
      1 | C,A,A
      2 | D,B,B
    (2 rows)
    ```

-   covar\_pop\(Y, X\)

    Description: Specifies the overall covariance.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT COVAR_POP(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
        covar_pop     
    ------------------
     829.749627587403
    (1 row)
    ```

-   covar\_samp\(Y, X\)

    Description: Specifies the sample covariance.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT COVAR_SAMP(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
        covar_samp    
    ------------------
     830.052235037289
    (1 row)
    ```

-   stddev\_pop\(expression\)

    Description: Specifies the overall standard deviation.

    Return type:  **double precision**  for floating-point arguments, otherwise  **numeric**

    Example:

    ```
    openGauss=# SELECT STDDEV_POP(inv_quantity_on_hand) FROM tpcds.inventory WHERE inv_warehouse_sk = 1;
        stddev_pop    
    ------------------
     289.224294957556
    (1 row)
    ```

-   stddev\_samp\(expression\)

    Description: Specifies the sample standard deviation of the input values.

    Return type:  **double precision**  for floating-point arguments, otherwise  **numeric**

    Example:

    ```
    openGauss=# SELECT STDDEV_SAMP(inv_quantity_on_hand) FROM tpcds.inventory WHERE inv_warehouse_sk = 1;
       stddev_samp    
    ------------------
     289.224359757315
    (1 row)
    ```

-   var\_pop\(expression\)

    Description: Specifies the population variance of the input values \(square of the population standard deviation\).

    Return type:  **double precision**  for floating-point arguments, otherwise  **numeric**

    Example:

    ```
    openGauss=# SELECT VAR_POP(inv_quantity_on_hand) FROM tpcds.inventory WHERE inv_warehouse_sk = 1;
          var_pop       
    --------------------
     83650.692793695475
    (1 row)
    ```

-   var\_samp\(expression\)

    Description: Specifies the sample variance of the input values \(square of the sample standard deviation\).

    Return type:  **double precision**  for floating-point arguments, otherwise  **numeric**

    Example:

    ```
    openGauss=# SELECT VAR_SAMP(inv_quantity_on_hand) FROM tpcds.inventory WHERE inv_warehouse_sk = 1;
          var_samp      
    --------------------
     83650.730277028768
    (1 row)
    ```

-   bit\_and\(expression\)

    Description: bitwise AND of all non-null input values, or null if none

    Return type: same as the argument type

    Example:

    ```
    openGauss=# SELECT BIT_AND(inv_quantity_on_hand) FROM tpcds.inventory WHERE inv_warehouse_sk = 1;
     bit_and 
    ---------
           0
    (1 row)
    ```

-   bit\_or\(expression\)

    Description: bitwise OR of all non-null input values, or null if none

    Return type: same as the argument type

    Example:

    ```
    openGauss=# SELECT BIT_OR(inv_quantity_on_hand) FROM tpcds.inventory WHERE inv_warehouse_sk = 1;
     bit_or 
    --------
       1023
    (1 row)
    ```

-   bool\_and\(expression\)

    Description: Its value is  **true**  if all input values are  **true**, otherwise  **false**.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT bool_and(100 <2500);
     bool_and
    ----------
     t
    (1 row)
    ```

-   bool\_or\(expression\)

    Description: Its value is  **true**  if at least one input value is  **true**, otherwise  **false**.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT bool_or(100 <2500);
     bool_or
    ----------
     t
    (1 row)
    ```

-   corr\(Y, X\)

    Description: Specifies the correlation coefficient.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT CORR(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
           corr        
    -------------------
     .0381383624904186
    (1 row)
    ```

-   every\(expression\)

    Description: Equivalent to  **bool\_and**

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT every(100 <2500);
     every
    -------
     t
    (1 row)
    ```

-   regr\_avgx\(Y, X\)

    Description: Specifies the average of the independent variable \(**sum\(X\)/N**\).

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT REGR_AVGX(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
        regr_avgx     
    ------------------
     578.606576740795
    (1 row)
    ```

-   regr\_avgy\(Y, X\)

    Description: Specifies the average of the dependent variable \(**sum\(Y\)/N**\).

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT REGR_AVGY(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
        regr_avgy     
    ------------------
     50.0136711629602
    (1 row)
    ```

-   regr\_count\(Y, X\)

    Description: Specifies the number of input rows in which both expressions are non-null.

    Return type: bigint

    Example:

    ```
    openGauss=# SELECT REGR_COUNT(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
     regr_count 
    ------------
           2743
    (1 row)
    ```

-   regr\_intercept\(Y, X\)

    Description: Specifies the y-intercept of the least-squares-fit linear equation determined by the \(X, Y\) pairs.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT REGR_INTERCEPT(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
      regr_intercept  
    ------------------
     49.2040847848607
    (1 row)
    ```

-   regr\_r2\(Y, X\)

    Description: Specifies the square of the correlation coefficient.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT REGR_R2(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
          regr_r2       
    --------------------
     .00145453469345058
    (1 row)
    ```

-   regr\_slope\(Y, X\)

    Description: Specifies the slope of the least-squares-fit linear equation determined by the \(X, Y\) pairs.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT REGR_SLOPE(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
         regr_slope     
    --------------------
     .00139920009665259
    (1 row)
    ```

-   regr\_sxx\(Y, X\)

    Description:  **sum\(X^2\) - sum\(X\)^2/N **\(sum of squares of the independent variables\)

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT REGR_SXX(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
         regr_sxx     
    ------------------
     1626645991.46135
    (1 row)
    ```

-   regr\_sxy\(Y, X\)

    Description:  **sum\(X\*Y\) - sum\(X\) \* sum\(Y\)/N**  \("sum of products" of independent times dependent variable\)

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT REGR_SXY(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
         regr_sxy     
    ------------------
     2276003.22847225
    (1 row)
    ```

-   regr\_syy\(Y, X\)

    Description:  **sum\(Y^2\) - sum\(Y\)^2/N**  \("sum of squares" of the dependent variable\)

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT REGR_SYY(sr_fee, sr_net_loss) FROM tpcds.store_returns WHERE sr_customer_sk < 1000;
        regr_syy     
    -----------------
     2189417.6547314
    (1 row)
    ```

-   stddev\(expression\)

    Description: Specifies the alias of  **stddev\_samp**.

    Return type:  **double precision**  for floating-point arguments, otherwise  **numeric**

    Example:

    ```
    openGauss=# SELECT STDDEV(inv_quantity_on_hand) FROM tpcds.inventory WHERE inv_warehouse_sk = 1;
          stddev      
    ------------------
     289.224359757315
    (1 row)
    ```

-   variance\(expexpression,ression\)

    Description: Specifies the alias of  **var\_samp**.

    Return type:  **double precision**  for floating-point arguments, otherwise  **numeric**

    Example:

    ```
    openGauss=# SELECT VARIANCE(inv_quantity_on_hand) FROM tpcds.inventory WHERE inv_warehouse_sk = 1;
          variance      
    --------------------
     83650.730277028768
    (1 row)
    ```

-   delta

    Description: Returns the difference between the current row and the previous row.

    Parameter: numeric

    Return type: numeric

-   checksum\(expression\)

    Description: Returns the  **CHECKSUM**  value of all input values. This function can be used to check whether the data in the tables is the same before and after the backup, restoration, or migration of the openGauss database \(databases other than openGauss are not supported\). Before and after database backup, database restoration, or data migration, you need to manually run SQL commands to obtain the execution results. Compare the obtained execution results to check whether the data in the tables before and after the backup or migration is the same.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   For large tables, the execution of the  **CHECKSUM**  function may take a long time.
    >-   If the  **CHECKSUM**  values of two tables are different, it indicates that the contents of the two tables are different. Using the hash function in the  **CHECKSUM**  function may incur conflicts. There is low possibility that two tables with different contents may have the same  **CHECKSUM**  value. The same problem may occur when  **CHECKSUM**  is used for columns.
    >-   If the time type is timestamp, timestamptz, or smalldatetime, ensure that the time zone settings are the same when calculating the  **CHECKSUM**  value.

    -   If the  **CHECKSUM**  value of a column is calculated and the column type can be changed to TEXT by default, set  *expression*  to the column name.
    -   If the  **CHECKSUM**  value of a column is calculated and the column type cannot be converted to TEXT by default, set  *expression*  to  *Column name***::TEXT**.
    -   If the  **CHECKSUM**  value of all columns is calculated, set  *expression*  to  *Table name***::TEXT**.

    The following types of data can be converted into TEXT types by default: char, name, int8, int2, int1, int4, raw, pg\_node\_tree, float4, float8, bpchar, varchar, nvarchar, nvarchar2, date, timestamp, timestamptz, numeric, and smalldatetime. Other types need to be forcibly converted to TEXT.

    Return type: numeric

    Example:

    The following shows the  **CHECKSUM**  value of a column that can be converted to the TEXT type by default:

    ```
    openGauss=# SELECT CHECKSUM(inv_quantity_on_hand) FROM tpcds.inventory;
         checksum      
    -------------------
     24417258945265247
    (1 row)
    ```

    The following shows the  **CHECKSUM**  value of a column that cannot be converted to the TEXT type by default. Note that the  **CHECKSUM**  parameter is set to  *Column name***::TEXT**.

    ```
    openGauss=# SELECT CHECKSUM(inv_quantity_on_hand::TEXT) FROM tpcds.inventory;
         checksum      
    -------------------
     24417258945265247
    (1 row)
    ```

    The following shows the  **CHECKSUM**  value of all columns in a table. Note that the  **CHECKSUM**  parameter is set to  *Table name***::TEXT**. The table name is not modified by its schema.

    ```
    openGauss=# SELECT CHECKSUM(inventory::TEXT) FROM tpcds.inventory;                    
         checksum      
    -------------------
     25223696246875800
    (1 row)
    ```

-   first\(anyelement\)

    Description: Returns the first non-null input.

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

-   last\(anyelement\)

    Description: Returns the last non-null input.

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

-   mode\(\) within group \(order by value anyelement\)

    Description: Returns the value with the highest occurrence frequency in a column. If multiple values have the same frequency, the smallest value is returned. The sorting mode is the same as the default sorting mode of the column type.  **value**  is an input parameter and can be of any type.

    Return type: same as the input parameter type

    Example:

    ```
    openGauss=# select mode() within group (order by value) from (values(1, 'a'), (2, 'b'), (2, 'c')) v(value, tag);
     mode
    ------
        2
    (1 row)
    openGauss=# select mode() within group (order by tag) from (values(1, 'a'), (2, 'b'), (2, 'c')) v(value, tag);
     mode
    ------
     a
    (1 row)
    ```

-   json\_agg\(any\)

    Description: Aggregates values into a JSON array.

    Return type: array-json

    Example:

    ```
    openGauss=# select * from classes;
    name | score
    -----+-------
    A    |     2
    A    |     3
    D    |     5
    D    |
    (4 rows)
    ```

    ```
    openGauss=# select name, json_agg(score) score from classes group by name order by name;
    name |      score
    -----+-----------------
    A    | [2, 3]
    D    | [5, null]
    | [null]
    (3 rows)
    ```

-   json\_object\_agg\(any, any\)

    Description: Aggregates values into a JSON object.

    Return type: object-json

    Example:

    ```
    openGauss=# select * from classes;
    name | score
    -----+-------
    A    |     2
    A    |     3
    D    |     5
    D    |
    (4 rows)
    ```

    ```
    openGauss=# select json_object_agg(name, score) from classes group by name order by name;
    json_object_agg
    -------------------------
    { "A" : 2, "A" : 3 }
    { "D" : 5, "D" : null }
    (2 rows)
    ```
