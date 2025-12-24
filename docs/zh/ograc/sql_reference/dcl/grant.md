# GRANT

## 功能说明

在数据库管理中，使用grant命令将系统权限或角色分配给用户或其他角色，实现权限的灵活控制。
用户或角色没有被授予SYS用户对象的权限的时候，用户无权将SYS用户对象的权限传递授权给其他用户或角色。

## 使用须知

（1）授权系统权限，用户执行相关语句之前应满足下述条件之一：
-- 已被授权相关系统权限，且拥有WITH ADMIN OPTION属性。
-- 已被授权系统权限GRANT ANY PRIVILEGE。

（2）授权角色，用户执行相关语句之前应满足下述条件之一：
-- 已被授权相关角色，且拥有WITH ADMIN OPTION属性。
-- 已被授权系统权限GRANT ANY ROLE。
-- 为相关角色的创建者。

（3）当用户尝试访问其他用户下的对象时，数据库会先检查被访问用户下的对象是否存在：
-- 如果对象不存在且当前用户为非sys用户，返回权限不足的错误。
-- 如果对象不存在且当前用户为sys用户，返回对象不存在的错误。

（4）对象所有者默认拥有对其所辖对象的完整控制权，包括将权限授予其他用户。

（5）单个用户可被授予的对象权限数量为2048 * 2048，一个用户接受另一个用户的满规格的对象权限授权，数据启动时需要权限加载，
     将会延长启动时间。
   
## 语法结构

GRANT { ALL [ PRIVILEGES ] |{ system_privilege_name | role_name } [ , ... ] } TO grantee [ WITH ADMIN OPTION ]

-- grantee 子句：
{ user_name | role_name } [ , ... ]

GRANT { object_privilege_name | ALL [PRIVILEGES] } [, ...] ON [object_type] [schema_name.]object_name
TO grantee [ WITH GRANT OPTION ]

-- object_privilege_name 子句：
{ SELECT | UPDATE | DELETE | INSERT | ALTER | INDEX | EXECUTE | READ | REFERENCES } [, ... ]

-- object_type子句
[ TABLE | VIEW | SEQUENCE | PACKAGE | PROCEDURE | FUNCTION ]

-- grantee 子句：
{ user_name | role_name } [ , ... ]
GRANT { READ } ON DIRECTORY dir_name TO grantee [ WITH GRANT OPTION ]

-- grantee 子句
{ user_name | role_name } [ , ... ]

### 参数解释

#### system_privilege_name
   系统权限名称。下表展示了系统目前支持的系统权限以及角色或用户对权限的拥有情况，其中“T”表示拥有此权限，“F”表示没有权限。

