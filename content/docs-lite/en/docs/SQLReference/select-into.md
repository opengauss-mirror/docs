# SELECT INTO<a name="EN-US_TOPIC_0289900598"></a>

## Function<a name="en-us_topic_0283137419_en-us_topic_0237122185_en-us_topic_0059779381_s8acfcbcb82b947e08be0c1bb0de2de86"></a>

- SELECT INTO ***new_table*** defines a new table based on a query result and inserts data obtained by query to the new table. Different from **SELECT**, data found by **SELECT INTO** is not returned to the client. The table columns have the same names and data types as the output columns of the **SELECT**.


- SELECT INTO ***var_list*** assigns the query result to the target variable. ***var_list*** can be a user-defined variable, a parameter of a stored procedure or function, or a local variable of a stored program.


​		Note: If *var_list* is a parameter of a stored procedure, function, or local variable of a stored program, see the syntax in [Stored Procedures](stored-procedures.md). The following describes the scenarios where variables are defined by users.

## Precautions<a name="en-us_topic_0283137419_en-us_topic_0237122185_en-us_topic_0059779381_seabd3b47a66045ed92ad80da65bd79cc"></a>

- **CREATE TABLE AS** provides functions similar to SELECT INTO ***new_table*** in functions and provides a superset of functions provided by SELECT INTO ***new_table***. You are advised to use **CREATE TABLE AS**, because SELECT INTO ***new_table*** cannot be used in a stored procedure.


- In SELECT INTO ***var_list***, only one row of the select query result can be returned. If there are multiple rows, use **limit 1** to restrict the number of rows. Otherwise, an error is reported. The number of returned columns must be the same as the number of variables. Otherwise, an error is reported.


## Syntax<a name="en-us_topic_0283137419_en-us_topic_0237122185_en-us_topic_0059779381_s95d36c6f79da4133a55b3776c59d3449"></a>

- SELECT INTO ***new_table*** syntax


```
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    { * | {expression [ [ AS ] output_name ]} [, ...] }
    INTO [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] [ TABLE ] new_table
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY grouping_element [, ...] ]
    [ HAVING condition [, ...] ]
    [ WINDOW {window_name AS ( window_definition )} [, ...] ]
    [ { UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]
    [ {FOR { UPDATE | SHARE } [ OF table_name [, ...] ] [ NOWAIT |WAIT N]} [...] ];
```

- SELECT INTO ***var_list*** syntax


```
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [/*+ plan_hint */] [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    { * | {expression [ [ AS ] output_name ]} [, ...] }
    [into_option]
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ [ START WITH condition ] CONNECT BY [NOCYCLE] condition [ ORDER SIBLINGS BY expression ] ]
    [ GROUP BY grouping_element [, ...] ]
    [ HAVING condition [, ...] ]
    [ WINDOW {window_name AS ( window_definition )} [, ...] ]
    [ { UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
    [ LIMIT { [offset,] count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]
    [into_option]
    [ {FOR { UPDATE | NO KEY UPDATE | SHARE | KEY SHARE } [ OF table_name [, ...] ] [ NOWAIT | WAIT N ]} [...] ];
    [into_option]
```

## Parameter Description<a name="en-us_topic_0283137419_en-us_topic_0237122185_en-us_topic_0059779381_s5393efdc6e4a42e096e2fd326054418c"></a>

-   **new\_table**

    **new\_table** specifies the name of the new table.


-   **UNLOGGED**

    Specifies that the table is created as an unlogged table. Data written to unlogged tables is not written to the WALs, which makes them considerably faster than ordinary tables. However, they are not crash-safe: an unlogged table is automatically truncated after a crash or unclean shutdown. Contents of an unlogged table are also not replicated to standby servers. Any indexes created on an unlogged table are automatically unlogged as well.

    -   Usage scenario: Unlogged tables do not ensure data security. Users can back up data before using unlogged tables; for example, users should back up the data before a system upgrade.
    -   Troubleshooting: If data is missing in the indexes of unlogged tables due to some unexpected operations such as an unclean shutdown, users should re-create the indexes with errors.


-   **GLOBAL | LOCAL**

    When creating a temporary table, you can specify the **GLOBAL** or **LOCAL** keyword before **TEMP** or **TEMPORARY**. If the keyword **GLOBAL** is specified, openGauss creates a global temporary table. Otherwise, openGauss creates a local temporary table.

