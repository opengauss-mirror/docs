# ALTER FOREIGN TABLE<a name="EN-US_TOPIC_0289900030"></a>

## Function<a name="en-us_topic_0283137201_section178411726125517"></a>

**ALTER FOREIGN TABLE**  modifies a foreign table.

## Syntax<a name="en-us_topic_0283137201_section172112343558"></a>

```
ALTER FOREIGN TABLE [ IF EXISTS ]  table_name
    OPTIONS ( {[ ADD | SET | DROP ] option ['value']}[, ... ]);

ALTER FOREIGN TABLE [ IF EXISTS ] table_name
    ALTER column_name OPTIONS;
```

## Parameter Description<a name="en-us_topic_0283137201_section1334219393555"></a>

-   **table\_name**

    Specifies the name of an existing foreign table to be modified.

    Value range: an existing foreign table name.

-   **option**

    Specifies the option of a foreign table or foreign table column to be modified.  **ADD**,  **SET**, and  **DROP**  are operations to be performed. If no operation is set explicitly, the default value  **ADD**  is used. The option name must be unique \(although table options and table column options can share the same name\). The name and value of the option are also validated by a class library of a foreign data wrapper.

    -   Options supported by  **oracle\_fdw**  are as follows:
        -   **table**

            Name of a table on the Oracle server. The value must be the same as the table name recorded in the Oracle system catalog. Generally, the value consists of uppercase letters.

        -   **schema**

            Schema \(or owner\) corresponding to the table. The value must be the same as the table name recorded in the Oracle system catalog. Generally, the value consists of uppercase letters.

    -   Options supported by  **mysql\_fdw**  are as follows:
        -   **dbname**

            Name of the MySQL database.

        -   **table\_name**

            Name of a table in the MySQL database.

    -   Options supported by  **postgres\_fdw**  are as follows:
        -   **schema\_name**

            Schema name of a remote server. If this option is not specified, the schema name of the foreign table is used as the schema name of the remote server.

        -   **table\_name**

            Table name of a remote server. If this option is not specified, the name of the foreign table is used as the table name of the remote server.

        -   **column\_name**

            Column name of a table on a remote server. If this option is not specified, the column name of the foreign table is used as the column name of a table on a remote server.

    -   Options supported by  **file\_fdw**  are as follows:

        -   filename

            File to be read. This parameter is mandatory and must be an absolute path.

        -   format

            File format of the remote server, which is the same as the  **FORMAT**  option in the  **COPY**  statement. The value can be  **text**,  **csv**,  **binary**, or  **fixed**.

        -   header

            Specifies whether a specified file has a header, which is the same as the  **HEADER**  option of the  **COPY**  statement.

            -   delimiter

                File delimiter, which is the same as the  **DELIMITER**  option of the  **COPY**  statement.

            -   quote

                Quote character of a file, which is the same as the  **QUOTE**  option of the  **COPY**  statement.

            -   escape

                Escape character of a file, which is the same as the  **ESCAPE**  option of the  **COPY**  statement.

            -   null

                Null string of a file, which is the same as the  **NULL**  option of the  **COPY**  statement.

            -   encoding

                Encoding of a file, which is the same as the  **ENCODING**  option of the  **COPY**  statement.

            -   force\_not\_null

                This is a Boolean option. If it is true, the value of the declared field cannot be an empty string. This option is the same as the  **FORCE\_NOT\_NULL**  option of the  **COPY**  statement.


        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >For details about how to use  **file\_fdw**, see  [file\_fdw](../DatabaseAdministrationGuide/file_fdw.md).


-   **value**

    Specifies the new value of  **option**.


## Helpful Links<a name="en-us_topic_0283137201_section1487013136552"></a>

[CREATE FOREIGN TABLE](create-foreign-table.md)  and  [DROP FOREIGN TABLE](drop-foreign-table.md)

