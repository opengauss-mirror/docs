# CREATE ROW LEVEL SECURITY POLICY<a name="EN-US_TOPIC_0289901001"></a>

## Function<a name="en-us_topic_0283137345_en-us_topic_0237122109_section196521854173211"></a>

**CREATE ROW LEVEL SECURITY POLICY**  creates a row-level access control policy for a table.

The policy takes effect only after row-level access control is enabled \(by running  **ALTER TABLE... ENABLE ROW LEVEL SECURITY**\). Otherwise, this statement does not take effect.

Currently, row-level access control affects the read \(**SELECT**,  **UPDATE**,  **DELETE**\) of data tables and does not affect the write \(**INSERT**  and  **MERGE INTO**\) of data tables. The table owner or system administrators can create an expression in the  **USING**  clause. When the client reads the data table, the database server combines the expressions that meet the condition and applies it to the execution plan in the statement rewriting phase of a query. For each tuple in a data table, if the expression returns  **TRUE**, the tuple is visible to the current user; if the expression returns  **FALSE**  or  **NULL**, the tuple is invisible to the current user.

A row-level access control policy name is specific to a table. A data table cannot have row-level access control policies with the same name. Different data tables can have the same row-level access control policy.

Row-level access control policies can be applied to specified operations \(**SELECT**,  **UPDATE**,  **DELETE**, and  **ALL**\).  **ALL**  indicates that  **SELECT**,  **UPDATE**, and  **DELETE**  will be affected. For a new row-level access control policy, the default value  **ALL**  will be used if you do not specify the operations that will be affected.

Row-level access control policies can be applied to a specified user \(role\) or to all users \(**PUBLIC**\). For a new row-level access control policy, the default value  **PUBLIC**  will be used if you do not specify the user that will be affected.

## Precautions<a name="en-us_topic_0283137345_en-us_topic_0237122109_section12765201893310"></a>

-   Row-level access control policies can be defined for row-store tables, row-store partitioned tables, column-store tables, column-store partitioned tables, unlogged tables, and hash tables.
-   Row-level access control policies cannot be defined for foreign tables and local temporary tables.
-   Row-level access control policies cannot be defined for views.
-   A maximum of 100 row-level access control policies can be defined for a table.
-   System administrators are not affected by row-level access control policies and can view all data in a table.
-   Tables queried by using SQL statements, views, functions, and stored procedures are affected by row-level access control policies.

## Syntax<a name="en-us_topic_0283137345_en-us_topic_0237122109_section16798192723415"></a>

```
CREATE [ ROW LEVEL SECURITY ] POLICY policy_name ON table_name
     [ AS { PERMISSIVE | RESTRICTIVE } ]
     [ FOR { ALL | SELECT | UPDATE | DELETE } ]
     [ TO { role_name | PUBLIC | CURRENT_USER | SESSION_USER } [, ...] ]
     USING ( using_expression )
```

## Parameter Description<a name="en-us_topic_0283137345_en-us_topic_0237122109_section11851526346"></a>

-   **policy\_name**

    Specifies the name of a row-level access control policy to be created. The names of row-level access control policies for a table must be unique.

-   **table\_name**

    Specifies the name of a table to which a row-level access control policy is applied.

-   **PERMISSIVE | RESTRICTIVE**

    **PERMISSIVE**  enables the permissive policy for row-level access control. The conditions of the permissive policy are joined through the OR expression.

    **RESTRICTIVE**  enables the restrictive policy for row-level access control. The conditions of the restrictive policy are joined through the AND expression. The join methods are as follows:

    ```
    (using_expression_permissive_1 OR using_expression_permissive_2 ...) AND (using_expression_restrictive_1 AND using_expression_restrictive_2 ...)
    ```

    The default value is  **PERMISSIVE**.

