# Foreign Table Usage<a name="EN-US_TOPIC_0311524276"></a>

In  [\#EN-US\_TOPIC\_0311524276/en-us\_topic\_0085032368\_table1097865225410](#en-us_topic_0085032368_table1097865225410), you can partition a table before storing it, facilitating filtering in queries. You can also specify partition attributes when creating a table using Hive and writing the table in ORC or Parquet format to HDFS. The partition attributes of openGauss should be consistent with those of the table created using Hive to ensure correct mapping and effective queries.

In openGauss, you can use  **CREATE FOREIGN TABLE**  to specify the partition information used for the created table. For details about how to use  **CREATE FOREIGN TABLE**, see  [CREATE FOREIGN TABLE](en-us_topic_0289900252.md).

The constraints on partitions are as follows:

1.  Different from the Hive table creation syntax, in openGauss, the partition column in  **PARTITION**  must be a definition column in the  **COLUMN**  package.
2.  In openGauss, the number of partition columns is not limited in HDFS foreign tables or the Hive syntax for table creation and partitioning, but only the first four partition columns can be pruned.

    The number of partition columns defined in a single openGauss HDFS foreign table must be less than or equal to that defined in the Hive table, and the sequence of their definitions must be the same.

3.  The comparison used for partition pruning includes greater than, less than, no greater than, no less than, equal to, unequal to,  **IS NULL**,  **IS NOT NULL**,  **ANY**, and  **ALL**. For binary expression operations, the operator must consist of the basic column type and the const type.
4.  Foreign tables can be joined with ordinary tables for data query. For example:

    ```
    postgres=# CREATE TABLE inner_tbl( a int, b int) WITH(ORIENTATION='column');
    ```

    ```
    NOTICE:  The 'DISTRIBUTE BY' clause is not specified. Using 'a' as the distribution column by default.
    HINT:  Please use 'DISTRIBUTE BY' clause to specify suitable data distribution column.
    CREATE TABLE
    ```

    ```
    postgres=# DROP FOREIGN TABLE region010;
    ```

    ```
    DROP FOREIGN TABLE
    ```

    ```
    postgres=# CREATE FOREIGN TABLE region010  (
     R_REGIONKEY  INT4,
     constraint part_11constr_unique unique (R_REGIONKEY) not enforced,
     R_NAME TEXT,
     R_COMMENT TEXT)
     SERVER    hdfs_server
     OPTIONS(format 'orc', foldername '/user/hive/warehouse/gaussdb.db/region_orc11_64stripe', encoding 'GBK')
     DISTRIBUTE BY roundrobin;
    ```

    ```
    NOTICE:  CREATE FOREIGN TABLE / UNIQUE will create constraint "part_11constr_unique" for foreign table "region010"
    CREATE FOREIGN TABLE 
    ```

    ```
    postgres=# EXPLAIN SELECT * FROM region010, inner_tbl WHERE a=R_REGIONKEY;
    ```

    ```
     id |                   operation                    | E-rows | E-width | E-costs
    ----+------------------------------------------------+--------+---------+---------
      1 | ->  Row Adapter                                |     43 |      76 | 68.71
      2 |    ->  Vector Streaming (type: GATHER)         |     43 |      76 | 68.71
      3 |       ->  Vector Hash Join (4,5)               |     43 |      76 | 66.03
      4 |          ->  Vector Foreign Scan on region010  |    853 |      68 | 52.65
      5 |          ->  Vector Streaming(type: BROADCAST) |     10 |       8 | 10.63
      6 |             ->  CStore Scan on inner_tbl       |     10 |       8 | 10.01
    (6 rows)
    
             Predicate Information (identified by plan id)
    ---------------------------------------------------------------
       3 --Vector Hash Join (4,5)
             Hash Cond: (region010.r_regionkey = inner_tbl.a)
             Generate Bloom Filter On Expr: inner_tbl.a
             Generate Bloom Filter On Index: 0
       4 --Vector Foreign Scan on region010
             Server Type: hdfs
             Filter By Bloom Filter On Expr: region010.r_regionkey
             Filter By Bloom Filter On Index: 0
    (8 rows)
    ```

5.  Currently, certain expressions and functions do not support pushdown. As a result, the query that generates multi-table joins cannot be converted to a plan or be executed. In this case, you need to rewrite the SQL statement and run it again. For example, if the error information "This SQL cannot be executed because it cannot be pushed down to datanode" is displayed, rewrite the SQL statement and run it again.

