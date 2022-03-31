# SELECT<a name="EN-US_TOPIC_0289900232"></a>

## Function<a name="en-us_topic_0283136463_en-us_topic_0237122184_en-us_topic_0059777449_s65596fb5f1d44a428e41dd508d2044a7"></a>

**SELECT**  retrieves data from a table or view.

Serving as an overlaid filter for a database table,  **SELECT**  filters required data from the table using SQL keywords.

## Precautions<a name="en-us_topic_0283136463_en-us_topic_0237122184_en-us_topic_0059777449_s42c37979749545719ac9114594f45d93"></a>

-   The owner of a table, users granted with the  **SELECT**  permission on the table, or users granted with the  **SELECT ANY TABLE**  permission can read data in the table or view. The system administrator has the permission to read data in the table or view by default.
-   You must have the  **SELECT**  permission on each field used in the SELECT statement.

-   The use of  **FOR UPDATE**,  **FOR NO KEY UPDATE**,  **FOR SHARE**, or  **FOR KEY SHARE**  also requires the  **UPDATE**  permission.

## Syntax<a name="en-us_topic_0283136463_en-us_topic_0237122184_en-us_topic_0059777449_sb7329222602d46fe944bf6c300931dd2"></a>

-   Query data.

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [/*+ plan_hint */] [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
{ * | {expression [ [ AS ] output_name ]} [, ...] }
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
[ {FOR { UPDATE | NO KEY UPDATE | SHARE | KEY SHARE } [ OF table_name [, ...] ] [ NOWAIT | WAIT N ]} [...] ];
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In condition and expression, you can use the aliases of expressions in  **targetlist**  in compliance with the following rules:
>-   Reference only within the same level.
>-   Only reference aliases in  **targetlist**.
>-   Reference a prior expression in a subsequent expression.
>-   The  **volatile**  function cannot be used.
>-   The  **Window**  function cannot be used.
>-   Aliases cannot be referenced in the  **join on**  condition.
>-   An error is reported if  **targetlist**  contains multiple referenced aliases.

-   The subquery  **with\_query**  is as follows:

    ```
    with_query_name [ ( column_name [, ...] ) ]
        AS [ [ NOT ] MATERIALIZED ] ( {select | values | insert | update | delete} )
    ```

-   The specified query source  **from\_item**  is as follows:

    ```
    {[ ONLY ] table_name [ * ] [ partition_clause ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
    [ TABLESAMPLE sampling_method ( argument [, ...] ) [ REPEATABLE ( seed ) ] ]
    [ TIMECAPSULE {TIMESTAMP | CSN} expression ]
    |( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
    |with_query_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
    |function_name ( [ argument [, ...] ] ) [ AS ] alias [ ( column_alias [, ...] | column_definition [, ...] ) ]
    |function_name ( [ argument [, ...] ] ) AS ( column_definition [, ...] )
    |from_item [ NATURAL ] join_type from_item [ ON join_condition | USING ( join_column [, ...] ) ]}
    ```

-   The  **group**  clause is as follows:

    ```
    ( )
    | expression
    | ( expression [, ...] )
    | ROLLUP ( { expression | ( expression [, ...] ) } [, ...] )
    | CUBE ( { expression | ( expression [, ...] ) } [, ...] )
    | GROUPING SETS ( grouping_element [, ...] )
    ```

-   The specified partition  **partition\_clause**  is as follows:

    ```
    PARTITION { ( partition_name ) | FOR (  partition_value [, ...] ) } |
    SUBPARTITION { ( subpartition_name ) | FOR (  subpartition_value [, ...] )}
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The specified partition applies only to partitioned tables.

-   The sorting order  **nlssort\_expression\_clause**  is as follows:

    ```
    NLSSORT ( column_name, ' NLS_SORT = { SCHINESE_PINYIN_M | generic_m_ci } ' )
    The second parameter can be generic_m_ci, which supports only the case-insensitive order for English characters.
    ```

-   Simplified query syntax, equivalent to  **select \* from table\_name**.

    ```
    TABLE { ONLY {(table_name)| table_name} | table_name [ * ]};
    ```


## Parameter Description<a name="en-us_topic_0283136463_en-us_topic_0237122184_en-us_topic_0059777449_sa812f65b8e8c4c638ec7840697222ddc"></a>

-   **WITH \[ RECURSIVE \] with\_query \[, ...\]**

    Specifies one or more subqueries that can be referenced by name in the main query, which is equivalent to a temporary table.

    If  **RECURSIVE**  is specified, it allows a  **SELECT**  subquery to reference itself by name.

    The detailed format of  **with\_query**  is as follows:  **with\_query\_name \[ \( column\_name \[, ...\] \) \] AS \[ \[ NOT \] MATERIALIZED \] \( \{select | values | insert | update | delete\} \)**

    -   **with\_query\_name**  specifies the name of the result set generated by a subquery. Such names can be used to access the result sets of subqueries in a query.
    -   **column\_name**  specifies the column name displayed in the subquery result set.
    -   Each subquery can be a  **SELECT**,  **VALUES**,  **INSERT**,  **UPDATE**  or  **DELETE**  statement.
    -   You can use  **MATERIALIZED**  or  **NOT MATERIALIZED**  to modify the CTE.
        -   If  **MATERIALIZED**  is specified, the WITH query will be materialized, and a copy of the subquery result set is generated. The copy is directly queried at the reference point. Therefore, the WITH subquery cannot be jointly optimized with the SELECT statement trunk \(for example, predicate pushdown and equivalence class transfer\). In this scenario, you can use  **NOT MATERIALIZED**  for modification. If the WITH query can be executed as a subquery inline, the preceding optimization can be performed.
        -   If the user does not explicitly declare the materialized attribute, comply with the following rules: If the CTE is referenced only once in the SELECT statement trunk to which it belongs and semantically supports inline execution, it will be rewritten as subquery inline execution. Otherwise, the materialized execution will be performed in CTE Scan mode.


-   **plan\_hint**  clause

    Follows the  **SELECT**  keyword in the  **/\*+**<_Plan hint_\>** \*/**  format. It is used to optimize the plan of a  **SELECT**  statement block. For details, see  [Hint-based Tuning](hint-based-tuning.md). In each statement, only the first  **/\*+** _plan\_hint _**\*/**  comment block takes effect as a hint. Multiple hints can be written.

-   **ALL**

    Specifies that all rows that meet the conditions are returned. This is the default behavior and can be omitted.

-   **DISTINCT \[ ON \( expression \[, ...\] \) \]**

    Removes all duplicate rows from the  **SELECT**  result set so one row is kept from each group of duplicates.

    Retains only the first row in the set of rows that have the same result calculated on the given expression.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >**DISTINCT ON**  expression is explained with the same rule of  **ORDER BY**. Unless you use  **ORDER BY**  to guarantee that the required row appears first, you cannot know what the first row is.

-   **SELECT list**

    Specifies the name of a column in the table to be queried. The value can be a part of the column name or all of the column names. The wildcard \(\*\) is used to represent the column name.

    You may use the  **AS output\_name**  clause to give an alias for an output column. The alias is used for the displaying of the output column. The name, value, and type keywords can be used as column aliases.

    Column names can be expressed in the following formats:

    -   Manually input column names which are spaced using commas \(,\).
    -   Columns computed in the  **FROM**  clause.

-   **FROM clause**

    Specifies one or more source tables for  **SELECT**.

    The  **FROM**  clause can contain the following elements:

    -   table\_name

        Specifies the name of a table or view. The schema name can be added before the table name or view name, for example, schema\_name.table\_name.

    -   alias

        Gives a temporary alias to a table to facilitate the quotation by other queries.

        An alias is used for brevity or to eliminate ambiguity for self-joins. If an alias is provided, it completely hides the actual name of the table.

    -   TABLESAMPLE  _sampling\_method_  \(  _argument_  \[, ...\] \) \[ REPEATABLE \(  _seed_  \) \]

        The  **TABLESAMPLE**  clause following  _table\_name_  specifies that the specified  _sampling\_method_  should be used to retrieve the subset of rows in the table.

        The optional  **REPEATABLE**  clause specifies the number of seeds used to generate random numbers in the sampling method. The seed value can be any non-null constant value. If the table was not changed during the query, the two queries having the same seed and  _argument_  values will select the same sampling in this table. However, different seed values usually generate different samples. If  **REPEATABLE**  is not specified, a new random sample will be selected for each query based on the seed generated by the system.

    -   TIMECAPSULE \{ TIMESTAMP | CSN \} expression

        Queries the table data of a specified CSN or at a specified time point.

        Currently, the following tables do not support flashback query: system catalogs, column-store tables, memory tables, DFS tables, global temporary tables, local temporary tables, unlogged tables, views, sequence tables, hash bucket tables, shared tables, inherited tables, and tables with the  **PARTIAL CLUSTER KEY**  constraint.

        -   TIMECAPSULE TIMESTAMP

            Searches for the result set of a specified time point based on the date as the flashback query flag.  _date_  must be a valid past timestamp

        -   TIMECAPSULE CSN

            Searches for the result set of a specified CSN point based on the CSN flashback of the table as the flashback query flag. The CSN can be obtained from  **snpcsn**  recorded in  **gs\_txn\_snapshot**.

            >![](public_sys-resources/icon-note.gif) **NOTE:** 
            >-   A flashback query cannot span statements that affect the table structure or physical storage. Otherwise, an error is reported. Between the flashback point and the current point, if a statement \(**DDL**,  **DCL**, or  **VACUUM FULL**\) has been executed to modify the table structure or affect physical storage, the flashback fails.
            >-   When the flashback point is too old, the old version cannot be obtained because the flashback version is recycled. As a result, the flashback fails and the error message "Restore point too old" is displayed.
            >-   The flashback point is specified by time. The maximum difference between the flashback point and the actual time is 3 seconds.
            >-   After truncating a table, perform a flashback query or flashback on the table. The error message "Snapshot too old" is displayed when a flashback is performed at a specified time point. Data cannot be found or the error message "Snapshot too old" is reported during the CSN-based flashback.


    -   column\_alias

        Specifies the column alias.

    -   PARTITION

        Queries data in the specified partition in a partitioned table.

    -   partition\_name

        Specifies the name of a partition.

    -   partition\_value

        Specifies the value of the specified partition key. If there are many partition keys, use the  **PARTITION FOR**  clause to specify the value of the only partition key you want to use.

    -   SUBPARTITION

        Queries data in the specified level-2 partition in a partitioned table.

    -   subpartition\_name

        Specifies the name of a level-2 partition name.

    -   subpartition\_value

        Specifies the key values of specified level-1 and level-2 partitions. The values of the two partition keys specified by the  **SUBPARTITION FOR**  clause uniquely identify a level-2 partition.

    -   subquery

        Performs a subquery in the  **FROM**  clause. A temporary table is created to save subquery results.

    -   with\_query\_name

        Specifies that the  **WITH**  clause can also be used as the source of the  **FROM**  clause and can be referenced by the name of the  **WITH**  query.

    -   function\_name

        Function name. Function calls can appear in the  **FROM**  clause.

    -   join\_type

        The options are as follows:

        -   \[ INNER \] JOIN

            A  **JOIN**  clause combines two  **FROM**  items. You can use parentheses to determine the order of nesting. In the absence of parentheses,  **JOIN**  nests left-to-right.

            In any case,  **JOIN**  binds more tightly than the commas separating  **FROM**  items.

        -   LEFT \[ OUTER \] JOIN

            Returns all rows that meet join conditions in the Cartesian product, plus those rows that do not match the right table rows in the left table by join conditions. This left-hand row is extended to the full width of the joined table by inserting  **NULL**  values for the right-hand columns. Note that only the  **JOIN**  clause's own condition is considered while the system decides which rows have matches. Outer conditions are applied afterward.

        -   RIGHT \[ OUTER \] JOIN

            Returns all the joined rows, plus one row for each unmatched right-hand row \(extended with  **NULL**  on the left\).

            This is just a notational convenience, since you could convert it to a  **LEFT OUTER JOIN**  by switching the left and right inputs.

        -   FULL \[ OUTER \] JOIN

            Returns all the joined rows, pluses one row for each unmatched left-hand row \(extended with  **NULL**  on the right\), and pluses one row for each unmatched right-hand row \(extended with  **NULL**  on the left\).

        -   CROSS JOIN

            Is equivalent to  **INNER JOIN ON \(TRUE\)**, which means no rows are removed by qualification. These join types are just a notational convenience, since they do nothing you could not do with plain  **FROM**  and  **WHERE**.

            >![](public_sys-resources/icon-note.gif) **NOTE:** 
            >For the  **INNER**  and  **OUTER**  join types, a join condition must be specified, namely exactly one of  **NATURAL ON**,  **join\_condition**, or  **USING \(join\_column \[, ...\]\)**. For  **CROSS JOIN**, none of these clauses can appear.


        **CROSS JOIN**  and  **INNER JOIN**  produce a simple Cartesian product, the same result as you get from listing the two items at the top level of  **FROM**.

    -   ON join\_condition

        Defines which rows have matches in joins. Example: ON left\_table.a = right\_table.a You are not advised to use numeric types such as int for  **join\_condition**, because such types can be implicitly converted to bool values \(non-zero values are implicitly converted to  **true**  and  **0**  is implicitly converted to  **false**\), which may cause unexpected results.

    -   USING\(join\_column\[, ...\]\)

        Abbreviation of  **ON left\_table.a = right\_table.a AND left\_table.b = right\_table.b ....**. The names of the corresponding columns must be the same.

    -   NATURAL

        Is a shorthand for a  **USING**  list that mentions all columns in the two tables that have the same names.

    -   from item

        Specifies the name of the query source object connected.


-   **WHERE clause**

    Forms an expression for row selection to narrow down the query range of  **SELECT**.  **condition**  indicates any expression that returns a value of Boolean type. Rows that do not meet this condition will not be retrieved. You are not advised to use numeric types such as int for  **condition**, because such types can be implicitly converted to bool values \(non-zero values are implicitly converted to  **true**  and  **0**  is implicitly converted to  **false**\), which may cause unexpected results.

    In the  **WHERE**  clause, you can use the operator \(+\) to convert a table join to an outer join. However, this method is not recommended because it is not the standard SQL syntax and may raise syntax compatibility issues during platform migration. There are many restrictions on using the operator \(+\):

    1.  It can appear only in the  **WHERE**  clause.
    2.  If a table join has been specified in the  **FROM**  clause, the operator \(+\) cannot be used in the  **WHERE**  clause.
    3.  The operator \(+\) can work only on columns of tables or views, instead of on expressions.
    4.  If table A and table B have multiple join conditions, the operator \(+\) must be specified in all the conditions. Otherwise, the operator \(+\) will not take effect, and the table join will be converted into an inner join without any prompt information.
    5.  Tables specified in a join condition where the operator \(+\) works cannot cross queries or subqueries. If tables where the operator \(+\) works are not in the  **FROM**  clause of the current query or subquery, an error will be reported. If a peer table for the operator \(+\) does not exist, no error will be reported and the table join will be converted into an inner join.
    6.  Expressions where the operator \(+\) is used cannot be directly connected through  **OR**.
    7.  If a column where the operator \(+\) works is compared with a constant, the expression becomes a part of the join condition.
    8.  A table cannot have multiple foreign tables.
    9.  The operator \(+\) can appear only in the following expressions: comparison, NOT, ANY, ALL, IN, NULLIF, IS DISTINCT FROM, and IS OF. It is not allowed in other types of expressions. In addition, these expressions cannot be connected through  **AND**  or  **OR**.
    10. The operator \(+\) can be used to convert a table join only to a left or right outer join, instead of a full join. That is, the operator \(+\) cannot be specified on both tables of an expression.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >For the  **WHERE**  clause, if special character  **%**,  **\_**, or  **\\**  is queried in  **LIKE**, add the slash  **\\**  before each character.

-   **START WITH clause**

    The  **START WITH**  clause is usually used together with the  **CONNECT BY**  clause and indicates the initial condition of recursion. Data is traversed recursively and hierarchically. If this clause is omitted and the  **CONNECT BY**  clause is used alone, all rows in the table are used as the initial set.

-   **CONNECT BY clause**

    **CONNECT BY**  indicates the recursive join condition. In the  **CONNECT BY**  condition, you can specify the  **PRIOR**  keyword for a column, indicating that the column is used as the recursive key for recursion. The  **PRIOR**  keyword can be specified only for columns in the table and cannot be specified for expressions or type conversion. If  **NOCYCLE**  is added before a recursive join condition, recursion stops when a circular record is encountered. \(Note: A SELECT statement containing the  **START WITH .. CONNECT BY**  clause does not support the FOR SHARE or UPDATE lock.\)

-   **ORDER SIBLINGS BY**  clause

    The  **ORDER SIBLINGS BY**  clause is usually used together with the  **START WITH**  and  **CONNECT BY**  clauses. The usage of the  **ORDER SIBLINGS BY**  clause is the same as that of the  **ORDER BY**  clause and is used in hierarchical ordering during recursion.

-   **GROUP BY clause**

    Condenses query results into a single row all selected rows that share the same values for the grouped expressions.

    -   CUBE \( \{ expression | \( expression \[, ...\] \) \} \[, ...\] \)

        A CUBE grouping is an extension to the  **GROUP BY**  clause that creates subtotals for all of the possible combinations of the given list of grouping columns \(or expressions\). In terms of multidimensional analysis, CUBE generates all the subtotals that could be calculated for a data cube with the specified dimensions. For example, given three expressions \(n=3\) in the CUBE clause, the operation results in 2<sup>n</sup>  = 2<sup>3</sup>  = 8 groupings. Rows grouped on the values of  _n_  expressions are called regular rows, and the rest are called superaggregate rows.

    -   GROUPING SETS \( grouping\_element \[, ...\] \)

        Another extension to the  **GROUP BY**  clause. It allows users to specify multiple  **GROUP BY**  clauses. This improves efficiency by trimming away unnecessary data. After you specify the set of groups that you want to create using a  **GROUPING SETS**  expression within a  **GROUP BY**  clause, the database does not need to compute a whole  **ROLLUP**  or  **CUBE**.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >If the  **SELECT**  list expression quotes some ungrouped fields and no aggregate function is used, an error is displayed. This is because multiple values may be returned for ungrouped fields.

-   **HAVING clause**

    Selects special groups by working with the  **GROUP BY**  clause. The  **HAVING**  clause compares some attributes of groups with a constant. Only groups that matching the logical expression in the  **HAVING**  clause are extracted.

-   **WINDOW clause**

    The general format is  **WINDOW window\_name AS \( window\_definition \) \[, ...\]**.  **window\_name**  is a name can be referenced by  **window\_definition**.  **window\_definition**  can be expressed in the following forms:

    \[ existing\_window\_name \]

    \[ PARTITION BY expression \[, ...\] \]

    \[ ORDER BY expression \[ ASC | DESC | USING operator \] \[ NULLS \{ FIRST | LAST \} \] \[, ...\] \]

    \[ frame\_clause \]

    **frame\_clause**  defines a  **window frame**  for the window function. The window function \(not all window functions\) depends on  **window frame**  and  **window frame**  is a set of relevant rows of the current query row.  **frame\_clause**  can be expressed in the following forms:

    \[ RANGE | ROWS \] frame\_start

    \[ RANGE | ROWS \] BETWEEN frame\_start AND frame\_end

    **frame\_start**  and  **frame\_end**  can be expressed in the following forms:

    UNBOUNDED PRECEDING

    value PRECEDING

    CURRENT ROW

    value FOLLOWING

    UNBOUNDED FOLLOWING

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >For the query of column storage table, only  **row\_number**  window function is supported, and  **frame\_clause**  is not supported.

-   **UNION clause**

    Computes the set union of the rows returned by the involved  **SELECT**  statements.

    The  **UNION**  clause has the following constraints:

    -   By default, the result of  **UNION**  does not contain any duplicate rows unless the  **ALL**  clause is declared.
    -   Multiple  **UNION**  operators in the same SELECT statement are evaluated left to right, unless otherwise specified by parentheses.
    -   **FOR UPDATE**,  **FOR NO KEY UPDATE**,  **FOR SHARE**, and  **FOR KEY SHARE**  cannot be specified in the result or input of  **UNION**.

    General expression:

    select\_statement UNION \[ALL\] select\_statement

    -   **select\_statement**  can be any SELECT statement without the  **ORDER BY**,  **LIMIT**,  **FOR UPDATE**,  **FOR NO KEY UPDATE**,  **FOR SHARE**, or  **FOR KEY SHARE**  clause.
    -   **ORDER BY**  and  **LIMIT**  can be attached to the subexpression if it is enclosed in parentheses.

-   **INTERSECT clause**

    Computes the set intersection of rows returned by the involved  **SELECT**  statements. The result of  **INTERSECT**  does not contain any duplicate rows.

    The  **INTERSECT**  clause has the following constraints:

    -   Multiple  **INTERSECT**  operators in the same  **SELECT**  statement are evaluated left to right, unless otherwise specified by parentheses.
    -   Processing  **INTERSECT**  preferentially when  **UNION**  and  **INTERSECT**  operations are executed for results of multiple  **SELECT**  statements.

    General format:

    select\_statement INTERSECT select\_statement

    **select\_statement**  can be any SELECT statement without the  **FOR UPDATE**,  **FOR NO KEY UPDATE**,  **FOR SHARE**, or  **FOR KEY SHARE**  clause.

-   **EXCEPT clause**

    Has the following common form:

    select\_statement EXCEPT \[ ALL \] select\_statement

    **select\_statement**  can be any SELECT statement without the  **FOR UPDATE**,  **FOR NO KEY UPDATE**,  **FOR SHARE**, or  **FOR KEY SHARE**  clause.

    The  **EXCEPT**  operator computes the set of rows that are in the result of the left SELECT statement but not in the result of the right one.

    The result of  **EXCEPT**  does not contain any duplicate rows unless the  **ALL**  clause is declared. To execute  **ALL**, a row that has  _m_  duplicates in the left table and  _n_  duplicates in the right table will appear MAX\(_m_–_n_, 0\) times in the result set.

    Multiple  **EXCEPT**  operators in the same  **SELECT**  statement are evaluated left to right, unless parentheses dictate otherwise.  **EXCEPT**  binds at the same level as  **UNION**.

    Currently, the  **FOR UPDATE**,  **FOR NO KEY UPDATE**,  **FOR SHARE**, and  **FOR KEY SHARE**  clauses cannot be specified for the result of  **EXCEPT**  or any input of  **EXCEPT**.

-   **MINUS clause**

    Has the same function and syntax as  **EXCEPT**  clause.

-   **ORDER BY clause**

    Sorts data retrieved by  **SELECT**  in descending or ascending order. If the  **ORDER BY**  expression contains multiple columns:

    -   If two columns are equal according to the leftmost expression, they are compared according to the next expression and so on.
    -   If they are equal according to all specified expressions, they are returned in an implementation-dependent order.
    -   When used with the  **DISTINCT**  keyword, the columns to be sorted in  **ORDER BY**  must be included in the columns of the result set retrieved by the SELECT statement.
    -   When used with the  **GROUP BY**  clause, the columns to be sorted in  **ORDER BY**  must be included in the columns of the result set retrieved by the SELECT statement.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >To support Chinese pinyin order, specify the  **UTF-8**,  **GB18030**, or  **GBK**  encoding mode during database initiation. The statements are as follows:
    >```
    >initdb –E UTF8 –D ../data –locale=zh_CN.UTF-8, initdb -E GB18030 -D ../data -locale=zh_CN.GB18030, or initdb –E GBK –D ../data –locale=zh_CN.GBK.
    >```

-   **LIMIT clause**

    Consists of two independent sub-clauses:

    LIMIT \{ count | ALL \}

    **OFFSET start count**  specifies the maximum number of rows to return, while  **start**  specifies the number of rows to skip before starting to return rows. When both are specified,  **start**  rows are skipped before starting to count the  **count**  rows to be returned.

-   **OFFSET clause**

    The SQL: 2008 standard has introduced a different clause:

    OFFSET start \{ ROW | ROWS \}

    **start**  specifies the number of rows to skip before starting to return rows.

-   **FETCH \{ FIRST | NEXT \} \[ count \] \{ ROW | ROWS \} ONLY**

    If  **count**  is omitted in a  **FETCH**  clause, it defaults to  **1**.

-   **Locking clause**

    The  **FOR UPDATE**  clause locks the rows retrieved by  **SELECT**. This prevents these rows from being modified or deleted by other transactions before the current transaction ends. That is, other transactions that attempt to run  **UPDATE**,  **DELETE**,  **SELECT FOR UPDATE**,  **SELECT FOR NO KEY UPDATE**,  **SELECT FOR SHARE**, or  **SELECT FOR KEY SHARE**  for these rows will be blocked until the current transaction ends. Any  **DELETE**  on a row will also acquire the  **FOR UPDATE**  locking mode, as will  **UPDATE**  that modifies values on the primary key column. Conversely,  **SELECT FOR UPDATE**  waits for concurrent transactions that have run the preceding commands on the same row, and then locks and returns the updated row \(there may be no row because the row may have been deleted\).

    **FOR NO KEY UPDATE**  behaves similarly to  **FOR UPDATE**, except that it acquires a weaker lock that will not block  **SELECT FOR KEY SHARE**  that attempts to acquire the lock on the same row. Any  **UPDATE**  that does not acquire the  **FOR UPDATE**  lock will also acquire this locking mode.

    **FOR SHARE**  behaves similarly, except that it acquires a shared rather than exclusive lock on each retrieved row. A shared lock blocks other transactions from executing  **UPDATE**,  **DELETE**,  **SELECT FOR UPDATE**, or  **SELECT FOR NO KEY UPDATE**, but does not block  **SELECT FOR SHARE**  or  **SELECT FOR KEY SHARE**.

    **FOR KEY SHARE**  is similar to  **FOR SHARE**  except that its lock is weak.  **SELECT FOR UPDATE**  is blocked but  **SELECT FOR NO KEY UPDATE**  is not blocked. A key-shared lock blocks other transactions from executing  **DELETE**  or  **UPDATE**  that modifies the key value, but does not block  **UPDATE**,  **SELECT FOR NO KEY UPDATE**,  **SELECT FOR SHARE**, or  **SELECT FOR KEY SHARE**.

    To prevent the operation from waiting for the commit of other transactions, you can use  **NOWAIT**. If the selected row cannot be locked immediately, an error is reported immediately and there is no waiting. If you use  **WAIT N**  and the selected row cannot be locked immediately, the operation needs to wait for  _N_  seconds \(the value of  _N_  is of the int type with a range of 0 ≤  _N_  ≤ 2147483\). If the lock is obtained within  _N_  seconds, the operation is performed normally. Otherwise, an error is reported.

    If specified tables are named in a locking clause, then only rows coming from those tables are locked; any other tables used in  **SELECT**  are simply read as usual. Otherwise, locking all tables in the statement.

    If a locking clause is applied to a view or sub-query, it affects all tables used in the view or sub-query.

    Multiple locking clauses can be written if it is necessary to specify different locking behaviors for different tables.

    If a table appears \(or implicitly appears\) in multiple clauses at the same time, the strongest lock is used. Similarly, a table is processed as  **NOWAIT**  if that is specified in any of the clauses affecting it.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >**FOR UPDATE**,  **NO KEY UPDATE**,  **SHARE**, and  **KEY SHARE**  cannot be used to query column-store tables.
    >Only  **FOR SHARE**  and  **FOR UPDATE**  can be used to query the Ustore table.

-   **NLS\_SORT**

    Specifies that a field is sorted in a special order. Currently, only Chinese Pinyin and case-insensitive sorting are supported. To support this sorting mode, you need to set the encoding format to UTF8, GB18030, or GBK when creating a database. If you set the encoding format to another format, for example, SQL\_ASCII, an error may be reported or the sorting mode may be invalid.

    Value range:

    -   **SCHINESE\_PINYIN\_M**, sorted by Pinyin order.
    -   **generic\_m\_ci**: sorted in case-insensitive order \(optional; only English characters are supported in the case-insensitive order.\)

-   **PARTITION clause**

    Queries data in the specified partition in a partitioned table.


## Examples<a name="en-us_topic_0283136463_en-us_topic_0237122184_en-us_topic_0059777449_sc1b5e63c90c946b89430696c38fc86c0"></a>

```
-- Obtain the temp_t temporary table by a subquery and query all records in this table.
openGauss=# WITH temp_t(name,isdba) AS (SELECT usename,usesuper FROM pg_user) SELECT * FROM temp_t;

-- Query all r_reason_sk records in the tpcds.reason table and delete duplicate records.
openGauss=# SELECT DISTINCT(r_reason_sk) FROM tpcds.reason;

-- Example of a LIMIT clause: Obtain a record from the table.
openGauss=# SELECT * FROM tpcds.reason LIMIT 1;

-- Query all records and sort them in alphabetic order.
openGauss=# SELECT r_reason_desc FROM tpcds.reason ORDER BY r_reason_desc;

-- Use table aliases to obtain data from the pg_user and pg_user_status tables:
openGauss=# SELECT a.usename,b.locktime FROM pg_user a,pg_user_status b WHERE a.usesysid=b.roloid;

-- Example of the FULL JOIN clause: Join data in the pg_user and pg_user_status tables.
openGauss=# SELECT a.usename,b.locktime,a.usesuper FROM pg_user a FULL JOIN pg_user_status b on a.usesysid=b.roloid;

-- Example of the GROUP BY clause: Filter data based on query conditions, and group the results.
openGauss=# SELECT r_reason_id, AVG(r_reason_sk) FROM tpcds.reason GROUP BY r_reason_id HAVING AVG(r_reason_sk) > 25;

-- Example of the GROUP BY CUBE clause: Filter data based on query conditions, and group the results.
openGauss=# SELECT r_reason_id,AVG(r_reason_sk) FROM tpcds.reason GROUP BY CUBE(r_reason_id,r_reason_sk);

-- Example of the GROUP BY GROUPING SETS clause: Filter data based on query conditions, and group the results.
openGauss=# SELECT r_reason_id,AVG(r_reason_sk) FROM tpcds.reason GROUP BY GROUPING SETS((r_reason_id,r_reason_sk),r_reason_sk);

-- Example of the UNION clause: Merge the names started with W and N in the r_reason_desc column in the tpcds.reason table.
openGauss=# SELECT r_reason_sk, tpcds.reason.r_reason_desc
    FROM tpcds.reason
    WHERE tpcds.reason.r_reason_desc LIKE 'W%'
UNION
SELECT r_reason_sk, tpcds.reason.r_reason_desc
    FROM tpcds.reason
    WHERE tpcds.reason.r_reason_desc LIKE 'N%';

-- Example of the NLS_SORT clause: Sort by Chinese Pinyin.
openGauss=# SELECT * FROM tpcds.reason ORDER BY NLSSORT( r_reason_desc, 'NLS_SORT = SCHINESE_PINYIN_M');


-- sorting in case-insensitive order (optional; only English characters are supported in the case-insensitive order.)
openGauss=# SELECT * FROM tpcds.reason ORDER BY NLSSORT( r_reason_desc, 'NLS_SORT = generic_m_ci');

-- Create a range-partitioned table tpcds.reason_p.
openGauss=# CREATE TABLE tpcds.reason_p
(
  r_reason_sk integer,
  r_reason_id character(16),
  r_reason_desc character(100)
)
PARTITION BY RANGE (r_reason_sk)
(
  partition P_05_BEFORE values less than (05),
  partition P_15 values less than (15),
  partition P_25 values less than (25),
  partition P_35 values less than (35),
  partition P_45_AFTER values less than (MAXVALUE)
)
;

-- Insert data.
openGauss=# INSERT INTO tpcds.reason_p values(3,'AAAAAAAABAAAAAAA','reason 1'),(10,'AAAAAAAABAAAAAAA','reason 2'),(4,'AAAAAAAABAAAAAAA','reason 3'),(10,'AAAAAAAABAAAAAAA','reason 4'),(10,'AAAAAAAABAAAAAAA','reason 5'),(20,'AAAAAAAACAAAAAAA','reason 6'),(30,'AAAAAAAACAAAAAAA','reason 7');

-- Example of the PARTITION clause: Obtain data from the P_05_BEFORE partition in the tpcds.reason_p table.
openGauss=#  SELECT * FROM tpcds.reason_p PARTITION (P_05_BEFORE);
 r_reason_sk |   r_reason_id    |   r_reason_desc                   
-------------+------------------+------------------------------------
           4 | AAAAAAAABAAAAAAA | reason 3                          
           3 | AAAAAAAABAAAAAAA | reason 1                          
(2 rows)

-- Example of the GROUP BY clause: Group records in the tpcds.reason_p table by r_reason_id, and count the number of records in each group.
openGauss=# SELECT COUNT(*),r_reason_id FROM tpcds.reason_p GROUP BY r_reason_id;
 count |   r_reason_id    
-------+------------------
     2 | AAAAAAAACAAAAAAA
     5 | AAAAAAAABAAAAAAA
(2 rows)

-- Example of the GROUP BY CUBE clause: Filter data based on query conditions, and group the results.
openGauss=# SELECT * FROM tpcds.reason GROUP BY  CUBE (r_reason_id,r_reason_sk,r_reason_desc);

-- Example of the GROUP BY GROUPING SETS clause: Filter data based on query conditions, and group the results.
openGauss=# SELECT * FROM tpcds.reason GROUP BY  GROUPING SETS ((r_reason_id,r_reason_sk),r_reason_desc);

-- Example of the HAVING clause: Group records in the tpcds.reason_p table by r_reason_id, count the number of records in each group, and display only values whose number of r_reason_id is greater than 2.
openGauss=# SELECT COUNT(*) c,r_reason_id FROM tpcds.reason_p GROUP BY r_reason_id HAVING c>2;
 c |   r_reason_id    
---+------------------
 5 | AAAAAAAABAAAAAAA
(1 row)

-- Example of the IN clause: Group records in the tpcds.reason_p table by r_reason_id, count the number of records in each group, and display only the numbers of records whose r_reason_id is AAAAAAAABAAAAAAA or AAAAAAAADAAAAAAA.
openGauss=# SELECT COUNT(*),r_reason_id FROM tpcds.reason_p GROUP BY r_reason_id HAVING r_reason_id IN('AAAAAAAABAAAAAAA','AAAAAAAADAAAAAAA'); 
count |   r_reason_id    
-------+------------------
     5 | AAAAAAAABAAAAAAA
(1 row)

-- Example of the INTERSECT clause: Query records whose r_reason_id is AAAAAAAABAAAAAAA and whose r_reason_sk is smaller than 5.
openGauss=# SELECT * FROM tpcds.reason_p WHERE r_reason_id='AAAAAAAABAAAAAAA' INTERSECT SELECT * FROM tpcds.reason_p WHERE r_reason_sk<5;
 r_reason_sk |   r_reason_id    |     r_reason_desc                 
-------------+------------------+------------------------------------
           4 | AAAAAAAABAAAAAAA | reason 3                           
           3 | AAAAAAAABAAAAAAA | reason 1                           
(2 rows)

-- Example of the EXCEPT clause: Query records whose r_reason_id is AAAAAAAABAAAAAAA and whose r_reason_sk is greater than or equal to 4.
openGauss=# SELECT * FROM tpcds.reason_p WHERE r_reason_id='AAAAAAAABAAAAAAA' EXCEPT SELECT * FROM tpcds.reason_p WHERE r_reason_sk<4;
r_reason_sk |   r_reason_id    |      r_reason_desc                  
-------------+------------------+------------------------------------
          10 | AAAAAAAABAAAAAAA | reason 2                          
          10 | AAAAAAAABAAAAAAA | reason 5                          
          10 | AAAAAAAABAAAAAAA | reason 4                          
           4 | AAAAAAAABAAAAAAA | reason 3                          
(4 rows)

-- Specify the operator (+) in the WHERE clause to indicate a left join.
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where t1.sr_customer_sk  = t2.c_customer_sk(+) 
order by 1 desc limit 1;
 sr_item_sk | c_customer_id
------------+---------------
      18000 |
(1 row)

-- Specify the operator (+) in the WHERE clause to indicate a right join.
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where t1.sr_customer_sk(+)  = t2.c_customer_sk 
order by 1 desc limit 1;
 sr_item_sk |  c_customer_id
------------+------------------
            | AAAAAAAAJNGEBAAA
(1 row)

-- Specify the operator (+) in the WHERE clause to indicate a left join and add a join condition.
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where t1.sr_customer_sk  = t2.c_customer_sk(+) and t2.c_customer_sk(+) < 1 order by 1  limit 1;
 sr_item_sk | c_customer_id
------------+---------------
          1 |
(1 row)

-- If the operator (+) is specified in the WHERE clause, do not use expressions connected through AND/OR.
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where not(t1.sr_customer_sk  = t2.c_customer_sk(+) and t2.c_customer_sk(+) < 1);
ERROR:  Operator "(+)" can not be used in nesting expression.
LINE 1: ...tomer_id from store_returns t1, customer t2 where not(t1.sr_...
                                                             ^
-- If the operator (+) is specified in the WHERE clause which does not support expression macros, an error will be reported.
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where (t1.sr_customer_sk  = t2.c_customer_sk(+))::bool;
ERROR:  Operator "(+)" can only be used in common expression.

-- If the operator (+) is specified on both sides of an expression in the WHERE clause, an error will be reported.
openGauss=# select t1.sr_item_sk ,t2.c_customer_id from store_returns t1, customer t2 where t1.sr_customer_sk(+)  = t2.c_customer_sk(+);
ERROR:  Operator "(+)" can't be specified on more than one relation in one join condition
HINT:  "t1", "t2"...are specified Operator "(+)" in one condition.

-- Delete the table.
openGauss=# DROP TABLE tpcds.reason_p;

-- Example of a flashback query
-- Create the tpcds.time_table table.
openGauss=#  create table tpcds.time_table(idx integer, snaptime timestamp, snapcsn bigint, timeDesc character(100));
-- Insert records into the tpcds.time_table table.
openGauss=#  INSERT INTO tpcds.time_table select 1, now(),int8in(xidout(next_csn)), 'time1' from gs_get_next_xid_csn();
openGauss=#  INSERT INTO tpcds.time_table select 2, now(),int8in(xidout(next_csn)), 'time2' from gs_get_next_xid_csn();
openGauss=#  INSERT INTO tpcds.time_table select 3, now(),int8in(xidout(next_csn)), 'time3' from gs_get_next_xid_csn();
openGauss=#  INSERT INTO tpcds.time_table select 4, now(),int8in(xidout(next_csn)), 'time4' from gs_get_next_xid_csn();
openGauss=#  select * from tpcds.time_table;

 idx |          snaptime          | snapcsn |                                               timedesc
-----+----------------------------+---------+------------------------------------------------------------------------------------------------------
   1 | 2021-04-25 17:50:05.360326 |  107322 | time1
   2 | 2021-04-25 17:50:10.886848 |  107324 | time2
   3 | 2021-04-25 17:50:16.12921  |  107327 | time3
   4 | 2021-04-25 17:50:22.311176 |  107330 | time4
(4 rows)
openGauss=#  delete tpcds.time_table;
DELETE 4
openGauss=#  SELECT * FROM tpcds.time_table TIMECAPSULE TIMESTAMP to_timestamp('2021-04-25 17:50:22.311176','YYYY-MM-DD HH24:MI:SS.FF');
 idx |          snaptime          | snapcsn |                                               timedesc
-----+----------------------------+---------+------------------------------------------------------------------------------------------------------
   1 | 2021-04-25 17:50:05.360326 |  107322 | time1
   2 | 2021-04-25 17:50:10.886848 |  107324 | time2
   3 | 2021-04-25 17:50:16.12921  |  107327 | time3
(3 rows)
openGauss=#  SELECT * FROM tpcds.time_table TIMECAPSULE CSN 107330;
 idx |          snaptime          | snapcsn |                                               timedesc
-----+----------------------------+---------+------------------------------------------------------------------------------------------------------
   1 | 2021-04-25 17:50:05.360326 |  107322 | time1
   2 | 2021-04-25 17:50:10.886848 |  107324 | time2
   3 | 2021-04-25 17:50:16.12921  |  107327 | time3
(3 rows)
```

