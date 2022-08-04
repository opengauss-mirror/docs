# CREATE MASKING POLICY<a name="EN-US_TOPIC_0306525303"></a>

## Function<a name="section1163224811518"></a>

**CREATE MASKING POLICY**  creates a masking policy.

## Precautions<a name="en-us_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

Only users with the  **poladmin**  or  **sysadmin**  permission, or the initial user can perform this operation.

The masking policy takes effect only after the security policy is enabled, that is,  **enable\_security\_policy**  is set to  **on**.

For details about the execution effect and supported data types of preset masking functions, see "Database Security \> Dynamic Data Masking" in  _Feature Description_.

## Syntax<a name="en-us_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE MASKING POLICY policy_name masking_clause[, ...]* policy_filter [ENABLE | DISABLE];
```

-   masking\_clause

    ```
    masking_function ON LABEL(label_name[, ...]*)
    ```

-   masking\_function

    **maskall**  is not a preset function. It is hard-coded and cannot be displayed by running  **\\df**.

    The masking methods during presetting are as follows:

    ```
    maskall | randommasking | creditcardmasking | basicemailmasking | fullemailmasking | shufflemasking | alldigitsmasking | regexpmasking
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

    Specifies the masking function to be used to anonymize database resources labeled by  **label\_name**.  **schema.function**  can be used to specify the masking function.

-   **policy\_filter**

    Specifies the users for which the masking policy takes effect. If this parameter is left empty, the masking policy takes effect for all users.


-   **FILTER\_TYPE**

    Specifies the types of information to be filtered by the policy, including  **IP**,  **APP**, and  **ROLES**.

-   **filter\_value**

    Indicates the detailed information to be filtered, such as the IP address, app name, and username.


-   **ENABLE|DISABLE**

    Enables or disables the masking policy. If  **ENABLE|DISABLE**  is not specified,  **ENABLE**  is used by default.


## Examples<a name="section7854941155112"></a>

```
-- Create users dev_mask and bob_mask.
openGauss=# CREATE USER dev_mask PASSWORD 'dev@1234';
openGauss=# CREATE USER bob_mask PASSWORD 'bob@1234';

-- Create table tb_for_masking.
openGauss=# CREATE TABLE tb_for_masking(col1 text, col2 text, col3 text);

-- Create a resource label for label sensitive column col1.
openGauss=# CREATE RESOURCE LABEL mask_lb1 ADD COLUMN(tb_for_masking.col1);

-- Create a resource label for label sensitive column col2.
openGauss=# CREATE RESOURCE LABEL mask_lb2 ADD COLUMN(tb_for_masking.col2);

-- Create a masking policy for the operation of accessing sensitive column col1.
openGauss=# CREATE MASKING POLICY maskpol1 maskall ON LABEL(mask_lb1);

-- Create a masking policy that takes effect only for scenarios where users are dev_mask and bob_mask, client tools are psql and gsql, and IP addresses are 10.20.30.40, and 127.0.0.0/24.
openGauss=# CREATE MASKING POLICY maskpol2 randommasking ON LABEL(mask_lb2) FILTER ON ROLES(dev_mask, bob_mask), APP(psql, gsql), IP('10.20.30.40', '127.0.0.0/24');
```

## Helpful Links<a name="en-us_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER MASKING POLICY](alter-masking-policy.md)  and  [DROP MASKING POLICY](drop-masking-policy.md)

