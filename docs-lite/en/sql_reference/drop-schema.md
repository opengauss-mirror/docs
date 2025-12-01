# DROP SCHEMA<a name="EN-US_TOPIC_0289900224"></a>

## Function<a name="en-us_topic_0283137271_en-us_topic_0237122148_en-us_topic_0059778467_s13f49511137f4971b9f2c7f4b3ec109f"></a>

**DROP SCHEMA**  deletes a schema from the current database.

## Precautions<a name="en-us_topic_0283137271_en-us_topic_0237122148_en-us_topic_0059778467_s534b294ce9534c0481fb248695186280"></a>

Only the schema owner or a user granted with the DROP permission can run the  **DROP SCHEMA**  command. The system administrator has this permission by default.

## Syntax<a name="en-us_topic_0283137271_en-us_topic_0237122148_en-us_topic_0059778467_s7a099e8501ce4420a540fd891c511213"></a>

```
DROP SCHEMA [ IF EXISTS ] schema_name [, ...] [ CASCADE | RESTRICT ];
```

## Parameter Description<a name="en-us_topic_0283137271_en-us_topic_0237122148_en-us_topic_0059778467_s265f3ed4c0e4402a8a7c984e6ac1fe33"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified schema does not exist.

-   **schema\_name**

    Specifies the name of the schema to be deleted.

    Value range: an existing schema name

-   **CASCADE | RESTRICT**
    -   **CASCADE**: automatically deletes all the objects contained in the schema.
    -   **RESTRICT**: refuses to delete the schema if the schema contains objects. This is the default action.


>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>
>Schemas beginning with  **pg\_temp**  or  **pg\_toast\_temp**  are for internal use. Do not delete them. Otherwise, unexpected consequences may be incurred.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>The schema currently being used cannot be deleted. To delete it, switch to another schema first.

## Examples<a name="en-us_topic_0283137271_en-us_topic_0237122148_en-us_topic_0059778467_s3390f031a430477da6a945b09b36b73d"></a>

See  [Examples](create-schema.md#en-us_topic_0283137491_en-us_topic_0237122113_en-us_topic_0059777945_s05e72232af5e4507aad1511c025d7617)  in  **CREATE SCHEMA**.

## Helpful Links<a name="en-us_topic_0283137271_en-us_topic_0237122148_en-us_topic_0059778467_s344eb8c77efa4c209c358dd81f79034f"></a>

[ALTER SCHEMA](alter-schema.md)  and  [CREATE SCHEMA](create-schema.md)

