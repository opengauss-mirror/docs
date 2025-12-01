# PG\_THREAD\_WAIT\_STATUS<a name="EN-US_TOPIC_0289900410"></a>

**PG\_THREAD\_WAIT\_STATUS**  allows you to test the block waiting status about the backend thread and auxiliary thread of the current instance.

**Table  1**  PG\_THREAD\_WAIT\_STATUS columns

<a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_t26afd18856464f7e98c359eedbe4e8fa"></a>
<table><thead align="left"><tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_re7b3f21834b14c35b59601a5f7723425"><th class="cellrowborder" valign="top" width="19.040000000000003%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5b5ea05a04e242759f3cbd76791e4824"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5b5ea05a04e242759f3cbd76791e4824"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5b5ea05a04e242759f3cbd76791e4824"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="12.85%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a8428ba27690a4ce381165c5331db2924"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a8428ba27690a4ce381165c5331db2924"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a8428ba27690a4ce381165c5331db2924"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="68.11%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a185a4aa38d114f9993a4c1923383aa12"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a185a4aa38d114f9993a4c1923383aa12"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a185a4aa38d114f9993a4c1923383aa12"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r3b27d4bf670c40b480ec3356d27fa6e3"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad6aaae584f154650a48ae87546b6fc1a"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad6aaae584f154650a48ae87546b6fc1a"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad6aaae584f154650a48ae87546b6fc1a"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aef5fb46f4999400b9224863bca225359"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aef5fb46f4999400b9224863bca225359"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aef5fb46f4999400b9224863bca225359"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a37598aca924f4c4798955267dfe5c8a0"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a37598aca924f4c4798955267dfe5c8a0"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a37598aca924f4c4798955267dfe5c8a0"></a>Current node name</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r2d7d2ec48fa145bea1b8b51894a8ef26"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a248f3a2685cb4ffdaa888469889a0e3c"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a248f3a2685cb4ffdaa888469889a0e3c"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a248f3a2685cb4ffdaa888469889a0e3c"></a>db_name</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad0648a23316f47a9b4a434d00b346402"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad0648a23316f47a9b4a434d00b346402"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad0648a23316f47a9b4a434d00b346402"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa50c87fd25b84b7fa9e492c4c6b9cb7b"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa50c87fd25b84b7fa9e492c4c6b9cb7b"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa50c87fd25b84b7fa9e492c4c6b9cb7b"></a>Database name</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r428bcfd73cdb4f4da86067c7994f55a3"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a573d3c71d9764f1f8c5dcae60d483e17"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a573d3c71d9764f1f8c5dcae60d483e17"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a573d3c71d9764f1f8c5dcae60d483e17"></a>thread_name</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_abe6bccfda60d4683ad17a88ef388ea40"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_abe6bccfda60d4683ad17a88ef388ea40"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_abe6bccfda60d4683ad17a88ef388ea40"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a19c876bf481d4a08b810b2a7b601c1d3"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a19c876bf481d4a08b810b2a7b601c1d3"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a19c876bf481d4a08b810b2a7b601c1d3"></a>Thread name</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_re03b066f458b45bcb76e5bddedad2e8d"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad427f117be504dc59c303881cde39f78"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad427f117be504dc59c303881cde39f78"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad427f117be504dc59c303881cde39f78"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa087b6e251e940d39d4ff37c246f65b4"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa087b6e251e940d39d4ff37c246f65b4"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa087b6e251e940d39d4ff37c246f65b4"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aaaeb6d31e1ae4e96adace6d84d9bf783"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aaaeb6d31e1ae4e96adace6d84d9bf783"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aaaeb6d31e1ae4e96adace6d84d9bf783"></a>Query ID. The value of this column is the same as that of <strong id="b1547266192115"><a name="b1547266192115"></a><a name="b1547266192115"></a>debug_query_id</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r292aa93cc1b24fd49c8797b917067b16"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p905804111319"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p905804111319"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p905804111319"></a>tid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a50098163af69483aa0c036190dd95f6d"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a50098163af69483aa0c036190dd95f6d"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a50098163af69483aa0c036190dd95f6d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a60e57f9933704d23bb13cf6a47fb91f2"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a60e57f9933704d23bb13cf6a47fb91f2"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a60e57f9933704d23bb13cf6a47fb91f2"></a>Current thread ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row174441452124013"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p114451526401"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p114451526401"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p114451526401"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p15445135212406"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15445135212406"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15445135212406"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p8445185210405"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p8445185210405"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p8445185210405"></a>Current session ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r7ea594e116da49d7bf8100c59d998e5a"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad905b3d36f98481d8b8b4401c2d4c898"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad905b3d36f98481d8b8b4401c2d4c898"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad905b3d36f98481d8b8b4401c2d4c898"></a>lwtid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a466343d030fb402d9dc9e45657034cb0"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a466343d030fb402d9dc9e45657034cb0"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a466343d030fb402d9dc9e45657034cb0"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab7a57d3ebe7540c78177ee1a19acc0a2"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab7a57d3ebe7540c78177ee1a19acc0a2"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab7a57d3ebe7540c78177ee1a19acc0a2"></a>Lightweight thread ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row13466721114113"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1446714211418"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1446714211418"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1446714211418"></a>psessionid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p194671021134120"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p194671021134120"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p194671021134120"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p6467102111413"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6467102111413"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6467102111413"></a>Parent session ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_rd1948fc45b9646ecbbcdee8e782ecf1c"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa893addf11be41088c8b656c18400d5c"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa893addf11be41088c8b656c18400d5c"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa893addf11be41088c8b656c18400d5c"></a>tlevel</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5e01efdc30d242b9b3492cf49bf9e207"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5e01efdc30d242b9b3492cf49bf9e207"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5e01efdc30d242b9b3492cf49bf9e207"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab689a203cb934528b4dc05cd453e1fe9"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab689a203cb934528b4dc05cd453e1fe9"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab689a203cb934528b4dc05cd453e1fe9"></a>Level of the streaming thread</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_rad57094915a549ee8e7f413d7b3d437f"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab629ba485dad4d2e9eb83250bc182954"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab629ba485dad4d2e9eb83250bc182954"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab629ba485dad4d2e9eb83250bc182954"></a>smpid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a99dde1b00876405e8def8a9275dd318b"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a99dde1b00876405e8def8a9275dd318b"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a99dde1b00876405e8def8a9275dd318b"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a040b71d1c7844773a823d99f60517dfc"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a040b71d1c7844773a823d99f60517dfc"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a040b71d1c7844773a823d99f60517dfc"></a>Concurrent thread ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r25231ac8533540b09d77a31f1a99428c"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a49b8eca695914c58910c81f0f2ca202e"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a49b8eca695914c58910c81f0f2ca202e"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a49b8eca695914c58910c81f0f2ca202e"></a>wait_status</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a7e7f7bf727ee4d5dbfa0c2e64098f6a7"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a7e7f7bf727ee4d5dbfa0c2e64098f6a7"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a7e7f7bf727ee4d5dbfa0c2e64098f6a7"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_abeb449d97d7348928dd5c140507e3f3a"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_abeb449d97d7348928dd5c140507e3f3a"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_abeb449d97d7348928dd5c140507e3f3a"></a>Waiting status of the current thread. For details about the waiting status, see <a href="#en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_t794f802302c24514a5db22d51eabacc4">Table 2</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row10717192619111"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p771742617112"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p771742617112"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p771742617112"></a>wait_event</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p17191626718"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17191626718"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17191626718"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p971918266112"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p971918266112"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p971918266112"></a>If <strong id="b1385282118213"><a name="b1385282118213"></a><a name="b1385282118213"></a>wait_status</strong> is set to <strong id="b1385522111219"><a name="b1385522111219"></a><a name="b1385522111219"></a>acquire lock</strong>, <strong id="b12857112142110"><a name="b12857112142110"></a><a name="b12857112142110"></a>acquire lwlock</strong>, or <strong id="b16859121112119"><a name="b16859121112119"></a><a name="b16859121112119"></a>wait io</strong>, this column describes the lock, lightweight lock, and I/O information, respectively. If <strong id="b7675132332116"><a name="b7675132332116"></a><a name="b7675132332116"></a>wait_status</strong> is not any of the three values, this column is empty.</p>
</td>
</tr>
<tr id="row1715011135270"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="p13865024132615"><a name="p13865024132615"></a><a name="p13865024132615"></a>locktag</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="p6865162432618"><a name="p6865162432618"></a><a name="p6865162432618"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="p286522418269"><a name="p286522418269"></a><a name="p286522418269"></a>Information about the lock that the current thread is waiting for</p>
</td>
</tr>
<tr id="row49192582716"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="p1956941432718"><a name="p1956941432718"></a><a name="p1956941432718"></a>lockmode</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="p15570141442711"><a name="p15570141442711"></a><a name="p15570141442711"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="p1857018144275"><a name="p1857018144275"></a><a name="p1857018144275"></a>Lock mode that the current thread is waiting to obtain The values include modes in the table-level lock, row-level lock, and page-level lock.</p>
</td>
</tr>
<tr id="row59910181272"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="p1930373912270"><a name="p1930373912270"></a><a name="p1930373912270"></a>block_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="p123034393271"><a name="p123034393271"></a><a name="p123034393271"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="p7303173902713"><a name="p7303173902713"></a><a name="p7303173902713"></a>ID of the session that blocks the current thread from obtaining the lock</p>
</td>
</tr>
<tr id="row1446025613139"><td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.1 "><p id="p44611456161314"><a name="p44611456161314"></a><a name="p44611456161314"></a>global_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="12.85%" headers="mcps1.2.4.1.2 "><p id="p94611656111318"><a name="p94611656111318"></a><a name="p94611656111318"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.11%" headers="mcps1.2.4.1.3 "><p id="p184611568132"><a name="p184611568132"></a><a name="p184611568132"></a>Global session ID</p>
</td>
</tr>
</tbody>
</table>

The waiting statuses in the  **wait\_status**  column are as follows:

**Table  2**  Waiting status list

