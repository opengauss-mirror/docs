# Adaptive Plan Selection<a name="EN-US_TOPIC_0000001372795033"></a>

## Availability<a name="section1420315335481"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section18982185114134"></a>

This feature triggers plan selection based on the base table condition selection rate, and provides cache multi-plan management and adaptive selection for queries that use partial indexes and offsets. In typical scenarios, the query throughput can be improved by several times.

## Benefits<a name="section1160749171918"></a>

Users can maintain multiple cache plans to adapt to different query parameters, improving query execution performance.

## Description<a name="section165492040132317"></a>

Adaptive plan selection applies to scenarios where a general cache plan is used for plan execution. Cache plan exploration is performed by using range linear expansion, and plan selection is performed by using range coverage matching. Adaptive plan selection makes up for the performance problem caused by the traditional single cache plan that cannot change according to the query condition parameter, and avoids frequent calling of query optimization.

## Enhancements<a name="section818524702617"></a>

None

## Constraints<a name="section13678185110268"></a>

-   Database services are running properly.
-   Users have logged in to the database.
-   Users have created a database and data table, and have imported data.

## Dependencies<a name="section11899817102719"></a>

It depends on the plan cache function in the database.
