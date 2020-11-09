# GRANT<a name="EN-US_TOPIC_0242370630"></a>

## Function<a name="en-us_topic_0237122166_en-us_topic_0059778755_s4bc6f47f2f9e45c18707d7219f3987ee"></a>

**GRANT**  is used to grant permissions to roles and users.

**GRANT**  is used in the following scenarios:

-   **Granting system permissions to roles or users**

    System permissions are also called user properties, including  **SYSADMIN**,  **CREATEDB**,  **CREATEROLE**,  **AUDITADMIN**, and  **LOGIN**.

    They can be specified only by the  **CREATE ROLE**  or  **ALTER ROLE**  statement. The  **SYSADMIN**  permissions can be granted and revoked using  **GRANT ALL PRIVILEGE**  and  **REVOKE ALL PRIVILEGE**, respectively. System permissions cannot be inherited by a user from a role, and cannot be granted using  **PUBLIC**.

-   **Granting database object permissions to roles or users**

    Grant permissions related to database objects \(tables, views, specified columns, databases, functions, schemas, and tablespaces\) to specified roles or users.

    **GRANT**  gives specific permissions on a database object to one or more roles. These permissions are added to those already granted, if any.

    The keyword  **PUBLIC**  indicates that the permissions are to be granted to all roles, including those that might be created later.  **PUBLIC**  can be thought of as an implicitly defined group that always includes all roles. Any particular role will have the sum of permissions granted directly to it, permissions granted to any role it is presently a member of, and permissions granted to  **PUBLIC**.

    If  **WITH GRANT OPTION**  is specified, the recipient of the permission can in turn grant it to others. Without a grant option, the recipient cannot do that.  **GRANT**  options cannot be granted to  **PUBLIC**. Only openGauss supports this operation.

    openGauss grants the permissions for objects of certain types to  **PUBLIC**. By default, permissions on tables, columns, sequences, foreign data sources, foreign servers, schemas, and tablespaces are not granted to  **PUBLIC**, but the following permissions are granted to  **PUBLIC**:  **CONNECT**  and  **CREATE TEMP TABLE**  permissions on databases,  **EXECUTE**  permission on functions, and  **USAGE**  permission on languages and data types \(including domains\). An object owner can revoke the default permissions granted to  **PUBLIC**  and grant permissions to other users as needed. For security purposes, you are advised to create an object and set its permissions in the same transaction so that other users do not have time windows to use the object. In addition, you can run the  **ALTER DEFAULT PRIVILEGES**  statement to modify the default permissions.

-   **Granting a role's or user's permissions to other roles or users**

    Grant a role's or user's permissions to one or more roles or users. In this case, every role or user can be regarded as a set of one or more database permissions.

    If  **WITH ADMIN OPTION**  is specified, the recipients can in turn grant the permissions to other roles or users or revoke the permissions they have granted to other roles or users. If recipients' permissions are changed or revoked later, the grantees' permissions will also change.

    Database administrators can grant or revoke permissions for any roles or users. Roles with the  **CREATEROLE**  permission can grant or revoke permissions for non-admin roles.


## Precautions<a name="en-us_topic_0237122166_en-us_topic_0059778755_section1780116145345"></a>

None

## Syntax<a name="en-us_topic_0237122166_en-us_topic_0059778755_s9b21365068e9482782f400457afa8a01"></a>

-   Grant the table or view access permission to a specified user or role.

    ```
    GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES } [, ...] 
          | ALL [ PRIVILEGES ] }
        ON { [ TABLE ] table_name [, ...]
           | ALL TABLES IN SCHEMA schema_name [, ...] }
        TO { [ GROUP ] role_name | PUBLIC } [, ...] 
        [ WITH GRANT OPTION ];
    
    ```

