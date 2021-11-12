# postgres\_fdw<a name="EN-US_TOPIC_0289899930"></a>

postgres\_fdw is an open-source plug-in. Its code is released with the PostgreSQL source code. openGauss is developed and adapted based on the open-source postgres\_fdw source code \([https://ftp.postgresql.org/pub/source/v9.4.26/postgresql-9.4.26.tar.gz](https://ftp.postgresql.org/pub/source/v9.4.26/postgresql-9.4.26.tar.gz)\) in PostgreSQL 9.4.26.

The postgres\_fdw plug-in is involved in compilation by default. After installing openGauss using the installation package, you can directly use postgres\_fdw without performing other operations.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Currently, postgres\_fdw supports only connections between openGauss databases, and does not support connections between openGauss and PostgreSQL databases.

## Using postgres\_fdw<a name="en-us_topic_0283136935_section862733411474"></a>

-   Load the postgres\_fdw extension using  **CREATE EXTENSION postgres\_fdw;**.

-   Create a server object using  **CREATE SERVER**.

-   Create a user mapping using  **CREATE USER MAPPING**.

-   Create a foreign table using  **CREATE FOREIGN TABLE**. The structure of the foreign table must be the same as that of the remote openGauss table.

-   Perform normal operations on the foreign table, such as  **INSERT**,  **UPDATE**,  **DELETE**,  **SELECT**,  **EXPLAIN**,  **ANALYZE**  and  **COPY**.

-   Drop a foreign table using  **DROP FOREIGN TABLE**.

-   Drop a user mapping using  **DROP USER MAPPING**.

-   Drop a server object using  **DROP SERVER**.

-   Drop an extension using  **DROP EXTENSION postgres\_fdw;**.


## Common Issues<a name="en-us_topic_0283136935_section16239134819476"></a>

-   When a foreign table is created on openGauss, the table is not created on the remote openGauss database. You need to use a client to connect to the remote openGauss database to create a table.

-   The openGauss user used for executing  **CREATE USER MAPPING**  must have the permission to remotely connect to the openGauss database and perform operations on tables. Before using a foreign table, you can use the gsql client on the local machine and use the corresponding user name and password to check whether the remote openGauss database can be successfully connected and operations can be performed.


## Precautions<a name="en-us_topic_0283136935_section121691157134716"></a>

-   **SELECT JOIN**  between two postgres\_fdw foreign tables cannot be pushed down to the remote openGauss database for execution. Instead,  **SELECT JOIN**  is divided into two SQL statements and transferred to the remote openGauss database for execution. Then the processing result is summarized locally.

-   The  **IMPORT FOREIGN SCHEMA**  syntax is not supported.

-   **CREATE TRIGGER**  cannot be executed for foreign tables.


