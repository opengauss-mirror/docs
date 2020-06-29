# GS\_WLM\_USER\_RESOURCE\_HISTORY<a name="EN-US_TOPIC_0242385792"></a>

**GS\_WLM\_USER\_RESOURCE\_HISTORY**  stores information about resources used by users and is valid only on primary database nodes. Each record in this table indicates resource usage of a user at a time point, including the memory, number of CPU cores, storage space, temporary space, operator flushing space, logical I/O traffic, number of logical I/O operations, and logical I/O rate. The memory, CPU, and I/O monitoring items record only resource usage of complex jobs. For I/O monitoring items, this parameter is valid only when  **enable\_logical\_io\_statistics**  is set to  **on**. The function of saving user monitoring data is enabled only when  **enable\_user\_metric\_persistent**  is set to  **on**. Data in the system catalog  **GS\_WLM\_USER\_RESOURCE\_HISTORY**  comes from the  **PG\_TOTAL\_USER\_RESOURCE\_INFO**  view.

**Table  1**  GS\_WLM\_USER\_RESOURCE\_HISTORY

<a name="en-us_topic_0237122265_table15633834175114"></a>
<table><thead align="left"><tr id="en-us_topic_0237122265_row17633143412517"><th class="cellrowborder" valign="top" width="20.42204220422042%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122265_p53185310511"><a name="en-us_topic_0237122265_p53185310511"></a><a name="en-us_topic_0237122265_p53185310511"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="26.092609260926093%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122265_p1463383485112"><a name="en-us_topic_0237122265_p1463383485112"></a><a name="en-us_topic_0237122265_p1463383485112"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="53.48534853485349%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122265_p186331534145111"><a name="en-us_topic_0237122265_p186331534145111"></a><a name="en-us_topic_0237122265_p186331534145111"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122265_row1563313416518"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p16634133417511"><a name="en-us_topic_0237122265_p16634133417511"></a><a name="en-us_topic_0237122265_p16634133417511"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p563483485115"><a name="en-us_topic_0237122265_p563483485115"></a><a name="en-us_topic_0237122265_p563483485115"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p86341934145113"><a name="en-us_topic_0237122265_p86341934145113"></a><a name="en-us_topic_0237122265_p86341934145113"></a>Username</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row56348346517"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p16634634135117"><a name="en-us_topic_0237122265_p16634634135117"></a><a name="en-us_topic_0237122265_p16634634135117"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p863415348515"><a name="en-us_topic_0237122265_p863415348515"></a><a name="en-us_topic_0237122265_p863415348515"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p86348343514"><a name="en-us_topic_0237122265_p86348343514"></a><a name="en-us_topic_0237122265_p86348343514"></a>Timestamp</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row13634143413512"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p96344345511"><a name="en-us_topic_0237122265_p96344345511"></a><a name="en-us_topic_0237122265_p96344345511"></a>used_memory</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p16634234165117"><a name="en-us_topic_0237122265_p16634234165117"></a><a name="en-us_topic_0237122265_p16634234165117"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p263473418512"><a name="en-us_topic_0237122265_p263473418512"></a><a name="en-us_topic_0237122265_p263473418512"></a>Used memory, in MB</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row126341834205118"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p2634123411519"><a name="en-us_topic_0237122265_p2634123411519"></a><a name="en-us_topic_0237122265_p2634123411519"></a>total_memory</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p136348343517"><a name="en-us_topic_0237122265_p136348343517"></a><a name="en-us_topic_0237122265_p136348343517"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p7634234165116"><a name="en-us_topic_0237122265_p7634234165116"></a><a name="en-us_topic_0237122265_p7634234165116"></a>Available memory, in MB. The value <strong id="en-us_topic_0237122265_b1438011578468"><a name="en-us_topic_0237122265_b1438011578468"></a><a name="en-us_topic_0237122265_b1438011578468"></a>0</strong> indicates that the available memory is not limited and depends on the maximum memory available in the database.</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row15634134105111"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p1634034115116"><a name="en-us_topic_0237122265_p1634034115116"></a><a name="en-us_topic_0237122265_p1634034115116"></a>used_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p13634434115117"><a name="en-us_topic_0237122265_p13634434115117"></a><a name="en-us_topic_0237122265_p13634434115117"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p163483412516"><a name="en-us_topic_0237122265_p163483412516"></a><a name="en-us_topic_0237122265_p163483412516"></a>Number of CPU cores in use</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row4634193413513"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p1463433411511"><a name="en-us_topic_0237122265_p1463433411511"></a><a name="en-us_topic_0237122265_p1463433411511"></a>total_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p1563423465112"><a name="en-us_topic_0237122265_p1563423465112"></a><a name="en-us_topic_0237122265_p1563423465112"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p3634113455111"><a name="en-us_topic_0237122265_p3634113455111"></a><a name="en-us_topic_0237122265_p3634113455111"></a>Total number of CPU cores of the Cgroup associated with the user on the node</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row56341434195116"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p963443418513"><a name="en-us_topic_0237122265_p963443418513"></a><a name="en-us_topic_0237122265_p963443418513"></a>used_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p18634173419511"><a name="en-us_topic_0237122265_p18634173419511"></a><a name="en-us_topic_0237122265_p18634173419511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p6634173415512"><a name="en-us_topic_0237122265_p6634173415512"></a><a name="en-us_topic_0237122265_p6634173415512"></a>Used storage space, in KB</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row5634133410512"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p6635163445111"><a name="en-us_topic_0237122265_p6635163445111"></a><a name="en-us_topic_0237122265_p6635163445111"></a>total_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p46351834185110"><a name="en-us_topic_0237122265_p46351834185110"></a><a name="en-us_topic_0237122265_p46351834185110"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p1863573485110"><a name="en-us_topic_0237122265_p1863573485110"></a><a name="en-us_topic_0237122265_p1863573485110"></a>Available storage space, in KB. The value <strong id="en-us_topic_0237122265_b147214442475"><a name="en-us_topic_0237122265_b147214442475"></a><a name="en-us_topic_0237122265_b147214442475"></a>-1</strong> indicates that the storage space is not limited.</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row176354342517"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p14635153416513"><a name="en-us_topic_0237122265_p14635153416513"></a><a name="en-us_topic_0237122265_p14635153416513"></a>used_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p1663514348513"><a name="en-us_topic_0237122265_p1663514348513"></a><a name="en-us_topic_0237122265_p1663514348513"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p7635113415114"><a name="en-us_topic_0237122265_p7635113415114"></a><a name="en-us_topic_0237122265_p7635113415114"></a>Used temporary storage space, in KB</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row10635173445119"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p9635143425116"><a name="en-us_topic_0237122265_p9635143425116"></a><a name="en-us_topic_0237122265_p9635143425116"></a>total_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p1263513410516"><a name="en-us_topic_0237122265_p1263513410516"></a><a name="en-us_topic_0237122265_p1263513410516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p17635734175119"><a name="en-us_topic_0237122265_p17635734175119"></a><a name="en-us_topic_0237122265_p17635734175119"></a>Available temporary storage space, in KB. The value <strong id="en-us_topic_0237122265_b57913711485"><a name="en-us_topic_0237122265_b57913711485"></a><a name="en-us_topic_0237122265_b57913711485"></a>-1</strong> indicates that the maximum temporary storage space is not limited.</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row3635113455119"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p11635934105114"><a name="en-us_topic_0237122265_p11635934105114"></a><a name="en-us_topic_0237122265_p11635934105114"></a>used_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p16351334175118"><a name="en-us_topic_0237122265_p16351334175118"></a><a name="en-us_topic_0237122265_p16351334175118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p13635434205119"><a name="en-us_topic_0237122265_p13635434205119"></a><a name="en-us_topic_0237122265_p13635434205119"></a>Used space of operator flushing, in KB</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row86359341514"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p1163543415120"><a name="en-us_topic_0237122265_p1163543415120"></a><a name="en-us_topic_0237122265_p1163543415120"></a>total_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p36356343510"><a name="en-us_topic_0237122265_p36356343510"></a><a name="en-us_topic_0237122265_p36356343510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p206351434105117"><a name="en-us_topic_0237122265_p206351434105117"></a><a name="en-us_topic_0237122265_p206351434105117"></a>Available storage space for operator flushing, in KB. The value <strong id="en-us_topic_0237122265_b3278142944812"><a name="en-us_topic_0237122265_b3278142944812"></a><a name="en-us_topic_0237122265_b3278142944812"></a>-1</strong> indicates that the maximum operator flushing space is not limited.</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row16635134115119"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p46351034125113"><a name="en-us_topic_0237122265_p46351034125113"></a><a name="en-us_topic_0237122265_p46351034125113"></a>read_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p96351034175115"><a name="en-us_topic_0237122265_p96351034175115"></a><a name="en-us_topic_0237122265_p96351034175115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p863533413514"><a name="en-us_topic_0237122265_p863533413514"></a><a name="en-us_topic_0237122265_p863533413514"></a>Byte traffic of read operations in a monitoring period, in KB</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row136351034125115"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p10635234185115"><a name="en-us_topic_0237122265_p10635234185115"></a><a name="en-us_topic_0237122265_p10635234185115"></a>write_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p863523415119"><a name="en-us_topic_0237122265_p863523415119"></a><a name="en-us_topic_0237122265_p863523415119"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p10636734165110"><a name="en-us_topic_0237122265_p10636734165110"></a><a name="en-us_topic_0237122265_p10636734165110"></a>Byte traffic of write operations in a monitoring period, in KB</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row9636133465111"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p1563653445111"><a name="en-us_topic_0237122265_p1563653445111"></a><a name="en-us_topic_0237122265_p1563653445111"></a>read_counts</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p763683465118"><a name="en-us_topic_0237122265_p763683465118"></a><a name="en-us_topic_0237122265_p763683465118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p1563341118139"><a name="en-us_topic_0237122265_p1563341118139"></a><a name="en-us_topic_0237122265_p1563341118139"></a>Number of read operations in a monitoring period</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row1663683417516"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p66365344511"><a name="en-us_topic_0237122265_p66365344511"></a><a name="en-us_topic_0237122265_p66365344511"></a>write_counts</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p2636163418516"><a name="en-us_topic_0237122265_p2636163418516"></a><a name="en-us_topic_0237122265_p2636163418516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p763613415512"><a name="en-us_topic_0237122265_p763613415512"></a><a name="en-us_topic_0237122265_p763613415512"></a>Number of write operations in a monitoring period</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row2636734175117"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p463663495117"><a name="en-us_topic_0237122265_p463663495117"></a><a name="en-us_topic_0237122265_p463663495117"></a>read_speed</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p1663619341518"><a name="en-us_topic_0237122265_p1663619341518"></a><a name="en-us_topic_0237122265_p1663619341518"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p96361534105116"><a name="en-us_topic_0237122265_p96361534105116"></a><a name="en-us_topic_0237122265_p96361534105116"></a>Byte rate of read operations in a monitoring period, in KB</p>
</td>
</tr>
<tr id="en-us_topic_0237122265_row19991428101118"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122265_p12100228141112"><a name="en-us_topic_0237122265_p12100228141112"></a><a name="en-us_topic_0237122265_p12100228141112"></a>write_speed</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122265_p191000288116"><a name="en-us_topic_0237122265_p191000288116"></a><a name="en-us_topic_0237122265_p191000288116"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122265_p210072812117"><a name="en-us_topic_0237122265_p210072812117"></a><a name="en-us_topic_0237122265_p210072812117"></a>Byte rate of write operations in a monitoring period, in KB</p>
</td>
</tr>
</tbody>
</table>

