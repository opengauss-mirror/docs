# Doing VACUUM to a Table<a name="EN-US_TOPIC_0242370297"></a>

If a large number of rows were updated or deleted during import, run  **VACUUM FULL**  before  **ANALYZE**. A large number of UPDATE and DELETE operations generate huge disk page fragments, which reduces query efficiency.  **VACUUM FULL**  can restore disk page fragments and return them to the OS.

Run the  **VACUUM FULL**  statement.

Do  **VACUUM FULL**  to the  **product\_info**  table.

```
VACUUM FULL product_info
```

```
VACUUM
```


