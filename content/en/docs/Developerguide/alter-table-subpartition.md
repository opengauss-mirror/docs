# ALTER TABLE SUBPARTITION<a name="EN-US_TOPIC_0000001152048640"></a>

## Function<a name="en-us_topic_0283137443_en-us_topic_0237122077_en-us_topic_0059778761_s4954d450a2e8434aa3abac355bac38e6"></a>

**ALTER TABLE SUBPARTITION**  modifies partitions from a level-2 partitioned table, including clearing the partitions and splitting the partitions.

## Precautions<a name="en-us_topic_0283137443_en-us_topic_0237122077_en-us_topic_0059778761_s5b88399280d4435fbb63e27378589a97"></a>

-   Currently, partitions from a level-2 partitioned table can be cleared or split only.
-   Only level-2 partitions \(leaf nodes\) can be split and only the range and list partitioning policies can be used. The list partitioning policy can be used only when default partitions are split.
-   Only the partitioned table owner or a user granted with the ALTER permission can run the  **ALTER TABLE PARTITION**  command. The system administrator has this permission by default.

## Syntax<a name="en-us_topic_0283137443_en-us_topic_0237122077_en-us_topic_0059778761_s77ad09af007d4883a3bc70cc8a945481"></a>

-   Modify the syntax of the table partition.

    ```
    ALTER TABLE [ IF EXISTS ] { table_name  [*] | ONLY table_name | ONLY ( table_name  )}
        action [, ... ];
    ```

    **action**  indicates the following clauses for maintaining partitions.

    ```
        split_clause  |
        truncate_clause
    ```

-   The  **split\_clause**  syntax is used to split one partition into different partitions.

    ```
    SPLIT SUBPARTITION { subpartition_name} { split_point_clause  } [ UPDATE GLOBAL INDEX ]
    ```

    The  **split\_point\_clause**  syntax is used to specify a split point.

    ```
    AT ( subpartition_value ) INTO ( SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] , SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] )
    ```

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   The size of split point should be in the range of splitting partition key.
    >-   One partition can be split into only two new partitions.

-   The  **truncate\_clause**  syntax is used to remove a specified partition from a partitioned table.

    ```
    TRUNCATE SUBPARTITION  { subpartition_name } [ UPDATE GLOBAL INDEX ]
    ```


## Parameter Description<a name="en-us_topic_0283137443_en-us_topic_0237122077_en-us_topic_0059778761_sff7a5cc103ab41709c6f7249e8d47808"></a>

-   **table\_name**

    Specifies the name of a partitioned table.

    Value range: an existing partitioned table name

-   **subpartition\_name**

    Specifies the name of a level-2 partition name.

    Value range: an existing level-2 partition name

-   **tablespacename**

    Specifies which tablespace the partition moves to.

    Value range: an existing tablespace name


## Examples<a name="en-us_topic_0283137443_en-us_topic_0237122077_en-us_topic_0059778761_s50d0d11ee3074db6911f91d1d9e31fbd"></a>

See the examples in  **CREATE TABLE SUBPARTITION**.

