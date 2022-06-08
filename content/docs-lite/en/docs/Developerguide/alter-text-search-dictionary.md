# ALTER TEXT SEARCH DICTIONARY<a name="EN-US_TOPIC_0289900782"></a>

## Function<a name="en-us_topic_0283136970_en-us_topic_0237122080_en-us_topic_0059777936_sb9efc89be09141c3b113326dd8c2b35d"></a>

**ALTER TEXT SEARCH DICTIONARY**  modifies the definition of a full-text search dictionary, including its parameters, name, owner, and schema.

## Precautions<a name="en-us_topic_0283136970_en-us_topic_0237122080_en-us_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

-   Predefined dictionaries do not support the  **ALTER**  operations.
-   Only the owner of a dictionary or a system administrator can perform the  **ALTER**  operations. 
-   After a dictionary is created or modified, any modification to the customized dictionary definition file in the  **filepath**  directory does not affect the dictionary in the database. To use these modifications in the database, run the  **ALTER TEXT SEARCH DICTIONARY**  statement to update the definition file of the corresponding dictionary.

## Syntax<a name="en-us_topic_0283136970_en-us_topic_0237122080_en-us_topic_0059777936_sf623225ad89841f9a333d738aa22a6ed"></a>

-   Modify the dictionary definition.

    ```
    ALTER TEXT SEARCH DICTIONARY name (
        option [ = value ] [, ... ]
    );
    ```


-   Rename a dictionary.

    ```
    ALTER TEXT SEARCH DICTIONARY name RENAME TO new_name;
    ```

-   Set the schema of the dictionary.

    ```
    ALTER TEXT SEARCH DICTIONARY name SET SCHEMA new_schema;
    ```

-   Change the owner of the dictionary.

    ```
    ALTER TEXT SEARCH DICTIONARY name OWNER TO new_owner;
    ```


## Parameter Description<a name="en-us_topic_0283136970_en-us_topic_0237122080_en-us_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **name**

    Specifies the name of an existing dictionary. \(If you do not specify a schema name, the dictionary in the current schema will be used.\)

    Value range: an existing dictionary name

-   **option**

    Specifies the parameter name to be modified. Each type of dictionaries has a template containing their custom parameters. Parameters function in a way irrelevant to their setting sequence. For details about the parameters, see  [option](create-text-search-dictionary.md#en-us_topic_0283137272_en-us_topic_0237122122_li1286812455448).

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   The value of  **TEMPLATE**  in the dictionary cannot be changed.
    >-   To specify a dictionary, specify both the dictionary definition file path \(**FILEPATH**\) and the file name.
    >-   The name of a dictionary definition file can contain only lowercase letters, digits, and underscores \(\_\).

-   **value**

    Specifies the new value of a parameter. If the equal sign \(=\) and  _value_  are omitted, the previous settings of the option are deleted and the default value is used.

    Value range: valid values defined by  **option**.

-   **new\_name**

    Specifies the new name of a dictionary.

    Value range: a string, which complies with the identifier naming convention. A value can contain a maximum of 63 characters.

-   **new\_owner**

    Specifies the new owner of a dictionary.

    Value range: an existing username

-   **new\_schema**

    Specifies the new schema of a dictionary.

    Value range: an existing schema


## Examples<a name="en-us_topic_0283136970_en-us_topic_0237122080_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

```
-- Modify the definition of stop words in Snowball dictionaries. Retain the values of other parameters.
openGauss=# ALTER TEXT SEARCH DICTIONARY my_dict ( StopWords = newrussian, FilePath = 'file:///home/dicts' );

-- Modify the Language parameter in Snowball dictionaries and delete the definition of stop words.
openGauss=# ALTER TEXT SEARCH DICTIONARY my_dict (Language = dutch, StopWords);

-- Update the dictionary definition and do not change any other content.
openGauss=# ALTER TEXT SEARCH DICTIONARY my_dict ( dummy );
```

## Helpful Links<a name="en-us_topic_0283136970_en-us_topic_0237122080_en-us_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[CREATE TEXT SEARCH DICTIONARY](create-text-search-dictionary.md)  and  [DROP TEXT SEARCH DICTIONARY](drop-text-search-dictionary.md)

