# Connection Pool Parameters<a name="EN-US_TOPIC_0289900768"></a>

When a connection pool is used to access the database, database connections are established and then stored in the memory as objects during system running. When you need to access the database, no new connection is established. Instead, an existing idle connection is selected from the connection pool. After you finish accessing the database, the database does not disable the connection but puts it back into the connection pool. The connection can be used for the next access request.

## pooler\_maximum\_idle\_time<a name="en-us_topic_0283137648_en-us_topic_0237124740_section0388813204"></a>

**Parameter description**: Specifies the maximum amount of time that the connections can remain idle in a pool before being removed. After that, the automatic connection clearing mechanism is triggered to reduce the number of connections on each node to the value of  **minimum\_pool\_size**.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This parameter does not take effect in this version.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to  _INT\_MAX_. The smallest unit is m.

**Default value**:  **1h**  \(60 minutes\)

## minimum\_pool\_size<a name="en-us_topic_0283137648_en-us_topic_0237124740_section16829755181011"></a>

**Parameter description**: Specifies the minimum number of remaining connections in the pool on each node after the automatic connection clearing is triggered. If this parameter is set to  **0**, the automatic connection clearing is disabled.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This parameter does not take effect in this version.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 1 to 65535

**Default value**:  **200**

## cache\_connection<a name="en-us_topic_0283137648_en-us_topic_0237124740_en-us_topic_0059778940_s450db879c7f442bba4c36ebf022f7e09"></a>

**Parameter description**: Specifies whether to reclaim the connections of a connection pool.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that the connections of a connection pool will be reclaimed.
-   **off**  indicates that the connections of a connection pool will not be reclaimed.

**Default value**:  **on**

