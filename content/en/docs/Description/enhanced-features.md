# Enhanced Features<a name="EN-US_TOPIC_0241663021"></a>

## Data Partitioning<a name="section2069916174814"></a>

Most database products partition data. In openGauss, data is partitioned horizontally with a user-specified policy. This operation splits a table into multiple partitions that are not overlapped.

openGauss supports range partitioning. Records to be inserted into a table are divided into multiple ranges based on one or more columns. A partition for each range is created to store data, and partition ranges do not overlap. If you specify the  **PARTITION**  parameter in the  **CREATE TABLE**  statement, data in the table will be partitioned.

[Table 1](#en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_t77b9e09809f742f1aaadea05d041bc23)  uses an xDR scenario to describe the benefits provided after data is partitioned based on time fragments.

**Table  1**  Partitioning benefits

<a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_t77b9e09809f742f1aaadea05d041bc23"></a>
<table><thead align="left"><tr id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_r136f4522bccc4ec8ac473a07709c0737"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a69f8255bc7d34e4185e6717b1a361ba7"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a69f8255bc7d34e4185e6717b1a361ba7"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a69f8255bc7d34e4185e6717b1a361ba7"></a>Scenario</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_ab0bae0f8c2854331bb3a9ea8850c7098"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_ab0bae0f8c2854331bb3a9ea8850c7098"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_ab0bae0f8c2854331bb3a9ea8850c7098"></a>Benefits</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_rdfb6ee78653a46059253db9ed1e35114"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_adb10431fb35a4efcb1962ceaa08d2369"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_adb10431fb35a4efcb1962ceaa08d2369"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_adb10431fb35a4efcb1962ceaa08d2369"></a>Frequently accessed rows in a table are located in one or a few partitions.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_en-us_topic_0058967181_p879553720320"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_en-us_topic_0058967181_p879553720320"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_en-us_topic_0058967181_p879553720320"></a>Improves access performance by significantly reduces search space.</p>
</td>
</tr>
<tr id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_r7ddefafe50e44ec0bddd409e82ecafa5"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a049e1cf48ef14aab929bae5a6eb6f5b5"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a049e1cf48ef14aab929bae5a6eb6f5b5"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a049e1cf48ef14aab929bae5a6eb6f5b5"></a>Most partition records need to be queried or updated.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a7c16696dbe2e458f99e643fb98adc6d1"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a7c16696dbe2e458f99e643fb98adc6d1"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a7c16696dbe2e458f99e643fb98adc6d1"></a>Improves performance because only one partition rather than the whole table needs to be scanned.</p>
</td>
</tr>
<tr id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_r569c0fbda7794f0b9d7c2f11ab573eab"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_af0999fe5959042b491df03f64c3d0c5c"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_af0999fe5959042b491df03f64c3d0c5c"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_af0999fe5959042b491df03f64c3d0c5c"></a>Records that need to be loaded or deleted in batches are located in one or a few partitions.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a291f441f2f6641899273e4c8920a33e2"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a291f441f2f6641899273e4c8920a33e2"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a291f441f2f6641899273e4c8920a33e2"></a>Improves processing performance because related partitions can be directly read or deleted. Reduces de-fragmentation workloads because records can be deleted in batches.</p>
</td>
</tr>
</tbody>
</table>

Data partitioning provides the following benefits:

-   **Improves manageability:**  Tables and indexes are divided into smaller and more manageable units. Maintenance can be performed on a specific part of a table. This helps data administrators easily manage data.
-   **Improves deletion performance:**  Delete an entire partition rather than delete data row by row.

    The  **DROP TABLE**  syntax can be used to delete both ordinary tables and partitioned tables.

-   **Improves query performance:**  Restrict the volume of data to be checked or manipulated to facilitate query.

    With partition pruning, also known as partition elimination, openGauss filters out unexpected partitions and scans only the remaining partitions. Partition pruning greatly improves query performance.

-   **Partition-wise join**: Partitioning can also improve the performance of multi-table joins by using a technique known as partition-wise join. Partition-wise joins can be applied when two tables are joint and at least one of these tables is partitioned using a join key. Partition-wise joins break a large join into smaller joins of "identical" data sets. "Identical" here is defined as covering the same set of partitioning key values on both sides of the join, ensuring that only a join of these 'identical' data sets will produce a result without considering other data sets.

## Vectorized Executor and Hybrid Row-Column Storage Engine<a name="section579016371284"></a>

In a wide table containing a huge amount of data, a query usually only involves certain columns. In this case, the query performance of the row-store engine is poor. For example, a single table containing the data of a meteorological agency has 200 to 800 columns. Among these columns, only 10 are frequently accessed. In this case, a vectorized executor and column-store engine can significantly improve performance by saving storage space.

-   Vectorized Executor

    [Figure 1](#en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_f9d90aebe179a40759039d0263492489d)  shows a standard vectorized executor. Control flow travels in the downlink direction \(shown as solid lines in the following figure\) and data flow in the uplink direction \(shown as dotted lines in the following figure\). The upper-layer node invokes the lower-layer node to request data and the lower-layer node only returns one tuple to the upper-layer node at a time.

    By contrast, the vectorized executor returns a batch of tuples at a time, which significantly improves performance using column storage.

    **Figure  1**  Vectorized executor<a name="en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_f9d90aebe179a40759039d0263492489d"></a>  
    

    ![](figures/向量化执行引擎(png).png)

-   Hybrid Row-Column Storage Engine

    openGauss supports both row and column storage models. Choose a row- or column-store table as needed.

    Column storage is recommended if a table contains many columns \(called a wide table\) but its query involves only a few columns. Row storage is recommended if a table contains only a few columns and a query involves most of the fields.

    The hybrid row-column storage engine achieves higher data compression ratio \(column storage\), index performance \(column storage\), and point update and point query \(row storage\) performance, as shown in  [Figure 2](#en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_fbb2af39ce12a419cb437829aaf1cf4fb)  .

    **Figure  2**  Hybrid row-column storage engine<a name="en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_fbb2af39ce12a419cb437829aaf1cf4fb"></a>  
    

    ![](figures/20200804-145516(espace).png)

    The restrictions of the column storage engine are as follows:

    -   For DDL statements, only CREATE TABLE, DROP TABLE, and TRUNCATE TABLE are supported.

        Partition management using DDL statements \(such as ADD PARTITION, DROP PARTITION, MERGE PARTITION, and EXCHANGE\) is supported.

        The  **CREATE TABLE LIKE**  statement is supported.

        The  **ALTER TABLE**  statement is partially supported.

        Other DDL statements are not supported.

    -   For DML statements, UPDATE, COPY, BULKLOAD, and DELETE are supported.
    -   Triggers and primary foreign keys are not supported.
    -   Psort index, B-tree index, and GIN index are supported. For details, see "SQL Reference \> SQL Syntax \> CREATE INDEX" in the  _Developer Guide_.

-   Data Compression in Column Storage

    Old and inactive data can be compressed to free up space, reducing procurement and O&M costs.

    In openGauss, data can be compressed using delta encoding, dictionary coder, RLE, LZ4, and ZLIB algorithms. The system automatically selects a compression algorithm based on data characteristics. The average compression ratio is 7:1. Compressed data can be directly accessed and is transparent to services. This greatly reduces the preparation time before accessing historical data.

-   Data Compression in Column Storage

    Old and inactive data can be compressed to free up space, reducing procurement and O&M costs.

    In openGauss, data can be compressed using delta encoding, dictionary coder, RLE, LZ4, and ZLIB algorithms. The system automatically selects a compression algorithm based on data characteristics. The average compression ratio is 7:1. Compressed data can be directly accessed and is transparent to services. This greatly reduces the preparation time before accessing historical data.


## HA Transaction Processing<a name="section18717455239"></a>

openGauss manages transactions and guarantees the ACID properties.

openGauss provides a primary/standby HA mechanism to reduce the service interruption time when the primary node is faulty. It protects key user programs to continuously provide external services, minimizing the impact of hardware, software, and human faults on services, thereby ensuring service continuity.

**Fault rectification**

Node faults can be rectified and the ACID properties still exist after the rectification. openGauss ensures zero data loss after a node is recovered from a fault or restarted.

**Transaction management**

-   Supports transaction blocks. The  **start transaction**  command can be used to start a transaction block explicitly.
-   Supports single-statement transactions. If explicit startup is not performed, a single statement is processed as a transaction.

## High Concurrency and High Performance<a name="section11701728112313"></a>

openGauss supports 10,000 concurrent connections through server thread pools; supports thread affinity and millions of tpmC using the NUMA-based kernel data structure; manages TB-level large memory buffers through efficient hot and cold data elimination; achieves multiversion access without read/write blocks using CSN-based snapshots; avoids performance fluctuation caused by full-page writes using incremental checkpoints.

## SQL Self-Diagnosis<a name="section12758509234"></a>

To locate performance issues of a query, you can use  **EXPLAIN PERFORMANCE**  to query its execution plan. However, this method outputs many logs, requires the modification of service logic, and depends on expertise to locate problems. SQL self-diagnosis enables users to locate performance issues more efficiently.

Before running a job, set the GUC parameters  **resource\_track\_level**  and  **resource\_track\_cost**, and view the related system view and possible performance issues after job execution. The system view describes the possible causes of performance issues. To optimize low-performance jobs, see "Performance Tuning \> SQL Tuning \> Typical SQL Optimization Methods \> Optimizing SQL Self-Diagnosis" in the  _Developer Guide_.

SQL self-diagnosis helps users locate and optimize performance issues without affecting operations or modifying service logic.

## Memory Table<a name="section76092025102420"></a>

With memory tables, all data access is lock-free and concurrent, optimizing data processing and meeting real-time requirements.

## Primary/Standby<a name="section162117526241"></a>

The primary/standby mode supports synchronous and asynchronous replication. Applications are deployed based on service scenarios. For synchronous replication, one primary and two standby nodes are deployed. This ensures reliability but affects performance. For asynchronous replication, one primary and one standby node are deployed. This has little impact on performance, but data may be lost when exceptions occur. openGauss supports automatic recovery of damaged pages. When a page on the primary node is damaged, the damaged page can be automatically recovered on the standby node. Besides, openGauss supports concurrent log recovery on the standby node to minimize the service unavailability time when the primary node is down.

In addition, in primary/standby mode, if the read function of the standby node is enabled, the standby node supports read operations instead of write operations \(such as table creation, data insertion, and data deletion\), reducing the pressure on the primary node.

