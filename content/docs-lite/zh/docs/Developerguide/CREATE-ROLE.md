# CREATE ROLE<a name="ZH-CN_TOPIC_0289900481"></a>

## 功能描述<a name="zh-cn_topic_0283136858_zh-cn_topic_0237122112_zh-cn_topic_0059778189_s088f05fb7ae447c5b4c28bf78f6a0a56"></a>

创建角色。

角色是拥有数据库对象和权限的实体。在不同的环境中角色可以认为是一个用户，一个组或者兼顾两者。

## 注意事项<a name="zh-cn_topic_0283136858_zh-cn_topic_0237122112_zh-cn_topic_0059778189_sca46ba0a91d7470c94ec4197a5befe87"></a>

-   在数据库中添加一个新角色，角色无登录权限。
-   创建角色的用户必须具备CREATE ROLE的权限或者是系统管理员。

## 语法格式<a name="zh-cn_topic_0283136858_zh-cn_topic_0237122112_zh-cn_topic_0059778189_se8fd2944bc8f42e2be5e7bd140f801fc"></a>

```
CREATE ROLE role_name [ [ WITH ] option [ ... ] ] [ ENCRYPTED | UNENCRYPTED ] { PASSWORD | IDENTIFIED BY } { 'password' [EXPIRED] | DISABLE };
```

其中角色信息设置子句option语法为：

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
    | USER GROUP 'groupuser'
    | PERM SPACE 'spacelimit'
    | TEMP SPACE 'tmpspacelimit'
    | SPILL SPACE 'spillspacelimit'
    | NODE GROUP logic_cluster_name
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

## 参数说明<a name="zh-cn_topic_0283136858_zh-cn_topic_0237122112_zh-cn_topic_0059778189_s5a43ec5742a742089e2c302063de7fe4"></a>

-   **role\_name**

    角色名称。

    取值范围：字符串，要符合标识符的命名规范，且最多为63个字符。若超过63个字符，数据库会截断并保留前63个字符当做角色名称。在创建角色时，数据库的时候会给出提示信息。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >标识符需要为字母、下划线、数字（0-9）或美元符号（$），且必须以字母（a-z）或下划线（\_）开头。

-   **password**

    登录密码。

    密码规则如下：

    -   密码默认不少于8个字符。
    -   不能与用户名及用户名倒序相同。
    -   至少包含大写字母（A-Z），小写字母（a-z），数字（0-9），非字母数字字符（限定为\~!@\#$%^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?）四类字符中的三类字符。
    -   密码也可以是符合格式要求的密文字符串，这种情况主要用于用户数据导入场景，不推荐用户直接使用。如果直接使用密文密码，用户需要知道密文密码对应的明文，并且保证明文密码复杂度，数据库不会校验密文密码复杂度，直接使用密文密码的安全性由用户保证。
    -   创建角色时，应当使用双引号或单引号将用户密码括起来。

    取值范围：不为空的字符串。

-   **EXPIRED**

    在创建用户时可指定EXPIRED参数，即创建密码失效用户，该用户不允许执行简单查询和扩展查询。只有在修改自身密码后才可正常执行语句。

-   DISABLE

    默认情况下，用户可以更改自己的密码，除非密码被禁用。要禁用用户的密码，请指定DISABLE。禁用某个用户的密码后，将从系统中删除该密码，此类用户只能通过外部认证来连接数据库，例如：kerberos认证。只有管理员才能启用或禁用密码。普通用户不能禁用初始用户的密码。要启用密码，请运行ALTER USER并指定密码。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >轻量版场景下，openGauss中kerberos相关功能不可用。

-   **ENCRYPTED | UNENCRYPTED**

    控制密码存储在系统表里的口令是否加密。按照产品安全要求，密码必须加密存储，所以，UNENCRYPTED在openGauss中禁止使用。因为系统无法对指定的加密口令字符串进行解密，所以如果目前的口令字符串已经是用SHA256加密的格式，则会继续照此存放，而不管是否声明了ENCRYPTED或UNENCRYPTED。这样就允许在dump/restore的时候重新加载加密的口令。

-   **SYSADMIN | NOSYSADMIN**

    决定一个新角色是否为“系统管理员”，具有SYSADMIN属性的角色拥有系统最高权限。

    缺省为NOSYSADMIN。

-   **MONADMIN | NOMONADMIN**

    定义角色是否是监控管理员。

    缺省为NOMONADMIN。

-   **OPRADMIN | NOOPRADMIN**

    定义角色是否是运维管理员。

    缺省为NOOPRADMIN。

-   **POLADMIN | NOPOLADMIN**

    定义角色是否是安全策略管理员。

    缺省为NOPOLADMIN。

-   **AUDITADMIN | NOAUDITADMIN**

    定义角色是否有审计管理属性。

    缺省为NOAUDITADMIN。

-   **CREATEDB | NOCREATEDB**

    决定一个新角色是否能创建数据库。

    新角色没有创建数据库的权限。

    缺省为NOCREATEDB。

-   **USEFT | NOUSEFT**

    该参数为保留参数，暂未启用。

-   **CREATEROLE | NOCREATEROLE**

    决定一个角色是否可以创建新角色（也就是执行CREATE ROLE和CREATE USER）。 一个拥有CREATEROLE权限的角色也可以修改和删除其他角色。

    缺省为NOCREATEROLE。