**系统权限表**
|系统权限|||角色是否拥有该权限||用户是否拥有该权限||
|---|---|---|---|---|---|---|
|操作|权限|权限解释|RESOURCE|CONNECT|SYS|PUBLIC|
| 创建会话 | CREATE SESSION | 新建用户需要授权该权限以便连接数据库 | F | T | T | F |
|创建用户| CREATE USER|需要授权该权限以便创建用户|F|F|T|F|
|创建角色| CREATE ROLE|需要授权该权限以便创建角色|F|F|T|F|
|创建表空间| CREATE TABLESPACE|需要授权该权限以便创建表空间|F|F|T|F|
|创建表| CREATE TABLE|需要授权该权限以便创建本schema中的表|T|F|T|F|
|创建任意表| CREATE ANY TABLE|需要授权该权限以便创建其他schema中的表|F|F|T|F|
|创建索引| CREATE ANY INDEX|创建本schema中的索引，满足下述条件之一：被索引的表在本schema中。有CREATE ANY INDEX权限，如果创还能其他schema中的索引，该条件为必须。|F|F|T|F|
|创建序列|CREATE SEQUENCE|需要授权该权限以便创建本schema中的序列|T|F|T|F|
|创建任意序列|CREATE ANY SEQUENCE|需要授权该权限以便创建其他schema中的序列|F|F|T|F|
|创建视图|CREATE VIEW|需要授权该权限以便创建本schema中的视图|F|F|T|F|
|创建任意视图|CREATE ANY VIEW|需要授权该权限以便创建其他schema中的视图。普通用户基于sys表创建视图，需要补充权限：如果ENABLE_ACCESS_DC=FALSE，需要sys表的select对象权限，否则需要sys表的select权限（对象权限或系统权限）|F|F|T|F|
|创建控制文件|CREATE CTRLFILE|在nomount状态下，可由sys用户在文件缺失的状态下创建控制文件，不允许重复创建。|F|F|T|F|
|创建数据库实例|CREATE DATABASE|在nomount状态下，可由sys用户创建一个数据库实例，不允许重复创建。|F|F|T|F|
|创建数据库链接|CREATE DATABASE LINK|需要授权该权限以便创建数据库链接|F|F|T|F|
|创建同义词|CREATE SYNONYM, CREATE ANY SYNONYM, CREATE PUBLIC SYNONYM|创建本schema下的同义词，有三个之一即可。创建其他schema下的同义词，需要有CREATE ANY SYNONYM权限。创建公共同义词，需要有CREATE PUBLIC SYNONYM权限。|F|F|T|F|
|创建函数/存储过程/自定义高级包|CREATE PROCEDURE|需要授权该权限以便创建本schema下的函数/存储过程/自定义高级包|T|F|T|F|
|创建任意函数/存储过程/自定义高级包|CREATE PROCEDURE|需要授权该权限以便创建其他schema下的函数/存储过程/自定义高级包|F|F|T|F|
|删除用户|DROP USER|需要授权该权限以便删除用户|F|F|T|F|
|删除表空间|DROP TABLESPACE|需要授权该权限以便删除表空间|F|F|T|F|
|删除表|DROP ANY TABLE|用户默认可以删除自身schema下的表，删除其他用户下的表需要该权限|F|F|T|F|
|删除索引|DROP ANY INDEX|用户默认可以删除自身schema下的索引，删除其他用户下的索引需要该权限|F|F|T|F|
|删除序列|DROP ANY SEQUENCE|用户默认可以删除自身schema下的序列，删除其他用户下的序列需要该权限|F|F|T|F|
|删除视图|DROP ANY VIEW|用户默认可以删除自身schema下的视图，删除其他用户下的视图需要该权限|F|F|T|F|
|删除同义词|DROP ANY SYNONYM, DROP PUBLIC SYNONYM|用户默认可以删除自身schema下的同义词，删除其他用户下的同义词需要DROP ANY SYNONYM，删除公共同义词需要DROP PUBLIC SYNONYM。系统仅支持删除公共同义词|F|F|T|F|
|删除角色|DROP ANY ROLE|用户默认可以删除自身schema下的角色，删除其他用户下的角色需要该权限，或者需要用户已被授予该角色，且具有WITH GRANT OPTION|F|F|T|F|
|删除数据库链接|DROP DATABASE LINK|需要授权该权限以便删除数据库链接|F|F|T|F|
|锁表|LOCK ANY TABLE|用户默认可以锁定自身schema下的表，锁定其他用户下的表需要该权限|F|F|T|F|
|清空表|DROP ANY TABLE|用户默认可以通过TRUNCATE TABLE删除自身schema下的表中的所有行，删除其他用户下的表需要该权限|F|F|T|F|
|闪回表|FLASHBACK ANY TABLE|闪回自身schema下的表，所需权限与DROP TABLE相同；闪回其他用户下的表需要该权限。说明：后续根据FLASHBACK TABLE操作的同步类型（SCN/TIMESTAMP/BEFORE）区分所需不同权限。|F|F|T|F|
|清除操作|DROP ANY TABLE, DROP ANY INDEX, DROP TABLESPACE, PURGE DBA_RECYCLEBIN|PURGE支持：表、索引、表空间、回收站。用户默认可以清除自身schema下的对象，删除其他用户下的对象需要对应的权限。|F|F|T|F|
|删除函数/存储过程/自定义高级包|DROP ANY PROCEDURE|用户默认可以删除自身schema下的函数/存储过程/自定义高级包，删除其他用户下的视图需要该权限|F|F|T|F|
|修改会话参数|ALTER SESSION|当前会话默认拥有所有参数的修改权限。该权限预留|F|F|T|F|
|修改表空间|ALTER TABLESPACE|需要授权该权限以便修改表空间|F|F|T|F|
|修改系统属性|ALTER SYSTEM|需要授权该权限以便修改系统属性|F|F|T|F|
|修改数据库|ALTER DATABASE|需要授权该权限以便修改数据库属性|F|F|T|F|
|修改数据库链接|ALTER DATABASE LINK|需要授权该权限以便修改数据库链接|F|F|T|F|
|修改用户信息|ALTER USER|用户默认可以修改自身的密码，修改其他用户下的密码需要该权限|F|F|T|F|
|修改表|ALTER ANY TABLE|用户默认可以修改自身schema下的表，修改其他用户下的表需要该权限或者表的ALTER对象权限|F|F|T|F|
|修改索引|ALTER ANY INDEX|用户默认可以修改自身schema下的索引的属性，修改其他用户下的索引属性需要该权限|F|F|T|F|
|修改序列|ALTER ANY SEQUENCE|用户默认可以修改自身schema下的序列，修改其他用户下的序列需要该权限或者序列的ALTER对象权限|F|F|T|F|
|访问序列|SELECT ANY SEQUENCE|用户默认可以访问自身schema下的序列，访问其他用户下的序列需要该权限|F|F|T|F|
|授权操作|GRANT ANY PRIVILEGE, GRANT ANY ROLE, GRANT ANY OBJECT PRIVILEGE|授予系统权限时执行系统权限授予语句的用户，需满足以下任一条件：已被授予该系统权限，且附带 WITH ADMIN OPTION 属性；自身已被授予 GRANT ANY PRIVILEGE 系统权限。授予角色时执行角色授予语句的用户，需满足以下任一条件：已被授予该角色，且附带 WITH ADMIN OPTION 属性；自身已被授予 GRANT ANY ROLE 系统权限；是该角色的创建者。拥有 GRANT ANY OBJECT PRIVILEGE 系统权限的用户，可将任意用户名下的对象权限，授予其他用户。|F|F|T|F|
|回收权限操作|GRANT ANY PRIVILEGE, GRANT ANY ROLE|执行回收系统权限语句的用户，需满足以下任一条件：已被授予该系统权限，且附带 WITH ADMIN OPTION 属性；自身已被授予 GRANT ANY PRIVILEGE 系统权限。执行回收角色语句的用户，需满足以下任一条件：已被授予该角色，且附带 WITH ADMIN OPTION 属性；自身已被授予 GRANT ANY ROLE 系统权限；是该角色的创建者。|F|F|T|F|
|更改PROFILE属性|ALTER PROFILE|需要授权该权限以便更改profile属性|F|F|T|F|
|创建PROFILE|CREATE PROFILE|需要授权该权限以便创建profile|F|F|T|F|
|删除PROFILE|DROP PROFILE|需要授权该权限以便删除profile|F|F|T|F|
|读取sys用户的表或视图数据|SELECT ANY DICTIONARY|需要授权该权限以便查询sys用户的表或视图|F|F|T|F|
|读取任意表或视图数据|READ ANY TABLE, SELECT ANY TABLE|拥有该权限的用户可查询任意表或视图数据。SYS表的访问受参数ENABLE_ACCESS_DC管控（默认TRUE，仅 SYS 用户可修改；DBA 角色不受ENABLE_ACCESS_DC限制），ENABLE_ACCESS_DC=TRUE → SELECT ANY TABLE可访问SYS对象，ENABLE_ACCESS_DC=FALSE → SELECT ANY TABLE不可访问SYS对象。含FOR UPDATE子句的查询，仅限拥有SELECT ANY TABLE权限的用户查询。|F|F|T|F|
|注释权限|COMMENT ANY TABLE|用户默认可以注释自身schema下的表，注释其他用户下的表需要该权限|F|F|T|F|
|更新表数据|UPDATE ANY TABLE|需要授权该权限以便更新任意表的数据|F|F|T|F|
|插入表数据|INSERT ANY TABLE|需要授权该权限以便向任意表中插入数据|F|F|T|F|
|删除表数据|DELETE ANY TABLE|需要授权该权限以便删除任意表的数据|F|F|T|F|
|备份操作|SYSBACKUP, SYSDBA|需要授权该权限以便执行备份操作。ENABLE_SYSDBA_REMOTE_LOGIN开启时，当参数ENABLE_SYSDBA_REMOTE_LOGIN处于开启状态时，持有 SYSDBA 权限的用户可通过AS SYSDBA方式完成登录，登录后该用户将升级为 SYS 用户，并获得 SYS 用户的全部权限。|F|F|T|F|
|恢复操作|SYSDBA|需要授权该权限以便执行恢复操作|F|F|T|F|
|停止数据库|SYSDBA|需要授权该权限以便执行停止数据库操作|F|F|T|F|
|重建备机|SYSDBA|需要授权该权限以便执行重建备机操作|F|F|T|F|
|物理备份集的合法性校验|SYSDBA|需要授权该权限以便执行物理备份集的合法性校验操作|F|F|T|F|
|分析表操作|ANALYZE ANY|用户默认可以分析自身schema下的表，分析其他用户（sys用户除外）下的表需要该权限，分析sys用户表需要DBA权限。|F|F|T|F|
|修改触发器|ALTER ANY TRIGGER|用户默认可以修改自身schema下的触发器，修改其他用户下的触发器需要该权限|F|F|T|F|
|创建触发器|CREATE TRIGGER|需要授权该权限以便创建属于自己的触发器|T|F|T|F|
|创建触发器|CREATE ANY TRIGGER|需要授权该权限以便创建属于其他用户的触发器|F|F|T|F|
|删除触发器|DROP ANY TRIGGER|用户默认可以删除自身schema下的触发器，删除其他用户下的触发器需要该权限|F|F|T|F|
|执行函数/存储过程/自定义高级包|EXECUTE ANY PROCEDURE|用户默认可以执行自身schema下的函数/存储过程/自定义高级包，修改其他用户下的需要该权限或者指定函数/存储过程/自定义高级包的execute对象权限。|F|F|T|F|
|修改存储过程|ALTER ANY PROCEDURE|该权限预留|F|F|T|F|
|修改物化视图|ALTER ANY MATERIALIZED VIEW|该权限预留|F|F|T|F|
|创建物化视图|CREATE ANY MATERIALIZED VIEW, CREATE MATERIALIZED VIEW|该权限预留|F|F|T|F|
|删除物化视图|DROP ANY MATERIALIZED VIEW|该权限预留|F|F|T|F|
|修改角色属性|ALTER ANY ROLE|该权限预留|F|F|T|F|
|闪回归档|FLASHBACK ARCHIVE ADMINISTER|该权限预留|F|F|T|F|
|全局查询重写|GLOBAL QUERY REWRITE|该权限预留|F|F|T|F|
|管理表空间|MANAGE TABLESPACE|该权限预留|F|F|T|F|
|物化视图创新|ON COMMIT REFRESH|该权限预留|F|F|T|F|
|无限制使用表空间|UNLIMITED TABLESPACE|该权限预留|F|F|T|F|
|创建子视图|UNDER ANY VIEW|该权限预留|F|F|T|F|
|系统操作员权限|SYSOPER|该权限预留|F|F|T|F|
|创建目录|CREATE ANY DIRECTORY|需要授权该权限以便创建目录对象|F|F|T|F|
|删除目录|DROP ANY DIRECTORY|需要授权该权限以便删除目录对象|F|F|T|F|
|创建SQL映射|CREATE ANY SQL MAP|用户默认可以创建自身schema下的SQL MAP，创建其他用户下的SQL MAP需要该权限|F|F|T|F|
|删除SQL映射|DROP ANY SQL MAP|用户默认可以删除自身schema下的SQL MAP，删除其他用户下的SQL MAP需要该权限|F|F|T|F|
|创建自定义类型|CREATE TYPE, CREATE ANY TYPE|用户创建自身schema下的自定义类型需要CREATE TYPE权限，创建其他用户下的自定义类型需要CREATE ANY TYPE权限|F|F|T|F|
|使用自定义类型|EXECUTE ANY TYPE|用户默认可以使用自身schema下的自定义类型，使用其他用户下的自定义类型需要该权限或者指定类型的EXECUTE对象权限|F|F|T|F|
|删除自定义类型|DROP ANY TYPE|用户默认可以删除自身schema下的自定义类型，删除其他用户下的自定义类型需要该权限|F|F|T|F|
|创建动态库|CREATE LIBRARY, CREATE ANY LIBRARY|用户创建自身schema下的动态库需要CREATE LIBRARY权限，创建其他用户下的动态库需要CREATE ANY LIBRARY权限|F|F|T|F|
|执行动态库|EXECUTE ANY LIBRARY|存储过程或自定义函数使用动态库的时候，需要给它们所属的用户授予该权限或者授予该动态库的EXECUTE权限|F|F|T|F|
|删除动态库|DROP ANY LIBRARY|用户默认可以删除自身schema下的动态库，删除其他用户下的触发器需要该权限|F|F|T|F|
|脱敏规则|EXEMPT REDACTION POLICY|用户不受脱敏规则的影响且可以查看原数据的前提是拥有该权限|F|F|T|F|
|调用者权限|INHERIT ANY PRIVILEGES|持有INHERIT ANY PRIVILEGES权限的用户，其名下所有对象（包括触发器、存储过程、自定义函数、自定义高级包），会被其他所有用户认定为不包含风险操作。|F|F|T|F|
|安全策略|EXEMPT ACCESS POLICY|持有EXEMPT ACCESS POLICY权限的用户可以免除安全策略的限制|F|F|T|F|
|操作事务|FORCE ANY TRANSACTION|持有FORCE ANY TRANSACTION权限的用户，可对其他用户发起的未完成事务，执行强制提交或强制回滚操作。|F|F|T|F|
|使用表空间|USE ANY TABLESPACE|持有USE ANY TABLESPACE权限的用户，在创建表、索引等数据库对象时，可将表空间指定为SYSTEM或SYSAUX表空间。|F|F|T|F|
|审计对象权限|AUDIT ANY|用户默认仅具备配置自身对象审计规则的权限。持有AUDIT ANY权限的用户，则可通过AUDIT/NOAUDIT语句，配置除SYS用户外其他用户的对象审计规则。|F|F|T|F|

