# REVOKE<a name="EN-US_TOPIC_0289900263"></a>

## Function<a name="en-us_topic_0283137669_en-us_topic_0237122179_en-us_topic_0059779274_sda1d739a0a8c460c93bc099fb8208944"></a>

**REVOKE**  revokes permissions from one or more roles.

## Precautions<a name="en-us_topic_0283137669_en-us_topic_0237122179_en-us_topic_0059779274_sf1580b93b5664a7db2c08cf69806faa5"></a>

If a non-owner user of an object attempts to  **REVOKE**  permission on the object, the statement is executed based on the following rules:

-   If the user has no permissions whatsoever on the object, the statement will fail outright.
-   If an authorized user has some permissions, only the permissions with authorization options are revoked.
-   If the authorized user does not have the authorization option, the  **REVOKE ALL PRIVILEGES**  form will issue an error message. For other forms of statements, if the permission specified in the statement does not have the corresponding authorization option, the statement will issue a warning.

## Syntax<a name="en-us_topic_0283137669_en-us_topic_0237122179_en-us_topic_0059779274_s5eb0513470714ccbbd425944c1d73c8e"></a>

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

-   Revoke the permission on a specified field in a table.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { {{ SELECT | INSERT | UPDATE | REFERENCES | COMMENT } ( column_name [, ...] )}[, ...] 
        | ALL [ PRIVILEGES ] ( column_name [, ...] ) }
        ON [ TABLE ] table_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a specified sequence. The  **LARGE**  field is optional. The recycling statement does not distinguish whether the sequence is LARGE.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { SELECT | UPDATE | ALTER | DROP | COMMENT }[, ...] 
        | ALL [ PRIVILEGES ] }
        ON { [ [ LARGE ] SEQUENCE ] sequence_name [, ...]
           | ALL SEQUENCES IN SCHEMA schema_name [, ...] }
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

-   Revoke the permission on a specified domain.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { USAGE | ALL [ PRIVILEGES ] }
        ON DOMAIN domain_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a specified CMK.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | DROP } [, ...] | ALL [PRIVILEGES] }
        ON CLIENT_MASTER_KEYS client_master_keys_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a specified CEK.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | DROP } [, ...] | ALL [PRIVILEGES]}
        ON COLUMN_ENCRYPTION_KEYS column_encryption_keys_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a specified directory.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { READ | WRITE | ALTER | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON DIRECTORY directory_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a specified external data source.

    ```
    REVOKE [ GRANT OPTION FOR ]
       { USAGE | ALL [ PRIVILEGES ] }
        ON FOREIGN DATA WRAPPER fdw_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a specified external server.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON FOREIGN SERVER server_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a specified function.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON { FUNCTION {function_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...]
           | ALL FUNCTIONS IN SCHEMA schema_name [, ...] }
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a specified stored procedure.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON { PROCEDURE {proc_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...]
           | ALL PROCEDURE IN SCHEMA schema_name [, ...] }
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a specified procedural language.

    ```
    REVOKE [ GRANT OPTION FOR ]
       { USAGE | ALL [ PRIVILEGES ] }
        ON LANGUAGE lang_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a specified large object.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { SELECT | UPDATE } [, ...] | ALL [ PRIVILEGES ] }
        ON LARGE OBJECT loid [, ...]
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

