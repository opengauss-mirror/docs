---
description: This document describes DROP MATERIALIZED VIEW LOG in openGauss, covering topics such as Description, Notes.
keywords: [openGauss, DROP MATERIALIZED VIEW LOG, SQL, Description, Notes]
---

# DROP MATERIALIZED VIEW LOG

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:21:03.121Z -->

## Description

Drops the materialized view log of a specified table in the database.

## Notes

After a materialized view log is dropped, the related incremental materialized views cannot perform incremental refresh.

## Syntax

```
DROP MATERIALIZED VIEW LOG ON table_name;
```

## Parameter Description

- **table\_name**

    Name of the table that owns the materialized view log to be dropped.

## Example

```
----Drop the materialized view log corresponding to the my_table table.
openGauss=# DROP MATERIALIZED VIEW LOG ON my_table;
```

## Related Links

[CREATE INCREMENTAL MATERIALIZED VIEW](create_incremental_materialized_view.md), [CREATE MATERIALIZED VIEW LOG](create_materialized_view_log.md), [DROP MATERIALIZED VIEW](drop_materialized_view.md), [REFRESH INCREMENTAL MATERIALIZED VIEW](refresh_incremental_materialized_view.md)
