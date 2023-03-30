# Parallel Logical Decoding<a name="EN-US_TOPIC_0000001220761098"></a>

## Availability<a name="section15406143204715"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section740615433477"></a>

Multi-thread parallel decoding is supported.

## Benefits<a name="section13406743164715"></a>

The logical decoding performance is greatly improved and the decoding speed can be improved from 3 to 5 Mbit/s to 100 Mbit/s in standard scenarios \(16-core CPU, 128 GB memory, network bandwidth \> 200 Mbit/s, 10 to 100 columns in a table, 0.1 KB to 1 KB data volume in a single row, insert as the main DML operation, no flush transaction is involved, that is, number of statements in a single transaction < 4096\).

## Description<a name="section16406154310471"></a>

When JDBC or pg\_recvlogical is used for decoding, you can set  **parallel-decode-num**  to a value greater than 1 and less than or equal to 20 to enable parallel decoding. In this way, one read thread, multiple decoding threads, and one sending thread are used to perform logical decoding, significantly improving the decoding speed.

## Enhancements<a name="section1340684315478"></a>

None.

## Constraints<a name="section06531946143616"></a>

1.  The hardware and network environment must be normal. The size of a logical log is twice that of an Xlog. To ensure that the speed of the Xlog reaches 100 Mbit/s, the I/O bandwidth must be at least 200 Mbit/s. Resources need to be reserved for the reader, decoder, and sender threads. The number of CPU cores to be reserved must be the number of concurrent threads plus 2. For example, if there are four concurrent threads, six CPU cores need to be reserved. In actual scenarios, decoding on the standby node can meet the requirements, and no special resource reservation planning is required. To ensure that the decoding performance meets the requirements and minimize the impact on services, you are advised to set up only one parallel decoding connection on a standby node to ensure that the CPU, memory, and bandwidth resources are sufficient.
2.  The value of GUC parameter  **wal\_level**  of the log level is  **logical**.
3.  The GUC parameter  **max\_replication\_slots**  is set to a value greater than or equal to the number of physical streaming replication slots, backup slots, and logical replication slots required by each DN.
4.  The value of the decoding configuration option  **parallel-decode-num**  is greater than 1 and less than or equal to 20, specifying the number of concurrent decoding threads.
5.  Decoding into DDL statements is not supported.
6.  Decoding is not supported for column-store data and data page replication.
7.  Distributed transactions cannot be decoded. Currently, decoding is performed by DN, which cannot ensure consistency in distributed transaction decoding.
8.  The size of a single tuple cannot exceed 1 GB. Decoding results may be larger than inserted data. Therefore, it is recommended that the size of a single tuple be less than or equal to 500 MB.
9.  Decoding compressed tables into DML statements is not supported.
10. GaussDB Kernel supports the following data types for decoding:  **INTEGER**,  **BIGINT**,  **SMALLILNT**,  **TINYINT**,  **SERIAL**,  **SMALLSERIAL**,  **BIGSERIAL**,  **FLOAT**,  **DOUBLE PRECISION**,  **DATE**,  **TIME\[WITHOUT TIME ZONE\]**,  **TIMESTAMP\[WITHOUT TIME ZONE\]**,  **CHAR\(**_n_**\)**,  **VARCHAR\(**_n_**\)**, and  **TEXT**.
11. If the SSL connection is required, the GUC parameter  **ssl**  must be set to  **on**.
12. Interval partitioned tables cannot be replicated.
13. After a DDL statement is executed in a transaction, the DDL statement and subsequent statements are not decoded.
14. To perform decoding on the standby node, set the GUC parameter  **enable\_slot\_log**  to  **on**  on the corresponding host.
15. Currently, ultra-large CLOB decoding is not supported.
16. The same replication slot for decoding cannot be used between the primary node and standby node or between different standby nodes at the same time. Otherwise, data inconsistency will occur.
17. Do not perform operations on the replication slot on other nodes when the logical replication slot is in use. To delete a replication slot, stop decoding in the replication slot first.

## Dependencies<a name="section8406643144716"></a>

Decoding is performed on the standby node.

