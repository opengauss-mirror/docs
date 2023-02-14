# SUMMARY\_TRANSACTIONS\_PREPARED\_XACTS

显示openGauss中数据库主节点当前准备好进行两阶段提交的事务的信息。

**表 1**  SUMMARY\_TRANSACTIONS\_PREPARED\_XACTS字段

<a name="zh-cn_topic_0237122651_table197101527548"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122651_row97341220546"><th class="cellrowborder" valign="top" width="18.57814218578142%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122651_p1673432175419"><a name="zh-cn_topic_0237122651_p1673432175419"></a><a name="zh-cn_topic_0237122651_p1673432175419"></a><strong id="zh-cn_topic_0237122651_b1734202195410"><a name="zh-cn_topic_0237122651_b1734202195410"></a><a name="zh-cn_topic_0237122651_b1734202195410"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="27.777222277772225%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122651_p673419216541"><a name="zh-cn_topic_0237122651_p673419216541"></a><a name="zh-cn_topic_0237122651_p673419216541"></a><strong id="zh-cn_topic_0237122651_b473415265418"><a name="zh-cn_topic_0237122651_b473415265418"></a><a name="zh-cn_topic_0237122651_b473415265418"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="53.64463553644635%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122651_p13734162175415"><a name="zh-cn_topic_0237122651_p13734162175415"></a><a name="zh-cn_topic_0237122651_p13734162175415"></a><strong id="zh-cn_topic_0237122651_b1073418218549"><a name="zh-cn_topic_0237122651_b1073418218549"></a><a name="zh-cn_topic_0237122651_b1073418218549"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122651_row473422205412"><td class="cellrowborder" valign="top" width="18.57814218578142%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122651_p127341324542"><a name="zh-cn_topic_0237122651_p127341324542"></a><a name="zh-cn_topic_0237122651_p127341324542"></a>transaction</p>
</td>
<td class="cellrowborder" valign="top" width="27.777222277772225%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122651_p5734728543"><a name="zh-cn_topic_0237122651_p5734728543"></a><a name="zh-cn_topic_0237122651_p5734728543"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="53.64463553644635%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122651_p47346210543"><a name="zh-cn_topic_0237122651_p47346210543"></a><a name="zh-cn_topic_0237122651_p47346210543"></a>预备事务的数字事务标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122651_row773411212541"><td class="cellrowborder" valign="top" width="18.57814218578142%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122651_p673422105410"><a name="zh-cn_topic_0237122651_p673422105410"></a><a name="zh-cn_topic_0237122651_p673422105410"></a>gid</p>
</td>
<td class="cellrowborder" valign="top" width="27.777222277772225%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122651_p167341324544"><a name="zh-cn_topic_0237122651_p167341324544"></a><a name="zh-cn_topic_0237122651_p167341324544"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="53.64463553644635%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122651_p17352210544"><a name="zh-cn_topic_0237122651_p17352210544"></a><a name="zh-cn_topic_0237122651_p17352210544"></a>赋予该事务的全局事务标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122651_row14735829544"><td class="cellrowborder" valign="top" width="18.57814218578142%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122651_p177354210542"><a name="zh-cn_topic_0237122651_p177354210542"></a><a name="zh-cn_topic_0237122651_p177354210542"></a>prepared</p>
</td>
<td class="cellrowborder" valign="top" width="27.777222277772225%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122651_p3735172175412"><a name="zh-cn_topic_0237122651_p3735172175412"></a><a name="zh-cn_topic_0237122651_p3735172175412"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="53.64463553644635%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122651_p14735124542"><a name="zh-cn_topic_0237122651_p14735124542"></a><a name="zh-cn_topic_0237122651_p14735124542"></a>事务准备好提交的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122651_row37355255413"><td class="cellrowborder" valign="top" width="18.57814218578142%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122651_p47351628548"><a name="zh-cn_topic_0237122651_p47351628548"></a><a name="zh-cn_topic_0237122651_p47351628548"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="27.777222277772225%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122651_p1473518295416"><a name="zh-cn_topic_0237122651_p1473518295416"></a><a name="zh-cn_topic_0237122651_p1473518295416"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.64463553644635%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122651_p97351324546"><a name="zh-cn_topic_0237122651_p97351324546"></a><a name="zh-cn_topic_0237122651_p97351324546"></a>执行该事务的用户的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122651_row373517219544"><td class="cellrowborder" valign="top" width="18.57814218578142%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122651_p1273582145419"><a name="zh-cn_topic_0237122651_p1273582145419"></a><a name="zh-cn_topic_0237122651_p1273582145419"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="27.777222277772225%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122651_p573515215548"><a name="zh-cn_topic_0237122651_p573515215548"></a><a name="zh-cn_topic_0237122651_p573515215548"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.64463553644635%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122651_p27352235414"><a name="zh-cn_topic_0237122651_p27352235414"></a><a name="zh-cn_topic_0237122651_p27352235414"></a>执行该事务所在的数据库名。</p>
</td>
</tr>
</tbody>
</table>
