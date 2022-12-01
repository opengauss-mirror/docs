# PLAN\_TABLE<a name="ZH-CN_TOPIC_0289900817"></a>

PLAN\_TABLE显示用户通过执行EXPLAIN PLAN收集到的计划信息。计划信息的生命周期是session级别，session退出后相应的数据将被清除。同时不同session和不同user间的数据是相互隔离的。

**表 1**  PLAN\_TABLE字段

<a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_t749b1c370b1e4c81a41d5c7966458cb2"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_r3f04445cda964e2aa689b8050dc33b95"><th class="cellrowborder" valign="top" width="27.82278227822782%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a9fa986027c4d4b52959cc20d3d659b64"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a9fa986027c4d4b52959cc20d3d659b64"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a9fa986027c4d4b52959cc20d3d659b64"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="26.432643264326426%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a66e3551d1ca3439996075c0c819cf4d5"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a66e3551d1ca3439996075c0c819cf4d5"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a66e3551d1ca3439996075c0c819cf4d5"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="45.744574457445744%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_acb3888cb80e34b90838ca9997ad5ed3f"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_acb3888cb80e34b90838ca9997ad5ed3f"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_acb3888cb80e34b90838ca9997ad5ed3f"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_ra2e6f27710074b6898fcbe281ce85455"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_afe83cc327ee0475fabec1673bda65595"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_afe83cc327ee0475fabec1673bda65595"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_afe83cc327ee0475fabec1673bda65595"></a>statement_id</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_ad3c3498d91c147cbae52e1f8c2e604bc"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_ad3c3498d91c147cbae52e1f8c2e604bc"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_ad3c3498d91c147cbae52e1f8c2e604bc"></a>varchar2(30)</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a32415b1f05f9415cafd5f32ef3e6d299"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a32415b1f05f9415cafd5f32ef3e6d299"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a32415b1f05f9415cafd5f32ef3e6d299"></a>用户输入的查询标签。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_rc36abac79c1b4efebbdf9c56c04326a9"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_ac6af0b524e5a4e058a27cc1a6a7abfec"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_ac6af0b524e5a4e058a27cc1a6a7abfec"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_ac6af0b524e5a4e058a27cc1a6a7abfec"></a>plan_id</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a478948b974a54260ac7f2e7929861b45"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a478948b974a54260ac7f2e7929861b45"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a478948b974a54260ac7f2e7929861b45"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a8386817f56444b72973a8b7412ec087e"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a8386817f56444b72973a8b7412ec087e"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a8386817f56444b72973a8b7412ec087e"></a>查询标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_rbd63bb1c1d7e472a9a21a92687340407"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a3b4ce9d7ce9a453ab7c7f7d066c98841"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a3b4ce9d7ce9a453ab7c7f7d066c98841"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a3b4ce9d7ce9a453ab7c7f7d066c98841"></a>id</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a8c297e6d26174c2dbf37213f151b0643"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a8c297e6d26174c2dbf37213f151b0643"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a8c297e6d26174c2dbf37213f151b0643"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a9b99cdd724714bb4840767ac6fcaa2e9"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a9b99cdd724714bb4840767ac6fcaa2e9"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a9b99cdd724714bb4840767ac6fcaa2e9"></a>查询生成的计划中的每一个执行算子的编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_r2d5cced298194ebba8ae1d4072fd42cb"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_aad0b17d6ed2a4d4f980593e1e1db1c1c"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_aad0b17d6ed2a4d4f980593e1e1db1c1c"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_aad0b17d6ed2a4d4f980593e1e1db1c1c"></a>operation</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a929c132f4f9e47bcb7517b0999960b68"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a929c132f4f9e47bcb7517b0999960b68"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_a929c132f4f9e47bcb7517b0999960b68"></a>varchar2(30)</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_ac59071a9a0114d1f927d80e98685d0b6"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_ac59071a9a0114d1f927d80e98685d0b6"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_ac59071a9a0114d1f927d80e98685d0b6"></a>计划中算子的操作描述。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_row623118217128"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p46189573117"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p46189573117"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p46189573117"></a>options</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p5618105771111"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p5618105771111"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p5618105771111"></a>varchar2(255)</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p176181357151118"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p176181357151118"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p176181357151118"></a>操作选项。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_row72293251210"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p561875761112"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p561875761112"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p561875761112"></a>object_name</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p12619185716117"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p12619185716117"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p12619185716117"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p361913573118"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p361913573118"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p361913573118"></a>操作对应的对象名，非查询中使用到的对象别名。来自于用户定义。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_row18228823125"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p16619135711113"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p16619135711113"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p16619135711113"></a>object_type</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p648441711132"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p648441711132"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p648441711132"></a>varchar2(30)</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p56197578112"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p56197578112"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p56197578112"></a>对象类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_row11226192131210"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p176191157171111"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p176191157171111"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p176191157171111"></a>object_owner</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p261955741117"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p261955741117"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p261955741117"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p76191957171113"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p76191957171113"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p76191957171113"></a>对象所属schema，来自于用户定义。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_row12827103193212"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p111633243217"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p111633243217"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p111633243217"></a>projection</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p163861239173218"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p163861239173218"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p163861239173218"></a>varchar2(4000)</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p121639223213"><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p121639223213"></a><a name="zh-cn_topic_0283136778_zh-cn_topic_0237122502_zh-cn_topic_0165900117_p121639223213"></a>操作输出的列信息。</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.png) **说明：**
>
>-   object\_type取值范围为[PG\_CLASS](PG_CLASS.md)中定义的relkind类型（TABLE普通表，INDEX索引，SEQUENCE序列，VIEW视图，COMPOSITE TYPE复合类型，TOASTVALUE TOAST表）和计划使用到的rtekind\(SUBQUERY,JOIN,FUNCTION,VALUES,CTE,REMOTE\_QUERY\)。
>-   object\_owner对于RTE来说是计划中使用的对象描述，非用户定义的类型不存在object\_owner。
>-   statement\_id、object\_name、object\_owner、projection字段内容遵循用户定义的大小写存储，其它字段内容采用大写存储。
>-   支持用户对PLAN\_TABLE进行SELECT和DELETE操作，不支持其它DML操作。
