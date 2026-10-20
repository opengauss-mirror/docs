---
description: This document describes CREATE MATERIALIZED VIEW LOG in openGauss, covering topics such as Precautions, Syntax.
keywords: [openGauss, CREATE MATERIALIZED VIEW LOG, SQL, Precautions, Syntax]
---

# CREATE MATERIALIZED VIEW LOG

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:20:22.730Z -->

Creates a materialized view log. A materialized view log and a table have a one-to-one relationship.

A materialized view log is used for incremental refresh of materialized views. When an incremental materialized view is created, if the related table does not yet have a materialized view log, one is automatically created; if one already exists, the existing materialized view log is directly used.

## Precautions

- The materialized view log is only used for incremental refresh of incremental materialized views. Therefore, it is not maintained when the owning table is not referenced by any incremental materialized view.
- When the last incremental materialized view of a table is deleted, the materialized view log corresponding to that table is also automatically deleted.
- To ensure data integrity, a newly created materialized view log cannot be directly used for incremental refresh. After the materialized view log is created, a full refresh of the incremental materialized view must be performed before incremental refresh can be used.

## Syntax

```
CREATE MATERIALIZED VIEW LOG ON table_name;
```

## Parameter Description

- **table_name**

    Name of the table for which the materialized view log is to be created.

## Example

```
--Create a normal table.
openGauss=# CREATE TABLE my_table (c1 int, c2 int);
--Create a materialized view log.
openGauss=# CREATE MATERIALIZED VIEW LOG ON my_table;
--Create an incremental materialized view.
openGauss=# CREATE INCREMENTAL MATERIALIZED VIEW my_mv AS SELECT * FROM my_table;
```

## Related Links

[CREATE INCREMENTAL MATERIALIZED VIEW](create_incremental_materialized_view.md), [DROP MATERIALIZED VIEW](drop_materialized_view.md), [DROP MATERIALIZED VIEW LOG](drop_materialized_view_log.md), [REFRESH INCREMENTAL MATERIALIZED VIEW](refresh_incremental_materialized_view.md)
