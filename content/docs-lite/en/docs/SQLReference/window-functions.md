# Window Functions<a name="EN-US_TOPIC_0289900123"></a>

## Window Functions<a name="en-us_topic_0283137174_en-us_topic_0237121983_en-us_topic_0059778391_s454ef5048f3142508bc4f06cb3454ebe"></a>

Currently, column-store tables only support  **rank\(expression\)**  and  **row\_number\(expression\)**  functions.

Window functions and the  **OVER**  clause are used together. The  **OVER**  clause is used for grouping data and sorting the elements in a group. Window functions are used for generating sequence numbers for the values in the group.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**order by**  in a window function must be followed by a column name. If it is followed by a number, the number is processed as a constant value and the target column is not ranked.

-   RANK\(\)

    Description: Generates non-consecutive sequence numbers for the values in each group. The same values have the same sequence number.

    Return type: bigint

    Example:

    ```
    openGauss=# SELECT d_moy, d_fy_week_seq, rank() OVER(PARTITION BY d_moy ORDER BY d_fy_week_seq) FROM tpcds.date_dim WHERE d_moy < 4 AND d_fy_week_seq < 7 ORDER BY 1,2;
       d_moy | d_fy_week_seq | rank 
    -------+---------------+------
         1 |             1 |    1
         1 |             1 |    1
         1 |             1 |    1
         1 |             1 |    1
         1 |             1 |    1
         1 |             1 |    1
         1 |             1 |    1
         1 |             2 |    8
         1 |             2 |    8
         1 |             2 |    8
         1 |             2 |    8
         1 |             2 |    8
         1 |             2 |    8
         1 |             2 |    8
         1 |             3 |   15
         1 |             3 |   15
         1 |             3 |   15
         1 |             3 |   15
         1 |             3 |   15
         1 |             3 |   15
         1 |             3 |   15
         1 |             4 |   22
         1 |             4 |   22
         1 |             4 |   22
         1 |             4 |   22
         1 |             4 |   22
         1 |             4 |   22
         1 |             4 |   22
         1 |             5 |   29
         1 |             5 |   29
         2 |             5 |    1
         2 |             5 |    1
         2 |             5 |    1
         2 |             5 |    1
         2 |             5 |    1
         2 |             6 |    6
         2 |             6 |    6
         2 |             6 |    6
         2 |             6 |    6
         2 |             6 |    6
         2 |             6 |    6
         2 |             6 |    6
    (42 rows)
    ```

-   ROW\_NUMBER\(\)

    Description: Generates consecutive sequence numbers for the values in each group. The same values have different sequence numbers.

    Return type: bigint

    Example:

    ```
    openGauss=# SELECT d_moy, d_fy_week_seq, Row_number() OVER(PARTITION BY d_moy ORDER BY d_fy_week_seq) FROM tpcds.date_dim  WHERE d_moy < 4 AND d_fy_week_seq < 7 ORDER BY 1,2;
     d_moy | d_fy_week_seq | row_number 
    -------+---------------+------------
         1 |             1 |          1
         1 |             1 |          2
         1 |             1 |          3
         1 |             1 |          4
         1 |             1 |          5
         1 |             1 |          6
         1 |             1 |          7
         1 |             2 |          8
         1 |             2 |          9
         1 |             2 |         10
         1 |             2 |         11
         1 |             2 |         12
         1 |             2 |         13
         1 |             2 |         14
         1 |             3 |         15
         1 |             3 |         16
         1 |             3 |         17
         1 |             3 |         18
         1 |             3 |         19
         1 |             3 |         20
         1 |             3 |         21
         1 |             4 |         22
         1 |             4 |         23
         1 |             4 |         24
         1 |             4 |         25
         1 |             4 |         26
         1 |             4 |         27
         1 |             4 |         28
         1 |             5 |         29
         1 |             5 |         30
         2 |             5 |          1
         2 |             5 |          2
         2 |             5 |          3
         2 |             5 |          4
         2 |             5 |          5
         2 |             6 |          6
         2 |             6 |          7
         2 |             6 |          8
         2 |             6 |          9
         2 |             6 |         10
         2 |             6 |         11
         2 |             6 |         12
    (42 rows)
    ```

