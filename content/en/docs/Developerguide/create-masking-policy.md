# CREATE MASKING POLICY<a name="EN-US_TOPIC_0306525303"></a>

## Function<a name="section1163224811518"></a>

**CREATE MASKING POLICY**  creates an anonymization policy.

## Precautions<a name="en-us_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

Only user  **poladmin**, user  **sysadmin**, or the initial user can perform this operation.

The masking policy takes effect only after the security policy is enabled, that is,  **enable\_security\_policy**  is set to  **on**.

## Syntax<a name="en-us_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE MASKING POLICY policy_name masking_clause[, ...]* policy_filter [ENABLE | DISABLE];
```

-   masking\_clause

    ```
    masking_function ON LABEL(label_name[, ...]*)
    ```

-   masking\_function

    ```
    maskall | randommasking | creditcardmasking | basicemailmasking | fullemailmasking | shufflemasking | alldigitsmasking 
    ```


-   policy\_filter:

    ```
    FILTER ON FILTER_TYPE(filter_value [,...]*)[,...]*
    ```


-   FILTER\_TYPE:

    ```
    IP | APP | ROLES
    ```


## Parameter Description<a name="section2852173114389"></a>

-   **policy\_name**

    Specifies the audit policy name, which must be unique.

    Value range: a string. It must comply with the naming convention.

-   **label\_name**

    Specifies the resource label name.

-   **masking\_clause**

    Specifies the masking function used to anonymize database resources labeled by  **label\_name**.

-   **policy\_filter**

    Specifies the users for which the anonymization policy takes effect. If this parameter is left empty, the anonymization policy takes effect for all users.


-   **FILTER\_TYPE**

    Specifies the types of information to be filtered by the policy, including  **IP**,  **APP**, and  **ROLES**.

-   **filter\_value**

    Indicates the detailed information to be filtered, such as the IP address, app name, and username.


-   **ENABLE|DISABLE**

    Enables or disables the masking policy. If  **ENABLE|DISABLE**  is not specified,  **ENABLE**  is used by default.


## Examples<a name="section7854941155112"></a>

```
-- Create users dev_mask and bob_mask.
postgres=# CREATE USER dev_mask PASSWORD 'dev@1234';
postgres=# CREATE USER bob_mask PASSWORD 'bob@1234';

-- Create table tb_for_masking.
postgres=# CREATE TABLE tb_for_masking(col1 text, col2 text, col3 text);

-- Create a resource label for label sensitive column col1.
postgres=# CREATE RESOURCE LABEL mask_lb1 ADD COLUMN(tb_for_masking.col1);

-- Create a resource label for label sensitive column col2.
postgres=# CREATE RESOURCE LABEL mask_lb2 ADD COLUMN(tb_for_masking.col2);

-- Create an anonymization policy for the operation of accessing sensitive column col1.
postgres=# CREATE MASKING POLICY maskpol1 maskall ON LABEL(mask_lb1);

-- Create an anonymization policy that takes effect only for scenarios where users are dev_mask and bob_mask, client tools are psql and gsql, and IP addresses are 10.20.30.40, and 127.0.0.0/24.
postgres=# CREATE MASKING POLICY maskpol2 randommasking ON LABEL(mask_lb2) FILTER ON ROLES(dev_mask, bob_mask), APP(psql, gsql), IP('10.20.30.40', '127.0.0.0/24');
```

## Helpful Links<a name="en-us_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER MASKING POLICY](alter-masking-policy.md)  and  [DROP MASKING POLICY](drop-masking-policy.md)

