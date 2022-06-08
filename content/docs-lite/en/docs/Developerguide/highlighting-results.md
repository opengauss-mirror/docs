# Highlighting Results<a name="EN-US_TOPIC_0289899896"></a>

To present search results it is ideal to show a part of each document and how it is related to the query. Usually, search engines show fragments of the document with marked search terms. openGauss provides a function  **ts\_headline**  that implements this functionality.

```
ts_headline([ config regconfig, ] document text, query tsquery [, options text ]) returns text
```

**ts\_headline**  accepts a document along with a query, and returns an excerpt from the document in which terms from the query are highlighted. The configuration to be used to parse the document can be specified by  **config**. If  **config**  is omitted, the  **default\_text\_search\_config**  configuration is used.

If an options string is specified it must consist of a comma-separated list of one or more  **option=value**  pairs. The available options are:

-   **StartSel**,  **StopSel**: The strings with which to delimit query words appearing in the document, to distinguish them from other excerpted words. You must double-quote these strings if they contain spaces or commas.
-   **MaxWords**,  **MinWords**: These numbers determine the longest and shortest headlines to output.

-   **ShortWord**: Words of this length or less will be dropped at the start and end of a headline. The default value of three eliminates common English articles.

-   **HighlightAll**: Boolean flag. If  **true**  the whole document will be used as the headline, ignoring the preceding three parameters.

-   **MaxFragments**: Maximum number of text excerpts or fragments to display. The default value of zero selects a non-fragment-oriented headline generation method. A value greater than zero selects fragment-based headline generation. This method finds text fragments with as many query words as possible and stretches those fragments around the query words. As a result query words are close to the middle of each fragment and have words on each side. Each fragment will be of at most  **MaxWords**  and words of length  **ShortWord**  or less are dropped at the start and end of each fragment. If not all query words are found in the document, then a single fragment of the first  **MinWords**  in the document will be displayed.

-   **FragmentDelimiter**: When more than one fragment is displayed, the fragments will be separated by this string.

Any unspecified options receive these defaults:

```
StartSel=<b>, StopSel=</b>,
MaxWords=35, MinWords=15, ShortWord=3, HighlightAll=FALSE,
MaxFragments=0, FragmentDelimiter=" ... "
```

Example:

```
openGauss=# SELECT ts_headline('english',
'The most common type of search
is to find all documents containing given query terms
and return them in order of their similarity to the
query.',
to_tsquery('english', 'query & similarity'));
                        ts_headline                         
------------------------------------------------------------
 containing given <b>query</b> terms
 and return them in order of their <b>similarity</b> to the
 <b>query</b>.
(1 row)

openGauss=# SELECT ts_headline('english',
'The most common type of search
is to find all documents containing given query terms
and return them in order of their similarity to the
query.',
to_tsquery('english', 'query & similarity'),
'StartSel = <, StopSel = >');
                      ts_headline                      
-------------------------------------------------------
 containing given <query> terms
 and return them in order of their <similarity> to the
 <query>.
(1 row)
```

**ts\_headline**  uses the original document, not a  **tsvector**  summary, so it can be slow and should be used with care.

