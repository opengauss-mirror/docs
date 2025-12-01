# PG\_REPLICATION\_ORIGIN<a name="EN-US_TOPIC_0000001198757478"></a>

**PG\_REPLICATION\_ORIGIN**  contains all created replication sources and is a globally shared table. That is, each node has only one copy, not one copy per database.

**Table  1**  PG\_REPLICATION\_ORIGIN columns

<a name="table18213144346"></a>
<table><thead align="left"><tr id="row1721416413410"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p5215240411"><a name="p5215240411"></a><a name="p5215240411"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p2021518417414"><a name="p2021518417414"></a><a name="p2021518417414"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p921574744"><a name="p921574744"></a><a name="p921574744"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row142151641641"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1221518412419"><a name="p1221518412419"></a><a name="p1221518412419"></a>roident</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p221524443"><a name="p221524443"></a><a name="p221524443"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2021614419415"><a name="p2021614419415"></a><a name="p2021614419415"></a>Unique replication source identifier within a cluster.</p>
</td>
</tr>
<tr id="row162161746418"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p18216245412"><a name="p18216245412"></a><a name="p18216245412"></a>roname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6216241645"><a name="p6216241645"></a><a name="p6216241645"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1721684547"><a name="p1721684547"></a><a name="p1721684547"></a>External user-defined replication source name.</p>
</td>
</tr>
</tbody>
</table>

