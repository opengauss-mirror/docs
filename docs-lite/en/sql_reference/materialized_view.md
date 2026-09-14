# Materialized View<a name="EN-US_TOPIC_0295970202"></a>

A materialized view is a special physical table, which is relative to a common view. A common view is a virtual table and has many application limitations. Any query on a view is actually converted into a query on an SQL statement, and performance is not actually improved. The materialized view actually stores the results of the statements executed by the SQL statement, and is used to cache the results.

Ustore tables cannot be used as query sources for materialized views. A materialized view itself can use Ustore storage, but its query source table must use Astore storage.

- **[Complete-refresh Materialized View](complete_refresh_materialized_view.md)**  

- **[Fast-refresh Materialized View](fast_refresh_materialized_view.md)**  
