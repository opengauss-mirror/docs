# PG\_THREAD\_WAIT\_STATUS<a name="ZH-CN_TOPIC_0289900410"></a>

通过PG\_THREAD\_WAIT\_STATUS视图可以检测当前实例中工作线程（backend thread）以及辅助线程（auxiliary thread）的阻塞等待情况。

**表 1**  PG\_THREAD\_WAIT\_STATUS字段

<a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_t26afd18856464f7e98c359eedbe4e8fa"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_re7b3f21834b14c35b59601a5f7723425"><th class="cellrowborder" valign="top" width="19.040000000000003%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5b5ea05a04e242759f3cbd76791e4824"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5b5ea05a04e242759f3cbd76791e4824"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5b5ea05a04e242759f3cbd76791e4824"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.85%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a8428ba27690a4ce381165c5331db2924"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a8428ba27690a4ce381165c5331db2924"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a8428ba27690a4ce381165c5331db2924"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="68.11%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a185a4aa38d114f9993a4c1923383aa12"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a185a4aa38d114f9993a4c1923383aa12"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a185a4aa38d114f9993a4c1923383aa12"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r3b27d4bf670c40b480ec3356d27fa6e3"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad6aaae584f154650a48ae87546b6fc1a"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad6aaae584f154650a48ae87546b6fc1a"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad6aaae584f154650a48ae87546b6fc1a"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aef5fb46f4999400b9224863bca225359"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aef5fb46f4999400b9224863bca225359"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aef5fb46f4999400b9224863bca225359"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a37598aca924f4c4798955267dfe5c8a0"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a37598aca924f4c4798955267dfe5c8a0"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a37598aca924f4c4798955267dfe5c8a0"></a>当前节点的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r2d7d2ec48fa145bea1b8b51894a8ef26"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a248f3a2685cb4ffdaa888469889a0e3c"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a248f3a2685cb4ffdaa888469889a0e3c"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a248f3a2685cb4ffdaa888469889a0e3c"></a>db_name</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad0648a23316f47a9b4a434d00b346402"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad0648a23316f47a9b4a434d00b346402"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad0648a23316f47a9b4a434d00b346402"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa50c87fd25b84b7fa9e492c4c6b9cb7b"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa50c87fd25b84b7fa9e492c4c6b9cb7b"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa50c87fd25b84b7fa9e492c4c6b9cb7b"></a>数据库名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r428bcfd73cdb4f4da86067c7994f55a3"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a573d3c71d9764f1f8c5dcae60d483e17"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a573d3c71d9764f1f8c5dcae60d483e17"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a573d3c71d9764f1f8c5dcae60d483e17"></a>thread_name</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_abe6bccfda60d4683ad17a88ef388ea40"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_abe6bccfda60d4683ad17a88ef388ea40"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_abe6bccfda60d4683ad17a88ef388ea40"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a19c876bf481d4a08b810b2a7b601c1d3"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a19c876bf481d4a08b810b2a7b601c1d3"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a19c876bf481d4a08b810b2a7b601c1d3"></a>线程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_re03b066f458b45bcb76e5bddedad2e8d"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad427f117be504dc59c303881cde39f78"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad427f117be504dc59c303881cde39f78"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad427f117be504dc59c303881cde39f78"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa087b6e251e940d39d4ff37c246f65b4"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa087b6e251e940d39d4ff37c246f65b4"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa087b6e251e940d39d4ff37c246f65b4"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aaaeb6d31e1ae4e96adace6d84d9bf783"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aaaeb6d31e1ae4e96adace6d84d9bf783"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aaaeb6d31e1ae4e96adace6d84d9bf783"></a>查询ID，对应debug_query_id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r292aa93cc1b24fd49c8797b917067b16"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p905804111319"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p905804111319"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p905804111319"></a>tid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a50098163af69483aa0c036190dd95f6d"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a50098163af69483aa0c036190dd95f6d"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a50098163af69483aa0c036190dd95f6d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a60e57f9933704d23bb13cf6a47fb91f2"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a60e57f9933704d23bb13cf6a47fb91f2"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a60e57f9933704d23bb13cf6a47fb91f2"></a>当前线程的线程号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row174441452124013"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p114451526401"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p114451526401"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p114451526401"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15445135212406"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15445135212406"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15445135212406"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8445185210405"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8445185210405"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8445185210405"></a>当前会话ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r7ea594e116da49d7bf8100c59d998e5a"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad905b3d36f98481d8b8b4401c2d4c898"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad905b3d36f98481d8b8b4401c2d4c898"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad905b3d36f98481d8b8b4401c2d4c898"></a>lwtid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a466343d030fb402d9dc9e45657034cb0"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a466343d030fb402d9dc9e45657034cb0"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a466343d030fb402d9dc9e45657034cb0"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab7a57d3ebe7540c78177ee1a19acc0a2"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab7a57d3ebe7540c78177ee1a19acc0a2"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab7a57d3ebe7540c78177ee1a19acc0a2"></a>当前线程的轻量级线程号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row13466721114113"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1446714211418"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1446714211418"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1446714211418"></a>psessionid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p194671021134120"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p194671021134120"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p194671021134120"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6467102111413"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6467102111413"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6467102111413"></a>父会话ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_rd1948fc45b9646ecbbcdee8e782ecf1c"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa893addf11be41088c8b656c18400d5c"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa893addf11be41088c8b656c18400d5c"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa893addf11be41088c8b656c18400d5c"></a>tlevel</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5e01efdc30d242b9b3492cf49bf9e207"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5e01efdc30d242b9b3492cf49bf9e207"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5e01efdc30d242b9b3492cf49bf9e207"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab689a203cb934528b4dc05cd453e1fe9"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab689a203cb934528b4dc05cd453e1fe9"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab689a203cb934528b4dc05cd453e1fe9"></a>streaming线程的层级。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_rad57094915a549ee8e7f413d7b3d437f"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab629ba485dad4d2e9eb83250bc182954"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab629ba485dad4d2e9eb83250bc182954"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab629ba485dad4d2e9eb83250bc182954"></a>smpid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a99dde1b00876405e8def8a9275dd318b"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a99dde1b00876405e8def8a9275dd318b"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a99dde1b00876405e8def8a9275dd318b"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a040b71d1c7844773a823d99f60517dfc"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a040b71d1c7844773a823d99f60517dfc"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a040b71d1c7844773a823d99f60517dfc"></a>并行线程的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r25231ac8533540b09d77a31f1a99428c"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a49b8eca695914c58910c81f0f2ca202e"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a49b8eca695914c58910c81f0f2ca202e"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a49b8eca695914c58910c81f0f2ca202e"></a>wait_status</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a7e7f7bf727ee4d5dbfa0c2e64098f6a7"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a7e7f7bf727ee4d5dbfa0c2e64098f6a7"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a7e7f7bf727ee4d5dbfa0c2e64098f6a7"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_abeb449d97d7348928dd5c140507e3f3a"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_abeb449d97d7348928dd5c140507e3f3a"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_abeb449d97d7348928dd5c140507e3f3a"></a>当前线程的等待状态。等待状态的详细信息请参见<a href="#zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_t794f802302c24514a5db22d51eabacc4">表2</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row10717192619111"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p771742617112"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p771742617112"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p771742617112"></a>wait_event</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17191626718"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17191626718"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17191626718"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p971918266112"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p971918266112"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p971918266112"></a>如果wait_status是acquire lock、acquire lwlock、wait io三种类型，此列描述具体的锁、轻量级锁、IO的信息。否则是空。</p>
</td>
</tr>
<tr id="row1715011135270"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="p13865024132615"><a name="p13865024132615"></a><a name="p13865024132615"></a>locktag</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="p6865162432618"><a name="p6865162432618"></a><a name="p6865162432618"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="p286522418269"><a name="p286522418269"></a><a name="p286522418269"></a>当前线程正在等待锁的信息。</p>
</td>
</tr>
<tr id="row49192582716"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="p1956941432718"><a name="p1956941432718"></a><a name="p1956941432718"></a>lockmode</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="p15570141442711"><a name="p15570141442711"></a><a name="p15570141442711"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="p1857018144275"><a name="p1857018144275"></a><a name="p1857018144275"></a>当前线程正等待获取的锁模式。包含表级锁、行级锁、页级锁下的各模式。</p>
</td>
</tr>
<tr id="row59910181272"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="p1930373912270"><a name="p1930373912270"></a><a name="p1930373912270"></a>block_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="p123034393271"><a name="p123034393271"></a><a name="p123034393271"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="p7303173902713"><a name="p7303173902713"></a><a name="p7303173902713"></a>阻塞当前线程获取锁的会话标识。</p>
</td>
</tr>
<tr id="row1446025613139"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="p44611456161314"><a name="p44611456161314"></a><a name="p44611456161314"></a>global_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="p94611656111318"><a name="p94611656111318"></a><a name="p94611656111318"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="p184611568132"><a name="p184611568132"></a><a name="p184611568132"></a>全局会话ID。</p>
</td>
</tr>
</tbody>
</table>

wait\_status列的等待状态有以下状态。

**表 2**  等待状态列表

