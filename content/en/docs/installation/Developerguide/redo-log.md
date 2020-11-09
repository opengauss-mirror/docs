# REDO LOG<a name="EN-US_TOPIC_0257867366"></a>

-   enable\_redo\_log = true

    Specifies whether to use the redo log for durability. See the ++ section for more information about redo logs.

-   enable\_group\_commit = false

    Specifies whether to use group commit.

    This option is only relevant when GaussDB is configured to use synchronous commit, meaning only when the synchronous\_commit setting in postgresql.conf is configured to any value other than off.

-   group\_commit\_size = 16
-   group\_commit\_timeout = 10 ms

    Defines the group size and timeout period when group commit is enabled.

    Each commit group is closed after either the configured number of transactions has arrived or after the configured timeout period since the group was opened. After the group is closed, all the transactions in the group wait for a group flush to complete execution and then notify the client that each transaction has ended.