**解释**

-- SYS 用户默认拥有前文所述的全部权限。

1、同义词权限规则
同义词的权限与其所指向的对象权限完全一致：
（1）将同义词权限授予用户，等同于将该同义词对应对象的权限授予该用户。
（2）反之，将某对象权限授予用户时，若该对象存在同义词，则该同义词的权限也会同步授予该用户。
（3）访问同义词时，系统会校验当前操作用户是否具备该同义词对应对象的权限。

2、角色权限继承规则
（1）角色授予：将角色授予用户 / 其他角色后，该用户 / 角色会继承该角色的全部权限（含系统权限、已授予的所有对象权限）。
（2）角色回收：从用户 / 角色处回收某角色时，该用户 / 角色通过此角色继承的权限会被撤销；若同一权限可从其他角色继承，则回收该角色后，用户 / 角色仍保留该权限。

3、对象 / 用户 / 角色删除的权限联动规则
（1）对象删除：删除表、视图、序列、存储过程时，用户 / 角色所持有的该对象权限会被同步删除。
（2）用户删除：删除用户时，其名下所有对象会被一并删除，其他用户被授予的这些对象的权限也会同步撤销。
（3）角色删除：删除角色时，该角色被授予的所有权限会被清除，且被授予该角色的用户 / 角色对应的权限也会同步回收。

