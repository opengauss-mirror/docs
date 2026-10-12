# Privileges

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-28T11:07:34.544Z pushedAt=2026-07-29T03:42:54.628Z -->

After a database object is created, the user who created the object becomes the owner of that object. By default, after the database is installed, there is no separation of duties, so the database system administrator has the same privileges as the object owner. That is, after an object is created, by default, only the object owner or the system administrator can query, modify, and destroy the object, as well as grant the object's privileges to other users through [•GRANT](#li9428175732017).

To enable other users to use the object, the necessary privileges must be granted to the user or to a role that includes the user.

To revoke privileges that have been granted, [•REVOKE](#li51033327269) can be used. The object owner's privileges (such as ALTER, DROP, COMMENT, INDEX, VACUUM, GRANT, and REVOKE) are implicitly held, meaning that as long as the object is owned, these implicit privileges of the object owner can be exercised. The object owner can revoke their own ordinary privileges, for example, making a table read-only for themselves and others, except for system administrator users.

openGauss supports the following privileges, each associated with different object types:

- SELECT: Allows the `SELECT` command to be executed on a specified table, view, or sequence. The `SELECT` privilege on the corresponding columns is also required for `UPDATE` or `DELETE` operations.

- INSERT: Allows the `INSERT` command to be executed on a specified table.

- UPDATE: Allows the `UPDATE` command to be executed on any column in the declared table. Typically, the `UPDATE` command also requires the `SELECT` privilege to query which rows need to be updated. `SELECT… FOR UPDATE`, `SELECT… FOR NO KEY UPDATE`, `SELECT… FOR SHARE`, and `SELECT… FOR KEY SHARE` require the `UPDATE` privilege in addition to the `SELECT` privilege.

- DELETE: Allows the `DELETE` command to be executed to delete data from a specified table. Typically, the `DELETE` command also requires the `SELECT` privilege to query which rows need to be deleted.

- TRUNCATE: Allows the `TRUNCATE` command to be executed to delete all records from a specified table.

- REFERENCES: To create a foreign key constraint, the REFERENCES privilege on both the referencing table and the referenced table is required.

- CREATE:

    - For databases, allows new schemas to be created within the database.

    - For schemas, allows new objects to be created within the schema. To rename an object, in addition to being the owner of the object, the user must also have the CREATE privilege on the schema where the object resides.

    - For tablespaces, allows tables to be created in the tablespace, and allows the tablespace to be specified as the default tablespace when creating databases and schemas.

- CONNECT: Allows a user to connect to a specified database.

- EXECUTE: Allows the use of specified functions and operators implemented using those functions.

- USAGE:

    - For procedural languages, allows a user to specify the procedural language when creating a function.

    - For schemas, `USAGE` allows access to objects contained in the specified schema. Without this privilege, only the names of these objects are visible.

    - For sequences, `USAGE` allows the use of the `nextval` function.

    - For `Data Source` objects, `USAGE` refers to the access privilege and is also all privileges that can be granted, meaning `USAGE` is equivalent to `ALL PRIVILEGES`.

- ALTER: Allows a user to modify the attributes of a specified object, excluding modification of the object owner and the schema where the object resides.

- DROP: Allows a user to drop a specified object.

- COMMENT: Allows a user to define or modify the comment of a specified object.

- INDEX: Allows a user to create indexes on a specified table, manage indexes on a specified table, and perform REINDEX and CLUSTER operations on a specified table.

- VACUUM: Allows a user to perform ANALYZE and VACUUM operations on a specified table.

- ALL PRIVILEGES: Grants all grantable privileges to a specified user/role at once. Only the system administrator has the privilege to execute GRANT ALL PRIVILEGES.

## Syntax<a name="section1223361612165"></a>

- <a name="li9428175732017"></a>GRANT

    Authorizes roles and users. The GRANT command is used for user authorization in three scenarios:

    - Granting system privileges (such as `sysadmin`, `CREATEDB`, `CREATEROLE`, etc.) to roles or users

        The syntax for granting the `sysadmin` privilege to a specified role is as follows:

        ```
        GRANT ALL { PRIVILEGES | PRIVILEGE }
           TO role_name;
        ```

    - Granting the privileges of a role or user to another role or user

        The syntax for granting the privileges of a role to another user or role is as follows:

        ```
        GRANT role_name [, ...]
           TO role_name [, ...]
           [ WITH ADMIN OPTION ];
        ```

    - Granting database objects to roles or users

        - Grant the access privileges of a table or view to a specified user or role.

            ```
            GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | ALTER | DROP | COMMENT | INDEX | VACUUM } [, ...] 
                  | ALL [ PRIVILEGES ] }
                ON { [ TABLE ] table_name [, ...]
                   | ALL TABLES IN SCHEMA schema_name [, ...] }
                TO { [ GROUP ] role_name | PUBLIC } [, ...] 
                [ WITH GRANT OPTION ];
            ```

        - Grant the access privileges of columns in a table to a specified user or role.

            ```
            GRANT { {{ SELECT | INSERT | UPDATE | REFERENCES | COMMENT } ( column_name [, ...] )} [, ...] 
                  | ALL [ PRIVILEGES ] ( column_name [, ...] ) }
                ON [ TABLE ] table_name [, ...]
                TO { [ GROUP ] role_name | PUBLIC } [, ...]
                [ WITH GRANT OPTION ];
            ```

        - Grant the database access privilege to a specified user or role.

            ```
            GRANT { { CREATE | CONNECT | TEMPORARY | TEMP | ALTER | DROP | COMMENT } [, ...]
                  | ALL [ PRIVILEGES ] }
                ON DATABASE database_name [, ...]
                TO { [ GROUP ] role_name | PUBLIC } [, ...]
                [ WITH GRANT OPTION ];
            ```

        - Grant the schema access privilege to a specified user or role.

            ```
            GRANT { { CREATE | USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
                ON SCHEMA schema_name [, ...]
                TO { [ GROUP ] role_name | PUBLIC } [, ...]
                [ WITH GRANT OPTION ];
            ```

            >[!NOTE]Note
            >When granting privileges on table or view objects in a schema to other users, the `USAGE` privilege on the schema to which the table or view belongs must also be granted to the user. Without this privilege, only the names of these objects are visible, and the objects cannot actually be accessed. The privilege to create tables in a schema with the same name cannot be granted through this syntax. It can be granted through the syntax for granting role privileges to other users or roles.

        - Grant the tablespace access privilege to a specified user or role.

            ```
            GRANT { { CREATE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
                ON TABLESPACE tablespace_name [, ...]
                TO { [ GROUP ] role_name | PUBLIC } [, ...]
                [ WITH GRANT OPTION ];
            ```

- <a name="li51033327269"></a>REVOKE

    - Revoke system privileges (such as `SYSADMIN`, `CREATEDB`, `CREATEROLE`, etc.) from a role or user.

        Revoke the `SYSADMIN` privilege from a role.

        ```
        REVOKE ALL { PRIVILEGES | PRIVILEGE } FROM role_name;
        ```

    - Revoke privileges from a role.

        ```
        REVOKE [ ADMIN OPTION FOR ]
            role_name [, ...] FROM role_name [, ...]
            [ CASCADE | RESTRICT ];
        ```

    - Revoke privileges on database objects.

        - Revoke privileges on a specified table or view.

            ```
            REVOKE [ GRANT OPTION FOR ]
                { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | ALTER | DROP | COMMENT | INDEX | VACUUM }[, ...] 
                | ALL [ PRIVILEGES ] }
                ON { [ TABLE ] table_name [, ...]
                   | ALL TABLES IN SCHEMA schema_name [, ...] }
                FROM { [ GROUP ] role_name | PUBLIC } [, ...]
                [ CASCADE | RESTRICT ];
            ```

        - Revoke column-level privileges on a table.

            ```
            REVOKE [ GRANT OPTION FOR ]
                { {{ SELECT | INSERT | UPDATE | REFERENCES | COMMENT } ( column_name [, ...] )}[, ...] 
                | ALL [ PRIVILEGES ] ( column_name [, ...] ) }
                ON [ TABLE ] table_name [, ...]
                FROM { [ GROUP ] role_name | PUBLIC } [, ...]
                [ CASCADE | RESTRICT ];
            ```

        - Revoke privileges on a specified database.

            ```
            REVOKE [ GRANT OPTION FOR ]
                { { CREATE | CONNECT | TEMPORARY | TEMP | ALTER | DROP | COMMENT } [, ...] 
                | ALL [ PRIVILEGES ] }
                ON DATABASE database_name [, ...]
                FROM { [ GROUP ] role_name | PUBLIC } [, ...]
                [ CASCADE | RESTRICT ];
            ```

        - Revoke privileges on a specified schema.

            ```
            REVOKE [ GRANT OPTION FOR ]
                { { CREATE | USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
                ON SCHEMA schema_name [, ...]
                FROM { [ GROUP ] role_name | PUBLIC } [, ...]
                [ CASCADE | RESTRICT ];
            ```

        - Revoke privileges on a specified tablespace.

            ```
            REVOKE [ GRANT OPTION FOR ]
                { { CREATE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
                ON TABLESPACE tablespace_name [, ...]
                FROM { [ GROUP ] role_name | PUBLIC } [, ...]
                [ CASCADE | RESTRICT ];
            ```

## Parameter Description<a name="section108735598015"></a>

- **role_name**

    Name of an existing user.

- **table_name**

    Name of an existing table.

- **column_name**

    Name of an existing column.

- **schema_name**

    Name of an existing schema.

- **database_name**

    Name of an existing database.

- **tablespace\_name**

    Name of the tablespace.

- **WITH GRANT OPTION**

    If WITH GRANT OPTION is specified, the grantee can further grant this privilege to others. Otherwise, the grantee cannot grant it to others. This option cannot be granted to PUBLIC.

## Examples<a name="zh-cn_topic_0283137177_zh-cn_topic_0237122166_zh-cn_topic_0059778755_s724dfb1c8978412b95cb308b64dfa447"></a>

- Grant system privileges to users or roles.

    Create a user named `joe` and grant the `sysadmin` privilege to the user.

    ```
    openGauss=# CREATE USER joe PASSWORD 'xxxxxxxx';
    CREATE ROLE
    openGauss=# GRANT ALL PRIVILEGES TO joe;
    ALTER ROLE
    ```

    After the grant is successful, user `joe` will have all privileges of `sysadmin`.

- Grant object privileges to users or roles.

  1. Create the schema `test` and the table `customer`.

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

  2. Revoke the `sysadmin` privilege from user `joe`, and then grant the `USAGE` privilege on the schema `test` and all privileges on the table `customer` to user `joe`.

        ```
        openGauss=# REVOKE ALL PRIVILEGES FROM joe;
        ALTER ROLE
        openGauss=# GRANT USAGE ON SCHEMA test TO joe;
        GRANT
        openGauss=# GRANT ALL PRIVILEGES ON customer TO joe;
        GRANT
        ```

     After the grant is successful, user `joe` has all privileges on the table `customer`, including insert, delete, update, and query privileges.

  3. Grant the `SELECT` privilege on the `c_customer_sk`, `c_customer_id`, and `c_first_name` columns, and the `UPDATE` privilege on the `c_last_name` column of the table `customer` to `joe`.

        ```
        openGauss=# GRANT select (c_customer_sk,c_customer_id,c_first_name),update (c_last_name) ON customer TO joe;
        GRANT
        ```

      After the grant is successful, the `SELECT` privilege of user `joe` on the `c_customer_sk`, `c_customer_id`, and `c_first_name` columns of the table `customer` takes effect immediately. If user `joe` needs the ability to grant these privileges to other users, the following syntax can be used to grant the privilege to user `joe`.

        ```
        openGauss=# GRANT select (c_customer_sk,c_customer_id,c_first_name) ON customer TO joe WITH GRANT OPTION;
        GRANT
        ```

      Grant the `CONNECT` privilege on the database `postgres` to user `joe`, along with the privilege to create schemas in `postgres`, and allow `joe` to grant this privilege to other users.

        ```
        openGauss=# GRANT create,connect on database postgres TO joe WITH GRANT OPTION;
        GRANT
        ```

      Create a role `test_manager`, grant the access privilege on the schema `test` to the role `test_manager`, and grant the privilege to create objects in `test`, without allowing users in this role to grant the privilege to others.

        ```
        openGauss=# CREATE ROLE test_manager PASSWORD 'xxxxxxxx';
        CREATE ROLE
        openGauss=# GRANT USAGE,CREATE ON SCHEMA test TO test_manager;
        GRANT
        ```

      Create a tablespace `tpcds_tbspc`, and grant all privileges on the tablespace to user `joe`, but `joe` cannot grant the privileges to other users.

        ```
        openGauss=# CREATE TABLESPACE tpcds_tbspc RELATIVE LOCATION 'tablespace/tablespace_1';
        CREATE TABLESPACE
        openGauss=# GRANT ALL ON TABLESPACE tpcds_tbspc TO joe;
        GRANT
        ```

- Grant the privileges of a user or role to other users or roles.

    1. Create a role `manager`, grant the privileges of `joe` to `manager`, and allow this role to grant the privileges to others.

        ```
        openGauss=# CREATE ROLE manager PASSWORD 'xxxxxxxx';
        CREATE ROLE
        openGauss=# GRANT joe TO manager WITH ADMIN OPTION;
        GRANT ROLE
        ```

    2. Create user `senior_manager`, and grant the role `manager` to this user.

        ```
        openGauss=# CREATE ROLE senior_manager PASSWORD 'xxxxxxxx';
        CREATE ROLE
        openGauss=# GRANT manager TO senior_manager;
        GRANT ROLE
        ```
