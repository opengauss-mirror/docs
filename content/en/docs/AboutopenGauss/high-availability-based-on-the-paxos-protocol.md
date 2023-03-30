# High Availability Based on the Paxos Protocol<a name="EN-US_TOPIC_0000001241071899"></a>

## Availability<a name="section57017810"></a>

This feature is available since openGauss 2.1.0.

## Introduction<a name="section118751332337"></a>

After the DCF mode is enabled, database nodes support Paxos-based replication and quorum capabilities. Primary database node selection and log replication are performed based on Paxos. Compression and flow control are supported during the replication to prevent high bandwidth usage. It supports multiple types of nodes based on the Paxos protocol and the node roles can be adjusted as required. You can query the instance status in the current database.

## Description<a name="section73081759173318"></a>

-   During log replication, DCF supports log compression before transmission to reduce network bandwidth usage.
-   DCF supports passive nodes, which do not participate in node election and only synchronize and replay logs. When this type of nodes is heavily loaded during log synchronization, flow control is performed.
-   DCF supports logger nodes, which participate in node election and voting. However, the logger nodes only replicate DCF logs. Xlogs are not replicated and redo is not performed.
-   DCF supports online switchover between follower and passive nodes. That is, without interrupting services, a node can switch over between the follower and passive roles.
-   DCF supports forcible startup of the minority of nodes. In case that the majority of database instances are faulty, a minority of standby nodes are selected and forcibly promoted to primary, and other normal standby nodes replicate logs from the primary nodes.
-   DCF supports primary node selection. When the original primary node is faulty, a new primary node is automatically selected from the remaining standby nodes on the premise that data consistency is ensured.

## Enhancements<a name="section29043486"></a>

None.

## Constraints<a name="section27741012910"></a>

To use this function, you need to enable DCF during installation and deployment.

## Dependencies<a name="section57771982"></a>

None.

