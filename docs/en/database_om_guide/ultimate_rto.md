---
description: This document describes Ultimate RTO in openGauss, covering topics such as Availability, Introduction.
keywords: [openGauss, Ultimate RTO, database O&M, Availability, Introduction]
---

# Ultimate RTO

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:05:02.662Z -->

## Availability<a name="section57017810"></a>

This feature has been available since openGauss 1.1.0.

## Introduction<a name="section43398242"></a>

- This feature applies to rapid recovery scenarios after a primary node restart.

- Standby replay can be accelerated through log synchronization between the primary and synchronous standby nodes.

## Customer Value<a name="section55039858"></a>

Under heavy workloads, the replay speed of the standby node may fall behind that of the primary node. After prolonged system operation, logs accumulate on the standby node. If the primary node fails, data recovery takes a long time and the database becomes unavailable, severely impacting system availability.

Enabling the ultimate RTO (Recovery Time Objective) reduces data recovery time after a primary failure and improves availability.

## Feature Description<a name="section25596675"></a>

After the ultimate RTO switch is enabled, multi-level pipelines are established for XLOG replay to increase concurrency and improve log replay speed. Page multi-versioning is adopted to support standby reads. The replay thread maintains a log chain for each page, and the read thread reads the page version corresponding to the specified LSN (position in WAL logs). When a query conflicts with replay, the query times out and is canceled with the error message `canceling statement due to conflict with recovery`. When this type of error occurs, the business side can retry based on the error code. The main log types that cause query-replay conflicts are as follows:

- File removal

  - Trigger condition: operations such as dropping a file, reindexing, or truncating a table.

  - Handling: after waiting for `max_standby_streaming_delay`, send a cancel message to terminate the conflicting query.

- Truncate

    - Trigger condition: after deleting a large number of records and performing vacuum reclaim, truncate unused data pages at the end of the file.

    - Handling: immediately cancel all conflicting queries.

- drop database

    - Trigger condition: executing a drop database operation.

    - Handling: after waiting for `max_standby_streaming_delay`, send a cancel message to terminate the conflicting query.

- drop tablespace

    - Trigger condition: dropping a tablespace.

    - Handling: after waiting for `max_standby_streaming_delay`, send a cancel message to terminate the conflicting query.

- Vacuum cleanup (conflicts occur only when the `exrto_standby_read_opt` parameter is enabled)

    - Trigger condition: vacuum operations.

    - Handling: after waiting for `max_standby_streaming_delay`, send a cancel message to terminate the conflicting query.

## Feature Enhancements<a name="section29043486"></a>

1. Standby readability for segment-page tables

    **Usage Notes**:

    - This enhancement has been available since openGauss 7.0.0-RC1.

## Feature Constraints<a name="section27741012910"></a>

Ultimate RTO focuses only on whether the RTO of the synchronous standby meets requirements. Ultimate RTO removes its built-in flow control and uniformly uses the `recovery_time_target` parameter for flow control.

This feature supports standby reads. Because it introduces reads of historical page versions, query performance on the standby node is lower than on the primary node and also lower than under parallel replay with standby reads. However, query-blocking-replay scenarios are partially mitigated.

When node I/O or CPU utilization is too high (recommended not to exceed 70%), standby read performance degrades noticeably.

In resource pooling mode, there is no conflict between standby queries and ultimate RTO. In non-resource-pooling mode, ultimate RTO standby reads cancel queries in the following five cases:

1. The query duration exceeds the `standby_max_query_time` parameter value.

2. Forced recycling of standby-read files is triggered.

3. A conflict occurs between the query and truncate-type log replay.

4. Lock-related or other conflicts occur between the query and replay. This behaves the same as under parallel replay with standby reads, and query cancellation is controlled by the `max_standby_streaming_delay` parameter.

5. When the `exrto_standby_read_opt` parameter is enabled, conflicts may occur during replay of vacuum cleanup logs. This behaves the same as under parallel replay with standby reads, and query cancellation is controlled by the `max_standby_streaming_delay` parameter.

## Dependencies<a name="section57771982"></a>

None.
