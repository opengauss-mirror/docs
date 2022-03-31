# Support and Constraints<a name="EN-US_TOPIC_0295970209"></a>

## Supported Scenarios<a name="section1490618598164"></a>

-   Supports statements for querying a single table.
-   Supports UNION ALL for querying multiple single tables.
-   Supports index creation in materialized views.
-   Supports the Analyze operation in materialized views.

## Unsupported Scenarios<a name="section10338102122020"></a>

-   Multi-table join plans and subquery plans are not supported in materialized views.
-   Except for a few ALTER operations, most DDL operations cannot be performed on base tables in materialized views.
-   Materialized views cannot be added, deleted, or modified. They support only query statements.
-   The temporary table, hashbucket, unlog, or partitioned table cannot be used to create materialized views.
-   Materialized views cannot be created in nested mode \(that is, a materialized view cannot be created in another materialized view\).
-   The column-store tables are not supported. Only row-store tables are supported.
-   Materialized views of the UNLOGGED type are not supported, and the WITH syntax is not supported.

## Constraints<a name="section16598132020150"></a>

-   If the materialized view definition is UNION ALL, each subquery needs to use a different base table.
-   When a fast-refresh materialized view is created, fully refreshed, or deleted, a high-level lock is added to the base table. If the materialized view is defined as UNION ALL, pay attention to the service logic to avoid deadlock.

