# PG\_TS\_CONFIG

PG\_TS\_CONFIG系统表包含表示文本搜索配置的记录。一个配置指定一个特定的文本搜索解析器和一个为了每个解析器的输出类型使用的字典的列表。

解析器在PG\_TS\_CONFIG记录中显示，但是字典映射的标记是由[PG\_TS\_CONFIG\_MAP](PG_TS_CONFIG_MAP.md)里面的辅助记录定义的。

**表 1**  PG\_TS\_CONFIG字段

<a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_t7d4125c0d1694892922506cc2893f1c4"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_r9f1b81201b494d5da62b12f79da964e6"><th class="cellrowborder" valign="top" width="18.8%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a530082c6d8a34c1ca1f5589c9c6e1c8f"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a530082c6d8a34c1ca1f5589c9c6e1c8f"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a530082c6d8a34c1ca1f5589c9c6e1c8f"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="8.83%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a766ace0e23724de0a9d9a83ed7dcd583"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a766ace0e23724de0a9d9a83ed7dcd583"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a766ace0e23724de0a9d9a83ed7dcd583"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="28.57%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_aa4290714d72e4edd8c2878189ec3a1a3"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_aa4290714d72e4edd8c2878189ec3a1a3"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_aa4290714d72e4edd8c2878189ec3a1a3"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="43.8%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a0cee4a637c9747af93b3407e514bf9e9"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a0cee4a637c9747af93b3407e514bf9e9"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a0cee4a637c9747af93b3407e514bf9e9"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_r53fa00fbfb6846b2b6b1e99f8c41fe17"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8ea38475e5fa47bbbebf1a381d056311"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8ea38475e5fa47bbbebf1a381d056311"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8ea38475e5fa47bbbebf1a381d056311"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8a94ca43cd49468390cf9fb1e0479d97"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8a94ca43cd49468390cf9fb1e0479d97"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8a94ca43cd49468390cf9fb1e0479d97"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_ae1565a68bc7e4be192affba7454a995c"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_ae1565a68bc7e4be192affba7454a995c"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_ae1565a68bc7e4be192affba7454a995c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_abc0c112f586341b4b9c3b694538c1f1f"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_abc0c112f586341b4b9c3b694538c1f1f"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_abc0c112f586341b4b9c3b694538c1f1f"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_re8e6aa92472c4d659170ea334dc4a469"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a5d353778768d494682e120a6ac19f9b2"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a5d353778768d494682e120a6ac19f9b2"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a5d353778768d494682e120a6ac19f9b2"></a>cfgname</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8104f2f167ac4632b6e107452b04a591"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8104f2f167ac4632b6e107452b04a591"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8104f2f167ac4632b6e107452b04a591"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a67a29101233543db9cee25aeaba12086"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a67a29101233543db9cee25aeaba12086"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a67a29101233543db9cee25aeaba12086"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a7a1659a0b41442d3aa67ed669faeae0a"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a7a1659a0b41442d3aa67ed669faeae0a"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a7a1659a0b41442d3aa67ed669faeae0a"></a>文本搜索配置名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_rb468b157f57f4d02af431576dfacd638"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8f0722b5cdc9407497a872d4bc0742b7"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8f0722b5cdc9407497a872d4bc0742b7"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8f0722b5cdc9407497a872d4bc0742b7"></a>cfgnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a621974a019e04c9dbd716ed2d3bc4247"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a621974a019e04c9dbd716ed2d3bc4247"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a621974a019e04c9dbd716ed2d3bc4247"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a384d18f44b84433fb2d46eb5f17d22e0"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a384d18f44b84433fb2d46eb5f17d22e0"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a384d18f44b84433fb2d46eb5f17d22e0"></a><a href="PG_NAMESPACE.md">PG_NAMESPACE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a990265c7f60e4081bd1388f27481d66b"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a990265c7f60e4081bd1388f27481d66b"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a990265c7f60e4081bd1388f27481d66b"></a>包含这个配置的名称空间的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_r085c59884a9d43abbc0690eb49b1f246"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_ab9d43fc9e56a48fcba47f99bddca8276"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_ab9d43fc9e56a48fcba47f99bddca8276"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_ab9d43fc9e56a48fcba47f99bddca8276"></a>cfgowner</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a66bad1293c7348cca7cada4a432eec62"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a66bad1293c7348cca7cada4a432eec62"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a66bad1293c7348cca7cada4a432eec62"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8300b5c10663457ea2a0ef373131be33"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8300b5c10663457ea2a0ef373131be33"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a8300b5c10663457ea2a0ef373131be33"></a><a href="PG_AUTHID.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a175fdc8880134af692531a595d92b38e"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a175fdc8880134af692531a595d92b38e"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a175fdc8880134af692531a595d92b38e"></a>配置的所有者。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_r0e1c79b787f9473a8dab9a9e0dac2767"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a81ce00d6103b4d6eac4328a0a605d353"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a81ce00d6103b4d6eac4328a0a605d353"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a81ce00d6103b4d6eac4328a0a605d353"></a>cfgparser</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_aa081edb5582b4377a6e6253010eab639"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_aa081edb5582b4377a6e6253010eab639"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_aa081edb5582b4377a6e6253010eab639"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a9f3cd4b3cd8a409daff143acc6c88666"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a9f3cd4b3cd8a409daff143acc6c88666"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a9f3cd4b3cd8a409daff143acc6c88666"></a><a href="PG_TS_PARSER.md">PG_TS_PARSER</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a6c8eea38d2e3466baab8fd18aa79a3d3"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a6c8eea38d2e3466baab8fd18aa79a3d3"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a6c8eea38d2e3466baab8fd18aa79a3d3"></a>这个配置的文本搜索解析器的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_r80e63e253e4b4421bfe47698225ec683"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a89492450bf674d1aa204a3ebe577c061"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a89492450bf674d1aa204a3ebe577c061"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_a89492450bf674d1aa204a3ebe577c061"></a>cfoptions</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_acb98bec1c01f46dba424d6dad57a74fc"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_acb98bec1c01f46dba424d6dad57a74fc"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_acb98bec1c01f46dba424d6dad57a74fc"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_acc0b22cc5a094e60b81d50bde82659e3"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_acc0b22cc5a094e60b81d50bde82659e3"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_acc0b22cc5a094e60b81d50bde82659e3"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_af9b457a2879e4827b8385b862eda823d"><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_af9b457a2879e4827b8385b862eda823d"></a><a name="zh-cn_topic_0283137061_zh-cn_topic_0237122322_zh-cn_topic_0059777865_af9b457a2879e4827b8385b862eda823d"></a>分词相关配置选项。</p>
</td>
</tr>
</tbody>
</table>

