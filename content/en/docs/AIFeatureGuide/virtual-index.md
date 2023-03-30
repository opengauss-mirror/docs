# Virtual Index<a name="EN-US_TOPIC_0296549247"></a>

The virtual index function allows users to directly perform operations in the database. This function simulates the creation of a real index to avoid the time and space overhead required for creating a real index. Based on the virtual index, users can evaluate the impact of the index on the specified query statement by using the optimizer.

This function involves the following APIs:

**Table  1**  Virtual index function APIs

<a name="table244916561658"></a>
<table><thead align="left"><tr id="row1144945610519"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.1"><p id="p1449656952"><a name="p1449656952"></a><a name="p1449656952"></a>Function Name</p>
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

This function involves the following GUC parameters:

**Table  2**  GUC parameters of the virtual index function

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

## Procedure<a name="section678453019491"></a>

1.  Use the  **hypopg\_create\_index **function to create a virtual index. For example:

    ```
    openGauss=> select * from hypopg_create_index('create index on bmsql_customer(c_w_id)');
     indexrelid |              indexname              
    ------------+-------------------------------------
         329726 | <329726>btree_bmsql_customer_c_w_id
    (1 row)
    ```

2.  Enable the GUC parameter  **enable\_hypo\_index**. This parameter controls whether the database optimizer considers the created virtual index when executing the EXPLAIN statement. By executing EXPLAIN on a specific query statement, you can evaluate whether the index can improve the execution efficiency of the query statement based on the execution plan provided by the optimizer. For example:

    ```
    openGauss=> set enable_hypo_index = on;
    SET
    ```

    Before enabling the GUC parameter, run  **EXPLAIN **and the query statement.

    ```
    openGauss=> explain SELECT c_discount from bmsql_customer where c_w_id = 10;
                                  QUERY PLAN                              
    ----------------------------------------------------------------------
     Seq Scan on bmsql_customer  (cost=0.00..52963.06 rows=31224 width=4)
       Filter: (c_w_id = 10)
    (2 rows)
    ```

    After enabling the GUC parameter, run  **EXPLAIN **and the query statement.

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

3.  \(Optional\) Use the  **hypopg\_display\_index **function to display all created virtual indexes. For example:

    ```
    openGauss=> select * from hypopg_display_index();
                     indexname                  | indexrelid |     table      |      column      
    --------------------------------------------+------------+----------------+------------------
     <329726>btree_bmsql_customer_c_w_id        |     329726 | bmsql_customer | (c_w_id)
     <329729>btree_bmsql_customer_c_d_id_c_w_id |     329729 | bmsql_customer | (c_d_id, c_w_id)
    (2 rows)
    ```

4.  \(Optional\) Use the  **hypopg\_estimate\_size **function to estimate the space \(in bytes\) required for creating a virtual index. For example:

    ```
    openGauss=> select * from hypopg_estimate_size(329730);
     hypopg_estimate_size 
    ----------------------
                 15687680
    (1 row)
    ```

5.  Delete the virtual index.

    Use the  **hypopg\_drop\_index **function to delete the virtual index of a specified OID. For example:

    ```
    openGauss=> select * from hypopg_drop_index(329726);
     hypopg_drop_index 
    -------------------
     t
    (1 row)
    ```

    Use the  **hypopg\_reset\_index **function to clear all created virtual indexes at a time. For example:

    ```
    openGauss=> select * from hypopg_reset_index();
     hypopg_reset_index 
    --------------------
    
    (1 row)
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   Running  **EXPLAIN ANALYZE**  does not involve the virtual index function.
>-   The created virtual index is at the database instance level and can be shared by sessions. After a session is closed, the virtual index still exists. However, the virtual index will be cleared after the database is restarted.
>-   This function does not support common views, materialized views, and column-store tables.

