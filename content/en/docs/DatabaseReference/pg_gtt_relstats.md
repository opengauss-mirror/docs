# PG\_GTT\_RELSTATS<a name="EN-US_TOPIC_0289900546"></a>

**PG\_GTT\_RELSTATS**  displays basic information about all global temporary tables of the current session by invoking  **pg\_get\_gtt\_relstats**.

**Table  1**  PG\_GTT\_RELSTATS columns

<a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_t9a322933edc649349d16f5bb7c397568"></a>
<table><thead align="left"><tr id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_r479932505d8442ccb53618b9f805b142"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"></a><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"></a><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a7a5a6b204562481691167e8db4875763"><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a7a5a6b204562481691167e8db4875763"></a><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a7a5a6b204562481691167e8db4875763"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_r4d9bbbb837e94860b29d9c5b818b0295"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"></a><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"></a><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"></a><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"></a>Schema name</p>
</td>
</tr>
<tr id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_r342532367f8748eeb8d51c5587e1781d"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"></a><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"></a>tablename</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"></a><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"></a><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"></a>Name of a global temporary table</p>
</td>
</tr>
<tr id="en-us_topic_0283137729_row19383959131511"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137729_p12384195914157"><a name="en-us_topic_0283137729_p12384195914157"></a><a name="en-us_topic_0283137729_p12384195914157"></a>relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137729_p16384195913153"><a name="en-us_topic_0283137729_p16384195913153"></a><a name="en-us_topic_0283137729_p16384195913153"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137729_p1738414594157"><a name="en-us_topic_0283137729_p1738414594157"></a><a name="en-us_topic_0283137729_p1738414594157"></a>ID of a file object</p>
</td>
</tr>
<tr id="en-us_topic_0283137729_row185121530162"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137729_p1951212321613"><a name="en-us_topic_0283137729_p1951212321613"></a><a name="en-us_topic_0283137729_p1951212321613"></a>relpages</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137729_p1512139162"><a name="en-us_topic_0283137729_p1512139162"></a><a name="en-us_topic_0283137729_p1512139162"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137729_p551293131613"><a name="en-us_topic_0283137729_p551293131613"></a><a name="en-us_topic_0283137729_p551293131613"></a>Number of disk pages of a global temporary table</p>
</td>
</tr>
<tr id="en-us_topic_0283137729_row1526519522156"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137729_p526645261517"><a name="en-us_topic_0283137729_p526645261517"></a><a name="en-us_topic_0283137729_p526645261517"></a>reltuples</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137729_p82665522153"><a name="en-us_topic_0283137729_p82665522153"></a><a name="en-us_topic_0283137729_p82665522153"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137729_p1626675218151"><a name="en-us_topic_0283137729_p1626675218151"></a><a name="en-us_topic_0283137729_p1626675218151"></a>Number of records in a global temporary table</p>
</td>
</tr>
<tr id="en-us_topic_0283137729_row42084282166"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137729_p1820815288163"><a name="en-us_topic_0283137729_p1820815288163"></a><a name="en-us_topic_0283137729_p1820815288163"></a>relallvisible</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137729_p520842820165"><a name="en-us_topic_0283137729_p520842820165"></a><a name="en-us_topic_0283137729_p520842820165"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137729_p178844523263"><a name="en-us_topic_0283137729_p178844523263"></a><a name="en-us_topic_0283137729_p178844523263"></a>Number of pages that are marked as all visible</p>
</td>
</tr>
<tr id="en-us_topic_0283137729_row1921922101617"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137729_p8214222169"><a name="en-us_topic_0283137729_p8214222169"></a><a name="en-us_topic_0283137729_p8214222169"></a>relfrozenxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137729_p15210224169"><a name="en-us_topic_0283137729_p15210224169"></a><a name="en-us_topic_0283137729_p15210224169"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137729_p8112956193210"><a name="en-us_topic_0283137729_p8112956193210"></a><a name="en-us_topic_0283137729_p8112956193210"></a>All transaction IDs before this one have been replaced with a permanent (frozen) transaction ID in the table.</p>
</td>
</tr>
<tr id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137729_p19436184631611"><a name="en-us_topic_0283137729_p19436184631611"></a><a name="en-us_topic_0283137729_p19436184631611"></a>relminmxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="en-us_topic_0283137729_en-us_topic_0237122419_en-us_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137729_p1490835111712"><a name="en-us_topic_0283137729_p1490835111712"></a><a name="en-us_topic_0283137729_p1490835111712"></a>Reserved</p>
</td>
</tr>
</tbody>
</table>

