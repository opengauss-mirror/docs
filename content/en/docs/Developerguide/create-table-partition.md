# CREATE TABLE PARTITION<a name="EN-US_TOPIC_0289900346"></a>

## Function<a name="en-us_topic_0283136653_en-us_topic_0237122119_section1163224811518"></a>

**CREATE TABLE PARTITION**  creates a partitioned table. Partitioning refers to splitting what is logically one large table into smaller physical pieces based on specific schemes. The table based on the logic is called a partitioned table, and each physical piece is called a partition. Data is stored on these physical partitions, instead of the logical partitioned table.

The common forms of partitioning include range partitioning, interval partitioning, hash partitioning, list partitioning, and value partitioning. Currently, row-store tables support range partitioning, interval partitioning, hash partitioning, and list partitioning. Column-store tables support only range partitioning.

In range partitioning, a table is partitioned based on ranges defined by one or more columns, with no overlap between the ranges of values assigned to different partitions. Each range has a dedicated partition for data storage.

The partitioning policy for range partitioning refers to how data is inserted into partitions. Currently, range partitioning only allows the use of the range partitioning policy.

In range partitioning, a table is partitioned based on partition key values. If a record can be mapped to a partition, it is inserted into the partition; if it cannot, an error message is returned. Range partitioning is the most commonly used partitioning policy.

Interval partitioning is a special type of range partitioning. Compared with range partitioning, interval value definition is added. When no matching partition can be found for an inserted record, a partition can be automatically created based on the interval value.

Interval partitioning supports only table-based partitioning of a list where the data type can be TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\] and DATE.

Interval partitioning policy: A record is mapped to a created partition based on the partition key value. If the record can be mapped to a created partition, the record is inserted into the corresponding partition. Otherwise, a partition is automatically created based on the partition key value and table definition information, and then the record is inserted into the new partition. The data range of the new partition is equal to the interval value.

In hash partitioning, a modulus and a remainder are specified for each partition based on a column in the table, and records to be inserted into the table are allocated to the corresponding partition, the rows in each partition must meet the following condition: The value of the partition key divided by the specified modulus generates the remainder specified for the partition key.

In hash partitioning, table is partitioned based on partition key values. If a record can be mapped to a partition, it is inserted into the partition; if it cannot, an error message is returned.

List partitioning is to allocate the records to be inserted into a table to the corresponding partition based on the key values in each partition. The key values do not overlap in different partitions. Create a partition for each group of key values to store corresponding data.

In list partitioning, table is partitioned based on partition key values. If a record can be mapped to a partition, it is inserted into the partition; if it cannot, an error message is returned.

Partitioning can provide several benefits:

-   Query performance can be improved drastically in certain situations, particularly when most of the heavily accessed rows of the table are in a single partition or a small number of partitions. Partitioning narrows the range of data search and improves data access efficiency.
-   In the case of an insert or update operation on most portions of a single partition, performance can be improved by taking advantage of continuous scan of that partition instead of partitions scattered across the whole table.
-   Frequent loading or deletion operations on records in a separate partition can be accomplished by reading or removing that partition. It also entirely avoids the **VACUUM** overload caused by bulk **DELETE** operations \(Hash partitions cannot be deleted.\).

## Precautions<a name="en-us_topic_0283136653_en-us_topic_0237122119_en-us_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

-   If the constraint key of the unique constraint and primary key constraint contains all partition keys, a local index is created for the constraints. Otherwise, a global index is created.
-   Currently, hash partitioning and list partitioning support only single-column partitioning, and do not support multi-column partitioning.
-   When you have the  **INSERT**  permission on an interval partitioned table, partitions can be automatically created when you run  **INSERT**  to write data to the table.
-   In the  **PARTITION FOR \(values\)**  syntax for partitioned tables, values can only be constants.
-   In the  **PARTITION FOR \(values\)**  syntax for partitioned tables, if data type conversion is required for values, you are advised to use forcible type conversion to prevent the implicit type conversion result from being inconsistent with the expected result.
-   The maximum number of partitions is 1048575. Generally, it is impossible to create so many partitions, because too many partitions may cause insufficient memory. Create partitions based on the value of  **local\_syscache\_threshold**. The memory used by the partitioned tables is about \(number of partitions x 3/1024\) MB. Theoretically, the memory occupied by the partitions cannot be greater than the value of  **local\_syscache\_threshold**. In addition, some space must be reserved for other functions.
-   Currently, the statement specifying a partition cannot perform global index scan.

## Syntax<a name="en-us_topic_0283136653_en-us_topic_0237122119_en-us_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE TABLE [ IF NOT EXISTS ] partition_table_name
( [ 
    { column_name data_type [ COLLATE collation ] [ column_constraint [ ... ] ]
    | table_constraint
    | LIKE source_table [ like_option [...] ] }[, ... ]
] )
    [ AUTO_INCREMENT [ = ] value ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    [ COMMENT {=| } 'text' ]
     PARTITION BY { 
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_less_than_item [, ... ] )} |
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_start_end_item [, ... ] )} |
         {LIST (partition_key) ( PARTITION partition_name VALUES (list_values) [TABLESPACE tablespace_name][, ... ])} |
        {HASH (partition_key) ( PARTITION partition_name [TABLESPACE tablespace_name][, ... ])}
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_less_than_item [COMMENT {=| } 'text'][...][, ... ] )} |
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_start_end_item [COMMENT {=| } 'text'][...][, ... ] )} |
        {LIST | HASH (partition_key) (PARTITION partition_name [VALUES (list_values_clause)] opt_table_space [COMMENT {=| } 'text'][...])}
    } [ { ENABLE | DISABLE } ROW MOVEMENT ]; 
