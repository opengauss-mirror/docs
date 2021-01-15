# Usage<a name="EN-US_TOPIC_0295970208"></a>

## Syntax<a name="section1980464963719"></a>

-   Create a incremental materialized view.

    ```
    CREATE INCREMENTAL MATERIALIZED VIEW [ view_name ] AS { query_block }; 
    ```


-   Fullly refresh a materialized view.

    ```
    REFRESH MATERIALIZED VIEW [ view_name ];
    ```


-   Incrementally refresh a materialized view.

    ```
    REFRESH INCREMENTAL MATERIALIZED VIEW [ view_name ];
    ```


-   Delete a materialized view.

    ```
    DROP MATERIALIZED VIEW [ view_name ];
    ```


-   Query a materialized view.

    ```
    SELECT * FROM [ view_name ];
    ```


## Examples<a name="section1433113611463"></a>

```
-- Prepare data.
CREATE TABLE t1(c1 int, c2 int);
INSERT INTO t1 VALUES(1, 1);
INSERT INTO t1 VALUES(2, 2);

-- Create an incremental materialized view.
postgres=# CREATE INCREMENTAL MATERIALIZED VIEW mv AS SELECT * FROM t1;
CREATE MATERIALIZED VIEW

-- Insert data.
postgres=# INSERT INTO t1 VALUES(3, 3);
INSERT 0 1

-- Incrementally refresh a materialized view.
postgres=# REFRESH INCREMENTAL MATERIALIZED VIEW mv;
REFRESH MATERIALIZED VIEW

-- Query the materialized view result.
postgres=# SELECT * FROM mv;
 c1 | c2 
----+----
  1 |  1
  2 |  2
  3 |  3
(3 rows)

-- Insert data.
postgres=# INSERT INTO t1 VALUES(4, 4);
INSERT 0 1

-- Fullly refresh a materialized view.
postgres=# REFRESH MATERIALIZED VIEW mv;
REFRESH MATERIALIZED VIEW

-- Query the materialized view result.
postgres=# select * from mv;
 c1 | c2 
----+----
  1 |  1
  2 |  2
  3 |  3
  4 |  4
(4 rows)

-- Delete a materialized view.
postgres=# DROP MATERIALIZED VIEW mv;
DROP MATERIALIZED VIEW
```

