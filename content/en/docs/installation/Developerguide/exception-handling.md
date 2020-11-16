# Exception Handling<a name="EN-US_TOPIC_0276133418"></a>

The persistence module handles exceptions by using the Postgres error reporting infrastructure \(ereport\). An error message is recorded in the system log for each error condition. In addition, the error is reported to the envelope using Postgres’s built-in error reporting infrastructure.

The following exceptions are reported by this module –

**Table  1**  Exception Handling

<a name="table42522357"></a>
<table><thead align="left"><tr id="row30342279"><th class="cellrowborder" valign="top" width="29.292929292929294%" id="mcps1.2.5.1.1"><p id="p41805515"><a name="p41805515"></a><a name="p41805515"></a>Exception Condition</p>
</th>
<th class="cellrowborder" valign="top" width="26.26262626262626%" id="mcps1.2.5.1.2"><p id="p30803548"><a name="p30803548"></a><a name="p30803548"></a>Exception Code</p>
</th>
<th class="cellrowborder" valign="top" width="21.21212121212121%" id="mcps1.2.5.1.3"><p id="p12059425"><a name="p12059425"></a><a name="p12059425"></a>Scenario</p>
</th>
<th class="cellrowborder" valign="top" width="23.232323232323232%" id="mcps1.2.5.1.4"><p id="p37289346"><a name="p37289346"></a><a name="p37289346"></a>Resulting Outcome</p>
</th>
</tr>
</thead>
<tbody><tr id="row538217"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="p43595579"><a name="p43595579"></a><a name="p43595579"></a>WAL write failure</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="p41581026"><a name="p41581026"></a><a name="p41581026"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="p12619974"><a name="p12619974"></a><a name="p12619974"></a>On any case the WAL write fails</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="p15584974"><a name="p15584974"></a><a name="p15584974"></a>Transaction terminates</p>
</td>
</tr>
<tr id="row6047043"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="p20048509"><a name="p20048509"></a><a name="p20048509"></a>File IO error: write, open and so on</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="p13316560"><a name="p13316560"></a><a name="p13316560"></a>ERRCODE_IO_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="p4899555"><a name="p4899555"></a><a name="p4899555"></a>Checkpoint – Called on any file access error</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="p61319646"><a name="p61319646"></a><a name="p61319646"></a>FATAL – process exists</p>
</td>
</tr>
<tr id="row15005906"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="p7518910"><a name="p7518910"></a><a name="p7518910"></a>Out of Memory</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="p5051941"><a name="p5051941"></a><a name="p5051941"></a>ERRCODE_INSUFFICIENT_RESOURCES</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="p6554097"><a name="p6554097"></a><a name="p6554097"></a>Checkpoint – Local memory allocation failures</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="p61119882"><a name="p61119882"></a><a name="p61119882"></a>FATAL – process exists</p>
</td>
</tr>
<tr id="row13208031"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="p63217557"><a name="p63217557"></a><a name="p63217557"></a>Logic, DB errors</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="p20348492"><a name="p20348492"></a><a name="p20348492"></a>ERRCODE_INTERNAL_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="p2992010"><a name="p2992010"></a><a name="p2992010"></a>Checkpoint: algorithm fails or failure to retrieve table data or indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="p41026233"><a name="p41026233"></a><a name="p41026233"></a>FATAL – process exists</p>
</td>
</tr>
</tbody>
</table>


