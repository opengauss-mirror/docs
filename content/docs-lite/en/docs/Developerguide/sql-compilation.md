# SQL Compilation<a name="EN-US_TOPIC_0000001149508025"></a>

## DDL<a name="section60205875143313"></a>

-   \[Proposal\] In openGauss, you are advised to execute DDL operations, such as creating table or making comments, separately from batch processing jobs to avoid performance deterioration caused by many concurrent transactions.
-   \[Proposal\] Execute data truncation after unlogged tables are used because openGauss cannot ensure the security of unlogged tables in abnormal scenarios.
-   \[Proposal\] Suggestions on the storage mode of temporary and unlogged tables are the same as those on base tables. Create temporary tables in the same storage mode as the base tables to avoid high computing costs caused by hybrid row and column correlation.
-   \[Proposal\] The total length of an index column cannot exceed 50 bytes. Otherwise, the index size will increase greatly, resulting in large storage cost and low index performance.
-   \[Proposal\] Do not delete objects using  **DROP...CASCADE**, unless the dependency between objects is specified. Otherwise, the objects may be deleted by mistake.

## Data Loading and Uninstalling<a name="section45234071153513"></a>

-   \[Proposal\] Provide the inserted column list in the insert statement. Example:

    ```
    INSERT INTO task(name,id,comment) VALUES ('task1','100','100th task');
    ```

-   \[Proposal\] After data is imported to the database in batches or the data increment reaches the threshold, you are advised to analyze tables to prevent the execution plan from being degraded due to inaccurate statistics.
-   \[Proposal\] To clear all data in a table, you are advised to use  **TRUNCATE TABLE**  instead of  **DELETE TABLE**.  **DELETE TABLE**  is not efficient and cannot release disk space occupied by the deleted data.

## Type Conversion<a name="section28537273145311"></a>

-   \[Proposal\] Convert data types explicitly. If you perform implicit conversion, the result may differ from expected.
-   \[Proposal\] During data query, explicitly specify the data type for constants, and do not attempt to perform any implicit data type conversion.
-   \[Notice\] If  **sql\_compatibility**  is set to  **A**, null strings will be automatically converted to  **NULL**  during data import. If null strings need to be reserved, set  **sql\_compatibility**  to  **C**.

## Query Operation<a name="section48841047154511"></a>

