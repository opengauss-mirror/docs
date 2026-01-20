# Index_advisor: Index Recommendation<a name="EN-US_TOPIC_0296549245"></a>

This section describes the index recommendation functions, including single-query index recommendation, virtual index recommendation, and workload_level index recommendation.

## Single-query Index Recommendation<a name="EN-US_TOPIC_0296549246"></a>

The single-query index recommendation function allows users to directly perform operations in the database. This function generates recommended indexes for a single query statement entered by users based on the semantic information of the query statement and the statistics of the database. This function involves the following interfaces:

**Table  1**  Single-query index recommendation APIs

<a name="table6447142414557"></a>
<table><thead align="left"><tr id="row544732413559"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1644752411553"><a name="p1644752411553"></a><a name="p1644752411553"></a>Function Name</p>
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

>[!NOTE]NOTE 
>-   This function supports only a single SELECT statement and does not support other types of SQL statements.
>-   Column-store tables, segment-paged tables, common views, materialized views, global temporary tables, and encrypted databases are not supported.

### Application Scenarios<a name="section54321094535"></a>

Use the preceding function to obtain the recommendation index generated for the query. The recommendation result consists of the table name and column name of the index.

For example:

```
openGauss=> select "table", "column" from gs_index_advise('SELECT c_discount from bmsql_customer where c_w_id = 10');
     table      |  column  
----------------+----------
 bmsql_customer | c_w_id
(1 row)
```

The preceding information indicates that an index should be created on the  **c\_w\_id**  column of the  **bmsql\_customer**  table. You can run the following SQL statement to create an index:

```
CREATE INDEX idx on bmsql_customer(c_w_id);
```

Some SQL statements may also be recommended to create a join index, for example:

```
openGauss=# select "table", "column" from gs_index_advise('select name, age, sex from t1 where age >= 18 and age < 35 and sex = ''f'';');
 table | column
-------+------------
 t1    | age, sex
(1 row)
```

The preceding statement indicates that a join index  **\(age, sex\)**  needs to be created in the  **t1 **table. You can run the following command to create a join index:

```
CREATE INDEX idx1 on t1(age, sex);
```

You can recommend specific index types for partitioned tables. For example:

```
openGauss=# select "table", "column", "indextype" from gs_index_advise('select name, age, sex from range_table where age = 20;');
 table | column | indextype
-------+--------+-----------
 t1    | age    | global
(1 row)
```

>[!NOTE]NOTE 
>Parameters of the system function  **gs\_index\_advise\(\)**  are of the text type. If the parameters contain special characters such as single quotation marks \('\), you can use single quotation marks \('\) to escape the special characters. For details, see the preceding example.

## Virtual Index<a name="EN-US_TOPIC_0296549247"></a>

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

### Procedure<a name="section678453019491"></a>

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


>[!NOTE]NOTE 
>-   Running  **EXPLAIN ANALYZE**  does not involve the virtual index function.
>-   The created virtual index is at the database instance level and can be shared by sessions. After a session is closed, the virtual index still exists. However, the virtual index will be cleared after the database is restarted.
>-   This function does not support common views, materialized views, and column-store tables.

## Workload-level Index Recommendation<a name="EN-US_TOPIC_0296549248"></a>

For workload-level indexes, you can run scripts outside the database to use this function. This function uses the workload of multiple DML statements as the input to generate a batch of indexes that can optimize the overall workload execution performance. In addition, it provides the function of extracting service data SQL statements from logs.

### Prerequisites<a name="section18679102695014"></a>

-   The database is normal, and the client can be connected properly.
-   The  **gsql**  tool has been installed by the current user, and the tool path has been added to the  _PATH _environment variable.
-   To use the service data extraction function, you need to set the GUC parameters of the node whose data is to be collected as follows:
    -   log\_min\_duration\_statement = 0
    -   log\_statement= 'all'

        >[!NOTE]NOTE 
        >After service data extraction is complete, you are advised to restore the preceding GUC parameters. Otherwise, log files may be expanded.



### Procedure for Using the Service Data Extraction Script<a name="section183663372522"></a>

