# SUMMARY\_STAT\_SYS\_INDEXES<a name="EN-US_TOPIC_0245374690"></a>

**SUMMARY\_STAT\_SYS\_INDEXES**  displays index status information about all the system catalogs in the  **pg\_catalog**,  **information\_schema**, and  **pg\_toast**  schemas in openGauss.

**Table  1**  SUMMARY\_STAT\_SYS\_INDEXES columns

<a name="en-us_topic_0237122586_table9684257144317"></a>
<table><thead align="left"><tr id="en-us_topic_0237122586_row1977695711431"><th class="cellrowborder" valign="top" width="18.96%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122586_p3776195764317"><a name="en-us_topic_0237122586_p3776195764317"></a><a name="en-us_topic_0237122586_p3776195764317"></a><strong id="b77323612111"><a name="b77323612111"></a><a name="b77323612111"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122586_p10776357134310"><a name="en-us_topic_0237122586_p10776357134310"></a><a name="en-us_topic_0237122586_p10776357134310"></a><strong id="b1852177151115"><a name="b1852177151115"></a><a name="b1852177151115"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.65%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122586_p127761257104318"><a name="en-us_topic_0237122586_p127761257104318"></a><a name="en-us_topic_0237122586_p127761257104318"></a><strong id="b149128201118"><a name="b149128201118"></a><a name="b149128201118"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122586_row1577665734312"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122586_p18776857184311"><a name="en-us_topic_0237122586_p18776857184311"></a><a name="en-us_topic_0237122586_p18776857184311"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122586_p67761572432"><a name="en-us_topic_0237122586_p67761572432"></a><a name="en-us_topic_0237122586_p67761572432"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122586_p10777195724314"><a name="en-us_topic_0237122586_p10777195724314"></a><a name="en-us_topic_0237122586_p10777195724314"></a>Name of the schema that the index is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122586_row277795764314"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122586_p7777657174319"><a name="en-us_topic_0237122586_p7777657174319"></a><a name="en-us_topic_0237122586_p7777657174319"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122586_p877715570432"><a name="en-us_topic_0237122586_p877715570432"></a><a name="en-us_topic_0237122586_p877715570432"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122586_p9777195754318"><a name="en-us_topic_0237122586_p9777195754318"></a><a name="en-us_topic_0237122586_p9777195754318"></a>Name of the table for the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122586_row16777165754312"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122586_p18777185719438"><a name="en-us_topic_0237122586_p18777185719438"></a><a name="en-us_topic_0237122586_p18777185719438"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122586_p1977717573430"><a name="en-us_topic_0237122586_p1977717573430"></a><a name="en-us_topic_0237122586_p1977717573430"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122586_p37771457184316"><a name="en-us_topic_0237122586_p37771457184316"></a><a name="en-us_topic_0237122586_p37771457184316"></a>Index name</p>
</td>
</tr>
<tr id="en-us_topic_0237122586_row127771257174311"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122586_p77771657114314"><a name="en-us_topic_0237122586_p77771657114314"></a><a name="en-us_topic_0237122586_p77771657114314"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122586_p1277775718434"><a name="en-us_topic_0237122586_p1277775718434"></a><a name="en-us_topic_0237122586_p1277775718434"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122586_p12778135774315"><a name="en-us_topic_0237122586_p12778135774315"></a><a name="en-us_topic_0237122586_p12778135774315"></a>Number of index scans initiated on the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122586_row7778185724313"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122586_p10778185744317"><a name="en-us_topic_0237122586_p10778185744317"></a><a name="en-us_topic_0237122586_p10778185744317"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122586_p677825711437"><a name="en-us_topic_0237122586_p677825711437"></a><a name="en-us_topic_0237122586_p677825711437"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122586_p157781157144318"><a name="en-us_topic_0237122586_p157781157144318"></a><a name="en-us_topic_0237122586_p157781157144318"></a>Number of index entries returned by scans on the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122586_row877845714439"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122586_p777945754314"><a name="en-us_topic_0237122586_p777945754314"></a><a name="en-us_topic_0237122586_p777945754314"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122586_p18779105754316"><a name="en-us_topic_0237122586_p18779105754316"></a><a name="en-us_topic_0237122586_p18779105754316"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122586_p1077935734311"><a name="en-us_topic_0237122586_p1077935734311"></a><a name="en-us_topic_0237122586_p1077935734311"></a>Number of live table rows fetched by simple index scans using the index </p>
</td>
</tr>
</tbody>
</table>

