# CREATE USER<a name="EN-US_TOPIC_0289899951"></a>

## Function<a name="en-us_topic_0283136891_en-us_topic_0237122125_en-us_topic_0059778166_s08b0f056b5f14492970a9037c63fa70c"></a>

**CREATE USER**  creates a user.

## Precautions<a name="en-us_topic_0283136891_en-us_topic_0237122125_en-us_topic_0059778166_sd48f2980b9464b1abca65a4747930552"></a>

-   A user created using the  **CREATE USER**  statement has the  **LOGIN**  permission by default.
-   When you run the  **CREATE USER**  command to create a user, the system creates a schema with the same name as the user in the database where the command is executed.
-   The owner of an object created by a system administrator in a schema with the same name as a common user is the common user, not the system administrator.

## Syntax<a name="en-us_topic_0283136891_en-us_topic_0237122125_en-us_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035f"></a>

```
CREATE USER user_name [ [ WITH ] option [ ... ] ] [ ENCRYPTED | UNENCRYPTED ] { PASSWORD | IDENTIFIED BY } { 'password' [EXPIRED] | DISABLE };
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
    | {PERSISTENCE | NOPERSISTENCE}
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

## Parameter Description<a name="en-us_topic_0283136891_en-us_topic_0237122125_en-us_topic_0059778166_s65dbaae3763942599852d585997c77dd"></a>

-   **user\_name**

    Specifies the name of the user to be created.

    Value range: a string. It must comply with the naming convention. A value can contain a maximum of 63 characters.

-   **password**

    Specifies the login password.

    The new password must:

    -   Contain at least eight characters. This is the default length.
    -   Differ from the username or the username spelled backward.
    -   Contain at least three of the following character types: uppercase characters, lowercase characters, digits, and special characters \(limited to \~!@\#$ %^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?\).
    -   The password can also be a ciphertext character string that meets the format requirements. This mode is mainly used to import user data. You are not advised to use it directly. If a ciphertext password is directly used, the user must know the plaintext corresponding to the ciphertext password and ensure the complexity of the plaintext password. The database does not verify the complexity of the ciphertext password. The security of the ciphertext password is ensured by the user.
    -   Be enclosed by single or double quotation marks.

    Value range: a string


For other parameters, see  [CREATE ROLE](create-role.md).

## Examples<a name="en-us_topic_0283136891_en-us_topic_0237122125_en-us_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa"></a>

```
-- Create user jim whose login password is xxxxxxxxx:
openGauss=# CREATE USER jim PASSWORD 'xxxxxxxxx';

-- Alternatively, you can run the following statement:
openGauss=# CREATE USER kim IDENTIFIED BY 'xxxxxxxxx';

-- To create a user with the CREATEDB permission, add the CREATEDB keyword.
openGauss=# CREATE USER dim CREATEDB PASSWORD 'xxxxxxxxx';

-- Change user jim's login password from xxxxxxxxx to Abcd@123:
openGauss=# ALTER USER jim IDENTIFIED BY 'Abcd@123' REPLACE 'xxxxxxxxx';

-- Add the CREATEROLE permission to jim.
openGauss=# ALTER USER jim CREATEROLE;

-- Set enable_seqscan to on. (The setting will take effect in the next session.)
openGauss=# ALTER USER jim SET enable_seqscan TO on;

-- Reset the enable_seqscan parameter for jim.
openGauss=# ALTER USER jim RESET enable_seqscan;

-- Lock jim.
openGauss=# ALTER USER jim ACCOUNT LOCK;

-- Delete users.
openGauss=# DROP USER kim CASCADE;
openGauss=# DROP USER jim CASCADE;
openGauss=# DROP USER dim CASCADE;
```

## Helpful Links<a name="en-us_topic_0283136891_en-us_topic_0237122125_en-us_topic_0059778166_sf40b399700a74bd7b2d37e445d057f6e"></a>

[ALTER USER](alter-user.md),  [CREATE ROLE](create-role.md), and  [DROP USER](drop-user.md)

