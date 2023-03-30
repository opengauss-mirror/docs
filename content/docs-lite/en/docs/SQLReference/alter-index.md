# ALTER INDEX<a name="EN-US_TOPIC_0289900645"></a>

## Function<a name="en-us_topic_0283137124_en-us_topic_0237122063_en-us_topic_0059778960_sfe4d0517393c4151ab84ea0450924b7c"></a>

**ALTER INDEX**  modifies the definition of an existing index.

It has the following forms:

-   IF EXISTS

    Sends a notice instead of an error if the specified index does not exist.

-   RENAME TO

    Changes only the name of the index. The stored data is not affected.

-   SET TABLESPACE

    This option changes the index tablespace to the specified tablespace and moves index-related data files to the new tablespace.

-   SET \(  \{ STORAGE\_PARAMETER = value  \}  \[, ...\] \)

    Changes one or more index-method-specific storage parameters of an index. Note that the index content will not be modified immediately by this statement. You may need to use  **REINDEX**  to recreate the index based on different parameters to achieve the expected effect.

-   RESET \(  \{ storage\_parameter  \}  \[, ...\] \)

    Resets one or more index-method-specific storage parameters of an index to the default value. Similar to the  **SET**  statement,  **REINDEX**  may be used to completely update the index.

-   \[ MODIFY PARTITION index\_partition\_name  \] UNUSABLE

    Sets the indexes on a table or index partition to be unavailable.

-   REBUILD \[ PARTITION index\_partition\_name \]

    Rebuilds indexes on a table or an index partition.

-   RENAME PARTITION

    Renames an index partition.

-   MOVE PARTITION

    Modifies the tablespace to which an index partition belongs.


## Precautions<a name="en-us_topic_0283137124_en-us_topic_0237122063_en-us_topic_0059778960_s503281b2c63545749248dae8614077e7"></a>

The owner of an index, a user who has the INDEX permission on the table where the index resides, or a user granted the ALTER ANY INDEX permission can run this command. By default, a system administrator has this permission.

## Syntax<a name="en-us_topic_0283137124_en-us_topic_0237122063_en-us_topic_0059778960_sf28f1b42c78e4ae79c9097da9057c429"></a>

-   Rename a table index.

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        RENAME TO new_name;
    ```


-   Change the tablespace to which a table index belongs.

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        SET TABLESPACE tablespace_name;
    ```


-   Modify the storage parameter of a table index.

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        SET ( {storage_parameter = value} [, ... ] );
    ```


-   Reset the storage parameter of a table index.

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        RESET ( storage_parameter [, ... ] ) ;
    ```


-   Set a table index or an index partition to be unavailable.

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        [ MODIFY PARTITION index_partition_name ] UNUSABLE;
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The syntax cannot be used for column-store tables.


-   Rebuild a table index or index partition.

    ```
    ALTER INDEX index_name 
        REBUILD [ PARTITION index_partition_name ];
    ```


-   Rename an index partition.

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        RENAME PARTITION index_partition_name TO new_index_partition_name;
    ```


-   Modify the tablespace to which an index partition belongs.

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        MOVE PARTITION index_partition_name TABLESPACE new_tablespace;
    ```


## Parameter Description<a name="en-us_topic_0283137124_en-us_topic_0237122063_en-us_topic_0059778960_sbb551b3820484c06ac91aa80e311e48e"></a>

-   **index\_name**

    Specifies the index name to be modified.

-   **new\_name**

    Specifies the new name of the index.

    Value range: a string. It must comply with the naming convention rule.

-   **tablespace\_name**

    Specifies the tablespace name.

    Value range: an existing tablespace name

-   **storage\_parameter**

    Specifies the name of an index-method-specific parameter.

-   **value**

    Specifies the new value for an index-method-specific storage parameter. This might be a number or a word depending on the parameter.

-   **new\_index\_partition\_name**

    Specifies the new name of the index partition.

-   **index\_partition\_name**

    Specifies the name of an index partition.

-   **new\_tablespace**

    Specifies a new tablespace.


## Examples<a name="en-us_topic_0283137124_en-us_topic_0237122063_en-us_topic_0059778960_sc18e85a8e57649469b874f56ded3847b"></a>

See  [Examples](create-index.md#en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_s985289833081489e9d77c485755bd362)  in  **CREATE INDEX**.

## Helpful Links<a name="en-us_topic_0283137124_en-us_topic_0237122063_en-us_topic_0059778960_sc49c6608f7ca4dd6bfacdb1da044d816"></a>

[CREATE INDEX](create-index.md),  [DROP INDEX](drop-index.md), and  [REINDEX](reindex.md)
