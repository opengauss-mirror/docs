# Single-query Index Recommendation<a name="EN-US_TOPIC_0296549246"></a>

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

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   This function supports only a single SELECT statement and does not support other types of SQL statements.
>-   Column-store tables, segment-paged tables, common views, materialized views, global temporary tables, and encrypted databases are not supported.

## Application Scenarios<a name="section54321094535"></a>

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

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Parameters of the system function  **gs\_index\_advise\(\)**  are of the text type. If the parameters contain special characters such as single quotation marks \('\), you can use single quotation marks \('\) to escape the special characters. For details, see the preceding example.

