# Simple Dictionary<a name="EN-US_TOPIC_0289900949"></a>

A  **Simple**  dictionary operates by converting the input token to lower case and checking it against a list of stop words. If the token is found in the list, an empty array will be returned, causing the token to be discarded. If it is not found, the lower-cased form of the word is returned as the normalized lexeme. In addition, you can set  **Accept**  to  **false**  for  **Simple**  dictionaries \(default:  **true**\) to report non-stop-words as unrecognized, allowing them to be passed on to the next dictionary in the list.

## Precautions<a name="en-us_topic_0283137253_en-us_topic_0237122036_section1750055382816"></a>

-   Most types of dictionaries rely on dictionary configuration files. The name of a configuration file can only be lowercase letters, digits, and underscores \(\_\).
-   A dictionary cannot be created in  **pg\_temp**  mode.
-   Dictionary configuration files must be stored in UTF-8 encoding. They will be translated to the actual database encoding, if that is different, when they are read into the server.
-   Generally, a session will read a dictionary configuration file only once, when it is first used within the session. To modify a configuration file, run the  **ALTER TEXT SEARCH DICTIONARY**  statement to update and reload the file.

## Procedure<a name="en-us_topic_0283137253_en-us_topic_0237122036_section75460100182"></a>

1.  Create a  **Simple**  dictionary.

    ```
    openGauss=# CREATE TEXT SEARCH DICTIONARY public.simple_dict (
         TEMPLATE = pg_catalog.simple,
         STOPWORDS = english
    );
    ```

    **english.stop**  is the full name of a file of stop words. For details about the syntax and parameters for creating a  **Simple**  dictionary, see  [CREATE TEXT SEARCH DICTIONARY](create-text-search-dictionary.md).

2.  Use the  **Simple**  dictionary.

    ```
    openGauss=# SELECT ts_lexize('public.simple_dict','YeS');
     ts_lexize 
    -----------
     {yes}
    (1 row)
    
    openGauss=# SELECT ts_lexize('public.simple_dict','The');
     ts_lexize 
    -----------
     {}
    (1 row)
    ```

3.  Set  **Accept=false**  so that the  **Simple**  dictionary returns  **NULL**  instead of a lower-cased non-stop word.

    ```
    openGauss=# ALTER TEXT SEARCH DICTIONARY public.simple_dict ( Accept = false );
    ALTER TEXT SEARCH DICTIONARY
    openGauss=# SELECT ts_lexize('public.simple_dict','YeS');
     ts_lexize 
    -----------
    
    (1 row)
    
    openGauss=# SELECT ts_lexize('public.simple_dict','The');
     ts_lexize 
    -----------
     {}
    (1 row)
    ```


