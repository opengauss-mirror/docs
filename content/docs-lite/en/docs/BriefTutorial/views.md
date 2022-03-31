# Views<a name="EN-US_TOPIC_0000001210301874"></a>

A view is a virtual table, not a base table. A database only stores the definition of a view and does not store its data. The data is still stored in the original basic table. If data in the base table changes, the data in the view changes accordingly. In this sense, a view is like a window through which users can know their interested data and data changes in the database.

## Syntax<a name="section1719020102251"></a>

-   Create a view

    ```
    CREATE [ TEMP | TEMPORARY ] VIEW view_name [ ( column_name [, ...] ) ]
         AS query;
    ```

-   Delete a view

    ```
    DROP VIEW  view_name ;
    ```


## Parameter Description<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_s09c14680fd2e44bcb52cb2f114096621"></a>

-   **TEMP | TEMPORARY**

    Creates a temporary view.

-   **view\_name**

    Specifies the name of the view to be created. It is optionally schema-qualified.

    Value range: a string. It must comply with the identifier naming convention.

-   **column\_name**

    Specifies an optional list of names to be used for columns of the view. If not given, the column names are deduced from the query.

    Value range: a string. It must comply with the identifier naming convention.

-   **query**

    Specifies a SELECT or VALUES statement that will provide the columns and rows of a view.


## Examples<a name="section1958392193317"></a>

Create the  **customer\_t1**  table. The data in the table is as follows:

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

Create a view in the  **customer\_t1**  table. The view selects only several columns from the  **customer\_t1**  table.

```
openGauss=# CREATE VIEW CUSTOMER_VIEW AS SELECT  c_first_name, amount FROM customer_t1;
CREATE VIEW
```

You can query the  **CUSTOMER\_VIEW**  view in the same way as querying a table.

```
openGauss=# SELECT * FROM CUSTOMER_VIEW;
```

The results are as follows:

```
c_first_name | amount
--------------+--------
 Grace        |   1000
 Grace        |
              |
 Joes         |   2200
 James        |   5000
 Local        |   3000
(6 rows)
```

After using the view, you can delete it to release space.

```
openGauss=# DROP VIEW CUSTOMER_VIEW;
DROP VIEW
```

