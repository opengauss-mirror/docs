# Condition Expressions<a name="EN-US_TOPIC_0289899945"></a>

Data that meets the requirements specified by conditional expressions are filtered during SQL statement execution.

Conditional expressions include the following types:

-   CASE

    **CASE**  expressions are similar to the  **CASE**  statements in other coding languages.

    [Figure 1](#en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f6defc8307fd0434380b6ba22838ed5f1)  shows the syntax of a  **CASE**  expression.

    **Figure  1**  case::=<a name="en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f6defc8307fd0434380b6ba22838ed5f1"></a>  
    ![](figures/case.jpg "case")

    A  **CASE**  clause can be used in a valid expression.  **condition**  is an expression that returns a value of Boolean type.

    -   If the result is true, the result of the  **CASE**  expression is the required result.
    -   If the result is false, the following  **WHEN**  or  **ELSE**  clauses are processed in the same way.
    -   If every  **WHEN condition**  is false, the result of the expression is the result of the  **ELSE**  clause. If the  **ELSE**  clause is omitted and has no match condition, the result is NULL.

    Example:

    ```
    openGauss=# CREATE TABLE tpcds.case_when_t1(CW_COL1 INT);
    
    openGauss=# INSERT INTO tpcds.case_when_t1 VALUES (1), (2), (3);
    
    openGauss=# SELECT * FROM tpcds.case_when_t1;
    cw_col1 
    ---------
     1
     2
     3
    (3 rows)
    
    openGauss=# SELECT CW_COL1, CASE WHEN CW_COL1=1 THEN 'one' WHEN CW_COL1=2 THEN 'two' ELSE 'other' END FROM tpcds.case_when_t1 ORDER BY 1;
     cw_col1 | case  
    ---------+-------
           1 | one
           2 | two
           3 | other
    (3 rows)
    
    openGauss=# DROP TABLE tpcds.case_when_t1;
    ```

-   DECODE

    [Figure 2](#en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f8e62b15fa92349339fcdb77fcc5fef4d)  shows the syntax of a  **DECODE**  expression.

    **Figure  2**  decode::=<a name="en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f8e62b15fa92349339fcdb77fcc5fef4d"></a>  
    ![](figures/decode.png "decode")

    Compare each following  **compare\(n\)**  with  **base\_expr**.  **value\(n\)**  is returned if a  **compare\(n\)**  matches the  **base\_expr**  expression. If  **base\_expr**  does not match each  **compare\(n\)**, the default value is returned.

    [Conditional Expression Functions](conditional-expression-functions.md)  describes the examples.

    ```
    openGauss=# SELECT DECODE('A','A',1,'B',2,0);
     case 
    ------
        1
    (1 row)
    ```

-   COALESCE

    [Figure 3](#en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f1877c9f8d2ac4964828a6eaaddf5f35f)  shows the syntax of a  **COALESCE**  expression.

    **Figure  3**  coalesce::=<a name="en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f1877c9f8d2ac4964828a6eaaddf5f35f"></a>  
    ![](figures/coalesce.png "coalesce")

    **COALESCE**  returns its first not-**NULL**  value. If all the parameters are  **NULL**,  **NULL**  is returned. This value is replaced by the default value when data is displayed. Like a  **CASE**  expression,  **COALESCE**  only evaluates the parameters that are needed to determine the result. That is, parameters to the right of the first non-null parameter are not evaluated.

    Example:

    ```
    openGauss=# CREATE TABLE tpcds.c_tabl(description varchar(10), short_description varchar(10), last_value varchar(10)) ;
    
    openGauss=# INSERT INTO tpcds.c_tabl VALUES('abc', 'efg', '123');
    openGauss=# INSERT INTO tpcds.c_tabl VALUES(NULL, 'efg', '123');
    
    openGauss=# INSERT INTO tpcds.c_tabl VALUES(NULL, NULL, '123');
    
    openGauss=# SELECT description, short_description, last_value, COALESCE(description, short_description, last_value) FROM tpcds.c_tabl ORDER BY 1, 2, 3, 4;
     description | short_description | last_value | coalesce
    -------------+-------------------+------------+----------
     abc         | efg               | 123        | abc
                 | efg               | 123        | efg
                 |                   | 123        | 123
    (3 rows)
    
    openGauss=# DROP TABLE tpcds.c_tabl;
    ```

    If  **description**  is not  **NULL**, the value of  **description**  is returned. Otherwise, parameter  **short\_description**  is calculated. If  **short\_description**  is not  **NULL**, the value of  **short\_description**  is returned. Otherwise, parameter  **last\_value**  is calculated. If  **last\_value**  is not  **NULL**, the value of  **last\_value**  is returned. Otherwise,  **none**  is returned.

    ```
    openGauss=# SELECT COALESCE(NULL,'Hello World');
       coalesce    
    ---------------
     Hello World
    (1 row)
    ```

-   NULLIF

    [Figure 4](#en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f6c5bc64bf5de4b728ed1d73d97768e6e)  shows the syntax of a  **NULLIF**  expression.

    **Figure  4**  nullif::=<a name="en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f6c5bc64bf5de4b728ed1d73d97768e6e"></a>  
    ![](figures/nullif.png "nullif")

    Only if  **value1**  is equal to  **value2**  can  **NULLIF**  return the  **NULL**  value. Otherwise,  **value1**  is returned.

    Example:

    ```
    openGauss=# CREATE TABLE tpcds.null_if_t1 (
        NI_VALUE1 VARCHAR(10),
        NI_VALUE2 VARCHAR(10)
    );
    
    openGauss=# INSERT INTO tpcds.null_if_t1 VALUES('abc', 'abc');
    openGauss=# INSERT INTO tpcds.null_if_t1 VALUES('abc', 'efg');
    
    openGauss=# SELECT NI_VALUE1, NI_VALUE2, NULLIF(NI_VALUE1, NI_VALUE2) FROM tpcds.null_if_t1 ORDER BY 1, 2, 3;
    
     ni_value1 | ni_value2 | nullif 
    -----------+-----------+--------
     abc       | abc       | 
     abc       | efg       | abc
    (2 rows)
    openGauss=# DROP TABLE tpcds.null_if_t1;
    ```

    If the value of  **value1**  is equal to that of  **value2**,  **NULL**  is returned. Otherwise, the value of  **value1**  is returned.

    ```
    openGauss=# SELECT NULLIF('Hello','Hello World');
     nullif 
    --------
     Hello
    (1 row)
    ```

-   GREATEST \(maximum value\) and LEAST \(minimum value\)

    [Figure 5](#en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f23a83b0f987a49e0b6890280568afbd2)  shows the syntax of a  **GREATEST**  expression.

    **Figure  5**  greatest::=<a name="en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f23a83b0f987a49e0b6890280568afbd2"></a>  
    ![](figures/greatest.png "greatest")

    You can select the maximum value from any numerical expression list.

    ```
    openGauss=# SELECT greatest(9000,155555,2.01);
     greatest 
    ----------
       155555
    (1 row)
    ```

    [Figure 6](#en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f30a16b0edbde4750a42053619840b384)  shows the syntax of a  **LEAST**  expression.

    **Figure  6**  least::=<a name="en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f30a16b0edbde4750a42053619840b384"></a>  
    ![](figures/least.png "least")

    You can select the minimum value from any numerical expression list.

    Each of the preceding numeric expressions can be converted into a common data type, which will be the data type of the result.

    The NULL values in the list will be ignored. The result is  **NULL**  only if the results of all expressions are  **NULL**.

    ```
    openGauss=# SELECT least(9000,2);
     least 
    -------
         2
    (1 row)
    ```

    [Conditional Expression Functions](conditional-expression-functions.md)  describes the examples.

-   NVL

    [Figure 7](#en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f69cd4e01dd6e4280b756eb98d3c77c91)  shows the syntax of an  **NVL**  expression.

    **Figure  7**  nvl::=<a name="en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f69cd4e01dd6e4280b756eb98d3c77c91"></a>  
    ![](figures/nvl.jpg "nvl")

    If the value of  **value1**  is  **NULL**, the value of  **value2**  is returned. Otherwise, the value of  **value1**  is returned.

    Example:

    ```
    openGauss=# SELECT nvl(null,1);
    nvl 
    -----
     1
    (1 row)
    
    ```

    ```
    openGauss=# SELECT nvl ('Hello World' ,1);
          nvl      
    ---------------
     Hello World
    (1 row)
    ```


