# Index Recommendation<a name="EN-US_TOPIC_0000001225414545"></a>

openGauss index recommendation has three functions, including single-query index recommendation, virtual index recommendation, and workload-level index recommendation.

## Single-query Index Recommendation<a name="section1510124224213"></a>

The single-query index recommendation function supports direct operations in the database and generates recommended indexes for a single query statement entered by users based on the semantic information of the query statement and the statistics data of the database. This function supports only a single SELECT statement and does not support other types of SQL statements. This function depends on the gs\_index\_advise function.

**Table  1**  Single-query index recommendation APIs

<a name="table6447142414557"></a>
<table><thead align="left"><tr id="row544732413559"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1644752411553"><a name="p1644752411553"></a><a name="p1644752411553"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p34471524185517"><a name="p34471524185517"></a><a name="p34471524185517"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p124475241559"><a name="p124475241559"></a><a name="p124475241559"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row94473249558"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p344762435510"><a name="p344762435510"></a><a name="p344762435510"></a>gs_index_advise</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1444782419553"><a name="p1444782419553"></a><a name="p1444782419553"></a>SQL statement string</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1544816249557"><a name="p1544816249557"></a><a name="p1544816249557"></a>Generates a recommendation index for a single query statement.</p>
</td>
</tr>
</tbody>
</table>

Use the preceding function to obtain the recommendation index generated for the query. The recommendation result consists of the table name and column name of the index. To use the tool, do as follows:

```
openGauss=# select "table", "column" from gs_index_advise('SELECT c_discount from bmsql_customer where c_w_id = 10');
     table      |  column  
----------------+----------
 bmsql_customer | (c_w_id)
(1 row)
```

The preceding statement indicates that an index should be created on the  **c\_w\_id**  column of the  **bmsql\_customer**  table. To create the index, run the following command:

```
CREATE INDEX idx on bmsql_customer(c_w_id);
```

A composite index may be recommended for some SQL statements, for example:

```
openGauss=# select "table", "column" from gs_index_advise('select name, age, sex from t1 where age >= 18 and age < 35 and sex = ''f'';');
 table | column
-------+------------
 t1    | (age, sex)
(1 row)
```

The preceding statement indicates that a composite index  **\(age, sex\)**  should be created on table  **t1**. To create the index, run the following command:

```
CREATE INDEX idx1 on t1(age, sex);
```

## Virtual Index Recommendation<a name="section194818512119"></a>

