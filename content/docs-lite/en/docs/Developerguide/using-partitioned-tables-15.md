# Using Partitioned Tables<a name="EN-US_TOPIC_0289900830"></a>

Partitioning refers to splitting what is logically one large table into smaller physical pieces based on specific schemes. The table based on the logic is called a partitioned table, and a physical piece is called a partition. Data is stored in physical partitions not the logical table. A partitioned table has the following advantages over an ordinary table:

1.  High query performance: You can specify partitions when querying partitioned tables, improving query efficiency.
2.  High availability: If a certain partition in a partitioned table is faulty, data in the other partitions is still available.
3.  Easy maintenance: To fix a partitioned table having a faulty partition, you only need to fix the partition.

openGauss supports range partitioned tables, list partitioned tables, and hash partitioned tables.

-   Range partitioned table: Data in different ranges is mapped to different partitions. The range is determined by the partition key specified during the partitioned table creation. The partition key is usually a date. For example, sales data is partitioned by month.
-   List partitioned table: Key values contained in the data are stored in different partitions, and the data is mapped to each partition in sequence. The key values contained in the partitions are specified when the partitioned table is created.
-   Hash partitioned table: Data is mapped to each partition based on the internal hash algorithm. The number of partitions is specified when the partitioned table is created.

