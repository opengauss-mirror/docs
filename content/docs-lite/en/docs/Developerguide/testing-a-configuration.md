# Testing a Configuration<a name="EN-US_TOPIC_0289900260"></a>

The  **ts\_debug**  function allows easy testing of a text search configuration.

```
ts_debug([ config regconfig, ] document text,
         OUT alias text,
         OUT description text,
         OUT token text,
         OUT dictionaries regdictionary[],
         OUT dictionary regdictionary,
         OUT lexemes text[])
         returns setof record
```

**ts\_debug**  displays information about every token of document as produced by the parser and processed by the configured dictionaries. It uses the configuration specified by  **config**, or  **default\_text\_search\_config**  if that argument is omitted. 

**ts\_debug**  returns one row for each token identified in the text by the parser. The columns returned are:

-   **alias text**: short name of the token type
-   **description text**: description of the token type
-   **token text**: text of the token
-   **dictionaries regdictionary\[\]**: dictionaries selected by the configuration for this token type
-   **dictionary regdictionary**: the dictionary that recognized the token, or NULL if none did
-   **lexemes text\[\]**: the lexeme\(s\) produced by the dictionary that recognized the token, or NULL if none did; an empty array \(\{\}\) means the token was recognized as a stop word

Here is a simple example:

```
openGauss=# SELECT * FROM ts_debug('english','a fat  cat sat on a mat - it ate a fat rats');
   alias   |   description   | token |  dictionaries  |  dictionary  | lexemes 
-----------+-----------------+-------+----------------+--------------+---------
 asciiword | Word, all ASCII | a     | {english_stem} | english_stem | {}
 blank     | Space symbols   |       | {}             |              | 
 asciiword | Word, all ASCII | fat   | {english_stem} | english_stem | {fat}
 blank     | Space symbols   |       | {}             |              | 
 asciiword | Word, all ASCII | cat   | {english_stem} | english_stem | {cat}
 blank     | Space symbols   |       | {}             |              | 
 asciiword | Word, all ASCII | sat   | {english_stem} | english_stem | {sat}
 blank     | Space symbols   |       | {}             |              | 
 asciiword | Word, all ASCII | on    | {english_stem} | english_stem | {}
 blank     | Space symbols   |       | {}             |              | 
 asciiword | Word, all ASCII | a     | {english_stem} | english_stem | {}
 blank     | Space symbols   |       | {}             |              | 
 asciiword | Word, all ASCII | mat   | {english_stem} | english_stem | {mat}
 blank     | Space symbols   |       | {}             |              | 
 blank     | Space symbols   | -     | {}             |              | 
 asciiword | Word, all ASCII | it    | {english_stem} | english_stem | {}
 blank     | Space symbols   |       | {}             |              | 
 asciiword | Word, all ASCII | ate   | {english_stem} | english_stem | {ate}
 blank     | Space symbols   |       | {}             |              | 
 asciiword | Word, all ASCII | a     | {english_stem} | english_stem | {}
 blank     | Space symbols   |       | {}             |              | 
 asciiword | Word, all ASCII | fat   | {english_stem} | english_stem | {fat}
 blank     | Space symbols   |       | {}             |              | 
 asciiword | Word, all ASCII | rats  | {english_stem} | english_stem | {rat}
(24 rows)
```

