# High Performance<a name="EN-US_CONCEPT_0252569351"></a>

-   **[CBO Optimizer](cbo-optimizer.md)**  
The openGauss optimizer is a typical optimizer developed from Cost-based Optimization \(CBO\). By using CBO, the database calculates the number of tuples and the execution cost for each step under each execution plan based on the number of table tuples, column width, null record ratio, and characteristic values, such as distinct, MCV, and HB values, and certain cost calculation methods. The database then selects the execution plan that takes the lowest cost for the overall execution or for the return of the first tuple.
-   **[Hybrid Row-Column Storage](hybrid-row-column-storage.md)**  

-   **[Adaptive Compression](adaptive-compression.md)**  

-   **[Partitioning](partitioning.md)**  

-   **[SQL Bypass](sql-bypass.md)**  
In a typical OLTP scenario, simple queries account for a large proportion. This type of queries involves only single tables and simple expressions. To accelerate such query, the SQL bypass framework is proposed. After simple mode judgment is performed on such query at the parse layer, the query enters a special execution path and skips the classic execution framework, including operator initialization and execution, expression, and projection. Instead, it directly rewrites a set of simple execution paths and directly invokes storage interfaces, greatly accelerating the execution of simple queries.
-   **[Kunpeng NUMA Architecture Optimization](kunpeng-numa-architecture-optimization.md)**  


