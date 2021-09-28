# Ranking Search Results<a name="EN-US_TOPIC_0289900374"></a>

Ranking attempts to measure how relevant documents are to a particular query, so that when there are many matches the most relevant ones can be shown first. openGauss provides two predefined ranking functions. The functions take into account lexical, proximity, and structural information; that is, they consider how often the query terms appear in the document, how close together the terms are in the document, and how important is the part of the document where they occur. However, the concept of relevancy is vague and application-specific. Different applications might require additional information for ranking, for example, document modification time. The built-in ranking functions are only examples. You can write your own ranking functions and/or combine their results with additional factors to fit your specific needs.

The two ranking functions currently available are:

```
ts_rank([ weights float4[], ] vector tsvector, query tsquery [, normalization integer ]) returns float4
```

Ranks vectors based on the frequency of their matching lexemes.

```
ts_rank_cd([ weights float4[], ] vector tsvector, query tsquery [, normalization integer ]) returns float4
```

This function requires positional information in its input. Therefore, it will not work on "stripped"  **tsvector**  values. It will always return zero.

For both these functions, the optional  **weights**  argument offers the ability to weigh word instances more or less heavily depending on how they are labeled. The weight arrays specify how heavily to weigh each category of word, in the order:

```
{D-weight, C-weight, B-weight, A-weight}
```

If no  **weights**  is provided, then these defaults are used: \{0.1, 0.2, 0.4, 1.0\}

Typically weights are used to mark words from special areas of the document, like the title or an initial abstract, so they can be treated with more or less importance than words in the document body.

Since a longer document has a greater chance of containing a query term it is reasonable to take into account document size. For example, a hundred-word document with five instances of a search word is probably more relevant than a thousand-word document with five instances. Both ranking functions take an integer  **normalization**  option that specifies whether and how a document's length should impact its rank. The integer option controls several behaviors, so it is a bit mask: you can specify one or more behaviors using a vertical bar \(**|**\) \(for example,  **2|4**\).

-   **0**  \(default\) ignores the document length.
-   **1**  divides the rank by \(1 + logarithm of the document length\).
-   **2**  divides the rank by the document length.
-   **4**  divides the rank by the mean harmonic distance between extents. This is implemented only by  **ts\_rank\_cd**.
-   **8**  divides the rank by the number of unique words in document.
-   **16**  divides the rank by \(1 + Logarithm of the number of unique words in document\).
-   **32**  divides the rank by \(itself + 1\).

If more than one flag bit is specified, the transformations are applied in the order listed.

It is important to note that the ranking functions do not use any global information, so it is impossible to produce a fair normalization to 1% or 100% as sometimes desired. Normalization option 32 \(**rank/\(rank+1\)**\) can be applied to scale all ranks into the range zero to one, but of course this is just a cosmetic change; it will not affect the ordering of the search results.

Here is an example that selects only the ten highest-ranked matches:

```
openGauss=# SELECT id, title, ts_rank_cd(to_tsvector(body), query) AS rank 
FROM tsearch.pgweb, to_tsquery('america') query 
WHERE query @@ to_tsvector(body) 
ORDER BY rank DESC 
LIMIT 10;
 id |  title  | rank 
----+---------+------
 11 | Brazil  |   .2
  2 | America |   .1
 12 | Canada  |   .1
 13 | Mexico  |   .1
(4 rows)
```

This is the same example using normalized ranking:

```
openGauss=# SELECT id, title, ts_rank_cd(to_tsvector(body), query, 32 /* rank/(rank+1) */ ) AS rank 
FROM tsearch.pgweb, to_tsquery('america') query 
WHERE  query @@ to_tsvector(body) 
ORDER BY rank DESC 
LIMIT 10;
 id |  title  |   rank   
----+---------+----------
 11 | Brazil  |  .166667
  2 | America | .0909091
 12 | Canada  | .0909091
 13 | Mexico  | .0909091
(4 rows)
```

The following example sorts query by Chinese word segmentation:

```
openGauss=# CREATE TABLE tsearch.ts_ngram(id int, body text);
openGauss=# INSERT INTO tsearch.ts_ngram VALUES (1, 'Chinese');
openGauss=# INSERT INTO tsearch.ts_ngram VALUES (2, 'Chinese search');
openGauss=# INSERT INTO tsearch.ts_ngram VALUES (3 'Search Chinese');
-- Exact match
openGauss=# SELECT id, body, ts_rank_cd(to_tsvector('ngram',body), query) AS rank FROM tsearch.ts_ngram, to_tsquery('Chinese') query WHERE query @@ to_tsvector(body);
 id | body | rank 
----+------+------
  1 | Chinese |   .1
(1 row)

-- Fuzzy Match
openGauss=# SELECT id, body, ts_rank_cd(to_tsvector('ngram',body), query) AS rank FROM tsearch.ts_ngram, to_tsquery('Chinese') query WHERE query @@ to_tsvector('ngram',body);
 id |   body   | rank 
----+----------+------
  3 | Search Chinese |   .1
  1 | Chinese     |   .1
  2 | Chinese search |   .1
(3 rows)
```

Ranking can be expensive since it requires consulting the  **tsvector**  of each matching document, which can be I/O bound and therefore slow. Unfortunately, it is almost impossible to avoid since practical queries often result in large numbers of matches.

