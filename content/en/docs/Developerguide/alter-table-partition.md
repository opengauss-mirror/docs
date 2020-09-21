# ALTER TABLE PARTITION<a name="EN-US_TOPIC_0242370541"></a>

## Function<a name="en-us_topic_0237122077_en-us_topic_0059778761_s4954d450a2e8434aa3abac355bac38e6"></a>

**ALTER TABLE PARTITION**  modifies table partition, including adding, deleting, splitting, merging partitions, and modifying partition attributes.

## Precautions<a name="en-us_topic_0237122077_en-us_topic_0059778761_s5b88399280d4435fbb63e27378589a97"></a>

-   The tablespace for the added partition cannot be  **PG\_GLOBAL**.
-   The name of the added partition must be different from names of existing partitions in the partition table.
-   The partition key of the added partition must be the same type as that of the partition table. The key value of the added partition must exceed the upper limit of the last partition range.
-   If the number of partitions in the target partition table has reached the maximum \(32767\), partitions cannot be added.

-   If a partition table has only one partition, the partition cannot be deleted.
-   Use  **PARTITION FOR\(\)**  to choose partitions. The number of specified values in the brackets should be the same as the column number in customized partition, and they must be consistent.
-   The  **Value**  partition table does not support the  **Alter Partition**  operation.
-   Column-store tables and row-store tables cannot be partitioned.
-   Partitions cannot be added to an interval partitioned table.

## Syntax<a name="en-us_topic_0237122077_en-us_topic_0059778761_s77ad09af007d4883a3bc70cc8a945481"></a>

