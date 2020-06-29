# Primary/Standby<a name="EN-US_TOPIC_0241663034"></a>

The primary/standby mode supports synchronous and asynchronous replication. Applications are deployed based on service scenarios. For synchronous replication, one primary and two standby nodes are deployed. This ensures reliability but affects performance. For asynchronous replication, one primary and one standby node are deployed. This has little impact on performance, but data may be lost when exceptions occur. openGauss supports automatic recovery of damaged pages. When a page on the primary node is damaged, the damaged page can be automatically recovered on the standby node. Besides, openGauss supports concurrent log recovery on the standby node to minimize the service unavailability time when the primary node is down.

In addition, in primary/standby mode, if the read function of the standby node is enabled, the standby node supports read operations instead of write operations \(such as table creation, data insertion, and data deletion\), reducing the pressure on the primary node.

