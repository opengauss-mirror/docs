# Exception Handling<a name="EN-US_TOPIC_0257867441"></a>

The persistence module handles exceptions by using the Postgres error reporting infrastructure \(ereport\). In any case of an error condition, an error message is recorded in the system log, and the error is reported to the envelope using Postgres built in error reporting infrastructure.

The following exceptions are reported by the module:

**Table  1**  Exception Handling

<a name="en-us_topic_0257713314_table2980605"></a>
<table><thead align="left"><tr id="en-us_topic_0257713314_row5194094"><th class="cellrowborder" valign="top" width="29.292929292929294%" id="mcps1.2.5.1.1"><p id="en-us_topic_0257713314_p18068436"><a name="en-us_topic_0257713314_p18068436"></a><a name="en-us_topic_0257713314_p18068436"></a>Exception Condition</p>
</th>
<th class="cellrowborder" valign="top" width="26.26262626262626%" id="mcps1.2.5.1.2"><p id="en-us_topic_0257713314_p54257211"><a name="en-us_topic_0257713314_p54257211"></a><a name="en-us_topic_0257713314_p54257211"></a>Exception Code</p>
</th>
<th class="cellrowborder" valign="top" width="21.21212121212121%" id="mcps1.2.5.1.3"><p id="en-us_topic_0257713314_p32757962"><a name="en-us_topic_0257713314_p32757962"></a><a name="en-us_topic_0257713314_p32757962"></a>Scenario</p>
</th>
<th class="cellrowborder" valign="top" width="23.232323232323232%" id="mcps1.2.5.1.4"><p id="en-us_topic_0257713314_p36149290"><a name="en-us_topic_0257713314_p36149290"></a><a name="en-us_topic_0257713314_p36149290"></a>Resulting Outcome</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0257713314_row42411395"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0257713314_p12770940"><a name="en-us_topic_0257713314_p12770940"></a><a name="en-us_topic_0257713314_p12770940"></a>WAL write failure</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0257713314_p27813181"><a name="en-us_topic_0257713314_p27813181"></a><a name="en-us_topic_0257713314_p27813181"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0257713314_p38275183"><a name="en-us_topic_0257713314_p38275183"></a><a name="en-us_topic_0257713314_p38275183"></a>On any case the wal write fails</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0257713314_p13282105"><a name="en-us_topic_0257713314_p13282105"></a><a name="en-us_topic_0257713314_p13282105"></a>Transaction terminates</p>
</td>
</tr>
<tr id="en-us_topic_0257713314_row52430087"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0257713314_p18978665"><a name="en-us_topic_0257713314_p18978665"></a><a name="en-us_topic_0257713314_p18978665"></a>File IO error: write, open, etc</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0257713314_p60876920"><a name="en-us_topic_0257713314_p60876920"></a><a name="en-us_topic_0257713314_p60876920"></a>ERRCODE_IO_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0257713314_p32083483"><a name="en-us_topic_0257713314_p32083483"></a><a name="en-us_topic_0257713314_p32083483"></a>Checkpoint: Called on any file access error</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0257713314_p48625339"><a name="en-us_topic_0257713314_p48625339"></a><a name="en-us_topic_0257713314_p48625339"></a>FATAL – process exists</p>
</td>
</tr>
<tr id="en-us_topic_0257713314_row34974869"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0257713314_p14392122"><a name="en-us_topic_0257713314_p14392122"></a><a name="en-us_topic_0257713314_p14392122"></a>Out of Memory</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0257713314_p24911248"><a name="en-us_topic_0257713314_p24911248"></a><a name="en-us_topic_0257713314_p24911248"></a>ERRCODE_INSUFFICIENT_RESOURCES</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0257713314_p4545214"><a name="en-us_topic_0257713314_p4545214"></a><a name="en-us_topic_0257713314_p4545214"></a>Checkpoint: Local memory allocation failures</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0257713314_p32618093"><a name="en-us_topic_0257713314_p32618093"></a><a name="en-us_topic_0257713314_p32618093"></a>FATAL – process exists</p>
</td>
</tr>
<tr id="en-us_topic_0257713314_row25127389"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0257713314_p22052591"><a name="en-us_topic_0257713314_p22052591"></a><a name="en-us_topic_0257713314_p22052591"></a>Logic, DB errors</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0257713314_p41429462"><a name="en-us_topic_0257713314_p41429462"></a><a name="en-us_topic_0257713314_p41429462"></a>ERRCODE_INTERNAL_</p>
<p id="en-us_topic_0257713314_p37320845"><a name="en-us_topic_0257713314_p37320845"></a><a name="en-us_topic_0257713314_p37320845"></a>ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0257713314_p3089614"><a name="en-us_topic_0257713314_p3089614"></a><a name="en-us_topic_0257713314_p3089614"></a>Checkpoint: algorithm fails, or failure to retrieve table data or indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0257713314_p48932183"><a name="en-us_topic_0257713314_p48932183"></a><a name="en-us_topic_0257713314_p48932183"></a>FATAL – process exists</p>
</td>
</tr>
</tbody>
</table>

