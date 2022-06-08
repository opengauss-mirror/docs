# GLOBAL\_SESSION\_STAT<a name="EN-US_TOPIC_0289900205"></a>

**GLOBAL\_SESSION\_STAT**  collects statistics about session status on each node based on session threads or the  **AutoVacuum**  thread.

**Table  1**  GLOBAL\_SESSION\_STAT columns

<a name="en-us_topic_0283137720_en-us_topic_0237122630_table5356772213"></a>
<table><thead align="left"><tr id="en-us_topic_0283137720_en-us_topic_0237122630_row7441877211"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137720_en-us_topic_0237122630_p64420715219"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p64420715219"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p64420715219"></a><strong id="en-us_topic_0283137720_b18682131971019"><a name="en-us_topic_0283137720_b18682131971019"></a><a name="en-us_topic_0283137720_b18682131971019"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137720_en-us_topic_0237122630_p1644211782112"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p1644211782112"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p1644211782112"></a><strong id="en-us_topic_0283137720_b4482152912109"><a name="en-us_topic_0283137720_b4482152912109"></a><a name="en-us_topic_0283137720_b4482152912109"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137720_en-us_topic_0237122630_p14422792113"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p14422792113"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p14422792113"></a><strong id="en-us_topic_0283137720_b1454213011015"><a name="en-us_topic_0283137720_b1454213011015"></a><a name="en-us_topic_0283137720_b1454213011015"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137720_en-us_topic_0237122630_row244327202118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p204436711215"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p204436711215"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p204436711215"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p14430712114"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p14430712114"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p14430712114"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p134431078214"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p134431078214"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p134431078214"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0283137720_en-us_topic_0237122630_row124433719219"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p1244315732111"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p1244315732111"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p1244315732111"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p644418719216"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p644418719216"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p644418719216"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p244412718217"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p244412718217"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p244412718217"></a>Thread start time and ID</p>
</td>
</tr>
<tr id="en-us_topic_0283137720_en-us_topic_0237122630_row8444127172117"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p844414719216"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p844414719216"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p844414719216"></a>statid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p154444732117"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p154444732117"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p154444732117"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p114441670215"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p114441670215"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p114441670215"></a>Statistics ID</p>
</td>
</tr>
<tr id="en-us_topic_0283137720_en-us_topic_0237122630_row124449714214"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p12444070211"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p12444070211"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p12444070211"></a>statname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p944517713212"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p944517713212"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p944517713212"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p444557202116"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p444557202116"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p444557202116"></a>Name of the statistics session</p>
</td>
</tr>
<tr id="en-us_topic_0283137720_en-us_topic_0237122630_row1044547172116"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p1244513715212"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p1244513715212"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p1244513715212"></a>statunit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p944512782117"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p944512782117"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p944512782117"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p94451878212"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p94451878212"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p94451878212"></a>Unit of the statistics session</p>
</td>
</tr>
<tr id="en-us_topic_0283137720_en-us_topic_0237122630_row12445979218"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p15445117112117"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p15445117112117"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p15445117112117"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p1446173213"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p1446173213"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p1446173213"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137720_en-us_topic_0237122630_p444613720212"><a name="en-us_topic_0283137720_en-us_topic_0237122630_p444613720212"></a><a name="en-us_topic_0283137720_en-us_topic_0237122630_p444613720212"></a>Value of the statistics session</p>
</td>
</tr>
</tbody>
</table>