<a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_t794f802302c24514a5db22d51eabacc4"></a>
<table><thead align="left"><tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r405f2c5462c14f30812f1b79f61de7d7"><th class="cellrowborder" valign="top" width="43.419999999999995%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a0b27c8381176409396fec09569729c21"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a0b27c8381176409396fec09569729c21"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a0b27c8381176409396fec09569729c21"></a>Value </p>
</th>
<th class="cellrowborder" valign="top" width="56.58%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aeaf5ce86f70d4b0ca67b8cddb5286be5"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aeaf5ce86f70d4b0ca67b8cddb5286be5"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aeaf5ce86f70d4b0ca67b8cddb5286be5"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_rd90106da12df48f6bed182f13212b183"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5c9d9db22d7749daa33de691650c318c"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5c9d9db22d7749daa33de691650c318c"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5c9d9db22d7749daa33de691650c318c"></a>none</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_adc62684b5f3e420d9f357bdec5ccf50f"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_adc62684b5f3e420d9f357bdec5ccf50f"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_adc62684b5f3e420d9f357bdec5ccf50f"></a>Waiting for no event</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ref9a8e005cbc4770bda5982739e14e4f"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p384008589204"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p384008589204"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p384008589204"></a>acquire lock</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p234618079204"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p234618079204"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p234618079204"></a>Waiting for locking until the locking succeeds or times out</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1528317111316"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p20283711135"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20283711135"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20283711135"></a>acquire lwlock</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p828318115314"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p828318115314"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p828318115314"></a>Waiting for a lightweight lock</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row108721517183113"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p168726179319"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p168726179319"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p168726179319"></a>wait io</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1287381703115"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1287381703115"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1287381703115"></a>Waiting for I/O completion</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r075dcc4647d64af6bb2405924b9ae737"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p148189029200"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p148189029200"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p148189029200"></a>wait cmd</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p594804239200"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p594804239200"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p594804239200"></a>Waiting for reading network communication packets to complete</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r909c4cf828f4408a8f6bcf98b2355432"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a76eb409a374e4619af37cc49ede604d2"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a76eb409a374e4619af37cc49ede604d2"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a76eb409a374e4619af37cc49ede604d2"></a>wait pooler get conn</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_af2d4ba78999846a7be8b466603253173"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_af2d4ba78999846a7be8b466603253173"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_af2d4ba78999846a7be8b466603253173"></a>Waiting for the pooler to obtain the connection</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ra8cf453708f844459dae11dfea5cb351"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a445ee1f53901457aa084a6bfea9c38e2"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a445ee1f53901457aa084a6bfea9c38e2"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a445ee1f53901457aa084a6bfea9c38e2"></a>wait pooler abort conn</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa5f66579fce24d5a8c78102dca4490c9"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa5f66579fce24d5a8c78102dca4490c9"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa5f66579fce24d5a8c78102dca4490c9"></a>Waiting for the pooler to terminate the connection</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r3fa6433037ae40fda5db3d26cbc799df"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ae5c5cf826a44497caa628dd7810e3a08"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ae5c5cf826a44497caa628dd7810e3a08"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ae5c5cf826a44497caa628dd7810e3a08"></a>wait pooler clean conn</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a77b4ee97927f4da896cf75d105b6a0f3"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a77b4ee97927f4da896cf75d105b6a0f3"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a77b4ee97927f4da896cf75d105b6a0f3"></a>Waiting for the pooler to clear connections</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row19272759112010"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p92736598202"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p92736598202"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p92736598202"></a>pooler create conn: [nodename], total N</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p2027355952016"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2027355952016"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2027355952016"></a>Waiting for the pooler to set up a connection. The connection is being established with the node specified by <em id="i13567943172111"><a name="i13567943172111"></a><a name="i13567943172111"></a>nodename</em>, and there are <em id="i19574134372113"><a name="i19574134372113"></a><a name="i19574134372113"></a>N</em> connections waiting to be set up.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ra759388ade024cdfa6b15242d2d47e55"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p496345899214"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p496345899214"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p496345899214"></a>get conn</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p609787349214"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p609787349214"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p609787349214"></a>Obtaining the connection to other nodes</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ra839ca19971a424d84fb067fad724875"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5d69f9fd31ea4b81a6408e2f4499578b"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5d69f9fd31ea4b81a6408e2f4499578b"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5d69f9fd31ea4b81a6408e2f4499578b"></a>set cmd: [nodename]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5933bd1ab070408c845cf629a7d92764"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5933bd1ab070408c845cf629a7d92764"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5933bd1ab070408c845cf629a7d92764"></a>Waiting for running the <strong id="b63915479216"><a name="b63915479216"></a><a name="b63915479216"></a>SET</strong>, <strong id="b15411747132114"><a name="b15411747132114"></a><a name="b15411747132114"></a>RESET</strong>, <strong id="b1643104702113"><a name="b1643104702113"></a><a name="b1643104702113"></a>TRANSACTION BLOCK LEVEL PARA SET</strong>, or <strong id="b13451047112115"><a name="b13451047112115"></a><a name="b13451047112115"></a>SESSION LEVEL PARA SET</strong> statement on the connection. The statement is being executed on the node specified by <em id="i747747102112"><a name="i747747102112"></a><a name="i747747102112"></a>nodename</em>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r083bfaf8d23c4aa9a86d77d9ff75a97a"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a4f6c708307664db7b59f4c020e94d18a"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a4f6c708307664db7b59f4c020e94d18a"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a4f6c708307664db7b59f4c020e94d18a"></a>cancel query</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a3dbbf28e41994adaa502b18f5830b5c6"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a3dbbf28e41994adaa502b18f5830b5c6"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a3dbbf28e41994adaa502b18f5830b5c6"></a>Canceling the SQL statement that is being executed through the connection</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r8e6afabda27243f3a6e8cebcd3c1259f"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a15ac961dc2134c4e9828c185b0f2923f"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a15ac961dc2134c4e9828c185b0f2923f"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a15ac961dc2134c4e9828c185b0f2923f"></a>stop query</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ac9a1ff3e709048ecb07b7e280518a8f7"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ac9a1ff3e709048ecb07b7e280518a8f7"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ac9a1ff3e709048ecb07b7e280518a8f7"></a>Stopping the query that is being executed through the connection</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_rf0c9fecb5ae04bd6a504990d7673ed40"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a57ab22c9044a4760b6ad8b48ddd06864"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a57ab22c9044a4760b6ad8b48ddd06864"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a57ab22c9044a4760b6ad8b48ddd06864"></a>wait node: [nodename](plevel), total N, [phase]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><div class="p" id="en-us_topic_0283136724_en-us_topic_0237122466_p577573613228"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p577573613228"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p577573613228"></a>Waiting for receiving data from a connected node. The thread is waiting for data from the plevel thread of the node specified by <em id="i0873195414212"><a name="i0873195414212"></a><a name="i0873195414212"></a>nodename</em>. The data of <em id="i987575422113"><a name="i987575422113"></a><a name="i987575422113"></a>N</em> connections is waiting to be returned. If <em id="i53006546217"><a name="i53006546217"></a><a name="i53006546217"></a>phase</em> is included, the possible phases are as follows:<a name="en-us_topic_0283136724_en-us_topic_0237122466_ul21682503315"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_ul21682503315"></a><ul id="en-us_topic_0283136724_en-us_topic_0237122466_ul21682503315"><li><strong id="b67511656162116"><a name="b67511656162116"></a><a name="b67511656162116"></a>begin</strong>: The transaction is being started.</li><li><strong id="b27221357192117"><a name="b27221357192117"></a><a name="b27221357192117"></a>commit</strong>: The transaction is being committed.</li><li><strong id="b0686558152112"><a name="b0686558152112"></a><a name="b0686558152112"></a>rollback</strong>: The transaction is being rolled back.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r337d029fb3e5419b95cfc5526d023ced"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p482561592646"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p482561592646"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_en-us_topic_0058965581_p482561592646"></a>wait transaction sync: xid</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_afeb071f345c843d09e641fc81a86720c"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_afeb071f345c843d09e641fc81a86720c"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_afeb071f345c843d09e641fc81a86720c"></a>Waiting for synchronizing the transaction specified by <em id="i1464717032215"><a name="i1464717032215"></a><a name="i1464717032215"></a>xid</em></p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r4326340771544403a422f685f437ddcf"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_abedc2f63f82543cdb395596a4475ce05"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_abedc2f63f82543cdb395596a4475ce05"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_abedc2f63f82543cdb395596a4475ce05"></a>wait wal sync</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a6e45ea151ef14fe498557618f4a6281c"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a6e45ea151ef14fe498557618f4a6281c"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a6e45ea151ef14fe498557618f4a6281c"></a>Waiting for the completion of WAL of synchronization from the specified LSN to the standby instance</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r768ae2800c79475db1034306571c9a5d"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a6bf3f76247444142bc65d6f2dbe18640"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a6bf3f76247444142bc65d6f2dbe18640"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a6bf3f76247444142bc65d6f2dbe18640"></a>wait data sync</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a9a929b6c0d1d475da2fe5db9fc3eaa70"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a9a929b6c0d1d475da2fe5db9fc3eaa70"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a9a929b6c0d1d475da2fe5db9fc3eaa70"></a>Waiting for the completion of data page synchronization to the standby instance</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r3b48feeb2f6a471fa39671f0cd562ce6"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ac50071fce62540ed8fa53c46d4449817"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ac50071fce62540ed8fa53c46d4449817"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ac50071fce62540ed8fa53c46d4449817"></a>wait data sync queue</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad8cd7b5bf0eb4f9faae734fe48fce47f"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad8cd7b5bf0eb4f9faae734fe48fce47f"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad8cd7b5bf0eb4f9faae734fe48fce47f"></a>Waiting for putting the data pages that are in the row-store or the CU in the column-store into the synchronization queue</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r1c781b3f817b42cfa00689cf266cada7"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad5c0e89fd8494ac1a2f8998f613bcde6"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad5c0e89fd8494ac1a2f8998f613bcde6"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ad5c0e89fd8494ac1a2f8998f613bcde6"></a>flush data: [nodename](plevel), [phase]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a82e8b0d491934d26b07c5a7a29571c57"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a82e8b0d491934d26b07c5a7a29571c57"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a82e8b0d491934d26b07c5a7a29571c57"></a>Waiting for sending data to the plevel thread of the node specified by <em id="i8590175172212"><a name="i8590175172212"></a><a name="i8590175172212"></a>nodename</em>. If <em id="i02922614226"><a name="i02922614226"></a><a name="i02922614226"></a>phase</em> is included, the possible phase is <strong id="b132956616228"><a name="b132956616228"></a><a name="b132956616228"></a>wait quota</strong>, indicating that the current communication flow is waiting for the quota value.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r7107c33f2b374b5a814348fa29859321"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa66d733115a948c082dc8a28e36af968"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa66d733115a948c082dc8a28e36af968"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_aa66d733115a948c082dc8a28e36af968"></a>stream get conn: [nodename], total N</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a861d2d6d2cdc4257b2e9ad6b5b8d7409"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a861d2d6d2cdc4257b2e9ad6b5b8d7409"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a861d2d6d2cdc4257b2e9ad6b5b8d7409"></a>Waiting for connecting to the consumer object of the node specified by <em id="i146275712218"><a name="i146275712218"></a><a name="i146275712218"></a>nodename</em> when the stream flow is initialized. There are <em id="i116306732217"><a name="i116306732217"></a><a name="i116306732217"></a>N</em> consumers waiting to be connected.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_r48e3d8cba57d4d4a9bdc5428d8f91619"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab183ab17f90f4d4d9b5a16b5167dada5"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab183ab17f90f4d4d9b5a16b5167dada5"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab183ab17f90f4d4d9b5a16b5167dada5"></a>wait producer ready: [nodename](plevel), total N</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a42fe9f0c6cb944ecbe29c1238035f52d"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a42fe9f0c6cb944ecbe29c1238035f52d"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a42fe9f0c6cb944ecbe29c1238035f52d"></a>Waiting for each producer to be ready when the stream flow is initialized. The thread is waiting for the procedure of the plevel thread on the <em id="i104369112217"><a name="i104369112217"></a><a name="i104369112217"></a>nodename</em> node to be ready. There are <em id="i745129152215"><a name="i745129152215"></a><a name="i745129152215"></a>N</em> producers waiting to be ready.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_rf183baced3904d95a4bdc9f975009dcf"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5284ae7a66bb4198b923c944465a8ca8"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5284ae7a66bb4198b923c944465a8ca8"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a5284ae7a66bb4198b923c944465a8ca8"></a>synchronize quit</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a03722ed898714814844dad8f7257f230"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a03722ed898714814844dad8f7257f230"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a03722ed898714814844dad8f7257f230"></a>Waiting for the threads in the stream thread group to quit when the stream plan ends</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_rda3a4ec458594ba1a32c045bea045b79"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab8c886a1cb7240ddb099e697cf5602e7"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab8c886a1cb7240ddb099e697cf5602e7"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_ab8c886a1cb7240ddb099e697cf5602e7"></a>wait stream nodegroup destroy</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a85f97a0421f949b2ab05128250165d0d"><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a85f97a0421f949b2ab05128250165d0d"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_en-us_topic_0059777957_a85f97a0421f949b2ab05128250165d0d"></a>Waiting for destroying the stream node group when the stream plan ends</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row14767655113316"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p137674550338"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p137674550338"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p137674550338"></a>wait active statement</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1176715558335"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1176715558335"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1176715558335"></a>Waiting for job execution under resource and load control</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row19650172892719"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1865082892710"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1865082892710"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1865082892710"></a>analyze: [relname], [phase]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p2065072872717"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2065072872717"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2065072872717"></a>The thread is doing <strong id="b116691033162214"><a name="b116691033162214"></a><a name="b116691033162214"></a>ANALYZE</strong> to the <em id="i1467812337226"><a name="i1467812337226"></a><a name="i1467812337226"></a>relname</em> table. If <em id="i8672163472218"><a name="i8672163472218"></a><a name="i8672163472218"></a>phase</em> is included, the possible phase is <strong id="b767423432219"><a name="b767423432219"></a><a name="b767423432219"></a>autovacuum</strong>, indicating that the database automatically enables the AutoVacuum thread to execute <strong id="b19676163442219"><a name="b19676163442219"></a><a name="b19676163442219"></a>ANALYZE</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row13650172842711"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p165012816279"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p165012816279"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p165012816279"></a>vacuum: [relname], [phase]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p10650132810279"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p10650132810279"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p10650132810279"></a>The thread is doing <strong id="b284723552214"><a name="b284723552214"></a><a name="b284723552214"></a>VACUUM</strong> to the <em id="i88491935152214"><a name="i88491935152214"></a><a name="i88491935152214"></a>relname</em> table. If <em id="i1364133762214"><a name="i1364133762214"></a><a name="i1364133762214"></a>phase</em> is included, the possible phase is <strong id="b16663782219"><a name="b16663782219"></a><a name="b16663782219"></a>autovacuum</strong>, indicating that the database automatically enables the AutoVacuum thread to execute <strong id="b1569837172215"><a name="b1569837172215"></a><a name="b1569837172215"></a>VACUUM</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row8650828162716"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p26501328142718"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p26501328142718"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p26501328142718"></a>vacuum full: [relname]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p19651102882715"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19651102882715"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19651102882715"></a>The thread is doing <strong id="b1454163822217"><a name="b1454163822217"></a><a name="b1454163822217"></a>VACUUM FULL</strong> to the <em id="i1256338112213"><a name="i1256338112213"></a><a name="i1256338112213"></a>relname</em> table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row11651828112718"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p186511828192716"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p186511828192716"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p186511828192716"></a>create index</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p26511328192717"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p26511328192717"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p26511328192717"></a>An index is being created.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row10651028172712"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p16651162872712"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16651162872712"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16651162872712"></a>HashJoin - [ build hash | write file ]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><div class="p" id="en-us_topic_0283136724_en-us_topic_0237122466_p146511528162711"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p146511528162711"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p146511528162711"></a>The <strong id="b58118429221"><a name="b58118429221"></a><a name="b58118429221"></a>HashJoin</strong> operator is being executed. In this phase, you need to pay attention to the execution time-consuming.<a name="en-us_topic_0283136724_en-us_topic_0237122466_ul10627844133118"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_ul10627844133118"></a><ul id="en-us_topic_0283136724_en-us_topic_0237122466_ul10627844133118"><li><strong id="b13140443102219"><a name="b13140443102219"></a><a name="b13140443102219"></a>build hash</strong>: The <strong id="b1314214372212"><a name="b1314214372212"></a><a name="b1314214372212"></a>HashJoin</strong> operator is creating a hash table.</li><li><strong id="b18112144452216"><a name="b18112144452216"></a><a name="b18112144452216"></a>write file</strong>: The <strong id="b9114124420224"><a name="b9114124420224"></a><a name="b9114124420224"></a>HashJoin</strong> operator is writing data to disks.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row565102819272"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1651142818270"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1651142818270"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1651142818270"></a>HashAgg - [ build hash | write file ]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><div class="p" id="en-us_topic_0283136724_en-us_topic_0237122466_p165102818277"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p165102818277"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p165102818277"></a>The <strong id="b1449254532211"><a name="b1449254532211"></a><a name="b1449254532211"></a>HashAgg</strong> operator is being executed. In this phase, you need to pay attention to the execution time-consuming.<a name="en-us_topic_0283136724_en-us_topic_0237122466_ul152447611329"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_ul152447611329"></a><ul id="en-us_topic_0283136724_en-us_topic_0237122466_ul152447611329"><li><strong id="b1747912469224"><a name="b1747912469224"></a><a name="b1747912469224"></a>build hash</strong>: The <strong id="b16482114692218"><a name="b16482114692218"></a><a name="b16482114692218"></a>HashAgg</strong> operator is creating a hash table.</li><li><strong id="b163406472223"><a name="b163406472223"></a><a name="b163406472223"></a>write file</strong>: The <strong id="b53431247132214"><a name="b53431247132214"></a><a name="b53431247132214"></a>HashAgg</strong> operator is writing data to disks.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row186511028192718"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1465252814278"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1465252814278"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1465252814278"></a>HashSetop - [build hash | write file ]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><div class="p" id="en-us_topic_0283136724_en-us_topic_0237122466_p16652192872711"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16652192872711"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16652192872711"></a>The <strong id="b94045484223"><a name="b94045484223"></a><a name="b94045484223"></a>HashSetop</strong> operator is being executed. In this phase, you need to pay attention to the execution time-consuming.<a name="en-us_topic_0283136724_en-us_topic_0237122466_ul5196135473214"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_ul5196135473214"></a><ul id="en-us_topic_0283136724_en-us_topic_0237122466_ul5196135473214"><li><strong id="b1138885152215"><a name="b1138885152215"></a><a name="b1138885152215"></a>build hash</strong>: The <strong id="b12396175115229"><a name="b12396175115229"></a><a name="b12396175115229"></a>HashSetop</strong> operator is creating a hash table.</li><li><strong id="b14268252162219"><a name="b14268252162219"></a><a name="b14268252162219"></a>write file</strong>: The <strong id="b52703521222"><a name="b52703521222"></a><a name="b52703521222"></a>HashSetop</strong> operator is writing data to disks.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1865282815271"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p16522280274"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16522280274"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16522280274"></a>Sort | Sort - [fetch tuple | write file]</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p19652182882719"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19652182882719"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19652182882719"></a>The <strong id="b1096245864019"><a name="b1096245864019"></a><a name="b1096245864019"></a>Sort</strong> operator is used for sorting. <strong id="b10868121534019"><a name="b10868121534019"></a><a name="b10868121534019"></a>fetch tuple</strong> indicates that the <strong id="b1897212312417"><a name="b1897212312417"></a><a name="b1897212312417"></a>Sort</strong> operator is obtaining tuples, and <strong id="b98041314124111"><a name="b98041314124111"></a><a name="b98041314124111"></a>write file</strong> indicates that the <strong id="b444518207414"><a name="b444518207414"></a><a name="b444518207414"></a>Sort</strong> operator is writing data to disks.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1865242818275"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1965218287273"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1965218287273"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1965218287273"></a>Material | Material - write file</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p16652112842710"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16652112842710"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16652112842710"></a>The <strong id="b86441544227"><a name="b86441544227"></a><a name="b86441544227"></a>Material</strong> operator is being executed. <strong id="b66468541221"><a name="b66468541221"></a><a name="b66468541221"></a>write file</strong> indicates that the <strong id="b1364885462217"><a name="b1364885462217"></a><a name="b1364885462217"></a>Material</strong> operator is writing data to disks.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row191001432102112"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p57723162117"><a name="en-us_topic_0283136724_p57723162117"></a><a name="en-us_topic_0283136724_p57723162117"></a>NestLoop</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p577203119214"><a name="en-us_topic_0283136724_p577203119214"></a><a name="en-us_topic_0283136724_p577203119214"></a>The <strong id="b17997144510210"><a name="b17997144510210"></a><a name="b17997144510210"></a>NestLoop</strong> operator is being executed.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row2069011916224"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p2881111812229"><a name="en-us_topic_0283136724_p2881111812229"></a><a name="en-us_topic_0283136724_p2881111812229"></a>wait memory</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p14881718152212"><a name="en-us_topic_0283136724_p14881718152212"></a><a name="en-us_topic_0283136724_p14881718152212"></a>Waiting for obtaining the memory</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row206072217227"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p19682162016228"><a name="en-us_topic_0283136724_p19682162016228"></a><a name="en-us_topic_0283136724_p19682162016228"></a>wait sync consumer next step</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p26821420112219"><a name="en-us_topic_0283136724_p26821420112219"></a><a name="en-us_topic_0283136724_p26821420112219"></a>Waiting for the consumer to execute the stream operator</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row9483152492216"><td class="cellrowborder" valign="top" width="43.419999999999995%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p10661823122212"><a name="en-us_topic_0283136724_p10661823122212"></a><a name="en-us_topic_0283136724_p10661823122212"></a>wait sync producer next step</p>
</td>
<td class="cellrowborder" valign="top" width="56.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p866113235224"><a name="en-us_topic_0283136724_p866113235224"></a><a name="en-us_topic_0283136724_p866113235224"></a>Waiting for the producer to execute the stream operator</p>
</td>
</tr>
</tbody>
</table>

