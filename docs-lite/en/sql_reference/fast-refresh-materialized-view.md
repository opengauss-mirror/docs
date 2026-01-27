# Fast-refresh Materialized View<a name="EN-US_TOPIC_0295970206"></a>

## Overview<a name="EN-US_TOPIC_0295970207"></a>

Fast-refresh materialized views can be incrementally refreshed. You need to manually execute statements to incrementally refresh materialized views in a period of time. The difference between the fast-refresh and the complete-refresh materialized views is that the fast-refresh materialized views support only a small number of scenarios. Currently, only base table scanning statements or UNION ALL can be used to create materialized views.

## Usage<a name="EN-US_TOPIC_0295970208"></a>

### Syntax<a name="section1980464963719"></a>

- Create an fast-refresh materialized view.

    ```
    CREATE INCREMENTAL MATERIALIZED VIEW [ view_name ] AS { query_block }; 
    ```

- Fully refresh a materialized view.

    ```
    REFRESH MATERIALIZED VIEW [ view_name ];
    ```

- Incrementally refresh a materialized view.

    ```
    REFRESH INCREMENTAL MATERIALIZED VIEW [ view_name ];
    ```

- Delete a materialized view.

    ```
    DROP MATERIALIZED VIEW [ view_name ];
    ```

- Query a materialized view.

    ```
    SELECT * FROM [ view_name ];
    ```

### Examples<a name="section1433113611463"></a>

```
-- Prepare data.
openGauss=# CREATE TABLE t1(c1 int, c2 int);
openGauss=# INSERT INTO t1 VALUES(1, 1);
openGauss=# INSERT INTO t1 VALUES(2, 2);

-- Create an fast-refresh materialized view.
openGauss=# CREATE INCREMENTAL MATERIALIZED VIEW mv AS SELECT * FROM t1;
CREATE MATERIALIZED VIEW

-- Insert data.
openGauss=# INSERT INTO t1 VALUES(3, 3);
INSERT 0 1

-- Incrementally refresh the materialized view.
openGauss=# REFRESH INCREMENTAL MATERIALIZED VIEW mv;
REFRESH MATERIALIZED VIEW

-- Query the materialized view result.
openGauss=# SELECT * FROM mv;
 c1 | c2 
----+----
  1 |  1
  2 |  2
  3 |  3
(3 rows)

-- Insert data.
openGauss=# INSERT INTO t1 VALUES(4, 4);
INSERT 0 1

-- Fully refresh the materialized view.
openGauss=# REFRESH MATERIALIZED VIEW mv;
REFRESH MATERIALIZED VIEW

-- Query the materialized view result.
openGauss=# select * from mv;
 c1 | c2 
----+----
  1 |  1
  2 |  2
  3 |  3
  4 |  4
(4 rows)

-- Delete the materialized view.
openGauss=# DROP MATERIALIZED VIEW mv;
DROP MATERIALIZED VIEW
```

## Support and Constraints<a name="EN-US_TOPIC_0295970209"></a>

### Supported Scenarios<a name="section1490618598164"></a>

- Supports statements for querying a single table.
- Supports UNION ALL for querying multiple single tables.
- Supports index creation in materialized views.
- Supports the Analyze operation in materialized views.

### Unsupported Scenarios<a name="section10338102122020"></a>

- Multi-table join plans and subquery plans are not supported in materialized views.
- Except for a few ALTER operations, most DDL operations cannot be performed on base tables in materialized views.
- Materialized views cannot be added, deleted, or modified. They support only query statements.
- The temporary table, hashbucket, unlog, or partitioned table cannot be used to create materialized views.
- Materialized views cannot be created in nested mode \(that is, a materialized view cannot be created in another materialized view\).
- The column-store tables are not supported. Only row-store tables are supported.
- Materialized views of the UNLOGGED type are not supported, and the WITH syntax is not supported.

### Constraints<a name="section16598132020150"></a>

- If the materialized view definition is UNION ALL, each subquery needs to use a different base table.
- When a fast-refresh materialized view is created, fully refreshed, or deleted, a high-level lock is added to the base table. If the materialized view is defined as UNION ALL, pay attention to the service logic to avoid deadlock.
