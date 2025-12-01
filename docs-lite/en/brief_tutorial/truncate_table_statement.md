# TRUNCATE TABLE Statement<a name="EN-US_TOPIC_0000001255341785"></a>

The TRUNCATE TABLE statement deletes table data but does not delete the table structure. You can also execute the DROP TABLE statement to delete a table. However, this statement deletes the table structure together with the table. To insert data into the table, you need to recreate the table.

It has the same effect as an unqualified DELETE statement on each table, but it is faster since it does not actually scan the tables. This is most useful on large tables. In addition, the TRUNCATE TABLE statement immediately releases tablespaces without requiring subsequent VACUUM operations.

## Syntax<a name="en-us_topic_0283137291_en-us_topic_0237122193_en-us_topic_0059777694_s8446a9bd83d843dfa13302117908ed38"></a>

```
TRUNCATE TABLE  table_name ;
```

## Parameter Description<a name="en-us_topic_0283137291_en-us_topic_0237122193_en-us_topic_0059777694_sdbad1b573aae49f5aeba613b6fc3130d"></a>

-   **table\_name**

    Specifies the name \(optionally schema-qualified\) of the target table.

    Value range: an existing table name


## Examples<a name="en-us_topic_0283137291_en-us_topic_0237122193_en-us_topic_0059777694_sfa74039cf5ab429abe7b4980088b2c5e"></a>

Execute the TRUNCATE TABLE statement to delete data from the  **customer\_t1**  table.

```
openGauss=# TRUNCATE TABLE customer_t1;
TRUNCATE TABLE
```

Query the  **customer\_t1**  table. The query result is as follows:

```
openGauss=# SELECT * FROM customer_t1;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
(0 rows)
```

