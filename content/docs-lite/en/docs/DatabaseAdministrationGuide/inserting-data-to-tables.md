# Inserting Data to Tables<a name="EN-US_TOPIC_0289900995"></a>

A new table contains no data. You need to insert data to the table before using it. This section describes how to insert a row or multiple rows of data using the  **[INSERT](../SQLReference/insert.md)**  command and to insert data from a specified table. For details about how to insert a large amount of data to a table in batches, see  [Importing Data](importing-data.md).

## Background<a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s0ba8d61b4741479585fa6c86df04bad1"></a>

The length of a character on the server and client may vary by the character sets they use. A string entered on the client will be processed based on the server's character set, so the result may differ from expected.

**Table  1**  Comparison of character set output between the client and server

<a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_t49e6b6005b0249a9ad3f28a3039986bb"></a>
<table><thead align="left"><tr id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_r7c6d804b06124cac81f2442c1bc49ef7"><th class="cellrowborder" valign="top" width="31.45%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a609b2d691cbb40429289b3e090272327"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a609b2d691cbb40429289b3e090272327"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a609b2d691cbb40429289b3e090272327"></a>Procedure</p>
</th>
<th class="cellrowborder" valign="top" width="33.71%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aef37439eba0642ddb7454de84315bf19"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aef37439eba0642ddb7454de84315bf19"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aef37439eba0642ddb7454de84315bf19"></a>Server and Client Use Same Encoding</p>
</th>
<th class="cellrowborder" valign="top" width="34.839999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ac050a387f69f4c02b774c72a219282e2"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ac050a387f69f4c02b774c72a219282e2"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ac050a387f69f4c02b774c72a219282e2"></a>Server and Client Use Different Encoding</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_r716a25ea29ca48398df44e14af99dbdb"><td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ae610a6c6ff374567bb9187ece79c9e88"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ae610a6c6ff374567bb9187ece79c9e88"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ae610a6c6ff374567bb9187ece79c9e88"></a>No operations are performed to the string while it is saved and read.</p>
</td>
<td class="cellrowborder" valign="top" width="33.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_adff3506b089549feab2a87a8467891ec"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_adff3506b089549feab2a87a8467891ec"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_adff3506b089549feab2a87a8467891ec"></a>Your expected result is returned.</p>
</td>
<td class="cellrowborder" valign="top" width="34.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a4b6512a21f5647fabff22c53aa48d34c"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a4b6512a21f5647fabff22c53aa48d34c"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a4b6512a21f5647fabff22c53aa48d34c"></a>If the encoding for input and output on the client is the same, your expected result is returned.</p>
</td>
</tr>
<tr id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_rf4d805d1319b4b1da84eff7cac688047"><td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a48e8eb6224a64d47bbc3d0152dea40e9"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a48e8eb6224a64d47bbc3d0152dea40e9"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a48e8eb6224a64d47bbc3d0152dea40e9"></a>Operations (such as executing string functions) are performed to the string while it is saved and read.</p>
</td>
<td class="cellrowborder" valign="top" width="33.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_adb0c77ef95924ead999fecf0708d0bbe"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_adb0c77ef95924ead999fecf0708d0bbe"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_adb0c77ef95924ead999fecf0708d0bbe"></a>Your expected result is returned.</p>
</td>
<td class="cellrowborder" valign="top" width="34.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a24083d955f6844179354617622fca19f"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a24083d955f6844179354617622fca19f"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a24083d955f6844179354617622fca19f"></a>The result may differ from expected, depending on the operations performed to the string.</p>
</td>
</tr>
<tr id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_r6ec33da20a114e64b50f637c5144b79f"><td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_af4ec71ef3f2047e987b1baa93ad4fb20"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_af4ec71ef3f2047e987b1baa93ad4fb20"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_af4ec71ef3f2047e987b1baa93ad4fb20"></a>A long string is truncated while it is saved.</p>
</td>
<td class="cellrowborder" valign="top" width="33.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ab41c57052d844dd79b1c49b11b6bf0d0"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ab41c57052d844dd79b1c49b11b6bf0d0"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ab41c57052d844dd79b1c49b11b6bf0d0"></a>Your expected result is returned.</p>
</td>
<td class="cellrowborder" valign="top" width="34.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a052b3f5c7b504e51a4fa93f81991ac2d"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a052b3f5c7b504e51a4fa93f81991ac2d"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a052b3f5c7b504e51a4fa93f81991ac2d"></a>If the character sets used on the client and server have different character length, the result may differ from expected.</p>
</td>
</tr>
</tbody>
</table>

