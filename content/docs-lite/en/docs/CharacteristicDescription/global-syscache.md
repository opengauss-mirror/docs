# Global SysCache<a name="EN-US_TOPIC_0000001220767350"></a>

## Availability<a name="section15406143204715"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section740615433477"></a>

Global SysCache is the global and local caches of system catalog data.  [Figure 1](#fig15658164619166)  illustrates the principle.

**Figure  1**  Global SysCache principle<a name="fig15658164619166"></a>  
![](figures/global-syscache-principle.png "global-syscache-principle")

## Benefits<a name="section13406743164715"></a>

Global SysCache reduces the cache memory usage of database processes and improves the concurrent expansion capability of a database.

## Description<a name="section16406154310471"></a>

Global SysCache decouples the system cache from sessions and binds them to threads to reduce the memory usage together with the thread pool feature. In addition, it is used to improve the cache hit rate and ensure stable performance.

## Enhancements<a name="section1340684315478"></a>

Supports more concurrent queries.

## Constraints<a name="section06531946143616"></a>

-   Set  **enable\_global\_syscache**  to  **on**. You are advised to set  **enable\_thread\_pool**  to  **on**.
-   When the number of databases is large and the value of  **global\_syscache\_threshold**  is small, memory control cannot work properly and the performance deteriorates.
-   Distributed time series tasks are not supported. The memory control and performance of these tasks are not affected by the GSC feature.
-   If  **wal\_level**  is set to  **minimal**  or  **archive**, the query performance of the standby server deteriorates and short connections are used.

## Dependencies<a name="section8406643144716"></a>

The memory reduction capability of this feature depends on the thread pool feature.

