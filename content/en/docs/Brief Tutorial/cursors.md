# Cursors<a name="EN-US_TOPIC_0000001225378503"></a>

To process SQL statements, the stored procedure process assigns a memory segment to store context association. Cursors are handles or pointers pointing to context regions. With cursors, stored procedures can control alterations in context regions.

## Syntax<a name="section1579716574370"></a>

-   Define a cursor.

    ```
    CURSOR cursor_name
        [ BINARY ]  [ NO SCROLL ]  [ { WITH | WITHOUT } HOLD ]
        FOR query ;
    ```

-   Retrieve data by using a created cursor.

    ```
    FETCH [ direction { FROM | IN } ] cursor_name;
    ```

    The  **direction**  clause specifies optional parameters.

    ```
    NEXT
       | PRIOR
       | FIRST
       | LAST
       | ABSOLUTE count
       | RELATIVE count
       | count
       | ALL
       | FORWARD
       | FORWARD count
       | FORWARD ALL
       | BACKWARD
       | BACKWARD count
       | BACKWARD ALL
    ```

-   Reposition a cursor without retrieving any data.

    The MOVE statement works exactly like the FETCH statement, except that it only repositions the cursor and does not return rows.

    ```
    MOVE [ direction [ FROM | IN ] ] cursor_name;
    ```

    The  **direction**  clause specifies optional parameters.

    ```
    NEXT
       | PRIOR
       | FIRST
       | LAST
       | ABSOLUTE count
       | RELATIVE count
       | count
       | ALL
       | FORWARD
       | FORWARD count
       | FORWARD ALL
       | BACKWARD
       | BACKWARD count
       | BACKWARD ALL
    ```

-   Close a cursor and release all resources associated with the cursor.

    ```
    CLOSE { cursor_name | ALL } ;
    ```


## Parameter Description<a name="section1353875110388"></a>

-   **cursor\_name**

    Specifies the name of the cursor to be created or closed.

-   **BINARY**

    Specifies that data retrieved by a cursor will be returned in binary format, not in text format.

-   **NO SCROLL**

    Specifies how a cursor retrieves rows.

    -   **NO SCROLL**: specifies that the cursor cannot be used to retrieve rows in a nonsequential fashion.
    -   Unspecified: Based on the query's execution plan, the system automatically determines whether the cursor can be used to retrieve rows in a nonsequential fashion.

-   **WITH HOLD | WITHOUT HOLD**

    Specifies whether a cursor can be used after the transaction that created it ends.

    -   **WITH HOLD**: The cursor can be used after the transaction that created it ends.
    -   **WITHOUT HOLD**: The cursor cannot be used outside of the transaction that created it.
    -   If neither  **WITH HOLD**  nor  **WITHOUT HOLD**  is specified, the default is  **WITHOUT HOLD**.
    -   Cross-node transactions \(for example, DDL-contained transactions created in openGauss with multiple DBnode\) do not support  **WITH HOLD**.

-   **query**

    Uses the  **SELECT**  or  **VALUES**  clause to specify the rows to be returned by a cursor.

    Value range:  **SELECT**  or  **VALUES**  clause

-   **direction\_clause**

    Defines the fetch direction.

    Value range:

    -   **NEXT**  \(default value\)

        Fetches the next row.

    -   PRIOR

        Fetches the prior row.

    -   FIRST

        Fetches the first row of the query \(same as  **ABSOLUTE 1**\).

    -   LAST

        Fetches the last row of the query \(same as  **ABSOLUTE – 1**\).

    -   ABSOLUTE count

        Fetches the  _count_th row of the query.

        **ABSOLUTE**  fetches are not any faster than navigating to the desired row with a relative move, because the underlying implementation must traverse all the intermediate rows anyway.

        Value range: a possibly-signed integer

        -   If  **count**  is positive, the  _count_th row of the query will be fetched.
        -   If  **count**  is negative, the  _abs\(count\)_th row from the end of the query result will be fetched.
        -   If  **count**  is set to  **0**, the cursor is positioned before the first row.

    -   RELATIVE count

        Fetches the  _count_th succeeding row or the  _count_th prior row.

        Value range: a possibly-signed integer

        -   If  **count**  is positive, the  _count_th succeeding rows will be fetched.
        -   If  **count**  is negative, the  _abs\(count\)_th prior rows will be fetched.
        -   If the current row contains no data,  **RELATIVE 0**  returns  **NULL**.

    -   count

        Fetches the next  _count_  rows \(same as  **FORWARD** _count_\).

    -   ALL

        Fetches all remaining rows \(same as  **FORWARD ALL**\).

    -   FORWARD

        Fetches the next row \(same as  **NEXT**\).

    -   FORWARD count

        Fetches the  _count_  succeeding rows or  _count_  prior rows.

    -   FORWARD ALL

        Fetches all remaining rows.

    -   BACKWARD

        Fetches the prior row \(same as  **PRIOR**\).

    -   BACKWARD count

        Fetches the prior  _count_  rows \(scanning backwards\).

        Value range: a possibly-signed integer

        -   If  **count**  is positive, the prior  _count_  rows will be fetched.
        -   If  **count**  is a negative, the succeeding  _abs \(count\)_  rows will be fetched.
        -   **BACKWARD 0**  re-fetches the current row, if any.

    -   BACKWARD ALL

        Fetches all prior rows \(scanning backwards\).


