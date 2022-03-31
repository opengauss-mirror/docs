# GRANT<a name="EN-US_TOPIC_0289900312"></a>

## Function<a name="en-us_topic_0283137177_en-us_topic_0237122166_en-us_topic_0059778755_s4bc6f47f2f9e45c18707d7219f3987ee"></a>

**GRANT**  grants permissions to roles and users.

**GRANT**  is used in the following scenarios:

-   **Granting system permissions to roles or users**

    System permissions are also called user attributes, including  **SYSADMIN**,  **CREATEDB**,  **CREATEROLE**,  **AUDITADMIN**,  **MONADMIN**,  **OPRADMIN**,  **POLADMIN**,  **INHERIT**,  **REPLICATION**,  **VCADMIN**, and  **LOGIN**.

    They can be specified only by the  **CREATE ROLE**  or  **ALTER ROLE**  statement. The  **SYSADMIN**  permissions can be granted and revoked using  **GRANT ALL PRIVILEGE**  and  **REVOKE ALL PRIVILEGE**, respectively. System permissions cannot be inherited by a user from a role, and cannot be granted using  **PUBLIC**.

-   **Granting database object permissions to roles or users**

    Grant permissions on a database object \(table, view, column, database, function, schema, or tablespace\) to a role or user.

    **GRANT**  gives specific permissions on a database object to one or more roles. These permissions are added to those already granted, if any.

    The keyword  **PUBLIC**  indicates that the permissions are to be granted to all roles, including those that might be created later.  **PUBLIC**  can be thought of as an implicitly defined group that always includes all roles. Any particular role will have the sum of permissions granted directly to it, permissions granted to any role it is presently a member of, and permissions granted to  **PUBLIC**.

    If  **WITH GRANT OPTION**  is specified, the recipient of the permission can in turn grant it to others. Without a grant option, the recipient cannot do that. This option cannot be granted to  **PUBLIC**, which is a unique openGauss attribute.

    openGauss grants the permissions for objects of certain types to  **PUBLIC**. By default, permissions on tables, columns, sequences, foreign data sources, foreign servers, schemas, and tablespaces are not granted to  **PUBLIC**, but the following permissions are granted to  **PUBLIC**:  **CONNECT**  and  **CREATE TEMP TABLE**  permissions on databases,  **EXECUTE**  permission on functions, and  **USAGE**  permission on languages and data types \(including domains\). An object owner can revoke the default permissions granted to  **PUBLIC**  and grant permissions to other users as needed. For security purposes, you are advised to create an object and set its permissions in the same transaction so that other users do not have time windows to use the object. In addition, you can restrict the permissions of the  **PUBLIC**  user group by referring to t"Permission Management" in  _Security Hardening Guide_. These default permissions can be modified using the  **ALTER DEFAULT PRIVILEGES**  command.

    By default, an object owner has all permissions on the object. For security purposes, the owner can discard some permissions. However, the ALTER, DROP, COMMENT, INDEX, VACUUM, and re-grantable permissions of the object are inherent permissions implicitly owned by the owner.

-   **Granting the permissions of one role or user to others**

    Grant the permissions of one role or user to others. In this case, every role or user can be regarded as a set of one or more database permissions.

    If  **WITH ADMIN OPTION**  is specified, the recipients can in turn grant the permissions to other roles or users or revoke the permissions they have granted to other roles or users. If recipients' permissions are changed or revoked later, the grantees' permissions will also change.

    Database administrators can grant or revoke permissions for any roles or users. Roles with the  **CREATEROLE**  permission can grant or revoke permissions for non-admin roles.

