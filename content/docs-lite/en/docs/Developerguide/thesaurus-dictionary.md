# Thesaurus Dictionary<a name="EN-US_TOPIC_0289900582"></a>

A  **Thesaurus**  dictionary \(sometimes abbreviated as TZ\) is a collection of relationships between words and phrases, such as broader terms \(BT\), narrower terms \(NT\), preferred terms, non-preferred terms, and related terms. Based on definitions in the dictionary file, a TZ replaces all non-preferred terms by one preferred term and, optionally, preserves the original terms for indexing as well. A TZ is an extension of a  **Synonym**  dictionary with added phrase support.

## Precautions<a name="en-us_topic_0283137504_en-us_topic_0237122038_section62562319454"></a>

-   A TZ has the capability to recognize phrases and therefore it must remember its state and interact with the parser to determine whether to handle the next token or stop accumulation. A TZ must be configured carefully. For example, if a TZ is configured to handle only  **asciiword**  tokens, a TZ definition like  **one 7**  will not work because the token type  **uint**  is not assigned to the TZ.
-   TZs are used during indexing, so any change in the TZ's parameters requires reindexing. For most other dictionary types, small changes such as adding or removing stop words does not force reindexing.

## Procedure<a name="en-us_topic_0283137504_en-us_topic_0237122038_section1031795115131"></a>

1.  Create a TZ named  **thesaurus\_astro**.

    **thesaurus\_astro**  is a simple astronomical TZ that defines two astronomical word combinations \(word+synonym\).

    ```
    supernovae stars : sn 
    crab nebulae : crab
    ```

    Run the following statement to create the TZ:

    ```
    openGauss=# CREATE TEXT SEARCH DICTIONARY thesaurus_astro (
        TEMPLATE = thesaurus,
        DictFile = thesaurus_astro,
        Dictionary = pg_catalog.english_stem,
        FILEPATH = 'file:///home/dicts/'
    );
    ```

    The full name of the TZ file is  **thesaurus\_astro.ths**, and the TZ is stored in the  **/home/dicts/**  directory of the current database primary node.  **pg\_catalog.english\_stem**  is the subdictionary \(a  **Snowball**  English stemmer\) used for input normalization. The subdictionary has its own configuration \(for example, stop words\), which is not shown here. For details about the syntax and parameters for creating an  **Ispell**  dictionary, see  [CREATE TEXT SEARCH DICTIONARY](create-text-search-dictionary.md).

2.  Bind the TZ to the desired token types in the text search configuration.

    ```
    openGauss=# ALTER TEXT SEARCH CONFIGURATION russian
        ALTER MAPPING FOR asciiword, asciihword, hword_asciipart
        WITH thesaurus_astro, english_stem;
    ```

3.  Use the TZ.
    -   Test the TZ.

        The  **ts\_lexize**  function is not very useful for testing the TZ because the function processes its input as a single token. Instead, you can use the  **plainto\_tsquery**,  **to\_tsvector**, or  **to\_tsquery**  function which will break their input strings into multiple tokens.

        ```
        openGauss=# SELECT plainto_tsquery('russian','supernova star');
         plainto_tsquery 
        -----------------
         'sn'
        (1 row)
        
        openGauss=# SELECT to_tsvector('russian','supernova star');
         to_tsvector 
        -------------
         'sn':1
        (1 row)
        
        openGauss=# SELECT to_tsquery('russian','''supernova star''');
         to_tsquery 
        ------------
         'sn'
        (1 row)
        
        ```

        **supernova star**  matches  **supernovae stars**  in  **thesaurus\_astro**  because the Snowball  **english\_stem**  stemmer is specified in the  **thesaurus\_astro**  definition. The stemmer removed  **e**  and  **s**.

    -   To index the original phrase, include it in the right-hand part of the definition.

        ```
        supernovae stars : sn supernovae stars
        
        openGauss=# ALTER TEXT SEARCH DICTIONARY thesaurus_astro (
            DictFile = thesaurus_astro,
            FILEPATH = 'file:///home/dicts/');
        
        openGauss=# SELECT plainto_tsquery('russian','supernova star');
               plainto_tsquery       
        -----------------------------
         'sn' & 'supernova' & 'star'
        (1 row)
        ```



