# ALTER TABLE<a name="EN-US_TOPIC_0289899912"></a>

## Function<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

**ALTER TABLE**  modifies tables, including modifying table definitions, renaming tables, renaming specified columns in tables, renaming table constraints, setting table schemas,  enabling or disabling row-level security policies, and adding or updating multiple columns.

## Precautions<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

-   The owner of a table, users granted with the  **ALTER**  permission on the table, or users granted with the  **ALTER ANY TABLE**  permission can run the  **ALTER TABLE**  statement. The system administrator has the permission to run the command by default. To modify the owner or schema of a table, you must be the table owner or system administrator and a member of the new owner role.
-   The tablespace of a partitioned table cannot be modified, but the tablespace of the partition can be modified.
-   The storage parameter  **ORIENTATION**  cannot be modified.
-   Currently,  **SET SCHEMA**  can only set schemas to user schemas. It cannot set a schema to a system internal schema.
-   Column-store tables support only the  **PARTIAL CLUSTER KEY**,  **UNIQUE**, and  **PRIMARY KEY**  table-level constraints, but do not support foreign key table-level constraints.
-   In a column-store table, you can perform  **ADD COLUMN**,  **ALTER TYPE**,  **SET STATISTICS**,  **DROP COLUMN**  operations, and change table name and space. The types of new and modified columns should be the  [Data Types](data-types.md)  supported by column-store. The  **USING**  option of  **ALTER TYPE**  only supports constant expression and expression involved in the column.
-   The column constraints supported by column-store tables include  **NULL**,  **NOT NULL**,  **DEFAULT**  constant values,  **UNIQUE**, and  **PRIMARY KEY**. Only the  **DEFAULT**  value can be modified \(by using  **SET DEFAULT**  and  **DROP DEFAULT**\). Currently,  **NULL**  and  **NOT NULL**  constraints cannot be modified.

-   Auto-increment columns cannot be added, or a column whose  **DEFAULT**  value contains the  **nextval\(\)**  expression cannot be added.
-   Row-access control cannot be enabled for foreign tables and temporary tables.
-   When you delete a  **PRIMARY KEY**  constraint by constraint name, the  **NOT NULL**  constraint is not deleted. If necessary, manually delete the  **NOT NULL**  constraint.
-   When JDBC is used, the  **DEFAULT**  value can be set through  **PrepareStatement**.

## Syntax<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s58bdce220c9f4292ba9af919b04ad25c"></a>

