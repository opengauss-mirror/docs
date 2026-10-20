---
description: This document describes Xlog no Lock Flush in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, Xlog no Lock Flush, features, Availability, Feature Overview]
---

# Xlog no Lock Flush<a name="ZH-CN_TOPIC_0000001209317775"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:20:35.890Z pushedAt=2026-09-22T11:12:32.674Z -->

## Availability<a name="section3480125215575"></a>

This feature has been available since openGauss 6.0.0.

## Feature Overview<a name="section5814521587"></a>

The control granularity of `SyncRepLock` is modified, and the ordered lock queue mechanism originally controlled jointly by WalSender and Backends is also modified, removing the coarse-grained lock synchronization operations.

## Customer Benefits<a name="section148987345811"></a>

While keeping the original streaming functions and logic unchanged, further improve system performance.

## Feature Description<a name="section117041846581"></a>

First, the lock granularity is modified. The original SyncRepLock lock mainly controls the following:

1. The ordered lock queue is changed to use a lock contention mechanism, removing the locking operation of the original ordered queue, so SyncRepLock control is no longer needed;
2. The receiver position refresh of WalSender still uses the receiver, but the lsn update uses CAS operations and no longer requires lock control;

Then, following the idea of WalWriter, the lock and queue are removed, and acquire-or-wait lock grabbing is used to ensure queue uniqueness:

1. The modification follows the original waitlatch and setlatch approach, so that only the thread that successfully grabs the lock can waitlatch, while setlatch is still performed by WalSender.
2. When the lock-holding thread finishes waitlatch or is woken up by setlatch, it releases the lock. At this point, all threads are woken up from lock grabbing and start a new round of looping to check whether an exception exists or the lsn wait requirement is met.

In addition, the lsn update of the WalSender thread is optimized. Originally, among multiple WalSender threads, only one held the lock to advance the lsn value. This time, CAS operations are used to remove the lock and ensure that the lsn is advanced in order under high concurrency.

## Feature Enhancements<a name="section21149265913"></a>

None.

## Feature Constraints<a name="section51513617597"></a>

None.

## Dependencies<a name="section20491151513592"></a>

None.
