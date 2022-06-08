# Materialized Views<a name="EN-US_TOPIC_0000001210461842"></a>

A materialized view is relative to a common view. A common view is a virtual table, and a materialized view stores the execution results of SQL statements. You can directly use data without repeatedly executing query statements, improving performance.

Materialized views are classified into the following types based on the refresh mode:

-   [Full-refresh materialized view](#section1810714714319): Only created materialized views can be fully refreshed. Incremental refresh is not supported. The syntax for creating a full-refresh materialized view is similar to the  **CREATE TABLE AS**  syntax.
-   [Incremental-refresh materialized view](#section1980464963719): Materialized views can be incrementally refreshed. You need to manually execute statements to incrementally refresh materialized views in a period of time. The difference between the incremental-refresh and the full-refresh materialized views is that the incremental-refresh materialized view supports only a small number of scenarios. Currently, only base table scanning statements or UNION ALL can be used to create materialized views.

## Syntax of a Full-Refresh Materialized View<a name="section1810714714319"></a>

-   Create a full-refresh materialized view.

    ```
    CREATE MATERIALIZED VIEW view_name AS query; 
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


## Parameters for Creating a Full-Refresh Materialized View<a name="section6973139183420"></a>

-   **view\_name**

    Specifies the name of the materialized view to be created.

-   **AS query**

    Specifies the  **SELECT**,  **TABLE**, or  **VALUES**  command.


## Example of Creating a Full-Refresh Materialized View<a name="section653116105315"></a>

```
-- Prepare data.
openGauss=# CREATE TABLE t1(c1 int, c2 int);
openGauss=# INSERT INTO t1 VALUES(1, 1);
openGauss=# INSERT INTO t1 VALUES(2, 2);

-- Create a full-refresh materialized view.
openGauss=# CREATE MATERIALIZED VIEW mv AS select count(*) from t1;
CREATE MATERIALIZED VIEW

-- Query the materialized view result.
openGauss=# SELECT * FROM mv;
 count 
-------
     2
(1 row)

-- Insert data into the base table of the materialized view.
openGauss=# INSERT INTO t1 VALUES(3, 3);
INSERT 0 1

-- Fully refresh the full-refresh materialized view.
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

## Syntax of an Incremental-Refresh Materialized View<a name="section1980464963719"></a>

-   Create an incremental-refresh materialized view.

    ```
    CREATE INCREMENTAL MATERIALIZED VIEW  view_name  AS  query ; 
    ```


-   Fully refresh a materialized view.

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


## Parameters for Creating an Incremental-Refresh Materialized View<a name="section142126710548"></a>

-   **view\_name**

    Specifies the name of the materialized view to be created.

-   **AS query**

    Specifies the  **SELECT**,  **TABLE**, or  **VALUES**  command.


## Example of Creating an Incremental-Refresh Materialized View<a name="section1433113611463"></a>

```
-- Prepare data.
openGauss=# CREATE TABLE t1(c1 int, c2 int);
openGauss=# INSERT INTO t1 VALUES(1, 1);
openGauss=# INSERT INTO t1 VALUES(2, 2);

-- Create an incremental-refresh materialized view.
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

