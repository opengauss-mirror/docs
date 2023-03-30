# Creating an Index<a name="EN-US_TOPIC_0289900880"></a>

You can create a  **GIN**  index to speed up text searches:

```
openGauss=# CREATE INDEX pgweb_idx_1 ON tsearch.pgweb USING gin(to_tsvector('english', body));
```

The  **to\_tsvector**  function comes in to two versions: the 1-argument version and the 2-argument version. When the 1-argument version is used, the system uses the configuration specified by  **default\_text\_search\_config**  by default.

Notice that the 2-argument version of  **to\_tsvector**  is used for index creation. Only text search functions that specify a configuration name can be used in expression indexes. This is because the index contents must be unaffected by  **default\_text\_search\_config**, whose value can be changed at any time. If they were affected, the index contents might be inconsistent, because different entries could contain  **tsvectors**  that were created with different text search configurations, and there would be no way to guess which was which. It would be impossible to dump and restore such an index correctly.

Because the two-argument version of  **to\_tsvector**  was used in the index above, only a query reference that uses the 2-argument version of  **to\_tsvector**  with the same configuration name will use that index. That is,  **WHERE to\_tsvector\('english', body\) @@ 'a & b'**  can use the index, but  **WHERE to\_tsvector\(body\) @@ 'a & b'**  cannot. This ensures that an index will be used only with the same configuration used to create the index entries.

It is possible to set up more complex expression indexes wherein the configuration name is specified by another column. Example:

```
openGauss=# CREATE INDEX pgweb_idx_2 ON tsearch.pgweb USING gin(to_tsvector('ngram', body));
```

where  **body**  is a column in the  **pgweb**  table. This allows mixed configurations in the same index while recording which configuration was used for each index entry. This would be useful, for example, if the document collection contained documents in different languages. Again, queries that are meant to use the index must be phrased to match, for example,  **WHERE to\_tsvector\(config\_name, body\) @@ 'a & b'**  must match  **to\_tsvector**  in the index.

Indexes can even concatenate columns:

```
openGauss=# CREATE INDEX pgweb_idx_3 ON tsearch.pgweb USING gin(to_tsvector('english', title || ' ' || body));
```

Another approach is to create a separate  **tsvector**  column to hold the output of  **to\_tsvector**. This example is a concatenation of  **title**  and  **body**, using  **coalesce**  to ensure that one column will still be indexed when the other is  **NULL**:

```
openGauss=# ALTER TABLE tsearch.pgweb ADD COLUMN textsearchable_index_col tsvector;
openGauss=# UPDATE tsearch.pgweb SET textsearchable_index_col = to_tsvector('english', coalesce(title,'') || ' ' || coalesce(body,''));
```

Then, create a GIN index to speed up the search:

```
openGauss=# CREATE INDEX textsearch_idx_4 ON tsearch.pgweb USING gin(textsearchable_index_col);
```

Now you are ready to perform a fast full text search:

```
openGauss=# SELECT title 
FROM tsearch.pgweb 
WHERE textsearchable_index_col @@ to_tsquery('north & america') 
ORDER BY last_mod_date DESC 
LIMIT 10; 

 title  
--------
 Canada
 Mexico
(2 rows)
```

One advantage of the separate-column approach over an expression index is that it is unnecessary to explicitly specify the text search configuration in queries in order to use the index. As shown in the preceding example, the query can depend on  **default\_text\_search\_config**. Another advantage is that searches will be faster, since it will not be necessary to redo the  **to\_tsvector**  calls to verify index matches. The expression-index approach is simpler to set up, however, and it requires less disk space since the  **tsvector**  representation is not stored explicitly.

