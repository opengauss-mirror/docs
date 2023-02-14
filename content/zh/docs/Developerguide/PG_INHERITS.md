# PG\_INHERITS

PG\_INHERITS系统表记录关于表继承层次的信息。数据库里每个直接的子系表都有一条记录。间接的继承可以通过追溯记录链来判断。

**表 1**  PG\_INHERITS字段

<a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_tad3c648e8ce54f3ab1aeb9224ba8433d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_r3365ae23fbd44c1abfc625dc5737cdc9"><th class="cellrowborder" valign="top" width="12.120000000000001%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_ad2ed129a8fa3475c9c365ac43c12417a"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_ad2ed129a8fa3475c9c365ac43c12417a"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_ad2ed129a8fa3475c9c365ac43c12417a"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="11.55%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_ab7e0a656bc3849f291d3571301fc17de"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_ab7e0a656bc3849f291d3571301fc17de"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_ab7e0a656bc3849f291d3571301fc17de"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="20.599999999999998%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a35ad3df7a3f04c25b18a46b4dc267614"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a35ad3df7a3f04c25b18a46b4dc267614"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a35ad3df7a3f04c25b18a46b4dc267614"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="55.730000000000004%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_abffbb5ca54e44f5fbfb595fbdfece3fd"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_abffbb5ca54e44f5fbfb595fbdfece3fd"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_abffbb5ca54e44f5fbfb595fbdfece3fd"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_rd7ab96d4c29446ce9a45f1396a681332"><td class="cellrowborder" valign="top" width="12.120000000000001%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a63c2c56218ef4b0892c5b9839a1cf958"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a63c2c56218ef4b0892c5b9839a1cf958"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a63c2c56218ef4b0892c5b9839a1cf958"></a>inhrelid</p>
</td>
<td class="cellrowborder" valign="top" width="11.55%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_ab64ca897146d489d8b13f59c1f57d71a"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_ab64ca897146d489d8b13f59c1f57d71a"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_ab64ca897146d489d8b13f59c1f57d71a"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a51ea9bd754b84428989f28dcc8412a38"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a51ea9bd754b84428989f28dcc8412a38"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a51ea9bd754b84428989f28dcc8412a38"></a><a href="PG_CLASS.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.730000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a902240c90ce54ea6a6118e5fe3f78c0b"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a902240c90ce54ea6a6118e5fe3f78c0b"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a902240c90ce54ea6a6118e5fe3f78c0b"></a>子表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_r4bc94ec9d9cd45e986eb822a237a8f03"><td class="cellrowborder" valign="top" width="12.120000000000001%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a8acd6fb22993425cbcc5abb50953c6bd"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a8acd6fb22993425cbcc5abb50953c6bd"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a8acd6fb22993425cbcc5abb50953c6bd"></a>inhparent</p>
</td>
<td class="cellrowborder" valign="top" width="11.55%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a41ace227029042a5887cef187fc14f48"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a41ace227029042a5887cef187fc14f48"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a41ace227029042a5887cef187fc14f48"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_af848a0cf88ce40139667ebb317864a26"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_af848a0cf88ce40139667ebb317864a26"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_af848a0cf88ce40139667ebb317864a26"></a><a href="PG_CLASS.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.730000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a5cfc212e4e2f47c8838004694cc7021a"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a5cfc212e4e2f47c8838004694cc7021a"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a5cfc212e4e2f47c8838004694cc7021a"></a>父表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_ra387bf30ac80463fb60251a5ed8fd1eb"><td class="cellrowborder" valign="top" width="12.120000000000001%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a89dc45676f17408ebc6aaa24c615db1b"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a89dc45676f17408ebc6aaa24c615db1b"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a89dc45676f17408ebc6aaa24c615db1b"></a>inhseqno</p>
</td>
<td class="cellrowborder" valign="top" width="11.55%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a03e3cfef372f4b0cb7775e0a1f1de44d"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a03e3cfef372f4b0cb7775e0a1f1de44d"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a03e3cfef372f4b0cb7775e0a1f1de44d"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a2a991d65e6f34985a4aa27e7c7c3a9a3"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a2a991d65e6f34985a4aa27e7c7c3a9a3"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_a2a991d65e6f34985a4aa27e7c7c3a9a3"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="55.730000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_abd351fc6a07a47b988ca965eb96ada6b"><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_abd351fc6a07a47b988ca965eb96ada6b"></a><a name="zh-cn_topic_0283137615_zh-cn_topic_0237122294_zh-cn_topic_0059777685_abd351fc6a07a47b988ca965eb96ada6b"></a>如果一个子表存在多个直系父表（多重继承），这个数字表明此继承字段的排列顺序。计数从1开始。</p>
</td>
</tr>
</tbody>
</table>
