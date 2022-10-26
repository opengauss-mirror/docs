# DCF<a name="EN-US_TOPIC_0000001265367513"></a>

## Availability<a name="section15406143204715"></a>

This feature is available since openGauss 2.0.0.

## Introduction<a name="section740615433477"></a>

Distributed consensus framework \(DCF\) implements data synchronization based on the Paxos algorithm. After the DCF mode is enabled, DNs support Paxos-based replication and quorum capabilities.

## Benefits<a name="section13406743164715"></a>

Primary DN selection and log replication are performed based on Paxos. Compression and flow control are supported during the replication to prevent high bandwidth usage. DCF provides capabilities such as log replication and cluster HA. DCF supports automatic leader election, forcible minority startup, and dynamic traffic adjustment for log replication. In addition, multiple Paxos-based roles are provided and can be adjusted. You can query the instance status in the current database.

DCF is a high-performance, highly mature, reliable, scalable, and easy-to-use independent basic library. Other systems can easily interconnect with DCF through interfaces to obtain the strong consistency, high availability, and automatic disaster recovery capabilities provided by the Paxos algorithm.

## Description<a name="section16406154310471"></a>

-   During log replication, DCF supports log compression before transmission to reduce network bandwidth usage.
-   DCF supports SSL, including TLS 1.2 and TLS 1.3. When SSL is enabled, the DN configures DCF as TLS 1.2 by default.
-   DCF supports five TLS 1.3 cipher suites: TLS13-AES-256-GCM-SHA384, TLS13-CHACHA20-POLY1305-SHA256, TLS13-AES-128-GCM-SHA256, TLS13-AES-128-CCM-8-SHA256 and TLS13-AES-128-CCM-SHA256.
-   DCF supports passive nodes, which do not participate in leader election and only synchronize and replay logs. When this type of nodes is heavily loaded during log synchronization, flow control is performed.
-   DCF supports logger nodes, which participate in leader election and voting. However, the logger nodes only replicate DCF logs. Xlogs are not replicated and redo is not performed.
-   DCF supports online switchover between follower and passive nodes. That is, without interrupting services, a node can switch over between the follower and passive roles.
-   DCF supports forcible startup of the minority of DNs. In case that the majority of database instances are faulty, a minority of standby DNs are selected and forcibly promoted to primary, and other normal standby DNs replicate logs from the primary DNs.
-   DCF supports automatic leader election. When the original primary DN is faulty, a new primary DN is automatically selected from the remaining standby DNs on the premise that data consistency is ensured.
-   DCF supports the policy-based majority capability. Based on the configured AZ, DCF ensures that at least one node in the AZ synchronizes replication logs.


## Enhancements<a name="section1340684315478"></a>

None.

## Constraints<a name="section06531946143616"></a>

To use this function, at least three DNs must be deployed. You need to enable DCF during installation and deployment. In DCF mode, the majority election is used. During the installation, if the number of faulty nodes and build nodes reaches the majority, the cluster installation will fail. For example, when one primary node and two standby nodes are installed, one node fails to be installed due to insufficient memory, but the other two nodes can be started normally. A standby node will be built again. In this case, the number of build nodes and faulty nodes is 2, which is the majority, and the cluster installation will fail. During the installation, check whether the memory and disk resources are sufficient.

If the policy-based majority parameter is configured for an AZ and all nodes in the AZ are faulty, you need to remove the AZ configuration from the policy-based majority configuration when performing build operations on the nodes.

The manual mode is used to set the cluster-level working mode. In this mode, the logger or passive role is not supported.

## Dependencies<a name="section8406643144716"></a>

None.
