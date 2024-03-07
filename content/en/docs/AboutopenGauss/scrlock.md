# SCRLock<a name="EN-US_TOPIC_0000001721808553"></a>

## Availability<a name="section14611198203513"></a>

This feature is introduced in openGauss 5.0.0.

## Introduction<a name="section1044295211352"></a>

When resource pooling is enabled, SCRLock can be used to provide the distributed lock capability, improving distributed lock performance.

## Benefits<a name="section38042903613"></a>

As the data scale and data nodes increase, obtaining distributed locks between nodes consumes a large number of events, affecting end-to-end database experience of clients. The SCRLock feature greatly reduces the latency of obtaining distributed locks and ensures fairness by preventing a node from permanently waiting for a distributed lock.

## Description<a name="section595563813616"></a>

openGauss resource pooling uses TCP-based pessimistic distributed locks, which have disadvantages such as high network latency and complex locking process, slowing down lock obtaining of services. SCRLock provides distributed locks in optimistic mode based on the RDMA protocol. The RDMA network improves the efficiency of obtaining locks, and the optimistic mode features a simplified process. SCRLock ensures lock fairness by preventing permanent waiting in a cluster and provides the local lock cache capability to reduce the frequency of obtaining remote locks, reducing the latency.

## Enhancement<a name="section190946203720"></a>

None

## Constraints<a name="section011116254373"></a>

The database server must use the Mellanox CX4/CX5 NIC.

## Dependency<a name="section12798194673710"></a>

SCRLock depends on the resource pooling feature. To use the SCRLock distributed lock feature, you need to set GUC parameters  **ss\_enable\_dms**  and  **ss\_enable\_dss**  to  **on**  to enable the DMS and DSS components.

