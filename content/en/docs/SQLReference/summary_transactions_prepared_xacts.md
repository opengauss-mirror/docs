# SUMMARY\_TRANSACTIONS\_PREPARED\_XACTS<a name="EN-US_TOPIC_0245374755"></a>

**SUMMARY\_TRANSACTIONS\_PREPARED\_XACTS**  displays information about transactions that are currently prepared for two-phase commit on the primary database node in openGauss.

**Table  1**  SUMMARY\_TRANSACTIONS\_PREPARED\_XACTS columns

<a name="en-us_topic_0237122651_table197101527548"></a>
<table><thead align="left"><tr id="en-us_topic_0237122651_row97341220546"><th class="cellrowborder" valign="top" width="18.57814218578142%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122651_p1673432175419"><a name="en-us_topic_0237122651_p1673432175419"></a><a name="en-us_topic_0237122651_p1673432175419"></a><strong id="b97287261610"><a name="b97287261610"></a><a name="b97287261610"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="27.777222277772225%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122651_p673419216541"><a name="en-us_topic_0237122651_p673419216541"></a><a name="en-us_topic_0237122651_p673419216541"></a><strong id="b9297174191616"><a name="b9297174191616"></a><a name="b9297174191616"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="53.64463553644635%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122651_p13734162175415"><a name="en-us_topic_0237122651_p13734162175415"></a><a name="en-us_topic_0237122651_p13734162175415"></a><strong id="b12951184161615"><a name="b12951184161615"></a><a name="b12951184161615"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122651_row473422205412"><td class="cellrowborder" valign="top" width="18.57814218578142%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122651_p127341324542"><a name="en-us_topic_0237122651_p127341324542"></a><a name="en-us_topic_0237122651_p127341324542"></a>transaction</p>
</td>
<td class="cellrowborder" valign="top" width="27.777222277772225%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122651_p5734728543"><a name="en-us_topic_0237122651_p5734728543"></a><a name="en-us_topic_0237122651_p5734728543"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="53.64463553644635%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122651_p47346210543"><a name="en-us_topic_0237122651_p47346210543"></a><a name="en-us_topic_0237122651_p47346210543"></a>Numeric transaction identifier of the prepared transaction</p>
</td>
</tr>
<tr id="en-us_topic_0237122651_row773411212541"><td class="cellrowborder" valign="top" width="18.57814218578142%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122651_p673422105410"><a name="en-us_topic_0237122651_p673422105410"></a><a name="en-us_topic_0237122651_p673422105410"></a>gid</p>
</td>
<td class="cellrowborder" valign="top" width="27.777222277772225%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122651_p167341324544"><a name="en-us_topic_0237122651_p167341324544"></a><a name="en-us_topic_0237122651_p167341324544"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="53.64463553644635%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122651_p17352210544"><a name="en-us_topic_0237122651_p17352210544"></a><a name="en-us_topic_0237122651_p17352210544"></a>Global transaction identifier that was assigned to the transaction</p>
</td>
</tr>
<tr id="en-us_topic_0237122651_row14735829544"><td class="cellrowborder" valign="top" width="18.57814218578142%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122651_p177354210542"><a name="en-us_topic_0237122651_p177354210542"></a><a name="en-us_topic_0237122651_p177354210542"></a>prepared</p>
</td>
<td class="cellrowborder" valign="top" width="27.777222277772225%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122651_p3735172175412"><a name="en-us_topic_0237122651_p3735172175412"></a><a name="en-us_topic_0237122651_p3735172175412"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="53.64463553644635%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122651_p14735124542"><a name="en-us_topic_0237122651_p14735124542"></a><a name="en-us_topic_0237122651_p14735124542"></a>Time at which the transaction is prepared for commit</p>
</td>
</tr>
<tr id="en-us_topic_0237122651_row37355255413"><td class="cellrowborder" valign="top" width="18.57814218578142%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122651_p47351628548"><a name="en-us_topic_0237122651_p47351628548"></a><a name="en-us_topic_0237122651_p47351628548"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="27.777222277772225%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122651_p1473518295416"><a name="en-us_topic_0237122651_p1473518295416"></a><a name="en-us_topic_0237122651_p1473518295416"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.64463553644635%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122651_p97351324546"><a name="en-us_topic_0237122651_p97351324546"></a><a name="en-us_topic_0237122651_p97351324546"></a>Name of the user that executes the transaction</p>
</td>
</tr>
<tr id="en-us_topic_0237122651_row373517219544"><td class="cellrowborder" valign="top" width="18.57814218578142%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122651_p1273582145419"><a name="en-us_topic_0237122651_p1273582145419"></a><a name="en-us_topic_0237122651_p1273582145419"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="27.777222277772225%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122651_p573515215548"><a name="en-us_topic_0237122651_p573515215548"></a><a name="en-us_topic_0237122651_p573515215548"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.64463553644635%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122651_p27352235414"><a name="en-us_topic_0237122651_p27352235414"></a><a name="en-us_topic_0237122651_p27352235414"></a>Name of the database in which the transaction is executed</p>
</td>
</tr>
</tbody>
</table>