<a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_t794f802302c24514a5db22d51eabacc4"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r405f2c5462c14f30812f1b79f61de7d7"><th class="cellrowborder" valign="top" width="43.419999999999995%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a0b27c8381176409396fec09569729c21"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a0b27c8381176409396fec09569729c21"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a0b27c8381176409396fec09569729c21"></a>wait_status值</p>
</th>
<th class="cellrowborder" valign="top" width="56.58%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aeaf5ce86f70d4b0ca67b8cddb5286be5"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aeaf5ce86f70d4b0ca67b8cddb5286be5"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aeaf5ce86f70d4b0ca67b8cddb5286be5"></a>含义</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_rd90106da12df48f6bed182f13212b183"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5c9d9db22d7749daa33de691650c318c"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5c9d9db22d7749daa33de691650c318c"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5c9d9db22d7749daa33de691650c318c"></a>none</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_adc62684b5f3e420d9f357bdec5ccf50f"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_adc62684b5f3e420d9f357bdec5ccf50f"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_adc62684b5f3e420d9f357bdec5ccf50f"></a>没在等任意事件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ref9a8e005cbc4770bda5982739e14e4f"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p384008589204"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p384008589204"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p384008589204"></a>acquire lock</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p234618079204"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p234618079204"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p234618079204"></a>等待加锁，要么加锁成功，要么加锁等待超时。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1528317111316"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20283711135"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20283711135"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20283711135"></a>acquire lwlock</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p828318115314"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p828318115314"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p828318115314"></a>等待获取轻量级锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row108721517183113"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p168726179319"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p168726179319"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p168726179319"></a>wait io</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1287381703115"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1287381703115"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1287381703115"></a>等待IO完成。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r075dcc4647d64af6bb2405924b9ae737"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p148189029200"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p148189029200"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p148189029200"></a>wait cmd</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p594804239200"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p594804239200"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p594804239200"></a>等待完成读取网络通信包。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r909c4cf828f4408a8f6bcf98b2355432"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a76eb409a374e4619af37cc49ede604d2"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a76eb409a374e4619af37cc49ede604d2"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a76eb409a374e4619af37cc49ede604d2"></a>wait pooler get conn</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_af2d4ba78999846a7be8b466603253173"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_af2d4ba78999846a7be8b466603253173"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_af2d4ba78999846a7be8b466603253173"></a>等待pooler完成获取连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ra8cf453708f844459dae11dfea5cb351"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a445ee1f53901457aa084a6bfea9c38e2"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a445ee1f53901457aa084a6bfea9c38e2"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a445ee1f53901457aa084a6bfea9c38e2"></a>wait pooler abort conn</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa5f66579fce24d5a8c78102dca4490c9"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa5f66579fce24d5a8c78102dca4490c9"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa5f66579fce24d5a8c78102dca4490c9"></a>等待pooler完成终止连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r3fa6433037ae40fda5db3d26cbc799df"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ae5c5cf826a44497caa628dd7810e3a08"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ae5c5cf826a44497caa628dd7810e3a08"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ae5c5cf826a44497caa628dd7810e3a08"></a>wait pooler clean conn</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a77b4ee97927f4da896cf75d105b6a0f3"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a77b4ee97927f4da896cf75d105b6a0f3"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a77b4ee97927f4da896cf75d105b6a0f3"></a>等待pooler完成清理连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row19272759112010"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p92736598202"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p92736598202"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p92736598202"></a>pooler create conn:\[nodename\], total N</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2027355952016"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2027355952016"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2027355952016"></a>等待pooler建立连接，当前正在与nodename指定节点建立连接，且仍有N个连接等待建立。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ra759388ade024cdfa6b15242d2d47e55"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p496345899214"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p496345899214"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p496345899214"></a>get conn</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p609787349214"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p609787349214"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p609787349214"></a>获取到其他节点的连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ra839ca19971a424d84fb067fad724875"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5d69f9fd31ea4b81a6408e2f4499578b"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5d69f9fd31ea4b81a6408e2f4499578b"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5d69f9fd31ea4b81a6408e2f4499578b"></a>set cmd: [nodename]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5933bd1ab070408c845cf629a7d92764"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5933bd1ab070408c845cf629a7d92764"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5933bd1ab070408c845cf629a7d92764"></a>在连接上执行SET/RESET/TRANSACTION BLOCK LEVEL PARA SET/SESSION LEVEL PARA SET，当前正在nodename指定节点上执行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r083bfaf8d23c4aa9a86d77d9ff75a97a"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a4f6c708307664db7b59f4c020e94d18a"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a4f6c708307664db7b59f4c020e94d18a"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a4f6c708307664db7b59f4c020e94d18a"></a>cancel query</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a3dbbf28e41994adaa502b18f5830b5c6"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a3dbbf28e41994adaa502b18f5830b5c6"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a3dbbf28e41994adaa502b18f5830b5c6"></a>取消某连接上正在执行的SQL语句。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r8e6afabda27243f3a6e8cebcd3c1259f"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a15ac961dc2134c4e9828c185b0f2923f"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a15ac961dc2134c4e9828c185b0f2923f"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a15ac961dc2134c4e9828c185b0f2923f"></a>stop query</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ac9a1ff3e709048ecb07b7e280518a8f7"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ac9a1ff3e709048ecb07b7e280518a8f7"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ac9a1ff3e709048ecb07b7e280518a8f7"></a>停止某连接上正在执行的查询。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_rf0c9fecb5ae04bd6a504990d7673ed40"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a57ab22c9044a4760b6ad8b48ddd06864"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a57ab22c9044a4760b6ad8b48ddd06864"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a57ab22c9044a4760b6ad8b48ddd06864"></a>wait node: \[nodename\](plevel), total N, [phase]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><div class="p" id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p577573613228"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p577573613228"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p577573613228"></a>等待接收与某节点的连接上的数据，当前正在等待nodename节点plevel线程的数据，且仍有N个连接的数据待返回。如果状态包含phase信息，则可能的阶段状态有：<a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul21682503315"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul21682503315"></a><ul id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul21682503315"><li>begin：表示处于事务开始阶段。</li><li>commit：表示处于事务提交阶段。</li><li>rollback：表示处于事务回滚阶段。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r337d029fb3e5419b95cfc5526d023ced"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p482561592646"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p482561592646"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_zh-cn_topic_0058965581_p482561592646"></a>wait transaction sync: xid</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_afeb071f345c843d09e641fc81a86720c"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_afeb071f345c843d09e641fc81a86720c"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_afeb071f345c843d09e641fc81a86720c"></a>等待xid指定事务同步。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r4326340771544403a422f685f437ddcf"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_abedc2f63f82543cdb395596a4475ce05"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_abedc2f63f82543cdb395596a4475ce05"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_abedc2f63f82543cdb395596a4475ce05"></a>wait wal sync</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a6e45ea151ef14fe498557618f4a6281c"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a6e45ea151ef14fe498557618f4a6281c"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a6e45ea151ef14fe498557618f4a6281c"></a>等待特定LSN的wal log完成到备机的同步。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r768ae2800c79475db1034306571c9a5d"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a6bf3f76247444142bc65d6f2dbe18640"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a6bf3f76247444142bc65d6f2dbe18640"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a6bf3f76247444142bc65d6f2dbe18640"></a>wait data sync</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a9a929b6c0d1d475da2fe5db9fc3eaa70"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a9a929b6c0d1d475da2fe5db9fc3eaa70"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a9a929b6c0d1d475da2fe5db9fc3eaa70"></a>等待完成数据页到备机的同步。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r3b48feeb2f6a471fa39671f0cd562ce6"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ac50071fce62540ed8fa53c46d4449817"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ac50071fce62540ed8fa53c46d4449817"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ac50071fce62540ed8fa53c46d4449817"></a>wait data sync queue</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad8cd7b5bf0eb4f9faae734fe48fce47f"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad8cd7b5bf0eb4f9faae734fe48fce47f"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad8cd7b5bf0eb4f9faae734fe48fce47f"></a>等待把行存的数据页或列存的CU放入同步队列。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r1c781b3f817b42cfa00689cf266cada7"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad5c0e89fd8494ac1a2f8998f613bcde6"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad5c0e89fd8494ac1a2f8998f613bcde6"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ad5c0e89fd8494ac1a2f8998f613bcde6"></a>flush data: \[nodename\](plevel), [phase]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a82e8b0d491934d26b07c5a7a29571c57"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a82e8b0d491934d26b07c5a7a29571c57"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a82e8b0d491934d26b07c5a7a29571c57"></a>等待向网络中nodename指定节点的plevel对应线程发送数据。如果状态包含phase信息，则可能的阶段状态为wait quota，即当前通信流正在等待quota值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r7107c33f2b374b5a814348fa29859321"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa66d733115a948c082dc8a28e36af968"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa66d733115a948c082dc8a28e36af968"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_aa66d733115a948c082dc8a28e36af968"></a>stream get conn: [nodename], total N</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a861d2d6d2cdc4257b2e9ad6b5b8d7409"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a861d2d6d2cdc4257b2e9ad6b5b8d7409"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a861d2d6d2cdc4257b2e9ad6b5b8d7409"></a>初始化stream flow时，等待与nodename节点的consumer对象建立连接，且当前有N个待建连对象。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_r48e3d8cba57d4d4a9bdc5428d8f91619"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab183ab17f90f4d4d9b5a16b5167dada5"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab183ab17f90f4d4d9b5a16b5167dada5"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab183ab17f90f4d4d9b5a16b5167dada5"></a>wait producer \ready: [nodename\](plevel), total N</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a42fe9f0c6cb944ecbe29c1238035f52d"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a42fe9f0c6cb944ecbe29c1238035f52d"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a42fe9f0c6cb944ecbe29c1238035f52d"></a>初始化stream flow时，等待每个producer都准备好，当前正在等待nodename节点plevel对应线程的producer对象准备好，且仍有N个producer对象处于等待状态。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_rf183baced3904d95a4bdc9f975009dcf"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5284ae7a66bb4198b923c944465a8ca8"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5284ae7a66bb4198b923c944465a8ca8"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a5284ae7a66bb4198b923c944465a8ca8"></a>synchronize quit</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a03722ed898714814844dad8f7257f230"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a03722ed898714814844dad8f7257f230"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a03722ed898714814844dad8f7257f230"></a>stream plan结束时，等待stream线程组内的线程统一退出。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_rda3a4ec458594ba1a32c045bea045b79"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab8c886a1cb7240ddb099e697cf5602e7"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab8c886a1cb7240ddb099e697cf5602e7"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_ab8c886a1cb7240ddb099e697cf5602e7"></a>wait stream nodegroup destroy</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a85f97a0421f949b2ab05128250165d0d"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a85f97a0421f949b2ab05128250165d0d"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_a85f97a0421f949b2ab05128250165d0d"></a>stream plan结束时，等待销毁stream node group。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row14767655113316"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p137674550338"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p137674550338"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p137674550338"></a>wait active statement</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1176715558335"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1176715558335"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1176715558335"></a>等待作业执行，正在资源负载管控中。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row19650172892719"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1865082892710"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1865082892710"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1865082892710"></a>analyze: [relname], [phase]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2065072872717"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2065072872717"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2065072872717"></a>当前正在对表relname执行analyze。如果状态包含phase信息，则为autovacuum，表示是数据库自动开启AutoVacuum线程执行的analyze分析操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row13650172842711"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p165012816279"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p165012816279"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p165012816279"></a>vacuum: [relname], [phase]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10650132810279"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10650132810279"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10650132810279"></a>当前正在对表relname执行vacuum。如果状态包含phase信息，则为autovacuum，表示是数据库自动开启AutoVacuum线程执行的vacuum清理操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row8650828162716"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p26501328142718"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p26501328142718"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p26501328142718"></a>vacuum full: [relname]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19651102882715"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19651102882715"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19651102882715"></a>当前正在对表relname执行vacuum full清理。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row11651828112718"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p186511828192716"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p186511828192716"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p186511828192716"></a>create index</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p26511328192717"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p26511328192717"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p26511328192717"></a>当前正在创建索引。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row10651028172712"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16651162872712"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16651162872712"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16651162872712"></a>HashJoin - [ build hash | write file ]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><div class="p" id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p146511528162711"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p146511528162711"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p146511528162711"></a>当前是HashJoin算子，主要关注耗时的执行阶段。<a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul10627844133118"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul10627844133118"></a><ul id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul10627844133118"><li>build hash：表示当前HashJoin算子正在建立哈希表。</li><li>write file：表示当前HashJoin算子正在将数据写入磁盘。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row565102819272"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1651142818270"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1651142818270"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1651142818270"></a>HashAgg - [ build hash | write file ]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><div class="p" id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p165102818277"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p165102818277"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p165102818277"></a>当前是HashAgg算子，主要关注耗时的执行阶段。<a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul152447611329"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul152447611329"></a><ul id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul152447611329"><li>build hash：表示当前HashAgg算子正在建立哈希表。</li><li>write file：表示当前HashAgg算子正在将数据写入磁盘。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row186511028192718"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1465252814278"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1465252814278"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1465252814278"></a>HashSetop - [build hash | write file ]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><div class="p" id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16652192872711"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16652192872711"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16652192872711"></a>当前是HashSetop算子，主要关注耗时的执行阶段。<a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul5196135473214"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul5196135473214"></a><ul id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_ul5196135473214"><li>build hash：表示当前HashSetop算子正在建立哈希表。</li><li>write file：表示当前HashSetop算子正在将数据写入磁盘。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1865282815271"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16522280274"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16522280274"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16522280274"></a>Sort | Sort - [fetch tuple | write file]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19652182882719"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19652182882719"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19652182882719"></a>当前是Sort算子做排序，fetch tuple表示Sort算子正在获取tuple，write file表示Sort算子正在将数据写入磁盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1865242818275"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1965218287273"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1965218287273"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1965218287273"></a>Material | Material - write file</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16652112842710"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16652112842710"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16652112842710"></a>当前是Material算子，write file表示Material算子正在将数据写入磁盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row191001432102112"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p57723162117"><a name="zh-cn_topic_0283136724_p57723162117"></a><a name="zh-cn_topic_0283136724_p57723162117"></a>NestLoop</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p577203119214"><a name="zh-cn_topic_0283136724_p577203119214"></a><a name="zh-cn_topic_0283136724_p577203119214"></a>当前是NestLoop算子。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row2069011916224"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p2881111812229"><a name="zh-cn_topic_0283136724_p2881111812229"></a><a name="zh-cn_topic_0283136724_p2881111812229"></a>wait memory</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p14881718152212"><a name="zh-cn_topic_0283136724_p14881718152212"></a><a name="zh-cn_topic_0283136724_p14881718152212"></a>等待内存获取。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row206072217227"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p19682162016228"><a name="zh-cn_topic_0283136724_p19682162016228"></a><a name="zh-cn_topic_0283136724_p19682162016228"></a>wait sync consumer next step</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p26821420112219"><a name="zh-cn_topic_0283136724_p26821420112219"></a><a name="zh-cn_topic_0283136724_p26821420112219"></a>Stream算子等待消费者执行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row9483152492216"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p10661823122212"><a name="zh-cn_topic_0283136724_p10661823122212"></a><a name="zh-cn_topic_0283136724_p10661823122212"></a>wait sync producer next step</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p866113235224"><a name="zh-cn_topic_0283136724_p866113235224"></a><a name="zh-cn_topic_0283136724_p866113235224"></a>Stream算子等待生产者执行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row9483152492216"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p10661823122212"><a name="zh-cn_topic_0283136724_p10661823122212"></a><a name="zh-cn_topic_0283136724_p10661823122212"></a>wait reserve td</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p866113235224"><a name="zh-cn_topic_0283136724_p866113235224"></a><a name="zh-cn_topic_0283136724_p866113235224"></a>等待分配ustore事务槽。</p>
</td>
</tr>
</tbody>
</table>


