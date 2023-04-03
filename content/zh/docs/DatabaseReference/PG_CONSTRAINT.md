# PG\_CONSTRAINT<a name="ZH-CN_TOPIC_0289899922"></a>

PG\_CONSTRAINT系统表存储表上的检查约束、主键和唯一约束。

**表 1**  PG\_CONSTRAINT字段

<a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_t4dea57210ce04d96822f7d04e59e2ecd"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r73b84a43e4b34294b177b0af39b91ce3"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a9155d6978a71496faec44b4f435477f4"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a9155d6978a71496faec44b4f435477f4"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a9155d6978a71496faec44b4f435477f4"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab13091cbe8fa4b3d82e8a726788f661b"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab13091cbe8fa4b3d82e8a726788f661b"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab13091cbe8fa4b3d82e8a726788f661b"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3100d2b432594eef83c30ee34e1a479b"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3100d2b432594eef83c30ee34e1a479b"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3100d2b432594eef83c30ee34e1a479b"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_row18917175941517"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_p129175597157"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_p129175597157"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_p129175597157"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_p1917759111515"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_p1917759111515"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_p1917759111515"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_p8917155915155"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_p8917155915155"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_p8917155915155"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r3b9bbceb3ae948df9a08d4a9140010df"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3ff0557a42394644abeb3876be1c3014"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3ff0557a42394644abeb3876be1c3014"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3ff0557a42394644abeb3876be1c3014"></a>conname</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a73cf5b36d16c4b9b9c2a954dbfb97a3f"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a73cf5b36d16c4b9b9c2a954dbfb97a3f"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a73cf5b36d16c4b9b9c2a954dbfb97a3f"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a5b1973b53eb34d3cbb2df45be1ccc663"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a5b1973b53eb34d3cbb2df45be1ccc663"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a5b1973b53eb34d3cbb2df45be1ccc663"></a>约束名称（不一定是唯一的）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r802a2d23c6ed470cac60d227afbd39c9"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad7b0eb39abd4487fb7e510a8a539b680"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad7b0eb39abd4487fb7e510a8a539b680"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad7b0eb39abd4487fb7e510a8a539b680"></a>connamespace</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa4f999aec43e403ba4a32414157eabaa"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa4f999aec43e403ba4a32414157eabaa"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa4f999aec43e403ba4a32414157eabaa"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a1090a6236a39416480f9c107ea7f5244"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a1090a6236a39416480f9c107ea7f5244"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a1090a6236a39416480f9c107ea7f5244"></a>包含这个约束的名称空间的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_rdf6829039cb04778917d8f341056f92a"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab9d7dbf7020e45f18d5bdb6e0f371762"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab9d7dbf7020e45f18d5bdb6e0f371762"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab9d7dbf7020e45f18d5bdb6e0f371762"></a>contype</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a21f28d61a91f4830943354d172be31ce"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a21f28d61a91f4830943354d172be31ce"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a21f28d61a91f4830943354d172be31ce"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><a name="ul1973810318239"></a><a name="ul1973810318239"></a><ul id="ul1973810318239"><li>c = 检查约束。</li><li>p = 主键约束。</li><li>u = 唯一约束。</li><li>t =  触发器约束。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r5f122a827af241148dd12d1c97f6ce94"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a7ff2f060460c4ac7a53248d329e21df0"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a7ff2f060460c4ac7a53248d329e21df0"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a7ff2f060460c4ac7a53248d329e21df0"></a>condeferrable</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a599d4e9d4057495db93a26d3712fdb00"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a599d4e9d4057495db93a26d3712fdb00"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a599d4e9d4057495db93a26d3712fdb00"></a><span id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text9907153192717"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text9907153192717"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text9907153192717"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae50fc10fc7574ea29f57801dd2a2ea71"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae50fc10fc7574ea29f57801dd2a2ea71"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae50fc10fc7574ea29f57801dd2a2ea71"></a>这个约束是否可以推迟。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r6f3fc752e94c41ec87b72ff42dbb4273"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ac4f4bf0889b24b1fb77f06d45a753f8a"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ac4f4bf0889b24b1fb77f06d45a753f8a"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ac4f4bf0889b24b1fb77f06d45a753f8a"></a>condeferred</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae9bb048b05f941899ae249f96aed0f9f"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae9bb048b05f941899ae249f96aed0f9f"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae9bb048b05f941899ae249f96aed0f9f"></a><span id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text24701746102613"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text24701746102613"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text24701746102613"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_afeb8be8789ae4732922ee7b63d748e7b"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_afeb8be8789ae4732922ee7b63d748e7b"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_afeb8be8789ae4732922ee7b63d748e7b"></a>缺省时这个约束是否可以推迟。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r286a078936c540b3ac80e8a40d1cd92e"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_af281de07fdbb4e34bd2081f5b5d7552a"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_af281de07fdbb4e34bd2081f5b5d7552a"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_af281de07fdbb4e34bd2081f5b5d7552a"></a>convalidated</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa2543986935947ae8bd0a2a631ad1e6e"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa2543986935947ae8bd0a2a631ad1e6e"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa2543986935947ae8bd0a2a631ad1e6e"></a><span id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text183246479261"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text183246479261"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text183246479261"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a794ca2943eaa49a3a334ca97a7002c9c"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a794ca2943eaa49a3a334ca97a7002c9c"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a794ca2943eaa49a3a334ca97a7002c9c"></a>约束是否有效。目前，只有外键和CHECK约束可将其设置为FALSE。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r135fb430428140dfa15ce90189e9b9c5"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a993a03f99c324095941073012130bbe4"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a993a03f99c324095941073012130bbe4"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a993a03f99c324095941073012130bbe4"></a>conrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a8c6300d0e917480fbb1ac034787cc4a8"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a8c6300d0e917480fbb1ac034787cc4a8"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a8c6300d0e917480fbb1ac034787cc4a8"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a46f10b02f71f439abae7a08e5be41d94"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a46f10b02f71f439abae7a08e5be41d94"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a46f10b02f71f439abae7a08e5be41d94"></a>这个约束所在的表；如果不是表约束则为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r9191bf36f2aa410192bc3245b2235253"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a85430c72bf704906ae5b77cbe838ea85"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a85430c72bf704906ae5b77cbe838ea85"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a85430c72bf704906ae5b77cbe838ea85"></a>contypid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3bfd078005514f429104c304a47fc173"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3bfd078005514f429104c304a47fc173"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3bfd078005514f429104c304a47fc173"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_abd03e3b0d60e4ad1a2f9b5335efe05df"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_abd03e3b0d60e4ad1a2f9b5335efe05df"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_abd03e3b0d60e4ad1a2f9b5335efe05df"></a>这个约束所在的域；如果不是一个域约束则为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_rae895e735a5c4abdb33e1d9193bc9344"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0ae398c8b8b84dc2abee6c7b12408c57"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0ae398c8b8b84dc2abee6c7b12408c57"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0ae398c8b8b84dc2abee6c7b12408c57"></a>conindid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad18048d67c84431db594f6aabcd8071d"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad18048d67c84431db594f6aabcd8071d"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad18048d67c84431db594f6aabcd8071d"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0f13ad201eca42a1b422a30c32616ebc"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0f13ad201eca42a1b422a30c32616ebc"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0f13ad201eca42a1b422a30c32616ebc"></a>与约束关联的索引ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r0a6421218a6044c689eead7e0efd6f64"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aad2b6aac22d14a0da8fe6efb104759f6"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aad2b6aac22d14a0da8fe6efb104759f6"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aad2b6aac22d14a0da8fe6efb104759f6"></a>confrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae4f2a987a22a49098582be276c0fcaae"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae4f2a987a22a49098582be276c0fcaae"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae4f2a987a22a49098582be276c0fcaae"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a138b0a69eb7f49f883c45e63e61eb18f"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a138b0a69eb7f49f883c45e63e61eb18f"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a138b0a69eb7f49f883c45e63e61eb18f"></a>如果是外键，则为参考的表；否则为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r943435c208584e6b905b71d2a0836009"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a6f2d240ccd81406cbe7cda4a187612b3"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a6f2d240ccd81406cbe7cda4a187612b3"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a6f2d240ccd81406cbe7cda4a187612b3"></a>confupdtype</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3bf06f76e5e0487b998f5eb588bb2c5d"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3bf06f76e5e0487b998f5eb588bb2c5d"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a3bf06f76e5e0487b998f5eb588bb2c5d"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a92d158197a5f4646a534a96bad98be55"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a92d158197a5f4646a534a96bad98be55"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a92d158197a5f4646a534a96bad98be55"></a>外键更新动作代码。<a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ubd62fe04a5024b32bad3ab78934a6eed"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ubd62fe04a5024b32bad3ab78934a6eed"></a><ul id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ubd62fe04a5024b32bad3ab78934a6eed"><li>a = 没动作。</li><li>r = 限制。</li><li>c = 级联。</li><li>n = 设置为null。</li><li>d = 设置为缺省。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_rc2a42fdc855742ddb6df59d03630ea7b"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_af682b1089eb8437ebc74743666b4322d"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_af682b1089eb8437ebc74743666b4322d"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_af682b1089eb8437ebc74743666b4322d"></a>confdeltype</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_adff8fc28f66d4c7e8153a296f1868f2c"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_adff8fc28f66d4c7e8153a296f1868f2c"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_adff8fc28f66d4c7e8153a296f1868f2c"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aeb3f0a51d9d54a598a53cdff0cdfefd7"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aeb3f0a51d9d54a598a53cdff0cdfefd7"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aeb3f0a51d9d54a598a53cdff0cdfefd7"></a>外键删除动作代码。<a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_u7d2abca23923422898c3ccf0e69a6d1f"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_u7d2abca23923422898c3ccf0e69a6d1f"></a><ul id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_u7d2abca23923422898c3ccf0e69a6d1f"><li>a = 没动作。</li><li>r = 限制。</li><li>c = 级联。</li><li>n = 设置为null。</li><li>d = 设置为缺省。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r13102a28021043c39ab700a263ee8001"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad50dfda4b8484076b39a02087cd0fd99"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad50dfda4b8484076b39a02087cd0fd99"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad50dfda4b8484076b39a02087cd0fd99"></a>confmatchtype</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab38d325121904e518e40e54143725362"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab38d325121904e518e40e54143725362"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab38d325121904e518e40e54143725362"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a7c4703f05b7a4384b84868b98f9d20bd"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a7c4703f05b7a4384b84868b98f9d20bd"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a7c4703f05b7a4384b84868b98f9d20bd"></a>外键匹配类型。<a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ufb0979a192284032bc41e1c9e7d2dcbb"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ufb0979a192284032bc41e1c9e7d2dcbb"></a><ul id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ufb0979a192284032bc41e1c9e7d2dcbb"><li>f = 全部。</li><li>p = 部分。</li><li>u = 未指定（在f的基础上允许匹配NULL值）。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_rab94e0dbf48d4ea9b9f0627aea9cdfe0"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a8e2e17c225aa48ebb551a415d4732c19"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a8e2e17c225aa48ebb551a415d4732c19"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a8e2e17c225aa48ebb551a415d4732c19"></a>conislocal</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab39488f4077f4510a6795c94785d9fce"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab39488f4077f4510a6795c94785d9fce"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab39488f4077f4510a6795c94785d9fce"></a><span id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text92900483261"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text92900483261"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text92900483261"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aeb8e87a5429c4a988dc4e773607f0943"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aeb8e87a5429c4a988dc4e773607f0943"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aeb8e87a5429c4a988dc4e773607f0943"></a>是否是为关系创建的本地约束。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_rf2b53ba3168b42659337b9709325e0ac"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aafd1f39e0fbf44cd98cbcc991e81f605"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aafd1f39e0fbf44cd98cbcc991e81f605"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aafd1f39e0fbf44cd98cbcc991e81f605"></a>coninhcount</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0f9e7481317c4a7bbf0cb07cf6963474"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0f9e7481317c4a7bbf0cb07cf6963474"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0f9e7481317c4a7bbf0cb07cf6963474"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab158b98de10f473f82bf7c88314c2e13"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab158b98de10f473f82bf7c88314c2e13"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ab158b98de10f473f82bf7c88314c2e13"></a>约束直接继承父表的数目。继承父表数非零时，不能删除或重命名该约束。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r05d49998245e478b823b526af4620509"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad780650b72114e278105f9b2958711f6"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad780650b72114e278105f9b2958711f6"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad780650b72114e278105f9b2958711f6"></a>connoinherit</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a56f6b0e909484b13a720814e227ceee6"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a56f6b0e909484b13a720814e227ceee6"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a56f6b0e909484b13a720814e227ceee6"></a><span id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text1012913495267"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text1012913495267"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text1012913495267"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4d93ae83cb9b4666a0a705101f835176"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4d93ae83cb9b4666a0a705101f835176"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4d93ae83cb9b4666a0a705101f835176"></a>是否可以被继承。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r1062e04ef8b1403bbdf0ac58de921503"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a2158e42e1da84b9b99a4a17f9288e007"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a2158e42e1da84b9b99a4a17f9288e007"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a2158e42e1da84b9b99a4a17f9288e007"></a>consoft</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a6ee1fefefc1847d5a499c8eb7d29f604"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a6ee1fefefc1847d5a499c8eb7d29f604"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a6ee1fefefc1847d5a499c8eb7d29f604"></a><span id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text20862134911269"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text20862134911269"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text20862134911269"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_acfc2a37a9bba426f93e87c87b16c7c1a"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_acfc2a37a9bba426f93e87c87b16c7c1a"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_acfc2a37a9bba426f93e87c87b16c7c1a"></a>是否为信息约束（Informational Constraint）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r975cd5a3af1547ad8b1a238635ab881d"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa489ee504b0e468795472f2474c55885"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa489ee504b0e468795472f2474c55885"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa489ee504b0e468795472f2474c55885"></a>conopt</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a1c8d7cfb51624f908cbfa5dfe6f2b64f"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a1c8d7cfb51624f908cbfa5dfe6f2b64f"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a1c8d7cfb51624f908cbfa5dfe6f2b64f"></a><span id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text205531250122612"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text205531250122612"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_text205531250122612"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_abd6d69a14e834c4d9e86bcfc9ccaa36f"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_abd6d69a14e834c4d9e86bcfc9ccaa36f"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_abd6d69a14e834c4d9e86bcfc9ccaa36f"></a>是否使用信息约束优化执行计划。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r03ef7c7890ba47ac9b808ffbe23f0a1c"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4cfb0499e4744051aabaf38bbb2a2c38"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4cfb0499e4744051aabaf38bbb2a2c38"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4cfb0499e4744051aabaf38bbb2a2c38"></a>conkey</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0f497b14e53c47be8fc10f59f2bbb6f6"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0f497b14e53c47be8fc10f59f2bbb6f6"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0f497b14e53c47be8fc10f59f2bbb6f6"></a>smallint[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a348129b6108848ddaabd19cd40e1e7fa"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a348129b6108848ddaabd19cd40e1e7fa"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a348129b6108848ddaabd19cd40e1e7fa"></a>如果是表约束，则是约束控制的字段列表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r6aad5a80a8844022bf8c574587175ee3"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4cef367148cd46f1b49008f641e844eb"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4cef367148cd46f1b49008f641e844eb"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4cef367148cd46f1b49008f641e844eb"></a>confkey</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a414924b497a24a1bb5a1449202fbaf42"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a414924b497a24a1bb5a1449202fbaf42"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a414924b497a24a1bb5a1449202fbaf42"></a>smallint[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0e71cf7d59534cdd96dbf28eebcde449"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0e71cf7d59534cdd96dbf28eebcde449"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a0e71cf7d59534cdd96dbf28eebcde449"></a>如果是一个外键，是参考的字段的列表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r535fd9d3953640b88c6330b228736005"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aff8c6f584514403ab7130d3a23901145"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aff8c6f584514403ab7130d3a23901145"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aff8c6f584514403ab7130d3a23901145"></a>conpfeqop</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4fcc77481dce49f3b1365241ab6dac34"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4fcc77481dce49f3b1365241ab6dac34"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a4fcc77481dce49f3b1365241ab6dac34"></a>oid[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_af58103d4bb5c446fabacdb390901e65c"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_af58103d4bb5c446fabacdb390901e65c"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_af58103d4bb5c446fabacdb390901e65c"></a>如果是一个外键，是做PK=FK比较的相等操作符ID的列表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r65a7caf6850040f7bbb282f338002676"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aea3a3cf8982f4c24b99780f54e046dc6"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aea3a3cf8982f4c24b99780f54e046dc6"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aea3a3cf8982f4c24b99780f54e046dc6"></a>conppeqop</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa9916282d63c4a3899a1b41212186fa0"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa9916282d63c4a3899a1b41212186fa0"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aa9916282d63c4a3899a1b41212186fa0"></a>oid[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a2723e1f919c14b5c9ffbfc9036209ada"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a2723e1f919c14b5c9ffbfc9036209ada"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a2723e1f919c14b5c9ffbfc9036209ada"></a>如果是一个外键，是做PK=PK比较的相等操作符ID的列表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r990d4010ce8c4b808f9d356621333b57"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad9befd6531594387aacc609cbb9e9993"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad9befd6531594387aacc609cbb9e9993"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ad9befd6531594387aacc609cbb9e9993"></a>conffeqop</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aeb666ad5334e4a28917fe14d7645685a"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aeb666ad5334e4a28917fe14d7645685a"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_aeb666ad5334e4a28917fe14d7645685a"></a>oid[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ace54201c2d6a4a0f9b54059282d4a8b6"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ace54201c2d6a4a0f9b54059282d4a8b6"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ace54201c2d6a4a0f9b54059282d4a8b6"></a>如果是一个外键，是做FK=FK比较的相等操作符ID的列表。由于当前不支持外键，所以值为空。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r2b477394832a4b67aec4320556635da3"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ac15850617f8144bfb8cb0d12e29c4ca4"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ac15850617f8144bfb8cb0d12e29c4ca4"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ac15850617f8144bfb8cb0d12e29c4ca4"></a>conexclop</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a869d0148f0a247808fcb838b489454ac"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a869d0148f0a247808fcb838b489454ac"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a869d0148f0a247808fcb838b489454ac"></a>oid[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a5a67f0c1ce1c4780949a467edce5a0d6"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a5a67f0c1ce1c4780949a467edce5a0d6"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a5a67f0c1ce1c4780949a467edce5a0d6"></a>如果是一个排他约束，是列的排他操作符ID列表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_r09af79b87cfc46ee86a9024716240c9c"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a7ef2aa19acd74ddd8efd2122790d071d"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a7ef2aa19acd74ddd8efd2122790d071d"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a7ef2aa19acd74ddd8efd2122790d071d"></a>conbin</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a2421b10647c34d83825beca06c6ed815"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a2421b10647c34d83825beca06c6ed815"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a2421b10647c34d83825beca06c6ed815"></a>pg_node_tree</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ac89935ec554348daa8b8732891ba382c"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ac89935ec554348daa8b8732891ba382c"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ac89935ec554348daa8b8732891ba382c"></a>如果是检查约束，那就是其表达式的内部形式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_rd85d758018d347bfbd476158a1bad1e3"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae12636e5758e4d0fbc44b7afb1e75cbd"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae12636e5758e4d0fbc44b7afb1e75cbd"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_ae12636e5758e4d0fbc44b7afb1e75cbd"></a>consrc</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a18770e77f2524912b3a26134c0349050"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a18770e77f2524912b3a26134c0349050"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a18770e77f2524912b3a26134c0349050"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a80b7cccb21b1404b9657073dbee3c985"><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a80b7cccb21b1404b9657073dbee3c985"></a><a name="zh-cn_topic_0283136792_zh-cn_topic_0237122279_zh-cn_topic_0059778647_a80b7cccb21b1404b9657073dbee3c985"></a>如果是检查约束，则是表达式的人类可读形式。</p>
</td>
</tr>
<tr id="row076712081518"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p0104142718449"><a name="p0104142718449"></a><a name="p0104142718449"></a>conincluding</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p1410412276446"><a name="p1410412276446"></a><a name="p1410412276446"></a>smallint[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p1510462744415"><a name="p1510462744415"></a><a name="p1510462744415"></a>不用做约束，但是会包含在INDEX中的属性列。</p>
</td>
</tr>
</tbody>
</table>


>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>-   consrc在被引用的对象改变之后不会被更新，它不会跟踪字段的名称修改。与其依赖这个字段，最好还是使用pg\_get\_constraintdef\(\)来抽取一个检查约束的定义。
>-   pg\_class.relchecks需要和在此表上为给定关系找到的检查约束的数目一致。

