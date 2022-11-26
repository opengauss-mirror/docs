# Configuration Examples<a name="EN-US_TOPIC_0289900764"></a>

Text search configuration specifies the following components required for converting a document into a **tsvector**:

-   A parser, decomposes a text into tokens.
-   Dictionary list, converts each token into a lexeme.

Each time when the **to\_tsvector** or **to\_tsquery** function is invoked, a text search configuration is required to specify a processing procedure. The GUC parameter [default\_text\_search\_config](locale-and-formatting.md#en-us_topic_0237124733_en-us_topic_0059778109_sd9a07d429cd4498383931c621742b816) specifies the default text search configuration, which will be used if the text search function does not explicitly specify a text search configuration.

openGauss provides some predefined text search configurations. You can also create user-defined text search configurations. In addition, to facilitate the management of text search objects, multiple **gsql** meta-commands are provided to display information about text search objects. For details, see "Client Tool \> Meta-Command Reference" in *Tool Reference*.

## Procedure<a name="en-us_topic_0283137082_en-us_topic_0237122041_section2016620211300"></a>

1.  Create a text search configuration **ts\_conf** by copying the predefined text search configuration **english**.

    ```
    openGauss=# CREATE TEXT SEARCH CONFIGURATION ts_conf ( COPY = pg_catalog.english );
    CREATE TEXT SEARCH CONFIGURATION
    ```

2.  Create a **Synonym** dictionary.

    Assume that the definition file **pg\_dict.syn** of the **Synonym** dictionary contains the following contents:

    ```
    postgres    pg 
    pgsql       pg 
    postgresql  pg
    ```

    Run the following statement to create the **Synonym** dictionary:

    ```
    openGauss=# CREATE TEXT SEARCH DICTIONARY pg_dict (
         TEMPLATE = synonym,
         SYNONYMS = pg_dict,
         FILEPATH = 'file:///home/dicts'
     );
    ```

3.  Create an **Ispell** dictionary **english\_ispell** \(the dictionary definition file is from the open source dictionary\).

    ```
    openGauss=# CREATE TEXT SEARCH DICTIONARY english_ispell (
        TEMPLATE = ispell,
        DictFile = english,
        AffFile = english,
        StopWords = english,
        FILEPATH = 'file:///home/dicts' 
    );
    ```

4.  Modify the text search configuration **ts\_conf** and change the dictionary list for tokens of certain types. For details about token types, see [Parser](parser.md).

    ```
    openGauss=# ALTER TEXT SEARCH CONFIGURATION ts_conf
        ALTER MAPPING FOR asciiword, asciihword, hword_asciipart,
                          word, hword, hword_part
        WITH pg_dict, english_ispell, english_stem;
    ```

5.  In the text search configuration, set non-index or set the search for tokens of certain types.

    ```
    openGauss=# ALTER TEXT SEARCH CONFIGURATION ts_conf
        DROP MAPPING FOR email, url, url_path, sfloat, float;
    ```

6.  Use the text retrieval commissioning function **ts\_debug\(\)** to test the text search configuration **ts\_conf**.

    ```
    openGauss=# SELECT * FROM ts_debug('ts_conf', '
    PostgreSQL, the highly scalable, SQL compliant, open source object-relational
    database management system, is now undergoing beta testing of the next
    version of our software.
    ');
    ```

7.  You can set the default text search configuration of the current session to **ts\_conf**. This setting is valid only for the current session.

    ```
    openGauss=# \dF+ ts_conf
          Text search configuration "public.ts_conf"
    Parser: "pg_catalog.default"
          Token      |            Dictionaries             
    -----------------+-------------------------------------
     asciihword      | pg_dict,english_ispell,english_stem
     asciiword       | pg_dict,english_ispell,english_stem
     file            | simple
     host            | simple
     hword           | pg_dict,english_ispell,english_stem
     hword_asciipart | pg_dict,english_ispell,english_stem
     hword_numpart   | simple
     hword_part      | pg_dict,english_ispell,english_stem
     int             | simple
     numhword        | simple
     numword         | simple
     uint            | simple
     version         | simple
     word            | pg_dict,english_ispell,english_stem
    
    openGauss=# SET default_text_search_config = 'public.ts_conf';
    SET
    openGauss=# SHOW default_text_search_config;
     default_text_search_config 
    ----------------------------
     public.ts_conf
    (1 row)
    ```