当wait\_status为acquire lwlock、acquire lock或者wait io时，表示有等待事件。正在等待获取wait\_event列对应类型的轻量级锁、事务锁，或者正在进行IO。

其中，wait\_status值为acquire lwlock（轻量级锁）时对应的wait\_event等待事件类型与描述信息如下。（wait\_event为Extension时，表示此时的轻量级锁是动态分配的锁，未被监控。）

**表 3**  轻量级锁等待事件列表

<a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_table38811324183420"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row129991046153412"><th class="cellrowborder" valign="top" width="38.18%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0094712340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0094712340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0094712340"></a>wait_event类型</p>
</th>
<th class="cellrowborder" valign="top" width="61.82%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p120747143414"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p120747143414"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p120747143414"></a>类型描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row13247325123414"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p32473256340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p32473256340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p32473256340"></a>ShmemIndexLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1562515491617"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1562515491617"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1562515491617"></a>用于保护共享内存中的主索引哈希表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row20247102511341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6247425203415"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6247425203415"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6247425203415"></a>OidGenLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p13247182553420"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p13247182553420"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p13247182553420"></a>用于避免不同线程产生相同的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row112471525183418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15247182523415"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15247182523415"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15247182523415"></a>XidGenLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1224722514343"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1224722514343"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1224722514343"></a>用于避免两个事务获得相同的xid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row132471825203418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192473257349"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192473257349"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192473257349"></a>ProcArrayLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p42471825123413"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p42471825123413"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p42471825123413"></a>用于避免并发访问或修改ProcArray共享数组。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row92471325133410"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11247162563412"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11247162563412"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11247162563412"></a>SInvalReadLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15247172523410"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15247172523410"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15247172523410"></a>用于避免与清理失效消息并发执行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row15247182533419"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20247125103416"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20247125103416"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20247125103416"></a>SInvalWriteLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1924742583413"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1924742583413"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1924742583413"></a>用于避免与其它写失效消息、清理失效消息并发执行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row112471025103413"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p3249132512346"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p3249132512346"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p3249132512346"></a>WALInsertLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17249132519343"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17249132519343"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17249132519343"></a>用于避免与其它WAL插入操作并发执行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1524912563419"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11249142513340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11249142513340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11249142513340"></a>WALWriteLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p424952515340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p424952515340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p424952515340"></a>用于避免并发WAL写盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row19249192512343"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p724962523419"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p724962523419"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p724962523419"></a>ControlFileLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6249425153417"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6249425153417"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6249425153417"></a>用于避免pg_control文件的读写并发、写写并发。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row102495252348"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p102491725183419"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p102491725183419"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p102491725183419"></a>CheckpointLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9249132520343"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9249132520343"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9249132520343"></a>用于避免多个checkpoint并发执行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row7249025113410"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p724902514340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p724902514340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p724902514340"></a>CLogControlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192491625183411"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192491625183411"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192491625183411"></a>用于避免并发访问或者修改Clog控制数据结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row52499251345"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2249825133418"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2249825133418"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2249825133418"></a>SubtransControlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p52504256348"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p52504256348"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p52504256348"></a>用于避免并发访问或者修改子事务控制数据结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1325016258348"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p22501725203416"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p22501725203416"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p22501725203416"></a>MultiXactGenLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1125002503413"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1125002503413"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1125002503413"></a>用于串行分配唯一MultiXact id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row11250925163410"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5250325143414"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5250325143414"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5250325143414"></a>MultiXactOffsetControlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0250142543414"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0250142543414"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0250142543414"></a>用于避免对pg_multixact/offset的写写并发和读写并发。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row7250102514348"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p025042563412"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p025042563412"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p025042563412"></a>MultiXactMemberControlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p102506258340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p102506258340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p102506258340"></a>用于避免对pg_multixact/members的写写并发和读写并发。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row725032516341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0251925133410"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0251925133410"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0251925133410"></a>RelCacheInitLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6251325173411"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6251325173411"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6251325173411"></a>用于失效消息场景对init文件进行操作时加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row16251125153414"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19251525173411"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19251525173411"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19251525173411"></a>CheckpointerCommLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p625182515340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p625182515340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p625182515340"></a>用于向checkpointer发起文件刷盘请求场景，需要串行的向请求队列插入请求结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row19251172513344"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p92511254346"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p92511254346"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p92511254346"></a>TwoPhaseStateLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p32511025173418"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p32511025173418"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p32511025173418"></a>用于避免并发访问或者修改两阶段信息共享数组。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row16251132533416"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1025152593420"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1025152593420"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1025152593420"></a>TablespaceCreateLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325111254343"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325111254343"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325111254343"></a>用于确定tablespace是否已经存在。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row425114255349"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192510255349"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192510255349"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192510255349"></a>BtreeVacuumLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11251112510347"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11251112510347"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11251112510347"></a>用于防止vacuum清理B-tree中还在使用的页面。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1925113256346"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17251112517348"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17251112517348"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17251112517348"></a>AutovacuumLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14251192519348"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14251192519348"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14251192519348"></a>用于串行化访问autovacuum worker数组。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1125122563417"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p202521925143417"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p202521925143417"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p202521925143417"></a>AutovacuumScheduleLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7252152514345"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7252152514345"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7252152514345"></a>用于串行化分配需要vacuum的table。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row42521253341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p152521625123412"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p152521625123412"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p152521625123412"></a>AutoanalyzeLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1425217256347"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1425217256347"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1425217256347"></a>用于获取和释放允许执行Autoanalyze的任务资源。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row142521625153419"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17252102511342"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17252102511342"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17252102511342"></a>SyncScanLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18252125173413"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18252125173413"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18252125173413"></a>用于确定heap扫描时某个relfilenode的起始位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row102521225193410"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10252102513342"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10252102513342"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10252102513342"></a>NodeTableLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p169831520141619"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p169831520141619"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p169831520141619"></a>用于保护存放数据库节点信息的共享结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row202521225133412"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7252325153414"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7252325153414"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7252325153414"></a>PoolerLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16252425143410"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16252425143410"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16252425143410"></a>用于保证两个线程不会同时从连接池里取到相同的连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row125262512341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20252425133413"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20252425133413"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20252425133413"></a>RelationMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1525252553415"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1525252553415"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1525252553415"></a>用于等待更新系统表到存储位置之间映射的文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row225212254345"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12521625133420"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12521625133420"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12521625133420"></a>AsyncCtlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p925222519348"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p925222519348"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p925222519348"></a>用于避免并发访问或者修改共享通知状态。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row12252182517345"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p162527257347"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p162527257347"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p162527257347"></a>AsyncQueueLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p162528251342"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p162528251342"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p162528251342"></a>用于避免并发访问或者修改共享通知信息队列。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row11252525143415"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325242512347"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325242512347"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325242512347"></a>SerializableXactHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17252182513340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17252182513340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17252182513340"></a>用于避免对于可串行事务共享结构的写写并发和读写并发。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1925282512348"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2025222513410"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2025222513410"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2025222513410"></a>SerializableFinishedListLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16252142517344"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16252142517344"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16252142517344"></a>用于避免对于已完成可串行事务共享链表的写写并发和读写并发。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row20252182518346"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p02522025143416"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p02522025143416"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p02522025143416"></a>SerializablePredicateLockListLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192521325113417"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192521325113417"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p192521325113417"></a>用于保护对于可串行事务持有的锁链表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row5252142563411"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p425232513416"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p425232513416"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p425232513416"></a>OldSerXidLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1925215255340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1925215255340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1925215255340"></a>用于保护记录冲突可串行事务的结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row172521825203419"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17253625103411"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17253625103411"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17253625103411"></a>FileStatLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72537258342"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72537258342"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72537258342"></a>用于保护存储统计文件信息的数据结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row112531225103410"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1325342523412"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1325342523412"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1325342523412"></a>SyncRepLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p92536254343"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p92536254343"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p92536254343"></a>用于在主备复制时保护xlog同步信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row132538259341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p22532258340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p22532258340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p22532258340"></a>DataSyncRepLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2025312510349"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2025312510349"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2025312510349"></a>用于在主备复制时保护数据页同步信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row12253152517347"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0253152553415"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0253152553415"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0253152553415"></a>CStoreColspaceCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p574012310146"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p574012310146"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p574012310146"></a>用于保护列存表的CU空间分配。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row7253152513420"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9253225193412"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9253225193412"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9253225193412"></a>CStoreCUCacheSweepLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1979121021411"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1979121021411"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1979121021411"></a>用于列存CU Cache循环淘汰。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row9253172515342"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325322533411"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325322533411"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325322533411"></a>MetaCacheSweepLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p82543257341"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p82543257341"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p82543257341"></a>用于元数据循环淘汰。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row7254325113418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1325452543419"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1325452543419"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1325452543419"></a>ExtensionConnectorLibLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p22545253341"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p22545253341"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p22545253341"></a>用于初始化ODBC连接场景，在加载与卸载特定动态库时进行加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row525416251347"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p42544257340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p42544257340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p42544257340"></a>SearchServerLibLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2254125193420"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2254125193420"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2254125193420"></a>用于GPU加速场景初始化加载特定动态库时，对读文件操作进行加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row4255025113413"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72551225173418"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72551225173418"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72551225173418"></a>LsnXlogChkFileLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16255192510342"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16255192510342"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16255192510342"></a>用于串行更新特定结构中记录的主备机的xlog flush位置点。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1525572513347"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17255122514346"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17255122514346"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17255122514346"></a>ReplicationSlotAllocationLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18255825183414"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18255825183414"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18255825183414"></a>用于主备复制时保护主机端的流复制槽的分配。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1425562573418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5255142593419"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5255142593419"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5255142593419"></a>ReplicationSlotControlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1725532516341"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1725532516341"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1725532516341"></a>用于主备复制时避免并发更新流复制槽状态。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row32551425133412"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p62557259342"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p62557259342"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p62557259342"></a>ResourcePoolHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p52561425153411"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p52561425153411"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p52561425153411"></a>用于避免并发访问或者修改资源池哈希表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row525615254349"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2256102513343"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2256102513343"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2256102513343"></a>WorkloadStatHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10256172553414"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10256172553414"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10256172553414"></a>用于避免并发访问或者修改包含<span id="zh-cn_topic_0283136724_text71705215429"><a name="zh-cn_topic_0283136724_text71705215429"></a><a name="zh-cn_topic_0283136724_text71705215429"></a>数据库主节点</span>的SQL请求构成的哈希表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row15256192515346"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325619256340"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325619256340"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p325619256340"></a>WorkloadIoStatHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11256122517348"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11256122517348"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11256122517348"></a>用于避免并发访问或者修改用于统计当前<span id="zh-cn_topic_0283136724_text21271352204813"><a name="zh-cn_topic_0283136724_text21271352204813"></a><a name="zh-cn_topic_0283136724_text21271352204813"></a>数据库节点</span>的IO信息的哈希表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1325682512348"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14256202515342"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14256202515342"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14256202515342"></a>WorkloadCGroupHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6256182533413"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6256182533413"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6256182533413"></a>用于避免并发访问或者修改Cgroup信息构成的哈希表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row325614258345"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p125652519346"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p125652519346"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p125652519346"></a>OBSGetPathLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8256225173416"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8256225173416"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8256225173416"></a>用于避免对obs路径的写写并发和读写并发。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row2256142512349"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1025622563420"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1025622563420"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1025622563420"></a>WorkloadUserInfoLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p122566255349"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p122566255349"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p122566255349"></a>用于避免并发访问或修改负载管理的用户信息哈希表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row225682553412"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16258925173414"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16258925173414"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16258925173414"></a>WorkloadRecordLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11258825183411"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11258825183411"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11258825183411"></a>用于避免并发访问或修改在内存自适应管理时对<span id="zh-cn_topic_0283136724_text15334847428"><a name="zh-cn_topic_0283136724_text15334847428"></a><a name="zh-cn_topic_0283136724_text15334847428"></a>数据库主节点</span>收到请求构成的哈希表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row132581255344"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14258142543412"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14258142543412"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14258142543412"></a>WorkloadIOUtilLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1025832519341"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1025832519341"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1025832519341"></a>用于保护记录iostat，CPU等负载信息的结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row11258125193417"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p825812256349"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p825812256349"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p825812256349"></a>WorkloadNodeGroupLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p132581425183419"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p132581425183419"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p132581425183419"></a>用于避免并发访问或者修改内存中的nodegroup信息构成的哈希表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row16258142573415"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19258725163411"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19258725163411"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19258725163411"></a>JobShmemLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p925811250349"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p925811250349"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p925811250349"></a>用于定时任务功能中保护定时读取的全局变量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1025822511342"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12258122514343"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12258122514343"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12258122514343"></a>OBSRuntimeLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9258425123416"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9258425123416"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9258425123416"></a>用于获取环境变量，如GASSHOME。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row725818258341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19258625153412"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19258625153412"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19258625153412"></a>LLVMDumpIRLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1325817253342"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1325817253342"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1325817253342"></a>用于导出动态生成函数所对应的汇编语言。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1325812563418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p725942543419"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p725942543419"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p725942543419"></a>LLVMParseIRLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2259182513419"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2259182513419"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2259182513419"></a>用于在查询开始处从IR文件中编译并解析已写好的IR函数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1259172514341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p525917257341"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p525917257341"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p525917257341"></a>CriticalCacheBuildLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p625982519342"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p625982519342"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p625982519342"></a>用于从共享或者本地缓存初始化文件中加载cache的场景。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row6259162518343"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0259132533413"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0259132533413"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0259132533413"></a>WaitCountHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2259142516348"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2259142516348"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2259142516348"></a>用于保护用户语句计数功能场景中的共享结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1025922503419"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p926022553413"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p926022553413"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p926022553413"></a>BufMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12608252348"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12608252348"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12608252348"></a>用于保护对共享缓冲映射表的操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1026042511346"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6260125103411"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6260125103411"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6260125103411"></a>LockMgrLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p226013253342"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p226013253342"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p226013253342"></a>用于保护常规锁结构信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row13260725133411"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6260225163410"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6260225163410"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6260225163410"></a>PredicateLockMgrLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p526082512347"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p526082512347"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p526082512347"></a>用于保护可串行事务锁结构信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row3260725113416"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p426019253343"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p426019253343"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p426019253343"></a>OperatorRealTLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72602255347"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72602255347"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72602255347"></a>用于避免并发访问或者修改记录算子级实时数据的全局结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row326032518347"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1026010252347"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1026010252347"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1026010252347"></a>OperatorHistLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2260112516341"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2260112516341"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2260112516341"></a>用于避免并发访问或者修改记录算子级历史数据的全局结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1826072511341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72608255344"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72608255344"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p72608255344"></a>SessionRealTLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p152601725143410"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p152601725143410"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p152601725143410"></a>用于避免并发访问或者修改记录query级实时数据的全局结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row5260132513349"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20260825113415"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20260825113415"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20260825113415"></a>SessionHistLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5260225123412"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5260225123412"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5260225123412"></a>用于避免并发访问或者修改记录query级历史数据的全局结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row12601725153418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1326072543417"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1326072543417"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1326072543417"></a>CacheSlotMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9260425123418"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9260425123418"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p9260425123418"></a>用于保护CU Cache全局信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row172601125133414"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1126016250347"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1126016250347"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1126016250347"></a>BarrierLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1026016252345"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1026016252345"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1026016252345"></a>用于保证当前只有一个线程在创建Barrier。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row278133495114"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p57821343513"><a name="zh-cn_topic_0283136724_p57821343513"></a><a name="zh-cn_topic_0283136724_p57821343513"></a>dummyServerInfoCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p57821734135115"><a name="zh-cn_topic_0283136724_p57821734135115"></a><a name="zh-cn_topic_0283136724_p57821734135115"></a>用于保护缓存加速<span id="text179123126198"><a name="text179123126198"></a><a name="text179123126198"></a>openGauss</span>连接信息的全局哈希表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row1627312534524"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p4274353195211"><a name="zh-cn_topic_0283136724_p4274353195211"></a><a name="zh-cn_topic_0283136724_p4274353195211"></a>RPNumberLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p92741453175218"><a name="zh-cn_topic_0283136724_p92741453175218"></a><a name="zh-cn_topic_0283136724_p92741453175218"></a>用于加速<span id="text13185104617018"><a name="text13185104617018"></a><a name="text13185104617018"></a>openGauss</span>的数据库节点对正在执行计划的任务线程的计数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row115345178541"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p135341179541"><a name="zh-cn_topic_0283136724_p135341179541"></a><a name="zh-cn_topic_0283136724_p135341179541"></a>CBMParseXlogLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p75341617115410"><a name="zh-cn_topic_0283136724_p75341617115410"></a><a name="zh-cn_topic_0283136724_p75341617115410"></a>Cbm解析xlog时的保护锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row1419795555416"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p019875565411"><a name="zh-cn_topic_0283136724_p019875565411"></a><a name="zh-cn_topic_0283136724_p019875565411"></a>RelfilenodeReuseLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p151989558547"><a name="zh-cn_topic_0283136724_p151989558547"></a><a name="zh-cn_topic_0283136724_p151989558547"></a>避免错误地取消已重用的列属性文件的链接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row415513565817"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p16155155105810"><a name="zh-cn_topic_0283136724_p16155155105810"></a><a name="zh-cn_topic_0283136724_p16155155105810"></a>RcvWriteLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p19155165145816"><a name="zh-cn_topic_0283136724_p19155165145816"></a><a name="zh-cn_topic_0283136724_p19155165145816"></a>防止并发调用WalDataRcvWrite。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row75270512587"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p14528185115817"><a name="zh-cn_topic_0283136724_p14528185115817"></a><a name="zh-cn_topic_0283136724_p14528185115817"></a>PercentileLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1652817519585"><a name="zh-cn_topic_0283136724_p1652817519585"></a><a name="zh-cn_topic_0283136724_p1652817519585"></a>用于保护全局PercentileBuffer。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row642581816115"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p1542571810117"><a name="zh-cn_topic_0283136724_p1542571810117"></a><a name="zh-cn_topic_0283136724_p1542571810117"></a>CSNBufMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p174251118119"><a name="zh-cn_topic_0283136724_p174251118119"></a><a name="zh-cn_topic_0283136724_p174251118119"></a>保护csn页面。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row16334361129"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p133341162219"><a name="zh-cn_topic_0283136724_p133341162219"></a><a name="zh-cn_topic_0283136724_p133341162219"></a>UniqueSQLMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p15334961128"><a name="zh-cn_topic_0283136724_p15334961128"></a><a name="zh-cn_topic_0283136724_p15334961128"></a>用于保护uniquesql hash table。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row107301846161711"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p573013460178"><a name="zh-cn_topic_0283136724_p573013460178"></a><a name="zh-cn_topic_0283136724_p573013460178"></a>DelayDDLLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p273116463179"><a name="zh-cn_topic_0283136724_p273116463179"></a><a name="zh-cn_topic_0283136724_p273116463179"></a>防止并发ddl。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row0177126141920"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p15177132691912"><a name="zh-cn_topic_0283136724_p15177132691912"></a><a name="zh-cn_topic_0283136724_p15177132691912"></a>CLOG Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p9177102631917"><a name="zh-cn_topic_0283136724_p9177102631917"></a><a name="zh-cn_topic_0283136724_p9177102631917"></a>用于避免并发访问或者修改Clog控制数据结构。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row13521171316206"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p2521181342020"><a name="zh-cn_topic_0283136724_p2521181342020"></a><a name="zh-cn_topic_0283136724_p2521181342020"></a>Async Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p552291322017"><a name="zh-cn_topic_0283136724_p552291322017"></a><a name="zh-cn_topic_0283136724_p552291322017"></a>保护Async buffer。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row039155742010"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p1439115714203"><a name="zh-cn_topic_0283136724_p1439115714203"></a><a name="zh-cn_topic_0283136724_p1439115714203"></a>MultiXactOffset Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p133935792010"><a name="zh-cn_topic_0283136724_p133935792010"></a><a name="zh-cn_topic_0283136724_p133935792010"></a>保护MultiXact offet的slru buffer。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row8426111952114"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p9426111912211"><a name="zh-cn_topic_0283136724_p9426111912211"></a><a name="zh-cn_topic_0283136724_p9426111912211"></a>MultiXactMember Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p14426111922110"><a name="zh-cn_topic_0283136724_p14426111922110"></a><a name="zh-cn_topic_0283136724_p14426111922110"></a>保护MultiXact member的slrubuffer。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row16796316172217"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p3796201602217"><a name="zh-cn_topic_0283136724_p3796201602217"></a><a name="zh-cn_topic_0283136724_p3796201602217"></a>OldSerXid SLRU Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1879651619229"><a name="zh-cn_topic_0283136724_p1879651619229"></a><a name="zh-cn_topic_0283136724_p1879651619229"></a>保护old xids的slru buffer。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row13779172092517"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p12780122022517"><a name="zh-cn_topic_0283136724_p12780122022517"></a><a name="zh-cn_topic_0283136724_p12780122022517"></a>ReplicationSlotLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p10780192013252"><a name="zh-cn_topic_0283136724_p10780192013252"></a><a name="zh-cn_topic_0283136724_p10780192013252"></a>用于保护ReplicationSlot。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row61636273260"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p201634278269"><a name="zh-cn_topic_0283136724_p201634278269"></a><a name="zh-cn_topic_0283136724_p201634278269"></a>PGPROCLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p13163132713260"><a name="zh-cn_topic_0283136724_p13163132713260"></a><a name="zh-cn_topic_0283136724_p13163132713260"></a>用于保护pgproc。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row93871137270"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p1838711316274"><a name="zh-cn_topic_0283136724_p1838711316274"></a><a name="zh-cn_topic_0283136724_p1838711316274"></a>MetaCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p338711139273"><a name="zh-cn_topic_0283136724_p338711139273"></a><a name="zh-cn_topic_0283136724_p338711139273"></a>用于保护MetaCache。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row51712311285"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p181783132811"><a name="zh-cn_topic_0283136724_p181783132811"></a><a name="zh-cn_topic_0283136724_p181783132811"></a>DataCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p151763132817"><a name="zh-cn_topic_0283136724_p151763132817"></a><a name="zh-cn_topic_0283136724_p151763132817"></a>用于保护datacache。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row10781736162818"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p167953692820"><a name="zh-cn_topic_0283136724_p167953692820"></a><a name="zh-cn_topic_0283136724_p167953692820"></a>InstrUserLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1879183682811"><a name="zh-cn_topic_0283136724_p1879183682811"></a><a name="zh-cn_topic_0283136724_p1879183682811"></a>用于保护InstrUserHTAB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row17506195395619"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p202581307577"><a name="zh-cn_topic_0283136724_p202581307577"></a><a name="zh-cn_topic_0283136724_p202581307577"></a>BadBlockStatHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p19258133035719"><a name="zh-cn_topic_0283136724_p19258133035719"></a><a name="zh-cn_topic_0283136724_p19258133035719"></a>用于保护global_bad_block_stat hash表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row22422561403"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p8243175620019"><a name="zh-cn_topic_0283136724_p8243175620019"></a><a name="zh-cn_topic_0283136724_p8243175620019"></a>BufFreelistLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p624314568019"><a name="zh-cn_topic_0283136724_p624314568019"></a><a name="zh-cn_topic_0283136724_p624314568019"></a>用于保证共享缓冲区空闲列表操作的原子性。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row167501558110"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p07501515114"><a name="zh-cn_topic_0283136724_p07501515114"></a><a name="zh-cn_topic_0283136724_p07501515114"></a>CUSlotListLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p775005714"><a name="zh-cn_topic_0283136724_p775005714"></a><a name="zh-cn_topic_0283136724_p775005714"></a>用于控制列存缓冲区槽位的并发操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row447110141712"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p1847101416120"><a name="zh-cn_topic_0283136724_p1847101416120"></a><a name="zh-cn_topic_0283136724_p1847101416120"></a>AddinShmemInitLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p247118148119"><a name="zh-cn_topic_0283136724_p247118148119"></a><a name="zh-cn_topic_0283136724_p247118148119"></a>保护共享内存对象的初始化。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row1743892316210"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p10197222128"><a name="zh-cn_topic_0283136724_p10197222128"></a><a name="zh-cn_topic_0283136724_p10197222128"></a>AlterPortLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1623974016213"><a name="zh-cn_topic_0283136724_p1623974016213"></a><a name="zh-cn_topic_0283136724_p1623974016213"></a>保护协调节点更改注册端口号的操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row165081126823"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p166852251524"><a name="zh-cn_topic_0283136724_p166852251524"></a><a name="zh-cn_topic_0283136724_p166852251524"></a>FdwPartitionCaheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p2068617251423"><a name="zh-cn_topic_0283136724_p2068617251423"></a><a name="zh-cn_topic_0283136724_p2068617251423"></a>HDFS分区表缓冲区的管理锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row1979010283212"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p4241028320"><a name="zh-cn_topic_0283136724_p4241028320"></a><a name="zh-cn_topic_0283136724_p4241028320"></a>DfsConnectorCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p8241828829"><a name="zh-cn_topic_0283136724_p8241828829"></a><a name="zh-cn_topic_0283136724_p8241828829"></a>DFSConnector缓冲区的管理锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row11871954131913"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p1812831362512"><a name="zh-cn_topic_0283136724_p1812831362512"></a><a name="zh-cn_topic_0283136724_p1812831362512"></a>DfsSpaceCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p102161953151914"><a name="zh-cn_topic_0283136724_p102161953151914"></a><a name="zh-cn_topic_0283136724_p102161953151914"></a>HDFS表空间管理缓冲区的管理锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row1417835971910"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p1447016554194"><a name="zh-cn_topic_0283136724_p1447016554194"></a><a name="zh-cn_topic_0283136724_p1447016554194"></a>FullBuildXlogCopyStartPtrLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p34701055101913"><a name="zh-cn_topic_0283136724_p34701055101913"></a><a name="zh-cn_topic_0283136724_p34701055101913"></a>用于保护全量Build中Xlog拷贝的操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row14834181172011"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p4806804201"><a name="zh-cn_topic_0283136724_p4806804201"></a><a name="zh-cn_topic_0283136724_p4806804201"></a>DfsUserLoginLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p15806140182012"><a name="zh-cn_topic_0283136724_p15806140182012"></a><a name="zh-cn_topic_0283136724_p15806140182012"></a>用于HDFS用户登录以及认证。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row331112542513"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p8566132482516"><a name="zh-cn_topic_0283136724_p8566132482516"></a><a name="zh-cn_topic_0283136724_p8566132482516"></a>LogicalReplicationSlotPersistentDataLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1556682402515"><a name="zh-cn_topic_0283136724_p1556682402515"></a><a name="zh-cn_topic_0283136724_p1556682402515"></a>用于保护逻辑复制过程中复制槽位的数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row318217273258"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p2265122682512"><a name="zh-cn_topic_0283136724_p2265122682512"></a><a name="zh-cn_topic_0283136724_p2265122682512"></a>WorkloadSessionInfoLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p2265102611254"><a name="zh-cn_topic_0283136724_p2265102611254"></a><a name="zh-cn_topic_0283136724_p2265102611254"></a>保护负载管理session info内存hash表访问。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row1719842902512"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p15370192815258"><a name="zh-cn_topic_0283136724_p15370192815258"></a><a name="zh-cn_topic_0283136724_p15370192815258"></a>InstrWorkloadLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p163701528192514"><a name="zh-cn_topic_0283136724_p163701528192514"></a><a name="zh-cn_topic_0283136724_p163701528192514"></a>保护负载管理统计信息的内存hash表访问。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row478423012254"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p48863082516"><a name="zh-cn_topic_0283136724_p48863082516"></a><a name="zh-cn_topic_0283136724_p48863082516"></a>PgfdwLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p38813018257"><a name="zh-cn_topic_0283136724_p38813018257"></a><a name="zh-cn_topic_0283136724_p38813018257"></a>用于管理实例向Foreign server建立连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row1518504493519"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p5253104353515"><a name="zh-cn_topic_0283136724_p5253104353515"></a><a name="zh-cn_topic_0283136724_p5253104353515"></a>InstanceTimeLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1253143103511"><a name="zh-cn_topic_0283136724_p1253143103511"></a><a name="zh-cn_topic_0283136724_p1253143103511"></a>用于获取实例中会话的时间信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row1381734533516"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p2014744523514"><a name="zh-cn_topic_0283136724_p2014744523514"></a><a name="zh-cn_topic_0283136724_p2014744523514"></a>XlogRemoveSegLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p314774516355"><a name="zh-cn_topic_0283136724_p314774516355"></a><a name="zh-cn_topic_0283136724_p314774516355"></a>保护Xlog段文件的回收操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row193931047103511"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p17981446113517"><a name="zh-cn_topic_0283136724_p17981446113517"></a><a name="zh-cn_topic_0283136724_p17981446113517"></a>DnUsedSpaceHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p14798194683515"><a name="zh-cn_topic_0283136724_p14798194683515"></a><a name="zh-cn_topic_0283136724_p14798194683515"></a>用于更新会话对应的空间使用信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row74661541355"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p13570153163510"><a name="zh-cn_topic_0283136724_p13570153163510"></a><a name="zh-cn_topic_0283136724_p13570153163510"></a>CsnMinLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p35709535358"><a name="zh-cn_topic_0283136724_p35709535358"></a><a name="zh-cn_topic_0283136724_p35709535358"></a>用于计算CSNmin。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row64996564353"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p8788125510352"><a name="zh-cn_topic_0283136724_p8788125510352"></a><a name="zh-cn_topic_0283136724_p8788125510352"></a>GPCCommitLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p18789165517356"><a name="zh-cn_topic_0283136724_p18789165517356"></a><a name="zh-cn_topic_0283136724_p18789165517356"></a>用于保护全局Plan Cache hash表的添加操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row4107115843518"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p1962855773515"><a name="zh-cn_topic_0283136724_p1962855773515"></a><a name="zh-cn_topic_0283136724_p1962855773515"></a>GPCClearLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p56281357203511"><a name="zh-cn_topic_0283136724_p56281357203511"></a><a name="zh-cn_topic_0283136724_p56281357203511"></a>用于保护全局Plan Cache hash表的清除操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row164241204361"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p2795125963512"><a name="zh-cn_topic_0283136724_p2795125963512"></a><a name="zh-cn_topic_0283136724_p2795125963512"></a>GPCTimelineLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p07951159183510"><a name="zh-cn_topic_0283136724_p07951159183510"></a><a name="zh-cn_topic_0283136724_p07951159183510"></a>用于保护全局Plan Cache hash表检查Timeline的操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row188202193619"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p5454514364"><a name="zh-cn_topic_0283136724_p5454514364"></a><a name="zh-cn_topic_0283136724_p5454514364"></a>TsTagsCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p184545183610"><a name="zh-cn_topic_0283136724_p184545183610"></a><a name="zh-cn_topic_0283136724_p184545183610"></a>用于时序tag缓存管理。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row19784435365"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p429911315368"><a name="zh-cn_topic_0283136724_p429911315368"></a><a name="zh-cn_topic_0283136724_p429911315368"></a>InstanceRealTLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p172997333617"><a name="zh-cn_topic_0283136724_p172997333617"></a><a name="zh-cn_topic_0283136724_p172997333617"></a>用于保护共享实例统计信息hash表的更新操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row320811653615"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p126121158365"><a name="zh-cn_topic_0283136724_p126121158365"></a><a name="zh-cn_topic_0283136724_p126121158365"></a>CLogBufMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p9612758360"><a name="zh-cn_topic_0283136724_p9612758360"></a><a name="zh-cn_topic_0283136724_p9612758360"></a>用于提交日志缓存管理。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row181287815365"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p8627177193615"><a name="zh-cn_topic_0283136724_p8627177193615"></a><a name="zh-cn_topic_0283136724_p8627177193615"></a>GPCMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1062715743611"><a name="zh-cn_topic_0283136724_p1062715743611"></a><a name="zh-cn_topic_0283136724_p1062715743611"></a>用于全局Plan Cache缓存管理。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row7841938193618"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p7157236203611"><a name="zh-cn_topic_0283136724_p7157236203611"></a><a name="zh-cn_topic_0283136724_p7157236203611"></a>GPCPrepareMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1662161319423"><a name="zh-cn_topic_0283136724_p1662161319423"></a><a name="zh-cn_topic_0283136724_p1662161319423"></a>用于全局Plan Cache缓存管理。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row18343810363"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p1715811362368"><a name="zh-cn_topic_0283136724_p1715811362368"></a><a name="zh-cn_topic_0283136724_p1715811362368"></a>BufferIOLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p2158193683612"><a name="zh-cn_topic_0283136724_p2158193683612"></a><a name="zh-cn_topic_0283136724_p2158193683612"></a>保护共享缓冲区页面的IO操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row126811942123618"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p139802406362"><a name="zh-cn_topic_0283136724_p139802406362"></a><a name="zh-cn_topic_0283136724_p139802406362"></a>BufferContentLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p12980164063616"><a name="zh-cn_topic_0283136724_p12980164063616"></a><a name="zh-cn_topic_0283136724_p12980164063616"></a>保护共享缓冲区页面内容的读取、修改。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row17681164212362"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p1898094015362"><a name="zh-cn_topic_0283136724_p1898094015362"></a><a name="zh-cn_topic_0283136724_p1898094015362"></a>CSNLOG Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1998034043618"><a name="zh-cn_topic_0283136724_p1998034043618"></a><a name="zh-cn_topic_0283136724_p1998034043618"></a>用于CSN日志管理。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row85621945143618"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p145954433614"><a name="zh-cn_topic_0283136724_p145954433614"></a><a name="zh-cn_topic_0283136724_p145954433614"></a>DoubleWriteLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1359444113613"><a name="zh-cn_topic_0283136724_p1359444113613"></a><a name="zh-cn_topic_0283136724_p1359444113613"></a>用于双写的管理操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row185911412163517"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p159214125357"><a name="zh-cn_topic_0283136724_p159214125357"></a><a name="zh-cn_topic_0283136724_p159214125357"></a>RowPageReplicationLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1959201233518"><a name="zh-cn_topic_0283136724_p1959201233518"></a><a name="zh-cn_topic_0283136724_p1959201233518"></a>用于管理行存储的数据页复制。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row140882312506"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p840812237501"><a name="zh-cn_topic_0283136724_p840812237501"></a><a name="zh-cn_topic_0283136724_p840812237501"></a>Extension</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1408423105015"><a name="zh-cn_topic_0283136724_p1408423105015"></a><a name="zh-cn_topic_0283136724_p1408423105015"></a>其他轻量锁。</p>
</td>
</tr>
</tbody>
</table>

