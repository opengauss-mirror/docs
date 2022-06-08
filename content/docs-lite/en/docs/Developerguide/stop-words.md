# Stop Words<a name="EN-US_TOPIC_0289900996"></a>

Stop words are words that are very common, appear in almost every document, and have no discrimination value. Therefore, they can be ignored in the context of full text searching. Each type of dictionaries treats stop words in different ways. For example,  **Ispell**  dictionaries first normalize words and then check the list of stop words, while  **Snowball**  dictionaries first check the list of stop words.

For example, every English text contains words like  **a**  and  **the**, so it is useless to store them in an index. However, stop words affect the positions in  **tsvector**, which in turn affect ranking.

```
openGauss=# SELECT to_tsvector('english','in the list of stop words');
        to_tsvector
----------------------------
 'list':3 'stop':5 'word':6
```

The missing positions 1, 2, and 4 are because of stop words. Ranks calculated for documents with and without stop words are quite different:

```
openGauss=# SELECT ts_rank_cd (to_tsvector('english','in the list of stop words'), to_tsquery('list & stop'));
 ts_rank_cd
------------
        .05

openGauss=# SELECT ts_rank_cd (to_tsvector('english','list stop words'), to_tsquery('list & stop'));
 ts_rank_cd
------------
         .1
```

