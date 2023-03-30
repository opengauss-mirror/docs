# ALTER AUDIT POLICY<a name="EN-US_TOPIC_0306525299"></a>

## Function<a name="en-us_topic_0059778839_s878bf4f1569c4d2f87e056f26372448e"></a>

**ALTER AUDIT POLICY**  modifies the unified audit policy.

## Precautions<a name="en-us_topic_0059778839_s63ad21f92ad74c9e8d6bf18bb7218c4f"></a>

-   Only users with the  **poladmin**  or  **sysadmin**  permission, or the initial user can perform this operation.
-   The unified audit policy takes effect only after  **enable\_security\_policy**  is set to  **on**.

## Syntax<a name="en-us_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
ALTER AUDIT POLICY [ IF EXISTS ] policy_name { ADD | REMOVE } { [ privilege_audit_clause ] [ access_audit_clause ] };
ALTER AUDIT POLICY [ IF EXISTS ] policy_name MODIFY ( filter_group_clause );
ALTER AUDIT POLICY [ IF EXISTS ] policy_name DROP FILTER; 
ALTER AUDIT POLICY [ IF EXISTS ] policy_name COMMENTS policy_comments;
ALTER AUDIT POLICY [ IF EXISTS ] policy_name { ENABLE | DISABLE };
```

-   privilege\_audit\_clause

    ```
    PRIVILEGES { DDL | ALL }
    ```

-   access\_audit\_clause

    ```
    ACCESS { DML | ALL }
    ```


-   filter\_group\_clause

    ```
    FILTER ON { ( FILTER_TYPE ( filter_value [, ... ] ) ) [, ... ] }
    ```


## Parameter Description<a name="section2852173114389"></a>

-   **policy\_name**

    Specifies the audit policy name, which must be unique.

    Value range: a string. It must comply with the identifier naming convention.

-   **DDL**

    Specifies the operations that are audited in the database:  **CREATE**,  **ALTER**,  **DROP**,  **ANALYZE**,  **COMMENT**,  **GRANT**,  **REVOKE**,  **SET**,  **SHOW**,  **LOGIN\_ANY**,  **LOGIN\_FAILURE**,  **LOGIN\_SUCCESS**, and  **LOGOUT**.

-   **ALL**

    Specifies all operations supported by the specified DDL statements in the database.

-   **DML**

    Specifies the operations that are audited in the database:  **SELECT**,  **COPY**,  **DEALLOCATE**,  **DELETE**,  **EXECUTE**,  **INSERT**,  **PREPARE**,  **REINDEX**,  **TRUNCATE**, and  **UPDATE**.


-   **FILTER\_TYPE**

    Specifies the types of information to be filtered by the policy:  **IP**,  **ROLES**, and  **APP**.

-   **filter\_value**

    Specifies the detailed information to be filtered.


-   **policy\_comments**

    Records description information of the audit policy.

-   **ENABLE|DISABLE**

    Enables or disables the unified audit policy. If  **ENABLE|DISABLE**  is not specified,  **ENABLE**  is used by default.


## Examples<a name="section873151912198"></a>

See  [Examples](create-audit-policy.md#section7854941155112)  in  **CREATE AUDIT POLICY**.

## Helpful Links<a name="section156744489391"></a>

[CREATE AUDIT POLICY](create-audit-policy.md)  and  [DROP AUDIT POLICY](drop-audit-policy.md)

