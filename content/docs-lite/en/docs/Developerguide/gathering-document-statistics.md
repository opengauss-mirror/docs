# Gathering Document Statistics<a name="EN-US_TOPIC_0289900738"></a>

The function  **ts\_stat**  is useful for checking your configuration and for finding stop-word candidates.

```
ts_stat(sqlquery text, [ weights text, ]
        OUT word text, OUT ndoc integer,
        OUT nentry integer) returns setof record
```

**sqlquery**  is a text value containing an SQL query which must return a single  **tsvector**  column.  **ts\_stat**  executes the query and returns statistics about each distinct lexeme \(word\) contained in the  **tsvector**  data. The columns returned are:

-   **word text**: the value of a lexeme
-   **ndoc integer**: number of documents \(**tsvector**\) the word occurred in
-   **nentry integer**: total number of occurrences of the word 

If  **weights**  is supplied, only occurrences having one of those weights are counted. For example, to find the ten most frequent words in a document collection:

```
openGauss=# SELECT * FROM ts_stat('SELECT to_tsvector(''english'', sr_reason_sk) FROM tpcds.store_returns WHERE sr_customer_sk < 10') ORDER BY nentry DESC, ndoc DESC, word LIMIT 10;
   word | ndoc | nentry 
------+------+--------
 32   |    2 |      2
 33   |    2 |      2
 1    |    1 |      1
 10   |    1 |      1
 13   |    1 |      1
 14   |    1 |      1
 15   |    1 |      1
 17   |    1 |      1
 20   |    1 |      1
 22   |    1 |      1
(10 rows)
```

The same, but counting only word occurrences with weight  **A**  or  **B**:

```
openGauss=# SELECT * FROM ts_stat('SELECT to_tsvector(''english'', sr_reason_sk) FROM tpcds.store_returns WHERE sr_customer_sk < 10', 'a') ORDER BY nentry DESC, ndoc DESC, word LIMIT 10;
 word | ndoc | nentry 
------+------+--------
(0 rows)
```

