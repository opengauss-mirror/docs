# Errors Written the Log File<a name="EN-US_TOPIC_0260488124"></a>

All errors are logged in the database server log file. The following lists the errors that are written to the database server log file and are  **not**  returned to the user. The log is located in the data folder and named  **postgresql-DATE-TIME.log**.

**Table  1**  Errors Written Only to the Log File

<a name="table10582490"></a>
<table><thead align="left"><tr id="row23677630"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p38839882"><a name="p38839882"></a><a name="p38839882"></a>Message in the Log</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p59022734"><a name="p59022734"></a><a name="p59022734"></a>Error Internal Code</p>
</th>
</tr>
</thead>
<tbody><tr id="row16112179"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p30018145"><a name="p30018145"></a><a name="p30018145"></a>Error code denoting success</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p15550655"><a name="p15550655"></a><a name="p15550655"></a>MOT_NO_ERROR 0</p>
</td>
</tr>
<tr id="row5738167"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p62138401"><a name="p62138401"></a><a name="p62138401"></a>Out of memory</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p45711"><a name="p45711"></a><a name="p45711"></a>MOT_ERROR_OOM 1</p>
</td>
</tr>
<tr id="row411403"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p33323707"><a name="p33323707"></a><a name="p33323707"></a>Invalid configuration</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p14865764"><a name="p14865764"></a><a name="p14865764"></a>MOT_ERROR_INVALID_CFG 2</p>
</td>
</tr>
<tr id="row66683013"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p32614933"><a name="p32614933"></a><a name="p32614933"></a>Invalid argument passed to function</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p24563889"><a name="p24563889"></a><a name="p24563889"></a>MOT_ERROR_INVALID_ARG 3</p>
</td>
</tr>
<tr id="row19748416"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p56117850"><a name="p56117850"></a><a name="p56117850"></a>System call failed</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p49252021"><a name="p49252021"></a><a name="p49252021"></a>MOT_ERROR_SYSTEM_FAILURE 4</p>
</td>
</tr>
<tr id="row40615010"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1481537"><a name="p1481537"></a><a name="p1481537"></a>Resource limit reached</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p52895668"><a name="p52895668"></a><a name="p52895668"></a>MOT_ERROR_RESOURCE_LIMIT 5</p>
</td>
</tr>
<tr id="row6298969"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p40454470"><a name="p40454470"></a><a name="p40454470"></a>Internal logic error</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p55586619"><a name="p55586619"></a><a name="p55586619"></a>MOT_ERROR_INTERNAL 6</p>
</td>
</tr>
<tr id="row30517529"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p56000750"><a name="p56000750"></a><a name="p56000750"></a>Resource unavailable</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p39766879"><a name="p39766879"></a><a name="p39766879"></a>MOT_ERROR_RESOURCE_UNAVAILABLE 7</p>
</td>
</tr>
<tr id="row22357598"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p66135046"><a name="p66135046"></a><a name="p66135046"></a>Unique violation</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p55338494"><a name="p55338494"></a><a name="p55338494"></a>MOT_ERROR_UNIQUE_VIOLATION 8</p>
</td>
</tr>
<tr id="row28284399"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p9335011"><a name="p9335011"></a><a name="p9335011"></a>Invalid memory allocation size</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p17938427"><a name="p17938427"></a><a name="p17938427"></a>MOT_ERROR_INVALID_MEMORY_SIZE 9</p>
</td>
</tr>
<tr id="row27228120"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p57994146"><a name="p57994146"></a><a name="p57994146"></a>Index out of range</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p67014277"><a name="p67014277"></a><a name="p67014277"></a>MOT_ERROR_INDEX_OUT_OF_RANGE 10</p>
</td>
</tr>
<tr id="row66257583"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p65263977"><a name="p65263977"></a><a name="p65263977"></a>Error code unknown</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p51890767"><a name="p51890767"></a><a name="p51890767"></a>MOT_ERROR_INVALID_STATE 11</p>
</td>
</tr>
</tbody>
</table>