-   **TEMPORARY | TEMP**

    If **TEMP** or **TEMPORARY** is specified, the created table is a temporary table. Temporary tables are classified into global temporary tables and local temporary tables. If the keyword **GLOBAL** is specified when a temporary table is created, the table is a global temporary table. Otherwise, the table is a local temporary table.

    The metadata of the global temporary table is visible to all sessions. After the sessions end, the metadata still exists. The user data, indexes, and statistics of a session are isolated from those of another session. Each session can only view and modify the data submitted by itself. Global temporary tables have two schemas. In session-based ON COMMIT PRESERVE ROWS schema, user data is automatically cleared when a session ends. In transaction-based ON COMMIT DELETE ROWS schema, user data is automatically cleared when the commit or rollback operation is performed. If the **ON COMMIT** option is not specified during table creation, the session-based schema is used by default. Different from local temporary tables, you can specify a schema that does not start with **pg\_temp\_** when creating a global temporary table.

    A local temporary table is automatically deleted at the end of the current session. Therefore, temporary tables can still be created and used in the current session when the database node connected to the current session is faulty. Temporary tables are created only in the current session. If a DDL statement involves operations on temporary tables, a DDL error will be generated. Therefore, you are not advised to perform operations on temporary tables in DDL statements. **TEMP** is equivalent to **TEMPORARY**.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >
    >-   Local temporary tables are visible to the current session through the schema starting with **pg\_temp**. Users should not delete schemas starting with **pg\_temp** or **pg\_toast\_temp**.
    >-   If **TEMPORARY** or **TEMP** is not specified when you create a table but its schema is set to that starting with **pg\_temp\_** in the current session, the table will be created as a temporary table.
    >-   If global temporary tables and indexes are being used by other sessions, do not perform **ALTER** or **DROP**.
    >-   The DDL of a global temporary table affects only the user data and indexes of the current session. For example, **TRUNCATE**, **REINDEX**, and **ANALYZE** are valid only for the current session.

- **into_option**
    -   The INTO statement can appear in three positions. A SELECT statement can contain only one INTO clause.
    -   User-defined variables can be correctly identified only when the database is a B-compatible database and the GUC parameter **enable\_set\_variable\_b\_format** is set to **on**.
    into_option: { INTO var_name [, var_name] ... }

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>For details about other **SELECT INTO** parameters, see [Parameter Description](select.md#en-us_topic_0283136463_en-us_topic_0237122184_en-us_topic_0059777449_sa812f65b8e8c4c638ec7840697222ddc) in SELECT.content\zh\docs\Developerguide\SELECT-INTO.md
>
>For details about the **var\_name** parameter, see the description of [var\_name](..\Developerguide\set.md).

## Examples<a name="en-us_topic_0283137419_en-us_topic_0237122185_en-us_topic_0059779381_s895bebf9e3214a0783610d5fc1ad2f31"></a>

```
--Add the values that are less than 5 in the r_reason_sk field in the tpcds.reason table to the new table.
openGauss=# SELECT * INTO tpcds.reason_t1 FROM tpcds.reason WHERE r_reason_sk < 5;
INSERT 0 6

--Delete the tpcds.reason_t1 table.
openGauss=# DROP TABLE tpcds.reason_t1;

--Three positions of SELECT INTO varlist
openGauss=# SELECT * INTO @my_var FROM t;
SELECT INTO
openGauss=# SELECT * FROM t INTO @my_var FOR UPDATE;
SELECT INTO
openGauss=# SELECT * FROM t FOR UPDATE INTO @my_var;
SELECT INTO

--Error scenario:
openGauss=# select * from t into @aa;
ERROR:  select result consisted of more than one row
openGauss=# select * from t limit 1 into @aa,@bb;
ERROR:  number of variables must equal the number of columns
```

## Helpful Links<a name="en-us_topic_0283137419_en-us_topic_0237122185_en-us_topic_0059779381_se82df922609a4e8eb3a6d6a011e508a6"></a>

[SELECT](select.md)

## Suggestions<a name="en-us_topic_0283137419_en-us_topic_0237122185_en-us_topic_0059779381_section21815038152246"></a>

-   **DATABASE**

    You are not advised to re-index a database in a transaction.

-   **SYSTEM**

    You are not advised to re-index system catalogs in transactions.
