# SHRINK

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:27:11.369Z -->

## Description

Reorganizes chunk fragments of a given compressed table or compressed index, which improves page read and write performance.

## Notes

- The `shrink` operation can only be executed on the primary node and cannot be manually executed on the standby node.
- The duration of the `shrink` operation depends on the current CPU usage and the table size.
- The `shrink` operation is essentially an optimization operation. If a database exception occurs during optimization, the unoptimized portion will not be executed after the database is restarted.

## Syntax

```
SHRINK TABLE table_name [nowait];
SHRINK INDEX index_name [nowait];
```

## Parameter Description

- nowait

    Indicates that the task returns immediately after being initiated, without waiting for the reorganization result. A background thread periodically wakes up to reorganize the tasks added by shrink.

## Examples

Perform the SHRINK operation on a compressed table:

```sql
-- Create a compressed table.
CREATE TABLE row_compression
    (id int)
    WITH (compresstype=2, compress_chunk_size = 512, compress_level = 1);

-- Insert data.
INSERT INTO row_compression SELECT generate_series(1,1000);

-- Perform SHRINK compaction.
SHRINK TABLE row_compression;

-- Drop the table.
DROP TABLE row_compression;
```

Perform the SHRINK operation on a compressed index:

```sql
-- Create the table.
CREATE TABLE tbl_idx_compression
    (id int);

-- Create the compressed index.
CREATE INDEX idx_compression
    ON tbl_idx_compression (id)
    WITH (compresstype=2, compress_chunk_size = 512, compress_level = 1);

-- Insert data.
INSERT INTO tbl_idx_compression SELECT generate_series(1,1000);

-- SHRINK defragmentation.
SHRINK INDEX idx_compression;

-- Drop the table.
DROP TABLE tbl_idx_compression;
```
