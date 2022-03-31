# Usage<a name="EN-US_TOPIC_0295970205"></a>

## Syntax<a name="section1810714714319"></a>

-   Create a complete-refresh materialized view.

    ```
    CREATE MATERIALIZED VIEW [ view_name ] AS { query_block }; 
    ```


-   Fully refresh a materialized view.

    ```
    REFRESH MATERIALIZED VIEW [ view_name ];
    ```


-   Delete a materialized view.

    ```
    DROP MATERIALIZED VIEW [ view_name ];
    ```


-   Query a materialized view.

    ```
    SELECT * FROM [ view_name ];
    ```


## Examples<a name="section653116105315"></a>

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