-   \[Proposal\] Do not return a large number of result sets to a client except the ETL program. If a large result set is returned, consider modifying your service design.
-   \[Proposal\] Perform DDL and DML operations encapsulated in transactions. Operations like table truncation, update, deletion, and dropping, cannot be rolled back once committed. You are advised to encapsulate such operations in transactions so that you can roll back the operations if necessary.
-   \[Proposal\] During query compilation, you are advised to list all columns to be queried and avoid using  **SELECT \***. Doing so reduces output lines, improves query performance, and avoids the impact of adding or deleting columns on front-end service compatibility.
-   \[Proposal\] During table object access, add the schema prefix to the table object to avoid accessing an unexpected table due to schema switchover.
-   \[Proposal\] The cost of joining more than three tables or views, especially full joins, is difficult to be estimated. You are advised to use the  **WITH TABLE AS**  statement to create interim tables to improve the readability of SQL statements.
-   \[Proposal\] Avoid using Cartesian products or full joins. Cartesian products and full joins will result in a sharp expansion of result sets and poor performance.
-   \[Notice\] Only  **IS NULL**  and  **IS NOT NULL**  can be used to determine NULL value comparison results. If any other method is used,  **NULL**  is returned. For example,  **NULL**  instead of expected Boolean values is returned for  **NULL<\>NULL**,  **NULL=NULL**, and  **NULL<\>1**.
-   \[Notice\] Do not use  **count\(col\)**  instead of  **count\(\*\)**  to count the total number of records in a table.  **count\(\*\)**  counts the NULL value \(actual rows\) while  **count\(col\)**  does not.
-   \[Notice\] While executing  **count\(col\)**, the number of NULL record rows is counted as 0. While executing  **sum\(col\)**,  **NULL**  is returned if all records are NULL. If not all the records are NULL, the number of NULL record rows is counted as 0.
-   \[Notice\] To count multiple columns using  **count\(\)**, column names must be enclosed in parentheses. For example, count \(\(col1, col2, col3\)\). Note: When multiple columns are used to count the number of NULL record rows, a row is counted even if all the selected columns are NULL. The result is the same as that when  **count\(\*\)**  is executed.
-   \[Notice\] NULL records are not counted when  **count\(distinct col\)**  is used to calculate the number of non-NULL columns that are not repeated.
-   \[Notice\] If all statistical columns are NULL when  **count\(distinct \(col1,col2,...\)\)**  is used to count the number of unique values in multiple columns, NULL records are also counted, and the records are considered the same.
-   \[Proposal\] Use the connection operator || to replace the  **concat**  function for string connection because the execution plan generated by the  **concat**  function cannot be pushed down to disks. As a result, the query performance severely deteriorates.
-   \[Proposal\] Use the following time-related macros to replace the  **now**  function and obtain the current time because the execution plan generated by the  **now**  function cannot be pushed down to disks. As a result, the query performance severely deteriorates.

    **Table  1**  Time-related macros

    <a name="table10471934805"></a>
    <table><thead align="left"><tr id="row9441634806"><th class="cellrowborder" valign="top" width="33.52%" id="mcps1.2.4.1.1"><p id="p14333416017"><a name="p14333416017"></a><a name="p14333416017"></a><strong id="b186221432141919"><a name="b186221432141919"></a><a name="b186221432141919"></a>Macro Name</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="33.15%" id="mcps1.2.4.1.2"><p id="p444193417016"><a name="p444193417016"></a><a name="p444193417016"></a><strong id="b20441634205"><a name="b20441634205"></a><a name="b20441634205"></a>Description</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33%" id="mcps1.2.4.1.3"><p id="p134420341604"><a name="p134420341604"></a><a name="p134420341604"></a><strong id="b75988410541"><a name="b75988410541"></a><a name="b75988410541"></a>Example</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row844334102"><td class="cellrowborder" valign="top" width="33.52%" headers="mcps1.2.4.1.1 "><p id="p4444345015"><a name="p4444345015"></a><a name="p4444345015"></a>CURRENT_DATE</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.15%" headers="mcps1.2.4.1.2 "><p id="p644133419019"><a name="p644133419019"></a><a name="p644133419019"></a>Obtains the current date, excluding the hour, minute, and second details.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33%" headers="mcps1.2.4.1.3 "><a name="screen5951115464718"></a><a name="screen5951115464718"></a><pre class="screen" codetype="Sql" id="screen5951115464718"><span id="text16770185141319"><a name="text16770185141319"></a><a name="text16770185141319"></a>openGauss=# </span>select CURRENT_DATE;
    date
    ------------
    2018-02-02
    (1 row)</pre>
    </td>
    </tr>
    <tr id="row12477343017"><td class="cellrowborder" valign="top" width="33.52%" headers="mcps1.2.4.1.1 "><p id="p244734307"><a name="p244734307"></a><a name="p244734307"></a>CURRENT_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.15%" headers="mcps1.2.4.1.2 "><p id="p64711341207"><a name="p64711341207"></a><a name="p64711341207"></a>Obtains the current time, excluding the year, month, and day.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33%" headers="mcps1.2.4.1.3 "><a name="screen240216513483"></a><a name="screen240216513483"></a><pre class="screen" codetype="Sql" id="screen240216513483"><span id="text158172008141"><a name="text158172008141"></a><a name="text158172008141"></a>openGauss=# </span>select CURRENT_TIME;
    timetz
    --------------------
    00:39:34.633938+08
    (1 row)</pre>
    </td>
    </tr>
    <tr id="row3474347010"><td class="cellrowborder" valign="top" width="33.52%" headers="mcps1.2.4.1.1 "><p id="p6473344013"><a name="p6473344013"></a><a name="p6473344013"></a>CURRENT_TIMESTAMP(n)</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.15%" headers="mcps1.2.4.1.2 "><p id="p84773419010"><a name="p84773419010"></a><a name="p84773419010"></a>Obtains the current date and time, including year, month, day, hour, minute, and second.</p>
    <div class="note" id="note1058016589914"><a name="note1058016589914"></a><a name="note1058016589914"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p75814581092"><a name="p75814581092"></a><a name="p75814581092"></a><em id="i17599444181910"><a name="i17599444181910"></a><a name="i17599444181910"></a>n</em> indicates the number of digits after the decimal point in the time string.</p>
    </div></div>
    </td>
    <td class="cellrowborder" valign="top" width="33.33%" headers="mcps1.2.4.1.3 "><a name="screen23871411134810"></a><a name="screen23871411134810"></a><pre class="screen" codetype="Sql" id="screen23871411134810"><span id="text3942673146"><a name="text3942673146"></a><a name="text3942673146"></a>openGauss=# </span>select CURRENT_TIMESTAMP(6);
    timestamptz
    -------------------------------
    2018-02-02 00:39:55.231689+08
    (1 row)</pre>
    </td>
    </tr>
    </tbody>
    </table>

