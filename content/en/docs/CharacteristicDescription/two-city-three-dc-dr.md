# Two-City Three-DC DR

## Availability

This feature is available since openGauss 3.1.0.

## Introduction

openGauss 3.1.0 supports two-city three-DC DR.

## Benefits

The services require the underlying database to provide cross-region DR capabilities to ensure data security and availability in case of extreme disasters.

## Description

Finance and banking industries require high data security. In the case of extreme disasters such as fires, earthquakes, and wars, data security must be ensured. Therefore, a cross-region DR solution is required. Cross-region DR refers to the scenario where the distance between the primary and standby data centers is greater than 200 km. When the primary data center encounters an extreme disaster, the standby data center can take over services. This feature provides a cross-region openGauss DR solution.

This feature provides the following solutions:

Streaming replication-based remote DR solution (This solution is provided in openGauss 3.1.0 and later versions.)

## Enhancements

In openGauss 3.1.0, the remote DR solution based on streaming replication is added for the two-city 3DC cross-region DR feature.

- DR database failover
- Planned switchover between the primary and standby database instances

**Streaming replication-based remote DR solution**:

For details about the constraints, see section "Two-City Three-DC DR" in *Administrator Guide*.

## Dependencies

None
