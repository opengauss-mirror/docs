# # postgres\_fdw<a name="EN-US_TOPIC_0272283428"></a>

postgres\_fdw is an open-source plug-in. Its code is released with the PostgreSQL source code. openGauss is developed and adapted based on the open-source postgres\_fdw source code \([https://ftp.postgresql.org/pub/source/v9.4.26/postgresql-9.4.26.tar.gz](https://ftp.postgresql.org/pub/source/v9.4.26/postgresql-9.4.26.tar.gz)\) in PostgreSQL 9.4.26.

The postgres\_fdw plug-in is involved in compilation by default. After installing openGauss using the installation package, you can directly use postgres\_fdw without performing other operations.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>Currently, postgres\_fdw supports only connections between openGauss databases, and does not support connections between openGauss and PostgreSQL databases.

## Using postgres\_fdw<a name="en-us_topic_0283136935_section862733411474"></a>

-   Load the postgres\_fdw extension using **CREATE EXTENSION postgres\_fdw;**.

-   Create a server object using **CREATE SERVER**.

-   Create a user mapping using **CREATE USER MAPPING**.

-   Create a foreign table using **CREATE FOREIGN TABLE**. The structure of the foreign table must be the same as that of the remote openGauss table.

-   Perform normal operations on the foreign table, such as **INSERT**, **UPDATE**, **DELETE**, **SELECT**, **EXPLAIN**, **ANALYZE** and **COPY**.

-   Drop a foreign table using **DROP FOREIGN TABLE**.

-   Drop a user mapping using **DROP USER MAPPING**.

-   Drop a server object using **DROP SERVER**.

-   Drop an extension using **DROP EXTENSION postgres\_fdw;**.

-   View the remote SQL plan: Enable the **show\_fdw\_remote\_plan** parameter to print the remote SQL plan during EXPLAIN. The EXPLAIN of the remote SQL statement inherits the **verbose** and **costs** options of the EXPLAIN statement.

## Main postgres_fdw Pushdown Components

Supported pushdown components:

-   Stable expression: consists of stable elements such as constants, non-system columns of tables, and built-in stable functions and operators.

-   Scan: supports single-table query, direct query of non-system columns, and pushdown of query components with simple and stable WHERE expressions.

-   Join: If two foreign tables are on the same foreign table server and their access permissions, join conditions, and filter conditions meet certain requirements, the foreign tables can be pushed down to the remote end for execution.

-   Group and aggregate: When the aggregate function, GROUP BY, and HAVING meet the expression check and other conditions, they can be pushed down to the remote end for execution.

-   Sort: When the sorting key meets certain conditions, it can be pushed down to the remote end for execution.

-   LIMIT: If a LIMIT expression meets the pushdown conditions, it can be pushed down to the remote end for execution.

-   ROWMARK: Generally, rowmarks can be pushed down.

Unsupported pushdown components:

-   WINDOWS FUNCTION, DISTINCT, GROUPING SETS

-   UNION, EXCEPT, INTERSECT

-   When JOIN exists in UPDATE, DELETE, or ROWMARK, the recheck behavior of the EPQ mechanism may be triggered. In this case, pushdown is not supported.

-   Other components that do not meet the preceding pushdown requirements, such as the system column.

## Common Issues<a name="section16239134819476"></a>

-   When a foreign table is created on the openGauss, the table is not created on the remote openGauss database. You need to use the Oracle client to connect to the remote openGauss database to create a table.

-   The foreign table does not distinguish the specific table type of the remote table, check whether the table structure is correct, or even check whether the table exists. You need to maintain and ensure the attribute relationships by yourself.

-   The openGauss user used for executing **CREATE USER MAPPING** must have the permission to remotely connect to the openGauss database and perform operations on tables. Before using a foreign table, you can use the gsql client on the local machine and use the corresponding user name and password to check whether the remote openGauss database can be successfully connected and operations can be performed.


## Precautions<a name="section121691157134716"></a>

-   SQL operators are executed in a certain sequence. If an operator cannot be pushed down, all subsequent upper-layer operators cannot be pushed down.

-   The **IMPORT FOREIGN SCHEMA** syntax is not supported.

-   **CREATE TRIGGER** cannot be executed for foreign tables.

-   A foreign table cannot be created as a partitioned table or mapped to a specific partition.
