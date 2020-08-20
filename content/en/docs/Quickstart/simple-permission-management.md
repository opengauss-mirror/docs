# Simple Permission Management<a name="EN-US_TOPIC_0241704262"></a>

<!-- TOC -->

- [Creating a Role<a name="EN-US_TOPIC_0241704263"></a>](#creating-a-rolea-nameen-us_topic_0241704263a)
    - [Precautions<a name="en-us_topic_0241234239_en-us_topic_0059778189_sca46ba0a91d7470c94ec4197a5befe87"></a>](#precautionsa-nameen-us_topic_0241234239_en-us_topic_0059778189_sca46ba0a91d7470c94ec4197a5befe87a)
    - [Syntax<a name="en-us_topic_0241234239_en-us_topic_0059778189_se8fd2944bc8f42e2be5e7bd140f801fc"></a>](#syntaxa-nameen-us_topic_0241234239_en-us_topic_0059778189_se8fd2944bc8f42e2be5e7bd140f801fca)
    - [Example<a name="en-us_topic_0241234239_en-us_topic_0059778189_s0dea2f90b8474387aff0ab3f366a611e"></a>](#examplea-nameen-us_topic_0241234239_en-us_topic_0059778189_s0dea2f90b8474387aff0ab3f366a611ea)
- [Creating a User<a name="EN-US_TOPIC_0241704264"></a>](#creating-a-usera-nameen-us_topic_0241704264a)
    - [Precautions<a name="en-us_topic_0241234240_en-us_topic_0059778166_sd48f2980b9464b1abca65a4747930552"></a>](#precautionsa-nameen-us_topic_0241234240_en-us_topic_0059778166_sd48f2980b9464b1abca65a4747930552a)
    - [Syntax<a name="en-us_topic_0241234240_en-us_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035f"></a>](#syntaxa-nameen-us_topic_0241234240_en-us_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035fa)
    - [Example<a name="en-us_topic_0241234240_en-us_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa"></a>](#examplea-nameen-us_topic_0241234240_en-us_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074faa)
- [Granting Permissions<a name="EN-US_TOPIC_0241704265"></a>](#granting-permissionsa-nameen-us_topic_0241704265a)
    - [Syntax<a name="en-us_topic_0241234241_en-us_topic_0059778755_s9b21365068e9482782f400457afa8a01"></a>](#syntaxa-nameen-us_topic_0241234241_en-us_topic_0059778755_s9b21365068e9482782f400457afa8a01a)
    - [Examples<a name="en-us_topic_0241234241_en-us_topic_0059778755_s724dfb1c8978412b95cb308b64dfa447"></a>](#examplesa-nameen-us_topic_0241234241_en-us_topic_0059778755_s724dfb1c8978412b95cb308b64dfa447a)

<!-- /TOC -->

## Creating a Role<a name="EN-US_TOPIC_0241704263"></a>

**CREATE ROLE**  is used to create a role.

A role is an entity that owns database objects and permissions. In different environments, a role can be considered a user, a group, or both.

### Precautions<a name="en-us_topic_0241234239_en-us_topic_0059778189_sca46ba0a91d7470c94ec4197a5befe87"></a>

-   **CREATE ROLE**  adds a role to a database. The role does not have the  **LOGIN**  permission.
-   Only the user who has the  **CREATE ROLE**  permission or a system administrator is allowed to create roles.

### Syntax<a name="en-us_topic_0241234239_en-us_topic_0059778189_se8fd2944bc8f42e2be5e7bd140f801fc"></a>

```
CREATE ROLE role_name [ [ WITH ] option [ ... ] ] [ ENCRYPTED | UNENCRYPTED ] { PASSWORD | IDENTIFIED BY } { 'password' | DISABLE };
```

The syntax of role information configuration clause  **option**  is as follows:

```
{SYSADMIN | NOSYSADMIN}
    | {AUDITADMIN | NOAUDITADMIN}
    | {CREATEDB | NOCREATEDB}
    | {USEFT | NOUSEFT}
    | {CREATEROLE | NOCREATEROLE}
    | {INHERIT | NOINHERIT}
    | {LOGIN | NOLOGIN}
    | {REPLICATION | NOREPLICATION}
    | {INDEPENDENT | NOINDEPENDENT}
    | {VCADMIN | NOVCADMIN}
    | CONNECTION LIMIT connlimit
    | VALID BEGIN 'timestamp'
    | VALID UNTIL 'timestamp'
    | RESOURCE POOL 'respool'
    | PERM SPACE 'spacelimit'
    | TEMP SPACE 'tmpspacelimit'
    | SPILL SPACE 'spillspacelimit'
    | IN ROLE role_name [, ...]
    | IN GROUP role_name [, ...]
    | ROLE role_name [, ...]
    | ADMIN rol e_name [, ...]
    | USER role_name [, ...]
    | SYSID uid
    | DEFAULT TABLESPACE tablespace_name
    | PROFILE DEFAULT
    | PROFILE profile_name
    | PGUSER
```

### Example<a name="en-us_topic_0241234239_en-us_topic_0059778189_s0dea2f90b8474387aff0ab3f366a611e"></a>

```
-- Create role manager whose password is Bigdata123@.
postgres=# CREATE ROLE manager IDENTIFIED BY 'Bigdata@123';

-- Create a role with its validity from January 1, 2015 to January 1, 2026.
postgres=# CREATE ROLE miriam WITH LOGIN PASSWORD 'Bigdata@123' VALID BEGIN '2015-01-01' VALID UNTIL '2026-01-01';

-- Change the password of role manager to abcd@123.
postgres=# ALTER ROLE manager IDENTIFIED BY 'abcd@123' REPLACE 'Bigdata@123';

-- Change role manager to the system administrator.
postgres=# ALTER ROLE manager SYSADMIN;

-- Delete role manager.
postgres=# DROP ROLE manager;

-- Delete role miriam.
postgres=# DROP ROLE miriam;
```

## Creating a User<a name="EN-US_TOPIC_0241704264"></a>

**CREATE USER**  creates a user.

### Precautions<a name="en-us_topic_0241234240_en-us_topic_0059778166_sd48f2980b9464b1abca65a4747930552"></a>

-   A user created using the  **CREATE USER**  statement has the  **LOGIN**  permission by default.
-   A schema named after the user is automatically created in the database where the statement is executed, but not in other databases. You can run the  **CREATE SCHEMA**  statement to create such a schema for the user in other databases.
-   The owner of an object created by a system administrator in a schema with the same name as a common user is the common user, not the system administrator.

### Syntax<a name="en-us_topic_0241234240_en-us_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035f"></a>

```
CREATE USER user_name [ [ WITH ] option [ ... ] ] [ ENCRYPTED | UNENCRYPTED ] { PASSWORD | IDENTIFIED BY } { 'password' | DISABLE };
```

The  **option**  clause is used to configure information, including permissions and properties.

```
{SYSADMIN | NOSYSADMIN}
    | {MONADMIN | NOMONADMIN}
    | {OPRADMIN | NOOPRADMIN}
    | {POLADMIN | NOPOLADMIN}
    | {AUDITADMIN | NOAUDITADMIN}
    | {CREATEDB | NOCREATEDB}
    | {USEFT | NOUSEFT}
    | {CREATEROLE | NOCREATEROLE}
    | {INHERIT | NOINHERIT}
    | {LOGIN | NOLOGIN}
    | {REPLICATION | NOREPLICATION}
    | {INDEPENDENT | NOINDEPENDENT}
    | {VCADMIN | NOVCADMIN}
    | CONNECTION LIMIT connlimit
    | VALID BEGIN 'timestamp'
    | VALID UNTIL 'timestamp'
    | RESOURCE POOL 'respool'
    | PERM SPACE 'spacelimit'
    | TEMP SPACE 'tmpspacelimit'
    | SPILL SPACE 'spillspacelimit'
    | IN ROLE role_name [, ...]
    | IN GROUP role_name [, ...]
    | ROLE role_name [, ...]
    | ADMIN role_name [, ...]
    | USER role_name [, ...]
    | SYSID uid
    | DEFAULT TABLESPACE tablespace_name
    | PROFILE DEFAULT
    | PROFILE profile_name
    | PGUSER
```

### Example<a name="en-us_topic_0241234240_en-us_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa"></a>

```
-- Create user jim whose login password is Bigdata@123:
postgres=# CREATE USER jim PASSWORD 'Bigdata@123';

-- Alternatively, you can run the following statement:
postgres=# CREATE USER kim IDENTIFIED BY 'Bigdata@123';

-- To create a user with the CREATEDB permission, add the CREATEDB keyword.
postgres=# CREATE USER dim CREATEDB PASSWORD 'Bigdata@123';

-- Change user jim's login password from Bigdata123@ to Abcd@123:
postgres=# ALTER USER jim IDENTIFIED BY 'Abcd@123' REPLACE 'Bigdata@123';

-- Add the CREATEROLE permission to jim.
postgres=# ALTER USER jim CREATEROLE;

-- Set enable_seqscan to on. (The setting will take effect in the next session.)
postgres=# ALTER USER jim SET enable_seqscan TO on;

-- Reset the enable_seqscan parameter for jim.
postgres=# ALTER USER jim RESET enable_seqscan;

-- Lock jim.
postgres=# ALTER USER jim ACCOUNT LOCK;

-- Delete users.
postgres=# DROP USER kim CASCADE;
postgres=# DROP USER jim CASCADE;
postgres=# DROP USER dim CASCADE;
```

## Granting Permissions<a name="EN-US_TOPIC_0241704265"></a>

**GRANT**  is used to grant permissions to roles and users.

**GRANT**  is used in the following scenarios:

-   **Granting system permissions to roles or users**

    System permissions are also called user properties, including  **SYSADMIN**,  **CREATEDB**,  **CREATEROLE**,  **AUDITADMIN**, and  **LOGIN**.

-   **Granting database object permissions to roles or users**

    Grant permissions related to database objects \(tables, views, specified columns, databases, functions, schemas, and tablespaces\) to specified roles or users.

-   **Granting the permissions of one role or user to others**

    Grant the permissions of one role or user to others. In this case, every role or user can be regarded as a set of one or more database permissions.


### Syntax<a name="en-us_topic_0241234241_en-us_topic_0059778755_s9b21365068e9482782f400457afa8a01"></a>

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


### Examples<a name="en-us_topic_0241234241_en-us_topic_0059778755_s724dfb1c8978412b95cb308b64dfa447"></a>

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
