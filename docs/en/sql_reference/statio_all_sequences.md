# STATIO\_ALL\_SEQUENCES<a name="EN-US_TOPIC_0245374797"></a>

**STATIO\_ALL\_SEQUENCES**  contains one row for each sequence in the current database, showing I/O statistics about specific sequences.

**Table  1**  STATIO\_ALL\_SEQUENCES columns

<a name="en-us_topic_0237122693_table159871453260"></a>
<table><thead align="left"><tr id="en-us_topic_0237122693_row1263114611263"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122693_p264114602618"><a name="en-us_topic_0237122693_p264114602618"></a><a name="en-us_topic_0237122693_p264114602618"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122693_p1064246102612"><a name="en-us_topic_0237122693_p1064246102612"></a><a name="en-us_topic_0237122693_p1064246102612"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122693_p1964104622612"><a name="en-us_topic_0237122693_p1964104622612"></a><a name="en-us_topic_0237122693_p1964104622612"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122693_row1164114614267"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122693_p765124672611"><a name="en-us_topic_0237122693_p765124672611"></a><a name="en-us_topic_0237122693_p765124672611"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122693_p76554672611"><a name="en-us_topic_0237122693_p76554672611"></a><a name="en-us_topic_0237122693_p76554672611"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122693_p26514617261"><a name="en-us_topic_0237122693_p26514617261"></a><a name="en-us_topic_0237122693_p26514617261"></a>OID of this sequence</p>
</td>
</tr>
<tr id="en-us_topic_0237122693_row16656465267"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122693_p965104682618"><a name="en-us_topic_0237122693_p965104682618"></a><a name="en-us_topic_0237122693_p965104682618"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122693_p186510462262"><a name="en-us_topic_0237122693_p186510462262"></a><a name="en-us_topic_0237122693_p186510462262"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122693_p766104614263"><a name="en-us_topic_0237122693_p766104614263"></a><a name="en-us_topic_0237122693_p766104614263"></a>Name of the schema where the sequence is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122693_row18661246112611"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122693_p66614469269"><a name="en-us_topic_0237122693_p66614469269"></a><a name="en-us_topic_0237122693_p66614469269"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122693_p1566164614260"><a name="en-us_topic_0237122693_p1566164614260"></a><a name="en-us_topic_0237122693_p1566164614260"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122693_p196620464263"><a name="en-us_topic_0237122693_p196620464263"></a><a name="en-us_topic_0237122693_p196620464263"></a>Sequence name</p>
</td>
</tr>
<tr id="en-us_topic_0237122693_row766124632613"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122693_p86624615263"><a name="en-us_topic_0237122693_p86624615263"></a><a name="en-us_topic_0237122693_p86624615263"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122693_p167174652618"><a name="en-us_topic_0237122693_p167174652618"></a><a name="en-us_topic_0237122693_p167174652618"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122693_p146712466267"><a name="en-us_topic_0237122693_p146712466267"></a><a name="en-us_topic_0237122693_p146712466267"></a>Number of disk blocks read from the sequence</p>
</td>
</tr>
<tr id="en-us_topic_0237122693_row1467124613265"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122693_p46784617262"><a name="en-us_topic_0237122693_p46784617262"></a><a name="en-us_topic_0237122693_p46784617262"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122693_p26784613262"><a name="en-us_topic_0237122693_p26784613262"></a><a name="en-us_topic_0237122693_p26784613262"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122693_p146744622611"><a name="en-us_topic_0237122693_p146744622611"></a><a name="en-us_topic_0237122693_p146744622611"></a>Cache hits in the sequence</p>
</td>
</tr>
</tbody>
</table>

