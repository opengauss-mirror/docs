# Partitioning<a name="EN-US_TOPIC_0000001105555110"></a>

## Availability<a name="section3104013"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section27936123"></a>

Data is partitioned horizontally on a node using a specified policy. This operation splits a table into multiple partitions that are not overlapped.

## Benefits<a name="section50098520"></a>

In common scenarios, a partitioned table has the following advantages over a common table:

-   High query performance: You can specify partitions when querying partitioned tables, improving query efficiency.
-   High availability: If a certain partition in a partitioned table is faulty, data in the other partitions is still available.
-   Balanced I/O: Partitions can be mapped to different disks to balance I/O and improve the overall system performance.

## Description<a name="section48233501"></a>

Currently, the openGauss database supports range partitioned tables, list partitioned tables, hash partitioned tables, interval partitioned tables, and level-2 partitioned tables.

-   In a range partitioned table, data within a certain range is mapped to each partition. The range is determined by the partition key specified when the partitioned table is created. This partitioning mode is most commonly used.

    With the range partitioning function, the database divides a record, which is to be inserted into a table, into multiple ranges using one or multiple columns and creates a partition for each range to store data. Partition ranges do no overlap.

-   In a list partitioned table, data is mapped to each partition based on the key values contained in each partition. The key values contained in a partition are specified when the partition is created.

    The list partitioning function divides the key values in the records to be inserted into a table into multiple lists \(the lists do not overlap in different partitions\) based on a column of the table, and then creates a partition for each list to store the corresponding data.

-   In a hash partitioned table, data is mapped to each partition using the hash algorithm, and each partition stores records with the same hash value.

    The hash partitioning function uses the internal hash algorithm to divide records to be inserted into a table into partitions based on a column of the table.

-   Interval partitioning is a special type of range partitioning. Compared with range partitioning, interval partitioning defines the interval value. When no matching partition can be found for an inserted record, a partition can be automatically created based on the interval value.
-   A level-2 partitioned table is based on level-1 partition. Its partitioning scheme is a combination of two level-1 partitioning schemes. Currently, the level-2 partitioned table supports nine partitioning policies combining range partitioning, list partitioning, and hash partitioning.

If you specify the  **PARTITION**  parameter when running the  **CREATE TABLE**  statement, data in the table will be partitioned. Users can modify partition keys as needed during table creation to make the query result stored in the same or least partitions \(called partition pruning\), obtaining consecutive I/O to improve the query performance.

In actual services, time is often used to filter query objects. Therefore, you can select the time column as the partition key. The key value range can be adjusted based on the total data volume and the data volume queried at a time.

## Enhancements<a name="section31448332"></a>

Range partitioned tables can be combined.

## Constraints<a name="section06531946143616"></a>

None.

## Dependencies<a name="section14599532"></a>

None.

