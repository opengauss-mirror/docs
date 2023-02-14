# WAIT\_EVENTS

WAIT\_EVENTS显示当前节点的event的等待相关的统计信息。具体事件信息见[等待状态列表](PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_t794f802302c24514a5db22d51eabacc4)、[轻量级锁等待事件列表](PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table38811324183420)、[IO等待事件列表](PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table124603113369)和[事务锁等待事件列表](PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table11826123533718)。关于每种事务锁对业务的影响程度，请参考[LOCK](LOCK-1.md)语法小节的详细描述。

**表 1**  WAIT\_EVENTS字段

<a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_table176431267125"></a>

<table><thead align="left"><tr id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_row677920671219"><th class="cellrowborder" valign="top" width="21.33213321332133%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p977936151220"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p977936151220"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p977936151220"></a><strong id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_b877916681218"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_b877916681218"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_b877916681218"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.761676167616763%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p577976191213"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p577976191213"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p577976191213"></a><strong id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_b3779186161212"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_b3779186161212"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_b3779186161212"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="61.90619061906191%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p0779469126"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p0779469126"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p0779469126"></a><strong id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_b13780564122"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_b13780564122"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_b13780564122"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_row57801366129"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p978019614124"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p978019614124"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p978019614124"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p137800610126"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p137800610126"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p137800610126"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p10780164120"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p10780164120"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p10780164120"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_row1178076191214"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1778086121217"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1778086121217"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1778086121217"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p87801065129"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p87801065129"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p87801065129"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1678119611212"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1678119611212"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1678119611212"></a>event类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_row97818619128"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p14781669126"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p14781669126"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p14781669126"></a>event</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p378136141217"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p378136141217"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p378136141217"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p17817619121"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p17817619121"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p17817619121"></a>event名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_row378116151216"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p167816613127"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p167816613127"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p167816613127"></a>wait</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p14781116111215"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p14781116111215"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p14781116111215"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p157812631217"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p157812631217"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p157812631217"></a>等待次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_row9782146121215"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p197823616129"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p197823616129"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p197823616129"></a>failed_wait</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p177823611126"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p177823611126"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p177823611126"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p127829612122"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p127829612122"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p127829612122"></a>失败的等待次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_row07828631216"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1278218620122"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1278218620122"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1278218620122"></a>total_wait_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p278210619121"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p278210619121"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p278210619121"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p178213631215"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p178213631215"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p178213631215"></a>总等待时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_row078246181218"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p20783869129"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p20783869129"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p20783869129"></a>avg_wait_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p77839620123"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p77839620123"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p77839620123"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p17783116191220"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p17783116191220"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p17783116191220"></a>平均等待时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_row678376181215"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p878376201217"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p878376201217"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p878376201217"></a>max_wait_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p47833651220"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p47833651220"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p47833651220"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p11784563129"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p11784563129"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p11784563129"></a>最大等待时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_row197845681219"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1784196161218"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1784196161218"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p1784196161218"></a>min_wait_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p18784067125"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p18784067125"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p18784067125"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p478418671215"><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p478418671215"></a><a name="zh-cn_topic_0283137083_zh-cn_topic_0237122729_p478418671215"></a>最小等待时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row1515654111218"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="p252505414573"><a name="p252505414573"></a><a name="p252505414573"></a>last_updated</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="p165252540572"><a name="p165252540572"></a><a name="p165252540572"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="p195259548572"><a name="p195259548572"></a><a name="p195259548572"></a>最后一次更新该事件的时间。</p>
</td>
</tr>
</tbody>
</table>
