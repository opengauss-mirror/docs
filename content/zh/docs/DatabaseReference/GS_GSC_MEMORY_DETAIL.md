# GS\_GSC\_MEMORY\_DETAIL<a name="ZH-CN_TOPIC_0000001197659934"></a>

GS\_GSC\_MEMORY\_DETAIL视图描述当前节点当前进程的全局SysCache的内存占用情况，仅在开启GSC的模式下有数据。需要注意的是，这个查询由于是以数据库内存上下文分隔的，因此会缺少一部分内存的统计，缺失的内存统计对应的内存上下文名称为GlobalSysDBCache。

**表 1**  GS\_GSC\_MEMORY\_DETAIL字段

<a name="table56251922205811"></a>
<table><thead align="left"><tr id="row10625222135815"><th class="cellrowborder" valign="top" width="18.391839183918393%" id="mcps1.2.4.1.1"><p id="p176251922175820"><a name="p176251922175820"></a><a name="p176251922175820"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="18.51185118511851%" id="mcps1.2.4.1.2"><p id="p1862562265817"><a name="p1862562265817"></a><a name="p1862562265817"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="63.0963096309631%" id="mcps1.2.4.1.3"><p id="p14625122165810"><a name="p14625122165810"></a><a name="p14625122165810"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row262502265816"><td class="cellrowborder" valign="top" width="18.391839183918393%" headers="mcps1.2.4.1.1 "><p id="p0759113412373"><a name="p0759113412373"></a><a name="p0759113412373"></a>db_id</p>
</td>
<td class="cellrowborder" valign="top" width="18.51185118511851%" headers="mcps1.2.4.1.2 "><p id="p128241153218"><a name="p128241153218"></a><a name="p128241153218"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.0963096309631%" headers="mcps1.2.4.1.3 "><p id="p1695713812327"><a name="p1695713812327"></a><a name="p1695713812327"></a>数据库id。</p>
</td>
</tr>
<tr id="row2625102216588"><td class="cellrowborder" valign="top" width="18.391839183918393%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777851_a9b61d90a41c54a2e8aa2be698246feb0"><a name="zh-cn_topic_0059777851_a9b61d90a41c54a2e8aa2be698246feb0"></a><a name="zh-cn_topic_0059777851_a9b61d90a41c54a2e8aa2be698246feb0"></a>totalsize</p>
</td>
<td class="cellrowborder" valign="top" width="18.51185118511851%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777851_a4f15af5a0e0745288a9158a051e834df"><a name="zh-cn_topic_0059777851_a4f15af5a0e0745288a9158a051e834df"></a><a name="zh-cn_topic_0059777851_a4f15af5a0e0745288a9158a051e834df"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.0963096309631%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777851_ab3317dfdd1e54970ae58dd5389144049"><a name="zh-cn_topic_0059777851_ab3317dfdd1e54970ae58dd5389144049"></a><a name="zh-cn_topic_0059777851_ab3317dfdd1e54970ae58dd5389144049"></a>共享内存总大小，单位Byte。</p>
</td>
</tr>
<tr id="row962682235810"><td class="cellrowborder" valign="top" width="18.391839183918393%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777851_a9a5cc38332734faa86e255917b1cb538"><a name="zh-cn_topic_0059777851_a9a5cc38332734faa86e255917b1cb538"></a><a name="zh-cn_topic_0059777851_a9a5cc38332734faa86e255917b1cb538"></a>freesize</p>
</td>
<td class="cellrowborder" valign="top" width="18.51185118511851%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777851_aa0b788365d804e289deee46fc1e9bcda"><a name="zh-cn_topic_0059777851_aa0b788365d804e289deee46fc1e9bcda"></a><a name="zh-cn_topic_0059777851_aa0b788365d804e289deee46fc1e9bcda"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.0963096309631%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777851_ade6f46dd31774b4ea69e20c3b8807418"><a name="zh-cn_topic_0059777851_ade6f46dd31774b4ea69e20c3b8807418"></a><a name="zh-cn_topic_0059777851_ade6f46dd31774b4ea69e20c3b8807418"></a>共享内存剩余大小，单位Byte。</p>
</td>
</tr>
<tr id="row26262225581"><td class="cellrowborder" valign="top" width="18.391839183918393%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777851_a54f1eeafa99248fa9e0c5ac51563feb5"><a name="zh-cn_topic_0059777851_a54f1eeafa99248fa9e0c5ac51563feb5"></a><a name="zh-cn_topic_0059777851_a54f1eeafa99248fa9e0c5ac51563feb5"></a>usedsize</p>
</td>
<td class="cellrowborder" valign="top" width="18.51185118511851%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777851_a76b7a6f459bc4721808feaa4a74449eb"><a name="zh-cn_topic_0059777851_a76b7a6f459bc4721808feaa4a74449eb"></a><a name="zh-cn_topic_0059777851_a76b7a6f459bc4721808feaa4a74449eb"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.0963096309631%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777851_zh-cn_topic_0058966268_p737814091532"><a name="zh-cn_topic_0059777851_zh-cn_topic_0058966268_p737814091532"></a><a name="zh-cn_topic_0059777851_zh-cn_topic_0058966268_p737814091532"></a>共享内存使用大小，单位Byte。</p>
</td>
</tr>
</tbody>
</table>

