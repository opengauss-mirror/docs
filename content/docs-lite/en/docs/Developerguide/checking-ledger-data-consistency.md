# Checking Ledger Data Consistency<a name="EN-US_TOPIC_0000001147007425"></a>

## Prerequisites<a name="en-us_topic_0059778013_sfe45a1031ec347ba820649c0cec52027"></a>

The database is running properly, and a series of addition, deletion, and modification operations are performed on the tamper-proof database to ensure that operation records are generated in the ledger for query.

## Background<a name="en-us_topic_0059778013_s15667753cb2542158661ae3f96cab067"></a>

-   Currently, the ledger database provides two verification interfaces:  [ledger\_hist\_check\(text,...](ledger-database-functions.md#li48809468134)  and  [ledger\_gchain\_check\(text...](ledger-database-functions.md#li6880446141312). When a common user invokes a verification interface, only the tables that the user has the permission to access can be verified.
-   The interface for verifying the tamper-proof user table and user history table is  **pg\_catalog.ledger\_hist\_check**. To verify a table, run the following command:

    ```
    SELECT pg_catalog.ledger_hist_check(schema_name text,table_name text);
    ```

    If the verification is successful, the function returns  **t**. Otherwise, the function returns  **f**.

-   The  **pg\_catalog.ledger\_gchain\_check**  interface is used to check whether the tamper-proof user table, user history table, and global blockchain table are consistent. To verify consistency, run the following command:

    ```
    SELECT pg_catalog.ledger_gchain_check(schema_name text, table_name text);
    ```

    If the verification is successful, the function returns  **t**. Otherwise, the function returns  **f**.


## Procedure<a name="section199001315531"></a>

1.  Check whether the tamper-proof user table  **ledgernsp.usertable**  is consistent with the corresponding user history table.

    ```
    openGauss=# SELECT pg_catalog.ledger_hist_check('ledgernsp', 'usertable');
    ```

    The query result is as follows:

    ```
     ledger_hist_check
    -------------------
     t
    (1 row)
    ```

    The query result shows that the results recorded in the tamper-proof user table and user history table are consistent.

2.  Check whether the records in the tamper-proof  **ledgernsp.usertable**  table are the same as those in the corresponding user history table and global blockchain table.

    ```
    openGauss=#  SELECT pg_catalog.ledger_gchain_check('ledgernsp', 'usertable');
    ```

    The query result is as follows:

    ```
     ledger_gchain_check
    ---------------------
     t
    (1 row)
    ```

    The query result shows that the records of  **ledgernsp.usertable**  in the preceding three tables are consistent and no tampering occurs.


