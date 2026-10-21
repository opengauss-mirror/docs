---
description: This document describes High-Latency Escape at the Infrastructure Layer in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, High-Latency Escape at the Infrastructure Layer, features, Availability, Feature Overview]
---

# High-Latency Escape at the Infrastructure Layer

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:18:32.061Z pushedAt=2026-09-22T11:12:32.661Z -->

## Availability<a name="section41616539"></a>

This feature has been available since openGauss 3.0.0.

## Feature Overview<a name="section39004531"></a>

An exception in the underlying execution layer increases SQL execution latency in the database, which in turn causes memory or thread pool overload. To address this scenario, openGauss supports an automatic escape capability.

## Customer Benefits<a name="section15496459"></a>

When the underlying execution layer becomes abnormal, causing increased SQL execution latency, session accumulation, and memory or thread pool overload that prevents the database from providing services, the database can quickly escape and restore its service capability within a short period of time.

## Feature Description<a name="section5250404"></a>

- When the database memory is overloaded, sessions are quickly killed and new connections are prohibited. After the memory returns to normal, the service capability is restored. The memory thresholds for overload and recovery are set through the resilience\_memory\_reject\_percent parameter, and this function is disabled by default.
- When the accumulated sessions exceed the thread pool capacity, sessions are quickly killed and new connections are prohibited. After the number of sessions drops to the thread pool capacity, the service capability is restored. The thread pool session thresholds for overload and recovery are set through the resilience\_threadpool\_reject\_cond parameter, and this function is disabled by default.

## Feature Enhancements<a name="section47253639"></a>

None.

## Feature Constraints<a name="section06531946143616"></a>

- When memory or thread pool overload triggers the escape capability, sessions of users with sysadmin or monitoradmin privileges are not cleaned up.
- In upgrade mode, this feature is not triggered.

## Dependencies<a name="section22629574"></a>

None.