4、视图创建与访问的权限要求
（1）视图创建：
基础权限：当前用户需具备 CREATE VIEW（创建自身视图）或 CREATE ANY VIEW（创建任意用户视图）系统权限；
依赖权限：视图所有者（可为当前用户或其他用户）需对视图中引用的对象拥有 SELECT 或 READ 权限。
（2）视图访问：
基础权限：用户需具备该视图的 SELECT/SELECT ANY TABLE 权限，或 READ/READ ANY TABLE 权限；
依赖权限：视图所有者需对视图中引用的对象拥有 SELECT 或 READ 权限。

5、存储过程 / 自定义函数 / 触发器的权限规则
（1）创建阶段：创建存储过程、自定义函数、触发器时，不校验对依赖对象的访问权限。
（2）执行阶段：执行存储过程、调用自定义函数，或触发器触发执行时，会校验当前用户对依赖对象的访问权限。
（3）跨用户创建触发器：若在其他用户的表上创建触发器，创建者需被授予 CREATE ANY TRIGGER 权限。

6、对象权限通用检查规则
对象所有者默认拥有该对象的全部权限，不同操作的权限要求如下：
（1）SELECT：访问自身对象无需授权；访问其他用户对象，需具备该对象的 SELECT 权限或 SELECT ANY TABLE 系统权限。
（2）UPDATE：更新自身对象无需授权；更新其他用户对象，需具备该对象的 UPDATE 权限或 UPDATE ANY TABLE 系统权限。
（3）DELETE：删除自身对象数据无需授权；删除其他用户对象数据，需具备该对象的 DELETE 权限或 DELETE ANY TABLE 系统权限。
（4）INSERT：向自身对象插入数据无需授权；向其他用户对象插入数据，需具备该对象的 INSERT 权限或 INSERT ANY TABLE 系统权限。
（5）ALTER：修改自身对象定义无需授权；修改其他用户对象，需具备该对象的 ALTER 权限或 ALTER ANY {TABLE | SEQUENCE} 系统权限。
（6）INDEX：创建索引时，需具备该对象的 INDEX 权限。
（7）EXECUTE：
执行存储过程、调用自定义函数 / 系统包函数时，需具备该对象的 EXECUTE 权限。
系统包包含：DBE_UTIL、DBE_STATS、DBE_STD、DBE_SQL、DBE_RANDOM、DBE_RAFT、DBE_AC_ROW、DBE_OUTPUT、DBE_LOB、DBE_TASK、DBE_DEBUG、DBE_MASK_DATA、DBE_RSRC_MGR、DBE_DIAGNOSE。
权限默认规则：系统管理员和 DBA 默认拥有所有高级包的 EXECUTE 权限；DBE_DEBUG、DBE_LOB、DBE_OUTPUT、DBE_RAFT、DBE_RANDOM、DBE_SQL、DBE_STD、DBE_STATS、DBE_UTIL
             默认对所有用户开放调用权限；其余高级包需为普通用户单独授予 EXECUTE 权限方可调用。
