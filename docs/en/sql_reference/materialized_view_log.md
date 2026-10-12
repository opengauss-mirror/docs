# Materialized View Log

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:23:12.902Z -->

## Overview

A materialized view log is used to record incremental modifications to a table. Incremental materialized views use these incremental modification records to perform incremental refresh.

## Usage

### Syntax

- Creating a materialized view log

    ```
    CREATE MATERIALIZED VIEW LOG ON table_name; 
    ```

- Dropping a materialized view log

    ```
    DROP MATERIALIZED VIEW LOG ON table_name;
    ```

### Parameter Description

- **table\_name**

  Name of the table for which the materialized view log is to be created.

### Example

```
--Prepare data.
openGauss=# CREATE TABLE t1(c1 int, c2 int);
openGauss=# INSERT INTO t1 VALUES(1, 1);
openGauss=# INSERT INTO t1 VALUES(2, 2);

--Create an incremental materialized view log.
openGauss=# CREATE MATERIALIZED VIEW LOG ON t1;
CREATE MATERIALIZED VIEW LOG

--Create an incremental materialized view.
openGauss=# CREATE INCREMENTAL MATERIALIZED VIEW mv AS SELECT * FROM t1;
CREATE MATERIALIZED VIEW

--Insert data.
openGauss=# INSERT INTO t1 VALUES(3, 3);
INSERT 0 1

---- Incrementally refresh the materialized view.
openGauss=# REFRESH INCREMENTAL MATERIALIZED VIEW mv;
REFRESH MATERIALIZED VIEW

---- Query the materialized view result.
openGauss=# SELECT * FROM mv;
 c1 | c2 
----+----
  1 |  1
  2 |  2
  3 |  3
(3 rows)

---- Drop the materialized view log.
openGauss=# DROP MATERIALIZED VIEW LOG ON t1;
DROP MATERIALIZED VIEW LOG
```
