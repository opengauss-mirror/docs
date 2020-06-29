# Partitioning<a name="EN-US_CONCEPT_0252569361"></a>

In the openGauss system, data is partitioned horizontally on an instance using a specified policy. This operation splits a table into multiple partitions that are not overlapped.

In common scenarios, a partitioned table has the following advantages over a common table:

-   High query performance: You can specify partitions when querying partitioned tables, improving query efficiency.
-   High availability: If a certain partition in a partitioned table is faulty, data in the other partitions is still available.
-   Easy maintenance: If a partition in a partitioned table is faulty, only this partition needs to be repaired.
-   Balanced I/O: Partitions can be mapped to different disks to balance I/O and improve the overall system performance.

Currently, the openGauss database supports range partitioning. Data is mapped to each partition based on the range. The range is determined by the partition key specified when the partitioned table is created. This partitioning mode is most commonly used.

With the range partitioning function, the database divides a record, which is to be inserted into a table, into multiple ranges using one or multiple columns and creates a partition for each range to store data. Partition ranges do no overlap. If you specify the  **PARTITION**  parameter in the  **CREATE TABLE**  statement, data in the table will be partitioned.

Users can modify partition keys as needed during table creation to make the query result stored in the same or least partitions \(called partition pruning\), so as to obtain consecutive I/O to improve the query performance.

In actual services, time is often used as a filter criterion for query objects. Therefore, you can select the time column as the partition key. The key value range can be adjusted based on the total data volume and the data volume queried at a time.

