# PREPARE<a name="EN-US_TOPIC_0289900196"></a>

## Function<a name="en-us_topic_0283137580_en-us_topic_0237122171_en-us_topic_0059778631_s73bdfafa6f9743e9a9e0a4f7b40cc2c2"></a>

**PREPARE**  creates a prepared statement.

A prepared statement is a performance optimizing object on the server. When the  **PREPARE**  statement is executed, the specified query is parsed, analyzed, and rewritten. When  **EXECUTE**  is executed, the prepared statement is planned and executed. This avoids repetitive parsing and analysis. After the  **PREPARE **statement is created, it exists throughout the database session. Once it is created \(even if in a transaction block\), it will not be deleted when a transaction is rolled back. It can only be deleted by explicitly invoking  [DEALLOCATE](deallocate.md)  or automatically deleted when the session ends.

## Precautions<a name="en-us_topic_0283137580_en-us_topic_0237122171_en-us_topic_0059778631_s241a4288629344c38e10c79ec40b39f8"></a>

None

## Syntax<a name="en-us_topic_0283137580_en-us_topic_0237122171_en-us_topic_0059778631_sf8edb0f958e14e4f9f6e68dd67c64c6b"></a>

```
PREPARE name [ ( data_type [, ...] ) ] AS statement;
```

## Parameter Description<a name="en-us_topic_0283137580_en-us_topic_0237122171_en-us_topic_0059778631_se1710433f9c54ff7b687d23534316d63"></a>

-   **name**

    Specifies the name of a prepared statement. It must be unique in the session.

-   **data\_type**

    Specifies the type of an argument.

-   **statement**

    Specifies a  **SELECT**,  **INSERT**,  **UPDATE**,  **DELETE**,  **MERGE INTO**, or  **VALUES**  statement.


## Examples<a name="en-us_topic_0283137580_en-us_topic_0237122171_en-us_topic_0059778631_s7efb6d3c532445a8a87cf6dee4c7181d"></a>

See  [Examples](execute.md#en-us_topic_0283137468_en-us_topic_0237122161_en-us_topic_0059777447_s8a46083a59d940c3aaa2535b2f783645)  in  **EXECUTE**.

## Helpful Links<a name="en-us_topic_0283137580_en-us_topic_0237122171_section1690451517271"></a>

[DEALLOCATE](deallocate.md)

