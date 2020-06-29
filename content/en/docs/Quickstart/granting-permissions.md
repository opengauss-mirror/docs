# Granting Permissions<a name="EN-US_TOPIC_0241704265"></a>

**GRANT**  is used to grant permissions to roles and users.

**GRANT**  is used in the following scenarios:

-   **Granting system permissions to roles or users**

    System permissions are also called user properties, including  **SYSADMIN**,  **CREATEDB**,  **CREATEROLE**,  **AUDITADMIN**, and  **LOGIN**.

-   **Granting database object permissions to roles or users**

    Grant permissions related to database objects \(tables, views, specified columns, databases, functions, schemas, and tablespaces\) to specified roles or users.

-   **Granting the permissions of one role or user to others**

    Grant the permissions of one role or user to others. In this case, every role or user can be regarded as a set of one or more database permissions.


## Syntax<a name="en-us_topic_0241234241_en-us_topic_0059778755_s9b21365068e9482782f400457afa8a01"></a>

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


## Examples<a name="en-us_topic_0241234241_en-us_topic_0059778755_s724dfb1c8978412b95cb308b64dfa447"></a>

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

