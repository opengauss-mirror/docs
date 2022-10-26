# Binary Types<a name="EN-US_TOPIC_0289900777"></a>

[Table 1](#en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_t910f42f45b374d94afe2798c42fc5ef6)  lists the binary data types supported by openGauss.

**Table  1**  Binary data types

<a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_t910f42f45b374d94afe2798c42fc5ef6"></a>
<table><thead align="left"><tr id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_r4c641dab15474e4d84b23ae5d6bab90b"><th class="cellrowborder" valign="top" width="16.82%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_afcf8ccbfcdea49368a4dc7e0498bc185"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_afcf8ccbfcdea49368a4dc7e0498bc185"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_afcf8ccbfcdea49368a4dc7e0498bc185"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="35.18%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a24e8ed03de424a75bdad6cb7a6f9a6cf"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a24e8ed03de424a75bdad6cb7a6f9a6cf"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a24e8ed03de424a75bdad6cb7a6f9a6cf"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="48%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a45f7e1ea40154bcdbbcda206cbd9cd99"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a45f7e1ea40154bcdbbcda206cbd9cd99"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a45f7e1ea40154bcdbbcda206cbd9cd99"></a>Storage Space</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_rf63072d5d612426f9aab20483b0b4838"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"></a>BLOB</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"></a>Binary large object (BLOB).</p>
<div class="note" id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a>Column storage cannot be used for the BLOB type.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"></a>Its maximum length is 32 TB (35184372088832 bytes).</p>
</td>
</tr>
<tr id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_rc75b9f1550a84c8d9f3808f11077c5eb"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a1e1de28da3144be08f1ac294cec4ddfa"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a1e1de28da3144be08f1ac294cec4ddfa"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a1e1de28da3144be08f1ac294cec4ddfa"></a>RAW</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a725886ba60f64e96930940a865e0383c"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a725886ba60f64e96930940a865e0383c"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a725886ba60f64e96930940a865e0383c"></a>Variable-length hexadecimal string.</p>
<div class="note" id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_n7545c58ce79644b194858933fe2523b7"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_n7545c58ce79644b194858933fe2523b7"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_n7545c58ce79644b194858933fe2523b7"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_aa56c6af1e5e14f5392f15a4e9911f601"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_aa56c6af1e5e14f5392f15a4e9911f601"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_aa56c6af1e5e14f5392f15a4e9911f601"></a>Column storage cannot be used for the raw type.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_aff8ea58e93444332bace62ac9fc672b7"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_aff8ea58e93444332bace62ac9fc672b7"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_aff8ea58e93444332bace62ac9fc672b7"></a>4 bytes plus the actual hexadecimal string. Its maximum length is 1073733621 bytes (1 GB – 8203 bytes).</p>
</td>
</tr>
<tr id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_rf645c21fabe14437853573dddc028950"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"></a>BYTEA</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_en-us_topic_0058966116_p936819914415"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_en-us_topic_0058966116_p936819914415"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_en-us_topic_0058966116_p936819914415"></a>Variable-length binary string.</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"></a><a name="en-us_topic_0283136911_en-us_topic_0237121951_en-us_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"></a>4 bytes plus the actual binary string. Its maximum length is 1073733621 bytes (1 GB – 8203 bytes).</p>
</td>
</tr>
<tr id="row174646613321"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="p04649613322"><a name="p04649613322"></a><a name="p04649613322"></a>BYTEAWITHOUTORDERWITHEQUALCOL</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p046419673217"><a name="p046419673217"></a><a name="p046419673217"></a>Variable-length binary character string (new type for the encryption feature. If the encryption type of the encrypted column is specified as deterministic encryption, the column type is BYTEAWITHOUTORDERWITHEQUALCOL). The original data type is displayed when the encrypted table is printed by running the meta command.</p>
<div class="note" id="note1692165094216"><a name="note1692165094216"></a><a name="note1692165094216"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p269225034219"><a name="p269225034219"></a><a name="p269225034219"></a>In the <span id="text1230917313181"><a name="text1230917313181"></a><a name="text1230917313181"></a>Lite</span> scenario, openGauss does not support encrypted databases.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="p15464206203213"><a name="p15464206203213"></a><a name="p15464206203213"></a>4 bytes plus the actual binary string. The maximum value is 1073741771 bytes (1 GB – 53 bytes).</p>
</td>
</tr>
<tr id="row1391731014327"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="p991820103327"><a name="p991820103327"></a><a name="p991820103327"></a>BYTEAWITHOUTORDERCOL</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p491813103322"><a name="p491813103322"></a><a name="p491813103322"></a>Variable-length binary character string (new type for the encryption feature. If the encryption type of the encrypted column is specified as random encryption, the column type is BYTEAWITHOUTORDERCOL). The original data type is displayed when the encrypted table is printed by running the meta command.</p>
<div class="note" id="note1249734184319"><a name="note1249734184319"></a><a name="note1249734184319"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p3497141104318"><a name="p3497141104318"></a><a name="p3497141104318"></a>In the <span id="text19896746185511"><a name="text19896746185511"></a><a name="text19896746185511"></a>Lite</span> scenario, openGauss does not support encrypted databases.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="p1391812106321"><a name="p1391812106321"></a><a name="p1391812106321"></a>4 bytes plus the actual binary string. The maximum value is 1073741771 bytes (1 GB – 53 bytes).</p>
</td>
</tr>
<tr id="row5701370566"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="p10702679562"><a name="p10702679562"></a><a name="p10702679562"></a>_BYTEAWITHOUTORDERWITHEQUALCOL</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p770215714569"><a name="p770215714569"></a><a name="p770215714569"></a>Variable-length binary character string, which is a new type for the encryption feature.</p>
<div class="note" id="note28795446436"><a name="note28795446436"></a><a name="note28795446436"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p1879164412432"><a name="p1879164412432"></a><a name="p1879164412432"></a>In the <span id="text18775951165518"><a name="text18775951165518"></a><a name="text18775951165518"></a>Lite</span> scenario, openGauss does not support encrypted databases.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="p1470207165616"><a name="p1470207165616"></a><a name="p1470207165616"></a>4 bytes plus the actual binary string. The maximum value is 1073741771 bytes (1 GB – 53 bytes).</p>
</td>
</tr>
<tr id="row105711011165620"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="p557112117563"><a name="p557112117563"></a><a name="p557112117563"></a>_BYTEAWITHOUTORDERCOL</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p657111119565"><a name="p657111119565"></a><a name="p657111119565"></a>Variable-length binary character string, which is a new type for the encryption feature.</p>
<div class="note" id="note9535647174313"><a name="note9535647174313"></a><a name="note9535647174313"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p1753524764312"><a name="p1753524764312"></a><a name="p1753524764312"></a>In the <span id="text410311546557"><a name="text410311546557"></a><a name="text410311546557"></a>Lite</span> scenario, openGauss does not support encrypted databases.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="p75714112563"><a name="p75714112563"></a><a name="p75714112563"></a>4 bytes plus the actual binary string. The maximum value is 1073741771 bytes (1 GB – 53 bytes).</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   In addition to the size limitation on each column, the total size of each tuple is 1073733621 bytes \(1 GB to 8203 bytes\).
>-   BYTEAWITHOUTORDERWITHEQUALCOL, BYTEAWITHOUTORDERCOL, \_BYTEAWITHOUTORDERWITHEQUALCOL, and \_BYTEAWITHOUTORDERCOL cannot be directly used to create a table.

Example:

```
-- Create a table.
openGauss=#  CREATE TABLE blob_type_t1 
(
    BT_COL1 INTEGER,
    BT_COL2 BLOB,
    BT_COL3 RAW,
    BT_COL4 BYTEA
) ;

-- Insert data.
openGauss=#  INSERT INTO blob_type_t1 VALUES(10,empty_blob(),
HEXTORAW('DEADBEEF'),E'\\xDEADBEEF');

-- Query data in the table.
openGauss=#  SELECT * FROM blob_type_t1;
 bt_col1 | bt_col2 | bt_col3  |  bt_col4   
---------+---------+----------+------------
      10 |         | DEADBEEF | \xdeadbeef
(1 row)

-- Delete the table.
openGauss=#  DROP TABLE blob_type_t1;
```
