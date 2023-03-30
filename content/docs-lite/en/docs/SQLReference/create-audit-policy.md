# CREATE AUDIT POLICY<a name="EN-US_TOPIC_0306525302"></a>

## Function<a name="section1163224811518"></a>

**CREATE AUDIT POLICY**  creates a unified audit policy.

## Precautions<a name="en-us_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

Only users with the  **poladmin**  or  **sysadmin**  permission, or the initial user can perform this operation.

The masking policy takes effect only after the security policy is enabled, that is,  **enable\_security\_policy**  is set to  **on**.

## Syntax<a name="en-us_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE AUDIT POLICY [ IF NOT EXISTS ] policy_name { { privilege_audit_clause | access_audit_clause } [ filter_group_clause ] [ ENABLE | DISABLE ] };
```

-   privilege\_audit\_clause

    ```
    PRIVILEGES { DDL | ALL } [ ON LABEL ( resource_label_name [, ... ] ) ]
    ```

-   access\_audit\_clause

    ```
    ACCESS { DML | ALL } [ ON LABEL ( resource_label_name [, ... ] ) ]
    ```


-   filter\_group\_clause

    ```
    FILTER ON { ( FILTER_TYPE ( filter_value [, ... ] ) ) [, ... ] }
    ```


## Parameter Description<a name="section2852173114389"></a>

-   **policy\_name**

    Specifies the audit policy name, which must be unique.

    Value range: a string. It must comply with the naming convention.

-   **DDL**

    Specifies the operations that are audited within the database:  **CREATE**,  **ALTER**,  **DROP**,  **ANALYZE**,  **COMMENT**,  **GRANT**,  **REVOKE**,  **SET**,  **SHOW**,  **LOGIN\_ANY**,  **LOGIN\_FAILURE**,  **LOGIN\_SUCCESS**, and  **LOGOUT**.

-   **ALL**

    Indicates all operations supported by the specified DDL statements in the database.

-   **resource\_label\_name**

    Specifies the resource label name.

-   **DML**

    Specifies the operations that are audited within the database:  **SELECT**,  **COPY**,  **DEALLOCATE**,  **DELETE**,  **EXECUTE**,  **INSERT**,  **PREPARE**,  **REINDEX**,  **TRUNCATE**, and  **UPDATE**.


-   **FILTER\_TYPE**

    Specifies the types of information to be filtered by the audit, including  **IP**,  **APP**, and  **ROLES**.

-   **filter\_value**

    Indicates the detailed information to be filtered.


-   **ENABLE|DISABLE**

    Enables or disables the unified audit policy. If  **ENABLE|DISABLE**  is not specified,  **ENABLE**  is used by default.


## Examples<a name="section7854941155112"></a>

```
-- Create users dev_audit and bob_audit.
openGauss=# CREATE USER dev_audit PASSWORD 'dev@1234';
CREATE USER bob_audit password 'bob@1234';

-- Create table tb_for_audit.
openGauss=# CREATE TABLE tb_for_audit(col1 text, col2 text, col3 text);

-- Create a resource label.
openGauss=# CREATE RESOURCE LABEL adt_lb0 add TABLE(tb_for_audit);

-- Perform the CREATE operation on the database to create an audit policy.
openGauss=# CREATE AUDIT POLICY adt1 PRIVILEGES CREATE;

-- Perform the SELECT operation on the database to create an audit policy.
openGauss=# CREATE AUDIT POLICY adt2 ACCESS SELECT;

-- Create an audit policy to audit only the CREATE operations performed on the adt_lb0 resource by users dev_audit and bob_audit.
openGauss=# CREATE AUDIT POLICY adt3 PRIVILEGES CREATE ON LABEL(adt_lb0) FILTER ON ROLES(dev_audit, bob_audit);

-- Create an audit policy to audit only the SELECT, INSERT, and DELETE operations performed on the adt_lb0 resource by users dev_audit and bob_audit using client tools psql and gsql on the servers whose IP addresses are 10.20.30.40 and 127.0.0.0/24.
openGauss=# CREATE AUDIT POLICY adt4 ACCESS SELECT ON LABEL(adt_lb0), INSERT ON LABEL(adt_lb0), DELETE FILTER ON ROLES(dev_audit, bob_audit), APP(psql, gsql), IP('10.20.30.40', '127.0.0.0/24');
```

## Helpful Links<a name="en-us_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER AUDIT POLICY](alter-audit-policy.md)  and  [DROP AUDIT POLICY](drop-audit-policy.md)

