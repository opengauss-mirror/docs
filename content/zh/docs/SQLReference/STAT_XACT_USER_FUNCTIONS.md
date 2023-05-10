# STAT\_XACT\_USER\_FUNCTIONS

视图包含当前节点本事务内函数执行的统计信息。

**表 1**  STAT\_XACT\_USER\_FUNCTIONS字段

<a name="zh-cn_topic_0237122609_table10110112517620"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122609_row141921125161"><th class="cellrowborder" valign="top" width="17.299999999999997%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122609_p111921325869"><a name="zh-cn_topic_0237122609_p111921325869"></a><a name="zh-cn_topic_0237122609_p111921325869"></a><strong id="zh-cn_topic_0237122609_b151921625062"><a name="zh-cn_topic_0237122609_b151921625062"></a><a name="zh-cn_topic_0237122609_b151921625062"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="24.21%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122609_p5192182513618"><a name="zh-cn_topic_0237122609_p5192182513618"></a><a name="zh-cn_topic_0237122609_p5192182513618"></a><strong id="zh-cn_topic_0237122609_b17192202518618"><a name="zh-cn_topic_0237122609_b17192202518618"></a><a name="zh-cn_topic_0237122609_b17192202518618"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="58.489999999999995%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122609_p719219258613"><a name="zh-cn_topic_0237122609_p719219258613"></a><a name="zh-cn_topic_0237122609_p719219258613"></a><strong id="zh-cn_topic_0237122609_b1119215251063"><a name="zh-cn_topic_0237122609_b1119215251063"></a><a name="zh-cn_topic_0237122609_b1119215251063"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122609_row171921325662"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122609_p91931725262"><a name="zh-cn_topic_0237122609_p91931725262"></a><a name="zh-cn_topic_0237122609_p91931725262"></a>funcid</p>
</td>
<td class="cellrowborder" valign="top" width="24.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122609_p21932025162"><a name="zh-cn_topic_0237122609_p21932025162"></a><a name="zh-cn_topic_0237122609_p21932025162"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.489999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122609_p719312256613"><a name="zh-cn_topic_0237122609_p719312256613"></a><a name="zh-cn_topic_0237122609_p719312256613"></a>函数标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122609_row1019372513619"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122609_p111933258614"><a name="zh-cn_topic_0237122609_p111933258614"></a><a name="zh-cn_topic_0237122609_p111933258614"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="24.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122609_p71939251566"><a name="zh-cn_topic_0237122609_p71939251566"></a><a name="zh-cn_topic_0237122609_p71939251566"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.489999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122609_p81947251167"><a name="zh-cn_topic_0237122609_p81947251167"></a><a name="zh-cn_topic_0237122609_p81947251167"></a>模式的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122609_row619519251962"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122609_p1619517257613"><a name="zh-cn_topic_0237122609_p1619517257613"></a><a name="zh-cn_topic_0237122609_p1619517257613"></a>funcname</p>
</td>
<td class="cellrowborder" valign="top" width="24.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122609_p14195425360"><a name="zh-cn_topic_0237122609_p14195425360"></a><a name="zh-cn_topic_0237122609_p14195425360"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.489999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122609_p1319510251361"><a name="zh-cn_topic_0237122609_p1319510251361"></a><a name="zh-cn_topic_0237122609_p1319510251361"></a>函数名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122609_row101951251768"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122609_p91961125667"><a name="zh-cn_topic_0237122609_p91961125667"></a><a name="zh-cn_topic_0237122609_p91961125667"></a>calls</p>
</td>
<td class="cellrowborder" valign="top" width="24.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122609_p1019602518614"><a name="zh-cn_topic_0237122609_p1019602518614"></a><a name="zh-cn_topic_0237122609_p1019602518614"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.489999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122609_p71969251665"><a name="zh-cn_topic_0237122609_p71969251665"></a><a name="zh-cn_topic_0237122609_p71969251665"></a>函数被调用的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122609_row519632516614"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122609_p7196725864"><a name="zh-cn_topic_0237122609_p7196725864"></a><a name="zh-cn_topic_0237122609_p7196725864"></a>total_time</p>
</td>
<td class="cellrowborder" valign="top" width="24.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122609_p12196142518617"><a name="zh-cn_topic_0237122609_p12196142518617"></a><a name="zh-cn_topic_0237122609_p12196142518617"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="58.489999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122609_p019612251365"><a name="zh-cn_topic_0237122609_p019612251365"></a><a name="zh-cn_topic_0237122609_p019612251365"></a>函数的总执行时长。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122609_row121977251561"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122609_p41974256618"><a name="zh-cn_topic_0237122609_p41974256618"></a><a name="zh-cn_topic_0237122609_p41974256618"></a>self_time</p>
</td>
<td class="cellrowborder" valign="top" width="24.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122609_p619717251967"><a name="zh-cn_topic_0237122609_p619717251967"></a><a name="zh-cn_topic_0237122609_p619717251967"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="58.489999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122609_p619772512611"><a name="zh-cn_topic_0237122609_p619772512611"></a><a name="zh-cn_topic_0237122609_p619772512611"></a>当前线程调用函数的总的时长。</p>
</td>
</tr>
</tbody>
</table>

