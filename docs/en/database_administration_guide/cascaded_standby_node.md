# Cascaded Standby Node

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:42:32.378Z pushedAt=2026-07-29T09:31:18.485Z -->

## Availability<a name="section56086982"></a>

This feature is introduced since openGauss 1.1.0.

## Feature Description<a name="section35020791"></a>

This section builds on the current primary-multiple-standby architecture by supporting cascaded standby nodes that connect to standby nodes.

## Customer Benefits<a name="section46751668"></a>

In special service scenarios, the one-primary-multiple-standby architecture is not flexible enough. Multi-equipment-room deployment is inadequate for maintaining a complete structure under HA switchover (three instances in the primary and secondary equipment rooms, and two to three instances in the tertiary equipment rooms). An increase in the number of standby nodes may impose significant pressure on the primary node. Queries with low real-time requirements can be offloaded to cascaded standby nodes. Therefore, cascaded standby capability needs to be provided.

## Feature Description<a name="section18111828"></a>

The primary node synchronizes by shipping logs to standby nodes, which forward them to cascaded standbys. The primary-to-standby sync mode is configurable as synchronous or asynchronous, while the cascaded tier is fixed to asynchronous replication.

In the current one-primary-multiple-standby architecture, the primary node synchronizes logs to standby nodes via walsender threads, while standby nodes receive logs via walreceiver threads and flush them to local disks. The standby nodes then read the redo logs to complete data synchronization with the primary. There is a one-to-one correspondence between walsender and walreceiver threads across the primary and standby nodes. Between standby nodes and cascaded standby nodes, logs are synchronized asynchronously through walsender and walreceiver threads, reducing the streaming replication pressure on the primary node.

## Feature Enhancements<a name="section28788730"></a>

None.

## Feature Constraints<a name="section06531946143616"></a>

- Cascaded standby nodes can only synchronize data from a standby node, not directly from the primary node.

- Cascaded standby nodes do not support building data directly from a standby node. Currently, data can only be built from the primary node. If a standby node requires a full build, the cascaded standby node must also undergo a full rebuild.

- Cascaded standby nodes use asynchronous synchronization.

- Cascaded standby nodes do not support being promoted.

- Cascaded standby nodes do not support the notify mechanism.

- The current cluster architecture does not expose cascaded standby nodes for direct query. The lookup path is hierarchical: first locate the target standby via the primary, then locate the cascaded standby via that standby.

- Cascaded standby nodes cannot have a further cascaded standby.

- Cascaded standby nodes are not supported when Extreme RTO is enabled.

## Dependencies<a name="section57771982"></a>

None.