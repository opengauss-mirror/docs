# Primary/Standby<a name="EN-US_TOPIC_0000001152195133"></a>

## Availability<a name="section14707931165614"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section93301955145613"></a>

To ensure that a fault can be rectified, data needs to be written into multiple copies. Multiple copies are configured for the primary and standby nodes, and logs are used for data synchronization. In this way, openGauss has no data lost when a node is faulty or the system restarts after a stop, meeting the ACID feature requirements.

## Benefits<a name="section196071875710"></a>

Services can be switched to the standby node when the primary node is faulty. Therefore, data is not lost and services can be quickly restored.

## Description<a name="section138621058175717"></a>

You can deploy the one-primary-multiple-standby mode. In the one-primary-multiple-standby mode, all standby nodes need to redo logs and can be promoted to the primary. The one-primary-multiple-standby mode provides higher DR capabilities and is more suitable for the OLTP system that processes a large number of transactions.

The  **switchover**  command can be used to trigger a switchover between the primary and standby nodes. If the primary node is faulty, the  **failover**  command can be used to promote the standby node to the primary.

In scenarios such as initial installation or backup and restoration, data on the standby node needs to be rebuilt based on the primary node. In this case, the build function is required to send the data and WALs of the primary node to the standby node. When the primary node is faulty and joins again as a standby node, the build function needs to be used to synchronize data and WALs with those of the new primary node. In addition, in online capacity expansion scenarios, you need to use build to synchronize metadata to instances on new nodes. Build includes full build and incremental build. Full build depends on primary node data for rebuild. The amount of data to be copied is large and the time required is long. Incremental build copies only differential files. The amount of data to be copied is small and the time required is short. Generally, the incremental build is preferred for fault recovery. If the incremental build fails, the full build continues until the fault is rectified.

To implement HA DR for all instances, in addition to the preceding primary/standby multi-copy replication configured for DNs, openGauss also provides other primary/standby DR capabilities, such as CM server \(one primary and multiple standbys\) and ETCD \(one primary and multiple standbys\). In this way, instances can be recovered as soon as possible without interrupting services, minimizing the impact of hardware, software, and human errors on services and ensuring service continuity.

## Enhancements<a name="section437573965810"></a>

None.

## Constraints<a name="section1956417145819"></a>

None.

## Dependencies<a name="section15876411599"></a>

None.

