# oracle\_fdw<a name="EN-US_TOPIC_0272283426"></a>

oracle\_fdw is an  [open-source plug-in](https://github.com/laurenz/oracle_fdw). openGauss is developed and adapted based on the open-source  [oracle\_fdw Release 2.2.0](https://github.com/laurenz/oracle_fdw/archive/ORACLE_FDW_2_2_0.tar.gz).

To compile and use oracle\_fdw, the Oracle development packages must be included in the environment. Therefore, openGauss does not compile oracle\_fdw by default. The following describes how to compile and use oracle\_fdw.

## Compiling oracle\_fdw<a name="section195674224432"></a>

To compile oracle\_fdw, install the Oracle development library and header files from the  [Oracle official website](https://www.oracle.com/database/technologies/instant-client/downloads.html).

Select a proper running environment and version, download  **Basic Package**  and  **SDK Package**, and install them. In addition,  **SQLPlus Package**  is a client tool of the Oracle server. You can install it as required to connect to the Oracle server for testing.

After installing the development packages, start oracle\_fdw compilation. Add the  **--enable-oracle-fdw**  option when running the  **configure**  command. Perform compilation using the common openGauss compilation method. \(For details about openGauss compilation reference, see  _Software Compilation and Installation_.\)

After the compilation is complete, the  **oracle\_fdw.so**  file is generated in  **lib/postgresql/**  in the installation directory. SQL files and control files related to oracle\_fdw are stored in  **share/postgresql/extension/**  in the installation directory.

If the  **--enable-oracle-fdw**  option is not added during compilation and installation, compile oracle\_fdw again after openGauss is installed, and then manually place the  **oracle\_fdw.so**  file to  **lib/postgresql/**  in the installation directory, and place  **oracle\_fdw--1.0--1.1.sql**,  **oracle\_fdw--1.1.sql**, and  **oracle\_fdw.control**  to  **share/postgresql/extension/**  in the installation directory.

## Using oracle\_fdw<a name="section15777182920432"></a>

-   To use oracle\_fdw, install and connect to the Oracle server.

-   Load the oracle\_fdw extension using  **CREATE EXTENSION oracle\_fdw;**.

-   Create a server object using  **CREATE SERVER**.

-   Create a user mapping using  **CREATE USER MAPPING**.

-   Create a foreign table using  **CREATE FOREIGN TABLE**. The structure of the foreign table must be the same as that of the Oracle table. The first column in the table on the Oracle server must be unique, for example,  **PRIMARY KEY**  and  **UNIQUE**.

-   Perform normal operations on the foreign table, such as  **INSERT**,  **UPDATE**,  **DELETE**,  **SELECT**,  **EXPLAIN**,  **ANALYZE**  and  **COPY**.

-   Drop a foreign table using  **DROP FOREIGN TABLE**.

-   Drop a user mapping using  **DROP USER MAPPING**.

-   Drop a server object using  **DROP SERVER**.

-   Drop an extension using  **DROP EXTENSION oracle\_fdw;**.


## Common Issues<a name="section41707373437"></a>

-   When a foreign table is created on the openGauss, the table is not created on the Oracle server. You need to use the Oracle client to connect to the Oracle server to create a table.

-   The Oracle user used for executing  **CREATE USER MAPPING**  must have the permission to remotely connect to the Oracle server and perform operations on tables. Before using a foreign table, you can use the Oracle client on the machine where the openGauss server is located and use the corresponding user name and password to check whether the Oracle server can be successfully connected and operations can be performed.

-   When  **CREATE EXTENSION oracle\_fdw;**  is executed, the message  **libclntsh.so: cannot open shared object file: No such file or directory**  is displayed. The reason is that the Oracle development library  **libclntsh.so**  is not in the related path of the system. You can find the specific path of  **libclntsh.so**, and then add the folder where the  **libclntsh.so**  file is located to  **/etc/ld.so.conf**. For example, if the path of  **libclntsh.so**  is  **/usr/lib/oracle/11.2/client64/lib/libclntsh.so.11.1**, add  **/usr/lib/oracle/11.2/client64/lib/**  to the end of  **/etc/ld.so.conf**. Run the  **ldconfig**  command for the modification to take effect. Note that this operation requires the  **root**  permission.


## Precautions<a name="section12951245164312"></a>

-   **SELECT JOIN**  between two Oracle foreign tables cannot be pushed down to the Oracle server for execution. Instead,  **SELECT JOIN**  is divided into two SQL statements and transferred to the Oracle server for execution. Then the processing result is summarized in the openGauss.

-   The  **IMPORT FOREIGN SCHEMA**  syntax is not supported.

-   **CREATE TRIGGER**  cannot be executed for foreign tables.


