# CREATE GROUP<a name="ZH-CN_TOPIC_0289900676"></a>

## 功能描述<a name="zh-cn_topic_0283137568_zh-cn_topic_0237122105_zh-cn_topic_0059779249_sf157d08ffdd84191875e1481ee3a4626"></a>

创建一个新用户组。

## 注意事项<a name="zh-cn_topic_0283137568_zh-cn_topic_0237122105_zh-cn_topic_0059779249_s812903629ae84f19bfcd254e6a188143"></a>

CREATE GROUP是CREATE ROLE的别名，非SQL标准语法，不推荐使用，建议用户直接使用CREATE ROLE替代。

## 语法格式<a name="zh-cn_topic_0283137568_zh-cn_topic_0237122105_zh-cn_topic_0059779249_s59b3eee4055b421fb68af217fb853082"></a>

```
CREATE GROUP group_name [ [ WITH ] option [ ... ] ] [ ENCRYPTED | UNENCRYPTED ] { PASSWORD | IDENTIFIED BY } { 'password' [ EXPIRED ] | DISABLE };
```

其中可选项option子句语法为：

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

## 参数说明<a name="zh-cn_topic_0283137568_zh-cn_topic_0237122105_zh-cn_topic_0059779249_s81eab1035fdd4c27afbf893a8916a6bb"></a>

请参考CREATE ROLE的[参数说明](CREATE-ROLE.md#zh-cn_topic_0283136858_zh-cn_topic_0237122112_zh-cn_topic_0059778189_s5a43ec5742a742089e2c302063de7fe4)。

## 相关链接<a name="zh-cn_topic_0283137568_zh-cn_topic_0237122105_zh-cn_topic_0059779249_s8153dd487fd84f2e924435436395a9a8"></a>

[ALTER GROUP](ALTER-GROUP.md)，[DROP GROUP](DROP-GROUP.md)，[CREATE ROLE](CREATE-ROLE.md)