（8）READ：访问对象的权限，与 SELECT 权限功能近似；区别在于：语句含 FOR UPDATE 子句时需 SELECT 权限，无该子句时 SELECT 与 READ 权限等效。
（9）REFERENCES：创建外键约束时，需具备被引用对象的 REFERENCES 权限。
（10）INHERIT PRIVILEGES：调用自身的存储过程、触发器、自定义函数、自定义高级包无需授权；调用其他用户的上述对象，需被授予该用户的 INHERIT PRIVILEGES 权限。

-- 非 SYS 用户即便持有相关权限，也无法在 SYS 用户的 schema 中创建对象，亦不能对 SYS 用户的对象执行操作；仅当 SYS 用户单独将对应对象的权限授予非 SYS 用户后，后者才可对 SYS 对象进行操作。

CREATE ANY TABLE
CREATE ANY INDEX
CREATE ANY SEQUENCE
CREATE ANY VIEW
CREATE ANY SYNONYM
CREATE ANY PROCEDURE
DROP ANY TABLE
DROP ANY INDEX
DROP ANY SEQUENCE
DROP ANY VIEW
DROP ANY SYNONYM
LOCK ANY TABLE
DROP ANY TABLE
DROP ANY PROCEDURE
ALTER ANY TABLE
ALTER ANY INDEX
ALTER ANY SEQUENCE
UPDATE ANY TABLE
INSERT ANY TABLE
DELETE ANY TABLE
ANALYZE ANY
ALTER ANY TRIGGER
CREATE ANY TRIGGER
DROP ANY TRIGGER
EXECUTE ANY PROCEDURE
CREATE ANY DIRECTORY
DROP ANY DIRECTORY
CREATE ANY TYPE
EXECUTE ANY TYPE
DROP ANY TYPE
CREATE ANY LIBRARY
EXECUTE ANY LIBRARY
DROP ANY LIBRARY

