# Archiving a Ledger Database<a name="EN-US_TOPIC_0000001099967652"></a>

## Prerequisites<a name="en-us_topic_0059778013_sfe45a1031ec347ba820649c0cec52027"></a>

-   You are an audit administrator or a role that has the audit administrator permissions.
-   The database is running properly, and a series of addition, deletion, and modification operations are performed on the tamper-proof database to ensure that operation records are generated in the ledger for query.
-   The storage path  **audit\_directory**  of audit files has been correctly configured in the database.

## Context<a name="en-us_topic_0059778013_s15667753cb2542158661ae3f96cab067"></a>

-   Currently, the ledger database provides two archiving interfaces:  [ledger\_hist\_archive\(text...](../SQLReference/ledger-database-functions.md#li18806468138)  and  [ledger\_gchain\_archive\(vo...](../SQLReference/ledger-database-functions.md#li988064691317). Only the audit administrator can invoke the ledger database interfaces.
-   The interface for archiving the user history table is  **pg\_catalog.ledger\_hist\_archive**. To archive the table, run the following command:

    ```
    SELECT pg_catalog.ledger_hist_archive(schema_name text,table_name text);
    ```

    If the archiving is successful, the function returns  **t**. Otherwise, the function returns  **f**.

-   The interface for archiving the global blockchain table is  **pg\_catalog.ledger\_gchain\_archive**. To archive the table, run the following command:

    ```
    SELECT pg_catalog.ledger_gchain_archive();
    ```

    If the archiving is successful, the function returns  **t**. Otherwise, the function returns  **f**.


## Procedure<a name="section199001315531"></a>

1.  Archive a specified user history table.

    ```
    openGauss=# SELECT pg_catalog.ledger_hist_archive('ledgernsp', 'usertable')
    ```

    The command output is as follows:

    ```
     ledger_hist_archive
    ---------------------
     t
    (1 row)
    ```

    The user history table is archived as a record:

    ```
    openGauss=# SELECT * FROM blockchain.ledgernsp_usertable_hist;
     rec_num |     hash_ins     |     hash_del     |             pre_hash
    ---------+------------------+------------------+----------------------------------
           3 | e78e75b00d396899 | 8fcd74a8a6a4b484 | fd61cb772033da297d10c4e658e898d7
    (1 row)
    ```

    The command output indicates that the user history table of the current node is exported successfully.

2.  Export the global blockchain table.

    ```
    openGauss=# SELECT pg_catalog.ledger_gchain_archive();
    ```

    The command output is as follows:

    ```
     ledger_gchain_archive
    -----------------------
     t
    (1 row)
    ```

    The global history table will be archived to  _n_  \(number of user tables\) data records by user table:

    ```
    openGauss=# SELECT * FROM gs_global_chain;
     blocknum |  dbname  | username |           starttime           | relid |  relnsp   |  relname  |     relhash      |            globalhash            | txcommand
    ----------+----------+----------+-------------------------------+-------+-----------+-----------+------------------+----------------------------------+-----------
            1 | postgres | libc     | 2021-05-10 19:59:38.619472+08 | 16388 | ledgernsp | usertable | 57c101076694b415 | be82f98ee68b2bc4e375f69209345406 | Archived.
    (1 row)
    ```

    The command output indicates that the global blockchain table of the current node is successfully exported.


