# ALTER TABLE SUBPARTITION<a name="EN-US_TOPIC_0000001152048640"></a>

## Function<a name="en-us_topic_0283137443_en-us_topic_0237122077_en-us_topic_0059778761_s4954d450a2e8434aa3abac355bac38e6"></a>

**ALTER TABLE SUBPARTITION**  modifies partitions from a level-2 partitioned table, including adding, deleting, clearing, and splitting partitions.

## Precautions<a name="en-us_topic_0283137443_en-us_topic_0237122077_en-us_topic_0059778761_s5b88399280d4435fbb63e27378589a97"></a>

-   Currently, partitions from the level-2 partitioned table can be added, deleted, cleared, or split only.
-   The tablespace of the added partition cannot be  **PG\_GLOBAL**.
-   The name of the added partition must be different from the names of the existing level-1 and level-2 partitions in the partitioned table.
-   The key value of the added partition must be consistent with the type of partition keys in the partitioned table.
-   If a range partition is added, the key value of the added partition must be greater than the upper limit of the last range partition in the partitioned table. To add a partition to a table with the  **MAXVALUE**  partition, you are advised to use the  **SPLIT**  syntax.
-   If a list partition is added, the key value of the added partition cannot be the same as that of an existing partition. To add a partition to a table with the  **DEFAULT**  partition, you are advised to use the  **SPLIT**  syntax.
-   Hash partitions cannot be added. However, if the level-2 partition mode of an level-2 partitioned table is hash but the level-1 partition mode is not hash, you can add a level-1 partition and create the corresponding level-2 partition.
-   If the number of partitions in the target partitioned table has reached the maximum \(**1048575**\), partitions cannot be added.
-   If the partitioned table contains only one level-1 or level-2 partition, the partition cannot be deleted.
-   Hash partitions cannot be deleted.
-   Use  **PARTITION FOR\(\)**  to choose partitions. The number of specified values in the brackets should be the same as the column number in customized partitions, and they must be consistent.
-   Only level-2 partitions \(leaf nodes\) can be split. Only range and list partitioning policies can be used and hash partitioning policies are not supported. The list partitioning policy can be used only when the default partition is used.
-   Only the owner of a partitioned table or users granted with the  **ALTER**  permission on the partitioned table can run the  **ALTER TABLE PARTITION**  command. The system administrator has the permission to run the command by default.
-   If the  **ALTER**  statement does not contain  **UPDATE GLOBAL INDEX**, the original GLOBAL index is invalid. In this case, other indexes are used for query. If the ALTER statement contains UPDATEGLOBAL INDEX, the original GLOBAL index is still valid and the index function is correct.

## Syntax<a name="en-us_topic_0283137443_en-us_topic_0237122077_en-us_topic_0059778761_s77ad09af007d4883a3bc70cc8a945481"></a>

-   Modify the syntax of the table partition.

    ```
    ALTER TABLE [ IF EXISTS ] { table_name  [*] | ONLY table_name | ONLY ( table_name  )}
        action [, ... ];
    ```

    **action**  indicates the following clauses for maintaining partitions.

    ```
        add_clause    |
        drop_clause   |    
        split_clause  |
        truncate_clause
    ```

-   The  **add\_clause**  syntax is used to add one or more partitions to a specified partitioned table. The syntax can be used in level-1 partitions.

    ```
    ADD {partition_less_than_item | partition_list_item } [ ( subpartition_definition_list ) ]
    ```

    It can also be used in level-2 partitions.

    ```
    MODIFY PARTITION partition_name ADD subpartition_definition
    ```

    **partition\_less\_than\_item**  defines a range partition. The syntax is as follows:

    ```
    PARTITION partition_name VALUES LESS THAN ( partition_value | MAXVALUE ) [ TABLESPACE tablespacename ]
    ```

    **partition\_list\_item**  defines a list partition. The syntax is as follows:

    ```
    PARTITION partition_name VALUES ( partition_value [, ...] | DEFAULT ) [ TABLESPACE tablespacename ]
    ```

    **subpartition\_definition\_list**  contains the  **subpartition\_definition**  object of one or more level-2 partitions. The syntax is as follows:

    ```
    SUBPARTITION subpartition_name { VALUES LESS THAN ( partition_value | MAXVALUE ) | VALUES ( partition_value [, ...] | DEFAULT ) }  [ TABLESPACE tablespace ]
    ```

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >If the level-1 partition is a hash partition, you cannot use  **ADD**  to add a level-1 partition. If the level-2 partition is a hash partition, you cannot use  **MODIFY**  to add a level-2 partition.

-   The  **drop\_clause**  syntax is used to remove a partition from a specified partitioned table. The syntax can be used in level-1 partitions.

    ```
    DROP PARTITION  { partition_name | FOR (  partition_value )  } [ UPDATE GLOBAL INDEX ]
    ```

    It can also be used in level-2 partitions.

    ```
    DROP SUBPARTITION  { subpartition_name | FOR (  partition_value, subpartition_value )  } [ UPDATE GLOBAL INDEX ]
    ```

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   If the level-1 partition is a hash partition, the level-1 partition cannot be deleted. If the level-2 partition is a hash partition, the level-2 partition cannot be deleted.
    >-   At least one sub-partition must be retained.

-   The  **split\_clause**  syntax is used to split one partition into different partitions.

    ```
    SPLIT SUBPARTITION { subpartition_name} { split_point_clause  } [ UPDATE GLOBAL INDEX ]
    ```

    The  **split\_point\_clause**  syntax used to specify a split point in the range partitioning policy is as follows:

    ```
    AT ( subpartition_value ) INTO ( SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] , SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] )
    ```

    The  **split\_point\_clause**  syntax used to specify a split point in the list partitioning policy is as follows:

    ```
    VALUES ( subpartition_value ) INTO ( SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] , SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] )
    ```

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   The size of the split point should be in the range of the splitting partition key.
    >-   One partition can be split into only two new partitions.
    >-   In the range partitioning policy, the current partition is split into two partitions based on the split point. A partition smaller than the size specified by the split point is regarded as one partition, and a partition larger than the size specified by the split point is regarded as the other partition. Therefore, only one split point can be used in the range partitioning policy. In the list partitioning policy, there can be multiple but no more than 64 split points. These split points are extracted from the boundary values of the current partition as a new partition, and the remaining boundary values of the current partition are used as another new partition.

-   The  **truncate\_clause**  syntax is used to remove a specified partition from a partitioned table.

    ```
    TRUNCATE SUBPARTITION  { subpartition_name } [ UPDATE GLOBAL INDEX ]
    ```


## Parameter Description<a name="en-us_topic_0283137443_en-us_topic_0237122077_en-us_topic_0059778761_sff7a5cc103ab41709c6f7249e8d47808"></a>

-   **table\_name**

    Specifies the name of a partitioned table.

    Value range: an existing partitioned table name.

-   **subpartition\_name**

    Specifies the name of a level-2 partition name.

    Value range: an existing level-2 partition name.

-   **tablespacename**

    Specifies which tablespace the partition moves to.

    Value range: an existing tablespace name.


## Examples<a name="en-us_topic_0283137443_en-us_topic_0237122077_en-us_topic_0059778761_s50d0d11ee3074db6911f91d1d9e31fbd"></a>

See the examples in  **CREATE TABLE SUBPARTITION**.

