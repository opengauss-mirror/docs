# SELECT HINT<a name="EN-US_TOPIC_0000001096400532"></a>

## Function<a name="section290819468377"></a>

SELECT HINT sets GUC parameters related to query optimization that take effect during the query execution. This section describes the enhanced SELECT HINT syntax of Dolphin. For details about the hints supported by the kernel, see [Plan Hint Optimization](../PerformanceTuningGuide/plan-hint-optimization).

## Syntax<a name="section530131664410"></a>

```
set_var(param = value)
```

## Parameters<a name="section41303128143838"></a>


-   **param**

    Parameter name.

    Currently, the following parameters can be set and take effect by using hints:
    -   Boolean

        enable\_bitmapscan, enable\_hashagg, enable\_hashjoin, enable\_indexscan, enable\_indexonlyscan, enable\_material, enable\_mergejoin, enable\_nestloop, enable\_index\_nestloop, enable\_seqscan, enable\_sort, enable\_tidscan, partition\_iterator\_elimination, partition\_page\_estimation, enable\_functional\_dependency, var\_eq\_const\_selectivity,

    -   Integer

        query\_dop

    -   Floating point

        cost\_weight\_index, default\_limit\_rows, seq\_page\_cost, random\_page\_cost, cpu\_tuple\_cost, cpu\_index\_tuple\_cost, cpu\_operator\_cost, effective\_cache\_size
        
    -   Enumeration
    
        try_vector_engine_strategy

    -   Character string

        dolphin.optimizer\_switch

-   **value**

    Value of a parameter.
