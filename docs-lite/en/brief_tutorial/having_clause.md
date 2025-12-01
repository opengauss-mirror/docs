# HAVING Clause<a name="EN-US_TOPIC_0000001255341781"></a>

The  **HAVING**  clause filters data after grouping.

The  **WHERE**  clause sets conditions on selected columns, while the  **HAVING**  clause sets conditions on groups created by the  **GROUP BY**  clause.

## Syntax<a name="section108517702319"></a>

```
SELECT 
{ * | [column, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY grouping_element [, ...] ]
[ HAVING condition [, ...] ]
[ ORDER BY {expression [ ASC | DESC ] }];
```

## Parameter Description<a name="section1376271572414"></a>

-   **HAVING clause**

    Selects special groups by working with the  **GROUP BY**  clause. The  **HAVING**  clause compares some attributes of groups with a constant. Only groups that match the logical expression in the  **HAVING**  clause are extracted.


## Examples<a name="section9965828102619"></a>

In the following example, data is grouped based on the value of  **c\_first\_name**  which is less than  **2**.

```
openGauss=# SELECT c_first_name FROM customer_t1 GROUP BY c_first_name HAVING count(c_first_name) < 2;
```

The result is as follows:

```
 c_first_name
--------------
 James
 Local

 Joes
(4 rows)
```

In the following example, data is grouped based on the value of  **c\_first\_name**  which is greater than  **1**.

```
openGauss=# SELECT c_first_name FROM customer_t1 GROUP BY c_first_name HAVING count(c_first_name) > 1;
```

The result is as follows:

```
 c_first_name
--------------
 Grace
 Lily
(2 rows)
```

