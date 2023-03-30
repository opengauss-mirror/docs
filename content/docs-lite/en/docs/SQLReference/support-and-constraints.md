# Support and Constraints<a name="EN-US_TOPIC_0295970434"></a>

## Supported Scenarios<a name="section794144810159"></a>

-   Supports the same query scope as the CREATE TABLE AS statement does.
-   Supports index creation in complete-refresh materialized views.
-   Supports ANALYZE and EXPLAIN.

## Unsupported Scenarios<a name="section14823202371412"></a>

Materialized views cannot be added, deleted, or modified. They support only query statements.

## Constraints<a name="section16598132020150"></a>

When a complete-refresh materialized view is refreshed or deleted, a high-level lock is added to the base table. If the definition of a materialized view involves multiple tables, pay attention to the service logic to avoid deadlock.