**须知**

以下权限授予操作属于高危操作，需谨慎执行：

CREATE ANY TABLE
CREATE ANY INDEX
CREATE ANY SEQUENCE
CREATE ANY VIEW
CREATE ANY SYNONYM
CREATE ANY PROCEDURE
DROP ANY TABLE
DROP ANY INDEX
DROP ANY SEQUENCE
DROP ANY VIEW
DROP ANY SYNONYM
LOCK ANY TABLE
DROP ANY TABLE
DROP ANY PROCEDURE
ALTER ANY TABLE
ALTER ANY INDEX
ALTER ANY SEQUENCE
UPDATE ANY TABLE
INSERT ANY TABLE
DELETE ANY TABLE
ANALYZE ANY
ALTER ANY TRIGGER
CREATE ANY TRIGGER
DROP ANY TRIGGER
EXECUTE ANY PROCEDURE
CREATE ANY DIRECTORY
DROP ANY DIRECTORY
CREATE ANY TYPE
EXECUTE ANY TYPE
DROP ANY TYPE
SYSDBA
GRANT ANY PRIVILEGE
GRANT ANY ROLE
EXEMPT REDACTION POLICY
CREATE ANY LIBRARY
EXECUTE ANY LIBRARY
DROP ANY LIBRARY
EXEMPT ACCESS POLICY
SELECT ANY DICTIONARY
ALTER USER
DROP USER

