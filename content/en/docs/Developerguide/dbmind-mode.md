# DBMind Mode<a name="EN-US_TOPIC_0000001243843273"></a>

You can run the  **gs\_dbmind**  command to invoke all functions of AI4DB. This command provides the following basic functions:

-   Service functions: You can use the  **service**  subcommand to implement service related functions, including creating and initializing configuration directories, starting background services, and stopping background services.
-   Invoking components: You can use the  **component**  subcommand to invoke components. AI4DB functions \(such as index recommendation and parameter tuning\) can be invoked in real time in this mode.
-   Setting parameters: You can use the  **set**  subcommand to modify the configuration file in the configuration directory. The configuration file can also be modified by using the text editor.

You can use the  **--help**  option to obtain the help information about the preceding modes. For example:

```
gs_dbmind --help
```

```
usage: [-h] [--version] {service,set,component} ...

openGauss DBMind: An autonomous platform for openGauss

optional arguments:
  -h, --help            show this help message and exit
  --version             show program's version number and exit

available subcommands:
  {service,set,component}
                        type '<subcommand> -h' for help on a specific subcommand
    service             send a command to DBMind to change the status of the service
    set                 set a parameter
    component           pass command line arguments to each sub-component.
```

**Table  1**  gs\_dbmind options

<a name="table228121144819"></a>
<table><thead align="left"><tr id="row172811194811"><th class="cellrowborder" valign="top" width="33.3033303330333%" id="mcps1.2.4.1.1"><p id="p7281141184818"><a name="p7281141184818"></a><a name="p7281141184818"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.36333633363336%" id="mcps1.2.4.1.2"><p id="p1928151114811"><a name="p1928151114811"></a><a name="p1928151114811"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p19281114488"><a name="p19281114488"></a><a name="p19281114488"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row52810164812"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p7940121011519"><a name="p7940121011519"></a><a name="p7940121011519"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p17945141410512"><a name="p17945141410512"></a><a name="p17945141410512"></a>Help information</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p76275142302"><a name="p76275142302"></a><a name="p76275142302"></a>-</p>
</td>
</tr>
<tr id="row6281141134812"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p1349818310513"><a name="p1349818310513"></a><a name="p1349818310513"></a>--version</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p142813134819"><a name="p142813134819"></a><a name="p142813134819"></a>Version number</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p12626714113016"><a name="p12626714113016"></a><a name="p12626714113016"></a>-</p>
</td>
</tr>
<tr id="row1028116154811"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p1328141124810"><a name="p1328141124810"></a><a name="p1328141124810"></a>service</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p72818194810"><a name="p72818194810"></a><a name="p72818194810"></a>Subcommand related to service functions</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2062671473019"><a name="p2062671473019"></a><a name="p2062671473019"></a>-</p>
</td>
</tr>
<tr id="row1428110116489"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p15281151134811"><a name="p15281151134811"></a><a name="p15281151134811"></a>component</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p1728171134816"><a name="p1728171134816"></a><a name="p1728171134816"></a>Subcommand for invoking components</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p196256146304"><a name="p196256146304"></a><a name="p196256146304"></a>-</p>
</td>
</tr>
<tr id="row1928113114489"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p151167279507"><a name="p151167279507"></a><a name="p151167279507"></a>set</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p1115152711506"><a name="p1115152711506"></a><a name="p1115152711506"></a>Subcommand for modifying the configuration file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p36245148307"><a name="p36245148307"></a><a name="p36245148307"></a>-</p>
</td>
</tr>
</tbody>
</table>

-   **[service](service.md)**  

-   **[component](component.md)**  

-   **[set](set.md)**  