1.  <a name="li541620573521"></a>Set the GUC parameters according to instructions in the prerequisites.
2.  Run the following command to extract SQL statements based on logs:

    ```
    gs_dbmind component extract_log [l LOG_DIRECTORY] [f OUTPUT_FILE] [p LOG_LINE_PREFIX] [-d DATABASE] [-U USERNAME][--start_time] [--sql_amount] [--statement] [--json] [--max_reserved_period] [--max_template_num]
    ```

    The input parameters are as follows:

    -   **LOG\_DIRECTORY**: directory for storing  **pg\_log**.
    -   **OUTPUT\_PATH**: path for storing the output SQL statements, that is, path for storing the extracted service data.
    -   **LOG\_LINE\_PREFIX**: specifies the prefix format of each log.
    -   **DATABASE**  \(optional\): database name. If this parameter is not specified, all databases are selected by default.
    -   **USERNAME**  \(optional\): username. If this parameter is not specified, all users are selected by default.
    -   **start\_time**  \(optional\): start time for log collection. If this parameter is not specified, all files are collected by default.
    -   **sql\_amount**  \(optional\): maximum number of SQL statements to be collected. If this parameter is not specified, all SQL statements are collected by default.
    -   **statement**  \(optional\): Collects the SQL statements starting with  **statement**  in  **pg\_log log**. If this parameter is not specified, the SQL statements are not collected by default.
    -   **json**  \(optional\): specifies that the collected log files are stored in JSON format after SQL normalization. If no format is specified, each SQL statement occupies a line.
    -   **max\_reserved\_period**  \(optional\): specifies the maximum number of days of reserving the template in incremental log collection in JSON mode. If this parameter is not specified, the template is reserved by default. The unit is day.
    -   **max\_template\_num**  \(optional\): Specifies the maximum number of templates that can be reserved in JSON mode. If this parameter is not specified, all templates are reserved by default.

    An example is provided as follows.

    ```
    gs_dbmind component extract_log $GAUSSLOG/pg_log/dn_6001 sql_log.txt '%m %c %d %p %a %x %n %e' -d postgres -U omm --start_time '2021-07-06 00:00:00' --statement
    ```

    >[!NOTE]NOTE 
    >If the  **-d/-U**  parameter is specified, the prefix of each log record must contain  **%d**  and  **%u**. If transactions need to be extracted,  **%p**  must be specified. For details, see the  **log\_line\_prefix**  parameter. It is recommended that the value of  **max\_template\_num**  be less than or equal to  **5000**  to avoid long execution time of workload indexes.

3.  Change the GUC parameter values set in  [1](#li541620573521)  to the values before the setting.

### Procedure for Using the Index Recommendation Script<a name="section174995305018"></a>

1.  Prepare a file that contains multiple DML statements as the input workload. Each statement in the file occupies a line. You can obtain historical service statements from the offline logs of the database.
2.  To enable this function, run the following command:

    ```
    gs_dbmind component index_advisor [p PORT] [d DATABASE] [f FILE] [--h HOST] [-U USERNAME] [-W PASSWORD][--schema SCHEMA]
    [--max_index_num MAX_INDEX_NUM][--max_index_storage MAX_INDEX_STORAGE] [--multi_iter_mode] [--multi_node]  [--json] [--driver] [--show_detail]
    ```

    The input parameters are as follows:

    -   **PORT**: port number of the connected database.
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
    -   **json**  \(optional\): Specifies the file path format of the workload statement as JSON after SQL normalization. By default, each SQL statement occupies one line.
    -   **driver**  \(optional\): Specifies whether to use the Python driver to connect to the database. By default,  **gsql**  is used for the connection.
    -   **show\_detail**  \(optional\): Specifies whether to display the detailed optimization information about the current recommended index set.

    Example:

    ```
    gs_dbmind component index_advisor 6001 postgres tpcc_log.txt --schema public --max_index_num 10 --multi_iter_mode
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

    >[!NOTE]NOTE 
    >The value of the  **multi\_node**  parameter must be specified based on the current database architecture. Otherwise, the recommendation result is incomplete, or even no recommendation result is generated.