The virtual index recommendation function supports direct operations in the database and simulates the creation of a real index to avoid the time and space overhead required for creating a real index. Based on the virtual index, users can estimate cost of the index on the specified query statement by using the optimizer. For details about the functions and GUC parameters related to virtual indexes, see  [Table 2](#table244916561658)  and  [Table 3](#table1875192712109).

**Table  2**  Virtual index functions

<a name="table244916561658"></a>
<table><thead align="left"><tr id="row1144945610519"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.1"><p id="p1449656952"><a name="p1449656952"></a><a name="p1449656952"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="33.48334833483349%" id="mcps1.2.4.1.2"><p id="p7449956953"><a name="p7449956953"></a><a name="p7449956953"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.183318331833185%" id="mcps1.2.4.1.3"><p id="p1344911561850"><a name="p1344911561850"></a><a name="p1344911561850"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row54498561554"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p24492056656"><a name="p24492056656"></a><a name="p24492056656"></a>hypopg_create_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="p944914566510"><a name="p944914566510"></a><a name="p944914566510"></a>Character string of the statement for creating an index</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="p1444917565513"><a name="p1444917565513"></a><a name="p1444917565513"></a>Creates a virtual index.</p>
</td>
</tr>
<tr id="row044916561554"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p44497561253"><a name="p44497561253"></a><a name="p44497561253"></a>hypopg_display_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="p144919561452"><a name="p144919561452"></a><a name="p144919561452"></a>None</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="p2044920569515"><a name="p2044920569515"></a><a name="p2044920569515"></a>Displays information about all created virtual indexes.</p>
</td>
</tr>
<tr id="row644912563520"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p184498561455"><a name="p184498561455"></a><a name="p184498561455"></a>hypopg_drop_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="p644910561358"><a name="p644910561358"></a><a name="p644910561358"></a>OID of the index</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="p5449356656"><a name="p5449356656"></a><a name="p5449356656"></a>Deletes a specified virtual index.</p>
</td>
</tr>
<tr id="row13449155619516"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p84491256959"><a name="p84491256959"></a><a name="p84491256959"></a>hypopg_reset_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="p10450135617518"><a name="p10450135617518"></a><a name="p10450135617518"></a>None</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="p545045614513"><a name="p545045614513"></a><a name="p545045614513"></a>Clears all virtual indexes.</p>
</td>
</tr>
<tr id="row174509561751"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p94501256655"><a name="p94501256655"></a><a name="p94501256655"></a>hypopg_estimate_size</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="p114504561759"><a name="p114504561759"></a><a name="p114504561759"></a>OID of the index</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="p10450456356"><a name="p10450456356"></a><a name="p10450456356"></a>Estimates the space required for creating a specified index.</p>
</td>
</tr>
</tbody>
</table>

**Table  3**  GUC parameters related to virtual indexes

<a name="table1875192712109"></a>
<table><thead align="left"><tr id="row128751627141018"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p18756277104"><a name="p18756277104"></a><a name="p18756277104"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p20875122712101"><a name="p20875122712101"></a><a name="p20875122712101"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1887512771017"><a name="p1887512771017"></a><a name="p1887512771017"></a>Default Value</p>
</th>
</tr>
</thead>
<tbody><tr id="row9875827181017"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p6875152771012"><a name="p6875152771012"></a><a name="p6875152771012"></a>enable_hypo_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p287552713108"><a name="p287552713108"></a><a name="p287552713108"></a>Whether to enable the virtual index function.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p087552771013"><a name="p087552771013"></a><a name="p087552771013"></a>off</p>
</td>
</tr>
</tbody>
</table>

To use the tool, do as follows:

1.  Use the  **hypopg\_create\_index **function to create a virtual index.

    ```
    openGauss=> select * from hypopg_create_index('create index on bmsql_customer(c_w_id)');
     indexrelid |              indexname              
    ------------+-------------------------------------
         329726 | <329726>btree_bmsql_customer_c_w_id
    (1 row)
    ```

2.  Enable the GUC parameter  **enable\_hypo\_index**. This parameter determines whether the database optimizer considers the created virtual index when executing the  **EXPLAIN**  statement. By executing  **EXPLAIN**  on a specific query statement, you can evaluate whether the index can improve the execution efficiency of the query statement based on the execution plan provided by the optimizer. For example:

    Before enabling the GUC parameter, run the combined statement of keyword  **EXPLAIN**  and the query statement.

    ```
    openGauss=> explain SELECT c_discount from bmsql_customer where c_w_id = 10;
                                  QUERY PLAN                              
    ----------------------------------------------------------------------
     Seq Scan on bmsql_customer  (cost=0.00..52963.06 rows=31224 width=4)
       Filter: (c_w_id = 10)
    (2 rows)
    ```

    To enable the GUC parameters, run the following command:

    ```
    openGauss=> set enable_hypo_index = on;
    SET
    ```

    After enabling the GUC parameter, run the combined statement of keyword  **EXPLAIN**  and the query statement.

    ```
    openGauss=> explain SELECT c_discount from bmsql_customer where c_w_id = 10;
                                                        QUERY PLAN                                                    
    ------------------------------------------------------------------------------------------------------------------
     [Bypass]
     Index Scan using <329726>btree_bmsql_customer_c_w_id on bmsql_customer  (cost=0.00..39678.69 rows=31224 width=4)
       Index Cond: (c_w_id = 10)
    (3 rows)
    ```

    By comparing the two execution plans, you can find that the index may reduce the execution cost of the specified query statement. Then, you can consider creating a real index.

3.  \(Optional\) Use the  **hypopg\_display\_index**  function to display all created virtual indexes. For example:

    ```
    openGauss=> select * from hypopg_display_index();
                     indexname                  | indexrelid |     table      |      column      
    --------------------------------------------+------------+----------------+------------------
     <329726>btree_bmsql_customer_c_w_id        |     329726 | bmsql_customer | (c_w_id)
     <329729>btree_bmsql_customer_c_d_id_c_w_id |     329729 | bmsql_customer | (c_d_id, c_w_id)
    (2 rows)
    ```

4.  \(Optional\) Use the  **hypopg\_estimate\_size**  function to estimate the space \(in bytes\) required for creating a virtual index. For example:

    ```
    openGauss=> select * from hypopg_estimate_size(329730);
     hypopg_estimate_size 
    ----------------------
                 15687680
    (1 row)
    ```

5.  Delete the virtual index.

    Use the  **hypopg\_drop\_index**  function to delete the virtual index of a specified OID. For example:

    ```
    openGauss=> select * from hypopg_drop_index(329726);
     hypopg_drop_index 
    -------------------
     t
    (1 row)
    ```

    Use the  **hypopg\_reset\_index**  function to clear all created virtual indexes at a time. For example:

    ```
    openGauss=> select * from hypopg_reset_index();
     hypopg_reset_index 
    --------------------
    
    (1 row)
    ```


## Workload-level Index Recommendation<a name="section174813519117"></a>

For workload-level indexes, you can run scripts outside the database to use this function. This function uses the workload of multiple DML statements as the input to generate a batch of indexes that can optimize the overall workload execution performance.

1.  Prepare a file that contains multiple DML statements as the input workload. Each statement in the file occupies a line. You can obtain historical service statements from the offline logs of the database.
2.  Run the Python script  **index\_advisor\_workload.py**:

    ```
    python index_advisor_workload.py [p PORT] [d DATABASE] [f FILE] [--h HOST] [-U USERNAME] [-W PASSWORD][--schema SCHEMA]
    [--max_index_num MAX_INDEX_NUM][--max_index_storage MAX_INDEX_STORAGE] [--multi_iter_mode] [--multi_node]  [--json] [--driver] [--show_detail]
    ```

    The input parameters are as follows:

    -   **PORT**: port of the connected database.
    -   **DATABASE**: name of the connected database.
    -   **FILE**: file path that contains the workload statement.
    -   **HOST**  \(optional\): ID of the host that connects to the database.
    -   **USERNAME**  \(optional\): username for connecting to the database.
    -   **PASSWORD**  \(optional\): password for connecting to the database.
    -   **SCHEMA**: schema name.
    -   **MAX\_INDEX\_NUM**  \(optional\): maximum number of recommended indexes.
    -   **MAX\_INDEX\_STORAGE**  \(optional\): maximum size of the index set space.
    -   **multi\_node**  \(optional\): specifies whether the current instance is a distributed database instance.
    -   **multi\_iter\_mode**  \(optional\): algorithm mode. You can switch the algorithm mode by setting this parameter.
    -   **json**  \(optional\): specifies the file path format of the workload statement as JSON after SQL normalization. By default, each SQL statement occupies one line.
    -   **driver**  \(optional\): specifies whether to use the Python driver to connect to the database. By default,  **gsql**  is used for the connection.
    -   **show\_detail**  \(optional\): specifies whether to display the detailed optimization information about the current recommended index set.

    For example:

    ```
    python index_advisor_workload.py 6001 postgres tpcc_log.txt --schema public --max_index_num 10 --multi_iter_mode
    ```

    The recommendation result is a batch of indexes, which are displayed on the screen in the format of multiple create index statements. The following is an example of the result.

    ```
    create index ind0 on public.bmsql_stock(s_i_id,s_w_id);
    create index ind1 on public.bmsql_customer(c_w_id,c_id,c_d_id);
    create index ind2 on public.bmsql_order_line(ol_w_id,ol_o_id,ol_d_id);
    create index ind3 on public.bmsql_item(i_id);
    create index ind4 on public.bmsql_oorder(o_w_id,o_id,o_d_id);
    create index ind5 on public.bmsql_new_order(no_w_id,no_d_id,no_o_id);
    create index ind6 on public.bmsql_customer(c_w_id,c_d_id,c_last,c_first);
    create index ind7 on public.bmsql_new_order(no_w_id);
    create index ind8 on public.bmsql_oorder(o_w_id,o_c_id,o_d_id);
    create index ind9 on public.bmsql_district(d_w_id);
    ```