-   Grant the column access permission to a specified user or role.

    ```
    GRANT { {{ SELECT | INSERT | UPDATE | REFERENCES } ( column_name [, ...] )} [, ...] 
          | ALL [ PRIVILEGES ] ( column_name [, ...] ) }
        ON [ TABLE ] table_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the database access permission to a specified user or role.

    ```
    GRANT { { CREATE | CONNECT | TEMPORARY | TEMP } [, ...]
          | ALL [ PRIVILEGES ] }
        ON DATABASE database_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the domain access permission to a specified user or role.

    ```
    GRANT { USAGE | ALL [ PRIVILEGES ] }
        ON DOMAIN domain_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The current version does not support granting the domain access permission.  

-   Grant the external data source access permission to a specified user or role.

    ```
    GRANT { USAGE | ALL [ PRIVILEGES ] }
        ON FOREIGN DATA WRAPPER fdw_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the external server access permission to a specified user or role.

    ```
    GRANT { USAGE | ALL [ PRIVILEGES ] }
        ON FOREIGN SERVER server_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the function access permission to a specified user or role.

    ```
    GRANT { EXECUTE | ALL [ PRIVILEGES ] }
        ON { FUNCTION {function_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...]
           | ALL FUNCTIONS IN SCHEMA schema_name [, ...] }
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the procedural language access permission to a specified user or role.

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
    >The current version does not support granting the large object access permission.  

