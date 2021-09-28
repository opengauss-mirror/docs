# CREATE TABLE SUBPARTITION<a name="EN-US_TOPIC_0000001198046401"></a>

## Function<a name="en-us_topic_0283136653_en-us_topic_0237122119_section1163224811518"></a>

Creates a level-2 partitioned table. A partitioned table is a logical table that is divided into several physical partitions for storage based on a specific plan. A partitioned table is a logical table and does not store data. Data is stored in physical partitions. For a level-2 partitioned table, the top-level node table and level-1 partitioned table are logical tables and do not store data. Only the level-2 partitioned \(leaf node\) stores data.

The partitioning solution of a level-2 partitioned table is a combination of the partitioning solutions of two level-1 partitions. For details about the partitioning solution of a level-1 partitioned table, see CREATE TABLE PARTITION.

Common combination solutions for level-2 partitioned tables include range-range partitioning, range-list partitioning, range-hash partitioning, list-range partitioning, list-list partitioning, list-hash partitioning, hash-range partitioning, hash-list partitioning, and hash-hash partitioning. Currently, level-2 partitioned tables can only be row-store tables.

## Precautions<a name="en-us_topic_0283136653_en-us_topic_0237122119_en-us_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

-   A level-2 partitioned table has two partition keys, and each partition key supports only one column.
-   If the constraint key of the unique constraint and primary key constraint contains all partition keys, a local index is created for the constraints. Otherwise, a global index is created.
-   The number of level-2 partitions \(leaf nodes\) in a level-2 partitioned table cannot exceed 1048575. There is no limit on the number of level-1 partitions, but there must be at least one level-2 partition under a level-1 partition.
-   Level-2 partitioned tables support only row store and do not support column-store, segment-page, or hash bucket.
-   UPSERT and MERGE INTO into are not supported.
-   When specifying a partition for query, for example,  **select \* from tablename partition/subpartition**  \(_partitionname_\), ensure that the keywords  **partition**  and  **subpartition**  are correct. If they are incorrect, no error is reported during the query. In this case, the query is performed based on the table alias.
-   Level-2 partitioned tables do not support the subpartition for \(values\) query, for example,  **select \* from tablename subpartition for**  \(_values_\).

## Syntax<a name="section11556125664117"></a>

```
CREATE TABLE [ IF NOT EXISTS ] subpartition_table_name
( 
{ column_name data_type [ COLLATE collation ] [ column_constraint [ ... ] ]
| table_constraint
| LIKE source_table [ like_option [...] ] }[, ... ]
)
[ WITH ( {storage_parameter = value} [, ... ] ) ]
[ COMPRESS | NOCOMPRESS ]
[ TABLESPACE tablespace_name ]
PARTITION BY {RANGE | LIST | HASH} (partition_key) SUBPARTITION BY {RANGE | LIST | HASH} (subpartition_key)
(
  PARTITION partition_name1 [ VALUES LESS THAN (val1) | VALUES (val1[, …]) ] [ TABLESPACE tablespace ]
  (
       { SUBPARTITION subpartition_name1 [ VALUES LESS THAN (val1_1) | VALUES (val1_1[, …])]  [ TABLESPACE tablespace ] } [, ...]
  )[, ...]
)[ { ENABLE | DISABLE } ROW MOVEMENT ];
```

-   Column constraint:

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

-   Table constraint:

    ```
    [ CONSTRAINT constraint_name ]
    { CHECK ( expression ) | 
      UNIQUE ( column_name [, ... ] ) index_parameters | 
      PRIMARY KEY ( column_name [, ... ] ) index_parameters |
      FOREIGN KEY ( column_name [, ... ] ) REFERENCES reftable [ ( refcolumn [, ... ] ) ]
          [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    ```


-   LIKE options:

    ```
    { INCLUDING | EXCLUDING } { DEFAULTS | GENERATED | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | RELOPTIONS| ALL }
    ```


-   Index parameters:

    ```
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ USING INDEX TABLESPACE tablespace_name ]
    ```


## Parameter Description<a name="section7923313718"></a>

-   **IF NOT EXISTS**

    Does not throw an error if a relationship with the same name existed. A notice is issued in this case.

-   **subpartition\_table\_name**

    Specifies the name of a level-2 partitioned table.

    Value range: a string. It must comply with the identifier naming convention.


-   **column\_name**

    Specifies the name of a column to be created in the new table.

    Value range: a string. It must comply with the identifier naming convention.

