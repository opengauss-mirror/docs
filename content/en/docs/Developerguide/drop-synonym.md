# DROP SYNONYM<a name="EN-US_TOPIC_0289900036"></a>

## Function<a name="en-us_topic_0283137394_en-us_topic_0237122151_en-us_topic_0059778429_s99b7590244bd4c1ab904f72cfc2cc9a0"></a>

**DROP SYNONYM**  deletes a synonym.

## Precautions<a name="en-us_topic_0283137394_en-us_topic_0237122151_en-us_topic_0059778429_s930f5a4f83c6409d88e8b3f1cb94b164"></a>

The owner of SYNONYM or a user granted with the DROP ANY SEQUENCE permission can run **DROP SYNONYM**. The system administrator has this permission by default.

## Syntax<a name="en-us_topic_0283137394_en-us_topic_0237122151_en-us_topic_0059778429_s9b11702dc40d417f95cd9eec3970b4d1"></a>

```
DROP SYNONYM [ IF EXISTS ] synonym_name [ CASCADE | RESTRICT ];
```

## Parameter Description<a name="en-us_topic_0283137394_en-us_topic_0237122151_en-us_topic_0059778429_sb1cba40c50ea4d648126cedd1ac258ff"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified synonym does not exist.

-   **synonym\_name**

    Specifies the name \(optionally schema-qualified\) of the synonym to be deleted.

-   **CASCADE | RESTRICT**
    -   **CASCADE**: automatically deletes the objects \(such as views\) that depend on the synonym.
    -   **RESTRICT**: refuses to delete the synonym if any objects depend on it. This is the default action.


## Examples<a name="en-us_topic_0283137394_en-us_topic_0237122151_en-us_topic_0059778429_s029ee990ffb541b389848c4b246ecfcb"></a>

See  [Examples](create-synonym.md#en-us_topic_0283136599_en-us_topic_0237122116_section1853433744413)  in  **CREATE SYNONYM**.

## Helpful Links<a name="en-us_topic_0283137394_en-us_topic_0237122151_en-us_topic_0059778429_sc10e825d28c44222b38ad09aeaa385d2"></a>

[ALTER SYNONYM](alter-synonym.md)  and  [CREATE SYNONYM](create-synonym.md)