-   **INHERIT | NOINHERIT**

    这些子句决定一个角色是否“继承”它所在组的角色的权限。不推荐使用。

-   **LOGIN | NOLOGIN**

    具有LOGIN属性的角色才可以登录数据库。一个拥有LOGIN属性的角色可以认为是一个用户。

    缺省为NOLOGIN。

-   **REPLICATION | NOREPLICATION**

    定义角色是否允许流复制或设置系统为备份模式。REPLICATION属性是特定的角色，仅用于复制。

    缺省为NOREPLICATION。

-   **INDEPENDENT | NOINDEPENDENT**

    定义私有、独立的角色。具有INDEPENDENT属性的角色，管理员对其进行的控制、访问的权限被分离，具体规则如下：

    -   未经INDEPENDENT角色授权，系统管理员无权对其表对象进行增、删、查、改、拷贝、授权操作。
    -   若将私有用户表的相关权限授予其他非私有用户，系统管理员也会获得同样的权限。
    -   未经INDEPENDENT角色授权，系统管理员和拥有CREATEROLE属性的安全管理员无权修改INDEPENDENT角色的继承关系。
    -   系统管理员无权修改INDEPENDENT角色的表对象的属主。
    -   系统管理员和拥有CREATEROLE属性的安全管理员无权去除INDEPENDENT角色的INDEPENDENT属性。
    -   系统管理员和拥有CREATEROLE属性的安全管理员无权修改INDEPENDENT角色的数据库口令，INDEPENDENT角色需管理好自身口令，口令丢失无法重置。
    -   管理员属性用户不允许定义修改为INDEPENDENT属性。

-   **CONNECTION LIMIT**

    声明该角色可以使用的并发连接数量。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >-   系统管理员不受此参数的限制。
    >-   connlimit数据库主节点单独统计，openGauss整体的连接数 = connlimit \* 当前正常数据库主节点个数。

    取值范围：整数，\>=-1，缺省值为-1，表示没有限制。

-   **VALID BEGIN**

    设置角色生效的时间戳。如果省略了该子句，角色无有效开始时间限制。

-   **VALID UNTIL**

    设置角色失效的时间戳。如果省略了该子句，角色无有效结束时间限制。

-   **RESOURCE POOL**

    设置角色使用的resource pool名称，该名称属于系统表：pg\_resource\_pool。

-   **USER GROUP**

    创建一个user的子用户。当前版本暂不支持。

-   **PERM SPACE**

    设置用户使用空间的大小。

-   **TEMP SPACE**

    设置用户临时表存储空间限额。

-   **SPILL SPACE**

    设置用户算子落盘空间限额。

-   **NODE GROUP**

    设置用户关联的逻辑集群名称。当前版本暂不支持。

-   **IN ROLE**

    新角色立即拥有IN ROLE子句中列出的一个或多个现有角色拥有的权限。不推荐使用。

-   **IN GROUP**

    IN GROUP是IN ROLE过时的拼法。不推荐使用。

-   **ROLE**

    ROLE子句列出一个或多个现有的角色，它们将自动添加为这个新角色的成员，拥有新角色所有的权限。

-   **ADMIN**

    ADMIN子句类似ROLE子句，不同的是ADMIN后的角色可以把新角色的权限赋给其他角色。

-   **USER**

    USER子句是ROLE子句过时的拼法。

-   **SYSID**

    SYSID子句将被忽略，无实际意义。

-   **DEFAULT TABLESPACE**

    DEFAULT TABLESPACE子句将被忽略，无实际意义。

-   **PROFILE**

    PROFILE子句将被忽略，无实际意义。

-   **PGUSER**

    当前版本该属性没有实际意义，仅为了语法的前向兼容而保留。


## 示例<a name="zh-cn_topic_0283136858_zh-cn_topic_0237122112_zh-cn_topic_0059778189_s0dea2f90b8474387aff0ab3f366a611e"></a>

```
--创建一个角色，名为manager，密码为xxxxxxxxx。
openGauss=# CREATE ROLE manager IDENTIFIED BY 'xxxxxxxxx';

--创建一个角色，从2015年1月1日开始生效，到2026年1月1日失效。
openGauss=# CREATE ROLE miriam WITH LOGIN PASSWORD 'xxxxxxxxx' VALID BEGIN '2015-01-01' VALID UNTIL '2026-01-01';

--修改角色manager的密码为abcd@123。
openGauss=# ALTER ROLE manager IDENTIFIED BY '$$$$$$$$' REPLACE 'xxxxxxxxx';

--修改角色manager为系统管理员。
openGauss=# ALTER ROLE manager SYSADMIN;

--删除角色manager。
openGauss=# DROP ROLE manager;

--删除角色miriam。
openGauss=# DROP ROLE miriam;
```

## 相关链接<a name="zh-cn_topic_0283136858_zh-cn_topic_0237122112_zh-cn_topic_0059778189_s613f76d12a5144f3b503787cece40637"></a>

[SET ROLE](SET-ROLE.md)，[ALTER ROLE](ALTER-ROLE.md)，[DROP ROLE](DROP-ROLE.md)，[GRANT](GRANT.md)

