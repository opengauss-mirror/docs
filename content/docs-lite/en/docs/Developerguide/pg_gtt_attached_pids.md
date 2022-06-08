# PG\_GTT\_ATTACHED\_PIDS<a name="EN-US_TOPIC_0289900591"></a>

**PG\_GTT\_ATTACHED\_PIDS**  checks which sessions are using global temporary tables by calling the  **pg\_get\_attached\_pid**  function.

**Table  1**  PG\_GTT\_ATTACHED\_PIDS columns

<a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_t9a322933edc649349d16f5bb7c397568"></a>
<table><thead align="left"><tr id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_r479932505d8442ccb53618b9f805b142"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"></a><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"></a><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a7a5a6b204562481691167e8db4875763"><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a7a5a6b204562481691167e8db4875763"></a><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a7a5a6b204562481691167e8db4875763"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_r4d9bbbb837e94860b29d9c5b818b0295"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"></a><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"></a><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"></a><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"></a>Schema name.</p>
</td>
</tr>
<tr id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_r342532367f8748eeb8d51c5587e1781d"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"></a><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"></a>tablename</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"></a><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"></a><a name="en-us_topic_0283136569_en-us_topic_0237122419_en-us_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"></a>Name of a global temporary table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136569_row19383959131511"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136569_p3872633441"><a name="en-us_topic_0283136569_p3872633441"></a><a name="en-us_topic_0283136569_p3872633441"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136569_p16384195913153"><a name="en-us_topic_0283136569_p16384195913153"></a><a name="en-us_topic_0283136569_p16384195913153"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136569_p1738414594157"><a name="en-us_topic_0283136569_p1738414594157"></a><a name="en-us_topic_0283136569_p1738414594157"></a>OID of a global temporary table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136569_row185121530162"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136569_p1951212321613"><a name="en-us_topic_0283136569_p1951212321613"></a><a name="en-us_topic_0283136569_p1951212321613"></a>pids</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136569_p1512139162"><a name="en-us_topic_0283136569_p1512139162"></a><a name="en-us_topic_0283136569_p1512139162"></a>bigint[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136569_p551293131613"><a name="en-us_topic_0283136569_p551293131613"></a><a name="en-us_topic_0283136569_p551293131613"></a>Thread PID list.</p>
</td>
</tr>
</tbody>
</table>