-   **data\_type**

    Specifies the data type of the column.

-   **COLLATE  collation**

    Assigns a collation to the column \(which must be of a collatable data type\). If no collation is specified, the default collation is used. You can run the  **select \* from pg\_collation;**  command to query collation rules from the  **pg\_collation**  system catalog. The default collation rule is the row starting with  **default**  in the query result.

-   **CONSTRAINT constraint\_name**

    Specifies the name of a column or table constraint. The optional constraint clauses specify constraints that new or updated rows must satisfy for an INSERT or UPDATE operation to succeed.

    There are two ways to define constraints:

    -   A column constraint is defined as part of a column definition, and it is bound to a particular column.
    -   A table constraint is not bound to a particular column and can apply to more than one column.

-   **LIKE source\_table \[ like\_option ... \]**

    The LIKE clause specifies a table from which the new table automatically copies all column names, their data types, and their non-null constraints.

    Unlike INHERITS, the new table and original table are decoupled after creation is complete. Changes to the source table will not be applied to the new table, and it is not possible to include data of the new table in scans of the source table.

    -   Default expressions for the copied column definitions will be copied only if  **INCLUDING DEFAULTS**  is specified. The default behavior is to exclude default expressions, resulting in the copied columns in the new table having default values  **NULL**.
    -   If  **INCLUDING GENERATED**  is specified, the generated expression of the source table column is copied to the new table. By default, the generated expression is not copied.
    -   Non-null constraints are always copied to the new table. CHECK constraints will only be copied if  **INCLUDING CONSTRAINTS**  is specified; other types of constraints will never be copied. These rules also apply to column constraints and table constraints.
    -   Unlike those of INHERITS, columns and constraints copied by LIKE are not merged with similarly named columns and constraints. If the same name is specified explicitly or in another LIKE clause, an error is reported.
    -   Any indexes on the original table will not be created on the new table, unless the  **INCLUDING INDEXES**  clause is specified.
    -   **STORAGE**  settings for the copied column definitions are copied only if  **INCLUDING STORAGE**  is specified. The default behavior is to exclude  **STORAGE**  settings.
    -   Comments for the copied columns, constraints, and indexes will be copied only if  **INCLUDING COMMENTS**  is specified. The default behavior is to exclude comments.
    -   If  **INCLUDING RELOPTIONS**  is specified, the new table will copy the storage parameter \(WITH clause of the source table\) of the source table. The default behavior is to exclude partition definition of the storage parameter of the source table.
    -   **INCLUDING ALL**  contains the meaning of  **INCLUDING DEFAULTS**,  **INCLUDING CONSTRAINTS**,  **INCLUDING INDEXES**,  **INCLUDING STORAGE**,  **INCLUDING COMMENTS**,  **INCLUDING PARTITION**, and  **INCLUDING RELOPTIONS**.

-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    Specifies an optional storage parameter for a table or an index. Optional parameters are as follows:

    -   FILLFACTOR

        The fill factor of a table is a percentage from 10 to 100.  **100**  \(complete filling\) is the default value. When a smaller fill factor is specified, INSERT operations fill table pages only to the indicated percentage. The remaining space on each page is reserved for updating rows on that page. This gives UPDATE a chance to place the updated copy of a row on the same page, which is more efficient than placing it on a different page. For a table whose entries are never updated, setting the fill factor to  **100**  \(complete filling\) is the best choice, but in heavily updated tables a smaller fill factor would be appropriate. The parameter has no meaning for column-store tables.

        Value range: 10–100

    -   ORIENTATION

        Determines the data storage mode of the table.

        Value range:

        -   **COLUMN**: The data will be stored in columns.
        -   **ROW**  \(default value\): The data will be stored in rows.

            >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
            >**ORIENTATION**  cannot be modified.


    -   COMPRESSION
        -   Value range:  **LOW**,  **MIDDLE**,  **HIGH**,  **YES**, and  **NO**  for column-store tables, with compression level increasing in ascending order. The default value is  **LOW**.
        -   Row-store tables cannot be compressed.

    -   MAX\_BATCHROW

        Specifies the maximum number of records in a storage unit during data loading. The parameter is only valid for column-store tables.

        Value range: 10000 to 60000. The default value is  **60000**.

    -   PARTIAL\_CLUSTER\_ROWS

        Specifies the number of records to be partially clustered for storage during data loading. The parameter is only valid for column-store tables.

        Value range: greater than or equal to  **MAX\_BATCHROW**. You are advised to set this parameter to an integer multiple of  **MAX\_BATCHROW**.

    -   DELTAROW\_THRESHOLD

        A reserved parameter. The parameter is only valid for column-store tables.

        Value range: 0 to 9999