-   Grant the schema access permission to a specified user or role.

    ```
    GRANT { { CREATE | USAGE } [, ...] | ALL [ PRIVILEGES ] }
        ON SCHEMA schema_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >When granting table or view permissions to other users, you also need to grant the  **USAGE**  permission on the containing schema. Without the  **USAGE**  permission, the recipients can only see the object names, but cannot access them.  

-   Grant the tablespace access permission to a specified user or role.

    ```
    GRANT { CREATE | ALL [ PRIVILEGES ] }
        ON TABLESPACE tablespace_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   Grant the type access permission to a specified user or role.

    ```
    GRANT { USAGE | ALL [ PRIVILEGES ] }
        ON TYPE type_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The current version does not support granting the type access permission.  

-   Grant a role's permissions to other users or roles.

    ```
    GRANT role_name [, ...]
       TO role_name [, ...]
       [ WITH ADMIN OPTION ];
    ```

-   Grant the sysadmin permissions to a specified role.

    ```
    GRANT ALL { PRIVILEGES | PRIVILEGE }
       TO role_name;
    ```


-   Grant the data source permissions to a specified role.

    ```
    GRANT {USAGE | ALL [PRIVILEGES]}
       ON DATA SOURCE src_name [, ...]
       TO {[GROUP] role_name | PUBLIC} [, ...] [WITH GRANT OPTION];
    ```


-   Grant the directory permissions to a specified role.

    ```
    GRANT {READ|WRITE| ALL [PRIVILEGES]}
       ON DIRECTORY directory_name [, ...]
       TO {[GROUP] role_name | PUBLIC} [, ...] [WITH GRANT OPTION];
    ```


## Parameter Description<a name="en-us_topic_0237122166_en-us_topic_0059778755_s3557d45c54124d86bc3f619358d806f8"></a>

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

-   **funcation\_name**

    Specifies the function name.

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

    Value range: a string. It must comply with the naming convention.

-   **arg\_name**

    Parameter name.

    Value range: a string. It must comply with the naming convention.

-   **arg\_type**

    Parameter type.

    Value range: a string. It must comply with the naming convention.

-   **loid**

    Specifies the identifier of the large object that includes this page.

    Value range: a string. It must comply with the naming convention.

-   **tablespace\_name**

    Specifies the tablespace name.

-   **directory\_name**

    Specifies the name of the directory to be deleted.

    Value range: a string. It must comply with the naming convention.

-   **WITH GRANT OPTION**

    If  **WITH GRANT OPTION**  is specified, the recipient of the permission can in turn grant it to others. Without a grant option, the recipient cannot do that. Grant options cannot be granted to  **PUBLIC**.


When a non-owner of an object attempts to GRANT permissions on the object:

-   The statement will fail outright if the user has no permissions whatsoever on the object.
-   As long as some permission is available, the statement will proceed, but it will grant only those permissions for which the user has grant options.
-   The  **GRANT ALL PRIVILEGES**  forms will issue a warning message if no grant options are held, while the other forms will issue a warning if grant options for any of the permissions specifically named in the statement are not held.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Database administrators can access all objects, regardless of object permission settings. This is comparable to the permissions of  **root**  in a Unix system. As with  **root**, it is unwise to operate as a system administrator except when necessary.  
>**GRANT**  to a table partition will cause alarms.  

## Examples<a name="en-us_topic_0237122166_en-us_topic_0059778755_s724dfb1c8978412b95cb308b64dfa447"></a>

**Example 1: Granting system permissions to a user or role**

Create user  **joe**  and grant the sysadmin permissions to the user.

```
postgres=# CREATE USER joe PASSWORD 'Bigdata@123';
postgres=# GRANT ALL PRIVILEGES TO joe;
```

Afterward, user  **joe**  has the sysadmin permissions.

**Example 2: Granting object permissions to a user or role**

1.  Revoke the  **sysadmin**  permission from the  **joe**  user. Grant the usage permission of the  **tpcds**  schema and all permissions on the  **tpcds.reason**  table to  **joe**.

    ```
    postgres=# REVOKE ALL PRIVILEGES FROM joe;
    postgres=# GRANT USAGE ON SCHEMA tpcds TO joe;
    postgres=# GRANT ALL PRIVILEGES ON tpcds.reason TO joe;
    ```

    Then  **joe**  has all permissions on the  **tpcds.reason**  table, including create, retrieve, update, and delete.

2.  Grant the retrieve permission of  **r\_reason\_sk**,  **r\_reason\_id**, and  **r\_reason\_desc**  columns and the update permission of the  **r\_reason\_desc**  column in the  **tpcds.reason**  table to  **joe**.

    ```
    postgres=# GRANT select (r_reason_sk,r_reason_id,r_reason_desc),update (r_reason_desc) ON tpcds.reason TO joe;
    ```

    Then  **joe**  has the retrieve permission of  **r\_reason\_sk**  and  **r\_reason\_id**  columns in the  **tpcds.reason**  table. To enable user  **joe**  to grant these permissions to other users, execute the following statement:

    ```
    postgres=# GRANT select (r_reason_sk, r_reason_id) ON tpcds.reason TO joe WITH GRANT OPTION;
    ```

    Grant the  **postgres**  database connection permission and schema creation permission to user  **joe**, and enable this user to grant these permissions to other users.

    ```
    postgres=# GRANT create,connect on database postgres TO joe WITH GRANT OPTION;
    ```

    Create role  **tpcds\_manager**, grant the  **tpcds**  schema access permission and object creation permission to this role, but do not enable this role to grant these permissions to others.

    ```
    postgres=# CREATE ROLE tpcds_manager PASSWORD 'Bigdata@123';
    postgres=# GRANT USAGE,CREATE ON SCHEMA tpcds TO tpcds_manager;
    ```

    Grant all the permissions on the  **tpcds\_tbspc**  tablespace to user  **joe**  but do not enable this user to grant these permissions to others.

    ```
    postgres=# CREATE TABLESPACE tpcds_tbspc RELATIVE LOCATION 'tablespace/tablespace_1';
    postgres=# GRANT ALL ON TABLESPACE tpcds_tbspc TO joe;
    ```


**Example 3: Granting the permissions of one user or role to others**

1.  Create role  **manager**, grant user  **joe**'s permissions to the created role, and enable this role to grant its permissions to others.

    ```
    postgres=# CREATE ROLE manager PASSWORD 'Bigdata@123';
    postgres=# GRANT joe TO manager WITH ADMIN OPTION;
    ```

2.  Create role  **senior\_manager**  and grant  **manager**'s permissions to  **senior\_manager**.

    ```
    postgres=# CREATE ROLE senior_manager PASSWORD 'Bigdata@123';
    postgres=# GRANT manager TO senior_manager;
    ```

3.  Revoke permissions granted to  **senior\_manager**  and  **manager**  and delete  **manager**.

    ```
    postgres=# REVOKE manager FROM joe;
    postgres=# REVOKE senior_manager FROM manager;
    postgres=# DROP USER manager;
    ```


**Example 4: Revoking permissions and deleting roles and users**

```
postgres=# REVOKE ALL PRIVILEGES ON tpcds.reason FROM joe;
postgres=# REVOKE ALL PRIVILEGES ON SCHEMA tpcds FROM joe;
postgres=# REVOKE ALL ON TABLESPACE tpcds_tbspc FROM joe;
postgres=# DROP TABLESPACE tpcds_tbspc;
postgres=# REVOKE USAGE,CREATE ON SCHEMA tpcds FROM tpcds_manager;
postgres=# DROP ROLE tpcds_manager;
postgres=# DROP ROLE senior_manager;
postgres=# DROP USER joe CASCADE;
```

## Helpful Links<a name="en-us_topic_0237122166_en-us_topic_0059778755_s3bb41459be684975af982bfe2508c335"></a>

[REVOKE](revoke.md)  and  [ALTER DEFAULT PRIVILEGES](alter-default-privileges.md)

