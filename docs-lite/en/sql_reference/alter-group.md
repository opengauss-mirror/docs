# ALTER GROUP<a name="EN-US_TOPIC_0289900959"></a>

## Function<a name="en-us_topic_0283136839_en-us_topic_0237122062_en-us_topic_0059777426_s9257704722b6426cbb9a62c26d7941f8"></a>

**ALTER GROUP**  modifies the attributes of a user group.

## Precautions<a name="en-us_topic_0283136839_en-us_topic_0237122062_en-us_topic_0059777426_s3f6c5899f7ab4b4a936ef9a3ecfc3227"></a>

**ALTER GROUP**  is an alias for  **ALTER ROLE**, and it is not a standard SQL syntax and not recommended. Users can use  **ALTER ROLE**  directly.

## Syntax<a name="en-us_topic_0283136839_en-us_topic_0237122062_en-us_topic_0059777426_s0798d93d042a4c96ab266f7eb45fc5d5"></a>

-   Add users to a group.

    ```
    ALTER GROUP group_name 
        ADD USER user_name [, ... ];
    ```


-   Remove users from a group.

    ```
    ALTER GROUP group_name 
        DROP USER user_name [, ... ];
    ```

-   Change the name of the group.

    ```
    ALTER GROUP group_name 
        RENAME TO new_name;
    ```


## Parameter Description<a name="en-us_topic_0283136839_en-us_topic_0237122062_en-us_topic_0059777426_sf7fbcb97d29b45e38bb6d6a65cc96f46"></a>

See  [Parameter Description](alter-role.md#en-us_topic_0283137195_en-us_topic_0237122068_en-us_topic_0059778744_s50961af6143d4aafaf8fa02febbbf331)  in  **ALTER ROLE**.

## Examples<a name="en-us_topic_0283136839_en-us_topic_0237122062_en-us_topic_0059778614_sfe220a2da49d4ca5928fe714ca12e949"></a>

```
-- Add users to a group.
openGauss=# ALTER GROUP super_users ADD USER lche, jim;

-- Remove users from a group.
openGauss=# ALTER GROUP super_users DROP USER jim;

-- Change the name of the group.
openGauss=# ALTER GROUP super_users RENAME TO normal_users;
```

## Helpful Links<a name="en-us_topic_0283136839_en-us_topic_0237122062_en-us_topic_0059777426_s72bcc1ca592a4b47bfaf7849e51e7e30"></a>

[ALTER GROUP](alter-group.md),  [DROP GROUP](drop-group.md), and  [ALTER ROLE](alter-role.md)