-   **COMPRESS / NOCOMPRESS**

    Specifies keyword COMPRESS during the creation of a table, so that the compression feature is triggered in case of BULK INSERT operations. If this feature is enabled, a scan is performed for all tuple data within the page to generate a dictionary and then the tuple data is compressed and stored. If  **NOCOMPRESS**  is specified, the table is not compressed. Row-store tables cannot be compressed.

    Default value:  **NOCOMPRESS**, that is, tuple data is not compressed before storage.

-   **TABLESPACE tablespace\_name**

    Specifies that the new table will be created in the  **tablespace\_name**  tablespace. If the tablespace is not specified, the default tablespace is used.

-   **PARTITION BY \{RANGE | LIST | HASH\} \(partition\_key\)**
    -   For  **partition\_key**, the partitioning policy supports only one column of partition keys.
    -   The data types supported by the partition key are the same as those supported by the level-1 partitioned table.

-   **SUBPARTITION BY \{RANGE | LIST | HASH\} \(subpartition\_key\)**
    -   For  **subpartition\_key**, the partitioning policy supports only one column of partition keys.
    -   The data types supported by the partition key are the same as those supported by the level-1 partitioned table.


-   **\{ ENABLE | DISABLE \} ROW MOVEMENT**

    Specifies whether to enable row movement.

    If the tuple value is updated on the partition key during the UPDATE operation, the partition where the tuple is located is altered. Setting this parameter enables error messages to be reported or movement of the tuple between partitions.

    Value range:

    -   **ENABLE**  \(default value\): Row movement is enabled.
    -   **DISABLE**: Row movement is disabled.

-   **NOT NULL**

    The column is not allowed to contain null values.  **ENABLE**  can be omitted.

-   **NULL**

    Indicates that the column is allowed to contain  **NULL**  values. This is the default setting.

    This clause is only provided for compatibility with non-standard SQL databases. It is not recommended.

-   **CHECK \(condition\) \[ NO INHERIT \]**

    Specifies an expression producing a Boolean result where the INSERT or UPDATE operation of new or updated rows can succeed only when the expression result is  **TRUE**  or  **UNKNOWN**; otherwise, an error is thrown and the database is not altered.

    A check constraint specified as a column constraint should reference only the column's values, while an expression in a table constraint can reference multiple columns.

    A constraint marked with  **NO INHERIT**  will not propagate to child tables.

    **ENABLE**  can be omitted.

-   **DEFAULT default\_expr**

    Assigns a default data value to a column. The value can be any variable-free expressions. \(Subqueries and cross-references to other columns in the current table are not allowed.\) The data type of the default expression must match that of the column.

    The default expression will be used in any INSERT operation that does not specify a value for the column. If there is no default value for a column, then the default value is  **NULL**.

-   **GENERATED ALWAYS AS \( generation\_expr \) STORED**

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

-   **UNIQUE index\_parameters**

    **UNIQUE \( column\_name \[, ... \] \) index\_parameters**

    Specifies that a group of one or more columns of a table can contain only unique values.

    For the purpose of a unique constraint, null is not considered equal.

-   **PRIMARY KEY index\_parameters**

    **PRIMARY KEY \( column\_name \[, ... \] \) index\_parameters**

    Specifies that a column or columns of a table can contain only unique \(non-duplicate\) and non-**NULL**  values.

    Only one primary key can be specified for a table.

-   **DEFERRABLE | NOT DEFERRABLE**

    They determine whether the constraint is deferrable. A constraint that is not deferrable will be checked immediately after every command. Checking of constraints that are deferrable can be postponed until the end of the transaction using the  **SET CONSTRAINTS**  command.  **NOT DEFERRABLE**  is the default value. Currently, only UNIQUE constraints, primary key constraints, and foreign key constraints accept this clause. All the other constraints are not deferrable.

-   **INITIALLY IMMEDIATE | INITIALLY DEFERRED**

    If a constraint is deferrable, this clause specifies the default time to check the constraint.

    -   If the constraint is  **INITIALLY IMMEDIATE**  \(default value\), it is checked after each statement.
    -   If the constraint is  **INITIALLY DEFERRED**, it is checked only at the end of the transaction.

    The constraint check time can be altered using the  **SET CONSTRAINTS**  statement.

