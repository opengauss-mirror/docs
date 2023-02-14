# CREATE AUDIT POLICY

## 功能描述<a name="section1163224811518"></a>

创建统一审计策略。

## 注意事项<a name="zh-cn_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

只有poladmin、sysadmin或初始用户能进行此操作。

需要开启安全策略开关，即设置GUC参数enable\_security\_policy=on，审计策略才可以生效。

## 语法格式<a name="zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE AUDIT POLICY [ IF NOT EXISTS ] policy_name { { privilege_audit_clause | access_audit_clause } [ filter_group_clause ] [ ENABLE | DISABLE ] };
```

-   privilege\_audit\_clause：

    ```
    PRIVILEGES { DDL | ALL } [ ON LABEL ( resource_label_name [, ... ] ) ]
    ```

-   access\_audit\_clause：

    ```
    ACCESS { DML | ALL } [ ON LABEL ( resource_label_name [, ... ] ) ]
    ```


-   filter\_group\_clause：

    ```
    FILTER ON { ( FILTER_TYPE ( filter_value [, ... ] ) ) [, ... ] }
    ```


## 参数说明<a name="section2852173114389"></a>

-   **policy\_name**

    审计策略名称，需要唯一，不可重复；

    取值范围：字符串，要符合标识符的命名规范。

-   **DDL**

    指的是针对数据库执行如下操作时进行审计，目前支持：CREATE、ALTER、DROP、ANALYZE、COMMENT、GRANT、REVOKE、SET、SHOW、LOGIN\_ANY、LOGIN\_FAILURE、LOGIN\_SUCCESS、LOGOUT。

-   **ALL**

    指的是上述DDL支持的所有对数据库的操作。

-   **resource\_label\_name**

    资源标签名称。

-   **DML**

    指的是针对数据库执行如下操作时进行审计，目前支持：SELECT、COPY、DEALLOCATE、DELETE、EXECUTE、INSERT、PREPARE、REINDEX、TRUNCATE、UPDATE。


-   **FILTER\_TYPE**

    描述策略过滤的条件类型，包括IP | APP | ROLES。

-   **filter\_value**

    指具体过滤信息内容。


-   **ENABLE|DISABLE**

    可以打开或关闭统一审计策略。若不指定ENABLE|DISABLE，语句默认为ENABLE。


## 示例<a name="section7854941155112"></a>

```
--创建dev_audit和bob_audit用户。
openGauss=# CREATE USER dev_audit PASSWORD 'dev@1234';
CREATE USER bob_audit password 'bob@1234';

--创建一个表tb_for_audit
openGauss=# CREATE TABLE tb_for_audit(col1 text, col2 text, col3 text);

--创建资源标签
openGauss=# CREATE RESOURCE LABEL adt_lb0 add TABLE(tb_for_audit);

--对数据库执行create操作创建审计策略
openGauss=# CREATE AUDIT POLICY adt1 PRIVILEGES CREATE;

--对数据库执行select操作创建审计策略
openGauss=# CREATE AUDIT POLICY adt2 ACCESS SELECT;

--仅审计记录用户dev_audit和bob_audit在执行针对adt_lb0资源进行的create操作数据库创建审计策略
openGauss=# CREATE AUDIT POLICY adt3 PRIVILEGES CREATE ON LABEL(adt_lb0) FILTER ON ROLES(dev_audit, bob_audit);

--仅审计记录用户dev_audit和bob_audit,客户端工具为psql和gsql，IP地址为'10.20.30.40', '127.0.0.0/24'，在执行针对adt_lb0资源进行的select、insert、delete操作数据库创建审计策略。
openGauss=# CREATE AUDIT POLICY adt4 ACCESS SELECT ON LABEL(adt_lb0), INSERT ON LABEL(adt_lb0), DELETE FILTER ON ROLES(dev_audit, bob_audit), APP(psql, gsql), IP('10.20.30.40', '127.0.0.0/24');
```

## 相关链接<a name="zh-cn_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER AUDIT POLICY](ALTER-AUDIT-POLICY.md) [DROP AUDIT POLICY](DROP-AUDIT-POLICY.md)。
