# SUMMARY\_STATIO\_ALL\_SEQUENCES

SUMMARY\_STATIO\_ALL\_SEQUENCES视图包含openGauss内汇聚的数据库中每个序列的每一行,显示特定序列关于I/O的统计。

**表 1**  SUMMARY\_STATIO\_ALL\_SEQUENCES字段

<a name="zh-cn_topic_0237122694_table1059312012714"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122694_row1643192032713"><th class="cellrowborder" valign="top" width="18.43184318431843%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122694_p2644162016278"><a name="zh-cn_topic_0237122694_p2644162016278"></a><a name="zh-cn_topic_0237122694_p2644162016278"></a><strong id="zh-cn_topic_0237122694_b186449209278"><a name="zh-cn_topic_0237122694_b186449209278"></a><a name="zh-cn_topic_0237122694_b186449209278"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.391739173917394%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122694_p964413203278"><a name="zh-cn_topic_0237122694_p964413203278"></a><a name="zh-cn_topic_0237122694_p964413203278"></a><strong id="zh-cn_topic_0237122694_b156449200278"><a name="zh-cn_topic_0237122694_b156449200278"></a><a name="zh-cn_topic_0237122694_b156449200278"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="64.17641764176419%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122694_p26446204272"><a name="zh-cn_topic_0237122694_p26446204272"></a><a name="zh-cn_topic_0237122694_p26446204272"></a><strong id="zh-cn_topic_0237122694_b2644122016276"><a name="zh-cn_topic_0237122694_b2644122016276"></a><a name="zh-cn_topic_0237122694_b2644122016276"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122694_row10644192012715"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122694_p14644182082713"><a name="zh-cn_topic_0237122694_p14644182082713"></a><a name="zh-cn_topic_0237122694_p14644182082713"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122694_p1664422032715"><a name="zh-cn_topic_0237122694_p1664422032715"></a><a name="zh-cn_topic_0237122694_p1664422032715"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122694_p1864462092717"><a name="zh-cn_topic_0237122694_p1864462092717"></a><a name="zh-cn_topic_0237122694_p1864462092717"></a>序列中模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122694_row0645192002715"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122694_p15645112092719"><a name="zh-cn_topic_0237122694_p15645112092719"></a><a name="zh-cn_topic_0237122694_p15645112092719"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122694_p3645192010273"><a name="zh-cn_topic_0237122694_p3645192010273"></a><a name="zh-cn_topic_0237122694_p3645192010273"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122694_p1064542010271"><a name="zh-cn_topic_0237122694_p1064542010271"></a><a name="zh-cn_topic_0237122694_p1064542010271"></a>序列名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122694_row1264552020272"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122694_p5645162014272"><a name="zh-cn_topic_0237122694_p5645162014272"></a><a name="zh-cn_topic_0237122694_p5645162014272"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122694_p6645152011276"><a name="zh-cn_topic_0237122694_p6645152011276"></a><a name="zh-cn_topic_0237122694_p6645152011276"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122694_p13645820202719"><a name="zh-cn_topic_0237122694_p13645820202719"></a><a name="zh-cn_topic_0237122694_p13645820202719"></a>从序列中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122694_row11645182020278"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122694_p14645720202714"><a name="zh-cn_topic_0237122694_p14645720202714"></a><a name="zh-cn_topic_0237122694_p14645720202714"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122694_p364542014276"><a name="zh-cn_topic_0237122694_p364542014276"></a><a name="zh-cn_topic_0237122694_p364542014276"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122694_p764692010277"><a name="zh-cn_topic_0237122694_p764692010277"></a><a name="zh-cn_topic_0237122694_p764692010277"></a>序列中缓存命中数。</p>
</td>
</tr>
</tbody>
</table>

