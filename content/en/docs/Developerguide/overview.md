# Overview<a name="EN-US_TOPIC_0264264806"></a>

## Function<a name="en-us_topic_0237121452_section187151209719"></a>

The data replication capabilities supported by openGauss are as follows:

Data is periodically synchronized to heterogeneous databases \(such as Oracle databases\) using a data migration tool. Real-time data replication is not supported. Therefore, the requirements for real-time data synchronization to heterogeneous databases are not satisfied.

openGauss provides the logical decoding function to generate logical logs by decoding Xlogs. A target database parses logical logs to replicate data in real time. For details, see  [Figure 1](#en-us_topic_0237121452_fig65787201989). Logical replication reduces the restrictions on target databases, allowing for data synchronization between heterogeneous databases and homogeneous databases with different forms. It allows data to be read and written during data synchronization on a target database, reducing the data synchronization latency.

**Figure  1**  Logical replication<a name="en-us_topic_0237121452_fig65787201989"></a>  
![](figures/logical-replication.png "logical-replication")

Logical replication consists of logical decoding and data replication. Logical decoding outputs logical logs by transaction. The database service or middleware parses the logical logs to implement data replication. Currently, openGauss supports only logical decoding. Therefore, this section involves only logical decoding.

Logical decoding provides basic transaction decoding capabilities for logical replication. openGauss uses SQL functions for logical decoding. This method features easy function calling, requires no tools to obtain logical logs, and provides specific interfaces for interconnecting with external replay tools, saving the need of additional adaptation.

Logical logs are output only after transactions are committed because they use transactions as the unit and logical decoding is driven by users. Therefore, to prevent Xlogs from being reclaimed by the system when transactions start and prevent required transaction information from being reclaimed by  **VACUUM**, openGauss introduces logical replication slots to block Xlog reclaiming.

A logical replication slot means a stream of changes that can be replayed in other clusters in the order they were generated in the original cluster. Each owner of logical logs maintains one logical replication slot.

## Precautions<a name="en-us_topic_0237121452_section128900341517"></a>

-   Decoding into DDL statements is not supported.
-   Decoding for column-store data and data page replication is not supported.
-   After a DDL statement \(for example,  **ALTER TABLE**\) is executed, the physical logs that are not decoded before the DDL statement execution may be lost.
-   Online cluster scale-out is not allowed during logical decoding.
-   The size of a single tuple cannot exceed 1 GB, and decoding results may be larger than inserted data. Therefore, it is recommended that the size of a single tuple be less than or equal to 500 MB.
-   openGauss supports the following data types for decoding:  **INTEGER**,  **BIGINT**,  **SMALLINT**,  **TINYINT**,  **SERIAL**,  **SMALLSERIAL**,  **BIGSERIAL**,  **FLOAT**,  **DOUBLE PRECISION**,  **DATE**,  **TIME\[WITHOUT TIME ZONE\]**,  **TIMESTAMP\[WITHOUT TIME ZONE\]**,  **CHAR\(**_n_**\)**,  **VARCHAR\(**_n_**\)**, and  **TEXT**.
-   Currently, SSL connections are not supported by default. If SSL connections are required, set the GUC parameter  **ssl**  to  **on**.
-   If JDBC is used to create a logical replication slot, the slot name must contain less than 64 characters, and contain only one or more types of the following characters: letters \(a to z\), digits \(0-9\), and underscores \(\_\).
-   The current logical replication does not support the MOT feature.

