# DROP OWNED<a name="EN-US_TOPIC_0289900859"></a>

## Function<a name="en-us_topic_0283136635_en-us_topic_0237122143_en-us_topic_0059777620_sa3265773225d4612b9bafd61c332eae0"></a>

**DROP OWNED**  deletes the database objects owned by a database role.

## Precautions<a name="en-us_topic_0283136635_en-us_topic_0237122143_en-us_topic_0059777620_s59f5b59d381a4bfcb473a04864354fe1"></a>

-   This interface will revoke the role's permissions on all objects in the current database and shared objects \(databases and tablespaces\).
-   **DROP OWNED**  is often used to prepare for removing one or more roles. Because  **DROP OWNED**  affects only the objects in the current database, you need to run this statement in each database that contains the objects owned by the role to be removed.
-   Using the  **CASCADE**  option may cause this statement to recursively remove objects owned by other users.
-   The databases and tablespaces owned by the role will not be removed.

## Syntax<a name="en-us_topic_0283136635_en-us_topic_0237122143_en-us_topic_0059777620_s012e6785112742ba8b96d4f6b448a178"></a>

```
DROP OWNED BY name [, ...] [ CASCADE | RESTRICT ];
```

## Parameter Description<a name="en-us_topic_0283136635_en-us_topic_0237122143_en-us_topic_0059777620_s5e20663187d9497f800eddc8ed555802"></a>

-   **name**

    Specifies the role name.

-   **CASCADE | RESTRICT**
    -   **CASCADE**: automatically deletes the objects that depend on the objects to be deleted.
    -   **RESTRICT**: refuses to delete the objects if other objects depend on them. This is the default action.


## Helpful Links<a name="en-us_topic_0283136635_en-us_topic_0237122143_section1285104485620"></a>

[REASSIGN OWNED](reassign-owned.md)  and  [DROP ROLE](drop-role.md)