-   **command**

    Specifies the SQL operations affected by a row-level access control policy, including  **ALL**,  **SELECT**,  **UPDATE**, and  **DELETE**. If this parameter is not specified, the default value  **ALL**  will be used, covering  **SELECT**,  **UPDATE**, and  **DELETE**.

    If  _command_  is set to  **SELECT**, only tuple data that meets the condition \(the return value of  _using\_expression_  is  **TRUE**\) can be queried. The operations that are affected include  **SELECT**,  **UPDATE.... RETURNING**, and  **DELETE... RETURNING**. 

    If  _command_  is set to  **UPDATE**, only tuple data that meets the condition \(the return value of  _using\_expression_  is  **TRUE**\) can be updated. The operations that are affected include  **UPDATE**,  **UPDATE ... RETURNING**, and  **SELECT ... FOR UPDATE/SHARE**. 

    If  _command_  is set to  **DELETE**, only tuple data that meets the condition \(the return value of  _using\_expression_  is  **TRUE**\) can be deleted. The operations that are affected include  **DELETE**  and  **DELETE ... RETURNING**. 

    The following table describes the relationship between row-level access control policies and SQL statements.

    **Table  1**  Relationship between row-level access control policies and SQL statements

    <a name="en-us_topic_0283137345_en-us_topic_0237122109_table198047342176"></a>
    <table><thead align="left"><tr id="en-us_topic_0283137345_en-us_topic_0237122109_row14804134141720"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137345_en-us_topic_0237122109_p15480134519170"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p15480134519170"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p15480134519170"></a><strong id="en-us_topic_0283137345_en-us_topic_0237122109_b8481194541719"><a name="en-us_topic_0283137345_en-us_topic_0237122109_b8481194541719"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_b8481194541719"></a>Command</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137345_en-us_topic_0237122109_p68052034131718"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p68052034131718"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p68052034131718"></a><strong id="en-us_topic_0283137345_en-us_topic_0237122109_b3812145191717"><a name="en-us_topic_0283137345_en-us_topic_0237122109_b3812145191717"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_b3812145191717"></a>SELECT/ALL policy</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137345_en-us_topic_0237122109_p1780563415176"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1780563415176"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1780563415176"></a><strong id="en-us_topic_0283137345_en-us_topic_0237122109_b17590205616174"><a name="en-us_topic_0283137345_en-us_topic_0237122109_b17590205616174"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_b17590205616174"></a>UPDATE/ALL policy</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137345_en-us_topic_0237122109_p999710011189"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p999710011189"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p999710011189"></a><strong id="en-us_topic_0283137345_en-us_topic_0237122109_b2099717014181"><a name="en-us_topic_0283137345_en-us_topic_0237122109_b2099717014181"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_b2099717014181"></a>DELETE/ALL policy</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283137345_en-us_topic_0237122109_row8805153420177"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p198427121816"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p198427121816"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p198427121816"></a><strong id="en-us_topic_0283137345_en-us_topic_0237122109_b39847712186"><a name="en-us_topic_0283137345_en-us_topic_0237122109_b39847712186"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_b39847712186"></a>SELECT</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p11691414151820"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p11691414151820"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p11691414151820"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p2069141491810"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p2069141491810"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p2069141491810"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p96911141181"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p96911141181"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p96911141181"></a>No</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137345_en-us_topic_0237122109_row88060345170"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p119842715181"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p119842715181"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p119842715181"></a><strong id="en-us_topic_0283137345_en-us_topic_0237122109_b179841175185"><a name="en-us_topic_0283137345_en-us_topic_0237122109_b179841175185"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_b179841175185"></a>SELECT FOR UPDATE/SHARE</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p18691161415188"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p18691161415188"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p18691161415188"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p96921114181819"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p96921114181819"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p96921114181819"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p9692814151819"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p9692814151819"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p9692814151819"></a>No</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137345_en-us_topic_0237122109_row28066347171"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p99841079188"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p99841079188"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p99841079188"></a><strong id="en-us_topic_0283137345_en-us_topic_0237122109_b119841971185"><a name="en-us_topic_0283137345_en-us_topic_0237122109_b119841971185"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_b119841971185"></a>UPDATE</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p1769241415186"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1769241415186"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1769241415186"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p46921714201817"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p46921714201817"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p46921714201817"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p126921514111820"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p126921514111820"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p126921514111820"></a>No</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137345_en-us_topic_0237122109_row7807434141711"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p098513761813"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p098513761813"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p098513761813"></a><strong id="en-us_topic_0283137345_en-us_topic_0237122109_b189853718182"><a name="en-us_topic_0283137345_en-us_topic_0237122109_b189853718182"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_b189853718182"></a>UPDATE RETURNING</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p8693191411810"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p8693191411810"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p8693191411810"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p11693114171815"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p11693114171815"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p11693114171815"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p1869315142184"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1869315142184"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1869315142184"></a>No</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137345_en-us_topic_0237122109_row980723420178"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p59855771815"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p59855771815"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p59855771815"></a><strong id="en-us_topic_0283137345_en-us_topic_0237122109_b1298517171813"><a name="en-us_topic_0283137345_en-us_topic_0237122109_b1298517171813"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_b1298517171813"></a>DELETE</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p869361491810"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p869361491810"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p869361491810"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p1369451421818"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1369451421818"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1369451421818"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p1269413146181"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1269413146181"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1269413146181"></a>Existing row</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137345_en-us_topic_0237122109_row5809133491710"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p1698557101810"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1698557101810"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1698557101810"></a><strong id="en-us_topic_0283137345_en-us_topic_0237122109_b119851970188"><a name="en-us_topic_0283137345_en-us_topic_0237122109_b119851970188"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_b119851970188"></a>DELETE RETURNING</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p2694171421811"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p2694171421811"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p2694171421811"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p1269401481815"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1269401481815"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p1269401481815"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137345_en-us_topic_0237122109_p19694121417189"><a name="en-us_topic_0283137345_en-us_topic_0237122109_p19694121417189"></a><a name="en-us_topic_0283137345_en-us_topic_0237122109_p19694121417189"></a>Existing row</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **role\_name**

    Specifies database users affected by a row-level access control policy.

    If this parameter is not specified, the default value  **PUBLIC**  will be used, indicating that all database users will be affected. You can specify multiple affected database users.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >System administrators are not affected by row access control.


