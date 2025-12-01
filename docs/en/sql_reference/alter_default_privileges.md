# ALTER DEFAULT PRIVILEGES<a name="EN-US_TOPIC_0289900961"></a>

## Function<a name="en-us_topic_0283136687_en-us_topic_0237122057_en-us_topic_0059778935_sb6d50f1fe847446bb5943799163d59fb"></a>

**ALTER DEFAULT PRIVILEGES**  allows you to set the permissions that will be applied to objects created in the future. \(It does not affect permissions granted to existing objects.\)

## Precautions<a name="en-us_topic_0283136687_en-us_topic_0237122057_en-us_topic_0059778935_s4737e0edf6af464282c48f14a9d9c0f4"></a>

Currently, you can change only the permissions for tables \(including views\), sequences, functions, types, CMKs of encrypted databases, and CEKs.

## Syntax<a name="en-us_topic_0283136687_en-us_topic_0237122057_en-us_topic_0059778935_s760a84be01534119a13af50d2ff535aa"></a>

```
ALTER DEFAULT PRIVILEGES
    [ FOR { ROLE | USER } target_role [, ...] ]
    [ IN SCHEMA schema_name [, ...] ]
    abbreviated_grant_or_revoke;
```

-   **abbreviated\_grant\_or\_revoke**  grants or revokes permissions on some objects.

    ```
    grant_on_tables_clause
      | grant_on_sequences_clause
      | grant_on_functions_clause
      | grant_on_types_clause
      | grant_on_client_master_keys_clause
      | grant_on_column_encryption_keys_clause
      | revoke_on_tables_clause
      | revoke_on_sequences_clause
      | revoke_on_functions_clause
      | revoke_on_types_clause
      | revoke_on_client_master_keys_clause
      | revoke_on_column_encryption_keys_clause
    ```


-   **grant\_on\_tables\_clause**  grants permissions on tables.

    ```
    GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | ALTER | DROP | COMMENT | INDEX | VACUUM } 
        [, ...] | ALL [ PRIVILEGES ] }
        ON TABLES 
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   **grant\_on\_sequences\_clause**  grants permissions on sequences.

    ```
    GRANT { { SELECT | UPDATE | USAGE | ALTER | DROP | COMMENT } 
        [, ...] | ALL [ PRIVILEGES ] }
        ON SEQUENCES 
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   **grant\_on\_functions\_clause**  grants permissions on functions.

    ```
    GRANT { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON FUNCTIONS 
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   **grant\_on\_types\_clause**  grants permissions on types.

    ```
    GRANT { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON TYPES 
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   **grant\_on\_client\_master\_keys\_clause**  grants permissions on CMKs.

    ```
    GRANT { { USAGE  | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON CLIENT_MASTER_KEYS
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   **grant\_on\_column\_encryption\_keys\_clause**  grants permissions on CEKs.

    ```
    GRANT { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON COLUMN_ENCRYPTION_KEYS 
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   **revoke\_on\_tables\_clause**  revokes permissions on tables.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | ALTER | DROP | COMMENT | INDEX | VACUUM } 
        [, ...] | ALL [ PRIVILEGES ] }
        ON TABLES 
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```

-   **revoke\_on\_sequences\_clause**  revokes permissions on sequences.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { SELECT | UPDATE | USAGE | ALTER | DROP | COMMENT } 
        [, ...] | ALL [ PRIVILEGES ] }
        ON SEQUENCES
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```

-   **revoke\_on\_functions\_clause**  revokes permissions on functions.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { {EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON FUNCTIONS 
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```

-   **revoke\_on\_types\_clause**  revokes permissions on types.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON TYPES 
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```


-   **revoke\_on\_client\_master\_keys\_clause**  revokes permissions on CMKs.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON CLIENT_MASTER_KEYS 
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```

-   **revoke\_on\_column\_encryption\_keys\_clause**  revokes permissions on CEKs.

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON COLUMN_ENCRYPTION_KEYS
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```


## Parameter Description<a name="en-us_topic_0283136687_en-us_topic_0237122057_en-us_topic_0059778935_sb713f37e7b9a40ad936d0bbba0449eb1"></a>

-   **target\_role**

    Specifies the name of an existing role. If  **FOR ROLE/USER**  is omitted, the current role is assumed.

    Value range: an existing role name

-   **schema\_name**

    Specifies the name of an existing schema.

    **target\_role**  must have the  **CREATE**  permission for  **schema\_name**.

    Value range: an existing schema name

-   **role\_name**

    Specifies the name of an existing role to grant or revoke permissions for.

    Value range: an existing role name


>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>To drop a role for which the default permissions have been granted, reverse the changes in its default permissions or use  **DROP OWNED BY**  to get rid of the default permission entry for the role.

## Examples<a name="en-us_topic_0283136687_en-us_topic_0237122057_en-us_topic_0059778935_s64b82734f0054e559da974687a61e6bf"></a>

```
-- Grant the SELECT permission on all the tables (and views) in tpcds to every user.
openGauss=# ALTER DEFAULT PRIVILEGES IN SCHEMA tpcds GRANT SELECT ON TABLES TO PUBLIC;

-- Create a common user jack.
openGauss=# CREATE USER jack PASSWORD 'xxxxxxxxx';

-- Grant the INSERT permission on all the tables in tpcds to the user jack.
openGauss=# ALTER DEFAULT PRIVILEGES IN SCHEMA tpcds GRANT INSERT ON TABLES TO jack;

-- Revoke the preceding permissions.
openGauss=# ALTER DEFAULT PRIVILEGES IN SCHEMA tpcds REVOKE SELECT ON TABLES FROM PUBLIC; 
openGauss=# ALTER DEFAULT PRIVILEGES IN SCHEMA tpcds REVOKE INSERT ON TABLES FROM jack;

-- Delete user jack.
openGauss=# DROP USER jack;
```

## Helpful Links<a name="en-us_topic_0283136687_en-us_topic_0237122057_en-us_topic_0059778935_s802a1dc228084944b989677194792353"></a>

[GRANT](grant.md)  and  [REVOKE](revoke.md)

