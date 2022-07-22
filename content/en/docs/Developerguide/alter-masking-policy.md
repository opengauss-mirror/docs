# ALTER MASKING POLICY<a name="EN-US_TOPIC_0306525300"></a>

## Function<a name="en-us_topic_0059778839_s878bf4f1569c4d2f87e056f26372448e"></a>

**ALTER MASKING POLICY**  modifies masking policies.

## Precautions<a name="en-us_topic_0059778839_s63ad21f92ad74c9e8d6bf18bb7218c4f"></a>

-   Only users with the  **poladmin**  or  **sysadmin**  permission, or the initial user can perform this operation.
-   The masking policy takes effect only after  **enable\_security\_policy**  is set to  **on**.
-   For details about the execution effect and supported data types of preset masking functions, see "Database Security \> Dynamic Data Masking" in  _Feature Description_.

## Syntax<a name="en-us_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

-   Modify the policy description.

    ```
    ALTER MASKING POLICY policy_name COMMENTS policy_comments;
    ```


-   Modify the masking method.

    ```
    ALTER MASKING POLICY policy_name [ADD | REMOVE | MODIFY] masking_actions[, ...]*;
    The syntax of masking_action.
        masking_function ON LABEL(label_name[, ...]*)
    ```


-   Modify the scenarios where the masking policies take effect.

    ```
    ALTER MASKING POLICY policy_name MODIFY(FILTER ON FILTER_TYPE(filter_value[, ...]*)[, ...]*);
    ```


-   Removes the filters of the masking policies.

    ```
    ALTER MASKING POLICY policy_name DROP FILTER;
    ```


-   Enable or disable the masking policies.

    ```
    ALTER MASKING POLICY policy_name [ENABLE | DISABLE];
    ```


## Parameter Description<a name="section2852173114389"></a>

-   **policy\_name**

    Specifies the masking policy name, which must be unique.

    Value range: a string. It must comply with the naming convention.

-   **policy\_comments**

    Adds or modifies description of masking policies.

-   **masking\_function**

    Specifies eight preset masking methods or user-defined functions. Schemas are supported.

    **maskall**  is not a preset function. It is hard-coded and cannot be displayed by running  **\\df**.

    The masking methods during presetting are as follows:

    ```
    maskall | randommasking | creditcardmasking | basicemailmasking | fullemailmasking | shufflemasking | alldigitsmasking | regexpmasking 
    ```

-   **label\_name**

    Specifies the resource label name.


-   **FILTER\_TYPE**

    Specifies the types of information to be filtered by the policies:  **IP**,  **ROLES**, and  **APP**.

-   **filter\_value**

    Indicates the detailed information to be filtered, such as the IP address, app name, and username.


-   **ENABLE|DISABLE**

    Enables or disables the masking policy. If  **ENABLE|DISABLE**  is not specified,  **ENABLE**  is used by default.


## Examples<a name="section873151912198"></a>

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

-- Add description for masking policy maskpol1.
openGauss=# ALTER MASKING POLICY maskpol1 COMMENTS 'masking policy for tb_for_masking.col1';

-- Modify masking policy maskpol1 to add a masking method.
openGauss=# ALTER MASKING POLICY maskpol1 ADD randommasking ON LABEL(mask_lb2);

-- Modify masking policy maskpol1 to remove a masking method.
openGauss=# ALTER MASKING POLICY maskpol1 REMOVE randommasking ON LABEL(mask_lb2);

-- Modify masking policy maskpol1 to modify a masking method.
openGauss=# ALTER MASKING POLICY maskpol1 MODIFY randommasking ON LABEL(mask_lb1);

-- Modify masking policy maskpol1 so that it takes effect only for scenarios where users are dev_mask and bob_mask, client tools are psql and gsql, and the IP addresses are 10.20.30.40 and 127.0.0.0/24.
openGauss=# ALTER MASKING POLICY maskpol1 MODIFY (FILTER ON ROLES(dev_mask, bob_mask), APP(psql, gsql), IP('10.20.30.40', '127.0.0.0/24'));

-- Modify masking policy maskpol1 so that it takes effect for all user scenarios.
openGauss=# ALTER MASKING POLICY maskpol1 DROP FILTER;

-- Disable masking policy maskpol1.
openGauss=# ALTER MASKING POLICY maskpol1 DISABLE;
```

## Helpful Links<a name="section156744489391"></a>

[CREATE MASKING POLICY](create-masking-policy.md)  and  [DROP MASKING POLICY](drop-masking-policy.md)

