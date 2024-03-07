# CREATE TABLE INHERITS<a name="EN-US_TOPIC_0289900337"></a>

## Function<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sf99d8ce0a2bf4859q21d4835e23639b1"></a>

**CREATE TABLE AS**  creates a inheritance table from the results of a query.

The child table of an inherited table can fully inherit the parent table structure, or add columns base on the parent table structure, and can inherit multiple parent tables or perform secondary inheritance.

The inheritance table has a configurable GUC parameter **sql_inheritance** (default on) controls whether operations on the parent table can access the child table. By default, the parent table can query all data including the child table. When sql_inheritance closed, the parent table can only query/update itself.

The inheritance table has the following characteristics:
-   Table access permissions are not automatically inherited.
-   use **/d+ father** to view all child tables of the parent table.
-   Temporary tables can inherit both temporary and regular tables, while regular tables cannot inherit temporary tables.
-   When the columns of multiple parent tables are the same, they will be merged, and if they are different, an error will be thrown.
-   When there are child tables, the parent table cannot be deleted. If the parent table is deleted using cascade, the child table will also be deleted.
-   When not using including all clause, the child table will only inherit the non null constraints, default value constraints, and check constraints of the parent table (the modification of these constraints by the parent table will be synchronized with the child table).
-   When using including all clause, child tables can inherit additional index constraints, unique constraints, primary key constraints, and foreign key of the parent table (but modifications made by the parent table to these constraints will not synchronize with the child table).
-   When not using like parent_name clause, the parent table deletes a column, the child table columns will also be deleted.
-   When using like parent_name clause, the child table has independent columns with the same name as the parent table, and deleting columns from the parent table will not affect the child table.
-   If the foreign key f_id specifies the foreign table t1, and t2 is a child table of t1. There is data with id 3 in t2, but there is no data with id 3 in t1, then f_id cannot be 3, cause foreign key constraint only contains the data of the specified table and does not include the child tables of that table.

## Precautions<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_s12767007911226c5e1823f6cdf27d915"></a>

-   The inheritance table function conflicts with the multi table update function of MySQL, and it is not allowed to create an inheritance table in the B database.
-   It does not support the coexistence of inheritance and partitioned tables or MOT tables (and other foreign table).
-   Supports ustore and segment page, but cannot use the "like parent_name including all" statement in ustore and segment page.
-   Column storage does not support inheriting tables.

## Syntax<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_s58148dd6e63843eebaa64756e4b093c9"></a>

```
CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] 
TABLE table_name( [ {LIKE parent_name} [INCLUDING ALL]} ] )
[ INHERITS ( parent_table [, ... ] ) ]
[ WITH ( {storage_parameter = value} [, ... ] ) ]
[ TABLESPACE tablespace_name ];
```

## Parameter Description<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sb8ea2c52307445c9934740862f4ecc85"></a>

-   **UNLOGGED**

    Specifies that the table is created as an unlogged table. Data written to unlogged tables is not written to the WALs, which makes them considerably faster than ordinary tables. However, they are not crash-safe: an unlogged table is automatically truncated after a crash or unclean shutdown. Contents of an unlogged table are also not replicated to standby servers. Any indexes created on an unlogged table are automatically unlogged as well.

    -   Usage scenario: Unlogged tables do not ensure data security. Users can back up data before using unlogged tables; for example, users should back up the data before a system upgrade.
    -   Troubleshooting: If data is missing in the indexes of unlogged tables due to some unexpected operations such as an unclean shutdown, users should re-create the indexes with errors.

-   **GLOBAL | LOCAL**

    When creating a temporary table, you can specify the  **GLOBAL**  or  **LOCAL**  keyword before  **TEMP**  or  **TEMPORARY**. If the keyword  **GLOBAL**  is specified, openGauss creates a global temporary table. Otherwise, openGauss creates a local temporary table.

-   **TEMPORARY | TEMP**

    If  **TEMP**  or  **TEMPORARY**  is specified, the created table is a temporary table. Temporary tables are classified into global temporary tables and local temporary tables. If the keyword  **GLOBAL**  is specified when a temporary table is created, the table is a global temporary table. Otherwise, the table is a local temporary table.

    The metadata of the global temporary table is visible to all sessions. After the sessions end, the metadata still exists. The user data, indexes, and statistics of a session are isolated from those of another session. Each session can only view and modify the data submitted by itself. Global temporary tables have two schemas:  **ON COMMIT PRESERVE ROWS**  and  **ON COMMIT PRESERVE ROWS**. In session-based  **ON COMMIT PRESERVE ROWS**  schema, user data is automatically cleared when a session ends. In transaction-based  **ON COMMIT DELETE ROWS**  schema, user data is automatically cleared when the commit or rollback operation is performed. If the  **ON COMMIT**  option is not specified during table creation, the session level is used by default. Different from local temporary tables, you can specify a schema that does not start with  **pg\_temp\_**  when creating a global temporary table.

    A local temporary table is automatically dropped at the end of the current session. Therefore, you can create and use temporary tables in the current session as long as the connected database node in the session is normal. Temporary tables are created only in the current session. If a DDL statement involves operations on temporary tables, a DDL error will be generated. Therefore, you are not advised to perform operations on temporary tables in DDL statements.  **TEMP**  is equivalent to  **TEMPORARY**.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   Local temporary tables are visible to the current session through the schema starting with  **pg\_temp**  start. Users should not delete schema started with  **pg\_temp**  or  **pg\_toast\_temp**.
    >-   If  **TEMPORARY**  or  **TEMP**  is not specified when you create a table but its schema is set to that starting with  **pg\_temp\_**  in the current session, the table will be created as a temporary table.
    >-   If global temporary tables and indexes are being used by other sessions, do not perform  **ALTER**  or  **DROP**.
    >-   The DDL of a global temporary table affects only the user data and indexes of the current session. For example,  **TRUNCATE**,  **REINDEX**, and  **ANALYZE**  are valid only for the current session.

