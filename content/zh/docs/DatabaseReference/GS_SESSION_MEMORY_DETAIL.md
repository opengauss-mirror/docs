# GS\_SESSION\_MEMORY\_DETAIL<a name="ZH-CN_TOPIC_0289900281"></a>

GS\_SESSION\_MEMORY\_DETAIL统计会话的内存使用情况，以MemoryContext节点来统计。当开启线程池（enable\_thread\_pool = on）时，该视图包含所有的线程和会话的内存使用情况。当GUC参数enable\_memory\_limit的值为off时，本视图不可用。

其中内存上下文“TempSmallContextGroup”，记录当前线程中所有内存上下文字段“totalsize”小于8192字节的信息汇总，并且内存上下文统计计数记录到“usedsize”字段中。所以在视图中，“TempSmallContextGroup”内存上下文中的“totalsize”和“freesize”是该线程中所有内存上下文“totalsize”小于8192字节的汇总总和，usedsize字段表示统计的内存上下文个数。

可通过“select \* from gs\_session\_memctx\_detail\(threadid, ‘’\);”将某个线程所有内存上下文信息记录到“$GAUSSLOG/pg\_log/$\{node\_name\}/dumpmem”目录下的“threadid\_timestamp.log”文件中。其中threadid可通过下表sessid中获得。

**表 1**  GS\_SESSION\_MEMORY\_DETAIL字段

<a name="zh-cn_topic_0059778760_td16c4d9490d3429bb7924dc70121414a"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778760_rc61f4f57499841bb9a68d858b72c8c54"><th class="cellrowborder" valign="top" width="22.8%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778760_a220d97f0527149ce80b68e31b779b847"><a name="zh-cn_topic_0059778760_a220d97f0527149ce80b68e31b779b847"></a><a name="zh-cn_topic_0059778760_a220d97f0527149ce80b68e31b779b847"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="18.86%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778760_a346303cc8f9d439197ef0f38f89488ab"><a name="zh-cn_topic_0059778760_a346303cc8f9d439197ef0f38f89488ab"></a><a name="zh-cn_topic_0059778760_a346303cc8f9d439197ef0f38f89488ab"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="58.34%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778760_a0a84722b14484b05b1df15bf5dd61177"><a name="zh-cn_topic_0059778760_a0a84722b14484b05b1df15bf5dd61177"></a><a name="zh-cn_topic_0059778760_a0a84722b14484b05b1df15bf5dd61177"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778760_r914d559fd7df49649c793cbd9e8cf04b"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="p84771312518"><a name="p84771312518"></a><a name="p84771312518"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="p194701375112"><a name="p194701375112"></a><a name="p194701375112"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="p44751317515"><a name="p44751317515"></a><a name="p44751317515"></a>线程启动时间+线程标识（字符串信息为timestamp.threadid）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_rdee21293e92d4399b0afa410cb2fe613"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="p1847141395111"><a name="p1847141395111"></a><a name="p1847141395111"></a>sesstype</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="p184711385114"><a name="p184711385114"></a><a name="p184711385114"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="p74811315119"><a name="p74811315119"></a><a name="p74811315119"></a>线程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_rc637dd0eab0f4790a4b045b6f8978a1c"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="p1248113125118"><a name="p1248113125118"></a><a name="p1248113125118"></a>contextname</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="p54819131513"><a name="p54819131513"></a><a name="p54819131513"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="p348171318516"><a name="p348171318516"></a><a name="p348171318516"></a>内存上下文名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_r4f0632f87a264574a0576d6439b066e3"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="p9481813145116"><a name="p9481813145116"></a><a name="p9481813145116"></a>level</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="p648101325112"><a name="p648101325112"></a><a name="p648101325112"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="p194912139513"><a name="p194912139513"></a><a name="p194912139513"></a>当前上下文在整体内存上下文中的层级。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_rac270e0e2b944107b6ff3b9692410a02"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="p949113125119"><a name="p949113125119"></a><a name="p949113125119"></a>parent</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="p94931365116"><a name="p94931365116"></a><a name="p94931365116"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="p144951395114"><a name="p144951395114"></a><a name="p144951395114"></a>父内存上下文名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_r096ceb75d6da44f98c1c147169ffd8da"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="p549171315113"><a name="p549171315113"></a><a name="p549171315113"></a>totalsize</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="p64911317519"><a name="p64911317519"></a><a name="p64911317519"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="p14501013135114"><a name="p14501013135114"></a><a name="p14501013135114"></a>当前内存上下文的内存总数，单位Byte。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_r69986e8b1c794167afd0d4231a8624a7"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="p3509139519"><a name="p3509139519"></a><a name="p3509139519"></a>freesize</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="p8501913115118"><a name="p8501913115118"></a><a name="p8501913115118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="p2050131355118"><a name="p2050131355118"></a><a name="p2050131355118"></a>当前内存上下文中已释放的内存总数，单位Byte。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778760_rd71ceda6ede4450ab167628eea017721"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="p1450121317516"><a name="p1450121317516"></a><a name="p1450121317516"></a>usedsize</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="p15501513165117"><a name="p15501513165117"></a><a name="p15501513165117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="p251813135118"><a name="p251813135118"></a><a name="p251813135118"></a>当前内存上下文中已使用的内存总数，单位Byte；“TempSmallContextGroup”内存上下文中该字段含义为统计计数。</p>
</td>
</tr>
</tbody>
</table>

