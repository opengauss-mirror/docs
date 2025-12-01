# Row-Store Execution to Vectorized Execution<a name="EN-US_TOPIC_0000001265287497"></a>

## Availability<a name="section15406143204715"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section740615433477"></a>

Row-store table queries are converted into vectorized execution plans for execution, improving the execution performance of complex queries.

## Benefits<a name="section13406743164715"></a>

When processing row-store table queries, the executor has poor performance when executing complex queries that include many expressions or join operations, while the vectorized executor has excellent performance when executing complex queries. Therefore, query performance of complex queries can be effectively improved by converting row-store table execution into vectorized execution.

## Description<a name="section16406154310471"></a>

This feature adds a RowToVec operation to scan operators. After the data in the row-store table is converted into the vectorized format in the memory, the upper-layer operators can be converted into vectorized operators. In this way, the vectorized executor can be used for calculation. Scan operators that support this conversion include SeqScan, IndexOnlyscan, IndexScan, BitmapScan, FunctionScan, ValueScan and TidScan.

## Enhancements<a name="section1340684315478"></a>

None.

## Constraints<a name="section06531946143616"></a>

-   Vectorization is not supported in the following scenarios:
    -   The targetList contains a function that returns set.
    -   The targetList or qual contains expressions that do not support vectorization, such as array expressions, multi-subquery expressions, field expressions, and system catalog columns.
    -   The following types do not support vectorization: POINTOID, LSEGOID, BOXOID, LINEOID, CIRCLEOID, POLYGONOID, PATHOID, and user-defined types.

-   MOTs do not support vectorization.

## Dependencies<a name="section8406643144716"></a>

Vectorized executor

