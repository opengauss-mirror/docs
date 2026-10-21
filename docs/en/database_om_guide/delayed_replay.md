---
description: This document describes Delayed Replay in openGauss, covering topics such as Availability, Introduction.
keywords: [openGauss, Delayed Replay, database O&M, Availability, Introduction]
---

# Delayed Replay

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:03:54.596Z -->

## Availability<a name="section57017810"></a>

This feature has been available since openGauss 2.0.0.

## Introduction<a name="section43398242"></a>

This feature supports delayed replay on standby nodes.

## Customer Benefits<a name="section55039858"></a>

By default, a standby node replays XLOG records from the primary node as quickly as possible. This feature allows the standby node to delay replay for a specified period. It provides a queryable data copy from a recent historical point in time, making it easier to recover from user errors such as accidental data modification or deletion.

## Feature Description<a name="section25596675"></a>

You can configure the GUC parameter `recovery_min_apply_delay` to specify a delay period, forcing a standby node to postpone replaying transaction logs received from the primary node.

Value range: integer from 0 to `INT_MAX`, in milliseconds.

Default value: 0 (no delay applied)

## Feature Enhancements<a name="section29043486"></a>

None.

## Feature Constraints<a name="section27741012910"></a>

- Setting `recovery_min_apply_delay` on the primary node has no effect. You must configure this parameter on the target standby node requiring the delay.

- The delay is calculated based on the transaction commit timestamp on the primary server and the current time on the standby node. Therefore, the system clocks on the primary and standby nodes must be synchronized.

- Operations outside a transaction are not delayed.

- After a primary-standby switchover, if the original primary node is intended to act as a delayed standby, you must manually configure this parameter again.

- When `synchronous_commit` is set to `remote_apply`, synchronous replication is affected by this delay. Each COMMIT waits until replay completes on the standby node before returning.

- Enabling this feature also delays the effect of `hot_standby_feedback`. This may cause table bloat on the primary node. Exercise caution when using these two features together.

- If the primary node executes DDL operations that acquire an AccessExclusive lock—such as DROP or TRUNCATE—the standby node delays replaying these records. During this delay window, any query on the affected object on the standby node will wait until the lock is released before returning results.

## Dependencies<a name="section57771982"></a>

None.