-   DENSE\_RANK\(\)

    Description: Generates consecutive sequence numbers for the values in each group. The same values have the same sequence number.

    Return type: bigint

    Example:

    ```
    openGauss=# SELECT d_moy, d_fy_week_seq, dense_rank() OVER(PARTITION BY d_moy ORDER BY d_fy_week_seq) FROM tpcds.date_dim WHERE d_moy < 4 AND d_fy_week_seq < 7 ORDER BY 1,2;
     d_moy | d_fy_week_seq | dense_rank 
    -------+---------------+------------
         1 |             1 |          1
         1 |             1 |          1
         1 |             1 |          1
         1 |             1 |          1
         1 |             1 |          1
         1 |             1 |          1
         1 |             1 |          1
         1 |             2 |          2
         1 |             2 |          2
         1 |             2 |          2
         1 |             2 |          2
         1 |             2 |          2
         1 |             2 |          2
         1 |             2 |          2
         1 |             3 |          3
         1 |             3 |          3
         1 |             3 |          3
         1 |             3 |          3
         1 |             3 |          3
         1 |             3 |          3
         1 |             3 |          3
         1 |             4 |          4
         1 |             4 |          4
         1 |             4 |          4
         1 |             4 |          4
         1 |             4 |          4
         1 |             4 |          4
         1 |             4 |          4
         1 |             5 |          5
         1 |             5 |          5
         2 |             5 |          1
         2 |             5 |          1
         2 |             5 |          1
         2 |             5 |          1
         2 |             5 |          1
         2 |             6 |          2
         2 |             6 |          2
         2 |             6 |          2
         2 |             6 |          2
         2 |             6 |          2
         2 |             6 |          2
         2 |             6 |          2
    (42 rows)
    ```

-   PERCENT\_RANK\(\)

    Description: Generates corresponding sequence numbers for the values in each group. That is, the function calculates the value according to the formula Sequence number = \(**rank**  - 1\)/\(**total rows**  - 1\).  **rank**  is the corresponding sequence number generated based on the  **RANK**  function for the value and  **totalrows**  is the total number of elements in a group.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT d_moy, d_fy_week_seq, percent_rank() OVER(PARTITION BY d_moy ORDER BY d_fy_week_seq) FROM tpcds.date_dim WHERE d_moy < 4 AND d_fy_week_seq < 7 ORDER BY 1,2;
     d_moy | d_fy_week_seq |   percent_rank   
    -------+---------------+------------------
         1 |             1 |                0
         1 |             1 |                0
         1 |             1 |                0
         1 |             1 |                0
         1 |             1 |                0
         1 |             1 |                0
         1 |             1 |                0
         1 |             2 | .241379310344828
         1 |             2 | .241379310344828
         1 |             2 | .241379310344828
         1 |             2 | .241379310344828
         1 |             2 | .241379310344828
         1 |             2 | .241379310344828
         1 |             2 | .241379310344828
         1 |             3 | .482758620689655
         1 |             3 | .482758620689655
         1 |             3 | .482758620689655
         1 |             3 | .482758620689655
         1 |             3 | .482758620689655
         1 |             3 | .482758620689655
         1 |             3 | .482758620689655
         1 |             4 | .724137931034483
         1 |             4 | .724137931034483
         1 |             4 | .724137931034483
         1 |             4 | .724137931034483
         1 |             4 | .724137931034483
         1 |             4 | .724137931034483
         1 |             4 | .724137931034483
         1 |             5 |  .96551724137931
         1 |             5 |  .96551724137931
         2 |             5 |                0
         2 |             5 |                0
         2 |             5 |                0
         2 |             5 |                0
         2 |             5 |                0
         2 |             6 | .454545454545455
         2 |             6 | .454545454545455
         2 |             6 | .454545454545455
         2 |             6 | .454545454545455
         2 |             6 | .454545454545455
         2 |             6 | .454545454545455
         2 |             6 | .454545454545455
    (42 rows)
    ```

-   CUME\_DIST\(\)

    Description: Generates accumulative distribution sequence numbers for the values in each group. That is, the function calculates the value according to the following formula: Sequence number = Number of rows preceding or peer with current row/Total rows.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT d_moy, d_fy_week_seq, cume_dist() OVER(PARTITION BY d_moy ORDER BY d_fy_week_seq) FROM tpcds.date_dim e_dim WHERE d_moy < 4 AND d_fy_week_seq < 7 ORDER BY 1,2;
     d_moy | d_fy_week_seq |    cume_dist     
    -------+---------------+------------------
         1 |             1 | .233333333333333
         1 |             1 | .233333333333333
         1 |             1 | .233333333333333
         1 |             1 | .233333333333333
         1 |             1 | .233333333333333
         1 |             1 | .233333333333333
         1 |             1 | .233333333333333
         1 |             2 | .466666666666667
         1 |             2 | .466666666666667
         1 |             2 | .466666666666667
         1 |             2 | .466666666666667
         1 |             2 | .466666666666667
         1 |             2 | .466666666666667
         1 |             2 | .466666666666667
         1 |             3 |               .7
         1 |             3 |               .7
         1 |             3 |               .7
         1 |             3 |               .7
         1 |             3 |               .7
         1 |             3 |               .7
         1 |             3 |               .7
         1 |             4 | .933333333333333
         1 |             4 | .933333333333333
         1 |             4 | .933333333333333
         1 |             4 | .933333333333333
         1 |             4 | .933333333333333
         1 |             4 | .933333333333333
         1 |             4 | .933333333333333
         1 |             5 |                1
         1 |             5 |                1
         2 |             5 | .416666666666667
         2 |             5 | .416666666666667
         2 |             5 | .416666666666667
         2 |             5 | .416666666666667
         2 |             5 | .416666666666667
         2 |             6 |                1
         2 |             6 |                1
         2 |             6 |                1
         2 |             6 |                1
         2 |             6 |                1
         2 |             6 |                1
         2 |             6 |                1
    (42 rows)
    ```

