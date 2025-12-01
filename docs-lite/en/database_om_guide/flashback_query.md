# Flashback Query<a name="EN-US_TOPIC_0000001178093828"></a>

## Context<a name="section028145412219"></a>

Flashback query enables you to query a snapshot of a table at a certain time point in the past. This feature can be used to view and logically rebuild damaged data that is accidentally deleted or modified. The flashback query is based on the MVCC mechanism. You can retrieve and query the old version to obtain the data of the specified old version.

## Prerequisites<a name="section17975164121712"></a>

-   The  **undo\_retention\_time**  parameter has been set for specifying the retention period of undo logs.

## Syntax<a name="section1489051111232"></a>

```
{[ ONLY ] table_name [ * ] [ partition_clause ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
[ TABLESAMPLE sampling_method ( argument [, ...] ) [ REPEATABLE ( seed ) ] ]
[TIMECAPSULE { TIMESTAMP | CSN } expression ]
|( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
|with_query_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
|function_name ( [ argument [, ...] ] ) [ AS ] alias [ ( column_alias [, ...] | column_definition [, ...] ) ]
|function_name ( [ argument [, ...] ] ) AS ( column_definition [, ...] )
|from_item [ NATURAL ] join_type from_item [ ON join_condition | USING ( join_column [, ...] ) ]}
```

In the syntax tree,  **TIMECAPSULE \{TIMESTAMP | CSN\} expression**  is a new expression for the flashback function.  **TIMECAPSULE**  indicates that the flashback function is used.  **TIMESTAMP**  and  **CSN**  indicate that the flashback function uses specific time point information or commit sequence number \(CSN\) information.

## Parameter Description<a name="section1446502852320"></a>

-   TIMESTAMP
    -   Specifies a history time point of the table data to be queried.


-   CSN
    -   Specifies a logical commit time point of the data in the entire database to be queried. Each CSN in the database represents a consistency point of the entire database. To query the data under a CSN means to query the data related to the consistency point in the database through SQL statements.


## Examples<a name="section128804136369"></a>

-   Example 1:

    ```
    SELECT * FROM t1 TIMECAPSULE TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
    ```

-   Example 2:

    ```
    SELECT * FROM t1 TIMECAPSULE CSN 9617;
    ```

-   Example 3:

    ```
    SELECT * FROM t1 AS t TIMECAPSULE TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
    ```

-   Example 4:

    ```
    SELECT * FROM t1 AS t TIMECAPSULE CSN 9617;
    ```


