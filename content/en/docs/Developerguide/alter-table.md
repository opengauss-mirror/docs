# ALTER TABLE<a name="EN-US_TOPIC_0242370540"></a>

## Function<a name="en-us_topic_0237122076_en-us_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

**ALTER TABLE**  modifies tables, including modifying table definitions, renaming tables, renaming specified columns in tables, renaming table constraints, setting table schemas, enabling or disabling row-level access control, and adding or updating multiple columns.

## Precautions<a name="en-us_topic_0237122076_en-us_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

-   Only the table owner or a system administrator has the permission to run the  **ALTER TABLE**  statement. 
-   The tablespace of a partitioned table cannot be modified, but the tablespace of the partition can be modified.
-   The storage parameter  **ORIENTATION**  cannot be modified.
-   Currently,  **SET SCHEMA**  can only set schemas to user schemas. It cannot set a schema to a system internal schema.
-   Column-store tables support only  **PARTIAL CLUSTER KEY**  table-level constraints, but do not support primary and foreign key table-level constraints.
-   In a column-store table, you can perform  **ADD COLUMN**,  **ALTER TYPE**,  **SET STATISTICS**,  **DROP COLUMN**  operations, and change table name and space. The types of new and modified columns should be the  [Data Types](data-types.md)  supported by column-store. The  **USING**  option of  **ALTER TYPE**  only supports constant expression and expression involved in the column.
-   The column constraints supported by column-store tables include  **NULL**,  **NOT NULL**, and  **DEFAULT**  constant values. Only the  **DEFAULT**  value can be modified \(by using  **SET DEFAULT**  and  **DROP DEFAULT**\). Currently,  **NULL**  and  **NOT NULL**  constraints cannot be modified.

-   Auto-increment columns cannot be added, or a column whose  **DEFAULT**  value contains the  **nextval\(\)**  expression cannot be added.
-   Row-access control cannot be enabled for foreign tables and temporary tables.
-   When you delete a  **PRIMARY KEY**  constraint by constraint name, the  **NOT NULL**  constraint is not deleted. If necessary, manually delete the  **NOT NULL**  constraint.
-   When JDBC is used, the  **DEFAULT**  value can be set through  **PrepareStatement**.