-   **USING INDEX TABLESPACE tablespace\_name**

    Allows selection of the tablespace in which the index associated with a  **UNIQUE**  or  **PRIMARY KEY**  constraint will be created. If not specified, the index is created in  **default\_tablespace**. If  **default\_tablespace**  is empty, the default tablespace of the database is used.


## Examples<a name="section3608124119220"></a>

-   Example 1: Create level-2 partitioned tables of various combination types.

    ```
    CREATE TABLE list_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY LIST (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901 VALUES ( '201902' )
      (
        SUBPARTITION p_201901_a VALUES ( '1' ),
        SUBPARTITION p_201901_b VALUES ( '2' )
      ),
      PARTITION p_201902 VALUES ( '201903' )
      (
        SUBPARTITION p_201902_a VALUES ( '1' ),
        SUBPARTITION p_201902_b VALUES ( '2' )
      )
    );
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201902', '2', '1', 1);
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    insert into list_list values('201903', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    select * from list_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (6 rows)
    
    drop table list_list;
    CREATE TABLE list_hash
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY LIST (month_code) SUBPARTITION BY HASH (dept_code)
    (
      PARTITION p_201901 VALUES ( '201902' )
      (
        SUBPARTITION p_201901_a,
        SUBPARTITION p_201901_b
      ),
      PARTITION p_201902 VALUES ( '201903' )
      (
        SUBPARTITION p_201902_a,
        SUBPARTITION p_201902_b
      )
    );
    insert into list_hash values('201902', '1', '1', 1);
    insert into list_hash values('201902', '2', '1', 1);
    insert into list_hash values('201902', '3', '1', 1);
    insert into list_hash values('201903', '4', '1', 1);
    insert into list_hash values('201903', '5', '1', 1);
    insert into list_hash values('201903', '6', '1', 1);
    select * from list_hash;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 4         | 1       |         1
     201903     | 5         | 1       |         1
     201903     | 6         | 1       |         1
     201902     | 2         | 1       |         1
     201902     | 3         | 1       |         1
     201902     | 1         | 1       |         1
    (6 rows)
    
    drop table list_hash;
    CREATE TABLE list_range
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY LIST (month_code) SUBPARTITION BY RANGE (dept_code)
    (
      PARTITION p_201901 VALUES ( '201902' )
      (
        SUBPARTITION p_201901_a values less than ('4'),
        SUBPARTITION p_201901_b values less than ('6')
      ),
      PARTITION p_201902 VALUES ( '201903' )
      (
        SUBPARTITION p_201902_a values less than ('3'),
        SUBPARTITION p_201902_b values less than ('6')
      )
    );
    insert into list_range values('201902', '1', '1', 1);
    insert into list_range values('201902', '2', '1', 1);
    insert into list_range values('201902', '3', '1', 1);
    insert into list_range values('201903', '4', '1', 1);
    insert into list_range values('201903', '5', '1', 1);
    insert into list_range values('201903', '6', '1', 1);
    ERROR:  inserted partition key does not map to any table partition
    select * from list_range;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 4         | 1       |         1
     201903     | 5         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 2         | 1       |         1
     201902     | 3         | 1       |         1
    (5 rows)
    
    drop table list_range;
    CREATE TABLE range_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY RANGE (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901 VALUES LESS THAN( '201903' )
      (
        SUBPARTITION p_201901_a values ('1'),
        SUBPARTITION p_201901_b values ('2')
      ),
      PARTITION p_201902 VALUES LESS THAN( '201904' )
      (
        SUBPARTITION p_201902_a values ('1'),
        SUBPARTITION p_201902_b values ('2')
      )
    );
    insert into range_list values('201902', '1', '1', 1);
    insert into range_list values('201902', '2', '1', 1);
    insert into range_list values('201902', '1', '1', 1);
    insert into range_list values('201903', '2', '1', 1);
    insert into range_list values('201903', '1', '1', 1);
    insert into range_list values('201903', '2', '1', 1);
    select * from range_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
    (6 rows)
    
    drop table range_list;
    CREATE TABLE range_hash
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY RANGE (month_code) SUBPARTITION BY HASH (dept_code)
    (
      PARTITION p_201901 VALUES LESS THAN( '201903' )
      (
        SUBPARTITION p_201901_a,
        SUBPARTITION p_201901_b
      ),
      PARTITION p_201902 VALUES LESS THAN( '201904' )
      (
        SUBPARTITION p_201902_a,
        SUBPARTITION p_201902_b
      )
    );
    insert into range_hash values('201902', '1', '1', 1);
    insert into range_hash values('201902', '2', '1', 1);
    insert into range_hash values('201902', '1', '1', 1);
    insert into range_hash values('201903', '2', '1', 1);
    insert into range_hash values('201903', '1', '1', 1);
    insert into range_hash values('201903', '2', '1', 1);
    select * from range_hash;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
    (6 rows)
    
    drop table range_hash;
    CREATE TABLE range_range
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY RANGE (month_code) SUBPARTITION BY RANGE (dept_code)
    (
      PARTITION p_201901 VALUES LESS THAN( '201903' )
      (
        SUBPARTITION p_201901_a VALUES LESS THAN( '2' ),
        SUBPARTITION p_201901_b VALUES LESS THAN( '3' )
      ),
      PARTITION p_201902 VALUES LESS THAN( '201904' )
      (
        SUBPARTITION p_201902_a VALUES LESS THAN( '2' ),
        SUBPARTITION p_201902_b VALUES LESS THAN( '3' )
      )
    );
    insert into range_range values('201902', '1', '1', 1);
    insert into range_range values('201902', '2', '1', 1);
    insert into range_range values('201902', '1', '1', 1);
    insert into range_range values('201903', '2', '1', 1);
    insert into range_range values('201903', '1', '1', 1);
    insert into range_range values('201903', '2', '1', 1);
    select * from range_range;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
    (6 rows)
    
    drop table range_range;
    CREATE TABLE hash_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY hash (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901
      (
        SUBPARTITION p_201901_a VALUES ( '1' ),
        SUBPARTITION p_201901_b VALUES ( '2' )
      ),
      PARTITION p_201902
      (
        SUBPARTITION p_201902_a VALUES ( '1' ),
        SUBPARTITION p_201902_b VALUES ( '2' )
      )
    );
    insert into hash_list values('201901', '1', '1', 1);
    insert into hash_list values('201901', '2', '1', 1);
    insert into hash_list values('201901', '1', '1', 1);
    insert into hash_list values('201903', '2', '1', 1);
    insert into hash_list values('201903', '1', '1', 1);
    insert into hash_list values('201903', '2', '1', 1);
    select * from hash_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201901     | 2         | 1       |         1
     201901     | 1         | 1       |         1
     201901     | 1         | 1       |         1
    (6 rows)
    
    drop table hash_list;
    CREATE TABLE hash_hash
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY hash (month_code) SUBPARTITION BY hash (dept_code)
    (
      PARTITION p_201901
      (
        SUBPARTITION p_201901_a,
        SUBPARTITION p_201901_b
      ),
      PARTITION p_201902
      (
        SUBPARTITION p_201902_a,
        SUBPARTITION p_201902_b
      )
    );
    insert into hash_hash values('201901', '1', '1', 1);
    insert into hash_hash values('201901', '2', '1', 1);
    insert into hash_hash values('201901', '1', '1', 1);
    insert into hash_hash values('201903', '2', '1', 1);
    insert into hash_hash values('201903', '1', '1', 1);
    insert into hash_hash values('201903', '2', '1', 1);
    select * from hash_hash;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201901     | 2         | 1       |         1
     201901     | 1         | 1       |         1
     201901     | 1         | 1       |         1
    (6 rows)
    
    drop table hash_hash;
    CREATE TABLE hash_range
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY hash (month_code) SUBPARTITION BY range (dept_code)
    (
      PARTITION p_201901
      (
        SUBPARTITION p_201901_a VALUES LESS THAN ( '2' ),
        SUBPARTITION p_201901_b VALUES LESS THAN ( '3' )
      ),
      PARTITION p_201902
      (
        SUBPARTITION p_201902_a VALUES LESS THAN ( '2' ),
        SUBPARTITION p_201902_b VALUES LESS THAN ( '3' )
      )
    );
    insert into hash_range values('201901', '1', '1', 1);
    insert into hash_range values('201901', '2', '1', 1);
    insert into hash_range values('201901', '1', '1', 1);
    insert into hash_range values('201903', '2', '1', 1);
    insert into hash_range values('201903', '1', '1', 1);
    insert into hash_range values('201903', '2', '1', 1);
    select * from hash_range;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 1         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201901     | 1         | 1       |         1
     201901     | 1         | 1       |         1
     201901     | 2         | 1       |         1
    (6 rows)
    ```

