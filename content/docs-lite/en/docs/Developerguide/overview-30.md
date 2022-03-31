# Overview<a name="EN-US_TOPIC_0289900926"></a>

## Function<a name="en-us_topic_0283136720_en-us_topic_0237121452_section187151209719"></a>

The data replication capabilities supported by openGauss are as follows:

Data is periodically synchronized to heterogeneous databases \(such as Oracle\) using a data migration tool. Real-time data replication is not supported. Therefore, the requirements for real-time data synchronization to heterogeneous databases are not satisfied.

openGauss provides the logical decoding function to generate logical logs by decoding Xlogs. A target database parses logical logs to replicate data in real time. For details, see  [Figure 1](#en-us_topic_0283136720_en-us_topic_0237121452_fig65787201989). Logical replication reduces the restrictions on target databases, allowing for data synchronization between heterogeneous databases and homogeneous databases with different forms. It allows data to be read and written during data synchronization on a target database, reducing the data synchronization latency.

**Figure  1**  Logical replication<a name="en-us_topic_0283136720_en-us_topic_0237121452_fig65787201989"></a>  
![](figures/logical-replication.png "logical-replication")

Logical replication consists of logical decoding and data replication. Logical decoding outputs logical logs by transaction. The database service or middleware parses the logical logs to implement data replication. Currently, openGauss supports only logical decoding. Therefore, this section involves only logical decoding.

Logical decoding provides basic transaction decoding capabilities for logical replication. openGauss uses SQL functions for logical decoding. This method features easy function calling, requires no tools to obtain logical logs, and provides specific interfaces for interconnecting with external replay tools, saving the need of additional adaptation.

Logical logs are output only after transactions are committed because they use transactions as the unit and logical decoding is driven by users. Therefore, to prevent Xlogs from being recycled by the system when transactions start and prevent required transaction information from being recycled by  **VACUUM**, openGauss introduces logical replication slots to block Xlog recycling.

A logical replication slot means a stream of changes that can be replayed in other databases in the order they were generated in the original database. Each owner of logical logs maintains one logical replication slot.

## Precautions<a name="en-us_topic_0283136720_en-us_topic_0237121452_section128900341517"></a>

-   DDL statement decoding is not supported. When a specific DDL statement \(for example, to truncate an ordinary table or exchange a partitioned table\) is executed, decoded data may be lost.
-   Decoding for column-store data and data page replication is not supported.
-   Logical decoding is not supported on the cascaded standby node.
-   After a DDL statement \(for example,  **ALTER TABLE**\) is executed, the physical logs that are not decoded before the DDL statement execution may be lost.
-   The size of a single tuple cannot exceed 1 GB, and decoded data may be larger than inserted data. Therefore, it is recommended that the size of a single tuple be less than or equal to 500 MB.
-   openGauss supports the following data types for decoding:  **INTEGER**,  **BIGINT**,  **SMALLINT**,  **TINYINT**,  **SERIAL**,  **SMALLSERIAL**,  **BIGSERIAL**,  **FLOAT**,  **DOUBLE PRECISION**,  **DATE**,  **TIME\[WITHOUT TIME ZONE\]**,  **TIMESTAMP\[WITHOUT TIME ZONE\]**,  **CHAR\(**_n_**\)**,  **VARCHAR\(**_n_**\)**, and  **TEXT**.
-   If the SSL connection is required, ensure that the guc parameter  **ssl**  is set to  **on**.
-   The logical replication slot name must contain fewer than 64 characters and contain only one or more types of the following characters: lowercase letters, digits, and underscores \(\_\).
-   Currently, logical replication does not support the MOT feature.
-   After the database where a logical replication slot resides is deleted, the replication slot becomes unavailable and needs to be manually deleted.
-   Only the UTF-8 character set is supported.
-   To decode multiple databases, you need to create a stream replication slot in each database and start decoding. Logs need to be scanned for decoding of each database.
-   Forcible startup is not supported. After forcible startup, you need to export all data again.
-   During decoding on the standby node, the decoded data may increase during switchover and failover, which needs to be manually filtered out. When the quorum protocol is used, switchover and failover should be performed on the standby node that is to be promoted to primary, and logs must be synchronized from the primary node to the standby node.
-   The same replication slot for decoding cannot be used between the primary node and standby node or between different standby nodes at the same time. Otherwise, data inconsistency occurs.
-   Replication slots can only be created or deleted on hosts.
-   After the database is restarted due to a fault or the logical replication process is restarted, duplicate decoded data exists. You need to filter out the duplicate data.
-   If the computer kernel is faulty, garbled characters are displayed during decoding which need to be manually or automatically filtered out.
-   Currently, the logical decoding on the standby node does not support enabling the ultimate RTO.
-   Ensure that the long transaction is not started during the creation of the logical replication slot. If the long transaction is started, the creation of the logical replication slot will be blocked.
-   Interval partitioned tables cannot be replicated.
-   Global temporary tables are not supported.
-   After a DDL statement is executed in a transaction, the DDL statement and subsequent statements are not decoded.
-   To perform decoding on the standby node, set the GUC parameter  **enable\_slot\_log**  to  **on**  on the corresponding host.
-   Do not perform operations on the replication slot on other nodes when the logical replication slot is in use. To delete a replication slot, stop decoding in the replication slot first.

