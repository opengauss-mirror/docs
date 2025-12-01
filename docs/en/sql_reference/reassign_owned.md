# REASSIGN OWNED<a name="EN-US_TOPIC_0289900011"></a>

## Function<a name="en-us_topic_0283136605_en-us_topic_0237122173_en-us_topic_0059779106_sfb032500d9624f8fb05a202a274cb9e9"></a>

**REASSIGN OWNED**  changes the owner of the database object.

**REASSIGN OWNED** requires the system to change the owners of all database objects owned by old_role in the current database to new_role.

## Precautions<a name="en-us_topic_0283136605_en-us_topic_0237122173_en-us_topic_0059779106_sc1c0690ce85a4497bbc2bf507322bd08"></a>

-   **REASSIGN OWNED**  is often executed before role deletion.
-   To run the REASSIGN OWNED statement, you must have the permissions of the original and target roles.

## Syntax<a name="en-us_topic_0283136605_en-us_topic_0237122173_en-us_topic_0059779106_s94f37352d3b04fddaca3d0266fffa8d8"></a>

```
REASSIGN OWNED BY old_role [, ...] TO new_role;
```

## Parameter Description<a name="en-us_topic_0283136605_en-us_topic_0237122173_en-us_topic_0059779106_s304443c9b98d4336b7ce6894962dbe0c"></a>

-   **old\_role**

    Specifies the role name of the old owner.

-   **new\_role**

    Specifies the role name of the new owner.


## Examples<a name="en-us_topic_0283136605_en-us_topic_0237122173_en-us_topic_0059779106_sbcf57ecc9f7a417bad32fed1fe01c036"></a>

None
