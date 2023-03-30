# Materialized View<a name="EN-US_TOPIC_0000001088566338"></a>

## Availability<a name="section1136213124018"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section31192232416"></a>

A materialized view is a special physical table, which is relative to a common view. A common view is a virtual table and has many application limitations. Any query on a view is actually converted into a query on an SQL statement, and performance is not actually improved. The materialized view actually stores the results of the statements executed by the SQL statement, and is used to cache the results.

## Benefits<a name="section747141119423"></a>

The materialized view function is used to improve query efficiency.

## Description<a name="section1796166174315"></a>

Full materialized views and incremental materialized views are supported. Full materialized views can only be updated in full mode. Incremental materialized views can be updated asynchronously. You can run statements to update new data to materialized views.

## Enhancements<a name="section18965647194512"></a>

None

## Constraints<a name="section1575615618465"></a>

Only simple filter queries and UNION ALL statements are supported for base tables.

## Dependencies<a name="section2535204364616"></a>

None