-   **\{ FROM | IN \} cursor\_name**

    Specifies the cursor name using the keyword  **FROM**  or  **IN**.

    Value range: an existing cursor name

-   **ALL**

    Closes all open cursors.


## Examples<a name="section19525201318500"></a>

Assume that the  **customer\_t1**  table exists and contains the following data:

```
openGauss=# SELECT * FROM customer_t1;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3769 |               | Grace        |             |
          3769 | hello         |              |             |
          6885 | maps          | Joes         |             |   2200
          4321 | tpcds         | Lily         |             |   3000
          9527 | world         | James        |             |   5000
(5 rows)
```

-   Read a table using a cursor.

    ```
    -- Start a transaction.
    openGauss=# START TRANSACTION;
    START TRANSACTION
    
    -- Set up cursor1.
    openGauss=# CURSOR cursor1 FOR SELECT * FROM customer_t1;
    DECLARE CURSOR
    
    -- Fetch the first three rows in cursor1.
    openGauss=# FETCH FORWARD 3 FROM cursor1;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              3769 |               | Grace        |             |
              3769 | hello         |              |             |
              6885 | maps          | Joes         |             |   2200
    (3 rows)
    
    -- Close the cursor and commit the transaction.
    openGauss=# CLOSE cursor1;
    CLOSE CURSOR
    
    -- End the transaction.
    openGauss=# END;
    COMMIT
    ```


-   Read the  **VALUES**  clause using a cursor.

    ```
    -- Start a transaction.
    openGauss=# START TRANSACTION;
    START TRANSACTION
    
    -- Set up cursor2.
    openGauss=# CURSOR cursor2 FOR VALUES(1,2),(0,3) ORDER BY 1;
    DECLARE CURSOR
    
    -- Fetch the first two rows in cursor2.
    openGauss=# FETCH FORWARD 2 FROM cursor2;
     column1 | column2
    ---------+---------
           0 |       3
           1 |       2
    (2 rows)
    
    -- Close the cursor and commit the transaction.
    openGauss=# CLOSE cursor2;
    CLOSE CURSOR
    
    -- End the transaction.
    openGauss=# END;
    COMMIT
    ```

-   Use the  **WITH HOLD**  cursor.

    ```
    -- Start a transaction.
    openGauss=# START TRANSACTION;
    
    -- Set up the WITH HOLD cursor.
    openGauss=# DECLARE cursor1 CURSOR WITH HOLD FOR SELECT * FROM customer_t1;
    
    -- Fetch the first two rows in cursor1.
    openGauss=# FETCH FORWARD 2 FROM cursor1;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              3769 |               | Grace        |             |
              3769 | hello         |              |             |
    (2 rows)
    
    -- End the transaction.
    openGauss=# END;
    COMMIT
    
    -- Fetch the next row in cursor1.
    openGauss=# FETCH FORWARD 1 FROM cursor1;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              6885 | maps          | Joes         |             |   2200
    (1 row)
    
    -- Close the cursor.
    openGauss=# CLOSE cursor1;
    CLOSE CURSOR
    ```

-   Use the MOVE statement.

    ```
    -- Start a transaction.
    openGauss=# START TRANSACTION;
    START TRANSACTION
    
    -- Define cursor1.
    openGauss=# CURSOR cursor1 FOR SELECT * FROM customer_t1;
    DECLARE CURSOR
    
    -- Skip the first three rows in cursor1.
    openGauss=# MOVE FORWARD 1 FROM cursor1;
    MOVE 1
    
    -- Fetch the first two rows in cursor1.
    openGauss=# FETCH 2 FROM cursor1;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              3769 | hello         |              |             |
              6885 | maps          | Joes         |             |   2200
    (2 rows)
    
    
    -- Close the cursor.
    openGauss=# CLOSE cursor1;
    CLOSE CURSOR
    
    -- End the transaction.
    openGauss=# END;
    COMMIT
    ```


