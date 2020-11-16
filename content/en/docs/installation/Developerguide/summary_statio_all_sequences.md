# SUMMARY\_STATIO\_ALL\_SEQUENCES<a name="EN-US_TOPIC_0245374798"></a>

**SUMMARY\_STATIO\_ALL\_SEQUENCES**  contains one row for each sequence in databases in openGauss, showing I/O statistics about specific sequences. 

**Table  1**  SUMMARY\_STATIO\_ALL\_SEQUENCES columns

<a name="en-us_topic_0237122694_table1059312012714"></a>
<table><thead align="left"><tr id="en-us_topic_0237122694_row1643192032713"><th class="cellrowborder" valign="top" width="18.43184318431843%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122694_p2644162016278"><a name="en-us_topic_0237122694_p2644162016278"></a><a name="en-us_topic_0237122694_p2644162016278"></a><strong id="b369024619500"><a name="b369024619500"></a><a name="b369024619500"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.391739173917394%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122694_p964413203278"><a name="en-us_topic_0237122694_p964413203278"></a><a name="en-us_topic_0237122694_p964413203278"></a><strong id="b952854710501"><a name="b952854710501"></a><a name="b952854710501"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="64.17641764176419%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122694_p26446204272"><a name="en-us_topic_0237122694_p26446204272"></a><a name="en-us_topic_0237122694_p26446204272"></a><strong id="b927364855012"><a name="b927364855012"></a><a name="b927364855012"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122694_row10644192012715"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122694_p14644182082713"><a name="en-us_topic_0237122694_p14644182082713"></a><a name="en-us_topic_0237122694_p14644182082713"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122694_p1664422032715"><a name="en-us_topic_0237122694_p1664422032715"></a><a name="en-us_topic_0237122694_p1664422032715"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122694_p1864462092717"><a name="en-us_topic_0237122694_p1864462092717"></a><a name="en-us_topic_0237122694_p1864462092717"></a>Name of the schema that the sequence is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122694_row0645192002715"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122694_p15645112092719"><a name="en-us_topic_0237122694_p15645112092719"></a><a name="en-us_topic_0237122694_p15645112092719"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122694_p3645192010273"><a name="en-us_topic_0237122694_p3645192010273"></a><a name="en-us_topic_0237122694_p3645192010273"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122694_p1064542010271"><a name="en-us_topic_0237122694_p1064542010271"></a><a name="en-us_topic_0237122694_p1064542010271"></a>Sequence name</p>
</td>
</tr>
<tr id="en-us_topic_0237122694_row1264552020272"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122694_p5645162014272"><a name="en-us_topic_0237122694_p5645162014272"></a><a name="en-us_topic_0237122694_p5645162014272"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122694_p6645152011276"><a name="en-us_topic_0237122694_p6645152011276"></a><a name="en-us_topic_0237122694_p6645152011276"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122694_p13645820202719"><a name="en-us_topic_0237122694_p13645820202719"></a><a name="en-us_topic_0237122694_p13645820202719"></a>Number of disk blocks read from the sequence</p>
</td>
</tr>
<tr id="en-us_topic_0237122694_row11645182020278"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122694_p14645720202714"><a name="en-us_topic_0237122694_p14645720202714"></a><a name="en-us_topic_0237122694_p14645720202714"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122694_p364542014276"><a name="en-us_topic_0237122694_p364542014276"></a><a name="en-us_topic_0237122694_p364542014276"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122694_p764692010277"><a name="en-us_topic_0237122694_p764692010277"></a><a name="en-us_topic_0237122694_p764692010277"></a>Number of cache hits in the sequence</p>
</td>
</tr>
</tbody>
</table>