-   NTILE\(num\_buckets integer\)

    Description: Equally allocates sequential data sets to the buckets whose quantity is specified by  **num\_buckets**  according to  **num\_buckets integer**  and allocates the bucket number to each row. Divide the partition as evenly as possible.

    Return type: integer

    Example:

    ```
    openGauss=# SELECT d_moy, d_fy_week_seq, ntile(3) OVER(PARTITION BY d_moy ORDER BY d_fy_week_seq) FROM tpcds.date_dim WHERE d_moy < 4 AND d_fy_week_seq < 7 ORDER BY 1,2;
     d_moy | d_fy_week_seq | ntile 
    -------+---------------+-------
         1 |             1 |     1
         1 |             1 |     1
         1 |             1 |     1
         1 |             1 |     1
         1 |             1 |     1
         1 |             1 |     1
         1 |             1 |     1
         1 |             2 |     1
         1 |             2 |     1
         1 |             2 |     1
         1 |             2 |     2
         1 |             2 |     2
         1 |             2 |     2
         1 |             2 |     2
         1 |             3 |     2
         1 |             3 |     2
         1 |             3 |     2
         1 |             3 |     2
         1 |             3 |     2
         1 |             3 |     2
         1 |             3 |     3
         1 |             4 |     3
         1 |             4 |     3
         1 |             4 |     3
         1 |             4 |     3
         1 |             4 |     3
         1 |             4 |     3
         1 |             4 |     3
         1 |             5 |     3
         1 |             5 |     3
         2 |             5 |     1
         2 |             5 |     1
         2 |             5 |     1
         2 |             5 |     1
         2 |             5 |     2
         2 |             6 |     2
         2 |             6 |     2
         2 |             6 |     2
         2 |             6 |     3
         2 |             6 |     3
         2 |             6 |     3
         2 |             6 |     3
    (42 rows)
    ```

