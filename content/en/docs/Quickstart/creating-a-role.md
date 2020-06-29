# Creating a Role<a name="EN-US_TOPIC_0241704263"></a>

**CREATE ROLE**  is used to create a role.

A role is an entity that owns database objects and permissions. In different environments, a role can be considered a user, a group, or both.

## Precautions<a name="en-us_topic_0241234239_en-us_topic_0059778189_sca46ba0a91d7470c94ec4197a5befe87"></a>

-   **CREATE ROLE**  adds a role to a database. The role does not have the  **LOGIN**  permission.
-   Only the user who has the  **CREATE ROLE**  permission or a system administrator is allowed to create roles.

## Syntax<a name="en-us_topic_0241234239_en-us_topic_0059778189_se8fd2944bc8f42e2be5e7bd140f801fc"></a>

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

## Example:<a name="en-us_topic_0241234239_en-us_topic_0059778189_s0dea2f90b8474387aff0ab3f366a611e"></a>

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

