# Conversion Example<a name="EN-US_TOPIC_0257867384"></a>

Let’s say that you have a database name  **benchmarksql**  and a table named  **customer**  \(which is a disk-based table\) to be migrated it into a MOT table.

To migrate the customer table into a MOT table, perform the following –

-   Check your source table column types. Verify that all types are supported by MOT, refer to section Unsupported Data Types.

    ```
    benchmarksql-# \d+ customer
                           Table "public.customer"
     Column |  Type   | Modifiers | Storage | Stats target | Description
    --------+---------+-----------+---------+--------------+-------------
     x      | integer |           | plain   |              |
     y      | integer |           | plain   |              |
    Has OIDs: no
    Options: orientation=row, compression=no
    ```

-   Check your source table data.

    ```
    benchmarksql=# select * from customer;
     x | y
    ---+---
     1 | 2
     3 | 4
    (2 rows)
    ```

-   Dump table data only by using  **gs\_dump**.

    ```
    $ gs_dump -Fc benchmarksql -a --table customer -f customer.dump
    gs_dump[port='15500'][benchmarksql][2020-06-04 16:45:38]: dump database benchmarksql successfully
    gs_dump[port='15500'][benchmarksql][2020-06-04 16:45:38]: total time: 332  ms
    Rename the source table name.
    benchmarksql=# alter table customer rename to customer_bk;
    ALTER TABLE
    Create the MOT table to be exactly the same as the source table.
    benchmarksql=# create foreign table customer (x int, y int);
    CREATE FOREIGN TABLE
    benchmarksql=# select * from customer;
     x | y
    ---+---
    (0 rows)
    Import the source dump data into the new MOT table.
    $ gs_restore -C -d benchmarksql customer.dump
    restore operation successful
    total time: 24  ms
    Check that the data was imported successfully.
    benchmarksql=# select * from customer;
     x | y
    ---+---
     1 | 2
     3 | 4
    (2 rows)
     
    benchmarksql=# \d
                                    List of relations
     Schema |    Name     |     Type      | Owner  |             Storage
    --------+-------------+---------------+--------+----------------------------------
     public | customer    | foreign table | aharon |
     public | customer_bk | table         | aharon | {orientation=row,compression=no}
    (2 rows)
    ```


