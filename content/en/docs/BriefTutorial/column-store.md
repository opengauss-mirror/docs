# Column Store<a name="EN-US_TOPIC_0000001225536027"></a>

openGauss supports hybrid row-column store. Row store stores tables to disk partitions by row, and column store stores tables to disk partitions by column.

Each storage model applies to specific scenarios. Select an appropriate model when creating a table. Generally, openGauss is used for databases in online transaction processing \(OLTP\) scenarios. By default, row store is used. Column store is used only in online analytical processing \(OLAP\) scenarios where complex queries are performed and the data volume is large. By default, a row-store table is created. For details about differences between row store and column store, see  [Figure 1](#en-us_topic_0283136734_en-us_topic_0237120296_fig1417354233018).

**Figure  1**  Differences between row store and column store<a name="en-us_topic_0283136734_en-us_topic_0237120296_fig1417354233018"></a>  


<img src="figures/en-us_image_0000001189073180.png" style="zoom:70%;" />

In the preceding figure, the upper left part is a row-store table, and the upper right part shows how the row-store table is stored on a disk; the lower left part is a column-store table, and the lower right part shows how the column-store table is stored on a disk.

Both row-store and column-store models have benefits and drawbacks.

<a name="en-us_topic_0283136734_en-us_topic_0237120296_table8447131119519"></a>
<table><thead align="left"><tr id="en-us_topic_0283136734_en-us_topic_0237120296_row16451411125113"><th class="cellrowborder" valign="top" width="14.14141414141414%" id="mcps1.1.4.1.1"><p id="en-us_topic_0283136734_en-us_topic_0237120296_p7453131117518"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p7453131117518"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p7453131117518"></a><strong id="en-us_topic_0283136734_en-us_topic_0237120296_b2453151113516"><a name="en-us_topic_0283136734_en-us_topic_0237120296_b2453151113516"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_b2453151113516"></a>Storage Model</strong></p>
</th>
<th class="cellrowborder" valign="top" width="39.39393939393939%" id="mcps1.1.4.1.2"><p id="en-us_topic_0283136734_en-us_topic_0237120296_p199221916145119"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p199221916145119"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p199221916145119"></a><strong id="b233145620351"><a name="b233145620351"></a><a name="b233145620351"></a>Benefit</strong></p>
</th>
<th class="cellrowborder" valign="top" width="46.464646464646464%" id="mcps1.1.4.1.3"><p id="en-us_topic_0283136734_en-us_topic_0237120296_p164535117512"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p164535117512"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p164535117512"></a><strong id="b101657593359"><a name="b101657593359"></a><a name="b101657593359"></a>Drawback</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136734_en-us_topic_0237120296_row445671111516"><td class="cellrowborder" valign="top" width="14.14141414141414%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_p124571811115110"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p124571811115110"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p124571811115110"></a>Row store</p>
</td>
<td class="cellrowborder" valign="top" width="39.39393939393939%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_p1654125142613"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p1654125142613"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p1654125142613"></a>Record data is stored together. Data can be easily inserted and updated.</p>
</td>
<td class="cellrowborder" valign="top" width="46.464646464646464%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_p1727415115212"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p1727415115212"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p1727415115212"></a>All the columns of a record are read after the <strong id="b35677378251825"><a name="b35677378251825"></a><a name="b35677378251825"></a>SELECT</strong> statement is executed even if only certain columns are required.</p>
</td>
</tr>
<tr id="en-us_topic_0283136734_en-us_topic_0237120296_row1546241120517"><td class="cellrowborder" valign="top" width="14.14141414141414%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_p6462111105112"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p6462111105112"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p6462111105112"></a>Column store</p>
</td>
<td class="cellrowborder" valign="top" width="39.39393939393939%" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0283136734_en-us_topic_0237120296_ul1556111817542"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_ul1556111817542"></a><ul id="en-us_topic_0283136734_en-us_topic_0237120296_ul1556111817542"><li>Only the columns involved in a query are read.</li><li>Projection is efficient.</li><li>Any column can serve as an index.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="46.464646464646464%" headers="mcps1.1.4.1.3 "><a name="en-us_topic_0283136734_en-us_topic_0237120296_ul1796819916297"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_ul1796819916297"></a><ul id="en-us_topic_0283136734_en-us_topic_0237120296_ul1796819916297"><li>The selected columns need to be reconstructed after the <strong id="b144252121451825"><a name="b144252121451825"></a><a name="b144252121451825"></a>SELECT</strong> statement is executed.</li><li>Data cannot be easily inserted or updated.</li></ul>
</td>
</tr>
</tbody>
</table>

Generally, if a table contains many columns \(called a wide table\) and its query involves only a few columns, column store is recommended. Row store is recommended if a table contains only a few columns and a query involves most of the columns.

<a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_table3891877"></a>
<table><thead align="left"><tr id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_row12104456"><th class="cellrowborder" valign="top" width="19.73%" id="mcps1.1.3.1.1"><p id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p40936856"><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p40936856"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p40936856"></a><strong id="b1164522823710"><a name="b1164522823710"></a><a name="b1164522823710"></a>Storage Model</strong></p>
</th>
<th class="cellrowborder" valign="top" width="80.27%" id="mcps1.1.3.1.2"><p id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p46632853"><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p46632853"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p46632853"></a><strong id="b15414632173710"><a name="b15414632173710"></a><a name="b15414632173710"></a>Application Scenario</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_row38265132"><td class="cellrowborder" valign="top" width="19.73%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p12468015"><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p12468015"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p12468015"></a>Row store</p>
</td>
<td class="cellrowborder" valign="top" width="80.27%" headers="mcps1.1.3.1.2 "><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul61112063105242"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul61112063105242"></a><ul id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul61112063105242"><li>Point queries (simple index-based queries that only return a few records)</li><li>Scenarios requiring frequent addition, deletion, and modification</li><li>Frequent updates and few insertions.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_row64051613"><td class="cellrowborder" valign="top" width="19.73%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p20798169"><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p20798169"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p20798169"></a>Column store</p>
</td>
<td class="cellrowborder" valign="top" width="80.27%" headers="mcps1.1.3.1.2 "><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul38359637105253"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul38359637105253"></a><ul id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul38359637105253"><li>Statistical analysis queries (requiring a large number of association and grouping operations)</li><li>Ad hoc queries (using uncertain query conditions and unable to utilize indexes to scan row-store tables)</li><li>A large amount of data is inserted at a time.</li><li>If a table contains a large number of columns, you are advised to use a column-store table.</li><li>If only a small number of columns (less than 50% of the total) is queried each time, use a column-store table.</li></ul>
</td>
</tr>
</tbody>
</table>

## Syntax<a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0066331191_en-us_topic_0059778293_s0420ba4662e14672b8ec55415ddca941"></a>

```
CREATE TABLE table_name 
    (column_name data_type [, ... ])
    [ WITH ( ORIENTATION  = value) ];
```

## Parameter Description<a name="section415419560710"></a>

-   **table\_name**

    Specifies the name of the table to be created.

-   **column\_name**

    Specifies the name of a column to be created in the new table.

-   **data\_type**

    Specifies the data type of the column.

-   **ORIENTATION**

    Specifies the storage mode \(row-store, column-store, or ORC\) of table data. This parameter cannot be modified once it is set.

    Value range:

    -   **ROW**  indicates that table data is stored in rows.

        **ROW**  applies to OLTP services and scenarios with a large number of point queries or addition/deletion operations.

    -   **COLUMN**  indicates that the data is stored in columns.

        **COLUMN**  applies to the data warehouse service, which has a large amount of aggregation computing, and involves a few column operations.



## Example<a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0066331191_en-us_topic_0059778293_s05b88010070445598ab2a86454e5d88b"></a>

If  **ORIENTATION**  is not specified, the table is a row-store table by default. For example:

```
openGauss=# CREATE TABLE customer_test1
(
  state_ID   CHAR(2),
  state_NAME VARCHAR2(40),
  area_ID    NUMBER
);

-- Delete the table.
openGauss=# DROP TABLE customer_test1;
```

When creating a column-store table, you need to specify the  **ORIENTATION**  parameter. For example:

```
openGauss=# CREATE TABLE customer_test2
(
  state_ID   CHAR(2),
  state_NAME VARCHAR2(40),
  area_ID    NUMBER
)
WITH (ORIENTATION = COLUMN);

-- Delete the table.
openGauss=# DROP TABLE customer_test2;
```

