# Gray Upgrade<a name="EN-US_TOPIC_0000001105235296"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 2.0.0.

## Introduction<a name="section35020791"></a>

Gray upgrade supports full-service operations. All nodes can be upgraded at a time.

## Benefits<a name="section46751668"></a>

Gray upgrade provides an online upgrade mode to ensure that all nodes are upgraded without interrupting services.

## Description<a name="section18111828"></a>

Gray upgrade is an online upgrade mode that upgrades all nodes. If only the binary files of the database need to be replaced during the gray upgrade, to minimize the impact on services, the two sets of binary files exist on the same node at the same time, and the soft connection switchover mode is used to switch the process version \(one intermittent disconnection within 10 seconds\).

## Enhancements<a name="section28788730"></a>

None.

## Constraints<a name="section06531946143616"></a>

For details about the gray upgrade constraints, see "Before You Start \> Upgrade Impact and Constraints" in  _Upgrade Guide_.

## Dependencies<a name="section57771982"></a>

None.

