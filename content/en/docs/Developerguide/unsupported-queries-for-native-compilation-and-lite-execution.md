# Unsupported Queries for Native Compilation and Lite Execution<a name="EN-US_TOPIC_0260488095"></a>

-   The query refers to more than two tables
-   The query has any one of the following attributes:
    -   Aggregation on non-primitive types
    -   Window functions
    -   Sub-query sub-links
    -   Distinct-ON modifier \(distinct clause is from DISTINCT ON\)
    -   Recursive \(WITH RECURSIVE was specified\)
    -   Modifying CTE \(has INSERT/UPDATE/DELETE in WITH\)


In addition, the following clauses disqualify a query from lite execution:

-   Returning list
-   Group By clause
-   Grouping sets
-   Having clause
-   Windows clause
-   Distinct clause
-   Sort clause that does not conform to native index order
-   Set operations
-   Constraint dependencies

