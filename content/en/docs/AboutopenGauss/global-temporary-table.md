# Global Temporary Table<a name="EN-US_TOPIC_0000001138387371"></a>

## Availability<a name="section5309649"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section47786844"></a>

A temporary table does not guarantee persistency. Its life cycle is usually bound to a session or transaction, which can be used to store temporary data during processing and accelerate query.

## Benefits<a name="section27428414"></a>

This feature improves the expression capability and usability of temporary tables.

## Description<a name="section45529136"></a>

The metadata of the global temporary table is visible to all sessions. After the sessions end, the metadata still exists. The user data, indexes, and statistics of a session are isolated from those of another session. Each session can only view and modify the data submitted by itself.

Global temporary tables have two schemas: ON COMMIT PRESERVE ROWS and ON COMMIT PRESERVE ROWS. In session-based ON COMMIT PRESERVE ROWS schema, user data is automatically cleared when a session ends. In transaction-based ON COMMIT DELETE ROWS schema, user data is automatically cleared when the commit or rollback operation is performed. If the  **ON COMMIT**  option is not specified during table creation, the session level is used by default. Different from local temporary tables, you can specify a schema that does not start with  **pg\_temp\_**  when creating a global temporary table.

## Enhancements<a name="section7109043"></a>

The processing of the global temporary table is added based on the local temporary table.

## Constraints<a name="section06531946143616"></a>

-   Parallel scanning is not supported.
-   Temp tablespace is not supported.
-   Partitions are not supported.
-   GIST indexes are not supported.
-   The user-defined statistics  **pg\_statistic\_ext**  is not supported.
-   ON COMMIT DROP is not supported.
-   Hash bucket cluster storage is not supported.
-   Row store is not supported.

## Dependencies<a name="section63981393"></a>

None

