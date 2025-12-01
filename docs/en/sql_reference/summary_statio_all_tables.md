# SUMMARY\_STATIO\_ALL\_TABLES<a name="EN-US_TOPIC_0245374792"></a>

**SUMMARY\_STATIO\_ALL\_TABLES**  contains I/O statistics about each table \(including TOAST tables\) in databases in openGauss. 

**Table  1**  SUMMARY\_STATIO\_ALL\_TABLES columns

<a name="en-us_topic_0237122688_table18113112172318"></a>
<table><thead align="left"><tr id="en-us_topic_0237122688_row17224712132317"><th class="cellrowborder" valign="top" width="19.62%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122688_p15224121232313"><a name="en-us_topic_0237122688_p15224121232313"></a><a name="en-us_topic_0237122688_p15224121232313"></a><strong id="b64547224453"><a name="b64547224453"></a><a name="b64547224453"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.19%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122688_p19225111282316"><a name="en-us_topic_0237122688_p19225111282316"></a><a name="en-us_topic_0237122688_p19225111282316"></a><strong id="b192709241458"><a name="b192709241458"></a><a name="b192709241458"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.190000000000005%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122688_p102256121235"><a name="en-us_topic_0237122688_p102256121235"></a><a name="en-us_topic_0237122688_p102256121235"></a><strong id="b7982224184513"><a name="b7982224184513"></a><a name="b7982224184513"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122688_row17225121272314"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122688_p3225161272315"><a name="en-us_topic_0237122688_p3225161272315"></a><a name="en-us_topic_0237122688_p3225161272315"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122688_p10225312202314"><a name="en-us_topic_0237122688_p10225312202314"></a><a name="en-us_topic_0237122688_p10225312202314"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122688_p422561217239"><a name="en-us_topic_0237122688_p422561217239"></a><a name="en-us_topic_0237122688_p422561217239"></a>Name of the schema that contains the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122688_row132251912142311"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122688_p622521212315"><a name="en-us_topic_0237122688_p622521212315"></a><a name="en-us_topic_0237122688_p622521212315"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122688_p222531262314"><a name="en-us_topic_0237122688_p222531262314"></a><a name="en-us_topic_0237122688_p222531262314"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122688_p15226121272316"><a name="en-us_topic_0237122688_p15226121272316"></a><a name="en-us_topic_0237122688_p15226121272316"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0237122688_row12226171282311"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122688_p12261120232"><a name="en-us_topic_0237122688_p12261120232"></a><a name="en-us_topic_0237122688_p12261120232"></a>heap_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122688_p222615126238"><a name="en-us_topic_0237122688_p222615126238"></a><a name="en-us_topic_0237122688_p222615126238"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122688_p5226131202317"><a name="en-us_topic_0237122688_p5226131202317"></a><a name="en-us_topic_0237122688_p5226131202317"></a>Number of disk blocks read from the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122688_row72261812132315"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122688_p18226181214231"><a name="en-us_topic_0237122688_p18226181214231"></a><a name="en-us_topic_0237122688_p18226181214231"></a>heap_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122688_p122611217238"><a name="en-us_topic_0237122688_p122611217238"></a><a name="en-us_topic_0237122688_p122611217238"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122688_p5226212142310"><a name="en-us_topic_0237122688_p5226212142310"></a><a name="en-us_topic_0237122688_p5226212142310"></a>Number of cache hits in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122688_row14226201292314"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122688_p4226181262312"><a name="en-us_topic_0237122688_p4226181262312"></a><a name="en-us_topic_0237122688_p4226181262312"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122688_p12266127230"><a name="en-us_topic_0237122688_p12266127230"></a><a name="en-us_topic_0237122688_p12266127230"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122688_p102271512172316"><a name="en-us_topic_0237122688_p102271512172316"></a><a name="en-us_topic_0237122688_p102271512172316"></a>Number of disk blocks read from all indexes in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122688_row20227312192315"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122688_p192271212112316"><a name="en-us_topic_0237122688_p192271212112316"></a><a name="en-us_topic_0237122688_p192271212112316"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122688_p22271612132314"><a name="en-us_topic_0237122688_p22271612132314"></a><a name="en-us_topic_0237122688_p22271612132314"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122688_p622717121231"><a name="en-us_topic_0237122688_p622717121231"></a><a name="en-us_topic_0237122688_p622717121231"></a>Number of cache hits in the table </p>
</td>
</tr>
<tr id="en-us_topic_0237122688_row922791219234"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122688_p172277123238"><a name="en-us_topic_0237122688_p172277123238"></a><a name="en-us_topic_0237122688_p172277123238"></a>toast_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122688_p17227171282312"><a name="en-us_topic_0237122688_p17227171282312"></a><a name="en-us_topic_0237122688_p17227171282312"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122688_p1622718126238"><a name="en-us_topic_0237122688_p1622718126238"></a><a name="en-us_topic_0237122688_p1622718126238"></a>Number of disk blocks read from the TOAST table (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122688_row72271212102315"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122688_p1522791252310"><a name="en-us_topic_0237122688_p1522791252310"></a><a name="en-us_topic_0237122688_p1522791252310"></a>toast_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122688_p42281012102318"><a name="en-us_topic_0237122688_p42281012102318"></a><a name="en-us_topic_0237122688_p42281012102318"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122688_p162281712152310"><a name="en-us_topic_0237122688_p162281712152310"></a><a name="en-us_topic_0237122688_p162281712152310"></a>Number of buffer hits in the TOAST table (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122688_row422817129233"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122688_p9228151232318"><a name="en-us_topic_0237122688_p9228151232318"></a><a name="en-us_topic_0237122688_p9228151232318"></a>tidx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122688_p1622831282310"><a name="en-us_topic_0237122688_p1622831282310"></a><a name="en-us_topic_0237122688_p1622831282310"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122688_p1322861210239"><a name="en-us_topic_0237122688_p1322861210239"></a><a name="en-us_topic_0237122688_p1322861210239"></a>Number of disk blocks read from the TOAST table index (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122688_row20228121202316"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122688_p1722841217238"><a name="en-us_topic_0237122688_p1722841217238"></a><a name="en-us_topic_0237122688_p1722841217238"></a>tidx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122688_p1228171272320"><a name="en-us_topic_0237122688_p1228171272320"></a><a name="en-us_topic_0237122688_p1228171272320"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122688_p162281412162313"><a name="en-us_topic_0237122688_p162281412162313"></a><a name="en-us_topic_0237122688_p162281412162313"></a>Number of buffer-hits in the TOAST table index (if any) in the table</p>
</td>
</tr>
</tbody>
</table>

