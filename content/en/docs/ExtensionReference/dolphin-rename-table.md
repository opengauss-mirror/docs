# RENAME TABLE<a name="EN-US_TOPIC_0289899912"></a>

## Function<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

RENAME TABLE changes tables, including changing table schemas, renaming tables, and deleting table permissions.

```sql
RENAME TABLE old_table to new_table;
```

## Precautions<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

-   This section describes only the new syntax of Dolphin. The original syntax of openGauss is not deleted or modified.
-   If the RENAME TABLE statement contains multiple commands for changing table names, the syntax sorts the names of the tables to be changed, locks the tables in sequence, and changes the table names from left to right. If an intermediate table b does not exist in the command **rename table a to b, b to c**, the syntax does not lock the table and skips it.
-   If a table does not exist or conflicts with an existing table, an error message is displayed. If a table has a synonym, the original table cannot have a synonym dependency, and the target table cannot have a synonym with the same name.
-   When you change the name and schema of a target table, the system checks whether the current user has permissions on the table.

## Syntax<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s58bdce220c9f4292ba9af919b04ad25c"></a>

-   Modify the definition of a table.

    ```sql
    RENAME TABLE old_schema.table_name TO new_schema.new_table_name [, old_schema.table_name TO new_schema.new_table_name ...];
    ```

## Parameter Description
RENAME TABLE can rename one or more tables at a time. However, you must have the ALTER and DROP permissions on the old table and the CREATE and INSERT permissions on the new table. You must have the permissions on old\_schema and new\_schema.

-   Change a table name.
```sql
RENAME TABLE old_table to new_table;
```

-   If the old and new tables are in the same schema, it is equivalent to:
```sql
ALTER TABLE old_table RENAME TO new_table;
```

-   RENAME TABLE allows you to change the names of multiple tables in one SQL syntax from left to right.
```sql
RENAME TABLE A TO B, B TO C, C TO A;
```

-   RENAME TABLE contains table locking operations. The table locking sequence is sorted based on **schema.table** of the old table, and then the sorted tables are locked in sequence. Renaming cross-schema tables in openGauss is equivalent to renaming cross-database tables in MySQL.
```sql
RENAME TABLE old_schema.old_table TO new_schema.new_table;
```

-   old\_table cannot be a synonym and cannot store synonym dependencies. new\_table cannot be a synonym.
-   RENAME TABLE changes the table name, the data type with the same name as old\_table in the pg\_type system catalog, and the dependency in the pg\_depend system catalog.  
-   Temporary tables and global temporary tables are not supported.
-   Renaming cross-schema views is not supported. The table name can be changed only in the same schema.
-   After the table name is changed using RENAME TABLE, new\_table permissions are not the same as those of old\_table. You must assign new\_table permissions as the super user.
-   In the REANME TABLE syntax, if old\_table has a trigger, old\_table cannot be modified across schemas.
-   The names of old\_table and new\_table cannot be the same.
-   If no schema is specified for old\_table in the RENAME TABLE syntax, old\_table is traversed from search\_path until old\_table is found. Otherwise, an error is reported, indicating that old\_table does not exist. If no schema is specified for new\_table, new\_table and old\_table are in the same schema.

## Helpful Links<a name="section156744489391"></a>

[ALTER TABLE](dolphin-alter-table.md)
