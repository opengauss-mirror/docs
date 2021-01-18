# AI Feature Functions<a name="EN-US_TOPIC_0303599451"></a>

-   gs\_index\_advise\(text\)

    Description: Recommends an index for a single query statement.

    Parameter: SQL statement string

    Return type: record

    [Single-query Index Recommendation](en-us_topic_0296549246.md)  describes the examples.

-   hypopg\_create\_index\(text\)

    Description: Creates a virtual index.

    Parameter: character string of the statement for creating an index

    Return type: record

    [Virtual Index](en-us_topic_0296549247.md)  describes the examples.

-   hypopg\_display\_index\(\)

    Description: Displays information about all created virtual indexes.

    **Parameters**: none

    Return type: record

    [Virtual Index](en-us_topic_0296549247.md)  describes the examples.

-   hypopg\_drop\_index\(oid\)

    Description: Deletes a specified virtual index.

    Parameter: OID of the index

    Return type: Boolean

    [Virtual Index](en-us_topic_0296549247.md)  describes the examples.

-   hypopg\_reset\_index\(\)

    Description: Clears all virtual indexes.

    **Parameters**: none

    Return type: none

    [Virtual Index](en-us_topic_0296549247.md)  describes the examples.

-   hypopg\_estimate\_size\(oid\)

    Description: Estimates the space required for creating a specified index.

    Parameter: OID of the index

    Return type: int8

    [Virtual Index](en-us_topic_0296549247.md)  describes the examples.


