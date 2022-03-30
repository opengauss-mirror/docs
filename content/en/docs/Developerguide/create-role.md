# CREATE ROLE<a name="EN-US_TOPIC_0289900481"></a>

## Function<a name="en-us_topic_0283136858_en-us_topic_0237122112_en-us_topic_0059778189_s088f05fb7ae447c5b4c28bf78f6a0a56"></a>

**CREATE ROLE**  creates a role.

A role is an entity that owns database objects and permissions. In different environments, a role can be considered a user, a group, or both.

## Precautions<a name="en-us_topic_0283136858_en-us_topic_0237122112_en-us_topic_0059778189_sca46ba0a91d7470c94ec4197a5befe87"></a>

-   **CREATE ROLE**  adds a role to a database. The role does not have the  **LOGIN**  permission.
-   Only the user who has the  **CREATE ROLE**  permission or a system administrator is allowed to create roles.

## Syntax<a name="en-us_topic_0283136858_en-us_topic_0237122112_en-us_topic_0059778189_se8fd2944bc8f42e2be5e7bd140f801fc"></a>

```
CREATE ROLE role_name [ [ WITH ] option [ ... ] ] [ ENCRYPTED | UNENCRYPTED ] { PASSWORD | IDENTIFIED BY } { 'password' [EXPIRED] | DISABLE };
```

The syntax of role information configuration clause  **option**  is as follows:

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
    | ADMIN rol e_name [, ...]
    | USER role_name [, ...]
    | SYSID uid
    | DEFAULT TABLESPACE tablespace_name
    | PROFILE DEFAULT
    | PROFILE profile_name
    | PGUSER
