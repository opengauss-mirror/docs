# Query Native Compilation \[Orange\]<a name="EN-US_TOPIC_0257867385"></a>

## Supported Queries for Lite Execution<a name="en-us_topic_0257720400_section0405145461417"></a>

The following query types are suitable for lite execution:

-   Simple point queries
-   SELECT \(including SELECT for UPDATE\)
-   UPDATE
-   DELETE
-   INSERT query
-   Range UPDATE queries that refer to a full prefix of the primary key
-   Range SELECT queries that refer to a full prefix of the primary key
-   JOIN queries where one or both parts collapse to a point query
-   JOIN queries that refer to a full prefix of the primary key in each joined table

## Unsupported Queries for Lite Execution<a name="en-us_topic_0257720400_section1546482311513"></a>

Any special query attribute disqualifies it for lite execution. In particular, if any of the following conditions hold, then the query is declared as unsuitable for lite execution – for detailed list please see Unsupported Queries for Native Compilation and Lite Execution section. ///VVV link.

It is important to emphasize that in case a query statement does not fit

native compilation and lite execution, no error is reported to the client and the query will still be executed in a normal and standard manner.

For more information about MOT native compilation capabilities, see either the section about  **Using Query Native Compilation**  or a more detailed information in Query Native Compilation \(JIT\).

