# DROP EVENT<a name="EN-US_TOPIC_0000001503113597"></a>

## Function<a name="section5400959952"></a>

DROP EVENT deletes a scheduled task.

## Precautions<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_s5a554e8d15974449b7ffffee772b46f2"></a>

Operations related to scheduled events are supported only when **sql\_compatibility** is set to **'B'**.

## Syntax<a name="section157338176610"></a>

```
DROP EVENT [IF EXISTS] event_name
```

## Parameter Description<a name="section652211111716"></a>

-   IF EXISTS

    If the scheduled task does not exist, a NOTICE message is displayed.

-   name

    Name of the scheduled task to be deleted.


## Examples<a name="section192526392717"></a>

```
openGauss=# DROP EVENT event_e1;
```
