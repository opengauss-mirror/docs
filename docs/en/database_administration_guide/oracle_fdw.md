---
description: This document describes oracle_fdw Foreign Data Wrapper for Oracle in openGauss, covering topics such as Compiling oracle_fdw, Using oracle_fdw.
keywords: [openGauss, oracle_fdw Foreign Data Wrapper for Oracle, database administration, Compiling oracle_fdw, Using oracle_fdw]
---

# oracle_fdw Foreign Data Wrapper for Oracle

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:44:41.584Z pushedAt=2026-09-11T09:27:08.707Z -->

oracle_fdw (foreign data wrapper for oracle) is a foreign data wrapper for Oracle and an [open-source plugin](https://github.com/laurenz/oracle_fdw). openGauss is developed and adapted based on the open-source [oracle_fdw Release 2.2.0](https://github.com/laurenz/oracle_fdw/archive/ORACLE_FDW_2_2_0.tar.gz).

Compiling and using oracle_fdw requires the Oracle development package in the environment, so openGauss does not compile oracle_fdw by default. The following sections describe how to compile and use oracle_fdw.

## Compiling oracle_fdw<a name="section195674224432"></a>

Compiling oracle_fdw requires installing Oracle development libraries and header files.

Select an appropriate operating environment and version, then download and install the **Basic Package** and **SDK Package**. In addition, the **SQLPlus Package** is an Oracle client tool that can also be installed as needed for connecting to Oracle Server for testing.

After installing the development packages, you can begin compiling oracle_fdw. During compilation, you need to add the **--enable-oracle-fdw** option when executing **configure**. Then proceed with the standard openGauss compilation process. (For openGauss compilation, refer to *Software Installation and Compilation*.)

After compilation, the output is **oracle_fdw.so**, located in the **lib/postgresql/** directory under the installation path. The SQL files and control files related to oracle_fdw are located in the **share/postgresql/Extension/** directory under the installation path.

If the **--enable-oracle-fdw** option was not included during compilation and installation, you can compile oracle_fdw again after openGauss installation is complete, and then manually place the compilation output **oracle_fdw.so** into the corresponding installation directory **lib/postgresql/**, and place **oracle_fdw--1.0--1.1.sql**, **oracle_fdw--1.1.sql**, and **oracle_fdw.control** into the corresponding installation directory **share/postgresql/Extension/**.

## Using oracle_fdw<a name="section15777182920432"></a>

- Using oracle_fdw requires connecting to Oracle. Install the Oracle server on your own.

- Load the oracle_fdw extension: **CREATE Extension oracle_fdw**

- Create a server object: **CREATE SERVER**

- Create a user mapping: **CREATE USER MAPPING**

- Create a foreign table: **CREATE FOREIGN TABLE**

    The table structure of the foreign table must be consistent with that of the table in the Oracle database. Note: The first column of the table on the Oracle server must have a uniqueness constraint (such as PRIMARY KEY or UNIQUE).

- Perform normal operations on the foreign table, such as **INSERT**, **UPDATE**, **DELETE**, **SELECT**, **EXPLAIN**, **ANALYZE**, and **COPY**.

- Delete a foreign table: **DROP FOREIGN TABLE**

- Delete a user mapping: **DROP USER MAPPING**

- Delete the server object: **DROP SERVER**

- Delete the extension: **DROP Extension oracle_fdw**

## FAQ <a name="section41707373437"></a>

- When creating a foreign table on openGauss, the corresponding table is not automatically created in the Oracle database. You need to manually create the table in the Oracle database.

- The Oracle user specified in the **CREATE USER MAPPING** statement must have the privileges to connect to the Oracle database remotely and to perform operations on the relevant tables. Before using the foreign table, you can use an Oracle client on the machine where the openGauss server is located to verify that you can successfully connect to Oracle and perform operations using the corresponding username and password.

- When executing **CREATE Extension oracle_fdw;**, the error **libclntsh.so: cannot open shared object file: No such file or directory** may occur. This is because the Oracle development library libclntsh.so is not in a relevant system path. You can first locate the specific path of libclntsh.so, and then add the folder containing the .so file to **/etc/ld.so.conf**. For example, if the path of libclntsh.so is **/usr/lib/oracle/11.2/client64/lib/libclntsh.so.11.1**, add the directory **/usr/lib/oracle/11.2/client64/lib/** to the end of the **/etc/ld.so.conf** file. Then run **ldconfig** to apply the changes. Note that this operation requires **root** privileges.

## Precautions<a name="section12951245164312"></a>

- **SELECT JOIN** between two Oracle foreign tables does not support pushdown to the Oracle server. It will be split into two SQL statements and sent to Oracle for execution, and the results will be aggregated on the openGauss side.

- The **IMPORT FOREIGN SCHEMA** syntax is not supported.

- The **CREATE TRIGGER** operation on foreign tables is not supported.