-   Example 2: Truncate a level-2 partitioned table.

    ```
    CREATE TABLE list_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY LIST (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901 VALUES ( '201902' )
      (
        SUBPARTITION p_201901_a VALUES ( '1' ),
        SUBPARTITION p_201901_b VALUES ( default )
      ),
      PARTITION p_201902 VALUES ( '201903' )
      (
        SUBPARTITION p_201902_a VALUES ( '1' ),
        SUBPARTITION p_201902_b VALUES ( '2' )
      )
    );
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201902', '2', '1', 1);
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    insert into list_list values('201903', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    select * from list_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (6 rows)
    
    select * from list_list partition (p_201901);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (3 rows)
    
    alter table list_list truncate partition p_201901;
    select * from list_list partition (p_201901);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list partition (p_201902);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
    (3 rows)
    
    alter table list_list truncate partition p_201902;
    select * from list_list partition (p_201902);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201902', '2', '1', 1);
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    insert into list_list values('201903', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    select * from list_list subpartition (p_201901_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (2 rows)
    
    alter table list_list truncate subpartition p_201901_a;
    select * from list_list subpartition (p_201901_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list subpartition (p_201901_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
    (1 row)
    
    alter table list_list truncate subpartition p_201901_b;
    select * from list_list subpartition (p_201901_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list subpartition (p_201902_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 1         | 1       |         1
    (1 row)
    
    alter table list_list truncate subpartition p_201902_a;
    select * from list_list subpartition (p_201902_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list subpartition (p_201902_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
    (2 rows)
    
    alter table list_list truncate subpartition p_201902_b;
    select * from list_list subpartition (p_201902_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    drop table list_list;
    
    ```


