# PGXC\_GROUP

PGXC\_GROUP系统表存储节点组信息。PGXC\_GROUP系统表仅在分布式场景下有具体含义，openGauss只能查询表定义。

**表 1**  PGXC\_GROUP字段

<a name="zh-cn_topic_0059778124_t542841527d4f469c9e4897639129edbb"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778124_r1b683689989e4b9398d12ad560cfe383"><th class="cellrowborder" valign="top" width="20.419999999999998%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778124_a7eb144b95e7b448b8d67c6dcb9e2f648"><a name="zh-cn_topic_0059778124_a7eb144b95e7b448b8d67c6dcb9e2f648"></a><a name="zh-cn_topic_0059778124_a7eb144b95e7b448b8d67c6dcb9e2f648"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19.12%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778124_a9caf5cb7fad44a3f91722ddee9e081ca"><a name="zh-cn_topic_0059778124_a9caf5cb7fad44a3f91722ddee9e081ca"></a><a name="zh-cn_topic_0059778124_a9caf5cb7fad44a3f91722ddee9e081ca"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="60.46%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778124_ab57314460c814a42a855e71a5abe426c"><a name="zh-cn_topic_0059778124_ab57314460c814a42a855e71a5abe426c"></a><a name="zh-cn_topic_0059778124_ab57314460c814a42a855e71a5abe426c"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row18243165635114"><td class="cellrowborder" valign="top" width="20.419999999999998%" headers="mcps1.2.4.1.1 "><p id="p192435564513"><a name="p192435564513"></a><a name="p192435564513"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.4.1.2 "><p id="p17243056135120"><a name="p17243056135120"></a><a name="p17243056135120"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%" headers="mcps1.2.4.1.3 "><p id="p524325645114"><a name="p524325645114"></a><a name="p524325645114"></a>行标识符（隐含字段，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778124_r0deedeff29764b52a01fe3e09194f1fa"><td class="cellrowborder" valign="top" width="20.419999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778124_a7dd0072aaa6f448b9c08c04a1907b7f5"><a name="zh-cn_topic_0059778124_a7dd0072aaa6f448b9c08c04a1907b7f5"></a><a name="zh-cn_topic_0059778124_a7dd0072aaa6f448b9c08c04a1907b7f5"></a>group_name</p>
</td>
<td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778124_a31af0c9d2cad49968bb8313db7e33248"><a name="zh-cn_topic_0059778124_a31af0c9d2cad49968bb8313db7e33248"></a><a name="zh-cn_topic_0059778124_a31af0c9d2cad49968bb8313db7e33248"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778124_a77595a5a8a714f02ba38502240a0e3e7"><a name="zh-cn_topic_0059778124_a77595a5a8a714f02ba38502240a0e3e7"></a><a name="zh-cn_topic_0059778124_a77595a5a8a714f02ba38502240a0e3e7"></a>节点组名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778124_r94ec9f39604c4f75b55329512f9df362"><td class="cellrowborder" valign="top" width="20.419999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778124_a68912dee88db426681ae7deacd075f1d"><a name="zh-cn_topic_0059778124_a68912dee88db426681ae7deacd075f1d"></a><a name="zh-cn_topic_0059778124_a68912dee88db426681ae7deacd075f1d"></a>in_redistribution</p>
</td>
<td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778124_a76edc60dabb44b539b96f3d8381e3266"><a name="zh-cn_topic_0059778124_a76edc60dabb44b539b96f3d8381e3266"></a><a name="zh-cn_topic_0059778124_a76edc60dabb44b539b96f3d8381e3266"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%" headers="mcps1.2.4.1.3 "><div class="p" id="p31791216459"><a name="p31791216459"></a><a name="p31791216459"></a>是否需要重分布。取值包括n，y，t。<a name="ul18285112624511"></a><a name="ul18285112624511"></a><ul id="ul18285112624511"><li>n：表示NodeGroup没有再进行重分布。</li><li>y：表示NodeGroup是重分布过程中的源节点组。</li><li>t：表示NodeGroup是重分布过程中的目的节点组。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0059778124_r724256ff54e94809891f6ffdfbe2f2f2"><td class="cellrowborder" valign="top" width="20.419999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778124_a57564f9c05f4483584d3fe741527a1ac"><a name="zh-cn_topic_0059778124_a57564f9c05f4483584d3fe741527a1ac"></a><a name="zh-cn_topic_0059778124_a57564f9c05f4483584d3fe741527a1ac"></a>group_members</p>
</td>
<td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778124_a31d43e3ffd62480fa3ce275b190f568a"><a name="zh-cn_topic_0059778124_a31d43e3ffd62480fa3ce275b190f568a"></a><a name="zh-cn_topic_0059778124_a31d43e3ffd62480fa3ce275b190f568a"></a>oidvector_extend</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778124_a039f90ab23cd4e599ca750694bde7fb3"><a name="zh-cn_topic_0059778124_a039f90ab23cd4e599ca750694bde7fb3"></a><a name="zh-cn_topic_0059778124_a039f90ab23cd4e599ca750694bde7fb3"></a>节点组的节点OID列表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778124_ra238160ee1104e9cb764aba93206752e"><td class="cellrowborder" valign="top" width="20.419999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778124_ac0fadc50ad2747c29289b26606b872a4"><a name="zh-cn_topic_0059778124_ac0fadc50ad2747c29289b26606b872a4"></a><a name="zh-cn_topic_0059778124_ac0fadc50ad2747c29289b26606b872a4"></a>group_buckets</p>
</td>
<td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778124_a8e22c22ccb7a4f04ad474b9ba9fc65cc"><a name="zh-cn_topic_0059778124_a8e22c22ccb7a4f04ad474b9ba9fc65cc"></a><a name="zh-cn_topic_0059778124_a8e22c22ccb7a4f04ad474b9ba9fc65cc"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778124_a65f655bd6083442a98d76cb583e8190e"><a name="zh-cn_topic_0059778124_a65f655bd6083442a98d76cb583e8190e"></a><a name="zh-cn_topic_0059778124_a65f655bd6083442a98d76cb583e8190e"></a>分布数据桶的集合。</p>
</td>
</tr>
<tr id="row204781949282"><td class="cellrowborder" valign="top" width="20.419999999999998%" headers="mcps1.2.4.1.1 "><p id="p194796491814"><a name="p194796491814"></a><a name="p194796491814"></a>is_InstallationGuide</p>
</td>
<td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.4.1.2 "><p id="p3479124915820"><a name="p3479124915820"></a><a name="p3479124915820"></a><span id="text442111002917"><a name="text442111002917"></a><a name="text442111002917"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%" headers="mcps1.2.4.1.3 "><p id="p204793499820"><a name="p204793499820"></a><a name="p204793499820"></a>是否安装子集群。</p>
<a name="ul12255125141612"></a><a name="ul12255125141612"></a><ul id="ul12255125141612"><li>t（true）：表示安装。</li><li>f（false）：表示不安装。</li></ul>
</td>
</tr>
<tr id="row14389195612816"><td class="cellrowborder" valign="top" width="20.419999999999998%" headers="mcps1.2.4.1.1 "><p id="p53905561187"><a name="p53905561187"></a><a name="p53905561187"></a>group_acl</p>
</td>
<td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.4.1.2 "><p id="p1239019567817"><a name="p1239019567817"></a><a name="p1239019567817"></a>aclitem[]</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%" headers="mcps1.2.4.1.3 "><p id="p14390856089"><a name="p14390856089"></a><a name="p14390856089"></a>访问权限。</p>
</td>
</tr>
<tr id="row3574632132718"><td class="cellrowborder" valign="top" width="20.419999999999998%" headers="mcps1.2.4.1.1 "><p id="p657423282719"><a name="p657423282719"></a><a name="p657423282719"></a>group_kind</p>
</td>
<td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.4.1.2 "><p id="p10574163220276"><a name="p10574163220276"></a><a name="p10574163220276"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%" headers="mcps1.2.4.1.3 "><div class="p" id="p983814616462"><a name="p983814616462"></a><a name="p983814616462"></a>node group类型，取值包括i, n, v, e。<a name="ul15558135019461"></a><a name="ul15558135019461"></a><ul id="ul15558135019461"><li>i：表示InstallationGuide node group。</li><li>n：表示普通非逻辑集群node group。</li><li>v：表示逻辑集群node group。</li><li>e：表示弹性集群。</li></ul>
</div>
</td>
</tr>
<tr id="row13337218258"><td class="cellrowborder" valign="top" width="20.419999999999998%" headers="mcps1.2.4.1.1 "><p id="p73336219251"><a name="p73336219251"></a><a name="p73336219251"></a>group_parent</p>
</td>
<td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.4.1.2 "><p id="p16333221102517"><a name="p16333221102517"></a><a name="p16333221102517"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%" headers="mcps1.2.4.1.3 "><p id="p133315211259"><a name="p133315211259"></a><a name="p133315211259"></a>如果是子node group，该字段表示父node group的OID，如果是父node group，该字段值为空。</p>
</td>
</tr>
</tbody>
</table>
