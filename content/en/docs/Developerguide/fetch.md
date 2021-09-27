# FETCH<a name="EN-US_TOPIC_0289900300"></a>

## Function<a name="en-us_topic_0283137321_en-us_topic_0237122165_en-us_topic_0059778422_s1a1f69e123144a83800629a2d8ab2dba"></a>

**FETCH**  retrieves rows using a previously created cursor.

A cursor has an associated position, which is used by  **FETCH**. The cursor position can be before the first row of the query result, on any particular row of the result, or after the last row of the result.

-   When created, a cursor is positioned before the first row.
-   After fetching some rows, the cursor is positioned on the row most recently retrieved.
-   If  **FETCH**  runs off the end of the available rows then the cursor is left positioned after the last row, or before the first row if fetching backward.
-   **FETCH ALL**  or  **FETCH BACKWARD ALL**  will always leave the cursor positioned after the last row or before the first row.

## Precautions<a name="en-us_topic_0283137321_en-us_topic_0237122165_en-us_topic_0059778422_s000e3e857e5349aa8560855805267e6f"></a>

-   If the cursor is declared with  **NO SCROLL**, backward fetches like  **FETCH BACKWARD**  are not allowed.
-   The forms  **NEXT**,  **PRIOR**,  **FIRST**,  **LAST**,  **ABSOLUTE**, and  **RELATIVE**  fetch a single row after moving the cursor appropriately. If there is no such row, an empty result is returned, and the cursor is left positioned before the first row \(backward fetch\) or after the last row \(forward fetch\) as appropriate.
-   The forms using  **FORWARD**  and  **BACKWARD**  retrieve the indicated number of rows moving in the forward or backward direction, leaving the cursor positioned on the last-returned row or after \(backward fetch\)/before \(forward fetch\) all rows if the  **count**  exceeds the number of rows available.
-   **RELATIVE 0**,  **FORWARD 0**, and  **BACKWARD 0**  all request fetching the current row without moving the cursor, that is, re-fetching the most recently fetched row. This will succeed unless the cursor is positioned before the first row or after the last row; in which case, no row is returned.
-   If the cursor of  **FETCH**  involves a column-store table, backward fetches like  **BACKWARD**  and  **PRIOR**  are not allowed.

## Syntax<a name="en-us_topic_0283137321_en-us_topic_0237122165_en-us_topic_0059778422_sccece13e07c346e8b7e89d726533f687"></a>

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

## Parameter Description<a name="en-us_topic_0283137321_en-us_topic_0237122165_en-us_topic_0059778422_sceb763c430654064b8f61e9aa0792af9"></a>

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

        Fetches the last row of the query \(same as  **ABSOLUTE -1**\).

    -   ABSOLUTE count

        Fetches the  _count_'th row of the query.

        **ABSOLUTE**  fetches are not any faster than navigating to the desired row with a relative move: the underlying implementation must traverse all the intermediate rows anyway.

        Value range: a possibly-signed integer

        -   If  _count_  is positive, the  _count_'th row of the query will be fetched.
        -   If  _count_  is negative, the  **abs\(**_count_**\)**th row from the end of the query result will be fetched.
        -   If  _count_  is set to  **0**, the cursor is positioned before the first row.

    -   RELATIVE count

        Fetches the  _count_'th succeeding row or the  _count_'th prior row if count is negative.

        Value range: a possibly-signed integer

        -   If  _count_  is positive, the  _count_th succeeding row will be fetched.
        -   If  **count**  is a negative integer, fetches the abs\(count\)'th prior row.
        -   If the current row contains no data,  **RELATIVE 0**  returns null.

    -   count

        Fetches the next  _count_  rows \(same as  **FORWARD** _count_\).

    -   ALL

        Fetches all remaining rows \(same as  **FORWARD ALL**\).

    -   FORWARD

        Fetches the next row \(same as  **NEXT**\).

    -   FORWARD count

        Fetches the  _count_  succeeding rows or  _count_  prior rows if  _count_  is negative.

    -   FORWARD ALL

        Fetches all remaining rows.

    -   BACKWARD

        Fetches the prior row \(same as  **PRIOR**\).

    -   BACKWARD count

        Fetches the prior  _count_  rows \(scanning backwards\).

        Value range: a possibly-signed integer

        -   If  _count_  is positive, the prior  _count_  rows will be fetched.
        -   If  _count_  is a negative, the succeeding  _abs \(count\)_  rows will be fetched.
        -   **BACKWARD 0**  re-fetches the current row, if any.

    -   BACKWARD ALL

        Fetches all prior rows \(scanning backwards\).


-   **\{ FROM | IN \} cursor\_name**

    Specifies the cursor name using the keyword  **FROM**  or  **IN**.

    Value range: an existing cursor name


