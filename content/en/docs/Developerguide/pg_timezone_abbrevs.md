# PG\_TIMEZONE\_ABBREVS<a name="EN-US_TOPIC_0289900639"></a>

**PG\_TIMEZONE\_ABBREVS**  displays information about all available time zones.

**Table  1**  PG\_TIMEZONE\_ABBREVS columns

<a name="en-us_topic_0283137118_en-us_topic_0237122539_table177171137122918"></a>
<table><thead align="left"><tr id="en-us_topic_0283137118_en-us_topic_0237122539_row4841137182916"><th class="cellrowborder" valign="top" width="22.12%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137118_en-us_topic_0237122539_p950244811308"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p950244811308"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p950244811308"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="31.64%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137118_en-us_topic_0237122539_p128421737112911"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p128421737112911"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p128421737112911"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="46.239999999999995%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137118_en-us_topic_0237122539_p168424375290"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p168424375290"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p168424375290"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137118_en-us_topic_0237122539_row20842183722916"><td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137118_en-us_topic_0237122539_p18502114812307"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p18502114812307"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p18502114812307"></a>abbrev</p>
</td>
<td class="cellrowborder" valign="top" width="31.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137118_en-us_topic_0237122539_p1484333722914"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p1484333722914"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p1484333722914"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137118_en-us_topic_0237122539_p1843037122919"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p1843037122919"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p1843037122919"></a>Time zone name abbreviation</p>
</td>
</tr>
<tr id="en-us_topic_0283137118_en-us_topic_0237122539_row1384317372297"><td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137118_en-us_topic_0237122539_p18502124873011"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p18502124873011"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p18502124873011"></a>utc_offset</p>
</td>
<td class="cellrowborder" valign="top" width="31.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137118_en-us_topic_0237122539_p14843123782912"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p14843123782912"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p14843123782912"></a>interval</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137118_en-us_topic_0237122539_p12844137142913"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p12844137142913"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p12844137142913"></a>Offset from UTC</p>
</td>
</tr>
<tr id="en-us_topic_0283137118_en-us_topic_0237122539_row58449376298"><td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137118_en-us_topic_0237122539_p2050394817305"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p2050394817305"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p2050394817305"></a>is_dst</p>
</td>
<td class="cellrowborder" valign="top" width="31.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137118_en-us_topic_0237122539_p4844237142913"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p4844237142913"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p4844237142913"></a>Boolean</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137118_en-us_topic_0237122539_p12844103713296"><a name="en-us_topic_0283137118_en-us_topic_0237122539_p12844103713296"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_p12844103713296"></a>Whether DST is used. If DST is used, the value is <strong id="en-us_topic_0283137118_en-us_topic_0237122539_b842352706141249"><a name="en-us_topic_0283137118_en-us_topic_0237122539_b842352706141249"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_b842352706141249"></a>true</strong>. Otherwise, the value is <strong id="en-us_topic_0283137118_en-us_topic_0237122539_b842352706141257"><a name="en-us_topic_0283137118_en-us_topic_0237122539_b842352706141257"></a><a name="en-us_topic_0283137118_en-us_topic_0237122539_b842352706141257"></a>false</strong>.</p>
</td>
</tr>
</tbody>
</table>

