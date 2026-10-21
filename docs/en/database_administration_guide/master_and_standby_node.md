---
description: This document describes Active and Standby Nodes in openGauss, covering topics such as Availability, Feature Description.
keywords: [openGauss, Active and Standby Nodes, database administration, Availability, Feature Description]
---

# Active and Standby Nodes

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:44:24.311Z pushedAt=2026-09-11T09:16:00.183Z -->

## Availability<a name="section14707931165614"></a>

This feature has supported DN active/standby since openGauss 1.0.0.

## Feature Description<a name="section93301955145613"></a>

To ensure recoverability from failures, data must be written to multiple copies with multiple active and standby replicas configured. Through data synchronization via logs, openGauss guarantees no data loss prior to a failure in scenarios such as node failures or restarts after shutdown, thereby satisfying ACID properties.

## Customer Value<a name="section196071875710"></a>

The active/standby feature supports switching to a standby node upon a active failure, ensuring no data loss and enabling rapid service recovery.

## Feature Description<a name="section138621058175717"></a>

The active/standby environment supports the one active, multiple standbys mode. In this mode, all standby nodes need to redo logs and can be promoted to active. The one active, multiple standbys mode provides higher disaster recovery capability and is more suitable for OLTP systems that process large volumes of transactions.

Role switching between the active and standby nodes can be performed through switchover. If the active node fails, a standby node can be promoted to active through failover.

In scenarios such as initial installation or backup and restoration, the data of a standby node needs to be rebuilt based on the active node. In this case, the build function is required to send the active's data and WAL logs to the standby node. When a failed active node rejoins the cluster as a standby node, the build function is also required to align its data and logs with the new active. In addition, during online scale-out, the build function is used to synchronize metadata to the instance on the new node. Build includes full build and incremental build. Full build relies entirely on the active node's data for reconstruction, which involves copying a large amount of data and takes a relatively long time. Incremental build copies only differential files, which involves copying a smaller amount of data and takes a relatively short time. In general, incremental build is preferred for fault recovery. If incremental build fails, full build is then performed until the fault is recovered.

To achieve high-availability disaster recovery capability for all instances, in addition to configuring multiple active/standby replicas for DNs as described above, openGauss also provides other active/standby disaster recovery capabilities, such as CM Server (one active, multiple standbys) and ETCD (one active, multiple standbys). These capabilities enable instances to recover as quickly as possible after a fault without interrupting services, minimizing the impact of hardware, software, and human-caused faults on services to ensure service continuity.

## Feature Enhancements<a name="section437573965810"></a>

None.

## Feature Constraints<a name="section1956417145819"></a>

In a one-active, one-synchronous-standby scenario, when the maximum availability mode of the active is disabled, a standby failure may cause transaction blocking on the active, but active-standby reliability is guaranteed. When the maximum availability mode of the active is enabled, a standby failure does not block active transactions, but active-standby reliability may be affected.

## Dependencies<a name="section15876411599"></a>

None.
