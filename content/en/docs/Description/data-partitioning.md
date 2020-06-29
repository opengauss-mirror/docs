# Data Partitioning<a name="EN-US_TOPIC_0241663024"></a>

Most database products partition data. In openGauss, data is partitioned horizontally with a user-specified policy. This operation splits a table into multiple partitions that are not overlapped.

openGauss supports range partitioning. Records to be inserted into a table are divided into multiple ranges based on one or more columns. A partition for each range is created to store data, and partition ranges do not overlap. If you specify the  **PARTITION**  parameter in the  **CREATE TABLE**  statement, data in the table will be partitioned.

[Table 1](#en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_t77b9e09809f742f1aaadea05d041bc23)  uses an xDR scenario to describe the benefits provided after data is partitioned based on time fragments.

**Table  1**  Partitioning benefits

<a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_t77b9e09809f742f1aaadea05d041bc23"></a>
<table><thead align="left"><tr id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_r136f4522bccc4ec8ac473a07709c0737"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a69f8255bc7d34e4185e6717b1a361ba7"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a69f8255bc7d34e4185e6717b1a361ba7"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a69f8255bc7d34e4185e6717b1a361ba7"></a>Scenario</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_ab0bae0f8c2854331bb3a9ea8850c7098"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_ab0bae0f8c2854331bb3a9ea8850c7098"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_ab0bae0f8c2854331bb3a9ea8850c7098"></a>Benefits</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_rdfb6ee78653a46059253db9ed1e35114"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_adb10431fb35a4efcb1962ceaa08d2369"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_adb10431fb35a4efcb1962ceaa08d2369"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_adb10431fb35a4efcb1962ceaa08d2369"></a>Frequently accessed rows in a table are located in one or a few partitions.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_en-us_topic_0058967181_p879553720320"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_en-us_topic_0058967181_p879553720320"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_en-us_topic_0058967181_p879553720320"></a>Improves access performance by significantly reduces search space.</p>
</td>
</tr>
<tr id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_r7ddefafe50e44ec0bddd409e82ecafa5"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a049e1cf48ef14aab929bae5a6eb6f5b5"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a049e1cf48ef14aab929bae5a6eb6f5b5"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a049e1cf48ef14aab929bae5a6eb6f5b5"></a>Most partition records need to be queried or updated.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a7c16696dbe2e458f99e643fb98adc6d1"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a7c16696dbe2e458f99e643fb98adc6d1"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a7c16696dbe2e458f99e643fb98adc6d1"></a>Improves performance because only one partition rather than the whole table needs to be scanned.</p>
</td>
</tr>
<tr id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_r569c0fbda7794f0b9d7c2f11ab573eab"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_af0999fe5959042b491df03f64c3d0c5c"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_af0999fe5959042b491df03f64c3d0c5c"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_af0999fe5959042b491df03f64c3d0c5c"></a>Records that need to be loaded or deleted in batches are located in one or a few partitions.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a291f441f2f6641899273e4c8920a33e2"><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a291f441f2f6641899273e4c8920a33e2"></a><a name="en-us_topic_0237080621_en-us_topic_0231764089_en-us_topic_0059777656_a291f441f2f6641899273e4c8920a33e2"></a>Improves processing performance because related partitions can be directly read or deleted. Reduces de-fragmentation workloads because records can be deleted in batches.</p>
</td>
</tr>
</tbody>
</table>

Data partitioning provides the following benefits:

-   **Improves manageability:**  Tables and indexes are divided into smaller and more manageable units. Maintenance can be performed on a specific part of a table. This helps data administrators easily manage data.
-   **Improves deletion performance:**  Delete an entire partition rather than delete data row by row.

    The  **DROP TABLE**  syntax can be used to delete both ordinary tables and partitioned tables.

-   **Improves query performance:**  Restrict the volume of data to be checked or manipulated to facilitate query.

    With partition pruning, also known as partition elimination, openGauss filters out unexpected partitions and scans only the remaining partitions. Partition pruning greatly improves query performance.

-   **Partition-wise join**: Partitioning can also improve the performance of multi-table joins by using a technique known as partition-wise join. Partition-wise joins can be applied when two tables are joint and at least one of these tables is partitioned using a join key. Partition-wise joins break a large join into smaller joins of "identical" data sets. "Identical" here is defined as covering the same set of partitioning key values on both sides of the join, ensuring that only a join of these 'identical' data sets will produce a result without considering other data sets.

