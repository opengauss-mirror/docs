# Constraints on Index Use<a name="EN-US_TOPIC_0242370485"></a>

The following is an example of index use:

```
postgres=# create table table1 (c_int int,c_bigint bigint,c_varchar varchar,c_text text) with(orientation=row);

postgres=# create text search configuration ts_conf_1(parser=POUND);
postgres=# create text search configuration ts_conf_2(parser=POUND) with(split_flag='%');

postgres=# set default_text_search_config='ts_conf_1';
postgres=# create index idx1 on table1 using gin(to_tsvector(c_text));

postgres=# set default_text_search_config='ts_conf_2';
postgres=# create index idx2 on table1 using gin(to_tsvector(c_text));

postgres=# select c_varchar,to_tsvector(c_varchar) from table1 where to_tsvector(c_text) @@ plainto_tsquery('¥#@...&**')  and to_tsvector(c_text) @@ postgres=# plainto_tsquery('Company ')  and c_varchar is not null order by 1 desc limit 3;
```

In this example,  **table1**  has two GIN indexes created on the same column  **c\_text**,  **idx1**  and  **idx2**, but these two indexes are created under different settings of  [default\_text\_search\_config](zone-and-formatting.md#en-us_topic_0237124733_en-us_topic_0059778109_sd9a07d429cd4498383931c621742b816). Differences between this example and the scenario where one table has common indexes created on the same column are as follows:

-   GIN indexes use different parsers \(that is, different delimiters\). In this case, the index data of  **idx1**  is different from that of  **idx2**.
-   In the specified scenario, the index data of multiple common indexes created on the same column is the same.

As a result, using  **idx1**  and  **idx2**  for the same query returns different results.

## Constraints<a name="en-us_topic_0237122021_section183071424185917"></a>

Still use the above example. When:

-   Multiple GIN indexes are created on the same column of the same table.
-   The GIN indexes use different parsers \(that is, different delimiters\).
-   The column is used in a query, and an index scan is used in the execution plan.

    To avoid different query results caused by different GIN indexes, ensure that only one GIN index is available on a column of the physical table.


