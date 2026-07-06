# Dolphin

## Dolphin Overview<a name="EN-US_TOPIC_0000001246077429"></a>

openGauss provides Dolphin extensions (version: Dolphin-1.0.0). Dolphin extensions of openGauss are compatible with MySQL databases (dbcompatibility='B') in terms of keywords, data types, constants and macros, functions and operators, expressions, type conversion, DDL/DML/DCL syntax, stored procedures/user-defined functions, and system views.

## Dolphin Restrictions<a name="EN-US_TOPIC_0000001201437540"></a>

- The lite edition is not supported.
- The Dolphin plug-in cannot be deleted.
- The Dolphin plug-in can be created only in the B-compatible database.
- The Dolphin plug-in needs to create data types, functions and other objects in schemas such as pg_catalog when it is first loaded. This operation does not require the currently connected user to have initial user permissions. A B-compatible database must have the Dolphin plug-in loaded before it can be connected to. openGauss automatically loads the Dolphin plug-in upon the first connection to a B-compatible database.
- All added or modified syntaxes in Dolphin cannot be viewed by running `\h` on the gsql client, and cannot be automatically supplemented on the gsql client.
- The creation of the Dolphin plug-in deletes the functions and types with the same name required by the plug-in that exists in the database and the objects that previously depend on the plug-in.

## Dolphin Installation<a name="EN-US_TOPIC_0000001201117578"></a>

The plug-in is automatically installed and loaded. You do not need to manually install and load the plug-in. To manually compile and load the plug-in, perform the following steps:
    
### Compilation and Installation

1. Compile and install openGauss.

2. Copy the Dolphin source code to the **contrib** directory of the openGauss source code.

3. Go to the Dolphin directory and run **make install**.

4. Create a B-compatible database. The dolphin plugin will be automatically loaded upon connecting to the database.

### OM Installation

1. Install openGauss on the OM.

2. Copy the files required by the plug-in.  
    Path of **dolphin.so**: app/lib/postgresql/  
    Path of **dolphin.control** and **dolphin--1.0.sql**: app/share/postgresql/extension
3. Create a B-compatible database. The dolphin plugin will be automatically loaded upon connecting to the database.
