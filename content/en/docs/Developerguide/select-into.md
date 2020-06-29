# SELECT INTO<a name="EN-US_TOPIC_0242370649"></a>

## Function<a name="en-us_topic_0237122185_en-us_topic_0059779381_s8acfcbcb82b947e08be0c1bb0de2de86"></a>

**SELECT INTO**  defines a new table based on a query result and inserts data obtained by query to the new table.

Different from  **SELECT**, data found by  **SELECT INTO**  is not returned to the client. The table columns have the same names and data types as the output columns of the  **SELECT**.

## Precautions<a name="en-us_topic_0237122185_en-us_topic_0059779381_seabd3b47a66045ed92ad80da65bd79cc"></a>

**CREATE TABLE AS**  provides functions similar to  **SELECT INTO**  in functions and provides a superset of functions provided by  **SELECT INTO**. You are advised to use  **CREATE TABLE AS**, because  **SELECT INTO**  cannot be used in a stored procedure.

## Syntax<a name="en-us_topic_0237122185_en-us_topic_0059779381_s95d36c6f79da4133a55b3776c59d3449"></a>

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    { * | {expression [ [ AS ] output_name ]} [, ...] }
    INTO [ UNLOGGED ] [ TABLE ] new_table
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY expression [, ...] ]
    [ HAVING condition [, ...] ]
    [ WINDOW {window_name AS ( window_definition )} [, ...] ]
    [ { UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]
    [ {FOR { UPDATE | SHARE } [ OF table_name [, ...] ] [ NOWAIT ]} [...] ];
```

## Parameter Description<a name="en-us_topic_0237122185_en-us_topic_0059779381_s5393efdc6e4a42e096e2fd326054418c"></a>

**INTO \[ UNLOGGED \] \[ TABLE \] new\_table**

Specifies that the table is created as an unlogged table. Data written to unlogged tables is not written to the WALs, which makes them considerably faster than ordinary tables. However, they are not crash-safe: an unlogged table is automatically truncated after a crash or unclean shutdown. The contents of an unlogged table are also not replicated to standby servers. Any indexes created on an unlogged table are automatically unlogged as well.

**new\_table**  specifies the name of the new table.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>For details about other** SELECT INTO**  parameters, see  [Parameter Description](select.md#en-us_topic_0237122184_en-us_topic_0059777449_sa812f65b8e8c4c638ec7840697222ddc)  in  **SELECT**.  

## Examples<a name="en-us_topic_0237122185_en-us_topic_0059779381_s895bebf9e3214a0783610d5fc1ad2f31"></a>

```
-- Add the values that are less than 5 in the r_reason_sk field in the tpcds.reason table to the new table.
postgres=# SELECT * INTO tpcds.reason_t1 FROM tpcds.reason WHERE r_reason_sk < 5;
INSERT 0 6

-- Delete the  tpcds.reason_t1 table.
postgres=# DROP TABLE tpcds.reason_t1;
```

## Helpful Links<a name="en-us_topic_0237122185_en-us_topic_0059779381_se82df922609a4e8eb3a6d6a011e508a6"></a>

[SELECT](select.md)

## Suggestions<a name="en-us_topic_0237122185_en-us_topic_0059779381_section21815038152246"></a>

-   **DATABASE**

    You are not advised to reindex a database in a transaction.

-   **SYSTEM**

    You are not advised to reindex system catalogs in transactions.


