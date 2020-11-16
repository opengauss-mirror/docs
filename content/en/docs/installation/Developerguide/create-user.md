# CREATE USER<a name="EN-US_TOPIC_0242370589"></a>

## Function<a name="en-us_topic_0237122125_en-us_topic_0059778166_s08b0f056b5f14492970a9037c63fa70c"></a>

**CREATE USER**  creates a user.

## Precautions<a name="en-us_topic_0237122125_en-us_topic_0059778166_sd48f2980b9464b1abca65a4747930552"></a>

-   A user created using the  **CREATE USER**  statement has the  **LOGIN**  permission by default.
-   A schema named after the user is automatically created in the database where the statement is executed, but not in other databases. You can run the  **CREATE SCHEMA**  statement to create such a schema for the user in other databases.
-   The owner of an object created by a system administrator in a schema with the same name as a common user is the common user, not the system administrator.

## Syntax<a name="en-us_topic_0237122125_en-us_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035f"></a>

```
CREATE USER user_name [ [ WITH ] option [ ... ] ] [ ENCRYPTED | UNENCRYPTED ] { PASSWORD | IDENTIFIED BY } { 'password' | DISABLE };
```

The  **option**  clause is used to configure information, including permissions and properties.

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
    | ADMIN role_name [, ...]
    | USER role_name [, ...]
    | SYSID uid
    | DEFAULT TABLESPACE tablespace_name
    | PROFILE DEFAULT
    | PROFILE profile_name
    | PGUSER
```

## Parameter Description<a name="en-us_topic_0237122125_en-us_topic_0059778166_s65dbaae3763942599852d585997c77dd"></a>

-   **user\_name**

    Username

    Value range: a string. It must comply with the naming convention. It can contain a maximum of 63 characters.

-   **password**

    Specifies the login password.

    The new password must:

    -   Contain at least eight characters. This is the default length.
    -   Differ from the username or the username spelled backward.
    -   Contain at least three types of the following four types of characters: uppercase characters \(A to Z\), lowercase characters \(a to z\), digits \(0 to 9\), and special characters, including: \~!@\#$%^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?
    -   Be enclosed by single or double quotation marks.

    Value range: a string


For other parameters, see  [CREATE ROLE](create-role.md).

## Example<a name="en-us_topic_0237122125_en-us_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa"></a>

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

## Helpful Links<a name="en-us_topic_0237122125_en-us_topic_0059778166_sf40b399700a74bd7b2d37e445d057f6e"></a>

[ALTER USER](alter-user.md),  [CREATE ROLE](create-role.md), and  [DROP USER](drop-user.md)

