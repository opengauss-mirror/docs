# Conditional Expression Functions<a name="EN-US_TOPIC_0289900535"></a>

## Conditional Expression Functions<a name="en-us_topic_0283136903_en-us_topic_0237121986_en-us_topic_0059778809_s67706c61c09047c4bca384689f7f5c08"></a>

-   coalesce\(expr1, expr2, ..., exprn\)

    Description:

    Returns the first of its parameters that are not null.

    **COALESCE\(expr1, expr2\)**  is equivalent to  **CASE WHEN expr1 IS NOT NULL THEN expr1 ELSE expr2 END**.

    Example:

    ```
    openGauss=# SELECT coalesce(NULL,'hello');
     coalesce
    ----------
     hello
    (1 row)
    ```

    Note:

    -   If all the expressions are equivalent to NULL in the expression list, this function returns  **NULL**.
    -   This value is replaced by the default value when data is displayed.
    -   Like a  **CASE**  expression,  **COALESCE**  only evaluates the parameters that are needed to determine the result. That is, parameters to the right of the first not-**NULL**  parameter are not evaluated.

-   decode\(base\_expr, compare1, value1, Compare2,value2, ... default\)

    Description: Compares  **base\_expr**  with each  **compare\(n\)**  and  **returns value\(n\)**  if they are matched. If  **base\_expr**  does not match each  **compare\(n\)**, the default value is returned.

    Example:

    ```
    openGauss=# SELECT decode('A','A',1,'B',2,0);
     case
    ------
     1
    (1 row)
    ```

-   nullif\(expr1, expr2\)

    Description: Returns  **NULL**  only when  **expr1**  is equal to  **expr2**. Otherwise,  **expr1**  is returned.

    **nullif\(expr1, expr2\)**  is equivalent to  **CASE WHEN expr1 = expr2 THEN NULL ELSE expr1 END**.

    Example:

    ```
    openGauss=# SELECT nullif('hello','world');
     nullif 
    --------
     hello
    (1 row)
    ```

    Note:

    Assume the two parameter data types are different:

    -   If implicit conversion exists between the two data types, implicitly convert the parameter of lower priority to this data type using the data type of higher priority. If the conversion succeeds, computation is performed. Otherwise, an error is returned. Example:

        ```
        openGauss=# SELECT nullif('1234'::VARCHAR,123::INT4);
         nullif 
        --------
           1234
        (1 row)
        ```

        ```
        openGauss=# SELECT nullif('1234'::VARCHAR,'2012-12-24'::DATE);
        ERROR:  invalid input syntax for type timestamp: "1234"
        ```

    -   If implicit conversion is not applied between two data types, an error is returned. Example:

        ```
        openGauss=# SELECT nullif(TRUE::BOOLEAN,'2012-12-24'::DATE);
        ERROR:  operator does not exist: boolean = timestamp without time zone
        LINE 1: SELECT nullif(TRUE::BOOLEAN,'2012-12-24'::DATE) FROM sys_dummy;
        ^
        HINT:  No operator matches the given name and argument type(s). You might need to add explicit type casts.
        ```


-   nvl\( expr1 , expr2 \)

    Description:

    -   If  **expr1**  is  **NULL**,  **expr2**  is returned.
    -   If  **expr1**  is not  **NULL**,  **expr1**  is returned.

    Example:

    ```
    openGauss=# SELECT nvl('hello','world');
      nvl  
    -------
     hello
    (1 row)
    ```

    Note: Parameters  **expr1**  and  **expr2**  can be of any data type. If  **expr1**  and  **expr2**  are of different data types, NVL checks whether  **expr2**  can be implicitly converted to  **expr1**. If it can, the data type of  **expr1**  is returned. Otherwise, an error is returned.

-   greatest\(expr1 \[, ...\]\)

    Description: Selects the largest value from a list of any number of expressions.

    Return type:

    Example:

    ```
    openGauss=# SELECT greatest(1*2,2-3,4-1);
     greatest 
    ----------
            3
    (1 row)
    ```

    ```
    openGauss=# SELECT greatest('HARRY', 'HARRIOT', 'HAROLD');
     greatest 
    ----------
     HARRY
    (1 row)
    ```

-   least\(expr1 \[, ...\]\)

    Description: Selects the smallest value from a list of any number of expressions.

    Example:

    ```
    openGauss=# SELECT least(1*2,2-3,4-1);
     least 
    -------
        -1
    (1 row)
    ```

    ```
    openGauss=# SELECT least('HARRY','HARRIOT','HAROLD');
     least  
    --------
     HAROLD
    (1 row)
    ```

-   EMPTY\_BLOB\(\)

    Description: Initiates a BLOB variable in an  **INSERT**  or an  **UPDATE**  statement to a  **NULL**  value.

    Return type: BLOB

    Example:

    ```
    -- Create a table.
    openGauss=# CREATE TABLE blob_tb(b blob,id int);
    -- Insert data.
    openGauss=# INSERT INTO blob_tb VALUES (empty_blob(),1);
    --Delete the table.
    openGauss=# DROP TABLE blob_tb;
    ```

    Note: The length is 0 obtained using  **DBE\_LOB.GET\_LENGTH**.


