# PG\_HASHBUCKET

PG\_HASHBUCKET系统表存储hash bucket信息。

**表 1**  PG\_HASHBUCKET字段

<a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_t553335b97ca24b16be6f2a8fad19d59a"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r77b1feeaf06f47c39276851270d7af5d"><th class="cellrowborder" valign="top" width="16.64%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a52f340d7cc2141db93937ece7a2eb472"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a52f340d7cc2141db93937ece7a2eb472"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a52f340d7cc2141db93937ece7a2eb472"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.04%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ab9c8ba4e413e451c80f893467f0a3e4a"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ab9c8ba4e413e451c80f893467f0a3e4a"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ab9c8ba4e413e451c80f893467f0a3e4a"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="66.32000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a120f6b19c1784330a7ccd62dcc61e4a5"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a120f6b19c1784330a7ccd62dcc61e4a5"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a120f6b19c1784330a7ccd62dcc61e4a5"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_rda19630333f04264a89ae62d66ca4941"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5383bc791c4a4fbc88c372df64f2e0bc"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5383bc791c4a4fbc88c372df64f2e0bc"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5383bc791c4a4fbc88c372df64f2e0bc"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ae85c6d394a324e95ad384d13b6258e28"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ae85c6d394a324e95ad384d13b6258e28"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ae85c6d394a324e95ad384d13b6258e28"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_abdd4dc14fdfb4464849e008632648e3a"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_abdd4dc14fdfb4464849e008632648e3a"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_abdd4dc14fdfb4464849e008632648e3a"></a>行标识符（隐含字段，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r76daafb9724149938d1681b7ad19a4ef"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="p191591415"><a name="p191591415"></a><a name="p191591415"></a>bucketid</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8d7bf386b14f464c9b7a9f6735ba5003"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8d7bf386b14f464c9b7a9f6735ba5003"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8d7bf386b14f464c9b7a9f6735ba5003"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="p16936349212"><a name="p16936349212"></a><a name="p16936349212"></a>对bucketvector计算的hash值，通过hash值可以加速对bucketvector的查找。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r2dfe0cbf429a4350a2fe62e9bab624a4"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="p48185910115"><a name="p48185910115"></a><a name="p48185910115"></a>bucketcnt</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1f04d6c82aa64d05b44d205b6c14b959"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1f04d6c82aa64d05b44d205b6c14b959"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1f04d6c82aa64d05b44d205b6c14b959"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="p1793513491113"><a name="p1793513491113"></a><a name="p1793513491113"></a>包含分片的个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r34e3244c232740d09d19a1de04094568"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="p158155913112"><a name="p158155913112"></a><a name="p158155913112"></a>bucketmapsize</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6821b1e839444d568f721ba2d8f8458e"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6821b1e839444d568f721ba2d8f8458e"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6821b1e839444d568f721ba2d8f8458e"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="p49359491715"><a name="p49359491715"></a><a name="p49359491715"></a>所有DN上包含的分片总数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r409491d9b4c9440986aa3f5cc95777ea"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="p2715914114"><a name="p2715914114"></a><a name="p2715914114"></a>bucketref</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a9983fb6a42324fb1a342702813c73974"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a9983fb6a42324fb1a342702813c73974"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a9983fb6a42324fb1a342702813c73974"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="p99338491713"><a name="p99338491713"></a><a name="p99338491713"></a>预留字段，默认值为1。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r27223efa87c247cab272f0e9afeb9e1b"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="p19876581613"><a name="p19876581613"></a><a name="p19876581613"></a>bucketvector</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a3daad8e698f14ed8ac5579864a14a390"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a3daad8e698f14ed8ac5579864a14a390"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a3daad8e698f14ed8ac5579864a14a390"></a>oidvector_extend</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="p79311493116"><a name="p79311493116"></a><a name="p79311493116"></a>记录此行bucket信息包含的所有bucket的id，在此列上建立唯一索引，具有相同bucketid信息的表共享同一行pg_hashbucket数据。</p>
</td>
</tr>
</tbody>
</table>

