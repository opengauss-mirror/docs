# ALTER USER<a name="EN-US_TOPIC_0289900744"></a>

## Function<a name="en-us_topic_0283136971_en-us_topic_0237122083_en-us_topic_0059777461_s46f3e0aac3a84502bc20eee219bef9cf"></a>

**ALTER USER**  modifies the attributes of a database user.

## Precautions<a name="en-us_topic_0283136971_en-us_topic_0237122083_en-us_topic_0059777461_sfefe5f38da29449aba061ba83566257d"></a>

Session parameters modified by  **ALTER USER**  apply to a specified user and take effect in the next session.

## Syntax<a name="en-us_topic_0283136971_en-us_topic_0237122083_en-us_topic_0059777461_s700b45dab05a43e4ac8959c5824223be"></a>

-   Modify user permissions or other information.

    ```
    ALTER USER user_name [ [ WITH ] option [ ... ] ];
    ```

    The  **option**  clause is as follows:

    ```
    { CREATEDB | NOCREATEDB }
        | { CREATEROLE | NOCREATEROLE }
        | { INHERIT | NOINHERIT }
        | { AUDITADMIN | NOAUDITADMIN }
        | { SYSADMIN | NOSYSADMIN }
        | {MONADMIN | NOMONADMIN}
        | {OPRADMIN | NOOPRADMIN}
        | {POLADMIN | NOPOLADMIN}
        | { USEFT | NOUSEFT }
        | { LOGIN | NOLOGIN }
        | { REPLICATION | NOREPLICATION }
        | {INDEPENDENT | NOINDEPENDENT}
        | {VCADMIN | NOVCADMIN}
        | {PERSISTENCE | NOPERSISTENCE}
        | CONNECTION LIMIT connlimit
        | [ ENCRYPTED | UNENCRYPTED ] PASSWORD { 'password' [EXPIRED] | DISABLE | EXPIRED }
        | [ ENCRYPTED | UNENCRYPTED ] IDENTIFIED BY { 'password' [ REPLACE 'old_password' | EXPIRED ] | DISABLE }
        | VALID BEGIN 'timestamp'
        | VALID UNTIL 'timestamp'
        | RESOURCE POOL 'respool'
        | PERM SPACE 'spacelimit'
        | PGUSER
    ```

-   Change the username.

    ```
    ALTER USER user_name 
        RENAME TO new_name;
    ```

-   Lock or unlock.

    ```
    ALTER USER user_name
        ACCOUNT { LOCK | UNLOCK };
    ```

-   Change the value of a specified parameter associated with the user.

    ```
    ALTER USER user_name 
        SET configuration_parameter { { TO | = } { value | DEFAULT } | FROM CURRENT };
    ```

-   Reset the value of a specified parameter associated with the user.

    ```
    ALTER USER user_name 
        RESET { configuration_parameter | ALL };
    ```


## Parameter Description<a name="en-us_topic_0283136971_en-us_topic_0237122083_en-us_topic_0059777461_s28f32bbb70f648b680f66e994ccb96f4"></a>

-   **user\_name**

    Specifies the current username.

    Value range: an existing username

-   **new\_password**

    Specifies a new password.

    The new password must:

    -   Differ from the old password.
    -   Contain at least eight characters. This is the default length.
    -   Differ from the username or the username spelled backward.
    -   Contain at least three types of the following four types of characters: uppercase characters \(A to Z\), lowercase characters \(a to z\), digits \(0 to 9\), and special characters, including: \~!@\#$%^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?

    Value range: a string

-   **old\_password**

    Specifies the old password.

-   **ACCOUNT LOCK | ACCOUNT UNLOCK**
    -   **ACCOUNT LOCK**: locks an account to forbid login to databases.
    -   **ACCOUNT UNLOCK**: unlocks an account to allow login to databases.

-   **PGUSER**

    In the current version, the  **PGUSER**  attribute of a user cannot be modified.


For details about other parameters, see "Parameter Description" in  [CREATE ROLE](create-role.md)  and  [ALTER ROLE](alter-role.md).

## Example<a name="en-us_topic_0283136971_en-us_topic_0237122083_en-us_topic_0059777461_sf9c8ea511e3c47b98d77fc0ab56e9d07"></a>

See  [Examples](create-user.md#en-us_topic_0283136891_en-us_topic_0237122125_en-us_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa)  in  **CREATE USER**.

## Helpful Links<a name="en-us_topic_0283136971_en-us_topic_0237122083_en-us_topic_0059777461_sfe6a005c6e5b4a98b94be3d6521f4840"></a>

[CREATE ROLE](create-role.md),  [CREATE USER](create-user.md), and  [DROP USER](drop-user.md)