If  **wait\_status**  is  **acquire lwlock**,  **acquire lock**, or  **wait io**, there is an event performing I/O operations or waiting for obtaining the corresponding lightweight lock or transaction lock.

The following table describes the corresponding wait events when  **wait\_status**  is  **acquire lwlock**. If  **wait\_event**  is  **extension**, the lightweight lock is dynamically allocated and is not monitored.

**Table  3**  List of wait events corresponding to lightweight locks

<a name="en-us_topic_0283136724_en-us_topic_0237122466_table38811324183420"></a>
<table><thead align="left"><tr id="en-us_topic_0283136724_en-us_topic_0237122466_row129991046153412"><th class="cellrowborder" valign="top" width="38.18%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136724_en-us_topic_0237122466_p0094712340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0094712340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0094712340"></a>wait_event</p>
</th>
<th class="cellrowborder" valign="top" width="61.82%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136724_en-us_topic_0237122466_p120747143414"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p120747143414"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p120747143414"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136724_en-us_topic_0237122466_row13247325123414"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p32473256340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p32473256340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p32473256340"></a>ShmemIndexLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1562515491617"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1562515491617"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1562515491617"></a>Used to protect the primary index table, a hash table, in shared memory.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row20247102511341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p6247425203415"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6247425203415"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6247425203415"></a>OidGenLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p13247182553420"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p13247182553420"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p13247182553420"></a>Used to prevent different threads from generating the same OID.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row112471525183418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p15247182523415"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15247182523415"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15247182523415"></a>XidGenLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1224722514343"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1224722514343"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1224722514343"></a>Used to prevent two transactions from obtaining the same transaction ID.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row132471825203418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p192473257349"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p192473257349"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p192473257349"></a>ProcArrayLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p42471825123413"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p42471825123413"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p42471825123413"></a>Used to prevent concurrent access to or concurrent modification on ProcArray shared arrays.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row92471325133410"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p11247162563412"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11247162563412"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11247162563412"></a>SInvalReadLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p15247172523410"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15247172523410"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15247172523410"></a>Used to prevent concurrent execution with invalid message deletion.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row15247182533419"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p20247125103416"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20247125103416"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20247125103416"></a>SInvalWriteLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1924742583413"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1924742583413"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1924742583413"></a>Used to prevent concurrent execution with invalid message write and deletion.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row112471025103413"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p3249132512346"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p3249132512346"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p3249132512346"></a>WALInsertLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p17249132519343"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17249132519343"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17249132519343"></a>Used to prevent concurrent execution with WAL insertion.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1524912563419"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p11249142513340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11249142513340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11249142513340"></a>WALWriteLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p424952515340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p424952515340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p424952515340"></a>Used to prevent concurrent write from a WAL buffer to a disk.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row19249192512343"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p724962523419"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p724962523419"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p724962523419"></a>ControlFileLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p6249425153417"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6249425153417"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6249425153417"></a>Used to prevent concurrent read/write or concurrent write/write on the <strong id="b16750161818231"><a name="b16750161818231"></a><a name="b16750161818231"></a>pg_control</strong> file.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row102495252348"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p102491725183419"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p102491725183419"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p102491725183419"></a>CheckpointLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p9249132520343"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p9249132520343"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p9249132520343"></a>Used to prevent multi-checkpoint concurrent execution.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row7249025113410"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p724902514340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p724902514340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p724902514340"></a>CLogControlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p192491625183411"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p192491625183411"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p192491625183411"></a>Used to prevent concurrent access to or concurrent modification on the Clog control data structure.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row52499251345"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p2249825133418"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2249825133418"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2249825133418"></a>SubtransControlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p52504256348"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p52504256348"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p52504256348"></a>Used to prevent concurrent access to or concurrent modification on the subtransaction control data structure.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1325016258348"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p22501725203416"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p22501725203416"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p22501725203416"></a>MultiXactGenLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1125002503413"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1125002503413"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1125002503413"></a>Used to allocate a unique MultiXact ID in serial mode.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row11250925163410"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p5250325143414"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p5250325143414"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p5250325143414"></a>MultiXactOffsetControlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p0250142543414"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0250142543414"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0250142543414"></a>Used to prevent concurrent read/write or concurrent write/write on <strong id="b1646842982315"><a name="b1646842982315"></a><a name="b1646842982315"></a>pg_multixact/offset</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row7250102514348"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p025042563412"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p025042563412"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p025042563412"></a>MultiXactMemberControlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p102506258340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p102506258340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p102506258340"></a>Used to prevent concurrent read/write or concurrent write/write on <strong id="b1133843016232"><a name="b1133843016232"></a><a name="b1133843016232"></a>pg_multixact/members</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row725032516341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p0251925133410"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0251925133410"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0251925133410"></a>RelCacheInitLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p6251325173411"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6251325173411"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6251325173411"></a>Used to add a lock before any operations are performed on the <strong id="b713419313237"><a name="b713419313237"></a><a name="b713419313237"></a>init</strong> file when messages are invalid.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row16251125153414"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p19251525173411"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19251525173411"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19251525173411"></a>CheckpointerCommLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p625182515340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p625182515340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p625182515340"></a>Used to send file flush requests to a checkpointer. The request structure needs to be inserted to a request queue in serial mode.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row19251172513344"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p92511254346"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p92511254346"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p92511254346"></a>TwoPhaseStateLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p32511025173418"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p32511025173418"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p32511025173418"></a>Used to prevent concurrent access to or modification on two-phase information sharing arrays.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row16251132533416"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1025152593420"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1025152593420"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1025152593420"></a>TablespaceCreateLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p325111254343"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p325111254343"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p325111254343"></a>Used to check whether a tablespace already exists.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row425114255349"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p192510255349"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p192510255349"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p192510255349"></a>BtreeVacuumLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p11251112510347"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11251112510347"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11251112510347"></a>Used to prevent <strong id="b145174364236"><a name="b145174364236"></a><a name="b145174364236"></a>VACUUM</strong> from clearing pages that are being used by B-tree indexes.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1925113256346"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p17251112517348"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17251112517348"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17251112517348"></a>AutovacuumLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p14251192519348"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14251192519348"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14251192519348"></a>Used to access the autovacuum worker array in serial mode.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1125122563417"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p202521925143417"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p202521925143417"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p202521925143417"></a>AutovacuumScheduleLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p7252152514345"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p7252152514345"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p7252152514345"></a>Used to distribute tables requiring <strong id="b1110193962318"><a name="b1110193962318"></a><a name="b1110193962318"></a>VACUUM</strong> in serial mode.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row42521253341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p152521625123412"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p152521625123412"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p152521625123412"></a>AutoanalyzeLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1425217256347"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1425217256347"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1425217256347"></a>Used to obtain and release resources related to a task that allows for autoanalyze execution.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row142521625153419"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p17252102511342"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17252102511342"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17252102511342"></a>SyncScanLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p18252125173413"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p18252125173413"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p18252125173413"></a>Used to determine the start position of a relfilenode during heap scanning.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row102521225193410"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p10252102513342"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p10252102513342"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p10252102513342"></a>NodeTableLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p169831520141619"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p169831520141619"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p169831520141619"></a>Used to protect a shared structure that stores database node information.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row202521225133412"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p7252325153414"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p7252325153414"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p7252325153414"></a>PoolerLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p16252425143410"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16252425143410"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16252425143410"></a>Used to prevent two threads from simultaneously obtaining the same connection from a connection pool.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row125262512341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p20252425133413"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20252425133413"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20252425133413"></a>RelationMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1525252553415"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1525252553415"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1525252553415"></a>Used to wait for the mapping file between system catalogs and storage locations to be updated.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row225212254345"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p12521625133420"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p12521625133420"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p12521625133420"></a>AsyncCtlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p925222519348"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p925222519348"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p925222519348"></a>Used to prevent concurrent access to or concurrent modification on the sharing notification status.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row12252182517345"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p162527257347"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p162527257347"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p162527257347"></a>AsyncQueueLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p162528251342"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p162528251342"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p162528251342"></a>Used to prevent concurrent access to or concurrent modification on the sharing notification queue.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row11252525143415"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p325242512347"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p325242512347"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p325242512347"></a>SerializableXactHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p17252182513340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17252182513340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17252182513340"></a>Used to prevent concurrent read/write or concurrent write/write on a sharing structure for serializable transactions.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1925282512348"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p2025222513410"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2025222513410"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2025222513410"></a>SerializableFinishedListLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p16252142517344"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16252142517344"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16252142517344"></a>Used to prevent concurrent read/write or concurrent write/write on a shared linked list for completed serial transactions.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row20252182518346"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p02522025143416"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p02522025143416"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p02522025143416"></a>SerializablePredicateLockListLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p192521325113417"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p192521325113417"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p192521325113417"></a>Used to protect a linked list of serializable transactions that have locks.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row5252142563411"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p425232513416"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p425232513416"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p425232513416"></a>OldSerXidLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1925215255340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1925215255340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1925215255340"></a>Used to protect a structure that records serializable transactions that have conflicts.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row172521825203419"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p17253625103411"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17253625103411"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17253625103411"></a>FileStatLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p72537258342"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p72537258342"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p72537258342"></a>Used to protect a data structure that stores statistics file information.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row112531225103410"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1325342523412"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1325342523412"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1325342523412"></a>SyncRepLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p92536254343"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p92536254343"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p92536254343"></a>Used to protect Xlog synchronization information during primary/standby replication.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row132538259341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p22532258340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p22532258340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p22532258340"></a>DataSyncRepLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p2025312510349"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2025312510349"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2025312510349"></a>Used to protect data page synchronization information during primary/standby replication.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row12253152517347"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p0253152553415"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0253152553415"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0253152553415"></a>CStoreColspaceCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p574012310146"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p574012310146"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p574012310146"></a>Used to add a lock when CU space is allocated for a column-store table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row7253152513420"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p9253225193412"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p9253225193412"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p9253225193412"></a>CStoreCUCacheSweepLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1979121021411"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1979121021411"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1979121021411"></a>Used to add a lock when CU caches used by a column-store table are cyclically washed out.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row9253172515342"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p325322533411"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p325322533411"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p325322533411"></a>MetaCacheSweepLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p82543257341"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p82543257341"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p82543257341"></a>Used to add a lock when metadata is cyclically washed out.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row7254325113418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1325452543419"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1325452543419"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1325452543419"></a>ExtensionConnectorLibLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p22545253341"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p22545253341"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p22545253341"></a>Adds a lock when a specific dynamic library is loaded or uninstalled in ODBC connection initialization scenarios.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row525416251347"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p42544257340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p42544257340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p42544257340"></a>SearchServerLibLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p2254125193420"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2254125193420"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2254125193420"></a>Used to add a lock on the file read operation when a specific dynamic library is initially loaded in GPU-accelerated scenarios.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row4255025113413"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p72551225173418"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p72551225173418"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p72551225173418"></a>LsnXlogChkFileLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p16255192510342"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16255192510342"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16255192510342"></a>Used to serially update the Xlog flush points for primary and standby servers recorded in a specific structure.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1525572513347"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p17255122514346"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17255122514346"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17255122514346"></a>ReplicationSlotAllocationLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p18255825183414"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p18255825183414"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p18255825183414"></a>Used to add a lock when a primary server allocates stream replication slots during primary/standby replication.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1425562573418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p5255142593419"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p5255142593419"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p5255142593419"></a>ReplicationSlotControlLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1725532516341"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1725532516341"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1725532516341"></a>Used to prevent concurrent update of stream replication slot status during primary/standby replication.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row32551425133412"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p62557259342"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p62557259342"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p62557259342"></a>ResourcePoolHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p52561425153411"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p52561425153411"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p52561425153411"></a>Used to prevent concurrent access to or concurrent modification on a resource pool table, a hash table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row525615254349"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p2256102513343"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2256102513343"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2256102513343"></a>WorkloadStatHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p10256172553414"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p10256172553414"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p10256172553414"></a>Used to prevent concurrent access to or concurrent modification on a hash table that contains SQL requests from <span id="en-us_topic_0283136724_text71705215429"><a name="en-us_topic_0283136724_text71705215429"></a><a name="en-us_topic_0283136724_text71705215429"></a>the primary node of the database</span>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row15256192515346"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p325619256340"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p325619256340"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p325619256340"></a>WorkloadIoStatHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p11256122517348"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11256122517348"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11256122517348"></a>Used to prevent concurrent access to or concurrent modification on a hash table that contains I/O information of the current <span id="en-us_topic_0283136724_text21271352204813"><a name="en-us_topic_0283136724_text21271352204813"></a><a name="en-us_topic_0283136724_text21271352204813"></a>database node</span>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1325682512348"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p14256202515342"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14256202515342"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14256202515342"></a>WorkloadCGroupHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p6256182533413"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6256182533413"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6256182533413"></a>Used to prevent concurrent access to or concurrent modification on a hash table that contains Cgroup information.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row325614258345"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p125652519346"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p125652519346"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p125652519346"></a>OBSGetPathLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p8256225173416"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p8256225173416"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p8256225173416"></a>Used to prevent concurrent read/write or concurrent write/write on an OBS path.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row2256142512349"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1025622563420"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1025622563420"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1025622563420"></a>WorkloadUserInfoLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p122566255349"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p122566255349"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p122566255349"></a>Used to prevent concurrent access to or concurrent modification on a hash table that contains user information about load management.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row225682553412"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p16258925173414"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16258925173414"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16258925173414"></a>WorkloadRecordLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p11258825183411"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11258825183411"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11258825183411"></a>Used to prevent concurrent access to or concurrent modification on a hash table that contains requests received by <span id="en-us_topic_0283136724_text15334847428"><a name="en-us_topic_0283136724_text15334847428"></a><a name="en-us_topic_0283136724_text15334847428"></a>the primary node of the database</span> during adaptive memory management.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row132581255344"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p14258142543412"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14258142543412"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14258142543412"></a>WorkloadIOUtilLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1025832519341"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1025832519341"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1025832519341"></a>Used to protect a structure that records <strong id="b231184810248"><a name="b231184810248"></a><a name="b231184810248"></a>iostat</strong> and CPU load information.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row11258125193417"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p825812256349"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p825812256349"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p825812256349"></a>WorkloadNodeGroupLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p132581425183419"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p132581425183419"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p132581425183419"></a>Used to prevent concurrent access to or concurrent modification on a hash table that contains node group information in memory.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row16258142573415"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p19258725163411"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19258725163411"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19258725163411"></a>JobShmemLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p925811250349"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p925811250349"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p925811250349"></a>Used to protect global variables in the shared memory that is periodically read during a scheduled task.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1025822511342"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p12258122514343"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p12258122514343"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p12258122514343"></a>OBSRuntimeLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p9258425123416"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p9258425123416"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p9258425123416"></a>Used to obtain environment variables, for example, <em id="i2809182216253"><a name="i2809182216253"></a><a name="i2809182216253"></a>GASSHOME</em>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row725818258341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p19258625153412"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19258625153412"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19258625153412"></a>LLVMDumpIRLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1325817253342"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1325817253342"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1325817253342"></a>Used to export the assembly language for dynamically generating functions.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1325812563418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p725942543419"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p725942543419"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p725942543419"></a>LLVMParseIRLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p2259182513419"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2259182513419"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2259182513419"></a>Used to compile and parse a finished IR function from the IR file at the start position of a query.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1259172514341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p525917257341"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p525917257341"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p525917257341"></a>CriticalCacheBuildLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p625982519342"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p625982519342"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p625982519342"></a>Used to load caches from a shared or local cache initialization file.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row6259162518343"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p0259132533413"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0259132533413"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0259132533413"></a>WaitCountHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p2259142516348"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2259142516348"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2259142516348"></a>Used to protect a shared structure in user statement counting scenarios.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1025922503419"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p926022553413"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p926022553413"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p926022553413"></a>BufMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p12608252348"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p12608252348"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p12608252348"></a>Used to protect operations on a shared-buffer mapping table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1026042511346"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p6260125103411"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6260125103411"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6260125103411"></a>LockMgrLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p226013253342"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p226013253342"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p226013253342"></a>Used to protect the information about a common lock structure.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row13260725133411"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p6260225163410"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6260225163410"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6260225163410"></a>PredicateLockMgrLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p526082512347"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p526082512347"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p526082512347"></a>Used to protect the information about a lock structure that has serializable transactions.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row3260725113416"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p426019253343"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p426019253343"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p426019253343"></a>OperatorRealTLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p72602255347"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p72602255347"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p72602255347"></a>Used to prevent concurrent access to or concurrent modification on a global structure that contains real-time data at the operator level.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row326032518347"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1026010252347"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1026010252347"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1026010252347"></a>OperatorHistLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p2260112516341"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2260112516341"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2260112516341"></a>Used to prevent concurrent access to or concurrent modification on a global structure that contains historical data at the operator level.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1826072511341"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p72608255344"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p72608255344"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p72608255344"></a>SessionRealTLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p152601725143410"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p152601725143410"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p152601725143410"></a>Used to prevent concurrent access to or concurrent modification on a global structure that contains real-time data at the query level.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row5260132513349"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p20260825113415"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20260825113415"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20260825113415"></a>SessionHistLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p5260225123412"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p5260225123412"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p5260225123412"></a>Used to prevent concurrent access to or concurrent modification on a global structure that contains historical data at the query level.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row12601725153418"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1326072543417"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1326072543417"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1326072543417"></a>CacheSlotMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p9260425123418"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p9260425123418"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p9260425123418"></a>Used to protect global CU cache information.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row172601125133414"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1126016250347"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1126016250347"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1126016250347"></a>BarrierLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1026016252345"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1026016252345"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1026016252345"></a>Used to ensure that only one thread is creating a barrier at a time.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row278133495114"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p57821343513"><a name="en-us_topic_0283136724_p57821343513"></a><a name="en-us_topic_0283136724_p57821343513"></a>dummyServerInfoCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p57821734135115"><a name="en-us_topic_0283136724_p57821734135115"></a><a name="en-us_topic_0283136724_p57821734135115"></a>Used to protect a global hash table where the information about <span id="text179123126198"><a name="text179123126198"></a><a name="text179123126198"></a>openGauss</span> connections is cached.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row1627312534524"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p4274353195211"><a name="en-us_topic_0283136724_p4274353195211"></a><a name="en-us_topic_0283136724_p4274353195211"></a>RPNumberLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p92741453175218"><a name="en-us_topic_0283136724_p92741453175218"></a><a name="en-us_topic_0283136724_p92741453175218"></a>Used by a database node on a computing <span id="text13185104617018"><a name="text13185104617018"></a><a name="text13185104617018"></a>openGauss</span> to count the number of threads for a task where plans are being executed.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row115345178541"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p135341179541"><a name="en-us_topic_0283136724_p135341179541"></a><a name="en-us_topic_0283136724_p135341179541"></a>CBMParseXlogLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p75341617115410"><a name="en-us_topic_0283136724_p75341617115410"></a><a name="en-us_topic_0283136724_p75341617115410"></a>Used to protect the lock used when CBM parses Xlogs.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row1419795555416"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p019875565411"><a name="en-us_topic_0283136724_p019875565411"></a><a name="en-us_topic_0283136724_p019875565411"></a>RelfilenodeReuseLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p151989558547"><a name="en-us_topic_0283136724_p151989558547"></a><a name="en-us_topic_0283136724_p151989558547"></a>Used to prevent the link to a reused column attribute file from being canceled by mistake.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row415513565817"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p16155155105810"><a name="en-us_topic_0283136724_p16155155105810"></a><a name="en-us_topic_0283136724_p16155155105810"></a>RcvWriteLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p19155165145816"><a name="en-us_topic_0283136724_p19155165145816"></a><a name="en-us_topic_0283136724_p19155165145816"></a>Used to prevent concurrent call of <strong id="b134301128171219"><a name="b134301128171219"></a><a name="b134301128171219"></a>WalDataRcvWrite</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row75270512587"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p14528185115817"><a name="en-us_topic_0283136724_p14528185115817"></a><a name="en-us_topic_0283136724_p14528185115817"></a>PercentileLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1652817519585"><a name="en-us_topic_0283136724_p1652817519585"></a><a name="en-us_topic_0283136724_p1652817519585"></a>Used to protect global percentile buffers.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row642581816115"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p1542571810117"><a name="en-us_topic_0283136724_p1542571810117"></a><a name="en-us_topic_0283136724_p1542571810117"></a>CSNBufMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p174251118119"><a name="en-us_topic_0283136724_p174251118119"></a><a name="en-us_topic_0283136724_p174251118119"></a>Used to protect CSN pages.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row16334361129"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p133341162219"><a name="en-us_topic_0283136724_p133341162219"></a><a name="en-us_topic_0283136724_p133341162219"></a>UniqueSQLMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p15334961128"><a name="en-us_topic_0283136724_p15334961128"></a><a name="en-us_topic_0283136724_p15334961128"></a>Used to protect a unique SQL hash table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row107301846161711"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p573013460178"><a name="en-us_topic_0283136724_p573013460178"></a><a name="en-us_topic_0283136724_p573013460178"></a>DelayDDLLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p273116463179"><a name="en-us_topic_0283136724_p273116463179"></a><a name="en-us_topic_0283136724_p273116463179"></a>Used to prevent concurrent DDL operations.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row0177126141920"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p15177132691912"><a name="en-us_topic_0283136724_p15177132691912"></a><a name="en-us_topic_0283136724_p15177132691912"></a>CLOG Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p9177102631917"><a name="en-us_topic_0283136724_p9177102631917"></a><a name="en-us_topic_0283136724_p9177102631917"></a>Used to prevent concurrent access to or concurrent modification on the Clog control data structure.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row13521171316206"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p2521181342020"><a name="en-us_topic_0283136724_p2521181342020"></a><a name="en-us_topic_0283136724_p2521181342020"></a>Async Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p552291322017"><a name="en-us_topic_0283136724_p552291322017"></a><a name="en-us_topic_0283136724_p552291322017"></a>Used to protect asynchronization buffers.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row039155742010"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p1439115714203"><a name="en-us_topic_0283136724_p1439115714203"></a><a name="en-us_topic_0283136724_p1439115714203"></a>MultiXactOffset Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p133935792010"><a name="en-us_topic_0283136724_p133935792010"></a><a name="en-us_topic_0283136724_p133935792010"></a>Used to protect SLRU buffers of a MultiXact offset.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row8426111952114"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p9426111912211"><a name="en-us_topic_0283136724_p9426111912211"></a><a name="en-us_topic_0283136724_p9426111912211"></a>MultiXactMember Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p14426111922110"><a name="en-us_topic_0283136724_p14426111922110"></a><a name="en-us_topic_0283136724_p14426111922110"></a>Used to protect SLRU buffer of a MultiXact member.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row16796316172217"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p3796201602217"><a name="en-us_topic_0283136724_p3796201602217"></a><a name="en-us_topic_0283136724_p3796201602217"></a>OldSerXid SLRU Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1879651619229"><a name="en-us_topic_0283136724_p1879651619229"></a><a name="en-us_topic_0283136724_p1879651619229"></a>Used to protect SLRU buffers of old transaction IDs.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row13779172092517"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p12780122022517"><a name="en-us_topic_0283136724_p12780122022517"></a><a name="en-us_topic_0283136724_p12780122022517"></a>ReplicationSlotLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p10780192013252"><a name="en-us_topic_0283136724_p10780192013252"></a><a name="en-us_topic_0283136724_p10780192013252"></a>Used to protect a replication slot.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row61636273260"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p201634278269"><a name="en-us_topic_0283136724_p201634278269"></a><a name="en-us_topic_0283136724_p201634278269"></a>PGPROCLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p13163132713260"><a name="en-us_topic_0283136724_p13163132713260"></a><a name="en-us_topic_0283136724_p13163132713260"></a>Used to protect the PGPROC structure.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row93871137270"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p1838711316274"><a name="en-us_topic_0283136724_p1838711316274"></a><a name="en-us_topic_0283136724_p1838711316274"></a>MetaCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p338711139273"><a name="en-us_topic_0283136724_p338711139273"></a><a name="en-us_topic_0283136724_p338711139273"></a>Used to protect meta caches.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row51712311285"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p181783132811"><a name="en-us_topic_0283136724_p181783132811"></a><a name="en-us_topic_0283136724_p181783132811"></a>DataCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p151763132817"><a name="en-us_topic_0283136724_p151763132817"></a><a name="en-us_topic_0283136724_p151763132817"></a>Used to protect data caches.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row10781736162818"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p167953692820"><a name="en-us_topic_0283136724_p167953692820"></a><a name="en-us_topic_0283136724_p167953692820"></a>InstrUserLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1879183682811"><a name="en-us_topic_0283136724_p1879183682811"></a><a name="en-us_topic_0283136724_p1879183682811"></a>Used to protect a user hash table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row17506195395619"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p202581307577"><a name="en-us_topic_0283136724_p202581307577"></a><a name="en-us_topic_0283136724_p202581307577"></a>BadBlockStatHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p19258133035719"><a name="en-us_topic_0283136724_p19258133035719"></a><a name="en-us_topic_0283136724_p19258133035719"></a>Used to protect the hash table <strong id="b1145449127"><a name="b1145449127"></a><a name="b1145449127"></a>global_bad_block_stat</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row22422561403"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p8243175620019"><a name="en-us_topic_0283136724_p8243175620019"></a><a name="en-us_topic_0283136724_p8243175620019"></a>BufFreelistLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p624314568019"><a name="en-us_topic_0283136724_p624314568019"></a><a name="en-us_topic_0283136724_p624314568019"></a>Used to ensure the atomicity of free list operations in the shared buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row167501558110"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p07501515114"><a name="en-us_topic_0283136724_p07501515114"></a><a name="en-us_topic_0283136724_p07501515114"></a>CUSlotListLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p775005714"><a name="en-us_topic_0283136724_p775005714"></a><a name="en-us_topic_0283136724_p775005714"></a>Used to control concurrent operations on the slot of the column-store buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row447110141712"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p1847101416120"><a name="en-us_topic_0283136724_p1847101416120"></a><a name="en-us_topic_0283136724_p1847101416120"></a>AddinShmemInitLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p247118148119"><a name="en-us_topic_0283136724_p247118148119"></a><a name="en-us_topic_0283136724_p247118148119"></a>Used to protect the initialization of the shared memory object.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row1743892316210"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p10197222128"><a name="en-us_topic_0283136724_p10197222128"></a><a name="en-us_topic_0283136724_p10197222128"></a>AlterPortLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1623974016213"><a name="en-us_topic_0283136724_p1623974016213"></a><a name="en-us_topic_0283136724_p1623974016213"></a>Used to protect the coordinator node from changing the registration port number.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row165081126823"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p166852251524"><a name="en-us_topic_0283136724_p166852251524"></a><a name="en-us_topic_0283136724_p166852251524"></a>FdwPartitionCaheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p2068617251423"><a name="en-us_topic_0283136724_p2068617251423"></a><a name="en-us_topic_0283136724_p2068617251423"></a>Management lock of the buffer of the HDFS partitioned table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row1979010283212"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p4241028320"><a name="en-us_topic_0283136724_p4241028320"></a><a name="en-us_topic_0283136724_p4241028320"></a>DfsConnectorCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p8241828829"><a name="en-us_topic_0283136724_p8241828829"></a><a name="en-us_topic_0283136724_p8241828829"></a>Management lock of the DFSConnector buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row11871954131913"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p1812831362512"><a name="en-us_topic_0283136724_p1812831362512"></a><a name="en-us_topic_0283136724_p1812831362512"></a>DfsSpaceCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p102161953151914"><a name="en-us_topic_0283136724_p102161953151914"></a><a name="en-us_topic_0283136724_p102161953151914"></a>Management lock of the HDFS tablespace management buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row1417835971910"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p1447016554194"><a name="en-us_topic_0283136724_p1447016554194"></a><a name="en-us_topic_0283136724_p1447016554194"></a>FullBuildXlogCopyStartPtrLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p34701055101913"><a name="en-us_topic_0283136724_p34701055101913"></a><a name="en-us_topic_0283136724_p34701055101913"></a>Used to protect Xlog copy operations in the full build.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row14834181172011"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p4806804201"><a name="en-us_topic_0283136724_p4806804201"></a><a name="en-us_topic_0283136724_p4806804201"></a>DfsUserLoginLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p15806140182012"><a name="en-us_topic_0283136724_p15806140182012"></a><a name="en-us_topic_0283136724_p15806140182012"></a>Used for HDFS user login and authentication.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row331112542513"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p8566132482516"><a name="en-us_topic_0283136724_p8566132482516"></a><a name="en-us_topic_0283136724_p8566132482516"></a>LogicalReplicationSlotPersistentDataLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1556682402515"><a name="en-us_topic_0283136724_p1556682402515"></a><a name="en-us_topic_0283136724_p1556682402515"></a>Used to protect data in the replication slot during logical replication.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row318217273258"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p2265122682512"><a name="en-us_topic_0283136724_p2265122682512"></a><a name="en-us_topic_0283136724_p2265122682512"></a>WorkloadSessionInfoLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p2265102611254"><a name="en-us_topic_0283136724_p2265102611254"></a><a name="en-us_topic_0283136724_p2265102611254"></a>Used to protect the access to the session info memory hash table of the load management module.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row1719842902512"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p15370192815258"><a name="en-us_topic_0283136724_p15370192815258"></a><a name="en-us_topic_0283136724_p15370192815258"></a>InstrWorkloadLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p163701528192514"><a name="en-us_topic_0283136724_p163701528192514"></a><a name="en-us_topic_0283136724_p163701528192514"></a>Used to protect the access to the memory hash table that stores load management statistics.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row478423012254"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p48863082516"><a name="en-us_topic_0283136724_p48863082516"></a><a name="en-us_topic_0283136724_p48863082516"></a>PgfdwLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p38813018257"><a name="en-us_topic_0283136724_p38813018257"></a><a name="en-us_topic_0283136724_p38813018257"></a>Used by the management instance to establish a connection to the foreign server.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row1518504493519"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p5253104353515"><a name="en-us_topic_0283136724_p5253104353515"></a><a name="en-us_topic_0283136724_p5253104353515"></a>InstanceTimeLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1253143103511"><a name="en-us_topic_0283136724_p1253143103511"></a><a name="en-us_topic_0283136724_p1253143103511"></a>Used to obtain time information of sessions in an instance.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row1381734533516"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p2014744523514"><a name="en-us_topic_0283136724_p2014744523514"></a><a name="en-us_topic_0283136724_p2014744523514"></a>XlogRemoveSegLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p314774516355"><a name="en-us_topic_0283136724_p314774516355"></a><a name="en-us_topic_0283136724_p314774516355"></a>Used to protect Xlog segment file recycling.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row193931047103511"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p17981446113517"><a name="en-us_topic_0283136724_p17981446113517"></a><a name="en-us_topic_0283136724_p17981446113517"></a>DnUsedSpaceHashLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p14798194683515"><a name="en-us_topic_0283136724_p14798194683515"></a><a name="en-us_topic_0283136724_p14798194683515"></a>Used to update space usage information corresponding to a session.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row74661541355"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p13570153163510"><a name="en-us_topic_0283136724_p13570153163510"></a><a name="en-us_topic_0283136724_p13570153163510"></a>CsnMinLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p35709535358"><a name="en-us_topic_0283136724_p35709535358"></a><a name="en-us_topic_0283136724_p35709535358"></a>Used to calculate CSNmin.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row64996564353"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p8788125510352"><a name="en-us_topic_0283136724_p8788125510352"></a><a name="en-us_topic_0283136724_p8788125510352"></a>GPCCommitLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p18789165517356"><a name="en-us_topic_0283136724_p18789165517356"></a><a name="en-us_topic_0283136724_p18789165517356"></a>Used to protect the addition of the global Plan Cache hash table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row4107115843518"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p1962855773515"><a name="en-us_topic_0283136724_p1962855773515"></a><a name="en-us_topic_0283136724_p1962855773515"></a>GPCClearLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p56281357203511"><a name="en-us_topic_0283136724_p56281357203511"></a><a name="en-us_topic_0283136724_p56281357203511"></a>Used to protect the clearing of the global plan cache hash table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row164241204361"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p2795125963512"><a name="en-us_topic_0283136724_p2795125963512"></a><a name="en-us_topic_0283136724_p2795125963512"></a>GPCTimelineLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p07951159183510"><a name="en-us_topic_0283136724_p07951159183510"></a><a name="en-us_topic_0283136724_p07951159183510"></a>Used to protect the timeline check of the global plan cache hash table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row188202193619"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p5454514364"><a name="en-us_topic_0283136724_p5454514364"></a><a name="en-us_topic_0283136724_p5454514364"></a>TsTagsCacheLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p184545183610"><a name="en-us_topic_0283136724_p184545183610"></a><a name="en-us_topic_0283136724_p184545183610"></a>Used to manage the time series tag cache.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row19784435365"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p429911315368"><a name="en-us_topic_0283136724_p429911315368"></a><a name="en-us_topic_0283136724_p429911315368"></a>InstanceRealTLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p172997333617"><a name="en-us_topic_0283136724_p172997333617"></a><a name="en-us_topic_0283136724_p172997333617"></a>Used to protect the update of the hash table that stores shared instance statistics.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row320811653615"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p126121158365"><a name="en-us_topic_0283136724_p126121158365"></a><a name="en-us_topic_0283136724_p126121158365"></a>CLogBufMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p9612758360"><a name="en-us_topic_0283136724_p9612758360"></a><a name="en-us_topic_0283136724_p9612758360"></a>Used to manage the cache of commit logs.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row181287815365"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p8627177193615"><a name="en-us_topic_0283136724_p8627177193615"></a><a name="en-us_topic_0283136724_p8627177193615"></a>GPCMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1062715743611"><a name="en-us_topic_0283136724_p1062715743611"></a><a name="en-us_topic_0283136724_p1062715743611"></a>Used to manage the global plan cache.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row7841938193618"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p7157236203611"><a name="en-us_topic_0283136724_p7157236203611"></a><a name="en-us_topic_0283136724_p7157236203611"></a>GPCPrepareMappingLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1662161319423"><a name="en-us_topic_0283136724_p1662161319423"></a><a name="en-us_topic_0283136724_p1662161319423"></a>Used to manage the global plan cache.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row18343810363"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p1715811362368"><a name="en-us_topic_0283136724_p1715811362368"></a><a name="en-us_topic_0283136724_p1715811362368"></a>BufferIOLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p2158193683612"><a name="en-us_topic_0283136724_p2158193683612"></a><a name="en-us_topic_0283136724_p2158193683612"></a>Used to protect I/O operations on pages in the shared buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row126811942123618"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p139802406362"><a name="en-us_topic_0283136724_p139802406362"></a><a name="en-us_topic_0283136724_p139802406362"></a>BufferContentLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p12980164063616"><a name="en-us_topic_0283136724_p12980164063616"></a><a name="en-us_topic_0283136724_p12980164063616"></a>Used to protect the read and modification of the page content in the shared buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row17681164212362"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p1898094015362"><a name="en-us_topic_0283136724_p1898094015362"></a><a name="en-us_topic_0283136724_p1898094015362"></a>CSNLOG Ctl</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1998034043618"><a name="en-us_topic_0283136724_p1998034043618"></a><a name="en-us_topic_0283136724_p1998034043618"></a>Used for CSN log management.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row85621945143618"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p145954433614"><a name="en-us_topic_0283136724_p145954433614"></a><a name="en-us_topic_0283136724_p145954433614"></a>DoubleWriteLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1359444113613"><a name="en-us_topic_0283136724_p1359444113613"></a><a name="en-us_topic_0283136724_p1359444113613"></a>Used to manage doublewrite operations.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row185911412163517"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p159214125357"><a name="en-us_topic_0283136724_p159214125357"></a><a name="en-us_topic_0283136724_p159214125357"></a>RowPageReplicationLock</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1959201233518"><a name="en-us_topic_0283136724_p1959201233518"></a><a name="en-us_topic_0283136724_p1959201233518"></a>Used to manage data page replication of row-store.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row140882312506"><td class="cellrowborder" valign="top" width="38.18%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p840812237501"><a name="en-us_topic_0283136724_p840812237501"></a><a name="en-us_topic_0283136724_p840812237501"></a>extension</p>
</td>
<td class="cellrowborder" valign="top" width="61.82%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1408423105015"><a name="en-us_topic_0283136724_p1408423105015"></a><a name="en-us_topic_0283136724_p1408423105015"></a>Other lightweight locks</p>
</td>
</tr>
</tbody>
</table>

