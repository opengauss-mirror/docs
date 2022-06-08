# Permissions<a name="EN-US_TOPIC_0000001210461844"></a>

A user who creates an object is the owner of this object. By default,  [Separation of Duties](en-us_topic_0289900233.md)  is disabled after database installation. A database system administrator has the same permissions as object owners. After an object is created, only the object owner or system administrator can query, modify, and delete the object, and grant permissions on the object to other users through  [GRANT](#li9428175732017)  by default.

To enable another user to use the object, grant required permissions to the user or the role that contains the user.

To remove permissions, use  [REVOKE](#li51033327269). Object owners have implicit permissions \(such as ALTER, DROP, COMMENT, INDEX, VACUUM, GRANT, and REVOKE\) on objects. That is, once becoming the owner of an object, the owner is immediately granted the implicit permissions on the object. Object owners can remove their own common permissions, for example, making tables read-only to themselves or others, except the system administrator.

openGauss supports the following permissions, which are associated with different object types:

-   **SELECT**: allows  **SELECT**  on a specified table, view, or sequence. The  **SELECT**  permission on the corresponding column is also required for  **UPDATE**  or  **DELETE**.
-   **INSERT**: allows  **INSERT**  on a specified table.
-   **UPDATE**: allows  **UPDATE**  on any column of a specified table. Generally,  **UPDATE**  also requires the  **SELECT**  permission to query which rows need to be updated.  **SELECT ... FOR UPDATE**  and  **SELECT ... FOR SHARE**  also require this permission on at least one column, in addition to the  **SELECT**  permission.
-   **DELETE**: allows  **DELETE**  on a row of a specified table. Generally,  **DELETE**  also requires the  **SELECT**  permission to query which rows need to be deleted.
-   **TRUNCATE**: allows  **TRUNCATE**  on a specified table.
-   **REFERENCES**: allows creation of a foreign key constraint. This permission is required on both referencing and referenced tables.
-   **CREATE**:
    -   For databases, allows new schemas to be created within the database.
    -   For schemas, allows new objects to be created within the schema. To rename an existing object, you must own the object and have the  **CREATE**  permission on the schema of the object.
    -   For tablespaces, allows tables to be created within the tablespace, and allows databases and schemas to be created that have the tablespace as their default tablespace.

-   **CONNECT**: allows you to access specified databases.
-   **EXECUTE**: allows you to use specified functions and the operators that are realized by the functions.
-   **USAGE**:
    -   For procedural languages, allows use of the language for the creation of functions in that language.
    -   For schemas, allows access to objects contained in the schema. Without this permission, it is still possible to see the object names.
    -   For sequences, allows use of the  **nextval**  function.
    -   For data sources, specifies access permissions or is used as  **ALL PRIVILEGES**.

-   **ALTER**: allows users to modify the attributes of a specified object, excluding the owner and schema of the object.
-   **DROP**: allows users to delete a specified object.
-   **COMMENT**: allows users to define or modify comments of a specified object.
-   **INDEX**: allows users to create indexes on specified tables, manage indexes on the tables, and perform REINDEX and CLUSTER operations on the tables.
-   **VACUUM**: allows users to perform ANALYZE and VACUUM operations on specified tables.
-   **ALL PRIVILEGES**: grants all available permissions to specified users or roles at a time. Only a system administrator has the  **GRANT ALL PRIVILEGES**  permission.

## Syntax<a name="section1223361612165"></a>

-   <a name="li9428175732017"></a>GRANT

    **GRANT**  grants permissions to roles and users.  **GRANT**  is used in the following scenarios:

    -   Granting system permissions \(such as  **sysadmin**,  **CREATEDB**, and  **CREATEROLE**\) to a role or user

        The syntax for granting sysadmin permissions to a specified role is as follows:

        ```
        GRANT ALL { PRIVILEGES | PRIVILEGE }
           TO role_name;
        ```

    -   Granting the permissions of a role or user to others

        The syntax for granting the permissions of a role to other others is as follows:

        ```
        GRANT role_name [, ...]
           TO role_name [, ...]
           [ WITH ADMIN OPTION ];
        ```

    -   Granting database object permissions to a role or user
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

        -   Grant the database access permission to a user or role.

            ```
            GRANT { { CREATE | CONNECT | TEMPORARY | TEMP | ALTER | DROP | COMMENT } [, ...]
                  | ALL [ PRIVILEGES ] }
                ON DATABASE database_name [, ...]
                TO { [ GROUP ] role_name | PUBLIC } [, ...]
                [ WITH GRANT OPTION ];
            ```

        -   Grant the schema access permission to a user or role.

            ```
            GRANT { { CREATE | USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
                ON SCHEMA schema_name [, ...]
                TO { [ GROUP ] role_name | PUBLIC } [, ...]
                [ WITH GRANT OPTION ];
            ```

            >![](public_sys-resources/icon-note.gif) **NOTE:** 
            >When you grant table or view permissions to other users, you also need to grant the  **USAGE**  permission on the schema that the tables and views belong to. Without the  **USAGE**  permission, the users with table or view permissions can only see the object names, but cannot access them. This syntax cannot be used to grant the permission to create tables in schemas with the same name, but you can use the syntax for granting permission of a role to others to achieve the same effect.

        -   Grant the tablespace access permission to a user or role.

            ```
            GRANT { { CREATE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
                ON TABLESPACE tablespace_name [, ...]
                TO { [ GROUP ] role_name | PUBLIC } [, ...]
                [ WITH GRANT OPTION ];
            ```



-   <a name="li51033327269"></a>REVOKE
    -   Revoking system permissions \(such as  **sysadmin**,  **CREATEDB**, and  **CREATEROLE**\) from a role or user

        Revoke the  **sysadmin**  permission from a role.

        ```
        REVOKE ALL { PRIVILEGES | PRIVILEGE } FROM role_name;
        ```

    -   Revoking permissions from a role

        ```
        REVOKE [ ADMIN OPTION FOR ]
            role_name [, ...] FROM role_name [, ...]
            [ CASCADE | RESTRICT ];
        ```

    -   Revoking permissions on database objects
        -   Revoke the permission on a specified table or view.

            ```
            REVOKE [ GRANT OPTION FOR ]
                { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | ALTER | DROP | COMMENT | INDEX | VACUUM }[, ...] 
                | ALL [ PRIVILEGES ] }
                ON { [ TABLE ] table_name [, ...]
                   | ALL TABLES IN SCHEMA schema_name [, ...] }
                FROM { [ GROUP ] role_name | PUBLIC } [, ...]
                [ CASCADE | RESTRICT ];
            ```

        -   Revoke the permission on a specified column in a table.

            ```
            REVOKE [ GRANT OPTION FOR ]
                { {{ SELECT | INSERT | UPDATE | REFERENCES | COMMENT } ( column_name [, ...] )}[, ...] 
                | ALL [ PRIVILEGES ] ( column_name [, ...] ) }
                ON [ TABLE ] table_name [, ...]
                FROM { [ GROUP ] role_name | PUBLIC } [, ...]
                [ CASCADE | RESTRICT ];
            ```

        -   Revoke the permission on a specified database.

            ```
            REVOKE [ GRANT OPTION FOR ]
                { { CREATE | CONNECT | TEMPORARY | TEMP | ALTER | DROP | COMMENT } [, ...] 
                | ALL [ PRIVILEGES ] }
                ON DATABASE database_name [, ...]
                FROM { [ GROUP ] role_name | PUBLIC } [, ...]
                [ CASCADE | RESTRICT ];
            ```

        -   Revoke the permission on a specified schema.

            ```
            REVOKE [ GRANT OPTION FOR ]
                { { CREATE | USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
                ON SCHEMA schema_name [, ...]
                FROM { [ GROUP ] role_name | PUBLIC } [, ...]
                [ CASCADE | RESTRICT ];
            ```

        -   Revoke the permission on a specified tablespace.

            ```
            REVOKE [ GRANT OPTION FOR ]
                { { CREATE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
                ON TABLESPACE tablespace_name [, ...]
                FROM { [ GROUP ] role_name | PUBLIC } [, ...]
                [ CASCADE | RESTRICT ];
            ```




## Parameter Description<a name="section108735598015"></a>

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

-   **tablespace\_name**

    Specifies the tablespace name.

-   **WITH GRANT OPTION**

    If  **WITH GRANT OPTION**  is specified, the recipient of the permission can in turn grant it to others. Without a grant option, the recipient cannot do that. This option cannot be granted to  **PUBLIC**.


## Examples<a name="en-us_topic_0283137177_en-us_topic_0237122166_en-us_topic_0059778755_s724dfb1c8978412b95cb308b64dfa447"></a>

-   Grant system permissions to a user or role.

    Create the  **joe**  user and grant the  **sysadmin**  permission to it.

    ```
    openGauss=# CREATE USER joe PASSWORD 'xxxxxxxx';
    CREATE ROLE
    openGauss=# GRANT ALL PRIVILEGES TO joe;
    ALTER ROLE
    ```

    Then the  **joe**  user has the  **sysadmin**  permission.

-   Grant object permissions to a user or role.
    1.  Create the  **test**  schema and the  **customer**  table.

        ```
        openGauss=# CREATE SCHEMA test;
        CREATE SCHEMA
        
        openGauss=# CREATE TABLE customer
        (
            c_customer_sk             integer,
            c_customer_id             char(5),
            c_first_name              char(6),
            c_last_name               char(8),
            Amount                    integer
        );
        CREATE TABLE
        ```

    2.  Revoke user  **joe**'s  **sysadmin**  permission, and grant it with the usage permission on the  **test**  schema and all the permissions on the  **customer**  table.

        ```
        openGauss=# REVOKE ALL PRIVILEGES FROM joe;
        ALTER ROLE
        openGauss=# GRANT USAGE ON SCHEMA test TO joe;
        GRANT
        openGauss=# GRANT ALL PRIVILEGES ON customer TO joe;
        GRANT
        ```

        After the permissions are successfully granted, user  **joe**  has all the permissions on the  **customer**  table, including addition, deletion, modification, and query permissions.

    3.  Grant the query permission on the  **c\_customer\_sk**,  **c\_customer\_id**, and  **c\_first\_name**  columns and the update permission on the  **c\_last\_name**  column in the  **customer**  table to user  **joe**.

        ```
        openGauss=# GRANT select (c_customer_sk,c_customer_id,c_first_name),update (c_last_name) ON customer TO joe;
        GRANT
        ```

        After the permissions are successfully granted, user  **joe**  immediately has the query permission on the  **c\_customer\_sk**,  **c\_customer\_id**,  **c\_first\_name**  columns in the  **customer**  table. To enable user  **joe**  to grant these permissions to other users, execute the following statement:

        ```
        openGauss=# GRANT select (c_customer_sk,c_customer_id,c_first_name) ON customer TO joe WITH GRANT OPTION;
        GRANT
        ```

        Grant the  **postgres**  database connection permission and schema creation permission to user  **joe**  and enable this user to grant these permissions to other users.

        ```
        openGauss=# GRANT create,connect on database postgres TO joe WITH GRANT OPTION;
        GRANT
        ```

        Create the  **test\_manager**  role, grant the access and object creation permissions on the  **test**  schema to the  **test\_manager**  role, but do not allow this role to grant these permissions to others.

        ```
        openGauss=# CREATE ROLE test_manager PASSWORD 'xxxxxxxx';
        CREATE ROLE
        openGauss=# GRANT USAGE,CREATE ON SCHEMA test TO test_manager;
        GRANT
        ```

        Create the  **tpcds\_tbspc**  tablespace and grant all permissions on the tablespace to user  **joe**. However, user  **joe**  cannot grant these permissions to other users.

        ```
        openGauss=# CREATE TABLESPACE tpcds_tbspc RELATIVE LOCATION 'tablespace/tablespace_1';
        CREATE TABLESPACE
        openGauss=# GRANT ALL ON TABLESPACE tpcds_tbspc TO joe;
        GRANT
        ```


-   Grant a user's or role's permissions to other users or roles
    1.  Create the  **manager**  role, grant  **joe**'s permissions to the  **manager**  role, and allow the  **manager**  role to grant these permissions to others.

        ```
        openGauss=# CREATE ROLE manager PASSWORD 'xxxxxxxx';
        CREATE ROLE
        openGauss=# GRANT joe TO manager WITH ADMIN OPTION;
        GRANT ROLE
        ```

    2.  Create the  **senior\_manager**  user and grant  **manager**'s permissions to it.

        ```
        openGauss=# CREATE ROLE senior_manager PASSWORD 'xxxxxxxx';
        CREATE ROLE
        openGauss=# GRANT manager TO senior_manager;
        GRANT ROLE
        ```



