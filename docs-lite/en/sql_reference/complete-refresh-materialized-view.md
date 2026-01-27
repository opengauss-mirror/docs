# Complete-refresh Materialized View<a name="EN-US_TOPIC_0295970203"></a>

## Overview<a name="EN-US_TOPIC_0295970204"></a>

Complete-refresh materialized views can be fully refreshed only. The syntax for creating a complete-refresh materialized view is similar to the CREATE TABLE AS syntax.

## Usage<a name="EN-US_TOPIC_0295970205"></a>

### Syntax<a name="section1810714714319"></a>

- Create a complete-refresh materialized view.

    ```
    CREATE MATERIALIZED VIEW [ view_name ] AS { query_block }; 
    ```

- Fully refresh a materialized view.

    ```
    REFRESH MATERIALIZED VIEW [ view_name ];
    ```

- Delete a materialized view.

    ```
    DROP MATERIALIZED VIEW [ view_name ];
    ```

- Query a materialized view.

    ```
    SELECT * FROM [ view_name ];
    ```

### Examples<a name="section653116105315"></a>

```
-- Prepare data.
openGauss=# CREATE TABLE t1(c1 int, c2 int);
openGauss=# INSERT INTO t1 VALUES(1, 1);
openGauss=# INSERT INTO t1 VALUES(2, 2);

-- Create a complete-refresh materialized view.
openGauss=# CREATE MATERIALIZED VIEW mv AS select count(*) from t1;
CREATE MATERIALIZED VIEW

-- Query the materialized view result.
openGauss=# SELECT * FROM mv;
 count 
-------
     2
(1 row)

-- Insert data into the base table in the materialized view.
openGauss=# INSERT INTO t1 VALUES(3, 3);
INSERT 0 1

-- Fully refresh the complete-refresh materialized view.
openGauss=# REFRESH MATERIALIZED VIEW mv;
REFRESH MATERIALIZED VIEW

-- Query the materialized view result.
openGauss=# SELECT * FROM mv;
 count 
-------
     3
(1 row)

-- Delete the materialized view.
openGauss=# DROP MATERIALIZED VIEW mv;
DROP MATERIALIZED VIEW
```

## Support and Constraints<a name="EN-US_TOPIC_0295970434"></a>

### Supported Scenarios<a name="section794144810159"></a>

- Supports the same query scope as the CREATE TABLE AS statement does.
- Supports index creation in complete-refresh materialized views.
- Supports ANALYZE and EXPLAIN.

### Unsupported Scenarios<a name="section14823202371412"></a>

Materialized views cannot be added, deleted, or modified. They support only query statements.

### Constraints<a name="section16598132020150"></a>

When a complete-refresh materialized view is refreshed or deleted, a high-level lock is added to the base table. If the definition of a materialized view involves multiple tables, pay attention to the service logic to avoid deadlock.