-   Revoke the permission on a specified type.

    ```
    REVOKE [ GRANT OPTION FOR ]
       { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON TYPE type_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a data source object.

    ```
    REVOKE [ GRANT OPTION FOR ]
       { USAGE | ALL [PRIVILEGES] }
        ON DATA SOURCE src_name [, ...]
        FROM {[GROUP] role_name | PUBLIC} [, ...]
       [ CASCADE | RESTRICT ];
    ```

-   Revoke the permission on a package object.

    ```
    REVOKE [ GRANT OPTION FOR ]
       { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [PRIVILEGES] }
       ON PACKAGE package_name [, ...]
       FROM {[GROUP] role_name | PUBLIC} [, ...]
       [ CASCADE | RESTRICT ];
    ```

-   Revoke permissions from a role.

    ```
    REVOKE [ ADMIN OPTION FOR ]
        role_name [, ...] FROM role_name [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   Revoke the  **sysadmin**  permission on a role.

    ```
    REVOKE ALL { PRIVILEGES | PRIVILEGE } FROM role_name;
    ```


-   Revoke the ANY permissions.

    ```
    REVOKE [ ADMIN OPTION FOR ]
      { CREATE ANY TABLE | ALTER ANY TABLE | DROP ANY TABLE | SELECT ANY TABLE | INSERT ANY TABLE | UPDATE ANY TABLE |
      DELETE ANY TABLE | CREATE ANY SEQUENCE | CREATE ANY INDEX | CREATE ANY FUNCTION | EXECUTE ANY FUNCTION |
      CREATE ANY PACKAGE | EXECUTE ANY PACKAGE | CREATE ANY TYPE } [, ...]
      FROM [ GROUP ] role_name [, ...];
    ```


## Parameter Description<a name="en-us_topic_0283137669_en-us_topic_0237122179_en-us_topic_0059779274_s54fe58f3f55f4965a6b9370f9edebfdf"></a>

The keyword  **PUBLIC**  indicates an implicitly defined group that has all roles.

For details about permission types and parameters, see  [Parameter Description](grant.md#en-us_topic_0283137177_en-us_topic_0237122166_en-us_topic_0059778755_s3557d45c54124d86bc3f619358d806f8)  in section "GRANT".

Permissions of a role include the permissions directly granted to the role, permissions inherited from the parent role, and permissions granted to  **PUBLIC**. Therefore, revoking the  **SELECT**  permission for an object from  **PUBLIC**  does not necessarily mean that the  **SELECT**  permission for the object has been revoked from all roles, because the  **SELECT**  permission directly granted to roles and inherited from parent roles remains. Similarly, if the  **SELECT**  permission is revoked from a user but is not revoked from  **PUBLIC**, the user can still run the  **SELECT**  statement.

If  **GRANT OPTION FOR**  is specified, the permission cannot be granted to others, but permission itself is not revoked.

If user A holds the  **UPDATE**  permissions on a table and the  **WITH GRANT OPTION**  and has granted them to user B, the permissions that user B holds are called dependent permissions. When user A's permission or grant option is revoked,  **CASCADE**  must be specified to revoke all dependent permissions.

A user can only revoke permissions that were granted directly by that user. For example, if user A has granted permission with grant option \(**WITH ADMIN OPTION**\) to user B, and user B has in turn granted it to user C, then user A cannot revoke the permission directly from C. However, user A can revoke the grant option held by user B and use  **CASCADE**. In this way, the permission of user C is automatically revoked. For another example, if both user A and user B have granted the same permission to C, A can revoke his own grant but not B's grant, so C will still effectively have the permission.

If the role executing  **REVOKE**  holds permissions indirectly via more than one role membership path, it is unspecified which containing role will be used to execute the statement. In such cases, it is best practice to use  **SET ROLE**  to become the specific role you want to do the  **REVOKE**  as, and then execute  **REVOKE**. Failure to do so may lead to deleting permissions not intended to delete, or not deleting any permissions at all.

## Examples<a name="en-us_topic_0283137669_en-us_topic_0237122179_en-us_topic_0059779274_s82ec0652acdd4e6091abc851b909926d"></a>

See  [Examples](grant.md#en-us_topic_0283137177_en-us_topic_0237122166_en-us_topic_0059778755_s724dfb1c8978412b95cb308b64dfa447)  in section "GRANT".

## Helpful Links<a name="en-us_topic_0283137669_en-us_topic_0237122179_en-us_topic_0059779274_s865f60db543c4043bd5fa9b678295c5a"></a>

[GRANT](grant.md)
