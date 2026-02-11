# Materialized View<a name="EN-US_TOPIC_0295970202"></a>

A materialized view is a special physical table, which is relative to a common view. A common view is a virtual table and has many application limitations. Any query on a view is actually converted into a query on an SQL statement, and performance is not actually improved. The materialized view actually stores the results of the statements executed by the SQL statement, and is used to cache the results.You can directly use data without repeatedly executing query statements, improving performance.

Currently, the Ustore engine does not support the creation and use of materialized views.

- **[Complete-refresh Materialized View](complete-refresh-materialized-view.md)**: Only created materialized views can be fully refreshed. Incremental refresh is not supported. The syntax for creating a full-refresh materialized view is similar to the  **CREATE TABLE AS**  syntax.  

- **[Fast-refresh Materialized View](fast-refresh-materialized-view.md)**: Materialized views can be incrementally refreshed. You need to manually execute statements to incrementally refresh materialized views in a period of time. The difference between the incremental-refresh and the full-refresh materialized views is that the incremental-refresh materialized view supports only a small number of scenarios. Currently, only base table scanning statements or UNION ALL can be used to create materialized views.  
