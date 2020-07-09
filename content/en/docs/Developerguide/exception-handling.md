# Exception Handling<a name="EN-US_TOPIC_0260488165"></a>

The persistence module handles exceptions by using the Postgres error reporting infrastructure \(ereport\). In any case of an error condition, an error message is recorded in the system log, and the error is reported to the envelope using Postgres built in error reporting infrastructure.

The following exceptions are reported by the module

**Table  1**  Exception Handling

<a name="table24335319"></a>
<table><thead align="left"><tr id="row64660988"><th class="cellrowborder" valign="top" width="29.292929292929294%" id="mcps1.2.5.1.1"><p id="p3048645"><a name="p3048645"></a><a name="p3048645"></a>Exception Condition</p>
</th>
<th class="cellrowborder" valign="top" width="26.26262626262626%" id="mcps1.2.5.1.2"><p id="p45613654"><a name="p45613654"></a><a name="p45613654"></a>Exception Code</p>
</th>
<th class="cellrowborder" valign="top" width="21.21212121212121%" id="mcps1.2.5.1.3"><p id="p3718488"><a name="p3718488"></a><a name="p3718488"></a>Scenario</p>
</th>
<th class="cellrowborder" valign="top" width="23.232323232323232%" id="mcps1.2.5.1.4"><p id="p32762098"><a name="p32762098"></a><a name="p32762098"></a>Resulting Outcome</p>
</th>
</tr>
</thead>
<tbody><tr id="row36484301"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="p2438417"><a name="p2438417"></a><a name="p2438417"></a>WAL write failure</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="p63294052"><a name="p63294052"></a><a name="p63294052"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="p26544625"><a name="p26544625"></a><a name="p26544625"></a>On any case the wal write fails</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="p2631006"><a name="p2631006"></a><a name="p2631006"></a>Transaction terminates</p>
</td>
</tr>
<tr id="row23679056"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="p38955377"><a name="p38955377"></a><a name="p38955377"></a>File IO error: write, open, etc</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="p1268934"><a name="p1268934"></a><a name="p1268934"></a>ERRCODE_IO_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="p35674807"><a name="p35674807"></a><a name="p35674807"></a>Checkpoint: Called on any file access error</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="p3978286"><a name="p3978286"></a><a name="p3978286"></a>FATAL – process exists</p>
</td>
</tr>
<tr id="row35804574"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="p14489366"><a name="p14489366"></a><a name="p14489366"></a>Out of Memory</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="p32787974"><a name="p32787974"></a><a name="p32787974"></a>ERRCODE_INSUFFICIENT_RESOURCES</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="p38580247"><a name="p38580247"></a><a name="p38580247"></a>Checkpoint: Local memory allocation failures</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="p37992304"><a name="p37992304"></a><a name="p37992304"></a>FATAL – process exists</p>
</td>
</tr>
<tr id="row6386424"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="p47538321"><a name="p47538321"></a><a name="p47538321"></a>Logic, DB errors</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="p25398791"><a name="p25398791"></a><a name="p25398791"></a>ERRCODE_INTERNAL_</p>
<p id="p27262528"><a name="p27262528"></a><a name="p27262528"></a>ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="p60781131"><a name="p60781131"></a><a name="p60781131"></a>Checkpoint: algorithm fails, or failure to retrieve table data or indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="p24324583"><a name="p24324583"></a><a name="p24324583"></a>FATAL – process exists</p>
</td>
</tr>
</tbody>
</table>

