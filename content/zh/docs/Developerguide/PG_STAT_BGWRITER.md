# PG\_STAT\_BGWRITER<a name="ZH-CN_TOPIC_0289899919"></a>

PG\_STAT\_BGWRITER视图显示关于后端写进程活动的统计信息。

**表 1**  PG\_STAT\_BGWRITER字段

<a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_t619e098606e94d85b5669a11fe06fdb9"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_r690b708ab86e48289c9bebea0e01b399"><th class="cellrowborder" valign="top" width="25.85%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ae7560c81317c4d12b4a63d110c05c164"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ae7560c81317c4d12b4a63d110c05c164"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ae7560c81317c4d12b4a63d110c05c164"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="31.11%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a4b5ec0e739e240588831daa0c522f7ca"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a4b5ec0e739e240588831daa0c522f7ca"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a4b5ec0e739e240588831daa0c522f7ca"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="43.04%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a7694fc47368d4833961d3dc31e2a1601"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a7694fc47368d4833961d3dc31e2a1601"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a7694fc47368d4833961d3dc31e2a1601"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ra61693c8b3914a3c9843fdc34db04156"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ac6a62cf0724c4372ab22463861d9a9e3"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ac6a62cf0724c4372ab22463861d9a9e3"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ac6a62cf0724c4372ab22463861d9a9e3"></a>checkpoints_timed</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_aff2ab70421ec4abbb8b6b5f817559682"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_aff2ab70421ec4abbb8b6b5f817559682"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_aff2ab70421ec4abbb8b6b5f817559682"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a35ba07f50e6a4d46b693d450067f6add"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a35ba07f50e6a4d46b693d450067f6add"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a35ba07f50e6a4d46b693d450067f6add"></a>执行的定期检查点数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_rb9747653fdaa4e15a305be973b4cc797"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a9aaae822ec2a4cf2bb1a83f2901b0604"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a9aaae822ec2a4cf2bb1a83f2901b0604"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a9aaae822ec2a4cf2bb1a83f2901b0604"></a>checkpoints_req</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_af998d36f8593418296b135af111d34c9"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_af998d36f8593418296b135af111d34c9"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_af998d36f8593418296b135af111d34c9"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a8a8df2bc1b5f421db264ef7d94452d08"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a8a8df2bc1b5f421db264ef7d94452d08"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a8a8df2bc1b5f421db264ef7d94452d08"></a>执行的需求检查点数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_r778a08f9f7ba42879a53bea005cd59e9"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a3b071081fc3a49d1922376be184e3dd5"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a3b071081fc3a49d1922376be184e3dd5"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a3b071081fc3a49d1922376be184e3dd5"></a>checkpoint_write_time</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a04991186dfa3436e890bda8dc7e3b222"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a04991186dfa3436e890bda8dc7e3b222"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a04991186dfa3436e890bda8dc7e3b222"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a751aef42b02c47adadeca136e0bb3a8a"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a751aef42b02c47adadeca136e0bb3a8a"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a751aef42b02c47adadeca136e0bb3a8a"></a>花费在检查点处理部分的时间总量，其中文件被写入到磁盘，以毫秒为单位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_r19f886b2cec84afa877b5faae58c2368"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ad510a9448a8140288c89f4e1e880d790"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ad510a9448a8140288c89f4e1e880d790"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ad510a9448a8140288c89f4e1e880d790"></a>checkpoint_sync_time</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a253bae77a1874ec3909379165c5d3e47"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a253bae77a1874ec3909379165c5d3e47"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a253bae77a1874ec3909379165c5d3e47"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ad323ccc6058b4c29a8e586ecaf58117e"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ad323ccc6058b4c29a8e586ecaf58117e"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ad323ccc6058b4c29a8e586ecaf58117e"></a>花费在检查点处理部分的时间总量，其中文件被同步到磁盘，以毫秒为单位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_reee03f19789f47eca1a3dc85e3031c00"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ac1f10f5475d444cc8bb607f5d1cf8f74"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ac1f10f5475d444cc8bb607f5d1cf8f74"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_ac1f10f5475d444cc8bb607f5d1cf8f74"></a>buffers_checkpoint</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a9182983e34d74a8ba6a718d57af05f6b"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a9182983e34d74a8ba6a718d57af05f6b"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a9182983e34d74a8ba6a718d57af05f6b"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a3c13112e9e1143a6ba87ad2d79e9a100"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a3c13112e9e1143a6ba87ad2d79e9a100"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a3c13112e9e1143a6ba87ad2d79e9a100"></a>检查点写缓冲区数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_r9d50dadc6fb74dcfb8cf831486bbe323"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a642457fe020e4d00bfa36c935158a027"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a642457fe020e4d00bfa36c935158a027"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a642457fe020e4d00bfa36c935158a027"></a>buffers_clean</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a4f3cb4299b7641b1a51cce69022eef90"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a4f3cb4299b7641b1a51cce69022eef90"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a4f3cb4299b7641b1a51cce69022eef90"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a04945cce3ca1458f89e17618ce3ac5de"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a04945cce3ca1458f89e17618ce3ac5de"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a04945cce3ca1458f89e17618ce3ac5de"></a>后端写进程写缓冲区数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_r2eb5cfe637844b2d8bf62b6901058e56"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a5ccff5d13b944708900ce53b04a7d523"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a5ccff5d13b944708900ce53b04a7d523"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a5ccff5d13b944708900ce53b04a7d523"></a>maxwritten_clean</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_aa3534794416b45dfa532681e7753ec80"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_aa3534794416b45dfa532681e7753ec80"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_aa3534794416b45dfa532681e7753ec80"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a1b13eabfd6764d199feae40329c0c341"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a1b13eabfd6764d199feae40329c0c341"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a1b13eabfd6764d199feae40329c0c341"></a>后端写进程停止清理扫描时间数，因为它写了太多缓冲区。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_re20e1543f3a74c6e92ce749ad5a4e2d8"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a8d1217f0a04149da823fcb0bd181769c"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a8d1217f0a04149da823fcb0bd181769c"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a8d1217f0a04149da823fcb0bd181769c"></a>buffers_backend</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_af2c8bf67f1db4d7c9085e74ae0a50e13"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_af2c8bf67f1db4d7c9085e74ae0a50e13"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_af2c8bf67f1db4d7c9085e74ae0a50e13"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_aa08b4e3b70804f47b47dacd2fc959428"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_aa08b4e3b70804f47b47dacd2fc959428"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_aa08b4e3b70804f47b47dacd2fc959428"></a>通过后端直接写缓冲区数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_r9f5842aa9eab45669c1bddcac6055040"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a8efd215ea0c44041a41ff31ef27dd0bf"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a8efd215ea0c44041a41ff31ef27dd0bf"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a8efd215ea0c44041a41ff31ef27dd0bf"></a>buffers_backend_fsync</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a07c186bd1f1943489cee9b0c0cc9863c"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a07c186bd1f1943489cee9b0c0cc9863c"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a07c186bd1f1943489cee9b0c0cc9863c"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a76f3f146e5f94535a562ce9ff2628c73"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a76f3f146e5f94535a562ce9ff2628c73"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a76f3f146e5f94535a562ce9ff2628c73"></a>后端不得不执行自己的fsync调用的时间数（通常后端写进程处理这些即使后端确实自己写）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_rb37065bf6aed41119f3100c140f61754"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_adcc054c5c2f24ce8ba26ffd8095ddd9d"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_adcc054c5c2f24ce8ba26ffd8095ddd9d"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_adcc054c5c2f24ce8ba26ffd8095ddd9d"></a>buffers_alloc</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a05fa023371ca4598a2df39ed335e9515"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a05fa023371ca4598a2df39ed335e9515"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a05fa023371ca4598a2df39ed335e9515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_afab3676f8f7243cfa05a8e2bf2a4116b"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_afab3676f8f7243cfa05a8e2bf2a4116b"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_afab3676f8f7243cfa05a8e2bf2a4116b"></a>分配的缓冲区数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_rf99b98922df04d858218c5d120f87f63"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a7e6776d8838a457994bd7a35c887db79"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a7e6776d8838a457994bd7a35c887db79"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a7e6776d8838a457994bd7a35c887db79"></a>stats_reset</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a6454a15c6dac4a6980241cd41cb88f5b"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a6454a15c6dac4a6980241cd41cb88f5b"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a6454a15c6dac4a6980241cd41cb88f5b"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a45c17fa5f40e4ef79890cf3fba482ab4"><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a45c17fa5f40e4ef79890cf3fba482ab4"></a><a name="zh-cn_topic_0283136756_zh-cn_topic_0237122444_zh-cn_topic_0059778449_a45c17fa5f40e4ef79890cf3fba482ab4"></a>这些统计被重置的时间。</p>
</td>
</tr>
</tbody>
</table>
