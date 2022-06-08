# DROP USER<a name="EN-US_TOPIC_0289900387"></a>

## Function<a name="en-us_topic_0283137192_en-us_topic_0237122158_en-us_topic_0059778403_sd8f7b55734434619b381d7be49aed2df"></a>

**DROP USER**  deletes a user and the schema with the same name as the user.

## Precautions<a name="en-us_topic_0283137192_en-us_topic_0237122158_en-us_topic_0059778403_sa729a691cce1445b9a6f9427a2e19229"></a>

-   **CASCADE**  is used to delete the objects \(excluding databases\) that depend on the user.  **CASCADE**  cannot delete locked objects unless the objects are unlocked or the processes locking the objects are killed.
-   In openGauss, the  **enable\_kill\_query**  configuration parameter exists in the  **postgresql.conf**  file. This parameter affects  **CASCADE**.
    -   If  **enable\_kill\_query**  is  **on**  and  **CASCADE**  is used, the statement automatically kills the processes locking dependent objects and then deletes the specified user.
    -   If  **enable\_kill\_query**  is  **off**  and  **CASCADE**  is used, the statement waits until the processes locking dependent objects stop and then deletes the specified user.

-   If the dependent objects are other databases or reside in other databases, manually delete them before deleting the user from the current database.  **DROP USER**  cannot delete objects across databases.
-   If a data source depends on the user, the user cannot be deleted directly. You need to manually delete the data source first.

## Syntax<a name="en-us_topic_0283137192_en-us_topic_0237122158_en-us_topic_0059778403_s5d2a1a9a8c0848c5b671e837e381ef36"></a>

```
DROP USER [ IF EXISTS ] user_name [, ...] [ CASCADE | RESTRICT ];
```

## Parameter Description<a name="en-us_topic_0283137192_en-us_topic_0237122158_en-us_topic_0059778403_sc2135a1c06504d25b767b85bdea5c694"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified user does not exist.

-   **user\_name**

    Specifies the name of the user to be deleted.

    Value range: an existing username

-   **CASCADE | RESTRICT**
    -   **CASCADE**: automatically deletes the objects that depend on the user.
    -   **RESTRICT**: refuses to delete the user if any objects depend on it. This is the default action.

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >In openGauss, the  **enable\_kill\_query**  configuration parameter exists in the  **postgresql.conf**  file. This parameter affects  **CASCADE**.
        >-   If  **enable\_kill\_query**  is  **on**  and  **CASCADE**  is used, the statement automatically kills the processes locking dependent objects and then deletes the specified user.
        >-   If  **enable\_kill\_query**  is  **off**  and  **CASCADE**  is used, the statement waits until the processes locking dependent objects stop and then deletes the specified user.



## Examples<a name="en-us_topic_0283137192_en-us_topic_0237122158_en-us_topic_0059778403_sd583a49fc83b42fd8e73efee55f98ace"></a>

See  [Examples](create-user.md#en-us_topic_0283136891_en-us_topic_0237122125_en-us_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa)  in  **CREATE USER**.

## Helpful Links<a name="en-us_topic_0283137192_en-us_topic_0237122158_en-us_topic_0059778403_s428358f9df2f458a8d50d103683f7ee0"></a>

[ALTER USER](alter-user.md)  and  [CREATE USER](create-user.md)