-   LAG\(value any \[, offset integer \[, default any \]\]\)

    Description: Generates lag values for the corresponding values in each group. That is, the value of the row obtained by moving forward the row corresponding to the current value by  **offset**  \(integer\) is the sequence number. If the row does not exist after the moving, the result value is the default value. If omitted,  **offset**  defaults to  **1**  and  **default**  to  **NULL**.

    Return type: same as the parameter type

    Example:

    ```
    openGauss=# SELECT d_moy, d_fy_week_seq, lag(d_moy,3,null) OVER(PARTITION BY d_moy ORDER BY d_fy_week_seq) FROM tpcds.date_dim WHERE d_moy < 4 AND d_fy_week_seq < 7 ORDER BY 1,2;
     d_moy | d_fy_week_seq | lag 
    -------+---------------+-----
         1 |             1 |    
         1 |             1 |    
         1 |             1 |    
         1 |             1 |   1
         1 |             1 |   1
         1 |             1 |   1
         1 |             1 |   1
         1 |             2 |   1
         1 |             2 |   1
         1 |             2 |   1
         1 |             2 |   1
         1 |             2 |   1
         1 |             2 |   1
         1 |             2 |   1
         1 |             3 |   1
         1 |             3 |   1
         1 |             3 |   1
         1 |             3 |   1
         1 |             3 |   1
         1 |             3 |   1
         1 |             3 |   1
         1 |             4 |   1
         1 |             4 |   1
         1 |             4 |   1
         1 |             4 |   1
         1 |             4 |   1
         1 |             4 |   1
         1 |             4 |   1
         1 |             5 |   1
         1 |             5 |   1
         2 |             5 |    
         2 |             5 |    
         2 |             5 |    
         2 |             5 |   2
         2 |             5 |   2
         2 |             6 |   2
         2 |             6 |   2
         2 |             6 |   2
         2 |             6 |   2
         2 |             6 |   2
         2 |             6 |   2
         2 |             6 |   2
    (42 rows)
    ```

-   LEAD\(value any \[, offset integer \[, default any \]\]\)

    Description: Generates leading values for the corresponding values in each group. That is, the value of the row obtained by moving backward the row corresponding to the current value by  **offset**  \(integer\) is the sequence number. If the row after the moving exceeds the total number of rows for the current group, the result value is the default value. If omitted,  **offset**  defaults to  **1**  and  **default**  to  **NULL**.

    Return type: same as the parameter type

    Example:

    ```
    openGauss=# SELECT d_moy, d_fy_week_seq, lead(d_fy_week_seq,2) OVER(PARTITION BY d_moy ORDER BY d_fy_week_seq) FROM  tpcds.date_dim WHERE d_moy < 4 AND d_fy_week_seq < 7 ORDER BY 1,2;
    d_moy | d_fy_week_seq | lead
    -------+---------------+------
         1 |             1 |    1
         1 |             1 |    1
         1 |             1 |    1
         1 |             1 |    1
         1 |             1 |    1
         1 |             1 |    2
         1 |             1 |    2
         1 |             2 |    2
         1 |             2 |    2
         1 |             2 |    2
         1 |             2 |    2
         1 |             2 |    2
         1 |             2 |    3
         1 |             2 |    3
         1 |             3 |    3
         1 |             3 |    3
         1 |             3 |    3
         1 |             3 |    3
         1 |             3 |    3
         1 |             3 |    4
         1 |             3 |    4
         1 |             4 |    4
         1 |             4 |    4
         1 |             4 |    4
         1 |             4 |    4
         1 |             4 |    4
         1 |             4 |    5
         1 |             4 |    5
         1 |             5 |     
         1 |             5 |     
         2 |             5 |    5
         2 |             5 |    5
         2 |             5 |    5
         2 |             5 |    6
         2 |             5 |    6
         2 |             6 |    6
         2 |             6 |    6
         2 |             6 |    6
         2 |             6 |    6
         2 |             6 |    6
         2 |             6 |     
         2 |             6 |     
    (42 rows)
    ```

