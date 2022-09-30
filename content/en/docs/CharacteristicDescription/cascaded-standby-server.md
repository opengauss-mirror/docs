# Cascaded Standby Server<a name="EN-US_TOPIC_0000001138590185"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section35020791"></a>

A cascaded standby server can be connected to a standby server based on the one-primary-multiple-standby architecture.

## Benefits<a name="section46751668"></a>

The one-primary-multiple-standby architecture cannot support a flexible structure in special service scenarios. The multi-equipment room deployment cannot meet requirements of the complete structure in the HA switchover scenario \(three instances in the primary-standby equipment rooms and two or three instances in the standby-standby equipment rooms\). If the number of standby servers increases, the primary server may be overloaded. Queries that have low real-time requirements can be implemented on cascaded standby servers. Therefore, the cascading backup capability is required.

## Description<a name="section18111828"></a>

The primary server replicates logs to the standby server in synchronous or asynchronous mode. The standby server replicates logs to the cascaded standby server only in asynchronous mode.

In the current one-primary-multiple-standby architecture, the primary server uses the WAL sender process \(walsender\) to replicate logs to the standby server. The standby server uses the WAL receiver process \(walreceiver\) to receive and then flushes logs to local disks. The standby server reads redo logs to complete data replication between the primary and standby servers. There is a one-to-one mapping between walsender and walreceiver on the primary and standby servers. Logs are sent between the standby and cascaded standby servers in asynchronous mode using walsender and walreceiver, reducing the streaming replication pressure on the primary server.

## Enhancements<a name="section28788730"></a>

None

## Constraints<a name="section06531946143616"></a>

-   A cascaded standby server can only replicate data from a standby server and cannot directly replicate data from the primary server.
-   A cascaded standby server does not support data build from a standby server. Currently, data can be built only from the primary server. If the standby server is fully built, the cascaded standby server needs to be fully built.
-   The cascaded standby node is in asynchronous replication mode.
-   The cascaded standby server cannot be promoted.
-   The cascaded standby server cannot be notified.
-   Currently, the overall architecture of the primary-standby-cascaded standby cluster cannot be queried. You need to find the standby server through the primary server and then find the cascaded standby server based on the standby server.
-   A cascaded standby server cannot own another cascaded standby server.
-   When the ultimate RTO is enabled, no cascaded standby server is supported.

## Dependencies<a name="section57771982"></a>

None