-   **using\_expression**

    Specifies an expression defined for a row-level access control policy \(return type: boolean\).

    The expression cannot contain aggregate functions or window functions. In the statement rewriting phase of a query, if row-level access control for a data table is enabled, the expressions that meet the specified conditions will be added to the plan tree. The expression is calculated for each tuple in the data table. For  **SELECT**,  **UPDATE**, and  **DELETE**, row data is visible to the current user only when the return value of the expression is  **TRUE**. If the expression returns  **FALSE**, the tuple is invisible to the current user. In this case, the user cannot view the tuple through the  **SELECT**  statement, update the tuple through the  **UPDATE**  statement, or delete the tuple through the  **DELETE**  statement.


## Examples<a name="en-us_topic_0283137345_en-us_topic_0237122109_section17979101023515"></a>

```
-- Create user alice.
openGauss=# CREATE USER alice PASSWORD 'xxxxxxxxx';

-- Create user bob.
openGauss=# CREATE USER bob PASSWORD 'xxxxxxxxx';

-- Create the data table all_data.
openGauss=# CREATE TABLE all_data(id int, role varchar(100), data varchar(100));

-- Insert data into the data table.
openGauss=# INSERT INTO all_data VALUES(1, 'alice', 'alice data');
openGauss=# INSERT INTO all_data VALUES(2, 'bob', 'bob data');
openGauss=# INSERT INTO all_data VALUES(3, 'peter', 'peter data');

-- Grant the read permission on the all_data table to users alice and bob.
openGauss=# GRANT SELECT ON all_data TO alice, bob;

-- Enable row-level access control.
openGauss=# ALTER TABLE all_data ENABLE ROW LEVEL SECURITY;

-- Create a row-level access control policy to specify that the current user can view only their own data.
openGauss=# CREATE ROW LEVEL SECURITY POLICY all_data_rls ON all_data USING(role = CURRENT_USER);

-- View information about the all_data table.
openGauss=# \d+ all_data
                               Table "public.all_data"
 Column |          Type          | Modifiers | Storage  | Stats target | Description
--------+------------------------+-----------+----------+--------------+-------------
 id     | integer                |           | plain    |              |
 role   | character varying(100) |           | extended |              |
 data   | character varying(100) |           | extended |              |
Row Level Security Policies:
    POLICY "all_data_rls"
      USING (((role)::name = "current_user"()))
Has OIDs: no
Options: orientation=row, compression=no, enable_rowsecurity=true

-- Run SELECT.
openGauss=# SELECT * FROM all_data;
 id | role  |    data
----+-------+------------
  1 | alice | alice data
  2 | bob   | bob data
  3 | peter | peter data
(3 rows)

openGauss=# EXPLAIN(COSTS OFF) SELECT * FROM all_data;
      QUERY PLAN
----------------------
 Seq Scan on all_data
(1 row)

-- Switch to user alice and run SELECT.
openGauss=# SELECT * FROM all_data;
 id | role  |    data
----+-------+------------
  1 | alice | alice data
(1 row)

openGauss=# EXPLAIN(COSTS OFF) SELECT * FROM all_data;
 QUERY PLAN
----------------------------------------------------------------
 Seq Scan on all_data
   Filter: ((role)::name = 'alice'::name)
 Notice: This query is influenced by row level security feature
(3 rows)
 
```

## Helpful Links<a name="en-us_topic_0283137345_en-us_topic_0237122109_section1426016489355"></a>

[DROP ROW LEVEL SECURITY POLICY](drop-row-level-security-policy.md),  [ALTER ROW LEVEL SECURITY POLICY](alter-row-level-security-policy.md)

