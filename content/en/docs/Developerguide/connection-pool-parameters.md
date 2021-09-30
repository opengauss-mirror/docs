# Connection Pool Parameters<a name="EN-US_TOPIC_0289900768"></a>

When a connection pool is used to access the database, database connections are established and then stored in the memory as objects during system running. When you need to access the database, no new connection is established. Instead, an existing idle connection is selected from the connection pool. After you finish accessing the database, the database does not disable the connection but puts it back into the connection pool. The connection can be used for the next access request.

## cache\_connection<a name="en-us_topic_0283137648_en-us_topic_0237124740_en-us_topic_0059778940_s450db879c7f442bba4c36ebf022f7e09"></a>

**Parameter description**: Specifies whether to reclaim the connections of a connection pool.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that the connections of a connection pool will be reclaimed.
-   **off**  indicates that the connections of a connection pool will not be reclaimed.

**Default value**:  **on**