-   \[Proposal\] Do not use scalar subquery statements. A scalar subquery appears in the output list of a SELECT statement. In the following example, the underlined part is a scalar subquery statement:

    ```
    SELECT id, (SELECT COUNT(*) FROM films f WHERE f.did = s.id) FROM staffs_p1 s;
    ```

    Scalar subqueries often result in query performance deterioration. During application development, scalar subqueries need to be converted into equivalent table associations based on the service logic.

-   \[Proposal\] In  **WHERE**  clauses, the filter conditions should be collated. The condition that few records are selected for reading \(the number of filtered records is small\) is listed at the beginning.
-   \[Proposal\] Filter conditions in  **WHERE**  clauses should comply with unilateral rules, that is, to place the column name on one side of a comparison operator. In this way, the optimizer automatically performs pruning optimization in some scenarios. Filter conditions in a  **WHERE**  clause will be displayed in  _col op expression_  format, where  _col_  indicates a table column,  _op_  indicates a comparison operator, such as = and \>, and  _expression_  indicates an expression that does not contain a column name. Example:

    ```
    SELECT id, from_image_id, from_person_id, from_video_id FROM face_data WHERE current_timestamp(6) - time < '1 days'::interval;
    ```

    The modification is as follows:

    ```
    SELECT id, from_image_id, from_person_id, from_video_id FROM face_data where time >  current_timestamp(6) - '1 days'::interval;
    ```

-   \[Proposal\] Do not perform unnecessary collation operations. Collation requires a large amount of memory and CPU. If service logic permits,  **ORDER BY**  and  **LIMIT**  can be combined to reduce resource overheads. By default, openGauss perform collation by ASC & NULL LAST.
-   \[Proposal\] When the  **ORDER BY**  clause is used for collation, specify collation modes \(ASC or DESC\), and use NULL FIRST or NULL LAST for NULL record sorting.
-   \[Proposal\] Do not rely on only the  **LIMIT**  clause to return the result set displayed in a specific sequence. Combine  **ORDER BY**  and  **LIMIT**  clauses for some specific result sets and use  **OFFSET**  to skip specific results if necessary.
-   \[Proposal\] If the service logic is accurate, you are advised to use  **UNION ALL**  instead of  **UNION**.
-   \[Proposal\] If a filter condition contains only an  **OR**  expression, convert the  **OR **expression to  **UNION ALL**  to improve performance. SQL statements that use  **OR**  expressions cannot be optimized, resulting in slow execution. Example:

    ```
    SELECT * FROM scdc.pub_menu 
    WHERE (cdp= 300 AND inline=301) OR (cdp= 301 AND inline=302) OR (cdp= 302 ANDinline=301);
    ```

    Convert the statement to the following:

    ```
    SELECT * FROM scdc.pub_menu 
    WHERE (cdp= 300 AND inline=301) 
    union all
    SELECT * FROM scdc.pub_menu 
    WHERE (cdp= 301 AND inline=302) 
    union all 
    SELECT * FROM tablename 
    WHERE (cdp= 302 AND inline=301)
    ```

-   \[Proposal\] If an  **in\(val1, val2, val3...\)**  expression contains a large number of columns, you are advised to replace it with the  **in \(values \(va11\), \(val2\),\(val3\)...\)**  statement. The optimizer will automatically convert the  **IN**  constraint into a non-correlated subquery to improve the query performance.
-   \[Proposal\] Replace  **\(not\) in**  with  **\(not\) exist**  when associated columns do not contain  **NULL**  values. For example, in the following query statement, if the  **T1.C1**  column does not contain any  **NULL**  value, add the  **NOT NULL**  constraint to the  **T1.C1**  column, and then rewrite the statements.

    ```
    SELECT * FROM T1 WHERE T1.C1 NOT IN (SELECT T2.C2 FROM T2);
    ```

    Rewrite the statement as follows:

    ```
    SELECT * FROM T1 WHERE NOT EXISTS (SELECT  * FROM T1,T2 WHERE T1.C1=T2.C2);
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   If the value of the T1.C1 column is not  **NOT NULL**, the preceding rewriting cannot be performed.
    >-   If the  **T1.C1**  column is the output of a subquery, check whether the output is  **NOT NULL**  based on the service logic.

-   \[Proposal\] Use cursors instead of the  **LIMIT OFFSET**  syntax to perform pagination queries to avoid resource overheads caused by multiple executions. A cursor must be used in a transaction, and you must disable the cursor and commit the transaction once the query is finished.

