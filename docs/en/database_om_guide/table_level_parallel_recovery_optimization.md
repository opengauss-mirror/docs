---
description: This document describes Table-Level Parallel Recovery Optimization in openGauss, covering topics such as Availability, Introduction.
keywords: [openGauss, Table-Level Parallel Recovery Optimization, database O&M, Availability, Introduction]
---

# Table-Level Parallel Recovery Optimization

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:04:55.584Z -->

## Availability

This feature has been available since openGauss 5.1.0. It has also been backported to 3.0.5.

## Introduction

When table-level parallel recovery is enabled, this feature allows users to control replay behavior through additional parameters, thereby improving recovery efficiency.

## Customer Benefits

Improved WAL recovery efficiency helps reduce WAL log accumulation on standby nodes and eases disk storage pressure. During switchover or failover, it also accelerates replay of existing WAL logs on the standby, allowing the standby to be promoted to primary earlier and provide write services sooner.

## Feature Description

None

## Feature Enhancement

Earlier openGauss versions supported table-level and page-level parallel recovery. The current optimization applies only to table-level parallel recovery. In the previous table-level parallel recovery implementation, the WAL record read thread and the WAL record redo thread could exchange data only on a per-record basis, which introduced significant performance overhead.

This optimization allows users to control the batch size for inter-thread WAL record transfer via the `parallel_recovery_batch` parameter (default: 1000). Users can also configure the `parallel_recovery_timeout` parameter (default: 300 ms). If the WAL read thread has not accumulated enough records to reach `parallel_recovery_batch` within `parallel_recovery_timeout`, it directly passes the currently accumulated WAL records to the redo thread.

In addition, the `enable_batch_dispatch` parameter is introduced to control the optimization switch (default: off), and the `enable_time_report` parameter is introduced to enable or disable statistics collection during replay (default: off).

## Feature Constraints

None

## Dependencies

None
