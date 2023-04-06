# Viewing Historical Operation Records in the Ledger<a name="EN-US_TOPIC_0000001147087459"></a>

## Prerequisites<a name="en-us_topic_0059778013_sfe45a1031ec347ba820649c0cec52027"></a>

-   You are an audit administrator or a role that has the audit administrator permissions.
-   The database is running properly, and a series of addition, deletion, and modification operations are performed on the tamper-proof database to ensure that operation records are generated in the ledger for query.

## Background<a name="en-us_topic_0059778013_s15667753cb2542158661ae3f96cab067"></a>

-   Only users with the  **AUDITADMIN**  attribute can view historical operation records in the ledger. For details about database users and how to create users, see  [Users](users.md).
-   To query the global blockchain table  **gs\_global\_chain**, run the following command:

    ```
    SELECT * FROM gs_global_chain;
    ```

    This table contains 11 fields. For details about the meaning of each field, see  [GS\_GLOBAL\_CHAIN](../DataBaseReference/gs_global_chain.md).

-   To query the user history table in  **BLOCKCHAIN**  schema, the operation is as follows:

    For example, the schema of the user table is  **ledgernsp**, the table name is  **usertable**, and the name of the corresponding user history table is  **blockchain.ledgernsp\_usertable\_hist**, you can run the following command:

    ```
    SELECT * FROM blockchain.ledgernsp_usertable_hist;
    ```

    The user history table contains four fields. For details about the meaning of each field, see  [Table 1](overview-leader-database.md#en-us_topic_0059778793_t611ff04302e6463c8850c39d3e1d78fb).

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Generally, the name of a user history table is in the format of blockchain.<_schemaname_\>\_<_tablename_\>\_hist. If the schema name or table name of the tamper-proof user table is too long, the length of the table name generated using the preceding format may exceed the upper limit. In this case, the blockchain.<_schema\_oid_\>\_<_table\_oid_\>\_hist format is used to name the table.


## Procedure<a name="section199001315531"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database, and  **8000**  is the port number.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

3.  View records in the global blockchain table.

    ```
    openGauss=# SELECT * FROM gs_global_chain;
    ```

    The query result is as follows:

    ```
     blocknum |  dbname  | username |           starttime           | relid |  relnsp   |  relname  |     relhash      |            globalhash            |
                    txcommand
    ----------+----------+----------+-------------------------------+-------+-----------+-----------+------------------+----------------------------------+------------------
    ------------------------------------------------------------
            0 | postgres | omm      | 2021-04-14 07:00:46.32757+08  | 16393 | ledgernsp | usertable | a41714001181a294 | 6b5624e039e8aee36bff3e8295c75b40 | insert into ledge
    rnsp.usertable values(1, 'alex'), (2, 'bob'), (3, 'peter');
            1 | postgres | omm      | 2021-04-14 07:01:19.767799+08 | 16393 | ledgernsp | usertable | b3a9ed0755131181 | 328b48c4370faed930937869783c23e0 | update ledgernsp.
    usertable set name = 'bob2' where id = 2;
            2 | postgres | omm      | 2021-04-14 07:01:29.896148+08 | 16393 | ledgernsp | usertable | 0ae4b4e4ed2fcab5 | aa8f0a236357cac4e5bc1648a739f2ef | delete from ledge
    rnsp.usertable where id = 3;
    ```

    The query result indicates that user  **omm**  has consecutively executed three DML commands, including  **INSERT**,  **UPDATE**, and  **DELETE**.

4.  View records in the user history table.

    ```
    openGauss=# SELECT * FROM blockchain.ledgernsp_usertable_hist;
    ```

    The query result is as follows:

    ```
     rec_num |     hash_ins     |     hash_del     |             pre_hash
    ---------+------------------+------------------+----------------------------------
           0 | 1f2e543c580cb8c5 |                  | e1b664970d925d09caa295abd38d9b35
           1 | 8fcd74a8a6a4b484 |                  | dad3ed8939a141bf3682043891776b67
           2 | f51b4b1b12d0354b |                  | 53eb887fc7c4302402343c8914e43c69
           3 | 437761affbb7c605 | 8fcd74a8a6a4b484 | c2868c5b49550801d0dbbbaa77a83a10
           4 |                  | f51b4b1b12d0354b | 9c512619f6ffef38c098477933499fe3
    (5 rows)
    ```

    The query result shows that user  **omm**  inserts three rows of data to the  **ledgernsp.usertable**  table, updates one row of data, deletes one row of data, and leaves two rows of data, and the hash values are  **1f2e543c580cb8c5**  and  **437761affbb7c605**.

5.  Query user table data and hash verification columns.

    ```
    openGauss=# SELECT *, hash FROM ledgernsp.usertable;
    ```

    The query result is as follows:

    ```
     id | name |       hash
    ----+------+------------------
      1 | alex | 1f2e543c580cb8c5
      2 | bob2 | 437761affbb7c605
    (2 rows)
    ```

    The query result indicates that the remaining two records in the user table are the same as those in step 4.


