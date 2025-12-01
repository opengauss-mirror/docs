# Delaying Entering the Maximum Availability Mode<a name="EN-US_TOPIC_0000001220197752"></a>

## Availability<a name="section118411122194813"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section13375160194919"></a>

The primary node can be delayed to enter the maximum availability mode.

## Benefits<a name="section19340161511499"></a>

When the primary node detects that the standby node exits due to network instability or other reasons and the maximum availability mode is enabled on the primary node, the primary node remains in the maximum protection mode within a specified time window. After the time window expires, the primary node enters the maximum availability mode.

This prevents the primary node from frequently switching between the maximum protection mode and maximum availability mode due to factors such as network jitter and intermittent process disconnection.

## Description<a name="section54601932194912"></a>

If  **most\_available\_sync**  is set to  **on**, when synchronous standby nodes are faulty in primary/standby scenarios and the number of configured synchronous standby nodes is insufficient \(for details, see the meaning of  **synchronous\_standby\_name**\), setting  **keep\_sync\_window**  will retain the maximum protection mode within the time window specified by  **keep\_sync\_window**. That is, committing transactions on the primary node is blocked, delaying the primary node to enter the maximum availability mode.

If synchronous standby nodes recover from faults and the number of synchronous standby nodes meets the configuration requirements, transactions are not blocked.

## Enhancements<a name="section1658716245019"></a>

None.

## Constraints<a name="section13118121915014"></a>

-   This feature takes effect only when the maximum availability mode is enabled.

-   Enabling this feature may affect the RPO. If the primary node is faulty within the configured timeout window, its transactions are committed locally but not synchronized to the faulty synchronous standby nodes.

-   This feature does not apply to cascaded standby nodes.


## Dependencies<a name="section24082349505"></a>

This feature depends on the maximum availability mode.

