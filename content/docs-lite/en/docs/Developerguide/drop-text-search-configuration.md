# DROP TEXT SEARCH CONFIGURATION<a name="EN-US_TOPIC_0289900892"></a>

## Function<a name="en-us_topic_0283136862_en-us_topic_0237122154_en-us_topic_0059778389_s12ec071125bd4d4981cbcdad70bd9a1e"></a>

**DROP TEXT SEARCH CONFIGURATION**  deletes a text search configuration.

## Precautions<a name="en-us_topic_0283136862_en-us_topic_0237122154_en-us_topic_0059778389_sb29dd2fe6ef642c199d2bdfda06ef74c"></a>

Only the owner of a text search configuration has the  **DROP TEXT SEARCH CONFIGURATION**  permission.

## Syntax<a name="en-us_topic_0283136862_en-us_topic_0237122154_en-us_topic_0059778389_sa8997c782c4d412b9c4fd9578137e494"></a>

```
DROP TEXT SEARCH CONFIGURATION [ IF EXISTS ] name [ CASCADE | RESTRICT ];
```

## Parameter Description<a name="en-us_topic_0283136862_en-us_topic_0237122154_en-us_topic_0059778389_s519cbd43e889441f9638691754942bda"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified text search configuration does not exist.

-   **name**

    Specifies the name \(optionally schema-qualified\) of the text search configuration to be deleted.

-   **CASCADE**

    Automatically deletes the objects that depend on the text search configuration.

-   **RESTRICT**

    Refuses to delete the text search configuration if any objects depend on it. This is the default action.


## Examples<a name="en-us_topic_0283136862_en-us_topic_0237122154_en-us_topic_0059778389_s720b27fe18f245ca85d1204cda30b327"></a>

See  [Examples](create-text-search-configuration.md#en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_sc3a4aef5c0c0420eaf5a2e67097004a2)  in  **CREATE TEXT SEARCH CONFIGURATION**.

## Helpful Links<a name="en-us_topic_0283136862_en-us_topic_0237122154_en-us_topic_0059778389_s8bb54ddcd47044a0a99c9c9dffadac2c"></a>

[ALTER TEXT SEARCH CONFIGURATION](alter-text-search-configuration.md)  and  [CREATE TEXT SEARCH CONFIGURATION](create-text-search-configuration.md)

