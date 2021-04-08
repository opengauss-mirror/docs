# CBO Optimizer<a name="EN-US_TOPIC_0000001088278192"></a>

## Availability<a name="section3480125215575"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section5814521587"></a>

The openGauss optimizer is cost-based optimization \(CBO\).

## Benefits<a name="section148987345811"></a>

The openGauss CBO optimizer can select the most efficient execution plan among multiple plans based on the cost to meet customer service requirements to the maximum extent.

## Description<a name="section117041846581"></a>

By using CBO, the database calculates the number of tuples and the execution cost for each step under each execution plan based on the number of table tuples, column width, null record ratio, and characteristic values, such as distinct, MCV, and HB values, and certain cost calculation methods. The database then selects the execution plan that takes the lowest cost for the overall execution or for the return of the first tuple.

## Enhancements<a name="section21149265913"></a>

None

## Constraints<a name="section51513617597"></a>

None

## Dependencies<a name="section20491151513592"></a>

None

