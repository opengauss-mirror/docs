# Repairing a Ledger Database<a name="EN-US_TOPIC_0000001100287468"></a>

## Prerequisites<a name="en-us_topic_0059778013_sfe45a1031ec347ba820649c0cec52027"></a>

-   You are an audit administrator or a role that has the audit administrator permissions.
-   The database is running properly, and a series of addition, deletion, and modification operations are performed on the tamper-proof database to ensure that operation records are generated in the ledger for query.

## Context<a name="en-us_topic_0059778013_s15667753cb2542158661ae3f96cab067"></a>

-   When an exception occurs or a global blockchain table or user history table is damaged, you can use the  [ledger\_gchain\_repair\(tex...](ledger-database-functions.md#li1188094681312)  or  [ledger\_hist\_repair\(text,...](../SQLReference/ledger-database-functions.md#li688019463130)  interface to repair the table. After the fault is rectified, the result of invoking the global blockchain table or user history table verification interface is  **true**.
-   The interface for repairing a user history table is  **pg\_catalog.ledger\_hist\_repair**. To repair the table, run the following command:

    ```
    SELECT pg_catalog.ledger_hist_repair(schema_name text,table_name text);
    ```

    If the repair is successful, the function returns the hash increment of the user history table during the repair.

-   The interface for repairing the global blockchain table is  **pg\_catalog.ledger\_gchain\_repair**. To repair the table, run the following command:

    ```
    SELECT pg_catalog.ledger_gchain_repair(schema_name text,table_name text);
    ```

    If the repair is successful, the function returns the hash increment of the global blockchain table during the repair.


## Procedure<a name="section199001315531"></a>

1.  Repair a specified user history table.

    ```
    openGauss=# SELECT pg_catalog.ledger_hist_repair('ledgernsp', 'usertable');
    ```

    The query result is as follows:

    ```
     ledger_hist_repair
    --------------------
     84e8bfc3b974e9cf
    (1 row)
    ```

    The query result indicates that the user history table on the current node is successfully repaired. The hash increment of the user history table is  **84e8bfc3b974e9cf**.

2.  Repair a specified global blockchain table.

    ```
    openGauss=# SELECT pg_catalog.ledger_gchain_repair('ledgernsp', 'usertable');
    ```

    The query result is as follows:

    ```
     ledger_gchain_repair
    ----------------------
     a41714001181a294
    (1 row)
    ```

    The query result indicates that the global blockchain table is successfully repaired and a piece of repair data is inserted. The hash value is  **a41714001181a294**.


