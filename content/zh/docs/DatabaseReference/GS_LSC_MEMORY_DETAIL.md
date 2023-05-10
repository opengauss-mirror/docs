# GS\_LSC\_MEMORY\_DETAIL

GS\_LSC\_MEMORY\_DETAIL视图统计所有的线程的本地SysCache内存使用情况，以MemoryContext节点来统计，仅在开启GSC的模式下有数据。

**表 1**  GS\_LSC\_MEMORY\_DETAIL字段

<a name="zh-cn_topic_0059778760_td16c4d9490d3429bb7924dc70121414a"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778760_rc61f4f57499841bb9a68d858b72c8c54"><th class="cellrowborder" valign="top" width="21.09%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778760_a220d97f0527149ce80b68e31b779b847"><a name="zh-cn_topic_0059778760_a220d97f0527149ce80b68e31b779b847"></a><a name="zh-cn_topic_0059778760_a220d97f0527149ce80b68e31b779b847"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="13.79%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778760_a346303cc8f9d439197ef0f38f89488ab"><a name="zh-cn_topic_0059778760_a346303cc8f9d439197ef0f38f89488ab"></a><a name="zh-cn_topic_0059778760_a346303cc8f9d439197ef0f38f89488ab"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="65.12%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778760_a0a84722b14484b05b1df15bf5dd61177"><a name="zh-cn_topic_0059778760_a0a84722b14484b05b1df15bf5dd61177"></a><a name="zh-cn_topic_0059778760_a0a84722b14484b05b1df15bf5dd61177"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778760_r914d559fd7df49649c793cbd9e8cf04b"><td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.4.1.1 "><p id="p84771312518"><a name="p84771312518"></a><a name="p84771312518"></a>threadid</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p194701375112"><a name="p194701375112"></a><a name="p194701375112"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.4.1.3 "><p id="p44751317515"><a name="p44751317515"></a><a name="p44751317515"></a>线程启动时间+线程标识（字符串信息为timestamp.sessionid）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_rdee21293e92d4399b0afa410cb2fe613"><td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.4.1.1 "><p id="p1847141395111"><a name="p1847141395111"></a><a name="p1847141395111"></a>tid</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p184711385114"><a name="p184711385114"></a><a name="p184711385114"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.4.1.3 "><p id="p74811315119"><a name="p74811315119"></a><a name="p74811315119"></a>线程标识。</p>
</td>
</tr>
<tr id="row178481518113815"><td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.4.1.1 "><p id="p184901811384"><a name="p184901811384"></a><a name="p184901811384"></a>thrdtype</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p1885015189387"><a name="p1885015189387"></a><a name="p1885015189387"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.4.1.3 "><p id="p1485061843819"><a name="p1485061843819"></a><a name="p1485061843819"></a>线程类型。可以是系统内存在的任何线程类型，如postgresql、wlmmonitor等。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_rc637dd0eab0f4790a4b045b6f8978a1c"><td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.4.1.1 "><p id="p1248113125118"><a name="p1248113125118"></a><a name="p1248113125118"></a>contextname</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p54819131513"><a name="p54819131513"></a><a name="p54819131513"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.4.1.3 "><p id="p348171318516"><a name="p348171318516"></a><a name="p348171318516"></a>内存上下文名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_r4f0632f87a264574a0576d6439b066e3"><td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.4.1.1 "><p id="p9481813145116"><a name="p9481813145116"></a><a name="p9481813145116"></a>level</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p648101325112"><a name="p648101325112"></a><a name="p648101325112"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.4.1.3 "><p id="p194912139513"><a name="p194912139513"></a><a name="p194912139513"></a>当前上下文在整体内存上下文中的层级。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_rac270e0e2b944107b6ff3b9692410a02"><td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.4.1.1 "><p id="p949113125119"><a name="p949113125119"></a><a name="p949113125119"></a>parent</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p94931365116"><a name="p94931365116"></a><a name="p94931365116"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.4.1.3 "><p id="p144951395114"><a name="p144951395114"></a><a name="p144951395114"></a>父内存上下文名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_r096ceb75d6da44f98c1c147169ffd8da"><td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.4.1.1 "><p id="p549171315113"><a name="p549171315113"></a><a name="p549171315113"></a>totalsize</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p64911317519"><a name="p64911317519"></a><a name="p64911317519"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.4.1.3 "><p id="p14501013135114"><a name="p14501013135114"></a><a name="p14501013135114"></a>当前内存上下文的内存总数，单位Byte。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_r69986e8b1c794167afd0d4231a8624a7"><td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.4.1.1 "><p id="p3509139519"><a name="p3509139519"></a><a name="p3509139519"></a>freesize</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p8501913115118"><a name="p8501913115118"></a><a name="p8501913115118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.4.1.3 "><p id="p2050131355118"><a name="p2050131355118"></a><a name="p2050131355118"></a>当前内存上下文中已释放的内存总数，单位Byte。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_rd71ceda6ede4450ab167628eea017721"><td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.4.1.1 "><p id="p1450121317516"><a name="p1450121317516"></a><a name="p1450121317516"></a>usedsize</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p15501513165117"><a name="p15501513165117"></a><a name="p15501513165117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.4.1.3 "><p id="p251813135118"><a name="p251813135118"></a><a name="p251813135118"></a>当前内存上下文中已使用的内存总数，单位Byte。</p>
</td>
</tr>
</tbody>
</table>

