# ALTER TYPE<a name="EN-US_TOPIC_0289899831"></a>

## Function<a name="en-us_topic_0283136571_en-us_topic_0237122082_en-us_topic_0059777461_s46f3e0aac3a84502bc20eee219bef9cf"></a>

**ALTER TYPE**  modifies the definition of a type.

## Precautions<a name="en-us_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

The owner of a type, a user granted the ALTER permission on a type, or a user granted the ALTER ANY TYPE permission on a type can run the **ALTER TYPE** command. The system administrator has this permission by default. To modify the owner or schema of a type, you must be a type owner or system administrator and a member of the new owner role.

## Syntax<a name="en-us_topic_0283136571_en-us_topic_0237122082_en-us_topic_0059777461_s700b45dab05a43e4ac8959c5824223be"></a>

-   Modify a type.

    ```
    ALTER TYPE name action [, ... ]
    ALTER TYPE name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
    ALTER TYPE name RENAME ATTRIBUTE attribute_name TO new_attribute_name [ CASCADE | RESTRICT ]
    ALTER TYPE name RENAME TO new_name
    ALTER TYPE name SET SCHEMA new_schema
    ALTER TYPE name ADD VALUE [ IF NOT EXISTS ] new_enum_value [ { BEFORE | AFTER } neighbor_enum_value ] 
    ALTER TYPE name RENAME VALUE existing_enum_value TO new_enum_value
    
    where action is one of:
        ADD ATTRIBUTE attribute_name data_type [ COLLATE collation ] [ CASCADE | RESTRICT ]
        DROP ATTRIBUTE [ IF EXISTS ] attribute_name [ CASCADE | RESTRICT ]
        ALTER ATTRIBUTE attribute_name [ SET DATA ] TYPE data_type [ COLLATE collation ] [ CASCADE | RESTRICT ]
    ```

-   Add a new attribute to a composite type.

    ```
    ALTER TYPE name ADD ATTRIBUTE attribute_name data_type [ COLLATE collation ] [ CASCADE | RESTRICT ]
    ```


-   Delete an attribute from a composite type.

    ```
    ALTER TYPE name DROP ATTRIBUTE [ IF EXISTS ] attribute_name [ CASCADE | RESTRICT ]
    ```


-   Change the type of an attribute in a composite type.

    ```
    ALTER TYPE name ALTER ATTRIBUTE attribute_name [ SET DATA ] TYPE data_type [ COLLATE collation ] [ CASCADE | RESTRICT ]
    ```


-   Change the owner of a type.

    ```
    ALTER TYPE name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
    ```


-   Change the name of a type or the name of an attribute in a composite type.

    ```
    ALTER TYPE name RENAME TO new_name
    ALTER TYPE name RENAME ATTRIBUTE attribute_name TO new_attribute_name [ CASCADE | RESTRICT ]
    ```


-   Move a type to a new schema.

    ```
    ALTER TYPE name SET SCHEMA new_schema
    ```


-   Add a new value to an enumerated type.

    ```
    ALTER TYPE name ADD VALUE [ IF NOT EXISTS ] new_enum_value [ { BEFORE | AFTER } neighbor_enum_value ]
    ```


-   Change an enumerated value in the value list.

    ```
    ALTER TYPE name RENAME VALUE existing_enum_value TO new_enum_value
    ```


## Parameter Description<a name="en-us_topic_0283136571_en-us_topic_0237122082_en-us_topic_0059777461_s28f32bbb70f648b680f66e994ccb96f4"></a>

-   **name**

    Specifies the name of an existing type that needs to be modified \(optionally schema-qualified\).


-   **new\_name**

    Specifies the new name of the type.


-   **new\_owner**

    Specifies the new owner of the type.


-   **new\_schema**

    Specifies the new schema of the type.


-   **attribute\_name**

    Specifies the name of the attribute to be added, modified, or deleted.


-   **new\_attribute\_name**

    Specifies the new name of the attribute to be renamed.


-   **data\_type**

    Specifies the data type of the attribute to be added, or the new type of the attribute to be modified.

-   **new\_enum\_value**

    Specifies a new enumerated value. It is a non-null string with a maximum length of 63 bytes.

-   **neighbor\_enum\_value**

    Specifies an existing enumerated value before or after which a new enumerated value will be added.

-   **existing\_enum\_value**

    Specifies an enumerated value to be changed. It is a non-null string with a maximum length of 63 bytes.


-   **CASCADE**

    Determines that the type to be modified, its associated records, and subtables that inherit the type will all be updated.

-   **RESTRICT**

    Refuses to update the associated records of the modified type. This is the default action.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   **ADD ATTRIBUTE**,  **DROP ATTRIBUTE**, and  **ALTER ATTRIBUTE**  can be combined for processing. For example, it is possible to add several attributes or change the types of several attributes at the same time in one command.
    >-   To modify a schema of a type, you must have the  **CREATE**  permission on the new schema. To change the owner, you must be a direct or indirect member of the new owning role, and the member must have the  **CREATE**  permission on the schema of this type. \(These restrictions enforce that the user can only recreate and delete the type. However, the system administrator can change ownership of any type in any way.\) To add an attribute or modify the type of an attribute, you must also have the  **USAGE**  permission of this type.


## Examples<a name="en-us_topic_0283136571_en-us_topic_0237122082_en-us_topic_0059777461_sf9c8ea511e3c47b98d77fc0ab56e9d07"></a>

See  [Examples](create-type.md#en-us_topic_0283136568_en-us_topic_0237122124_en-us_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d)  in  **CREATE TYPE**.

## Helpful Links<a name="en-us_topic_0283136571_en-us_topic_0237122082_en-us_topic_0059777461_sfe6a005c6e5b4a98b94be3d6521f4840"></a>

[CREATE TYPE](create-type.md)  and  [DROP TYPE](drop-type.md)
