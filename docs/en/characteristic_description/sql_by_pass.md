# SQL by pass<a name="EN-US_TOPIC_0000001088566334"></a>

## Availability<a name="section5309649"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section47786844"></a>

Query performance is improved by customizing an execution scheme for typical queries in the TP scenario.

## Benefits<a name="section27428414"></a>

The TP query performance is improved.

## Description<a name="section45529136"></a>

In a typical OLTP scenario, simple queries account for a large proportion. This type of queries involves only single tables and simple expressions. To accelerate such query, the SQL bypass framework is proposed. After simple mode judgment is performed on such query at the parse layer, the query enters a special execution path and skips the classic execution framework, including operator initialization and execution, expression, and projection. Instead, it directly rewrites a set of simple execution paths and directly invokes storage interfaces, greatly accelerating the execution of simple queries.

## Enhancements<a name="section7109043"></a>

None

## Constraints<a name="section06531946143616"></a>

None

## Dependencies<a name="section63981393"></a>

None

