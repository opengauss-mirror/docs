# file\_fdw<a name="EN-US_TOPIC_0000001116194726"></a>

The file\_fdw module provides the external data wrapper file\_fdw, which can be used to access data files in the file system of a server. The format of the data files must be readable by the  **COPY FROM**  command. For details, see  [COPY](../SQLReference/copy.md). file\_fdw is only used to access readable data files, but cannot write data to the data files.

By default, the file\_fdw is compiled in openGauss. During database initialization, the plug-in is created in the  **pg\_catalog**  schema.

The server and foreign table corresponding to file\_fdw can be created only by the initial user of the database or the O&M administrator who enables the O&M mode.

When you create a foreign table using file\_fdw, you can add the following options:

-   filename

    File to be read. This parameter is mandatory and must be an absolute path.

-   format

    File format of the remote server, which is the same as the  **FORMAT**  option in the  **COPY**  statement. The value can be  **text**,  **csv**, or  **binary**.

-   header

    Whether the specified file has a header, which is the same as the  **HEADER**  option of the  **COPY**  statement.

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

    File-level null option, which is a Boolean option. If it is true, the value of the declared field cannot be an empty string. This option is the same as the  **FORCE\_NOT\_NULL**  option of the  **COPY**  statement.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   file\_fdw does not support the  **OIDS**  and  **FORCE\_QUOTE**  options of the  **COPY**  statement.
>-   These options can only be declared for a foreign table or the columns of the foreign table, not for the file\_fdw itself, nor for the server or user mapping that uses file\_fdw.
>-   To modify table-level options, you must obtain the system administrator role permissions. For security reasons, only the system administrator can determine the files to be read.
>-   For an external table that uses file\_fdw,  **EXPLAIN**  displays the name and size \(in bytes\) of the file to be read. If the keyword  **COSTS OFF**  is specified, the file size is not displayed.

## Using file\_fdw<a name="section1927220173219"></a>

-   To create a server object, use  **CREATE SERVER**.
-   To create a user mapping, use  **CREATE USER MAPPING**.
-   To create a foreign table, use  **CREATE FOREIGN TABLE**.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   The structure of the foreign table must be consistent with the data in the specified file.
    >-   When a foreign table is queried, no write operation is allowed.

-   To drop a foreign table, use  **DROP FOREIGN TABLE**.
-   To drop a user mapping, use  **DROP USER MAPPING**.
-   To drop a server object, use  **DROP SERVER**.

## Precautions<a name="section1841910239211"></a>

-   To use file\_fdw, you need to specify the file to be read. Prepare the file and grant the read permission on the file for the database to access the file.
-   **DROP EXTENSION file\_fdw**  is not supported.

