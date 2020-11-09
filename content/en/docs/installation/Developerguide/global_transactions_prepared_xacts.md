# GLOBAL\_TRANSACTIONS\_PREPARED\_XACTS<a name="EN-US_TOPIC_0245374756"></a>

**GLOBAL\_TRANSACTIONS\_PREPARED\_XACTS**  displays information about transactions that are currently prepared for two-phase commit on each node. 

**Table  1**  GLOBAL\_TRANSACTIONS\_PREPARED\_XACTS columns

<a name="en-us_topic_0237122652_table14218153075419"></a>
<table><thead align="left"><tr id="en-us_topic_0237122652_row17246173016546"><th class="cellrowborder" valign="top" width="20.150000000000002%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122652_p824613055410"><a name="en-us_topic_0237122652_p824613055410"></a><a name="en-us_topic_0237122652_p824613055410"></a><strong id="b47491121212"><a name="b47491121212"></a><a name="b47491121212"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="28.33%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122652_p102461530155412"><a name="en-us_topic_0237122652_p102461530155412"></a><a name="en-us_topic_0237122652_p102461530155412"></a><strong id="b18486433211"><a name="b18486433211"></a><a name="b18486433211"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.519999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122652_p11246530195410"><a name="en-us_topic_0237122652_p11246530195410"></a><a name="en-us_topic_0237122652_p11246530195410"></a><strong id="b121961248212"><a name="b121961248212"></a><a name="b121961248212"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122652_row4246183017540"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122652_p92462301540"><a name="en-us_topic_0237122652_p92462301540"></a><a name="en-us_topic_0237122652_p92462301540"></a>transaction</p>
</td>
<td class="cellrowborder" valign="top" width="28.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122652_p524673095412"><a name="en-us_topic_0237122652_p524673095412"></a><a name="en-us_topic_0237122652_p524673095412"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122652_p1824615301542"><a name="en-us_topic_0237122652_p1824615301542"></a><a name="en-us_topic_0237122652_p1824615301542"></a>Numeric transaction identifier of the prepared transaction</p>
</td>
</tr>
<tr id="en-us_topic_0237122652_row102461230205415"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122652_p3246430175418"><a name="en-us_topic_0237122652_p3246430175418"></a><a name="en-us_topic_0237122652_p3246430175418"></a>gid</p>
</td>
<td class="cellrowborder" valign="top" width="28.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122652_p17246730195415"><a name="en-us_topic_0237122652_p17246730195415"></a><a name="en-us_topic_0237122652_p17246730195415"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122652_p142461530105410"><a name="en-us_topic_0237122652_p142461530105410"></a><a name="en-us_topic_0237122652_p142461530105410"></a>Global transaction identifier that was assigned to the transaction</p>
</td>
</tr>
<tr id="en-us_topic_0237122652_row18246173015419"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122652_p14246230135418"><a name="en-us_topic_0237122652_p14246230135418"></a><a name="en-us_topic_0237122652_p14246230135418"></a>prepared</p>
</td>
<td class="cellrowborder" valign="top" width="28.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122652_p1246183012549"><a name="en-us_topic_0237122652_p1246183012549"></a><a name="en-us_topic_0237122652_p1246183012549"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122652_p5247203035414"><a name="en-us_topic_0237122652_p5247203035414"></a><a name="en-us_topic_0237122652_p5247203035414"></a>Time at which the transaction is prepared for commit</p>
</td>
</tr>
<tr id="en-us_topic_0237122652_row10247113085413"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122652_p1324783019548"><a name="en-us_topic_0237122652_p1324783019548"></a><a name="en-us_topic_0237122652_p1324783019548"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="28.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122652_p4247430195412"><a name="en-us_topic_0237122652_p4247430195412"></a><a name="en-us_topic_0237122652_p4247430195412"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122652_p15247730105417"><a name="en-us_topic_0237122652_p15247730105417"></a><a name="en-us_topic_0237122652_p15247730105417"></a>Name of the user that executes the transaction</p>
</td>
</tr>
<tr id="en-us_topic_0237122652_row124733018549"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122652_p162477307548"><a name="en-us_topic_0237122652_p162477307548"></a><a name="en-us_topic_0237122652_p162477307548"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="28.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122652_p2247113065418"><a name="en-us_topic_0237122652_p2247113065418"></a><a name="en-us_topic_0237122652_p2247113065418"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122652_p13247830195416"><a name="en-us_topic_0237122652_p13247830195416"></a><a name="en-us_topic_0237122652_p13247830195416"></a>Name of the database in which the transaction is executed</p>
</td>
</tr>
</tbody>
</table>

