# DROP TABLE PARTITION

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:21:48.723Z -->

## Description

Drops a partitioned table. To drop a specific partition, use ALTER TABLE DROP PARTITION PartitionName.

## Precautions

- To drop tables owned by other users, the DROP ANY TABLE privilege is required. Tables owned by the SYS user can only be dropped by the SYS user.
- After the recycle bin feature is enabled, dropping a table does not immediately delete it. Data can be recovered using the flashback command. Tables in the system, nologging, sysaux, and temporary tablespaces do not support flashback.
- Dropping tables is not supported during oGrac restart rollback.

## Syntax

**stmt**

```
DROP TABLE
[IF EXISTS] [schema_name.]table_name
[CASCADE CONSTRAINTS]
[PURGE]
```

## Parameter Description

- `CASCADE CONSTRAINTS`: Deletes foreign key references when dropping the table.
- `PURGE`: Does not place the table in the recycle bin when dropping it.

## Example

```SQL
-- Drop a single table.
DROP TABLE employees;

-- Drop a table in a specified schema.
DROP TABLE sys.session_cache;

-- Drop a table and cascade the foreign key constraints.
DROP TABLE departments CASCADE CONSTRAINTS;

-- Drop a table permanently without moving it to the recycle bin.
DROP TABLE temporary_data PURGE;

```
