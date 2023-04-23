# PG\_TS\_CONFIG<a name="EN-US_TOPIC_0289900274"></a>

**PG\_TS\_CONFIG**  contains entries representing text search configurations. A configuration specifies a particular text search parser and a list of dictionaries to use for each of the parser's output token types.

The parser is shown in the  **PG\_TS\_CONFIG**  entry, but the token-to-dictionary mapping is defined by subsidiary entries in  [PG\_TS\_CONFIG\_MAP](pg_ts_config_map.md).

**Table  1**  PG\_TS\_CONFIG columns

<a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_t7d4125c0d1694892922506cc2893f1c4"></a>
<table><thead align="left"><tr id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_r9f1b81201b494d5da62b12f79da964e6"><th class="cellrowborder" valign="top" width="18.8%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a530082c6d8a34c1ca1f5589c9c6e1c8f"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a530082c6d8a34c1ca1f5589c9c6e1c8f"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a530082c6d8a34c1ca1f5589c9c6e1c8f"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="8.83%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a766ace0e23724de0a9d9a83ed7dcd583"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a766ace0e23724de0a9d9a83ed7dcd583"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a766ace0e23724de0a9d9a83ed7dcd583"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="28.57%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_aa4290714d72e4edd8c2878189ec3a1a3"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_aa4290714d72e4edd8c2878189ec3a1a3"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_aa4290714d72e4edd8c2878189ec3a1a3"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="43.8%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a0cee4a637c9747af93b3407e514bf9e9"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a0cee4a637c9747af93b3407e514bf9e9"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a0cee4a637c9747af93b3407e514bf9e9"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_r53fa00fbfb6846b2b6b1e99f8c41fe17"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8ea38475e5fa47bbbebf1a381d056311"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8ea38475e5fa47bbbebf1a381d056311"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8ea38475e5fa47bbbebf1a381d056311"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8a94ca43cd49468390cf9fb1e0479d97"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8a94ca43cd49468390cf9fb1e0479d97"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8a94ca43cd49468390cf9fb1e0479d97"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_ae1565a68bc7e4be192affba7454a995c"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_ae1565a68bc7e4be192affba7454a995c"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_ae1565a68bc7e4be192affba7454a995c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_abc0c112f586341b4b9c3b694538c1f1f"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_abc0c112f586341b4b9c3b694538c1f1f"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_abc0c112f586341b4b9c3b694538c1f1f"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_re8e6aa92472c4d659170ea334dc4a469"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a5d353778768d494682e120a6ac19f9b2"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a5d353778768d494682e120a6ac19f9b2"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a5d353778768d494682e120a6ac19f9b2"></a>cfgname</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8104f2f167ac4632b6e107452b04a591"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8104f2f167ac4632b6e107452b04a591"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8104f2f167ac4632b6e107452b04a591"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a67a29101233543db9cee25aeaba12086"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a67a29101233543db9cee25aeaba12086"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a67a29101233543db9cee25aeaba12086"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a7a1659a0b41442d3aa67ed669faeae0a"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a7a1659a0b41442d3aa67ed669faeae0a"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a7a1659a0b41442d3aa67ed669faeae0a"></a>Text search configuration name</p>
</td>
</tr>
<tr id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_rb468b157f57f4d02af431576dfacd638"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8f0722b5cdc9407497a872d4bc0742b7"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8f0722b5cdc9407497a872d4bc0742b7"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8f0722b5cdc9407497a872d4bc0742b7"></a>cfgnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a621974a019e04c9dbd716ed2d3bc4247"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a621974a019e04c9dbd716ed2d3bc4247"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a621974a019e04c9dbd716ed2d3bc4247"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a384d18f44b84433fb2d46eb5f17d22e0"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a384d18f44b84433fb2d46eb5f17d22e0"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a384d18f44b84433fb2d46eb5f17d22e0"></a><a href="pg_namespace.md">PG_NAMESPACE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a990265c7f60e4081bd1388f27481d66b"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a990265c7f60e4081bd1388f27481d66b"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a990265c7f60e4081bd1388f27481d66b"></a>OID of the namespace that contains the configuration</p>
</td>
</tr>
<tr id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_r085c59884a9d43abbc0690eb49b1f246"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_ab9d43fc9e56a48fcba47f99bddca8276"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_ab9d43fc9e56a48fcba47f99bddca8276"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_ab9d43fc9e56a48fcba47f99bddca8276"></a>cfgowner</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a66bad1293c7348cca7cada4a432eec62"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a66bad1293c7348cca7cada4a432eec62"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a66bad1293c7348cca7cada4a432eec62"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8300b5c10663457ea2a0ef373131be33"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8300b5c10663457ea2a0ef373131be33"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a8300b5c10663457ea2a0ef373131be33"></a><a href="pg_authid.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a175fdc8880134af692531a595d92b38e"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a175fdc8880134af692531a595d92b38e"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a175fdc8880134af692531a595d92b38e"></a>Owner of the configuration</p>
</td>
</tr>
<tr id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_r0e1c79b787f9473a8dab9a9e0dac2767"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a81ce00d6103b4d6eac4328a0a605d353"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a81ce00d6103b4d6eac4328a0a605d353"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a81ce00d6103b4d6eac4328a0a605d353"></a>cfgparser</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_aa081edb5582b4377a6e6253010eab639"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_aa081edb5582b4377a6e6253010eab639"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_aa081edb5582b4377a6e6253010eab639"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a9f3cd4b3cd8a409daff143acc6c88666"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a9f3cd4b3cd8a409daff143acc6c88666"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a9f3cd4b3cd8a409daff143acc6c88666"></a><a href="pg_ts_parser.md">PG_TS_PARSER</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a6c8eea38d2e3466baab8fd18aa79a3d3"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a6c8eea38d2e3466baab8fd18aa79a3d3"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a6c8eea38d2e3466baab8fd18aa79a3d3"></a>OID of the text search parser for this configuration</p>
</td>
</tr>
<tr id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_r80e63e253e4b4421bfe47698225ec683"><td class="cellrowborder" valign="top" width="18.8%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a89492450bf674d1aa204a3ebe577c061"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a89492450bf674d1aa204a3ebe577c061"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_a89492450bf674d1aa204a3ebe577c061"></a>cfoptions</p>
</td>
<td class="cellrowborder" valign="top" width="8.83%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_acb98bec1c01f46dba424d6dad57a74fc"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_acb98bec1c01f46dba424d6dad57a74fc"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_acb98bec1c01f46dba424d6dad57a74fc"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_acc0b22cc5a094e60b81d50bde82659e3"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_acc0b22cc5a094e60b81d50bde82659e3"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_acc0b22cc5a094e60b81d50bde82659e3"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="43.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_af9b457a2879e4827b8385b862eda823d"><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_af9b457a2879e4827b8385b862eda823d"></a><a name="en-us_topic_0283137061_en-us_topic_0237122322_en-us_topic_0059777865_af9b457a2879e4827b8385b862eda823d"></a>Configuration options</p>
</td>
</tr>
</tbody>
</table>

