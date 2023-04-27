# SHOW EVENTS<a name="EN-US_TOPIC_0000001503604049"></a>

## Function<a name="section5400959952"></a>

SHOW EVENTS displays basic information about all scheduled tasks in a specified schema.

## Precautions<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_s5a554e8d15974449b7ffffee772b46f2"></a>

Operations related to scheduled events are supported only when **sql\_compatibility** is set to **'B'**.

## Syntax<a name="section157338176610"></a>

```
SHOW EVENTS
    [{FROM | IN} schema_name]
    [LIKE 'pattern' | WHERE condition]
```

## Parameter Description<a name="section652211111716"></a>

-   \{FROM | IN\} schema\_name

    Specifies the schema to be queried. By default, the current schema is queried.

-   LIKE 'pattern'

    Matches a scheduled task by name. If this parameter is not specified, all scheduled tasks in the current schema are printed.

-   WHERE condition

    Forms an expression for row selection to narrow down the query range of **SHOW EVENTS**. **condition** indicates any expression that returns a value of Boolean type. Rows that do not meet this condition will not be retrieved.


## Examples<a name="section192526392717"></a>

```
--View information about all scheduled tasks queried through pattern matching **'_e'** in the **event_a** schema.
openGauss=# SHOW EVENTS IN event_a LIKE '_e';
```
