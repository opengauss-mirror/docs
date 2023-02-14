# GLOBAL\_STAT\_BAD\_BLOCK

获得各节点的表、索引等文件的读取失败信息。

**表 1**  GLOBAL\_STAT\_BAD\_BLOCK字段

<a name="zh-cn_topic_0237122614_table18298154691411"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122614_row123931646151415"><th class="cellrowborder" valign="top" width="18.61%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122614_p339344618143"><a name="zh-cn_topic_0237122614_p339344618143"></a><a name="zh-cn_topic_0237122614_p339344618143"></a><strong id="zh-cn_topic_0237122614_b139315469143"><a name="zh-cn_topic_0237122614_b139315469143"></a><a name="zh-cn_topic_0237122614_b139315469143"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="29.220000000000002%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122614_p9393446121418"><a name="zh-cn_topic_0237122614_p9393446121418"></a><a name="zh-cn_topic_0237122614_p9393446121418"></a><strong id="zh-cn_topic_0237122614_b11393346121419"><a name="zh-cn_topic_0237122614_b11393346121419"></a><a name="zh-cn_topic_0237122614_b11393346121419"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="52.17%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122614_p10394164619144"><a name="zh-cn_topic_0237122614_p10394164619144"></a><a name="zh-cn_topic_0237122614_p10394164619144"></a><strong id="zh-cn_topic_0237122614_b173941946151412"><a name="zh-cn_topic_0237122614_b173941946151412"></a><a name="zh-cn_topic_0237122614_b173941946151412"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122614_row139424691413"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122614_p13949467149"><a name="zh-cn_topic_0237122614_p13949467149"></a><a name="zh-cn_topic_0237122614_p13949467149"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="29.220000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122614_p14394114681416"><a name="zh-cn_topic_0237122614_p14394114681416"></a><a name="zh-cn_topic_0237122614_p14394114681416"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122614_p1539434651417"><a name="zh-cn_topic_0237122614_p1539434651417"></a><a name="zh-cn_topic_0237122614_p1539434651417"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122614_row4394446181414"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122614_p5394646171414"><a name="zh-cn_topic_0237122614_p5394646171414"></a><a name="zh-cn_topic_0237122614_p5394646171414"></a>databaseid</p>
</td>
<td class="cellrowborder" valign="top" width="29.220000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122614_p15394114612146"><a name="zh-cn_topic_0237122614_p15394114612146"></a><a name="zh-cn_topic_0237122614_p15394114612146"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122614_p03941546201417"><a name="zh-cn_topic_0237122614_p03941546201417"></a><a name="zh-cn_topic_0237122614_p03941546201417"></a>database的oid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122614_row163942468146"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122614_p143956468143"><a name="zh-cn_topic_0237122614_p143956468143"></a><a name="zh-cn_topic_0237122614_p143956468143"></a>tablespaceid</p>
</td>
<td class="cellrowborder" valign="top" width="29.220000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122614_p153951046131419"><a name="zh-cn_topic_0237122614_p153951046131419"></a><a name="zh-cn_topic_0237122614_p153951046131419"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122614_p20395446111415"><a name="zh-cn_topic_0237122614_p20395446111415"></a><a name="zh-cn_topic_0237122614_p20395446111415"></a>tablespace的oid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122614_row173959468144"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122614_p63959465146"><a name="zh-cn_topic_0237122614_p63959465146"></a><a name="zh-cn_topic_0237122614_p63959465146"></a>relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="29.220000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122614_p539524641412"><a name="zh-cn_topic_0237122614_p539524641412"></a><a name="zh-cn_topic_0237122614_p539524641412"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122614_p239534671415"><a name="zh-cn_topic_0237122614_p239534671415"></a><a name="zh-cn_topic_0237122614_p239534671415"></a>relation的file node。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122614_row103951846121417"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122614_p10395154617148"><a name="zh-cn_topic_0237122614_p10395154617148"></a><a name="zh-cn_topic_0237122614_p10395154617148"></a>forknum</p>
</td>
<td class="cellrowborder" valign="top" width="29.220000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122614_p1739524613149"><a name="zh-cn_topic_0237122614_p1739524613149"></a><a name="zh-cn_topic_0237122614_p1739524613149"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122614_p9396174615146"><a name="zh-cn_topic_0237122614_p9396174615146"></a><a name="zh-cn_topic_0237122614_p9396174615146"></a>fork编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122614_row8396124616142"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122614_p939654611415"><a name="zh-cn_topic_0237122614_p939654611415"></a><a name="zh-cn_topic_0237122614_p939654611415"></a>error_count</p>
</td>
<td class="cellrowborder" valign="top" width="29.220000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122614_p03961046151413"><a name="zh-cn_topic_0237122614_p03961046151413"></a><a name="zh-cn_topic_0237122614_p03961046151413"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122614_p10396646141411"><a name="zh-cn_topic_0237122614_p10396646141411"></a><a name="zh-cn_topic_0237122614_p10396646141411"></a>error的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122614_row139614611415"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122614_p11396164661415"><a name="zh-cn_topic_0237122614_p11396164661415"></a><a name="zh-cn_topic_0237122614_p11396164661415"></a>first_time</p>
</td>
<td class="cellrowborder" valign="top" width="29.220000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122614_p1396204619142"><a name="zh-cn_topic_0237122614_p1396204619142"></a><a name="zh-cn_topic_0237122614_p1396204619142"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122614_p13396164611140"><a name="zh-cn_topic_0237122614_p13396164611140"></a><a name="zh-cn_topic_0237122614_p13396164611140"></a>坏块第一次出现的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122614_row16396174691416"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122614_p133968462148"><a name="zh-cn_topic_0237122614_p133968462148"></a><a name="zh-cn_topic_0237122614_p133968462148"></a>last_time</p>
</td>
<td class="cellrowborder" valign="top" width="29.220000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122614_p03973466147"><a name="zh-cn_topic_0237122614_p03973466147"></a><a name="zh-cn_topic_0237122614_p03973466147"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122614_p13971846141417"><a name="zh-cn_topic_0237122614_p13971846141417"></a><a name="zh-cn_topic_0237122614_p13971846141417"></a>坏块最后出现的时间。</p>
</td>
</tr>
</tbody>
</table>
