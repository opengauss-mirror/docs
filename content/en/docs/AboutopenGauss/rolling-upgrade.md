# Gray Upgrade

## Availability

This feature is available since openGauss 3.1.0.

## Introduction

Based on gray upgrade, specified nodes can be upgraded at first and then the remaining nodes be upgraded.

## Benefits

Based on gray upgrade, provides a kind of function which can upgrade specified nodes. Without interrupting services, upgrade specified nodes and then upgrade the remaining nodes.

## Description

Gray upgrade is an online upgrade mode that upgrades specified nodes. At present, the rolling upgrade is to add the function of upgrading specified nodes on the basis of the gray upgrade. During upgrade specified nodes, which is the same as the gray upgrade, if only the binary files of the database need to be replaced, to minimize the impact on services, the two sets of binary files exist on the same node at the same time, and the soft connection switchover mode is used to switch the process version \(one intermittent disconnection within 10 seconds\). All nodes can be upgraded in two steps. The first step is to upgrade the specified node, and the second step is to upgrade the remaining nodes. The submit operation must be performed only after all nodes are upgraded.

## Enhancements

None.

## Constraints

All constraints of gray upgrade are met.
For details about the gray upgrade constraints, see "Before You Start \> Upgrade Impact and Constraints" in  _Upgrade Guide_.

## Dependencies

None.

