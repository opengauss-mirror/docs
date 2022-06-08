# CM<a name="EN-US_TOPIC_0000001265167501"></a>

## Availability<a name="section15406143204715"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section740615433477"></a>

Cluster manager \(CM\) is a database management software, which consists of cm\_server and cm\_agent.

-   cm\_agent is a database management component deployed on each database host. It is used to start, stop, and monitor database instance processes.
-   cm\_server is a component used for managing database instances and arbitrating instances.

## Benefits<a name="section13406743164715"></a>

It manages and monitors the running status of functional units and physical resources in a database system, ensuring stable running of the system.

## Description<a name="section16406154310471"></a>

It supports customized resource monitoring and provides capabilities such as monitoring of the primary/standby database status, network communication faults, file system faults, and automatic primary/standby switchover upon faults. It also provides various database management capabilities, such as starting and stopping nodes and instances, querying database instance status, performing primary/standby switchover, and managing logs.

## Enhancements<a name="section1340684315478"></a>

None.

## Constraints<a name="section06531946143616"></a>

In scenarios where there are one primary node and one standby node, CM supports only basic capabilities, such as installation, startup, stop, and detection.

## Dependencies<a name="section8406643144716"></a>

None.