-   Modify the definition of a table.

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name ) }
        action [, ... ];
    ```

    There are several clauses of  **action**:

    ```
    column_clause
        | ADD table_constraint [ NOT VALID ]
        | ADD table_constraint_using_index
        | VALIDATE CONSTRAINT constraint_name
        | DROP CONSTRAINT [ IF EXISTS ]  constraint_name [ RESTRICT | CASCADE ]
        | CLUSTER ON index_name
        | SET WITHOUT CLUSTER
        | SET ( {storage_parameter = value} [, ... ] )
        | RESET ( storage_parameter [, ... ] )
        | OWNER TO new_owner
        | SET TABLESPACE new_tablespace
        | SET {COMPRESS|NOCOMPRESS}
        | TO { GROUP groupname | NODE ( nodename [, ... ] ) }
        | ADD NODE ( nodename [, ... ] )
        | DELETE NODE ( nodename [, ... ] )
        | DISABLE TRIGGER [ trigger_name | ALL | USER ]
        | ENABLE TRIGGER [ trigger_name | ALL | USER ]
        | ENABLE REPLICA TRIGGER trigger_name
        | ENABLE ALWAYS TRIGGER trigger_name
        | DISABLE/ENABLE [ REPLICA | ALWAYS ] RULE
        | DISABLE ROW LEVEL SECURITY
        | ENABLE ROW LEVEL SECURITY
        | FORCE ROW LEVEL SECURITY
        | NO FORCE ROW LEVEL SECURITY
        | ENCRYPTION KEY ROTATION
        | SET WITH OIDS
        | SET WITHOUT OIDS
        | INHERIT parents
        | NO INHERIT parents
        | OF type_name
        | NOT OF
        | REPLICA IDENTITY { DEFAULT | USING INDEX index_name | FULL | NOTHING }
        | AUTO_INCREMENT [ = ] value
        | COMMENT {=| } 'text'
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   **ADD table\_constraint \[ NOT VALID \]**
    >    Adds a table constraint.
    >-   **ADD table\_constraint\_using\_index**
    >    Adds a primary key constraint or unique constraint to a table based on the existing unique index.
    >-   **VALIDATE CONSTRAINT constraint\_name**
    >    Validates a check-class constraint created with the  **NOT VALID**  option, and scans the entire table to ensure that all rows meet the constraint. Nothing happens if the constraint is already marked valid.
    >-   **DROP CONSTRAINT \[ IF EXISTS \]  constraint\_name \[ RESTRICT | CASCADE \]**
    >    Deletes a table constraint.
    >-   **CLUSTER ON index\_name**
    >    Selects the default index for future CLUSTER operations. Actually, the table is not re-clustered.
    >-   **SET WITHOUT CLUSTER**
    >    Deletes the most recently used  **CLUSTER**  index from the table. This affects future  **CLUSTER**  operations that do not specify an index.
    >-   **SET \( \{storage\_parameter = value\} \[, ... \] \)**
    >    Changes one or more storage parameters for the table.
    >-   **RESET \( storage\_parameter \[, ... \] \)**
    >    Resets one or more storage parameters to their defaults. As with  **SET**, a table rewrite might be needed to update the table entirely.
    >-   **OWNER TO new\_owner**
    >    Changes the owner of a table, sequence, or view to the specified user.
    >-   **SET TABLESPACE new\_tablespace**
    >    Changes the table's tablespace to the specified tablespace and moves the data files associated with the table to the new tablespace. Indexes on the table, if any, are not moved; but they can be moved separately with additional  **SET TABLESPACE**  option in  **ALTER INDEX**.
    >-   **SET \{COMPRESS|NOCOMPRESS\}**
    >    Sets the compression feature of a table. The table compression feature affects only the storage mode of data inserted in a batch subsequently and does not affect storage of existing data. Setting the table compression feature will result in the fact that there are both compressed and uncompressed data in the table. Row-store tables do not support compression.
    >-   **TO \{ GROUP groupname | NODE \( nodename \[, ... \] \) \}**
    >    The syntax is only available in extended mode \(when GUC parameter  **support\_extended\_features**  is  **on**\). Exercise caution when enabling the mode. It is mainly used for tools like internal dilatation tools. Common users should not use the mode.
    >-   **ADD NODE \( nodename \[, ... \] \)**
    >    It is only available for internal scale-out tools. Common users should not use the syntax.
    >-   **DELETE NODE \( nodename \[, ... \] \)**
    >    It is only available for internal scale-in tools. Common users should not use the syntax.
    >-   **DISABLE TRIGGER \[ trigger\_name | ALL | USER \]**
    >    Disables a single trigger specified by  **trigger\_name**, disables all triggers, or disables only user triggers \(excluding internally generated constraint triggers, for example, deferrable unique constraint triggers and exclusion constraints triggers\).
    >    Exercise caution when using this function because data integrity cannot be ensured as expected if the triggers are not executed.
    >-   **| ENABLE TRIGGER \[ trigger\_name | ALL | USER \]**
    >    Enables a single trigger specified by  **trigger\_name**, enables all triggers, or enables only user triggers.
    >-   **| ENABLE REPLICA TRIGGER trigger\_name**
    >    Determines that the trigger firing mechanism is affected by the configuration variable  [session\_replication\_role](en-us_topic_0289900775.md#en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_sffbd1c48d86b4c3fa3287167a7810216). When the replication role is  **origin**  \(default value\) or  **local**, a simple trigger is fired.
    >    When  **ENABLE REPLICA**  is configured for a trigger, it is fired only when the session is in replica mode.
    >-   **| ENABLE ALWAYS TRIGGER trigger\_name**
    >    Determines that all triggers are fired regardless of the current replication mode.
    >-   **| DISABLE/ENABLE \[ REPLICA | ALWAYS \] RULE**
    >    Enables or disables a rule for tables. Disabled rules are still visible in the system, but are not applied during query rewriting. The  **ON SELECT**  rule cannot be disabled because it is related to the view implementation. Rules configured as  **ENABLE REPLICA**  are enabled only when the session is in replica mode, while those configured as  **ENABLE ALWAYS**  can be enabled regardless of the replica mode. Rule triggering is also affected by configuration variables in  [session\_replication\_role](en-us_topic_0289900775.md#en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_sffbd1c48d86b4c3fa3287167a7810216), which is similar to the preceding trigger setting.
    >-   **| DISABLE/ENABLE ROW LEVEL SECURITY**
    >    Enables or disables row-level access control for a table.
    >    If row-level access control is enabled for a data table but no row-level access control policy is defined, the row-level access to the data table is not affected. If row-level access control for a table is disabled, the row-level access to the table is not affected even if a row-level access control policy has been defined. For details, see  [CREATE ROW LEVEL SECURITY POLICY](create-row-level-security-policy.md).
    >-   **| NO FORCE/FORCE ROW LEVEL SECURITY**
    >    Forcibly enables or disables row-level access control for a table.
    >    By default, the table owner is not affected by the row-level access control feature. However, if row-level access control is forcibly enabled, the table owner \(excluding system administrators\) will be affected. System administrators are not affected by any row-level access control policies.
    - **| REPLICA IDENTITY {DEFAULT | USING INDEX index_name | FULL | NOTHING}** 
  Adjusts the amount of information written to WALs during logical replication. This option is valid only when **wal_level** is set to **logical**. When the original data table is updated, the default logical replication flow contains only the historical records of the primary key. If you need to output the historical records of column update or delete operations, you can modify this parameter. **DEFAULT** (not the default value in the system catalog) records the old value of the primary key column. **USING INDEX** records the old values of the columns contained in the **index_name** index. All columns of the index must be **NOT NULL**. **FULL** records the old values of all columns. **NOTHING** (default value in the system catalog) does not record information about old values.
    >-   **SET WITH OIDS**
    >    Adds an OID system column to a data table. If the OID already exists in the table, the syntax does not change anything.
    >-   **SET WITHOUT OIDS**
    >    Deletes an OID system column from a data table. If there is no OID in the table, the syntax does not change anything.
    >-   **INHERIT parent\_table**
    >    Adds the target data table to a specified parent data table as a new child data table. After that, the query for the parent data table will contain the data in the target data table. Before being added as a child data table, the target data table must contain all the columns in the parent data table. These columns must have matching data categories, and if they have NOT NULL constraints in the parent data table, they must also have NOT NULL constraints in the child data table. For all CHECK constraints in the parent data table, there must be corresponding constraints in the child data table, unless the parent data table is marked as non-inheritable.
    >-   **NO INHERIT parent\_table**
    >    Generates the target data table from the child data table of a specified parent data table. Queries for the parent data table will no longer contain records generated from the target data table.
    >-   **OF type\_name**
    >    Joins a table to a composite type, which is similar to table creation by using the  **CREATE TABLE OF**  option. The name and type of a table column must exactly match those defined in the composite type, but the OID system column can be different. The table cannot be inherited from any other table. These restrictions ensure that the  **CREATE TABLE OF**  option allows the same table definition.
    >-   **NOT OF**
    >    Removes the association between a table and a type.
    >-   **REPLICA IDENTITY \{ DEFAULT | USING INDEX index\_name | FULL | NOTHING \}**
    >    **DEFAULT**  records the old value of the primary key column.  **USING INDEX**  records the old values of columns covered by the named indexes. These values must be unique, non-local, and non-deferrable, and contain the values of columns marked  **NOT NULL**.  **FULL**  records the old values of all columns in the row.  **NOTHING**  does not record information in old rows. In all cases, no old values are recorded unless at least one of the columns to be recorded in the new and old rows is different.
    >-   **COMMENT 'text'**
    >    Comment a table object.


    -   There are several clauses of  **column\_clause**:

        ```
        ADD [ COLUMN ] column_name data_type [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ]   
        | MODIFY column_name data_type [ ON UPDATE update_expr ]   
        | MODIFY [ COLUMN ] column_name [ COMMENT 'text']    
        | MODIFY column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ]
        | MODIFY column_name [ CONSTRAINT constraint_name ] NULL
        | DROP [ COLUMN ] [ IF EXISTS ] column_name [ RESTRICT | CASCADE ]    
        | ALTER [ COLUMN ] column_name [ SET DATA ] TYPE data_type [ COLLATE collation ] [ USING expression ]    
        | ALTER [ COLUMN ] column_name { SET DEFAULT expression | DROP DEFAULT }    
        | ALTER [ COLUMN ] column_name { SET | DROP } NOT NULL    
        | ALTER [ COLUMN ] column_name SET STATISTICS [PERCENT] integer    
        | ADD STATISTICS (( column_1_name, column_2_name [, ...] ))    
        | DELETE STATISTICS (( column_1_name, column_2_name [, ...] ))    
        | ALTER [ COLUMN ] column_name SET ( {attribute_option = value} [, ... ] )    
        | ALTER [ COLUMN ] column_name RESET ( attribute_option [, ... ] )    
        | ALTER [ COLUMN ] column_name SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   **ADD \[ COLUMN \] column\_name data\_type \[ compress\_mode \] \[ COLLATE collation \] \[ column\_constraint \[ ... \] \]  \[ COMMENT {=| } 'text'\]**
        >    Adds a column to a table. If a column is added with  **ADD COLUMN**, all existing rows in the table are initialized with the column's default value \(**NULL**  if no  **DEFAULT**  clause is specified\).
        >-   **ADD \( \{ column\_name data\_type \[ compress\_mode \]  \[ COMMENT {=| } 'text'\] \} \[, ...\] \)**
        >    Adds columns in the table.
        >-   **MODIFY \[ COLUMN \] column\_name \[ COMMENT {=| } 'text'\]**
        >    Comments a column.
        >-   **MODIFY \( \{ column\_name data\_type | column\_name \[ CONSTRAINT constraint\_name \] NOT NULL \[ ENABLE \] | column\_name \[ CONSTRAINT constraint\_name \] NULL \} \[, ...\] \)**
        >    Modifies the data type of an existing column in the table.
        >-   **DROP \[ COLUMN \] \[ IF EXISTS \] column\_name \[ RESTRICT | CASCADE \]**
        >    Drops a column from a table. Indexes and constraints related to the column are automatically dropped. If an object not belonging to the table depends on the column,  **CASCADE**  must be specified, such as a view.
        >    The  **DROP COLUMN**  statement does not physically remove the column, but simply makes it invisible to SQL operations. Subsequent  **INSERT**  and  **UPDATE**  operations in the table will store a  **NULL**  value for the column. Therefore, column deletion takes a short period of time but does not immediately release the tablespace on the disks, because the space occupied by the deleted column is not recycled. The space will be recycled when  **VACUUM**  is executed.
        >-   **ALTER \[ COLUMN \] column\_name \[ SET DATA \] TYPE data\_type \[ COLLATE collation \] \[ USING expression \]**
        >    Modifies the type of a column in a table. Indexes and simple table constraints on the column will automatically use the new data type by reparsing the originally supplied expression.
        >    **ALTER TYPE**  requires an entire table be rewritten. This is an advantage sometimes, because it frees up unnecessary space from a table. For example, to recycle the space occupied by a deleted column, the fastest method is to use the following statement.
        >    ```
        >    ALTER TABLE table ALTER COLUMN anycol TYPE anytype;
        >    ```
        >    In this statement,  **anycol**  indicates any column existing in the table and  **anytype**  indicates the type of the prototype of the column.  **ALTER TYPE**  does not change the table except that the table is forcibly rewritten. In this way, the data that is no longer used is deleted.
        >-   **ALTER \[ COLUMN \] column\_name \{ SET DEFAULT expression | DROP DEFAULT \}**
        >    Sets or removes the default value for a column. The default values only apply to subsequent  **INSERT**  operations; they do not cause rows already in the table to change. Defaults can also be created for views, in which case they are inserted into  **INSERT**  statements on the view before the view's  **ON INSERT**  rule is applied.
        >-   **ALTER \[ COLUMN \] column\_name \{ SET | DROP \} NOT NULL**
        >    Changes whether a column is marked to allow null values or to reject null values. You can only use  **SET NOT NULL**  when the column contains no null values.
        >-   **ALTER \[ COLUMN \] column\_name SET STATISTICS \[PERCENT\] integer**
        >    Specifies the per-column statistics-gathering target for subsequent  **ANALYZE**  operations. The target can be set in the range from 0 to 10000. Set it to  **–1**  to revert to using the default system statistics target.
        >-   **\{ADD | DELETE\} STATISTICS \(\(column\_1\_name, column\_2\_name \[, ...\]\)\)**
        >    Adds or deletes the declaration of collecting multi-column statistics to collect multi-column statistics as needed when  **ANALYZE**  is performed for a table or a database. If the GUC parameter **enable\_functional\_dependency** is disabled, the statistics about a maximum of 32 columns can be collected at a time. If the GUC parameter **enable\_functional\_dependency** is enabled, the statistics about a maximum of 4 columns can be collected at a time. You are not allowed to add or delete such declaration for system catalogs or foreign tables.
        >-   **ALTER \[ COLUMN \] column\_name SET \( \{attribute\_option = value\} \[, ... \] \)**
        >    **ALTER \[ COLUMN \] column\_name RESET \( attribute\_option \[, ... \] \)**
        >    Sets or resets per-attribute options.
        >    Currently, the only defined per-attribute options are  **n\_distinct**  and  **n\_distinct\_inherited**.  **n\_distinct**  affects statistics of a table, while  **n\_distinct\_inherited**  affects the statistics of the table and its subtables. Currently, only  **SET/RESET n\_distinct**  is supported, and  **SET/RESET n\_distinct\_inherited**  is forbidden.
        >-   **ALTER \[ COLUMN \] column\_name SET STORAGE \{ PLAIN | EXTERNAL | EXTENDED | MAIN \}**
        >    Sets the storage mode for a column. This clause specifies whether this column is held inline or in a secondary TOAST table, and whether the data should be compressed. It is set only for row-store tables and is invalid for column-store tables. If it is set for column-store tables, an error will be displayed when the statement is executed.  **SET STORAGE**  itself does not change anything in the table. It sets the strategy to be pursued during future table updates.

        -   **column\_constraint**  is as follows:

            ```
            [ CONSTRAINT constraint_name ]
                { NOT NULL |
                  NULL |
                  CHECK ( expression ) |
                  DEFAULT default_expr  |
                  UNIQUE index_parameters |
                  PRIMARY KEY index_parameters |
                  ENCRYPTED WITH ( COLUMN_ENCRYPTION_KEY = column_encryption_key, ENCRYPTION_TYPE = encryption_type_value ) |                                                                                  
                  REFERENCES reftable [ ( refcolumn ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
                      [ ON DELETE action ] [ ON UPDATE action ] }    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
            ```

        -   **compress\_mode**  of a column is as follows:

            ```
            [ DELTA | PREFIX | DICTIONARY | NUMSTR | NOCOMPRESS ]
            ```


    -   **table\_constraint\_using\_index**  used to add the primary key constraint or unique constraint based on the unique index is as follows:

        ```
        [ CONSTRAINT constraint_name ]
            { UNIQUE | PRIMARY KEY } USING INDEX index_name
            [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
            [ COMMENT 'text' ]
        ```

    -   **table\_constraint**  is as follows:

        ```
        [ CONSTRAINT [ constraint_name ] ]
            { CHECK ( expression ) |
              UUNIQUE [ idx_name ][ USING method ] ( { { column_name | ( expression ) } [ ASC | DESC ] } [, ... ] ) index_parameters |
          PRIMARY KEY [ USING method ] ( { column_name [ ASC | DESC ] }[, ... ] ) index_parameters |
              PARTIAL CLUSTER KEY ( column_name [, ... ]  }
              FOREIGN KEY [ idx_name ] ( column_name [, ... ] ) REFERENCES reftable [ ( refcolumn [, ... ] ) ]
              [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] }
            [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
        ```

        **index\_parameters**  is as follows:

        ```
        [ WITH ( {storage_parameter = value} [, ... ] ) ]
            [ USING INDEX TABLESPACE tablespace_name ]
        ```



-   Rename a table. The renaming does not affect stored data.

    ```
    ALTER TABLE [ IF EXISTS ] table_name 
        RENAME TO new_table_name;
    ```

-   Rename the specified column in the table.

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name )}
        RENAME [ COLUMN ] column_name TO new_column_name;
    ```

-   Rename the constraint of the table.

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name ) }
        RENAME CONSTRAINT constraint_name TO new_constraint_name;
    ```

-   Set the schema of the table.

    ```
    ALTER TABLE [ IF EXISTS ] table_name 
        SET SCHEMA new_schema;
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   The schema setting moves the table into another schema. Associated indexes and constraints owned by table columns are migrated as well. Currently, the schema for sequences cannot be changed. If the table has sequences, delete the sequences, and create them again or delete the ownership between the table and sequences. In this way, the table schema can be changed.
    >-   To change the schema of a table, you must also have the  **CREATE**  permission on the new schema. To add the table as a new child of a parent table, you must own the parent table as well. To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have the  **CREATE**  permission on the table's schema. These restrictions enforce that the user can only recreate and delete the table. However, a system administrator can alter the ownership of any table anyway.
    >-   All the actions except for  **RENAME**  and  **SET SCHEMA**  can be combined into a list of multiple alterations to apply in parallel. For example, it is possible to add several columns or alter the type of several columns in a single statement. This is useful with large tables, since only one pass over the tables need be made.
    >-   Adding a  **CHECK**  or  **NOT NULL**  constraint will scan the table to validate that existing rows meet the constraint.
    >-   Adding a column with a non-**NULL**  default or changing the type of an existing column will rewrite the entire table. Rewriting a large table may take much time and temporarily needs doubled disk space.

-   Add columns.

    ```
    ALTER TABLE [ IF EXISTS ] table_name
        ADD ( { column_name data_type [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ]} [, ...] );
    ```

-   Update columns.

    ```
    ALTER TABLE [ IF EXISTS ] table_name 
        MODIFY ( { column_name data_type [ ON UPDATE update_expr ]| column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ] | column_name [ CONSTRAINT constraint_name ] NULL } [, ...] );
    ```


## Parameter Description<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_sf4962205ddf84312a5fd888bc662e5cf"></a>

-   **IF EXISTS**

    Sends a notice instead of an error if no tables have identical names. The notice prompts that the table you are querying does not exist.

-   **table\_name  \[\*\] | ONLY table\_name | ONLY \( table\_name  \)**

    **table\_name**  is the name of the table that you need to modify.

    If  **ONLY**  is specified, only the table is modified. If  **ONLY**  is not specified, the table and all subtables are modified. You can add the asterisk \(\*\) option following the table name to specify that all subtables are scanned, which is the default operation.

-   **constraint\_name**

    -   Specifies the name of an existing constraint to drop in the DROP CONSTRAINT operation.
    -   Specifies the name of a new constraint in the ADD CONSTRAINT operation.

        >![](public_sys-resources/icon-notice.gif) **NOTICE:**
        >For a new constraint, constraint\_name is optional in B-compatible mode (**sql\_compatibility = 'B'**). For other modes, constraint\_name must be added.

-   **index\_name**

    Specifies the name of an index.
        
    >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >In the ADD CONSTRAINT operation:
    >-   index\_name is supported only in B-compatible databases (that is, sql\_compatibility = 'B').
    >-   For foreign key constraints, if constraint\_name and index\_name are specified at the same time, constraint\_name is used as the index name.
    >-   For a unique key constraint, if both constraint\_name and index\_name are specified, index\_name is used as the index name.

-   **USING method**

    Specifies the name of the index method to be used.

    For details about the value range, see [USING method](create-index.md).

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >In the ADD CONSTRAINT operation:
    >-   The USING method is supported only in B-compatible databases (that is, sql\_compatibility = 'B').
    >-   In B-compatible mode, if USING method is not specified, the default index method is btree for ASTORE or ubtree for USTORE.

-   **ASC | DESC**

    **ASC** specifies an ascending (default) sort order. **DESC** specifies a descending sort order.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >In ADD CONSTRAINT, ASC|DESC is supported only in B-compatible databases (sql\_compatibility = 'B').

-   **expression**

    Specifies an expression index constraint created based on one or more columns of the table. The expression index must be written with surrounding parentheses.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >Expression indexes are supported only in B-compatible databases (that is, sql\_compatibility = 'B').
    
-   **storage\_parameter**

    Specifies the name of a storage parameter.

    The following option is added for creating an index:

    -   parallel\_workers \(int type\)

        Value range: \[0,32\]. The value  **0**  indicates that concurrency is disabled.

        Number of bgworker threads started when an index is created. For example,  **2**  indicates that two bgworker threads are started to create indexes concurrently.

        If this parameter is not set, the number of started bgworker threads is related to the table size. Generally, the number of started bgworker threads does not exceed four.

    -   hasuids \(Boolean type\)

        Default value:  **off**

        If this parameter is set to  **on**, a unique table-level ID is allocated to a tuple when the tuple is updated.


-   **new\_owner**

    Specifies the name of the new table owner.

-   **new\_tablespace**

    Specifies the new name of the tablespace to which the table belongs.

-   column\_name, column\_1\_name, column\_2\_name

    Specifies the name of a new or existing column.

-   **data\_type**

    Specifies the type of a new column or a new type of an existing column.

-   **compress\_mode**

    Compression option of a table field. The clause specifies the compression algorithm preferentially used by the column. Row-store tables do not support compression.

-   **collation**

    Specifies the collation rule name of a column. The optional  **COLLATE**  clause specifies a collation for the new column; if omitted, the collation is the default for the new column. You can run the  **select \* from pg\_collation;**  command to query collation rules from the  **pg\_collation**  system catalog. The default collation rule is the row starting with  **default**  in the query result.

-   **USING expression**

    Specifies how to compute the new column value from the old; if omitted, the default conversion is an assignment cast from old data type to new. A  **USING**  clause must be provided if there is no implicit or assignment cast from the old to new type.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >**USING**  in  **ALTER TYPE**  can specify any expression involving the old values of the row; that is, it can refer to any columns other than the one being cast. This allows general casting to be done with the  **ALTER TYPE**  syntax. Because of this flexibility, the  **USING**  expression is not applied to the column's default value \(if any\); the result might not be a constant expression as required for a default. This means that when there is no implicit or assignment cast from old to new type,  **ALTER TYPE**  might fail to convert the default even though a  **USING**  clause is supplied. In such cases, drop the default with  **DROP DEFAULT**, perform the  **ALTER TYPE**, and then use  **SET DEFAULT**  to add a suitable new default. Similar considerations apply to indexes and constraints involving the column.

-   **NOT NULL | NULL**

    Sets whether the column allows null values.

-   **integer**

    Specifies the constant value of a signed integer. When using  **PERCENT**, the range of  **integer**  is from 0 to 100.

-   **attribute\_option**

    Specifies an attribute option.

-   **PLAIN | EXTERNAL | EXTENDED | MAIN**

    Specifies a column-store mode.

    -   **PLAIN**  must be used for fixed-length values \(such as integers\). It must be inline and uncompressed.
    -   **MAIN**  is for inline, compressible data.
    -   **EXTERNAL**  is for external, uncompressed data. Use of  **EXTERNAL**  will make substring operations on  **text**  and  **bytea**  values run faster, at the penalty of increased storage space.
    -   **EXTENDED**  is for external, compressed data.  **EXTENDED**  is the default for most data types that support non-**PLAIN**  storage.

-   **CHECK \( expression \)**

    New rows or rows to be updated must satisfy for an expression to be true. If any row produces a false result, an error is raised and the database is not modified.

    A check constraint specified as a column constraint should reference only the column's values, while an expression in a table constraint can reference multiple columns.

    Currently,  **CHECK \( expression \)**  does not include subqueries and cannot use variables apart from the current column.

-   **DEFAULT default\_expr**

    Assigns a default data value for a column. 

    The data type of the default expression must match the data type of the column.

    The default expression will be used in any insert operation that does not specify a value for the column. If there is no default value for a column, then the default value is null.

-   **UNIQUE index\_parameters**

    **UNIQUE \( column\_name \[, ... \] \) index\_parameters**

    Specifies that a group of one or more columns of a table can contain only unique values.

-   **PRIMARY KEY index\_parameters**

    **PRIMARY KEY \( column\_name \[, ... \] \) index\_parameters**

    Specifies that a column or columns of a table can contain only unique \(non-duplicate\) and non-null values.

-   **REFERENCES reftable \[ \( refcolum \) \] \[ MATCH matchtype \] \[ ON DELETE action \] \[ ON UPDATE action \] \(column constraint\)**

    **FOREIGN KEY \( column\_name \[, ... \] \) REFERENCES reftable \[ \( refcolumn \[, ... \] \) \] \[ MATCH matchtype \] \[ ON DELETE action \] \[ ON UPDATE action \] \(table constraint\)**

    The foreign key constraint requires that the group consisting of one or more columns in the new table should contain and match only the referenced column values in the referenced table. If  **refcolum**  is omitted, the primary key of  **reftable**  is used. The referenced column should be the only column or primary key in the referenced table. A foreign key constraint cannot be defined between a temporary table and a permanent table.

    There are three types of matching between a reference column and a referenced column:

    -   **MATCH FULL**: A column with multiple foreign keys cannot be  **NULL**  unless all foreign key columns are  **NULL**.
    -   **MATCH SIMPLE**  \(default\): Any unexpected foreign key column can be  **NULL**.
    -   **MATCH PARTIAL**: This option is not supported currently.

    In addition, when you perform certain operations on the data in the referenced table, the operations are performed on the corresponding columns in the new table.  **ON DELETE**: specifies the operations to be executed after a referenced row in the referenced table is deleted.  **ON UPDATE**: specifies the operation to be performed when the referenced column data in the referenced table is updated. The possible actions of the  **ON DELETE**  and  **ON UPDATE**  clauses are as follows:

    -   **NO ACTION**  \(default\): When a foreign key is deleted or updated, an error indicating that the foreign key constraint is violated is created. If the constraint is deferrable and there are still any referenced rows, this error will occur when the constraint is checked.
    -   **RESTRICT**: When a foreign key is deleted or updated, an error indicating that the foreign key constraint is violated is created. It is the same as  **NO ACTION**  except that the action cannot be delayed.
    -   **CASCADE**: deletes any row that references the deleted row from the new table, or update the field value of the referenced row in the new table to the new value of the referenced column.
    -   **SET NULL**: sets the referenced field to  **NULL**.
    -   **SET DEFAULT**: sets referenced fields to their default values.

-   **DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE**

    Sets whether the constraint can be deferrable.

    -   **DEFERRABLE**: deferrable to the end of the transaction and checked using  **SET CONSTRAINTS**.
    -   **NOT DEFERRABLE**: checks immediately after the execution of each command.
    -   **INITIALLY IMMEDIATE**: checks immediately after the execution of each statement.
    -   **INITIALLY DEFERRED**: checks when the transaction ends.

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >Ustore tables do not support the  **DEFERRABLE**  and  **INITIALLY DEFERRED**  constraints.


-   **PARTIAL CLUSTER KEY**

    Specifies a partial cluster key for storage. When importing data to a column-store table, you can perform local data sorting by specified columns \(single or multiple\).

-   **WITH \( \{storage\_parameter = value\} \[, ... \] \)**

    Specifies an optional storage parameter for a table or an index.

-   **tablespace\_name**

    Specifies the name of the tablespace where the index locates.

-   **COMPRESS|NOCOMPRESS**
    -   **NOCOMPRESS**: If the  **NOCOMPRESS**  keyword is specified, the existing compression feature of the table will not be changed.
    -   **COMPRESS**: If the  **COMPRESS**  keyword is specified, the table compression feature will be triggered by batch tuple insertion. Row-store tables do not support compression.

-   **new\_table\_name**

    Specifies the new table name.

-   **new\_column\_name**

    Specifies the new name of a specific column in a table.

-   **new\_constraint\_name**

    Specifies the new name of a table constraint.

-   **new\_schema**

    Specifies the new schema name.

-   **CASCADE**

    Automatically drops objects that depend on the dropped column or constraint \(for example, views referencing the column\).

-   **RESTRICT**

    Refuses to drop the column or constraint if there are any dependent objects. This is the default processing.

-   **schema\_name**

    Specifies the schema name of a table.


## Examples<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_se4f9dc97861c410bb51554bb58bcd76d"></a>

See  [Examples](create-table.md#en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_s86758dcf05d442d2a9ebd272e76ed1b8)  in  **CREATE TABLE**.

## Helpful Links<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s489a6430be6447c193a4011257dc4994"></a>

[CREATE TABLE](create-table.md)  and  [DROP TABLE](drop-table.md)
