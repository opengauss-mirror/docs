# ALTER FOREIGN TABLE<a name="EN-US_TOPIC_0272283416"></a>

## Function<a name="section178411726125517"></a>

**ALTER FOREIGN TABLE**  modifies a foreign table.

## Syntax<a name="section172112343558"></a>

```
ALTER FOREIGN TABLE [ IF EXISTS ]  table_name
    OPTIONS ( {[ ADD | SET | DROP ] option ['value']}[, ... ]);
```

## Parameter Description<a name="section1334219393555"></a>

-   **table\_name**

    Specifies the name of an existing foreign table to be modified.

    Value range: an existing foreign table name.

-   **option**

    Specifies the option of a foreign table or foreign table column to be modified.  **ADD**,  **SET**, and  **DROP**  are operations to be performed. If no operation is set explicitly, the default value  **ADD**  is used. The option name must be unique \(although table options and table column options can share the same name\). The name and value of the option are also validated by a class library of a foreign data wrapper.

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



-   **value**

    Specifies the new value of  **option**.


## Helpful Links<a name="section1487013136552"></a>

[CREATE FOREIGN TABLE](create-foreign-table.md)  and  [CREATE FOREIGN TABLE](drop-foreign-table.md)

