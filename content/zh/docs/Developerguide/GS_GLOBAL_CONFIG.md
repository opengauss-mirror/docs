# GS\_GLOBAL\_CONFIG<a name="ZH-CN_TOPIC_0000001111762848"></a>

GS\_GLOBAL\_CONFIG记录了数据库实例初始化时，用户指定的参数值。除此之外，还存放了用户设置的弱口令，支持数据库初始用户通过ALTER和DROP语法对系统表中的参数进行写入、修改和删除。

**表 1**  GS\_GLOBAL\_CONFIG字段

<a name="zh-cn_topic_0166116567_t749b1c370b1e4c81a41d5c7966458cb2"></a>
<table><thead align="left"><tr id="zh-cn_topic_0166116567_r3f04445cda964e2aa689b8050dc33b95"><th class="cellrowborder" valign="top" width="10.171017101710172%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0166116567_a9fa986027c4d4b52959cc20d3d659b64"><a name="zh-cn_topic_0166116567_a9fa986027c4d4b52959cc20d3d659b64"></a><a name="zh-cn_topic_0166116567_a9fa986027c4d4b52959cc20d3d659b64"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="9.26092609260926%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0166116567_a66e3551d1ca3439996075c0c819cf4d5"><a name="zh-cn_topic_0166116567_a66e3551d1ca3439996075c0c819cf4d5"></a><a name="zh-cn_topic_0166116567_a66e3551d1ca3439996075c0c819cf4d5"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="80.56805680568057%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0166116567_acb3888cb80e34b90838ca9997ad5ed3f"><a name="zh-cn_topic_0166116567_acb3888cb80e34b90838ca9997ad5ed3f"></a><a name="zh-cn_topic_0166116567_acb3888cb80e34b90838ca9997ad5ed3f"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0166116567_ra2e6f27710074b6898fcbe281ce85455"><td class="cellrowborder" valign="top" width="10.171017101710172%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0166116567_p1029934418416"><a name="zh-cn_topic_0166116567_p1029934418416"></a><a name="zh-cn_topic_0166116567_p1029934418416"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="9.26092609260926%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0166116567_p929616441417"><a name="zh-cn_topic_0166116567_p929616441417"></a><a name="zh-cn_topic_0166116567_p929616441417"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="80.56805680568057%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0166116567_p131161339171115"><a name="zh-cn_topic_0166116567_p131161339171115"></a><a name="zh-cn_topic_0166116567_p131161339171115"></a>数据库实例初始化时系统内置的指定参数名称。当前版本第一行默认为buckets_len，第二行起存放弱口令名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0166116567_rc36abac79c1b4efebbdf9c56c04326a9"><td class="cellrowborder" valign="top" width="10.171017101710172%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0166116567_p5287154419419"><a name="zh-cn_topic_0166116567_p5287154419419"></a><a name="zh-cn_topic_0166116567_p5287154419419"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="9.26092609260926%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0166116567_p192806441143"><a name="zh-cn_topic_0166116567_p192806441143"></a><a name="zh-cn_topic_0166116567_p192806441143"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="80.56805680568057%" headers="mcps1.2.4.1.3 "><p id="p1157111314127"><a name="p1157111314127"></a><a name="p1157111314127"></a>数据库实例初始化时系统内置的指定参数值。当前版本第一行默认为bucketmap长度；第二行起存放弱口令。</p>
</td>
</tr>
</tbody>
</table>
