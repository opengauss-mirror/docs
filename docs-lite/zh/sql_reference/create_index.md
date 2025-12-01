# 创建索引<a name="ZH-CN_TOPIC_0289900880"></a>

为了加速文本搜索，可以创建GIN索引。

```
openGauss=# CREATE INDEX pgweb_idx_1 ON tsearch.pgweb USING gin(to_tsvector('english', body));
```

to\_tsvector\(\)函数有两个版本。只输一个参数的版本和输两个参数的版本。只输一个参数时，系统默认采用default\_text\_search\_config所指定的分词器。

请注意：创建索引时必须使用to\_tsvector的两参数版本。只有指定了分词器名称的全文检索函数才可以在索引表达式中使用。这是因为索引的内容必须不受default\_text\_search\_config的影响，否则索引内容可能不一致。由于default\_text\_search\_config的值可以随时调整，从而导致不同条目生成的tsvector采用了不同的分词器，并且没有办法区分究竟使用了哪个分词器。正确地转储和恢复这样的索引也是不可能的。

因为在上述创建索引中to\_tsvector使用了两个参数，只有当查询时也使用了两个参数，且参数值与索引中相同时，才会使用该索引。也就是说，WHERE to\_tsvector\('english', body\) @@ 'a & b' 可以使用索引，但WHERE to\_tsvector\(body\) @@ 'a & b'不能使用索引。这确保只使用这样的索引——索引各条目是使用相同的分词器创建的。

索引中的分词器名称由另一列指定时可以建立更复杂的表达式索引。例如：

```
openGauss=# CREATE INDEX pgweb_idx_2 ON tsearch.pgweb USING gin(to_tsvector('ngram', body));
```

其中body是pgweb表中的一列。当对索引的各条目使用了哪个分词器进行记录时，允许在同一索引中存在混合分词器。在某些场景下这将是有用的。例如，文档集合中包含不同语言的文档时。再次强调，打算使用索引的查询必须措辞匹配，例如，WHERE to\_tsvector\(config\_name, body\) @@ 'a & b'与索引中的to\_tsvector措辞匹配。

索引甚至可以连接列：

```
openGauss=# CREATE INDEX pgweb_idx_3 ON tsearch.pgweb USING gin(to_tsvector('english', title || ' ' || body));
```

另一个方法是创建一个单独的tsvector列控制to\_tsvector的输出。下面的例子是title和body的连接， 当其它是NULL的时候，使用coalesce确保一个字段仍然会被索引：

```
openGauss=# ALTER TABLE tsearch.pgweb ADD COLUMN textsearchable_index_col tsvector;
openGauss=# UPDATE tsearch.pgweb SET textsearchable_index_col = to_tsvector('english', coalesce(title,'') || ' ' || coalesce(body,''));
```

然后为加速搜索创建一个GIN索引：

```
openGauss=# CREATE INDEX textsearch_idx_4 ON tsearch.pgweb USING gin(textsearchable_index_col);
```

现在，就可以执行一个快速全文搜索了：

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

相比于一个表达式索引，单独列方法的一个优势是：它没有必要在查询时明确指定分词器以便能使用索引。正如上面例子所示，查询可以依赖于default\_text\_search\_config。另一个优势是搜索比较快速，因为它没有必要重新利用to\_tsvector调用来验证索引匹配。表达式索引方法更容易建立，且它需要较少的磁盘空间，因为tsvector形式没有明确存储。

