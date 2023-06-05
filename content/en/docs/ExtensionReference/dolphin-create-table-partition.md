# CREATE TABLE PARTITION<a name="ZH-CN_TOPIC_0289900346"></a>

## Function<a name="en-us_topic_0283136653_en-us_topic_0237122119_section1163224811518"></a>

Creates a partitioned table. Partitioning refers to splitting what is logically one large table into smaller physical pieces based on specific schemes. The table based on the logic is called a partitioned table, and each physical piece is called a partition. Data is stored on these physical partitions, instead of the logical partitioned table.

The common forms of partitioning include range partitioning, interval partitioning, hash partitioning, list partitioning, and value partitioning. Currently, row-store tables support range partitioning, interval partitioning, hash partitioning, and list partitioning. Column-store tables support only range partitioning.

In range partitioning, the table is partitioned into ranges defined by a key column or set of columns, with no overlap between the ranges of values assigned to different partitions. Each range has a dedicated partition for data storage.

The partitioning policy for Range Partitioning refers to how data is inserted into partitions. Currently, range partitioning only allows the use of the range partitioning policy.

In range partitioning, a table is partitioned based on partition key values. If a record can be mapped to a partition, it is inserted into the partition; if it cannot, an error message is returned. Range partitioning is the most commonly used partitioning policy.

Interval partitioning is a special type of range partitioning. Compared with range partitioning, interval value definition is added. When no matching partition can be found for an inserted record, a partition can be automatically created based on the interval value.

Interval partitioning supports only table-based partitioning of a list where the data type can be TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\], and DATE.

Interval partitioning policy: A record is mapped to a created partition based on the partition key value. If the record can be mapped to a created partition, the record is inserted into the corresponding partition. Otherwise, a partition is automatically created based on the partition key value and table definition information, and then the record is inserted into the new partition. The data range of the new partition is equal to the interval value.

In hash partitioning, a modulus and a remainder are specified for each partition based on a column in the table, and records to be inserted into the table are allocated to the corresponding partition, the rows in each partition must meet the following condition: The value of the partition key divided by the specified modulus generates the remainder specified for the partition key.

In hash partitioning, table is partitioned based on partition key values. If a record can be mapped to a partition, it is inserted into the partition; if it cannot, an error message is returned.

List partitioning is to allocate the records to be inserted into a table to the corresponding partition based on the key values in each partition. The key values do not overlap in different partitions. Create a partition for each group of key values to store corresponding data.

In list partitioning, table is partitioned based on partition key values. If a record can be mapped to a partition, it is inserted into the partition; if it cannot, an error message is returned.

Partitioning can provide several benefits:

-   Query performance can be improved drastically in certain situations, particularly when most of the heavily accessed rows of the table are in a single partition or a small number of partitions. Partitioning narrows the range of data search and improves data access efficiency.
-   When queries or updates access a large percentage of a single partition, performance can be dramatically improved by taking advantage of sequential scan of that partition instead of reads scattered across the whole table.
-   Frequent loading or deletion operations on records in a separate partition can be accomplished by reading or removing that partition. It also entirely avoids the **VACUUM** overload caused by bulk **DELETE** operations (only for range partitioning).

Compared with the kernel syntax, the rebuild, remove, check, repair, optimize, truncate, analyze, exchange of Dolphin is modified in B compatibility mode.

## Precautions<a name="en-us_topic_0283136653_en-us_topic_0237122119_en-us_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

-   If the constraint key of the unique constraint and primary key constraint contains all partition keys, a local index is created for the constraints. Otherwise, a global index is created.
-   Currently, hash partitioning and list partitioning support only single-column partitioning, and do not support multi-column partitioning.
-   When you have the **INSERT** permission for an interval partitioned table, partitions can be automatically created when you run **INSERT** to write data to the table.
-   In the **PARTITION FOR \(values\)** syntax for partitioned tables, values can only be constants.
-   In the **PARTITION FOR \(values\)** syntax for partitioned tables, if data type conversion is required for values, you are advised to use forcible type conversion to prevent the implicit type conversion result from being inconsistent with the expected result.
-   The maximum number of partitions is 1048575. Generally, it is impossible to create so many partitions, because too many partitions may cause insufficient memory. Create partitions based on the value of **local\_syscache\_threshold**. The memory used by the partitioned tables is about (number of partitions x 3/1024) MB. Theoretically, the memory occupied by the partitions cannot be greater than the value of **local\_syscache\_threshold**. In addition, some space must be reserved for other functions.
-   table\_indexclause is used to create a partitioned table index. The index is a local index and cannot be a global index.


## Syntax<a name="en-us_topic_0283136653_en-us_topic_0237122119_en-us_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE TABLE [ IF NOT EXISTS ] partition_table_name
( [ 
    { column_name data_type [ COLLATE collation ] [ column_constraint [ ... ] ]
    | table_constraint
    | table_indexclause
    | LIKE source_table [ like_option [...] ] }[, ... ]
] )
    [create_option]

     PARTITION BY { 
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_less_than_item [, ... ] )} |
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_start_end_item [, ... ] )} |
        {LIST | HASH (partition_key) (PARTITION partition_name [VALUES [IN] (list_values_clause)] opt_table_space )}
    } [ { ENABLE | DISABLE } ROW MOVEMENT ]; 
    [create_option]

Where create\_option is:
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    [ COMPRESSION [=] compression_arg ]
    [ ENGINE [=] engine_name ]
	In addition to the WITH option, you can enter the same create\_option for multiple times. The latest input prevails.
