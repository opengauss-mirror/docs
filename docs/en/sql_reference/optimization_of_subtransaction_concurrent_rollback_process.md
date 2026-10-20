---
description: This document describes Subtransaction Concurrent Rollback Optimization in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, Subtransaction Concurrent Rollback Optimization, SQL, Availability, Feature Overview]
---

# Subtransaction Concurrent Rollback Optimization

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:24:30.410Z -->

## Availability<a name="section3480125215575"></a>

This feature is introduced starting from openGauss 5.1.0.

## Feature Overview<a name="section5814521587"></a>

This feature uses the ProcArrayGroup data structure to manage all backends that fail to contend for the ProcArrayLock. The first backend to enter the group acts as the group leader, which is responsible for requesting the ProcArrayLock and, after acquiring the lock, cleaning up the transaction information of all backends in the group. This prevents the issue where backends contend with each other for the ProcArrayLock during subtransaction concurrent rollback, causing transactions to be blocked.

## Customer Benefits<a name="section148987345811"></a>

Optimizes the contention for the ProcArrayLock when a large number of transactions containing subtransactions are concurrently committed or rolled back, improving transaction concurrency in this scenario.

## Feature Description<a name="section117041846581"></a>

In the subtransaction rollback scenario, each subtransaction rollback clears transaction information such as the subtransaction list in PGPROC and updates lastCompleteXid, during which ProcArrayLock must be requested to protect ProcArray. If a transaction contains multiple subtransactions, each subtransaction is rolled back serially during transaction rollback, and each rollback requires a ProcArrayLock request. In addition, transaction commit or rollback also requires a ProcArrayLock request. Therefore, when a large number of subtransactions are concurrently committed and rolled back, the contention for ProcArrayLock among backends becomes significant, which may cause transaction commit and rollback to be blocked. To address this issue, this feature uses the ProcArrayGroup data structure to manage all backends that fail to acquire ProcArrayLock. The first backend to enter the group acts as the group leader and is responsible for requesting the ProcArrayLock. After acquiring the lock, the group leader clears the transaction information of all backends in the group, thereby avoiding contention for ProcArrayLock among backends and improving subtransaction rollback efficiency.

## Feature Enhancement<a name="section21149265913"></a>

This optimization reduces contention for the ProcArrayLock during subtransaction concurrent rollback.

## Feature Constraints<a name="section51513617597"></a>

None.

## Dependencies<a name="section20491151513592"></a>

This feature depends on the existing transaction end and subtransaction rollback processes.
