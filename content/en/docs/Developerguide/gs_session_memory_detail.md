# GS\_SESSION\_MEMORY\_DETAIL<a name="EN-US_TOPIC_0242386035"></a>

**GS\_SESSION\_MEMORY\_DETAIL**  collects statistics about thread memory usage by MemoryContext node. When  **enable\_thread\_pool**  is set to  **on**, this view contains memory usage of all threads and sessions.

The memory context  **TempSmallContextGroup**  collects information about all memory contexts whose value in the  **totalsize**  column is less than 8192 bytes in the current thread, and the number of the collected memory contexts is recorded in the  **usedsize**  column. Therefore, the  **totalsize**  and  **freesize**  columns for  **TempSmallContextGroup**  in the view display the corresponding information about all the memory contexts whose value in the  **totalsize**  column is less than 8192 bytes in the current thread, and the  **usedsize**  column displays the number of these memory contexts.

You can run the  **"select \* from gs\_session\_memctx\_detail\(**_threadid_**,''\);**  statement to record information about all memory contexts of a thread into the  _threadid_\__timestamp_**.log**  file in the  **/tmp/dumpmem**  directory.  _threadid_  can be obtained from the following table.

**Table  1**  GS\_SESSION\_MEMORY\_DETAIL columns

<a name="en-us_topic_0237122508_en-us_topic_0059778760_td16c4d9490d3429bb7924dc70121414a"></a>
<table><thead align="left"><tr id="en-us_topic_0237122508_en-us_topic_0059778760_rc61f4f57499841bb9a68d858b72c8c54"><th class="cellrowborder" valign="top" width="22.8%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122508_en-us_topic_0059778760_a220d97f0527149ce80b68e31b779b847"><a name="en-us_topic_0237122508_en-us_topic_0059778760_a220d97f0527149ce80b68e31b779b847"></a><a name="en-us_topic_0237122508_en-us_topic_0059778760_a220d97f0527149ce80b68e31b779b847"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="18.86%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122508_en-us_topic_0059778760_a346303cc8f9d439197ef0f38f89488ab"><a name="en-us_topic_0237122508_en-us_topic_0059778760_a346303cc8f9d439197ef0f38f89488ab"></a><a name="en-us_topic_0237122508_en-us_topic_0059778760_a346303cc8f9d439197ef0f38f89488ab"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="58.34%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122508_en-us_topic_0059778760_a0a84722b14484b05b1df15bf5dd61177"><a name="en-us_topic_0237122508_en-us_topic_0059778760_a0a84722b14484b05b1df15bf5dd61177"></a><a name="en-us_topic_0237122508_en-us_topic_0059778760_a0a84722b14484b05b1df15bf5dd61177"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122508_en-us_topic_0059778760_r914d559fd7df49649c793cbd9e8cf04b"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122508_p84771312518"><a name="en-us_topic_0237122508_p84771312518"></a><a name="en-us_topic_0237122508_p84771312518"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122508_p194701375112"><a name="en-us_topic_0237122508_p194701375112"></a><a name="en-us_topic_0237122508_p194701375112"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122508_p44751317515"><a name="en-us_topic_0237122508_p44751317515"></a><a name="en-us_topic_0237122508_p44751317515"></a>Thread start time + thread ID (string: <em id="i221511011347"><a name="i221511011347"></a><a name="i221511011347"></a>timestamp</em>.<em id="i02221013411"><a name="i02221013411"></a><a name="i02221013411"></a>threadid</em>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122508_en-us_topic_0059778760_rdee21293e92d4399b0afa410cb2fe613"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122508_p1847141395111"><a name="en-us_topic_0237122508_p1847141395111"></a><a name="en-us_topic_0237122508_p1847141395111"></a>sesstype</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122508_p184711385114"><a name="en-us_topic_0237122508_p184711385114"></a><a name="en-us_topic_0237122508_p184711385114"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122508_p74811315119"><a name="en-us_topic_0237122508_p74811315119"></a><a name="en-us_topic_0237122508_p74811315119"></a>Thread name</p>
</td>
</tr>
<tr id="en-us_topic_0237122508_en-us_topic_0059778760_rc637dd0eab0f4790a4b045b6f8978a1c"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122508_p1248113125118"><a name="en-us_topic_0237122508_p1248113125118"></a><a name="en-us_topic_0237122508_p1248113125118"></a>contextname</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122508_p54819131513"><a name="en-us_topic_0237122508_p54819131513"></a><a name="en-us_topic_0237122508_p54819131513"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122508_p348171318516"><a name="en-us_topic_0237122508_p348171318516"></a><a name="en-us_topic_0237122508_p348171318516"></a>Name of the memory context</p>
</td>
</tr>
<tr id="en-us_topic_0237122508_en-us_topic_0059778760_r4f0632f87a264574a0576d6439b066e3"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122508_p9481813145116"><a name="en-us_topic_0237122508_p9481813145116"></a><a name="en-us_topic_0237122508_p9481813145116"></a>level</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122508_p648101325112"><a name="en-us_topic_0237122508_p648101325112"></a><a name="en-us_topic_0237122508_p648101325112"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122508_p194912139513"><a name="en-us_topic_0237122508_p194912139513"></a><a name="en-us_topic_0237122508_p194912139513"></a>Hierarchy of the memory context</p>
</td>
</tr>
<tr id="en-us_topic_0237122508_en-us_topic_0059778760_rac270e0e2b944107b6ff3b9692410a02"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122508_p949113125119"><a name="en-us_topic_0237122508_p949113125119"></a><a name="en-us_topic_0237122508_p949113125119"></a>parent</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122508_p94931365116"><a name="en-us_topic_0237122508_p94931365116"></a><a name="en-us_topic_0237122508_p94931365116"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122508_p144951395114"><a name="en-us_topic_0237122508_p144951395114"></a><a name="en-us_topic_0237122508_p144951395114"></a>Name of the parent memory context</p>
</td>
</tr>
<tr id="en-us_topic_0237122508_en-us_topic_0059778760_r096ceb75d6da44f98c1c147169ffd8da"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122508_p549171315113"><a name="en-us_topic_0237122508_p549171315113"></a><a name="en-us_topic_0237122508_p549171315113"></a>totalsize</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122508_p64911317519"><a name="en-us_topic_0237122508_p64911317519"></a><a name="en-us_topic_0237122508_p64911317519"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122508_p14501013135114"><a name="en-us_topic_0237122508_p14501013135114"></a><a name="en-us_topic_0237122508_p14501013135114"></a>Total size of the memory context, in bytes</p>
</td>
</tr>
<tr id="en-us_topic_0237122508_en-us_topic_0059778760_r69986e8b1c794167afd0d4231a8624a7"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122508_p3509139519"><a name="en-us_topic_0237122508_p3509139519"></a><a name="en-us_topic_0237122508_p3509139519"></a>freesize</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122508_p8501913115118"><a name="en-us_topic_0237122508_p8501913115118"></a><a name="en-us_topic_0237122508_p8501913115118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122508_p2050131355118"><a name="en-us_topic_0237122508_p2050131355118"></a><a name="en-us_topic_0237122508_p2050131355118"></a>Total size of released memory in the current memory context, in bytes</p>
</td>
</tr>
<tr id="en-us_topic_0237122508_en-us_topic_0059778760_rd71ceda6ede4450ab167628eea017721"><td class="cellrowborder" valign="top" width="22.8%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122508_p1450121317516"><a name="en-us_topic_0237122508_p1450121317516"></a><a name="en-us_topic_0237122508_p1450121317516"></a>usedsize</p>
</td>
<td class="cellrowborder" valign="top" width="18.86%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122508_p15501513165117"><a name="en-us_topic_0237122508_p15501513165117"></a><a name="en-us_topic_0237122508_p15501513165117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122508_p251813135118"><a name="en-us_topic_0237122508_p251813135118"></a><a name="en-us_topic_0237122508_p251813135118"></a>Size of used memory in the memory context, in bytes. For <strong id="b1678767349"><a name="b1678767349"></a><a name="b1678767349"></a>TempSmallContextGroup</strong>, this parameter specifies the number of collected memory contexts.</p>
</td>
</tr>
</tbody>
</table>

