# Ispell Dictionary<a name="EN-US_TOPIC_0289900767"></a>

An  **Ispell**  dictionary is a morphological dictionary, which can normalize different linguistic forms of a word into the same lexeme. For example, an English  **Ispell**  dictionary can match all declensions and conjugations of the search term  **bank**, such as,  **banking**,  **banked**,  **banks**,  **banks'**, and  **bank's**.

openGauss does not provide any predefined  **Ispell**  dictionaries or dictionary files. The .dict files and .affix files support multiple open-source dictionary formats, including  **Ispell**,  **MySpell**, and  **Hunspell**.

## Procedure<a name="en-us_topic_0283136907_en-us_topic_0237122039_section737061503610"></a>

1.  Obtain the dictionary definition file \(.dict\) and affix file \(.affix\).

    You can use an open-source dictionary. The name extensions of the open-source dictionary may be .aff and .dic. In this case, you need to change them to .affix and .dict. In addition, for some dictionary files \(for example, Norwegian dictionary files\), you need to run the following commands to convert the character encoding to UTF-8:

    ```
    iconv -f ISO_8859-1 -t UTF-8 -o nn_no.affix nn_NO.aff 
    iconv -f ISO_8859-1 -t UTF-8 -o nn_no.dict nn_NO.dic
    ```

2.  Create an  **Ispell**  dictionary.

    ```
    openGauss=# CREATE TEXT SEARCH DICTIONARY norwegian_ispell (
        TEMPLATE = ispell,
        DictFile = nn_no,
        AffFile = nn_no,
        FilePath = 'file:///home/dicts'
    );
    ```

    The full names of the  **Ispell**  dictionary files are  **nn\_no.dict**  and  **nn\_no.affix**, and the dictionary is stored in the  **/home/dicts/**  directory of the current database primary node. For details about the syntax and parameters for creating a dictionary, see  [CREATE TEXT SEARCH DICTIONARY](create-text-search-dictionary.md).

3.  Use the  **Ispell**  dictionary to split compound words.

    ```
    openGauss=# SELECT ts_lexize('norwegian_ispell', 'sjokoladefabrikk');
          ts_lexize      
    ---------------------
     {sjokolade,fabrikk}
    (1 row)
    
    ```

    **MySpell**  does not support compound words.  **Hunspell**  supports compound words. openGauss supports only the basic compound word operations of  **Hunspell**. Generally,  **Ispell**  dictionaries recognize a limited set of words, so they should be followed by another broader dictionary, for example, a  **Snowball**  dictionary, which recognizes everything.


