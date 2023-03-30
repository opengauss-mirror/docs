# Materialized View<a name="EN-US_TOPIC_0295970202"></a>

A materialized view is a special physical table, which is relative to a common view. A common view is a virtual table and has many application limitations. Any query on a view is actually converted into a query on an SQL statement, and performance is not actually improved. The materialized view actually stores the results of the statements executed by the SQL statement, and is used to cache the results.

Currently, the Ustore engine does not support the creation and use of materialized views.

-   **[Complete-refresh Materialized View](complete-refresh-materialized-view.md)**  

-   **[Fast-refresh Materialized View](fast-refresh-materialized-view.md)**  


