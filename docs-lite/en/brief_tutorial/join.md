# JOIN<a name="EN-US_TOPIC_0000001255221823"></a>

The  **JOIN**  clause is used to combine rows in two or more tables based on the common columns in these tables.

In openGauss, the  **JOIN**  clause has five types of join operations.

-   CROSS JOIN
-   INNER JOIN
-   LEFT OUTER JOIN
-   RIGHT OUTER JOIN
-   FULL OUTER JOIN

**table1**  and  **table2**  are used as examples to describe different types of join operations. The table data is as follows:

```
openGauss=# SELECT * FROM table1;
 name  | city
-------+------
 Joes  | BJ
 Lily  | BJ
 James | SH
 Grace | SZ
(4 rows)

openGauss=# SELECT * FROM table2;
 id | name  | dept
----+-------+-------
  1 | Tommy | IT
  2 | Lily  | IT
  3 | Li    | sales
  4 | Grace | IT
(4 rows)
```

## CROSS JOIN<a name="section273517016141"></a>

CROSS JOIN is a Cartesian product, which refers to any combination of all tuples in two relations.

For example, perform CROSS JOIN operation on  **table1**  and  **table2**. The result is as follows:

```
openGauss=# SELECT * FROM table1 CROSS JOIN table2;
 name  | city | id | name  | dept
-------+------+----+-------+-------
 Joes  | BJ   |  1 | Tommy | IT
 Joes  | BJ   |  2 | Lily  | IT
 Joes  | BJ   |  3 | Li    | sales
 Joes  | BJ   |  4 | Grace | IT
 Lily  | BJ   |  1 | Tommy | IT
 Lily  | BJ   |  2 | Lily  | IT
 Lily  | BJ   |  3 | Li    | sales
 Lily  | BJ   |  4 | Grace | IT
 James | SH   |  1 | Tommy | IT
 James | SH   |  2 | Lily  | IT
 James | SH   |  3 | Li    | sales
 James | SH   |  4 | Grace | IT
 Grace | SZ   |  1 | Tommy | IT
 Grace | SZ   |  2 | Lily  | IT
 Grace | SZ   |  3 | Li    | sales
 Grace | SZ   |  4 | Grace | IT
(16 rows)
```

## INNER JOIN<a name="section16248851415"></a>

When INNER JOIN is used, if the related columns in two tables meet the join conditions, data is extracted from the two tables and combined into a new record to create a result table. That is, in an INNER JOIN query, only the tuples that meet the conditions can be displayed in the result relation.

INNER JOIN is the most common and default join type.

Example: Query the columns whose  **name**  is set to the same value in  **table1**  and  **table2**.

```
openGauss=# SELECT * FROM table1 a INNER JOIN table2 b ON a.name = b.name;
 name  | city | id | name  | dept
-------+------+----+-------+------
 Lily  | BJ   |  2 | Lily  | IT
 Grace | SZ   |  4 | Grace | IT
(2 rows)
```

## LEFT OUTER JOIN<a name="section9773191361416"></a>

In LEFT OUTER JOIN, all tuples in the left table of the keyword are listed. If a matched tuple can be found in the right table, the content of the matched tuple is displayed. If no matched tuple is found in the right table, the corresponding tuple is  **NULL**.

The keyword in the LEFT OUTER JOIN statement is  **LEFT OUTER JOIN**.  **LEFT OUTER JOIN**  indicates that data in the right table must meet the join conditions, and data in the left table is exported regardless of whether it meets the join conditions.

Example:

```
openGauss=# SELECT * FROM table1 a LEFT OUTER JOIN table2 b ON a.name = b.name;
 name  | city | id | name  | dept
-------+------+----+-------+------
 Joes  | BJ   |    |       |
 Lily  | BJ   |  2 | Lily  | IT
 James | SH   |    |       |
 Grace | SZ   |  4 | Grace | IT
(4 rows)
```

## RIGHT OUTER JOIN<a name="section5250122061415"></a>

RIGHT OUTER JOIN is similar to LEFT OUTER JOIN. The difference is that all tuples in the right table of the keyword are listed and the data in the left table must meet the join conditions. The data in the right table is exported regardless of whether it meets the join conditions.

The keyword in the RIGHT OUTER JOIN statement is  **RIGHT OUTER JOIN**.

Example:

```
openGauss=# SELECT * FROM table1 a RIGHT OUTER JOIN table2 b ON a.name = b.name;
 name  | city | id | name  | dept
-------+------+----+-------+-------
 Lily  | BJ   |  2 | Lily  | IT
 Grace | SZ   |  4 | Grace | IT
       |      |  3 | Li    | sales
       |      |  1 | Tommy | IT
(4 rows)
```

## FULL OUTER JOIN<a name="section8954153161410"></a>

In FULL OUTER JOIN, tuples in both the left and right tables are output. If no matched tuple is found,  **NULL**  is used.

Example:

```
openGauss=# SELECT * FROM table1 a FULL OUTER JOIN table2 b ON a.name = b.name;
 name  | city | id | name  | dept
-------+------+----+-------+-------
 Joes  | BJ   |    |       |
 Lily  | BJ   |  2 | Lily  | IT
 James | SH   |    |       |
 Grace | SZ   |  4 | Grace | IT
       |      |  3 | Li    | sales
       |      |  1 | Tommy | IT
(6 rows)
```