```

-   **column\_constraint**  is as follows:

    ```
    [ CONSTRAINT constraint_name ]
    { NOT NULL |
      NULL | 
      CHECK ( expression ) | 
      DEFAULT default_e xpr | 
      GENERATED ALWAYS AS ( generation_expr ) STORED |
      AUTO_INCREMENT |
      UNIQUE index_parameters | 
      PRIMARY KEY index_parameters |
      REFERENCES reftable [ ( refcolumn ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
            [ ON DELETE action ] [ ON UPDATE action ] }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    [ COMMENT {=| } 'text' ]
    ```

-   **table\_constraint**  is as follows:

    ```
    [ CONSTRAINT [ constraint_name ] ]
    { CHECK ( expression ) | 
      UNIQUE [ index_name ][ USING method ] ( { column_name [ ASC | DESC ] } [, ... ] ) index_parameters | 
      PRIMARY KEY [ USING method ] ( { column_name [ ASC | DESC ] } [, ... ] ) index_parameters |
      FOREIGN KEY [ index_name ] ( column_name [, ... ] ) REFERENCES reftable [ ( refcolumn [, ... ] ) ]
          [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    [ COMMENT {=| } 'text' ]
    ```


-   **like\_option**  is as follows:

    ```
    { INCLUDING | EXCLUDING } { DEFAULTS | GENERATED | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | RELOPTIONS| ALL }
    ```


-   **index\_parameters**  is as follows:

    ```
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ USING INDEX TABLESPACE tablespace_name ]
    ```


-   partition\_less\_than\_item:

    ```
    PARTITION partition_name VALUES LESS THAN ( { partition_value | MAXVALUE } ) [TABLESPACE tablespace_name]
    ```

-   partition\_start\_end\_item:

    ```
    PARTITION partition_name {
            {START(partition_value) END (partition_value) EVERY (interval_value)} |
            {START(partition_value) END ({partition_value | MAXVALUE})} |
            {START(partition_value)} |
            {END({partition_value | MAXVALUE})}
    } [TABLESPACE tablespace_name]
    ```

-   COMMENT {=| } 'text':

    In the partition of a partitioned table, this column is meaningless and is used only for syntax compatibility. An alarm is displayed when the syntax is used in the database.
    
## Parameter Description<a name="en-us_topic_0283136653_en-us_topic_0237122119_en-us_topic_0059777586_sd2701df1d7364084a7791592def4e9eb"></a>

-   **IF NOT EXISTS**

    Sends a notice, but does not throw an error, if a table with the same name exists.

-   **partition\_table\_name**

    Specifies the name of a partitioned table.

    Value range: a string. It must comply with the identifier naming convention.

-   **column\_name**

    Specifies the name of a column to be created in the new table.

    Value range: a string. It must comply with the identifier naming convention.

-   **data\_type**

    Specifies the data type of the column.

-   **COLLATE  collation**

    Assigns a collation to the column \(which must be of a collatable data type\). If no collation is specified, the default collation is used. You can run the  **select \* from pg\_collation;**  command to query collation rules from the  **pg\_collation**  system catalog. The default collation rule is the row starting with  **default**  in the query result.

-   **CONSTRAINT constraint\_name**

    Specifies the name of a column or table constraint. The optional constraint clauses specify constraints that new or updated rows must satisfy for an insert or update operation to succeed.

    There are two ways to define constraints:

    -   A column constraint is defined as part of a column definition, and it is bound to a particular column.
    -   A table constraint is not bound to a particular column but can apply to more than one column. constraint\_name is optional in B-compatible mode (**sql\_compatibility = 'B'**). For other modes, constraint\_name must be added.

-   **index\_name**

    Specifies an index name.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >-   index\_name is supported only in B-compatible databases (that is, sql\_compatibility = 'B').
    >-   For foreign key constraints, if constraint\_name and index\_name are specified at the same time, constraint\_name is used as the index name.
    >-   For a unique key constraint, if both constraint\_name and index\_name are specified, index\_name is used as the index name.

-   **USING method**

    Specifies the name of the index method to be used.

    For details about the value range, see [USING method](create-index.md).

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >-   The USING method is supported only in B-compatible databases (that is, sql\_compatibility = 'B').
    >-   In B-compatible mode, if USING method is not specified, the default index method is btree for ASTORE or ubtree for USTORE.

-   **ASC | DESC**

    **ASC** specifies an ascending (default) sort order. **DESC** specifies a descending sort order.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >ASC|DESC is supported only in B-compatible databases (sql\_compatibility = 'B').

-   **LIKE source\_table \[ like\_option ... \]**

    Specifies a table from which the new table automatically copies all column names, their data types, and their not-null constraints.

    Unlike  **INHERITS**, the new table and original table are decoupled after creation is complete. Changes to the original table will not be applied to the new table, and it is not possible to include data of the new table in scans of the original table.

    -   Default expressions for the copied column definitions will be copied only if  **INCLUDING DEFAULTS**  is specified. The default behavior is to exclude default expressions, resulting in the copied columns in the new table having default values  **NULL**.
    -   If  **INCLUDING GENERATED**  is specified, the generated expression of the source table column is copied to the new table. By default, the generated expression is not copied.
    -   Not-null constraints are always copied to the new table.  **CHECK**  constraints will only be copied if  **INCLUDING CONSTRAINTS**  is specified; other types of constraints will never be copied. These rules also apply to column constraints and table constraints.
    -   Unlike those of  **INHERITS**, columns and constraints copied by  **LIKE**  are not merged with similarly named columns and constraints. If the same name is specified explicitly or in another  **LIKE**  clause, an error is reported.
    -   Any indexes on the original table will not be created on the new table, unless the  **INCLUDING INDEXES**  clause is specified.
    -   **STORAGE**  settings for the copied column definitions are copied only if  **INCLUDING STORAGE**  is specified. The default behavior is to exclude  **STORAGE**  settings.
    -   If  **INCLUDING COMMENTS**  is specified, comments for the copied columns, constraints, and indexes are copied. The default behavior is to exclude comments.
    -   If  **INCLUDING RELOPTIONS**  is specified, the new table will copy the storage parameter \(that is,  **WITH**  clause\) of the source table. The default behavior is to exclude partition definition of the storage parameter of the source table.
    -   **INCLUDING ALL**  contains the meaning of  **INCLUDING DEFAULTS**,  **INCLUDING CONSTRAINTS**,  **INCLUDING INDEXES**,  **INCLUDING STORAGE**,  **INCLUDING COMMENTS**,  **INCLUDING PARTITION**, and  **INCLUDING RELOPTIONS**.

-   **AUTO\_INCREMENT \[ = \] value**

    This clause specifies an initial value for an auto-increment column. The value must be a positive integer and cannot exceed 2<sup>127</sup>-1.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >This clause takes effect only when **sql\_compatibility** is set to **B**.

-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    Specifies an optional storage parameter for a table or an index. Optional parameters are as follows:

    -   FILLFACTOR

        The fill factor of a table is a percentage from 10 to 100.  **100**  \(complete filling\) is the default value. When a smaller fill factor is specified,  **INSERT**  operations pack table pages only to the indicated percentage. The remaining space on each page is reserved for updating rows on that page. This gives  **UPDATE**  a chance to place the updated copy of a row on the same page, which is more efficient than placing it on a different page. For a table whose entries are never updated, setting the fill factor to  **100**  \(complete filling\) is the best choice, but in heavily updated tables a smaller fill factor would be appropriate. The parameter has no meaning for column-store tables.

        Value range: 10–100

    -   ORIENTATION

        Determines the storage mode of the data in the table.

        Value range:

        -   **COLUMN**: The data will be stored in columns.
        -   **ROW**  \(default value\): The data will be stored in rows.

            >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
            >**orientation**  cannot be modified.


    -   STORAGE\_TYPE

        Specifies the storage engine type. This parameter cannot be modified once it is set.

        Value range:

        -   **USTORE**  indicates that tables support the inplace-update storage engine. Note that the  **track\_counts**  and  **track\_activities**  parameters must be enabled when the Ustore table is used. Otherwise, space expansion may occur.
        -   **ASTORE**  indicates that tables support the append-only storage engine.

        Default value: If no table is specified, data is stored in append-only mode by default.

    -   COMPRESSION
        -   Valid values for column-store tables are  **LOW**,  **MIDDLE**,  **HIGH**,  **YES**, and  **NO**, and the compression level increases accordingly. The default is  **LOW**.
        -   Row-store tables do not support compression.

    -   MAX\_BATCHROW

        Specifies the maximum number of rows in a storage unit during data loading. The parameter is only valid for column-store tables.

        Value range: 10000 to 60000. The default value is  **60000**.

    -   PARTIAL\_CLUSTER\_ROWS

        Specifies the number of records to be partially clustered for storage during data loading. The parameter is only valid for column-store tables.

        Value range: greater than or equal to  **MAX\_BATCHROW**. You are advised to set this parameter to an integer multiple of  **MAX\_BATCHROW**.

    -   DELTAROW\_THRESHOLD

        A reserved parameter. The parameter is only valid for column-store tables.

        Value range: 0 to 9999

    -   segment

        The data is stored in segment-page mode. This parameter supports only row-store tables. Column-store tables, temporary tables, and unlogged tables are not supported. The Ustore storage engine is not supported.

        Value range:  **on**  and  **off**

        Default value:  **off**


-   **COMPRESS / NOCOMPRESS**

    Specifies keyword  **COMPRESS**  during the creation of a table, so that the compression feature is triggered in case of bulk  **INSERT**  operations. If this feature is enabled, a scan is performed for all tuple data within the page to generate a dictionary and then the tuple data is compressed and stored. If  **NOCOMPRESS**  is specified, the table is not compressed. Row-store tables do not support compression.

    Default value:  **NOCOMPRESS**, that is, tuple data is not compressed before storage.

-   **TABLESPACE tablespace\_name**

    Specifies that the new table will be created in the  **tablespace\_name**  tablespace. If not specified, the default tablespace is used.

-   **PARTITION BY RANGE\(partition\_key\)**

    Creates a range partition.  **partition\_key**  is the name of the partition key.

    \(1\) Assume that the  **VALUES LESS THAN**  syntax is used.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >In this case, a maximum of four partition keys are supported.

    Data types supported by the partition keys are as follows: SMALLINT, INTEGER, BIGINT, DECIMAL, NUMERIC, REAL, DOUBLE PRECISION, CHARACTER VARYING\(*n_\), VARCHAR\(*n_\), CHARACTER\(*n_\), CHAR\(*n_\), CHARACTER, CHAR, TEXT, NVARCHAR, NVARCHAR2, NAME, TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\], and DATE.

    \(2\) Assume that the  **START END**  syntax is used.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >In this case, only one partition key is supported.

    Data types supported by the partition key are as follows:  **SMALLINT**,  **INTEGER**,  **BIGINT**,  **DECIMAL**,  **NUMERIC**,  **REAL**,  **DOUBLE PRECISION**,  **TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\]**,  **TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\]**, and  **DATE**.

    \(3\) Assume that the  **INTERVAL**  syntax is used.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >In this case, only one partition key is supported.

    In this case, the data types supported by the partition key are TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\] and DATE.

-   **PARTITION partition\_name VALUES LESS THAN \( \{ partition\_value | MAXVALUE \} \)**

    Specifies the information of partitions.  **partition\_name**  is the name of a range partition.  **partition\_value**  is the upper limit of a range partition, and the value depends on the type of  **partition\_key**.  *MAXVALUE*  usually specifies the upper limit of the last range partition.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   Each partition requires an upper limit.
    >-   The data type of the upper limit must be the same as that of the partition key.
    >-   In a partition list, partitions are arranged in ascending order of upper limits. A partition with a smaller upper limit value is placed before another partition with a larger one.

-   **PARTITION partition\_name \{START \(partition\_value\) END \(partition\_value\) EVERY \(interval\_value\)\} |  **\{START \(partition\_value\) END \(partition\_value|MAXVALUE\)\} | \{START\(partition\_value\)\} | **\{END \(partition\_value | MAXVALUE\)**\}

    Specifies the information of partitions.

    -   **partition\_name**: name or name prefix of a range partition. It is the name prefix only in the following cases \(assuming that  **partition\_name**  is  **p1**\):
        -   If  **START**+**END**+**EVERY**  is used, the names of partitions will be defined as  **p1\_1**,  **p1\_2**, and the like. For example, if  **PARTITION p1 START\(1\) END\(4\) EVERY\(1\)**  is defined, the generated partitions are \[1, 2\), \[2, 3\), and \[3, 4\), and their names are  **p1\_1**,  **p1\_2**, and  **p1\_3**. In this case,  **p1**  is a name prefix.
        -   If the defined statement is in the first place and has  **START**  specified, the range \(*MINVALUE*,  **START**\) will be automatically used as the first actual partition, and its name will be  **p1\_0**. The other partitions are then named  **p1\_1**,  **p1\_2**, and the like. For example, if  **PARTITION p1 START\(1\), PARTITION p2 START\(2\)**  is defined, generated partitions are \(*MINVALUE*, 1\), \[1, 2\), and \[2,  *MAXVALUE*\), and their names will be  **p1\_0**,  **p1\_1**, and  **p2**. In this case,  **p1**  is a name prefix and  **p2**  is a partition name.  **MINVALUE**  means the minimum value.

    -   **partition\_value**: start value or end value of a range partition. The value depends on  **partition\_key**  and cannot be  *MAXVALUE*.
    -   **interval\_value**: width of each partition for dividing the \[**START**,  **END**\) range. It cannot be  *MAXVALUE*. If the value of \(**END**  –  **START**\) divided by  **EVERY**  has a remainder, the width of only the last partition is less than the value of  **EVERY**.
    -   *MAXVALUE*  usually specifies the upper limit of the last range partition.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >1.  If the defined statement is in the first place and has  **START**  specified, the range \(*MINVALUE*,  **START**\) will be automatically used as the first actual partition.
    >2.  The  **START END**  syntax must comply with the following rules:
    >    -   The value of  **START**  \(if any, same for the following situations\) in each  **partition\_start\_end\_item**  must be smaller than that of  **END**.
    >    -   In two adjacent  **partition\_start\_end\_item**  statements, the value of the first  **END**  must be equal to that of the second  **START**.
    >    -   The value of  **EVERY**  in each  **partition\_start\_end\_item**  must be a positive number \(in ascending order\) and must be smaller than  **END**  minus  **START**.
    >    -   Each partition includes the start value \(unless it is  *MINVALUE*\) and excludes the end value. The format is as follows: \[**START**,  **END**\).
    >    -   Partitions created by the same  **partition\_start\_end\_item**  belong to the same tablespace.
    >    -   If  **partition\_name**  is a name prefix of a partition, the length must not exceed 57 bytes. If there are more than 57 bytes, the prefix will be automatically truncated.
    >    -   When creating or modifying a partitioned table, ensure that the total number of partitions in the table does not exceed the maximum value  **1048575**.
    >3.  In statements for creating partitioned tables,  **START END**  and  **LESS THAN**  cannot be used together.
    >4.  The  **START END**  syntax in a partitioned table creation SQL statement will be replaced by the  **VALUES LESS THAN**  syntax when  **gs\_dump**  is executed.

-   **INTERVAL \('interval\_expr'\) \[ STORE IN \(tablespace\_name \[, ... \] \) \]**

    Defines interval partitioning.

    -   **interval\_expr**: interval for automatically creating partitions, for example, 1 day or 1 month.

    -   **STORE IN \(tablespace\_name \[, ... \] \)**: Specifies the list of tablespaces for storing automatically created partitions. If this parameter is specified, the automatically created partitions are cyclically selected from the tablespace list. Otherwise, the default tablespace of the partition table is used.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >Column-store tables do not support interval partitioning.

-   **PARTITION BY LIST\(partition\_key\)**

    Create a list partition.  **partition\_key**  is the name of the partition key.

    -   For  **partition\_key**, the list partitioning policy supports only one column of partition keys.
    -   If the clause is  **VALUES \(list\_values\_clause\)**,  **list\_values\_clause**  contains the key values of the corresponding partition. It is recommended that the number of key values of each partition be less than or equal to 64.

    Partition keys support the following data types: INT1, INT2, INT4, INT8, NUMERIC, VARCHAR\(*n_\), CHAR, BPCHAR, NVARCHAR, NVARCHAR2, TIMESTAMP\[\(*p_\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(*p*\)\] \[WITH TIME ZONE\], and DATE. The number of partitions cannot exceed 1048575.

-   **PARTITION BY HASH\(partition\_key\)**

    Create a hash partition.  **partition\_key**  is the name of the partition key.

    For  **partition\_key**, the hash partitioning policy supports only one column of partition keys.

    Partition keys support the following data types: INT1, INT2, INT4, INT8, NUMERIC, VARCHAR\(*n_\), CHAR, BPCHAR, TEXT, NVARCHAR, NVARCHAR2, TIMESTAMP\[\(*p_\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(*p*\)\] \[WITH TIME ZONE\], and DATE. The number of partitions cannot exceed 1048575.

-   **\{ ENABLE | DISABLE \} ROW MOVEMENT**

    Sets row movement.

    If the tuple value is updated on the partition key during the  **UPDATE**  action, the partition where the tuple is located is altered. Setting this parameter enables error messages to be reported or movement of the tuple between partitions.

    Value range:

    -   **ENABLE**  \(default value\): Row movement is enabled.
    -   **DISABLE**: Row movement is disabled.

-   **NOT NULL**

    The column is not allowed to contain null values.  **ENABLE**  can be omitted.

-   **NULL**

    Specifies that the column is allowed to contain null values. This is the default setting.

    This clause is only provided for compatibility with non-standard SQL databases. It is not recommended.

-   **CHECK \(condition\) \[ NO INHERIT \]**

    Specifies an expression producing a Boolean result where the insert or update operation of new or updated rows can succeed only when the expression result is  **TRUE**  or  **UNKNOWN**; otherwise, an error is thrown and the database is not altered.

    A check constraint specified as a column constraint should reference only the column's values, while an expression appearing in a table constraint can reference multiple columns.

    A constraint marked with  **NO INHERIT**  will not propagate to child tables.

    **ENABLE**  can be omitted.

-   **DEFAULT default\_expr**

    Assigns a default data value for a column. The value can be any variable-free expressions. \(Subqueries and cross-references to other columns in the current table are not allowed.\) The data type of the default expression must match the data type of the column.

    The default expression will be used in any insert operation that does not specify a value for the column. If there is no default value for a column, then the default value is null.

-   GENERATED ALWAYS AS \( generation\_expr \) STORED

    This clause creates a column as a generated column. The value of the generated column is calculated by  **generation\_expr**  when data is written \(inserted or updated\).  **STORED**  indicates that the value of the generated column is stored as a common column.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   The generation expression cannot refer to data other than the current row in any way. The generation expression cannot reference other generation columns or system columns. The generation expression cannot return a result set. No subquery, aggregate function, or window function can be used. The function called by the generation expression can only be an immutable function.
    >-   Default values cannot be specified for generated columns.
    >-   The generated column cannot be used as a part of the partition key.
    >-   Do not specify the generated column and the CASCADE, SET NULL, and SET DEFAULT actions of the ON UPDATE constraint at the same time. Do not specify the generated column and the SET NULL, and SET DEFAULT actions of the ON DELETE constraint at the same time.
    >-   The method of modifying and deleting generated columns is the same as that of common columns. Delete the common column that the generated column depends on. The generated column is automatically deleted. The type of the column on which the generated column depends cannot be changed.
    >-   The generated column cannot be directly written. In the INSERT or UPDATE statement, values cannot be specified for generated columns, but the keyword DEFAULT can be specified.
    >-   The permission control for generated columns is the same as that for common columns.
    >-   Columns cannot be generated for column-store tables and MOTs. In foreign tables, only  **postgres\_fdw**  supports generated columns.

-   **AUTO\_INCREMENT**

    Specifies an auto-increment column.

    For details, see [AUTO\_INCREMENT](create-table.md).
    
-   **UNIQUE index\_parameters**

    **UNIQUE \( column\_name \[, ... \] \) index\_parameters**

    Specifies that a group of one or more columns of a table can contain only unique values.

    For the purpose of a unique constraint, null is not considered equal.

-   **PRIMARY KEY index\_parameters**

    **PRIMARY KEY \( column\_name \[, ... \] \) index\_parameters**

    Specifies that a column or columns of a table can contain only unique \(non-duplicate\) and non-null values.

    Only one primary key can be specified for a table.

-   **DEFERRABLE | NOT DEFERRABLE**

    Controls whether the constraint can be deferred. A constraint that is not deferrable will be checked immediately after every command. Checking of constraints that are deferrable can be postponed until the end of the transaction using the  **SET CONSTRAINTS**  command.  **NOT DEFERRABLE**  is the default value. Currently, only UNIQUE constraints, primary key constraints, and foreign key constraints accept this clause. All the other constraints are not deferrable.

-   **INITIALLY IMMEDIATE | INITIALLY DEFERRED**

    If a constraint is deferrable, this clause specifies the default time to check the constraint.

    -   If the constraint is  **INITIALLY IMMEDIATE**  \(default value\), it is checked after each statement.
    -   If the constraint is  **INITIALLY DEFERRED**, it is checked only at the end of the transaction.

    The constraint check time can be altered using the  **SET CONSTRAINTS**  statement.

-   **USING INDEX TABLESPACE tablespace\_name**

    Allows selection of the tablespace in which the index associated with a  **UNIQUE**  or  **PRIMARY KEY**  constraint will be created. If not specified,  **default\_tablespace**  is consulted, or the default tablespace in the database if  **default\_tablespace**  is empty.


## Examples<a name="en-us_topic_0283136653_en-us_topic_0237122119_en-us_topic_0059777586_s43dd49de892344bf89e6f56f17404842"></a>

-   Example 1: Create a range-partitioned table  **tpcds.web\_returns\_p1**. The table has eight partitions and their partition keys are of the integer type. The ranges of the partitions are: wr\_returned\_date\_sk < 2450815, 2450815 ≤ wr\_returned\_date\_sk < 2451179, 2451179 ≤ wr\_returned\_date\_sk < 2451544, 2451544 ≤ wr\_returned\_date\_sk < 2451910, 2451910 ≤ wr\_returned\_date\_sk < 2452275, 2452275 ≤ wr\_returned\_date\_sk < 2452640, 2452640 ≤ wr\_returned\_date\_sk < 2453005, and wr\_returned\_date\_sk ≥ 2453005.

    ```
    -- Create the tpcds.web_returns table.
    openGauss=# CREATE TABLE tpcds.web_returns
    (
        W_WAREHOUSE_SK            INTEGER               NOT NULL,
        W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
        W_WAREHOUSE_NAME          VARCHAR(20)                   ,
        W_WAREHOUSE_SQ_FT         INTEGER                       ,
        W_STREET_NUMBER           CHAR(10)                      ,
        W_STREET_NAME             VARCHAR(60)                   ,
        W_STREET_TYPE             CHAR(15)                      ,
        W_SUITE_NUMBER            CHAR(10)                      ,
        W_CITY                    VARCHAR(60)                   ,
        W_COUNTY                  VARCHAR(30)                   ,
        W_STATE                   CHAR(2)                       ,
        W_ZIP                     CHAR(10)                      ,
        W_COUNTRY                 VARCHAR(20)                   ,
        W_GMT_OFFSET              DECIMAL(5,2)
    );
    -- Create a range-partitioned table tpcds.web_returns_p1.
    openGauss=# CREATE TABLE tpcds.web_returns_p1
    (
        WR_RETURNED_DATE_SK       INTEGER                       ,
        WR_RETURNED_TIME_SK       INTEGER                       ,
        WR_ITEM_SK                INTEGER               NOT NULL,
        WR_REFUNDED_CUSTOMER_SK   INTEGER                       ,
        WR_REFUNDED_CDEMO_SK      INTEGER                       ,
        WR_REFUNDED_HDEMO_SK      INTEGER                       ,
        WR_REFUNDED_ADDR_SK       INTEGER                       ,
        WR_RETURNING_CUSTOMER_SK  INTEGER                       ,
        WR_RETURNING_CDEMO_SK     INTEGER                       ,
        WR_RETURNING_HDEMO_SK     INTEGER                       ,
        WR_RETURNING_ADDR_SK      INTEGER                       ,
        WR_WEB_PAGE_SK            INTEGER                       ,
        WR_REASON_SK              INTEGER                       ,
        WR_ORDER_NUMBER           BIGINT                NOT NULL,
        WR_RETURN_QUANTITY        INTEGER                       ,
        WR_RETURN_AMT             DECIMAL(7,2)                  ,
        WR_RETURN_TAX             DECIMAL(7,2)                  ,
        WR_RETURN_AMT_INC_TAX     DECIMAL(7,2)                  ,
        WR_FEE                    DECIMAL(7,2)                  ,
        WR_RETURN_SHIP_COST       DECIMAL(7,2)                  ,
        WR_REFUNDED_CASH          DECIMAL(7,2)                  ,
        WR_REVERSED_CHARGE        DECIMAL(7,2)                  ,
        WR_ACCOUNT_CREDIT         DECIMAL(7,2)                  ,
        WR_NET_LOSS               DECIMAL(7,2)
    )
    WITH (ORIENTATION = COLUMN,COMPRESSION=MIDDLE)
    PARTITION BY RANGE(WR_RETURNED_DATE_SK)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(2451910),
            PARTITION P5 VALUES LESS THAN(2452275),
            PARTITION P6 VALUES LESS THAN(2452640),
            PARTITION P7 VALUES LESS THAN(2453005),
            PARTITION P8 VALUES LESS THAN(MAXVALUE)
    );
    
    -- Import data from the example data table.
    openGauss=# INSERT INTO tpcds.web_returns_p1 SELECT * FROM tpcds.web_returns;
    
    -- Delete the P8 partition.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 DROP PARTITION P8;
    
    -- Add a partition WR_RETURNED_DATE_SK with values ranging from 2453005 to 2453105.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 ADD PARTITION P8 VALUES LESS THAN (2453105);
    
    -- Add a partition WR_RETURNED_DATE_SK with values ranging from 2453105 to MAXVALUE.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 ADD PARTITION P9 VALUES LESS THAN (MAXVALUE);
    
    -- Delete the P8 partition.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 DROP PARTITION FOR (2453005);
    
    -- Rename the P7 partition to P10.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 RENAME PARTITION P7 TO P10;
    
    -- Rename the P6 partition to P11.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 RENAME PARTITION FOR (2452639) TO P11;
    
    -- Query the number of rows in the P10 partition.
    openGauss=# SELECT count(*) FROM tpcds.web_returns_p1 PARTITION (P10);
     count  
    --------
     0
    (1 row)
    
    -- Query the number of rows in the P1 partition.
    openGauss=# SELECT COUNT(*) FROM tpcds.web_returns_p1 PARTITION FOR (2450815);
     count  
    --------
     0
    (1 row)
    ```

-   Example 2: Create a range-partitioned table  **tpcds.web\_returns\_p2**. The table has eight partitions and their partition keys are of the integer type. The upper limit of the eighth partition is  *MAXVALUE*.

    The ranges of the partitions are: wr\_returned\_date\_sk < 2450815, 2450815 ≤ wr\_returned\_date\_sk < 2451179, 2451179 ≤ wr\_returned\_date\_sk < 2451544, 2451544 ≤ wr\_returned\_date\_sk < 2451910, 2451910 ≤ wr\_returned\_date\_sk < 2452275, 2452275 ≤ wr\_returned\_date\_sk < 2452640, 2452640 ≤ wr\_returned\_date\_sk < 2453005, and wr\_returned\_date\_sk ≥ 2453005.

    The tablespace of the  **tpcds.web\_returns\_p2**  partitioned table is  **example1**. Partitions  **P1**  to  **P7**  have no specified tablespaces, and use the  **example1**  tablespace of the  **tpcds.web\_returns\_p2**  partitioned table. The tablespace of the  **P8**  partitioned table is  **example2**.

    Assume that the following data directories of the database nodes are empty directories for which user  **dwsadmin**  has the read and write permissions:  **/pg\_location/mount1/path1**,  **/pg\_location/mount2/path2**,  **/pg\_location/mount3/path3**, and  **/pg\_location/mount4/path4**.

    ```
    openGauss=# CREATE TABLESPACE example1 RELATIVE LOCATION 'tablespace1/tablespace_1';
    openGauss=# CREATE TABLESPACE example2 RELATIVE LOCATION 'tablespace2/tablespace_2';
    openGauss=# CREATE TABLESPACE example3 RELATIVE LOCATION 'tablespace3/tablespace_3';
    openGauss=# CREATE TABLESPACE example4 RELATIVE LOCATION 'tablespace4/tablespace_4';
    
    openGauss=# CREATE TABLE tpcds.web_returns_p2
    (
        WR_RETURNED_DATE_SK       INTEGER                       ,
        WR_RETURNED_TIME_SK       INTEGER                       ,
        WR_ITEM_SK                INTEGER               NOT NULL,
        WR_REFUNDED_CUSTOMER_SK   INTEGER                       ,
        WR_REFUNDED_CDEMO_SK      INTEGER                       ,
        WR_REFUNDED_HDEMO_SK      INTEGER                       ,
        WR_REFUNDED_ADDR_SK       INTEGER                       ,
        WR_RETURNING_CUSTOMER_SK  INTEGER                       ,
        WR_RETURNING_CDEMO_SK     INTEGER                       ,
        WR_RETURNING_HDEMO_SK     INTEGER                       ,
        WR_RETURNING_ADDR_SK      INTEGER                       ,
        WR_WEB_PAGE_SK            INTEGER                       ,
        WR_REASON_SK              INTEGER                       ,
        WR_ORDER_NUMBER           BIGINT                NOT NULL,
        WR_RETURN_QUANTITY        INTEGER                       ,
        WR_RETURN_AMT             DECIMAL(7,2)                  ,
        WR_RETURN_TAX             DECIMAL(7,2)                  ,
        WR_RETURN_AMT_INC_TAX     DECIMAL(7,2)                  ,
        WR_FEE                    DECIMAL(7,2)                  ,
        WR_RETURN_SHIP_COST       DECIMAL(7,2)                  ,
        WR_REFUNDED_CASH          DECIMAL(7,2)                  ,
        WR_REVERSED_CHARGE        DECIMAL(7,2)                  ,
        WR_ACCOUNT_CREDIT         DECIMAL(7,2)                  ,
        WR_NET_LOSS               DECIMAL(7,2)
    )
    TABLESPACE example1
    PARTITION BY RANGE(WR_RETURNED_DATE_SK)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(2451910),
            PARTITION P5 VALUES LESS THAN(2452275),
            PARTITION P6 VALUES LESS THAN(2452640),
            PARTITION P7 VALUES LESS THAN(2453005),
            PARTITION P8 VALUES LESS THAN(MAXVALUE) TABLESPACE example2
    )
    ENABLE ROW MOVEMENT;
    
    -- Create a partitioned table using LIKE.
    openGauss=# CREATE TABLE tpcds.web_returns_p3 (LIKE tpcds.web_returns_p2 INCLUDING PARTITION);
    
    -- Change the tablespace of the P1 partition to example2.
    openGauss=# ALTER TABLE tpcds.web_returns_p2 MOVE PARTITION P1 TABLESPACE example2;
    
    -- Change the tablespace of the P2 partition to example3.
    openGauss=# ALTER TABLE tpcds.web_returns_p2 MOVE PARTITION P2 TABLESPACE example3;
    
    -- Split the P8 partition at 2453010.
    openGauss=# ALTER TABLE tpcds.web_returns_p2 SPLIT PARTITION P8 AT (2453010) INTO
    (
            PARTITION P9,
            PARTITION P10
    ); 
    
    -- Merge the P6 and P7 partitions into one.
    openGauss=# ALTER TABLE tpcds.web_returns_p2 MERGE PARTITIONS P6, P7 INTO PARTITION P8;
    
    -- Modify the migration attribute of the partitioned table.
    openGauss=# ALTER TABLE tpcds.web_returns_p2 DISABLE ROW MOVEMENT;
    -- Delete tables and tablespaces.
    openGauss=# DROP TABLE tpcds.web_returns_p1;
    openGauss=# DROP TABLE tpcds.web_returns_p2;
    openGauss=# DROP TABLE tpcds.web_returns_p3;
    openGauss=# DROP TABLESPACE example1;
    openGauss=# DROP TABLESPACE example2;
    openGauss=# DROP TABLESPACE example3;
    openGauss=# DROP TABLESPACE example4;
    ```


-   Example 3: Use  **START END**  to create and modify a range-partitioned table.

    Assume that  **/home/omm/startend\_tbs1**,  **/home/omm/startend\_tbs2**,  **/home/omm/startend\_tbs3**, and  **/home/omm/startend\_tbs4**  are empty directories for which user omm has the read and write permissions.

    ```
    -- Create tablespaces.
    openGauss=# CREATE TABLESPACE startend_tbs1 LOCATION '/home/omm/startend_tbs1';
    openGauss=# CREATE TABLESPACE startend_tbs2 LOCATION '/home/omm/startend_tbs2';
    openGauss=# CREATE TABLESPACE startend_tbs3 LOCATION '/home/omm/startend_tbs3';
    openGauss=# CREATE TABLESPACE startend_tbs4 LOCATION '/home/omm/startend_tbs4';
    
    -- Create a temporary schema.
    openGauss=# CREATE SCHEMA tpcds;
    openGauss=# SET CURRENT_SCHEMA TO tpcds;
    
    -- Create a partitioned table with the partition key of the integer type.
    openGauss=# CREATE TABLE tpcds.startend_pt (c1 INT, c2 INT) 
    TABLESPACE startend_tbs1 
    PARTITION BY RANGE (c2) (
        PARTITION p1 START(1) END(1000) EVERY(200) TABLESPACE startend_tbs2,
        PARTITION p2 END(2000),
        PARTITION p3 START(2000) END(2500) TABLESPACE startend_tbs3,
        PARTITION p4 START(2500),
        PARTITION p5 START(3000) END(5000) EVERY(1000) TABLESPACE startend_tbs4
    )
    ENABLE ROW MOVEMENT;
    
    -- View the information of the partitioned table.
    openGauss=# SELECT relname, boundaries, spcname FROM pg_partition p JOIN pg_tablespace t ON p.reltablespace=t.oid and p.parentid='tpcds.startend_pt'::regclass ORDER BY 1;
       relname   | boundaries |    spcname
    -------------+------------+---------------
     p1_0        | {1}        | startend_tbs2
     p1_1        | {201}      | startend_tbs2
     p1_2        | {401}      | startend_tbs2
     p1_3        | {601}      | startend_tbs2
     p1_4        | {801}      | startend_tbs2
     p1_5        | {1000}     | startend_tbs2
     p2          | {2000}     | startend_tbs1
     p3          | {2500}     | startend_tbs3
     p4          | {3000}     | startend_tbs1
     p5_1        | {4000}     | startend_tbs4
     p5_2        | {5000}     | startend_tbs4
     startend_pt |            | startend_tbs1
    (12 rows)
    
    -- Import data and check the data volume in a partition.
    openGauss=# INSERT INTO tpcds.startend_pt VALUES (GENERATE_SERIES(0, 4999), GENERATE_SERIES(0, 4999));
    openGauss=# SELECT COUNT(*) FROM tpcds.startend_pt PARTITION FOR (0);
     count
    -------
         1
    (1 row)
    
    openGauss=# SELECT COUNT(*) FROM tpcds.startend_pt PARTITION (p3);
     count
    -------
       500
    (1 row)
    
    -- Add partitions [5000, 5300), [5300, 5600), [5600, 5900), and [5900, 6000).
    openGauss=# ALTER TABLE tpcds.startend_pt ADD PARTITION p6 START(5000) END(6000) EVERY(300) TABLESPACE startend_tbs4;
    
    -- Add the partition p7, specified by MAXVALUE.
    openGauss=# ALTER TABLE tpcds.startend_pt ADD PARTITION p7 END(MAXVALUE);
    
    -- Rename the partition p7 to p8.
    openGauss=# ALTER TABLE tpcds.startend_pt RENAME PARTITION p7 TO p8;
    
    -- Delete the partition p8.
    openGauss=# ALTER TABLE tpcds.startend_pt DROP PARTITION p8;
    
    -- Rename the partition where 5950 is located to p71.
    openGauss=# ALTER TABLE tpcds.startend_pt RENAME PARTITION FOR(5950) TO p71;
    
    -- Split the partition [4000, 5000) where 4500 is located.
    openGauss=# ALTER TABLE tpcds.startend_pt SPLIT PARTITION FOR(4500) INTO(PARTITION q1 START(4000) END(5000) EVERY(250) TABLESPACE startend_tbs3);
    
    -- Change the tablespace of the partition p2 to startend_tbs4.
    openGauss=# ALTER TABLE tpcds.startend_pt MOVE PARTITION p2 TABLESPACE startend_tbs4;
    
    -- View the partition status.
    openGauss=# SELECT relname, boundaries, spcname FROM pg_partition p JOIN pg_tablespace t ON p.reltablespace=t.oid and p.parentid='tpcds.startend_pt'::regclass ORDER BY 1;
       relname   | boundaries |    spcname
    -------------+------------+---------------
     p1_0        | {1}        | startend_tbs2
     p1_1        | {201}      | startend_tbs2
     p1_2        | {401}      | startend_tbs2
     p1_3        | {601}      | startend_tbs2
     p1_4        | {801}      | startend_tbs2
     p1_5        | {1000}     | startend_tbs2
     p2          | {2000}     | startend_tbs4
     p3          | {2500}     | startend_tbs3
     p4          | {3000}     | startend_tbs1
     p5_1        | {4000}     | startend_tbs4
     p6_1        | {5300}     | startend_tbs4
     p6_2        | {5600}     | startend_tbs4
     p6_3        | {5900}     | startend_tbs4
     p71         | {6000}     | startend_tbs4
     q1_1        | {4250}     | startend_tbs3
     q1_2        | {4500}     | startend_tbs3
     q1_3        | {4750}     | startend_tbs3
     q1_4        | {5000}     | startend_tbs3
     startend_pt |            | startend_tbs1
    (19 rows)
    
    -- Delete tables and tablespaces.
    openGauss=# DROP SCHEMA tpcds CASCADE;
    openGauss=# DROP TABLESPACE startend_tbs1;
    openGauss=# DROP TABLESPACE startend_tbs2;
    openGauss=# DROP TABLESPACE startend_tbs3;
    openGauss=# DROP TABLESPACE startend_tbs4;
    ```


-   Example 4: Create interval partitioned table  **sales**. The table initially contains two partitions and the partition key is of the DATE type.

    Ranges of the two partitions are as follows:  **time\_id**  < '2019-02-01 00:00:00' and '2019-02-01 00:00:00' ≤  **time\_id**  < '2019-02-02 00:00:00', respectively.

    ```
    -- Create table sales.
    openGauss=# CREATE TABLE sales
    (prod_id NUMBER(6),
     cust_id NUMBER,
     time_id DATE,
     channel_id CHAR(1),
     promo_id NUMBER(6),
     quantity_sold NUMBER(3),
     amount_sold NUMBER(10,2)
    )
    PARTITION BY RANGE (time_id)
    INTERVAL('1 day')
    ( PARTITION p1 VALUES LESS THAN ('2019-02-01 00:00:00'),
      PARTITION p2 VALUES LESS THAN ('2019-02-02 00:00:00')
    );
    
    -- Insert data into partition p1.
    openGauss=# INSERT INTO sales VALUES(1, 12, '2019-01-10 00:00:00', 'a', 1, 1, 1);
    
    -- Insert data into partition p2.
    openGauss=# INSERT INTO sales VALUES(1, 12, '2019-02-01 00:00:00', 'a', 1, 1, 1);
    
    -- View the partition information.
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'sales' AND t1.parttype = 'p';
     relname | partstrategy |       boundaries
    ---------+--------------+-------------------------
     p1      | r            | {"2019-02-01 00:00:00"}
     p2      | r            | {"2019-02-02 00:00:00"}
    (2 rows)
    
    -- If the data to be inserted does not match any partition, create a partition and insert the data into the new partition.
    -- The range of the new partition is '2019-02-05 00:00:00' ≤ time_id < '2019-02-06 00:00:00'.
    openGauss=# INSERT INTO sales VALUES(1, 12, '2019-02-05 00:00:00', 'a', 1, 1, 1);
    
    -- If the data to be inserted does not match any partition, create a partition and insert the data into the new partition.
    -- The range of the new partition is '2019-02-03 00:00:00' ≤ time_id < '2019-02-04 00:00:00'.
    openGauss=# INSERT INTO sales VALUES(1, 12, '2019-02-03 00:00:00', 'a', 1, 1, 1);
    
    -- View the partition information.
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'sales' AND t1.parttype = 'p';
     relname | partstrategy |       boundaries
    ---------+--------------+-------------------------
     sys_p1  | i            | {"2019-02-06 00:00:00"}
     sys_p2  | i            | {"2019-02-04 00:00:00"}
     p1      | r            | {"2019-02-01 00:00:00"}
     p2      | r            | {"2019-02-02 00:00:00"}
    (4 rows)
    
    ```


-   Example 5: Create list partitioned table  **test\_list**. The table initially contains four partitions and the partition key is of the INT type. The ranges of the four partitions are 2000, 3000, 4000, and 5000 respectively.

    ```
    -- Create the test_list table.
    openGauss=# create table test_list (col1 int, col2 int)
    partition by list(col1)
    (
    partition p1 values (2000),
    partition p2 values (3000),
    partition p3 values (4000),
    partition p4 values (5000)
    );
    
    -- Insert data.
    openGauss=# INSERT INTO test_list VALUES(2000, 2000);
    INSERT 0 1
    openGauss=# INSERT INTO test_list VALUES(3000, 3000);
    INSERT 0 1
    
    -- View the partition information.
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'test_list' AND t1.parttype = 'p';
     relname | partstrategy | boundaries
    ---------+--------------+------------
     p1      | l            | {2000}
     p2      | l            | {3000}
     p3      | l            | {4000}
     p4      | l            | {5000}
    (4 rows)
    
    -- The inserted data does not match the partition, and an error is reported.
    openGauss=# INSERT INTO test_list VALUES(6000, 6000);
    ERROR:  inserted partition key does not map to any table partition
    
    -- Add a partition.
    openGauss=# alter table test_list add partition p5 values (6000);
    ALTER TABLE
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'test_list' AND t1.parttype = 'p';
     relname | partstrategy | boundaries
    ---------+--------------+------------
     p5      | l            | {6000}
     p4      | l            | {5000}
     p1      | l            | {2000}
     p2      | l            | {3000}
     p3      | l            | {4000}
    (5 rows)
    openGauss=# INSERT INTO test_list VALUES(6000, 6000);
    INSERT 0 1
    
    -- Exchange data between the partitioned table and ordinary table.
    openGauss=# create table t1 (col1 int, col2 int);
    CREATE TABLE
    openGauss=# select * from test_list partition (p1);
     col1 | col2
    ------+------
     2000 | 2000
    (1 row)
    openGauss=# alter table test_list exchange partition (p1) with table t1;
    ALTER TABLE
    openGauss=# select * from test_list partition (p1);
     col1 | col2
    ------+------
    (0 rows)
    openGauss=# select * from t1;
     col1 | col2
    ------+------
     2000 | 2000
    (1 row)
    
    -- Truncate the partition.
    openGauss=# select * from test_list partition (p2);
     col1 | col2
    ------+------
     3000 | 3000
    (1 row)
    openGauss=# alter table test_list truncate partition p2;
    ALTER TABLE
    openGauss=# select * from test_list partition (p2);
     col1 | col2
    ------+------
    (0 rows)
    
    -- Delete the partition.
    openGauss=# alter table test_list drop partition p5;
    ALTER TABLE
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'test_list' AND t1.parttype = 'p';
     relname | partstrategy | boundaries
    ---------+--------------+------------
     p4      | l            | {5000}
     p1      | l            | {2000}
     p2      | l            | {3000}
     p3      | l            | {4000}
    (4 rows)
    
    openGauss=# INSERT INTO test_list VALUES(6000, 6000);
    ERROR:  inserted partition key does not map to any table partition
    
    -- Delete the partitioned table.
    openGauss=# drop table test_list;
    ```


-   Example 6: Create a hash partitioned table  **test\_hash**. The table initially contains two partitions and the partition key is of the INT type.

    ```
    -- Create the test_hash table.
    openGauss=# create table test_hash (col1 int, col2 int)
    partition by hash(col1)
    (
    partition p1,
    partition p2
    );
    
    -- Insert data.
    openGauss=# INSERT INTO test_hash VALUES(1, 1);
    INSERT 0 1
    openGauss=# INSERT INTO test_hash VALUES(2, 2);
    INSERT 0 1
    openGauss=# INSERT INTO test_hash VALUES(3, 3);
    INSERT 0 1
    openGauss=# INSERT INTO test_hash VALUES(4, 4);
    INSERT 0 1
    
    -- View the partition information.
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'test_hash' AND t1.parttype = 'p';
     relname | partstrategy | boundaries
    ---------+--------------+------------
     p1      | h            | {0}
     p2      | h            | {1}
    (2 rows)
    
    -- View the data.
    openGauss=# select * from test_hash partition (p1);
     col1 | col2
    ------+------
        3 |    3
        4 |    4
    (2 rows)
    
    openGauss=# select * from test_hash partition (p2);
     col1 | col2
    ------+------
        1 |    1
        2 |    2
    (2 rows)
    
    -- Exchange data between the partitioned table and ordinary table.
    openGauss=# create table t1 (col1 int, col2 int);
    CREATE TABLE
    openGauss=# alter table test_hash exchange partition (p1) with table t1;
    ALTER TABLE
    openGauss=# select * from test_hash partition (p1);
     col1 | col2
    ------+------
    (0 rows)
    openGauss=# select * from t1;
     col1 | col2
    ------+------
        3 |    3
        4 |    4
    (2 rows)
    
    -- Truncate the partition.
    openGauss=# alter table test_hash truncate partition p2;
    ALTER TABLE
    openGauss=#  select * from test_hash partition (p2);
     col1 | col2
    ------+------
    (0 rows)
    
    -- Delete the partitioned table.
    openGauss=# drop table test_hash;
    ```


## Helpful Links<a name="en-us_topic_0283136653_en-us_topic_0237122119_en-us_topic_0059777586_s4e5ff679edd643b5a6cd6679fd1055a1"></a>

[ALTER TABLE PARTITION](alter-table-partition.md)  and  [DROP TABLE](drop-table.md)
