# coverage.proc_coverage

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:19:50.144Z -->

The `proc_coverage` table records stored procedure coverage information. Results can only be queried in the system database, not in user databases.

**Table 1** Attributes of the `proc_coverage` table

|Name|Type|Description|
|--|--|--|
|coverage_id|bigint|Coverage information sequence number|
|pro_oid|oid|Stored procedure OID|
|pro_name|text|Stored procedure name|
|db_name|text|Name of the database where the stored procedure resides|
|pro_querys|text|Source statements of the stored procedure|
|pro_canbreak|boolean[]|Boolean array, where the subscript corresponds to the source statement line number, indicating whether the current line supports breakpoints (is executable)|
|coverage|integer[]|Integer array, where the subscript corresponds to the source statement line number, indicating the execution count of the current line|

>[!NOTE]Note
>
> 1. This table is an unlogged table. If the database does not exit normally, the data in it will be lost.
>
> 2. This table is an unlogged table. When a primary/standby switchover occurs, only the table structure exists on the new primary, with no data.
