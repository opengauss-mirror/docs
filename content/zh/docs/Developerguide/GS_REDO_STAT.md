# GS\_REDO\_STAT<a name="ZH-CN_TOPIC_0289900539"></a>

GS\_REDO\_STAT视图用于统计回话线程日志回放情况。

**表 1**  GS\_REDO\_STAT字段

<a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_t158230a5dce84a91b86fec943d86f7d7"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_rcd255fe28d394893a792db095d7fb7dc"><th class="cellrowborder" valign="top" width="22.43%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_a94ffcb457d144baf862f3145347b0e0c"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_a94ffcb457d144baf862f3145347b0e0c"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_a94ffcb457d144baf862f3145347b0e0c"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_a6481a4c93cf3439ea89d2f8f7c529559"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_a6481a4c93cf3439ea89d2f8f7c529559"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_a6481a4c93cf3439ea89d2f8f7c529559"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="59.84%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_a562f49b0d085438bb2302a4eafbc2d6d"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_a562f49b0d085438bb2302a4eafbc2d6d"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_a562f49b0d085438bb2302a4eafbc2d6d"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_r8aaaba61e1af4b10bc4a1306c7608206"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1436441093219"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1436441093219"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1436441093219"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p15364151013213"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p15364151013213"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p15364151013213"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p113642010193218"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p113642010193218"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p113642010193218"></a>日志回放过程中写数据的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_rcfafcf2a9bc94267b17c42e0514d83cf"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p18364310173218"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p18364310173218"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p18364310173218"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p123641106323"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p123641106323"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p123641106323"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p836461023210"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p836461023210"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p836461023210"></a>日志回放过程中写数据的块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_rd80f7ac2da36478ea2622cb317cd71c2"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1436421015322"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1436421015322"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1436421015322"></a>writetim</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p036421053210"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p036421053210"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p036421053210"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p73641810103219"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p73641810103219"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p73641810103219"></a>日志回放过程中写数据所耗的总时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_r825f5d50053e4e0692a7981b8eabb3f9"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1365101010324"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1365101010324"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1365101010324"></a>avgiotim</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p3365121017326"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p3365121017326"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p3365121017326"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p19365171016321"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p19365171016321"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p19365171016321"></a>日志回放过程中写一次数据的平均消耗时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_zh-cn_topic_0059778713_r2528f8b76e204b46b2c96586a5140f50"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p3365141053216"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p3365141053216"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p3365141053216"></a>lstiotim</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1365201016325"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1365201016325"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1365201016325"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1936520105325"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1936520105325"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1936520105325"></a>日志回放过程中最后一次写数据消耗的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_row1251184317325"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p951174312329"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p951174312329"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p951174312329"></a>miniotim</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p195118431323"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p195118431323"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p195118431323"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p65144383213"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p65144383213"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p65144383213"></a>日志回放过程中单次写数据消耗的最短时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_row10165148143212"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1016619485328"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1016619485328"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p1016619485328"></a>maxiowtm</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p151661148113214"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p151661148113214"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p151661148113214"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p11661748163216"><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p11661748163216"></a><a name="zh-cn_topic_0283137099_zh-cn_topic_0237122505_p11661748163216"></a>日志回放过程中单次写数据消耗的最长时间。</p>
</td>
</tr>
</tbody>
</table>

