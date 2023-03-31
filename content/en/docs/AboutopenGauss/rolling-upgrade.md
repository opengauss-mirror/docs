# Rolling Upgrade

## Availability

This feature is available since openGauss 3.1.0.

## Introduction

In gray upgrade, you can upgrade some specified nodes and then the remaining nodes.

## Benefits

The gray upgrade provides the function of upgrading specified nodes. This ensures that some nodes are upgraded before the remaining nodes without interrupting services.

## Description

Rolling upgrade is an online upgrade mode that upgrades certain nodes. Currently, rolling upgrade adds the function of upgrading specified nodes based on gray upgrade. Similar to gray upgrade, when some nodes are upgraded, database binary files need to be replaced. To minimize the impact on services, two sets of binary files coexist on the same node. The process version is switched and upgraded through soft connection switchover (intermittent disconnection once within 10 seconds). You can upgrade all nodes in two steps. The first step is to upgrade specified nodes, and the second step is to upgrade remaining nodes. The commit operation must be performed only after all nodes are upgraded.

## Enhancements

None.

## Constraints

All gray upgrade constraints are met.
For details about the gray upgrade constraints, see "Before You Start \> Upgrade Impact and Constraints" in *Upgrade Guide*.

## Dependencies

None.