-   Modify the syntax of the table partition.

    ```
    ALTER TABLE [ IF EXISTS ] { table_name  [*] | ONLY table_name | ONLY ( table_name  )}
        action [, ... ];
    ```

    **action**  indicates the following clauses for maintaining partitions. For the partition continuity when multiple clauses are used for partition maintenance, openGauss does  **DROP PARTITION**  and then  **ADD PARTITION**, and finally runs the rest clauses in sequence.

    ```
    move_clause  |
        exchange_clause  |
        row_clause  |
        merge_clause  |
        modify_clause  |
        split_clause  |
        add_clause  |
        drop_clause
    ```

    -   The  **move\_clause**  syntax is used to move the partition to a new tablespace.

        ```
        MOVE PARTITION { partion_name | FOR ( partition_value [, ...] ) } TABLESPACE tablespacename
        ```

    -   The  **exchange\_clause**  syntax is used to move the data from a general table to a specified partition.

        ```
        EXCHANGE PARTITION { ( partition_name ) | FOR ( partition_value [, ...] ) } 
            WITH TABLE {[ ONLY ] ordinary_table_name | ordinary_table_name * | ONLY ( ordinary_table_name )} 
            [ { WITH | WITHOUT } VALIDATION ] [ VERBOSE ]
        ```

        The ordinary table and partition whose data is to be exchanged must meet the following requirements:

        -   The number of columns of the ordinary table is the same as that of the partition, and their information should be consistent, including: column name, data type, constraint, collation information, storage parameter, and compression information.
        -   The compression information of the ordinary table and partition should be consistent.
        -   The distribution key information of the ordinary table and partition should be consistent.
        -   The number and information of indexes of the ordinary table and partition should be consistent. 
        -   The number and information of constraints of the ordinary table and partition should be consistent. 
        -   The ordinary table cannot be a temporary table.

        When the exchange is done, the data and tablespace of the ordinary table and partition are exchanged. The statistics of the ordinary table and partition are no longer inaccurate after the exchange, and they should be analyzed again.

    -   The  **row\_clause**  syntax is used to set row movement of a partitioned table.

        ```
        { ENABLE | DISABLE } ROW MOVEMENT
        ```

    -   The  **merge\_clause**  syntax is used to merge partitions into one.

        ```
        MERGE PARTITIONS { partition_name } [, ...] INTO PARTITION partition_name 
            [ TABLESPACE tablespacename ]
        ```

    -   The  **modify\_clause**  syntax is used to set whether a partition index is usable.

        ```
        MODIFY PARTITION partition_name { UNUSABLE LOCAL INDEXES | REBUILD UNUSABLE LOCAL INDEXES }
        ```

    -   The  **split\_clause**  syntax is used to split one partition into partitions.

        ```
        SPLIT PARTITION { partition_name | FOR ( partition_value [, ...] ) } { split_point_clause | no_split_point_clause }
        ```

        -   The  **split\_point\_clause**  syntax is used to specify a split point.

            ```
            AT ( partition_value ) INTO ( PARTITION partition_name [ TABLESPACE tablespacename ] , PARTITION partition_name [ TABLESPACE tablespacename ] )
            ```

            >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
            >-   Column-store tables and row-store tables cannot be partitioned.
            >-   The size of the split point should be in the range of partition keys of the partition to be split. The split point can only split one partition into two new partitions.

        -   The  **no\_split\_point\_clause**  syntax does not specify a split point.

            ```
            INTO { ( partition_less_than_item [, ...] ) | ( partition_start_end_item [, ...] ) }
            ```

            >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
            >-   The first new partition key specified by  **partition\_less\_than\_item**  should be greater than that of the previously split partition \(if any\), and the last partition key specified by  **partition\_item\_clause**  should equal that of the partition being split.
            >-   The first new partition key specified by  **partition\_start\_end\_item**  should equal that of the former partition \(if any\), and the last partition key specified by  **partition\_start\_end\_item**  should equal that of the partition being split.
            >-   **partition\_less\_than\_item**  supports a maximum of 4 partition keys, while  **partition\_start\_end\_item**  supports only one partition key. For details about the supported data types, see  [PARTITION BY RANGE\(parti...](create-table-partition.md#en-us_topic_0237122119_en-us_topic_0059777586_l00efc30fe63048ffa2ef68c5b18bb455).
            >-   **partition\_less\_than\_item**  and  **partition\_start\_end\_item**  cannot be used in the same statement.


        -   The syntax of  **partition\_less\_than\_item**  is as follows:

            ```
            PARTITION partition_name VALUES LESS THAN ( { partition_value | MAXVALUE }  [, ...] ) 
                [ TABLESPACE tablespacename ]
            ```

        -   The syntax of  **partition\_start\_end\_item**  is as follows. For details about the constraints, see  [partition\_start\_end\_item syntax](create-table-partition.md#en-us_topic_0237122119_li2094151861116).

            ```
            PARTITION partition_name {
                    {START(partition_value) END (partition_value) EVERY (interval_value)} |
                    {START(partition_value) END ({partition_value | MAXVALUE})} |
                    {START(partition_value)} |
                    {END({partition_value | MAXVALUE})}
            } [TABLESPACE tablespace_name]
            
            ```


    -   The  **add\_clause**  syntax is used to add one or more partitions to a specified partitioned table.

        ```
        ADD {partition_less_than_item | partition_start_end_item}
        ```

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   Partitions cannot be added to an interval partitioned table.

    -   The  **drop\_clause**  syntax is used to remove a partition from a specified partitioned table.

        ```
        DROP PARTITION  { partition_name | FOR (  partition_value [, ...] )  } 
        ```


-   The syntax for modifying the name of a partition is as follows:

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name  )}
        RENAME PARTITION { partion_name | FOR ( partition_value [, ...] ) } TO partition_new_name;
    ```


## Parameter Description<a name="en-us_topic_0237122077_en-us_topic_0059778761_sff7a5cc103ab41709c6f7249e8d47808"></a>

-   **table\_name**

    Specifies the name of a partitioned table.

    Value range: an existing table name

-   **partition\_name**

    Specifies the name of a partition.

    Value range: an existing table name

-   **tablespacename**

    Specifies which tablespace the partition moves to.

    Value range: an existing table name

-   **partition\_value**

    Specifies the key value of a partition.

    The value specified by  **PARTITION FOR \( partition\_value \[, ...\] \)**  can uniquely identify a partition.

    Value range: partition keys for the partition to be renamed

-   **UNUSABLE LOCAL INDEXES**

    Sets all the indexes unusable in the partition.

-   **REBUILD UNUSABLE LOCAL INDEXES**

    Rebuilds all the indexes in the partition.

-   **ENABLE/DISABLE ROW MOVEMET**

    Sets row movement.

    If the tuple value is updated on the partition key during the  **UPDATE**  action, the partition where the tuple is located is altered. Setting this parameter enables error messages to be reported or movement of the tuple between partitions.

    Value range:

    -   **ENABLE**: Row movement is enabled.
    -   **DISABLE**: Row movement is disabled.

    The default value is  **ENABLE**.

-   **ordinary\_table\_name**

    Specifies the name of the ordinary table whose data is to be migrated.

    Value range: an existing table name

-   **\{ WITH | WITHOUT \} VALIDATION**

    Checks whether the ordinary table data meets the specified partition key range of the partition to be migrated.

    Value range:

    -   **WITH**: checks whether the ordinary table data meets the partition key range of the partition to be migrated. If any data does not meet the required range, an error is reported.
    -   **WITHOUT**: does not check whether the ordinary table data meets the partition key range of the partition to be migrated.

    The default value is  **WITH**.

    The check is time consuming, especially when the data volume is large. Therefore, use  **WITHOUT**  when you are sure that the current ordinary table data meets the partition key range of the partition to be migrated.

-   **VERBOSE**

    When  **VALIDATION**  is  **WITH**, if the ordinary table contains data that is out of the partition key range, insert the data to the correct partition. If there is no correct partition where the data can be inserted to, an error is reported.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >Only when  **VALIDATION**  is  **WITH**,  **VERBOSE**  can be specified.

-   **partition\_new\_name**

    Specifies the new name of a partition.

    Value range: a string. It must comply with the naming convention.


## Example<a name="en-us_topic_0237122077_en-us_topic_0059778761_s50d0d11ee3074db6911f91d1d9e31fbd"></a>

See  [Examples](create-table-partition.md#en-us_topic_0237122119_en-us_topic_0059777586_s43dd49de892344bf89e6f56f17404842)  in  **CREATE TABLE PARTITION**.

## Helpful Links<a name="en-us_topic_0237122077_en-us_topic_0059778761_s267aeb502b5546f69f580c79c0a728df"></a>

[CREATE TABLE PARTITION](create-table-partition.md), and  [DROP TABLE](en-us_topic_0242370616.md)