## Examples<a name="en-us_topic_0283137321_en-us_topic_0237122165_en-us_topic_0059778422_s1ee72832a27547e4949061a010e24578"></a>

```
-- (For the SELECT statement, traverse a table using a cursor.) Start a transaction.
openGauss=# START TRANSACTION;

-- Set up cursor1.
openGauss=# CURSOR cursor1 FOR SELECT * FROM tpcds.customer_address ORDER BY 1;

-- Fetch the first three rows in cursor1.
openGauss=# FETCH FORWARD 3 FROM cursor1;
 ca_address_sk |  ca_address_id   | ca_street_number |   ca_street_name   | ca_street_type  | ca_suite_number |     ca_city     |    ca_county    | ca_state |   ca_zip   |  ca_country   | ca_gmt_offset |   ca_location_type   
---------------+------------------+------------------+--------------------+-----------------+-----------------+-----------------+-----------------+----------+------------+---------------+---------------+----------------------
             1 | AAAAAAAABAAAAAAA | 18               | Jackson            | Parkway         | Suite 280       | Fairfield       | Maricopa County | AZ       | 86192      | United States |         -7.00 | condo               
             2 | AAAAAAAACAAAAAAA | 362              | Washington 6th     | RD              | Suite 80        | Fairview        | Taos County     | NM       | 85709      | United States |         -7.00 | condo               
             3 | AAAAAAAADAAAAAAA | 585              | Dogwood Washington | Circle          | Suite Q         | Pleasant Valley | York County     | PA       | 12477      | United States |         -5.00 | single family       
(3 rows)

-- Close the cursor and commit the transaction.
openGauss=# CLOSE cursor1;

-- End the transaction.
openGauss=# END;

-- (For the VALUES clause, traverse the clause using a cursor.) Start a transaction.
openGauss=# START TRANSACTION;

-- Set up cursor2.
openGauss=# CURSOR cursor2 FOR VALUES(1,2),(0,3) ORDER BY 1;

-- Fetch the first two rows in cursor2.
openGauss=# FETCH FORWARD 2 FROM cursor2;
column1 | column2
---------+---------
0 |       3
1 |       2
(2 rows)

-- Close the cursor and commit the transaction.
openGauss=# CLOSE cursor2;

-- End the transaction.
openGauss=# END;

-- (WITH HOLD cursor) Start a transaction.
openGauss=# START TRANSACTION;

-- Set up a WITH HOLD cursor.
openGauss=# DECLARE cursor1 CURSOR WITH HOLD FOR SELECT * FROM tpcds.customer_address ORDER BY 1;

-- Fetch the first two rows in cursor1.
openGauss=# FETCH FORWARD 2 FROM cursor1;
 ca_address_sk |  ca_address_id   | ca_street_number |   ca_street_name   | ca_street_type  | ca_suite_number |     ca_city     |    ca_county    | ca_state |   ca_zip   |  ca_country   | ca_gmt_offset |   ca_location_type   
---------------+------------------+------------------+--------------------+-----------------+-----------------+-----------------+-----------------+----------+------------+---------------+---------------+----------------------
             1 | AAAAAAAABAAAAAAA | 18               | Jackson            | Parkway         | Suite 280       | Fairfield       | Maricopa County | AZ       | 86192      | United States |         -7.00 | condo               
             2 | AAAAAAAACAAAAAAA | 362              | Washington 6th     | RD              | Suite 80        | Fairview        | Taos County     | NM       | 85709      | United States |         -7.00 | condo               
(2 rows)

-- End the transaction.
openGauss=# END;

-- Fetch the next row in cursor1.
openGauss=# FETCH FORWARD 1 FROM cursor1;
 ca_address_sk |  ca_address_id   | ca_street_number |   ca_street_name   | ca_street_type  | ca_suite_number |     ca_city     |    ca_county    | ca_state |   ca_zip   |  ca_country   | ca_gmt_offset |   ca_location_type   
---------------+------------------+------------------+--------------------+-----------------+-----------------+-----------------+-----------------+----------+------------+---------------+---------------+----------------------
             3 | AAAAAAAADAAAAAAA | 585              | Dogwood Washington | Circle          | Suite Q         | Pleasant Valley | York County     | PA       | 12477      | United States |         -5.00 | single family       
(1 row)

-- Close the cursor.
openGauss=# CLOSE cursor1;

```

## Helpful Links<a name="en-us_topic_0283137321_en-us_topic_0237122165_en-us_topic_0059778422_scff73b2bdc594902afb6925b8a3b97ac"></a>

[CLOSE](close.md)  and  [MOVE](move.md)

