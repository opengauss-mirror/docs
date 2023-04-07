# CREATE TEXT SEARCH DICTIONARY<a name="EN-US_TOPIC_0289899995"></a>

## Function<a name="en-us_topic_0283137272_en-us_topic_0237122122_en-us_topic_0059777936_sb9efc89be09141c3b113326dd8c2b35d"></a>

**CREATE TEXT SEARCH DICTIONARY**  creates a full-text retrieval dictionary. A dictionary is used to identify and process particular words during full-text retrieval.

Dictionaries are created by using predefined templates \(defined in the  [PG\_TS\_TEMPLATE](../DataBaseReference/pg_ts_template.md)  system catalog\). Five types of dictionaries can be created,  **Simple**,  **Ispell**,  **Synonym**,  **Thesaurus**, and  **Snowball**. These dictionaries are used to handle different types of tasks.

## Precautions<a name="en-us_topic_0283137272_en-us_topic_0237122122_en-us_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

-   A user with the  **SYSADMIN**  permission can create a dictionary. Then, the user automatically becomes the owner of the dictionary.
-   A dictionary cannot be created in  **pg\_temp**  mode.
-   After a dictionary is created or modified, any modification to the customized dictionary definition file will not affect the dictionary in the database. To make such modifications take effect in the dictionary in the database, run the  **ALTER**  statement to update the definition file of the dictionary.

## Syntax<a name="en-us_topic_0283137272_en-us_topic_0237122122_en-us_topic_0059777936_sf623225ad89841f9a333d738aa22a6ed"></a>

```
CREATE TEXT SEARCH DICTIONARY name (
    TEMPLATE = template
    [, option = value [, ... ]]
);
```

## Parameter Description<a name="en-us_topic_0283137272_en-us_topic_0237122122_en-us_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **name**

    Specifies the name of a dictionary to be created. \(If you do not specify a schema name, the dictionary will be created in the current schema.\)

    Value range: a string, which complies with the identifier naming convention. A value can contain a maximum of 63 characters.

-   **template**

    Specifies a template name.

    Value range: templates \(**Simple**,  **Synonym**,  **Thesaurus**,  **Ispell**, and  **Snowball**\) defined in the  [PG\_TS\_TEMPLATE](../DataBaseReference/pg_ts_template.md)  system catalog

