# PG\_TRIGGER<a name="ZH-CN_TOPIC_0289900828"></a>

PG\_TRIGGER系统表存储触发器信息。

**表 1**  PG\_TRIGGER字段

<a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_t0e636f727ee940ce9c4fe3d08607d732"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_rb8f54813b5b34fb7b4eec74a3f8ac216"><th class="cellrowborder" valign="top" width="20.84%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_ac6c318856cec4e67967734cdbe84e08c"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_ac6c318856cec4e67967734cdbe84e08c"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_ac6c318856cec4e67967734cdbe84e08c"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19.03%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a6dc7600276264a3f8b273d69415ee20c"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a6dc7600276264a3f8b273d69415ee20c"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a6dc7600276264a3f8b273d69415ee20c"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="60.129999999999995%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_abd3b518d5c90486fa0735b1279bbb127"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_abd3b518d5c90486fa0735b1279bbb127"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_abd3b518d5c90486fa0735b1279bbb127"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_row745344385612"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p54539433564"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p54539433564"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p54539433564"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p545374395611"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p545374395611"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p545374395611"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p14533434568"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p14533434568"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p14533434568"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_rc04470ec89ab4e34b008953f48b78340"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a643b8069aeef454794eaf0b59ae1a994"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a643b8069aeef454794eaf0b59ae1a994"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a643b8069aeef454794eaf0b59ae1a994"></a>tgrelid</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_acb5cd711ad504db1b1542f1c1212b1d1"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_acb5cd711ad504db1b1542f1c1212b1d1"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_acb5cd711ad504db1b1542f1c1212b1d1"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_af5bf56fc4d6a4b8199baaecd7f62cee3"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_af5bf56fc4d6a4b8199baaecd7f62cee3"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_af5bf56fc4d6a4b8199baaecd7f62cee3"></a>触发器所在表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_r54671ec163a9400cbc17ae7b6b3fa0db"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a0dcf90a82faa4cb18382cdecf1ae0245"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a0dcf90a82faa4cb18382cdecf1ae0245"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a0dcf90a82faa4cb18382cdecf1ae0245"></a>tgname</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_acb18d67642cb4798b04167b26dc2a6e7"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_acb18d67642cb4798b04167b26dc2a6e7"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_acb18d67642cb4798b04167b26dc2a6e7"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a039f9ab5f5d145aeb5ebbb7af6bbeafe"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a039f9ab5f5d145aeb5ebbb7af6bbeafe"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a039f9ab5f5d145aeb5ebbb7af6bbeafe"></a>触发器名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_r318b1ed210be46c097edc788c7c37a4e"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a9a52ad82b959485987a0c4d4b4aa25e0"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a9a52ad82b959485987a0c4d4b4aa25e0"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a9a52ad82b959485987a0c4d4b4aa25e0"></a>tgfoid</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p5614159174418"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p5614159174418"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p5614159174418"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p298831204318"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p298831204318"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p298831204318"></a>要被触发器调用的函数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_r0329e4dc5ba94fdc812df5362d493cef"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_aba0d8655714943cbbb8a6439bca6af91"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_aba0d8655714943cbbb8a6439bca6af91"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_aba0d8655714943cbbb8a6439bca6af91"></a>tgtype</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a436a60dcf712482787584a00751ba9bf"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a436a60dcf712482787584a00751ba9bf"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a436a60dcf712482787584a00751ba9bf"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_ac4c5b59d01ed46ef82e6fab8f7e9e1d6"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_ac4c5b59d01ed46ef82e6fab8f7e9e1d6"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_ac4c5b59d01ed46ef82e6fab8f7e9e1d6"></a>触发器类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_radbdad08fcd24f439b1035639b13c8ae"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a9eb1c76f2ef048eaac027a679b9a46ea"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a9eb1c76f2ef048eaac027a679b9a46ea"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_a9eb1c76f2ef048eaac027a679b9a46ea"></a>tgenabled</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_af10535a4e4f3491fa9093c6027f93ebf"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_af10535a4e4f3491fa9093c6027f93ebf"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_zh-cn_topic_0059778876_af10535a4e4f3491fa9093c6027f93ebf"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p845317486488"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p845317486488"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p845317486488"></a>O =触发器在“origin”和“local”模式下触发。</p>
<p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1618812516483"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1618812516483"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1618812516483"></a>D =触发器被禁用。</p>
<p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p0972453194814"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p0972453194814"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p0972453194814"></a>R =触发器在“replica”模式下触发。</p>
<p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p923894417481"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p923894417481"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p923894417481"></a>A =触发器始终触发。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_row71181822204320"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p111982224316"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p111982224316"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p111982224316"></a>tgisinternal</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p13120102214432"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p13120102214432"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p13120102214432"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p12550723165013"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p12550723165013"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p12550723165013"></a>内部触发器标识，如果为true表示内部触发器。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_row108975349439"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p20898133412432"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p20898133412432"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p20898133412432"></a>tgconstrrelid</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p188986344434"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p188986344434"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p188986344434"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p138981434164316"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p138981434164316"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p138981434164316"></a>完整性约束引用的表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_row489817346432"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p168981034144320"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p168981034144320"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p168981034144320"></a>tgconstrindid</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1898234194319"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1898234194319"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1898234194319"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p165262349613"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p165262349613"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p165262349613"></a>完整性约束的索引。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_row489853419436"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p789843404315"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p789843404315"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p789843404315"></a>tgconstraint</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p5898133417435"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p5898133417435"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p5898133417435"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p3898143414310"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p3898143414310"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p3898143414310"></a>约束触发器在pg_constraint中的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_row20898334144315"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1689803418436"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1689803418436"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1689803418436"></a>tgdeferrable</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1898143484318"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1898143484318"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1898143484318"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p18983341434"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p18983341434"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p18983341434"></a>约束触发器是为DEFERRABLE类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_row3898113404314"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p88992343437"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p88992343437"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p88992343437"></a>tginitdeferred</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p18990344439"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p18990344439"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p18990344439"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p38993340437"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p38993340437"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p38993340437"></a>约束触发器是否为INITIALLY DEFERRED类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_row20899193418435"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p389973412437"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p389973412437"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p389973412437"></a>tgnargs</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1899434164319"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1899434164319"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1899434164319"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p3899134114319"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p3899134114319"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p3899134114319"></a>触发器函数入参个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_row1833316445"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1539315448"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1539315448"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p1539315448"></a>tgattr</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p14333184418"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p14333184418"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p14333184418"></a>int2vector</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p132031114416"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p132031114416"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p132031114416"></a>当触发器指定列时的列号，未指定则为空数组。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_row19363194419"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p143131144416"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p143131144416"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p143131144416"></a>tgargs</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p193163174412"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p193163174412"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p193163174412"></a>bytea</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p15323114410"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p15323114410"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p15323114410"></a>传递给触发器的参数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_row1317317441"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p041831154418"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p041831154418"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p041831154418"></a>tgqual</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p184531154417"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p184531154417"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p184531154417"></a>pg_node_tree</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p241231154412"><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p241231154412"></a><a name="zh-cn_topic_0283136871_zh-cn_topic_0237122321_p241231154412"></a>表示触发器的WHEN条件，如果没有则为null。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_row18590111610395"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_p959261611392"><a name="zh-cn_topic_0283136871_p959261611392"></a><a name="zh-cn_topic_0283136871_p959261611392"></a>tgowner</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_p25924169391"><a name="zh-cn_topic_0283136871_p25924169391"></a><a name="zh-cn_topic_0283136871_p25924169391"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_p105924163395"><a name="zh-cn_topic_0283136871_p105924163395"></a><a name="zh-cn_topic_0283136871_p105924163395"></a>触发器的所有者。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_row18590111610395"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_p959261611392"><a name="zh-cn_topic_0283136871_p959261611392"></a><a name="zh-cn_topic_0283136871_p959261611392"></a>tgordername</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_p25924169391"><a name="zh-cn_topic_0283136871_p25924169391"></a><a name="zh-cn_topic_0283136871_p25924169391"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_p105924163395"><a name="zh-cn_topic_0283136871_p105924163395"></a><a name="zh-cn_topic_0283136871_p105924163395"></a>原始触发器名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_row18590111610395"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_p959261611392"><a name="zh-cn_topic_0283136871_p959261611392"></a><a name="zh-cn_topic_0283136871_p959261611392"></a>tgorder</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_p25924169391"><a name="zh-cn_topic_0283136871_p25924169391"></a><a name="zh-cn_topic_0283136871_p25924169391"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_p105924163395"><a name="zh-cn_topic_0283136871_p105924163395"></a><a name="zh-cn_topic_0283136871_p105924163395"></a>触发器是否控制触发先后顺序。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136871_row18590111610395"><td class="cellrowborder" valign="top" width="20.84%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136871_p959261611392"><a name="zh-cn_topic_0283136871_p959261611392"></a><a name="zh-cn_topic_0283136871_p959261611392"></a>tgtime</p>
</td>
<td class="cellrowborder" valign="top" width="19.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136871_p25924169391"><a name="zh-cn_topic_0283136871_p25924169391"></a><a name="zh-cn_topic_0283136871_p25924169391"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.129999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136871_p105924163395"><a name="zh-cn_topic_0283136871_p105924163395"></a><a name="zh-cn_topic_0283136871_p105924163395"></a>触发器创建的时间点。</p>
</td>
</tr>
</tbody>
</table>
