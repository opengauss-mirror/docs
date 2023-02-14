# ALTER AUDIT POLICY

## 功能描述<a name="zh-cn_topic_0059778839_s878bf4f1569c4d2f87e056f26372448e"></a>

修改统一审计策略。

## 注意事项<a name="zh-cn_topic_0059778839_s63ad21f92ad74c9e8d6bf18bb7218c4f"></a>

-   只有poladmin、sysadmin或初始用户用户才能进行此操作。
-   需要打开enable\_security\_policy开关统一审计策略才可以生效。

## 语法格式<a name="zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
ALTER AUDIT POLICY [ IF EXISTS ] policy_name { ADD | REMOVE } { [ privilege_audit_clause ] [ access_audit_clause ] };
ALTER AUDIT POLICY [ IF EXISTS ] policy_name MODIFY ( filter_group_clause );
ALTER AUDIT POLICY [ IF EXISTS ] policy_name DROP FILTER;
ALTER AUDIT POLICY [ IF EXISTS ] policy_name COMMENTS policy_comments;
ALTER AUDIT POLICY [ IF EXISTS ] policy_name { ENABLE | DISABLE };
```

-   privilege\_audit\_clause：

    ```
    PRIVILEGES { DDL | ALL }
    ```

-   access\_audit\_clause：

    ```
    ACCESS { DML | ALL }
    ```


-   filter\_group\_clause：

    ```
    FILTER ON { ( FILTER_TYPE ( filter_value [, ... ] ) ) [, ... ] }
    ```


## 参数说明<a name="section2852173114389"></a>

-   **policy\_name**

    审计策略名称，需要唯一，不可重复。

    取值范围：字符串，要符合标识符的命名规范。

-   **DDL**

    指的是针对数据库执行如下操作时进行审计，目前支持：CREATE、ALTER、DROP、ANALYZE、COMMENT、GRANT、REVOKE、SET、SHOW、LOGIN\_ANY、LOGIN\_FAILURE、LOGIN\_SUCCESS、LOGOUT。

-   **ALL**

    指的是上述DDL支持的所有对数据库的操作。

-   **DML**

    指的是针对数据库执行如下操作时进行审计，目前支持：SELECT、COPY、DEALLOCATE、DELETE、EXECUTE、INSERT、PREPARE、REINDEX、TRUNCATE、UPDATE。


-   **FILTER\_TYPE**

    指定审计策略的过滤信息，过滤类型包括：IP、ROLES、APP。

-   **filter\_value**

    指具体过滤信息内容。


-   **policy\_comments**

    用于记录策略相关的描述信息。

-   **ENABLE|DISABLE**

    可以打开或关闭统一审计策略。若不指定ENABLE|DISABLE，语句默认为ENABLE。


## 示例<a name="section873151912198"></a>

请参考CREATE AUDIT POLICY的[示例](CREATE-AUDIT-POLICY.md#section7854941155112)。

## 相关链接<a name="section156744489391"></a>

[CREATE AUDIT POLICY](CREATE-AUDIT-POLICY.md)，[DROP AUDIT POLICY](DROP-AUDIT-POLICY.md)。
