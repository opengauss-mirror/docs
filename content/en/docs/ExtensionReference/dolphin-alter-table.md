# ALTER TABLE<a name="ZH-CN_TOPIC_0289899912"></a>

## Function<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

Modifies tables, including modifying table definitions, renaming tables, renaming specified columns in tables, renaming table constraints, setting table schemas, enabling or disabling row-level security policies, and adding or updating multiple columns.

## Precautions<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

-   This section describes only the new syntax of Dolphin. The original syntax of openGauss is not deleted or modified.
-   If a statement contains multiple subcommands, the DROP INDEX and RENAME INDEX commands are executed first. The two commands have the same priority.

## Syntax<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s58bdce220c9f4292ba9af919b04ad25c"></a>

-   **ALTER TABLE** modifies the definition of a table.

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name ) }
        action [, ... ];
    ```

    The **action** can be one of the following clauses:

    ```
    column_clause
        | {DISABLE | ENABLE} KEYS
        | DROP INDEX index_name [ RESTRICT | CASCADE ]
        | DROP PRIMARY KEY [ RESTRICT | CASCADE ]
        | DROP FOREIGN KEY foreign_key_name [ RESTRICT | CASCADE ]
        | RENAME INDEX index_name to new_index_name
        | ADD table_indexclause
        | MODIFY column_name column_type ON UPDATE CURRENT_TIMESTAMP
    ```

-   Recreate a table.

    ```
    ALTER TABLE table_name FORCE;
    ```

-   Rename a table. The renaming does not affect stored data.

    ```
    ALTER TABLE [ IF EXISTS ] table_name 
        RENAME { TO | AS } new_table_name;
    ```

-   Add the ON UPDATE attribute to the timestamp column of the table.

    ```sql
    ALTER TABLE table_name
        MODIFY column_name column_type ON UPDATE CURRENT_TIMESTAMP;
    ```

-   Delete the ON UPDATE attribute from the timestamp column of the table.

    ```sql
    ALTER TABLE table_name
        MODIFY column_name column_type;
    ```

-   **ADD table_indexclause**

    Add an index to the table.

    ```
    {INDEX | KEY} [index_name] [index_type] (key_part,...)[index_option]...
    ```

    Values of index\_type are as follows:

    ```
    USING {BTREE | HASH | GIN | GIST | PSORT | UBTREE}
    ```

    Values of key\_part are as follows:

    ```
    {col_name[(length)] | (expr)} [ASC | DESC]
    ```
    
    The index\_option parameter is as follows:
    
    ```
    index_option:{
    	  COMMENT 'string'
    	| index_type
    }
    ```
    
    The sequence and quantity of COMMENT and index\_type can be random, but only the last value of the same column takes effect.

## Parameter Description<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_sf4962205ddf84312a5fd888bc662e5cf"></a>

- **{DISABLE | ENABLE} KEYS**

  Disables or enables all non-unique indexes of a table.

- **DROP INDEX index_name [ RESTRICT | CASCADE ]**

  Deletes the index of a table.

- **DROP PRIMARY KEY [ RESTRICT | CASCADE ]**

  Deletes the foreign key of a table.

- **DROP FOREIGN KEY foreign_key_name [ RESTRICT | CASCADE ]**

  Deletes the foreign key of a table.

- **RENAME INDEX index_name to new_index_name**

  Renames an index of a table.

>![](public_sys-resources/icon-note.gif) **NOTE:**

>For details about the involved parameters, see [ALTER TABLE](../SQLReference/alter-table.md).

## Examples<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_se4f9dc97861c410bb51554bb58bcd76d"></a>

--- Create tables, foreign keys, and non-unique indexes.

```
openGauss=# CREATE TABLE alter_table_tbl1 (a INT PRIMARY KEY, b INT);
openGauss=# CREATE TABLE alter_table_tbl2 (c INT PRIMARY KEY, d INT);
openGauss=# ALTER TABLE alter_table_tbl2 ADD CONSTRAINT alter_table_tbl_fk FOREIGN KEY (d) REFERENCES alter_table_tbl1 (a);
openGauss=# CREATE INDEX alter_table_tbl_b_ind ON alter_table_tbl1(b);
```

--- Disable and enable non-unique indexes.

```
openGauss=# ALTER TABLE alter_table_tbl1 DISABLE KEYS;
openGauss=# ALTER TABLE alter_table_tbl1 ENABLE KEYS;
```

--- Delete the index.

```
openGauss=# ALTER TABLE alter_table_tbl1 DROP KEY alter_table_tbl_b_ind;
```

--- Deletes a primary key.

```
openGauss=# ALTER TABLE alter_table_tbl2 DROP PRIMARY KEY;
```

--- Delete a foreign key.

```
openGauss=# ALTER TABLE alter_table_tbl2 DROP FOREIGN KEY alter_table_tbl_fk;
```

--- Recreate a table.

```
openGauss=# ALTER TABLE alter_table_tbl1 FORCE;
```

--- Rename the index.

```
openGauss=# CREATE INDEX alter_table_tbl_b_ind ON alter_table_tbl1(b);
openGauss=# ALTER TABLE alter_table_tbl1 RENAME INDEX alter_table_tbl_b_ind TO new_alter_table_tbl_b_ind;
```

--- Delete a table.

```
openGauss=# DROP TABLE alter_table_tbl1, alter_table_tbl2;
```

## Helpful Links<a name="section156744489391"></a>

[ALTER TABLE](../SQLReference/ALTER-TABLE.md)
