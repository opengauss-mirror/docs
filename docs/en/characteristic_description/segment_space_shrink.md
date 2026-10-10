# Segment-Page Space Reclaim

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:26:23.925Z pushedAt=2026-09-22T11:12:32.701Z -->

## Availability

This feature has been available since openGauss 7.0-RC3.

## Feature Overview

This feature supports reclaiming space through system functions after DELETE and UPDATE operations on segment-page tables, so that the storage resources occupied by table files are released more effectively without affecting normal user business operations.

## Customer Benefits

- **Improve disk space utilization**: Release the free extents at the tail of the segment, reduce invalid disk usage, and lower storage costs.
- **Improve database query and update performance**: Reclaim the space occupied by dead tuples, make queries and index maintenance more efficient, and avoid unnecessary I/O.
- **Enhance the competitiveness of openGauss in large-scale OLTP scenarios**: Solve the bloat problem of segment-page tables in high-concurrency, high-update-rate services, and improve system availability.
- **Flexible deployment**: Support cloud API calls and local model deployment.

## Feature Description

The following system functions are supported for reclaiming space in segment-page tables:

- **[gs_table_shrink (new)](../sql_reference/segment_page_storage_functions.md)**: Reclaims free extents at the segment tail to reduce tablespace bloat.
- **[gs_space_shrink_compact (new)](../sql_reference/segment_page_storage_functions.md)**: Moves the in-use extents at the file tail to the front (compaction), making the file layout compact, refreshes the high water mark, and shrinks the physical file (128M alignment) when the refreshed high water mark satisfies the file size rule.

## Feature Enhancements

None.

## Feature Constraints

The segment-page space reclaim feature has the following constraints:

- gs_table_shrink only supports segment-page tables. An error is reported for non-segment-page tables.
- gs_table_shrink only supports ordinary tables and partitioned tables. An error is reported for secondary partitions.
- This operation is not allowed during system recovery, on resource pooling standby nodes, or in standby clusters.
- The gs_table_shrink and gs_space_shrink_compact system functions require the highest-level exclusive lock on the table, which affects related services on the table. Therefore, find an appropriate time to perform this operation in business scenarios.
- gs_space_shrink_compact may move the non-empty extent at the end, which may invalidate related indexes. Use it with caution. It is recommended to manage segment-page indexes and business tables in different tablespaces.

## Dependencies

None.