More than one of the preceding operations can be performed to a string. For example, if the character sets of the client and server are different, a string may be processed and then truncated. In this case, the result will also be unexpected. For details, see  [Table 2](#en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_t8b4da148118a4913925a053cd07ca3c0).

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>Long strings are truncated only if  **DBCOMPATIBILITY**  is set to  **TD**  \(compatible with Teradata\) and  **[td\_compatible\_truncation](../DataBaseReference/platform-and-client-compatibility.md#en-us_topic_0237124738_en-us_topic_0059779195_sb8212ce57eb9432a972e390f77203b7c)**  is set to  **on**.

Run the following commands to create  **table1**  and  **table2**  to be used in the example:

```
openGauss=# CREATE TABLE table1(id int, a char(6), b varchar(6),c varchar(6));
openGauss=# CREATE TABLE table2(id int, a char(20), b varchar(20),c varchar(20));
```

**Table  2**  Examples

<a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_t8b4da148118a4913925a053cd07ca3c0"></a>
<table><thead align="left"><tr id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_r8f6337d2d32445fe96f844a43bd54158"><th class="cellrowborder" valign="top" width="7.520752075207521%" id="mcps1.2.8.1.1"><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a964ddab24d0e4e249986a8dc1951a8db"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a964ddab24d0e4e249986a8dc1951a8db"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a964ddab24d0e4e249986a8dc1951a8db"></a>No.</p>
</th>
<th class="cellrowborder" valign="top" width="10.101010101010102%" id="mcps1.2.8.1.2"><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a5cd43742046e4d319480eb90f64531bd"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a5cd43742046e4d319480eb90f64531bd"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a5cd43742046e4d319480eb90f64531bd"></a>Server Character Set</p>
</th>
<th class="cellrowborder" valign="top" width="9.72097209720972%" id="mcps1.2.8.1.3"><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aedeec007ed5c4f778abf718a9e7edd7f"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aedeec007ed5c4f778abf718a9e7edd7f"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aedeec007ed5c4f778abf718a9e7edd7f"></a>Client Character Set</p>
</th>
<th class="cellrowborder" valign="top" width="12.361236123612361%" id="mcps1.2.8.1.4"><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a057b9f2a55fb49d187157bf35bc22158"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a057b9f2a55fb49d187157bf35bc22158"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a057b9f2a55fb49d187157bf35bc22158"></a>Automatic Truncation Enabled</p>
</th>
<th class="cellrowborder" valign="top" width="22.882288228822883%" id="mcps1.2.8.1.5"><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a9186930615fc4a6282dc148a108b1911"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a9186930615fc4a6282dc148a108b1911"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a9186930615fc4a6282dc148a108b1911"></a>Example</p>
</th>
<th class="cellrowborder" valign="top" width="17.54175417541754%" id="mcps1.2.8.1.6"><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a41f2efe6974243f1aca2ece4c2c36bdd"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a41f2efe6974243f1aca2ece4c2c36bdd"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a41f2efe6974243f1aca2ece4c2c36bdd"></a>Result</p>
</th>
<th class="cellrowborder" valign="top" width="19.87198719871987%" id="mcps1.2.8.1.7"><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ad90b0149847945719a7cf226ee66e65f"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ad90b0149847945719a7cf226ee66e65f"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ad90b0149847945719a7cf226ee66e65f"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_r79bad4abdb584ec9811f2d57f4a2e3aa"><td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.8.1.1 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a57d58f1916394d70a2bb1994ef6a884a"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a57d58f1916394d70a2bb1994ef6a884a"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a57d58f1916394d70a2bb1994ef6a884a"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="10.101010101010102%" headers="mcps1.2.8.1.2 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a646ecdf617024b6a8fd2abe072b09e40"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a646ecdf617024b6a8fd2abe072b09e40"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a646ecdf617024b6a8fd2abe072b09e40"></a>SQL_ASCII</p>
</td>
<td class="cellrowborder" valign="top" width="9.72097209720972%" headers="mcps1.2.8.1.3 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a0c980e260af944d28769d15fbab54cc4"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a0c980e260af944d28769d15fbab54cc4"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a0c980e260af944d28769d15fbab54cc4"></a>UTF8</p>
</td>
<td class="cellrowborder" valign="top" width="12.361236123612361%" headers="mcps1.2.8.1.4 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a67b6f259f2aa4f45b2ae50e991352224"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a67b6f259f2aa4f45b2ae50e991352224"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a67b6f259f2aa4f45b2ae50e991352224"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="22.882288228822883%" headers="mcps1.2.8.1.5 "><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s2f8d34af767648f298651a83ba1832f8"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s2f8d34af767648f298651a83ba1832f8"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s2f8d34af767648f298651a83ba1832f8">openGauss=# <strong id="b19181638659"><a name="b19181638659"></a><a name="b19181638659"></a><strong id="b0918153817511"><a name="b0918153817511"></a><a name="b0918153817511"></a>INSERT </strong>INTO </strong><em id="i199181381954"><a name="i199181381954"></a><a name="i199181381954"></a>table1 </em><strong id="b15919638558"><a name="b15919638558"></a><a name="b15919638558"></a>VALUES</strong>(<em id="i69192380516"><a name="i69192380516"></a><a name="i69192380516"></a>1,reverse('123AA78'),reverse('123AA78'),reverse('123AA78')</em>);</pre>
</td>
<td class="cellrowborder" valign="top" width="17.54175417541754%" headers="mcps1.2.8.1.6 "><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s7e427c1233d0426482fc10a4260d6985"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s7e427c1233d0426482fc10a4260d6985"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s7e427c1233d0426482fc10a4260d6985">id |a|b|c
----+------+------+------
1 | 87| 87| 87</pre>
</td>
<td class="cellrowborder" valign="top" width="19.87198719871987%" headers="mcps1.2.8.1.7 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a0ddb518579984bc59064121b2d7620ef"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a0ddb518579984bc59064121b2d7620ef"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a0ddb518579984bc59064121b2d7620ef"></a>A string is reversed on the server and then truncated. Because character sets used by the server and client are different, character A is displayed in multiple bytes on the server and the result is incorrect.</p>
</td>
</tr>
<tr id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_rbd1f7c54c0014dc7928c5db844dbfdfb"><td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.8.1.1 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a3ee69d13f18f4e3682131b452a28f16c"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a3ee69d13f18f4e3682131b452a28f16c"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a3ee69d13f18f4e3682131b452a28f16c"></a>2</p>
</td>
<td class="cellrowborder" valign="top" width="10.101010101010102%" headers="mcps1.2.8.1.2 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a9b6385d059cc4d7dbde52d28d6fa3b6d"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a9b6385d059cc4d7dbde52d28d6fa3b6d"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a9b6385d059cc4d7dbde52d28d6fa3b6d"></a>SQL_ASCII</p>
</td>
<td class="cellrowborder" valign="top" width="9.72097209720972%" headers="mcps1.2.8.1.3 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a8cb35062bdca4056950c64121ad895af"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a8cb35062bdca4056950c64121ad895af"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a8cb35062bdca4056950c64121ad895af"></a>UTF8</p>
</td>
<td class="cellrowborder" valign="top" width="12.361236123612361%" headers="mcps1.2.8.1.4 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a8f6c74098ecf4db1b407e57f4f56c3bd"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a8f6c74098ecf4db1b407e57f4f56c3bd"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a8f6c74098ecf4db1b407e57f4f56c3bd"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="22.882288228822883%" headers="mcps1.2.8.1.5 "><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s10628f22d6c74ec19dd691f1f3e7f93b"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s10628f22d6c74ec19dd691f1f3e7f93b"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s10628f22d6c74ec19dd691f1f3e7f93b">openGauss=# <strong id="b5392672611"><a name="b5392672611"></a><a name="b5392672611"></a>INSERT INTO</strong> <em id="i9392167165"><a name="i9392167165"></a><a name="i9392167165"></a>table1</em> <strong id="b13921077616"><a name="b13921077616"></a><a name="b13921077616"></a>VALUES</strong>(<em id="i163921076610"><a name="i163921076610"></a><a name="i163921076610"></a>2,reverse('123A78'),reverse('123A78'),reverse('123A78')</em>);</pre>
</td>
<td class="cellrowborder" valign="top" width="17.54175417541754%" headers="mcps1.2.8.1.6 "><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_scea3adfd758045f6a99f1dfe675d765e"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_scea3adfd758045f6a99f1dfe675d765e"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_scea3adfd758045f6a99f1dfe675d765e">id |a|b|c
----+------+------+------
2 | 873| 873| 873</pre>
</td>
<td class="cellrowborder" valign="top" width="19.87198719871987%" headers="mcps1.2.8.1.7 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ab2492bb3c58d40c79577dcf53213691a"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ab2492bb3c58d40c79577dcf53213691a"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ab2492bb3c58d40c79577dcf53213691a"></a>A string is reversed and then automatically truncated. Therefore, the result is unexpected.</p>
</td>
</tr>
<tr id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_r0ca5245963b943088323125db9176602"><td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.8.1.1 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a6ee5508bded2429596788b77f3e2506a"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a6ee5508bded2429596788b77f3e2506a"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a6ee5508bded2429596788b77f3e2506a"></a>3</p>
</td>
<td class="cellrowborder" valign="top" width="10.101010101010102%" headers="mcps1.2.8.1.2 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a93da725aa13949b49fbf46f43e480bd3"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a93da725aa13949b49fbf46f43e480bd3"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a93da725aa13949b49fbf46f43e480bd3"></a>SQL_ASCII</p>
</td>
<td class="cellrowborder" valign="top" width="9.72097209720972%" headers="mcps1.2.8.1.3 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aeee7482292ec4b12b45557c0b8574a48"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aeee7482292ec4b12b45557c0b8574a48"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aeee7482292ec4b12b45557c0b8574a48"></a>UTF8</p>
</td>
<td class="cellrowborder" valign="top" width="12.361236123612361%" headers="mcps1.2.8.1.4 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ae2cb6622bdf645d7aa58e6ba1cc86acc"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ae2cb6622bdf645d7aa58e6ba1cc86acc"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ae2cb6622bdf645d7aa58e6ba1cc86acc"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="22.882288228822883%" headers="mcps1.2.8.1.5 "><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s5d4b1482713840b186d420eebb2d82ea"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s5d4b1482713840b186d420eebb2d82ea"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s5d4b1482713840b186d420eebb2d82ea">openGauss=# <strong id="b129316352619"><a name="b129316352619"></a><a name="b129316352619"></a>INSERT</strong> <strong id="b1159409610"><a name="b1159409610"></a><a name="b1159409610"></a>INTO</strong> <em id="i9878134518613"><a name="i9878134518613"></a><a name="i9878134518613"></a>table1</em> <strong id="b171653513610"><a name="b171653513610"></a><a name="b171653513610"></a>VALUES</strong>(<em id="i18792657061"><a name="i18792657061"></a><a name="i18792657061"></a>3,'87A123','87A123','87A123'</em>);</pre>
</td>
<td class="cellrowborder" valign="top" width="17.54175417541754%" headers="mcps1.2.8.1.6 "><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s2c005fb9719f43a9ad6c5cbd9377536b"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s2c005fb9719f43a9ad6c5cbd9377536b"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s2c005fb9719f43a9ad6c5cbd9377536b">id |   a   |   b   |   c
----+-------+-------+-------
  3 | 87A1 | 87A1 | 87A1</pre>
</td>
<td class="cellrowborder" valign="top" width="19.87198719871987%" headers="mcps1.2.8.1.7 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aaac79440e68249358d275e4abc21615a"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aaac79440e68249358d275e4abc21615a"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_aaac79440e68249358d275e4abc21615a"></a>The column length in the string type is an integer multiple of the length in client character encoding. Therefore, the result is correct after truncation.</p>
</td>
</tr>
<tr id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_r002a414d979949629390098b1c83b310"><td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.8.1.1 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_en-us_topic_0058966198_p925108316215"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_en-us_topic_0058966198_p925108316215"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_en-us_topic_0058966198_p925108316215"></a>4</p>
</td>
<td class="cellrowborder" valign="top" width="10.101010101010102%" headers="mcps1.2.8.1.2 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a782e7dcb66d54768a5c527fe08e5afdd"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a782e7dcb66d54768a5c527fe08e5afdd"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a782e7dcb66d54768a5c527fe08e5afdd"></a>SQL_ASCII</p>
</td>
<td class="cellrowborder" valign="top" width="9.72097209720972%" headers="mcps1.2.8.1.3 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_abf82f1368ff1409693bebf51139f190f"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_abf82f1368ff1409693bebf51139f190f"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_abf82f1368ff1409693bebf51139f190f"></a>UTF8</p>
</td>
<td class="cellrowborder" valign="top" width="12.361236123612361%" headers="mcps1.2.8.1.4 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ae4f205a919e5407c916333ce09b6a85c"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ae4f205a919e5407c916333ce09b6a85c"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_ae4f205a919e5407c916333ce09b6a85c"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="22.882288228822883%" headers="mcps1.2.8.1.5 "><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_se4cbf508416e4403b6b69eebc16b185e"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_se4cbf508416e4403b6b69eebc16b185e"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_se4cbf508416e4403b6b69eebc16b185e">openGauss=# <strong id="b16232174720"><a name="b16232174720"></a><a name="b16232174720"></a>INSERT INTO</strong><em id="i182321471374"><a name="i182321471374"></a><a name="i182321471374"></a> table2 </em><strong id="b1523227777"><a name="b1523227777"></a><a name="b1523227777"></a>VALUES</strong>(<em id="i72331171170"><a name="i72331171170"></a><a name="i72331171170"></a>1,reverse('123AA78'),reverse('123AA78'),reverse('123AA78')</em>);
openGauss=# <strong id="b112961624776"><a name="b112961624776"></a><a name="b112961624776"></a>INSERT INTO</strong><em id="i629792418714"><a name="i629792418714"></a><a name="i629792418714"></a> table2 </em><strong id="b72981224377"><a name="b72981224377"></a><a name="b72981224377"></a>VALUES</strong>(<em id="i1829915241771"><a name="i1829915241771"></a><a name="i1829915241771"></a>2,reverse('123A78'),reverse('123A78'),reverse('123A78')</em>);</pre>
</td>
<td class="cellrowborder" valign="top" width="17.54175417541754%" headers="mcps1.2.8.1.6 "><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s4e07674b455a4ce6b22e4f6bd3a89a9d"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s4e07674b455a4ce6b22e4f6bd3a89a9d"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s4e07674b455a4ce6b22e4f6bd3a89a9d">id |a|b|c
----+-------------------+--------+--------
1 | 87 321| 87 321 | 87 321
2 | 87321| 87321| 87321</pre>
</td>
<td class="cellrowborder" valign="top" width="19.87198719871987%" headers="mcps1.2.8.1.7 "><p id="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a178d226418174c40a550594ec8562bac"><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a178d226418174c40a550594ec8562bac"></a><a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_a178d226418174c40a550594ec8562bac"></a>Similar to the first example, multi-byte characters no longer indicate the original characters after being reversed.</p>
</td>
</tr>
</tbody>
</table>

## Procedure<a name="en-us_topic_0283137618_en-us_topic_0237120300_en-us_topic_0059779039_s0ea62284d1624d93b11cd795f6cd0c91"></a>

You need to create a table before inserting data to it. For details about how to create a table, see  [Creating and Managing Tables](creating-and-managing-tables.md).

-   Insert a row to table  **customer\_t1**.

    Data values are arranged in the same order as the columns in the table and are separated by commas \(,\). Generally, column values are text values \(constants\). But column values can also be scalar expressions.

    ```
    openGauss=# INSERT INTO customer_t1(c_customer_sk, c_customer_id, c_first_name) VALUES (3769, 'hello', 'Grace');
    ```

    If you know the sequence of the columns in the table, you can obtain the same result without listing these columns. For example, the following command generates the same result as the preceding command:

    ```
    openGauss=# INSERT INTO customer_t1 VALUES (3769, 'hello', 'Grace');
    ```

    If you do not know some of the column values, you can omit them. If no value is specified for a column, the column is set to the default value. Example:

    ```
    openGauss=# INSERT INTO customer_t1 (c_customer_sk, c_first_name) VALUES (3769, 'Grace');
    
    openGauss=# INSERT INTO customer_t1 VALUES (3769, 'hello');
    ```

    You can also specify the default value of a column or row:

    ```
    openGauss=# INSERT INTO customer_t1 (c_customer_sk, c_customer_id, c_first_name) VALUES (3769, 'hello', DEFAULT);
    
    openGauss=# INSERT INTO customer_t1 DEFAULT VALUES;
    ```

-   To insert multiple rows to a table, run the following command:

    ```
    openGauss=# INSERT INTO customer_t1 (c_customer_sk, c_customer_id, c_first_name) VALUES 
        (6885, 'maps', 'Joes'),
        (4321, 'tpcds', 'Lily'),
        (9527, 'world', 'James');
    ```

    You can also insert multiple rows by running the command for inserting one row for multiple times. However, you are advised to run this command to improve efficiency.

-   Assume that you have created a backup table  **customer\_t2**  for table  **customer\_t1**. To insert data from  **customer\_t1**  to  **customer\_t2**, run the following statements:

    ```
    openGauss=# CREATE TABLE customer_t2
    (
        c_customer_sk             integer,
        c_customer_id             char(5),
        c_first_name              char(6),
        c_last_name               char(8)
    );
    
    openGauss=# INSERT INTO customer_t2 SELECT * FROM customer_t1;
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >If implicit conversion is not implemented between the column data types of the specified table and those of the current table, the two tables must have the same column data types when data is inserted from the specified table to the current table.

-   To delete a backup table, run the following command:

    ```
    openGauss=# DROP TABLE customer_t2 CASCADE;
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >If the table to be deleted is in dependent relationship with other tables, you need to delete its dependent tables first.


