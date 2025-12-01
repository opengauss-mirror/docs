# GS\_SQL\_COUNT<a name="EN-US_TOPIC_0289900440"></a>

**GS\_SQL\_COUNT**  displays statistics about five types of running statements \(**SELECT**,  **INSERT**,  **UPDATE**,  **DELETE**, and  **MERGE INTO**\) on the current node of the database.

-   When a common user queries the  **GS\_SQL\_COUNT**  view, statistics about the current node of the user are displayed. When an administrator queries the  **GS\_SQL\_COUNT**  view, statistics about the current node of all users are displayed.
-   When openGauss or the node is restarted, the statistics are cleared and will be measured again.
-   The system counts when a node receives a query, including a query inside openGauss.

**Table  1**  GS\_SQL\_COUNT columns

<a name="en-us_topic_0283136879_en-us_topic_0237122389_t8f0334486f934453827d563b90c86711"></a>
<table><thead align="left"><tr id="en-us_topic_0283136879_en-us_topic_0237122389_r2a0276b542d54fd0808927c2c54b0fc6"><th class="cellrowborder" valign="top" width="25.15%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136879_en-us_topic_0237122389_a5579cdd06a5645b3862144b2131a8649"><a name="en-us_topic_0283136879_en-us_topic_0237122389_a5579cdd06a5645b3862144b2131a8649"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_a5579cdd06a5645b3862144b2131a8649"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="23.75%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136879_en-us_topic_0237122389_a1f7bf547d07e4656a132c0e34ba635ca"><a name="en-us_topic_0283136879_en-us_topic_0237122389_a1f7bf547d07e4656a132c0e34ba635ca"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_a1f7bf547d07e4656a132c0e34ba635ca"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="51.1%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136879_en-us_topic_0237122389_a8447f6b31ba54199a8224fea8463c23d"><a name="en-us_topic_0283136879_en-us_topic_0237122389_a8447f6b31ba54199a8224fea8463c23d"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_a8447f6b31ba54199a8224fea8463c23d"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136879_en-us_topic_0237122389_rf8b75b68e6a24e29931035876b3c3dfb"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_a8f18d3f0e5cd44d096020df47ca28e00"><a name="en-us_topic_0283136879_en-us_topic_0237122389_a8f18d3f0e5cd44d096020df47ca28e00"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_a8f18d3f0e5cd44d096020df47ca28e00"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_aecd744296d7d4b0397b2fe1fd923b6bf"><a name="en-us_topic_0283136879_en-us_topic_0237122389_aecd744296d7d4b0397b2fe1fd923b6bf"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_aecd744296d7d4b0397b2fe1fd923b6bf"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_a8579d68414bb40968ecb2f54fd50bfa3"><a name="en-us_topic_0283136879_en-us_topic_0237122389_a8579d68414bb40968ecb2f54fd50bfa3"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_a8579d68414bb40968ecb2f54fd50bfa3"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_r685dd7e8104e4020b260711d0d1cf9a9"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_ad7f3b45edf4748ef8bf45be74968b4ac"><a name="en-us_topic_0283136879_en-us_topic_0237122389_ad7f3b45edf4748ef8bf45be74968b4ac"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_ad7f3b45edf4748ef8bf45be74968b4ac"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_a0b778f8c6817439484fd5f0cb1d91e8b"><a name="en-us_topic_0283136879_en-us_topic_0237122389_a0b778f8c6817439484fd5f0cb1d91e8b"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_a0b778f8c6817439484fd5f0cb1d91e8b"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_abd4a7662d8784ec1890fd6e25a2ce17d"><a name="en-us_topic_0283136879_en-us_topic_0237122389_abd4a7662d8784ec1890fd6e25a2ce17d"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_abd4a7662d8784ec1890fd6e25a2ce17d"></a>Username</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_r45542ef0924c49f2a21c540acd3c90e3"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_a09bb26374b104b3fb29bbe2a80ef226a"><a name="en-us_topic_0283136879_en-us_topic_0237122389_a09bb26374b104b3fb29bbe2a80ef226a"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_a09bb26374b104b3fb29bbe2a80ef226a"></a>select_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_abe1aa36777e444c48c10c68dea6d28bd"><a name="en-us_topic_0283136879_en-us_topic_0237122389_abe1aa36777e444c48c10c68dea6d28bd"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_abe1aa36777e444c48c10c68dea6d28bd"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_a08d938eccee84d42b9018a66f6b6784c"><a name="en-us_topic_0283136879_en-us_topic_0237122389_a08d938eccee84d42b9018a66f6b6784c"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_a08d938eccee84d42b9018a66f6b6784c"></a>Statistical result of the <strong id="b03642030165717"><a name="b03642030165717"></a><a name="b03642030165717"></a>SELECT</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_ra3bccb8528cd408aa54f8e30557c0359"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_ac1f1c391b720448fb6cff2861dc151b6"><a name="en-us_topic_0283136879_en-us_topic_0237122389_ac1f1c391b720448fb6cff2861dc151b6"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_ac1f1c391b720448fb6cff2861dc151b6"></a>update_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p84741447191914"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p84741447191914"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p84741447191914"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_a83dfda58a9ac418fab57f167cd4a8244"><a name="en-us_topic_0283136879_en-us_topic_0237122389_a83dfda58a9ac418fab57f167cd4a8244"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_a83dfda58a9ac418fab57f167cd4a8244"></a>Statistical result of the <strong id="b17277931125718"><a name="b17277931125718"></a><a name="b17277931125718"></a>UPDATE</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_rd7538143f1a648d2ae003ee563237226"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_adad82d644319412cb3a8d9cb60daa836"><a name="en-us_topic_0283136879_en-us_topic_0237122389_adad82d644319412cb3a8d9cb60daa836"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_adad82d644319412cb3a8d9cb60daa836"></a>insert_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_a0a0c18f59f1a47bdb17413bbe1716f3a"><a name="en-us_topic_0283136879_en-us_topic_0237122389_a0a0c18f59f1a47bdb17413bbe1716f3a"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_a0a0c18f59f1a47bdb17413bbe1716f3a"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_a2fe293248c694ffd9fe3f04bdf3a3f6d"><a name="en-us_topic_0283136879_en-us_topic_0237122389_a2fe293248c694ffd9fe3f04bdf3a3f6d"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_a2fe293248c694ffd9fe3f04bdf3a3f6d"></a>Statistical result of the <strong id="b10348173235712"><a name="b10348173235712"></a><a name="b10348173235712"></a>INSERT</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row15968121961816"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p149683193188"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p149683193188"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p149683193188"></a>delete_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p2024402715226"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p2024402715226"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p2024402715226"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p18745636192217"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p18745636192217"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p18745636192217"></a>Statistical result of the <strong id="b3330163411579"><a name="b3330163411579"></a><a name="b3330163411579"></a>DELETE</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row73471081672"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p634812817715"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p634812817715"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p634812817715"></a>mergeinto_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p14348381716"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p14348381716"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p14348381716"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p10348158074"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p10348158074"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p10348158074"></a>Statistical result of the <strong id="b23451635175710"><a name="b23451635175710"></a><a name="b23451635175710"></a>MERGE INTO</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row9804702336"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p058235812339"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p058235812339"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p058235812339"></a>ddl_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p89281668349"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p89281668349"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p89281668349"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p317951613418"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p317951613418"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p317951613418"></a>Number of DDL statements</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row146151710153314"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p12582135815332"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p12582135815332"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p12582135815332"></a>dml_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p99297611341"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p99297611341"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p99297611341"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p81791416123410"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p81791416123410"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p81791416123410"></a>Number of DML statements</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row5861593311"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p14582145811339"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p14582145811339"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p14582145811339"></a>dcl_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p8929136163413"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p8929136163413"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p8929136163413"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p20179121619345"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p20179121619345"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p20179121619345"></a>Number of DML statements</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row13127161816336"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p4583158173310"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p4583158173310"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p4583158173310"></a>total_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p139290613343"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p139290613343"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p139290613343"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p9179151633410"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p9179151633410"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p9179151633410"></a>Total response time of <strong id="b4623103985717"><a name="b4623103985717"></a><a name="b4623103985717"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row1380372019333"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p1658316580338"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p1658316580338"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p1658316580338"></a>avg_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p1892926103412"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p1892926103412"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p1892926103412"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p151791161346"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p151791161346"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p151791161346"></a>Average response time of <strong id="b14347184005713"><a name="b14347184005713"></a><a name="b14347184005713"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row1265732314330"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p1658345813320"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p1658345813320"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p1658345813320"></a>max_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p169291966347"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p169291966347"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p169291966347"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p417991610347"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p417991610347"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p417991610347"></a>Maximum response time of <strong id="b1786234116572"><a name="b1786234116572"></a><a name="b1786234116572"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row1168342683313"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p65831358133310"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p65831358133310"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p65831358133310"></a>min_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p189291673412"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p189291673412"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p189291673412"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p91791216143413"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p91791216143413"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p91791216143413"></a>Minimum response time of <strong id="b375812424570"><a name="b375812424570"></a><a name="b375812424570"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row1628852912337"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p18583145811335"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p18583145811335"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p18583145811335"></a>total_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p189291693413"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p189291693413"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p189291693413"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p15180316173414"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p15180316173414"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p15180316173414"></a>Total response time of <strong id="b7560144345715"><a name="b7560144345715"></a><a name="b7560144345715"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row2773124419339"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p758316581338"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p758316581338"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p758316581338"></a>avg_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p199296693415"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p199296693415"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p199296693415"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p121801216153415"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p121801216153415"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p121801216153415"></a>Average response time of <strong id="b1249814485714"><a name="b1249814485714"></a><a name="b1249814485714"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row1211913473331"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p18583155810338"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p18583155810338"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p18583155810338"></a>max_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p89296653419"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p89296653419"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p89296653419"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p15180161615341"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p15180161615341"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p15180161615341"></a>Maximum response time of <strong id="b1711144665716"><a name="b1711144665716"></a><a name="b1711144665716"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row212835153319"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p7583358123320"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p7583358123320"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p7583358123320"></a>min_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p1992956153417"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p1992956153417"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p1992956153417"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p191801016143411"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p191801016143411"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p191801016143411"></a>Minimum response time of <strong id="b188144605711"><a name="b188144605711"></a><a name="b188144605711"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row796855363318"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p258345833315"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p258345833315"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p258345833315"></a>total_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p49295611345"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p49295611345"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p49295611345"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p91806168346"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p91806168346"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p91806168346"></a>Total response time of <strong id="b1973624855716"><a name="b1973624855716"></a><a name="b1973624855716"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row1426427185317"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p3427727155315"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p3427727155315"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p3427727155315"></a>avg_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p124271727105310"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p124271727105310"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p124271727105310"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p842719278539"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p842719278539"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p842719278539"></a>Average response time of <strong id="b135002049185718"><a name="b135002049185718"></a><a name="b135002049185718"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row1416233615316"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p181636364539"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p181636364539"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p181636364539"></a>max_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p10163336145311"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p10163336145311"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p10163336145311"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p18163336125318"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p18163336125318"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p18163336125318"></a>Maximum response time of <strong id="b1335065012574"><a name="b1335065012574"></a><a name="b1335065012574"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row31141341155314"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p911424120533"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p911424120533"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p911424120533"></a>min_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p611444185311"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p611444185311"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p611444185311"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p121151241165320"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p121151241165320"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p121151241165320"></a>Minimum response time of <strong id="b670005105720"><a name="b670005105720"></a><a name="b670005105720"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row1568416117522"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p56851315524"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p56851315524"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p56851315524"></a>total_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p146851712528"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p146851712528"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p146851712528"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p0685213527"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p0685213527"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p0685213527"></a>Total response time of <strong id="b46198529579"><a name="b46198529579"></a><a name="b46198529579"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row1856196528"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p685789155210"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p685789155210"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p685789155210"></a>avg_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p128572091527"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p128572091527"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p128572091527"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p6857199185212"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p6857199185212"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p6857199185212"></a>Average response time of <strong id="b4148255165715"><a name="b4148255165715"></a><a name="b4148255165715"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row1221181765215"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p321161715215"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p321161715215"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p321161715215"></a>max_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p921111795211"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p921111795211"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p921111795211"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p321217171522"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p321217171522"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p321217171522"></a>Maximum response time of <strong id="b10516567574"><a name="b10516567574"></a><a name="b10516567574"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136879_en-us_topic_0237122389_row194122224526"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p141314226521"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p141314226521"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p141314226521"></a>min_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p8413202225217"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p8413202225217"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p8413202225217"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136879_en-us_topic_0237122389_p6413152225218"><a name="en-us_topic_0283136879_en-us_topic_0237122389_p6413152225218"></a><a name="en-us_topic_0283136879_en-us_topic_0237122389_p6413152225218"></a>Minimum response time of <strong id="b18581657135711"><a name="b18581657135711"></a><a name="b18581657135711"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
</tbody>
</table>

