# CREATE TABLE<a name="EN-US_TOPIC_0289900279"></a>

## Function<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

**CREATE TABLE**  creates an initially empty table in the current database. The table will be owned by the creator.

## Precautions<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_sb04dbf08cbd848649163edbff21254a1"></a>

-   For details about the data types supported by column-store tables, see  [Data Types Supported by Column-store Tables](data-types-supported-by-column-store-tables.md).
-   Column-store tables do not support the array.
-   Column-store tables do not support column generation.
-   Column-store tables cannot be created as global temporary tables.
-   It is recommended that the number of column-store tables do not exceed 1000.
-   If an error occurs during table creation, after it is fixed, the system may fail to delete the empty disk files created before the last automatic clearance. This problem seldom occurs and does not affect system running of the database.
-   Only  **PARTIAL CLUSTER KEY**,  **UNIQUE**, and  **PRIAMRY KEY**  can be used as the table-level constraint of column-store tables. Table-level foreign key constraints are not supported.
-   Only the  **NULL**,  **NOT NULL**,  **DEFAULT**  constant values,  **UNIQUE**, and  **PRIMARY KEY**  can be used as column-store table constraints.
-   Whether column-store tables support a delta table is specified by the  [enable\_delta\_store](en-us_topic_0289900911.md#en-us_topic_0283136577_en-us_topic_0237124705_section1035224982816)  parameter. The threshold for storing data into a delta table is specified by the  **deltarow\_threshold**  parameter.
-   When JDBC is used, the  **DEFAULT**  value can be set through  **PrepareStatement**.
-   The maximum number of columns on each table is 1600, which depends on the column type. The total size of all columns cannot exceed 8192 bytes, except for the columns of variable data types, such as text, varchar, and char.
-   A user granted with the  **CREATE ANY TABLE**  permission can create tables in the public and user schemas. To create a table that contains serial columns, you must also grant the  **CREATE ANY SEQUENCE**  permission to create sequences.

## Syntax<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_sc7a49d08f8ac43189f0e7b1c74f877eb"></a>

Create a table.

```
CREATE [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name 
    ({ column_name data_type [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ]
        | table_constraint
        | LIKE source_table [ like_option [...] ] }
        [, ... ])
    [ AUTO_INCREMENT [ = ] value ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    [ COMMENT {=| } 'text' ];
```

-   **column\_constraint**  is as follows:

    ```
    [ CONSTRAINT constraint_name ]
    { NOT NULL |
      NULL |
      CHECK ( expression ) |
      DEFAULT default_expr |
      AUTO_INCREMENT |
      UNIQUE index_parameters |
      ENCRYPTED WITH ( COLUMN_ENCRYPTION_KEY = column_encryption_key, ENCRYPTION_TYPE = encryption_type_value ) |
      PRIMARY KEY index_parameters |
      REFERENCES reftable [ ( refcolumn ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
          [ ON DELETE action ] [ ON UPDATE action ] }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    [ COMMENT {=| } 'text' ]
    ```


-   **compress\_mode**  of a column is as follows:

    ```
    { DELTA | PREFIX | DICTIONARY | NUMSTR | NOCOMPRESS }
    ```

-   **table\_constraint**  is as follows:

    ```
    [ CONSTRAINT [ constraint_name ] ]
    { CHECK ( expression ) |
      UNIQUE [ index_name ][ USING method ] ( { { column_name | ( expression ) } [ ASC | DESC ] } [, ... ] ) index_parameters |
      PRIMARY KEY [ USING method ] ( { column_name [ ASC | DESC ] } [, ... ] ) index_parameters |
      FOREIGN KEY [ index_name ] ( column_name [, ... ] ) REFERENCES reftable [ (refcolumn [, ... ] ) ]
          [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] |
      PARTIAL CLUSTER KEY ( column_name [, ... ] ) }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    [ COMMENT {=| } 'text' ]
    ```


-   **like\_option**  is as follows:

    ```
    { INCLUDING | EXCLUDING } { DEFAULTS | GENERATED | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | PARTITION | RELOPTIONS | ALL }
    ```

-   **index\_parameters**  is as follows:

    ```
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ USING INDEX TABLESPACE tablespace_name ]
    ```


## Parameter Description<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_s99cf2ac11c79436c93385e4efd7c4428"></a>

-   **UNLOGGED**

    If this keyword is specified, the created table is an unlogged table. Data written to unlogged tables is not written to the WALs, which makes them considerably faster than ordinary tables. However, an unlogged table is automatically truncated after a crash or unclean shutdown, incurring data loss risks. Contents of an unlogged table are also not replicated to standby servers. Any indexes created on an unlogged table are not automatically logged as well.

    Usage scenario: Unlogged tables do not ensure data security. Users can back up data before using unlogged tables; for example, users should back up the data before a system upgrade.

    Troubleshooting: If data is missing in the indexes of unlogged tables due to some unexpected operations such as an unclean shutdown, users should re-create the indexes with errors.

-   **GLOBAL | LOCAL**

    When creating a temporary table, you can specify the  **GLOBAL**  or  **LOCAL**  keyword before  **TEMP**  or  **TEMPORARY**. If the keyword  **GLOBAL**  is specified, openGauss creates a global temporary table. Otherwise, openGauss creates a local temporary table.

-   **TEMPORARY | TEMP**

    If  **TEMP**  or  **TEMPORARY**  is specified, the created table is a temporary table. Temporary tables are classified into global temporary tables and local temporary tables. If the keyword  **GLOBAL**  is specified when a temporary table is created, the table is a global temporary table. Otherwise, the table is a local temporary table.

    The metadata of the global temporary table is visible to all sessions. After the sessions end, the metadata still exists. The user data, indexes, and statistics of a session are isolated from those of another session. Each session can only view and modify the data submitted by itself. Global temporary tables have two schemas:  **ON COMMIT PRESERVE ROWS**  and  **ON COMMIT PRESERVE ROWS**. In session-based  **ON COMMIT PRESERVE ROWS**  schema, user data is automatically cleared when a session ends. In transaction-based  **ON COMMIT DELETE ROWS**  schema, user data is automatically cleared when the commit or rollback operation is performed. If the  **ON COMMIT**  option is not specified during table creation, the session level is used by default. Different from local temporary tables, you can specify a schema that does not start with  **pg\_temp\_**  when creating a global temporary table.

    A local temporary table is automatically dropped at the end of the current session. Therefore, you can create and use temporary tables in the current session as long as the connected database node in the session is normal. Temporary tables are created only in the current session. If a DDL statement involves operations on temporary tables, a DDL error will be generated. Therefore, you are not advised to perform operations on temporary tables in DDL statements.  **TEMP**  is equivalent to  **TEMPORARY**.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   Local temporary tables are visible to the current session through the schema starting with  **pg\_temp**. Users should not delete schemas starting with  **pg\_temp**  or  **pg\_toast\_temp**.
    >-   If  **TEMPORARY**  or  **TEMP**  is not specified when you create a table but its schema is set to that starting with  **pg\_temp\_**  in the current session, the table will be created as a temporary table.
    >-   If global temporary tables and indexes are being used by other sessions, do not perform  **ALTER**  or  **DROP**  \(except the  **ALTER INDEX index\_name REBUILD**  command\).
    >-   The DDL of a global temporary table affects only the user data and indexes of the current session. For example,  **TRUNCATE**,  **REINDEX**, and  **ANALYZE**  are valid only for the current session.
    >-   You can set the GUC parameter  **max\_active\_global\_temporary\_table**  to determine whether to enable the global temporary table function. If  **max\_active\_global\_temporary\_table**  is set to  **0**, the global temporary table function is disabled.
    >-   A temporary table is visible only to the current session. Therefore, it cannot be used together with  **\\parallel on**.
    >-   **\\parallel on**: The temporary table does not support primary/standby switchover.

-   **IF NOT EXISTS**

    Sends a notice, but does not throw an error, if a table with the same name exists.

-   **table\_name**

    Specifies the name of the table to be created.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >
    >-   Some processing logic of materialized views determines whether a table is the log table of a materialized view or a table associated with a materialized view based on the table name prefix. Therefore, do not create a table whose name prefix is  **mlog\_ **or  **matviewmap\_**. Otherwise, some functions of the table are affected.

-   **column\_name**

    Specifies the name of a column to be created in the new table.

-   **constraint\_name**

    Specifies the name of the constraint specified during table creation.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >constraint\_name is optional in B-compatible mode (**sql\_compatibility = 'B'**). For other modes, constraint\_name must be added.

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

-   **expression**

     >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >Expression indexes are supported only in B-compatible databases (that is, sql\_compatibility = 'B').

-   **data\_type**

    Specifies the data type of the column.

-   **compress\_mode**

    Specifies whether to compress a table column. The option specifies the algorithm preferentially used by table columns. Row-store tables do not support compression.

    Value range:  **DELTA**,  **PREFIX**,  **DICTIONARY**,  **NUMSTR**, and  **NOCOMPRESS**

-   **COLLATE collation**

    Assigns a collation to the column \(which must be of a collatable data type\). If no collation is specified, the default collation is used. You can run the  **select \* from pg\_collation;**  command to query collation rules from the  **pg\_collation**  system catalog. The default collation rule is the row starting with  **default**  in the query result.

-   **LIKE source\_table \[ like\_option ... \]**

    Specifies a table from which the new table automatically copies all column names, their data types, and their not-null constraints.

    The new table and the original table are decoupled after creation is complete. Changes to the original table will not be applied to the new table, and it is not possible to include data of the new table in scans of the original table.

    Columns and constraints copied by  **LIKE**  are not merged with the same name. If the same name is specified explicitly or in another  **LIKE**  clause, an error is reported.

    -   The default expressions are copied from the original table to the new table only if  **INCLUDING DEFAULTS**  is specified. The default behavior is to exclude default expressions, resulting in the copied columns in the new table having default values  **NULL**.
    -   The  **CHECK**  constraints are copied from the original table to the new table only when  **INCLUDING CONSTRAINTS**  is specified. Other types of constraints are never copied to the new table. Not-null constraints are always copied to the new table. These rules also apply to column constraints and table constraints.
    -   Any indexes on the original table will not be created on the new table, unless the  **INCLUDING INDEXES**  clause is specified.
    -   **STORAGE**  settings for the copied column definitions are copied only if  **INCLUDING STORAGE**  is specified. The default behavior is to exclude  **STORAGE**  settings.
    -   If  **INCLUDING COMMENTS**  is specified, comments for the copied columns, constraints, and indexes are copied. The default behavior is to exclude comments.
    -   If  **INCLUDING PARTITION**  is specified, the partition definitions of the source table are copied to the new table, and the new table no longer uses the  **PARTITION BY**  clause. The default behavior is to exclude partition definition of the original table. If the source table has an index, you can use the  **INCLUDING PARTITION INCLUDING INDEXES**  syntax. If only  **INCLUDING INDEXES**  is used for a partitioned table, the target table will be defined as an ordinary table, but the index is a partitioned index. In this case, an error will be reported because ordinary tables do not support partitioned indexes.
    -   If  **INCLUDING RELOPTIONS**  is specified, the new table will copy the storage parameter \(that is,  **WITH**  clause\) of the source table. The default behavior is to exclude partition definition of the storage parameter of the original table.
    -   **INCLUDING ALL** contains the meaning of **INCLUDING DEFAULTS**, **INCLUDING CONSTRAINTS**, **INCLUDING INDEXES**, **INCLUDING STORAGE**, **INCLUDING COMMENTS**,**INCLUDING PARTITION**, and **INCLUDING RELOPTIONS**.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   If the source table contains a sequence with the  **SERIAL**,  **BIGSERIAL**,  **SMALLSERIAL**, or  **LARGESERIAL**  data type, or a column in the source table is a sequence by default and the sequence is created for this table by using  **CREATE SEQUENCE...** **OWNED BY**, these sequences will not be copied to the new table, and another sequence specific to the new table will be created. This is different from earlier versions. To share a sequence between the source table and new table, create a shared sequence \(do not use  **OWNED BY**\) and set a column in the source table to this sequence.
    >-   You are not advised to set a column in the source table to the sequence specific to another table especially when the table is distributed in specific node groups, because doing so may result in  **CREATE TABLE ... LIKE**  execution failures. In addition, doing so may cause the sequence to become invalid in the source sequence because the sequence will also be deleted from the source table when it is deleted from the table that the sequence is specific to. To share a sequence among multiple tables, you are advised to create a shared sequence for them.
    >-   **EXCLUDING**  of a partitioned table must be used together with  **INCLUDING ALL**, for example,  **INCLUDING ALL EXCLUDING DEFAULTS**, except for  **DEFAULTS**  of the source partitioned table.

-   **AUTO\_INCREMENT \[ = \] value**

    This clause specifies an initial value for an auto-increment column. The value must be a positive integer and cannot exceed 2<sup>127</sup>-1.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >This clause takes effect only when **sql\_compatibility** is set to **B**.

-   **WITH \( \{ storage\_parameter = value \} \[, ... \] \)**

    Specifies an optional storage parameter for a table or an index.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >-   When using **Numeric** of any precision to define a column, specifies precision **p** and scale **s**.When precision and scale are not specified, the input will be displayed.

    The description of parameters is as follows:

    -   FILLFACTOR

        The fill factor of a table is a percentage from 10 to 100.**100** \(complete filling\) is the default value.When a smaller fill factor is specified, **INSERT** operations pack table pages only to the indicated percentage. The remaining space on each page is reserved for updating rows on that page. This gives **UPDATE** a chance to place the updated copy of a row on the same page, which is more efficient than placing it on a different page. For a table whose entries are never updated, setting the fill factor to **100** \(complete filling\) is the best choice, but in heavily updated tables a smaller fill factor would be appropriate. The parameter has no meaning for column-store tables.

        Value range: 10–100

    -   ORIENTATION

        Specifies the storage mode \(row-store or column-store\) of table data. This parameter cannot be modified once it is set.

        Value range:

        -   **ROW**  indicates that table data is stored in rows.

            **ROW**  applies to OLTP service and scenarios with a large number of point queries or addition/deletion operations.

        -   **COLUMN**  indicates that the data is stored in columns.

            **COLUMN**  applies to the data warehouse service, which has a large amount of aggregation computing, and involves a few column operations.

        Default value:

        If an ordinary tablespace is specified, the default is  **ROW**.

    -   STORAGE\_TYPE

        Specifies the storage engine type. This parameter cannot be modified once it is set.

        Value range:

        -   **USTORE**  indicates that tables support the Inplace-Update storage engine. Note that the  **track\_counts**  and  **track\_activities**  parameters must be enabled when the Ustore table is used. Otherwise, space expansion may occur.
        -   **ASTORE**  indicates that tables support the Append-Only storage engine.

        Default value:

        If no table is specified, data is stored in Append-Only mode by default.

    -   INIT\_TD

        Specifies the number of TDs to be initialized when an Ustore table is created. This parameter is valid only when an Ustore table is created.

        Value range: 2 to 128. The default value is  **4**.

    -   COMPRESSION

        Specifies the compression level of table data. It determines the compression ratio and time. Generally, the higher the level of compression, the higher the ratio, the longer the time; and the lower the level of compression, the lower the ratio, the shorter the time. The actual compression ratio depends on the distribution mode of table data loaded. By default, **COMPRESSION=NO** is added to row-store tables.

        Value range:

        The valid values for column-store tables are  **YES**,  **NO**,  **LOW**,  **MIDDLE**, and  **HIGH**, and the default value is  **LOW**.

    -   COMPRESSLEVEL

        Specifies the table data compression ratio and duration at the same compression level. This divides a compression level into sublevels, providing more choices for compression ratio and duration. As the value becomes greater, the compression ratio becomes higher and duration longer at the same compression level.

        Value range: 0 to 3. The default value is  **0**.

    - COMPRESSTYPE

      Specifies the row-store table compression algorithm. The value **1** indicates the PGLZ algorithm, and the value **2** indicates the ZSTD algorithm. By default, indexes are not compressed. (Only common tables in the Astore engine are supported.)

      Value range: 0 to 2. The default value is **0**.

    - COMPRESS\_LEVEL

      Specifies the row-store table compression algorithm level. This parameter is valid only when **COMPRESSTYPE** is set to **2**. A higher compression level indicates a better table compression effect and a slower table access speed. (Only common tables in the Astore engine are supported.)

      Value range: –31 to 31. The default value is **0**.

    - COMPRESS\_CHUNK_SIZE

      Specifies the size of a row-store table compression chunk. A smaller chunk size indicates a better compression effect, and a larger data dispersion degree indicates a slower table access speed. (Only common tables in the Astore engine are supported.)

      Value range: subject to the page size. When the page size is 8 KB, the value can be **512**, **1024**, **2048**, or **4096**.

      Default value: **4096**

    - COMPRESS_PREALLOC_CHUNKS

      Specifies the number of pre-allocated row-store table compression chunks. A larger number of pre-allocated chunks indicates a lower table compression ratio, and a smaller data dispersion degree indicates a better access performance. (Only common tables in the Astore engine are supported.)

      Value range: 0 to 7. The default value is **0**.

      - The maximum value of this parameter is **7** when **COMPRESS\_CHUNK_SIZE** is set to **512** or **1024**.
      - The maximum value of this parameter is **3** when **COMPRESS\_CHUNK_SIZE** is set to **2048**.
      - The maximum value of this parameter is **1** when **COMPRESS\_CHUNK_SIZE** is set to **4096**.

    - COMPRESS_BYTE_CONVERT

      Sets the preprocessing of row-store table compression byte conversion. In some scenarios, the compression effect can be improved, but the performance deteriorates.

      Value range: Boolean value. By default, this function is disabled.

    - COMPRESS_DIFF_CONVERT

      Sets the preprocessing of row-store table compression differentiation. This parameter can be used together only with **COMPRESS\_BYTE\_CONVERT**. In some scenarios, the compression effect can be improved, but the performance deteriorates.

      Value range: Boolean value. By default, this function is disabled.

    -   MAX\_BATCHROW

        Specifies the maximum number of rows in a storage unit during data loading. The parameter is only valid for column-store tables.

        Value range: 10000 to 60000. The default value is  **60000**.

    -   PARTIAL\_CLUSTER\_ROWS

        Specifies the number of records to be partially clustered for storage during data loading. The parameter is only valid for column-store tables.

        Value range: greater than or equal to  **MAX\_BATCHROW**. You are advised to set this parameter to an integer multiple of  **MAX\_BATCHROW**.

    -   DELTAROW\_THRESHOLD

        Specifies the upper limit of to-be-imported rows for triggering the data import to a delta table when data of a column-store table is to be imported. This parameter takes effect only if  **[enable\_delta\_store](en-us_topic_0289900911.md#en-us_topic_0283136577_en-us_topic_0237124705_section1035224982816)**  is set to  **on**. The parameter is only valid for column-store tables.

        Value range: 0 to 9999. The default value is  **100**.

    -   segment

        The data is stored in segment-page mode. This parameter supports only row-store tables. Column-store tables, temporary tables, and unlogged tables are not supported. The ustore storage engine is not supported.

        Value range:  **on**  and  **off**

        Default value:  **off**

    -   dek\_cipher

        Ciphertext of the key used for transparent data encryption. When  **enable\_tde**  is enabled, the system automatically applies for ciphertext creation. You cannot specify the ciphertext. The key rotation function can be used to update the key.

        Value range: a string.

        If encryption is disabled, the default value is null by default.

    -   hasuids

        If this parameter is set to  **on**, a unique table-level ID is allocated to a tuple when the tuple is updated.

        Value range:  **on**  and  **off**

        Default value:  **off**


-   **ON COMMIT \{ PRESERVE ROWS | DELETE ROWS | DROP \}**

    **ON COMMIT**  determines what to do when you commit a temporary table creation operation. The three options are as follows. Currently, only  **PRESERVE ROWS**  and  **DELETE ROWS**  can be used.

    -   **PRESERVE ROWS**  \(default\): No special action is taken at the ends of transactions. The temporary table and its table data are unchanged.
    -   **DELETE ROWS**: All rows in the temporary table will be deleted at the end of each transaction block.
    -   **DROP**: The temporary table will be dropped at the end of the current transaction block. Only local temporary tables can be dropped. Global temporary tables cannot be dropped.

-   **COMPRESS | NOCOMPRESS**

    If you specify  **COMPRESS**  in the  **CREATE TABLE**  statement, the compression feature is triggered in case of a bulk  **INSERT**  operation. If this feature is enabled, a scan is performed for all tuple data within the page to generate a dictionary and then the tuple data is compressed and stored. If  **NOCOMPRESS**  is specified, the table is not compressed. Row-store tables do not support compression.

    Default value:  **NOCOMPRESS**, that is, tuple data is not compressed before storage.

-   **TABLESPACE tablespace\_name**

    Specifies the tablespace where the new table is created. If not specified, the default tablespace is used.

-   **COMMNET {=| } text**
    
    Comments a new table. If this parameter is not specified, no comment is created.

-   **CONSTRAINT constraint\_name**

    Specifies the name of a column or table constraint. The optional constraint clauses specify constraints that new or updated rows must satisfy for an insert or update operation to succeed.

    There are two ways to define constraints:

    -   A column constraint is defined as part of a column definition, and it is bound to a particular column.
    -   A table constraint is not bound to a particular column but can apply to more than one column.

-   **NOT NULL**

    The column is not allowed to contain null values.

-   **NULL**

    The column is allowed to contain null values. This is the default setting.

    This clause is only provided for compatibility with non-standard SQL databases. It is not recommended.

-   **CHECK \( expression \)**

    Specifies an expression producing a Boolean result where the insert or update operation of new or updated rows can succeed only when the expression result is  **TRUE**  or  **UNKNOWN**; otherwise, an error is thrown and the database is not altered.

    A check constraint specified as a column constraint should reference only the column's values, while an expression appearing in a table constraint can reference multiple columns.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >**<\>NULL**  and  **!=NULL**  are invalid in an expression. Change them to  **IS NOT NULL**.

-   **DEFAULT default\_expr**

    Assigns a default data value for a column. The value can be any variable-free expressions. \(Subqueries and cross-references to other columns in the current table are not allowed.\) The data type of the default expression must match the data type of the column.

    The default expression will be used in any insert operation that does not specify a value for the column. If there is no default value for a column, then the default value is null.

-    **AUTO\_INCREMENT**

     Specifies an auto-increment column.

     If the value of this column is not specified (or the value of this column is set to **0**, **NULL**, or **DEFAULT**), the value of this column is automatically increased by the auto-increment counter.
 
     If this column is inserted or updated to a value greater than the current auto-increment counter, the auto-increment counter is updated to this value after the command is executed successfully.

     The initial auto-increment value is set by the AUTO\_INCREMENT \[ = \] value clause. If it is not set, the default value **1** is used.

     >![](public_sys-resources/icon-note.gif) **NOTE:**
     >-   The auto-increment column can be specified only when **sql\_compatibility** is set to **B**.
     >-   The data type of the auto-increment column can only be integer, 4-byte or 8-byte floating point, or Boolean.
     >-   Each table can have only one auto-increment column.
     >-   The auto-increment column must be the first column of a primary key constraint or unique constraint.
     >-   The DEFAULT value cannot be specified for an auto-increment column.
      >-   The expression of the CHECK constraint cannot contain auto-increment columns.
     >-   You can specify that the auto-increment column can be NULL. If it is not specified, the auto-increment column contains the NOT NULL constraint by default.
     >-   When a table containing an auto-increment column is created, a sequence that depends on the column is created as an auto-increment counter. You are not allowed to modify or delete the sequence using sequence-related functions. You can view the value of the sequence.
     >-   Sequences are not created for auto-increment columns in local temporary tables.
     >-   Auto-increment columns do not support column store.
     >-   The auto-increment and refresh operations of the auto-increment counter are not rolled back.

-   **UNIQUE index\_parameters**

    **UNIQUE \( column\_name \[, ... \] \) index\_parameters**

    Specifies that a group of one or more columns of a table can contain only unique values.

    For the purpose of a unique constraint, null is not considered equal.

-   **PRIMARY KEY index\_parameters**

    **PRIMARY KEY \( column\_name \[, ... \] \) index\_parameters**

    Specifies that a column or columns of a table can contain only unique \(non-duplicate\) and non-null values.

    Only one primary key can be specified for a table.

-   **REFERENCES reftable \[ \( refcolum \) \] \[ MATCH matchtype \] \[ ON DELETE action \] \[ ON UPDATE action \] \(column constraint\)**

    **FOREIGN KEY \( column\_name \[, ... \] \) REFERENCES reftable \[ \( refcolumn \[, ... \] \) \] \[ MATCH matchtype \] \[ ON DELETE action \] \[ ON UPDATE action \] \(table constraint\)**

    The foreign key constraint requires that the group consisting of one or more columns in the new table should contain and match only the referenced column values in the referenced table. If  **refcolum**  is omitted, the primary key of  **reftable**  is used. The referenced column should be the only column or primary key in the referenced table. A foreign key constraint cannot be defined between a temporary table and a permanent table.

    There are three types of matching between a reference column and a referenced column:

    -   **MATCH FULL**: A column with multiple foreign keys cannot be  **NULL**  unless all foreign key columns are  **NULL**.
    -   **MATCH SIMPLE**  \(default\): Any unexpected foreign key column can be  **NULL**.
    -   **MATCH PARTIAL**: This option is not supported currently.

    In addition, when certain operations are performed on the data in the referenced table, the operations are performed on the corresponding columns in the new table.  **ON DELETE**: specifies the operations to be executed after a referenced row in the referenced table is deleted.  **ON UPDATE**: specifies the operation to be performed when the referenced column data in the referenced table is updated. Possible responses to the  **ON DELETE**  and  **ON UPDATE**  clauses are as follows:

    -   **NO ACTION**  \(default\): An error indicating that the foreign key constraint is violated is reported. If the constraint is deferrable and there are still any referenced columns, this error will occur when the constraint is checked.
    -   **RESTRICT**: An error indicating that the foreign key constraint is violated is created. It is the same as  **NO ACTION**  except that the constraint is not deferrable.
    -   **CASCADE**: deletes any rows referencing the deleted row, or update the value of the referencing column to the new value of the referenced column, respectively.
    -   **SET NULL**: sets the referencing column\(s\) to  **NULL**.
    -   **SET DEFAULT**: sets the referencing column\(s\) to their default values.

-   **DEFERRABLE | NOT DEFERRABLE**

    Controls whether the constraint can be deferred. A constraint that is not deferrable will be checked immediately after every command. Checking of constraints that are deferrable can be postponed until the end of the transaction using the  **SET CONSTRAINTS**  command.  **NOT DEFERRABLE**  is the default value. Currently, only UNIQUE constraints, primary key constraints, and foreign key constraints accept this clause. All the other constraints are not deferrable.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Ustore tables do not support the keywords  **DEFERRABLE**  and  **INITIALLY DEFERRED**.

-   **COMMENT text**

    Comments.

-   **PARTIAL CLUSTER KEY**

    Specifies a partial cluster key for storage. When importing data to a column-store table, you can perform local data sorting by specified columns \(single or multiple\).

-   **INITIALLY IMMEDIATE | INITIALLY DEFERRED**

    If a constraint is deferrable, this clause specifies the default time to check the constraint.

    -   If the constraint is  **INITIALLY IMMEDIATE**  \(default value\), it is checked after each statement.
    -   If the constraint is  **INITIALLY DEFERRED**, it is checked only at the end of the transaction.

    The constraint check time can be altered using the  **SET CONSTRAINTS**  statement.

-   **USING INDEX TABLESPACE tablespace\_name**

    Allows selection of the tablespace in which the index associated with a  **UNIQUE**  or  **PRIMARY KEY**  constraint will be created. If not specified,  **default\_tablespace**  is consulted, or the default tablespace in the database if  **default\_tablespace**  is empty.

-   **ENCRYPTION\_TYPE = encryption\_type\_value**

    For the encryption type in the ENCRYPTED WITH constraint, the value of  **encryption\_type\_value**  is  **DETERMINISTIC**  or  **RANDOMIZED**.


## Examples<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_s86758dcf05d442d2a9ebd272e76ed1b8"></a>

```
-- Create a simple table.
openGauss=# CREATE TABLE tpcds.warehouse_t1
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

openGauss=# CREATE TABLE tpcds.warehouse_t2
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER                       ,
    W_STREET_NUMBER           CHAR(10)                      ,
    W_STREET_NAME             VARCHAR(60),
    W_STREET_TYPE             CHAR(15)                      ,
    W_SUITE_NUMBER            CHAR(10)                      ,
    W_CITY                    VARCHAR(60)                   ,
    W_COUNTY                  VARCHAR(30)                   ,
    W_STATE                   CHAR(2)                       ,
    W_ZIP                     CHAR(10)                      ,
    W_COUNTRY                 VARCHAR(20)                   ,
    W_GMT_OFFSET              DECIMAL(5,2)
);
```

```
-- Create a table and set the default value of the W_STATE column to GA.
openGauss=# CREATE TABLE tpcds.warehouse_t3
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
    W_STATE                   CHAR(2)           DEFAULT 'GA',
    W_ZIP                     CHAR(10)                      ,
    W_COUNTRY                 VARCHAR(20)                   ,
    W_GMT_OFFSET              DECIMAL(5,2)
);

-- Create a table and check whether the W_WAREHOUSE_NAME column is unique at the end of its creation.
openGauss=# CREATE TABLE tpcds.warehouse_t4
(
    W_WAREHOUSE_SK            INTEGER                NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)               NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)   UNIQUE DEFERRABLE,
    W_WAREHOUSE_SQ_FT         INTEGER                        ,
    W_STREET_NUMBER           CHAR(10)                       ,
    W_STREET_NAME             VARCHAR(60)                    ,
    W_STREET_TYPE             CHAR(15)                       ,
    W_SUITE_NUMBER            CHAR(10)                       ,
    W_CITY                    VARCHAR(60)                    ,
    W_COUNTY                  VARCHAR(30)                    ,
    W_STATE                   CHAR(2)                        ,
    W_ZIP                     CHAR(10)                       ,
    W_COUNTRY                 VARCHAR(20)                    ,
    W_GMT_OFFSET              DECIMAL(5,2) 
);
```

```
-- Create a table with its fill factor set to 70%.
openGauss=# CREATE TABLE tpcds.warehouse_t5
(
    W_WAREHOUSE_SK            INTEGER                NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)               NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)                    ,
    W_WAREHOUSE_SQ_FT         INTEGER                        ,
    W_STREET_NUMBER           CHAR(10)                       ,
    W_STREET_NAME             VARCHAR(60)                    ,
    W_STREET_TYPE             CHAR(15)                       ,
    W_SUITE_NUMBER            CHAR(10)                       ,
    W_CITY                    VARCHAR(60)                    ,
    W_COUNTY                  VARCHAR(30)                    ,
    W_STATE                   CHAR(2)                        ,
    W_ZIP                     CHAR(10)                       ,
    W_COUNTRY                 VARCHAR(20)                    ,
    W_GMT_OFFSET              DECIMAL(5,2),
    UNIQUE(W_WAREHOUSE_NAME) WITH(fillfactor=70)
);

-- Alternatively, user the following syntax:
openGauss=# CREATE TABLE tpcds.warehouse_t6
(
    W_WAREHOUSE_SK            INTEGER                NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)               NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)              UNIQUE,
    W_WAREHOUSE_SQ_FT         INTEGER                        ,
    W_STREET_NUMBER           CHAR(10)                       ,
    W_STREET_NAME             VARCHAR(60)                    ,
    W_STREET_TYPE             CHAR(15)                       ,
    W_SUITE_NUMBER            CHAR(10)                       ,
    W_CITY                    VARCHAR(60)                    ,
    W_COUNTY                  VARCHAR(30)                    ,
    W_STATE                   CHAR(2)                        ,
    W_ZIP                     CHAR(10)                       ,
    W_COUNTRY                 VARCHAR(20)                    ,
    W_GMT_OFFSET              DECIMAL(5,2)
) WITH(fillfactor=70);

-- Create a table and specify that its data is not written to WALs.
openGauss=# CREATE UNLOGGED TABLE tpcds.warehouse_t7
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

-- Create a temporary table.
openGauss=# CREATE TEMPORARY TABLE warehouse_t24
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

-- Create a local temporary table and specify that this table is dropped when the transaction is committed.
openGauss=# CREATE TEMPORARY TABLE warehouse_t25
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
) ON COMMIT DELETE ROWS;

--Create a global temporary table and specify that the temporary table data is deleted when the session ends. The current Ustore storage engine does not support global temporary tables.

openGauss=# CREATE GLOBAL TEMPORARY TABLE gtt1
(
    ID                        INTEGER               NOT NULL,
    NAME                      CHAR(16)              NOT NULL,
    ADDRESS                   VARCHAR(50)                   ,
    POSTCODE                  CHAR(6)
) ON COMMIT PRESERVE ROWS;

-- Create a table and specify that no error is reported for duplicate tables (if any).
openGauss=# CREATE TABLE IF NOT EXISTS tpcds.warehouse_t8
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

-- Create a general tablespace.
openGauss=# CREATE TABLESPACE DS_TABLESPACE1 RELATIVE LOCATION 'tablespace/tablespace_1';
-- Specify a tablespace when creating a table.
openGauss=# CREATE TABLE tpcds.warehouse_t9
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
) TABLESPACE DS_TABLESPACE1;

-- Separately specify the index tablespace for W_WAREHOUSE_NAME when creating the table.
openGauss=# CREATE TABLE tpcds.warehouse_t10
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)           UNIQUE USING INDEX TABLESPACE DS_TABLESPACE1,
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
```

```
-- Create a table with a primary key constraint.
openGauss=# CREATE TABLE tpcds.warehouse_t11
(
    W_WAREHOUSE_SK            INTEGER            PRIMARY KEY,
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

-- An alternative for the preceding syntax is as follows:
openGauss=# CREATE TABLE tpcds.warehouse_t12
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
    W_GMT_OFFSET              DECIMAL(5,2),
    PRIMARY KEY(W_WAREHOUSE_SK)
);

-- Or use the following statement to specify the name of the constraint:
openGauss=# CREATE TABLE tpcds.warehouse_t13
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
    W_GMT_OFFSET              DECIMAL(5,2),
    CONSTRAINT W_CSTR_KEY1 PRIMARY KEY(W_WAREHOUSE_SK)
);

-- Create a table with a compound primary key constraint.
openGauss=# CREATE TABLE tpcds.warehouse_t14
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
    W_GMT_OFFSET              DECIMAL(5,2),
    CONSTRAINT W_CSTR_KEY2 PRIMARY KEY(W_WAREHOUSE_SK, W_WAREHOUSE_ID)
);
-- Create a column-store table.
openGauss=# CREATE TABLE tpcds.warehouse_t15
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
) WITH (ORIENTATION = COLUMN);

-- Create a column-store table using partial clustered storage.
openGauss=# CREATE TABLE tpcds.warehouse_t16
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
    W_GMT_OFFSET              DECIMAL(5,2),
    PARTIAL CLUSTER KEY(W_WAREHOUSE_SK, W_WAREHOUSE_ID)
) WITH (ORIENTATION = COLUMN);

-- Define a column-store table with compression enabled.
openGauss=# CREATE TABLE tpcds.warehouse_t17
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
) WITH (ORIENTATION = COLUMN, COMPRESSION=HIGH);


-- Define a column check constraint.
openGauss=# CREATE TABLE tpcds.warehouse_t19
(
    W_WAREHOUSE_SK            INTEGER               PRIMARY KEY CHECK (W_WAREHOUSE_SK > 0),
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)           CHECK (W_WAREHOUSE_NAME IS NOT NULL),
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

openGauss=# CREATE TABLE tpcds.warehouse_t20
(
    W_WAREHOUSE_SK            INTEGER               PRIMARY KEY,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)           CHECK (W_WAREHOUSE_NAME IS NOT NULL),
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
    W_GMT_OFFSET              DECIMAL(5,2),
    CONSTRAINT W_CONSTR_KEY2 CHECK(W_WAREHOUSE_SK > 0 AND W_WAREHOUSE_NAME IS NOT NULL) 
);

-- Create a table with a foreign key constraint.
openGauss=# CREATE TABLE tpcds.city_t23
(
    W_CITY            VARCHAR(60)                PRIMARY KEY,
    W_ADDRESS       TEXT                     
);
openGauss=# CREATE TABLE tpcds.warehouse_t23
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER                       ,
    W_STREET_NUMBER           CHAR(10)                      ,
    W_STREET_NAME             VARCHAR(60)                   ,
    W_STREET_TYPE             CHAR(15)                      ,
    W_SUITE_NUMBER            CHAR(10)                      ,
    W_CITY                    VARCHAR(60)           REFERENCES tpcds.city_t23(W_CITY),
    W_COUNTY                  VARCHAR(30)                   ,
    W_STATE                   CHAR(2)                       ,
    W_ZIP                     CHAR(10)                      ,
    W_COUNTRY                 VARCHAR(20)                   ,
    W_GMT_OFFSET              DECIMAL(5,2)
);

-- An alternative for the preceding syntax is as follows:
openGauss=# CREATE TABLE tpcds.warehouse_t23
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
    W_GMT_OFFSET              DECIMAL(5,2)                  ,
    FOREIGN KEY(W_CITY) REFERENCES tpcds.city_t23(W_CITY)
);

-- Or use the following statement to specify the name of the constraint:
openGauss=# CREATE TABLE tpcds.warehouse_t23
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
    W_GMT_OFFSET              DECIMAL(5,2)                  ,
    CONSTRAINT W_FORE_KEY1 FOREIGN KEY(W_CITY) REFERENCES tpcds.city_t23(W_CITY)
);

-- Add a varchar column to the tpcds.warehouse_t19 table.
```

```
openGauss=# ALTER TABLE tpcds.warehouse_t19 ADD W_GOODS_CATEGORY varchar(30);

-- Add a check constraint to the tpcds.warehouse_t19 table.
openGauss=# ALTER TABLE tpcds.warehouse_t19 ADD CONSTRAINT W_CONSTR_KEY4 CHECK (W_STATE IS NOT NULL);

-- Use one statement to alter the types of two existing columns.
openGauss=# ALTER TABLE tpcds.warehouse_t19
    ALTER COLUMN W_GOODS_CATEGORY TYPE varchar(80),
    ALTER COLUMN W_STREET_NAME TYPE varchar(100);

-- This statement is equivalent to the preceding statement.
openGauss=# ALTER TABLE tpcds.warehouse_t19 MODIFY (W_GOODS_CATEGORY varchar(30), W_STREET_NAME varchar(60));

-- Add a not-null constraint to an existing column.
openGauss=# ALTER TABLE tpcds.warehouse_t19 ALTER COLUMN W_GOODS_CATEGORY SET NOT NULL;

-- Remove not-null constraints from an existing column.
openGauss=# ALTER TABLE tpcds.warehouse_t19 ALTER COLUMN W_GOODS_CATEGORY DROP NOT NULL;

-- If no partial cluster is specified in a column-store table, add a partial cluster to the table.
openGauss=# ALTER TABLE tpcds.warehouse_t17 ADD PARTIAL CLUSTER KEY(W_WAREHOUSE_SK);

-- View the constraint name and delete the partial cluster column of a column-store table.
openGauss=# \d+ tpcds.warehouse_t17
                              Table "tpcds.warehouse_t17"
      Column       |         Type          | Modifiers | Storage  | Stats target | Description 
-------------------+-----------------------+-----------+----------+--------------+-------------
 w_warehouse_sk    | integer               | not null  | plain    |              | 
 w_warehouse_id    | character(16)         | not null  | extended |              | 
 w_warehouse_name  | character varying(20) |           | extended |              | 
 w_warehouse_sq_ft | integer               |           | plain    |              | 
 w_street_number   | character(10)         |           | extended |              | 
 w_street_name     | character varying(60) |           | extended |              | 
 w_street_type     | character(15)         |           | extended |              | 
 w_suite_number    | character(10)         |           | extended |              | 
 w_city            | character varying(60) |           | extended |              | 
 w_county          | character varying(30) |           | extended |              | 
 w_state           | character(2)          |           | extended |              | 
 w_zip             | character(10)         |           | extended |              | 
 w_country         | character varying(20) |           | extended |              | 
 w_gmt_offset      | numeric(5,2)          |           | main     |              | 
Partial Cluster :
    "warehouse_t17_cluster" PARTIAL CLUSTER KEY (w_warehouse_sk)
Has OIDs: no
Location Nodes: ALL DATANODES
Options: compression=no, version=0.12
openGauss=# ALTER TABLE tpcds.warehouse_t17 DROP CONSTRAINT warehouse_t17_cluster;

-- Move a table to another tablespace.
openGauss=# ALTER TABLE tpcds.warehouse_t19 SET TABLESPACE PG_DEFAULT; 
-- Create the joe schema.
openGauss=# CREATE SCHEMA joe;

-- Move a table to another schema.
openGauss=# ALTER TABLE tpcds.warehouse_t19 SET SCHEMA joe;

-- Rename an existing table.
openGauss=# ALTER TABLE joe.warehouse_t19 RENAME TO warehouse_t23;

-- Delete a column from the warehouse_t23 table.
openGauss=# ALTER TABLE joe.warehouse_t23 DROP COLUMN W_STREET_NAME;

-- Delete the tablespace, schema joe, and schema tables warehouse.
openGauss=# DROP TABLE tpcds.warehouse_t1;
openGauss=# DROP TABLE tpcds.warehouse_t2;
openGauss=# DROP TABLE tpcds.warehouse_t3;
openGauss=# DROP TABLE tpcds.warehouse_t4;
openGauss=# DROP TABLE tpcds.warehouse_t5;
openGauss=# DROP TABLE tpcds.warehouse_t6;
openGauss=# DROP TABLE tpcds.warehouse_t7;
openGauss=# DROP TABLE tpcds.warehouse_t8;
openGauss=# DROP TABLE tpcds.warehouse_t9;
openGauss=# DROP TABLE tpcds.warehouse_t10;
openGauss=# DROP TABLE tpcds.warehouse_t11;
openGauss=# DROP TABLE tpcds.warehouse_t12;
openGauss=# DROP TABLE tpcds.warehouse_t13;
openGauss=# DROP TABLE tpcds.warehouse_t14;
openGauss=# DROP TABLE tpcds.warehouse_t15;
openGauss=# DROP TABLE tpcds.warehouse_t16;
openGauss=# DROP TABLE tpcds.warehouse_t17;
openGauss=# DROP TABLE tpcds.warehouse_t18;
openGauss=# DROP TABLE tpcds.warehouse_t20;
openGauss=# DROP TABLE tpcds.warehouse_t21;
openGauss=# DROP TABLE tpcds.warehouse_t22;
openGauss=# DROP TABLE joe.warehouse_t23;
openGauss=# DROP TABLE tpcds.warehouse_t24;
openGauss=# DROP TABLE tpcds.warehouse_t25;
openGauss=# DROP TABLESPACE DS_TABLESPACE1;
openGauss=# DROP SCHEMA IF EXISTS joe CASCADE;
```

## Helpful Links<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_scd5caca899f849f697cb50d76c49de4c"></a>

[ALTER TABLE](alter-table.md),  [DROP TABLE](drop-table.md), and  [CREATE TABLESPACE](create-tablespace.md)

## Suggestions<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_section29320865113651"></a>

-   UNLOGGED
    -   The unlogged table and its indexes do not use the WAL log mechanism during data writing. Their write speed is much higher than that of ordinary tables. Therefore, they can be used for storing intermediate result sets of complex queries to improve query performance.
    -   The unlogged table has no primary/standby mechanism. In case of system faults or abnormal breakpoints, data loss may occur. Therefore, the unlogged table cannot be used to store basic data.

-   TEMPORARY | TEMP
    -   A temporary table is automatically dropped at the end of a session.

-   LIKE
    -   The new table automatically inherits all column names, data types, and not-null constraints from this table. The new table is irrelevant to the original table after the creation.

-   LIKE INCLUDING DEFAULTS
    -   The default expressions are copied from the original table to the new table only if  **INCLUDING DEFAULTS**  is specified. The default behavior is to exclude default expressions, resulting in the copied columns in the new table having default values  **NULL**.

-   LIKE INCLUDING CONSTRAINTS
    -   The  **CHECK**  constraints are copied from the original table to the new table only when  **INCLUDING CONSTRAINTS**  is specified. Other types of constraints are never copied to the new table. Not-null constraints are always copied to the new table. These rules also apply to column constraints and table constraints.

-   LIKE INCLUDING INDEXES
    -   Any indexes on the original table will not be created on the new table, unless the  **INCLUDING INDEXES**  clause is specified.

-   LIKE INCLUDING STORAGE
    -   **STORAGE**  settings for the copied column definitions are copied only if  **INCLUDING STORAGE**  is specified. The default behavior is to exclude  **STORAGE**  settings.

-   LIKE INCLUDING COMMENTS
    -   If  **INCLUDING COMMENTS**  is specified, comments for the copied columns, constraints, and indexes are copied. The default behavior is to exclude comments.

-   LIKE INCLUDING PARTITION

    -   If  **INCLUDING PARTITION**  is specified, the partition definitions of the source table are copied to the new table, and the new table no longer uses the  **PARTITION BY**  clause. The default behavior is to exclude partition definition of the original table.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >List and hash partitioned tables do not support  **LIKE INCLUDING PARTITION**.

-   LIKE INCLUDING RELOPTIONS
    -   If  **INCLUDING RELOPTIONS**  is specified, the new table will copy the storage parameter \(that is,  **WITH**  clause\) of the source table. The default behavior is to exclude partition definition of the storage parameter of the original table.

-   LIKE INCLUDING ALL
    -   **INCLUDING ALL**  contains the meaning of  **INCLUDING DEFAULTS**,  **INCLUDING CONSTRAINTS**,  **INCLUDING INDEXES**,  **INCLUDING STORAGE**,  **INCLUDING COMMENTS**,  **INCLUDING PARTITION**, and  **INCLUDING RELOPTIONS**.

-   ORIENTATION ROW
    -   Creates a row-store table. Row-store applies to the OLTP service, which has many interactive transactions. An interaction involves many columns in the table. Using row-store can improve the efficiency.

-   ORIENTATION COLUMN
    -   Creates a column-store table. Column-store applies to the DWS, which has a large amount of aggregation computing, and involves a few column operations.