```

## Parameter Description<a name="en-us_topic_0283136858_en-us_topic_0237122112_en-us_topic_0059778189_s5a43ec5742a742089e2c302063de7fe4"></a>

-   **role\_name**

    Specifies the name of a role.

    Value range: a string. It must comply with the naming convention rule, and can contain a maximum of 63 characters. If the value contains more than 63 characters, the database truncates it and retains the first 63 characters as the role name. When a role is created, the database will display a message.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The identifier must be letters, underscores \(\_\), digits \(0-9\), or dollar signs \($\) and must start with a letter \(a-z\) or underscore \(\_\).

-   **password**

    Specifies the login password.

    A new password must:

    -   Contain at least eight characters. This is the default length.
    -   Differ from the username or the username spelled backward.
    -   Contain at least three of the following character types: uppercase characters, lowercase characters, digits, and special characters \(limited to \~!@\#$ %^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?\).
    -   The password can also be a ciphertext character string that meets the format requirements. This mode is mainly used to import user data. You are not advised to use it directly. If a ciphertext password is used, the user must know the plaintext corresponding to the ciphertext password and ensure that the plaintext password meets the complexity requirements. The database does not verify the complexity of the ciphertext password. Instead, the security of the ciphertext password is ensured by the user.
    -   Be enclosed by single or double quotation marks.

    Value range: a character string that cannot be empty.

-   **EXPIRED**

    When creating a user, you can specify the  **EXPIRED**  parameter to create a user whose password is invalid. The user cannot perform simple or extended queries. The statement can be executed only after the password is changed.

-   **DISABLE**

    By default, you can change your password unless it is disabled. To disable the password of a user, use this parameter. After the password of a user is disabled, the password will be deleted from the system. The user can connect to the database only through external authentication, for example, Kerberos authentication. Only administrators can enable or disable a password. Common users cannot disable the password of an initial user. To enable a password, run  **ALTER USER**  and specify the password.

-   **ENCRYPTED | UNENCRYPTED**

    Controls whether the password is stored encrypted in the system catalogs. According to product security requirement, the password must be stored encrypted. Therefore,  **UNENCRYPTED**  is forbidden in openGauss. If the password string has already been encrypted in the SHA256 format, it is stored encrypted as it was, regardless of whether  **ENCRYPTED**  or  **UNENCRYPTED**  is specified \(since the system cannot decrypt the specified encrypted password string\). This allows reloading of encrypted passwords during dump/restore.

-   **SYSADMIN | NOSYSADMIN**

    Determines whether a new role is a system administrator. Roles having the  **SYSADMIN**  attribute have the highest permission.

    Value range: If not specified,  **NOSYSADMIN**  is the default.

-   **MONADMIN | NOMONADMIN**

    Determines whether a role is a monitoring administrator.

    Value range: If not specified,  **NOMONADMIN**  is the default.

-   **OPRADMIN | NOOPRADMIN**

    Determines whether a role is an O&M administrator.

    Value range: If not specified,  **NOOPRADMIN**  is the default.

-   **POLADMIN | NOPOLADMIN**

    Determines whether a role is a security policy administrator.

    Value range: If not specified,  **NOPOLADMIN**  is the default.

-   **AUDITADMIN | NOAUDITADMIN**

    Determines whether a role has the audit and management attributes.

    If not specified,  **NOAUDITADMIN**  is the default.

-   **CREATEDB | NOCREATEDB**

    Determines a role's permission to create databases.

    A new role does not have the permission to create databases.

    Value range: If not specified,  **NOCREATEDB**  is the default.

-   **USEFT | NOUSEFT**

    This parameter is reserved and not used in this version.

-   **CREATEROLE | NOCREATEROLE**

    Determines whether a role will be permitted to create new roles \(that is, execute  **CREATE ROLE**  and  **CREATE USER**\). A role with the  **CREATEROLE**  permission can also modify and delete other roles.

    Value range: If not specified,  **NOCREATEROLE**  is the default.

-   **INHERIT | NOINHERIT**

    Determines whether a role "inherits" the permissions of roles in the same group. It is not recommended.

-   **LOGIN | NOLOGIN**

    Determines whether a role is allowed to log in to a database. A role having the  **LOGIN**  attribute can be considered as a user.

    Value range: If not specified,  **NOLOGIN**  is the default.

-   **REPLICATION | NOREPLICATION**

    Determines whether a role is allowed to initiate streaming replication or put the system in and out of backup mode. A role having the  **REPLICATION**  attribute is specific to replication.

    If not specified,  **NOREPLICATION**  is the default.

-   **INDEPENDENT | NOINDEPENDENT**

    Defines private, independent roles. For a role with the  **INDEPENDENT**  attribute, administrators' permissions to control and access this role are separated. The rules are as follows:

    -   Administrators have no permission to add, delete, query, modify, copy, or authorize the corresponding table objects without the authorization from the  **INDEPENDENT**  role.
    -   If permissions related to private user tables are granted to non-private users, the system administrator will obtain the same permissions.
    -   System administrators and security administrators with the  **CREATEROLE**  attribute have no permission to modify the inheritance relationship of the  **INDEPENDENT**  role without the authorization of the  **INDEPENDENT**  role.
    -   System administrators have no permission to modify the owner of the table objects for the  **INDEPENDENT**  role.
    -   System administrators and security administrators with the  **CREATEROLE**  attribute have no permission to remove the  **INDEPENDENT**  attribute of the  **INDEPENDENT**  role.
    -   System administrators and security administrators with the  **CREATEROLE**  attribute have no permission to change the database password of the  **INDEPENDENT**  role. The  **INDEPENDENT**  role must manage its own password. If the password is lost, it cannot be reset.
    -   The  **SYSADMIN**  attribute of a user cannot be changed to the  **INDEPENDENT**  attribute.

-   **VCADMIN | NOVCADMIN**

    This parameter has no actual meaning.

-   **PERSISTENCE | NOPERSISTENCE**

    Defines a permanent user. Only the initial user is allowed to create, modify, and delete permanent users with the  **PERSISTENCE**  attribute.

-   **CONNECTION LIMIT**

    Specifies how many concurrent connections the role can make.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   The system administrator is not restricted by this parameter.
    >-   The number of concurrent connections of each primary database node is calculated separately \(which is the value of  **connlimit**\). The number of all connections of openGauss = Value of  **connlimit**  x Number of normal primary database nodes.

    Value range: an integer greater than or equal to -1. The default value is  **-1**, which means unlimited.

-   **VALID BEGIN**

    Sets a date and time when the role's password takes effect. If this clause is omitted, the password takes effect immediately.

-   **VALID UNTIL**

    Sets a date and time after which the role's password is no longer valid. If this clause is omitted, the password will be valid for all time.

-   **RESOURCE POOL**

    Sets the name of resource pool used by the role. The name belongs to the system catalog  **pg\_resource\_pool**.

-   **PERM SPACE**

    Sets the space available for a user.

-   **TEMP SPACE**

    Sets the space allocated to the temporary table of a user.

-   **SPILL SPACE**

    Sets the operator disk flushing space of a user.

-   **IN ROLE**

    Lists one or more existing roles to which the new role will be immediately added as a new member. It is not recommended.

-   **IN GROUP**

    Specifies an obsolete spelling of  **IN ROLE**. It is not recommended.

-   **ROLE**

    Lists one or more existing roles which are automatically added as members of the new role.

-   **ADMIN**

    Similar to  **ROLE**. However,  **ADMIN**  grants permissions of new roles to other roles.

-   **USER**

    Specifies an obsolete spelling of the  **ROLE**  clause.

-   **SYSID**

    The  **SYSID**  clause is ignored.

-   **DEFAULT TABLESPACE**

    The  **DEFAULT TABLESPACE**  clause is ignored.

-   **PROFILE**

    The  **PROFILE**  clause is ignored.

-   **PGUSER**

    In the current version, this attribute is reserved only for forward compatibility.


## Examples<a name="en-us_topic_0283136858_en-us_topic_0237122112_en-us_topic_0059778189_s0dea2f90b8474387aff0ab3f366a611e"></a>

```
-- Create role manager whose password is xxxxxxxxx.
openGauss=# CREATE ROLE manager IDENTIFIED BY 'xxxxxxxxx';

-- Create a role with its validity from January 1, 2015 to January 1, 2026.
openGauss=# CREATE ROLE miriam WITH LOGIN PASSWORD 'xxxxxxxxx' VALID BEGIN '2015-01-01' VALID UNTIL '2026-01-01';

-- Change the password of role manager to abcd@123.
openGauss=# ALTER ROLE manager IDENTIFIED BY 'abcd@123' REPLACE 'xxxxxxxxx';

-- Change role manager to the system administrator.
openGauss=# ALTER ROLE manager SYSADMIN;

-- Delete role manager.
openGauss=# DROP ROLE manager;

-- Delete role miriam.
openGauss=# DROP ROLE miriam;
```

## Helpful Links<a name="en-us_topic_0283136858_en-us_topic_0237122112_en-us_topic_0059778189_s613f76d12a5144f3b503787cece40637"></a>

[SET ROLE](set-role.md),  [ALTER ROLE](alter-role.md),  [DROP ROLE](drop-role.md), and  [GRANT](grant.md)

