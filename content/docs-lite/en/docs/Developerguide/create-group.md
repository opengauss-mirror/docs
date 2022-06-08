# CREATE GROUP<a name="EN-US_TOPIC_0289900676"></a>

## Function<a name="en-us_topic_0283137568_en-us_topic_0237122105_en-us_topic_0059779249_sf157d08ffdd84191875e1481ee3a4626"></a>

**CREATE GROUP**  creates a user group.

## Precautions<a name="en-us_topic_0283137568_en-us_topic_0237122105_en-us_topic_0059779249_s812903629ae84f19bfcd254e6a188143"></a>

**CREATE GROUP**  is an alias for  **CREATE ROLE**, and it is not a standard SQL syntax and not recommended. Users can use  **CREATE ROLE**  directly.

## Syntax<a name="en-us_topic_0283137568_en-us_topic_0237122105_en-us_topic_0059779249_s59b3eee4055b421fb68af217fb853082"></a>

```
CREATE GROUP group_name [ [ WITH ] option [ ... ] ] [ ENCRYPTED | UNENCRYPTED ] { PASSWORD | IDENTIFIED BY } { 'password' [ EXPIRED ] | DISABLE };
```

The syntax of the  **option**  clause is as follows:

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

## Parameter Description<a name="en-us_topic_0283137568_en-us_topic_0237122105_en-us_topic_0059779249_s81eab1035fdd4c27afbf893a8916a6bb"></a>

See  [Parameter Description](create-role.md#en-us_topic_0283136858_en-us_topic_0237122112_en-us_topic_0059778189_s5a43ec5742a742089e2c302063de7fe4)  in  **CREATE ROLE**.

## Helpful Links<a name="en-us_topic_0283137568_en-us_topic_0237122105_en-us_topic_0059779249_s8153dd487fd84f2e924435436395a9a8"></a>

[ALTER GROUP](alter-group.md),  [DROP GROUP](drop-group.md), and  [CREATE ROLE](create-role.md)

