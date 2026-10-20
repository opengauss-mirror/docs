---
description: This document describes High Availability Based on the Paxos Protocol in openGauss, covering topics such as Availability, Introduction.
keywords: [openGauss, High Availability Based on the Paxos Protocol, database O&M, Availability, Introduction]
---

# High Availability Based on the Paxos Protocol

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:04:24.690Z -->

## Availability<a name="section57017810"></a>

This feature has been available since openGauss 2.1.0.

## Introduction<a name="section118751332337"></a>

After the DCF mode is enabled, database nodes support Paxos-based replication and quorum capabilities. Database nodes perform leader election and log replication based on Paxos. Compression and flow control are supported during replication to prevent excessive bandwidth usage. Multiple Paxos-based node role types are provided and can be adjusted as needed. The current database instance status can be queried.

## Feature Description <a name="section73081759173318"></a>

- During log replication, DCF supports compressing logs before transmission to reduce network bandwidth usage.

- DCF supports the passive role type. A passive node does not participate in elections and only synchronizes and replays logs. When this type of node is under high load, flow control is applied to log synchronization.

- DCF supports the logger role type. A logger node can participate in elections and voting, but it only replicates DCF logs, not xlog, and does not perform redo.

- The follower and passive roles in DCF can be switched online. That is, without interrupting services, a node with the follower role can be converted to the passive role, and vice versa.

- DCF supports minority forcible startup. When a majority of database instances fail, a surviving standby node can be forcibly started as the primary node in minority mode, and other normal standby nodes replicate logs from it.

- DCF supports leader election. When the original primary node fails, the remaining standby nodes automatically elect a new primary node on the premise of data consistency.

## Feature Enhancements <a name="section29043486"></a>

None.

## Feature Constraints <a name="section27741012910"></a>

If you use this feature, DCF must be enabled during installation and deployment.

## Dependencies<a name="section57771982"></a>

None.
