# Flashback Table<a name="EN-US_TOPIC_0000001177933862"></a>

## Context<a name="section116901421161613"></a>

Flashback table enables you to restore a table to a specific point in time. When only one table or a group of tables are logically damaged instead of the entire database, this feature can be used to quickly restore the table data. Based on the MVCC mechanism, the flashback table deletes incremental data at a specified time point and after the specified time point and retrieves the data deleted at the specified time point and the current time point to restore table-level data.

## Prerequisites<a name="section17975164121712"></a>

-   The  **undo\_retention\_time**  parameter has been set for specifying the retention period of undo logs.

## Syntax<a name="section510120469162"></a>

```
TIMECAPSULE TABLE table_name TO { TIMESTAMP | CSN } expression
```

## Examples<a name="section20833135217166"></a>

```
TIMECAPSULE TABLE t1 TO TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
TIMECAPSULE TABLE t1 TO CSN 9617;
```