## Syntax<a name="en-us_topic_0237122076_en-us_topic_0059779051_s58bdce220c9f4292ba9af919b04ad25c"></a>

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
        | DISABLE ROW LEVEL SECURITY
        | ENABLE ROW LEVEL SECURITY
        | FORCE ROW LEVEL SECURITY
        | NO FORCE ROW LEVEL SECURITY
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   **ADD table\_constraint \[ NOT VALID \]**  
    >    Adds a table constraint.  
    >-   **ADD table\_constraint\_using\_index**  
    >    Adds a primary key constraint or unique constraint to a table based on the existing unique index.  
    >-   **VALIDATE CONSTRAINT constraint\_name**  
    >    Validates a check-class constraint created with the  **NOT VALID**  option, and scans the entire table to ensure that all rows meet the constraint. Nothing happens if the constraint is already marked valid.  
    >-   **DROP CONSTRAINT \[ IF EXISTS \]  constraint\_name \[ RESTRICT | CASCADE \]**  
    >    Drops a table constraint.  
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
    >    Sets the compression feature of a table. The table compression feature affects only the storage mode of data inserted in a batch subsequently and does not affect storage of existing data. Setting the table compression feature will result in the fact that there are both compressed and uncompressed data in the table.  
    >-   **TO \{ GROUP groupname | NODE \( nodename \[, ... \] \) \}**  
    >    The syntax is only available in extended mode \(when GUC parameter  **support\_extended\_features**  is  **on**\). Exercise caution when enabling the mode. It is mainly used for tools like internal scale-out tools. Common users should not use the mode.  
    >-   **ADD NODE \( nodename \[, ... \] \)**  
    >    It is only available for internal scale-out tools. Common users should not use the syntax.  
    >-   **DELETE NODE \( nodename \[, ... \] \)**  
    >    It is only available for internal scale-in tools. Common users should not use the syntax.  
    >-   **DISABLE TRIGGER \[ trigger\_name | ALL | USER \]**  
    >    Disables a single trigger specified by  **trigger\_name**, disables all triggers, or disables only user triggers \(excluding internally generated constraint triggers, for example, deferrable unique constraint triggers and exclusion constraint triggers\).  
    >   Exercise caution when using this function because data integrity cannot be ensured as expected if the triggers are not executed.  
    >   -   **| ENABLE TRIGGER \[ trigger\_name | ALL | USER \]**
    >   Enables a single trigger specified by  **trigger\_name**, enables all triggers, or enables only user triggers.
    >   -   **| ENABLE REPLICA TRIGGER trigger\_name**
        Determines that the trigger firing mechanism is affected by the configuration variable  [session\_replication\_role](statement-behavior.md#en-us_topic_0237124732_en-us_topic_0059779117_sffbd1c48d86b4c3fa3287167a7810216).
    >   When the replication role is  **origin**  \(default value\) or  **local**, a simple trigger is fired.
    >   When  **ENABLE REPLICA**  is configured for a trigger, it is fired only when the session is in replica mode.
    >   -   **| ENABLE ALWAYS TRIGGER trigger\_name**
    >
    >       Determines that all triggers are fired regardless of the current replication mode.
    >   -   **| DISABLE/ENABLE ROW LEVEL SECURITY**
    >
    >       Enables or disables row-level access control for a table.
    >
    >       If row-level access control is enabled for a data table but no row-level access control policy is defined, the row-level access to the data table is not affected. If row-level access control for a table is disabled, the row-level access to the table is not >  >   affected even if a row-level access control policy has been defined. For details, see  [CREATE ROW >   LEVEL SECURITY POLICY](create-row-level-security-policy.md).
    >
    >   -   **| NO FORCE/FORCE ROW LEVEL SECURITY**
    >
    >       Forcibly enables or disables row-level access control for a table.
    >
    >       By default, the table owner is not affected by the row-level access control feature. However, if row-level access control is forcibly enabled, the table owner \(excluding system administrators\) wil be affected. System administrators are not affected by any row-level access control policies.



    -   There are several clauses of  **column\_clause**:

        ```
        ADD [ COLUMN ] column_name data_type [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ]    
        | MODIFY column_name data_type    
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
        >-   **ADD \[ COLUMN \] column\_name data\_type \[ compress\_mode \] \[ COLLATE collation \] \[ column\_constraint \[ ... \] \]**  
        >    Adds a column to a table. If a column is added with  **ADD COLUMN**, all existing rows in the table are initialized with the column's default value \(**NULL**  if no  **DEFAULT**  clause is specified\).  
        >-   **ADD \( \{ column\_name data\_type \[ compress\_mode \] \} \[, ...\] \)**  
        >    Adds columns in the table.  
        >-   **MODIFY \( \{ column\_name data\_type | column\_name \[ CONSTRAINT constraint\_name \] NOT NULL \[ ENABLE \] | column\_name \[ CONSTRAINT constraint\_name \] NULL \} \[, ...\] \)**  
        >    Modifies the data type of an existing column in the table.  
        >-   **DROP \[ COLUMN \] \[ IF EXISTS \] column\_name \[ RESTRICT | CASCADE \]**  
        >    Drops a column from a table. Indexes and constraints related to the column are automatically dropped. If an object not belonging to the table depends on the column,  **CASCADE**  must be specified, such as a view.  
        >    The  **DROP COLUMN**  statement does not physically remove the column, but simply makes it invisible to SQL operations. Subsequent  **INSERT**  and  **UPDATE**  operations in the table will store a  **NULL**  value for the column. Therefore, column deletion takes a short period of time but does not immediately release the tablespace on the disks, because the space occupied by the deleted column is not reclaimed. The space will be reclaimed when  **VACUUM**  is executed.  
        >-   **ALTER \[ COLUMN \] column\_name \[ SET DATA \] TYPE data\_type \[ COLLATE collation \] \[ USING expression \]**  
        >    Modifies the type of a column in a table. Indexes and simple table constraints on the column will automatically use the new data type by reparsing the originally supplied expression.  
        >    **ALTER TYPE**  requires an entire table be rewritten. This is an advantage sometimes, because it frees up unnecessary space from a table. For example, to reclaim the space occupied by a deleted column, the fastest method is to use the following statement.  
        >     ```  
        >       ALTER TABLE table ALTER COLUMN anycol TYPE anytype;  
        >       ```  
        >       In this statement,  **anycol**  indicates any column existing in the table and  **anytype**  indicates the type of the prototype of the column.  **ALTER TYPE**  does not change the table except that the table is forcibly rewritten. In this way, the data that is no longer used is deleted.  
        >-   **ALTER \[ COLUMN \] column\_name \{ SET DEFAULT expression | DROP DEFAULT \}**  
        >    Sets or removes the default value for a column. The default values only apply to subsequent  **INSERT**  operations; they do not cause rows already in the table to change. Defaults can also be created for views, in which case they are inserted into  **INSERT**  statements on the view before the view's  **ON INSERT**  rule is applied.  
        >-   **ALTER \[ COLUMN \] column\_name \{ SET | DROP \} NOT NULL**  
        >    Changes whether a column is marked to allow null values or to reject null values. You can only use  **SET NOT NULL**  when the column contains no null values.  
        >-   **ALTER \[ COLUMN \] column\_name SET STATISTICS \[PERCENT\] integer**  
        >    Specifies the per-column statistics-gathering target for subsequent  **ANALYZE**  operations. The target can be set in the range from 0 to 10000. Set it to  **-1**  to revert to using the default system statistics target.  
        >-   **\{ADD | DELETE\} STATISTICS \(\(column\_1\_name, column\_2\_name \[, ...\]\)\)**  
        >    Adds or deletes the declaration of collecting multi-column statistics to collect multi-column statistics as needed when  **ANALYZE**  is performed for a table or a database. The statistics about a maximum of 32 columns can be collected at a time. You are not allowed to add or delete such declaration for system catalogs or foreign tables.  
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
                  PRIMARY KEY index_parameters }
                [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
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
        ```

    -   **table\_constraint**  is as follows:

        ```
        [ CONSTRAINT constraint_name ]
            { CHECK ( expression ) |
              UNIQUE ( column_name [, ... ] ) index_parameters |
              PRIMARY KEY ( column_name [, ... ] ) index_parameters |
              PARTIAL CLUSTER KEY ( column_name [, ... ] }
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
    >-   All the actions except for  **RENAME**  and  **SET SCHEMA**  can be combined into a list of multiple alterations to apply in parallel. For example, it is possible to add several columns or alter the type of several columns in a single statement. This is useful with large tables, since only one pass over the tables needs to be made.  
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
        MODIFY ( { column_name data_type | column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ] | column_name [ CONSTRAINT constraint_name ] NULL } [, ...] );
    ```


## Parameter Description<a name="en-us_topic_0237122076_en-us_topic_0059779051_sf4962205ddf84312a5fd888bc662e5cf"></a>

-   **IF EXISTS**

    Sends a notice instead of an error if no tables have identical names. The notice prompts that the table you are querying does not exist.

-   **table\_name  \[\*\] | ONLY table\_name | ONLY \( table\_name  \)**

    **table\_name**  is the name of the table that you need to modify.

    If  **ONLY**  is specified, only the table is modified. If  **ONLY**  is not specified, the table and all subtables will be modified. You can add the asterisk \(\*\) option following the table name to specify that all subtables are scanned, which is the default operation.

-   **constraint\_name**

    Specifies the name of an existing constraint to drop.

-   **index\_name**

    Specifies the name of this index.

-   **storage\_parameter**

    Specifies the name of a storage parameter.

-   **new\_owner**

    Specifies the name of the new table owner.

-   **new\_tablespace**

    Specifies the new name of the tablespace to which the table belongs.

-   **column\_name**,  **column\_1\_name**,  **column\_2\_name**

    Specifies the name of a new or existing column.

-   **data\_type**

    Specifies the type of a new column or a new type of an existing column.

-   **compress\_mode**

    Specifies the compression option of the table, which is only available for row-store tables. The clause specifies the compression algorithm preferentially used by the column.

-   **collation**

    Specifies the collation rule name of a column. The optional  **COLLATE**  clause specifies a collation for the new column; if omitted, the collation is the default for the new column.

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

    Specifies a column storage mode.

    -   **PLAIN**  must be used for fixed-length values \(such as integers\). It must be inline and uncompressed.
    -   **MAIN**  is for inline, compressible data.
    -   **EXTERNAL**  is for external, uncompressed data. Use of  **EXTERNAL**  will make substring operations on  **text**  and  **bytea**  values run faster, at the penalty of increased storage space.
    -   **EXTENDED**  is for external, compressed data.  **EXTENDED**  is the default for most data types that support non-**PLAIN**  storage.

-   **CHECK \( expression \)**

    New rows or rows to be updated must satisfy for an expression to be true. If any row produces a false result, an error is raised and the database is not modified.

    A check constraint specified as a column constraint should reference only the column's values, while an expression appearing in a table constraint can reference multiple columns.

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

    The primary key constraint specifies that a column or columns of a table can contain only unique \(non-duplicate\) and non-null values.

-   **DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE**

    Sets whether the constraint can be deferrable.

    -   **DEFERRABLE**: deferrable to the end of the transaction and checks using  **SET CONSTRAINTS**.
    -   **NOT DEFERRABLE**: checks immediately after the execution of each command.
    -   **INITIALLY IMMEDIATE**: checks immediately after the execution of each statement.
    -   **INITIALLY DEFERRED**: checks when the transaction ends.

-   **WITH \( \{storage\_parameter = value\} \[, ... \] \)**

    Specifies an optional storage parameter for a table or an index.

-   **tablespace\_name**

    Specifies the name of the tablespace where the index locates.

-   **COMPRESS|NOCOMPRESS**
    -   **NOCOMPRESS**: If the  **NOCOMPRESS**  keyword is specified, the existing compression feature of the table will not be changed.
    -   **COMPRESS**: If the  **COMPRESS**  keyword is specified, the table compression feature will be triggered by batch tuple insertion.

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

    Refuses to drop the column or constraint if there are any dependent objects. This is the default behavior.

-   **schema\_name**

    Specifies the schema name of a table.


## Examples<a name="en-us_topic_0237122076_en-us_topic_0059779051_se4f9dc97861c410bb51554bb58bcd76d"></a>

See  [Example:](create-table.md#en-us_topic_0237122117_en-us_topic_0059778169_s86758dcf05d442d2a9ebd272e76ed1b8)  in  **CREATE TABLE**.

## Helpful Links<a name="en-us_topic_0237122076_en-us_topic_0059779051_s489a6430be6447c193a4011257dc4994"></a>

[CREATE TABLE](create-table.md)  and  [DROP TABLE](drop-table.md)

