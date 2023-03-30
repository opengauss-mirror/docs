# Command Reference<a name="EN-US_TOPIC_0294748983"></a>

## Command Reference<a name="en-us_topic_0059778168_s0bfc8ae9e6bc445480335198cc89f358"></a>

[Table 1](#en-us_topic_0059778168_t7527cd2e8e304b64bec55dcd38b701bb)  and  [Table 2](#en-us_topic_0059778168_t2f464cb1775044808eceb29e25d6d37f)  list commonly used and uncommonly used parameters required for  **gs\_initdb**.

**Table  1**  Common parameters

<a name="en-us_topic_0059778168_t7527cd2e8e304b64bec55dcd38b701bb"></a>
<table><thead align="left"><tr id="en-us_topic_0059778168_rb04ed4dbb2024e91814fe29c62058a1e"><th class="cellrowborder" valign="top" width="19.64%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778168_abb1d0e137f344644873d231722922745"><a name="en-us_topic_0059778168_abb1d0e137f344644873d231722922745"></a><a name="en-us_topic_0059778168_abb1d0e137f344644873d231722922745"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="36.68%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778168_a2a756e3c53094c5ea62729be1496108e"><a name="en-us_topic_0059778168_a2a756e3c53094c5ea62729be1496108e"></a><a name="en-us_topic_0059778168_a2a756e3c53094c5ea62729be1496108e"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="43.68%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778168_ab80eddf3dfec41808d7b2abeeb2768f7"><a name="en-us_topic_0059778168_ab80eddf3dfec41808d7b2abeeb2768f7"></a><a name="en-us_topic_0059778168_ab80eddf3dfec41808d7b2abeeb2768f7"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778168_rd179fba4db404defa826417a64d12321"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_a3cb75dc19ee843408dc2738c6fbdacf5"><a name="en-us_topic_0059778168_a3cb75dc19ee843408dc2738c6fbdacf5"></a><a name="en-us_topic_0059778168_a3cb75dc19ee843408dc2738c6fbdacf5"></a>-A, --auth=METHOD</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a860229dc5c08407d8732a736dd68009a"><a name="en-us_topic_0059778168_a860229dc5c08407d8732a736dd68009a"></a><a name="en-us_topic_0059778168_a860229dc5c08407d8732a736dd68009a"></a>Specifies the authentication method for local users used in pg_hba.conf (host and local rows).</p>
<p id="en-us_topic_0059778168_a54020ab85c9b4a19b224c6ebb322f0fd"><a name="en-us_topic_0059778168_a54020ab85c9b4a19b224c6ebb322f0fd"></a><a name="en-us_topic_0059778168_a54020ab85c9b4a19b224c6ebb322f0fd"></a>Do not use trust, which is the default value, unless you trust all local users on your system.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_a63ab922337dd4d04aeeccf564ba3d5c9"><a name="en-us_topic_0059778168_a63ab922337dd4d04aeeccf564ba3d5c9"></a><a name="en-us_topic_0059778168_a63ab922337dd4d04aeeccf564ba3d5c9"></a>Values of METHOD:</p>
<a name="en-us_topic_0059778168_uc88578ae236a4c23901b34032feecabd"></a><a name="en-us_topic_0059778168_uc88578ae236a4c23901b34032feecabd"></a><ul id="en-us_topic_0059778168_uc88578ae236a4c23901b34032feecabd"><li>trust</li><li>reject</li><li>md5 (an insecure algorithm, used for compatibility with earlier versions)</li><li>sha256</li><li>sm3</li></ul>
<p id="en-us_topic_0059778168_ad4b8bf2ccd58490788bcf20d798a6b8d"><a name="en-us_topic_0059778168_ad4b8bf2ccd58490788bcf20d798a6b8d"></a><a name="en-us_topic_0059778168_ad4b8bf2ccd58490788bcf20d798a6b8d"></a>Default value: trust</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_rf73b734c009149788c82b8aa398ac4af"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_af47c563f101c4cea8910db7f73abd15a"><a name="en-us_topic_0059778168_af47c563f101c4cea8910db7f73abd15a"></a><a name="en-us_topic_0059778168_af47c563f101c4cea8910db7f73abd15a"></a>--auth-host=METHOD</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_ab7ee914f7d5b4ee2ae3788836f4a9ba2"><a name="en-us_topic_0059778168_ab7ee914f7d5b4ee2ae3788836f4a9ba2"></a><a name="en-us_topic_0059778168_ab7ee914f7d5b4ee2ae3788836f4a9ba2"></a>Specifies the authentication method for local users via TCP/IP connections used in pg_hba.conf (host rows).</p>
<p id="en-us_topic_0059778168_ac3bf14491ea44e3787b2ea25eaac0aa5"><a name="en-us_topic_0059778168_ac3bf14491ea44e3787b2ea25eaac0aa5"></a><a name="en-us_topic_0059778168_ac3bf14491ea44e3787b2ea25eaac0aa5"></a>The value specified in the -A parameter is overwritten when this parameter is specified.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_adf75e663ccd74766a057c833066b5ecc"><a name="en-us_topic_0059778168_adf75e663ccd74766a057c833066b5ecc"></a><a name="en-us_topic_0059778168_adf75e663ccd74766a057c833066b5ecc"></a>Values of METHOD:</p>
<a name="en-us_topic_0059778168_ua0bc882ad25b4c30889bd8beb2df1684"></a><a name="en-us_topic_0059778168_ua0bc882ad25b4c30889bd8beb2df1684"></a><ul id="en-us_topic_0059778168_ua0bc882ad25b4c30889bd8beb2df1684"><li>trust</li><li>reject</li><li>md5 (an insecure algorithm, used for compatibility with earlier versions)</li><li>sha256</li><li>sm3</li></ul>
<p id="en-us_topic_0059778168_abd57e40a917448c2b7edd44975429a92"><a name="en-us_topic_0059778168_abd57e40a917448c2b7edd44975429a92"></a><a name="en-us_topic_0059778168_abd57e40a917448c2b7edd44975429a92"></a>Default value: trust</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_r68a0e327cb7d4bc996dc484686062273"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_a40e2990b520b4b2f8e7844de42a774b6"><a name="en-us_topic_0059778168_a40e2990b520b4b2f8e7844de42a774b6"></a><a name="en-us_topic_0059778168_a40e2990b520b4b2f8e7844de42a774b6"></a>--auth-local=METHOD</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_af4e8d27f91c04a82b20477d9cf1c7437"><a name="en-us_topic_0059778168_af4e8d27f91c04a82b20477d9cf1c7437"></a><a name="en-us_topic_0059778168_af4e8d27f91c04a82b20477d9cf1c7437"></a>Specifies the authentication method for local users via Unix-domain socket connections used in pg_hba.conf (local rows).</p>
<p id="en-us_topic_0059778168_a51a82f8aca384c1cb239459acc286af3"><a name="en-us_topic_0059778168_a51a82f8aca384c1cb239459acc286af3"></a><a name="en-us_topic_0059778168_a51a82f8aca384c1cb239459acc286af3"></a>The value specified in the -A parameter is overwritten when this parameter is specified.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_a66742067d6074ae1b1e4f9dcf9c991ef"><a name="en-us_topic_0059778168_a66742067d6074ae1b1e4f9dcf9c991ef"></a><a name="en-us_topic_0059778168_a66742067d6074ae1b1e4f9dcf9c991ef"></a>Values of METHOD:</p>
<a name="en-us_topic_0059778168_ua8f41201ecce4a38838612396d037513"></a><a name="en-us_topic_0059778168_ua8f41201ecce4a38838612396d037513"></a><ul id="en-us_topic_0059778168_ua8f41201ecce4a38838612396d037513"><li>trust</li><li>reject</li><li>md5 (an insecure algorithm, used for compatibility with earlier versions)</li><li>sha256</li><li>sm3</li><li><strong id="b179672046144117"><a name="b179672046144117"></a><a name="b179672046144117"></a>peer</strong> (only for the local mode)</li></ul>
<p id="en-us_topic_0059778168_en-us_topic_0058968084_p338903114578"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p338903114578"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p338903114578"></a>Default value: trust</p>
</td>
</tr>
<tr id="row1087619537533"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="p487605385316"><a name="p487605385316"></a><a name="p487605385316"></a>-c, --enable-dcf</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="p6877105395313"><a name="p6877105395313"></a><a name="p6877105395313"></a>Sets the node to be installed to the DCF mode.</p>
<div class="note" id="note11801202216252"><a name="note11801202216252"></a><a name="note11801202216252"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p080114223253"><a name="p080114223253"></a><a name="p080114223253"></a>In the <span id="text931644882117"><a name="text931644882117"></a><a name="text931644882117"></a>Lite</span> scenario, this parameter is provided by <span id="text63611635193718"><a name="text63611635193718"></a><a name="text63611635193718"></a>openGauss</span>, but the DCF function is unavailable. <span id="text791818154216"><a name="text791818154216"></a><a name="text791818154216"></a>openGauss</span> provides master node selection when DCF is available. You can configure DCF-related parameters.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="p10877155313531"><a name="p10877155313531"></a><a name="p10877155313531"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_r47ed009556a04eaf93f25efafa434b48"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_ad674234b3ed54669ae4422ab93b53b7f"><a name="en-us_topic_0059778168_ad674234b3ed54669ae4422ab93b53b7f"></a><a name="en-us_topic_0059778168_ad674234b3ed54669ae4422ab93b53b7f"></a>[-D, --pgdata=]DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a05e68f440cd848f5b234c12269b9a336"><a name="en-us_topic_0059778168_a05e68f440cd848f5b234c12269b9a336"></a><a name="en-us_topic_0059778168_a05e68f440cd848f5b234c12269b9a336"></a>Specifies the data directory.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_aaa96bc60571e4c03a72d420b5c231b04"><a name="en-us_topic_0059778168_aaa96bc60571e4c03a72d420b5c231b04"></a><a name="en-us_topic_0059778168_aaa96bc60571e4c03a72d420b5c231b04"></a>Set DATADIR as needed. The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_r27a76bd2a5b34e4e9912460013a5cd93"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_en-us_topic_0058968084_p163219612615"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p163219612615"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p163219612615"></a>--nodename=NODENAME</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_afa4fd3ea63b44774b96814d9e7d5c33a"><a name="en-us_topic_0059778168_afa4fd3ea63b44774b96814d9e7d5c33a"></a><a name="en-us_topic_0059778168_afa4fd3ea63b44774b96814d9e7d5c33a"></a>Specifies the name of the node to be initialized.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_en-us_topic_0058968084_p15632068264"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p15632068264"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p15632068264"></a>The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_r03b22892d28245d2aac936aac685d764"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_abe6235a1ec1a41bdbe8b52c706ea8d94"><a name="en-us_topic_0059778168_abe6235a1ec1a41bdbe8b52c706ea8d94"></a><a name="en-us_topic_0059778168_abe6235a1ec1a41bdbe8b52c706ea8d94"></a>-E, --encoding=ENCODING</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_en-us_topic_0058968084_p825108314042"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p825108314042"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p825108314042"></a>Sets the encoding format for the new database.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778168_en-us_topic_0058968084_ul47919015168"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_ul47919015168"></a><ul id="en-us_topic_0059778168_en-us_topic_0058968084_ul47919015168"><li>If this parameter is specified, you also need to add the --locale option to specify the locale that supports this encoding format. If the --locale option is not added, the system default locale is used. If the encoding format in the system default locale is inconsistent with the encoding format specified in this parameter, the database initialization fails.</li><li>If this parameter is not specified, the encoding format of the default locale is used. You can run the locale command to view the default locale and its encoding format:<pre class="screen" id="en-us_topic_0059778168_s240f6735fde74db2a6ca95d0a9624015"><a name="en-us_topic_0059778168_s240f6735fde74db2a6ca95d0a9624015"></a><a name="en-us_topic_0059778168_s240f6735fde74db2a6ca95d0a9624015"></a><span id="text493110181653"><a name="text493110181653"></a><a name="text493110181653"></a>omm</span>@linux:~&gt; locale|grep LC_CTYPE
LC_CTYPE="en_US.UTF-8"
</pre>
<p id="en-us_topic_0059778168_a631effe7371d428ea86042a709f14ecc"><a name="en-us_topic_0059778168_a631effe7371d428ea86042a709f14ecc"></a><a name="en-us_topic_0059778168_a631effe7371d428ea86042a709f14ecc"></a>In the command output, UTF-8 indicates the encoding format of the default locale.</p>
<p id="p1165918073717"><a name="p1165918073717"></a><a name="p1165918073717"></a>The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</p>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778168_rf6ebc0474ad243da85058fcca4ed39b8"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_a4116cde05e05427daf2a46774bb81de8"><a name="en-us_topic_0059778168_a4116cde05e05427daf2a46774bb81de8"></a><a name="en-us_topic_0059778168_a4116cde05e05427daf2a46774bb81de8"></a>--locale=LOCALE</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_ae62cadd0b34546d8bcc2c36dfb24ec10"><a name="en-us_topic_0059778168_ae62cadd0b34546d8bcc2c36dfb24ec10"></a><a name="en-us_topic_0059778168_ae62cadd0b34546d8bcc2c36dfb24ec10"></a>Sets the default locale for the new database.</p>
<div class="notice" id="en-us_topic_0059778168_n68804385e7ce4f0ba5d88a03ae2e4c73"><a name="en-us_topic_0059778168_n68804385e7ce4f0ba5d88a03ae2e4c73"></a><a name="en-us_topic_0059778168_n68804385e7ce4f0ba5d88a03ae2e4c73"></a><span class="noticetitle"> NOTICE: </span><div class="noticebody"><p id="en-us_topic_0059778168_acccca55cfee647d581bdb9936e40bf31"><a name="en-us_topic_0059778168_acccca55cfee647d581bdb9936e40bf31"></a><a name="en-us_topic_0059778168_acccca55cfee647d581bdb9936e40bf31"></a>If you have set the database encoding format, ensure that the locale you select has the same encoding format as the preset one. Otherwise, the database initialization fails.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_a803a9ebdf89c45f0a6b46a76846a93e0"><a name="en-us_topic_0059778168_a803a9ebdf89c45f0a6b46a76846a93e0"></a><a name="en-us_topic_0059778168_a803a9ebdf89c45f0a6b46a76846a93e0"></a>For example, to set the database encoding format to GBK, perform the following steps:</p>
<a name="en-us_topic_0059778168_o14641ef5676b4f6e8cf5555515076472"></a><a name="en-us_topic_0059778168_o14641ef5676b4f6e8cf5555515076472"></a><ol id="en-us_topic_0059778168_o14641ef5676b4f6e8cf5555515076472"><li>Run the locale -a |grep gbk command to query the locales that support GBK:<pre class="screen" id="en-us_topic_0059778168_sde05eecf42394d6fafbef19c47e15d0d"><a name="en-us_topic_0059778168_sde05eecf42394d6fafbef19c47e15d0d"></a><a name="en-us_topic_0059778168_sde05eecf42394d6fafbef19c47e15d0d"></a><span id="text1781618203519"><a name="text1781618203519"></a><a name="text1781618203519"></a>omm</span>@linux:~&gt;  locale -a|grep gbk
zh_CN.gbk
zh_SG.gbk
</pre>
</li><li>Add the --locale=zh_CN.gbk option when initializing the database.</li><li>The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</li></ol>
</td>
</tr>
<tr id="row14138420183818"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="p1413819204389"><a name="p1413819204389"></a><a name="p1413819204389"></a>--dbcompatibility=DBCOMPATIBILITY</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="p8139112033811"><a name="p8139112033811"></a><a name="p8139112033811"></a>Sets the default compatibility for the new database.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="p213918202385"><a name="p213918202385"></a><a name="p213918202385"></a>The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_rc126b0b832e14fe791da39d5336b0d6a"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_en-us_topic_0058968084_p296280814042"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p296280814042"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p296280814042"></a>--lc-collate=LOCALE</p>
<p id="en-us_topic_0059778168_aa94596f2af8d4c94990bf5216816300c"><a name="en-us_topic_0059778168_aa94596f2af8d4c94990bf5216816300c"></a><a name="en-us_topic_0059778168_aa94596f2af8d4c94990bf5216816300c"></a>--lc-ctype=LOCALE</p>
<p id="en-us_topic_0059778168_ad3d9c7e24fb049ffbfdb796a0cc703ae"><a name="en-us_topic_0059778168_ad3d9c7e24fb049ffbfdb796a0cc703ae"></a><a name="en-us_topic_0059778168_ad3d9c7e24fb049ffbfdb796a0cc703ae"></a>--lc-messages=LOCALE</p>
<p id="en-us_topic_0059778168_ab87e33d09c4448138e1d1827ff0b8b1a"><a name="en-us_topic_0059778168_ab87e33d09c4448138e1d1827ff0b8b1a"></a><a name="en-us_topic_0059778168_ab87e33d09c4448138e1d1827ff0b8b1a"></a>--lc-monetary=LOCALE</p>
<p id="en-us_topic_0059778168_a5d227938183a45f6b37b9d9455b9c5c6"><a name="en-us_topic_0059778168_a5d227938183a45f6b37b9d9455b9c5c6"></a><a name="en-us_topic_0059778168_a5d227938183a45f6b37b9d9455b9c5c6"></a>--lc-numeric=LOCALE</p>
<p id="en-us_topic_0059778168_a71d42f00eeb84856adc6aa9acae96847"><a name="en-us_topic_0059778168_a71d42f00eeb84856adc6aa9acae96847"></a><a name="en-us_topic_0059778168_a71d42f00eeb84856adc6aa9acae96847"></a>--lc-time=LOCALE</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a9da720ea69b64f35adbb2f0240905dba"><a name="en-us_topic_0059778168_a9da720ea69b64f35adbb2f0240905dba"></a><a name="en-us_topic_0059778168_a9da720ea69b64f35adbb2f0240905dba"></a>Sets the locale in the specified category for the new database.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_ae044b8732e2e4ea78011b720dc1c3dda"><a name="en-us_topic_0059778168_ae044b8732e2e4ea78011b720dc1c3dda"></a><a name="en-us_topic_0059778168_ae044b8732e2e4ea78011b720dc1c3dda"></a>The parameter values must be supported by the OS. The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</p>
<div class="note" id="en-us_topic_0059778168_nc48697637c684e3fbc74abf832cbcfc5"><a name="en-us_topic_0059778168_nc48697637c684e3fbc74abf832cbcfc5"></a><a name="en-us_topic_0059778168_nc48697637c684e3fbc74abf832cbcfc5"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059778168_en-us_topic_0058968084_p783479093635"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p783479093635"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p783479093635"></a>If the --lc-collate parameter is not specified when the database is installed, the default value of --lc-collate is C.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0059778168_r68dc542683eb4304a9302451fcca45b6"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_a61be6a616dbf499ebec62cdef807ee22"><a name="en-us_topic_0059778168_a61be6a616dbf499ebec62cdef807ee22"></a><a name="en-us_topic_0059778168_a61be6a616dbf499ebec62cdef807ee22"></a>--no-locale</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_en-us_topic_0058968084_p93658414042"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p93658414042"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p93658414042"></a>Equivalent to --locale=C.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_a02154014d8804f94b02a28b77103ec89"><a name="en-us_topic_0059778168_a02154014d8804f94b02a28b77103ec89"></a><a name="en-us_topic_0059778168_a02154014d8804f94b02a28b77103ec89"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_r9df1c18903b6424d8a07a14bb1c07f68"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_a1986cbe2b2054e9d949bd7d55ae635a5"><a name="en-us_topic_0059778168_a1986cbe2b2054e9d949bd7d55ae635a5"></a><a name="en-us_topic_0059778168_a1986cbe2b2054e9d949bd7d55ae635a5"></a>--pwfile=FILE</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_en-us_topic_0058968084_p670015314042"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p670015314042"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p670015314042"></a>Reads the password of the database sysadmin from FILE during the running of gs_initdb. The first line of the file is taken as the password.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_ac7818172370b415c96f02f3eb914d9a1"><a name="en-us_topic_0059778168_ac7818172370b415c96f02f3eb914d9a1"></a><a name="en-us_topic_0059778168_ac7818172370b415c96f02f3eb914d9a1"></a>The format of FILE can be "a relative path+file" or "an absolute path+file". The relative path is relative to the current path. The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_rdc19c92d7a554a0d921f52aea18b7f68"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_a3764e4e4a8a9461f8573f7cf4537514d"><a name="en-us_topic_0059778168_a3764e4e4a8a9461f8573f7cf4537514d"></a><a name="en-us_topic_0059778168_a3764e4e4a8a9461f8573f7cf4537514d"></a>-T, --text-search-config=CFG</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_ade5a330c60df4410a111730ce871e9e5"><a name="en-us_topic_0059778168_ade5a330c60df4410a111730ce871e9e5"></a><a name="en-us_topic_0059778168_ade5a330c60df4410a111730ce871e9e5"></a>Sets the default text search mode.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_a23eba128a8c849039535c5d156384b1d"><a name="en-us_topic_0059778168_a23eba128a8c849039535c5d156384b1d"></a><a name="en-us_topic_0059778168_a23eba128a8c849039535c5d156384b1d"></a>Values of text-search-config:</p>
<a name="en-us_topic_0059778168_u32787aec68b74a82a8046c16faeab614"></a><a name="en-us_topic_0059778168_u32787aec68b74a82a8046c16faeab614"></a><ul id="en-us_topic_0059778168_u32787aec68b74a82a8046c16faeab614"><li>pg_catalog.english: full-context search</li><li>pg_catalog.simple: common text search</li></ul>
<p id="en-us_topic_0059778168_a4e71d94acb6d439a8776a3c7f493b753"><a name="en-us_topic_0059778168_a4e71d94acb6d439a8776a3c7f493b753"></a><a name="en-us_topic_0059778168_a4e71d94acb6d439a8776a3c7f493b753"></a>Default value: pg_catalog.simple</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_rd0c222c0ad514bcf84723b55cfb223ab"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_a863106d2c4154ecfb12f4bf35d8b6d31"><a name="en-us_topic_0059778168_a863106d2c4154ecfb12f4bf35d8b6d31"></a><a name="en-us_topic_0059778168_a863106d2c4154ecfb12f4bf35d8b6d31"></a>-U, --username=NAME</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a0fa722e5a044454fb85f37064f7daed8"><a name="en-us_topic_0059778168_a0fa722e5a044454fb85f37064f7daed8"></a><a name="en-us_topic_0059778168_a0fa722e5a044454fb85f37064f7daed8"></a>Selects the username of the database sysadmin.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_ab72d990d68c049388be0cb39b489de4c"><a name="en-us_topic_0059778168_ab72d990d68c049388be0cb39b489de4c"></a><a name="en-us_topic_0059778168_ab72d990d68c049388be0cb39b489de4c"></a>Value range: normal database users The value cannot contain "|", ";", "&amp;", "&lt;", "&gt;", "`", "\\", or "!".</p>
<p id="en-us_topic_0059778168_a371879078a194a3c97ac3b9f7e1901f1"><a name="en-us_topic_0059778168_a371879078a194a3c97ac3b9f7e1901f1"></a><a name="en-us_topic_0059778168_a371879078a194a3c97ac3b9f7e1901f1"></a>Default value: OS user who runs gs_initdb</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_rc0be57dc8921442f9b4bb77c1c5eed87"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_a9330b3666ebc49779fda7208430ef86e"><a name="en-us_topic_0059778168_a9330b3666ebc49779fda7208430ef86e"></a><a name="en-us_topic_0059778168_a9330b3666ebc49779fda7208430ef86e"></a>-W, --pwprompt</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a07c8842a8b014b60a7ee59bd5c00e083"><a name="en-us_topic_0059778168_a07c8842a8b014b60a7ee59bd5c00e083"></a><a name="en-us_topic_0059778168_a07c8842a8b014b60a7ee59bd5c00e083"></a>Prompts users to enter the password of the database administrator during the running of gs_initdb.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_a8bc2e6e444c94ee28ccf7fc7ef579234"><a name="en-us_topic_0059778168_a8bc2e6e444c94ee28ccf7fc7ef579234"></a><a name="en-us_topic_0059778168_a8bc2e6e444c94ee28ccf7fc7ef579234"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_r981959469ae4438a9be1e77572b6a987"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_a531d28a82e5b42fda7427067e7a269e1"><a name="en-us_topic_0059778168_a531d28a82e5b42fda7427067e7a269e1"></a><a name="en-us_topic_0059778168_a531d28a82e5b42fda7427067e7a269e1"></a>-w, --pwpasswd=PASSWD</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a9036f008e6b2417ab4fd693d1afd5281"><a name="en-us_topic_0059778168_a9036f008e6b2417ab4fd693d1afd5281"></a><a name="en-us_topic_0059778168_a9036f008e6b2417ab4fd693d1afd5281"></a>Specifies the password of the database administrator by running commands during the running of <strong id="b1351111411474"><a name="b1351111411474"></a><a name="b1351111411474"></a>gs_initdb</strong> instead of interactive input.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_a166374baf1b9417fa4d889f2b9e7b3ff"><a name="en-us_topic_0059778168_a166374baf1b9417fa4d889f2b9e7b3ff"></a><a name="en-us_topic_0059778168_a166374baf1b9417fa4d889f2b9e7b3ff"></a>The password must meet the following complexity requirement:</p>
<a name="en-us_topic_0059778168_u5cf6c2fab0884e6db33705a8b1517dba"></a><a name="en-us_topic_0059778168_u5cf6c2fab0884e6db33705a8b1517dba"></a><ul id="en-us_topic_0059778168_u5cf6c2fab0884e6db33705a8b1517dba"><li>The password must contain at least eight characters.</li><li>Cannot be the same as the username, the current password (ALTER), or the current password in an inverted sequence.</li><li>Contains at least three types of the following characters:<a name="ul84322731512"></a><a name="ul84322731512"></a><ul id="ul84322731512"><li>Uppercase letters (A-Z)</li><li>Lowercase letters (a-z)</li><li>Digits: 0–9</li><li>Special characters: ~!@#$%^&amp;*()-_=+\|[{}];:,&lt;.&gt;/?</li></ul>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778168_rc007fecadd6046f8aadb581f58c901c1"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_afaf2c98348cc4a5591a2884a984183ce"><a name="en-us_topic_0059778168_afaf2c98348cc4a5591a2884a984183ce"></a><a name="en-us_topic_0059778168_afaf2c98348cc4a5591a2884a984183ce"></a>-C, --enpwdfiledir=DIR</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_ae6b0a4366ce6473d93856ed2bb2c330d"><a name="en-us_topic_0059778168_ae6b0a4366ce6473d93856ed2bb2c330d"></a><a name="en-us_topic_0059778168_ae6b0a4366ce6473d93856ed2bb2c330d"></a>Specifies the directory where the password encrypted is located, using the AES128 encryption algorithm during the running of gs_initdb. gs_initdb decrypts the password file in this directory and performs the password complexity check on the decrypted password. The password is used as the user's password if the verification result is passed.</p>
<div class="note" id="en-us_topic_0059778168_n96825782fffe451a8e266c4642f5c5ab"><a name="en-us_topic_0059778168_n96825782fffe451a8e266c4642f5c5ab"></a><a name="en-us_topic_0059778168_n96825782fffe451a8e266c4642f5c5ab"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0059778168_ue1d74eb6d6544f5a87095ffe467c3893"></a><a name="en-us_topic_0059778168_ue1d74eb6d6544f5a87095ffe467c3893"></a><ul id="en-us_topic_0059778168_ue1d74eb6d6544f5a87095ffe467c3893"><li>Run the <strong id="b125066421249"><a name="b125066421249"></a><a name="b125066421249"></a>gs_guc encrypt -K</strong> <em id="i35071742449"><a name="i35071742449"></a><a name="i35071742449"></a>password</em> -D <em id="i350774215416"><a name="i350774215416"></a><a name="i350774215416"></a>Dir</em> command to generate the encrypted password file.</li><li>If multiple <strong id="b126201728162214"><a name="b126201728162214"></a><a name="b126201728162214"></a>-w</strong> and <strong id="b1884016387222"><a name="b1884016387222"></a><a name="b1884016387222"></a>-C</strong> parameters are specified, gs_initdb regards the last <strong id="b453916436149"><a name="b453916436149"></a><a name="b453916436149"></a>-w</strong> or <strong id="b83561546111412"><a name="b83561546111412"></a><a name="b83561546111412"></a>-C</strong> parameter as the user's requirement (entering a plaintext password or a password encrypted using AES128).</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_en-us_topic_0058968084_p669277881694"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p669277881694"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p669277881694"></a>The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_r07464fab420e4671a34a460d75d76637"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_a3a039c42f6cc4b9f950bcb1f0f37fcd6"><a name="en-us_topic_0059778168_a3a039c42f6cc4b9f950bcb1f0f37fcd6"></a><a name="en-us_topic_0059778168_a3a039c42f6cc4b9f950bcb1f0f37fcd6"></a>-X, --xlogdir=XLOGDIR</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a006d0d95e29748c592fdd4cd2d275db7"><a name="en-us_topic_0059778168_a006d0d95e29748c592fdd4cd2d275db7"></a><a name="en-us_topic_0059778168_a006d0d95e29748c592fdd4cd2d275db7"></a>Specifies the directory where the transaction logs are stored.</p>
<p id="en-us_topic_0059778168_aa7f9aced4b4f49529a06901c7baa05ba"><a name="en-us_topic_0059778168_aa7f9aced4b4f49529a06901c7baa05ba"></a><a name="en-us_topic_0059778168_aa7f9aced4b4f49529a06901c7baa05ba"></a>The directory must be a directory for which <span id="text159364408376"><a name="text159364408376"></a><a name="text159364408376"></a>openGauss</span> users have the read and write permissions.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_ad84c6e72a8014e17b4fc637e4744fcb0"><a name="en-us_topic_0059778168_ad84c6e72a8014e17b4fc637e4744fcb0"></a><a name="en-us_topic_0059778168_ad84c6e72a8014e17b4fc637e4744fcb0"></a>The value can be an absolute path or a relative path. The relative path is relative to the data directory. The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_rb4cbd9cc9f454dbd8dbd9c0024f4f49c"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_adb3b9f7b61294101b39eedd21feef973"><a name="en-us_topic_0059778168_adb3b9f7b61294101b39eedd21feef973"></a><a name="en-us_topic_0059778168_adb3b9f7b61294101b39eedd21feef973"></a>-S, --security</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a941fc47a24bf41ed93d91a2fc8fe28c9"><a name="en-us_topic_0059778168_a941fc47a24bf41ed93d91a2fc8fe28c9"></a><a name="en-us_topic_0059778168_a941fc47a24bf41ed93d91a2fc8fe28c9"></a>This database is initialized in the security mode.</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_a6ef9874c80974ce3953e2aa1db0a0efb"><a name="en-us_topic_0059778168_a6ef9874c80974ce3953e2aa1db0a0efb"></a><a name="en-us_topic_0059778168_a6ef9874c80974ce3953e2aa1db0a0efb"></a>After the database is initialized using -S, the created database user permissions are restricted, and the public schema permission cannot be used any more by default.</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Uncommon parameters

<a name="en-us_topic_0059778168_t2f464cb1775044808eceb29e25d6d37f"></a>
<table><thead align="left"><tr id="en-us_topic_0059778168_rcdce44e401504e7fbc3d46375a8bdfcf"><th class="cellrowborder" valign="top" width="15.939999999999998%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778168_a56f44abb258a4286be24bb7b628afece"><a name="en-us_topic_0059778168_a56f44abb258a4286be24bb7b628afece"></a><a name="en-us_topic_0059778168_a56f44abb258a4286be24bb7b628afece"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="60.940000000000005%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778168_a08ee6c1b36b24ef98584c3fa2926fe19"><a name="en-us_topic_0059778168_a08ee6c1b36b24ef98584c3fa2926fe19"></a><a name="en-us_topic_0059778168_a08ee6c1b36b24ef98584c3fa2926fe19"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="23.119999999999997%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778168_en-us_topic_0058968084_p510352201451"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p510352201451"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p510352201451"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778168_r20e8aa016e00498e8cdd78cb91ae1259"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_a08696e88c5504abeb747084aa8a014e5"><a name="en-us_topic_0059778168_a08696e88c5504abeb747084aa8a014e5"></a><a name="en-us_topic_0059778168_a08696e88c5504abeb747084aa8a014e5"></a>-d, --debug</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a20acb965470a4011b6a112fba8fdd554"><a name="en-us_topic_0059778168_a20acb965470a4011b6a112fba8fdd554"></a><a name="en-us_topic_0059778168_a20acb965470a4011b6a112fba8fdd554"></a>Prints debugging output from the bootstrap backend. The bootstrap backend is the program for gs_initdb to create the system catalogs.</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_aab224892323541ebb37429a325f72ae3"><a name="en-us_topic_0059778168_aab224892323541ebb37429a325f72ae3"></a><a name="en-us_topic_0059778168_aab224892323541ebb37429a325f72ae3"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_rb3cc8dfb4ef147789b26c7bedc388ff1"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_en-us_topic_0058968084_p754280414042"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p754280414042"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p754280414042"></a>-L DIRECTORY</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_en-us_topic_0058968084_p698742114042"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p698742114042"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p698742114042"></a>Specifies the input file path where the database is initialized using gs_initdb. Usually, it is unnecessary. You will be prompted if you need to specify their location explicitly.</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_a1a814991f59347708f713aed46a2de69"><a name="en-us_topic_0059778168_a1a814991f59347708f713aed46a2de69"></a><a name="en-us_topic_0059778168_a1a814991f59347708f713aed46a2de69"></a>Path of input files required by the initialized database The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_r9fd94d4eea5a4fffbe84f595c06ce3e9"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_af0f24cb7bf5b4f1fa1ba5f81fdf53fa2"><a name="en-us_topic_0059778168_af0f24cb7bf5b4f1fa1ba5f81fdf53fa2"></a><a name="en-us_topic_0059778168_af0f24cb7bf5b4f1fa1ba5f81fdf53fa2"></a>-n, --noclean</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a6e425272494742d5a19f77d99bf796b2"><a name="en-us_topic_0059778168_a6e425272494742d5a19f77d99bf796b2"></a><a name="en-us_topic_0059778168_a6e425272494742d5a19f77d99bf796b2"></a>If this parameter is not specified and gs_initdb determines that an error prevents it from creating a database, it removes any files it might have created before discovering that it cannot finish the job. This option inhibits tidying-up and is therefore useful for debugging.</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_a6812e35ed982480493c851dadf1d4e2e"><a name="en-us_topic_0059778168_a6812e35ed982480493c851dadf1d4e2e"></a><a name="en-us_topic_0059778168_a6812e35ed982480493c851dadf1d4e2e"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_ra211d54b4ac3434eb653905797bace22"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_ab4b1d602d8e64fa7935cc69bdefd63dc"><a name="en-us_topic_0059778168_ab4b1d602d8e64fa7935cc69bdefd63dc"></a><a name="en-us_topic_0059778168_ab4b1d602d8e64fa7935cc69bdefd63dc"></a>-s, --show</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a5011243f8d344adc983426a76fe5c054"><a name="en-us_topic_0059778168_a5011243f8d344adc983426a76fe5c054"></a><a name="en-us_topic_0059778168_a5011243f8d344adc983426a76fe5c054"></a>Displays internal settings.</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_adb419280469547c786f06333a1d3f20a"><a name="en-us_topic_0059778168_adb419280469547c786f06333a1d3f20a"></a><a name="en-us_topic_0059778168_adb419280469547c786f06333a1d3f20a"></a>-</p>
</td>
</tr>
<tr id="row17752189113511"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="p1875369123518"><a name="p1875369123518"></a><a name="p1875369123518"></a>-H, --host-ip</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="p97533916351"><a name="p97533916351"></a><a name="p97533916351"></a>Initializes the openGauss node <strong id="b8321533111611"><a name="b8321533111611"></a><a name="b8321533111611"></a>node_host</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="p19754099351"><a name="p19754099351"></a><a name="p19754099351"></a>The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_re847d900ac2c4d18b1a81472b956cc0d"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_en-us_topic_0058968084_p938216814042"><a name="en-us_topic_0059778168_en-us_topic_0058968084_p938216814042"></a><a name="en-us_topic_0059778168_en-us_topic_0058968084_p938216814042"></a>-V, --version</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_a9f3d5f19499c4294915ffd31b51d521a"><a name="en-us_topic_0059778168_a9f3d5f19499c4294915ffd31b51d521a"></a><a name="en-us_topic_0059778168_a9f3d5f19499c4294915ffd31b51d521a"></a>Prints the gs_initdb version information and exits.</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_a447b6665afb94838805a0fb78226994a"><a name="en-us_topic_0059778168_a447b6665afb94838805a0fb78226994a"></a><a name="en-us_topic_0059778168_a447b6665afb94838805a0fb78226994a"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778168_r61b79064dcd94ee5af8f108de8b4b284"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778168_af7a8724ee2da49998933039cbd96bf6d"><a name="en-us_topic_0059778168_af7a8724ee2da49998933039cbd96bf6d"></a><a name="en-us_topic_0059778168_af7a8724ee2da49998933039cbd96bf6d"></a>-?, --help</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778168_afe016a5c969f40588960864b14bef101"><a name="en-us_topic_0059778168_afe016a5c969f40588960864b14bef101"></a><a name="en-us_topic_0059778168_afe016a5c969f40588960864b14bef101"></a>Displays help information about gs_initdb command parameters and exits.</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778168_acd137c3708c44ec7b5aa19addfc1b627"><a name="en-us_topic_0059778168_acd137c3708c44ec7b5aa19addfc1b627"></a><a name="en-us_topic_0059778168_acd137c3708c44ec7b5aa19addfc1b627"></a>-</p>
</td>
</tr>
<tr id="row373643318181"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="p173618339181"><a name="p173618339181"></a><a name="p173618339181"></a>-g</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="p197362033171819"><a name="p197362033171819"></a><a name="p197362033171819"></a>Specifies the path of the shared Xlog file for initializing the cross-AZ DR database instance that uses the shared storage.</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="p0736833111818"><a name="p0736833111818"></a><a name="p0736833111818"></a>Specified shared log file path. The value cannot contain "|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", or "!".</p>
</td>
</tr>
</tbody>
</table>