当wait\_status值为wait io时对应的wait\_event等待事件类型与描述信息如下。

**表 4**  IO等待事件列表

<a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_table124603113369"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row17125184214368"><th class="cellrowborder" valign="top" width="38.07%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1512519428366"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1512519428366"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1512519428366"></a>wait_event类型</p>
</th>
<th class="cellrowborder" valign="top" width="61.92999999999999%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p121251742193618"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p121251742193618"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p121251742193618"></a>类型描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row85261331183620"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1652612319363"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1652612319363"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1652612319363"></a>BufFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p145277315364"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p145277315364"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p145277315364"></a>从临时文件中读取数据到指定buffer。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row852733114363"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16527731143610"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16527731143610"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16527731143610"></a>BufFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16527193117362"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16527193117362"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16527193117362"></a>向临时文件中写入指定buffer中的内容。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1652763111367"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19527163120367"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19527163120367"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19527163120367"></a>ControlFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1452718315368"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1452718315368"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1452718315368"></a>读取pg_control文件。主要在数据库启动、执行checkpoint和主备校验过程中发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row135271331163617"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p452717318366"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p452717318366"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p452717318366"></a>ControlFileSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20527163111368"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20527163111368"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20527163111368"></a>将pg_control文件持久化到磁盘。数据库初始化时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row55271631123615"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6527203112367"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6527203112367"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6527203112367"></a>ControlFileSyncUpdate</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1652783119365"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1652783119365"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1652783119365"></a>将pg_control文件持久化到磁盘。主要在数据库启动、执行checkpoint和主备校验过程中发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row115271931173612"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15527113119364"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15527113119364"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15527113119364"></a>ControlFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p3527143163611"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p3527143163611"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p3527143163611"></a>写入pg_control文件。数据库初始化时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row19527143112365"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p25271531153618"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p25271531153618"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p25271531153618"></a>ControlFileWriteUpdate</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p105277311366"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p105277311366"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p105277311366"></a>更新pg_control文件。主要在数据库启动、执行checkpoint和主备校验过程中发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1852711317368"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p152733183617"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p152733183617"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p152733183617"></a>CopyFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1852733133610"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1852733133610"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1852733133610"></a>copy文件时读取文件内容。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row552710319369"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p952703133619"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p952703133619"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p952703133619"></a>CopyFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p145281731183615"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p145281731183615"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p145281731183615"></a>copy文件时写入文件内容。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row2052813114362"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1252893119365"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1252893119365"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1252893119365"></a>DataFileExtend</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20528031203619"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20528031203619"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20528031203619"></a>扩展文件时向文件写入内容。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row35286310369"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17528133116368"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17528133116368"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17528133116368"></a>DataFileFlush</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8528143117367"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8528143117367"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8528143117367"></a>将表数据文件持久化到磁盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row3528431183617"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p4528113133612"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p4528113133612"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p4528113133612"></a>DataFileImmediateSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2052813113613"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2052813113613"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p2052813113613"></a>将表数据文件立即持久化到磁盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row7528831113616"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1152853143615"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1152853143615"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1152853143615"></a>DataFilePrefetch</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p125281631183611"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p125281631183611"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p125281631183611"></a>异步读取表数据文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row2052893119360"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12528731143614"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12528731143614"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12528731143614"></a>DataFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14528193173613"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14528193173613"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14528193173613"></a>同步读取表数据文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row12528031143619"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p35287312360"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p35287312360"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p35287312360"></a>DataFileSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1952863123615"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1952863123615"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1952863123615"></a>将表数据文件的修改持久化到磁盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row16528143120364"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p252843163619"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p252843163619"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p252843163619"></a>DataFileTruncate</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1552883115365"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1552883115365"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1552883115365"></a>表数据文件truncate。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row12528103123613"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6528103163618"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6528103163618"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6528103163618"></a>DataFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1528131123620"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1528131123620"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1528131123620"></a>向表数据文件写入内容。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row452973123618"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p195299316365"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p195299316365"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p195299316365"></a>LockFileAddToDataDirRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15291031113612"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15291031113612"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15291031113612"></a>读取“postmaster.pid”文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1552915315362"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16529153163615"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16529153163615"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16529153163615"></a>LockFileAddToDataDirSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19529163111365"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19529163111365"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19529163111365"></a>将“postmaster.pid”内容持久化到磁盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row35291731163610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p852923163610"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p852923163610"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p852923163610"></a>LockFileAddToDataDirWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1852916316365"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1852916316365"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1852916316365"></a>将pid信息写到“postmaster.pid”文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row0529123173620"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p55291031183614"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p55291031183614"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p55291031183614"></a>LockFileCreateRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1252919318367"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1252919318367"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1252919318367"></a>读取LockFile文件“%s.lock”。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row6529183193619"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1852963143611"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1852963143611"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1852963143611"></a>LockFileCreateSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1052983114369"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1052983114369"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1052983114369"></a>将LockFile文件“%s.lock”内容持久化到磁盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row65291313368"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p352923115362"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p352923115362"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p352923115362"></a>LockFileCreateWRITE</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5529103193611"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5529103193611"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5529103193611"></a>将pid信息写到LockFile文件“%s.lock”。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row2052973193615"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1252903118368"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1252903118368"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1252903118368"></a>RelationMapRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1652993119366"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1652993119366"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1652993119366"></a>读取系统表到存储位置之间的映射文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1529163193618"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p652923112361"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p652923112361"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p652923112361"></a>RelationMapSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10529031133619"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10529031133619"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p10529031133619"></a>将系统表到存储位置之间的映射文件持久化到磁盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row45291431203613"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p95291031153618"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p95291031153618"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p95291031153618"></a>RelationMapWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p552943116364"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p552943116364"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p552943116364"></a>写入系统表到存储位置之间的映射文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row65291831173610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19529153123612"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19529153123612"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p19529153123612"></a>ReplicationSlotRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16529103133612"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16529103133612"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p16529103133612"></a>读取流复制槽文件。重新启动时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1852933116369"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6530143113361"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6530143113361"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6530143113361"></a>ReplicationSlotRestoreSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1530103163610"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1530103163610"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1530103163610"></a>将流复制槽文件持久化到磁盘。重新启动时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row353083119361"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p35301431123614"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p35301431123614"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p35301431123614"></a>ReplicationSlotSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p05303319364"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p05303319364"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p05303319364"></a>checkpoint时将流复制槽临时文件持久化到磁盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row2530103113616"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14530031173616"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14530031173616"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14530031173616"></a>ReplicationSlotWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p653023117366"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p653023117366"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p653023117366"></a>checkpoint时写流复制槽临时文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1953013313363"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1530931163615"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1530931163615"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1530931163615"></a>SLRUFlushSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15530931153611"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15530931153611"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15530931153611"></a>将pg_clog、pg_subtrans和pg_multixact文件持久化到磁盘。主要在执行checkpoint和数据库停机时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row25303315362"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14530123114369"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14530123114369"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14530123114369"></a>SLRURead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7530113110365"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7530113110365"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7530113110365"></a>读取pg_clog、pg_subtrans和pg_multixact文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row115301831173610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8530431113619"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8530431113619"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p8530431113619"></a>SLRUSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p753083110367"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p753083110367"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p753083110367"></a>将脏页写入文件pg_clog、pg_subtrans和pg_multixact并持久化到磁盘。主要在执行checkpoint和数据库停机时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1753053119368"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p65301531193611"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p65301531193611"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p65301531193611"></a>SLRUWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p175303318366"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p175303318366"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p175303318366"></a>写入pg_clog、pg_subtrans和pg_multixact文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row85306318366"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p85309318366"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p85309318366"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p85309318366"></a>TimelineHistoryRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p653013111363"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p653013111363"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p653013111363"></a>读取timeline history文件。在数据库启动时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1853010316363"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p853033117364"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p853033117364"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p853033117364"></a>TimelineHistorySync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12530143193617"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12530143193617"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p12530143193617"></a>将timeline history文件持久化到磁盘。在数据库启动时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row12530173110363"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p953011310360"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p953011310360"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p953011310360"></a>TimelineHistoryWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1353011315369"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1353011315369"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1353011315369"></a>写入timeline history文件。在数据库启动时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row053063183610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0530193114365"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0530193114365"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0530193114365"></a>TwophaseFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p35311631123614"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p35311631123614"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p35311631123614"></a>读取pg_twophase文件。在两阶段事务提交、两阶段事务恢复时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row17531831193614"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0531123119366"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0531123119366"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p0531123119366"></a>TwophaseFileSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p4531153114361"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p4531153114361"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p4531153114361"></a>将pg_twophase文件持久化到磁盘。在两阶段事务提交、两阶段事务恢复时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row2053113110361"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p155314314361"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p155314314361"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p155314314361"></a>TwophaseFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p25311311365"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p25311311365"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p25311311365"></a>写入pg_twophase文件。在两阶段事务提交、两阶段事务恢复时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row18531173114368"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p125311231113612"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p125311231113612"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p125311231113612"></a>WALBootstrapSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p453133153613"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p453133153613"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p453133153613"></a>将初始化的WAL文件持久化到磁盘。在数据库初始化发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row165311031103613"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p175311031183612"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p175311031183612"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p175311031183612"></a>WALBootstrapWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p165311431113612"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p165311431113612"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p165311431113612"></a>写入初始化的WAL文件。在数据库初始化发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row4531153153612"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p953153163613"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p953153163613"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p953153163613"></a>WALCopyRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p75311312369"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p75311312369"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p75311312369"></a>读取已存在的WAL文件并进行复制时产生的读操作。在执行归档恢复完后发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row12531123118361"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p175311131123613"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p175311131123613"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p175311131123613"></a>WALCopySync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1653143133620"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1653143133620"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1653143133620"></a>将复制的WAL文件持久化到磁盘。在执行归档恢复完后发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row5531631103619"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p05315316368"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p05315316368"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p05315316368"></a>WALCopyWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1053173153613"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1053173153613"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1053173153613"></a>读取已存在WAL文件并进行复制时产生的写操作。在执行归档恢复完后发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row95311531183610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14531193173616"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14531193173616"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14531193173616"></a>WALInitSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p185315319368"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p185315319368"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p185315319368"></a>将新初始化的WAL文件持久化磁盘。在日志回收或写日志时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row553113173615"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p753113113363"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p753113113363"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p753113113363"></a>WALInitWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1153143183611"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1153143183611"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1153143183611"></a>将新创建的WAL文件初始化为0。在日志回收或写日志时发生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row115311531113610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p153143113363"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p153143113363"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p153143113363"></a>WALRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11531183111362"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11531183111362"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p11531183111362"></a>从xlog日志读取数据。两阶段文件redo相关的操作产生。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row12531183183619"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15321631133618"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15321631133618"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p15321631133618"></a>WALSyncMethodAssign</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p953210313361"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p953210313361"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p953210313361"></a>将当前打开的所有WAL文件持久化到磁盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row8532631173612"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1053233143619"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1053233143619"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1053233143619"></a>WALWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p95324318361"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p95324318361"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p95324318361"></a>写入WAL文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row3344217133213"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p534571715324"><a name="zh-cn_topic_0283136724_p534571715324"></a><a name="zh-cn_topic_0283136724_p534571715324"></a>WALBufferAccess</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p2345181773219"><a name="zh-cn_topic_0283136724_p2345181773219"></a><a name="zh-cn_topic_0283136724_p2345181773219"></a>WAL Buffer访问（出于性能考虑，内核代码里只统计访问次数，未统计其访问耗时）。</p>
</td>
</tr>
<tr id="row10194165319215"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="p1819511531628"><a name="p1819511531628"></a><a name="p1819511531628"></a>WALBufferFull</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="p1819635312210"><a name="p1819635312210"></a><a name="p1819635312210"></a>WAL Buffer满时，写wal文件相关的处理。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row5126152875614"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p98110272568"><a name="zh-cn_topic_0283136724_p98110272568"></a><a name="zh-cn_topic_0283136724_p98110272568"></a>DoubleWriteFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p1981727185619"><a name="zh-cn_topic_0283136724_p1981727185619"></a><a name="zh-cn_topic_0283136724_p1981727185619"></a>双写 文件读取。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row4301173016565"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p0212202915615"><a name="zh-cn_topic_0283136724_p0212202915615"></a><a name="zh-cn_topic_0283136724_p0212202915615"></a>DoubleWriteFileSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p22121929165615"><a name="zh-cn_topic_0283136724_p22121929165615"></a><a name="zh-cn_topic_0283136724_p22121929165615"></a>双写 文件强制刷盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row63501332125615"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p47025312568"><a name="zh-cn_topic_0283136724_p47025312568"></a><a name="zh-cn_topic_0283136724_p47025312568"></a>DoubleWriteFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p77031931195610"><a name="zh-cn_topic_0283136724_p77031931195610"></a><a name="zh-cn_topic_0283136724_p77031931195610"></a>双写 文件写入。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row2926193318562"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p63521133135615"><a name="zh-cn_topic_0283136724_p63521133135615"></a><a name="zh-cn_topic_0283136724_p63521133135615"></a>PredoProcessPending</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p9352153345615"><a name="zh-cn_topic_0283136724_p9352153345615"></a><a name="zh-cn_topic_0283136724_p9352153345615"></a>并行日志回放中当前记录回放等待其它记录回放完成。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row64341335125611"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p139101934175618"><a name="zh-cn_topic_0283136724_p139101934175618"></a><a name="zh-cn_topic_0283136724_p139101934175618"></a>PredoApply</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p10910193415617"><a name="zh-cn_topic_0283136724_p10910193415617"></a><a name="zh-cn_topic_0283136724_p10910193415617"></a>并行日志回放中等待当前工作线程等待其他线程回放至本线程LSN。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row0209143815611"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p124831136205614"><a name="zh-cn_topic_0283136724_p124831136205614"></a><a name="zh-cn_topic_0283136724_p124831136205614"></a>DisableConnectFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p94841536155615"><a name="zh-cn_topic_0283136724_p94841536155615"></a><a name="zh-cn_topic_0283136724_p94841536155615"></a>HA锁分片逻辑文件读取。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row7685103917569"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p171823397564"><a name="zh-cn_topic_0283136724_p171823397564"></a><a name="zh-cn_topic_0283136724_p171823397564"></a>DisableConnectFileSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p3182103915620"><a name="zh-cn_topic_0283136724_p3182103915620"></a><a name="zh-cn_topic_0283136724_p3182103915620"></a>HA锁分片逻辑文件强制刷盘。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_row786114145618"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_p18700124015564"><a name="zh-cn_topic_0283136724_p18700124015564"></a><a name="zh-cn_topic_0283136724_p18700124015564"></a>DisableConnectFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_p670074095617"><a name="zh-cn_topic_0283136724_p670074095617"></a><a name="zh-cn_topic_0283136724_p670074095617"></a>HA锁分片逻辑文件写入。</p>
</td>
</tr>
</tbody>
</table>


