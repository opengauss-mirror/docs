# PG\_STAT\_XACT\_USER\_FUNCTIONS<a name="ZH-CN_TOPIC_0289900002"></a>

PG\_STAT\_XACT\_USER\_FUNCTIONS视图包含每个函数的执行的统计信息。

**表 1**  PG\_STAT\_XACT\_USER\_FUNCTIONS字段

<a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_t6a88bc1a91e4489a8747b5d55e83155a"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_rfa0d54109d4044d1b3bcc286f7f0d253"><th class="cellrowborder" valign="top" width="21.9%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a14063df8677e49e69076a2423e6094bb"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a14063df8677e49e69076a2423e6094bb"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a14063df8677e49e69076a2423e6094bb"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="31.3%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_abc00cf85dc4c4011855c1d7ba04d781c"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_abc00cf85dc4c4011855c1d7ba04d781c"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_abc00cf85dc4c4011855c1d7ba04d781c"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="46.800000000000004%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_ad7b6d4033f0f4cb08171e62dc6c95846"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_ad7b6d4033f0f4cb08171e62dc6c95846"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_ad7b6d4033f0f4cb08171e62dc6c95846"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_r286a9dcba2b14ad08dbc6a8e36aef2a4"><td class="cellrowborder" valign="top" width="21.9%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a63dcb64653114d069b725300ccfa4543"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a63dcb64653114d069b725300ccfa4543"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a63dcb64653114d069b725300ccfa4543"></a>funcid</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_af622d91bd31b4f20918ee8173cf7cf83"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_af622d91bd31b4f20918ee8173cf7cf83"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_af622d91bd31b4f20918ee8173cf7cf83"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="46.800000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a2a6336fa9b0f4771aba3a76034c9ca99"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a2a6336fa9b0f4771aba3a76034c9ca99"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a2a6336fa9b0f4771aba3a76034c9ca99"></a>函数标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_r363e898070034e03a09aaf90a531fe99"><td class="cellrowborder" valign="top" width="21.9%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a7e43597241d147e4a5c2bcecc66b0ba0"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a7e43597241d147e4a5c2bcecc66b0ba0"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a7e43597241d147e4a5c2bcecc66b0ba0"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_ae8c3c583e55d4c60a10a4054def0e3a8"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_ae8c3c583e55d4c60a10a4054def0e3a8"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_ae8c3c583e55d4c60a10a4054def0e3a8"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="46.800000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_af6989b7188d94556b1c0cecef923609c"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_af6989b7188d94556b1c0cecef923609c"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_af6989b7188d94556b1c0cecef923609c"></a>模式的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_rd79cae91f3e84ffeb7e78c57fea644e4"><td class="cellrowborder" valign="top" width="21.9%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a1b57660cf90f46288b31d14e9484523a"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a1b57660cf90f46288b31d14e9484523a"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a1b57660cf90f46288b31d14e9484523a"></a>funcname</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a4a891acd7bff4dd3a4f4355073378bfc"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a4a891acd7bff4dd3a4f4355073378bfc"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a4a891acd7bff4dd3a4f4355073378bfc"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="46.800000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a11bec1439a3249eebbcc49935a386c35"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a11bec1439a3249eebbcc49935a386c35"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a11bec1439a3249eebbcc49935a386c35"></a>函数名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_r2902b1c4d47c483482a0c04de0e3a27a"><td class="cellrowborder" valign="top" width="21.9%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_aadb2bd362e6340ec98c77f233fbf17ec"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_aadb2bd362e6340ec98c77f233fbf17ec"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_aadb2bd362e6340ec98c77f233fbf17ec"></a>calls</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_ae51c3665af824ed7838a1ccaedce2892"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_ae51c3665af824ed7838a1ccaedce2892"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_ae51c3665af824ed7838a1ccaedce2892"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="46.800000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a435371d0d9464eb6aa0b09854fa57ebb"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a435371d0d9464eb6aa0b09854fa57ebb"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a435371d0d9464eb6aa0b09854fa57ebb"></a>函数被调用的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_rd8bfb4b3db0846f68997116363db87f1"><td class="cellrowborder" valign="top" width="21.9%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a9dc438714d42446f869f1391506f57b3"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a9dc438714d42446f869f1391506f57b3"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a9dc438714d42446f869f1391506f57b3"></a>total_time</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a02180831ea374ab7b7551accd75e97cd"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a02180831ea374ab7b7551accd75e97cd"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a02180831ea374ab7b7551accd75e97cd"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="46.800000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a8b0c11da46ea450d8f791d81f9a0c144"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a8b0c11da46ea450d8f791d81f9a0c144"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a8b0c11da46ea450d8f791d81f9a0c144"></a>函数的总执行时长。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_r95a3c00f5f77421e8872891a99797817"><td class="cellrowborder" valign="top" width="21.9%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a969e73a475a744519c44c811d3cfedfd"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a969e73a475a744519c44c811d3cfedfd"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a969e73a475a744519c44c811d3cfedfd"></a>self_time</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a9d3691b7846b468191277e4d2ceee713"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a9d3691b7846b468191277e4d2ceee713"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a9d3691b7846b468191277e4d2ceee713"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="46.800000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a65babbdb6cc541aa9f3d59b725350174"><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a65babbdb6cc541aa9f3d59b725350174"></a><a name="zh-cn_topic_0283137715_zh-cn_topic_0237122455_zh-cn_topic_0059777719_a65babbdb6cc541aa9f3d59b725350174"></a>当前线程调用函数的总的时长。</p>
</td>
</tr>
</tbody>
</table>

