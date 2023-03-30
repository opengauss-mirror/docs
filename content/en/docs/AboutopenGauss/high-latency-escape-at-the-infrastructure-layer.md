# High-Latency Escape at the Infrastructure Layer<a name="EN-US_TOPIC_0000001348775901"></a>

## Availability<a name="section41616539"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section39004531"></a>

If the infrastructure layer is abnormal, the database SQL execution latency increases. As a result, the memory or thread pool is overloaded. To deal with this scenario, openGauss provides the automatic escape capability.

## Benefits<a name="section15496459"></a>

When the SQL execution latency increases, sessions are stacked, and the memory or thread pool is overloaded, the database cannot provide services due to exceptions at the infrastructure layer. In this scenario, escape is possible to recover the database so as to provide services within a short period of time.

## Description<a name="section5250404"></a>

-   When the database memory is overloaded, sessions are killed instantly and new connections are forbidden till the memory is recovered to provide services. The memory threshold is specified by the **resilience\_memory\_reject\_percent** GUC parameter. By default, this function is disabled.
-   When the number of stacked sessions in the database reaches the upper limit of the thread pool, sessions are killed instantly and new connections are forbidden till the number of sessions decreases to the acceptable range of the thread pool. Then, services are recovered. The session threshold is specified by the **resilience\_thread\_reject\_cond** GUC parameter. By default, this function is disabled.

## Enhancements<a name="section47253639"></a>

None

## Constraints<a name="section06531946143616"></a>

-   When the escape capability is triggered due to memory or thread pool overload, the sessions of users with the **sysadmin** or **monitoradmin** permission are not cleared.
-   In upgrade mode, this feature is not triggered.

## Dependencies<a name="section22629574"></a>

None
