# GLOBAL\_SINGLE\_FLUSH\_DW\_STATUS<a name="EN-US_TOPIC_0000001196694399"></a>

**GLOBAL\_SINGLE\_FLUSH\_DW\_STATUS**  displays information about doublewrite files eliminated on a single page of all instances in the database. In the displayed information, the information before the slash \(/\) indicates the page flushing status of the first version, and the information after the slash \(/\) indicates the page flushing status of the second version.

**Table  1**  GLOBAL\_SINGLE\_FLUSH\_DW\_STATUS columns

<a name="table1098363751618"></a>
<table><thead align="left"><tr id="row7984637171610"><th class="cellrowborder" valign="top" width="22.55%" id="mcps1.2.4.1.1"><p id="p6984173720166"><a name="p6984173720166"></a><a name="p6984173720166"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="20.69%" id="mcps1.2.4.1.2"><p id="p12984193711618"><a name="p12984193711618"></a><a name="p12984193711618"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="56.76%" id="mcps1.2.4.1.3"><p id="p5984193781615"><a name="p5984193781615"></a><a name="p5984193781615"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1984153731616"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p13984837121614"><a name="p13984837121614"></a><a name="p13984837121614"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p13984337131618"><a name="p13984337131618"></a><a name="p13984337131618"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p19841937151617"><a name="p19841937151617"></a><a name="p19841937151617"></a>Instance name</p>
</td>
</tr>
<tr id="row59841537121617"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p59842377167"><a name="p59842377167"></a><a name="p59842377167"></a>curr_dwn</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p11746165617586"><a name="p11746165617586"></a><a name="p11746165617586"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p1898463721617"><a name="p1898463721617"></a><a name="p1898463721617"></a>Sequence number of the doublewrite file</p>
</td>
</tr>
<tr id="row11984837191615"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p8984143761610"><a name="p8984143761610"></a><a name="p8984143761610"></a>curr_start_page</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p1398433717169"><a name="p1398433717169"></a><a name="p1398433717169"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p1498443713165"><a name="p1498443713165"></a><a name="p1498443713165"></a>Start position of the current doublewrite file</p>
</td>
</tr>
<tr id="row89841837121615"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p19841637101619"><a name="p19841637101619"></a><a name="p19841637101619"></a>total_writes</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p59841374166"><a name="p59841374166"></a><a name="p59841374166"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p1398411373162"><a name="p1398411373162"></a><a name="p1398411373162"></a>Total number of data write pages in the current doublewrite file</p>
</td>
</tr>
<tr id="row169844372166"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p8984173781610"><a name="p8984173781610"></a><a name="p8984173781610"></a>file_trunc_num</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p149842375160"><a name="p149842375160"></a><a name="p149842375160"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p3984937151610"><a name="p3984937151610"></a><a name="p3984937151610"></a>Number of times that the doublewrite file is reused</p>
</td>
</tr>
<tr id="row17984113711168"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p39847371169"><a name="p39847371169"></a><a name="p39847371169"></a>file_reset_num</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p16984163720165"><a name="p16984163720165"></a><a name="p16984163720165"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p169851437171613"><a name="p169851437171613"></a><a name="p169851437171613"></a>Number of reset times after the doublewrite file is full</p>
</td>
</tr>
</tbody>
</table>

