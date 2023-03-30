# SUMMARY\_STATIO\_ALL\_INDEXES<a name="EN-US_TOPIC_0245374795"></a>

**SUMMARY\_STATIO\_ALL\_INDEXES**  contains every row of each index in databases in openGauss, showing I/O statistics about specific indexes. 

**Table  1**  SUMMARY\_STATIO\_ALL\_INDEXES columns

<a name="en-us_topic_0237122691_table9322152172514"></a>
<table><thead align="left"><tr id="en-us_topic_0237122691_row10388102119256"><th class="cellrowborder" valign="top" width="18.96%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122691_p6389121162512"><a name="en-us_topic_0237122691_p6389121162512"></a><a name="en-us_topic_0237122691_p6389121162512"></a><strong id="b2814150164618"><a name="b2814150164618"></a><a name="b2814150164618"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122691_p5389122162514"><a name="en-us_topic_0237122691_p5389122162514"></a><a name="en-us_topic_0237122691_p5389122162514"></a><strong id="b19721115174610"><a name="b19721115174610"></a><a name="b19721115174610"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.65%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122691_p12389521192515"><a name="en-us_topic_0237122691_p12389521192515"></a><a name="en-us_topic_0237122691_p12389521192515"></a><strong id="b14050528469"><a name="b14050528469"></a><a name="b14050528469"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122691_row10389162122514"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122691_p9389721172518"><a name="en-us_topic_0237122691_p9389721172518"></a><a name="en-us_topic_0237122691_p9389721172518"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122691_p93900215258"><a name="en-us_topic_0237122691_p93900215258"></a><a name="en-us_topic_0237122691_p93900215258"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122691_p139042111253"><a name="en-us_topic_0237122691_p139042111253"></a><a name="en-us_topic_0237122691_p139042111253"></a>Name of the schema that the index is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122691_row12390102132518"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122691_p339017219251"><a name="en-us_topic_0237122691_p339017219251"></a><a name="en-us_topic_0237122691_p339017219251"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122691_p1239011219251"><a name="en-us_topic_0237122691_p1239011219251"></a><a name="en-us_topic_0237122691_p1239011219251"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122691_p1839022112511"><a name="en-us_topic_0237122691_p1839022112511"></a><a name="en-us_topic_0237122691_p1839022112511"></a>Name of the table that the index is created for</p>
</td>
</tr>
<tr id="en-us_topic_0237122691_row6390721192519"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122691_p163909213254"><a name="en-us_topic_0237122691_p163909213254"></a><a name="en-us_topic_0237122691_p163909213254"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122691_p2039122111255"><a name="en-us_topic_0237122691_p2039122111255"></a><a name="en-us_topic_0237122691_p2039122111255"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122691_p3391321112514"><a name="en-us_topic_0237122691_p3391321112514"></a><a name="en-us_topic_0237122691_p3391321112514"></a>Index name</p>
</td>
</tr>
<tr id="en-us_topic_0237122691_row18391102162513"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122691_p1539112110259"><a name="en-us_topic_0237122691_p1539112110259"></a><a name="en-us_topic_0237122691_p1539112110259"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122691_p439132114259"><a name="en-us_topic_0237122691_p439132114259"></a><a name="en-us_topic_0237122691_p439132114259"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122691_p339152119251"><a name="en-us_topic_0237122691_p339152119251"></a><a name="en-us_topic_0237122691_p339152119251"></a>Number of disk blocks read from the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122691_row19391142102513"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122691_p83911021132520"><a name="en-us_topic_0237122691_p83911021132520"></a><a name="en-us_topic_0237122691_p83911021132520"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122691_p143911021162515"><a name="en-us_topic_0237122691_p143911021162515"></a><a name="en-us_topic_0237122691_p143911021162515"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122691_p2039111211255"><a name="en-us_topic_0237122691_p2039111211255"></a><a name="en-us_topic_0237122691_p2039111211255"></a>Number of cache hits in the index</p>
</td>
</tr>
</tbody>
</table>

