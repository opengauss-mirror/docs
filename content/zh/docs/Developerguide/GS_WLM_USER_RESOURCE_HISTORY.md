# GS\_WLM\_USER\_RESOURCE\_HISTORY

GS\_WLM\_USER\_RESOURCE\_HISTORY系统表存储与用户使用资源相关的信息。该系统表的每条记录都是对应时间点某用户的资源使用情况，包括：内存、CPU核数、存储空间、临时空间、算子落盘空间、逻辑IO流量、逻辑IO次数和逻辑IO速率信息。其中，内存、CPU、IO相关监控项仅记录用户复杂作业的资源使用情况。对于IO相关监控项，当参数enable\_logical\_io\_statistics为on时才有效；当参数enable\_user\_metric\_persistent为on时，才会开启用户监控数据保存功能。GS\_WLM\_USER\_RESOURCE\_HISTORY系统表的数据来源于PG\_TOTAL\_USER\_RESOURCE\_INFO视图。查询该系统表需要sysadmin权限，且仅在数据库postgres下面查询时有数据。

**表 1**  GS\_WLM\_USER\_RESOURCE\_HISTORY

<a name="table15633834175114"></a>
<table><thead align="left"><tr id="row17633143412517"><th class="cellrowborder" valign="top" width="20.42204220422042%" id="mcps1.2.4.1.1"><p id="p53185310511"><a name="p53185310511"></a><a name="p53185310511"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="26.092609260926093%" id="mcps1.2.4.1.2"><p id="p1463383485112"><a name="p1463383485112"></a><a name="p1463383485112"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="53.48534853485349%" id="mcps1.2.4.1.3"><p id="p186331534145111"><a name="p186331534145111"></a><a name="p186331534145111"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1563313416518"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p16634133417511"><a name="p16634133417511"></a><a name="p16634133417511"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p563483485115"><a name="p563483485115"></a><a name="p563483485115"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p86341934145113"><a name="p86341934145113"></a><a name="p86341934145113"></a>用户名。</p>
</td>
</tr>
<tr id="row56348346517"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p16634634135117"><a name="p16634634135117"></a><a name="p16634634135117"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p863415348515"><a name="p863415348515"></a><a name="p863415348515"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p86348343514"><a name="p86348343514"></a><a name="p86348343514"></a>时间戳。</p>
</td>
</tr>
<tr id="row13634143413512"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p96344345511"><a name="p96344345511"></a><a name="p96344345511"></a>used_memory</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p16634234165117"><a name="p16634234165117"></a><a name="p16634234165117"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p263473418512"><a name="p263473418512"></a><a name="p263473418512"></a>正在使用的内存大小，单位MB。</p>
</td>
</tr>
<tr id="row126341834205118"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p2634123411519"><a name="p2634123411519"></a><a name="p2634123411519"></a>total_memory</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p136348343517"><a name="p136348343517"></a><a name="p136348343517"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p7634234165116"><a name="p7634234165116"></a><a name="p7634234165116"></a>可以使用的内存大小，单位为MB。值为0表示未限制最大可用内存，其限制取决于数据库最大可用内存。</p>
</td>
</tr>
<tr id="row15634134105111"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p1634034115116"><a name="p1634034115116"></a><a name="p1634034115116"></a>used_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p13634434115117"><a name="p13634434115117"></a><a name="p13634434115117"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p163483412516"><a name="p163483412516"></a><a name="p163483412516"></a>正在使用的CPU核数。</p>
</td>
</tr>
<tr id="row4634193413513"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p1463433411511"><a name="p1463433411511"></a><a name="p1463433411511"></a>total_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p1563423465112"><a name="p1563423465112"></a><a name="p1563423465112"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p3634113455111"><a name="p3634113455111"></a><a name="p3634113455111"></a>该机器节点上，用户关联控制组的CPU核数总和。</p>
</td>
</tr>
<tr id="row56341434195116"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p963443418513"><a name="p963443418513"></a><a name="p963443418513"></a>used_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p18634173419511"><a name="p18634173419511"></a><a name="p18634173419511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p6634173415512"><a name="p6634173415512"></a><a name="p6634173415512"></a>已使用的存储空间大小，单位KB。</p>
</td>
</tr>
<tr id="row5634133410512"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p6635163445111"><a name="p6635163445111"></a><a name="p6635163445111"></a>total_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p46351834185110"><a name="p46351834185110"></a><a name="p46351834185110"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p1863573485110"><a name="p1863573485110"></a><a name="p1863573485110"></a>可使用的存储空间大小，单位KB，值为-1表示未限制最大存储空间。</p>
</td>
</tr>
<tr id="row176354342517"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p14635153416513"><a name="p14635153416513"></a><a name="p14635153416513"></a>used_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p1663514348513"><a name="p1663514348513"></a><a name="p1663514348513"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p7635113415114"><a name="p7635113415114"></a><a name="p7635113415114"></a>已使用的临时存储空间大小，单位KB。</p>
</td>
</tr>
<tr id="row10635173445119"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p9635143425116"><a name="p9635143425116"></a><a name="p9635143425116"></a>total_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p1263513410516"><a name="p1263513410516"></a><a name="p1263513410516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p17635734175119"><a name="p17635734175119"></a><a name="p17635734175119"></a>可使用的临存储空间大小，单位KB，值为-1表示未限制最大临时存储空间。</p>
</td>
</tr>
<tr id="row3635113455119"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p11635934105114"><a name="p11635934105114"></a><a name="p11635934105114"></a>used_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p16351334175118"><a name="p16351334175118"></a><a name="p16351334175118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p13635434205119"><a name="p13635434205119"></a><a name="p13635434205119"></a>已使用的算子落盘存储空间大小，单位KB。</p>
</td>
</tr>
<tr id="row86359341514"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p1163543415120"><a name="p1163543415120"></a><a name="p1163543415120"></a>total_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p36356343510"><a name="p36356343510"></a><a name="p36356343510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p206351434105117"><a name="p206351434105117"></a><a name="p206351434105117"></a>可使用的算子落盘存储空间大小，单位KB，值为-1表示未限制最大算子落盘存储空间。</p>
</td>
</tr>
<tr id="row16635134115119"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p46351034125113"><a name="p46351034125113"></a><a name="p46351034125113"></a>read_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p96351034175115"><a name="p96351034175115"></a><a name="p96351034175115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p863533413514"><a name="p863533413514"></a><a name="p863533413514"></a>监控周期内，读操作的字节流量，单位KB。</p>
</td>
</tr>
<tr id="row136351034125115"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p10635234185115"><a name="p10635234185115"></a><a name="p10635234185115"></a>write_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p863523415119"><a name="p863523415119"></a><a name="p863523415119"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p10636734165110"><a name="p10636734165110"></a><a name="p10636734165110"></a>监控周期内，写操作的字节流量，单位KB。</p>
</td>
</tr>
<tr id="row9636133465111"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p1563653445111"><a name="p1563653445111"></a><a name="p1563653445111"></a>read_counts</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p763683465118"><a name="p763683465118"></a><a name="p763683465118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p1563341118139"><a name="p1563341118139"></a><a name="p1563341118139"></a>监控周期内，读操作的次数，单位次。</p>
</td>
</tr>
<tr id="row1663683417516"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p66365344511"><a name="p66365344511"></a><a name="p66365344511"></a>write_counts</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p2636163418516"><a name="p2636163418516"></a><a name="p2636163418516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p763613415512"><a name="p763613415512"></a><a name="p763613415512"></a>监控周期内，写操作的次数，单位次。</p>
</td>
</tr>
<tr id="row2636734175117"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p463663495117"><a name="p463663495117"></a><a name="p463663495117"></a>read_speed</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p1663619341518"><a name="p1663619341518"></a><a name="p1663619341518"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p96361534105116"><a name="p96361534105116"></a><a name="p96361534105116"></a>监控周期内，读操作的字节速率，单位KB/s。</p>
</td>
</tr>
<tr id="row19991428101118"><td class="cellrowborder" valign="top" width="20.42204220422042%" headers="mcps1.2.4.1.1 "><p id="p12100228141112"><a name="p12100228141112"></a><a name="p12100228141112"></a>write_speed</p>
</td>
<td class="cellrowborder" valign="top" width="26.092609260926093%" headers="mcps1.2.4.1.2 "><p id="p191000288116"><a name="p191000288116"></a><a name="p191000288116"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="53.48534853485349%" headers="mcps1.2.4.1.3 "><p id="p210072812117"><a name="p210072812117"></a><a name="p210072812117"></a>监控周期内，写操作的字节速率，单位KB/s。</p>
</td>
</tr>
</tbody>
</table>
