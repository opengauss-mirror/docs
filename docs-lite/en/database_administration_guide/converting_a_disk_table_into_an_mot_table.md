# Converting a Disk Table into an MOT<a name="EN-US_TOPIC_0289899851"></a>

The direct conversion of disk tables into MOTs is not yet possible, meaning that no ALTER TABLE statement yet exists that converts a disk-based table into an MOT.

The following describes how to manually perform a few steps in order to convert a disk-based table into an MOT, as well as how the  **gs\_dump**  tool is used to export data and the  **gs\_restore**  tool is used to import data.

## Prerequisite Check<a name="en-us_topic_0283137611_en-us_topic_0280525135_section7473422"></a>

Check that the schema of the disk table to be converted into an MOT contains all required columns.

Check whether the schema contains any unsupported column data types, as described in the Unsupported Data Types_ _section.

If a specific column is not supported, then it is advised to first create a secondary disk table with an updated schema. This schema is the same as the original table, except that all the unsupported types have been converted into supported types.

Afterwards, use the following script to export this secondary disk table and then import it into an MOT.

## Conversion<a name="en-us_topic_0283137611_en-us_topic_0280525135_section151935"></a>

To covert a disk-based table into an MOT, perform the following:

1.  Suspend application activity.
2.  Use  **gs\_dump**  tool to dump the table's data into a physical file on disk. Make sure to use the  **data only**.
3.  Rename your original disk-based table.
4.  Create an MOT with the same table name and schema. Make sure to use the create FOREIGN keyword to specify that it will be an MOT.
5.  Use  **gs\_restore**  to load/restore data from the disk file into the database table.
6.  Visually/manually verify that all the original data was imported correctly into the new MOT. An example is provided below.
7.  Resume application activity.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>
>In this way, since the table name remains the same, application queries and relevant database stored-procedures will be able to access the new MOT seamlessly without code changes. Please note that MOT does not currently support cross-engine multi-table queries \(such as by using Join, Union and sub-query\) and cross-engine multi-table transactions. Therefore, if an original table is accessed somewhere in a multi-table query, stored procedure or transaction, you must either convert all related disk-tables into MOTs or alter the relevant code in the application or the database.

## Conversion Example<a name="en-us_topic_0283137611_en-us_topic_0280525135_section1367417"></a>

Let's say that you have a database name  **benchmarksql**  and a table named  **customer**  \(which is a disk-based table\) to be migrated it into an MOT.

To migrate the customer table into an MOT, perform the following: 

1.  Check your source table column types. Verify that all types are supported by MOT, refer to section  _Unsupported Data Types_.

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

2.  Check your source table data.

    ```
    benchmarksql=# select * from customer; 
     x | y 
    ---+--- 
     1 | 2 
     3 | 4 
    (2 rows)
    ```

3.  Dump table data only by using  **gs\_dump**.

    ```
    $ gs_dump -Fc benchmarksql -a --table customer -f customer.dump -p 16000
    gs_dump[port='15500'][benchmarksql][2020-06-04 16:45:38]: dump database benchmarksql successfully 
    gs_dump[port='15500'][benchmarksql][2020-06-04 16:45:38]: total time: 332  ms
    ```

4.  Rename the source table name.

    ```
    benchmarksql=# alter table customer rename to customer_bk; 
    ALTER TABLE
    ```

5.  Create the MOT to be the same as the source table.

    ```
    benchmarksql=# create foreign table customer (x int, y int); 
    CREATE FOREIGN TABLE 
    benchmarksql=# select * from customer; 
     x | y 
    ---+--- 
    (0 rows)
    ```

6.  Import the source dump data into the new MOT.

    ```
    $ gs_restore -C -d benchmarksql customer.dump -p 16000
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


