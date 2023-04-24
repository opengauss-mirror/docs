# Snowball Dictionary<a name="EN-US_TOPIC_0289900109"></a>

A  **Snowball**  dictionary is based on a project by Martin Porter and is used for stem analysis, providing stemming algorithms for many languages. openGauss provides predefined  **Snowball**  dictionaries of many languages. You can query the  [PG\_TS\_DICT](../DataBaseReference/pg_ts_dict.md)  system catalog to view the predefined  **Snowball**  dictionaries and supported stemming algorithms.

A  **Snowball**  dictionary recognizes everything, no matter whether it is able to simplify the word. Therefore, it should be placed at the end of the dictionary list. It is useless to place it before any other dictionary because a token will never pass it through to the next dictionary.

For details about the syntax of  **Snowball**  dictionaries, see  [CREATE TEXT SEARCH DICTIONARY](create-text-search-dictionary.md).

