# CREATE FOREIGN TABLE<a name="EN-US_TOPIC_0289900252"></a>

## Function<a name="en-us_topic_0283137606_section03743713018"></a>

**CREATE FOREIGN TABLE**  creates a foreign table.

## Precautions<a name="en-us_topic_0283137606_section1614655042716"></a>

System columns \(such as  **tableoid**  and  **ctid**\) cannot be used in foreign tables, Among them, the appearance of Private and Shares mode requires the initial user and operation and maintenance administrator authority in operation mode (operation_mode).

## Syntax<a name="en-us_topic_0283137606_section0692184823016"></a>

```
CREATE FOREIGN TABLE [ IF NOT EXISTS  ] table_name ( { 
    column_name type_name POSITION ( offset, length ) [column_constraint ]
        | LIKE source_table | table_constraint } [, ...] )
        SEVER gsmpp_server
        OPTIONS (  { option_name ' value '  }  [, ...] )
        [ { WRITE ONLY  |  READ ONLY  }]
        [ WITH error_table_name | LOG INTO error_table_name ]
        [ REMOTE LOG 'name' ]
        [PER NODE REJECT LIMIT 'value']
        [ TO { GROUP groupname | NODE ( nodename [, ... ] ) } ];
CREATE FOREIGN TABLE [ IF NOT EXISTS ] table_name ( { 
    column_name type_name
    [ { [CONSTRAINT constraint_name] NULL |
    [CONSTRAINT constraint_name] NOT NULL |
        column_constraint [...]} ] |
        table_constraint} [, ...] )
        SERVER server_name
        OPTIONS ( { option_name ' value ' } [, ...] )
        DISTRIBUTE BY {ROUNDROBIN | REPLICATION}
        [ TO { GROUP groupname | NODE ( nodename [, ... ] ) } ]
        [ PARTITION BY ( column_name ) [AUTOMAPPED]] ;
CREATE FOREIGN TABLE [ IF NOT EXISTS ] table_name ( [ { 
    column_name type_name | LIKE source_table } [, ...] ] )
        SERVER server_name
        OPTIONS ( { option_name ' value ' } [, ...] )
        [ READ ONLY ]
        [ DISTRIBUTE BY {ROUNDROBIN} ]
        [ TO { GROUP groupname | NODE ( nodename [, ... ] ) } ];

The column_constraint can be:
[ CONSTRAINT constraint_name ]
{ PRIMARY KEY | UNIQUE }
[ NOT ENFORCED [ ENABLE QUERY OPTIMIZATION | DISABLE QUERY OPTIMIZATION ] | ENFORCED ]
where table_constraint can be:
[ CONSTRAINT constraint_name ]
{ PRIMARY KEY | UNIQUE } ( column_name )
[ NOT ENFORCED [ ENABLE QUERY OPTIMIZATION | DISABLE QUERY OPTIMIZATION ] | ENFORCED ]
```

## Parameter Description<a name="en-us_topic_0283137606_section3468568300"></a>

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

    Options are related to the new foreign table or the columns in the foreign table. The allowed option names and values are specified by each foreign data wrapper, and are also verified by the verification function of the foreign data wrapper. The option name must be unique \(although table options and table column options can share the same name\).

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



## Helpful Links<a name="en-us_topic_0283137606_section10964241319"></a>

[ALTER FOREIGN TABLE](alter-foreign-table.md)  and  [DROP FOREIGN TABLE](drop-foreign-table.md)
