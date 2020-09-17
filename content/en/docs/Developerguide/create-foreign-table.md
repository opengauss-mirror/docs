# CREATE FOREIGN TABLE<a name="EN-US_TOPIC_0272283419"></a>

## Function<a name="section03743713018"></a>

**CREATE FOREIGN TABLE**  creates a foreign table.

## Syntax<a name="section0692184823016"></a>

```
CREATE FOREIGN TABLE [ IF NOT EXISTS ] table_name ( [
    column_name type_name [ OPTIONS ( option 'value' [, ... ] ) ] [ COLLATE collation ] [ column_constraint [ ... ] ]
    [, ... ]
] )
  SERVER server_name
[ OPTIONS ( option 'value' [, ... ] ) ]

The column_constraint can be:
[ CONSTRAINT constraint_name ]
{ NOT NULL |
  NULL |
  DEFAULT default_expr }
```

## Parameter Description<a name="section3468568300"></a>

-   **IF NOT EXISTS**

    Sends a notice, but does not throw an error, if a table with the same name exists.

-   **table\_name**

    Specifies the name of a foreign table.

    Value range: a string. It must comply with the naming convention.

-   **column\_name**

    Specifies the name of a column in the foreign table.

    Value range: a string. It must comply with the naming convention.

-   **type\_name**

    Specifies the data type of the column.

-   **SERVER server\_name**

    Specifies the server name of the foreign table. The default value is  **mot\_server**.

-   **OPTIONS \( option 'value' \[, ... \] \)**

    Options are related to the new foreign table or the columns in the foreign table. The allowed option names and values are specified by each foreign data wrapper and verified with the verification function of the foreign data wrapper. The option name must be unique \(although table options and table column options can share the same name\).

    -   Options supported by oracle\_fdw are as follows:
        -   **table**

            Name of a table on the Oracle server. The value must be the same as the table name recorded in the Oracle system catalog. Generally, the value consists of uppercase letters.

        -   **schema**

            Schema \(or owner\) corresponding to the table. The value must be the same as the table name recorded in the Oracle system catalog. Generally, the value consists of uppercase letters.

    -   Options supported by mysql\_fdw are as follows:
        -   **dbname**

            Name of the MySQL database.

        -   **table\_name**

            Name of a table in the MySQL database.

    -   Options supported by postgres\_fdw are as follows:
        -   **schema\_name**

            Schema name of a remote server. If this option is not specified, the schema name of the foreign table is used as the schema name of the remote server.

        -   **table\_name**

            Table name of a remote server. If this option is not specified, the name of the foreign table is used as the table name of the remote server.

        -   **column\_name**

            Column name of a table on a remote server. If this option is not specified, the column name of the foreign table is used as the column name of a table on a remote server.




## Helpful Links<a name="section10964241319"></a>

[ALTER FOREIGN TABLE](alter-foreign-table.md)  and  [DROP FOREIGN TABLE](drop-foreign-table.md)

