# PG\_OPCLASS<a name="ZH-CN_TOPIC_0289899823"></a>

PG\_OPCLASS系统表定义索引访问方法操作符类。

每个操作符类为一种特定数据类型和一种特定索引访问方法定义索引字段的语义。一个操作符类本质上指定一个特定的操作符族适用于一个特定的可索引的字段数据类型。索引的字段实际可用的族中的操作符集是接受字段的数据类型作为它们的左边的输入的那个。

**表 1**  PG\_OPCLASS字段

<a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_t92cf0144a9404fe7808609f499d5a37d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_raaab4c385d6d4091a410867e38f742d9"><th class="cellrowborder" valign="top" width="18.23%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a0e7e4255bba649ee93e9648679bdf603"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a0e7e4255bba649ee93e9648679bdf603"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a0e7e4255bba649ee93e9648679bdf603"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="11.65%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_afd9e0a02b0b4426fa89b3a59515bb108"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_afd9e0a02b0b4426fa89b3a59515bb108"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_afd9e0a02b0b4426fa89b3a59515bb108"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="28.01%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aedb49d9bea7c483cacb5c1629cd4ba84"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aedb49d9bea7c483cacb5c1629cd4ba84"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aedb49d9bea7c483cacb5c1629cd4ba84"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="42.11%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_abd5eeadd3fe84b06818a8619e95dcf4e"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_abd5eeadd3fe84b06818a8619e95dcf4e"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_abd5eeadd3fe84b06818a8619e95dcf4e"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_re9e8e3bab3e94db883ff669df880dbee"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af61910c242fd49ddba78cccf9bf1aaf9"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af61910c242fd49ddba78cccf9bf1aaf9"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af61910c242fd49ddba78cccf9bf1aaf9"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="11.65%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a5a51e37d0fb54aff8f8f9ade7cfda732"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a5a51e37d0fb54aff8f8f9ade7cfda732"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a5a51e37d0fb54aff8f8f9ade7cfda732"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a836948524eba45309877d1b9465486b1"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a836948524eba45309877d1b9465486b1"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a836948524eba45309877d1b9465486b1"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aff3706ce0dc5449ca611422821b421e3"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aff3706ce0dc5449ca611422821b421e3"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aff3706ce0dc5449ca611422821b421e3"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_r773157059f7f47c5a153e7ee7ba11433"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aac8faa7612fe479c860d5b81c559fe53"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aac8faa7612fe479c860d5b81c559fe53"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aac8faa7612fe479c860d5b81c559fe53"></a>opcmethod</p>
</td>
<td class="cellrowborder" valign="top" width="11.65%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a1774eb4b9211487d93e2d5343da18168"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a1774eb4b9211487d93e2d5343da18168"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a1774eb4b9211487d93e2d5343da18168"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ab82b3b0ce56642df93be0fe1016b58d9"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ab82b3b0ce56642df93be0fe1016b58d9"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ab82b3b0ce56642df93be0fe1016b58d9"></a><a href="PG_AM.md">PG_AM</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a02267d13c5d041319b5a99a291ea4ff7"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a02267d13c5d041319b5a99a291ea4ff7"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a02267d13c5d041319b5a99a291ea4ff7"></a>操作符类所服务的索引访问方法。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_r3bcc731c121941ae85eb524cdc41cf04"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a28882251942947bbb6826ba117074625"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a28882251942947bbb6826ba117074625"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a28882251942947bbb6826ba117074625"></a>opcname</p>
</td>
<td class="cellrowborder" valign="top" width="11.65%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a18434e3011bd475dba387565102f2d4a"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a18434e3011bd475dba387565102f2d4a"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a18434e3011bd475dba387565102f2d4a"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a38e329a5555344f188fd23aa18c15596"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a38e329a5555344f188fd23aa18c15596"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a38e329a5555344f188fd23aa18c15596"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a4c0768f37cc54feeac93d8c3e164d005"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a4c0768f37cc54feeac93d8c3e164d005"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a4c0768f37cc54feeac93d8c3e164d005"></a>这个操作符类的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_r540cfd2a968d4034b22b4322102699f2"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ab3be2f1c92194452b634c0cec9a71a6f"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ab3be2f1c92194452b634c0cec9a71a6f"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ab3be2f1c92194452b634c0cec9a71a6f"></a>opcnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="11.65%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a2853a6b86e02478c9bc2cf1ef8310e4a"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a2853a6b86e02478c9bc2cf1ef8310e4a"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a2853a6b86e02478c9bc2cf1ef8310e4a"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af2e90e5e388e4ce7b7a7ee7175285008"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af2e90e5e388e4ce7b7a7ee7175285008"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af2e90e5e388e4ce7b7a7ee7175285008"></a><a href="PG_NAMESPACE.md">PG_NAMESPACE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a632390697ef5453a802241eaa109b5e9"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a632390697ef5453a802241eaa109b5e9"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a632390697ef5453a802241eaa109b5e9"></a>这个操作符类的名称空间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_rcaceb3b6bf444198973f877e9fd750cd"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ad23feab3680b48b1b43da305b6a3621c"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ad23feab3680b48b1b43da305b6a3621c"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ad23feab3680b48b1b43da305b6a3621c"></a>opcowner</p>
</td>
<td class="cellrowborder" valign="top" width="11.65%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af06a0fcae0d5419ca258c08e849e5658"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af06a0fcae0d5419ca258c08e849e5658"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af06a0fcae0d5419ca258c08e849e5658"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a9ff4ce0b2a1a4f958eb64799bb7c3987"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a9ff4ce0b2a1a4f958eb64799bb7c3987"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a9ff4ce0b2a1a4f958eb64799bb7c3987"></a><a href="PG_AUTHID.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af1f190aa4a3e4b5ea0a64ebee127c0b5"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af1f190aa4a3e4b5ea0a64ebee127c0b5"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_af1f190aa4a3e4b5ea0a64ebee127c0b5"></a>操作符类属主。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_r1b2c24e1e7da4f1494e0f07ff109a801"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a306e3a8991c44a289a1f1638c9e434ba"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a306e3a8991c44a289a1f1638c9e434ba"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a306e3a8991c44a289a1f1638c9e434ba"></a>opcfamily</p>
</td>
<td class="cellrowborder" valign="top" width="11.65%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a6304a6ed21aa4c78a9898335fe9d84fe"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a6304a6ed21aa4c78a9898335fe9d84fe"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a6304a6ed21aa4c78a9898335fe9d84fe"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aad980755a0564ca1a799cfd22f66ea42"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aad980755a0564ca1a799cfd22f66ea42"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aad980755a0564ca1a799cfd22f66ea42"></a><a href="PG_OPFAMILY.md">PG_OPFAMILY</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a39aa0a51d99c48aeaca4668adb5a1539"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a39aa0a51d99c48aeaca4668adb5a1539"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a39aa0a51d99c48aeaca4668adb5a1539"></a>包含该操作符类的操作符族。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_r342ba688a3ae469c8538a59007061129"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ad94d7c4181184539a58ee4a51cea0bf5"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ad94d7c4181184539a58ee4a51cea0bf5"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_ad94d7c4181184539a58ee4a51cea0bf5"></a>opcintype</p>
</td>
<td class="cellrowborder" valign="top" width="11.65%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a2d76fc099b3840a4abc845bcc10fa77e"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a2d76fc099b3840a4abc845bcc10fa77e"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a2d76fc099b3840a4abc845bcc10fa77e"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a469deb1ef8a743aaac95a4b276d6bd0e"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a469deb1ef8a743aaac95a4b276d6bd0e"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a469deb1ef8a743aaac95a4b276d6bd0e"></a><a href="PG_TYPE.md">PG_TYPE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a6d628e62870347c797459d5efdbeeafc"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a6d628e62870347c797459d5efdbeeafc"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a6d628e62870347c797459d5efdbeeafc"></a>操作符类索引的数据类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_r8bee9c24d5224c2ba2530e9c661ee36a"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aadafecccba424aa284c070c193512675"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aadafecccba424aa284c070c193512675"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_aadafecccba424aa284c070c193512675"></a>opcdefault</p>
</td>
<td class="cellrowborder" valign="top" width="11.65%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a2e224e6b698c42dab4717ff79b20225a"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a2e224e6b698c42dab4717ff79b20225a"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a2e224e6b698c42dab4717ff79b20225a"></a><span id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_text0762104612719"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_text0762104612719"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_text0762104612719"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a17a28502359b4da887f6854d614bd829"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a17a28502359b4da887f6854d614bd829"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a17a28502359b4da887f6854d614bd829"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a7a021d769ece4932ae602a8f2a271d36"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a7a021d769ece4932ae602a8f2a271d36"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a7a021d769ece4932ae602a8f2a271d36"></a>如果操作符类是opcintype的缺省，则为真。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_r311b1b1a23e943ecaffb3fdeadfaf97f"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a643c1b3a69e84be39c132c76445ab688"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a643c1b3a69e84be39c132c76445ab688"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a643c1b3a69e84be39c132c76445ab688"></a>opckeytype</p>
</td>
<td class="cellrowborder" valign="top" width="11.65%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a0e5a8bf0e5ab45ad9d8fa8fa33a34ff1"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a0e5a8bf0e5ab45ad9d8fa8fa33a34ff1"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a0e5a8bf0e5ab45ad9d8fa8fa33a34ff1"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a4e66ba7baa81423b911ac1f48e61236a"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a4e66ba7baa81423b911ac1f48e61236a"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a4e66ba7baa81423b911ac1f48e61236a"></a><a href="PG_TYPE.md">PG_TYPE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a8efbd0574c0f4b36a9e444d93d1ba2b7"><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a8efbd0574c0f4b36a9e444d93d1ba2b7"></a><a name="zh-cn_topic_0283136567_zh-cn_topic_0237122303_zh-cn_topic_0059777477_a8efbd0574c0f4b36a9e444d93d1ba2b7"></a>索引数据的类型，如果和opcintype相同则为零。</p>
</td>
</tr>
</tbody>
</table>

一个操作符类的opcmethod必须匹配包含它的操作符族的opfmethod。

