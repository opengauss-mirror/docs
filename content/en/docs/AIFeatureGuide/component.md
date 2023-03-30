# component<a name="EN-US_TOPIC_0000001243956557"></a>

This subcommand can be used to start DBMind components, including the exporter for monitoring metrics and other AI functions. It forwards the commands passed by the user through the CLI client to the corresponding components. For details about the commands of different components, see the corresponding sections of the components.

## Command Reference<a name="section826919344421"></a>

You can use the  **--help**  option to obtain the help information about this mode. For example:

```
gs_dbmind component --help
```

```
usage:  component [-h] COMPONENT_NAME ...

positional arguments:
  COMPONENT_NAME  choice a component to start. ['extract_log', 'forecast', 'index_advisor', 'opengauss_exporter', 'reprocessing_exporter', 'slow_query_diagnosis', 'sqldiag', 'xtuner']
  ARGS            arguments for the component to start

optional arguments:
  -h, --help      show this help message and exit
```

**Table  1**  Parameters of the gs\_dbmind component subcommand

<a name="en-us_topic_0283137337_table628178124515"></a>
<table><thead align="left"><tr id="en-us_topic_0283137337_row162968174512"><th class="cellrowborder" valign="top" width="33.3033303330333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137337_p1129138144517"><a name="en-us_topic_0283137337_p1129138144517"></a><a name="en-us_topic_0283137337_p1129138144517"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.36333633363336%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137337_p2029181454"><a name="en-us_topic_0283137337_p2029181454"></a><a name="en-us_topic_0283137337_p2029181454"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137337_p6291382451"><a name="en-us_topic_0283137337_p6291382451"></a><a name="en-us_topic_0283137337_p6291382451"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row16616112314312"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p6616122313314"><a name="p6616122313314"></a><a name="p6616122313314"></a>COMPONENT_NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p5616423334"><a name="p5616423334"></a><a name="p5616423334"></a>Component name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p47981242744"><a name="p47981242744"></a><a name="p47981242744"></a>extract_log, forecast, index_advisor, opengauss_exporter, reprocessing_exporter, slow_query_diagnosis, sqldiag, xtuner</p>
</td>
</tr>
<tr id="row185495841018"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p279475074419"><a name="p279475074419"></a><a name="p279475074419"></a>ARGS</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p179375010446"><a name="p179375010446"></a><a name="p179375010446"></a>Component parameters</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1979295084412"><a name="p1979295084412"></a><a name="p1979295084412"></a>Refer to the command description of the corresponding component.</p>
</td>
</tr>
<tr id="en-us_topic_0283137337_row162915844513"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137337_p132968134510"><a name="en-us_topic_0283137337_p132968134510"></a><a name="en-us_topic_0283137337_p132968134510"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137337_p152474092416"><a name="en-us_topic_0283137337_p152474092416"></a><a name="en-us_topic_0283137337_p152474092416"></a>Help information</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137337_p94668717174"><a name="en-us_topic_0283137337_p94668717174"></a><a name="en-us_topic_0283137337_p94668717174"></a>-</p>
</td>
</tr>
</tbody>
</table>

