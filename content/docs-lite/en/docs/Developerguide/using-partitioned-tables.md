# Using Partitioned Tables<a name="EN-US_TOPIC_0000001119972376"></a>

A partitioned table is a logical table that is divided into several physical partitions based on a specific plan. The table based on the logic is called a partitioned table, and each physical block is called a partition. A partitioned table is a logical table and does not store data. Data is actually stored in partitions. A partitioned table has the following advantages over an ordinary table:

1.  High query performance: You can specify partitions when querying partitioned tables, improving query efficiency.
2.  High availability: If a certain partition in a partitioned table is faulty, data in the other partitions is still available.
3.  Easy maintenance: To fix a partitioned table having a faulty partition, you only need to fix the partition.

    openGauss supports range partitioned tables, interval partitioned tables, list partitioned tables, and hash partitioned tables.

    -   Range partitioned table: Data within a certain range is mapped to each partition. The range is determined by the partition key specified when the partitioned table is created. This partitioning method is most commonly used. The partition key is usually a date. For example, sales data is partitioned by month.
    -   Interval partitioned table: a special type of range partitioned tables. Compared with range partitioned tables, interval value definition is added. When no matching partition can be found for an inserted record, a partition can be automatically created based on the interval value.
    -   List partitioned table: Key values contained in the data are stored in different partitions, and the data is mapped to each partition in sequence. The key values contained in the partitions are specified when the partitioned table is created.
    -   Hash partitioned table: Data is mapped to each partition based on the internal hash algorithm. The number of partitions is specified when the partitioned table is created.


