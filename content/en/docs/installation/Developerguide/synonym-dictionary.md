# Synonym Dictionary<a name="EN-US_TOPIC_0242370501"></a>

A  **Synonym**  dictionary is used to define, identify, and convert synonyms of a token. Phrases are not supported. Synonyms of phrases can be defined in a  **Thesaurus**  dictionary. For details, see  [Thesaurus Dictionary](thesaurus-dictionary.md).

## Examples<a name="en-us_topic_0237122037_section10442451826"></a>

-   A  **Synonym**  dictionary can be used to overcome linguistic problems. For example, to prevent an English stemmer dictionary from reducing the word 'Paris' to 'pari', define a  **Paris paris**  line in the  **Synonym**  dictionary and put it before the  **english\_stem**  dictionary.

    ```
    postgres=# SELECT * FROM ts_debug('english', 'Paris');
       alias   |   description   | token |  dictionaries  |  dictionary  | lexemes 
    -----------+-----------------+-------+----------------+--------------+---------
     asciiword | Word, all ASCII | Paris | {english_stem} | english_stem | {pari}
    (1 row)
    
    postgres=# CREATE TEXT SEARCH DICTIONARY my_synonym (
        TEMPLATE = synonym,
        SYNONYMS = my_synonyms,
        FILEPATH = 'file:///home/dicts/' 
    );
    
    postgres=# ALTER TEXT SEARCH CONFIGURATION english
        ALTER MAPPING FOR asciiword
        WITH my_synonym, english_stem;
    
    postgres=# SELECT * FROM ts_debug('english', 'Paris');
       alias   |   description   | token |       dictionaries        | dictionary | lexemes 
    -----------+-----------------+-------+---------------------------+------------+---------
     asciiword | Word, all ASCII | Paris | {my_synonym,english_stem} | my_synonym | {paris}
    (1 row)
    
    postgres=# SELECT * FROM ts_debug('english', 'paris');
       alias   |   description   | token |       dictionaries        | dictionary | lexemes 
    -----------+-----------------+-------+---------------------------+------------+---------
     asciiword | Word, all ASCII | Paris | {my_synonym,english_stem} | my_synonym | {paris}
    (1 row)
    
    postgres=# ALTER TEXT SEARCH DICTIONARY my_synonym ( CASESENSITIVE=true);
    
    postgres=# SELECT * FROM ts_debug('english', 'Paris');
       alias   |   description   | token |       dictionaries        | dictionary | lexemes 
    -----------+-----------------+-------+---------------------------+------------+---------
     asciiword | Word, all ASCII | Paris | {my_synonym,english_stem} | my_synonym | {paris}
    (1 row)
    
    postgres=# SELECT * FROM ts_debug('english', 'paris');
       alias   |   description   | token |       dictionaries        | dictionary | lexemes 
    -----------+-----------------+-------+---------------------------+------------+---------
     asciiword | Word, all ASCII | Paris | {my_synonym,english_stem} | my_synonym | {pari}
    (1 row)
    
    ```

    The full name of the  **Synonym**  dictionary file is  **my\_synonyms.syn**, and the dictionary is stored in the  **/home/dicts/**  directory of the current database primary node. For details about the syntax and parameters for creating an  **Ispell**  dictionary, see  [ALTER TEXT SEARCH DICTIONARY](alter-text-search-dictionary.md).

-   An asterisk \(\*\) can be placed at the end of a synonym in the configuration file. This indicates that the synonym is a prefix. The asterisk is ignored when the entry is used in to\_tsvector\(\), but when it is used in to\_tsquery\(\), the result will be a query item with the prefix match marker \(see  [Manipulating Queries](manipulating-queries.md)\).

    Assume that the content in the dictionary file  **synonym\_sample.syn**  is as follows:

    ```
    postgres        pgsql
    postgresql      pgsql 
    postgre pgsql 
    gogle   googl 
    indices index*
    ```

    Create and use a dictionary.

    ```
    postgres=# CREATE TEXT SEARCH DICTIONARY syn (
        TEMPLATE = synonym,
        SYNONYMS = synonym_sample
    );
    
    postgres=# SELECT ts_lexize('syn','indices');
     ts_lexize 
    -----------
     {index}
    (1 row)
    
    postgres=# CREATE TEXT SEARCH CONFIGURATION tst (copy=simple);
    
    postgres=# ALTER TEXT SEARCH CONFIGURATION tst ALTER MAPPING FOR asciiword WITH syn;
    
    postgres=# SELECT to_tsvector('tst','indices');
     to_tsvector 
    -------------
     'index':1
    (1 row)
    
    postgres=# SELECT to_tsquery('tst','indices');
     to_tsquery 
    ------------
     'index':*
    (1 row)
    
    postgres=# SELECT 'indexes are very useful'::tsvector;
                tsvector             
    ---------------------------------
     'are' 'indexes' 'useful' 'very'
    (1 row)
    
    postgres=# SELECT 'indexes are very useful'::tsvector @@ to_tsquery('tst','indices');
     ?column? 
    ----------
     t
    (1 row)
    ```