-   **Granting ANY permissions to roles or users**

    Grant ANY permissions to a specified role or user. For details about the value range of the ANY permissions, see the syntax. If  **WITH ADMIN OPTION**  is specified, the grantee can grant the ANY permissions to or revoke them from other roles or users. The ANY permissions can be inherited by a role but cannot be granted to  **PUBLIC**. An initial user and the system administrator when separation of duties is disabled can grant the ANY permissions to or revoke them from any role or user.

    Currently, the following ANY permissions are supported:  **CREATE ANY TABLE**,  **ALTER ANY TABLE**,  **DROP ANY TABLE**,  **SELECT ANY TABLE**,  **INSERT ANY TABLE**,  **UPDATE ANY TABLE**,  **DELETE ANY TABLE**,  **CREATE ANY SEQUENCE**,  **CREATE ANY INDEX**,  **CREATE ANY FUNCTION**,  **EXECUTE ANY FUNCTION**,  **CREATE ANY PACKAGE**,** EXECUTE ANY PACKAGE**, and  **CREATE ANY TYPE**. For details about the ANY permission scope, see  [Table 1](#table1360121832117).


## Precautions<a name="en-us_topic_0283137177_en-us_topic_0237122166_en-us_topic_0059778755_section1780116145345"></a>

-   It is not allowed to grant the ANY permissions to  **PUBLIC**  or revoke the ANY permissions from  **PUBLIC**.
-   The ANY permissions are database permissions and are valid only for database objects that are granted with the permissions. For example,  **SELECT ANY TABLE**  only allows a user to view all user table data in the current database, but the user does not have the permission to view user tables in other databases.
-   Even if a user is granted with the ANY permissions, the user cannot perform INSERT, DELETE, UPDATE, and SELECT operations on the objects of private users.
-   The ANY permissions and the original permissions do not affect each other.
-   If a user is granted with the  **CREATE ANY TABLE**  permission, the owner of a table created in a schema with the same name as the user is the creator of the schema. When the user performs other operations on the table, the user needs to be granted with the corresponding operation permission.

## Syntax<a name="en-us_topic_0283137177_en-us_topic_0237122166_en-us_topic_0059778755_s9b21365068e9482782f400457afa8a01"></a>

-   Grant the table or view access permission to a user or role.

    ```
    GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | ALTER | DROP | COMMENT | INDEX | VACUUM } [, ...] 
          | ALL [ PRIVILEGES ] }
        ON { [ TABLE ] table_name [, ...]
           | ALL TABLES IN SCHEMA schema_name [, ...] }
        TO { [ GROUP ] role_name | PUBLIC } [, ...] 
        [ WITH GRANT OPTION ];
    
    ```

-   Grant the column access permission to a user or role.

    ```
    GRANT { {{ SELECT | INSERT | UPDATE | REFERENCES | COMMENT } ( column_name [, ...] )} [, ...] 
          | ALL [ PRIVILEGES ] ( column_name [, ...] ) }
        ON [ TABLE ] table_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the sequence access permission to a specified role or user. The  **LARGE**  field is optional. The assignment statement does not distinguish whether the sequence is LARGE.

    ```
    GRANT { { SELECT | UPDATE | USAGE | ALTER | DROP | COMMENT } [, ...] 
          | ALL [ PRIVILEGES ] }
        ON { [ [ LARGE ] SEQUENCE ] sequence_name [, ...]
           | ALL SEQUENCES IN SCHEMA schema_name [, ...] }
        TO { [ GROUP ] role_name | PUBLIC } [, ...] 
        [ WITH GRANT OPTION ];
    ```

-   Grant the database access permission to a user or role.

    ```
    GRANT { { CREATE | CONNECT | TEMPORARY | TEMP | ALTER | DROP | COMMENT } [, ...]
          | ALL [ PRIVILEGES ] }
        ON DATABASE database_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the domain access permission to a user or role.

    ```
    GRANT { USAGE | ALL [ PRIVILEGES ] }
        ON DOMAIN domain_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >In the current version, the domain access permission cannot be granted.

-   Grant the client master key \(CMK\) access permission to a specified user or role.

    ```
    GRANT { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON CLIENT_MASTER_KEY client_master_key [, ...] 
        TO { [ GROUP ] role_name | PUBLIC } [, ...] 
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >In the Lite scenario, openGauss provides this syntax, but encrypted database-related functions are unavailable.

-   Grant the column encryption key \(CEK\) access permission to a specified user or role.

    ```
    GRANT { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON COLUMN_ENCRYPTION_KEY column_encryption_key [, ...] 
        TO { [ GROUP ] role_name | PUBLIC } [, ...] 
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >In the Lite scenario, openGauss provides this syntax, but encrypted database-related functions are unavailable.

-   Grant the foreign data source access permission to a user or role.

    ```
    GRANT { USAGE | ALL [ PRIVILEGES ] }
        ON FOREIGN DATA WRAPPER fdw_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the foreign server access permission to a user or role.

    ```
    GRANT { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON FOREIGN SERVER server_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the function access permission to a user or role.

    ```
    GRANT { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON { FUNCTION {function_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...]
           | ALL FUNCTIONS IN SCHEMA schema_name [, ...] }
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the procedural procedure access permission to a user or role.

    ```
    GRANT { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON { PROCEDURE {proc_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...]
           | ALL PROCEDURE IN SCHEMA schema_name [, ...] }
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the procedural language access permission to a user or role.

    ```
    GRANT { USAGE | ALL [ PRIVILEGES ] }
        ON LANGUAGE lang_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the large object access permission to a specified user or role.

    ```
    GRANT { { SELECT | UPDATE } [, ...] | ALL [ PRIVILEGES ] }
        ON LARGE OBJECT loid [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >In the current version, the large object access permission cannot be granted.

-   Grant the schema access permission to a user or role.

    ```
    GRANT { { CREATE | USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON SCHEMA schema_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >When you grant table or view permissions to other users, you also need to grant the  **USAGE**  permission on the schema that the tables and views belong to. Without the  **USAGE**  permission, the users with table or view permissions can only see the object names, but cannot access them. This syntax cannot be used to grant the permission to create tables in schemas with the same name, but you can use the syntax for granting permission of a role to another user or role to achieve the same effect.

-   Grant the tablespace access permission to a user or role.

    ```
    GRANT { { CREATE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON TABLESPACE tablespace_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the type access permission to a user or role.

    ```
    GRANT { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON TYPE type_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >In the current version, the type access permission cannot be granted.

-   Grant the data source permission to a role.

    ```
    GRANT { USAGE | ALL [PRIVILEGES]}
       ON DATA SOURCE src_name [, ...]
       TO { [GROUP] role_name | PUBLIC } [, ...]
       [WITH GRANT OPTION];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >In the Lite scenario, openGauss provides this syntax, but the SQL on Anywhere capabilities are unavailable.

-   Grant the directory permission to a role.

    ```
    GRANT { { READ | WRITE | ALTER | DROP } [, ...] | ALL [PRIVILEGES] }
       ON DIRECTORY directory_name [, ...]
       TO { [GROUP] role_name | PUBLIC } [, ...]
       [WITH GRANT OPTION];
    ```

-   Grant the package permission to a role.

    ```
    GRANT { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [PRIVILEGES] }
       ON PACKAGE package_name [, ...]
       TO { [GROUP] role_name | PUBLIC } [, ...]
       [WITH GRANT OPTION];
    ```

-   Grant a role's permissions to another user or role.

    ```
    GRANT role_name [, ...]
       TO role_name [, ...]
       [ WITH ADMIN OPTION ];
    ```

-   Grant the  **sysadmin**  permission to a role.

    ```
    GRANT ALL { PRIVILEGES | PRIVILEGE }
       TO role_name;
    ```


-   Grant the ANY permissions to another user or role.

    ```
    GRANT { CREATE ANY TABLE | ALTER ANY TABLE | DROP ANY TABLE | SELECT ANY TABLE | INSERT ANY TABLE | UPDATE ANY TABLE |
      DELETE ANY TABLE | CREATE ANY SEQUENCE | CREATE ANY INDEX | CREATE ANY FUNCTION | EXECUTE ANY FUNCTION |
      CREATE ANY PACKAGE | EXECUTE ANY PACKAGE | CREATE ANY TYPE } [, ...]
      TO [ GROUP ] role_name [, ...]
      [ WITH ADMIN OPTION ];
    ```


## Parameter Description<a name="en-us_topic_0283137177_en-us_topic_0237122166_en-us_topic_0059778755_s3557d45c54124d86bc3f619358d806f8"></a>

The possible permissions are:

-   **SELECT**

    Allows  **SELECT**  from any column, or the specific columns listed, of the specified table, view, or sequence. The  **SELECT**  permission on the corresponding field is also required for  **UPDATE**  or DELETE.

-   **INSERT**

    Allows  **INSERT**  of a new row into a table.

-   **UPDATE**

    Allows  **UPDATE**  of any column of a table. Generally,  **UPDATE**  also requires the SELECT permission to query which rows need to be updated.  **SELECT ... FOR UPDATE**  and  **SELECT ... FOR SHARE**  also require this permission on at least one column, in addition to the  **SELECT**  permission.

-   **DELETE**

    Allows  **DELETE**  of a row from a table. Generally,  **DELETE**  also requires the SELECT permission to query which rows need to be deleted.

-   **TRUNCATE**

    Allows  **TRUNCATE**  on a table.

-   **REFERENCES**

    Allows creation of a foreign key constraint referencing a table. This permission is required on both referencing and referenced tables.

-   **CREATE**
    -   For databases, allows new schemas to be created within the database.
    -   For schemas, allows new objects to be created within the schema. To rename an existing object, you must own the object and have the  **CREATE**  permission on the schema of the object.
    -   For tablespaces, allows tables to be created within the tablespace, and allows databases and schemas to be created that have the tablespace as their default tablespace.

-   **CONNECT**

    Allows the grantee to connect to the database.

-   **EXECUTE**

    Allows calling a function, including use of any operators that are implemented on top of the function.

-   **USAGE**
    -   For procedural languages, allows use of the language for the creation of functions in that language.
    -   For schemas, allows access to objects contained in the schema. Without this permission, it is still possible to see the object names.
    -   For sequences, allows use of the  **nextval**  function.
    -   For data sources, specifies access permissions or is used as  **ALL PRIVILEGES**.

-   **ALTER**

    Allows users to modify the attributes of a specified object, excluding the owner and schema of the object.

-   **DROP**

    Allows users to delete specified objects.

-   **COMMENT**

    Allows users to define or modify comments of a specified object.

-   **INDEX**

    Allows users to create indexes on specified tables, manage indexes on the tables, and perform REINDEX and CLUSTER operations on the tables.

-   **VACUUM**

    Allows users to perform ANALYZE and VACUUM operations on specified tables.

-   **ALL PRIVILEGES**

    Grants all available permissions to a user or role at a time. Only a system administrator has the  **GRANT ALL PRIVILEGES**  permission.


**GRANT**  parameters are as follows:

-   **role\_name**

    Specifies the username.

-   **table\_name**

    Specifies the table name.

-   **column\_name**

    Specifies the column name.

-   **schema\_name**

    Specifies the schema name.

-   **database\_name**

    Specifies the database name.

-   **function\_name**

    Specifies the function name.

-   **procedure\_name**

    Specifies the stored procedure name.

-   **sequence\_name**

    Specifies the sequence name.

-   **domain\_name**

    Specifies the domain type name.

-   **fdw\_name**

    Specifies the foreign data wrapper name.

-   **lang\_name**

    Specifies the language name.

-   **type\_name**

    Specifies the type name.

-   **src\_name**

    Specifies the data source name.

-   **argmode**

    Specifies the parameter mode.

    Value range: a string. It must comply with the identifier naming convention.

-   **arg\_name**

    Specifies the parameter name.

    Value range: a string. It must comply with the identifier naming convention.

-   **arg\_type**

    Specifies the parameter type.

    Value range: a string. It must comply with the identifier naming convention.

-   **loid**

    Specifies the identifier of the large object that includes this page.

    Value range: a string. It must comply with the identifier naming convention.

-   **tablespace\_name**

    Specifies the tablespace name.

-   client\_master\_key

    Name of the client master key.

    Value range: a string. It must comply with the identifier naming convention.

-   column\_encryption\_key

    Name of the column encryption key.

    Value range: a string. It must comply with the identifier naming convention.

-   **directory\_name**

    Specifies the directory name.

    Value range: a string. It must comply with the identifier naming convention.

-   **WITH GRANT OPTION**

    If  **WITH GRANT OPTION**  is specified, the recipient of the permission can in turn grant it to others. Without a grant option, the recipient cannot do that. Grant options cannot be granted to  **PUBLIC**.


When a non-owner of an object attempts to GRANT permissions on the object:

-   The statement will fail outright if the user has no permissions whatsoever on the object.
-   As long as some permission is available, the statement will proceed, but it will grant only those permissions for which the user has grant options.
-   The  **GRANT ALL PRIVILEGES**  forms will issue a warning message if no grant options are held, while the other forms will issue a warning if grant options for any of the permissions specifically named in the statement are not held.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Database administrators can access all objects, regardless of object permission settings. This is comparable to the permissions of  **root**  in a Unix system. As with  **root**, it is unwise to operate as a system administrator except when necessary.
>**GRANT**  to a table partition will cause alarms.

-   WITH ADMIN OPTION

    If  **WITH ADMIN OPTION**  is specified for a role, the grantee can grant the role to other roles or users or revoke the role from other roles or users.

    For the ANY permissions, if  **WITH ADMIN OPTION**  is specified, the grantee can grant the ANY permissions to or revoke them from other roles or users.


**Table  1**  ANY permissions

<a name="table1360121832117"></a>
<table><thead align="left"><tr id="row116015189214"><th class="cellrowborder" valign="top" width="22.509999999999998%" id="mcps1.2.3.1.1"><p id="p6601181862115"><a name="p6601181862115"></a><a name="p6601181862115"></a>System Permission</p>
</th>
<th class="cellrowborder" valign="top" width="77.49000000000001%" id="mcps1.2.3.1.2"><p id="p26011318192119"><a name="p26011318192119"></a><a name="p26011318192119"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row5601171810211"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p196011187211"><a name="p196011187211"></a><a name="p196011187211"></a>CREATE ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p96013188214"><a name="p96013188214"></a><a name="p96013188214"></a>Users can create tables or views in the public and user schemas. The users must be granted with the permission to create sequences to create a table that contains serial columns.</p>
</td>
</tr>
<tr id="row8601131892110"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p9601201818210"><a name="p9601201818210"></a><a name="p9601201818210"></a>ALTER ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p4601518112115"><a name="p4601518112115"></a><a name="p4601518112115"></a>Users' <strong id="b19750325619"><a name="b19750325619"></a><a name="b19750325619"></a>ALTER</strong> permission on tables or views in the public and user schemas. If the users want to modify the unique index of a table to add a primary key constraint or unique constraint to the table, the users must be granted with the index permission for the table.</p>
</td>
</tr>
<tr id="row960101852112"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p11601111814216"><a name="p11601111814216"></a><a name="p11601111814216"></a>DROP ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p117212437315"><a name="p117212437315"></a><a name="p117212437315"></a>Users' <strong id="b1105199719"><a name="b1105199719"></a><a name="b1105199719"></a>DROP</strong> permission on tables or views in the public and user schemas.</p>
</td>
</tr>
<tr id="row2601171822114"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p11601121822110"><a name="p11601121822110"></a><a name="p11601121822110"></a>SELECT ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p8713439315"><a name="p8713439315"></a><a name="p8713439315"></a>Users' <strong id="b5706423774"><a name="b5706423774"></a><a name="b5706423774"></a>SELECT</strong> permission on tables or views in the public and user schemas, which is still subject to row-level access control.</p>
</td>
</tr>
<tr id="row1960171812214"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p2601218192119"><a name="p2601218192119"></a><a name="p2601218192119"></a>UPDATE ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p1770144313316"><a name="p1770144313316"></a><a name="p1770144313316"></a>Users' <strong id="b20608123317711"><a name="b20608123317711"></a><a name="b20608123317711"></a>UPDATE</strong> permission on tables or views in the public and user schemas, which is still subject to row-level access control.</p>
</td>
</tr>
<tr id="row1960141815214"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p56010186214"><a name="p56010186214"></a><a name="p56010186214"></a>INSERT ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p186911435319"><a name="p186911435319"></a><a name="p186911435319"></a>Users' <strong id="b1894924015710"><a name="b1894924015710"></a><a name="b1894924015710"></a>INSERT</strong> permission on tables or views in the public and user schemas.</p>
</td>
</tr>
<tr id="row186016187218"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p2060191816213"><a name="p2060191816213"></a><a name="p2060191816213"></a>DELETE ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p76816437315"><a name="p76816437315"></a><a name="p76816437315"></a>Users' <strong id="b75398472710"><a name="b75398472710"></a><a name="b75398472710"></a>DELETE</strong> permission on tables or views in the public and user schemas, which is still subject to row-level access control.</p>
</td>
</tr>
<tr id="row7827488255"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p1382104882516"><a name="p1382104882516"></a><a name="p1382104882516"></a>CREATE ANY FUNCTION</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p2799144511319"><a name="p2799144511319"></a><a name="p2799144511319"></a>Users can create functions or stored procedures in the user schemas.</p>
</td>
</tr>
<tr id="row1466925310257"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p8669135372515"><a name="p8669135372515"></a><a name="p8669135372515"></a>EXECUTE ANY FUNCTION</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p9669135311252"><a name="p9669135311252"></a><a name="p9669135311252"></a>Users' <strong id="b15784817384"><a name="b15784817384"></a><a name="b15784817384"></a>EXECUTE</strong> permission on functions or stored procedures in the public and user schemas.</p>
</td>
</tr>
<tr id="row9568146102610"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p14568184619264"><a name="p14568184619264"></a><a name="p14568184619264"></a>CREATE ANY PACKAGE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p14990113362"><a name="p14990113362"></a><a name="p14990113362"></a>Users can create packages in the public and user schemas.</p>
</td>
</tr>
<tr id="row47031450142617"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p27031350102618"><a name="p27031350102618"></a><a name="p27031350102618"></a>EXECUTE ANY PACKAGE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p37961145938"><a name="p37961145938"></a><a name="p37961145938"></a>Users' <strong id="b11140134186"><a name="b11140134186"></a><a name="b11140134186"></a>EXECUTE</strong> permission on packages in the public and user schemas.</p>
</td>
</tr>
<tr id="row1654415246293"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p254416244293"><a name="p254416244293"></a><a name="p254416244293"></a>CREATE ANY TYPE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p175443247299"><a name="p175443247299"></a><a name="p175443247299"></a>Users can create types in the public and user schemas.</p>
</td>
</tr>
<tr id="row1565211281297"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p1765242862910"><a name="p1765242862910"></a><a name="p1765242862910"></a>CREATE ANY SEQUENCE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p2079315451731"><a name="p2079315451731"></a><a name="p2079315451731"></a>Users can create sequences in the public and user schemas.</p>
</td>
</tr>
<tr id="row87515532292"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p14752155317297"><a name="p14752155317297"></a><a name="p14752155317297"></a>CREATE ANY INDEX</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p37921145332"><a name="p37921145332"></a><a name="p37921145332"></a>Users can create indexes in the public and user schemas. The users must be granted with the permission to create tablespaces to create a partitioned table index in a tablespace.</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If a user is granted with any ANY permission, the user has the  **USAGE**  permission on the public and user schemas but does not have the  **USAGE**  permission on the system schemas except  **public**  listed in  [Table 1](schemas-25.md#table167371825175015).

## Examples<a name="en-us_topic_0283137177_en-us_topic_0237122166_en-us_topic_0059778755_s724dfb1c8978412b95cb308b64dfa447"></a>

**Example: Granting system permissions to a user or role**

Create the  **joe**  user and grant the  **sysadmin**  permissions to it.

```
openGauss=# CREATE USER joe PASSWORD 'xxxxxxxxx';
openGauss=# GRANT ALL PRIVILEGES TO joe;
```

Then  **joe**  has the  **sysadmin**  permission.

**Example: Granting object permissions to a user or role**

1.  Revoke the  **sysadmin**  permission from the  **joe**  user. Grant the usage permission of the  **tpcds**  schema and all permissions on the  **tpcds.reason**  table to  **joe**.

    ```
    openGauss=# REVOKE ALL PRIVILEGES FROM joe;
    openGauss=# GRANT USAGE ON SCHEMA tpcds TO joe;
    openGauss=# GRANT ALL PRIVILEGES ON tpcds.reason TO joe;
    ```

    Then  **joe**  has all permissions on the  **tpcds.reason**  table, including create, retrieve, update, and delete.

2.  Grant the retrieve permission of  **r\_reason\_sk**,  **r\_reason\_id**, and  **r\_reason\_desc**  columns and the update permission of the  **r\_reason\_desc**  column in the  **tpcds.reason**  table to  **joe**.

    ```
    openGauss=# GRANT select (r_reason_sk,r_reason_id,r_reason_desc),update (r_reason_desc) ON tpcds.reason TO joe;
    ```

    Then  **joe**  has the retrieve permission of  **r\_reason\_sk**  and  **r\_reason\_id**  columns in the  **tpcds.reason**  table. To enable  **joe**  to grant these permissions to other users, execute the following statement:

    ```
    openGauss=# GRANT select (r_reason_sk, r_reason_id) ON tpcds.reason TO joe WITH GRANT OPTION;
    ```

    Grant the connection and schema creation permissions of openGauss to the  **joe**  user, and allow the  **joe**  user to grant these permissions to other users.

    ```
    openGauss=# GRANT create,connect on database openGauss TO joe WITH GRANT OPTION;
    ```

    Create the  **tpcds\_manager**  role, grant the access and object creation permissions of the  **tpcds**  schema to  **tpcds\_manager**, but do not allow  **tpcds\_manager**  to grant these permissions to others.

    ```
    openGauss=# CREATE ROLE tpcds_manager PASSWORD 'xxxxxxxxx';
    openGauss=# GRANT USAGE,CREATE ON SCHEMA tpcds TO tpcds_manager;
    ```

    Grant all permissions on the  **tpcds\_tbspc**  tablespace to  **joe**, but do not allow  **joe**  to grant these permissions to others.

    ```
    openGauss=# CREATE TABLESPACE tpcds_tbspc RELATIVE LOCATION 'tablespace/tablespace_1';
    openGauss=# GRANT ALL ON TABLESPACE tpcds_tbspc TO joe;
    ```


**Example: Granting the permissions of one user or role to others**

1.  Create the  **manager**  role, grant  **joe**'s permissions to  **manager**, and allow  **manager**  to grant these permissions to others.

    ```
    openGauss=# CREATE ROLE manager PASSWORD 'xxxxxxxxx';
    openGauss=# GRANT joe TO manager WITH ADMIN OPTION;
    ```

2.  Create the  **senior\_manager**  user and grant  **manager**'s permissions to it.

    ```
    openGauss=# CREATE ROLE senior_manager PASSWORD 'xxxxxxxxx';
    openGauss=# GRANT manager TO senior_manager;
    ```

3.  Revoke permissions and delete users.

    ```
    openGauss=# REVOKE manager FROM joe;
    openGauss=# REVOKE senior_manager FROM manager;
    openGauss=# DROP USER manager;
    ```


**Example: Revoking permissions and deleting roles and users**

```
openGauss=# REVOKE ALL PRIVILEGES ON tpcds.reason FROM joe;
openGauss=# REVOKE ALL PRIVILEGES ON SCHEMA tpcds FROM joe;
openGauss=# REVOKE ALL ON TABLESPACE tpcds_tbspc FROM joe;
openGauss=# DROP TABLESPACE tpcds_tbspc;
openGauss=# REVOKE USAGE,CREATE ON SCHEMA tpcds FROM tpcds_manager;
openGauss=# DROP ROLE tpcds_manager;
openGauss=# DROP ROLE senior_manager;
openGauss=# DROP USER joe CASCADE;
```

## Helpful Links<a name="en-us_topic_0283137177_en-us_topic_0237122166_en-us_topic_0059778755_s3bb41459be684975af982bfe2508c335"></a>

[REVOKE](revoke.md)  and  [ALTER DEFAULT PRIVILEGES](alter-default-privileges.md)

