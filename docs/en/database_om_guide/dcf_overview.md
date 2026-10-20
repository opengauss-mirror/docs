---
description: This document describes DCF Overview in openGauss, covering topics such as Availability, Introduction.
keywords: [openGauss, DCF Overview, database O&M, Availability, Introduction]
---

# DCF Overview

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:04:00.263Z -->

## Availability<a name="section15406143204715"></a>

This feature has been available since openGauss 2.0.0.

## Introduction<a name="section740615433477"></a>

Distributed Consensus Framework (DCF) implements strongly consistent data synchronization based on the Paxos algorithm. When the DCF mode is enabled, DNs support Paxos-based replication and arbitration capabilities.

## Customer Benefits<a name="section13406743164715"></a>

DNs perform leader election and log replication based on Paxos. During replication, compression and flow control are supported to prevent excessive bandwidth consumption. DCF provides capabilities such as log replication and cluster high availability. It offers automatic leader election, supports minority forcible startup, and enables dynamic traffic adjustment for log replication. It also provides multiple Paxos-based role node types that can be adjusted, and supports querying the status of the current database instance.

DCF is a high-performance, mature, reliable, scalable, and user-friendly standalone foundational library. By simply interfacing with DCF, other systems can readily acquire the strong consistency, high availability, and automatic disaster recovery capabilities enabled by the Paxos algorithm.

## Feature Description<a name="section16406154310471"></a>

- During log replication, DCF supports compressing logs before transmission to reduce network bandwidth consumption.

- DCF supports SSL, including the TLS 1.2 and TLS 1.3 protocol standards. When SSL is enabled, a DN configures DCF to use the TLS 1.2 protocol by default.

- DCF supports five TLS 1.3 cipher suites: TLS13-AES-256-GCM-SHA384, TLS13-CHACHA20-POLY1305-SHA256, TLS13-AES-128-GCM-SHA256, TLS13-AES-128-CCM-8-SHA256, and TLS13-AES-128-CCM-SHA256.

- DCF supports the passive role type. A passive node does not participate in elections and only performs log synchronization and replay. Under high load, log synchronization for this type of node is subject to flow control.

- DCF supports logger role type. A logger node can participate in elections and voting, but it only replicates DCF logs without replicating xlog or performing redo.

- The follower and passive roles in DCF can be switched online. That is, a follower node can be converted to a passive node, and a passive node can be converted to a follower, without service interruption.

- DCF supports minority forcible startup. When a majority of database instances fail, a standby DN in normal state can be forcibly started in minority mode to become the primary DN, and the remaining normal standby DNs replicate logs from the primary DN.

- DCF supports automatic leader election. When the original primary DN fails, the remaining standby DNs automatically elect a new primary DN while ensuring data consistency.

- DCF supports policy-based quorum. On the premise of a quorum, and according to the user-configured Availability Zone (AZ), DCF ensures that at least one node within the AZ synchronously replicates logs.

- DCF supports manual mode. In this mode, automatic arbitration is disabled. Instead, DCF performs log replication while the upper-layer CM or other management components handle arbitration.

- DCF supports unified storage of DCF logs and DN logs. Once a DCF quorum is reached, only one copy of the logs is stored by the DN, reducing I/O bandwidth usage. With unified logs, I/O overhead for log flushing is reduced by over 20% compared to storing two separate logs, thereby optimizing performance.

- DCF supports switching from Quorum mode to DCF mode, as well as reverting from DCF mode back to Quorum mode. The switching process does not require a database restart, ensuring no data loss and no impact on services.

## Feature Enhancements<a name="section1340684315478"></a>

None.

## Feature Constraints<a name="section06531946143616"></a>

To use this feature, a minimum of three DN nodes are required, and DCF must be enabled during the installation and deployment. In DCF mode, leader election is based on quorum voting. During installation, if the number of failed nodes plus the number of build nodes reaches the majority, the cluster installation will fail. For example, when installing one primary and two standby nodes, if one node fails during installation due to insufficient memory while the other two nodes start normally, the standby node will subsequently perform a build. At this point, the build node plus the failed node totals two, reaching the majority and causing the cluster installation to fail. Therefore, ensure that resources such as memory and disk are sufficient during installation.

If an AZ has policy-based quorum parameters configured, and all nodes within that AZ fail, you must remove the AZ from the policy-based quorum configuration before performing build-related operations on the nodes.

Compared with Quorum, DCF mode does not support the following features:

   1. Dual-cluster disaster recovery (cascaded standby is not supported)

   2. Online upgrade from existing Quorum replication to DCF replication

   3. Standby read

   4. Third-party arbitration (CM arbitration)

   5. Automatic replica reduction

   6. Incremental build

## Dependencies<a name="section8406643144716"></a>

None.