-   FIRST\_VALUE\(value any\)

    Description: Returns the first value of each group.

    Return type: same as the parameter type

    Example:

    ```
    openGauss=# SELECT d_moy, d_fy_week_seq, first_value(d_fy_week_seq) OVER(PARTITION BY d_moy ORDER BY d_fy_week_seq) FROM tpcds.date_dim WHERE d_moy < 4 AND d_fy_week_seq < 7 ORDER BY 1,2; 
     d_moy | d_fy_week_seq | first_value 
    -------+---------------+-------------
         1 |             1 |           1
         1 |             1 |           1
         1 |             1 |           1
         1 |             1 |           1
         1 |             1 |           1
         1 |             1 |           1
         1 |             1 |           1
         1 |             2 |           1
         1 |             2 |           1
         1 |             2 |           1
         1 |             2 |           1
         1 |             2 |           1
         1 |             2 |           1
         1 |             2 |           1
         1 |             3 |           1
         1 |             3 |           1
         1 |             3 |           1
         1 |             3 |           1
         1 |             3 |           1
         1 |             3 |           1
         1 |             3 |           1
         1 |             4 |           1
         1 |             4 |           1
         1 |             4 |           1
         1 |             4 |           1
         1 |             4 |           1
         1 |             4 |           1
         1 |             4 |           1
         1 |             5 |           1
         1 |             5 |           1
         2 |             5 |           5
         2 |             5 |           5
         2 |             5 |           5
         2 |             5 |           5
         2 |             5 |           5
         2 |             6 |           5
         2 |             6 |           5
         2 |             6 |           5
         2 |             6 |           5
         2 |             6 |           5
         2 |             6 |           5
         2 |             6 |           5
    (42 rows)
    ```

-   LAST\_VALUE\(value any\)

    Description: Returns the last value of each group.

    Return type: same as the parameter type

    Example:

    ```
    openGauss=# SELECT d_moy, d_fy_week_seq, last_value(d_moy) OVER(PARTITION BY d_moy ORDER BY d_fy_week_seq) FROM tpcds.date_dim WHERE d_moy < 4 AND d_fy_week_seq < 6 ORDER BY 1,2;
      d_moy | d_fy_week_seq | last_value 
    -------+---------------+------------
         1 |             1 |          1
         1 |             1 |          1
         1 |             1 |          1
         1 |             1 |          1
         1 |             1 |          1
         1 |             1 |          1
         1 |             1 |          1
         1 |             2 |          1
         1 |             2 |          1
         1 |             2 |          1
         1 |             2 |          1
         1 |             2 |          1
         1 |             2 |          1
         1 |             2 |          1
         1 |             2 |          1
         1 |             3 |          1
         1 |             3 |          1
         1 |             3 |          1
         1 |             3 |          1
         1 |             3 |          1
         1 |             3 |          1
         1 |             3 |          1
         1 |             4 |          1
         1 |             4 |          1
         1 |             4 |          1
         1 |             4 |          1
         1 |             4 |          1
         1 |             4 |          1
         1 |             4 |          1
         1 |             5 |          1
         1 |             5 |          1
         2 |             5 |          2
         2 |             5 |          2
         2 |             5 |          2
         2 |             5 |          2
         2 |             5 |          2
    (35 rows)
    ```

-   NTH\_VALUE\(value any, nth integer\)

    Description: Returns the  _n_th row for a group. If the row does not exist,  **NULL**  is returned by default.

    Return type: same as the parameter type

    Example:

    ```
    openGauss=# SELECT d_moy, d_fy_week_seq, nth_value(d_fy_week_seq,6) OVER(PARTITION BY d_moy ORDER BY d_fy_week_seq) FROM tpcds.date_dim WHERE d_moy < 4 AND d_fy_week_seq < 6 ORDER BY 1,2;
     d_moy | d_fy_week_seq | nth_value 
    -------+---------------+-----------
         1 |             1 |         1
         1 |             1 |         1
         1 |             1 |         1
         1 |             1 |         1
         1 |             1 |         1
         1 |             1 |         1
         1 |             1 |         1
         1 |             2 |         1
         1 |             2 |         1
         1 |             2 |         1
         1 |             2 |         1
         1 |             2 |         1
         1 |             2 |         1
         1 |             2 |         1
         1 |             3 |         1
         1 |             3 |         1
         1 |             3 |         1
         1 |             3 |         1
         1 |             3 |         1
         1 |             3 |         1
         1 |             3 |         1
         1 |             4 |         1
         1 |             4 |         1
         1 |             4 |         1
         1 |             4 |         1
         1 |             4 |         1
         1 |             4 |         1
         1 |             4 |         1
         1 |             5 |         1
         1 |             5 |         1
         2 |             5 |          
         2 |             5 |          
         2 |             5 |          
         2 |             5 |          
         2 |             5 |          
    (35 rows)
    ```