The following table describes the corresponding wait events when  **wait\_status**  is  **wait io**.

**Table  4**  List of wait events corresponding to I/Os

<a name="en-us_topic_0283136724_en-us_topic_0237122466_table124603113369"></a>
<table><thead align="left"><tr id="en-us_topic_0283136724_en-us_topic_0237122466_row17125184214368"><th class="cellrowborder" valign="top" width="38.07%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1512519428366"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1512519428366"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1512519428366"></a>wait_event</p>
</th>
<th class="cellrowborder" valign="top" width="61.92999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136724_en-us_topic_0237122466_p121251742193618"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p121251742193618"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p121251742193618"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136724_en-us_topic_0237122466_row85261331183620"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1652612319363"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1652612319363"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1652612319363"></a>BufFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p145277315364"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p145277315364"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p145277315364"></a>Reads data from a temporary file to a specified buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row852733114363"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p16527731143610"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16527731143610"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16527731143610"></a>BufFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p16527193117362"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16527193117362"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16527193117362"></a>Writes the content of a specified buffer to a temporary file.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1652763111367"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p19527163120367"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19527163120367"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19527163120367"></a>ControlFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1452718315368"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1452718315368"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1452718315368"></a>Reads the <strong id="b14633457152513"><a name="b14633457152513"></a><a name="b14633457152513"></a>pg_control</strong> file, mainly during database startup, checkpoint execution, and primary/standby verification.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row135271331163617"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p452717318366"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p452717318366"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p452717318366"></a>ControlFileSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p20527163111368"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20527163111368"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20527163111368"></a>Flushes the <strong id="b143296062619"><a name="b143296062619"></a><a name="b143296062619"></a>pg_control</strong> file to a disk, during database initialization.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row55271631123615"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p6527203112367"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6527203112367"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6527203112367"></a>ControlFileSyncUpdate</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1652783119365"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1652783119365"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1652783119365"></a>Flushes the <strong id="b15253527265"><a name="b15253527265"></a><a name="b15253527265"></a>pg_control</strong> file to a disk, mainly during database startup, checkpoint execution, and primary/standby verification.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row115271931173612"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p15527113119364"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15527113119364"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15527113119364"></a>ControlFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p3527143163611"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p3527143163611"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p3527143163611"></a>Writes the <strong id="b1280894132616"><a name="b1280894132616"></a><a name="b1280894132616"></a>pg_control</strong> file, during database initialization.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row19527143112365"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p25271531153618"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p25271531153618"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p25271531153618"></a>ControlFileWriteUpdate</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p105277311366"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p105277311366"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p105277311366"></a>Updates the <strong id="b14203177152616"><a name="b14203177152616"></a><a name="b14203177152616"></a>pg_control</strong> file, mainly during database startup, checkpoint execution, and primary/standby verification.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1852711317368"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p152733183617"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p152733183617"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p152733183617"></a>CopyFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1852733133610"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1852733133610"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1852733133610"></a>Reads a file during file copying.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row552710319369"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p952703133619"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p952703133619"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p952703133619"></a>CopyFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p145281731183615"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p145281731183615"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p145281731183615"></a>Writes a file during file copying.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row2052813114362"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1252893119365"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1252893119365"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1252893119365"></a>DataFileExtend</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p20528031203619"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20528031203619"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20528031203619"></a>Writes a file during file extension.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row35286310369"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p17528133116368"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17528133116368"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17528133116368"></a>DataFileFlush</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p8528143117367"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p8528143117367"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p8528143117367"></a>Flushes a table data file to a disk.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row3528431183617"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p4528113133612"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p4528113133612"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p4528113133612"></a>DataFileImmediateSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p2052813113613"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2052813113613"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p2052813113613"></a>Flushes a table data file to a disk immediately.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row7528831113616"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1152853143615"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1152853143615"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1152853143615"></a>DataFilePrefetch</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p125281631183611"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p125281631183611"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p125281631183611"></a>Reads a table data file asynchronously.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row2052893119360"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p12528731143614"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p12528731143614"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p12528731143614"></a>DataFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p14528193173613"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14528193173613"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14528193173613"></a>Reads a table data file synchronously.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row12528031143619"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p35287312360"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p35287312360"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p35287312360"></a>DataFileSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1952863123615"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1952863123615"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1952863123615"></a>Flushes table data file modifications to a disk.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row16528143120364"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p252843163619"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p252843163619"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p252843163619"></a>DataFileTruncate</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1552883115365"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1552883115365"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1552883115365"></a>Truncates a table data file.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row12528103123613"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p6528103163618"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6528103163618"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6528103163618"></a>DataFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1528131123620"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1528131123620"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1528131123620"></a>Writes a table data file.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row452973123618"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p195299316365"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p195299316365"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p195299316365"></a>LockFileAddToDataDirRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p15291031113612"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15291031113612"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15291031113612"></a>Reads the <strong id="b698415207260"><a name="b698415207260"></a><a name="b698415207260"></a>postmaster.pid</strong> file.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1552915315362"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p16529153163615"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16529153163615"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16529153163615"></a>LockFileAddToDataDirSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p19529163111365"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19529163111365"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19529163111365"></a>Flushes the <strong id="b101991023112613"><a name="b101991023112613"></a><a name="b101991023112613"></a>postmaster.pid</strong> file to a disk.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row35291731163610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p852923163610"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p852923163610"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p852923163610"></a>LockFileAddToDataDirWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1852916316365"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1852916316365"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1852916316365"></a>Writes PID information into the <strong id="b7281172417269"><a name="b7281172417269"></a><a name="b7281172417269"></a>postmaster.pid</strong> file.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row0529123173620"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p55291031183614"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p55291031183614"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p55291031183614"></a>LockFileCreateRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1252919318367"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1252919318367"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1252919318367"></a>Reads the LockFile file <strong id="b1717813117215"><a name="b1717813117215"></a><a name="b1717813117215"></a>%s.lock</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row6529183193619"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1852963143611"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1852963143611"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1852963143611"></a>LockFileCreateSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1052983114369"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1052983114369"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1052983114369"></a>Flushes the LockFile file <strong id="b14653152715263"><a name="b14653152715263"></a><a name="b14653152715263"></a>%s.lock</strong> to a disk.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row65291313368"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p352923115362"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p352923115362"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p352923115362"></a>LockFileCreateWRITE</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p5529103193611"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p5529103193611"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p5529103193611"></a>Writes PID information into the LockFile file <strong id="b1283762812611"><a name="b1283762812611"></a><a name="b1283762812611"></a>%s.lock</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row2052973193615"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1252903118368"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1252903118368"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1252903118368"></a>RelationMapRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1652993119366"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1652993119366"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1652993119366"></a>Reads the mapping file between system catalogs and storage locations.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1529163193618"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p652923112361"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p652923112361"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p652923112361"></a>RelationMapSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p10529031133619"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p10529031133619"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p10529031133619"></a>Flushes the mapping file between system catalogs and storage locations to a disk.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row45291431203613"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p95291031153618"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p95291031153618"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p95291031153618"></a>RelationMapWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p552943116364"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p552943116364"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p552943116364"></a>Writes the mapping file between system catalogs and storage locations.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row65291831173610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p19529153123612"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19529153123612"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p19529153123612"></a>ReplicationSlotRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p16529103133612"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16529103133612"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p16529103133612"></a>Reads a stream replication slot file during a restart.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1852933116369"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p6530143113361"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6530143113361"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6530143113361"></a>ReplicationSlotRestoreSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1530103163610"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1530103163610"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1530103163610"></a>Flushes a stream replication slot file to a disk during a restart.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row353083119361"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p35301431123614"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p35301431123614"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p35301431123614"></a>ReplicationSlotSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p05303319364"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p05303319364"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p05303319364"></a>Flushes a temporary stream replication slot file to a disk during checkpoint execution.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row2530103113616"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p14530031173616"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14530031173616"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14530031173616"></a>ReplicationSlotWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p653023117366"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p653023117366"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p653023117366"></a>Writes a temporary stream replication slot file during checkpoint execution.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1953013313363"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1530931163615"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1530931163615"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1530931163615"></a>SLRUFlushSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p15530931153611"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15530931153611"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15530931153611"></a>Flushes the <strong id="b18725124413269"><a name="b18725124413269"></a><a name="b18725124413269"></a>pg_clog</strong>, <strong id="b17333441269"><a name="b17333441269"></a><a name="b17333441269"></a>pg_subtrans</strong>, and <strong id="b197361544162613"><a name="b197361544162613"></a><a name="b197361544162613"></a>pg_multixact</strong> files to a disk, mainly during checkpoint execution and database shutdown.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row25303315362"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p14530123114369"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14530123114369"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14530123114369"></a>SLRURead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p7530113110365"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p7530113110365"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p7530113110365"></a>Reads the <strong id="b1433234762612"><a name="b1433234762612"></a><a name="b1433234762612"></a>pg_clog</strong>, <strong id="b2335174732617"><a name="b2335174732617"></a><a name="b2335174732617"></a>pg_subtrans</strong>, and <strong id="b10338134716262"><a name="b10338134716262"></a><a name="b10338134716262"></a>pg_multixact</strong> files.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row115301831173610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p8530431113619"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p8530431113619"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p8530431113619"></a>SLRUSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p753083110367"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p753083110367"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p753083110367"></a>Writes dirty pages into the <strong id="b122781148122615"><a name="b122781148122615"></a><a name="b122781148122615"></a>pg_clog</strong>, <strong id="b19282848152618"><a name="b19282848152618"></a><a name="b19282848152618"></a>pg_subtrans</strong>, and <strong id="b1728614842610"><a name="b1728614842610"></a><a name="b1728614842610"></a>pg_multixact</strong> files, and flushes the files to a disk, mainly during checkpoint execution and database shutdown.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1753053119368"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p65301531193611"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p65301531193611"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p65301531193611"></a>SLRUWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p175303318366"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p175303318366"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p175303318366"></a>Writes the <strong id="b520275113265"><a name="b520275113265"></a><a name="b520275113265"></a>pg_clog</strong>, <strong id="b22051651162610"><a name="b22051651162610"></a><a name="b22051651162610"></a>pg_subtrans</strong>, and <strong id="b1320811518265"><a name="b1320811518265"></a><a name="b1320811518265"></a>pg_multixact</strong> files.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row85306318366"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p85309318366"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p85309318366"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p85309318366"></a>TimelineHistoryRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p653013111363"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p653013111363"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p653013111363"></a>Reads the timeline history file during database startup.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1853010316363"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p853033117364"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p853033117364"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p853033117364"></a>TimelineHistorySync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p12530143193617"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p12530143193617"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p12530143193617"></a>Flushes the timeline history file to a disk during database startup.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row12530173110363"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p953011310360"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p953011310360"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p953011310360"></a>TimelineHistoryWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1353011315369"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1353011315369"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1353011315369"></a>Writes to the timeline history file during database startup.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row053063183610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p0530193114365"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0530193114365"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0530193114365"></a>TwophaseFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p35311631123614"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p35311631123614"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p35311631123614"></a>Reads the <strong id="b1478315916262"><a name="b1478315916262"></a><a name="b1478315916262"></a>pg_twophase</strong> file, mainly during two-phase transaction commit and restoration.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row17531831193614"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p0531123119366"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0531123119366"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p0531123119366"></a>TwophaseFileSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p4531153114361"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p4531153114361"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p4531153114361"></a>Flushes the <strong id="b12791184182711"><a name="b12791184182711"></a><a name="b12791184182711"></a>pg_twophase</strong> file to a disk, mainly during two-phase transaction commit and restoration.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row2053113110361"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p155314314361"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p155314314361"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p155314314361"></a>TwophaseFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p25311311365"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p25311311365"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p25311311365"></a>Writes the <strong id="b667527112715"><a name="b667527112715"></a><a name="b667527112715"></a>pg_twophase</strong> file, mainly during two-phase transaction commit and restoration.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row18531173114368"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p125311231113612"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p125311231113612"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p125311231113612"></a>WALBootstrapSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p453133153613"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p453133153613"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p453133153613"></a>Flushes an initialized WAL file to a disk during database initialization.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row165311031103613"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p175311031183612"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p175311031183612"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p175311031183612"></a>WALBootstrapWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p165311431113612"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p165311431113612"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p165311431113612"></a>Writes an initialized WAL file during database initialization.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row4531153153612"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p953153163613"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p953153163613"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p953153163613"></a>WALCopyRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p75311312369"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p75311312369"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p75311312369"></a>Read operation generated when an existing WAL file is read for replication after archiving and restoration.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row12531123118361"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p175311131123613"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p175311131123613"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p175311131123613"></a>WALCopySync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1653143133620"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1653143133620"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1653143133620"></a>Flushes a replicated WAL file to a disk after archiving and restoration.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row5531631103619"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p05315316368"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p05315316368"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p05315316368"></a>WALCopyWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1053173153613"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1053173153613"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1053173153613"></a>Write operation generated when an existing WAL file is read for replication after archiving and restoration.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row95311531183610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p14531193173616"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14531193173616"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14531193173616"></a>WALInitSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p185315319368"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p185315319368"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p185315319368"></a>Flushes a newly initialized WAL file to a disk during log reclaiming or writing.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row553113173615"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p753113113363"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p753113113363"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p753113113363"></a>WALInitWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1153143183611"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1153143183611"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1153143183611"></a>Initializes a newly created WAL file to <strong id="b13391325172720"><a name="b13391325172720"></a><a name="b13391325172720"></a>0</strong> during log reclaiming or writing.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row115311531113610"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p153143113363"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p153143113363"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p153143113363"></a>WALRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p11531183111362"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11531183111362"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p11531183111362"></a>Reads data from Xlogs during redo operations on two-phase files.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row12531183183619"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p15321631133618"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15321631133618"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p15321631133618"></a>WALSyncMethodAssign</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p953210313361"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p953210313361"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p953210313361"></a>Flushes all open WAL files to a disk.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row8532631173612"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1053233143619"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1053233143619"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1053233143619"></a>WALWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p95324318361"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p95324318361"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p95324318361"></a>Writes a WAL file.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row3344217133213"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p534571715324"><a name="en-us_topic_0283136724_p534571715324"></a><a name="en-us_topic_0283136724_p534571715324"></a>WALBufferAccess</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p2345181773219"><a name="en-us_topic_0283136724_p2345181773219"></a><a name="en-us_topic_0283136724_p2345181773219"></a>WAL buffer access (To ensure performance, only the number of access times is counted in the kernel code, and the access duration is not counted.)</p>
</td>
</tr>
<tr id="row10194165319215"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="p1819511531628"><a name="p1819511531628"></a><a name="p1819511531628"></a>WALBufferFull</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="p1819635312210"><a name="p1819635312210"></a><a name="p1819635312210"></a>Writes WAL files when the WAL buffer is full.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row5126152875614"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p98110272568"><a name="en-us_topic_0283136724_p98110272568"></a><a name="en-us_topic_0283136724_p98110272568"></a>DoubleWriteFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p1981727185619"><a name="en-us_topic_0283136724_p1981727185619"></a><a name="en-us_topic_0283136724_p1981727185619"></a>Doublewrites and reads a file.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row4301173016565"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p0212202915615"><a name="en-us_topic_0283136724_p0212202915615"></a><a name="en-us_topic_0283136724_p0212202915615"></a>DoubleWriteFileSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p22121929165615"><a name="en-us_topic_0283136724_p22121929165615"></a><a name="en-us_topic_0283136724_p22121929165615"></a>Doublewrites a file and forcibly flushes files to disks.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row63501332125615"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p47025312568"><a name="en-us_topic_0283136724_p47025312568"></a><a name="en-us_topic_0283136724_p47025312568"></a>DoubleWriteFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p77031931195610"><a name="en-us_topic_0283136724_p77031931195610"></a><a name="en-us_topic_0283136724_p77031931195610"></a>Doublewrites a file and writes a file.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row2926193318562"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p63521133135615"><a name="en-us_topic_0283136724_p63521133135615"></a><a name="en-us_topic_0283136724_p63521133135615"></a>PredoProcessPending</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p9352153345615"><a name="en-us_topic_0283136724_p9352153345615"></a><a name="en-us_topic_0283136724_p9352153345615"></a>Waits for the playback of other records to complete during parallel log playback.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row64341335125611"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p139101934175618"><a name="en-us_topic_0283136724_p139101934175618"></a><a name="en-us_topic_0283136724_p139101934175618"></a>PredoApply</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p10910193415617"><a name="en-us_topic_0283136724_p10910193415617"></a><a name="en-us_topic_0283136724_p10910193415617"></a>Waits for other threads to play back logs to the LSN of the current thread during parallel log playback.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row0209143815611"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p124831136205614"><a name="en-us_topic_0283136724_p124831136205614"></a><a name="en-us_topic_0283136724_p124831136205614"></a>DisableConnectFileRead</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p94841536155615"><a name="en-us_topic_0283136724_p94841536155615"></a><a name="en-us_topic_0283136724_p94841536155615"></a>Reads the HA lock fragment logic file.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row7685103917569"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p171823397564"><a name="en-us_topic_0283136724_p171823397564"></a><a name="en-us_topic_0283136724_p171823397564"></a>DisableConnectFileSync</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p3182103915620"><a name="en-us_topic_0283136724_p3182103915620"></a><a name="en-us_topic_0283136724_p3182103915620"></a>Forcibly flushes the HA lock fragment logic file to disks.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_row786114145618"><td class="cellrowborder" valign="top" width="38.07%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_p18700124015564"><a name="en-us_topic_0283136724_p18700124015564"></a><a name="en-us_topic_0283136724_p18700124015564"></a>DisableConnectFileWrite</p>
</td>
<td class="cellrowborder" valign="top" width="61.92999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_p670074095617"><a name="en-us_topic_0283136724_p670074095617"></a><a name="en-us_topic_0283136724_p670074095617"></a>Writes the HA lock fragment logic file.</p>
</td>
</tr>
</tbody>
</table>

