# DPA Hash Aggregation Acceleration

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:08:52.931Z pushedAt=2026-09-22T11:12:32.621Z -->

## Availability

This feature has been available since openGauss 7.0.0-RC3.

## Feature Overview

DPA (Data Processing Accelerator) hash aggregation acceleration is a hardware acceleration feature implemented by openGauss based on the UADK framework. It offloads vectorized hash aggregation operations to a hardware accelerator for execution, significantly improving the execution efficiency of aggregation queries.

## Customer Benefits

In large-scale data aggregation query scenarios, the parallel processing capability of the hardware accelerator replaces the CPU in performing hash aggregation computation, reducing CPU overhead and improving query performance.

## Feature Description

The DPA hash aggregation acceleration feature is based on the [UADK (Unified Accelerator Development Kit)](https://docs.openeuler.org/en/docs/22.03_LTS/docs/UADK/UADK-quick-start.html) framework. In the Vector Hash Aggregate operator of the vectorized execution engine, it offloads aggregate operations such as SUM and COUNT to a hardware accelerator for execution. It supports grouping keys of data types such as INT4, INT8, CHAR, and VARCHAR, as well as the SUM aggregate function of the BIGINT type and COUNT aggregate functions of multiple types. When a query does not meet the acceleration conditions, the system automatically falls back to CPU execution without causing the query to fail.

For detailed configuration methods and usage guidance, see [Configuring DPA Hash Aggregation Acceleration](https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/performance_tuning_guide/dpa_hash_aggregation_acceleration.md).

## Feature Enhancements

None.

## Feature Constraints

- Only the ARM64 (aarch64) architecture is supported, and a hardware accelerator that supports UADK is required.
- It takes effect only in the HashAgg operator of the vectorized execution engine.
- A GROUP BY clause is required. Full-table aggregation without grouping keys is not supported.
- A GROUP BY clause can contain at most 9 key columns, the aggregation can take at most 9 input columns, and at most 5 CHAR/VARCHAR key columns are allowed.
- Aggregation operations such as `count(*)` full-row counting and `sum(numeric)` are not supported, and the MAX and MIN aggregate functions are not supported.

## Dependencies

- [UADK Acceleration Library](https://docs.openeuler.org/en/docs/22.03_LTS/docs/UADK/UADK-quick-start.html)
- [Vectorized Engine](https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/performance_tuning_guide/vectorized_engine.md)
