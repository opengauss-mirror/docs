# DROP TEXT SEARCH DICTIONARY<a name="EN-US_TOPIC_0289900800"></a>

## Function<a name="en-us_topic_0283137105_en-us_topic_0237122155_en-us_topic_0059777936_sb9efc89be09141c3b113326dd8c2b35d"></a>

**DROP TEXT SEARCH DICTIONARY**  deletes a full-text retrieval dictionary.

## Precautions<a name="en-us_topic_0283137105_en-us_topic_0237122155_en-us_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

-   Predefined dictionaries do not support the  **DROP**  operation.
-   Only the owner of a dictionary or a system administrator has the permission to  **DROP**.
-   Execute  **DROP...CASCADE**  only when necessary because this operation will delete the text search configurations that use this dictionary.

## Syntax<a name="en-us_topic_0283137105_en-us_topic_0237122155_en-us_topic_0059777936_sf623225ad89841f9a333d738aa22a6ed"></a>

```
DROP TEXT SEARCH DICTIONARY [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## Parameter Description<a name="en-us_topic_0283137105_en-us_topic_0237122155_en-us_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified full-text retrieval dictionary does not exist.

-   **name**

    Specifies the name \(optionally schema-qualified\) of the full-text retrieval dictionary to be deleted. \(If you do not specify a schema name, the dictionary will be deleted in the current schema by default.\)

    Value range: an existing dictionary name

-   **CASCADE**

    Automatically deletes the objects that depend on the full-text retrieval dictionary and other objects that depend on these objects.

    If any text search configuration uses the dictionary, the  **DROP**  statement will fail. You can add  **CASCADE**  to delete all text search configurations and dictionaries that use this dictionary.

-   **RESTRICT**

    Refuses to delete the full-text retrieval dictionary if any object depends on it. It is the default value.


## Examples<a name="en-us_topic_0283137105_en-us_topic_0237122155_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

```
-- Delete the english dictionary.
openGauss=# DROP TEXT SEARCH DICTIONARY english;
```

## Helpful Links<a name="en-us_topic_0283137105_en-us_topic_0237122155_en-us_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[ALTER TEXT SEARCH DICTIONARY](alter-text-search-dictionary.md)  and  [CREATE TEXT SEARCH DICTIONARY](create-text-search-dictionary.md)

