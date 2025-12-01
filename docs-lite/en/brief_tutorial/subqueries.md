# Subqueries<a name="EN-US_TOPIC_0000001255021825"></a>

A subquery, also called an internal query, is a nested query. The subquery embeds a query statement in the  **WHERE**  clause of a database query and it is equivalent to a temporary table. The query result of a SELECT statement can be used as the input value of another statement.

A subquery can be used with the SELECT, INSERT, UPDATE, and DELETE statements.

The subquery must comply with the following rules:

-   The subquery must be enclosed in parentheses.
-   The subquery can have only one column in the  **SELECT**  clause, unless there are multiple columns in the main query to compare with the columns selected by the subquery.
-   **ORDER BY**  cannot be used in the subquery, although it can be used in the main query.  **GROUP BY**  can be used in the subquery with the same function as  **ORDER BY**.
-   The subquery returns more than one row. It can be used only with multi-value operators, such as IN.
-   The BETWEEN operator cannot be used with the subquery, but it can be used inside the subquery.

## Subquery in the SELECT Statement<a name="section18631621173410"></a>

The SELECT statement queries the data returned by the subquery. The basic syntax is as follows:

```
SELECT column_name [, column_name ]
FROM   table1 [, table2 ]
WHERE  column_name OPERATOR
      (SELECT column_name [, column_name ]
      FROM table1 [, table2 ]
      [WHERE]);
```

Example:

Create the  **customer_t1**  table. The data is as follows:

```
openGauss=# SELECT * FROM customer_t1;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3869 | hello         | Grace        |             |   1000
          3869 |               | Grace        |             |
          3869 | hello         |              |             |
          6985 | maps          | Joes         |             |   2200
          9976 | world         | James        |             |   5000
          4421 | Admin         | Local        |             |   3000
(6 rows)
```

Run the following statement to use a subquery in the SELECT statement:

```
openGauss=# SELECT * FROM customer_t1 WHERE c_customer_sk IN (SELECT c_customer_sk FROM customer_t1 WHERE amount > 2500) ;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          9976 | world         | James        |             |   5000
          4421 | Admin         | Local        |             |   3000
(2 rows)
```

## Subquery in the INSERT Statement<a name="section673219446257"></a>

Subqueries can also be used with the INSERT statement. The INSERT statement inserts the data returned by the subquery into another table. The basic syntax is as follows:

```
INSERT INTO table_name [ (column1 [, column2 ]) ]
SELECT [ *|column1 [, column2 ] ]
FROM table1 [, table2 ]
[ WHERE VALUE OPERATOR ]
```

Example:

Create the  **customer\_bak**  table whose structure is the same as that of the  **customer\_t1**  table.

```
openGauss=# CREATE TABLE customer_bak
(
    c_customer_sk             integer,
    c_customer_id             char(5),
    c_first_name              char(6),
    c_last_name               char(8),
    Amount                    integer
);
CREATE TABLE
```

Insert data in the  **customer\_t1**  table into the  **customer\_bak**  table.

```
openGauss=# INSERT INTO customer_bak SELECT * FROM customer_t1  WHERE c_customer_sk  IN (SELECT c_customer_sk  FROM customer_t1) ;
INSERT 0 6
```

After the data is inserted, data in the  **customer\_bak**  table is as follows:

```
openGauss=# SELECT * FROM customer_bak;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3869 | hello         | Grace        |             |   1000
          3869 |               | Grace        |             |
          3869 | hello         |              |             |
          6985 | maps          | Joes         |             |   2200
          9976 | world         | James        |             |   5000
          4421 | Admin         | Local        |             |   3000
(6 rows)
```

## Subquery in the UPDATE Statement<a name="section9859359182516"></a>

When a subquery is run by executing the UPDATE statement, multiple columns in the table are updated. The basic syntax is as follows:

```
UPDATE table
SET column_name = new_value
[ WHERE OPERATOR [ VALUE ]
   (SELECT COLUMN_NAME
   FROM TABLE_NAME
   [ WHERE ])
```

Example:

Change the value of  **amount**  of all customers whose  **c\_customer\_sk**  is set to a value greater than  **4000**  in the  **customer\_t1**  table to 0.50 times of the original value.

```
openGauss=# UPDATE customer_t1 SET amount = amount * 0.50 WHERE c_customer_sk IN (SELECT c_customer_sk FROM customer_bak WHERE c_customer_sk > 5000 );
UPDATE 2
```

The update operation affects two rows. After the update, the data in the  **customer\_t1**  table is as follows:

```
openGauss=# SELECT *  FROM  customer_t1;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3869 | hello         | Grace        |             |   1000
          3869 |               | Grace        |             |
          3869 | hello         |              |             |
          4421 | Admin         | Local        |             |   3000
          6985 | maps          | Joes         |             |   1100
          9976 | world         | James        |             |   2500
(6 rows)
```

## Subquery in the DELETE Statement<a name="section739691362617"></a>

The basic syntax is as follows:

```
DELETE FROM TABLE_NAME
[ WHERE OPERATOR [ VALUE ]
   (SELECT COLUMN_NAME
   FROM TABLE_NAME
   [ WHERE ])
```

Example:

Delete all customers whose  **c\_customer\_sk**  is set to a value greater than  **4000**  from the  **customer\_t1**  table.

```
openGauss=# DELETE FROM customer_t1 WHERE c_customer_sk IN (SELECT c_customer_sk FROM customer_bak WHERE  c_customer_sk > 5000 );
DELETE 2
```

The deletion operation affects two rows. After deletion, the data in the  **customer\_t1**  table is as follows:

```
openGauss=# SELECT *  FROM  customer_t1;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3869 | hello         | Grace        |             |   1000
          3869 |               | Grace        |             |
          3869 | hello         |              |             |
          4421 | Admin         | Local        |             |   3000
(4 rows)
```