#### role_name

-- 角色授权相关规则说明
（1）角色定义与授权效果：role_name（角色名）相关说明参考 ROLE 语句文档。将某角色授予用户 / 其他角色时，被授权的用户 / 角色将继承该角色包含的全部系统权限。
（2）授权限制：角色间授权禁止循环操作，例如禁止以下场景：将 roleA 授予 roleB、roleB 授予 roleC、roleC 授予 roleA。
（3）系统预置角色：系统默认包含 4 个角色：dba、resource、connect、statistics。其中 DBA 角色拥有全部系统权限，向普通用户授予该角色时需谨慎操作。

#### ALL [ PRIVILEGES ]

该关键字代表全部系统权限、对象权限，其中 PRIVILEGES 关键字可省略。

#### [schema_name.]

该参数代表目标用户名，若未显式指定，则默认取值为当前登录用户。

#### [WITH ADMIN OPTION]

-- 该选项的具体含义如下
（1）权限传递：被授权者（grantee）获得将该系统权限 / 角色再次授予其他用户或角色的权限（即实现 grant 权限的传递）；回收该权限时，不会级联撤销该被授权者此前授予其他用户的相关权限。
（2）自主撤销：被授权者（grantee）可自行删除其持有的该系统权限或角色。
（3）操作限制：该选项设置后，仅能通过 REVOKE 语句回收整个权限，无法仅撤销该选项而保留基础权限。

#### object_privilege_name

对象权限的名称。不同类型的数据库对象，其对应的权限集合存在差异。当前系统支持的对象类型包括：表、视图、序列、存储过程、函数、触发器、系统高级包、自定义类型。
各类对象所支持的操作权限详见下表。表中标识说明如下：T：代表该对象支持此项权限；F：代表该对象不支持此项权限；该权限预留：代表此项权限为该对象的预留权限。
补充说明：对象所有者、系统管理员（SYS 用户、DBA 角色）默认拥有下表中所有对象的全部权限。

**对象权限对照表**
|对象类型|SELECT|UPDATE|INSERT|DELETE|INDEX|READ|REFERENCES|ALTER|EXECUTE|WRITE|
|---|---|---|---|---|---|---|---|---|---|---|
|表|T|T|T|T|T|T|T|T|F|F|
|视图|T|该权限预留|该权限预留|该权限预留|F|T|该权限预留|F|F|F|
|序列|T|F|F|F|F|F|F|T|F|F|
|存储过程|F|F|F|F|F|F|F|F|T|F|
|触发器|F|F|F|F|F|F|F|F|F|F|
|函数|F|F|F|F|F|F|F|F|T|F|
|系统高级包|F|F|F|F|F|F|F|F|T|F|
|自定义高级包|F|F|F|F|F|F|F|F|T|F|
|目录|F|F|F|F|F|T|F|F|该权限预留|该权限预留|
|自定义类型|F|F|F|F|F|F|F|F|T|F|
|动态库|F|F|F|F|F|F|F|F|T|F|

-- 使用 GRANT ALL PRIVILEGES 语句为用户授予某对象权限时，系统会依据该对象的类型，确定需要授予 / 回收的权限集合。

-- 若将对象权限授予 PUBLIC，则系统内所有用户（包括授权操作后新增的用户）都会获得该对象的对应权限，此操作需谨慎执行。可通过以下 SQL 语句查询数据库安装后 PUBLIC 用户的默认权限：
   select * from ADM_TAB_PRIVS where GRANTEE='PUBLIC';

#### object_type

对象类型名称。若未显式指定该参数，系统将按照表→视图→序列→高级包→存储过程→函数的优先级顺序查找对应对象。

#### grantee