-   **table\_name**

    Specifies the name of the child table to be created.

    Value range: a string. It must comply with the naming convention.

-   **parent\_name**

    Specifies the name of parent table to inherit.

    Value range: a string. It must comply with the naming convention.

-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    Specifies an optional storage parameter for a table or an index. See details of parameters below.

    -   FILLFACTOR

        The fill factor of a table is a percentage from 10 to 100.  **100**  \(complete filling\) is the default value. When a smaller fill factor is specified,  **INSERT**  operations pack table pages only to the indicated percentage. The remaining space on each page is reserved for updating rows on that page. This gives  **UPDATE**  a chance to place the updated copy of a row on the same page, which is more efficient than placing it on a different page. For a table whose entries are never updated, setting the fill factor to  **100**  \(complete filling\) is the best choice, but in heavily updated tables a smaller fill factor would be appropriate. The parameter is only valid for row–store tables.

        Value range: 10–100

    -   ORIENTATION

        Value range:

        **COLUMN**: The data will be stored in columns.

        **ROW**  \(default value\): The data will be stored in rows.

    -   COMPRESSION

        Specifies the compression level of table data. It determines the compression ratio and time. Generally, the higher the level of compression, the higher the ratio, the longer the time; and the lower the level of compression, the lower the ratio, the shorter the time. The actual compression ratio depends on the distribution mode of table data loaded.

        Value range:

        The valid values for column-store tables are  **YES**,  **NO**,  **LOW**,  **MIDDLE**, and  **HIGH**, and the default value is  **LOW**.

        Row-store tables do not support compression.

    -   MAX\_BATCHROW

        Specifies the maximum number of rows in a storage unit during data loading. The parameter is only valid for column-store tables.

        Value range: 10000 to 60000

-   **TABLESPACE tablespace\_name**

    Specifies that the new table will be created in the  **tablespace\_name**  tablespace. If not specified, the default tablespace is used.


## Examples<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sa7f3723e108f960663c293cb012e1a2c"></a>

```
--Create two parent tables
openGauss=# CREATE TABLE father
(
    id int NOT NULL,
    md_attr CHARACTER VARYING(32) UNIQUE,
    wai_id int references fa_wai(ID),
    num int DEFAULT 2,
    salary REAL CHECK(SALARY > 0),
    CONSTRAINT pk_father_z82rgvsefn PRIMARY KEY (id)
);

openGauss=# CREATE TABLE father2
(
    id int UNIQUE,
	md_attr CHARACTER VARYING(32) not null,
    CONSTRAINT pk_father2_z82rgvsefn PRIMARY KEY (id)
);

--Create a child table, when parent table deletes columns, child table columns will be deleted
openGauss=# CREATE TABLE kid_2021() inherits(father);

--Create a child table using like parent_name clause,
--when the parent table deletes columns, child table columns will not be deleted
openGauss=# CREATE TABLE kid_2021(like father) inherits(father);

--Create a subtable using like father including all clause
--to inherit additional primary key constraints and unique constraints
openGauss=# CREATE TABLE kid_2022(like father including all) inherits(father);

--Multiple tables inherit, parent tables with the same column will be merged
openGauss=# CREATE TABLE kid_2023() inherits(father,father2);

--Temporary tables can be child tables of regular tables or temporary tables,
--but cannot be parent tables of regular tables. 
openGauss=# CREATE TEMPORARY TABLES kid_2024() inherits(father);

--Query the data of the parent and child tables, you can add * to the table name or omit it
openGauss=# select * from father*;
openGauss=# select * from father;

--Only query the data of the parent table
openGauss=# select * from only father;

--drop tables
openGauss=# drop table father cascade;
openGauss=# drop table father2 cascade;
```

## Helpful Links<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sa1d8ac1ba9fc4ce58ecdfe394f457188"></a>

[CREATE TABLE](create-table.md)  and  [ALTER TABLE INHERIT](alter-table-inherit.md)