# SMP for Parallel Execution<a name="EN-US_TOPIC_0000001105395260"></a>

## Availability<a name="section3480125215575"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section5814521587"></a>

The Symmetric Multi-Processing \(SMP\) technology of openGauss uses the multi-core CPU architecture of a computer to implement multi-thread parallel computing, fully using CPU resources to improve query performance.

## Benefits<a name="section148987345811"></a>

Fully utilizes the system multi-core capability to improve requery performance.

## Description<a name="section117041846581"></a>

In complex query scenarios, a single query takes long time and the system concurrency is low. Therefore, the SMP technology is used to implement operator-level parallel execution, which effectively reduces the query time and improves the query performance and resource utilization. The overall implementation of the SMP technology is as follows: For query operators that can be executed in parallel, data is sliced, multiple working threads are started for computation, and then the results are summarized and returned to the frontend. The data interaction operator  **Stream**  is added to the SMP architecture to implement data interaction between multiple working threads, ensuring the correctness and integrity of the query.

## Enhancements<a name="section21149265913"></a>

None.

## Constraints<a name="section51513617597"></a>

-   Index scanning cannot be executed in parallel.
-   MergeJoin cannot be executed in parallel.
-   WindowAgg order by cannot be executed in parallel.
-   The cursor cannot be executed in parallel.
-   Queries in stored procedures and functions cannot be executed in parallel.
-   Subplans and initplans cannot be queried in parallel, and operators that contain subqueries cannot be executed in parallel, either.
-   Query statements that contain the median operation cannot be executed in parallel.
-   Queries with global temporary tables cannot be executed in parallel.
-   Updating materialized views cannot be executed in parallel.

## Dependencies<a name="section20491151513592"></a>

None.

