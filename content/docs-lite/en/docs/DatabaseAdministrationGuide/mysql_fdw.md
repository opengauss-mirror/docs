# mysql\_fdw<a name="EN-US_TOPIC_0289900468"></a>

mysql\_fdw is an  [open-source plug-in](https://github.com/EnterpriseDB/mysql_fdw). openGauss is developed and adapted based on the open-source  [mysql\_fdw Release 2.5.3](https://github.com/EnterpriseDB/mysql_fdw/archive/REL-2_5_3.tar.gz).

To compile and use mysql\_fdw, the MariaDB development packages must be included in the environment. Therefore, openGauss does not compile mysql\_fdw by default. The following describes how to compile and use mysql\_fdw.

## Compiling mysql\_fdw<a name="en-us_topic_0283137373_section206261540193912"></a>

To compile mysql\_fdw, you need to install the development library and header files of MariaDB. You are advised to use the  [official source](http://downloads.mariadb.org/mariadb/repositories)  of MariaDB.

After the repository is configured, run the  **yum install MariaDB-devel MariaDB-shared**  command to install the related development libraries. In addition,  **MariaDB-client**  is a client tool of the MariaDB. You can install it as required to connect to the MariaDB for testing.

After installing the development packages, start mysql\_fdw compilation. Add the  **--enable-mysql-fdw**  option when running the  **configure**  command. Then perform compilation using the common openGauss compilation method. \(See  _Software Compilation and Installation_  for details about openGauss compilation.\)

After the compilation is complete, the  **mysql\_fdw.so**  file is generated in  **lib/postgresql/**  in the installation directory. SQL files and control files related to mysql\_fdw are stored in  **share/postgresql/extension/**  in the installation directory.

If the  **--enable-mysql-fdw**  option is not added during compilation and installation, compile mysql\_fdw again after openGauss is installed, and then manually place the  **mysql\_fdw.so**  file to  **lib/postgresql/**  in the installation directory, and place  **mysql\_fdw--1.0--1.1.sql**,  **mysql\_fdw--1.1.sql**, and  **mysql\_fdw.control**  to  **share/postgresql/extension/**  in the installation directory.

## Using mysql\_fdw<a name="en-us_topic_0283137373_section1776874817393"></a>

-   To use mysql\_fdw, install and connect to MariaDB or MySQL server.

-   Load the mysql\_fdw extension using  **CREATE EXTENSION mysql\_fdw;**.

-   Create a server object using  **CREATE SERVER**.

-   Create a user mapping using  **CREATE USER MAPPING**.

-   Create a foreign table using  **CREATE FOREIGN TABLE**. The structure of the foreign table must be the same as that of the MySQL or MariaDB table. The first column in the table on the MySQL or MariaDB must be unique, for example,  **PRIMARY KEY**  and  **UNIQUE**.

-   Perform normal operations on the foreign table, such as  **INSERT**,  **UPDATE**,  **DELETE**,  **SELECT**,  **EXPLAIN**,  **ANALYZE**  and  **COPY**.

-   Drop a foreign table using  **DROP FOREIGN TABLE**.

-   Drop a user mapping using  **DROP USER MAPPING**.

-   Drop a server object using  **DROP SERVER**.

-   Drop an extension using  **DROP EXTENSION mysql\_fdw;**.


## Common Issues<a name="en-us_topic_0283137373_section7506175533915"></a>

-   When a foreign table is created on openGauss, the table is not created on the MariaDB or MySQL server. You need to use the MariaDB or MySQL server client to connect to the MariaDB or MySQL server to create a table.

-   The MariaDB or MySQL server user used for creating  **USER MAPPING**  must have the permission to remotely connect to the MariaDB or MySQL server and perform operations on tables. Before using a foreign table, you can use the MariaDB or MySQL server client on the machine where the openGauss server is located and use the corresponding user name and password to check whether the MariaDB or MySQL server can be successfully connected and operations can be performed.

-   The  **Can't initialize character set SQL\_ASCII \(path: compiled\_in\)**  error occurs when the DML operation is performed on a foreign table. MariaDB does not support the  **SQL\_ASCII**  encoding format. Currently, this problem can be resolved only by modifying the encoding format of the openGauss database. Change the database encoding format to  **update pg\_database set encoding = pg\_char\_to\_encoding\('UTF-8'\) where datname = 'postgres';**. Set  **datname**  based on the actual requirements. After the encoding format is changed, start a gsql session again so that mysql\_fdw can use the updated parameters. You can also use  **--locale=LOCALE**  when running  **gs\_initdb**  to set the default encoding format to non-SQL\_ASCII.


## Precautions<a name="en-us_topic_0283137373_section17197204403"></a>

-   **SELECT JOIN**  between two MySQL foreign tables cannot be pushed down to the MariaDB or MySQL server for execution. Instead,  **SELECT JOIN**  is divided into two SQL statements and transferred to the MariaDB or MySQL server for execution. Then the processing result is summarized in openGauss.

-   The  **IMPORT FOREIGN SCHEMA**  syntax is not supported.

-   **CREATE TRIGGER**  cannot be executed for foreign tables.


