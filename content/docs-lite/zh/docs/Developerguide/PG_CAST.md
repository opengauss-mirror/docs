# PG\_CAST<a name="ZH-CN_TOPIC_0289900432"></a>

PG\_CAST系统表存储数据类型之间的转化关系。

**表 1**  PG\_CAST字段

<a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_t4c22a8fe53f447fda8ac42bb4e37355e"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_rbf513cccacdd449d985730cfb287594d"><th class="cellrowborder" valign="top" width="18.459999999999997%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a4c402964d88e453da449d7a0cdec8c4b"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a4c402964d88e453da449d7a0cdec8c4b"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a4c402964d88e453da449d7a0cdec8c4b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.91%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aa993b38fab274e018e2e8db455dd2869"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aa993b38fab274e018e2e8db455dd2869"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aa993b38fab274e018e2e8db455dd2869"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="63.629999999999995%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a765dbb740ed54599af31119f291605ad"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a765dbb740ed54599af31119f291605ad"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a765dbb740ed54599af31119f291605ad"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_row114782391406"><td class="cellrowborder" valign="top" width="18.459999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_p44780391303"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_p44780391303"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_p44780391303"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_p54792395013"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_p54792395013"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_p54792395013"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="63.629999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_p204797391908"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_p204797391908"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_p204797391908"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_r943e4805fe20462788a95930158b138c"><td class="cellrowborder" valign="top" width="18.459999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ae4f12d8091bf4b249ce83ac47b5d72a3"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ae4f12d8091bf4b249ce83ac47b5d72a3"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ae4f12d8091bf4b249ce83ac47b5d72a3"></a>castsource</p>
</td>
<td class="cellrowborder" valign="top" width="17.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a5190ba59816844988fc5a42db098fa3e"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a5190ba59816844988fc5a42db098fa3e"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a5190ba59816844988fc5a42db098fa3e"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="63.629999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aa2afa50eb1584f4093a3183aa549fb6d"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aa2afa50eb1584f4093a3183aa549fb6d"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aa2afa50eb1584f4093a3183aa549fb6d"></a>源数据类型的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_r689b0c43fa904b9cb366859ab411f94f"><td class="cellrowborder" valign="top" width="18.459999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a8836d1d5deeb4c80ad2777c277730e0d"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a8836d1d5deeb4c80ad2777c277730e0d"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a8836d1d5deeb4c80ad2777c277730e0d"></a>casttarget</p>
</td>
<td class="cellrowborder" valign="top" width="17.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aac51fbd8dc9b47a1b7bc9dd04c1039e9"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aac51fbd8dc9b47a1b7bc9dd04c1039e9"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aac51fbd8dc9b47a1b7bc9dd04c1039e9"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="63.629999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a1b6052dd856242b596bec55372c51213"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a1b6052dd856242b596bec55372c51213"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a1b6052dd856242b596bec55372c51213"></a>目标数据类型的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_rbe97a69701ef4bbe931be9db074a698b"><td class="cellrowborder" valign="top" width="18.459999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a47d25515800e4d0ca889f1e94974f7c2"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a47d25515800e4d0ca889f1e94974f7c2"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a47d25515800e4d0ca889f1e94974f7c2"></a>castfunc</p>
</td>
<td class="cellrowborder" valign="top" width="17.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ab66732c3bad24dc1b9b5cea5927594ad"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ab66732c3bad24dc1b9b5cea5927594ad"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ab66732c3bad24dc1b9b5cea5927594ad"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="63.629999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ac91832c96965424490e65318357df987"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ac91832c96965424490e65318357df987"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ac91832c96965424490e65318357df987"></a>转化函数的OID。如果为零表明不需要转化函数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_rf614fe25065f4a77824fc68efd4161c0"><td class="cellrowborder" valign="top" width="18.459999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a49e580a290d54818b4359ef7e16141db"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a49e580a290d54818b4359ef7e16141db"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a49e580a290d54818b4359ef7e16141db"></a>castcontext</p>
</td>
<td class="cellrowborder" valign="top" width="17.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aa1b7eeb074824ba39caa1bebe41e4830"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aa1b7eeb074824ba39caa1bebe41e4830"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_aa1b7eeb074824ba39caa1bebe41e4830"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="63.629999999999995%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a3bc2c93f709e4553948bc5f4346a4a1f"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a3bc2c93f709e4553948bc5f4346a4a1f"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a3bc2c93f709e4553948bc5f4346a4a1f"></a>源数据类型和目标数据类型间的转化方式：<a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_uf929b3bfb86e4f20b61afed2ce3e0b87"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_uf929b3bfb86e4f20b61afed2ce3e0b87"></a><ul id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_uf929b3bfb86e4f20b61afed2ce3e0b87"><li>'e'：表示只能进行显式转化（使用CAST或::语法）。</li><li>'i'：表示能进行隐式转化。</li><li>'a'：表示类型间同时支持隐式和显式转化。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_rf624d9ca07a6427baaf8c02f62694039"><td class="cellrowborder" valign="top" width="18.459999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_abeb22d244ea24f91a303dce3143dc9e5"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_abeb22d244ea24f91a303dce3143dc9e5"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_abeb22d244ea24f91a303dce3143dc9e5"></a>castmethod</p>
</td>
<td class="cellrowborder" valign="top" width="17.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a56a4ba1331674b0c93077711788f7177"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a56a4ba1331674b0c93077711788f7177"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_a56a4ba1331674b0c93077711788f7177"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="63.629999999999995%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ac8680432d4d44ccba14b94e39e9af4d9"><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ac8680432d4d44ccba14b94e39e9af4d9"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_ac8680432d4d44ccba14b94e39e9af4d9"></a>转化方法：<a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_u75c3cee670b94e7f8caa73fdf6489ed2"></a><a name="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_u75c3cee670b94e7f8caa73fdf6489ed2"></a><ul id="zh-cn_topic_0283137681_zh-cn_topic_0237122276_zh-cn_topic_0059777603_u75c3cee670b94e7f8caa73fdf6489ed2"><li>'f'：使用castfunc字段中指定的函数进行转化。</li><li>'b'：类型间是二进制强制转化，不使用castfunc。</li></ul>
</div>
</td>
</tr>
</tbody>
</table>


