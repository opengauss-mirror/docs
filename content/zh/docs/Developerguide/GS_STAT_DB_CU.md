# GS\_STAT\_DB\_CU<a name="ZH-CN_TOPIC_0242385931"></a>

GS\_STAT\_DB\_CU视图查询openGauss各个节点，每个数据库的CU命中情况。可以通过gs\_stat\_reset\(\)进行清零。

**表 1**  GS\_STAT\_DB\_CU字段

<a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_t71fe9f7e52324cbbbb86258d87d808a4"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_rd24a097d5d5b47b083ea5fa9bd277d84"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_ab0d6da7e4aeb4674a476f9cb5dba34ad"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_ab0d6da7e4aeb4674a476f9cb5dba34ad"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_ab0d6da7e4aeb4674a476f9cb5dba34ad"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_adc17197525e3424c811593fb20bec9cd"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_adc17197525e3424c811593fb20bec9cd"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_adc17197525e3424c811593fb20bec9cd"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_aaf5eeb588f804817b55fd9261d040c98"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_aaf5eeb588f804817b55fd9261d040c98"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_aaf5eeb588f804817b55fd9261d040c98"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_r2c24132c49f246449c926deeb71cd723"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a0b96da27ed144f9bb1538d4d54e6c91b"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a0b96da27ed144f9bb1538d4d54e6c91b"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a0b96da27ed144f9bb1538d4d54e6c91b"></a>node_name1</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_afe6660d76dd44405a3c556a6860f00b4"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_afe6660d76dd44405a3c556a6860f00b4"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_afe6660d76dd44405a3c556a6860f00b4"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a682264f55000477b89182c1322e712aa"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a682264f55000477b89182c1322e712aa"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a682264f55000477b89182c1322e712aa"></a>节点名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_r2f10451c69944e69ab0ee72b478117a2"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_ad4f847f9279649c6a89af55b3da56dde"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_ad4f847f9279649c6a89af55b3da56dde"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_ad4f847f9279649c6a89af55b3da56dde"></a>db_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a53e4cbc6a6df4e70810da0c76c25b833"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a53e4cbc6a6df4e70810da0c76c25b833"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a53e4cbc6a6df4e70810da0c76c25b833"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_afdef1e5ea6e64bea82d3a61eeaee6daa"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_afdef1e5ea6e64bea82d3a61eeaee6daa"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_afdef1e5ea6e64bea82d3a61eeaee6daa"></a>数据库名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_ra17496a2b95c4678accd5c89487a178f"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_acdb5e8ca14c54c4591fcfcf5076d0092"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_acdb5e8ca14c54c4591fcfcf5076d0092"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_acdb5e8ca14c54c4591fcfcf5076d0092"></a>mem_hit</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_adc866861ddf74b6b818dea82678d9bb8"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_adc866861ddf74b6b818dea82678d9bb8"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_adc866861ddf74b6b818dea82678d9bb8"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_zh-cn_topic_0058966104_p608297721241"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_zh-cn_topic_0058966104_p608297721241"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_zh-cn_topic_0058966104_p608297721241"></a>内存命中次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_rf0b9afcd3f9f40dabd0a5b50667e48e3"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a38a3a35c25fd473780c0d65169a1be07"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a38a3a35c25fd473780c0d65169a1be07"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a38a3a35c25fd473780c0d65169a1be07"></a>hdd_sync_read</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a0d0f487ced204ea18611c9b8cb2d31a2"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a0d0f487ced204ea18611c9b8cb2d31a2"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a0d0f487ced204ea18611c9b8cb2d31a2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a9c638dedf2804f23a3a72be4b6fedb5a"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a9c638dedf2804f23a3a72be4b6fedb5a"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a9c638dedf2804f23a3a72be4b6fedb5a"></a>硬盘同步读次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_rb8d9bd4f13e2425a84db2637e8d59ba6"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a19304b7713024b3abd7b40bf6e5b1289"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a19304b7713024b3abd7b40bf6e5b1289"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a19304b7713024b3abd7b40bf6e5b1289"></a>hdd_asyn_read</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a8dd8fddf3cb74086ba4727f58b3cc97d"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a8dd8fddf3cb74086ba4727f58b3cc97d"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_a8dd8fddf3cb74086ba4727f58b3cc97d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122404_zh-cn_topic_0059778343_zh-cn_topic_0058966104_p217718382140"><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_zh-cn_topic_0058966104_p217718382140"></a><a name="zh-cn_topic_0237122404_zh-cn_topic_0059778343_zh-cn_topic_0058966104_p217718382140"></a>硬盘异步读次数。</p>
</td>
</tr>
</tbody>
</table>

