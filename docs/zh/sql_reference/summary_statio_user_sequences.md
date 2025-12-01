# SUMMARY\_STATIO\_USER\_SEQUENCES

SUMMARY\_STATIO\_USER\_SEQUENCES视图显示openGauss内汇聚的命名空间中所有用户关系表类型为序列的IO状态信息。

**表 1**  SUMMARY\_STATIO\_USER\_SEQUENCES字段

<a name="zh-cn_topic_0237122676_table1851733171218"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122676_row19114163312128"><th class="cellrowborder" valign="top" width="18.43184318431843%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122676_p17114183391220"><a name="zh-cn_topic_0237122676_p17114183391220"></a><a name="zh-cn_topic_0237122676_p17114183391220"></a><strong id="zh-cn_topic_0237122676_b71148337128"><a name="zh-cn_topic_0237122676_b71148337128"></a><a name="zh-cn_topic_0237122676_b71148337128"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.391739173917394%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122676_p1411413351218"><a name="zh-cn_topic_0237122676_p1411413351218"></a><a name="zh-cn_topic_0237122676_p1411413351218"></a><strong id="zh-cn_topic_0237122676_b10114193310121"><a name="zh-cn_topic_0237122676_b10114193310121"></a><a name="zh-cn_topic_0237122676_b10114193310121"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="64.17641764176419%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122676_p131151733111217"><a name="zh-cn_topic_0237122676_p131151733111217"></a><a name="zh-cn_topic_0237122676_p131151733111217"></a><strong id="zh-cn_topic_0237122676_b1511518334127"><a name="zh-cn_topic_0237122676_b1511518334127"></a><a name="zh-cn_topic_0237122676_b1511518334127"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122676_row5115183315123"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122676_p10115433191212"><a name="zh-cn_topic_0237122676_p10115433191212"></a><a name="zh-cn_topic_0237122676_p10115433191212"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122676_p15115733121212"><a name="zh-cn_topic_0237122676_p15115733121212"></a><a name="zh-cn_topic_0237122676_p15115733121212"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122676_p71152333121"><a name="zh-cn_topic_0237122676_p71152333121"></a><a name="zh-cn_topic_0237122676_p71152333121"></a>序列中模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122676_row81155331128"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122676_p21164333127"><a name="zh-cn_topic_0237122676_p21164333127"></a><a name="zh-cn_topic_0237122676_p21164333127"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122676_p13116143312125"><a name="zh-cn_topic_0237122676_p13116143312125"></a><a name="zh-cn_topic_0237122676_p13116143312125"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122676_p6116633121213"><a name="zh-cn_topic_0237122676_p6116633121213"></a><a name="zh-cn_topic_0237122676_p6116633121213"></a>序列名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122676_row511673371218"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122676_p51161633151215"><a name="zh-cn_topic_0237122676_p51161633151215"></a><a name="zh-cn_topic_0237122676_p51161633151215"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122676_p3116433131215"><a name="zh-cn_topic_0237122676_p3116433131215"></a><a name="zh-cn_topic_0237122676_p3116433131215"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122676_p611623341215"><a name="zh-cn_topic_0237122676_p611623341215"></a><a name="zh-cn_topic_0237122676_p611623341215"></a>从序列中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122676_row121161733171212"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122676_p1611623316121"><a name="zh-cn_topic_0237122676_p1611623316121"></a><a name="zh-cn_topic_0237122676_p1611623316121"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122676_p1411723351214"><a name="zh-cn_topic_0237122676_p1411723351214"></a><a name="zh-cn_topic_0237122676_p1411723351214"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122676_p1211711339129"><a name="zh-cn_topic_0237122676_p1211711339129"></a><a name="zh-cn_topic_0237122676_p1211711339129"></a>序列中缓存命中数。</p>
</td>
</tr>
</tbody>
</table>
