# REDO LOG \(MOT\)<a name="EN-US_TOPIC_0260488222"></a>

-   enable\_redo\_log = true

    Specifies whether to use the Redo Log for durability. See the ++ section for more information about redo logs.

-   enable\_group\_commit = false

    Specifies whether to use group commit.

    This option is only relevant when openGauss is configured to use synchronous commit, meaning only when the synchronous\_commit setting in postgresql.conf is configured to any value other than off.

    You may refer to ++ for more information.

-   group\_commit\_size = 16
-   group\_commit\_timeout = 10 ms

    This option is only relevant when the MOT engine has been configured to  **Synchronous Group Commit**  logging. This means that the synchronous\_commit setting in postgresql.conf is configured to True and theenable\_group\_commit parameter in the mot.conf configuration file is configured to True.

    Defines which of the following determines when a group of transactions is recorded in the WAL Redo Log –

    group\_commit\_size – The quantity of committed transactions in a group. For example,  **16**  means that when 16 transactions in the same group have been committed by their client application, then an entry is written to disk in the WAL Redo Log for each of the 16 transactions.

    group\_commit\_timeout – A timeout period in ms. For example,  **10**  means that after 10 ms, an entry is written to disk in the WAL Redo Log for each of the transactions in the same group that have been committed by their client application in the lats 10 ms.

    A commit group is closed after either the configured number of transactions has arrived or after the configured timeout period since the group was opened. After the group is closed, all the transactions in the group wait for a group flush to complete execution and then notify the client that each transaction has ended.

    You may refer to ++ for more information about synchronous group commit logging.