-   Example 3: Split a level-2 partitioned table.

    ```
    CREATE TABLE list_list
    (
        month_code VARCHAR2 ( 30 ) NOT NULL ,
        dept_code  VARCHAR2 ( 30 ) NOT NULL ,
        user_no    VARCHAR2 ( 30 ) NOT NULL ,
        sales_amt  int
    )
    PARTITION BY LIST (month_code) SUBPARTITION BY LIST (dept_code)
    (
      PARTITION p_201901 VALUES ( '201902' )
      (
        SUBPARTITION p_201901_a VALUES ( '1' ),
        SUBPARTITION p_201901_b VALUES ( default )
      ),
      PARTITION p_201902 VALUES ( '201903' )
      (
        SUBPARTITION p_201902_a VALUES ( '1' ),
        SUBPARTITION p_201902_b VALUES ( default )
      )
    );
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201902', '2', '1', 1);
    insert into list_list values('201902', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    insert into list_list values('201903', '1', '1', 1);
    insert into list_list values('201903', '2', '1', 1);
    select * from list_list;
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
     201903     | 1         | 1       |         1
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (6 rows)
    
    select * from list_list subpartition (p_201901_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (2 rows)
    
    select * from list_list subpartition (p_201901_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
    (1 row)
    
    alter table list_list split subpartition p_201901_b values (2) into
    (
     subpartition p_201901_b,
     subpartition p_201901_c
    );
    select * from list_list subpartition (p_201901_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (2 rows)
    
    select * from list_list subpartition (p_201901_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
    (1 row)
    
    select * from list_list subpartition (p_201901_c);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list partition (p_201901);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201902     | 2         | 1       |         1
     201902     | 1         | 1       |         1
     201902     | 1         | 1       |         1
    (3 rows)
    
    select * from list_list subpartition (p_201902_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 1         | 1       |         1
    (1 row)
    
    select * from list_list subpartition (p_201902_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
    (2 rows)
    
    alter table list_list split subpartition p_201902_b values (3) into
    (
     subpartition p_201902_b,
     subpartition p_201902_c
    );
    select * from list_list subpartition (p_201902_a);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 1         | 1       |         1
    (1 row)
    
    select * from list_list subpartition (p_201902_b);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
    (0 rows)
    
    select * from list_list subpartition (p_201902_c);
     month_code | dept_code | user_no | sales_amt 
    ------------+-----------+---------+-----------
     201903     | 2         | 1       |         1
     201903     | 2         | 1       |         1
    (2 rows)
    
    drop table list_list;
    ```


