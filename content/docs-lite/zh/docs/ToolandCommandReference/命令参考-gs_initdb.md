# 命令参考<a name="ZH-CN_TOPIC_0294748983"></a>

## 命令参考<a name="zh-cn_topic_0059778168_s0bfc8ae9e6bc445480335198cc89f358"></a>

gs\_initdb支持的常用参数和不常用参数请分别参见[表1](#zh-cn_topic_0059778168_t7527cd2e8e304b64bec55dcd38b701bb)和[表2](#zh-cn_topic_0059778168_t2f464cb1775044808eceb29e25d6d37f)。

**表 1**  常用参数说明

<a name="zh-cn_topic_0059778168_t7527cd2e8e304b64bec55dcd38b701bb"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778168_rb04ed4dbb2024e91814fe29c62058a1e"><th class="cellrowborder" valign="top" width="19.64%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778168_abb1d0e137f344644873d231722922745"><a name="zh-cn_topic_0059778168_abb1d0e137f344644873d231722922745"></a><a name="zh-cn_topic_0059778168_abb1d0e137f344644873d231722922745"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="36.68%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778168_a2a756e3c53094c5ea62729be1496108e"><a name="zh-cn_topic_0059778168_a2a756e3c53094c5ea62729be1496108e"></a><a name="zh-cn_topic_0059778168_a2a756e3c53094c5ea62729be1496108e"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="43.68%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778168_ab80eddf3dfec41808d7b2abeeb2768f7"><a name="zh-cn_topic_0059778168_ab80eddf3dfec41808d7b2abeeb2768f7"></a><a name="zh-cn_topic_0059778168_ab80eddf3dfec41808d7b2abeeb2768f7"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778168_rd179fba4db404defa826417a64d12321"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_a3cb75dc19ee843408dc2738c6fbdacf5"><a name="zh-cn_topic_0059778168_a3cb75dc19ee843408dc2738c6fbdacf5"></a><a name="zh-cn_topic_0059778168_a3cb75dc19ee843408dc2738c6fbdacf5"></a>-A, --auth=METHOD</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a860229dc5c08407d8732a736dd68009a"><a name="zh-cn_topic_0059778168_a860229dc5c08407d8732a736dd68009a"></a><a name="zh-cn_topic_0059778168_a860229dc5c08407d8732a736dd68009a"></a>指定本地用户连接数据库时的认证方法，即“pg_hba.conf”配置文件中host和local所在行的认证方法。</p>
<p id="zh-cn_topic_0059778168_a54020ab85c9b4a19b224c6ebb322f0fd"><a name="zh-cn_topic_0059778168_a54020ab85c9b4a19b224c6ebb322f0fd"></a><a name="zh-cn_topic_0059778168_a54020ab85c9b4a19b224c6ebb322f0fd"></a>除非用户对本地用户都是信任的，否则不要使用默认值trust。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_a63ab922337dd4d04aeeccf564ba3d5c9"><a name="zh-cn_topic_0059778168_a63ab922337dd4d04aeeccf564ba3d5c9"></a><a name="zh-cn_topic_0059778168_a63ab922337dd4d04aeeccf564ba3d5c9"></a>METHOD的取值：</p>
<a name="zh-cn_topic_0059778168_uc88578ae236a4c23901b34032feecabd"></a><a name="zh-cn_topic_0059778168_uc88578ae236a4c23901b34032feecabd"></a><ul id="zh-cn_topic_0059778168_uc88578ae236a4c23901b34032feecabd"><li>trust</li><li>reject</li><li>md5（不安全的算法，为了兼容老版本而存在）</li><li>sha256</li><li>sm3</li></ul>
<p id="zh-cn_topic_0059778168_ad4b8bf2ccd58490788bcf20d798a6b8d"><a name="zh-cn_topic_0059778168_ad4b8bf2ccd58490788bcf20d798a6b8d"></a><a name="zh-cn_topic_0059778168_ad4b8bf2ccd58490788bcf20d798a6b8d"></a>默认值：trust</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_rf73b734c009149788c82b8aa398ac4af"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_af47c563f101c4cea8910db7f73abd15a"><a name="zh-cn_topic_0059778168_af47c563f101c4cea8910db7f73abd15a"></a><a name="zh-cn_topic_0059778168_af47c563f101c4cea8910db7f73abd15a"></a>--auth-host=METHOD</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_ab7ee914f7d5b4ee2ae3788836f4a9ba2"><a name="zh-cn_topic_0059778168_ab7ee914f7d5b4ee2ae3788836f4a9ba2"></a><a name="zh-cn_topic_0059778168_ab7ee914f7d5b4ee2ae3788836f4a9ba2"></a>指定本地用户通过TCP/IP连接数据库时的认证方法，即：“pg_hba.conf”配置文件中host所在行的认证方法。</p>
<p id="zh-cn_topic_0059778168_ac3bf14491ea44e3787b2ea25eaac0aa5"><a name="zh-cn_topic_0059778168_ac3bf14491ea44e3787b2ea25eaac0aa5"></a><a name="zh-cn_topic_0059778168_ac3bf14491ea44e3787b2ea25eaac0aa5"></a>指定此参数则会覆盖-A参数的值。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_adf75e663ccd74766a057c833066b5ecc"><a name="zh-cn_topic_0059778168_adf75e663ccd74766a057c833066b5ecc"></a><a name="zh-cn_topic_0059778168_adf75e663ccd74766a057c833066b5ecc"></a>METHOD的取值：</p>
<a name="zh-cn_topic_0059778168_ua0bc882ad25b4c30889bd8beb2df1684"></a><a name="zh-cn_topic_0059778168_ua0bc882ad25b4c30889bd8beb2df1684"></a><ul id="zh-cn_topic_0059778168_ua0bc882ad25b4c30889bd8beb2df1684"><li>trust</li><li>reject</li><li>md5（不安全的算法，为了兼容老版本而存在）</li><li>sha256</li><li>sm3</li></ul>
<p id="zh-cn_topic_0059778168_abd57e40a917448c2b7edd44975429a92"><a name="zh-cn_topic_0059778168_abd57e40a917448c2b7edd44975429a92"></a><a name="zh-cn_topic_0059778168_abd57e40a917448c2b7edd44975429a92"></a>默认值：trust</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_r68a0e327cb7d4bc996dc484686062273"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_a40e2990b520b4b2f8e7844de42a774b6"><a name="zh-cn_topic_0059778168_a40e2990b520b4b2f8e7844de42a774b6"></a><a name="zh-cn_topic_0059778168_a40e2990b520b4b2f8e7844de42a774b6"></a>--auth-local=METHOD</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_af4e8d27f91c04a82b20477d9cf1c7437"><a name="zh-cn_topic_0059778168_af4e8d27f91c04a82b20477d9cf1c7437"></a><a name="zh-cn_topic_0059778168_af4e8d27f91c04a82b20477d9cf1c7437"></a>指定本地用户通过Unix域套接字连接数据库时的认证方法，即“pg_hba.conf”配置文件中local所在行的认证方法。</p>
<p id="zh-cn_topic_0059778168_a51a82f8aca384c1cb239459acc286af3"><a name="zh-cn_topic_0059778168_a51a82f8aca384c1cb239459acc286af3"></a><a name="zh-cn_topic_0059778168_a51a82f8aca384c1cb239459acc286af3"></a>指定此参数则会覆盖-A参数的值。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_a66742067d6074ae1b1e4f9dcf9c991ef"><a name="zh-cn_topic_0059778168_a66742067d6074ae1b1e4f9dcf9c991ef"></a><a name="zh-cn_topic_0059778168_a66742067d6074ae1b1e4f9dcf9c991ef"></a>METHOD的取值：</p>
<a name="zh-cn_topic_0059778168_ua8f41201ecce4a38838612396d037513"></a><a name="zh-cn_topic_0059778168_ua8f41201ecce4a38838612396d037513"></a><ul id="zh-cn_topic_0059778168_ua8f41201ecce4a38838612396d037513"><li>trust</li><li>reject</li><li>md5（不安全的算法，为了兼容老版本而存在）</li><li>sha256</li><li>sm3</li><li>peer（仅用于local模式）</li></ul>
<p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p338903114578"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p338903114578"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p338903114578"></a>默认值：trust</p>
</td>
</tr>
<tr id="row1087619537533"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="p487605385316"><a name="p487605385316"></a><a name="p487605385316"></a>-c, --enable-dcf</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="p6877105395313"><a name="p6877105395313"></a><a name="p6877105395313"></a>设置安装的节点为DCF模式。</p>
<div class="note" id="note11801202216252"><a name="note11801202216252"></a><a name="note11801202216252"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p080114223253"><a name="p080114223253"></a><a name="p080114223253"></a><span id="text931644882117"><a name="text931644882117"></a><a name="text931644882117"></a>轻量版</span>场景下，<span id="text63611635193718"><a name="text63611635193718"></a><a name="text63611635193718"></a>openGauss</span>提供此参数，但DCF功能不可用。对于DCF功能，<span id="text1321963873716"><a name="text1321963873716"></a><a name="text1321963873716"></a>openGauss</span>提供选主能力，用户若使用需自行配置。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="p10877155313531"><a name="p10877155313531"></a><a name="p10877155313531"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_r47ed009556a04eaf93f25efafa434b48"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_ad674234b3ed54669ae4422ab93b53b7f"><a name="zh-cn_topic_0059778168_ad674234b3ed54669ae4422ab93b53b7f"></a><a name="zh-cn_topic_0059778168_ad674234b3ed54669ae4422ab93b53b7f"></a>[-D, --pgdata=]DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a05e68f440cd848f5b234c12269b9a336"><a name="zh-cn_topic_0059778168_a05e68f440cd848f5b234c12269b9a336"></a><a name="zh-cn_topic_0059778168_a05e68f440cd848f5b234c12269b9a336"></a>指定数据目录的位置。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_aaa96bc60571e4c03a72d420b5c231b04"><a name="zh-cn_topic_0059778168_aaa96bc60571e4c03a72d420b5c231b04"></a><a name="zh-cn_topic_0059778168_aaa96bc60571e4c03a72d420b5c231b04"></a>DATADIR的取值：用户自定义。不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_r27a76bd2a5b34e4e9912460013a5cd93"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p163219612615"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p163219612615"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p163219612615"></a>--nodename=NODENAME</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_afa4fd3ea63b44774b96814d9e7d5c33a"><a name="zh-cn_topic_0059778168_afa4fd3ea63b44774b96814d9e7d5c33a"></a><a name="zh-cn_topic_0059778168_afa4fd3ea63b44774b96814d9e7d5c33a"></a>初始化的节点名称。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p15632068264"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p15632068264"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p15632068264"></a>不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_r03b22892d28245d2aac936aac685d764"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_abe6235a1ec1a41bdbe8b52c706ea8d94"><a name="zh-cn_topic_0059778168_abe6235a1ec1a41bdbe8b52c706ea8d94"></a><a name="zh-cn_topic_0059778168_abe6235a1ec1a41bdbe8b52c706ea8d94"></a>-E, --encoding=ENCODING</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p825108314042"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p825108314042"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p825108314042"></a>为新数据库设置编码格式。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_ul47919015168"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_ul47919015168"></a><ul id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_ul47919015168"><li>如果使用此参数，需要加上--locale选项指定支持此编码格式的区域。如果不加--locale选项，则采用系统默认的区域，如果系统默认区域的编码格式和用此参数指定的编码格式不匹配则会导致数据库初始化失败。</li><li>如果不指定此参数，则使用系统默认区域的编码格式。系统默认区域和编码格式可以使用locale命令查看，如下：<pre class="screen" id="zh-cn_topic_0059778168_s240f6735fde74db2a6ca95d0a9624015"><a name="zh-cn_topic_0059778168_s240f6735fde74db2a6ca95d0a9624015"></a><a name="zh-cn_topic_0059778168_s240f6735fde74db2a6ca95d0a9624015"></a><span id="text493110181653"><a name="text493110181653"></a><a name="text493110181653"></a>omm</span>@linux:<font style="font-size:8pt" Face="Courier New" >~</font>&gt; locale|grep LC_CTYPE
LC_CTYPE="en_US.UTF-8"
</pre>
<p id="zh-cn_topic_0059778168_a631effe7371d428ea86042a709f14ecc"><a name="zh-cn_topic_0059778168_a631effe7371d428ea86042a709f14ecc"></a><a name="zh-cn_topic_0059778168_a631effe7371d428ea86042a709f14ecc"></a>其中UTF-8表示系统默认区域的编码格式。</p>
<p id="p1165918073717"><a name="p1165918073717"></a><a name="p1165918073717"></a>不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_rf6ebc0474ad243da85058fcca4ed39b8"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_a4116cde05e05427daf2a46774bb81de8"><a name="zh-cn_topic_0059778168_a4116cde05e05427daf2a46774bb81de8"></a><a name="zh-cn_topic_0059778168_a4116cde05e05427daf2a46774bb81de8"></a>--locale=LOCALE</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_ae62cadd0b34546d8bcc2c36dfb24ec10"><a name="zh-cn_topic_0059778168_ae62cadd0b34546d8bcc2c36dfb24ec10"></a><a name="zh-cn_topic_0059778168_ae62cadd0b34546d8bcc2c36dfb24ec10"></a>为新数据库设置缺省的区域。</p>
<div class="notice" id="zh-cn_topic_0059778168_n68804385e7ce4f0ba5d88a03ae2e4c73"><a name="zh-cn_topic_0059778168_n68804385e7ce4f0ba5d88a03ae2e4c73"></a><a name="zh-cn_topic_0059778168_n68804385e7ce4f0ba5d88a03ae2e4c73"></a><span class="noticetitle"> 须知： </span><div class="noticebody"><p id="zh-cn_topic_0059778168_acccca55cfee647d581bdb9936e40bf31"><a name="zh-cn_topic_0059778168_acccca55cfee647d581bdb9936e40bf31"></a><a name="zh-cn_topic_0059778168_acccca55cfee647d581bdb9936e40bf31"></a><li>如果用户设置了数据库的编码格式，则用户选择区域的编码格式必须与用户设置的编码格式一致，否则数据库初始化会失败。</li><li>当指定了数据库的编码格式为GB18030_2022时，则参数locale的取值范围与GB18030保持一致。</li></p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_a803a9ebdf89c45f0a6b46a76846a93e0"><a name="zh-cn_topic_0059778168_a803a9ebdf89c45f0a6b46a76846a93e0"></a><a name="zh-cn_topic_0059778168_a803a9ebdf89c45f0a6b46a76846a93e0"></a>例如用户要将数据库编码格式初始化为GBK，可以采用如下步骤：</p>
<a name="zh-cn_topic_0059778168_o14641ef5676b4f6e8cf5555515076472"></a><a name="zh-cn_topic_0059778168_o14641ef5676b4f6e8cf5555515076472"></a><ol id="zh-cn_topic_0059778168_o14641ef5676b4f6e8cf5555515076472"><li>用locale -a |grep gbk命令查看系统支持gbk编码的区域，如下：<pre class="screen" id="zh-cn_topic_0059778168_sde05eecf42394d6fafbef19c47e15d0d"><a name="zh-cn_topic_0059778168_sde05eecf42394d6fafbef19c47e15d0d"></a><a name="zh-cn_topic_0059778168_sde05eecf42394d6fafbef19c47e15d0d"></a><span id="text1781618203519"><a name="text1781618203519"></a><a name="text1781618203519"></a>omm</span>@linux:<font style="font-size:8pt" Face="Courier New" >~</font>&gt;  locale -a|grep gbk
zh_CN.gbk
zh_SG.gbk
</pre>
</li><li>初始化数据库时加入--locale=zh_CN.gbk选项。</li><li>不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</li></ol>
</td>
</tr>
<tr id="row14138420183818"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="p1413819204389"><a name="p1413819204389"></a><a name="p1413819204389"></a>--dbcompatibility=DBCOMPATIBILITY</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="p8139112033811"><a name="p8139112033811"></a><a name="p8139112033811"></a>为新数据库设置默认db兼容性。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="p213918202385"><a name="p213918202385"></a><a name="p213918202385"></a>不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_rc126b0b832e14fe791da39d5336b0d6a"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p296280814042"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p296280814042"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p296280814042"></a>--lc-collate=LOCALE</p>
<p id="zh-cn_topic_0059778168_aa94596f2af8d4c94990bf5216816300c"><a name="zh-cn_topic_0059778168_aa94596f2af8d4c94990bf5216816300c"></a><a name="zh-cn_topic_0059778168_aa94596f2af8d4c94990bf5216816300c"></a>--lc-ctype=LOCALE</p>
<p id="zh-cn_topic_0059778168_ad3d9c7e24fb049ffbfdb796a0cc703ae"><a name="zh-cn_topic_0059778168_ad3d9c7e24fb049ffbfdb796a0cc703ae"></a><a name="zh-cn_topic_0059778168_ad3d9c7e24fb049ffbfdb796a0cc703ae"></a>--lc-messages=LOCALE</p>
<p id="zh-cn_topic_0059778168_ab87e33d09c4448138e1d1827ff0b8b1a"><a name="zh-cn_topic_0059778168_ab87e33d09c4448138e1d1827ff0b8b1a"></a><a name="zh-cn_topic_0059778168_ab87e33d09c4448138e1d1827ff0b8b1a"></a>--lc-monetary=LOCALE</p>
<p id="zh-cn_topic_0059778168_a5d227938183a45f6b37b9d9455b9c5c6"><a name="zh-cn_topic_0059778168_a5d227938183a45f6b37b9d9455b9c5c6"></a><a name="zh-cn_topic_0059778168_a5d227938183a45f6b37b9d9455b9c5c6"></a>--lc-numeric=LOCALE</p>
<p id="zh-cn_topic_0059778168_a71d42f00eeb84856adc6aa9acae96847"><a name="zh-cn_topic_0059778168_a71d42f00eeb84856adc6aa9acae96847"></a><a name="zh-cn_topic_0059778168_a71d42f00eeb84856adc6aa9acae96847"></a>--lc-time=LOCALE</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a9da720ea69b64f35adbb2f0240905dba"><a name="zh-cn_topic_0059778168_a9da720ea69b64f35adbb2f0240905dba"></a><a name="zh-cn_topic_0059778168_a9da720ea69b64f35adbb2f0240905dba"></a>为新数据库设置指定范畴的区域。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_ae044b8732e2e4ea78011b720dc1c3dda"><a name="zh-cn_topic_0059778168_ae044b8732e2e4ea78011b720dc1c3dda"></a><a name="zh-cn_topic_0059778168_ae044b8732e2e4ea78011b720dc1c3dda"></a>各参数的取值必须是操作系统支持的值。不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
<div class="note" id="zh-cn_topic_0059778168_nc48697637c684e3fbc74abf832cbcfc5"><a name="zh-cn_topic_0059778168_nc48697637c684e3fbc74abf832cbcfc5"></a><a name="zh-cn_topic_0059778168_nc48697637c684e3fbc74abf832cbcfc5"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p783479093635"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p783479093635"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p783479093635"></a><li>如果用户在数据库安装的时候没有指定--lc-collate参数，则--lc-collate参数的默认值为C。</li><li>当指定了数据库的编码格式为GB18030_2022时，则参数--lc-collate和参数--lc-ctype的取值范围与GB18030保持一致。</li></p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_r68dc542683eb4304a9302451fcca45b6"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_a61be6a616dbf499ebec62cdef807ee22"><a name="zh-cn_topic_0059778168_a61be6a616dbf499ebec62cdef807ee22"></a><a name="zh-cn_topic_0059778168_a61be6a616dbf499ebec62cdef807ee22"></a>--no-locale</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p93658414042"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p93658414042"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p93658414042"></a>和--locale=C等价。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_a02154014d8804f94b02a28b77103ec89"><a name="zh-cn_topic_0059778168_a02154014d8804f94b02a28b77103ec89"></a><a name="zh-cn_topic_0059778168_a02154014d8804f94b02a28b77103ec89"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_r9df1c18903b6424d8a07a14bb1c07f68"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_a1986cbe2b2054e9d949bd7d55ae635a5"><a name="zh-cn_topic_0059778168_a1986cbe2b2054e9d949bd7d55ae635a5"></a><a name="zh-cn_topic_0059778168_a1986cbe2b2054e9d949bd7d55ae635a5"></a>--pwfile=FILE</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p670015314042"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p670015314042"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p670015314042"></a>gs_initdb时从文件FILE中读取数据库中系统管理员的密码。该文件的第一行将被当作密码使用。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_ac7818172370b415c96f02f3eb914d9a1"><a name="zh-cn_topic_0059778168_ac7818172370b415c96f02f3eb914d9a1"></a><a name="zh-cn_topic_0059778168_ac7818172370b415c96f02f3eb914d9a1"></a>FILE可以是“相对路径+文件”的形式，也可以是“绝对路径+文件”的形式。相对路径是相对当前路径的。不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_rdc19c92d7a554a0d921f52aea18b7f68"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_a3764e4e4a8a9461f8573f7cf4537514d"><a name="zh-cn_topic_0059778168_a3764e4e4a8a9461f8573f7cf4537514d"></a><a name="zh-cn_topic_0059778168_a3764e4e4a8a9461f8573f7cf4537514d"></a>-T, --text-search-config=CFG</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_ade5a330c60df4410a111730ce871e9e5"><a name="zh-cn_topic_0059778168_ade5a330c60df4410a111730ce871e9e5"></a><a name="zh-cn_topic_0059778168_ade5a330c60df4410a111730ce871e9e5"></a>设置缺省的文本搜索方式。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_a23eba128a8c849039535c5d156384b1d"><a name="zh-cn_topic_0059778168_a23eba128a8c849039535c5d156384b1d"></a><a name="zh-cn_topic_0059778168_a23eba128a8c849039535c5d156384b1d"></a>text-search-config的取值：</p>
<a name="zh-cn_topic_0059778168_u32787aec68b74a82a8046c16faeab614"></a><a name="zh-cn_topic_0059778168_u32787aec68b74a82a8046c16faeab614"></a><ul id="zh-cn_topic_0059778168_u32787aec68b74a82a8046c16faeab614"><li>pg_catalog.english全文搜索</li><li>pg_catalog.simple普通文本搜索</li></ul>
<p id="zh-cn_topic_0059778168_a4e71d94acb6d439a8776a3c7f493b753"><a name="zh-cn_topic_0059778168_a4e71d94acb6d439a8776a3c7f493b753"></a><a name="zh-cn_topic_0059778168_a4e71d94acb6d439a8776a3c7f493b753"></a>默认值：pg_catalog.simple</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_rd0c222c0ad514bcf84723b55cfb223ab"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_a863106d2c4154ecfb12f4bf35d8b6d31"><a name="zh-cn_topic_0059778168_a863106d2c4154ecfb12f4bf35d8b6d31"></a><a name="zh-cn_topic_0059778168_a863106d2c4154ecfb12f4bf35d8b6d31"></a>-U, --username=NAME</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a0fa722e5a044454fb85f37064f7daed8"><a name="zh-cn_topic_0059778168_a0fa722e5a044454fb85f37064f7daed8"></a><a name="zh-cn_topic_0059778168_a0fa722e5a044454fb85f37064f7daed8"></a>选择数据库系统管理员的用户名。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_ab72d990d68c049388be0cb39b489de4c"><a name="zh-cn_topic_0059778168_ab72d990d68c049388be0cb39b489de4c"></a><a name="zh-cn_topic_0059778168_ab72d990d68c049388be0cb39b489de4c"></a>取值范围：正常的数据库用户。不能包括"|", ";", "&amp;", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
<p id="zh-cn_topic_0059778168_a371879078a194a3c97ac3b9f7e1901f1"><a name="zh-cn_topic_0059778168_a371879078a194a3c97ac3b9f7e1901f1"></a><a name="zh-cn_topic_0059778168_a371879078a194a3c97ac3b9f7e1901f1"></a>默认值：运行gs_initdb的操作系统用户。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_rc0be57dc8921442f9b4bb77c1c5eed87"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_a9330b3666ebc49779fda7208430ef86e"><a name="zh-cn_topic_0059778168_a9330b3666ebc49779fda7208430ef86e"></a><a name="zh-cn_topic_0059778168_a9330b3666ebc49779fda7208430ef86e"></a>-W, --pwprompt</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a07c8842a8b014b60a7ee59bd5c00e083"><a name="zh-cn_topic_0059778168_a07c8842a8b014b60a7ee59bd5c00e083"></a><a name="zh-cn_topic_0059778168_a07c8842a8b014b60a7ee59bd5c00e083"></a>gs_initdb时强制交互式输入数据库管理员的密码。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_a8bc2e6e444c94ee28ccf7fc7ef579234"><a name="zh-cn_topic_0059778168_a8bc2e6e444c94ee28ccf7fc7ef579234"></a><a name="zh-cn_topic_0059778168_a8bc2e6e444c94ee28ccf7fc7ef579234"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_r981959469ae4438a9be1e77572b6a987"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_a531d28a82e5b42fda7427067e7a269e1"><a name="zh-cn_topic_0059778168_a531d28a82e5b42fda7427067e7a269e1"></a><a name="zh-cn_topic_0059778168_a531d28a82e5b42fda7427067e7a269e1"></a>-w, --pwpasswd=PASSWD</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a9036f008e6b2417ab4fd693d1afd5281"><a name="zh-cn_topic_0059778168_a9036f008e6b2417ab4fd693d1afd5281"></a><a name="zh-cn_topic_0059778168_a9036f008e6b2417ab4fd693d1afd5281"></a>gs_initdb时通过命令行指定管理员用户的密码，而不是交互式输入。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_a166374baf1b9417fa4d889f2b9e7b3ff"><a name="zh-cn_topic_0059778168_a166374baf1b9417fa4d889f2b9e7b3ff"></a><a name="zh-cn_topic_0059778168_a166374baf1b9417fa4d889f2b9e7b3ff"></a>设置的密码要符合复杂度要求：</p>
<a name="zh-cn_topic_0059778168_u5cf6c2fab0884e6db33705a8b1517dba"></a><a name="zh-cn_topic_0059778168_u5cf6c2fab0884e6db33705a8b1517dba"></a><ul id="zh-cn_topic_0059778168_u5cf6c2fab0884e6db33705a8b1517dba"><li>最少包含8个字符，不能超过32个字符；</li><li>不能和用户名及当前密码（ALTER）相同，或和当前密码反序；</li><li>至少包含如下字符中的三类：<a name="ul84322731512"></a><a name="ul84322731512"></a><ul id="ul84322731512"><li>大写字母（A-Z）。</li><li>小写字母（a-z）。</li><li>数字（0-9）。</li><li>特殊字符（限定为~!@#$%^&amp;*()-_=+\|[{}];:,&lt;.&gt;/?）。</li></ul>
</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_rc007fecadd6046f8aadb581f58c901c1"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_afaf2c98348cc4a5591a2884a984183ce"><a name="zh-cn_topic_0059778168_afaf2c98348cc4a5591a2884a984183ce"></a><a name="zh-cn_topic_0059778168_afaf2c98348cc4a5591a2884a984183ce"></a>-C, --enpwdfiledir=DIR</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_ae6b0a4366ce6473d93856ed2bb2c330d"><a name="zh-cn_topic_0059778168_ae6b0a4366ce6473d93856ed2bb2c330d"></a><a name="zh-cn_topic_0059778168_ae6b0a4366ce6473d93856ed2bb2c330d"></a>gs_initdb时指定的经AES128加密算法加密过的密码文件所在目录。gs_initdb会将该目录下密码文件进行解密，同时把解密后的密码做密码复杂度校验，校验通过的话会将此密码作为用户的密码。</p>
<div class="note" id="zh-cn_topic_0059778168_n96825782fffe451a8e266c4642f5c5ab"><a name="zh-cn_topic_0059778168_n96825782fffe451a8e266c4642f5c5ab"></a><a name="zh-cn_topic_0059778168_n96825782fffe451a8e266c4642f5c5ab"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="zh-cn_topic_0059778168_ue1d74eb6d6544f5a87095ffe467c3893"></a><a name="zh-cn_topic_0059778168_ue1d74eb6d6544f5a87095ffe467c3893"></a><ul id="zh-cn_topic_0059778168_ue1d74eb6d6544f5a87095ffe467c3893"><li>加密密码文件需使用gs_guc工具生成：gs_guc encrypt -K <em id="i47511810166"><a name="i47511810166"></a><a name="i47511810166"></a>password</em> -D <em id="i69659497235"><a name="i69659497235"></a><a name="i69659497235"></a>Dir</em>。</li><li>如果用户指定多个-w和-C参数，gs_initdb会将用户输入的最后一个-w或-C参数作为用户的需求，即输入密码的明文或经过AES128加密后的密码。</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p669277881694"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p669277881694"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p669277881694"></a>不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_r07464fab420e4671a34a460d75d76637"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_a3a039c42f6cc4b9f950bcb1f0f37fcd6"><a name="zh-cn_topic_0059778168_a3a039c42f6cc4b9f950bcb1f0f37fcd6"></a><a name="zh-cn_topic_0059778168_a3a039c42f6cc4b9f950bcb1f0f37fcd6"></a>-X, --xlogdir=XLOGDIR</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a006d0d95e29748c592fdd4cd2d275db7"><a name="zh-cn_topic_0059778168_a006d0d95e29748c592fdd4cd2d275db7"></a><a name="zh-cn_topic_0059778168_a006d0d95e29748c592fdd4cd2d275db7"></a>声明事务日志存储的目录。</p>
<p id="zh-cn_topic_0059778168_aa7f9aced4b4f49529a06901c7baa05ba"><a name="zh-cn_topic_0059778168_aa7f9aced4b4f49529a06901c7baa05ba"></a><a name="zh-cn_topic_0059778168_aa7f9aced4b4f49529a06901c7baa05ba"></a>所设置的目录，必须满足运行<span id="text159364408376"><a name="text159364408376"></a><a name="text159364408376"></a>openGauss</span>的用户有读写权限。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_ad84c6e72a8014e17b4fc637e4744fcb0"><a name="zh-cn_topic_0059778168_ad84c6e72a8014e17b4fc637e4744fcb0"></a><a name="zh-cn_topic_0059778168_ad84c6e72a8014e17b4fc637e4744fcb0"></a>支持绝对路径和相对路径，相对路径是相对于数据目录的。不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_rb4cbd9cc9f454dbd8dbd9c0024f4f49c"><td class="cellrowborder" valign="top" width="19.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_adb3b9f7b61294101b39eedd21feef973"><a name="zh-cn_topic_0059778168_adb3b9f7b61294101b39eedd21feef973"></a><a name="zh-cn_topic_0059778168_adb3b9f7b61294101b39eedd21feef973"></a>-S, --security</p>
</td>
<td class="cellrowborder" valign="top" width="36.68%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a941fc47a24bf41ed93d91a2fc8fe28c9"><a name="zh-cn_topic_0059778168_a941fc47a24bf41ed93d91a2fc8fe28c9"></a><a name="zh-cn_topic_0059778168_a941fc47a24bf41ed93d91a2fc8fe28c9"></a>安全方式初始化数据库。</p>
</td>
<td class="cellrowborder" valign="top" width="43.68%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_a6ef9874c80974ce3953e2aa1db0a0efb"><a name="zh-cn_topic_0059778168_a6ef9874c80974ce3953e2aa1db0a0efb"></a><a name="zh-cn_topic_0059778168_a6ef9874c80974ce3953e2aa1db0a0efb"></a>以-S方式初始化的数据库后，创建的数据库用户权限受到限制，默认不再具有public schema的使用权限。</p>
</td>
</tr>
</tbody>
</table>

**表 2**  不常用参数说明

<a name="zh-cn_topic_0059778168_t2f464cb1775044808eceb29e25d6d37f"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778168_rcdce44e401504e7fbc3d46375a8bdfcf"><th class="cellrowborder" valign="top" width="15.939999999999998%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778168_a56f44abb258a4286be24bb7b628afece"><a name="zh-cn_topic_0059778168_a56f44abb258a4286be24bb7b628afece"></a><a name="zh-cn_topic_0059778168_a56f44abb258a4286be24bb7b628afece"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="60.940000000000005%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778168_a08ee6c1b36b24ef98584c3fa2926fe19"><a name="zh-cn_topic_0059778168_a08ee6c1b36b24ef98584c3fa2926fe19"></a><a name="zh-cn_topic_0059778168_a08ee6c1b36b24ef98584c3fa2926fe19"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="23.119999999999997%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p510352201451"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p510352201451"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p510352201451"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778168_r20e8aa016e00498e8cdd78cb91ae1259"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_a08696e88c5504abeb747084aa8a014e5"><a name="zh-cn_topic_0059778168_a08696e88c5504abeb747084aa8a014e5"></a><a name="zh-cn_topic_0059778168_a08696e88c5504abeb747084aa8a014e5"></a>-d, --debug</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a20acb965470a4011b6a112fba8fdd554"><a name="zh-cn_topic_0059778168_a20acb965470a4011b6a112fba8fdd554"></a><a name="zh-cn_topic_0059778168_a20acb965470a4011b6a112fba8fdd554"></a>从初始化后端打印调试输出信息。初始化后端是gs_initdb用于创建系统表的程序。</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_aab224892323541ebb37429a325f72ae3"><a name="zh-cn_topic_0059778168_aab224892323541ebb37429a325f72ae3"></a><a name="zh-cn_topic_0059778168_aab224892323541ebb37429a325f72ae3"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_rb3cc8dfb4ef147789b26c7bedc388ff1"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p754280414042"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p754280414042"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p754280414042"></a>-L DIRECTORY</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p698742114042"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p698742114042"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p698742114042"></a>gs_initdb初始化数据库所需要的输入文件的路径。通常是不必要的。如果需要明确声明的话，程序会提示输入。</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_a1a814991f59347708f713aed46a2de69"><a name="zh-cn_topic_0059778168_a1a814991f59347708f713aed46a2de69"></a><a name="zh-cn_topic_0059778168_a1a814991f59347708f713aed46a2de69"></a>初始化数据库所需的输入文件路径。不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_r9fd94d4eea5a4fffbe84f595c06ce3e9"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_af0f24cb7bf5b4f1fa1ba5f81fdf53fa2"><a name="zh-cn_topic_0059778168_af0f24cb7bf5b4f1fa1ba5f81fdf53fa2"></a><a name="zh-cn_topic_0059778168_af0f24cb7bf5b4f1fa1ba5f81fdf53fa2"></a>-n, --noclean</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a6e425272494742d5a19f77d99bf796b2"><a name="zh-cn_topic_0059778168_a6e425272494742d5a19f77d99bf796b2"></a><a name="zh-cn_topic_0059778168_a6e425272494742d5a19f77d99bf796b2"></a>不指定该参数时，当gs_initdb发现一些错误妨碍它完成创建数据库的工作时，它将在检测到不能结束工作之前将其创建的所有文件删除。这个选项禁止任何清理动作，因而对调试很有用。</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_a6812e35ed982480493c851dadf1d4e2e"><a name="zh-cn_topic_0059778168_a6812e35ed982480493c851dadf1d4e2e"></a><a name="zh-cn_topic_0059778168_a6812e35ed982480493c851dadf1d4e2e"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_ra211d54b4ac3434eb653905797bace22"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_ab4b1d602d8e64fa7935cc69bdefd63dc"><a name="zh-cn_topic_0059778168_ab4b1d602d8e64fa7935cc69bdefd63dc"></a><a name="zh-cn_topic_0059778168_ab4b1d602d8e64fa7935cc69bdefd63dc"></a>-s, --show</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a5011243f8d344adc983426a76fe5c054"><a name="zh-cn_topic_0059778168_a5011243f8d344adc983426a76fe5c054"></a><a name="zh-cn_topic_0059778168_a5011243f8d344adc983426a76fe5c054"></a>显示内部设置。</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_adb419280469547c786f06333a1d3f20a"><a name="zh-cn_topic_0059778168_adb419280469547c786f06333a1d3f20a"></a><a name="zh-cn_topic_0059778168_adb419280469547c786f06333a1d3f20a"></a>-</p>
</td>
</tr>
<tr id="row17752189113511"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="p1875369123518"><a name="p1875369123518"></a><a name="p1875369123518"></a>-H, --host-ip</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="p97533916351"><a name="p97533916351"></a><a name="p97533916351"></a>openGauss节点node_host初始化。</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="p19754099351"><a name="p19754099351"></a><a name="p19754099351"></a>不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_re847d900ac2c4d18b1a81472b956cc0d"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p938216814042"><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p938216814042"></a><a name="zh-cn_topic_0059778168_zh-cn_topic_0058968084_p938216814042"></a>-V, --version</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_a9f3d5f19499c4294915ffd31b51d521a"><a name="zh-cn_topic_0059778168_a9f3d5f19499c4294915ffd31b51d521a"></a><a name="zh-cn_topic_0059778168_a9f3d5f19499c4294915ffd31b51d521a"></a>打印gs_initdb版本信息，然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_a447b6665afb94838805a0fb78226994a"><a name="zh-cn_topic_0059778168_a447b6665afb94838805a0fb78226994a"></a><a name="zh-cn_topic_0059778168_a447b6665afb94838805a0fb78226994a"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778168_r61b79064dcd94ee5af8f108de8b4b284"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778168_af7a8724ee2da49998933039cbd96bf6d"><a name="zh-cn_topic_0059778168_af7a8724ee2da49998933039cbd96bf6d"></a><a name="zh-cn_topic_0059778168_af7a8724ee2da49998933039cbd96bf6d"></a>-?, --help</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778168_afe016a5c969f40588960864b14bef101"><a name="zh-cn_topic_0059778168_afe016a5c969f40588960864b14bef101"></a><a name="zh-cn_topic_0059778168_afe016a5c969f40588960864b14bef101"></a>显示关于gs_initdb命令行参数的帮助信息，然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778168_acd137c3708c44ec7b5aa19addfc1b627"><a name="zh-cn_topic_0059778168_acd137c3708c44ec7b5aa19addfc1b627"></a><a name="zh-cn_topic_0059778168_acd137c3708c44ec7b5aa19addfc1b627"></a>-</p>
</td>
</tr>
<tr id="row373643318181"><td class="cellrowborder" valign="top" width="15.939999999999998%" headers="mcps1.2.4.1.1 "><p id="p173618339181"><a name="p173618339181"></a><a name="p173618339181"></a>-g</p>
</td>
<td class="cellrowborder" valign="top" width="60.940000000000005%" headers="mcps1.2.4.1.2 "><p id="p197362033171819"><a name="p197362033171819"></a><a name="p197362033171819"></a>针对共享存储的跨AZ容灾数据库实例的初始化，指定共享xlog日志文件的路径。</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.3 "><p id="p0736833111818"><a name="p0736833111818"></a><a name="p0736833111818"></a>指定的共享日志文件路径。不能包括"|", ";", "&amp;", "$", "&lt;", "&gt;", "`", "\\", "!"这几个字符。</p>
</td>
</tr>
</tbody>
</table>

