# Planning a Storage Model<a name="EN-US_TOPIC_0289900904"></a>

openGauss supports hybrid row-column storage. Each storage model applies to specific scenarios. Select an appropriate model when creating a table. Generally, openGauss is used for transactional processing databases. By default, row storage is used. Column storage is used only when complex queries in large data volume are performed.

Row-store stores tables to disk partitions by row, and column-store stores tables to disk partitions by column. By default, a row-store table is created. For details about differences between row storage and column storage, see  [Figure 1](#en-us_topic_0283136734_en-us_topic_0237120296_fig1417354233018).

**Figure  1**  Differences between row storage and column storage<a name="en-us_topic_0283136734_en-us_topic_0237120296_fig1417354233018"></a>  


![](figures/en-us_image_0283137534.png)

In the preceding figure, the upper left part is a row-store table, and the upper right part shows how the row-store table is stored on a disk; the lower left part is a column-store table, and the lower right part shows how the column-store table is stored on a disk.

Both storage models have benefits and drawbacks.

<a name="en-us_topic_0283136734_en-us_topic_0237120296_table8447131119519"></a>
<table><thead align="left"><tr id="en-us_topic_0283136734_en-us_topic_0237120296_row16451411125113"><th class="cellrowborder" valign="top" width="14.14141414141414%" id="mcps1.1.4.1.1"><p id="en-us_topic_0283136734_en-us_topic_0237120296_p7453131117518"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p7453131117518"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p7453131117518"></a>Storage Model</p>
</th>
<th class="cellrowborder" valign="top" width="39.39393939393939%" id="mcps1.1.4.1.2"><p id="en-us_topic_0283136734_en-us_topic_0237120296_p199221916145119"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p199221916145119"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p199221916145119"></a>Benefit</p>
</th>
<th class="cellrowborder" valign="top" width="46.464646464646464%" id="mcps1.1.4.1.3"><p id="en-us_topic_0283136734_en-us_topic_0237120296_p164535117512"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p164535117512"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p164535117512"></a>Drawback</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136734_en-us_topic_0237120296_row445671111516"><td class="cellrowborder" valign="top" width="14.14141414141414%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_p124571811115110"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p124571811115110"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p124571811115110"></a>Row storage</p>
</td>
<td class="cellrowborder" valign="top" width="39.39393939393939%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_p1654125142613"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p1654125142613"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p1654125142613"></a>Record data is stored together. Data can be easily inserted and updated.</p>
</td>
<td class="cellrowborder" valign="top" width="46.464646464646464%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_p1727415115212"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p1727415115212"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p1727415115212"></a>All the columns of a record are read after the <strong id="b186814211815"><a name="b186814211815"></a><a name="b186814211815"></a>SELECT</strong> statement is executed even if only certain columns are required.</p>
</td>
</tr>
<tr id="en-us_topic_0283136734_en-us_topic_0237120296_row1546241120517"><td class="cellrowborder" valign="top" width="14.14141414141414%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_p6462111105112"><a name="en-us_topic_0283136734_en-us_topic_0237120296_p6462111105112"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_p6462111105112"></a>Column storage</p>
</td>
<td class="cellrowborder" valign="top" width="39.39393939393939%" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0283136734_en-us_topic_0237120296_ul1556111817542"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_ul1556111817542"></a><ul id="en-us_topic_0283136734_en-us_topic_0237120296_ul1556111817542"><li>Only the columns involved in a query are read.</li><li>Projections are efficient.</li><li>Any column can serve as an index.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="46.464646464646464%" headers="mcps1.1.4.1.3 "><a name="en-us_topic_0283136734_en-us_topic_0237120296_ul1796819916297"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_ul1796819916297"></a><ul id="en-us_topic_0283136734_en-us_topic_0237120296_ul1796819916297"><li>The selected columns need to be reconstructed after the <strong id="b738912301414"><a name="b738912301414"></a><a name="b738912301414"></a>SELECT</strong> statement is executed.</li><li>Data cannot be easily inserted or updated.</li></ul>
</td>
</tr>
</tbody>
</table>

Generally, if a table contains many columns \(called a wide table\) and its query involves only a few columns, column storage is recommended. Row storage is recommended if a table contains only a few columns and a query involves most of the fields.

<a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_table3891877"></a>
<table><thead align="left"><tr id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_row12104456"><th class="cellrowborder" valign="top" width="19.73%" id="mcps1.1.3.1.1"><p id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p40936856"><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p40936856"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p40936856"></a>Storage Model</p>
</th>
<th class="cellrowborder" valign="top" width="80.27%" id="mcps1.1.3.1.2"><p id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p46632853"><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p46632853"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p46632853"></a>Application Scenarios</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_row38265132"><td class="cellrowborder" valign="top" width="19.73%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p12468015"><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p12468015"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p12468015"></a>Row storage</p>
</td>
<td class="cellrowborder" valign="top" width="80.27%" headers="mcps1.1.3.1.2 "><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul61112063105242"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul61112063105242"></a><ul id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul61112063105242"><li>Point queries (simple index-based queries that only return a few records)</li><li>Scenarios requiring frequent addition, deletion, and modification</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_row64051613"><td class="cellrowborder" valign="top" width="19.73%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p20798169"><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p20798169"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_p20798169"></a>Column storage</p>
</td>
<td class="cellrowborder" valign="top" width="80.27%" headers="mcps1.1.3.1.2 "><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul38359637105253"></a><a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul38359637105253"></a><ul id="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0097078338_ul38359637105253"><li>Statistical analysis queries (requiring a large number of association and grouping operations)</li><li>Ad hoc queries (using uncertain query conditions and unable to utilize indexes to scan row-store tables)</li></ul>
</td>
</tr>
</tbody>
</table>

## Row-Store Tables<a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0066331191_en-us_topic_0059778293_s0420ba4662e14672b8ec55415ddca941"></a>

Row-store tables are created by default. In a row-store table, data is stored by row, that is, data in each row is stored continuously. Therefore, this storage model applies to scenarios where data needs to be updated frequently.

```
openGauss=# CREATE TABLE customer_t1
(
  state_ID   CHAR(2),
  state_NAME VARCHAR2(40),
  area_ID    NUMBER
);

--Delete the table.
openGauss=# DROP TABLE customer_t1;
```

## Column-Store Tables<a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0066331191_en-us_topic_0059778293_s05b88010070445598ab2a86454e5d88b"></a>

In a column-store table, data is stored by column, that is, data in each column is stored continuously. The I/O of data query in a single column is small, and column-store tables occupy less storage space than row-store tables. This storage model applies to scenarios where data is inserted in batches, less updated, and queried for statistical analysis. A column-store table cannot be used for point queries.

```
openGauss=# CREATE TABLE customer_t2
(
  state_ID   CHAR(2),
  state_NAME VARCHAR2(40),
  area_ID    NUMBER
)
WITH (ORIENTATION = COLUMN);

--Delete the table.
openGauss=# DROP TABLE customer_t2;
```

## Selecting a Storage Model<a name="en-us_topic_0283136734_en-us_topic_0237120296_en-us_topic_0066331191_en-us_topic_0059778293_s120c7d1deb9046bb96d3d187117b1d2c"></a>

-   Update frequency

    If data is frequently updated, use a row-store table.

-   Data insertion frequency

    If a small amount of data is frequently inserted each time, use a row-store table. If a large amount of data is inserted at a time, use a column-store table.

-   Number of columns

    If a table is to contain many columns, use a column-store table.

-   Number of columns to be queried

    If only a small number of columns \(less than 50% of the total\) is queried each time, use a column-store table.

-   Compression ratio

    The compression ratio of a column-store table is higher than that of a row-store table. High compression ratio consumes more CPU resources.


