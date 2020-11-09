# Testing a Dictionary<a name="EN-US_TOPIC_0242370509"></a>

The  **ts\_lexize**  function facilitates dictionary testing.

**ts\_lexize\(dict regdictionary, token text\) returns text\[\]** **ts\_lexize**  returns an array of lexemes if the input  **token**  is known to the dictionary, or an empty array if the token is known to the dictionary but it is a stop word, or  **NULL**  if it is an unknown word.

For example:

```
postgres=# SELECT ts_lexize('english_stem', 'stars');
 ts_lexize
-----------
 {star}

postgres=# SELECT ts_lexize('english_stem', 'a');
 ts_lexize
-----------
 {}
```

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>The  **ts\_lexize**  function expects a single  **token**, not text.  

