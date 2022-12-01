# PG\_REPLICATION\_SLOTS<a name="ZH-CN_TOPIC_0289900227"></a>

PG\_REPLICATION\_SLOTS视图查看复制节点的信息。

**表 1**  PG\_REPLICATION\_SLOTS字段

<a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_tea58e341a8144f609580dd8153a114fc"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_r2e428140e57e487c9bc1a031f47595e0"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ae11953540f9a4618a2afe41b4975f595"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ae11953540f9a4618a2afe41b4975f595"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ae11953540f9a4618a2afe41b4975f595"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a743bfcaf186946d1848ea6973df4d80d"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a743bfcaf186946d1848ea6973df4d80d"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a743bfcaf186946d1848ea6973df4d80d"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac639af594537423f87d3a070f6153653"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac639af594537423f87d3a070f6153653"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac639af594537423f87d3a070f6153653"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_r21ccd40e77d24980a953f303a044c83f"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a54f7d6ef3b4f4f05b042ff70d122b90c"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a54f7d6ef3b4f4f05b042ff70d122b90c"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a54f7d6ef3b4f4f05b042ff70d122b90c"></a>slot_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a989d619ad06e47eeb22f1f4d0755413f"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a989d619ad06e47eeb22f1f4d0755413f"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a989d619ad06e47eeb22f1f4d0755413f"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abc6449fb3afa4732965aef2c6ca21144"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abc6449fb3afa4732965aef2c6ca21144"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abc6449fb3afa4732965aef2c6ca21144"></a>复制节点的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_row439715123812"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p4397165116382"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p4397165116382"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p4397165116382"></a>plugin</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p103971151163812"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p103971151163812"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p103971151163812"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p10397185113384"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p10397185113384"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p10397185113384"></a>逻辑复制槽对应的输出插件名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_r268c52dc694249ff9a37ac21e0f3221b"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_adbc8a74dc0944eccb4f151cc41bf2041"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_adbc8a74dc0944eccb4f151cc41bf2041"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_adbc8a74dc0944eccb4f151cc41bf2041"></a>slot_type</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a26b605eb5d8544eab1ee3105f8e28cb8"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a26b605eb5d8544eab1ee3105f8e28cb8"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a26b605eb5d8544eab1ee3105f8e28cb8"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a43a50468cc1348088e9698540b49bc26"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a43a50468cc1348088e9698540b49bc26"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a43a50468cc1348088e9698540b49bc26"></a>复制节点的类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_rcd857e0d449c4f25b2702caea6963000"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a7d83989002264db699f1bfd06be9bbb7"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a7d83989002264db699f1bfd06be9bbb7"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a7d83989002264db699f1bfd06be9bbb7"></a>datoid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a88882e413fd64a0a972e6d7c8159f797"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a88882e413fd64a0a972e6d7c8159f797"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a88882e413fd64a0a972e6d7c8159f797"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_af5d8d8d5c1d64aa8b0145472071e9f2c"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_af5d8d8d5c1d64aa8b0145472071e9f2c"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_af5d8d8d5c1d64aa8b0145472071e9f2c"></a>复制节点的数据库OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_r0fc7f25c00b448fd85dc4631de1caea1"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa5ab07183a144b208b700d5d74054581"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa5ab07183a144b208b700d5d74054581"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa5ab07183a144b208b700d5d74054581"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a32eb71bf66174dc48006ce10f51028de"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a32eb71bf66174dc48006ce10f51028de"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a32eb71bf66174dc48006ce10f51028de"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a3d2987d968e04e3190023ebeaf1f4672"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a3d2987d968e04e3190023ebeaf1f4672"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a3d2987d968e04e3190023ebeaf1f4672"></a>复制节点的数据库名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_rc7e649d85e364981a649328bbf504190"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a7523c7c602a94c83850f501fbaf6e9f6"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a7523c7c602a94c83850f501fbaf6e9f6"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a7523c7c602a94c83850f501fbaf6e9f6"></a>active</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa4ee0b516c254e959817fb92f7f6d063"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa4ee0b516c254e959817fb92f7f6d063"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa4ee0b516c254e959817fb92f7f6d063"></a><span id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_text1146025210307"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_text1146025210307"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_text1146025210307"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a094663b90f08410088af03c09e9861af"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a094663b90f08410088af03c09e9861af"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a094663b90f08410088af03c09e9861af"></a>复制节点是否为激活状态。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_rb7e01ae4f8224fceb41acf7599bb2fdb"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac14f34edc74b448daee6328276594ca7"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac14f34edc74b448daee6328276594ca7"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac14f34edc74b448daee6328276594ca7"></a>xmin</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a603bdee93a484b609fa2512461750715"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a603bdee93a484b609fa2512461750715"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a603bdee93a484b609fa2512461750715"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ae83b877a818244ff9abb0f6fce5479b2"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ae83b877a818244ff9abb0f6fce5479b2"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ae83b877a818244ff9abb0f6fce5479b2"></a>复制节点事务标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_row1282185273916"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p782145223911"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p782145223911"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p782145223911"></a>catalog_xmin</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p138215528391"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p138215528391"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p138215528391"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p9821152133915"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p9821152133915"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p9821152133915"></a>逻辑复制槽对应的最早解码事务标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_r68fd277c1ac7445caf02d7444cdd2f91"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a6f1159cf4ad44210aa3c6eaa1134d959"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a6f1159cf4ad44210aa3c6eaa1134d959"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a6f1159cf4ad44210aa3c6eaa1134d959"></a>restart_lsn</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac120e970c88841778bbedb917cca5d4e"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac120e970c88841778bbedb917cca5d4e"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac120e970c88841778bbedb917cca5d4e"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a2f2006006d524efbb3196698d179402c"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a2f2006006d524efbb3196698d179402c"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a2f2006006d524efbb3196698d179402c"></a>复制节点的Xlog文件信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_r57599043221e48e182ad2759b2e3fde0"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa339392231db46f29ac345c6ee181618"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa339392231db46f29ac345c6ee181618"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa339392231db46f29ac345c6ee181618"></a>dummy_standby</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abfdd09996f444afa960371c29115276a"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abfdd09996f444afa960371c29115276a"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abfdd09996f444afa960371c29115276a"></a><span id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_text830016417309"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_text830016417309"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_text830016417309"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a609fb3d52ac648919835c6d3f67353f6"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a609fb3d52ac648919835c6d3f67353f6"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a609fb3d52ac648919835c6d3f67353f6"></a>复制节点是否为假备。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_r57599043221e48e182ad2759b2e3fde0"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa339392231db46f29ac345c6ee181618"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa339392231db46f29ac345c6ee181618"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_aa339392231db46f29ac345c6ee181618"></a>confirmed_flush</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abfdd09996f444afa960371c29115276a"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abfdd09996f444afa960371c29115276a"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abfdd09996f444afa960371c29115276a"></a><span id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_text830016417309"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_text830016417309"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_text830016417309"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a609fb3d52ac648919835c6d3f67353f6"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a609fb3d52ac648919835c6d3f67353f6"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a609fb3d52ac648919835c6d3f67353f6"></a>逻辑复制槽专用，客户端确认接收到的日志位置。</p>
</td>
</tr>
</tbody>
</table>