-   **option**

    Specifies a parameter name. Each type of dictionaries has a template containing their custom parameters. Parameters function in a way irrelevant to their setting sequence.

    -   Parameters for a  **Simple**  dictionary
        -   **STOPWORDS**

            Specifies the name of a file listing stop words. The default file name extension is .stop. In the file, each line defines a stop word. Dictionaries will ignore blank lines and spaces in the file and convert stop-word phrases into lowercase.

        -   **ACCEPT**

            Specifies whether to accept a non-stop word as recognized. Default value:  **true**

            If  **ACCEPT=true**  is set for a  **Simple**  dictionary, no token will be passed to subsequent dictionaries. In this case, you are advised to place the  **Simple**  dictionary at the end of the dictionary list. If  **ACCEPT=false**  is set, you are advised to place the  **Simple**  dictionary before at least one dictionary in the list.

        -   **FILEPATH**

            Specifies the directory for storing dictionary files. The directory can be a local directory or an OBS directory. \(The OBS directory can be specified only in security mode. You can add the securitymode option during startup to enter the security mode.\) The local directory format is  **file://**_absolute\_path_. The OBS directory format is  **obs://**_bucket\_name_**/path accesskey=ak secretkey=sk region=rg**. The default value is the directory where predefined dictionary files are located. If any of the  **FILEPATH**  and  **STOPWORDS**  parameters is specified, the other one must also be specified.

    -   Parameters for a  **Synonym**  dictionary
        -   **SYNONYM**

            Specifies the name of the definition file for a  **Synonym**  dictionary. The default file name extension is .syn.

            The file is a list of synonyms. Each line is in the format of  _token synonym_, that is, token and its synonym separated by a space.

        -   **CASESENSITIVE**

            Specifies whether tokens and their synonyms are case sensitive. The default value is  **false**, indicating that tokens and synonyms in dictionary files will be converted into lowercase. If this parameter is set to  **true**, they will not be converted into lowercase.

        -   **FILEPATH**

            Specifies the directory for storing  **Synonym**  dictionary files. The directory can be a local directory or an OBS directory. \(The OBS directory can be specified only in security mode. You can add the  **securitymode**  option during startup to enter the security mode.\) The local directory format is  **file://**_absolute\_path_. The OBS directory format is  **obs://**_bucket\_name_**/path accesskey=ak secretkey=sk region=rg**. The default value is the directory where predefined dictionary files are located.

    -   Parameters for a  **Thesaurus**  dictionary
        -   **DICTFILE**

            Specifies the name of a dictionary definition file. The default file name extension is .ths.

            The file is a list of synonyms. Each line is in the format of  _sample words_ **:** _indexed words_. The colon \(:\) is used as a separator between a phrase and its substitute word. If multiple sample words are matched, the TZ selects the longest one.

        -   **DICTIONARY**

            Specifies the name of a subdictionary used for word normalization. This parameter is mandatory and only one subdictionary name can be specified. The specified subdictionary must exist. It is used to identify and normalize input text before phrase matching.

            If an input word cannot be recognized by the subdictionary, an error will be reported. In this case, remove the word or update the subdictionary to make the word recognizable. In addition, an asterisk \(\*\) can be placed at the beginning of an indexed word to skip the application of a subdictionary on it, but all sample words must be recognizable by the subdictionary.

            If the sample words defined in the dictionary file contain stop words defined in the subdictionary, use question marks \(?\) to replace them. Assume that  **a**  and  **the**  are stop words defined in the subdictionary.

            ```
            ? one ? two : swsw
            ```

            **a one the two**  and  **the one a two**  will be matched and output as  **swsw**.

        -   **FILEPATH**

            Specifies the directory for storing dictionary definition files. The directory can be a local directory or an OBS directory. \(The OBS directory can be specified only in security mode. You can add the securitymode option during startup to enter the security mode.\) The local directory format is  **file://**_absolute\_path_. The OBS directory format is  **obs://**_bucket\_name_**/path accesskey=ak secretkey=sk region=rg**. The default value is the directory where predefined dictionary files are located.

    -   Parameters for an  **Ispell**  dictionary
        -   **DICTFILE**

            Specifies the name of a dictionary definition file. The default file name extension is .dict.

        -   **AFFFILE**

            Specifies the name of an affix file. The default file name extension is .affix.

        -   **STOPWORDS**

            Specifies the name of a file listing stop words. The default file name extension is .stop. The file content format is the same as that of the file for a  **Simple**  dictionary.

        -   **FILEPATH**

            Specifies the directory for storing dictionary files. The directory can be a local directory or an OBS directory. \(The OBS directory can be specified only in security mode. You can add the  **securitymode**  option during startup to enter the security mode.\) The local directory format is  **file://**_absolute\_path_. The OBS directory format is  **obs://**_bucket\_name_**/path accesskey=ak secretkey=sk region=rg**. The default value is the directory where predefined dictionary files are located.

    -   Parameters for a  **Snowball**  dictionary
        -   **LANGUAGE**

            Specifies the name of a language whose stemming algorithm will be used. According to spelling rules in the language, the algorithm normalizes the variants of an input word into a basic word or a stem.

        -   **STOPWORDS**

            Specifies the name of a file listing stop words. The default file name extension is .stop. The file content format is the same as that of the file for a  **Simple**  dictionary.

        -   **FILEPATH**

            Specifies the directory for storing dictionary definition files. You can specify a local directory or an OBS directory. \(The OBS directory can be specified only in security mode. You can enter the security mode by adding the  **securitymode**  option during startup.\) The local directory format is  **file://**_absolute\_path_. The OBS directory format is  **obs://**_bucket\_name_**/path accesskey=ak secretkey=sk region=rg**. The default value is the directory where predefined dictionary files are located. If any of the  **FILEPATH**  and  **STOPWORDS**  parameters is specified, the other one must also be specified.


    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The name of a dictionary definition file can contain only lowercase letters, digits, and underscores \(\_\).
    >In the Lite scenario, OBS functions of openGauss are unavailable.

-   **value**

    Specifies a parameter value. If the value is not an identifier or a number, enclose it with single quotation marks \(''\). You can also enclose identifiers and numbers.


## Examples<a name="en-us_topic_0283137272_en-us_topic_0237122122_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

See examples in  [Configuration Examples](configuration-examples.md).

## Helpful Links<a name="en-us_topic_0283137272_en-us_topic_0237122122_en-us_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[ALTER TEXT SEARCH DICTIONARY](alter-text-search-dictionary.md)  and  [CREATE TEXT SEARCH DICTIONARY](create-text-search-dictionary.md)

