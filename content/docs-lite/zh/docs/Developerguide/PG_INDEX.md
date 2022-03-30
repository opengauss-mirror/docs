# PG\_INDEX<a name="ZH-CN_TOPIC_0289900943"></a>

PG\_INDEX系统表存储索引的一部分信息，其他的信息大多数在PG\_CLASS中。

**表 1**  PG\_INDEX字段

<a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_t553335b97ca24b16be6f2a8fad19d59a"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r77b1feeaf06f47c39276851270d7af5d"><th class="cellrowborder" valign="top" width="16.64%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a52f340d7cc2141db93937ece7a2eb472"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a52f340d7cc2141db93937ece7a2eb472"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a52f340d7cc2141db93937ece7a2eb472"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.04%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ab9c8ba4e413e451c80f893467f0a3e4a"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ab9c8ba4e413e451c80f893467f0a3e4a"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ab9c8ba4e413e451c80f893467f0a3e4a"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="66.32000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a120f6b19c1784330a7ccd62dcc61e4a5"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a120f6b19c1784330a7ccd62dcc61e4a5"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a120f6b19c1784330a7ccd62dcc61e4a5"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_rda19630333f04264a89ae62d66ca4941"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5383bc791c4a4fbc88c372df64f2e0bc"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5383bc791c4a4fbc88c372df64f2e0bc"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5383bc791c4a4fbc88c372df64f2e0bc"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ae85c6d394a324e95ad384d13b6258e28"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ae85c6d394a324e95ad384d13b6258e28"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ae85c6d394a324e95ad384d13b6258e28"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_abdd4dc14fdfb4464849e008632648e3a"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_abdd4dc14fdfb4464849e008632648e3a"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_abdd4dc14fdfb4464849e008632648e3a"></a>这个索引在pg_class里的记录的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r76daafb9724149938d1681b7ad19a4ef"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a222e176139384534a18ea1157cd862f2"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a222e176139384534a18ea1157cd862f2"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a222e176139384534a18ea1157cd862f2"></a>indrelid</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8d7bf386b14f464c9b7a9f6735ba5003"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8d7bf386b14f464c9b7a9f6735ba5003"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8d7bf386b14f464c9b7a9f6735ba5003"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a993177e8a75d444ea7b170e5d6e08a5f"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a993177e8a75d444ea7b170e5d6e08a5f"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a993177e8a75d444ea7b170e5d6e08a5f"></a>使用这个索引的表在pg_class里的记录的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r2dfe0cbf429a4350a2fe62e9bab624a4"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1a5f47b7c444448b88e60d6d5f5dc121"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1a5f47b7c444448b88e60d6d5f5dc121"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1a5f47b7c444448b88e60d6d5f5dc121"></a>indnatts</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1f04d6c82aa64d05b44d205b6c14b959"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1f04d6c82aa64d05b44d205b6c14b959"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1f04d6c82aa64d05b44d205b6c14b959"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2d6fd8d03f0d4cd5b2a48c6ce501ed96"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2d6fd8d03f0d4cd5b2a48c6ce501ed96"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2d6fd8d03f0d4cd5b2a48c6ce501ed96"></a>索引中的字段数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r34e3244c232740d09d19a1de04094568"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ad215b838acea44a7826083d333c18bfd"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ad215b838acea44a7826083d333c18bfd"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ad215b838acea44a7826083d333c18bfd"></a>indisunique</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6821b1e839444d568f721ba2d8f8458e"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6821b1e839444d568f721ba2d8f8458e"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6821b1e839444d568f721ba2d8f8458e"></a><span id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_text362112872711"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_text362112872711"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_text362112872711"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a40aabb1b82c74dc9acab0e2283b771bd"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a40aabb1b82c74dc9acab0e2283b771bd"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a40aabb1b82c74dc9acab0e2283b771bd"></a>如果为真，这是个唯一索引。</p>
<p id="p1598240124913"><a name="p1598240124913"></a><a name="p1598240124913"></a>如果为假，这不是唯一索引。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r409491d9b4c9440986aa3f5cc95777ea"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a83a1664e3826411c8666af8b97ca0ebd"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a83a1664e3826411c8666af8b97ca0ebd"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a83a1664e3826411c8666af8b97ca0ebd"></a>indisprimary</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="p1540214110171"><a name="p1540214110171"></a><a name="p1540214110171"></a><span id="text940210117176"><a name="text940210117176"></a><a name="text940210117176"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a9276fbb2d2fb4236a099fd0a00e94f96"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a9276fbb2d2fb4236a099fd0a00e94f96"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a9276fbb2d2fb4236a099fd0a00e94f96"></a>如果为真，该索引代表该表的主键。这个字段为真的时候indisunique总是为真。</p>
<p id="p131492212503"><a name="p131492212503"></a><a name="p131492212503"></a>如果为假，该索引不是该表的主键。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r27223efa87c247cab272f0e9afeb9e1b"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a36f149ac35404f56b796203cf469fec7"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a36f149ac35404f56b796203cf469fec7"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a36f149ac35404f56b796203cf469fec7"></a>indisexclusion</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a3daad8e698f14ed8ac5579864a14a390"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a3daad8e698f14ed8ac5579864a14a390"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a3daad8e698f14ed8ac5579864a14a390"></a><span id="text208971597161"><a name="text208971597161"></a><a name="text208971597161"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a054682b61f34443f91d0a9358f68bfee"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a054682b61f34443f91d0a9358f68bfee"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a054682b61f34443f91d0a9358f68bfee"></a>如果为真，该索引支持排他约束。</p>
<p id="p10320154845013"><a name="p10320154845013"></a><a name="p10320154845013"></a>如果为假，该索引不支持排他约束。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_rfa1693b1812d465aa6aa1eb8e46e2a8b"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8ef49acce4c0480f9b560831ed378549"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8ef49acce4c0480f9b560831ed378549"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8ef49acce4c0480f9b560831ed378549"></a>indimmediate</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a06513beb51234a37ad78f583998c0e71"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a06513beb51234a37ad78f583998c0e71"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a06513beb51234a37ad78f583998c0e71"></a><span id="text16456163181719"><a name="text16456163181719"></a><a name="text16456163181719"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5596b2a3b24d485c8a826e34181999d2"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5596b2a3b24d485c8a826e34181999d2"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5596b2a3b24d485c8a826e34181999d2"></a>如果为真，在插入数据时会立即进行唯一性检查。</p>
<p id="p11173115155117"><a name="p11173115155117"></a><a name="p11173115155117"></a>如果为假，在插入数据时不会进行唯一性检查。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r6b2cba9478774b5fb1b86a5ccc1df906"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6e8e3e919fd246f7bad3453180693210"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6e8e3e919fd246f7bad3453180693210"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6e8e3e919fd246f7bad3453180693210"></a>indisclustered</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aef6f68b77235493484c9bf7bfa74095e"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aef6f68b77235493484c9bf7bfa74095e"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aef6f68b77235493484c9bf7bfa74095e"></a><span id="text225126161718"><a name="text225126161718"></a><a name="text225126161718"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a26e747b0b2ba464ba1de89d4cc49d364"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a26e747b0b2ba464ba1de89d4cc49d364"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a26e747b0b2ba464ba1de89d4cc49d364"></a>如果为真，则该表最后在这个索引上建了簇。</p>
<p id="p4106043175113"><a name="p4106043175113"></a><a name="p4106043175113"></a>如果为假，则该表没有再这个索引上建簇</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r6ac01e895ae844458ed48a4c146e1c10"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2eb57e5d1cba432b9f255adf526bfa1c"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2eb57e5d1cba432b9f255adf526bfa1c"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2eb57e5d1cba432b9f255adf526bfa1c"></a>indisusable</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a70815f306d17411aa87c22a66ead38ea"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a70815f306d17411aa87c22a66ead38ea"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a70815f306d17411aa87c22a66ead38ea"></a><span id="text620515917173"><a name="text620515917173"></a><a name="text620515917173"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1e9a2842d3764e9bb00b09f4168e664d"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1e9a2842d3764e9bb00b09f4168e664d"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a1e9a2842d3764e9bb00b09f4168e664d"></a>如果为真，该索引对insert/select可用。</p>
<p id="p39758146529"><a name="p39758146529"></a><a name="p39758146529"></a>如果为假，该索引对insert/select不可用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_rfbd6327b187142b28312d9a913cba409"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ac88ecdc2f42e4245ac3891dbb9cf7131"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ac88ecdc2f42e4245ac3891dbb9cf7131"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ac88ecdc2f42e4245ac3891dbb9cf7131"></a>indisvalid</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6920cadae3cc4370a94125229a00f639"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6920cadae3cc4370a94125229a00f639"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6920cadae3cc4370a94125229a00f639"></a><span id="text1270391021710"><a name="text1270391021710"></a><a name="text1270391021710"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aa446b985bd22483cab2182807d854aa5"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aa446b985bd22483cab2182807d854aa5"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aa446b985bd22483cab2182807d854aa5"></a>如果为真，则该索引可以用于查询。如果为假，则该索引可能不完整，仍然必须在INSERT/UPDATE操作时进行更新，不过不能安全的用于查询。如果是唯一索引，则唯一属性也将不为真。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r9af4055f031e45369e14691d4cf7088b"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a324a23d89c3844159c6c26d6e6154502"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a324a23d89c3844159c6c26d6e6154502"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a324a23d89c3844159c6c26d6e6154502"></a>indcheckxmin</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a43ac01fee092490f9d249381cc5a1176"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a43ac01fee092490f9d249381cc5a1176"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a43ac01fee092490f9d249381cc5a1176"></a><span id="text8634151213178"><a name="text8634151213178"></a><a name="text8634151213178"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_afc8aba22c59b4de3835818d70342b2d3"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_afc8aba22c59b4de3835818d70342b2d3"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_afc8aba22c59b4de3835818d70342b2d3"></a>如果为true，查询不能使用索引，直到pg_index此行的xmin低于其快照的TransactionXmin，因为该表可能包含它们能看到的不兼容行断开的HOT链。</p>
<p id="p20263357205212"><a name="p20263357205212"></a><a name="p20263357205212"></a>如果为false，查询可以用于索引。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_re29311ced40740ce995d05a0f1b0e641"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ad4ff222c8fa24277838ba72b74b41834"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ad4ff222c8fa24277838ba72b74b41834"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ad4ff222c8fa24277838ba72b74b41834"></a>indisready</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="p101318156173"><a name="p101318156173"></a><a name="p101318156173"></a><span id="text1813115159174"><a name="text1813115159174"></a><a name="text1813115159174"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aabc2b6e26777411bb5ee8262d99d9e42"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aabc2b6e26777411bb5ee8262d99d9e42"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aabc2b6e26777411bb5ee8262d99d9e42"></a>如果为真，表示此索引对插入数据是可用的，否则，在插入或修改数据时忽略此索引。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_rc0608e1fefd14ee0b3d16034e3000328"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_adfa31801724b4a258dcb4e6fbebbd3e0"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_adfa31801724b4a258dcb4e6fbebbd3e0"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_adfa31801724b4a258dcb4e6fbebbd3e0"></a>indkey</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5780cd793ce34403b78b955ee548ab69"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5780cd793ce34403b78b955ee548ab69"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a5780cd793ce34403b78b955ee548ab69"></a>int2vector</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_af5eb10fa3b414c1cb93517e6629db692"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_af5eb10fa3b414c1cb93517e6629db692"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_af5eb10fa3b414c1cb93517e6629db692"></a>这是一个包含indnatts值的数组，这些数组值表示这个索引所建立的表字段。比如一个值为1 3的意思是第一个字段和第三个字段组成这个索引键字。这个数组里的零表明对应的索引属性是在这个表字段上的一个表达式，而不是一个简单的字段引用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r9bccf795166c433f99d702e7e4914bbe"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a459531d4164647be96773cf257d8cb3b"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a459531d4164647be96773cf257d8cb3b"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a459531d4164647be96773cf257d8cb3b"></a>indcollation</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aab9e11908d804af482c6ee3cdf10457b"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aab9e11908d804af482c6ee3cdf10457b"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aab9e11908d804af482c6ee3cdf10457b"></a>oidvector</p>
<p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6948d083ab69439ab0d5b31d637d21e9"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6948d083ab69439ab0d5b31d637d21e9"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a6948d083ab69439ab0d5b31d637d21e9"></a></p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aa16affacd7ea4979b27420fc7cb88937"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aa16affacd7ea4979b27420fc7cb88937"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_aa16affacd7ea4979b27420fc7cb88937"></a>索引用到的各列的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_rba42f9b30226419481a1ac6f2fbfee97"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a34b634659211446ca4fc8d6266a0b512"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a34b634659211446ca4fc8d6266a0b512"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a34b634659211446ca4fc8d6266a0b512"></a>indclass</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a26d6623040f44bfabcbeeae8123a9446"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a26d6623040f44bfabcbeeae8123a9446"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a26d6623040f44bfabcbeeae8123a9446"></a>oidvector</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a4ed9429370a94feda34f6343ed92427d"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a4ed9429370a94feda34f6343ed92427d"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a4ed9429370a94feda34f6343ed92427d"></a>对于索引键字里面的每个字段，这个字段都包含一个指向所使用的操作符类的OID，参阅pg_opclass获取细节。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r221671e0c94f4e7980248eaa9e9bb157"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a7d86901b2de94ad694e60f1a32d57f5d"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a7d86901b2de94ad694e60f1a32d57f5d"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a7d86901b2de94ad694e60f1a32d57f5d"></a>indoption</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ac3995bc7a0e54e42a0ff7e8bb54310ae"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ac3995bc7a0e54e42a0ff7e8bb54310ae"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ac3995bc7a0e54e42a0ff7e8bb54310ae"></a>int2vector</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2721018a6b8040fbb788d9058ddc2f55"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2721018a6b8040fbb788d9058ddc2f55"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2721018a6b8040fbb788d9058ddc2f55"></a>存储列前标识位，该标识位是由索引的访问方法定义。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_r4fbecf48c8444af7993f3c3cbbf0a634"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ac74d6046c4d54bb39dd67769f7b06eb2"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ac74d6046c4d54bb39dd67769f7b06eb2"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_ac74d6046c4d54bb39dd67769f7b06eb2"></a>indexprs</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2fb397b9294943c6b1e981cabcae7525"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2fb397b9294943c6b1e981cabcae7525"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a2fb397b9294943c6b1e981cabcae7525"></a>pg_node_tree</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a4b3d4cffafe74f339cc0ab0d197994b0"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a4b3d4cffafe74f339cc0ab0d197994b0"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a4b3d4cffafe74f339cc0ab0d197994b0"></a>表达式树（以nodeToString()形式表现）用于那些非简单字段引用的索引属性。它是一个列表，个数与INDKEY中的零值个数相同。如果所有索引属性都是简单的引用，则为空。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_rdd8ad769e3a74f02bfe6fd8222ddf784"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a0dec360d33d6459992b80bf48b556931"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a0dec360d33d6459992b80bf48b556931"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a0dec360d33d6459992b80bf48b556931"></a>indpred</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8bae3012f74e4a65bba84de32fc1d46f"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8bae3012f74e4a65bba84de32fc1d46f"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a8bae3012f74e4a65bba84de32fc1d46f"></a>pg_node_tree</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a16ca22d9dc09405c9b72f95bc4cb108c"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a16ca22d9dc09405c9b72f95bc4cb108c"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_zh-cn_topic_0059777688_a16ca22d9dc09405c9b72f95bc4cb108c"></a>部分索引断言的表达式树（以nodeToString()的形式表现）。如果不是部分索引，则是空字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_row0732152919557"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_p973362945511"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_p973362945511"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_p973362945511"></a>indisreplident</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_p147331629175510"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_p147331629175510"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_p147331629175510"></a><span id="text51405191174"><a name="text51405191174"></a><a name="text51405191174"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137672_zh-cn_topic_0237122293_p373372945519"><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_p373372945519"></a><a name="zh-cn_topic_0283137672_zh-cn_topic_0237122293_p373372945519"></a>如果为真，则此索引的列成为逻辑解码的解码列。</p>
<p id="p1592919855319"><a name="p1592919855319"></a><a name="p1592919855319"></a>如果为假，则此索引的列不是逻辑解码的解码列。</p>
</td>
</tr>
<tr id="row16501010404"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="p86518101709"><a name="p86518101709"></a><a name="p86518101709"></a>indnkeyatts</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="p36516107017"><a name="p36516107017"></a><a name="p36516107017"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="p1065161015012"><a name="p1065161015012"></a><a name="p1065161015012"></a>索引中的总字段数，超出indnatts的部分不参与索引查询。</p>
</td>
</tr>
</tbody>
</table>