The following table describes the corresponding wait events when  **wait\_status**  is  **acquire lock**.

**Table  5**  List of wait events corresponding to transaction locks

<a name="en-us_topic_0283136724_en-us_topic_0237122466_table11826123533718"></a>
<table><thead align="left"><tr id="en-us_topic_0283136724_en-us_topic_0237122466_row2994124219379"><th class="cellrowborder" valign="top" width="37.6%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136724_en-us_topic_0237122466_p6994174220376"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6994174220376"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p6994174220376"></a>wait_event</p>
</th>
<th class="cellrowborder" valign="top" width="62.4%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136724_en-us_topic_0237122466_p7994184218371"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p7994184218371"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p7994184218371"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1388753563718"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p78871035193711"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p78871035193711"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p78871035193711"></a>relation</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p18871355377"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p18871355377"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p18871355377"></a>Adds a lock to a table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row5887103510377"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p158876355377"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p158876355377"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p158876355377"></a>extend</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p20887335153716"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20887335153716"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20887335153716"></a>Adds a lock to a table being scaled out.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row17887835113717"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p14887203516376"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14887203516376"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p14887203516376"></a>partition</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p98877351377"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p98877351377"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p98877351377"></a>Adds a lock to a partitioned table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row9887123514375"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p288723583714"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p288723583714"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p288723583714"></a>partition_seq</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1388733513377"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1388733513377"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1388733513377"></a>Adds a lock to a partition of a partitioned table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row148871935123710"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p188719356372"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p188719356372"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p188719356372"></a>page</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1188753543717"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1188753543717"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1188753543717"></a>Adds a lock to a table page.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row58872359376"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p488720358370"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p488720358370"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p488720358370"></a>tuple</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1788783511376"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1788783511376"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1788783511376"></a>Adds a lock to a tuple on a page.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row10887635133718"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p158870354376"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p158870354376"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p158870354376"></a>transactionid</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p20887203513373"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20887203513373"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p20887203513373"></a>Adds a lock to a transaction ID.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row688793510376"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p158871435183720"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p158871435183720"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p158871435183720"></a>virtualxid</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1988793543717"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1988793543717"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1988793543717"></a>Adds a lock to a virtual transaction ID.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row788773518379"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p178877353375"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p178877353375"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p178877353375"></a>object</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p5887103503710"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p5887103503710"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p5887103503710"></a>Adds a lock to an object.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row7887183519379"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1188803513717"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1188803513717"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1188803513717"></a>cstore_freespace</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1388853517378"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1388853517378"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1388853517378"></a>Adds a lock to idle column-store space.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row1288819351376"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p7888635193717"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p7888635193717"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p7888635193717"></a>userlock</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p18881135183715"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p18881135183715"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p18881135183715"></a>Adds a lock to a user.</p>
</td>
</tr>
<tr id="en-us_topic_0283136724_en-us_topic_0237122466_row18886350375"><td class="cellrowborder" valign="top" width="37.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p17888735183720"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17888735183720"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p17888735183720"></a>advisory</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136724_en-us_topic_0237122466_p1488823511375"><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1488823511375"></a><a name="en-us_topic_0283136724_en-us_topic_0237122466_p1488823511375"></a>Adds an advisory lock.</p>
</td>
</tr>
</tbody>
</table>

