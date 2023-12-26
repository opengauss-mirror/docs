# Feature Description<a name="EN-US_TOPIC_0000001618655714"></a>

## New Features<a name="section1816474573711"></a>

[Enterprise-class feature](https://idp.huawei.com/idp-designer-war/design?op=edit&locate=newMode/EDIT/203370700883/EN-US_BOOKMAP_0000001673447609/EN-US_TOPIC_0000001687210125/2.1.1): UWAL accelerates the WAL performance of the database.

-   The database and UWAL component are combined to accelerate the WAL performance of the database.
-   This feature solves the problem of performance loss during active/standby streaming replication and improves the performance of active/standby transaction submission as well as streaming replication and transmission.

[High performance](https://idp.huawei.com/idp-designer-war/design?op=edit&locate=newMode/EDIT/203370700883/EN-US_BOOKMAP_0000001673447609/EN-US_TOPIC_0000001721808553/2.1.2): SCRLock provides the distributed lock capability to improve distributed lock performance.

-   SCRLock provides distributed locks in optimistic mode based on the RDMA protocol. The RDMA network improves the efficiency of obtaining locks, and the optimistic mode features a simplified process.
-   SCRLock ensures lock fairness and prevents permanent waiting events in a cluster.
-   SCRLock also provides the local lock cache capability to reduce the frequency of obtaining remote locks, reducing the latency.

