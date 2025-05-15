# 概述<a name="ZH-CN_TOPIC_0000002259861282"></a>

在现网业务中需要对发生的故障原因进行快速定位定界，本功能可以通过收集数据库实例中各个组件（如CMS、DN）等的信息和即时状态（如网络连通性），来判断实例环境是否存在故障，以及故障根因。可用于实现实例级别的故障根因诊断。

DBMind对cmd-exporter进行加强，本版本支持DN、CMS、CMA、ffic、OM\_Monitor等日志采集，同时也支持基于节点间网络连通（如ping）状态采集。同时DBMind对现网故障场景进行了梳理，并对数据集进行枚举扩充，最终实现DN故障快速定位。

>![](public_sys-resources/icon-note.gif) **说明：** 
>由于该功能是根据日志来进行诊断的，所以诊断结果中的时间可能因为日志的延迟或者日志的延迟处理，导致诊断结果中的时间晚于故障发生的时间。

**表 1**  现支持诊断的DN故障根因列表

<a name="zh-cn_topic_0000001714829137_table1342813795619"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714829137_row045719711563"><th class="cellrowborder" valign="top" width="100%" id="mcps1.2.2.1.1"><p id="zh-cn_topic_0000001714829137_p17861151513"><a name="zh-cn_topic_0000001714829137_p17861151513"></a><a name="zh-cn_topic_0000001714829137_p17861151513"></a>DN故障根因</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714829137_row845747175610"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p58621565113"><a name="zh-cn_topic_0000001714829137_p58621565113"></a><a name="zh-cn_topic_0000001714829137_p58621565113"></a>未知原因/Unknown。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829137_row12457167155617"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p178625545119"><a name="zh-cn_topic_0000001714829137_p178625545119"></a><a name="zh-cn_topic_0000001714829137_p178625545119"></a>实例被停止/DN manual stop。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829137_row1145717795616"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p8862954519"><a name="zh-cn_topic_0000001714829137_p8862954519"></a><a name="zh-cn_topic_0000001714829137_p8862954519"></a>磁盘故障/DN disk damage。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829137_row6457127115618"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p7862115205118"><a name="zh-cn_topic_0000001714829137_p7862115205118"></a><a name="zh-cn_topic_0000001714829137_p7862115205118"></a>网卡故障/DN NIC down。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829137_row124571720564"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p19862151512"><a name="zh-cn_topic_0000001714829137_p19862151512"></a><a name="zh-cn_topic_0000001714829137_p19862151512"></a>端口冲突/DN port conflict。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829137_row1645819735616"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p158636519518"><a name="zh-cn_topic_0000001714829137_p158636519518"></a><a name="zh-cn_topic_0000001714829137_p158636519518"></a>CM Server仲裁重启DN/DN restarted by cms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829137_row19458157125616"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p986311595110"><a name="zh-cn_topic_0000001714829137_p986311595110"></a><a name="zh-cn_topic_0000001714829137_p986311595110"></a>进程僵死重启/DN phony dead。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829137_row14581773565"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p188631525110"><a name="zh-cn_topic_0000001714829137_p188631525110"></a><a name="zh-cn_topic_0000001714829137_p188631525110"></a>CORE/Core。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829137_row44179591061"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p3863145205116"><a name="zh-cn_topic_0000001714829137_p3863145205116"></a><a name="zh-cn_topic_0000001714829137_p3863145205116"></a>只读/DN read only。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829137_row15831114270"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p791432204218"><a name="zh-cn_topic_0000001714829137_p791432204218"></a><a name="zh-cn_topic_0000001714829137_p791432204218"></a>主机断网或宕机/DN down/disconnection。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829137_row38311543718"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p3863195145119"><a name="zh-cn_topic_0000001714829137_p3863195145119"></a><a name="zh-cn_topic_0000001714829137_p3863195145119"></a>主备DN间网络异常/DN Primary disconnected with Standby。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829137_row14831104276"><td class="cellrowborder" valign="top" width="100%" headers="mcps1.2.2.1.1 "><p id="zh-cn_topic_0000001714829137_p88631595119"><a name="zh-cn_topic_0000001714829137_p88631595119"></a><a name="zh-cn_topic_0000001714829137_p88631595119"></a>DN IP丢失/DN ip lost。</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **说明：** 
>当cm\_ctl query的集群状态输出结果异常时，一般是发生了调用栈输出，这种情况下难以获取集群状态，无法获取集群的诊断结果，相关状态标记为"abnormal\_output\_from\_cm\_ctl\_query"， 诊断结果为Unknown。
>当DN节点处于Offline状态时，不对其进行数据库实例故障诊断，返回状态为Normal，状态码-1。

