# PG\_EXTENSION<a name="ZH-CN_TOPIC_0289900664"></a>

PG\_EXTENSION系统表存储关于所安装扩展的信息。openGauss默认扩展是PLPGSQL和MOT\_FDW。

**表 1**  PG\_EXTENSION

<a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_t47de5378656040b89fd728f97d302162"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_rc25760cfe28a4e569b2a67d87e1bf0cb"><th class="cellrowborder" valign="top" width="28.749999999999996%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a4c1fdebe02ff493b9413aa4ec9292285"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a4c1fdebe02ff493b9413aa4ec9292285"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a4c1fdebe02ff493b9413aa4ec9292285"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.990000000000002%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a3ea9b21e8e71449ca544e922e2ee88e0"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a3ea9b21e8e71449ca544e922e2ee88e0"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a3ea9b21e8e71449ca544e922e2ee88e0"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="50.260000000000005%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a1a1b44107d074215ada725c58e2adddc"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a1a1b44107d074215ada725c58e2adddc"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a1a1b44107d074215ada725c58e2adddc"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1340111917480"><td class="cellrowborder" valign="top" width="28.749999999999996%" headers="mcps1.2.4.1.1 "><p id="p18402119114812"><a name="p18402119114812"></a><a name="p18402119114812"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="20.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p8402171912488"><a name="p8402171912488"></a><a name="p8402171912488"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.260000000000005%" headers="mcps1.2.4.1.3 "><p id="p84021219194817"><a name="p84021219194817"></a><a name="p84021219194817"></a>数据库对象id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_r72adef3de71946aeaa86c3b5aaa2d640"><td class="cellrowborder" valign="top" width="28.749999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a22e99361f77d468185ae91172e0a29b7"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a22e99361f77d468185ae91172e0a29b7"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a22e99361f77d468185ae91172e0a29b7"></a>extname</p>
</td>
<td class="cellrowborder" valign="top" width="20.990000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a1cd8b89abf854014acc0847785fbdce5"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a1cd8b89abf854014acc0847785fbdce5"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a1cd8b89abf854014acc0847785fbdce5"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="50.260000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a02b4e5edee164794825d659cfbff4525"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a02b4e5edee164794825d659cfbff4525"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a02b4e5edee164794825d659cfbff4525"></a>扩展名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_r420b0158e74e4f4e8250b10b2003bd23"><td class="cellrowborder" valign="top" width="28.749999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a3567c2d12c3e4403ae2af63bc380af45"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a3567c2d12c3e4403ae2af63bc380af45"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a3567c2d12c3e4403ae2af63bc380af45"></a>extowner</p>
</td>
<td class="cellrowborder" valign="top" width="20.990000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_ae70bbe7934aa48d884738354bb392b46"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_ae70bbe7934aa48d884738354bb392b46"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_ae70bbe7934aa48d884738354bb392b46"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.260000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_afb515e721cea4ad090d0826d0af5d161"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_afb515e721cea4ad090d0826d0af5d161"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_afb515e721cea4ad090d0826d0af5d161"></a>扩展的所有者。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_r5fff927123554782b4982d39288f0dd1"><td class="cellrowborder" valign="top" width="28.749999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_ad649ae2090e0440283cf5816e893473f"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_ad649ae2090e0440283cf5816e893473f"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_ad649ae2090e0440283cf5816e893473f"></a>extnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="20.990000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a68a55e511eb946ee9bd03858e18278b3"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a68a55e511eb946ee9bd03858e18278b3"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a68a55e511eb946ee9bd03858e18278b3"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.260000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a732a0ed6b1a84a1a990c7f86a3ed79c6"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a732a0ed6b1a84a1a990c7f86a3ed79c6"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a732a0ed6b1a84a1a990c7f86a3ed79c6"></a>扩展导出对象的名称空间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_rd8ad8e0b0fd044968f67338c5db19d40"><td class="cellrowborder" valign="top" width="28.749999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a2a1461dd22304506aa11263c011e3e4f"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a2a1461dd22304506aa11263c011e3e4f"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a2a1461dd22304506aa11263c011e3e4f"></a>extrelocatable</p>
</td>
<td class="cellrowborder" valign="top" width="20.990000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a45aac99704c64c5fabd8a6f6de49c575"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a45aac99704c64c5fabd8a6f6de49c575"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a45aac99704c64c5fabd8a6f6de49c575"></a><span id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_text55927206277"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_text55927206277"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_text55927206277"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="50.260000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a8e937db9cbd14293b303b2d7b528f78b"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a8e937db9cbd14293b303b2d7b528f78b"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a8e937db9cbd14293b303b2d7b528f78b"></a>标识此扩展是否可迁移到其他名称空间，true表示允许。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_rc3479998f7034b0ba514c1415d900e21"><td class="cellrowborder" valign="top" width="28.749999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a50e4370b7280490dad1bf9fcbe04575a"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a50e4370b7280490dad1bf9fcbe04575a"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a50e4370b7280490dad1bf9fcbe04575a"></a>extversion</p>
</td>
<td class="cellrowborder" valign="top" width="20.990000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_accad7a10aad34cf4b5c64ed888d64613"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_accad7a10aad34cf4b5c64ed888d64613"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_accad7a10aad34cf4b5c64ed888d64613"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.260000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a4313fe96ade249f2b729e06950fb16e0"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a4313fe96ade249f2b729e06950fb16e0"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a4313fe96ade249f2b729e06950fb16e0"></a>扩展的版本号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_rfbc22c4386e643dfa2285bd2f124c66e"><td class="cellrowborder" valign="top" width="28.749999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a8141ecd054a4462498cd53a7f8784ba8"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a8141ecd054a4462498cd53a7f8784ba8"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a8141ecd054a4462498cd53a7f8784ba8"></a>extconfig</p>
</td>
<td class="cellrowborder" valign="top" width="20.990000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a8000cc98362f4be7ae561e6d755cd85c"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a8000cc98362f4be7ae561e6d755cd85c"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a8000cc98362f4be7ae561e6d755cd85c"></a>oid[]</p>
</td>
<td class="cellrowborder" valign="top" width="50.260000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a11c4bc0b45a34b3eb67920616a6681ae"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a11c4bc0b45a34b3eb67920616a6681ae"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a11c4bc0b45a34b3eb67920616a6681ae"></a>扩展的配置信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_r0ff94ddef3fb4a76a0ea291d0ccec215"><td class="cellrowborder" valign="top" width="28.749999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_af37191f95b614c4095030aaf2c878bf1"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_af37191f95b614c4095030aaf2c878bf1"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_af37191f95b614c4095030aaf2c878bf1"></a>extcondition</p>
</td>
<td class="cellrowborder" valign="top" width="20.990000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_af15351b7577440e496b73f2a3d790a71"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_af15351b7577440e496b73f2a3d790a71"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_af15351b7577440e496b73f2a3d790a71"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="50.260000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a55aa2b81b0834b7ba2b05d7e86614a60"><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a55aa2b81b0834b7ba2b05d7e86614a60"></a><a name="zh-cn_topic_0283137700_zh-cn_topic_0237122288_zh-cn_topic_0059778375_a55aa2b81b0834b7ba2b05d7e86614a60"></a>扩展配置信息的过滤条件。</p>
</td>
</tr>
</tbody>
</table>

