# DBE\_PERF Schema<a name="EN-US_TOPIC_0245374654"></a>

In the  **DBE\_PERF**  schema, views are used to diagnose performance issues and are also the data source of WDR snapshots. After the database is installed, only the initial user have permissions for the  **DBE\_PERF**  schema by default. If the database is upgraded from an earlier version, permissions for the  **DBE\_PERF**  schema are the same as those of the earlier version to ensure forward compatibility. Organization views are divided based on multiple dimensions, such as OS, instance, and memory. These views comply with the following naming rules:

-   Views starting with  **GLOBAL\_**: Request data from database nodes and return the data without processing them.
-   Views starting with  **SUMMARY\_**: Summarize data in openGauss. In most cases, data from database nodes \(sometimes only the primary database node\) is processed, collected, and returned.
-   Views that do not start with  **GLOBAL\_**  or  **SUMMARY\_**: Local views that do not request data from other database nodes.

-   **[OS](os.md)**  

-   **[Instance](instance.md)**  

-   **[Memory](memory-24.md)**  

-   **[File](file.md)**  

-   **[Object](object.md)**  

-   **[Workload](workload.md)**  

-   **[Session/Thread](session-thread.md)**  

-   **[Transaction](transaction.md)**  

-   **[Query](query.md)**  

-   **[Cache/IO](cache-io.md)**  

-   **[Utility](utility.md)**  

-   **[Lock](lock-25.md)**  

-   **[Wait Events](wait-events.md)**  

-   **[Configuration](configuration.md)**  

-   **[Operator](operator.md)**  

-   **[Workload Manager](workload-manager.md)**  