-- 基础规则
   grantee 指权限的被授予方，可指定为用户或角色；单次操作最多可指定 63 个用户 / 角色，且数量不可超出该上限。若将 grantee 指定为 PUBLIC，
   则表示将权限授予系统内所有用户（含授权操作后新增的用户），此操作需谨慎执行。

#### WITH GRANT OPTION

-- 被授权用户获得权限传递能力，可将该权限再次授予其他用户或角色

-- 权限回收时将触发级联效应，即回收该用户权限的同时，会同步撤销其通过此选项授予其他主体的权限

-- 该选项一旦配置，仅可通过 REVOKE 语句整体回收对应权限，无法单独取消该选项而保留基础权限

#### INHERIT PRIVILEGES

调用者权限规则

-- 权限核心作用
   若用户 A 将INHERIT PRIVILEGES权限授予用户 B，则用户 A 默认信任用户 B 名下的对象（触发器、存储过程、自定义函数、自定义高级包）无风险操作，且用户 A 可在自身权限范围内调用用户 B 的上述全部对象。

-- 参数说明
   user_name：指代调用者的用户名。
   grantee：指代授权对象，可指定单个或多个用户（最多不超过 63 个）。若将grantee指定为PUBLIC，则表示该用户信任系统内所有其他用户的触发器、存储过程、自定义函数、自定义高级包无风险操作，此操作需谨慎执行。

-- 补充说明
   当参数AUTO_INHERIT_USER = ON时，系统默认会将新创建用户的INHERIT PRIVILEGES权限授予PUBLIC用户。
   SYS 用户默认拥有INHERIT ANY PRIVILEGES权限，即所有其他用户均信任 SYS 用户名下的触发器、存储过程、自定义函数、自定义高级包无风险操作。

## 样例

-- 创建用户songjiang，并将CREATE SESSION权限授权给用户songjiang

-- 删除用户songjiang

DROP USER songjiang CASCADE;

-- 创建用户songjiang，密码是"ghQMO789"

CREATE USER songjiang IDENTIFIED BY "ghQMO789";

-- 将CREATE SESSION权限授权给用户songjiang

GRANT CREATE SESSION TO songjiang;


-- 创建用户wusong、用户wukong和角色bajie，并将角色bajie授权给用户wusong和用户wukong

-- 删除角色bajie

DROP ROLE bajie;

-- 创建角色bajie

CREATE ROLE bajie;

-- 将权限CREATE SESSION、CREATE USER、CREATE ROLE、CREATE TABLE授予角色bajie

GRANT CREATE SESSION, CREATE USER, CREATE ROLE, CREATE TABLE TO bajie;

-- 删除用户wusong

DROP USER wusong CASCADE;

--创建用户wusong，密码是"GHPihb570"

CREATE USER wusong IDENTIFIED BY "GHPihb570";

-- 删除用户wukong

DROP USER wukong CASCADE;

-- 创建用户wukong，密码是"XBYgh450"

CREATE USER wukong IDENTIFIED BY "XBYgh450";

-- 将角色bajie授予用户wusong和用户wukong

GRANT bajie TO wusong, wukong;

-- 创建表officer，创建用户tangseng，并赋予用户tangseng对此表的插入权限

--删除表officer

DROP TABLE IF EXISTS officer;

--创建表officer

CREATE TABLE officer
(office_id NUMBER(8),
first_name VARCHAR2(20),
last_name VARCHAR2(25) CONSTRAINT off_last_name_nn NOT NULL,
email VARCHAR2(25) CONSTRAINT off_email_nn NOT NULL,
monile_no VARCHAR2(20),
hire_date DATE DEFAULT SYSDATE CONSTRAINT off_hire_date_nn NOT NULL,
job_id VARCHAR2(10) CONSTRAINT off_job_nn NOT NULL,
salary NUMBER(10,2) CONSTRAINT off_salary_nn NOT NULL,
pct NUMBER(4,2),
manager_id NUMBER(8),
dept_id NUMBER(6),
dn VARCHAR2(300),
CONSTRAINT off_email_uk UNIQUE (email)
) ;

-- 删除用户tangseng

DROP USER tangseng CASCADE;

-- 创建用户tangseng，密码是"minBY78fg"

CREATE USER tangseng IDENTIFIED BY "minBY78fg";

-- 赋予用户tangseng对表officer的插入权限

GRANT INSERT ON officer TO tangseng;