```

-   column\_constraint:

    ```
    [ CONSTRAINT constraint_name ]
    { NOT NULL |
      NULL | 
      CHECK ( expression ) | 
      DEFAULT default_e xpr | 
      GENERATED ALWAYS AS ( generation_expr ) STORED |
      UNIQUE index_parameters | 
      PRIMARY KEY index_parameters |
      REFERENCES reftable [ ( refcolumn ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
            [ ON DELETE action ] [ ON UPDATE action ] }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    ```

-   table\_constraint:

    ```
    [ CONSTRAINT constraint_name ]
    { CHECK ( expression ) | 
      UNIQUE ( column_name [, ... ] ) index_parameters | 
      PRIMARY KEY ( column_name [, ... ] ) index_parameters |
      FOREIGN KEY ( column_name [, ... ] ) REFERENCES reftable [ ( refcolumn [, ... ] ) ]
          [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    ```

- table_indexclause:

  ```
  {INDEX | KEY} [index_name] [index_type] (key_part,...)[index_option]...
  ```

- Values of index\_type are as follows:

  ```
  USING {BTREE | HASH | GIN | GIST | PSORT | UBTREE}
  ```

- Values of key\_part are as follows:

  ```
  {col_name [ ( length ) ] | (expr)} [ASC | DESC]
  ```
- `col_name ( length )` is the prefix key, `column\_name` is the column name of the prefix key, and `length` is the prefix length. The prefix key uses the prefix of the specified column data as the index key value, which reduces the storage space occupied by the index. Indexes can be used for filter and join conditions that contain prefix key columns.
  
    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >-  The prefix key supports the following index methods: btree and ubtree.
    >-  The data type of the prefix key column must be binary or character (excluding special characters).
    >-  The prefix length must be a positive integer that does not exceed 2676 and cannot exceed the maximum length of the column. For the binary type, the prefix length is measured in bytes. For non-binary character types, the prefix length is measured in characters. The actual length of the key value is restricted by the internal page. If a column contains multi-byte characters or an index has multiple keys, the length of the index line may exceed the upper limit. As a result, an error is reported. Consider this situation when setting a long prefix length.

- The index\_option parameter is as follows:

  ```
  index_option:{
  	  COMMENT 'string'
  	| index_type
  }
  ```
  
  The sequence and quantity of COMMENT and index\_type can be random, but only the last value of the same column takes effect.
  
- like\_option:

  ```
  { INCLUDING | EXCLUDING } { DEFAULTS | GENERATED | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | RELOPTIONS| ALL }
  ```


-   index\_parameters:

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


## Parameter Description<a name="en-us_topic_0283136653_en-us_topic_0237122119_en-us_topic_0059777586_sd2701df1d7364084a7791592def4e9eb"></a>

-   **IF NOT EXISTS**

    Does not throw an error if a relationship with the same name existed. A notice is issued in this case.

-   **partition\_table\_name**

    Specifies the name of the partitioned table.

    Value range: String, which must comply with the naming convention.

-   **column\_name**

    Specifies the name of a column to be created in the new table.

    Value range: String, which must comply with the naming convention.

-   **data\_type**

    Specifies the data type of the column.

-   **COLLATE  collation**

    Assigns a collation to the column (which must be of a collatable data type). If no collation is specified, the default collation is used. You can run the **select \* from pg\_collation** command to query collation rules from the **pg\_collation** system catalog. The default collation rule is the row starting with **default** in the query result.

-   **CONSTRAINT constraint\_name**

    Specifies the name of a column or table constraint. The optional constraint clauses specify constraints that new or updated rows must satisfy for an INSERT or UPDATE operation to succeed.

    There are two ways to define constraints:

    -   A column constraint is defined as part of a column definition, and it is bound to a particular column.
    -   A table constraint is not bound to a particular column and can apply to more than one column.

-   **LIKE source\_table \[ like\_option ... \]**

    The LIKE clause specifies a table from which the new table automatically copies all column names, their data types, and their non-null constraints.

    Unlike INHERITS, the new table and original table are decoupled after creation is complete. Changes to the source table will not be applied to the new table, and it is not possible to include data of the new table in scans of the source table.

    -   Default expressions for the copied column definitions will only be copied if **INCLUDING DEFAULTS** is specified. The default behavior is to exclude default expressions, resulting in the copied columns in the new table having default values **NULL**.
    -   If **INCLUDING GENERATED** is specified, the generated expression of the source table column is copied to the new table. By default, the generated expression is not copied.
    -   Non-null constraints are always copied to the new table. CHECK constraints will only be copied if **INCLUDING CONSTRAINTS** is specified; other types of constraints will never be copied. These rules also apply to column constraints and table constraints.
    -   Unlike those of INHERITS, columns and constraints copied by LIKE are not merged with similarly named columns and constraints. If the same name is specified explicitly or in another LIKE clause, an error is reported.
    -   Any indexes on the original table will not be created on the new table, unless the **INCLUDING INDEXES** clause is specified.
    -   **STORAGE** settings for the copied column definitions are copied only if **INCLUDING STORAGE** is specified. The default behavior is to exclude **STORAGE** settings.
    -   Comments for the copied columns, constraints, and indexes will be copied only if **INCLUDING COMMENTS** is specified. The default behavior is to exclude comments.
    -   If **INCLUDING RELOPTIONS** is specified, the new table will copy the storage parameter (WITH clause of the source table) of the source table. The default behavior is to exclude partition definition of the storage parameter of the original table.
    -   **INCLUDING ALL** contains the meaning of **INCLUDING DEFAULTS**, **INCLUDING CONSTRAINTS**, **INCLUDING INDEXES**, **INCLUDING STORAGE**, **INCLUDING COMMENTS**, **INCLUDING PARTITION**, and **INCLUDING RELOPTIONS**.

-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    Specifies an optional storage parameter for a table or an index. Optional parameters are as follows:

    -   FILLFACTOR

        The fill factor of a table is a percentage from 10 to 100. **100** (complete filling) is the default value. When a smaller fill factor is specified, INSERT operations fill table pages only to the indicated percentage. The remaining space on each page is reserved for updating rows on that page. This gives UPDATE a chance to place the updated copy of a row on the same page, which is more efficient than placing it on a different page. For a table whose entries are never updated, setting the fill factor to **100** (complete filling) is the best choice, but in heavily updated tables a smaller fill factor would be appropriate. The parameter has no meaning for column-store tables.

        Value range: 10 to 100

    -   ORIENTATION

        Determines the data storage mode of the table.

        Value range:

        -   **COLUMN**: The data will be stored in columns.
        -   **ROW** (default value): The data will be stored in rows.

            >![](public_sys-resources/icon-notice.gif) **NOTICE:**
            >**ORIENTATION** cannot be modified.
        
    -    STORAGE\_TYPE
    
         Specifies the storage engine type. This parameter cannot be modified once it is set.
    
        Value range:
        - **USTORE** indicates that tables support the inplace-update storage engine. Note that the **track\_counts** and **track\_activities** parameters must be enabled when the Ustore table is used. Otherwise, space expansion may occur.
        - **ASTORE** indicates that tables support the append-only storage engine.
        - Default value. If no table is specified, data is stored in append-only mode by default.
    
    - COMPRESSION
      -   Value range: **LOW**, **MIDDLE**, **HIGH**, **YES**, and **NO** for column-store tables, with compression level increasing in ascending order. The default value is **LOW**.
      -   Row-store tables cannot be compressed.
    
    - MAX\_BATCHROW
    
      Specifies the maximum number of records in a storage unit during data loading. The parameter is only valid for column-store tables.
    
      Value range: 10000 to 60000. The default value is **60000**.
    
    - PARTIAL\_CLUSTER\_ROWS
    
      Specifies the number of records to be partially clustered for storage during data loading. The parameter is only valid for column-store table.
    
      Value range: greater than or equal to **MAX\_BATCHROW**. You are advised to set this parameter to an integer multiple of **MAX\_BATCHROW**.
    
    - DELTAROW\_THRESHOLD
    
      A reserved parameter. The parameter is only valid for column-store table.
    
      Value range: 0 to 9999
    
    - segment
    
      The data is stored in segment-page mode. This parameter supports only row-store tables. Column-store tables, temporary tables, and unlogged tables are not supported. The Ustore storage engine is not supported.
    
      Value range: **on** and **off**
    
      Default value: **off**
    
- **COMPRESS / NOCOMPRESS**

  Specifies keyword COMPRESS during the creation of a table, so that the compression feature is triggered in case of BULK INSERT operations. If this feature is enabled, a scan is performed for all tuple data within the page to generate a dictionary and then the tuple data is compressed and stored. If **NOCOMPRESS** is specified, the table is not compressed. Row-store tables cannot be compressed.

  Default value: **NOCOMPRESS**, tuple data is not compressed before storage.

- **TABLESPACE tablespace\_name**

  Specifies that the new table will be created in the **tablespace\_name** tablespace. If the tablespace is not specified, the default tablespace is used.

- **PARTITION BY RANGE\(partition\_key\)**

  Creates a range partition. **partition\_key** is the name of the partition key.

  (1) Assume that the **VALUES LESS THAN** syntax is used.

  >![](public_sys-resources/icon-notice.gif) **NOTICE:**
  >In this case, a maximum of four partition keys are supported.

  Data types supported by the partition keys are as follows: TINYINT[UNSIGNED], SMALLINT[UNSIGNED], INTEGER[UNSIGNED], BIGINT[UNSIGNED], DECIMAL, NUMERIC, REAL, DOUBLE PRECISION, CHARACTER VARYING\(n\), VARCHAR\(n\), CHARACTER\(n\), CHAR\(n\), CHARACTER, CHAR, TEXT, NVARCHAR, NVARCHAR2, NAME, TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\], and DATE.

  (2) Assume that the **START END** syntax is used.

  >![](public_sys-resources/icon-notice.gif) **NOTICE:**
  >In this case, only one partition key is supported.

  Data types supported by the partition keys are as follows: TINYINT[UNSIGNED], SMALLINT[UNSIGNED], INTEGER[UNSIGNED], BIGINT[UNSIGNED], DECIMAL, NUMERIC, REAL, DOUBLE PRECISION, TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\], and DATE.

  (3) Assume that the **INTERVAL** syntax is used.

  >![](public_sys-resources/icon-notice.gif) **NOTICE:**
  >In this case, only one partition key is supported.

  In this case, the data types supported by the partition key are TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\], and DATE.

- **PARTITION partition\_name VALUES LESS THAN \( \{ partition\_value | MAXVALUE \} \)**

  Indicates specifying the partition information, where **partition\_name** indicates the name of a range partition, **partition\_value** indicates the upper boundary of a range partition and its value is determined by the type of **partition\_key**. **MAXVALUE** specifies the upper boundary of the last range partition.

  >![](public_sys-resources/icon-notice.gif) **NOTICE:**
  >
  >-   Upper boundaries must be specified for each partition.
  >-   The data type of an upper boundary must be the same as that of the partition key.
  >-   In a partition list, partitions are arranged in ascending order of upper boundary values. Therefore, a partition with a certain upper boundary value is placed before another partition with a larger upper boundary value.

- **PARTITION partition\_name \{START \(partition\_value\) END \(partition\_value\) EVERY \(interval\_value\)\}** |  **\{START \(partition\_value\) END \(partition\_value|MAXVALUE\)**\} | \{START\(partition\_value\)**\} | **\{END \(partition\_value | MAXVALUE\)**\}

  Specifies the information of partitions.

  -   **partition\_name**: name or name prefix of a range partition. It is the name prefix only in the following cases (assuming that **partition\_name** is **p1**):
      -   If START+END+EVERY is used, the names of partitions will be defined as **p1\_1**, **p1\_2**, and the like. For example, if "PARTITION p1 START\(1\) END\(4\) EVERY\(1\)" is defined, the generated partitions are \[1, 2\), \[2, 3\), and \[3, 4\), and their names are p1\_1, p1\_2, and p1\_3 respectively. That is, p1 is the name prefix.
      -   If the defined statement is in the first place and has **START** specified, the range (*MINVALUE*, **START**) will be automatically used as the first actual partition, and its name will be **p1\_0**. The other partitions are then named **p1\_1**, **p1\_2**, and so on. For example, if the complete definition is "PARTITION p1 START\(1\), PARTITION p2 START\(2\)", the generated partitions are \(MINVALUE, 1\), \[1, 2\) and \[2, MAXVALUE\), and their names are p1\_0, p1\_1, and p2. That is, p1 is the name prefix and p2 is the partition name. **MINVALUE** indicates the minimum value.

  -   partition\_value: start point value or end point value of a range partition. The value depends on partition\_key and cannot be MAXVALUE.
  -   **interval\_value**: width of each partition for dividing the [**START**, **END**) range. It cannot be **MAXVALUE**. If the value of (**END** – **START**) divided by **EVERY** has a remainder, the width of only the last partition is less than the value of **EVERY**.
  -   **MAXVALUE**: maximum value. It is usually used to set the upper boundary for the last range partition.

  >![](public_sys-resources/icon-notice.gif) **NOTICE:**
  >1.  If the defined statement is in the first place and has **START** specified, the range (**MINVALUE**, **START**) will be automatically used as the first actual partition.
  >2.  The **START END** syntax must comply with the following rules:
  >    -   The value of START (if any, same for the following situations) in each partition\_start\_end\_item must be smaller than that of END.
  >    -   For two adjacent partition\_start\_end\_item, the END value of the first partition\_start\_end\_item must be equal to the START value of the second partition\_start\_end\_item.
  >    -   The value of EVERY in each partition\_start\_end\_item must be in ascending order and must be smaller than the value of END – START.
  >    -   Each partition includes the start value (unless it is **MINVALUE**) and excludes the end value. The format is as follows: \[Start value, end value\).
  >    -   Partitions created by a partition\_start\_end\_item belong to the same tablespace.
  >    -   If **partition\_name** is a name prefix of a partition, the length must not exceed 57 bytes. If there are more than 57 bytes, the prefix will be automatically truncated.
  >    -   When creating or modifying a partitioned table, ensure that the total number of partitions in the table does not exceed the maximum value **1048575**.
  >3.  In statements for creating partitioned tables, **START END** and **LESS THAN** cannot be used together.
  >4.  The **START END** syntax in a partitioned table creation SQL statement will be replaced with the **VALUES LESS THAN** syntax when **gs\_dump** is executed.

- **INTERVAL \('interval\_expr'\) \[ STORE IN \(tablespace\_name \[, ... \] \) \]**

  Defines interval partitioning.

  -   **interval\_expr**: interval for automatically creating partitions, for example, 1 day or 1 month.

  -   STORE IN \(tablespace\_name \[, ... \] \): Specifies the list of tablespaces for storing automatically created partitions. If this parameter is specified, the automatically created partitions are cyclically selected from the tablespace list. Otherwise, the default tablespace of the partitioned table is used.

  >![](public_sys-resources/icon-notice.gif) **NOTICE:**
  >Column-store tables do not support interval partitioning.

- **PARTITION BY LIST\(partition\_key\)**

  Create a list partition. partition\_key indicates the name of the partition key.

  -   For **partition\_key**, the list partitioning policy supports only one column of partition keys.
  -   If the clause is VALUES \(list\_values\_clause\), list\_values\_clause contains the key values of the corresponding partition. It is recommended that the number of key values of each partition be less than or equal to 64.

  Data types supported by the partition keys are as follows: INT1[UNSIGNED], INT2[UNSIGNED], INT4[UNSIGNED], INT8[UNSIGNED], NUMERIC, VARCHAR\(n\), CHAR, BPCHAR, NVARCHAR, NVARCHAR2, TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\], and DATE. The number of partitions cannot exceed 1048575.

- **PARTITION BY HASH\(partition\_key\)**

  Create a hash partition. partition\_key indicates the name of the partition key.

  For **partition\_key**, the hash partitioning policy supports only one column of partition keys.

  Data types supported by the partition keys are as follows: INT1[UNSIGNED], INT2[UNSIGNED], INT4[UNSIGNED], INT8[UNSIGNED], NUMERIC, VARCHAR\(n\), CHAR, BPCHAR, TEXT, NVARCHAR, NVARCHAR2, TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\], and DATE. The number of partitions cannot exceed 1048575.

- **\{ ENABLE | DISABLE \} ROW MOVEMENT**

  Specifies whether to enable row movement.

  If the tuple value is updated on the partition key during the **UPDATE** operation, the partition where the tuple is located is altered. Setting of this parameter enables error messages to be reported or movement of the tuple between partitions.

  Value range:

  -   **ENABLE** (default value): Row movement is enabled.
  -   **DISABLE**: Row movement is disabled.

  >![](public_sys-resources/icon-notice.gif) **NOTICE:**
  >Currently, list and hash partitioned tables do not support **ROW MOVEMENT**.


-   **NOT NULL**

    The column is not allowed to contain null values. **ENABLE** can be omitted.

-   **NULL**

    Indicates that the column is allowed to contain **NULL** values. This is the default setting.

    This clause is only provided for compatibility with non-standard SQL databases. It is not recommended.

-   **CHECK \(condition\) \[ NO INHERIT \]**

    The CHECK constraint specifies an expression producing a Boolean result where the INSERT or UPDATE operation of new or updated rows can succeed only when the expression result is **TRUE** or **UNKNOWN**; otherwise, an error is thrown and the database is not altered.

    A check constraint specified as a column constraint should reference only the column's values, while an expression in a table constraint can reference multiple columns.

    A constraint marked with **NO INHERIT** will not propagate to child tables.

    **ENABLE** can be omitted.

-   **DEFAULT default\_expr**

    Assigns a default data value to a column. The value can be any variable-free expressions \(Subqueries and cross-references to other columns in the current table are not allowed\). The data type of the default expression must match that of the column.

    The default expression will be used in any INSERT operation that does not specify a value for the column. If there is no default value for a column, then the default value is **NULL**.

-   GENERATED ALWAYS AS \( generation\_expr \) STORED

    This clause creates a column as a generated column. The value of the generated column is calculated by **generation\_expr** when data is written (inserted or updated). **STORED** indicates that the value of the generated column is stored as a common column.

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >-   The generation expression cannot refer to data other than the current row in any way. The generation expression cannot reference other generation columns or system columns. The generation expression cannot return a result set. No subquery, aggregate function, or window function can be used. The function called by the generation expression can only be an immutable function.
    >
    >-   Default values cannot be specified for generated columns.
    >
    >-   The generated column cannot be used as a part of the partition key.
    >
    >-   Do not specify the generated column and the CASCADE, SET NULL, and SET DEFAULT actions of the ON UPDATE constraint at the same time. Do not specify the generated column and the SET NULL, and SET DEFAULT actions of the ON DELETE constraint at the same time.
    >
    >-   The method of modifying and deleting generated columns is the same as that of common columns. Delete the common column that the generated column depends on. The generated column is automatically deleted. The type of the column on which the generated column depends cannot be changed.
    >
    >-   The generated column cannot be directly written. In the INSERT or UPDATE statement, values cannot be specified for generated columns, but the keyword DEFAULT can be specified.
    >
    >-   The permission control for generated columns is the same as that for common columns.
    >
    >-   Columns cannot be generated for column-store tables and MOTs. In foreign tables, only postgres\_fdw supports generated columns.

-   **UNIQUE index\_parameters**

    **UNIQUE \( column\_name \[, ... \] \) index\_parameters**

    The UNIQUE constraint specifies that a group of one or more columns of a table can contain only unique values.

    For the UNIQUE constraint, **NULL** is not considered equal.

-   **PRIMARY KEY index\_parameters**

    **PRIMARY KEY \( column\_name \[, ... \] \) index\_parameters**

    Specifies that a column or columns of a table can contain only unique (non-duplicate) and non-**NULL** values.

    Only one primary key can be specified for a table.

-   **DEFERRABLE | NOT DEFERRABLE**

    They determine whether the constraint is deferrable. A constraint that is not deferrable will be checked immediately after every command. Checking of constraints that are deferrable can be postponed until the end of the transaction using the **SET CONSTRAINTS** command. **NOT DEFERRABLE** is the default value. Currently, only UNIQUE constraints, primary key constraints, and foreign key constraints accept this clause. All the other constraints are not deferrable.

-   **INITIALLY IMMEDIATE | INITIALLY DEFERRED**

    If a constraint is deferrable, this clause specifies the default time to check the constraint.

    -   If the constraint is **INITIALLY IMMEDIATE** (default value), it is checked after each statement.
    -   If the constraint is **INITIALLY DEFERRED**, it is checked only at the end of the transaction.

    The constraint check time can be altered using the **SET CONSTRAINTS** statement.

-   **USING INDEX TABLESPACE tablespace\_name**

    Allows selection of the tablespace in which the index associated with a **UNIQUE** or **PRIMARY KEY** constraint will be created. If not specified, the index is created in **default\_tablespace**. If **default\_tablespace** is empty, the default tablespace of the database is used.


## Examples<a name="en-us_topic_0283136653_en-us_topic_0237122119_en-us_topic_0059777586_s43dd49de892344bf89e6f56f17404842"></a>

-   Example 1: Create a range-partitioned table **tpcds.web\_returns\_p1**. The table has eight partitions and their partition keys are of type integer.  The partition ranges are wr\_returned\_date\_sk< 2450815, 2450815<= wr\_returned\_date\_sk< 2451179, 2451179<=wr\_returned\_date\_sk< 2451544, 2451544 <= wr\_returned\_date\_sk< 2451910, 2451910 <= wr\_returned\_date\_sk< 2452275, 2452275 <= wr\_returned\_date\_sk< 2452640, 2452640 <= wr\_returned\_date\_sk< 2453005, and wr\_returned\_date\_sk\>=2453005.

    ```
    --Create a table named tpcds.web_returns.
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
    --Create a partitioned table named tpcds.web_returns_p1.
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
    
    --Import data from the example data table.
    openGauss=# INSERT INTO tpcds.web_returns_p1 SELECT * FROM tpcds.web_returns;
    
    --Delete partition **P8**.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 DROP PARTITION P8;
    
    --Add a partition **WR_RETURNED_DATE_SK** with values ranging from 2453005 to 2453105.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 ADD PARTITION P8 VALUES LESS THAN (2453105);
    
    --Add a partition **WR_RETURNED_DATE_SK** with values ranging from 2453105 to **MAXVALUE**.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 ADD PARTITION P9 VALUES LESS THAN (MAXVALUE);
    
    --Delete partition **P8**.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 DROP PARTITION FOR (2453005);
    
    --Rename the **P7** partition as **P10**.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 RENAME PARTITION P7 TO P10;
    
    --Rename the **P6** partition as **P11**.
    openGauss=# ALTER TABLE tpcds.web_returns_p1 RENAME PARTITION FOR (2452639) TO P11;
    
    --Query rows in the **P10** partition.
    openGauss=# SELECT count(*) FROM tpcds.web_returns_p1 PARTITION (P10);
     count  
    --------
     0
    (1 row)
    
    --Query the number of rows in the **P1** partition.
    openGauss=# SELECT COUNT(*) FROM tpcds.web_returns_p1 PARTITION FOR (2450815);
     count  
    --------
     0
    (1 row)
    ```

-   Example 2: Create a range partitioned table **tpcds.web\_returns\_p2**. The table has eight partitions and their partition keys are of type integer. The upper limit of the eighth partition is **MAXVALUE**.

    The ranges of the eight partitions are wr\_returned\_date\_sk< 2450815, 2450815<= wr\_returned\_date\_sk< 2451179, 2451179<=wr\_returned\_date\_sk< 2451544, 2451544 <= wr\_returned\_date\_sk< 2451910, 2451910 <= wr\_returned\_date\_sk< 2452275, 2452275 <= wr\_returned\_date\_sk< 2452640, 2452640 <= wr\_returned\_date\_sk< 2453005, and wr\_returned\_date\_sk\>=2453005.

    The tablespace of the **tpcds.web\_returns\_p2** partitioned table is **example1**. Partitions **P1** to **P7** have no specified tablespaces, and use the **example1** tablespace of the **tpcds.web\_returns\_p2** partitioned table. The tablespace of the **P8** partitioned table is **example2**.

    Assume that the following data directories of the database nodes are empty directories for which user **dwsadmin** has the read and write permissions: **/pg\_location/mount1/path1**, **/pg\_location/mount2/path2**, **/pg\_location/mount3/path3**, and **/pg\_location/mount4/path4**.

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
    
    --Create a partitioned table using **LIKE**.
    openGauss=# CREATE TABLE tpcds.web_returns_p3 (LIKE tpcds.web_returns_p2 INCLUDING PARTITION);
    
    --Change the tablespace of the **P1** partition to **example2**.
    openGauss=# ALTER TABLE tpcds.web_returns_p2 MOVE PARTITION P1 TABLESPACE example2;
    
    --Change the tablespace of the **P2** partition to **example3**.
    openGauss=# ALTER TABLE tpcds.web_returns_p2 MOVE PARTITION P2 TABLESPACE example3;
    
    --Split the **P8** partition at 2453010.
    openGauss=# ALTER TABLE tpcds.web_returns_p2 SPLIT PARTITION P8 AT (2453010) INTO
    (
            PARTITION P9,
            PARTITION P10
    ); 
    
    --Merge the **P6** and **P7** partitions into one.
    openGauss=# ALTER TABLE tpcds.web_returns_p2 MERGE PARTITIONS P6, P7 INTO PARTITION P8;
    
    --Modify the migration attribute of a partitioned table.
    openGauss=# ALTER TABLE tpcds.web_returns_p2 DISABLE ROW MOVEMENT;
    --Drop tables and tablespaces.
    openGauss=# DROP TABLE tpcds.web_returns_p1;
    openGauss=# DROP TABLE tpcds.web_returns_p2;
    openGauss=# DROP TABLE tpcds.web_returns_p3;
    openGauss=# DROP TABLESPACE example1;
    openGauss=# DROP TABLESPACE example2;
    openGauss=# DROP TABLESPACE example3;
    openGauss=# DROP TABLESPACE example4;
    ```


-   Example 3: Use **START END** to create and modify a range partitioned table.

    Assume that **/home/omm/startend\_tbs1**, **/home/omm/startend\_tbs2**, **/home/omm/startend\_tbs3**, and **/home/omm/startend\_tbs4** are empty directories on which user **omm** has the read and write permissions.

    ```
    -- Creating Tablespaces
    openGauss=# CREATE TABLESPACE startend_tbs1 LOCATION '/home/omm/startend_tbs1';
    openGauss=# CREATE TABLESPACE startend_tbs2 LOCATION '/home/omm/startend_tbs2';
    openGauss=# CREATE TABLESPACE startend_tbs3 LOCATION '/home/omm/startend_tbs3';
    openGauss=# CREATE TABLESPACE startend_tbs4 LOCATION '/home/omm/startend_tbs4';
    
    -- Create a temporary schema.
    openGauss=# CREATE SCHEMA tpcds;
    openGauss=# SET CURRENT_SCHEMA TO tpcds;
    
    -- Create a partitioned table with the partition key of type integer.
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
    
    -- Import data and check the data volume in the partition.
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
    
    -- Add the partition p7, specified by **MAXVALUE**.
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
    
    -- Delete tables and tablespaces:
    openGauss=# DROP SCHEMA tpcds CASCADE;
    openGauss=# DROP TABLESPACE startend_tbs1;
    openGauss=# DROP TABLESPACE startend_tbs2;
    openGauss=# DROP TABLESPACE startend_tbs3;
    openGauss=# DROP TABLESPACE startend_tbs4;
    ```


-   Example 4: Create interval partitioned table **sales**. The table initially contains two partitions and the partition key is of the DATE type.  Ranges of the two partitions are as follows: **time\_id** < '2019-02-01 00:00:00' and '2019-02-01 00:00:00' ≤ **time\_id** < '2019-02-02 00:00:00', respectively.

     

    ```
    --Create table sales.
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
    
    -- View partition information.
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
    
    -- View partition information.
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'sales' AND t1.parttype = 'p';
     relname | partstrategy |       boundaries
    ---------+--------------+-------------------------
     sys_p1  | i            | {"2019-02-06 00:00:00"}
     sys_p2  | i            | {"2019-02-04 00:00:00"}
     p1      | r            | {"2019-02-01 00:00:00"}
     p2      | r            | {"2019-02-02 00:00:00"}
    (4 rows)
    
    ```


-   Example 5: Create list partitioned table **test\_list**. The table initially contains four partitions and the partition key is of the INT type. The ranges of the four partitions are 2000, 3000, 4000, and 5000 respectively.

    ```
    --Create the test_list table.
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
    
    -- View partition information.
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
    
    -- Delete a partition.
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
    
    -- Delete a partitioned table.
    openGauss=# drop table test_list;
    ```


-   Example 6: Create a hash partitioned table **test\_hash**. The table initially contains two partitions and the partition key is of the INT type.

    ```
    --Create the test_hash table.
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
    
    -- View partition information.
    openGauss=# SELECT t1.relname, partstrategy, boundaries FROM pg_partition t1, pg_class t2 WHERE t1.parentid = t2.oid AND t2.relname = 'test_hash' AND t1.parttype = 'p';
     relname | partstrategy | boundaries
    ---------+--------------+------------
     p1      | h            | {0}
     p2      | h            | {1}
    (2 rows)
    
    -- View data.
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
    
    -- Delete a partitioned table.
    openGauss=# drop table test_hash;



    --Examples of B-compatible REBUILD, REMOVE, CHECK, REPAIR, and OPTIMIZE syntax
    --Create a partitioned table test_part.
    CREATE TABLE IF NOT EXISTS test_part
    (
    a int primary key not null default 5,
    b int,
    c int,
    d int
    ) 
    PARTITION BY RANGE(a)
    (
        PARTITION p0 VALUES LESS THAN (100000),
        PARTITION p1 VALUES LESS THAN (200000),
        PARTITION p2 VALUES LESS THAN (300000)
    );
    create unique index idx_c on test_part (c);
    create index idx_b on test_part using btree(b) local;
    alter table test_part add constraint uidx_d unique(d);
    alter table test_part add constraint uidx_c unique using index idx_c;
    --Insert data to a partitioned table.
    insert into test_part (with RECURSIVE t_r(i,j,k,m) as(values(0,1,2,3) union all select i+1,j+2,k+3,m+4 from t_r where i < 250000) select * from t_r);
    --Check partitioned table system information.
    select relname from pg_partition where (parentid in (select oid from pg_class where relname = 'test_part')) and parttype = 'p' and oid != relfilenode order by relname;
    --Select data from a partitioned table by index.
    explain select * from test_part where ((99990 < c and c < 100000) or (219990 < c and c < 220000));
    select * from test_part where ((99990 < c and c < 100000) or (219990 < c and c < 220000));
    select * from test_part where ((99990 < d and d < 100000) or (219990 < d and d < 220000));
    select * from test_part where ((99990 < b and b < 100000) or (219990 < b and b < 220000));
    
    --Check the REBUILD syntax.
    ALTER TABLE test_part REBUILD PARTITION p0, p1;
    --Check the system information and actual data of the partitioned table.
    select relname from pg_partition where (parentid in (select oid from pg_class where relname = 'test_part')) and parttype = 'p' and oid != relfilenode order by relname;
    explain select * from test_part where ((99990 < c and c < 100000) or (219990 < c and c < 220000));
    select * from test_part where ((99990 < c and c < 100000) or (219990 < c and c < 220000));
    select * from test_part where ((99990 < d and d < 100000) or (219990 < d and d < 220000));
    select * from test_part where ((99990 < b and b < 100000) or (219990 < b and b < 220000));
    
    --Check the REBUILD PARTITION ALL syntax.
    ALTER TABLE test_part REBUILD PARTITION all;
    --Check the system information and actual data of the partitioned table.
    select relname from pg_partition where (parentid in (select oid from pg_class where relname = 'test_part')) and parttype = 'p' and oid != relfilenode order by relname;
    explain select * from test_part where ((99990 < c and c < 100000) or (219990 < c and c < 220000));
    select * from test_part where ((99990 < c and c < 100000) or (219990 < c and c < 220000));
    select * from test_part where ((99990 < d and d < 100000) or (219990 < d and d < 220000));
    select * from test_part where ((99990 < b and b < 100000) or (219990 < b and b < 220000));
    
    --Check the REPAIR CHECK OPTIMIZE syntax.
    ALTER TABLE test_part repair PARTITION p0,p1;
    ALTER TABLE test_part check PARTITION p0,p1;
    ALTER TABLE test_part optimize PARTITION p0,p1;
    ALTER TABLE test_part repair PARTITION all;
    ALTER TABLE test_part check PARTITION all;
    ALTER TABLE test_part optimize PARTITION all;
    
    --Check the REMOVE PARTITIONING syntax.
    select relname, boundaries from pg_partition where parentid in (select parentid from pg_partition where relname = 'test_part') order by relname;
    select parttype,relname from pg_class where relname = 'test_part' and relfilenode != oid;
    ALTER TABLE test_part remove PARTITIONING;
    --Check the system information and actual data after partition information is removed from the partitioned table.
    explain select * from test_part where ((99990 < c and c < 100000) or (219990 < c and c < 220000));
    select * from test_part where ((99990 < c and c < 100000) or (219990 < c and c < 220000));
    select relname, boundaries from pg_partition where parentid in (select parentid from pg_partition where relname = 'test_part') order by relname;
    select parttype,relname from pg_class where relname = 'test_part' and relfilenode != oid;


    --Examples of B-compatible TRUNCATE, ANALYZE, and EXCHANGE syntax
    CREATE TABLE IF NOT EXISTS test_part1
    (
    a int,
    b int
    ) 
    PARTITION BY RANGE(a)
    (
        PARTITION p0 VALUES LESS THAN (100),
        PARTITION p1 VALUES LESS THAN (200),
        PARTITION p2 VALUES LESS THAN (300)
    );
    create table test_no_part1(a int, b int);
    insert into test_part1 values(99,1),(199,1),(299,1);
    select * from test_part1;
    --Check the B-compatible TRUNCATE PARTITION syntax.
    ALTER TABLE test_part1 truncate PARTITION p0, p1;
    select * from test_part1;
    insert into test_part1 (with RECURSIVE t_r(i,j) as(values(0,1) union all select i+1,j+2 from t_r where i < 20) select * from t_r);
    select * from test_part1;
    ALTER TABLE test_part1 truncate PARTITION all;
    select * from test_part1;
    --Check the openGauss TRUNCATE PARTITION syntax.
    insert into test_part1 values(99,1),(199,1);
    select * from test_part1;
    ALTER TABLE test_part1 truncate PARTITION p0, truncate PARTITION p1;
    select * from test_part1;
    --Check the B-compatible EXCHANGE PARTITION syntax.
    insert into test_part1 values(99,1),(199,1),(299,1);
    alter table test_part1 exchange partition p2 with table test_no_part1 without validation;
    select * from test_part1;
    select * from test_no_part1;
    alter table test_part1 exchange partition p2 with table test_no_part1 without validation;
    select * from test_part1;
    select * from test_no_part1;
    --Check the openGauss EXCHANGE PARTITION syntax.
    alter table test_part1 exchange partition (p2) with table test_no_part1 without validation;
    select * from test_part1;
    select * from test_no_part1;
    alter table test_part1 exchange partition (p2) with table test_no_part1 without validation;
    select * from test_part1;
    select * from test_no_part1;
    --Check the B-compatible ANALYZE PARTITION syntax.
    alter table test_part1 analyze partition p0,p1;
    alter table test_part1 analyze partition all;
    --Check the openGauss ANALYZE PARTITION syntax.
    analyze test_part1 partition (p1);


    --Examples of B-compatible ADD and DROP syntax
    CREATE TABLE IF NOT EXISTS test_part2
    (
    a int,
    b int
    ) 
    PARTITION BY RANGE(a)
    (
        PARTITION p0 VALUES LESS THAN (100),
        PARTITION p1 VALUES LESS THAN (200),
        PARTITION p2 VALUES LESS THAN (300),
        PARTITION p3 VALUES LESS THAN (400)
    );
    
    CREATE TABLE IF NOT EXISTS test_subpart2
    (
    a int,
    b int
    ) 
    PARTITION BY RANGE(a) SUBPARTITION BY RANGE(b)
    (
        PARTITION p0 VALUES LESS THAN (100)
        (
            SUBPARTITION p0_0 VALUES LESS THAN (100),
            SUBPARTITION p0_1 VALUES LESS THAN (200),
            SUBPARTITION p0_2 VALUES LESS THAN (300)
        ),
        PARTITION p1 VALUES LESS THAN (200)
        (
            SUBPARTITION p1_0 VALUES LESS THAN (100),
            SUBPARTITION p1_1 VALUES LESS THAN (200),
            SUBPARTITION p1_2 VALUES LESS THAN (300)
        ),
        PARTITION p2 VALUES LESS THAN (300)
        (
            SUBPARTITION p2_0 VALUES LESS THAN (100),
            SUBPARTITION p2_1 VALUES LESS THAN (200),
            SUBPARTITION p2_2 VALUES LESS THAN (300)
        ),
        PARTITION p3 VALUES LESS THAN (400)
        (
            SUBPARTITION p3_0 VALUES LESS THAN (100),
            SUBPARTITION p3_1 VALUES LESS THAN (200),
            SUBPARTITION p3_2 VALUES LESS THAN (300)
        )
    );
    --test b_compatibility drop and add partition syntax
    select relname, boundaries from pg_partition where parentid in (select parentid from pg_partition where relname = 'test_part2');
    ALTER TABLE test_part2 DROP PARTITION p3;
    select relname, boundaries from pg_partition where parentid in (select parentid from pg_partition where relname = 'test_part2');
    ALTER TABLE test_part2 add PARTITION (PARTITION p3 VALUES LESS THAN (400),PARTITION p4 VALUES LESS THAN (500),PARTITION p5 VALUES LESS THAN (600));
    select relname, boundaries from pg_partition where parentid in (select parentid from pg_partition where relname = 'test_part2');
    ALTER TABLE test_part2 add PARTITION (PARTITION p6 VALUES LESS THAN (700),PARTITION p7 VALUES LESS THAN (800));
    ALTER TABLE test_part2 DROP PARTITION p4,p5,p6;
    select relname, boundaries from pg_partition where parentid in (select parentid from pg_partition where relname = 'test_part2');
    ALTER TABLE test_part2 add PARTITION (PARTITION p4 VALUES LESS THAN (500));
    select relname, boundaries from pg_partition where parentid in (select oid from pg_partition where parentid in (select parentid from pg_partition where relname = 'test_subpart2'));
    ALTER TABLE test_subpart2 DROP SUBPARTITION p0_0;
    ALTER TABLE test_subpart2 DROP SUBPARTITION p0_2, p1_0, p1_2;
    select relname, boundaries from pg_partition where parentid in (select oid from pg_partition where parentid in (select parentid from pg_partition where relname = 'test_subpart2'));

    --Examples of B-compatible REORGANIZE syntax
    CREATE TABLE test_range_subpart
    (
        a INT4 PRIMARY KEY,
        b INT4
    )
    PARTITION BY RANGE (a) SUBPARTITION BY HASH (b)
    (
        PARTITION p1 VALUES LESS THAN (200)
        (
            SUBPARTITION s11,
            SUBPARTITION s12,
            SUBPARTITION s13,
            SUBPARTITION s14
        ),
        PARTITION p2 VALUES LESS THAN (500)
        (
            SUBPARTITION s21,
            SUBPARTITION s22
        ),
        PARTITION p3 VALUES LESS THAN (800),
        PARTITION p4 VALUES LESS THAN (1200)
        (
            SUBPARTITION s41
        )
    );
    insert into test_range_subpart values(199,1),(499,1),(799,1),(1199,1);
    --test test_range_subpart
    alter table test_range_subpart reorganize partition p1,p2 into (partition m1 values less than(100),partition m2 values less than(500)(subpartition m21,subpartition m22));
    select pg_get_tabledef('test_range_subpart');
    select * from test_range_subpart subpartition(m22);
    select * from test_range_subpart subpartition(m21);
    select * from test_range_subpart partition(m1);
    explain select /*+ indexscan(test_range_subpart test_range_subpart_pkey) */ * from test_range_subpart where a > 0;
    select * from test_range_subpart;

    -- Create an index for a partitioned table. The default value of index in CREATE TABLE is local. Global/local cannot be specified.
    CREATE TABLE test_partition_btree
    (
        f1  INTEGER,
        f2  INTEGER,
        f3  INTEGER,
        key part_btree_idx using btree(f1)	
    )
    PARTITION BY RANGE(f1)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(MAXVALUE)
    );

    -- Create a composite index for partitioned tables.
    CREATE TABLE test_partition_index
    (
        f1  INTEGER,
        f2  INTEGER,
        f3  INTEGER,
        key part_btree_idx2 using btree(f1 desc, f2 asc)
    )
    PARTITION BY RANGE(f1)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(MAXVALUE)
    );

    -- Create indexes for a column-store partitioned table.
    CREATE TABLE test_partition_column
    (
        f1  INTEGER,
        f2  INTEGER,
        f3  INTEGER,
        key part_column(f1)
    ) with (ORIENTATION = COLUMN)
    PARTITION BY RANGE(f1)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(MAXVALUE)
    );

    -- Create an expression index for a partitioned table.
    CREATE TABLE test_partition_expr
    (
        f1  INTEGER,
        f2  INTEGER,
        f3  INTEGER,
        key part_expr_idx using btree((abs(f1)+1))
    )
    PARTITION BY RANGE(f1)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(MAXVALUE)
    );
    ```



## Helpful Links<a name="en-us_topic_0283136653_en-us_topic_0237122119_en-us_topic_0059777586_s4e5ff679edd643b5a6cd6679fd1055a1"></a>

[ALTER TABLE PARTITION](../SQLReference/alter-table-partition.md), [DROP TABLE](../SQLReference/drop-table.md)