当wait\_status值为acquire lock（事务锁）时对应的wait\_event等待事件类型与描述信息如下。

**表 5**  事务锁等待事件列表

<a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_table11826123533718"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row2994124219379"><th class="cellrowborder" valign="top" width="37.6%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6994174220376"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6994174220376"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p6994174220376"></a>wait_event类型</p>
</th>
<th class="cellrowborder" valign="top" width="62.4%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7994184218371"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7994184218371"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7994184218371"></a>类型描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1388753563718"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p78871035193711"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p78871035193711"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p78871035193711"></a>relation</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18871355377"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18871355377"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18871355377"></a>对表加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row5887103510377"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p158876355377"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p158876355377"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p158876355377"></a>extend</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20887335153716"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20887335153716"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20887335153716"></a>对表扩展空间时加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row17887835113717"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14887203516376"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14887203516376"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p14887203516376"></a>partition</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p98877351377"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p98877351377"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p98877351377"></a>对分区表加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row9887123514375"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p288723583714"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p288723583714"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p288723583714"></a>partition_seq</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1388733513377"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1388733513377"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1388733513377"></a>对分区表的分区加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row148871935123710"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p188719356372"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p188719356372"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p188719356372"></a>page</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1188753543717"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1188753543717"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1188753543717"></a>对表页面加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row58872359376"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p488720358370"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p488720358370"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p488720358370"></a>tuple</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1788783511376"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1788783511376"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1788783511376"></a>对页面上的tuple加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row10887635133718"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p158870354376"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p158870354376"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p158870354376"></a>transactionid</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20887203513373"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20887203513373"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p20887203513373"></a>对事务ID加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row688793510376"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p158871435183720"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p158871435183720"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p158871435183720"></a>virtualxid</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1988793543717"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1988793543717"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1988793543717"></a>对虚拟事务ID加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row788773518379"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p178877353375"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p178877353375"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p178877353375"></a>object</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5887103503710"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5887103503710"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p5887103503710"></a>加对象锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row7887183519379"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1188803513717"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1188803513717"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1188803513717"></a>cstore_freespace</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1388853517378"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1388853517378"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1388853517378"></a>对列存空闲空间加锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row1288819351376"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7888635193717"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7888635193717"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p7888635193717"></a>userlock</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18881135183715"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18881135183715"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p18881135183715"></a>加用户锁。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_row18886350375"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17888735183720"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17888735183720"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p17888735183720"></a>advisory</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1488823511375"><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1488823511375"></a><a name="zh-cn_topic_0283136724_zh-cn_topic_0237122466_p1488823511375"></a>加advisory锁。</p>
</td>
</tr>
</tbody>
</table>
