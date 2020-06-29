# Platform and Client Compatibility<a name="EN-US_TOPIC_0242371528"></a>

Many platforms use the database system. External compatibility of the database system provides a lot of convenience for platforms.

## transform\_null\_equals<a name="en-us_topic_0237124738_en-us_topic_0059779195_s08818c8140cf437196068571d8291e0e"></a>

**Parameter description**: Specifies whether expressions of the form expr = NULL \(or NULL = expr\) are treated as expr IS NULL. They return true if expr evaluates to  **NULL**, and false otherwise.

-   The correct SQL-standard-compliant behavior of expr = NULL is to always return null \(unknown\).
-   Filtered forms in Microsoft Access generate queries that appear to use expr = NULL to test for null values. If you enable this parameter, you can use this interface to access the database.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates expressions of the form expr = NULL \(or NULL = expr\) are treated as expr IS NULL.
-   **off**  indicates expr = NULL always returns NULL.

**Default value**:  **off**

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>New users are always confused about the semantics of expressions involving  **NULL**  values. Therefore,  **off**  is used as the default value.  

## support\_extended\_features<a name="en-us_topic_0237124738_en-us_topic_0059779195_s1b60ec6dbc79490bbadf5dd62ba2538c"></a>

**Parameter description**: Specifies whether extended database features are supported.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that extended database features are supported.
-   **off**  indicates that extended database features are not supported.

**Default value**:  **off**

## td\_compatible\_truncation<a name="en-us_topic_0237124738_en-us_topic_0059779195_sb8212ce57eb9432a972e390f77203b7c"></a>

**Parameter description:**  Specifies whether to enable features compatible with a Teradata database. You can set this parameter to  **on**  when connecting to a database compatible with the TD database, so that when you perform the INSERT operation, overlong strings are truncated based on the allowed maximum length before being inserted into char- and varchar-type columns in the target table. This ensures all data is inserted into the target table without errors reported.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The string truncation function cannot be used if the INSERT statement includes a foreign table.  
>If inserting multi-byte character data \(such as Chinese characters\) to database with the character set byte encoding \(SQL\_ASCII, LATIN1\), and the character data crosses the truncation position, the string is truncated based on its bytes instead of characters. Unexpected result will occur in tail after the truncation. If you want correct truncation result, you are advised to adopt encoding set such as UTF8, which has no character data crossing the truncation position.  

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates overlong strings are truncated.
-   **off**  indicates overlong strings are not truncated.

**Default value**:  **off**

